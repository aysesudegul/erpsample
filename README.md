ERP Satın Alma ve Stok Yönetimi Projesi

Proje Amacı

Bu projede küçük bir ofis ekipmanları şirketi için satın alma, stok ve satış sürecini uçtan uca kurguladım. Süreci Odoo ERP mantığına göre düşündüm; tedarikçi, müşteri ve ürün bilgilerini oluşturdum, satın alma siparişi ve mal kabul adımlarını tamamladım, ardından satış ve teslimat sonrası stok çıkışını takip ettim.

Sadece ERP adımlarını yazmakla kalmadım. Bu sürecin raporlanabilir olması için ayrı bir PostgreSQL modeli hazırladım ve Power BI tarafında kullanılabilecek CSV veri setleri ekledim. Böylece süreç, veri tabanı ve dashboard tarafı aynı örnek senaryo içinde birbirine bağlandı.

Not: Bu repo doğrudan canlı bir Odoo veritabanına bağlanmaz. Odoo'da yapılan süreci temsil eden örnek PostgreSQL tabloları, SQL raporları ve Power BI veri dosyaları içerir.

Web üzerinden gezilebilen küçük simulator uygulamasını da `web-app/` klasörüne ekledim. Ana dokümanlar, SQL dosyaları ve dashboard verileri aynı repo içinde duruyor.

İş Senaryosu

Örnek şirket olarak NovaTech Office Supplies adında küçük bir ofis ekipmanları şirketi kullandım. Bu şirket tedarikçilerden ürün satın alıyor, ürünleri stokta tutuyor ve kurumsal müşterilere satış yapıyor.

Bu senaryoda takip ettiğim ana süreçler:

- Tedarikçi bilgileri
- Müşteri bilgileri
- Ürün bilgileri
- Satın alma siparişleri
- Mal kabul işlemleri
- Stok girişleri
- Satış siparişleri
- Teslimat doğrulama
- Stok çıkışları
- Stok hareket takibi
- Kritik stok ve yenileme ihtiyacı
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
- React
- Vite

Odoo'da Kurguladığım Süreç

Projede Odoo tarafını şu sırayla ele aldım:

1. Önce tedarikçi kayıtlarını oluşturdum.
2. Sonra müşteri kayıtlarını hazırladım.
3. Ürünleri maliyet, satış fiyatı, minimum stok ve maksimum stok bilgileriyle tanımladım.
4. Tedarikçiler için satın alma siparişleri oluşturdum.
5. Ürünler geldiğinde mal kabul işlemini yaptım.
6. Mal kabul sonrası stok artışını takip ettim.
7. Müşteri için satış siparişi oluşturdum.
8. Teslimatı doğruladım.
9. Teslimat sonrası stok azalışını izledim.
10. Stok hareketlerini raporlanabilir hale getirdim.
11. Kritik stok ve yenileme önerisi raporlarını hazırladım.

Odoo Süreç Özeti

Odoo tarafında Contacts, Purchase, Inventory ve Sales modüllerini baz aldım. Süreç tedarikçi ve ürün ana verisiyle başlıyor, satın alma siparişi ve mal kabul ile devam ediyor. Satış tarafında ise müşteri siparişi ve teslimat sonrası stoktan çıkış oluşuyor.

Bu akış bana ERP sistemlerinde ana veri, işlem belgesi, stok hareketi ve raporlamanın birbirinden kopuk olmadığını gösterdi. Bir satın alma siparişi sadece belge olarak kalmıyor; mal kabul yapıldığında stok etkileniyor, stok hareketleri oluşuyor ve bu veriler raporlara temel oluyor.

PostgreSQL Raporlama

Odoo sürecini ayrı bir PostgreSQL raporlama modeliyle temsil ettim. Burada amacım canlı Odoo veritabanına bağlanmak değil, ERP mantığını SQL tarafında anlaşılır bir veri modeline çevirmekti.

Hazırladığım SQL raporları:

- Mevcut stok raporu
- Kritik stok raporu
- Tedarikçi harcama raporu
- En çok satan ürünler raporu
- Stok hareket geçmişi
- Satın alma siparişi durum raporu
- Satış siparişi durum raporu
- Ürün bazlı brüt kar marjı
- Yenileme önerisi raporu

Stok hesabını `stok_hareketleri` tablosu üzerinden yaptım. Mal kabul hareketlerini `SATIN_ALMA_GIRIS`, teslimat hareketlerini de `SATIS_CIKIS` olarak tuttum.

## Power BI Dashboard Entegrasyonu

Power BI için ayrı CSV dosyaları hazırladım. Bu dosyalar dashboard üzerinde stok, satın alma, satış ve karlılık analizlerini göstermek için kullanılabilir.

Dashboard tarafında hedeflediğim görseller:

- Ürün bazlı mevcut stok grafiği
- Kritik stok tablosu
- Tedarikçi harcama grafiği
- En çok satan ürünler grafiği
- Ürün bazlı brüt kar marjı grafiği
- Yenileme önerileri tablosu
- Stok hareketleri zaman çizelgesi

Power BI için iki kullanım yolu bıraktım:

1. PostgreSQL'e bağlanıp `sql/powerbi_chart_data.sql` içindeki sorguları kullanmak
2. `powerbi/chart_data/` klasöründeki hazır CSV dosyalarını Power BI'a aktarmak

SAP MM ile Bağlantısı

Projeyi Odoo üzerinden kurguladım ama süreç SAP MM tarafındaki temel kavramlarla da örtüşüyor.

| Odoo / Proje Alanı | SAP MM Karşılığı |
| --- | --- |
| Ürün ana verisi | Material Master |
| Tedarikçi ana verisi | Vendor Master / Business Partner |
| Satın alma siparişi | Purchase Order |
| Mal kabul | Goods Receipt |
| Stok hareketi | Material Document / Stock Movement |
| Minimum ve maksimum stok | Reorder Point / Replenishment Planning |
| Satın alma ve stok raporları | Procurement and Inventory Analytics |

Bu yüzden projeyi sadece Odoo örneği gibi değil, genel ERP satın alma ve stok yönetimi mantığını anlatan bir çalışma olarak hazırladım.

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
├── sql/
│   ├── create_tables.sql
│   ├── insert_sample_data.sql
│   ├── reports.sql
│   ├── powerbi_chart_data.sql
│   └── README.md
└── web-app/
    ├── README.md
    ├── package.json
    ├── index.html
    └── src/
```

## Web Uygulaması

Simulator ekranını çalıştırmak için:

```bash
cd web-app
npm install
npm run dev
```

Uygulama açıldığında satın alma, satış, stok hareketi, kritik stok ve SAP MM eşleştirme ekranlarını gezebilirsin.

## Dosyalar

- `docs/`: süreç, test ve SAP MM notları
- `sql/`: PostgreSQL tablo, örnek veri ve rapor sorguları
- `powerbi/chart_data/`: dashboard için CSV dosyaları
- `web-app/`: tarayıcıda çalışan ERP simulator uygulaması
