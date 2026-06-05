# Power BI Entegrasyon Rehberi

## Amaç

Bu klasör, Odoo'da uygulanmış ERP satın alma ve stok yönetimi sürecini Power BI dashboard formatında sunmak için hazırlanmıştır.

Power BI tarafında iki kullanım yolu vardır:

1. PostgreSQL veritabanına bağlanarak `sql/powerbi_chart_data.sql` içindeki sorguları kullanmak.
2. `powerbi/chart_data/` klasöründeki hazır CSV dosyalarını Power BI'a aktarmak.

## Önerilen Dashboard Sayfaları

### 1. Stok Özeti

Önerilen görseller:

- Ürün bazlı mevcut stok bar chart
- Minimum ve maksimum stok karşılaştırması
- Kritik stok ürünleri tablosu

Kullanılacak veri:

- `mevcut_stok.csv`
- `kritik_stok.csv`

### 2. Satın Alma Analizi

Önerilen görseller:

- Tedarikçi bazlı toplam harcama column chart
- Tedarikçi bazlı satın alma siparişi sayısı
- Toplam satın alınan miktar kartı

Kullanılacak veri:

- `tedarikci_harcamalari.csv`

### 3. Satış ve Karlılık

Önerilen görseller:

- En çok satan ürünler bar chart
- Ürün bazlı satış geliri
- Ürün bazlı brüt kar
- Brüt kar marjı yüzdesi

Kullanılacak veri:

- `en_cok_satan_urunler.csv`
- `brut_kar_marji.csv`

### 4. Yenileme Önerileri

Önerilen görseller:

- Yenileme önerisi tablosu
- Önerilen satın alma miktarı bar chart
- Kritik ürün kartları

Kullanılacak veri:

- `yenileme_onerileri.csv`
- `kritik_stok.csv`

## CSV ile Power BI Kullanımı

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

1. PostgreSQL içinde SQL dosyaları çalıştırılır:
   - `sql/create_tables.sql`
   - `sql/insert_sample_data.sql`
2. Power BI Desktop içinde Get Data > PostgreSQL database seçilir.
3. Veritabanı bağlantısı yapılır.
4. `sql/powerbi_chart_data.sql` içindeki sorgular Power BI'a query olarak eklenir.

## Dashboard Özeti

Bu dashboard, Odoo'da uygulanan satın alma ve stok yönetimi sürecinin raporlama tarafını gösterir. Stok durumu, kritik ürünler, tedarikçi harcamaları, satış performansı, brüt kar ve yenileme ihtiyacı tek ekranda izlenebilir hale gelir.
