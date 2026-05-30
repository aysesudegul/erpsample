-- ERP Procurement & Inventory Management Case Study
-- Sample data for PostgreSQL reporting database

INSERT INTO vendors (vendor_name) VALUES
    ('Anadolu Electronics'),
    ('OfficePro Supply'),
    ('TechnoSource B2B'),
    ('Global Office Supplier'),
    ('Akdeniz Computer Systems');

INSERT INTO customers (customer_name) VALUES
    ('ABC Consulting'),
    ('Mavi Software'),
    ('Delta Academy'),
    ('Northwind Logistics'),
    ('Bright Future Education');

INSERT INTO products (product_name, cost, sales_price, min_stock, max_stock) VALUES
    ('Wireless Mouse', 150.00, 250.00, 30, 60),
    ('Mechanical Keyboard', 300.00, 500.00, 30, 50),
    ('24-inch Monitor', 3000.00, 4500.00, 10, 20),
    ('Business Laptop', 18000.00, 24000.00, 5, 15),
    ('Office Printer', 4000.00, 6200.00, 5, 12),
    ('HDMI Cable', 80.00, 150.00, 40, 100),
    ('Office Chair', 1200.00, 2200.00, 10, 25),
    ('Barcode Scanner', 2500.00, 3900.00, 5, 15);

INSERT INTO purchase_orders (po_number, vendor_id, order_date, status)
SELECT 'PO-001', vendor_id, DATE '2026-01-10', 'Received'
FROM vendors
WHERE vendor_name = 'Anadolu Electronics';

INSERT INTO purchase_order_items (purchase_order_id, product_id, quantity, unit_cost)
SELECT po.purchase_order_id, p.product_id, data.quantity, data.unit_cost
FROM purchase_orders po
CROSS JOIN (
    VALUES
        ('Wireless Mouse', 30, 150.00),
        ('Mechanical Keyboard', 20, 300.00),
        ('24-inch Monitor', 10, 3000.00)
) AS data(product_name, quantity, unit_cost)
JOIN products p ON p.product_name = data.product_name
WHERE po.po_number = 'PO-001';

INSERT INTO sales_orders (so_number, customer_id, order_date, status)
SELECT 'SO-001', customer_id, DATE '2026-01-15', 'Delivered'
FROM customers
WHERE customer_name = 'ABC Consulting';

INSERT INTO sales_order_items (sales_order_id, product_id, quantity, unit_price)
SELECT so.sales_order_id, p.product_id, data.quantity, data.unit_price
FROM sales_orders so
CROSS JOIN (
    VALUES
        ('Wireless Mouse', 5, 250.00),
        ('Mechanical Keyboard', 3, 500.00),
        ('24-inch Monitor', 2, 4500.00)
) AS data(product_name, quantity, unit_price)
JOIN products p ON p.product_name = data.product_name
WHERE so.so_number = 'SO-001';

INSERT INTO purchase_orders (po_number, vendor_id, order_date, status)
SELECT 'PO-002', vendor_id, DATE '2026-01-20', 'Received'
FROM vendors
WHERE vendor_name = 'OfficePro Supply';

INSERT INTO purchase_order_items (purchase_order_id, product_id, quantity, unit_cost)
SELECT po.purchase_order_id, p.product_id, data.quantity, data.unit_cost
FROM purchase_orders po
CROSS JOIN (
    VALUES
        ('Wireless Mouse', 20, 150.00),
        ('Mechanical Keyboard', 10, 300.00)
) AS data(product_name, quantity, unit_cost)
JOIN products p ON p.product_name = data.product_name
WHERE po.po_number = 'PO-002';

INSERT INTO stock_movements (product_id, movement_date, movement_type, quantity, reference_document, notes)
SELECT p.product_id, DATE '2026-01-11', 'PURCHASE_IN', data.quantity, 'PO-001', 'Goods receipt for Purchase Order PO-001'
FROM (
    VALUES
        ('Wireless Mouse', 30),
        ('Mechanical Keyboard', 20),
        ('24-inch Monitor', 10)
) AS data(product_name, quantity)
JOIN products p ON p.product_name = data.product_name;

INSERT INTO stock_movements (product_id, movement_date, movement_type, quantity, reference_document, notes)
SELECT p.product_id, DATE '2026-01-16', 'SALES_OUT', data.quantity, 'SO-001', 'Delivery validation for Sales Order SO-001'
FROM (
    VALUES
        ('Wireless Mouse', 5),
        ('Mechanical Keyboard', 3),
        ('24-inch Monitor', 2)
) AS data(product_name, quantity)
JOIN products p ON p.product_name = data.product_name;

INSERT INTO stock_movements (product_id, movement_date, movement_type, quantity, reference_document, notes)
SELECT p.product_id, DATE '2026-01-21', 'PURCHASE_IN', data.quantity, 'PO-002', 'Goods receipt for Purchase Order PO-002'
FROM (
    VALUES
        ('Wireless Mouse', 20),
        ('Mechanical Keyboard', 10)
) AS data(product_name, quantity)
JOIN products p ON p.product_name = data.product_name;
