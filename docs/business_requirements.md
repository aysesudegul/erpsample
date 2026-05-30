# İş Gereksinimleri

## Proje Bağlamı

NovaTech Office Supplies, ofis ekipmanları satan küçük bir şirkettir. Şirket tedarikçilerden ürün satın alır, ürünleri stokta tutar ve kurumsal müşterilere satış yapar.

Bu portföy projesinde süreç Odoo ERP üzerinde uygulanmış, ardından PostgreSQL ve Power BI çıktılarıyla raporlanabilir hale getirilmiştir.

## İş Hedefleri

- Tedarikçi, müşteri ve ürün ana verilerini düzenli şekilde yönetmek.
- Tedarikçiler için satın alma siparişi oluşturmak.
- Gelen ürünleri mal kabul işlemiyle stoğa almak.
- Mal kabul sonrası stok artışını izlemek.
- Müşteri talepleri için satış siparişi oluşturmak.
- Teslimat doğrulaması sonrası stok çıkışını izlemek.
- Stok hareketlerini belge referanslarıyla takip etmek.
- Minimum stok altındaki ürünleri belirlemek.
- Maksimum stok seviyesine göre yenileme miktarı önermek.
- SQL ve Power BI ile satın alma ve stok raporları hazırlamak.

## Kapsam

Proje kapsamına giren alanlar:

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

Proje kapsamına girmeyen alanlar:

- Muhasebe kayıtları
- Faturalama
- Ödeme işlemleri
- Depo lokasyonu veya raf yönetimi
- Barkod cihaz entegrasyonu
- Odoo canlı veritabanına doğrudan bağlantı

## Ana Veri Gereksinimleri

### Tedarikçiler

Odoo'da aşağıdaki tedarikçi ana verileri oluşturulmuştur:

- Anadolu Electronics
- OfficePro Supply
- TechnoSource B2B
- Global Office Supplier
- Akdeniz Computer Systems

### Müşteriler

Odoo'da aşağıdaki müşteri ana verileri oluşturulmuştur:

- ABC Consulting
- Mavi Software
- Delta Academy
- Northwind Logistics
- Bright Future Education

### Ürünler

Ürünlerde maliyet, satış fiyatı, minimum stok ve maksimum stok bilgileri takip edilmiştir.

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

Odoo'da tedarikçi bazlı satın alma siparişleri oluşturulmuş ve ürünler mal kabul işlemiyle stoğa alınmıştır.

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

Odoo'da müşteri için satış siparişi oluşturulmuş ve teslimat doğrulanarak stok çıkışı tamamlanmıştır.

SO-001:

- Müşteri: ABC Consulting
- Wireless Mouse: 5 adet, birim satış fiyatı 250
- Mechanical Keyboard: 3 adet, birim satış fiyatı 500
- 24-inch Monitor: 2 adet, birim satış fiyatı 4500
- Durum: Teslim Edildi

## Raporlama Gereksinimleri

PostgreSQL ve Power BI tarafında aşağıdaki analizler hazırlanmıştır:

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

Proje başarılı kabul edilir, çünkü:

- Odoo üzerinde uçtan uca satın alma ve stok süreci uygulanmıştır.
- Süreç profesyonel portföy dokümantasyonu haline getirilmiştir.
- PostgreSQL dosyaları raporlama tablolarını ve örnek verileri oluşturur.
- Stok raporları stok hareketlerinden hesaplanır.
- Power BI için dashboard verileri hazırlanmıştır.
- Örnek işlem sonrası stok değerleri beklenen sonuçları verir:
  - Wireless Mouse: 45
  - Mechanical Keyboard: 27
  - 24-inch Monitor: 8
