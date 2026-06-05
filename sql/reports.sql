-- ERP satın alma ve stok yönetimi raporlama sorguları
-- PostgreSQL raporlama sorguları

-- 1. Mevcut Stok Raporu
SELECT
    u.urun_adi AS "Ürün",
    u.minimum_stok AS "Minimum Stok",
    u.maksimum_stok AS "Maksimum Stok",
    COALESCE(SUM(
        CASE
            WHEN sh.hareket_tipi = 'SATIN_ALMA_GIRIS' THEN sh.miktar
            WHEN sh.hareket_tipi = 'SATIS_CIKIS' THEN -sh.miktar
            ELSE 0
        END
    ), 0) AS "Mevcut Stok"
FROM urunler u
LEFT JOIN stok_hareketleri sh ON sh.urun_id = u.urun_id
GROUP BY u.urun_id, u.urun_adi, u.minimum_stok, u.maksimum_stok
ORDER BY u.urun_adi;

-- 2. Kritik Stok Raporu
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
    urun_adi AS "Ürün",
    mevcut_stok AS "Mevcut Stok",
    minimum_stok AS "Minimum Stok",
    maksimum_stok AS "Maksimum Stok",
    minimum_stok - mevcut_stok AS "Eksik Miktar"
FROM mevcut_stok
WHERE mevcut_stok < minimum_stok
ORDER BY "Eksik Miktar" DESC, "Ürün";

-- 3. Tedarikçi Harcama Raporu
SELECT
    t.tedarikci_adi AS "Tedarikçi",
    COUNT(DISTINCT sas.satin_alma_siparisi_id) AS "Satın Alma Siparişi Sayısı",
    SUM(sask.miktar) AS "Toplam Satın Alınan Miktar",
    SUM(sask.miktar * sask.birim_maliyet) AS "Toplam Harcama"
FROM tedarikciler t
JOIN satin_alma_siparisleri sas ON sas.tedarikci_id = t.tedarikci_id
JOIN satin_alma_siparisi_kalemleri sask ON sask.satin_alma_siparisi_id = sas.satin_alma_siparisi_id
GROUP BY t.tedarikci_id, t.tedarikci_adi
ORDER BY "Toplam Harcama" DESC;

-- 4. En Çok Satan Ürünler Raporu
SELECT
    u.urun_adi AS "Ürün",
    SUM(ssk.miktar) AS "Satılan Miktar",
    SUM(ssk.miktar * ssk.birim_fiyat) AS "Satış Geliri"
FROM urunler u
JOIN satis_siparisi_kalemleri ssk ON ssk.urun_id = u.urun_id
JOIN satis_siparisleri ss ON ss.satis_siparisi_id = ssk.satis_siparisi_id
WHERE ss.durum = 'Teslim Edildi'
GROUP BY u.urun_id, u.urun_adi
ORDER BY "Satılan Miktar" DESC, "Satış Geliri" DESC;

-- 5. Stok Hareket Geçmişi
SELECT
    sh.hareket_tarihi AS "Hareket Tarihi",
    u.urun_adi AS "Ürün",
    sh.hareket_tipi AS "Hareket Tipi",
    CASE
        WHEN sh.hareket_tipi = 'SATIN_ALMA_GIRIS' THEN sh.miktar
        WHEN sh.hareket_tipi = 'SATIS_CIKIS' THEN -sh.miktar
        ELSE sh.miktar
    END AS "İşaretli Miktar",
    sh.miktar AS "Hareket Miktarı",
    sh.referans_belge AS "Referans Belge",
    sh.aciklama AS "Açıklama"
FROM stok_hareketleri sh
JOIN urunler u ON u.urun_id = sh.urun_id
ORDER BY sh.hareket_tarihi, sh.stok_hareketi_id;

-- 6. Satın Alma Siparişi Durum Raporu
SELECT
    sas.durum AS "Durum",
    COUNT(*) AS "Satın Alma Siparişi Sayısı",
    SUM(sask.miktar * sask.birim_maliyet) AS "Toplam Sipariş Değeri"
FROM satin_alma_siparisleri sas
JOIN satin_alma_siparisi_kalemleri sask ON sask.satin_alma_siparisi_id = sas.satin_alma_siparisi_id
GROUP BY sas.durum
ORDER BY sas.durum;

-- 7. Satış Siparişi Durum Raporu
SELECT
    ss.durum AS "Durum",
    COUNT(*) AS "Satış Siparişi Sayısı",
    SUM(ssk.miktar * ssk.birim_fiyat) AS "Toplam Satış Değeri"
FROM satis_siparisleri ss
JOIN satis_siparisi_kalemleri ssk ON ssk.satis_siparisi_id = ss.satis_siparisi_id
GROUP BY ss.durum
ORDER BY ss.durum;

-- 8. Ürün Bazlı Brüt Kar Marjı
SELECT
    u.urun_adi AS "Ürün",
    SUM(ssk.miktar) AS "Satılan Miktar",
    SUM(ssk.miktar * ssk.birim_fiyat) AS "Satış Geliri",
    SUM(ssk.miktar * u.maliyet) AS "Tahmini Maliyet",
    SUM(ssk.miktar * ssk.birim_fiyat) - SUM(ssk.miktar * u.maliyet) AS "Brüt Kar",
    ROUND(
        (
            (SUM(ssk.miktar * ssk.birim_fiyat) - SUM(ssk.miktar * u.maliyet))
            / NULLIF(SUM(ssk.miktar * ssk.birim_fiyat), 0)
        ) * 100,
        2
    ) AS "Brüt Kar Marjı (%)"
FROM urunler u
JOIN satis_siparisi_kalemleri ssk ON ssk.urun_id = u.urun_id
JOIN satis_siparisleri ss ON ss.satis_siparisi_id = ssk.satis_siparisi_id
WHERE ss.durum = 'Teslim Edildi'
GROUP BY u.urun_id, u.urun_adi
ORDER BY "Brüt Kar" DESC;

-- 9. Yenileme Önerisi Raporu
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
    urun_adi AS "Ürün",
    mevcut_stok AS "Mevcut Stok",
    minimum_stok AS "Minimum Stok",
    maksimum_stok AS "Maksimum Stok",
    CASE
        WHEN mevcut_stok < minimum_stok THEN maksimum_stok - mevcut_stok
        ELSE 0
    END AS "Önerilen Satın Alma Miktarı"
FROM mevcut_stok
ORDER BY "Önerilen Satın Alma Miktarı" DESC, "Ürün";
