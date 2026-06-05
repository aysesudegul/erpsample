# SQL Rehberi

## Amaç

Bu klasörde satın alma ve stok yönetimi süreci için hazırladığım PostgreSQL raporlama modelini tuttum. Odoo'daki süreci SQL tarafında anlaşılır bir yapıyla temsil etmek istedim.

SQL dosyaları canlı Odoo veritabanına bağlanmaz ve Odoo kurulumunu değiştirmez. Buradaki yapı, örnek ERP sürecini analiz etmek için hazırlanmış ayrı bir raporlama modelidir.

## Dosyalar

| Dosya | Ne için kullanıyorum? |
| --- | --- |
| `create_tables.sql` | Raporlama modelindeki tabloları oluşturmak için. |
| `insert_sample_data.sql` | Tedarikçi, müşteri, ürün, sipariş ve stok hareketi örnek verilerini eklemek için. |
| `reports.sql` | Satın alma, stok, satış ve karlılık raporları. |
| `powerbi_chart_data.sql` | Power BI görsellerine kaynak olacak daha odaklı sorgular için. |

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

Örnek veriler yüklendikten sonra mevcut stok raporunda şu sonucu bekliyorum:

| Ürün | Mevcut Stok |
| --- | ---: |
| Wireless Mouse | 45 |
| Mechanical Keyboard | 27 |
| 24-inch Monitor | 8 |

Diğer ürünler ana veri tablosunda var, fakat örnek işlem setinde onlar için stok hareketi eklemedim.

## Rapor Listesi

`reports.sql` içinde şu raporları hazırladım:

- Mevcut stok raporu
- Kritik stok raporu
- Tedarikçi harcama raporu
- En çok satan ürünler raporu
- Stok hareket geçmişi
- Satın alma siparişi durum raporu
- Satış siparişi durum raporu
- Ürün bazlı brüt kar marjı
- Yenileme önerisi raporu

## Yenileme Mantığı

Yenileme önerisini basit bir kuralla hesapladım:

```text
Eğer mevcut stok minimum stoktan düşükse:
    önerilen satın alma miktarı = maksimum stok - mevcut stok
Aksi halde:
    önerilen satın alma miktarı = 0
```

Bu mantık, hangi ürünler için yeniden satın alma ihtiyacı olduğunu hızlıca görmek için yeterli bir başlangıç sağlıyor.
