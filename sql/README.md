# SQL Guide

## Purpose

This folder contains a standalone PostgreSQL reporting database structure for the ERP Procurement & Inventory Management Case Study.

The SQL files do not connect to Odoo and do not modify any Odoo installation. They are designed for manual execution in PostgreSQL or pgAdmin.

## Files

| File | Purpose |
| --- | --- |
| `create_tables.sql` | Creates the reporting tables, constraints, keys, and indexes. |
| `insert_sample_data.sql` | Inserts vendors, customers, products, purchase orders, sales order, and stock movements. |
| `reports.sql` | Contains SQL reports for procurement and inventory analysis. |

## Recommended Execution Order

1. Create a PostgreSQL database, for example:

```sql
CREATE DATABASE erp_procurement_inventory;
```

2. Connect to the database in pgAdmin.
3. Run `create_tables.sql`.
4. Run `insert_sample_data.sql`.
5. Run each report query from `reports.sql`.

## Expected Stock Result

After inserting the sample data, the Current Stock Report should show:

| Product | Current Stock |
| --- | ---: |
| Wireless Mouse | 45 |
| Mechanical Keyboard | 27 |
| 24-inch Monitor | 8 |

Other products exist in the product master data but do not have purchase or sales movements in the sample transaction set.

## Report List

The report file includes:

- Current Stock Report
- Critical Stock Report
- Vendor Spend Report
- Top Selling Products Report
- Stock Movement History Report
- Purchase Order Status Report
- Sales Order Status Report
- Gross Margin by Product
- Replenishment Suggestion Report

## Replenishment Logic

The replenishment report uses this logic:

```text
If current stock is below minimum stock:
    suggested purchase quantity = maximum stock - current stock
Otherwise:
    suggested purchase quantity = 0
```

This supports simple inventory review and purchasing recommendations.
