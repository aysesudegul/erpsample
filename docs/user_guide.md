# Kullanıcı Rehberi

## Amaç

Bu rehber, Odoo üzerinde uygulanmış ERP satın alma ve stok yönetimi çalışmasının nasıl takip edileceğini açıklar.

Proje üç ana parçadan oluşur:

1. Odoo ERP iş süreci
2. PostgreSQL raporlama modeli
3. Power BI dashboard veri setleri

## Kullanılan Odoo Modülleri

Odoo tarafında aşağıdaki modüller kullanılmıştır:

- Contacts
- Purchase
- Inventory
- Sales

## 1. Tedarikçi Ana Verileri

Odoo Contacts içinde aşağıdaki tedarikçiler oluşturulmuştur:

- Anadolu Electronics
- OfficePro Supply
- TechnoSource B2B
- Global Office Supplier
- Akdeniz Computer Systems

## 2. Müşteri Ana Verileri

Odoo Contacts içinde aşağıdaki müşteriler oluşturulmuştur:

- ABC Consulting
- Mavi Software
- Delta Academy
- Northwind Logistics
- Bright Future Education

## 3. Ürün Ana Verileri

Odoo'da aşağıdaki ürünler maliyet ve satış fiyatı bilgileriyle oluşturulmuştur:

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

PO-001 aşağıdaki bilgilerle oluşturulmuştur:

- Tedarikçi: Anadolu Electronics
- Wireless Mouse: 30 adet, birim maliyet 150
- Mechanical Keyboard: 20 adet, birim maliyet 300
- 24-inch Monitor: 10 adet, birim maliyet 3000

Sipariş onaylanmış ve mal kabul işlemi yapılmıştır.

## 5. SO-001 Satış Siparişi

SO-001 aşağıdaki bilgilerle oluşturulmuştur:

- Müşteri: ABC Consulting
- Wireless Mouse: 5 adet, birim fiyat 250
- Mechanical Keyboard: 3 adet, birim fiyat 500
- 24-inch Monitor: 2 adet, birim fiyat 4500

Sipariş onaylanmış ve teslimat doğrulanmıştır.

## 6. PO-002 Satın Alma Siparişi

PO-002 aşağıdaki bilgilerle oluşturulmuştur:

- Tedarikçi: OfficePro Supply
- Wireless Mouse: 20 adet, birim maliyet 150
- Mechanical Keyboard: 10 adet, birim maliyet 300

Sipariş onaylanmış ve mal kabul işlemi yapılmıştır.

## 7. Stok Sonucu

Örnek işlemler sonrası beklenen mevcut stok:

| Ürün | Mevcut Stok |
| --- | ---: |
| Wireless Mouse | 45 |
| Mechanical Keyboard | 27 |
| 24-inch Monitor | 8 |

## 8. PostgreSQL Raporlarını Çalıştırma

pgAdmin veya başka bir PostgreSQL aracında dosyaları şu sırayla çalıştırın:

1. `sql/create_tables.sql`
2. `sql/insert_sample_data.sql`
3. `sql/reports.sql`

Bu raporlar mevcut stok, kritik stok, tedarikçi harcaması, satış performansı, brüt kar ve yenileme önerilerini gösterir.

## 9. Power BI Dashboard Hazırlama

Power BI için iki seçenek vardır:

1. PostgreSQL bağlantısı kurup `sql/powerbi_chart_data.sql` sorgularını kullanmak
2. `powerbi/chart_data/` klasöründeki CSV dosyalarını içe aktarmak

Önerilen Power BI sayfaları:

- Stok Özeti
- Satın Alma Analizi
- Satış ve Karlılık
- Yenileme Önerileri
