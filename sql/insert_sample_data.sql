-- ERP Satın Alma ve Stok Yönetimi Portföy Projesi
-- PostgreSQL raporlama modeli için örnek veri seti

INSERT INTO tedarikciler (tedarikci_adi) VALUES
    ('Anadolu Electronics'),
    ('OfficePro Supply'),
    ('TechnoSource B2B'),
    ('Global Office Supplier'),
    ('Akdeniz Computer Systems');

INSERT INTO musteriler (musteri_adi) VALUES
    ('ABC Consulting'),
    ('Mavi Software'),
    ('Delta Academy'),
    ('Northwind Logistics'),
    ('Bright Future Education');

INSERT INTO urunler (urun_adi, maliyet, satis_fiyati, minimum_stok, maksimum_stok) VALUES
    ('Wireless Mouse', 150.00, 250.00, 30, 60),
    ('Mechanical Keyboard', 300.00, 500.00, 30, 50),
    ('24-inch Monitor', 3000.00, 4500.00, 10, 20),
    ('Business Laptop', 18000.00, 24000.00, 5, 15),
    ('Office Printer', 4000.00, 6200.00, 5, 12),
    ('HDMI Cable', 80.00, 150.00, 40, 100),
    ('Office Chair', 1200.00, 2200.00, 10, 25),
    ('Barcode Scanner', 2500.00, 3900.00, 5, 15);

INSERT INTO satin_alma_siparisleri (siparis_no, tedarikci_id, siparis_tarihi, durum)
SELECT 'PO-001', tedarikci_id, DATE '2026-01-10', 'Alındı'
FROM tedarikciler
WHERE tedarikci_adi = 'Anadolu Electronics';

INSERT INTO satin_alma_siparisi_kalemleri (satin_alma_siparisi_id, urun_id, miktar, birim_maliyet)
SELECT sas.satin_alma_siparisi_id, u.urun_id, veri.miktar, veri.birim_maliyet
FROM satin_alma_siparisleri sas
CROSS JOIN (
    VALUES
        ('Wireless Mouse', 30, 150.00),
        ('Mechanical Keyboard', 20, 300.00),
        ('24-inch Monitor', 10, 3000.00)
) AS veri(urun_adi, miktar, birim_maliyet)
JOIN urunler u ON u.urun_adi = veri.urun_adi
WHERE sas.siparis_no = 'PO-001';

INSERT INTO satis_siparisleri (siparis_no, musteri_id, siparis_tarihi, durum)
SELECT 'SO-001', musteri_id, DATE '2026-01-15', 'Teslim Edildi'
FROM musteriler
WHERE musteri_adi = 'ABC Consulting';

INSERT INTO satis_siparisi_kalemleri (satis_siparisi_id, urun_id, miktar, birim_fiyat)
SELECT ss.satis_siparisi_id, u.urun_id, veri.miktar, veri.birim_fiyat
FROM satis_siparisleri ss
CROSS JOIN (
    VALUES
        ('Wireless Mouse', 5, 250.00),
        ('Mechanical Keyboard', 3, 500.00),
        ('24-inch Monitor', 2, 4500.00)
) AS veri(urun_adi, miktar, birim_fiyat)
JOIN urunler u ON u.urun_adi = veri.urun_adi
WHERE ss.siparis_no = 'SO-001';

INSERT INTO satin_alma_siparisleri (siparis_no, tedarikci_id, siparis_tarihi, durum)
SELECT 'PO-002', tedarikci_id, DATE '2026-01-20', 'Alındı'
FROM tedarikciler
WHERE tedarikci_adi = 'OfficePro Supply';

INSERT INTO satin_alma_siparisi_kalemleri (satin_alma_siparisi_id, urun_id, miktar, birim_maliyet)
SELECT sas.satin_alma_siparisi_id, u.urun_id, veri.miktar, veri.birim_maliyet
FROM satin_alma_siparisleri sas
CROSS JOIN (
    VALUES
        ('Wireless Mouse', 20, 150.00),
        ('Mechanical Keyboard', 10, 300.00)
) AS veri(urun_adi, miktar, birim_maliyet)
JOIN urunler u ON u.urun_adi = veri.urun_adi
WHERE sas.siparis_no = 'PO-002';

INSERT INTO stok_hareketleri (urun_id, hareket_tarihi, hareket_tipi, miktar, referans_belge, aciklama)
SELECT u.urun_id, DATE '2026-01-11', 'SATIN_ALMA_GIRIS', veri.miktar, 'PO-001', 'PO-001 satın alma siparişi için mal kabul'
FROM (
    VALUES
        ('Wireless Mouse', 30),
        ('Mechanical Keyboard', 20),
        ('24-inch Monitor', 10)
) AS veri(urun_adi, miktar)
JOIN urunler u ON u.urun_adi = veri.urun_adi;

INSERT INTO stok_hareketleri (urun_id, hareket_tarihi, hareket_tipi, miktar, referans_belge, aciklama)
SELECT u.urun_id, DATE '2026-01-16', 'SATIS_CIKIS', veri.miktar, 'SO-001', 'SO-001 satış siparişi için teslimat doğrulama'
FROM (
    VALUES
        ('Wireless Mouse', 5),
        ('Mechanical Keyboard', 3),
        ('24-inch Monitor', 2)
) AS veri(urun_adi, miktar)
JOIN urunler u ON u.urun_adi = veri.urun_adi;

INSERT INTO stok_hareketleri (urun_id, hareket_tarihi, hareket_tipi, miktar, referans_belge, aciklama)
SELECT u.urun_id, DATE '2026-01-21', 'SATIN_ALMA_GIRIS', veri.miktar, 'PO-002', 'PO-002 satın alma siparişi için mal kabul'
FROM (
    VALUES
        ('Wireless Mouse', 20),
        ('Mechanical Keyboard', 10)
) AS veri(urun_adi, miktar)
JOIN urunler u ON u.urun_adi = veri.urun_adi;
