# Kullanıcı Rehberi

## Amaç

Bu rehberde projeyi hangi sırayla takip ettiğimi anlattım. Proje üç ana parçadan oluşuyor:

1. Odoo ERP iş süreci
2. PostgreSQL raporlama modeli
3. Power BI dashboard veri setleri

## Kullandığım Odoo Modülleri

Odoo tarafında şu modülleri baz aldım:

- Contacts
- Purchase
- Inventory
- Sales

## 1. Tedarikçi Ana Verileri

Önce Contacts modülünde tedarikçileri oluşturdum:

- Anadolu Electronics
- OfficePro Supply
- TechnoSource B2B
- Global Office Supplier
- Akdeniz Computer Systems

## 2. Müşteri Ana Verileri

Aynı şekilde müşteri kayıtlarını da hazırladım:

- ABC Consulting
- Mavi Software
- Delta Academy
- Northwind Logistics
- Bright Future Education

## 3. Ürün Ana Verileri

Ürünleri maliyet ve satış fiyatı bilgileriyle birlikte tanımladım. Ayrıca minimum ve maksimum stok seviyelerini de ekledim.

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

## 4. PO-001 Satın Alma Siparişi

İlk satın alma siparişini Anadolu Electronics için oluşturdum.

- Tedarikçi: Anadolu Electronics
- Wireless Mouse: 30 adet, birim maliyet 150
- Mechanical Keyboard: 20 adet, birim maliyet 300
- 24-inch Monitor: 10 adet, birim maliyet 3000

Siparişi onayladıktan sonra mal kabul adımıyla ürünleri stoğa aldım.

## 5. SO-001 Satış Siparişi

Satış tarafında ABC Consulting için örnek bir satış siparişi oluşturdum.

- Müşteri: ABC Consulting
- Wireless Mouse: 5 adet, birim fiyat 250
- Mechanical Keyboard: 3 adet, birim fiyat 500
- 24-inch Monitor: 2 adet, birim fiyat 4500

Siparişi onaylayıp teslimatı doğruladığımda ürünlerin stoktan düşmesini bekledim.

## 6. PO-002 Satın Alma Siparişi

İkinci satın alma siparişini OfficePro Supply için hazırladım.

- Tedarikçi: OfficePro Supply
- Wireless Mouse: 20 adet, birim maliyet 150
- Mechanical Keyboard: 10 adet, birim maliyet 300

Bu sipariş de mal kabul sonrası stok miktarını artırıyor.

## 7. Stok Sonucu

Örnek işlemlerden sonra beklediğim stok sonucu şu şekilde:

| Ürün | Mevcut Stok |
| --- | ---: |
| Wireless Mouse | 45 |
| Mechanical Keyboard | 27 |
| 24-inch Monitor | 8 |

## 8. PostgreSQL Raporları

PostgreSQL tarafında tablo yapısı, örnek veriler ve rapor sorguları ayrı dosyalarda duruyor. Bu raporlar mevcut stok, kritik stok, tedarikçi harcaması, satış performansı, brüt kar ve yenileme önerisi sonuçlarını gösteriyor.

## 9. Dashboard Verileri

Dashboard tarafını şu başlıklarla düşündüm:

- Stok Özeti
- Satın Alma Analizi
- Satış ve Karlılık
- Yenileme Önerileri
