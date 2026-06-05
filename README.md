ERP Satın Alma ve Stok Yönetimi Projesi

Proje Amacı

Bu repo, Odoo ERP üzerinde uygulanmış uçtan uca bir satın alma ve stok yönetimi çalışmasını içerir. Projede tedarikçi, müşteri ve ürün ana verileri oluşturulmuş; satın alma siparişi, mal kabul, satış siparişi, teslimat ve stok hareketi süreçleri tamamlanmıştır.

Çalışma, Odoo'da yürütülen ERP sürecini PostgreSQL raporları ve Power BI dashboard veri setleriyle destekler. Amaç, satın alma ve stok sürecinin ERP içinde nasıl ilerlediğini ve raporlama tarafına nasıl taşındığını göstermektir.

Not: Bu repo doğrudan Odoo veritabanına bağlanmaz ve yerel Odoo kurulumunu değiştirmez. Odoo'da uygulanan iş süreci, ayrıca hazırlanmış PostgreSQL raporlama tabloları ve Power BI chart data dosyalarıyla dokümante edilmiştir.

İş Senaryosu

NovaTech Office Supplies, ofis ekipmanları satan küçük bir şirket. Şirket tedarikçilerden ürün satın alır, ürünleri stokta tutar ve kurumsal müşterilere satış yapar.

Şirketin yönetmesi gereken temel süreçler:

- Tedarikçi ana verileri
- Müşteri ana verileri
- Ürün ana verileri
- Satın alma siparişleri
- Mal kabul işlemleri
- Stok girişleri
- Satış siparişleri
- Teslimat doğrulama
- Stok çıkışları
- Stok hareket takibi
- Kritik stok ve yenileme analizi
- SQL ve Power BI ile raporlama

## Kullanılan Araçlar

- Odoo ERP
- PostgreSQL
- SQL
- pgAdmin
- Power BI
- GitHub
- Markdown
- Mermaid diyagramları

Odoo'da Uygulanan Süreçler

Odoo üzerinde aşağıdaki ERP akışı uygulanmıştır:

1. Tedarikçi ana verilerinin oluşturulması
2. Müşteri ana verilerinin oluşturulması
3. Ürün ana verilerinin oluşturulması
4. Satın Alma Siparişi oluşturulması
5. Mal Kabul / Ürün Kabul işlemi
6. Stok artışının izlenmesi
7. Satış Siparişi oluşturulması
8. Teslimat doğrulama
9. Stok azalışının izlenmesi
10. Stok hareketlerinin takip edilmesi
11. Kritik stok ve yenileme analizi
12. SQL ve Power BI raporlama çıktılarının hazırlanması

Odoo Süreç Özeti

Odoo tarafında süreç Contacts, Purchase, Inventory ve Sales modülleriyle yürütülmüştür.

Önce tedarikçi, müşteri ve ürün ana verileri hazırlanmıştır. Ardından tedarikçiler için satın alma siparişleri oluşturulmuş ve gelen ürünler mal kabul işlemiyle stoğa alınmıştır. Daha sonra müşteri satış siparişi hazırlanmış, teslimat doğrulanmış ve stok çıkışı gerçekleşmiştir.

Bu akış, ERP sistemlerinde satın alma ve stok yönetiminin nasıl birbirine bağlandığını gösterir: ana veri, işlem belgesi, stok hareketi ve raporlama aynı iş sürecinin parçalarıdır.

PostgreSQL Raporlama

SQL klasörü, Odoo'da uygulanan süreci temsil eden ayrı bir PostgreSQL raporlama modeli içerir. Bu yapı Odoo veritabanına bağlanmadan, analiz ve raporlama amacıyla hazırlanmıştır.

Hazırlanan SQL raporları:

- Mevcut Stok Raporu
- Kritik Stok Raporu
- Tedarikçi Harcama Raporu
- En Çok Satan Ürünler Raporu
- Stok Hareket Geçmişi
- Satın Alma Siparişi Durum Raporu
- Satış Siparişi Durum Raporu
- Ürün Bazlı Brüt Kar Marjı
- Yenileme Önerisi Raporu

Stok hesapları `stok_hareketleri` tablosu üzerinden yapılır. Mal kabul hareketleri `SATIN_ALMA_GIRIS`, teslimat hareketleri ise `SATIS_CIKIS` olarak tutulur.

## Power BI Dashboard Entegrasyonu

Power BI klasörü, dashboard görsellerinde kullanılacak veri setlerini içerir.

Power BI tarafında hedeflenen dashboard görselleri:

- Ürün bazlı mevcut stok bar chart
- Kritik stok tablosu
- Tedarikçi harcama grafiği
- En çok satan ürünler grafiği
- Ürün bazlı brüt kar marjı grafiği
- Yenileme önerileri tablosu
- Stok hareketleri zaman çizelgesi

Power BI için iki kullanım yöntemi desteklenir:

1. PostgreSQL'e bağlanıp `sql/powerbi_chart_data.sql` içindeki sorguları kullanmak
2. `powerbi/chart_data/` klasöründeki hazır CSV dosyalarını Power BI'a aktarmak

SAP MM İlişkisi

Proje Odoo üzerinde uygulanmış olsa da süreç SAP MM kavramlarıyla doğrudan ilişkilidir.

| Odoo / Proje Alanı | SAP MM Karşılığı |
| Ürün ana verisi | Material Master |
| Tedarikçi ana verisi | Vendor Master / Business Partner |
| Satın alma siparişi | Purchase Order |
| Mal kabul | Goods Receipt |
| Stok hareketi | Material Document / Stock Movement |
| Minimum ve maksimum stok | Reorder Point / Replenishment Planning |
| Satın alma ve stok raporları | Procurement and Inventory Analytics |

Bu nedenle proje, SAP MM tarafındaki satın alma ve stok yönetimi kavramlarıyla ilişkilendirilebilir.

## Repo Yapısı

```text
.
├── README.md
├── docs/
│   ├── business_requirements.md
│   ├── process_flow.md
│   ├── sap_mm_mapping.md
│   ├── test_cases.md
│   ├── user_guide.md
│   └── project_summary.md
├── powerbi/
│   ├── README.md
│   └── chart_data/
│       ├── mevcut_stok.csv
│       ├── kritik_stok.csv
│       ├── tedarikci_harcamalari.csv
│       ├── en_cok_satan_urunler.csv
│       ├── brut_kar_marji.csv
│       └── yenileme_onerileri.csv
└── sql/
│   ├── create_tables.sql
│   ├── insert_sample_data.sql
│   ├── reports.sql
│   ├── powerbi_chart_data.sql
│   └── README.md
```

SQL Dosyaları Nasıl Kullanılır?

1. PostgreSQL içinde yeni bir veritabanı oluşturun. Örnek: `erp_satin_alma_stok`.
2. pgAdmin veya başka bir PostgreSQL aracı açın.
3. Önce `sql/create_tables.sql` dosyasını çalıştırın.
4. Sonra `sql/insert_sample_data.sql` dosyasını çalıştırın.
5. Raporlar için `sql/reports.sql` dosyasındaki sorguları çalıştırın.
6. Power BI grafikleri için `sql/powerbi_chart_data.sql` dosyasındaki sorguları veya hazır CSV dosyalarını kullanın.

Örnek işlemlerden sonra beklenen stok sonuçları:

| Ürün | Mevcut Stok |
| --- | ---: |
| Wireless Mouse | 45 |
| Mechanical Keyboard | 27 |
| 24-inch Monitor | 8 |
