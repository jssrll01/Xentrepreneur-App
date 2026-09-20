import LessonLayout from '../components/LessonLayout'

export default function TradeInternational() {
  return (
    <LessonLayout
      number="113"
      title="Trade & International Business Strategies"
      summary="11 international trade systems — trade, imports, exports, trade balance, free trade, trade barriers, tariffs, quotas, supply-chain globalization, foreign direct investment, and international competition."
    >
      <h2>Trade &amp; International Business Strategies</h2>

      <h2>1. Trade</h2>
      <h3>Definition</h3>
      <p>Trade is the exchange of goods and services between individuals, businesses, regions, or countries. International trade occurs when goods, services, capital, or other economic resources cross national borders.</p>
      <p>Examples: a Philippine business buys smartphones from China; a Philippine company sells processed food to Japan; a software developer in the Philippines provides services to a company in the United States; Xmarket sources products internationally and sells them to customers in the Philippines.</p>

      <h3>How Trade Works</h3>
      <pre>{`Country A
Producer
   ↓
Exporter
   ↓
Shipping / Logistics
   ↓
Importer
   ↓
Distributor / Retailer
   ↓
Customer
Country B`}</pre>

      <h3>Benefits</h3>
      <p>Access to larger markets, greater product variety, access to specialized inputs, potentially lower production costs, more supplier choices, foreign-currency revenue, business expansion opportunities, technology and knowledge transfer.</p>

      <h3>Risks</h3>
      <p>Currency fluctuations, shipping disruptions, tariffs, import restrictions, political or regulatory changes, supplier concentration, international competition, customs delays, different legal requirements.</p>

      <h3>Core Principle</h3>
      <p>Trade works best when the economic value of buying or selling internationally exceeds the additional costs and risks of crossing borders.</p>

      <hr />

      <h2>2. Imports</h2>
      <h3>Definition</h3>
      <p>Imports are goods and services purchased from another country and brought into the domestic economy.</p>

      <h3>Landed Cost</h3>
      <p><strong>Landed Cost = Product Cost + International Freight + Insurance + Duties/Taxes + Customs/Handling + Other Import Costs</strong></p>
      <p>Example: products ₱100,000 + international shipping ₱15,000 + insurance ₱2,000 + duties/taxes/fees ₱13,000 + local handling ₱5,000 = total landed cost ₱135,000. If there are 500 units, landed cost per unit is ₱270. The business should price based on the economically relevant total cost, not merely the supplier's quoted price.</p>

      <h3>Import Advantages</h3>
      <p>Access to lower-cost suppliers, greater product variety, access to specialized products, ability to source products unavailable locally, potential private-label opportunities, larger supplier base.</p>

      <h3>Import Risks</h3>
      <p>Minimum order quantities, longer lead times, customs issues, currency risk, quality problems, freight increases, damaged shipments, regulatory requirements, supplier fraud or misrepresentation.</p>

      <hr />

      <h2>3. Exports</h2>
      <h3>Definition</h3>
      <p>Exports are goods and services produced or supplied domestically and sold to customers in another country.</p>
      <p>Examples: agricultural products, processed food, manufactured goods, clothing, electronics, software development, design services, consulting, online education, digital services.</p>

      <h3>Export Pricing</h3>
      <p><strong>Export Price = Production Cost + Export Costs + Required Profit</strong></p>
      <p>Export costs can include packaging, documentation, freight, insurance, export handling, platform/payment fees, currency conversion, distributor margins, and taxes or other applicable charges.</p>

      <h3>Benefits</h3>
      <p>Larger customer base, foreign-currency revenue, geographic diversification, greater production scale, access to high-demand markets, potential economies of scale.</p>

      <h3>Risks</h3>
      <p>Foreign-market competition, currency changes, shipping costs, regulatory differences, payment risk, cultural differences, political/economic changes.</p>

      <hr />

      <h2>4. Trade Balance</h2>
      <h3>Definition</h3>
      <p>Trade balance measures the difference between the value of a country's exports and imports of goods over a specified period.</p>
      <p><strong>Trade Balance = Exports − Imports</strong></p>

      <h3>Important Distinction</h3>
      <p>Trade balance should not automatically be interpreted as a complete measure of economic health. A country can import machinery, technology, fuel, or raw materials that help businesses produce future goods and services. Also, trade in services is separate from the merchandise/goods trade balance commonly discussed in statistics.</p>

      <hr />

      <h2>5. Free Trade</h2>
      <h3>Definition</h3>
      <p>Free trade is international trade conducted with relatively few government-imposed restrictions such as tariffs and quotas. It does not necessarily mean that absolutely no rules exist. Countries can still have product standards, safety regulations, customs procedures, taxes, licensing requirements, sanitary requirements, and intellectual-property rules.</p>

      <h3>Potential Advantages</h3>
      <p>Lower prices for some goods, greater consumer choice, more competition, access to foreign inputs, larger export markets, specialization, potential efficiency gains.</p>

      <h3>Potential Challenges</h3>
      <p>Domestic businesses may face stronger competition, some industries may contract, workers and regions can experience adjustment costs, dependence on foreign suppliers can increase, supply disruptions can spread internationally.</p>

      <hr />

      <h2>6. Trade Barriers</h2>
      <h3>Definition</h3>
      <p>Trade barriers are government policies or restrictions that make international trade more difficult, expensive, or limited. Common barriers include tariffs, quotas, import licensing, product standards, customs requirements, export restrictions, subsidies, local-content requirements, sanitary and phytosanitary requirements, embargoes and sanctions in applicable circumstances.</p>

      <h3>Why Governments Use Trade Barriers</h3>
      <p>To protect domestic industries, address health or safety concerns, respond to foreign trade practices, protect strategic industries, manage scarce resources, pursue foreign-policy objectives, raise government revenue, or support domestic production.</p>

      <hr />

      <h2>7. Tariffs</h2>
      <h3>Definition</h3>
      <p>A tariff is a government-imposed charge on imported goods.</p>

      <h3>Percentage Tariff</h3>
      <p><strong>Tariff = Applicable Import Value × Tariff Rate</strong></p>
      <p>Example: product value ₱100,000, tariff rate 10% → tariff ₱10,000.</p>

      <h3>Specific Tariff</h3>
      <p>A fixed amount charged per unit. Example: tariff ₱50 per unit × 1,000 units = total tariff ₱50,000.</p>

      <h3>Business Impact</h3>
      <p>A tariff changes the economics of the product. For example, product cost ₱200 + freight and other costs ₱50 = ₱250 without tariff; with a ₱30 tariff, landed cost becomes ₱280.</p>

      <hr />

      <h2>8. Quotas</h2>
      <h3>Definition</h3>
      <p>A quota is a government-imposed limit on the quantity or value of a particular product that can be imported or exported during a specified period.</p>

      <h3>Tariff vs Quota</h3>
      <ul>
        <li>Tariff — raises import cost; quota — limits quantity/value</li>
        <li>Tariff — direct effect on price; quota — direct effect on quantity</li>
        <li>Tariff — often generates government revenue; quota — not necessarily</li>
        <li>Tariff — may decrease import volume; quota — directly constrains</li>
        <li>Tariff — business concern is cost; quota — business concern is availability</li>
      </ul>

      <h3>Key Principle</h3>
      <p>A tariff primarily changes the economics of importing; a quota directly restricts the amount that can enter under the applicable regime.</p>

      <hr />

      <h2>9. Supply-Chain Globalization</h2>
      <h3>Definition</h3>
      <p>Supply-chain globalization occurs when different stages of producing and delivering a product are distributed across multiple countries.</p>

      <h3>Why Businesses Globalize Supply Chains</h3>
      <p>Lower production costs, specialized suppliers, manufacturing expertise, larger production capacity, access to raw materials, geographic proximity to customers, better technology, diversified sourcing.</p>

      <h3>Risks</h3>
      <p>Port disruptions, shipping delays, geopolitical events, currency movements, natural disasters, regulatory changes, supplier failure, cybersecurity incidents.</p>

      <h3>Supply-Chain Resilience</h3>
      <p>Businesses can reduce concentration risk through multiple suppliers, geographic diversification, safety stock, alternative logistics routes, local sourcing, regional sourcing, supplier monitoring, and contingency planning.</p>

      <hr />

      <h2>10. Foreign Direct Investment</h2>
      <h3>Definition</h3>
      <p>Foreign direct investment (FDI) occurs when an investor or business from one country makes an investment intended to establish a lasting interest or significant influence in a business or productive activity in another country.</p>
      <p>Examples: establishing a foreign subsidiary, building a manufacturing facility, acquiring or investing in a foreign company, establishing a foreign distribution operation, expanding a company's operations into another country.</p>

      <h3>Types of FDI</h3>
      <p><strong>Greenfield investment</strong> — a company establishes a new operation from the ground up. <strong>Acquisition</strong> — a company purchases an existing foreign business. <strong>Joint venture</strong> — two or more businesses establish or invest in an operation together, subject to their agreement and applicable law.</p>

      <h3>Risks</h3>
      <p>Large capital requirements, regulatory differences, political and economic risk, currency risk, management complexity, cultural differences, local competition, difficulty exiting the investment.</p>

      <hr />

      <h2>11. International Competition</h2>
      <h3>Definition</h3>
      <p>International competition occurs when businesses from different countries compete for customers, suppliers, talent, investment, distribution, or market share. A Philippine business may compete not only with Philippine businesses but also with companies from China, Japan, South Korea, the United States, Europe, and other markets.</p>

      <h3>Areas of Competition</h3>
      <p>Price, quality, features, technology, brand, service, speed, convenience, distribution, customization, innovation.</p>

      <h3>Important Note</h3>
      <p>International competition includes price, quality, technology, service, convenience, distribution, and brand — not price alone.</p>

      <hr />

      <h2>Important Formulas</h2>
      <p><strong>Trade Balance = Exports − Imports</strong></p>
      <p><strong>Landed Cost = Product Cost + Freight + Insurance + Duties/Taxes + Handling + Other Relevant Costs</strong></p>
      <p><strong>Unit Landed Cost = Total Landed Cost ÷ Units Imported</strong></p>
      <p><strong>Export Contribution = Export Revenue − Relevant Export Costs</strong></p>
      <p><strong>Tariff = Applicable Import Value × Tariff Rate</strong></p>
      <p><strong>Gross Profit = International Sales Revenue − Cost of Goods Sold</strong></p>
      <p><strong>Gross Margin = (Gross Profit ÷ Revenue) × 100</strong></p>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Import price is not the same as landed cost.</li>
        <li>Export revenue is not the same as export profit.</li>
        <li>Trade balance describes trade flows; it is not by itself a complete measure of economic performance.</li>
        <li>Tariffs primarily affect the cost of imported goods.</li>
        <li>Quotas primarily restrict the quantity or value traded under the applicable system.</li>
        <li>Free trade does not mean the absence of all regulations.</li>
        <li>Global supply chains can reduce costs but can also create dependencies.</li>
        <li>Supplier diversification can reduce concentration risk.</li>
        <li>FDI requires substantially more commitment than simply exporting.</li>
        <li>International competition includes price, quality, technology, service, convenience, distribution, and brand — not price alone.</li>
        <li>Every international transaction should be evaluated using total economic cost.</li>
        <li>Currency movements can materially change international margins.</li>
        <li>Trade strategy should connect market demand, sourcing, logistics, pricing, finance, regulation, and customer value.</li>
        <li>International expansion should be based on sustainable economics rather than revenue growth alone.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Research Markets → Identify Demand → Evaluate Imports &amp; Exports → Analyze Trade
        Balance &amp; Market Conditions → Understand Free-Trade Conditions → Identify Trade
        Barriers → Calculate Tariffs &amp; Quotas → Calculate Landed/Export Costs → Evaluate
        Supply-Chain Globalization → Select Suppliers/Buyers → Analyze Currency &amp; Financial
        Risks → Evaluate FDI Where Appropriate → Study International Competition → Set Pricing →
        Manage Logistics → Sell/Buy → Deliver → Measure Margin &amp; Performance → Diversify
        Appropriate Risks → Optimize → Expand.
      </p>
    </LessonLayout>
  )
}
