-- ERP Satın Alma ve Stok Yönetimi Portföy Projesi
-- PostgreSQL raporlama veritabanı tablo yapısı

DROP TABLE IF EXISTS stok_hareketleri;
DROP TABLE IF EXISTS satis_siparisi_kalemleri;
DROP TABLE IF EXISTS satis_siparisleri;
DROP TABLE IF EXISTS satin_alma_siparisi_kalemleri;
DROP TABLE IF EXISTS satin_alma_siparisleri;
DROP TABLE IF EXISTS urunler;
DROP TABLE IF EXISTS musteriler;
DROP TABLE IF EXISTS tedarikciler;

CREATE TABLE tedarikciler (
    tedarikci_id SERIAL PRIMARY KEY,
    tedarikci_adi VARCHAR(150) NOT NULL UNIQUE,
    ulke VARCHAR(100) DEFAULT 'Türkiye',
    olusturulma_tarihi TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE musteriler (
    musteri_id SERIAL PRIMARY KEY,
    musteri_adi VARCHAR(150) NOT NULL UNIQUE,
    ulke VARCHAR(100) DEFAULT 'Türkiye',
    olusturulma_tarihi TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE urunler (
    urun_id SERIAL PRIMARY KEY,
    urun_adi VARCHAR(150) NOT NULL UNIQUE,
    maliyet NUMERIC(12, 2) NOT NULL CHECK (maliyet >= 0),
    satis_fiyati NUMERIC(12, 2) NOT NULL CHECK (satis_fiyati >= 0),
    minimum_stok INTEGER NOT NULL CHECK (minimum_stok >= 0),
    maksimum_stok INTEGER NOT NULL CHECK (maksimum_stok >= minimum_stok),
    aktif BOOLEAN NOT NULL DEFAULT TRUE,
    olusturulma_tarihi TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE satin_alma_siparisleri (
    satin_alma_siparisi_id SERIAL PRIMARY KEY,
    siparis_no VARCHAR(30) NOT NULL UNIQUE,
    tedarikci_id INTEGER NOT NULL REFERENCES tedarikciler(tedarikci_id),
    siparis_tarihi DATE NOT NULL,
    durum VARCHAR(30) NOT NULL CHECK (durum IN ('Taslak', 'Onaylandı', 'Alındı', 'İptal')),
    olusturulma_tarihi TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE satin_alma_siparisi_kalemleri (
    satin_alma_siparisi_kalemi_id SERIAL PRIMARY KEY,
    satin_alma_siparisi_id INTEGER NOT NULL REFERENCES satin_alma_siparisleri(satin_alma_siparisi_id) ON DELETE CASCADE,
    urun_id INTEGER NOT NULL REFERENCES urunler(urun_id),
    miktar INTEGER NOT NULL CHECK (miktar > 0),
    birim_maliyet NUMERIC(12, 2) NOT NULL CHECK (birim_maliyet >= 0),
    olusturulma_tarihi TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (satin_alma_siparisi_id, urun_id)
);

CREATE TABLE satis_siparisleri (
    satis_siparisi_id SERIAL PRIMARY KEY,
    siparis_no VARCHAR(30) NOT NULL UNIQUE,
    musteri_id INTEGER NOT NULL REFERENCES musteriler(musteri_id),
    siparis_tarihi DATE NOT NULL,
    durum VARCHAR(30) NOT NULL CHECK (durum IN ('Taslak', 'Onaylandı', 'Teslim Edildi', 'İptal')),
    olusturulma_tarihi TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE satis_siparisi_kalemleri (
    satis_siparisi_kalemi_id SERIAL PRIMARY KEY,
    satis_siparisi_id INTEGER NOT NULL REFERENCES satis_siparisleri(satis_siparisi_id) ON DELETE CASCADE,
    urun_id INTEGER NOT NULL REFERENCES urunler(urun_id),
    miktar INTEGER NOT NULL CHECK (miktar > 0),
    birim_fiyat NUMERIC(12, 2) NOT NULL CHECK (birim_fiyat >= 0),
    olusturulma_tarihi TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (satis_siparisi_id, urun_id)
);

CREATE TABLE stok_hareketleri (
    stok_hareketi_id SERIAL PRIMARY KEY,
    urun_id INTEGER NOT NULL REFERENCES urunler(urun_id),
    hareket_tarihi DATE NOT NULL,
    hareket_tipi VARCHAR(30) NOT NULL CHECK (hareket_tipi IN ('SATIN_ALMA_GIRIS', 'SATIS_CIKIS')),
    miktar INTEGER NOT NULL CHECK (miktar > 0),
    referans_belge VARCHAR(30) NOT NULL,
    aciklama TEXT,
    olusturulma_tarihi TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_satin_alma_siparisleri_tedarikci_id ON satin_alma_siparisleri(tedarikci_id);
CREATE INDEX idx_satin_alma_kalemleri_urun_id ON satin_alma_siparisi_kalemleri(urun_id);
CREATE INDEX idx_satis_siparisleri_musteri_id ON satis_siparisleri(musteri_id);
CREATE INDEX idx_satis_kalemleri_urun_id ON satis_siparisi_kalemleri(urun_id);
CREATE INDEX idx_stok_hareketleri_urun_id ON stok_hareketleri(urun_id);
CREATE INDEX idx_stok_hareketleri_referans_belge ON stok_hareketleri(referans_belge);
