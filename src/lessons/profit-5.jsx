import LessonLayout from '../components/LessonLayout'

export default function Profit5() {
  return (
    <LessonLayout
      number="143"
      title="Profit — Part 5"
      summary="12 profit management systems — break-even improvement, cash conversion, working capital, gross/contribution/operating/net margin improvement, profit forecasting, budgeting, tracking, analysis, and allocation."
    >
      <h2>Profit — Part 5</h2>

      <h2>1. Break-Even Improvement</h2>
      <p>Changing business economics so less revenue or fewer units are required to cover costs.</p>
      <p><strong>Break-Even Quantity = Fixed Costs ÷ Contribution per Unit</strong></p>
      <p><strong>Contribution per Unit = Selling Price − Variable Cost per Unit</strong></p>
      <p>Example: ₱100,000 ÷ ₱200 = 500 units. If contribution rises to ₱250, break-even falls to 400 units.</p>

      <h2>2. Cash Conversion Improvement</h2>
      <p>Reducing the time between spending cash and receiving cash from customers.</p>
      <p><strong>CCC = Inventory Days + Receivable Days − Payable Days</strong></p>
      <p>Example: 40 + 20 − 30 = 30 days.</p>
      <p>Improved through faster inventory, faster collections, better invoicing, and reasonable supplier terms.</p>

      <h2>3. Working-Capital Improvement</h2>
      <p><strong>Working Capital = Current Assets − Current Liabilities</strong></p>
      <p><strong>Operating Working Capital = Receivables + Inventory − Operating Payables</strong></p>
      <p>Goal: maintain sufficient liquidity while avoiding excessive capital tied up in operations.</p>

      <h2>4. Gross-Margin Improvement</h2>
      <p><strong>Gross Margin = (Gross Profit ÷ Revenue) × 100</strong></p>
      <p>Achieved through pricing, supplier negotiation, waste reduction, production efficiency, product mix, defect reduction, and sourcing.</p>

      <h2>5. Contribution-Margin Improvement</h2>
      <p><strong>Contribution Margin = ((Revenue − Variable Costs) ÷ Revenue) × 100</strong></p>
      <p>Useful for break-even, pricing, promotions, product mix, and short-term decisions.</p>
      <p>At 30% margin, break-even on ₱175,000 fixed costs is ₱583,333. At 35%, it falls to ₱500,000.</p>

      <h2>6. Operating-Margin Improvement</h2>
      <p><strong>Operating Margin = (Operating Profit ÷ Revenue) × 100</strong></p>
      <p>Achieved through gross margin, operating efficiency, productivity, capacity utilization, retention, mix, and waste reduction.</p>

      <h2>7. Net-Margin Improvement</h2>
      <p><strong>Net Margin = (Net Profit ÷ Revenue) × 100</strong></p>
      <p>Affected by gross margin, operating expenses, financing, taxes, asset utilization, and mix.</p>
      <p>Improving operating margin does not always produce an equal change in net margin.</p>

      <h2>8. Profit Forecasting</h2>
      <p>Estimating future revenue, costs, and profit using explicit assumptions.</p>
      <p>Chain: Revenue → COGS → Gross Profit → Operating Expenses → Operating Profit → Interest/Other → Taxes → Net Profit.</p>
      <p>Create Base, Upside, and Downside scenarios to understand the range of outcomes.</p>
      <p>A forecast is an estimate, not a guaranteed result.</p>

      <h2>9. Profit Budgeting</h2>
      <p>Establishing planned revenue, costs, margins, and profit targets for a future period.</p>
      <p>Budget is a management plan; forecast is an updated expectation.</p>

      <h2>10. Profit Analysis</h2>
      <p>Systematically examining revenue, costs, margins, and profitability to understand why profit is changing.</p>
      <p>Ask: did revenue, prices, volume, COGS, supplier prices, labor, marketing, mix, financing, or taxes change?</p>
      <p>Convert profit changes into actionable information.</p>

      <h2>11. Profit Tracking</h2>
      <p>Continuous monitoring of actual profitability against budgets, forecasts, prior periods, and targets.</p>
      <p><strong>Variance = Actual − Budget</strong></p>
      <p><strong>Variance % = (Variance ÷ Budget) × 100</strong></p>
      <p>Tracking should lead to investigation and action, not merely reporting numbers.</p>

      <h2>12. Profit Allocation</h2>
      <p>Deciding how available profit or surplus should be used after obligations are met.</p>
      <p>Potential uses: reinvestment, reserves, working capital, debt repayment, equipment, technology, marketing, product development, employee development, owner distributions, expansion.</p>
      <p>Profit allocation should consider liquidity and cash-flow requirements, not just accounting profit.</p>

      <hr />

      <h2>Profit Management Cycle</h2>
      <pre>{`Budget → Forecast → Actual Results → Profit Tracking → Profit Analysis → Variance Identification → Corrective Action → Updated Forecast → Profit Allocation → Reinvestment / Reserves / Debt / Distribution → Next Budget`}</pre>

      <h2>Margin Improvement Hierarchy</h2>
      <pre>{`Revenue
   │
   ├── Pricing
   ├── Volume
   └── Product Mix
          ↓
       Gross Profit
          ↓
     Gross Margin
          ↓
   − Variable / Operating Costs
          ↓
    Operating Profit
          ↓
    Operating Margin
          ↓
 − Financing / Other Costs
          ↓
     Pre-Tax Profit
          ↓
          Tax
          ↓
      Net Profit
          ↓
       Net Margin`}</pre>

      <h2>Key Principles</h2>
      <ol>
        <li>Break-even improvement reduces the sales required to cover costs.</li>
        <li>Contribution margin is one of the primary drivers of break-even economics.</li>
        <li>Cash conversion improvement reduces the time between cash out and cash recovery.</li>
        <li>Working-capital improvement can release cash while maintaining operating liquidity.</li>
        <li>Gross-margin improvement increases profit remaining after direct costs.</li>
        <li>Contribution-margin improvement increases the amount available to cover fixed costs and generate profit.</li>
        <li>Operating-margin improvement improves profitability after operating expenses.</li>
        <li>Net-margin improvement increases the percentage of revenue remaining after applicable expenses and taxes.</li>
        <li>Profit forecasting estimates future profitability using explicit assumptions.</li>
        <li>Profit budgeting establishes planned financial targets.</li>
        <li>Profit tracking compares actuals with plans and previous periods.</li>
        <li>Profit analysis explains the causes behind profitability changes.</li>
        <li>Profit allocation determines how available profit or surplus is used responsibly.</li>
        <li>Profit is not the same as cash available for distribution.</li>
        <li>Improving margins can lower the break-even point.</li>
        <li>A profitable business can still experience financial stress if too much cash is tied up in inventory or receivables.</li>
        <li>Tracking without analysis produces information but not necessarily better decisions.</li>
        <li>Sustainable profitability requires continuous forecasting, measurement, analysis, improvement, and disciplined allocation.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Forecast → Budget → Generate Revenue → Manage Pricing → Control COGS → Improve Gross
        Margin → Manage Variable Costs → Improve Contribution Margin → Control Operating
        Expenses → Improve Operating Margin → Manage Financing and Taxes → Improve Net Margin →
        Track Actual Results → Analyze Variances → Improve Break-Even → Accelerate Cash
        Conversion → Optimize Working Capital → Forecast Again → Allocate Available Profit →
        Reinvest / Reserve / Reduce Debt / Distribute Appropriately → Measure → Optimize →
        Repeat.
      </p>
    </LessonLayout>
  )
}
