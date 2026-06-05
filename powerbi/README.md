# Power BI Entegrasyon Rehberi

## Amaç

Bu klasörde Power BI tarafında kullanmak için hazırladığım veri setlerini ve dashboard fikrini anlattım. Odoo'da kurguladığım satın alma ve stok sürecini Power BI'da daha okunabilir hale getirmek istedim.

Power BI için iki kullanım yolu bıraktım:

1. PostgreSQL veritabanına bağlanıp `sql/powerbi_chart_data.sql` içindeki sorguları kullanmak.
2. `powerbi/chart_data/` klasöründeki hazır CSV dosyalarını Power BI'a aktarmak.

## Dashboard Sayfaları

### 1. Stok Özeti

Bu sayfada stok durumunu hızlıca görmek istedim.

Kullanılabilecek görseller:

- Ürün bazlı mevcut stok grafiği
- Minimum ve maksimum stok karşılaştırması
- Kritik stok ürünleri tablosu

Kullanılacak veri:

- `mevcut_stok.csv`
- `kritik_stok.csv`

### 2. Satın Alma Analizi

Bu sayfada tedarikçilerle ilgili satın alma tarafını izlemek istedim.

Kullanılabilecek görseller:

- Tedarikçi bazlı toplam harcama grafiği
- Tedarikçi bazlı satın alma siparişi sayısı
- Toplam satın alınan miktar kartı

Kullanılacak veri:

- `tedarikci_harcamalari.csv`

### 3. Satış ve Karlılık

Bu sayfada satış miktarını ve ürün bazlı karlılığı birlikte görmek istedim.

Kullanılabilecek görseller:

- En çok satan ürünler grafiği
- Ürün bazlı satış geliri
- Ürün bazlı brüt kar
- Brüt kar marjı yüzdesi

Kullanılacak veri:

- `en_cok_satan_urunler.csv`
- `brut_kar_marji.csv`

### 4. Yenileme Önerileri

Bu sayfada hangi ürünler için yeniden satın alma ihtiyacı oluştuğunu göstermek istedim.

Kullanılabilecek görseller:

- Yenileme önerisi tablosu
- Önerilen satın alma miktarı grafiği
- Kritik ürün kartları

Kullanılacak veri:

- `yenileme_onerileri.csv`
- `kritik_stok.csv`

## CSV ile Power BI Kullanımı

CSV dosyalarıyla çalışmak için şu adımları kullandım:

1. Power BI Desktop açılır.
2. Get Data > Text/CSV seçilir.
3. `powerbi/chart_data/` klasöründeki CSV dosyaları içe aktarılır.
4. Her CSV ayrı tablo olarak yüklenir.
5. Görseller ilgili alanlarla oluşturulur.

Örnek:

- Axis: `urun`
- Values: `mevcut_stok`
- Legend veya tooltip: `minimum_stok`, `maksimum_stok`

## PostgreSQL ile Power BI Kullanımı

PostgreSQL bağlantısı kullanılacaksa şu sıra izlenir:

1. PostgreSQL içinde SQL dosyaları çalıştırılır:
   - `sql/create_tables.sql`
   - `sql/insert_sample_data.sql`
2. Power BI Desktop içinde Get Data > PostgreSQL database seçilir.
3. Veritabanı bağlantısı yapılır.
4. `sql/powerbi_chart_data.sql` içindeki sorgular Power BI'a query olarak eklenir.

## Dashboard Özeti

Bu dashboard ile stok durumu, kritik ürünler, tedarikçi harcamaları, satış performansı, brüt kar ve yenileme ihtiyacını tek yerden takip etmeyi hedefledim.
