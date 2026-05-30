# Business Requirements

## Project Context

NovaTech Office Supplies is a small office equipment company that purchases office technology and furniture from vendors, stores products in inventory, and sells them to business customers.

The company wants a simple ERP process that supports purchasing, goods receipt, sales delivery, stock tracking, and basic inventory reporting.

## Business Goals

- Maintain clean vendor, customer, and product master data.
- Create Purchase Orders for products ordered from vendors.
- Record Goods Receipts when purchased products arrive.
- Increase stock automatically after receipts.
- Create Sales Orders for customer demand.
- Validate deliveries and reduce stock after shipment.
- Track stock movements for audit and analysis.
- Identify products below minimum stock.
- Suggest replenishment quantities based on minimum and maximum stock levels.
- Produce SQL-based reporting for procurement and inventory decisions.

## Business Scope

The scope includes:

- Vendors
- Customers
- Products
- Purchase Orders
- Purchase Order lines
- Sales Orders
- Sales Order lines
- Stock movement records
- Inventory reporting
- Replenishment analysis

The scope does not include:

- Accounting postings
- Invoicing
- Payments
- Warehouse bin management
- Barcode device integration
- Direct connection to an Odoo production database

## Master Data Requirements

### Vendors

The system should store vendors that supply products to NovaTech Office Supplies.

Sample vendors:

- Anadolu Electronics
- OfficePro Supply
- TechnoSource B2B
- Global Office Supplier
- Akdeniz Computer Systems

### Customers

The system should store business customers that buy products from NovaTech Office Supplies.

Sample customers:

- ABC Consulting
- Mavi Software
- Delta Academy
- Northwind Logistics
- Bright Future Education

### Products

The system should store product cost, sales price, minimum stock, and maximum stock.

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

## Transaction Requirements

### Purchase Process

The purchasing process should support creating Purchase Orders for vendors and receiving ordered products into stock.

Sample Purchase Order PO-001:

- Vendor: Anadolu Electronics
- Wireless Mouse: 30 units at 150
- Mechanical Keyboard: 20 units at 300
- 24-inch Monitor: 10 units at 3000
- Status: Received

Sample Purchase Order PO-002:

- Vendor: OfficePro Supply
- Wireless Mouse: 20 units at 150
- Mechanical Keyboard: 10 units at 300
- Status: Received

### Sales Process

The sales process should support creating Sales Orders for customers and validating delivery.

Sample Sales Order SO-001:

- Customer: ABC Consulting
- Wireless Mouse: 5 units at 250
- Mechanical Keyboard: 3 units at 500
- 24-inch Monitor: 2 units at 4500
- Status: Delivered

## Reporting Requirements

The reporting database should provide:

- Current stock by product
- Products below minimum stock
- Total spend by vendor
- Top selling products
- Stock movement history
- Purchase Order status summary
- Sales Order status summary
- Gross margin by product
- Replenishment suggestions

## Success Criteria

The project is successful when:

- The business process is clearly documented.
- The Odoo process steps are easy for a beginner to follow.
- The PostgreSQL files can create the reporting tables and insert sample data.
- The report queries calculate stock from movement records.
- The sample stock results match the expected quantities:
  - Wireless Mouse: 45
  - Mechanical Keyboard: 27
  - 24-inch Monitor: 8
