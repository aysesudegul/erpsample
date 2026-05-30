# ERP Procurement & Inventory Management Case Study

## Project Description

This repository presents a beginner-friendly ERP portfolio case study for an end-to-end procurement and inventory process. The business process is simulated in Odoo ERP and supported with a separate PostgreSQL reporting database structure built only with SQL files.

The project is designed for a future SAP MM / ERP Consultant / Business Analyst career path. It demonstrates how master data, purchase orders, goods receipts, sales orders, deliveries, stock movements, and SQL reports fit together in a typical ERP environment.

Important note: this project does not connect directly to an Odoo database and does not modify any local Odoo installation. The SQL files create a separate reporting structure for learning, documentation, and portfolio purposes.

## Business Scenario

NovaTech Office Supplies is a small office equipment company. The company buys products from suppliers, stores them in inventory, and sells them to business customers.

The company needs to manage:

- Vendor master data
- Customer master data
- Product master data
- Purchase orders
- Goods receipts
- Customer sales orders
- Delivery validation
- Stock increases and decreases
- Stock movement tracking
- Critical stock and replenishment analysis
- SQL-based procurement and inventory reporting

## Tools Used

- Odoo ERP
- PostgreSQL
- SQL
- pgAdmin
- GitHub
- Markdown
- Mermaid diagrams

## Implemented ERP Processes

The case study covers the following ERP process flow:

1. Vendor master data creation
2. Customer master data creation
3. Product master data creation
4. Purchase Order creation
5. Goods Receipt / Product Receipt
6. Stock increase
7. Sales Order creation
8. Delivery validation
9. Stock decrease
10. Stock movement tracking
11. Critical stock / replenishment analysis
12. SQL-based reporting

## Odoo Process Overview

In Odoo, the procurement and inventory process can be simulated with the Purchase, Inventory, Sales, and Contacts modules.

The process starts with creating master data for vendors, customers, and products. Purchase Orders are then created for selected vendors. When ordered goods arrive, the receipt is validated in Inventory, which increases stock levels. Customer Sales Orders are then created and delivered, reducing available stock.

This workflow demonstrates how operational ERP transactions create inventory movements and how those movements can be analyzed with SQL reports.

## SQL Reporting Overview

The SQL folder contains a standalone PostgreSQL reporting model. It stores simplified ERP data for vendors, customers, products, purchase orders, sales orders, and stock movements.

The reporting queries include:

- Current Stock Report
- Critical Stock Report
- Vendor Spend Report
- Top Selling Products Report
- Stock Movement History Report
- Purchase Order Status Report
- Sales Order Status Report
- Gross Margin by Product
- Replenishment Suggestion Report

The stock reports calculate inventory from stock movement records. Purchase receipts are represented as `PURCHASE_IN`, and customer deliveries are represented as `SALES_OUT`.

## SAP MM Relevance

Although the practical simulation is done with Odoo, the process is directly related to SAP MM concepts.

| Odoo / Project Area | SAP MM Concept |
| --- | --- |
| Product master data | Material Master |
| Vendor master data | Vendor Master / Business Partner |
| Purchase Order | Purchase Order |
| Goods Receipt | Goods Receipt for Purchase Order |
| Inventory movement | Stock Movement / Material Document |
| Minimum and maximum stock | Reorder Point / Replenishment Planning |
| Procurement reports | Purchasing and Inventory Analytics |

This makes the project suitable for a junior SAP MM trainee, junior ERP consultant, ERP support specialist, or business analyst portfolio.

## Repository Structure

```text
.
├── README.md
├── docs/
│   ├── business_requirements.md
│   ├── process_flow.md
│   ├── sap_mm_mapping.md
│   ├── test_cases.md
│   ├── user_guide.md
│   └── project_summary.md
├── sql/
│   ├── create_tables.sql
│   ├── insert_sample_data.sql
│   ├── reports.sql
│   └── README.md
└── screenshots/
    └── README.md
```

## How to Use the SQL Files

1. Create a new PostgreSQL database, for example `erp_procurement_inventory`.
2. Open pgAdmin or another PostgreSQL SQL tool.
3. Run `sql/create_tables.sql` first.
4. Run `sql/insert_sample_data.sql` second.
5. Run individual queries from `sql/reports.sql` to review the reports.

Expected stock after the sample transactions:

| Product | Current Stock |
| --- | ---: |
| Wireless Mouse | 45 |
| Mechanical Keyboard | 27 |
| 24-inch Monitor | 8 |

## Suggested Screenshots to Add

Recommended Odoo screenshots for this portfolio project:

- Vendor master data list
- Customer master data list
- Product master data list
- Purchase Order PO-001
- Goods Receipt / Product Receipt screen
- Inventory stock on hand
- Sales Order SO-001
- Delivery validation screen
- Stock movement history
- SQL report outputs from pgAdmin

## Final Portfolio Description

This project demonstrates a practical understanding of ERP procurement and inventory processes. It connects business process documentation, Odoo transaction simulation, SAP MM concept mapping, and SQL reporting in one structured GitHub repository.

It is intentionally beginner-friendly while still using professional documentation practices, realistic master data, transaction examples, and report scenarios.

## CV-Ready Project Description

"Designed and documented an ERP Procurement & Inventory Management case study using Odoo ERP and PostgreSQL. Created vendor, customer and product master data; processed purchase orders, goods receipts, sales orders and delivery operations; tracked stock movements; and prepared SQL-based inventory and procurement reports. Mapped the process with SAP MM concepts such as Material Master, Vendor Master, Purchase Order, Goods Receipt and Stock Movements."
