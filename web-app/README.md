# ERP Satın Alma ve Stok Takip Projesi

Bu projede satın alma, mal girişi, satış teslimatı ve stok takibi gibi temel ERP adımlarını küçük bir web uygulamasıyla anlattım. Amacım sadece ekran tasarlamak değil, sürecin nasıl ilerlediğini çalışır şekilde göstermekti.

Senaryo olarak NovaTech Office Supplies adında küçük bir ofis ekipmanları şirketi kullandım. Şirket tedarikçilerden ürün satın alıyor, ürünleri depoda tutuyor, müşterilere satış yapıyor ve oluşan stok hareketlerini takip ediyor.

## Süreç Akışı

`Tedarikçi -> Satın Alma Siparişi -> Mal Girişi -> Stok Artışı -> Satış Siparişi -> Teslimat -> Stok Azalışı -> Stok Hareketleri -> Kritik Stok -> İkmal Önerisi`

## İçerik

- Panel ve temel stok analizleri
- Tedarikçi, müşteri ve ürün kayıtları
- Satın alma siparişi, onay ve mal girişi
- Satış siparişi, onay ve teslimat
- Yetersiz stok kontrolü
- Stok hareket geçmişi
- Kritik stok ve ikmal önerisi
- SAP MM kavram eşleştirmesi
- Demo verilerini tarayıcıda saklama

## Kullanılan Teknolojiler

- React
- JavaScript
- HTML
- CSS
- Vite
- Lucide React
- LocalStorage

## SAP MM ile Bağlantısı

Bu proje gerçek bir SAP sistemi değil. SAP ekranını kopyalamadım; sadece SAP MM tarafındaki temel satın alma ve stok mantığını daha basit bir uygulama üzerinden gösterdim.

- Ürün -> Material Master
- Tedarikçi -> Supplier / Business Partner
- Satın Alma Siparişi -> Purchase Order
- Mal Girişi -> Goods Receipt
- Stok Hareketi -> Material Document / Movement Type
- İkmal Önerisi -> MRP / Reorder Planning
- Stok Sayfası -> Inventory Management

## Çalıştırma

```bash
npm install
npm run dev
```

Build almak için:

```bash
npm run build
```
