import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  ArrowDownToLine,
  ArrowUpFromLine,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardList,
  Factory,
  FileClock,
  FilePlus2,
  Gauge,
  Home,
  Lightbulb,
  LineChart,
  PackageCheck,
  PieChart,
  RefreshCw,
  ShoppingCart,
  Target,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import "./styles.css";

const STORAGE_KEY = "novatech-erp-stock-project-v3-tr";

const initialData = {
  vendors: [
    { id: "v-1", name: "Anadolu Electronics", category: "Elektronik", city: "Istanbul" },
    { id: "v-2", name: "OfficePro Supply", category: "Ofis Ekipmanı", city: "Ankara" },
    { id: "v-3", name: "TechnoSource B2B", category: "BT Donanımı", city: "İzmir" },
    { id: "v-4", name: "Global Office Supplier", category: "Genel Tedarik", city: "Berlin" },
    { id: "v-5", name: "Akdeniz Computer Systems", category: "Bilgisayar Sistemleri", city: "Antalya" },
  ],
  customers: [
    { id: "c-1", name: "ABC Consulting", segment: "Danışmanlık", city: "Vienna" },
    { id: "c-2", name: "Mavi Software", segment: "Yazılım", city: "Istanbul" },
    { id: "c-3", name: "Delta Academy", segment: "Eğitim", city: "Ankara" },
    { id: "c-4", name: "Northwind Logistics", segment: "Lojistik", city: "Hamburg" },
    { id: "c-5", name: "Bright Future Education", segment: "Eğitim", city: "İzmir" },
  ],
  products: [
    {
      id: "p-1",
      name: "Kablosuz Fare",
      cost: 150,
      salesPrice: 250,
      minStock: 30,
      maxStock: 60,
      stock: 22,
      vendorId: "v-2",
    },
    {
      id: "p-2",
      name: "Mekanik Klavye",
      cost: 300,
      salesPrice: 500,
      minStock: 30,
      maxStock: 50,
      stock: 36,
      vendorId: "v-3",
    },
    {
      id: "p-3",
      name: "24 inç Monitor",
      cost: 3000,
      salesPrice: 4500,
      minStock: 10,
      maxStock: 20,
      stock: 8,
      vendorId: "v-1",
    },
    {
      id: "p-4",
      name: "İş Laptopu",
      cost: 18000,
      salesPrice: 24000,
      minStock: 5,
      maxStock: 15,
      stock: 7,
      vendorId: "v-5",
    },
  ],
  purchaseOrders: [],
  salesOrders: [],
  movements: [
    {
      id: "m-seed-1",
      date: new Date().toISOString(),
      productId: "p-1",
      type: "ACILIS_STOK",
      quantity: 22,
      source: "Açılış Bakiyesi",
      destination: "Depo",
      relatedDocument: "INIT-001",
    },
    {
      id: "m-seed-2",
      date: new Date().toISOString(),
      productId: "p-2",
      type: "ACILIS_STOK",
      quantity: 36,
      source: "Açılış Bakiyesi",
      destination: "Depo",
      relatedDocument: "INIT-001",
    },
    {
      id: "m-seed-3",
      date: new Date().toISOString(),
      productId: "p-3",
      type: "ACILIS_STOK",
      quantity: 8,
      source: "Açılış Bakiyesi",
      destination: "Depo",
      relatedDocument: "INIT-001",
    },
    {
      id: "m-seed-4",
      date: new Date().toISOString(),
      productId: "p-4",
      type: "ACILIS_STOK",
      quantity: 7,
      source: "Açılış Bakiyesi",
      destination: "Depo",
      relatedDocument: "INIT-001",
    },
  ],
};

const navItems = [
  { id: "dashboard", label: "Panel", icon: Home },
  { id: "analytics", label: "Analiz", icon: LineChart },
  { id: "master", label: "Ana Veriler", icon: Building2 },
  { id: "purchase", label: "Satın Alma", icon: ClipboardList },
  { id: "sales", label: "Satış", icon: ShoppingCart },
  { id: "inventory", label: "Stok", icon: Warehouse },
  { id: "movements", label: "Stok Hareketleri", icon: FileClock },
  { id: "replenishment", label: "İkmal", icon: Lightbulb },
  { id: "mapping", label: "SAP MM Eşleme", icon: Boxes },
];

const mappingRows = [
  ["Ürün", "Material Master"],
  ["Tedarikçi", "Supplier / Business Partner"],
  ["Satın Alma Siparişi", "SAP Purchase Order"],
  ["Mal Girişi", "SAP Goods Receipt"],
  ["Stok Hareketi", "SAP Material Document / Movement Type"],
  ["İkmal Önerisi", "MRP / Reorder Planning"],
  ["Stok Sayfası", "Inventory Management"],
];

function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialData;
  } catch {
    return initialData;
  }
}

