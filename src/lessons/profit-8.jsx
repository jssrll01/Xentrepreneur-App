import LessonLayout from '../components/LessonLayout'

export default function Profit8() {
  return (
    <LessonLayout
      number="146"
      title="Profit — Part 8"
      summary="7 profitability analysis systems — unit economics, customer profitability, cohort profitability, product profitability, scenario profitability, break-even analysis, and profitability management."
    >
      <h2>Profit — Part 8</h2>

      <h2>1. Unit Economics</h2>
      <p>Analyzing revenue, variable costs, and contribution associated with one unit of economic activity.</p>
      <p><strong>Unit Contribution = Unit Revenue − Unit Variable Costs</strong></p>
      <p><strong>Contribution Margin = (Unit Contribution ÷ Unit Revenue) × 100</strong></p>
      <p>A "unit" can be a product, order, customer, subscription, project, booking, transaction, API request, or delivery.</p>
      <p>A business can grow revenue while worsening unit economics. ₱10M at very low contribution can be less attractive than ₱7M with strong unit economics.</p>

      <h2>2. Customer Profitability</h2>
      <p><strong>Customer Profit = Customer Revenue − Customer-Attributable Costs</strong></p>
      <p>Attributable costs include delivery, commissions, support, shipping, payment fees, returns, and acquisition costs.</p>
      <p>Revenue measures how much a customer buys. Profitability measures how economically valuable the relationship is.</p>

      <h2>3. Cohort Profitability</h2>
      <p>Analyzing profitability for a group of customers sharing a common starting characteristic, usually acquisition period.</p>
      <p><strong>Contribution per Customer = Cohort Contribution ÷ Cohort Customers</strong></p>
      <p>Cohort analysis over time reveals whether newly acquired customers are becoming more or less economically valuable.</p>

      <h2>4. Product Profitability</h2>
      <p><strong>Product Profit = Product Revenue − Product-Attributable Costs</strong></p>
      <p>Consider selling price, COGS, packaging, shipping, platform fees, payment fees, marketing, returns, warranty, support, storage, and discounts.</p>
      <p>Product matrix: high-demand high-profit (expand), high-demand low-profit (improve economics), low-demand high-profit (investigate growth), low-demand low-profit (review/replace).</p>

      <h2>5. Scenario Profitability</h2>
      <p>Estimating profitability under different future assumptions or conditions.</p>
      <p>Common scenarios: base, upside, downside, high-growth, low-demand, high-cost, expansion, recession, new-product.</p>
      <p>Scenario analysis prepares the business for different conditions. It does not predict the future with certainty.</p>

      <h2>6. Break-Even Analysis</h2>
      <p><strong>Break-Even Quantity = Fixed Costs ÷ Contribution per Unit</strong></p>
      <p><strong>Break-Even Revenue = Fixed Costs ÷ Contribution Margin</strong></p>
      <p><strong>Margin of Safety = Actual Sales − Break-Even Sales</strong></p>
      <p>Improve break-even through higher contribution, lower fixed costs, lower variable costs, better pricing, better mix, higher AOV, and reduced waste.</p>

      <h2>7. Profitability Management</h2>
      <p>Systematically measuring, analyzing, improving, and maintaining profitability across revenue, pricing, costs, customers, products, channels, locations, working capital, investments, risk, and cash flow.</p>
      <p>Cycle: Measure → Analyze → Identify Profit Drivers → Identify Profit Leaks → Prioritize → Implement → Measure → Compare → Standardize → Repeat.</p>

      <h3>Profit Drivers</h3>
      <p>Higher prices, more customers, higher AOV, repeat purchases, upselling, cross-selling, better product mix, better retention, lower COGS, better supplier terms, higher productivity, better capacity utilization, lower waste, automation.</p>

      <h3>Profit Leaks</h3>
      <p>Excessive discounts, high returns, product defects, expensive shipping, poor purchasing, slow inventory, low-margin customers, unprofitable channels, excessive labor, inefficient processes, payment fees, fraud, bad debt.</p>

      <hr />

      <h2>Integrated Profitability Analysis</h2>
      <pre>{`PROFITABILITY
                         │
       ┌─────────────────┼─────────────────┐
       ↓                 ↓                 ↓
  Unit Economics   Customer Analysis   Product Analysis
       │                 │                 │
       ↓                 ↓                 ↓
Contribution       Customer Profit     Product Profit
       │                 │                 │
       └─────────────────┼─────────────────┘
                         ↓
                  Cohort Analysis
                         ↓
                  Scenario Analysis
                         ↓
                  Break-Even Analysis
                         ↓
                 Profitability Management
                         ↓
                    Action / Change
                         ↓
                    New Results
                         ↓
                       Measure`}</pre>

      <h2>Profitability Waterfall</h2>
      <pre>{`Revenue                ₱1,000,000
      ↓
− COGS                   ₱550,000
      ↓
Gross Profit             ₱450,000
      ↓
− Variable Selling Costs ₱100,000
      ↓
Contribution             ₱350,000
      ↓
− Fixed Operating Costs  ₱200,000
      ↓
Operating Profit         ₱150,000
      ↓
− Financing / Other       ₱30,000
      ↓
Pre-Tax Profit           ₱120,000
      ↓
− Taxes                   ₱24,000
      ↓
Net Profit                ₱96,000`}</pre>

      <h2>Common Profitability Mistakes</h2>
      <ol>
        <li>Looking only at revenue.</li>
        <li>Looking only at gross margin.</li>
        <li>Ignoring customer acquisition cost.</li>
        <li>Ignoring retention.</li>
        <li>Ignoring returns.</li>
        <li>Ignoring support costs.</li>
        <li>Ignoring inventory costs.</li>
        <li>Treating forecasts as facts.</li>
        <li>Using one profitability metric for everything.</li>
        <li>Optimizing one dimension at the expense of another.</li>
      </ol>

      <h2>Key Principles</h2>
      <ol>
        <li>Unit economics determines whether individual units of activity create sufficient contribution.</li>
        <li>Customer profitability measures the economic value of customer relationships.</li>
        <li>Cohort profitability reveals how customer economics develop over time.</li>
        <li>Product profitability identifies which products create meaningful contribution.</li>
        <li>Scenario profitability evaluates possible outcomes under different assumptions.</li>
        <li>Break-even analysis identifies the activity level required to cover costs.</li>
        <li>Profitability management connects all analyses into an ongoing decision system.</li>
        <li>Revenue should not be treated as a substitute for profitability.</li>
        <li>High-margin products are not automatically the most profitable at the business level.</li>
        <li>High-revenue customers are not automatically high-profit customers.</li>
        <li>CAC should be incorporated into customer economics.</li>
        <li>Retention can materially change lifetime customer profitability.</li>
        <li>Cohort analysis distinguishes improving from deteriorating customer economics.</li>
        <li>Product profitability should account for returns, shipping, marketing, support, and inventory costs where appropriate.</li>
        <li>Scenario analysis should make assumptions explicit.</li>
        <li>Break-even analysis depends on how fixed and variable costs are defined and the relevant operating range.</li>
        <li>Contribution margin is a key driver of break-even economics.</li>
        <li>Profitability should be analyzed across multiple dimensions rather than company-wide only.</li>
        <li>Improving one metric can damage another, so changes should be evaluated on their overall economic effect.</li>
        <li>Profitability management requires measurement before optimization.</li>
        <li>Profit improvements should be compared against a baseline.</li>
        <li>Sustainable improvements should be standardized into repeatable processes.</li>
        <li>Unit, customer, product, and cohort profitability complement each other.</li>
        <li>Scenario analysis supports planning but does not guarantee results.</li>
        <li>Strong profitability management continuously connects revenue, costs, customers, products, capital, risk, and cash flow.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Market → Customer Need → Product/Service → Pricing → Unit Economics → Customer
        Acquisition → Customer Profitability → Retention → Cohort Profitability → Product
        Profitability → Channel/Geographic Analysis → Scenario Profitability → Break-Even
        Analysis → Profitability Diagnosis → Identify Profit Drivers &amp; Leaks → Improve
        Pricing/Costs/Mix/Customers/Products/Processes → Measure Incremental Profit → Forecast →
        Reinvest → Scale → Track → Analyze → Optimize → Repeat.
      </p>
    </LessonLayout>
  )
}
