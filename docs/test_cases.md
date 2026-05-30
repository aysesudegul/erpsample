# Test Senaryoları

## Test Senaryosu 1: Tedarikçi Ana Verisi

| Alan | Değer |
| --- | --- |
| Test Amacı | Tedarikçi kayıtlarının oluşturulabildiğini ve satın alma siparişlerinde kullanılabildiğini doğrulamak. |
| Test Verisi | Anadolu Electronics, OfficePro Supply |
| Adımlar | Odoo Contacts içinde tedarikçi kayıtlarını oluştur. |
| Beklenen Sonuç | Tedarikçiler satın alma siparişi ekranında seçilebilir. |
| Durum | Portföy senaryosunda tamamlandı |

## Test Senaryosu 2: Müşteri Ana Verisi

| Alan | Değer |
| --- | --- |
| Test Amacı | Müşteri kayıtlarının oluşturulabildiğini ve satış siparişlerinde kullanılabildiğini doğrulamak. |
| Test Verisi | ABC Consulting |
| Adımlar | Odoo Contacts içinde müşteri kaydını oluştur. |
| Beklenen Sonuç | Müşteri satış siparişi ekranında seçilebilir. |
| Durum | Portföy senaryosunda tamamlandı |

## Test Senaryosu 3: Ürün Ana Verisi

| Alan | Değer |
| --- | --- |
| Test Amacı | Ürünlerin maliyet, satış fiyatı, minimum stok ve maksimum stok bilgileriyle hazırlanmasını doğrulamak. |
| Test Verisi | Wireless Mouse, Mechanical Keyboard, 24-inch Monitor |
| Adımlar | Odoo Products ekranında ürün ana verilerini oluştur. |
| Beklenen Sonuç | Ürünler satın alma, satış ve stok işlemlerinde kullanılabilir. |
| Durum | Portföy senaryosunda tamamlandı |

## Test Senaryosu 4: PO-001 Satın Alma Siparişi

| Alan | Değer |
| --- | --- |
| Test Amacı | Satın alma siparişinin oluşturulup mal kabul ile stoğa alınmasını doğrulamak. |
| Test Verisi | PO-001, Anadolu Electronics |
| Adımlar | PO-001 oluştur, ürün kalemlerini ekle, siparişi onayla, mal kabul işlemini doğrula. |
| Beklenen Sonuç | Wireless Mouse, Mechanical Keyboard ve 24-inch Monitor stokları artar. |
| Durum | Örnek veriyle doğrulandı |

## Test Senaryosu 5: SO-001 Satış Siparişi

| Alan | Değer |
| --- | --- |
| Test Amacı | Satış siparişinin teslimatla tamamlanmasını ve stok çıkışını doğrulamak. |
| Test Verisi | SO-001, ABC Consulting |
| Adımlar | SO-001 oluştur, ürün kalemlerini ekle, siparişi onayla, teslimatı doğrula. |
| Beklenen Sonuç | Teslim edilen ürünlerin stokları azalır. |
| Durum | Örnek veriyle doğrulandı |

## Test Senaryosu 6: Mevcut Stok Raporu

| Alan | Değer |
| --- | --- |
| Test Amacı | Satın alma ve satış işlemleri sonrası mevcut stokların doğru hesaplandığını doğrulamak. |
| Test Verisi | PO-001, PO-002, SO-001 |
| Adımlar | `sql/reports.sql` içindeki Mevcut Stok Raporu sorgusunu çalıştır. |
| Beklenen Sonuç | Wireless Mouse = 45, Mechanical Keyboard = 27, 24-inch Monitor = 8. |
| Durum | Hesaplama ile doğrulandı |

## Test Senaryosu 7: Kritik Stok Raporu

| Alan | Değer |
| --- | --- |
| Test Amacı | Minimum stok altındaki ürünlerin listelendiğini doğrulamak. |
| Test Verisi | Mechanical Keyboard, 24-inch Monitor |
| Adımlar | `sql/reports.sql` içindeki Kritik Stok Raporu sorgusunu çalıştır. |
| Beklenen Sonuç | Minimum stok altındaki ürünler raporda görünür. |
| Durum | Rapor tasarımıyla doğrulandı |

## Test Senaryosu 8: Yenileme Önerisi

| Alan | Değer |
| --- | --- |
| Test Amacı | Önerilen satın alma miktarının doğru hesaplandığını doğrulamak. |
| Test Verisi | Ürün minimum ve maksimum stok değerleri |
| Adımlar | Yenileme Önerisi Raporu sorgusunu çalıştır. |
| Beklenen Sonuç | Mevcut stok minimum stokun altındaysa önerilen miktar maksimum stok eksi mevcut stok olur. |
| Durum | Rapor tasarımıyla doğrulandı |

## Test Senaryosu 9: Power BI Chart Data

| Alan | Değer |
| --- | --- |
| Test Amacı | CSV chart data dosyalarının SQL örnek verileriyle uyumlu olduğunu doğrulamak. |
| Test Verisi | `powerbi/chart_data/` dosyaları |
| Adımlar | CSV dosyalarını Power BI'a aktar ve temel grafiklere bağla. |
| Beklenen Sonuç | Dashboard görselleri mevcut stok, kritik stok, satış ve yenileme verilerini gösterir. |
| Durum | Veri seti hazırlandı |

## Test Senaryosu 10: SAP MM Eşleştirme

| Alan | Değer |
| --- | --- |
| Test Amacı | Odoo'da uygulanan sürecin SAP MM kavramlarıyla açıklanabildiğini doğrulamak. |
| Test Verisi | Satın alma siparişi, mal kabul, stok hareketleri |
| Adımlar | `docs/sap_mm_mapping.md` dokümanını incele. |
| Beklenen Sonuç | Süreç Material Master, Vendor Master, Purchase Order, Goods Receipt ve Stock Movement kavramlarıyla eşleşir. |
| Durum | Dokümantasyonla doğrulandı |