function App() {
  const [data, setData] = useState(loadData);
  const [activePage, setActivePage] = useState("dashboard");
  const [notice, setNotice] = useState(null);

  function updateData(updater, message, type = "success") {
    setData((current) => {
      const next = typeof updater === "function" ? updater(current) : updater;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
    if (message) {
      setNotice({ message, type });
      window.setTimeout(() => setNotice(null), 3600);
    }
  }

  function resetDemo() {
    updateData(initialData, "Demo verileri sıfırlandı.");
  }

  const renderPage = () => {
    switch (activePage) {
      case "analytics":
        return <Analytics data={data} />;
      case "master":
        return <MasterData data={data} updateData={updateData} />;
      case "purchase":
        return <PurchaseOrders data={data} updateData={updateData} />;
      case "sales":
        return <SalesOrders data={data} updateData={updateData} />;
      case "inventory":
        return <Inventory data={data} />;
      case "movements":
        return <Movements data={data} />;
      case "replenishment":
        return <Replenishment data={data} />;
      case "mapping":
        return <SapMapping />;
      default:
        return <Dashboard data={data} setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <Factory size={24} />
          </div>
          <div>
            <span>NovaTech</span>
            <strong>ERP Stok Projesi</strong>
          </div>
        </div>

        <nav className="nav-list" aria-label="Ana navigasyon">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={activePage === id ? "nav-button active" : "nav-button"}
              onClick={() => setActivePage(id)}
              type="button"
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <button className="reset-button" onClick={resetDemo} type="button">
          <RefreshCw size={16} />
          Demoyu Sıfırla
        </button>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Satın alma ve stok</p>
            <h1>ERP Stok Takip Projesi</h1>
          </div>
          <div className="process-strip" aria-label="ERP süreç akışı">
            {["Tedarikçi", "PO", "Mal Girişi", "Stok", "SO", "Teslimat"].map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        </header>

        {notice ? <div className={`toast ${notice.type}`}>{notice.message}</div> : null}
        {renderPage()}
      </main>
    </div>
  );
}

function Dashboard({ data, setActivePage }) {
  const metrics = useMetrics(data);
  const criticalProducts = data.products.filter((product) => product.stock < product.minStock);
  const valueCeiling = Math.max(...data.products.map((product) => product.stock * product.cost), 1);
  const pipeline = getPipelineData(data);

  return (
    <section className="page">
      <div className="metrics-grid">
        <MetricCard icon={Boxes} label="Toplam Ürün" value={metrics.totalProducts} tone="teal" />
        <MetricCard icon={Users} label="Toplam Tedarikçi" value={metrics.totalVendors} tone="violet" />
        <MetricCard icon={ClipboardList} label="Satın Alma Siparişi" value={metrics.totalPurchaseOrders} tone="blue" />
        <MetricCard icon={ShoppingCart} label="Satış Siparişi" value={metrics.totalSalesOrders} tone="coral" />
        <MetricCard icon={BarChart3} label="Mevcut Stok Değeri" value={formatCurrency(metrics.stockValue)} tone="green" />
        <MetricCard icon={AlertTriangle} label="Kritik Stok Kalemi" value={metrics.criticalStockItems} tone="amber" />
      </div>

      <div className="dashboard-layout">
        <section className="panel wide-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Stok değeri</p>
              <h2>Ürün Bazında Stok Değeri</h2>
            </div>
            <PackageCheck size={22} />
          </div>
          <div className="bar-list">
            {data.products.map((product) => {
              const value = product.stock * product.cost;
              return (
                <div className="bar-row" key={product.id}>
                  <div className="bar-meta">
                    <span>{product.name}</span>
                    <strong>{formatCurrency(value)}</strong>
                  </div>
                  <div className="bar-track">
                    <span style={{ width: `${Math.max(7, (value / valueCeiling) * 100)}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Stok kontrolü</p>
              <h2>Kritik Stok</h2>
            </div>
            <AlertTriangle size={22} />
          </div>
          {criticalProducts.length ? (
            <div className="alert-list">
              {criticalProducts.map((product) => (
                <button
                  className="alert-item"
                  key={product.id}
                  type="button"
                  onClick={() => setActivePage("replenishment")}
                >
                  <span>{product.name}</span>
                  <strong>{product.stock} / min {product.minStock}</strong>
                </button>
              ))}
            </div>
          ) : (
            <p className="empty-state">Minimum stok altında ürün yok.</p>
          )}
        </section>
      </div>

      <div className="chart-grid">
        <ChartPanel eyebrow="Stok sağlığı" title="Durum Dağılımı" icon={PieChart}>
          <StatusDonut data={data} />
        </ChartPanel>
        <ChartPanel eyebrow="Belge akışı" title="Sipariş Hattı" icon={Gauge}>
          <PipelineChart rows={pipeline} />
        </ChartPanel>
      </div>

      <section className="process-band">
        <div>
          <p className="eyebrow">Süreç</p>
          <h2>Tedarikçiden depoya, depodan müşteriye</h2>
        </div>
        <div className="process-cards">
          <ProcessStep icon={FilePlus2} title="PO Oluştur" text="Tedarikçi, ürün ve miktar seçilir." />
          <ProcessStep icon={ArrowDownToLine} title="Mal Girişi" text="Ürün depoya girer, stok artar." />
          <ProcessStep icon={Truck} title="Teslimat" text="Ürün müşteriye gider, stok azalır." />
        </div>
      </section>
    </section>
  );
}

function Analytics({ data }) {
  const metrics = useMetrics(data);
  const riskRows = getRiskRows(data);
  const marginRows = getMarginRows(data);
  const movementRows = getMovementRows(data);
  const coverageRows = getCoverageRows(data);
  const maxRisk = Math.max(...riskRows.map((row) => row.riskScore), 1);
  const maxMovement = Math.max(...movementRows.map((row) => row.quantity), 1);
  const topRisk = riskRows[0];

  return (
    <section className="page">
      <SectionTitle eyebrow="Analiz" title="Stok ve Tedarik Durumu" icon={LineChart} />

      <div className="analysis-grid">
        <InsightCard
          icon={AlertTriangle}
          title="Öncelikli Aksiyon"
          value={topRisk ? topRisk.name : "Risk yok"}
          text={topRisk ? `${topRisk.shortage} adet eksik. Önerilen alım: ${topRisk.suggestion}.` : "Stoklar iyi görünüyor."}
          tone="amber"
        />
        <InsightCard
          icon={Target}
          title="Brüt Marj Potansiyeli"
          value={formatCurrency(metrics.marginPotential)}
          text="Mevcut stok satılırsa oluşabilecek tahmini kar."
          tone="green"
        />
        <InsightCard
          icon={BarChart3}
          title="Stok Değeri"
          value={formatCurrency(metrics.stockValue)}
          text={`${metrics.criticalStockItems} ürün kritik seviyede.`}
          tone="teal"
        />
      </div>

      <div className="chart-grid">
        <ChartPanel eyebrow="Risk analizi" title="Kritiklik Skoru" icon={AlertTriangle}>
          <RankedBars
            rows={riskRows.map((row) => ({
              label: row.name,
              value: row.riskScore,
              valueLabel: `${row.riskScore} puan`,
              subLabel: `${row.shortage} adet eksik`,
            }))}
            maxValue={maxRisk}
            tone="risk"
          />
        </ChartPanel>

        <ChartPanel eyebrow="Stok kapsamı" title="Min-Max Doluluk Oranı" icon={Gauge}>
          <CoverageChart rows={coverageRows} />
        </ChartPanel>

        <ChartPanel eyebrow="Kârlılık" title="Ürün Bazlı Brüt Marj" icon={BarChart3}>
          <RankedBars
            rows={marginRows.map((row) => ({
              label: row.name,
              value: row.margin,
              valueLabel: `${row.marginRate}%`,
              subLabel: `${formatCurrency(row.margin)} / adet`,
            }))}
            maxValue={Math.max(...marginRows.map((row) => row.margin), 1)}
            tone="profit"
          />
        </ChartPanel>

        <ChartPanel eyebrow="Stok hareketi" title="Hareket Tipi Hacmi" icon={ArrowUpFromLine}>
          <RankedBars
            rows={movementRows.map((row) => ({
              label: movementLabel(row.type),
              value: row.quantity,
              valueLabel: `${row.quantity} adet`,
              subLabel: row.count === 1 ? "1 belge" : `${row.count} belge`,
            }))}
            maxValue={maxMovement}
            tone="flow"
          />
        </ChartPanel>
      </div>

      <section className="panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Not</p>
            <h2>Bu ekranda neye baktım?</h2>
          </div>
          <Lightbulb size={22} />
        </div>
        <div className="analysis-notes">
          <p>
            Kritik ürünlerde önerilen alımı maksimum stoktan mevcut stoku çıkararak hesapladım.
          </p>
          <p>
            Satın almada stok artıyor, satış teslimatında azalıyor. Hareket geçmişi de bunu
            belge bazında takip etmek için var.
          </p>
        </div>
      </section>
    </section>
  );
}

function MasterData({ data, updateData }) {
  const [vendorForm, setVendorForm] = useState({ name: "", category: "", city: "" });
  const [customerForm, setCustomerForm] = useState({ name: "", segment: "", city: "" });
  const [productForm, setProductForm] = useState({
    name: "",
    cost: "",
    salesPrice: "",
    minStock: "",
    maxStock: "",
    stock: "",
    vendorId: data.vendors[0]?.id || "",
  });

  function addRecord(collection, form, reset, label) {
    if (!form.name.trim()) return;
    updateData((current) => ({
      ...current,
      [collection]: [
        ...current[collection],
        { ...form, id: createId(collection), name: form.name.trim() },
      ],
    }), `${label} eklendi.`);
    reset();
  }

  function addProduct() {
    if (!productForm.name.trim()) return;
    const numericProduct = {
      ...productForm,
      id: createId("product"),
      name: productForm.name.trim(),
      cost: toNumber(productForm.cost),
      salesPrice: toNumber(productForm.salesPrice),
      minStock: toNumber(productForm.minStock),
      maxStock: toNumber(productForm.maxStock),
      stock: toNumber(productForm.stock),
    };
    updateData((current) => ({
      ...current,
      products: [...current.products, numericProduct],
    }), "Ürün eklendi.");
    setProductForm({
      name: "",
      cost: "",
      salesPrice: "",
      minStock: "",
      maxStock: "",
      stock: "",
      vendorId: data.vendors[0]?.id || "",
    });
  }

  return (
    <section className="page">
      <div className="three-column">
        <MasterPanel title="Tedarikçiler" icon={Building2} count={data.vendors.length}>
          <InlineForm>
            <input value={vendorForm.name} onChange={(event) => setVendorForm({ ...vendorForm, name: event.target.value })} placeholder="Tedarikçi adı" />
            <input value={vendorForm.category} onChange={(event) => setVendorForm({ ...vendorForm, category: event.target.value })} placeholder="Kategori" />
            <input value={vendorForm.city} onChange={(event) => setVendorForm({ ...vendorForm, city: event.target.value })} placeholder="Şehir" />
            <button type="button" onClick={() => addRecord("vendors", vendorForm, () => setVendorForm({ name: "", category: "", city: "" }), "Tedarikçi")}>
              Tedarikçi Ekle
            </button>
          </InlineForm>
          <DataList rows={data.vendors} primary="name" secondary={(item) => `${item.category || "Tedarikçi"} | ${item.city || "N/A"}`} />
        </MasterPanel>

        <MasterPanel title="Müşteriler" icon={Users} count={data.customers.length}>
          <InlineForm>
            <input value={customerForm.name} onChange={(event) => setCustomerForm({ ...customerForm, name: event.target.value })} placeholder="Müşteri adı" />
            <input value={customerForm.segment} onChange={(event) => setCustomerForm({ ...customerForm, segment: event.target.value })} placeholder="Segment" />
            <input value={customerForm.city} onChange={(event) => setCustomerForm({ ...customerForm, city: event.target.value })} placeholder="Şehir" />
            <button type="button" onClick={() => addRecord("customers", customerForm, () => setCustomerForm({ name: "", segment: "", city: "" }), "Müşteri")}>
              Müşteri Ekle
            </button>
          </InlineForm>
          <DataList rows={data.customers} primary="name" secondary={(item) => `${item.segment || "Müşteri"} | ${item.city || "N/A"}`} />
        </MasterPanel>

        <MasterPanel title="Ürünler" icon={Boxes} count={data.products.length}>
          <InlineForm>
            <input value={productForm.name} onChange={(event) => setProductForm({ ...productForm, name: event.target.value })} placeholder="Ürün adı" />
            <input type="number" value={productForm.cost} onChange={(event) => setProductForm({ ...productForm, cost: event.target.value })} placeholder="Maliyet" />
            <input type="number" value={productForm.salesPrice} onChange={(event) => setProductForm({ ...productForm, salesPrice: event.target.value })} placeholder="Satış fiyatı" />
            <input type="number" value={productForm.minStock} onChange={(event) => setProductForm({ ...productForm, minStock: event.target.value })} placeholder="Min stok" />
            <input type="number" value={productForm.maxStock} onChange={(event) => setProductForm({ ...productForm, maxStock: event.target.value })} placeholder="Max stok" />
            <input type="number" value={productForm.stock} onChange={(event) => setProductForm({ ...productForm, stock: event.target.value })} placeholder="Mevcut stok" />
            <select value={productForm.vendorId} onChange={(event) => setProductForm({ ...productForm, vendorId: event.target.value })}>
              {data.vendors.map((vendor) => <option key={vendor.id} value={vendor.id}>{vendor.name}</option>)}
            </select>
            <button type="button" onClick={addProduct}>Ürün Ekle</button>
          </InlineForm>
          <div className="table-wrap compact-table">
            <table>
              <thead>
                <tr>
                  <th>Ürün</th>
                  <th>Maliyet</th>
                  <th>Satış</th>
                  <th>Stok</th>
                </tr>
              </thead>
              <tbody>
                {data.products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{formatCurrency(product.cost)}</td>
                    <td>{formatCurrency(product.salesPrice)}</td>
                    <td>{product.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MasterPanel>
      </div>
    </section>
  );
}

function PurchaseOrders({ data, updateData }) {
  const [form, setForm] = useState({
    vendorId: data.vendors[0]?.id || "",
    productId: data.products[0]?.id || "",
    quantity: 10,
  });

  function createPo() {
    if (!form.vendorId || !form.productId || toNumber(form.quantity) <= 0) return;
    const po = {
      id: createDocumentId("PO", data.purchaseOrders.length + 1),
      date: new Date().toISOString(),
      vendorId: form.vendorId,
      productId: form.productId,
      quantity: toNumber(form.quantity),
      status: "Oluşturuldu",
    };
    updateData((current) => ({ ...current, purchaseOrders: [po, ...current.purchaseOrders] }), `${po.id} oluşturuldu.`);
  }

  function changeStatus(orderId, nextStatus) {
    updateData((current) => ({
      ...current,
      purchaseOrders: current.purchaseOrders.map((order) =>
        order.id === orderId ? { ...order, status: nextStatus } : order
      ),
    }), `${orderId} ${nextStatus.toLowerCase()}.`);
  }

  function receiveGoods(order) {
    const vendor = findById(data.vendors, order.vendorId);
    updateData((current) => ({
      ...current,
      products: current.products.map((product) =>
        product.id === order.productId ? { ...product, stock: product.stock + order.quantity } : product
      ),
      purchaseOrders: current.purchaseOrders.map((item) =>
        item.id === order.id ? { ...item, status: "Teslim Alındı" } : item
      ),
      movements: [
        createMovement({
          productId: order.productId,
          type: "PURCHASE_IN",
          quantity: order.quantity,
          source: vendor?.name || "Tedarikçi",
          destination: "Depo",
          relatedDocument: order.id,
        }),
        ...current.movements,
      ],
    }), `${order.id} için mal girişi yapıldı. Stok arttı.`);
  }

  return (
    <DocumentPage
      title="Satın Alma Siparişi"
      eyebrow="Tedarik süreci"
      icon={ArrowDownToLine}
      form={
        <>
          <label>
            Tedarikçi
            <select value={form.vendorId} onChange={(event) => setForm({ ...form, vendorId: event.target.value })}>
              {data.vendors.map((vendor) => <option key={vendor.id} value={vendor.id}>{vendor.name}</option>)}
            </select>
          </label>
          <label>
            Ürün
            <select value={form.productId} onChange={(event) => setForm({ ...form, productId: event.target.value })}>
              {data.products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
            </select>
          </label>
          <label>
            Miktar
            <input type="number" min="1" value={form.quantity} onChange={(event) => setForm({ ...form, quantity: event.target.value })} />
          </label>
          <button type="button" onClick={createPo}>
            <FilePlus2 size={18} />
            Satın Alma Siparişi Oluştur
          </button>
        </>
      }
    >
      <OrdersTable
        emptyText="Henüz satın alma siparişi yok."
        headers={["Belge", "Tedarikçi", "Ürün", "Miktar", "Durum", "Aksiyonlar"]}
        rows={data.purchaseOrders}
        renderRow={(order) => (
          <tr key={order.id}>
            <td><strong>{order.id}</strong></td>
            <td>{findById(data.vendors, order.vendorId)?.name}</td>
            <td>{findById(data.products, order.productId)?.name}</td>
            <td>{order.quantity}</td>
            <td><StatusBadge status={order.status} /></td>
            <td>
              <div className="action-row">
                <button type="button" disabled={order.status !== "Oluşturuldu"} onClick={() => changeStatus(order.id, "Onaylandı")}>
                  <CheckCircle2 size={16} />
                  Onayla
                </button>
                <button type="button" disabled={order.status !== "Onaylandı"} onClick={() => receiveGoods(order)}>
                  <ArrowDownToLine size={16} />
                  Mal Girişi
                </button>
              </div>
            </td>
          </tr>
        )}
      />
    </DocumentPage>
  );
}

function SalesOrders({ data, updateData }) {
  const [form, setForm] = useState({
    customerId: data.customers[0]?.id || "",
    productId: data.products[0]?.id || "",
    quantity: 5,
  });

  function createSo() {
    if (!form.customerId || !form.productId || toNumber(form.quantity) <= 0) return;
    const so = {
      id: createDocumentId("SO", data.salesOrders.length + 1),
      date: new Date().toISOString(),
      customerId: form.customerId,
      productId: form.productId,
      quantity: toNumber(form.quantity),
      status: "Oluşturuldu",
    };
    updateData((current) => ({ ...current, salesOrders: [so, ...current.salesOrders] }), `${so.id} oluşturuldu.`);
  }

  function changeStatus(orderId, nextStatus) {
    updateData((current) => ({
      ...current,
      salesOrders: current.salesOrders.map((order) =>
        order.id === orderId ? { ...order, status: nextStatus } : order
      ),
    }), `${orderId} ${nextStatus.toLowerCase()}.`);
  }

  function deliverProducts(order) {
    const product = findById(data.products, order.productId);
    if (!product || product.stock < order.quantity) {
      updateData((current) => current, "Bu ürün için yeterli stok yok.", "warning");
      return;
    }
    const customer = findById(data.customers, order.customerId);
    updateData((current) => ({
      ...current,
      products: current.products.map((item) =>
        item.id === order.productId ? { ...item, stock: item.stock - order.quantity } : item
      ),
      salesOrders: current.salesOrders.map((item) =>
        item.id === order.id ? { ...item, status: "Teslim Edildi" } : item
      ),
      movements: [
        createMovement({
          productId: order.productId,
          type: "SALES_OUT",
          quantity: order.quantity,
          source: "Depo",
          destination: customer?.name || "Müşteri",
          relatedDocument: order.id,
        }),
        ...current.movements,
      ],
    }), `${order.id} teslim edildi. Stok azaldı.`);
  }

  return (
    <DocumentPage
      title="Satış Siparişi"
      eyebrow="Sipariş karşılama"
      icon={ArrowUpFromLine}
      form={
        <>
          <label>
            Müşteri
            <select value={form.customerId} onChange={(event) => setForm({ ...form, customerId: event.target.value })}>
              {data.customers.map((customer) => <option key={customer.id} value={customer.id}>{customer.name}</option>)}
            </select>
          </label>
          <label>
            Ürün
            <select value={form.productId} onChange={(event) => setForm({ ...form, productId: event.target.value })}>
              {data.products.map((product) => <option key={product.id} value={product.id}>{product.name} ({product.stock} stok)</option>)}
            </select>
          </label>
          <label>
            Miktar
            <input type="number" min="1" value={form.quantity} onChange={(event) => setForm({ ...form, quantity: event.target.value })} />
          </label>
          <button type="button" onClick={createSo}>
            <FilePlus2 size={18} />
            Satış Siparişi Oluştur
          </button>
        </>
      }
    >
      <OrdersTable
        emptyText="Henüz satış siparişi yok."
        headers={["Belge", "Müşteri", "Ürün", "Miktar", "Durum", "Aksiyonlar"]}
        rows={data.salesOrders}
        renderRow={(order) => (
          <tr key={order.id}>
            <td><strong>{order.id}</strong></td>
            <td>{findById(data.customers, order.customerId)?.name}</td>
            <td>{findById(data.products, order.productId)?.name}</td>
            <td>{order.quantity}</td>
            <td><StatusBadge status={order.status} /></td>
            <td>
              <div className="action-row">
                <button type="button" disabled={order.status !== "Oluşturuldu"} onClick={() => changeStatus(order.id, "Onaylandı")}>
                  <CheckCircle2 size={16} />
                  Onayla
                </button>
                <button type="button" disabled={order.status !== "Onaylandı"} onClick={() => deliverProducts(order)}>
                  <Truck size={16} />
                  Teslim Et
                </button>
              </div>
            </td>
          </tr>
        )}
      />
    </DocumentPage>
  );
}

function Inventory({ data }) {
  return (
    <section className="page">
      <SectionTitle eyebrow="Stok yönetimi" title="Mevcut Stok Özeti" icon={Warehouse} />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ürün Adı</th>
              <th>Mevcut Stok</th>
              <th>Minimum Stok</th>
              <th>Maksimum Stok</th>
              <th>Stok Durumu</th>
              <th>Stok Seviyesi</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((product) => (
              <tr key={product.id}>
                <td><strong>{product.name}</strong></td>
                <td>{product.stock}</td>
                <td>{product.minStock}</td>
                <td>{product.maxStock}</td>
                <td><StockBadge status={stockStatus(product)} /></td>
                <td>
                  <div className="mini-stock-track">
                    <span style={{ width: `${Math.min(100, (product.stock / product.maxStock) * 100)}%` }} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Movements({ data }) {
  return (
    <section className="page">
      <SectionTitle eyebrow="Stok hareketleri" title="Hareket Geçmişi" icon={FileClock} />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Ürün</th>
              <th>Hareket Tipi</th>
              <th>Miktar</th>
              <th>Kaynak</th>
              <th>Hedef</th>
              <th>İlgili Belge</th>
            </tr>
          </thead>
          <tbody>
            {data.movements.map((movement) => (
              <tr key={movement.id}>
                <td>{formatDate(movement.date)}</td>
                <td>{findById(data.products, movement.productId)?.name}</td>
                <td><MovementBadge type={movement.type} /></td>
                <td>{movement.quantity}</td>
                <td>{movement.source}</td>
                <td>{movement.destination}</td>
                <td><strong>{movement.relatedDocument}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Replenishment({ data }) {
  const critical = data.products.filter((product) => product.stock < product.minStock);

  return (
    <section className="page">
      <SectionTitle eyebrow="Stok yenileme" title="İkmal Önerileri" icon={Lightbulb} />
      {critical.length ? (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Ürün Adı</th>
                <th>Mevcut Stok</th>
                <th>Minimum Stok</th>
                <th>Maksimum Stok</th>
                <th>Önerilen Satın Alma Miktarı</th>
                <th>Önerilen Tedarikçi</th>
              </tr>
            </thead>
            <tbody>
              {critical.map((product) => (
                <tr key={product.id}>
                  <td><strong>{product.name}</strong></td>
                  <td>{product.stock}</td>
                  <td>{product.minStock}</td>
                  <td>{product.maxStock}</td>
                  <td><strong>{product.maxStock - product.stock}</strong></td>
                  <td>{findById(data.vendors, product.vendorId)?.name || "Tercihli tedarikçi tanımlı değil"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-panel">
          <CheckCircle2 size={28} />
          <h2>İkmal gerekmiyor</h2>
          <p>Tüm ürünler minimum stok seviyesinde veya üzerinde.</p>
        </div>
      )}
    </section>
  );
}

function SapMapping() {
  return (
    <section className="page">
      <SectionTitle eyebrow="SAP MM bağlantısı" title="Kavram Eşlemesi" icon={Boxes} />
      <div className="mapping-layout">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Uygulamadaki Alan</th>
                <th>SAP MM Kavramı</th>
              </tr>
            </thead>
            <tbody>
              {mappingRows.map(([source, target]) => (
                <tr key={source}>
                  <td><strong>{source}</strong></td>
                  <td>{target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="disclaimer">
          <AlertTriangle size={24} />
          <h2>Kısa Not</h2>
          <p>
            Bu gerçek bir SAP sistemi değil. SAP MM mantığını basit bir web uygulamasıyla anlattım.
          </p>
        </aside>
      </div>
    </section>
  );
}

function StatusDonut({ data }) {
  const counts = ["Kritik", "Normal", "Fazla Stok"].map((status) => ({
    status,
    count: data.products.filter((product) => stockStatus(product) === status).length,
  }));
  const total = Math.max(data.products.length, 1);
  let running = 0;
  const segments = counts.map((item) => {
    const start = running;
    const size = (item.count / total) * 100;
    running += size;
    return `${statusColor(item.status)} ${start}% ${running}%`;
  }).join(", ");

  return (
    <div className="donut-layout">
      <div
        className="donut"
        style={{ background: `conic-gradient(${segments || "#e2e8f0 0% 100%"})` }}
        aria-label="Stok durum dağılımı"
      >
        <span>{total}</span>
      </div>
      <div className="legend-list">
        {counts.map((item) => (
          <div className="legend-row" key={item.status}>
            <span className="legend-swatch" style={{ background: statusColor(item.status) }} />
            <strong>{item.status}</strong>
            <em>{item.count} ürün</em>
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineChart({ rows }) {
  const maxValue = Math.max(...rows.map((row) => row.value), 1);
  return (
    <div className="pipeline-chart">
      {rows.map((row) => (
        <div className="pipeline-step" key={row.label}>
          <div className="pipeline-bar" style={{ height: `${34 + (row.value / maxValue) * 96}px` }}>
            <span>{row.value}</span>
          </div>
          <strong>{row.label}</strong>
        </div>
      ))}
    </div>
  );
}

function RankedBars({ rows, maxValue, tone }) {
  return (
    <div className={`ranked-bars ${tone}`}>
      {rows.map((row) => (
        <div className="ranked-row" key={row.label}>
          <div className="bar-meta">
            <span>{row.label}</span>
            <strong>{row.valueLabel}</strong>
          </div>
          <div className="bar-track">
            <span style={{ width: `${Math.max(8, (row.value / maxValue) * 100)}%` }} />
          </div>
          <small>{row.subLabel}</small>
        </div>
      ))}
    </div>
  );
}

function CoverageChart({ rows }) {
  return (
    <div className="coverage-list">
      {rows.map((row) => (
        <div className="coverage-row" key={row.name}>
          <div className="coverage-label">
            <strong>{row.name}</strong>
            <span>{row.stock} / {row.maxStock}</span>
          </div>
          <div className="coverage-track">
            <span className="min-marker" style={{ left: `${row.minPercent}%` }} />
            <span className="coverage-fill" style={{ width: `${row.fillPercent}%` }} />
          </div>
          <em>{row.status}</em>
        </div>
      ))}
    </div>
  );
}

function InsightCard({ icon: Icon, title, value, text, tone }) {
  return (
    <article className={`insight-card ${tone}`}>
      <Icon size={22} />
      <span>{title}</span>
      <strong>{value}</strong>
      <p>{text}</p>
    </article>
  );
}

function ChartPanel({ eyebrow, title, icon: Icon, children }) {
  return (
    <section className="chart-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <Icon size={22} />
      </div>
      {children}
    </section>
  );
}

function MetricCard({ icon: Icon, label, value, tone }) {
  return (
    <article className={`metric-card ${tone}`}>
      <Icon size={22} />
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function MasterPanel({ title, icon: Icon, count, children }) {
  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{count} kayit</p>
          <h2>{title}</h2>
        </div>
        <Icon size={22} />
      </div>
      {children}
    </section>
  );
}

function InlineForm({ children }) {
  return <div className="inline-form">{children}</div>;
}

function DataList({ rows, primary, secondary }) {
  return (
    <div className="data-list">
      {rows.map((row) => (
        <div className="data-row" key={row.id}>
          <strong>{row[primary]}</strong>
          <span>{secondary(row)}</span>
        </div>
      ))}
    </div>
  );
}

function DocumentPage({ title, eyebrow, icon: Icon, form, children }) {
  return (
    <section className="page">
      <SectionTitle eyebrow={eyebrow} title={title} icon={Icon} />
      <section className="document-form">
        {form}
      </section>
      {children}
    </section>
  );
}

function OrdersTable({ rows, headers, renderRow, emptyText }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length ? rows.map(renderRow) : (
            <tr>
              <td colSpan={headers.length} className="empty-cell">{emptyText}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function SectionTitle({ eyebrow, title, icon: Icon }) {
  return (
    <div className="page-title">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <Icon size={24} />
    </div>
  );
}

function ProcessStep({ icon: Icon, title, text }) {
  return (
    <article className="process-card">
      <Icon size={20} />
      <strong>{title}</strong>
      <span>{text}</span>
    </article>
  );
}

function StatusBadge({ status }) {
  return <span className={`badge status-${slug(status)}`}>{status}</span>;
}

function StockBadge({ status }) {
  return <span className={`badge stock-${slug(status)}`}>{status}</span>;
}

function MovementBadge({ type }) {
  return <span className={`badge movement-${type.toLowerCase()}`}>{movementLabel(type)}</span>;
}

function useMetrics(data) {
  return useMemo(() => ({
    totalProducts: data.products.length,
    totalVendors: data.vendors.length,
    totalPurchaseOrders: data.purchaseOrders.length,
    totalSalesOrders: data.salesOrders.length,
    stockValue: data.products.reduce((sum, product) => sum + product.stock * product.cost, 0),
    marginPotential: data.products.reduce((sum, product) => sum + product.stock * (product.salesPrice - product.cost), 0),
    criticalStockItems: data.products.filter((product) => product.stock < product.minStock).length,
  }), [data]);
}

function getPipelineData(data) {
  return [
    { label: "PO Oluştu", value: data.purchaseOrders.filter((order) => order.status === "Oluşturuldu").length },
    { label: "PO Onay", value: data.purchaseOrders.filter((order) => order.status === "Onaylandı").length },
    { label: "Mal Girişi", value: data.purchaseOrders.filter((order) => order.status === "Teslim Alındı").length },
    { label: "SO Oluştu", value: data.salesOrders.filter((order) => order.status === "Oluşturuldu").length },
    { label: "SO Onay", value: data.salesOrders.filter((order) => order.status === "Onaylandı").length },
    { label: "Teslimat", value: data.salesOrders.filter((order) => order.status === "Teslim Edildi").length },
  ];
}

function getRiskRows(data) {
  return data.products
    .map((product) => {
      const shortage = Math.max(0, product.minStock - product.stock);
      const suggestion = Math.max(0, product.maxStock - product.stock);
      const riskScore = shortage === 0 ? 0 : Math.round((shortage / Math.max(product.minStock, 1)) * 100);
      return { ...product, shortage, suggestion, riskScore };
    })
    .sort((a, b) => b.riskScore - a.riskScore);
}

function getMarginRows(data) {
  return data.products
    .map((product) => {
      const margin = product.salesPrice - product.cost;
      const marginRate = product.salesPrice ? Math.round((margin / product.salesPrice) * 100) : 0;
      return { name: product.name, margin, marginRate };
    })
    .sort((a, b) => b.margin - a.margin);
}

function getMovementRows(data) {
  const totals = data.movements.reduce((acc, movement) => {
    acc[movement.type] = acc[movement.type] || { type: movement.type, quantity: 0, count: 0 };
    acc[movement.type].quantity += movement.quantity;
    acc[movement.type].count += 1;
    return acc;
  }, {});
  return Object.values(totals).sort((a, b) => b.quantity - a.quantity);
}

function getCoverageRows(data) {
  return data.products.map((product) => ({
    name: product.name,
    stock: product.stock,
    maxStock: product.maxStock,
    status: stockStatus(product),
    minPercent: Math.min(100, (product.minStock / Math.max(product.maxStock, 1)) * 100),
    fillPercent: Math.min(100, (product.stock / Math.max(product.maxStock, 1)) * 100),
  }));
}

function stockStatus(product) {
  if (product.stock < product.minStock) return "Kritik";
  if (product.stock > product.maxStock) return "Fazla Stok";
  return "Normal";
}

function statusColor(status) {
  if (status === "Kritik") return "#ef4444";
  if (status === "Fazla Stok") return "#2563eb";
  return "#16a34a";
}

function movementLabel(type) {
  const labels = {
    ACILIS_STOK: "Açılış Stok",
    PURCHASE_IN: "Satın Alma Girişi",
    SALES_OUT: "Satış Çıkışı",
  };
  return labels[type] || type;
}

function createDocumentId(prefix, number) {
  return `${prefix}-${String(number).padStart(4, "0")}`;
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.round(Math.random() * 1000)}`;
}

function createMovement({ productId, type, quantity, source, destination, relatedDocument }) {
  return {
    id: createId("movement"),
    date: new Date().toISOString(),
    productId,
    type,
    quantity,
    source,
    destination,
    relatedDocument,
  };
}

function findById(items, id) {
  return items.find((item) => item.id === id);
}

function toNumber(value) {
  return Math.max(0, Number(value) || 0);
}

function slug(value) {
  return value
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
}

function formatCurrency(value) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("tr-TR", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

createRoot(document.getElementById("root")).render(<App />);
