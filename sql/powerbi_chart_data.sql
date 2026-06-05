-- Bu dosyada dashboard grafiklerine kaynak olacak sorgular var.
-- Sorgular stok, satın alma, satış ve karlılık verilerini ayrı çıktılar halinde topluyor.

-- Power BI Görseli 1: Mevcut Stok Bar Chart
SELECT
    u.urun_adi AS urun,
    COALESCE(SUM(
        CASE
            WHEN sh.hareket_tipi = 'SATIN_ALMA_GIRIS' THEN sh.miktar
            WHEN sh.hareket_tipi = 'SATIS_CIKIS' THEN -sh.miktar
            ELSE 0
        END
    ), 0) AS mevcut_stok,
    u.minimum_stok,
    u.maksimum_stok
FROM urunler u
LEFT JOIN stok_hareketleri sh ON sh.urun_id = u.urun_id
GROUP BY u.urun_id, u.urun_adi, u.minimum_stok, u.maksimum_stok
ORDER BY u.urun_adi;

-- Power BI Görseli 2: Kritik Stok Tablosu
WITH mevcut_stok AS (
    SELECT
        u.urun_id,
        u.urun_adi,
        u.minimum_stok,
        u.maksimum_stok,
        COALESCE(SUM(
            CASE
                WHEN sh.hareket_tipi = 'SATIN_ALMA_GIRIS' THEN sh.miktar
                WHEN sh.hareket_tipi = 'SATIS_CIKIS' THEN -sh.miktar
                ELSE 0
            END
        ), 0) AS mevcut_stok
    FROM urunler u
    LEFT JOIN stok_hareketleri sh ON sh.urun_id = u.urun_id
    GROUP BY u.urun_id, u.urun_adi, u.minimum_stok, u.maksimum_stok
)
SELECT
    urun_adi AS urun,
    mevcut_stok,
    minimum_stok,
    maksimum_stok,
    minimum_stok - mevcut_stok AS eksik_miktar
FROM mevcut_stok
WHERE mevcut_stok < minimum_stok
ORDER BY eksik_miktar DESC, urun;

-- Power BI Görseli 3: Tedarikçi Harcamaları
SELECT
    t.tedarikci_adi AS tedarikci,
    COUNT(DISTINCT sas.satin_alma_siparisi_id) AS satin_alma_siparisi_sayisi,
    SUM(sask.miktar) AS toplam_miktar,
    SUM(sask.miktar * sask.birim_maliyet) AS toplam_harcama
FROM tedarikciler t
JOIN satin_alma_siparisleri sas ON sas.tedarikci_id = t.tedarikci_id
JOIN satin_alma_siparisi_kalemleri sask ON sask.satin_alma_siparisi_id = sas.satin_alma_siparisi_id
GROUP BY t.tedarikci_id, t.tedarikci_adi
ORDER BY toplam_harcama DESC;

-- Power BI Görseli 4: En Çok Satan Ürünler
SELECT
    u.urun_adi AS urun,
    SUM(ssk.miktar) AS satilan_miktar,
    SUM(ssk.miktar * ssk.birim_fiyat) AS satis_geliri
FROM urunler u
JOIN satis_siparisi_kalemleri ssk ON ssk.urun_id = u.urun_id
JOIN satis_siparisleri ss ON ss.satis_siparisi_id = ssk.satis_siparisi_id
WHERE ss.durum = 'Teslim Edildi'
GROUP BY u.urun_id, u.urun_adi
ORDER BY satilan_miktar DESC, satis_geliri DESC;

-- Power BI Görseli 5: Brüt Kar Marjı
SELECT
    u.urun_adi AS urun,
    SUM(ssk.miktar) AS satilan_miktar,
    SUM(ssk.miktar * ssk.birim_fiyat) AS satis_geliri,
    SUM(ssk.miktar * u.maliyet) AS tahmini_maliyet,
    SUM(ssk.miktar * ssk.birim_fiyat) - SUM(ssk.miktar * u.maliyet) AS brut_kar,
    ROUND(
        (
            (SUM(ssk.miktar * ssk.birim_fiyat) - SUM(ssk.miktar * u.maliyet))
            / NULLIF(SUM(ssk.miktar * ssk.birim_fiyat), 0)
        ) * 100,
        2
    ) AS brut_kar_marji_yuzde
FROM urunler u
JOIN satis_siparisi_kalemleri ssk ON ssk.urun_id = u.urun_id
JOIN satis_siparisleri ss ON ss.satis_siparisi_id = ssk.satis_siparisi_id
WHERE ss.durum = 'Teslim Edildi'
GROUP BY u.urun_id, u.urun_adi
ORDER BY brut_kar DESC;

-- Power BI Görseli 6: Yenileme Önerileri
WITH mevcut_stok AS (
    SELECT
        u.urun_id,
        u.urun_adi,
        u.minimum_stok,
        u.maksimum_stok,
        COALESCE(SUM(
            CASE
                WHEN sh.hareket_tipi = 'SATIN_ALMA_GIRIS' THEN sh.miktar
                WHEN sh.hareket_tipi = 'SATIS_CIKIS' THEN -sh.miktar
                ELSE 0
            END
        ), 0) AS mevcut_stok
    FROM urunler u
    LEFT JOIN stok_hareketleri sh ON sh.urun_id = u.urun_id
    GROUP BY u.urun_id, u.urun_adi, u.minimum_stok, u.maksimum_stok
)
SELECT
    urun_adi AS urun,
    mevcut_stok,
    minimum_stok,
    maksimum_stok,
    CASE
        WHEN mevcut_stok < minimum_stok THEN maksimum_stok - mevcut_stok
        ELSE 0
    END AS onerilen_satin_alma_miktari
FROM mevcut_stok
ORDER BY onerilen_satin_alma_miktari DESC, urun;
