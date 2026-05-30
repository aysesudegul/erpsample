-- ERP Procurement & Inventory Management Case Study
-- PostgreSQL reporting database structure

DROP TABLE IF EXISTS stock_movements;
DROP TABLE IF EXISTS sales_order_items;
DROP TABLE IF EXISTS sales_orders;
DROP TABLE IF EXISTS purchase_order_items;
DROP TABLE IF EXISTS purchase_orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS vendors;

CREATE TABLE vendors (
    vendor_id SERIAL PRIMARY KEY,
    vendor_name VARCHAR(150) NOT NULL UNIQUE,
    country VARCHAR(100) DEFAULT 'Turkey',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(150) NOT NULL UNIQUE,
    country VARCHAR(100) DEFAULT 'Turkey',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL UNIQUE,
    cost NUMERIC(12, 2) NOT NULL CHECK (cost >= 0),
    sales_price NUMERIC(12, 2) NOT NULL CHECK (sales_price >= 0),
    min_stock INTEGER NOT NULL CHECK (min_stock >= 0),
    max_stock INTEGER NOT NULL CHECK (max_stock >= min_stock),
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE purchase_orders (
    purchase_order_id SERIAL PRIMARY KEY,
    po_number VARCHAR(30) NOT NULL UNIQUE,
    vendor_id INTEGER NOT NULL REFERENCES vendors(vendor_id),
    order_date DATE NOT NULL,
    status VARCHAR(30) NOT NULL CHECK (status IN ('Draft', 'Confirmed', 'Received', 'Cancelled')),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE purchase_order_items (
    purchase_order_item_id SERIAL PRIMARY KEY,
    purchase_order_id INTEGER NOT NULL REFERENCES purchase_orders(purchase_order_id) ON DELETE CASCADE,
    product_id INTEGER NOT NULL REFERENCES products(product_id),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_cost NUMERIC(12, 2) NOT NULL CHECK (unit_cost >= 0),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (purchase_order_id, product_id)
);

CREATE TABLE sales_orders (
    sales_order_id SERIAL PRIMARY KEY,
    so_number VARCHAR(30) NOT NULL UNIQUE,
    customer_id INTEGER NOT NULL REFERENCES customers(customer_id),
    order_date DATE NOT NULL,
    status VARCHAR(30) NOT NULL CHECK (status IN ('Draft', 'Confirmed', 'Delivered', 'Cancelled')),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sales_order_items (
    sales_order_item_id SERIAL PRIMARY KEY,
    sales_order_id INTEGER NOT NULL REFERENCES sales_orders(sales_order_id) ON DELETE CASCADE,
    product_id INTEGER NOT NULL REFERENCES products(product_id),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price NUMERIC(12, 2) NOT NULL CHECK (unit_price >= 0),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (sales_order_id, product_id)
);

CREATE TABLE stock_movements (
    stock_movement_id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES products(product_id),
    movement_date DATE NOT NULL,
    movement_type VARCHAR(30) NOT NULL CHECK (movement_type IN ('PURCHASE_IN', 'SALES_OUT')),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    reference_document VARCHAR(30) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_purchase_orders_vendor_id ON purchase_orders(vendor_id);
CREATE INDEX idx_purchase_order_items_product_id ON purchase_order_items(product_id);
CREATE INDEX idx_sales_orders_customer_id ON sales_orders(customer_id);
CREATE INDEX idx_sales_order_items_product_id ON sales_order_items(product_id);
CREATE INDEX idx_stock_movements_product_id ON stock_movements(product_id);
CREATE INDEX idx_stock_movements_reference_document ON stock_movements(reference_document);
