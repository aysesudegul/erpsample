# Portföy Sunum Metni

## Kısa Tanıtım

Bu proje, Odoo ERP üzerinde uyguladığım uçtan uca bir satın alma ve stok yönetimi portföy çalışmasıdır. NovaTech Office Supplies adlı örnek şirket için tedarikçi, müşteri ve ürün ana verilerini oluşturdum; satın alma siparişleri, mal kabul, satış siparişi, teslimat ve stok hareketi süreçlerini tamamladım.

## Problem

Şirketin satın aldığı ürünleri, stok girişlerini, müşterilere yapılan teslimatları ve mevcut stok seviyelerini düzenli şekilde takip etmesi gerekiyordu.

Ana ihtiyaçlar:

- Satın alınan ürünlerin stoğa girişini izlemek
- Satılan ürünlerin stoktan çıkışını takip etmek
- Kritik stok seviyelerini görmek
- Tedarikçi harcamalarını analiz etmek
- Power BI ile sunulabilir dashboard verileri hazırlamak

## Odoo'da Yapılan İşlem

Odoo üzerinde Contacts, Purchase, Inventory ve Sales modülleri kullanıldı.

Uygulanan adımlar:

- Tedarikçi ana verileri oluşturuldu.
- Müşteri ana verileri oluşturuldu.
- Ürün ana verileri maliyet ve satış fiyatlarıyla hazırlandı.
- PO-001 ve PO-002 satın alma siparişleri oluşturuldu.
- Mal kabul işlemleriyle ürünler stoğa alındı.
- SO-001 satış siparişi oluşturuldu.
- Teslimat doğrulandı ve stok çıkışı tamamlandı.
- Stok hareketleri takip edildi.

## SQL ile Raporlama

Odoo'da uygulanan süreç, ayrı bir PostgreSQL raporlama modeliyle temsil edildi. Bu model Odoo veritabanına bağlanmadan, portföy ve analiz amacıyla hazırlandı.

Hazırlanan raporlar:

- Mevcut Stok Raporu
- Kritik Stok Raporu
- Tedarikçi Harcama Raporu
- En Çok Satan Ürünler Raporu
- Stok Hareket Geçmişi
- Brüt Kar Marjı
- Yenileme Önerisi

## Power BI ile Analiz

Power BI için grafik veri setleri hazırlandı. Bu verilerle stok, satın alma, satış ve yenileme analizlerini gösteren bir dashboard oluşturulabilir.

Önerilen görseller:

- Mevcut stok bar chart
- Kritik stok tablosu
- Tedarikçi harcama grafiği
- En çok satan ürünler grafiği
- Brüt kar marjı grafiği
- Yenileme önerileri tablosu

## SAP MM Bağlantısı

Bu proje Odoo üzerinde uygulanmış olsa da SAP MM kavramlarıyla doğrudan ilişkilidir.

Örnek eşleştirmeler:

- Ürün ana verisi: Material Master
- Tedarikçi ana verisi: Vendor Master
- Satın alma siparişi: Purchase Order
- Mal kabul: Goods Receipt
- Stok hareketi: Material Document / Stock Movement
- Yenileme analizi: Replenishment Planning

## Kazanılan İş Değeri

Bu proje, ERP süreçlerinin yalnızca işlem girmekten ibaret olmadığını gösterir. Ana veri, satın alma, stok hareketi, raporlama ve dashboard hazırlığı birlikte ele alındığında şirketin stok ve satın alma kararları daha görünür hale gelir.

## 60 Saniyelik Mülakat Pitch'i

Odoo ERP üzerinde satın alma ve stok yönetimi sürecini uçtan uca uyguladığım bir portföy projesi hazırladım. Örnek bir ofis ekipmanları şirketi için tedarikçi, müşteri ve ürün ana verilerini oluşturdum; satın alma siparişleriyle ürünleri stoğa aldım, satış siparişi ve teslimat süreciyle stok çıkışını tamamladım. Daha sonra bu süreci PostgreSQL üzerinde raporlanabilir hale getirip mevcut stok, kritik stok, tedarikçi harcaması, brüt kar ve yenileme önerisi raporları hazırladım. Power BI dashboard tasarımı için de chart data dosyaları ekledim. Projeyi SAP MM kavramlarıyla eşleştirerek ERP danışmanlığı ve iş analizi rolleri için sunulabilir bir case study haline getirdim.
