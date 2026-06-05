# İş Gereksinimleri

## Proje Bağlamı

Bu projede NovaTech Office Supplies adında örnek bir şirket kullandım. Şirket ofis ekipmanları satıyor; bu yüzden satın alma, stok ve satış süreçlerinin düzenli takip edilmesi gerekiyor.

Senaryoda şirketin tedarikçilerden ürün satın aldığını, gelen ürünleri stoğa aldığını ve müşterilere satış yaptığını varsaydım. Bu akışı Odoo ERP üzerinde kurguladım, sonra aynı süreci PostgreSQL ve Power BI tarafında raporlanabilir hale getirdim.

## İş Hedefleri

- Tedarikçi, müşteri ve ürün bilgilerini düzenli tutmak.
- Tedarikçiler için satın alma siparişi oluşturmak.
- Gelen ürünleri mal kabul işlemiyle stoğa almak.
- Mal kabul sonrası stok artışını takip etmek.
- Müşteri siparişi oluşturmak.
- Teslimat sonrası stok çıkışını izlemek.
- Stok hareketlerini belge referanslarıyla takip etmek.
- Minimum stok altındaki ürünleri bulmak.
- Maksimum stok seviyesine göre yenileme miktarı önermek.
- SQL ve Power BI ile satın alma ve stok raporları hazırlamak.

## Kapsam

Bu çalışmada şunları kapsama aldım:

- Tedarikçi ana verileri
- Müşteri ana verileri
- Ürün ana verileri
- Satın alma siparişleri
- Satın alma siparişi kalemleri
- Satış siparişleri
- Satış siparişi kalemleri
- Mal kabul ve teslimat hareketleri
- Stok hareket takibi
- PostgreSQL raporları
- Power BI chart data dosyaları

Bu çalışmada özellikle dışarıda bıraktığım konular:

- Muhasebe kayıtları
- Faturalama
- Ödeme işlemleri
- Depo lokasyonu veya raf yönetimi
- Barkod cihaz entegrasyonu
- Canlı Odoo veritabanına doğrudan bağlantı

## Ana Veri Gereksinimleri

### Tedarikçiler

Odoo tarafında örnek olarak şu tedarikçileri kullandım:

- Anadolu Electronics
- OfficePro Supply
- TechnoSource B2B
- Global Office Supplier
- Akdeniz Computer Systems

### Müşteriler

Müşteri tarafında şu örnek kayıtları oluşturdum:

- ABC Consulting
- Mavi Software
- Delta Academy
- Northwind Logistics
- Bright Future Education

### Ürünler

Ürünlerde maliyet, satış fiyatı, minimum stok ve maksimum stok bilgilerini tuttum. Bu bilgiler hem satın alma hem stok kontrolü hem de yenileme önerisi için gerekli.

| Ürün | Maliyet | Satış Fiyatı | Minimum Stok | Maksimum Stok |
| --- | ---: | ---: | ---: | ---: |
| Wireless Mouse | 150 | 250 | 30 | 60 |
| Mechanical Keyboard | 300 | 500 | 30 | 50 |
| 24-inch Monitor | 3000 | 4500 | 10 | 20 |
| Business Laptop | 18000 | 24000 | 5 | 15 |
| Office Printer | 4000 | 6200 | 5 | 12 |
| HDMI Cable | 80 | 150 | 40 | 100 |
| Office Chair | 1200 | 2200 | 10 | 25 |
| Barcode Scanner | 2500 | 3900 | 5 | 15 |

## İşlem Gereksinimleri

### Satın Alma Süreci

Satın alma tarafında tedarikçiler için sipariş oluşturdum ve ürünleri mal kabul işlemiyle stoğa aldım.

PO-001:

- Tedarikçi: Anadolu Electronics
- Wireless Mouse: 30 adet, birim maliyet 150
- Mechanical Keyboard: 20 adet, birim maliyet 300
- 24-inch Monitor: 10 adet, birim maliyet 3000
- Durum: Alındı

PO-002:

- Tedarikçi: OfficePro Supply
- Wireless Mouse: 20 adet, birim maliyet 150
- Mechanical Keyboard: 10 adet, birim maliyet 300
- Durum: Alındı

### Satış Süreci

Satış tarafında örnek bir müşteri siparişi oluşturdum. Sipariş teslim edildiğinde ilgili ürünlerin stoktan düşmesini bekledim.

SO-001:

- Müşteri: ABC Consulting
- Wireless Mouse: 5 adet, birim satış fiyatı 250
- Mechanical Keyboard: 3 adet, birim satış fiyatı 500
- 24-inch Monitor: 2 adet, birim satış fiyatı 4500
- Durum: Teslim Edildi

## Raporlama Gereksinimleri

PostgreSQL ve Power BI tarafında şu analizleri hazırladım:

- Ürün bazlı mevcut stok
- Minimum stok altındaki ürünler
- Tedarikçi bazlı toplam satın alma harcaması
- En çok satan ürünler
- Stok hareket geçmişi
- Satın alma siparişi durum analizi
- Satış siparişi durum analizi
- Ürün bazlı brüt kar marjı
- Yenileme önerisi

## Başarı Kriterleri

Bu projeyi başarılı saymam için şu sonuçlara baktım:

- Odoo mantığıyla satın alma ve stok akışı kuruldu.
- Süreç anlaşılır şekilde dokümante edildi.
- PostgreSQL dosyaları tablo yapısını ve örnek verileri oluşturuyor.
- Stok raporları stok hareketlerinden hesaplanıyor.
- Power BI tarafı için dashboard verileri hazır.
- Örnek işlem sonrası stok değerleri beklenen sonucu veriyor:
  - Wireless Mouse: 45
  - Mechanical Keyboard: 27
  - 24-inch Monitor: 8
