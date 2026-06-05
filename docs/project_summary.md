# Proje Özeti

## Proje Adı

ERP Satın Alma ve Stok Yönetimi Projesi

## Genel Bakış

Bu projede NovaTech Office Supplies adlı örnek bir şirket için satın alma ve stok yönetimi süreci hazırladım. Süreci Odoo ERP mantığıyla kurdum, sonra PostgreSQL raporları ve Power BI veri dosyalarıyla destekledim.

Benim için bu projenin ana fikri şuydu: Bir ERP süreci sadece ekranda sipariş açmaktan ibaret değil. Sipariş, mal kabul, stok hareketi, satış, teslimat ve raporlama adımlarının birbirine nasıl bağlandığını göstermek istedim.

## İş Problemi

NovaTech Office Supplies, satın aldığı ürünlerin stoğa girişini, müşterilere yaptığı teslimatların stoktan çıkışını ve ürün bazlı mevcut stok durumunu takip etmek istiyor.

Bu senaryoda şu sorulara cevap aradım:

- Hangi üründen stokta kaç adet var?
- Hangi ürünler minimum stok seviyesinin altında?
- Hangi tedarikçiye ne kadar harcama yapıldı?
- Hangi ürünler satıldı?
- Ürün bazlı brüt kar nedir?
- Hangi ürünler için yeniden satın alma önerisi oluşmalı?

## Uyguladığım Çözüm

Projede şu adımları izledim:

1. Odoo'da tedarikçi, müşteri ve ürün ana verilerini oluşturdum.
2. Satın alma siparişleri hazırladım.
3. Mal kabul işlemleriyle stok girişlerini tamamladım.
4. Müşteri için satış siparişi oluşturdum.
5. Teslimat doğrulamasıyla stok çıkışını tamamladım.
6. Stok hareketlerini PostgreSQL modelinde temsil ettim.
7. SQL raporları hazırladım.
8. Power BI için chart data dosyaları oluşturdum.

## Çalışmanın Kapsadığı Konular

Bu çalışmada özellikle şu konulara odaklandım:

- ERP ana veri mantığı
- Satın alma süreci
- Mal kabul ve stok hareketi takibi
- Satış siparişi ve teslimat süreci
- SAP MM kavramlarıyla süreç eşleştirme
- PostgreSQL raporlama
- Power BI dashboard veri hazırlığı
- İş analizi ve süreç dokümantasyonu

## Örnek Stok Sonucu

| Ürün | Mevcut Stok | Minimum Stok | Durum |
| --- | ---: | ---: | --- |
| Wireless Mouse | 45 | 30 | Sağlıklı |
| Mechanical Keyboard | 27 | 30 | Minimum stok altında |
| 24-inch Monitor | 8 | 10 | Minimum stok altında |

## Genel Değerlendirme

Bu proje sayesinde satın alma ve stok sürecinin ERP içinde nasıl ilerlediğini, bu verilerin SQL tarafında nasıl raporlandığını ve dashboard için nasıl hazırlanabileceğini tek bir örnek üzerinden toparladım.
