# User Guide

## Purpose

This guide explains how to use the project as a beginner-friendly ERP portfolio case study.

The project has two parts:

1. Odoo ERP process simulation
2. PostgreSQL SQL reporting model

The Odoo process is documented for learning and screenshots. The SQL model is separate and can be run manually in PostgreSQL or pgAdmin.

## Recommended Odoo Modules

Use the following Odoo modules:

- Contacts
- Purchase
- Inventory
- Sales

## Step 1: Create Vendor Master Data

Create the following vendors in Odoo Contacts:

- Anadolu Electronics
- OfficePro Supply
- TechnoSource B2B
- Global Office Supplier
- Akdeniz Computer Systems

Recommended screenshot:

- Vendor list or individual vendor form

## Step 2: Create Customer Master Data

Create the following customers in Odoo Contacts:

- ABC Consulting
- Mavi Software
- Delta Academy
- Northwind Logistics
- Bright Future Education

Recommended screenshot:

- Customer list or individual customer form

## Step 3: Create Product Master Data

Create the following products:

| Product | Cost | Sales Price | Minimum Stock | Maximum Stock |
| --- | ---: | ---: | ---: | ---: |
| Wireless Mouse | 150 | 250 | 30 | 60 |
| Mechanical Keyboard | 300 | 500 | 30 | 50 |
| 24-inch Monitor | 3000 | 4500 | 10 | 20 |
| Business Laptop | 18000 | 24000 | 5 | 15 |
| Office Printer | 4000 | 6200 | 5 | 12 |
| HDMI Cable | 80 | 150 | 40 | 100 |
| Office Chair | 1200 | 2200 | 10 | 25 |
| Barcode Scanner | 2500 | 3900 | 5 | 15 |

Recommended screenshot:

- Product list or product form showing sales price and cost

## Step 4: Create Purchase Order PO-001

Create a Purchase Order for:

- Vendor: Anadolu Electronics
- Wireless Mouse: 30 units at 150
- Mechanical Keyboard: 20 units at 300
- 24-inch Monitor: 10 units at 3000

Confirm the Purchase Order and validate the receipt.

Recommended screenshots:

- Purchase Order PO-001
- Receipt validation screen

## Step 5: Create Sales Order SO-001

Create a Sales Order for:

- Customer: ABC Consulting
- Wireless Mouse: 5 units at 250
- Mechanical Keyboard: 3 units at 500
- 24-inch Monitor: 2 units at 4500

Confirm the Sales Order and validate delivery.

Recommended screenshots:

- Sales Order SO-001
- Delivery validation screen

## Step 6: Create Purchase Order PO-002

Create a Purchase Order for:

- Vendor: OfficePro Supply
- Wireless Mouse: 20 units at 150
- Mechanical Keyboard: 10 units at 300

Confirm the Purchase Order and validate the receipt.

Recommended screenshot:

- Purchase Order PO-002

## Step 7: Review Stock

After the sample transactions, expected stock is:

| Product | Current Stock |
| --- | ---: |
| Wireless Mouse | 45 |
| Mechanical Keyboard | 27 |
| 24-inch Monitor | 8 |

Recommended screenshots:

- Inventory on hand
- Stock movements

## Step 8: Run SQL Reports

Open pgAdmin or another PostgreSQL tool and run the SQL files in this order:

1. `sql/create_tables.sql`
2. `sql/insert_sample_data.sql`
3. Queries from `sql/reports.sql`

Recommended screenshots:

- Current Stock Report output
- Critical Stock Report output
- Replenishment Suggestion Report output

## Portfolio Tip

When adding screenshots to GitHub, place them in the `screenshots/` folder and link them from the main `README.md` or from the related documentation page.
