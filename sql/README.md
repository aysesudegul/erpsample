# SQL Rehberi

## Amaç

Bu klasör, ERP satın alma ve stok yönetimi çalışması için hazırlanmış PostgreSQL raporlama modelini içerir.

SQL dosyaları Odoo veritabanına bağlanmaz ve Odoo kurulumunu değiştirmez. Odoo'da uygulanan süreç, analiz amacıyla ayrı bir PostgreSQL veri modeli üzerinde temsil edilir.

## Dosyalar

| Dosya | Amaç |
| --- | --- |
| `create_tables.sql` | Türkçe anlamlı tablo ve kolon adlarıyla raporlama modelini oluşturur. |
| `insert_sample_data.sql` | Tedarikçi, müşteri, ürün, satın alma siparişi, satış siparişi ve stok hareketi verilerini ekler. |
| `reports.sql` | Satın alma, stok, satış ve karlılık raporlarını içerir. |
| `powerbi_chart_data.sql` | Power BI görselleri için kullanılabilecek odaklı sorguları içerir. |

## Çalıştırma Sırası

1. PostgreSQL içinde yeni bir veritabanı oluşturun:

```sql
CREATE DATABASE erp_satin_alma_stok;
```

2. pgAdmin içinde bu veritabanına bağlanın.
3. `create_tables.sql` dosyasını çalıştırın.
4. `insert_sample_data.sql` dosyasını çalıştırın.
5. `reports.sql` dosyasındaki rapor sorgularını çalıştırın.
6. Power BI için `powerbi_chart_data.sql` dosyasındaki sorguları kullanın.

## Beklenen Stok Sonucu

Örnek veriler yüklendikten sonra Mevcut Stok Raporu aşağıdaki sonuçları göstermelidir:

| Ürün | Mevcut Stok |
| --- | ---: |
| Wireless Mouse | 45 |
| Mechanical Keyboard | 27 |
| 24-inch Monitor | 8 |

Diğer ürünler ürün ana verisinde bulunur, ancak örnek işlem setinde stok hareketleri yoktur.

## Rapor Listesi

`reports.sql` dosyasında şu raporlar bulunur:

- Mevcut Stok Raporu
- Kritik Stok Raporu
- Tedarikçi Harcama Raporu
- En Çok Satan Ürünler Raporu
- Stok Hareket Geçmişi
- Satın Alma Siparişi Durum Raporu
- Satış Siparişi Durum Raporu
- Ürün Bazlı Brüt Kar Marjı
- Yenileme Önerisi Raporu

## Yenileme Mantığı

Yenileme önerisi şu kurala göre hesaplanır:

```text
Eğer mevcut stok minimum stoktan düşükse:
    önerilen satın alma miktarı = maksimum stok - mevcut stok
Aksi halde:
    önerilen satın alma miktarı = 0
```

Bu mantık, satın alma ve stok planlama kararlarını desteklemek için basit ve anlaşılır bir yöntem sağlar.
