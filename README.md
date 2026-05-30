# ERP Satın Alma ve Stok Yönetimi Portföy Projesi

## Proje Amacı

Bu repo, Odoo ERP üzerinde uygulanmış uçtan uca bir satın alma ve stok yönetimi portföy projesidir. Projede tedarikçi, müşteri ve ürün ana verileri oluşturulmuş; satın alma siparişi, mal kabul, satış siparişi, teslimat ve stok hareketi süreçleri tamamlanmıştır.

Çalışma, Odoo'da yürütülen ERP sürecini PostgreSQL raporları ve Power BI dashboard veri setleriyle destekler. Amaç, junior SAP MM danışmanı, ERP danışmanı, ERP destek uzmanı veya iş analisti pozisyonları için gösterilebilir, düzenli ve profesyonel bir GitHub portföy çıktısı hazırlamaktır.

> Not: Bu repo doğrudan Odoo veritabanına bağlanmaz ve yerel Odoo kurulumunu değiştirmez. Odoo'da uygulanan iş süreci, ayrıca hazırlanmış PostgreSQL raporlama tabloları ve Power BI chart data dosyalarıyla dokümante edilmiştir.

## İş Senaryosu

NovaTech Office Supplies, ofis ekipmanları satan küçük bir şirkettir. Şirket tedarikçilerden ürün satın alır, ürünleri stokta tutar ve kurumsal müşterilere satış yapar.

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

## Odoo'da Uygulanan Süreçler

Bu portföy projesinde Odoo üzerinde aşağıdaki ERP akışı uygulanmıştır:

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

## Odoo Süreç Özeti

Odoo tarafında süreç Contacts, Purchase, Inventory ve Sales modülleriyle yürütülmüştür.

Önce tedarikçi, müşteri ve ürün ana verileri hazırlanmıştır. Ardından tedarikçiler için satın alma siparişleri oluşturulmuş ve gelen ürünler mal kabul işlemiyle stoğa alınmıştır. Daha sonra müşteri satış siparişi hazırlanmış, teslimat doğrulanmış ve stok çıkışı gerçekleşmiştir.

Bu akış, ERP sistemlerinde satın alma ve stok yönetiminin nasıl birbirine bağlandığını gösterir: ana veri, işlem belgesi, stok hareketi ve raporlama aynı iş sürecinin parçalarıdır.

## PostgreSQL Raporlama

SQL klasörü, Odoo'da uygulanan süreci temsil eden ayrı bir PostgreSQL raporlama modeli içerir. Bu yapı Odoo veritabanına bağlanmadan, portföy ve analiz amacıyla hazırlanmıştır.

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

Power BI klasörü, bu projeyi bir BI portföy çıktısına dönüştürmek için hazırlanmıştır.

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

## SAP MM İlişkisi

Proje Odoo üzerinde uygulanmış olsa da süreç SAP MM kavramlarıyla doğrudan ilişkilidir.

| Odoo / Proje Alanı | SAP MM Karşılığı |
| --- | --- |
| Ürün ana verisi | Material Master |
| Tedarikçi ana verisi | Vendor Master / Business Partner |
| Satın alma siparişi | Purchase Order |
| Mal kabul | Goods Receipt |
| Stok hareketi | Material Document / Stock Movement |
| Minimum ve maksimum stok | Reorder Point / Replenishment Planning |
| Satın alma ve stok raporları | Procurement and Inventory Analytics |

Bu nedenle proje, SAP MM ve ERP danışmanlığına geçiş için güçlü bir portföy örneği olarak sunulabilir.

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
│   ├── project_summary.md
│   └── portfolio_pitch.md
├── powerbi/
│   ├── README.md
│   └── chart_data/
│       ├── mevcut_stok.csv
│       ├── kritik_stok.csv
│       ├── tedarikci_harcamalari.csv
│       ├── en_cok_satan_urunler.csv
│       ├── brut_kar_marji.csv
│       └── yenileme_onerileri.csv
├── sql/
│   ├── create_tables.sql
│   ├── insert_sample_data.sql
│   ├── reports.sql
│   ├── powerbi_chart_data.sql
│   └── README.md
└── screenshots/
    └── README.md
```

## SQL Dosyaları Nasıl Kullanılır?

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

## Sunum Kanıtları İçin Ekran Görüntüleri

Portföy sunumunu güçlendirmek için `screenshots/` klasörüne aşağıdaki Odoo ve rapor çıktıları eklenebilir:

- Tedarikçi ana veri ekranı
- Müşteri ana veri ekranı
- Ürün ana veri ekranı
- PO-001 satın alma siparişi
- PO-001 mal kabul ekranı
- Odoo stok hareketleri
- SO-001 satış siparişi
- SO-001 teslimat doğrulama ekranı
- PostgreSQL mevcut stok raporu
- Power BI dashboard ekranı

## Portföy Değeri

Bu proje, ERP süreç anlayışını teknik raporlama becerisiyle birleştirir. Odoo üzerinde uygulanan satın alma ve stok yönetimi süreci, PostgreSQL raporları ve Power BI chart data dosyalarıyla analiz edilebilir hale getirilmiştir.

Proje özellikle şu rollere uygun bir portföy çıktısıdır:

- Junior SAP MM Consultant
- Junior ERP Consultant
- ERP Support Specialist
- Business Analyst
- Procurement Analyst
- Inventory Analyst

## Türkçe CV Açıklaması

Odoo ERP üzerinde satın alma ve stok yönetimi sürecini uçtan uca uyguladım. Tedarikçi, müşteri ve ürün ana verilerini oluşturdum; satın alma siparişleri, mal kabul, satış siparişleri ve teslimat süreçlerini tamamladım. Stok hareketlerini PostgreSQL üzerinde raporladım ve Power BI dashboard tasarımı için grafik veri setleri hazırladım. Süreci SAP MM kavramlarıyla eşleştirerek portföy projesi olarak dokümante ettim.

## Mülakatta Anlatılabilecek Kısa Pitch

Bu projede küçük bir ofis ekipmanları şirketi için Odoo üzerinde satın alma ve stok yönetimi sürecini uçtan uca uyguladım. Tedarikçi, müşteri ve ürün ana verilerini oluşturdum; satın alma siparişlerini mal kabul ile stoğa aldım, satış siparişlerini teslimatla tamamladım ve stok hareketlerini takip ettim. Daha sonra aynı süreci PostgreSQL üzerinde raporlanabilir hale getirdim ve Power BI için grafik veri setleri hazırladım. Projeyi SAP MM kavramlarıyla eşleştirerek ERP danışmanlığı portföyümde sunulabilir bir case study haline getirdim.
