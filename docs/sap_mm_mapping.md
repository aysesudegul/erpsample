# SAP MM Mapping

## Purpose

This document maps the Odoo-based case study to SAP MM concepts. The goal is to show that the same business process logic can be understood across ERP systems.

## Concept Mapping

| Project / Odoo Concept | SAP MM Concept | Explanation |
| --- | --- | --- |
| Product | Material Master | Stores product information such as description, valuation, and stock planning data. |
| Vendor | Vendor Master / Business Partner | Stores supplier information used in procurement transactions. |
| Purchase Order | Purchase Order | Formal request to a vendor to supply materials or services. |
| Purchase Order Line | PO Item | Line-level material, quantity, and price details. |
| Goods Receipt | Goods Receipt for Purchase Order | Confirms that ordered goods have arrived and increases stock. |
| Stock Movement | Material Document / Movement Type | Records inventory quantity changes. |
| Sales Delivery | Goods Issue / Outbound Movement | Represents stock leaving inventory for customer delivery. |
| Minimum Stock | Reorder Point | Quantity threshold used to identify replenishment needs. |
| Maximum Stock | Target Stock Level | Used to calculate suggested purchase quantity. |
| SQL Reports | Operational Reporting / Analytics | Supports procurement and inventory decisions. |

## SAP MM Process Similarity

The project follows a process similar to a basic SAP MM procurement cycle:

1. Maintain master data.
2. Create a Purchase Order.
3. Receive goods against the Purchase Order.
4. Update inventory stock.
5. Review material movements.
6. Analyze stock levels and replenishment needs.

## Key SAP MM Terms Demonstrated

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

## Portfolio Value

This mapping helps show ERP transferability. Even though the practical simulation uses Odoo, the process logic is relevant for SAP MM because the business flow, master data, purchasing documents, and inventory movements are common ERP concepts.
