# Test Cases

## Test Case 1: Create Vendor Master Data

| Field | Value |
| --- | --- |
| Test Objective | Verify that vendor records can be created and used in Purchase Orders. |
| Test Data | Anadolu Electronics, OfficePro Supply |
| Steps | Create vendor master records. |
| Expected Result | Vendors are available for Purchase Order creation. |
| Status | Passed in case study design |

## Test Case 2: Create Customer Master Data

| Field | Value |
| --- | --- |
| Test Objective | Verify that customer records can be created and used in Sales Orders. |
| Test Data | ABC Consulting |
| Steps | Create customer master record. |
| Expected Result | Customer is available for Sales Order creation. |
| Status | Passed in case study design |

## Test Case 3: Create Product Master Data

| Field | Value |
| --- | --- |
| Test Objective | Verify that products contain cost, sales price, minimum stock, and maximum stock. |
| Test Data | Wireless Mouse, Mechanical Keyboard, 24-inch Monitor |
| Steps | Create product master records. |
| Expected Result | Products are available for purchasing, sales, and reporting. |
| Status | Passed in case study design |

## Test Case 4: Process Purchase Order PO-001

| Field | Value |
| --- | --- |
| Test Objective | Verify that a Purchase Order can be created and received. |
| Test Data | PO-001 for Anadolu Electronics |
| Steps | Create PO-001, add product lines, validate receipt. |
| Expected Result | Stock increases for Wireless Mouse, Mechanical Keyboard, and 24-inch Monitor. |
| Status | Passed in sample data |

## Test Case 5: Process Sales Order SO-001

| Field | Value |
| --- | --- |
| Test Objective | Verify that a Sales Order can be delivered and stock decreases. |
| Test Data | SO-001 for ABC Consulting |
| Steps | Create SO-001, add product lines, validate delivery. |
| Expected Result | Stock decreases for delivered products. |
| Status | Passed in sample data |

## Test Case 6: Verify Current Stock

| Field | Value |
| --- | --- |
| Test Objective | Verify current stock after purchase and sales transactions. |
| Test Data | PO-001, PO-002, SO-001 |
| Steps | Run Current Stock Report from `sql/reports.sql`. |
| Expected Result | Wireless Mouse = 45, Mechanical Keyboard = 27, 24-inch Monitor = 8. |
| Status | Passed by expected calculation |

## Test Case 7: Identify Critical Stock

| Field | Value |
| --- | --- |
| Test Objective | Verify products below minimum stock are flagged. |
| Test Data | Mechanical Keyboard, 24-inch Monitor |
| Steps | Run Critical Stock Report from `sql/reports.sql`. |
| Expected Result | Products with current stock below minimum stock are displayed. |
| Status | Passed by report design |

## Test Case 8: Generate Replenishment Suggestions

| Field | Value |
| --- | --- |
| Test Objective | Verify suggested purchase quantities are calculated correctly. |
| Test Data | Product minimum and maximum stock values |
| Steps | Run Replenishment Suggestion Report from `sql/reports.sql`. |
| Expected Result | If current stock is below minimum stock, suggested quantity equals maximum stock minus current stock. |
| Status | Passed by report design |

## Test Case 9: Review Vendor Spend

| Field | Value |
| --- | --- |
| Test Objective | Verify total purchasing value by vendor. |
| Test Data | PO-001, PO-002 |
| Steps | Run Vendor Spend Report from `sql/reports.sql`. |
| Expected Result | Vendor spend is calculated from Purchase Order item quantities and unit costs. |
| Status | Passed by report design |

## Test Case 10: Review Gross Margin by Product

| Field | Value |
| --- | --- |
| Test Objective | Verify sales revenue, estimated cost, and gross margin by product. |
| Test Data | SO-001 |
| Steps | Run Gross Margin by Product report from `sql/reports.sql`. |
| Expected Result | Gross margin equals sales revenue minus estimated cost. |
| Status | Passed by report design |
