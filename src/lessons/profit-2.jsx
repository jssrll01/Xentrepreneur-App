import LessonLayout from '../components/LessonLayout'

export default function Profit2() {
  return (
    <LessonLayout
      number="140"
      title="Profit — Part 2"
      summary="12 profit measurement systems — gross, operating, net, contribution, per unit, per customer, per transaction, per employee, per project, per product, per channel, and per location profit."
    >
      <h2>Profit — Part 2</h2>

      <h2>1. Gross Margin</h2>
      <p><strong>Gross Margin = (Gross Profit ÷ Revenue) × 100</strong></p>
      <p>Example: revenue ₱500,000, COGS ₱300,000, gross profit ₱200,000, margin 40%.</p>
      <p>Gross margin helps evaluate pricing, supplier costs, production efficiency, and product profitability.</p>

      <h2>2. Operating Margin</h2>
      <p><strong>Operating Margin = (Operating Profit ÷ Revenue) × 100</strong></p>
      <p>Gross margin measures product/service economics; operating margin measures overall operating efficiency.</p>

      <h2>3. Net Margin</h2>
      <p><strong>Net Margin = (Net Profit ÷ Revenue) × 100</strong></p>
      <p>Affected by operating expenses, interest, financing, taxes, foreign exchange, and other non-operating items.</p>

      <h2>4. Contribution Margin</h2>
      <p><strong>Contribution Margin = (Contribution Profit ÷ Revenue) × 100</strong></p>
      <p><strong>Break-Even Revenue = Fixed Costs ÷ Contribution Margin</strong></p>
      <p>Useful for break-even, pricing, product decisions, and short-term decisions.</p>

      <h2>5. Profit per Unit</h2>
      <p><strong>Profit per Unit = Unit Selling Price − Unit Costs</strong></p>
      <p>Example: ₱500 − ₱350 = ₱150 contribution per unit. This is not automatically net profit per unit.</p>
      <p>Always specify which costs are included.</p>

      <h2>6. Profit per Customer</h2>
      <p><strong>Profit per Customer = Customer Revenue − Customer-Attributable Costs</strong></p>
      <p>A customer generating ₱20,000 revenue may not be more profitable than one generating ₱15,000 if they cost more to acquire and serve.</p>

      <h2>7. Profit per Transaction</h2>
      <p><strong>Profit per Transaction = Transaction Revenue − Transaction-Attributable Costs</strong></p>
      <p>Average profit per transaction = total contribution ÷ number of transactions.</p>

      <h2>8. Profit per Employee</h2>
      <p><strong>Profit per Employee = Profit ÷ Average Number of Employees</strong></p>
      <p>Useful for workforce economics and productivity, but varies significantly by industry. Should not be used as a standalone employee performance score.</p>

      <h2>9. Profit per Project</h2>
      <p><strong>Project Profit = Project Revenue − Project Costs</strong></p>
      <p>Effective hourly profit = Project profit ÷ hours spent. Tracks pricing sustainability for project-based work.</p>

      <h2>10. Profit per Product</h2>
      <p><strong>Profit per Product = Product Revenue − Product-Attributable Costs</strong></p>
      <p>Product portfolio categories: high-demand high-profit (core), high-demand low-profit (pricing review), low-demand high-profit (positioning review), low-demand low-profit (improve/bundle/clear).</p>

      <h2>11. Profit per Channel</h2>
      <p><strong>Channel Profit Margin = (Channel Profit ÷ Channel Revenue) × 100</strong></p>
      <p>Channel decisions should consider profitability, not just sales volume.</p>

      <h2>12. Profit per Location</h2>
      <p><strong>Location Profit = Location Revenue − Location-Attributable Costs</strong></p>
      <p>Relevant costs include rent, local labor, utilities, inventory, delivery, taxes, and local advertising.</p>

      <hr />

      <h2>Profit Margin Hierarchy</h2>
      <pre>{`REVENUE
             │
             ↓
Variable Costs → CONTRIBUTION PROFIT → CONTRIBUTION MARGIN
             │
             ↓
COGS → GROSS PROFIT → GROSS MARGIN
             │
             ↓
Operating Expenses → OPERATING PROFIT → OPERATING MARGIN
             │
             ↓
Interest + Other → PRE-TAX PROFIT
             │
             ↓
Taxes → NET PROFIT → NET MARGIN`}</pre>

      <h2>Key Principles</h2>
      <ol>
        <li>Gross, operating, net, and contribution margins measure profitability at different cost levels.</li>
        <li>Profit per unit, customer, transaction, project, product, channel, and location reveal profitability at operational levels.</li>
        <li>Profit per employee varies significantly by industry and should not be interpreted in isolation.</li>
        <li>Revenue and profit should always be analyzed separately.</li>
        <li>Profit amount and profit margin provide different information.</li>
        <li>High-margin products can still produce little total profit at low volume.</li>
        <li>Low-margin products can produce strong total profit with high volume and cost control.</li>
        <li>Contribution margin is particularly useful for break-even analysis.</li>
        <li>Profit calculations should clearly define which costs are included.</li>
        <li>Shared costs should be allocated consistently when computing profit by product, customer, channel, project, or location.</li>
        <li>Profitability must ultimately be considered alongside cash flow, risk, growth, and customer value.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Revenue → Variable Costs → Contribution → COGS → Gross Profit → Operating Expenses →
        Operating Profit → Financing → Taxes → Net Profit → Profit per Unit/Customer/Transaction/
        Employee/Project/Product/Channel/Location → Root-Cause Analysis → Optimization →
        Sustainable Profitability.
      </p>
    </LessonLayout>
  )
}
