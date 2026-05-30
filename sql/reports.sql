-- ERP Procurement & Inventory Management Case Study
-- PostgreSQL reporting queries

-- 1. Current Stock Report
SELECT
    p.product_name,
    p.min_stock,
    p.max_stock,
    COALESCE(SUM(
        CASE
            WHEN sm.movement_type = 'PURCHASE_IN' THEN sm.quantity
            WHEN sm.movement_type = 'SALES_OUT' THEN -sm.quantity
            ELSE 0
        END
    ), 0) AS current_stock
FROM products p
LEFT JOIN stock_movements sm ON sm.product_id = p.product_id
GROUP BY p.product_id, p.product_name, p.min_stock, p.max_stock
ORDER BY p.product_name;

-- 2. Critical Stock Report
WITH current_stock AS (
    SELECT
        p.product_id,
        p.product_name,
        p.min_stock,
        p.max_stock,
        COALESCE(SUM(
            CASE
                WHEN sm.movement_type = 'PURCHASE_IN' THEN sm.quantity
                WHEN sm.movement_type = 'SALES_OUT' THEN -sm.quantity
                ELSE 0
            END
        ), 0) AS current_stock
    FROM products p
    LEFT JOIN stock_movements sm ON sm.product_id = p.product_id
    GROUP BY p.product_id, p.product_name, p.min_stock, p.max_stock
)
SELECT
    product_name,
    current_stock,
    min_stock,
    max_stock,
    min_stock - current_stock AS shortage_quantity
FROM current_stock
WHERE current_stock < min_stock
ORDER BY shortage_quantity DESC, product_name;

-- 3. Vendor Spend Report
SELECT
    v.vendor_name,
    COUNT(DISTINCT po.purchase_order_id) AS purchase_order_count,
    SUM(poi.quantity) AS total_units_purchased,
    SUM(poi.quantity * poi.unit_cost) AS total_spend
FROM vendors v
JOIN purchase_orders po ON po.vendor_id = v.vendor_id
JOIN purchase_order_items poi ON poi.purchase_order_id = po.purchase_order_id
GROUP BY v.vendor_id, v.vendor_name
ORDER BY total_spend DESC;

-- 4. Top Selling Products Report
SELECT
    p.product_name,
    SUM(soi.quantity) AS total_units_sold,
    SUM(soi.quantity * soi.unit_price) AS total_sales_revenue
FROM products p
JOIN sales_order_items soi ON soi.product_id = p.product_id
JOIN sales_orders so ON so.sales_order_id = soi.sales_order_id
WHERE so.status = 'Delivered'
GROUP BY p.product_id, p.product_name
ORDER BY total_units_sold DESC, total_sales_revenue DESC;

-- 5. Stock Movement History Report
SELECT
    sm.movement_date,
    p.product_name,
    sm.movement_type,
    CASE
        WHEN sm.movement_type = 'PURCHASE_IN' THEN sm.quantity
        WHEN sm.movement_type = 'SALES_OUT' THEN -sm.quantity
        ELSE sm.quantity
    END AS signed_quantity,
    sm.quantity AS movement_quantity,
    sm.reference_document,
    sm.notes
FROM stock_movements sm
JOIN products p ON p.product_id = sm.product_id
ORDER BY sm.movement_date, sm.stock_movement_id;

-- 6. Purchase Order Status Report
SELECT
    po.status,
    COUNT(*) AS purchase_order_count,
    SUM(poi.quantity * poi.unit_cost) AS total_order_value
FROM purchase_orders po
JOIN purchase_order_items poi ON poi.purchase_order_id = po.purchase_order_id
GROUP BY po.status
ORDER BY po.status;

-- 7. Sales Order Status Report
SELECT
    so.status,
    COUNT(*) AS sales_order_count,
    SUM(soi.quantity * soi.unit_price) AS total_sales_value
FROM sales_orders so
JOIN sales_order_items soi ON soi.sales_order_id = so.sales_order_id
GROUP BY so.status
ORDER BY so.status;

-- 8. Gross Margin by Product
SELECT
    p.product_name,
    SUM(soi.quantity) AS units_sold,
    SUM(soi.quantity * soi.unit_price) AS sales_revenue,
    SUM(soi.quantity * p.cost) AS estimated_cost,
    SUM(soi.quantity * soi.unit_price) - SUM(soi.quantity * p.cost) AS gross_margin,
    ROUND(
        (
            (SUM(soi.quantity * soi.unit_price) - SUM(soi.quantity * p.cost))
            / NULLIF(SUM(soi.quantity * soi.unit_price), 0)
        ) * 100,
        2
    ) AS gross_margin_percent
FROM products p
JOIN sales_order_items soi ON soi.product_id = p.product_id
JOIN sales_orders so ON so.sales_order_id = soi.sales_order_id
WHERE so.status = 'Delivered'
GROUP BY p.product_id, p.product_name
ORDER BY gross_margin DESC;

-- 9. Replenishment Suggestion Report
WITH current_stock AS (
    SELECT
        p.product_id,
        p.product_name,
        p.min_stock,
        p.max_stock,
        COALESCE(SUM(
            CASE
                WHEN sm.movement_type = 'PURCHASE_IN' THEN sm.quantity
                WHEN sm.movement_type = 'SALES_OUT' THEN -sm.quantity
                ELSE 0
            END
        ), 0) AS current_stock
    FROM products p
    LEFT JOIN stock_movements sm ON sm.product_id = p.product_id
    GROUP BY p.product_id, p.product_name, p.min_stock, p.max_stock
)
SELECT
    product_name,
    current_stock,
    min_stock,
    max_stock,
    CASE
        WHEN current_stock < min_stock THEN max_stock - current_stock
        ELSE 0
    END AS suggested_purchase_quantity
FROM current_stock
ORDER BY suggested_purchase_quantity DESC, product_name;
