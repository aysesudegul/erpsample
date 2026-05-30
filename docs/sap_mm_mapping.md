# SAP MM Eşleştirmesi

## Amaç

Bu doküman, Odoo üzerinde uygulanan satın alma ve stok yönetimi sürecini SAP MM kavramlarıyla eşleştirir. Amaç, projedeki iş mantığının farklı ERP sistemlerinde de geçerli olduğunu göstermektir.

## Kavram Eşleştirmesi

| Proje / Odoo Kavramı | SAP MM Karşılığı | Açıklama |
| --- | --- | --- |
| Ürün | Material Master | Ürün veya malzeme ana verisini temsil eder. |
| Tedarikçi | Vendor Master / Business Partner | Satın alma sürecinde kullanılan tedarikçi bilgisidir. |
| Satın Alma Siparişi | Purchase Order | Tedarikçiye verilen resmi satın alma belgesidir. |
| Satın Alma Siparişi Kalemi | PO Item | Ürün, miktar ve fiyat detayını içerir. |
| Mal Kabul | Goods Receipt | Satın alınan ürünün stoğa girişini gösterir. |
| Stok Hareketi | Material Document / Movement Type | Stok miktarında oluşan artış veya azalışı kayıt altına alır. |
| Satış Teslimatı | Goods Issue / Outbound Movement | Ürünün müşteriye teslim edilmesiyle stoktan çıkışını temsil eder. |
| Minimum Stok | Reorder Point | Yenileme ihtiyacını belirlemek için kullanılan eşiktir. |
| Maksimum Stok | Target Stock Level | Önerilen satın alma miktarını hesaplamak için kullanılır. |
| SQL ve Power BI Raporları | Operational Reporting / Analytics | Satın alma ve stok kararlarını destekler. |

## SAP MM Süreç Benzerliği

Proje, temel SAP MM satın alma döngüsüyle benzer bir akışa sahiptir:

1. Ana veri hazırlanır.
2. Satın alma siparişi oluşturulur.
3. Mal kabul işlemi yapılır.
4. Stok miktarı güncellenir.
5. Stok hareketleri izlenir.
6. Kritik stok ve yenileme ihtiyacı analiz edilir.

## Gösterilen SAP MM Terimleri

- Material Master
- Vendor Master
- Purchase Order
- Purchase Order Item
- Goods Receipt
- Stock Movement
- Movement Type
- Inventory Management
- Reorder Point
- Replenishment Planning

## Portföy Değeri

Bu eşleştirme, Odoo üzerinde yapılan çalışmanın SAP MM danışmanlığı için de anlamlı olduğunu gösterir. Master data, satın alma belgesi, mal kabul ve stok hareketi kavramları ERP sistemlerinde ortak iş mantığına sahiptir.
