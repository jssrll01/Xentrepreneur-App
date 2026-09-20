import LessonLayout from '../components/LessonLayout'

export default function FinancialTechniques() {
  return (
    <LessonLayout
      number="15"
      title="Financial Techniques"
      summary="10 methods to understand money in your business — cash flow, margins, CAC, LTV, forecasting, and expense optimization."
    >
      <p>
        Financial techniques are methods businesses use to understand money,
        control spending, evaluate investments, measure profitability, forecast
        future performance, and make financially informed decisions.
      </p>
      <p>A business can generate substantial revenue and still fail if it:</p>
      <ul>
        <li>runs out of cash</li>
        <li>spends too much to acquire customers</li>
        <li>has weak margins</li>
        <li>misallocates its budget</li>
        <li>underestimates expenses</li>
        <li>overestimates future revenue</li>
        <li>sells products that are not economically viable</li>
      </ul>
      <p>A basic financial system connects:</p>
      <pre>{`Revenue
   ↓
Gross Profit
   ↓
Contribution Profit
   ↓
Operating Expenses
   ↓
Operating Profit
   ↓
Cash Flow
   ↓
Business Growth / Reinvestment`}</pre>
      <p>The ten techniques in this lesson provide different perspectives on the same business.</p>

      <hr />

      <h2>1. Cash-Flow Management</h2>
      <h3>Definition</h3>
      <p>Cash-flow management is the process of monitoring, controlling, and planning the movement of cash into and out of a business.</p>
      <p>The most important distinction is: <strong>profit is not the same as cash.</strong> A business can be profitable on paper but still have insufficient cash to pay its bills.</p>

      <h3>Basic cash-flow formula</h3>
      <p><strong>Net Cash Flow = Cash Inflows − Cash Outflows</strong></p>
      <p><strong>Ending Cash = Beginning Cash + Net Cash Flow</strong></p>
      <p>Example: beginning cash ₱100,000; cash inflows +₱80,000; cash outflows −₱65,000; ending cash ₱115,000.</p>

      <h3>Cash inflows</h3>
      <p>Examples: customer payments, product sales, subscriptions, service payments, loans, investments, refunds received, and asset sales.</p>

      <h3>Cash outflows</h3>
      <p>Examples: supplier payments, salaries, rent, utilities, advertising, software subscriptions, taxes, equipment, and loan payments.</p>

      <h3>Cash-flow timing</h3>
      <p>Timing matters. Suppose you sell ₱100,000 worth of products in January, but customers pay in March. Your accounting revenue may be recognized according to the applicable accounting method, but your bank account does not receive the ₱100,000 until March.</p>
      <p>Meanwhile, you may need to pay suppliers, employees, rent, and shipping in January and February. This creates a working-capital problem.</p>

      <h3>Cash-flow forecast</h3>
      <p>A simple forecast tracks for each month: beginning cash, inflows, outflows, and ending cash.</p>
      <p>Example: January begins ₱100k, receives ₱80k, spends ₱70k, ends ₱110k. February begins ₱110k, receives ₱90k, spends ₱95k, ends ₱105k. March begins ₱105k, receives ₱120k, spends ₱100k, ends ₱125k.</p>

      <h3>Cash-flow management process</h3>
      <p>Forecast → track actual cash → compare forecast vs actual → identify variances → adjust spending/collections → update forecast.</p>

      <h3>Important metrics</h3>
      <p><strong>Cash Burn = Cash Outflows − Cash Inflows</strong> — for a business that is spending more cash than it receives.</p>
      <p><strong>Cash Runway = Available Cash ÷ Average Monthly Net Cash Burn</strong></p>
      <p>For example: available cash ₱300,000, monthly burn ₱50,000. Runway = ₱300,000 ÷ ₱50,000 = 6 months. This is a simplified planning metric and should be adjusted for changing cash flows and upcoming obligations.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Prevents cash shortages</li>
        <li>Improves payment planning</li>
        <li>Helps prepare for slow periods</li>
        <li>Supports investment decisions</li>
        <li>Improves financial visibility</li>
      </ul>

      <h3>Risks</h3>
      <p>Poor cash-flow management can cause missed payments, supplier problems, payroll difficulties, emergency borrowing, delayed growth, and insolvency.</p>

      <hr />

      <h2>2. Budget Allocation</h2>
      <h3>Definition</h3>
      <p>Budget allocation is the process of deciding how available financial resources should be distributed across business activities.</p>
      <p>Examples: product development, marketing, operations, staff, technology, inventory, administration, and emergency reserve.</p>

      <h3>Example</h3>
      <p>Suppose a small business has ₱500,000 available for a year. A planning allocation could be: operations ₱150,000; marketing ₱100,000; product development ₱100,000; technology ₱50,000; administration ₱50,000; reserve ₱50,000. Total ₱500,000.</p>
      <p>These percentages should come from the company's strategy rather than being arbitrary universal rules.</p>

      <h3>Budgeting process</h3>
      <ol>
        <li><strong>Determine available resources.</strong> Identify cash, expected revenue, financing, and existing commitments.</li>
        <li><strong>Identify priorities.</strong> What activities are essential?</li>
        <li><strong>Estimate costs.</strong> Calculate expected expenses.</li>
        <li><strong>Allocate.</strong> Assign resources to each priority.</li>
        <li><strong>Set limits.</strong> Create spending boundaries.</li>
        <li><strong>Monitor.</strong> Compare actual spending vs budget.</li>
        <li><strong>Reallocate.</strong> Move resources when evidence shows that priorities have changed.</li>
      </ol>

      <h3>Budget variance</h3>
      <p><strong>Budget Variance = Actual − Budget</strong></p>
      <p>Example: budget ₱50,000, actual ₱55,000. Variance = ₱5,000. The business is ₱5,000 above budget. Variance analysis should also ask why the difference occurred.</p>

      <hr />

      <h2>3. Cost-Benefit Analysis</h2>
      <h3>Definition</h3>
      <p>Cost-benefit analysis (CBA) compares the expected costs of an action with its expected benefits. It helps answer: is this investment economically worthwhile under our assumptions?</p>

      <h3>Basic formula</h3>
      <p><strong>Net Benefit = Total Benefits − Total Costs</strong></p>
      <p>If benefits = ₱200,000 and costs = ₱120,000: net benefit = ₱80,000.</p>

      <h3>Benefit-cost ratio</h3>
      <p><strong>BCR = Total Benefits ÷ Total Costs</strong></p>
      <p>Using the same example: BCR = ₱200,000 ÷ ₱120,000 = 1.67. A ratio above 1 means estimated benefits exceed estimated costs, assuming the estimates are comparable and appropriately measured.</p>

      <h3>ROI</h3>
      <p><strong>ROI = (Gain − Investment) ÷ Investment × 100</strong></p>
      <p>If an investment costs ₱100,000 and produces ₱130,000 in measurable gains: ROI = (₱130,000 − ₱100,000) ÷ ₱100,000 × 100 = 30%.</p>

      <h3>Example</h3>
      <p>A company is considering an automated order system.</p>
      <p><strong>Costs:</strong> development ₱80,000; setup ₱10,000; annual maintenance ₱20,000.</p>
      <p><strong>Potential benefits:</strong> reduced manual work, fewer errors, faster processing, and additional sales capacity. The business should estimate the monetary value of measurable benefits and compare them with total relevant costs.</p>

      <h3>Important considerations</h3>
      <p>Not every benefit is immediately financial. Possible benefits include time savings, quality improvements, reduced risk, customer satisfaction, increased capacity, faster response, and strategic positioning. When benefits are difficult to monetize, identify them separately rather than inventing precise numbers.</p>

      <hr />

      <h2>4. Unit Economics</h2>
      <h3>Definition</h3>
      <p>Unit economics analyzes the revenue and costs associated with a single unit of business activity. A "unit" could be one product, one customer, one order, one subscription, one transaction, or one project.</p>
      <p>The purpose is to understand: does each unit of business activity make economic sense?</p>

      <h3>Example: product</h3>
      <p>Selling price ₱500. Variable costs: product ₱250, packaging ₱30, transaction fee ₱20. Variable cost = ₱250 + ₱30 + ₱20 = ₱300. Contribution per unit = ₱500 − ₱300 = ₱200.</p>

      <h3>Contribution margin per unit</h3>
      <p><strong>Contribution Margin per Unit = Selling Price − Variable Cost per Unit</strong></p>
      <p><strong>Contribution Margin % = Contribution Margin ÷ Revenue × 100</strong></p>
      <p>Here: ₱200 ÷ ₱500 × 100 = 40%.</p>

      <h3>Marketplace example</h3>
      <p>Suppose Xmarket processes a ₱1,000 order. Commission 10%. Revenue to marketplace = ₱1,000 × 10% = ₱100. Variable transaction and payment costs ₱30. Contribution = ₱100 − ₱30 = ₱70. The business can then compare this contribution with acquisition and operating costs.</p>

      <h3>Why unit economics matters</h3>
      <p>A business may have 1,000 customers and ₱1,000,000 revenue but still lose money if every transaction generates insufficient contribution to cover fixed costs and acquisition costs.</p>

      <hr />

      <h2>5. Customer Acquisition Cost Analysis</h2>
      <h3>Definition</h3>
      <p>Customer Acquisition Cost (CAC) measures how much a business spends, on average, to acquire a new customer.</p>

      <h3>Basic formula</h3>
      <p><strong>CAC = Sales and Marketing Costs ÷ New Customers Acquired</strong></p>
      <p>Example: marketing and sales spending ₱100,000; new customers 500. CAC = ₱100,000 ÷ 500 = ₱200. The average acquisition cost is ₱200 per customer.</p>

      <h3>CAC components</h3>
      <p>Potential costs include advertising, sales salaries, commissions, marketing software, content production, agency fees, promotional campaigns, and sales tools. The exact calculation should use a consistent definition of which costs and customers are included.</p>

      <h3>CAC by channel</h3>
      <p>A business can calculate: Facebook ads CAC ₱250; search ads CAC ₱180; referral program CAC ₱80; affiliate CAC ₱150. This helps evaluate acquisition efficiency. However, CAC should not be interpreted in isolation. Customer quality and lifetime value also matter.</p>

      <h3>CAC payback period</h3>
      <p><strong>CAC Payback = CAC ÷ Monthly Contribution per Customer</strong></p>
      <p>If CAC = ₱600 and monthly contribution = ₱200: payback = 3 months. The business would need approximately three months of contribution to recover the acquisition cost under these assumptions.</p>

      <hr />

      <h2>6. Customer Lifetime Value Analysis</h2>
      <h3>Definition</h3>
      <p>Customer Lifetime Value (LTV or CLV) estimates the economic value a customer generates over the duration of their relationship with a business.</p>
      <p>It helps answer: how much economic value does a typical customer generate over time?</p>

      <h3>Simplified formula</h3>
      <p>For a simple recurring business: <strong>LTV ≈ Average Revenue per Customer × Customer Lifetime</strong></p>
      <p>For profitability analysis, contribution margin is more useful: <strong>LTV ≈ Average Revenue per Period × Contribution Margin % × Customer Lifetime</strong></p>

      <h3>Example</h3>
      <p>Average monthly revenue ₱500. Contribution margin 50%. Average lifetime 12 months. LTV = ₱500 × 50% × 12 = ₱3,000. This is an estimated contribution-based lifetime value before other relevant customer-level costs.</p>

      <h3>LTV:CAC</h3>
      <p><strong>LTV:CAC = LTV ÷ CAC</strong></p>
      <p>If LTV = ₱3,000 and CAC = ₱600: LTV:CAC = 5:1. The ratio alone should not be treated as a universal target. Businesses differ in margins, growth stage, cash constraints, and measurement methods.</p>

      <h3>Factors affecting LTV</h3>
      <p>Purchase frequency, average order value, retention, subscription duration, contribution margin, churn, upselling, and cross-selling.</p>

      <h3>Increasing LTV</h3>
      <p>Better product → higher satisfaction → higher retention → more purchases → higher LTV.</p>
      <p>Other methods: subscriptions, memberships, bundles, cross-selling, upselling, loyalty programs, and better customer support.</p>

      <hr />

      <h2>7. Gross-Margin Analysis</h2>
      <h3>Definition</h3>
      <p>Gross margin analysis examines how much revenue remains after deducting the cost of goods sold or other directly attributable costs included in gross cost.</p>

      <h3>Formula</h3>
      <p><strong>Gross Profit = Revenue − COGS</strong></p>
      <p><strong>Gross Margin % = Gross Profit ÷ Revenue × 100</strong></p>

      <h3>Example</h3>
      <p>Revenue ₱500,000. COGS ₱300,000. Gross profit = ₱500,000 − ₱300,000 = ₱200,000. Gross margin = ₱200,000 ÷ ₱500,000 × 100 = 40%.</p>

      <h3>Why gross margin matters</h3>
      <p>Revenue tells you how much you sold. Gross margin tells you how much remains after the relevant direct costs.</p>
      <p>Two businesses can have identical revenue but dramatically different gross profit.</p>
      <p><strong>Business A:</strong> revenue ₱1M, gross margin 70%, gross profit ₱700k.</p>
      <p><strong>Business B:</strong> revenue ₱1M, gross margin 25%, gross profit ₱250k.</p>

      <h3>Gross-margin analysis</h3>
      <p>Analyze margin by product, service, customer segment, sales channel, geographic market, supplier, and product category. This can reveal which parts of the business have stronger or weaker economics.</p>

      <hr />

      <h2>8. Contribution-Margin Analysis</h2>
      <h3>Definition</h3>
      <p>Contribution margin measures how much revenue remains after variable costs and therefore contributes toward covering fixed costs and generating profit.</p>

      <h3>Formula</h3>
      <p><strong>Contribution Margin = Revenue − Variable Costs</strong></p>
      <p><strong>Contribution Margin % = Contribution Margin ÷ Revenue × 100</strong></p>

      <h3>Example</h3>
      <p>Revenue ₱100,000. Variable costs ₱60,000. Contribution margin = ₱100,000 − ₱60,000 = ₱40,000. Contribution margin percentage = ₱40,000 ÷ ₱100,000 × 100 = 40%. If fixed operating costs are ₱30,000: operating profit = ₱40,000 − ₱30,000 = ₱10,000.</p>

      <h3>Contribution margin vs gross margin</h3>
      <p>These terms depend on the business's accounting structure, so definitions should be applied consistently.</p>
      <p><strong>Gross margin:</strong> usually revenue minus COGS; often used for product/service profitability; can include different cost classifications depending on accounting policy; useful for financial reporting and product analysis.</p>
      <p><strong>Contribution margin:</strong> revenue minus variable costs; often used for decision-making and break-even analysis; specifically focuses on costs that vary with activity; useful for pricing, volume, and break-even decisions.</p>

      <h3>Contribution margin and break-even</h3>
      <p><strong>Break-Even Units = Fixed Costs ÷ Contribution Margin per Unit</strong></p>
      <p>Example: fixed costs ₱100,000, selling price ₱500, variable cost ₱300. Contribution = ₱500 − ₱300 = ₱200. Break-even = ₱100,000 ÷ ₱200 = 500 units. The business needs to sell 500 units to cover the specified fixed costs under these assumptions.</p>

      <hr />

      <h2>9. Revenue Forecasting</h2>
      <h3>Definition</h3>
      <p>Revenue forecasting is the process of estimating future sales revenue based on historical data, current performance, market assumptions, pricing, customer behavior, sales pipeline, and planned activities.</p>
      <p>Forecasting is not fortune-telling. It is a structured estimate based on assumptions.</p>
      <p>Historical data + current pipeline + market conditions + pricing + customer trends + business plans → revenue forecast.</p>

      <h3>Basic revenue formula</h3>
      <p><strong>Revenue = Units Sold × Average Selling Price</strong></p>
      <p>Example: expected sales 2,000 units, average price ₱500. Revenue = 2,000 × ₱500 = ₱1,000,000.</p>

      <h3>Subscription forecast</h3>
      <p><strong>Revenue = Number of Customers × Average Revenue per Customer</strong></p>
      <p>Suppose 1,000 customers, average monthly revenue ₱300. Monthly revenue = 1,000 × ₱300 = ₱300,000.</p>

      <h3>Forecasting using growth</h3>
      <p>Suppose current revenue is ₱1,000,000. Assumed growth 10%. Forecast = ₱1,000,000 × 1.10 = ₱1,100,000.</p>
      <p>But simply applying a growth percentage can be unreliable if market conditions or business capacity are changing.</p>

      <h3>Scenario forecasting</h3>
      <p>Instead of one number, build downside (₱800k), base (₱1.0M), and upside (₱1.2M) scenarios. Each scenario should have explicit assumptions.</p>
      <p><strong>Downside:</strong> lower customer acquisition, weaker conversion, higher churn.</p>
      <p><strong>Base:</strong> expected performance.</p>
      <p><strong>Upside:</strong> stronger acquisition, higher conversion, successful new products.</p>

      <h3>Forecast accuracy</h3>
      <p><strong>Forecast Error = Actual − Forecast</strong></p>
      <p><strong>Forecast Error % = (Actual − Forecast) ÷ Forecast × 100</strong></p>
      <p>Tracking forecast accuracy allows the business to improve future assumptions.</p>

      <hr />

      <h2>10. Expense Optimization</h2>
      <h3>Definition</h3>
      <p>Expense optimization is the process of reducing unnecessary spending and improving the value generated from necessary spending without damaging essential business capabilities.</p>
      <p>It is different from simply "cut every expense." The objective is: get more useful output from every peso spent.</p>
      <p>Expense → classify → measure value → identify waste → compare alternatives → optimize → monitor result.</p>

      <h3>Expense categories</h3>
      <p><strong>Essential</strong> — expenses required to operate. Examples: required infrastructure, essential staff, necessary inventory, legal/compliance expenses.</p>
      <p><strong>Growth</strong> — expenses intended to increase future revenue. Examples: advertising, product development, sales staff, expansion.</p>
      <p><strong>Optional</strong> — expenses that may not materially affect important outcomes.</p>
      <p><strong>Waste</strong> — expenses that generate little or no useful value.</p>

      <h3>Expense optimization methods</h3>
      <ol>
        <li><strong>Remove unnecessary costs.</strong> Cancel unused subscriptions.</li>
        <li><strong>Renegotiate contracts.</strong> Ask suppliers for better terms.</li>
        <li><strong>Consolidate tools.</strong> Instead of paying for several overlapping software services, determine whether one solution can cover the required functions.</li>
        <li><strong>Automate repetitive work.</strong> Reduce unnecessary manual effort.</li>
        <li><strong>Improve purchasing.</strong> Compare suppliers based on total cost, not only sticker price.</li>
        <li><strong>Optimize staffing.</strong> Match labor capacity to actual workload.</li>
        <li><strong>Reduce waste.</strong> Track defective products, excess inventory, unused capacity, unnecessary transactions, and inefficient processes.</li>
      </ol>

      <h3>Example</h3>
      <p>A company spends software A ₱1,000/month, software B ₱1,500/month, software C ₱2,000/month, software D ₱1,000/month. Total ₱5,500/month. If software B and C provide overlapping functionality, the company could investigate consolidation. The goal is not automatically to cancel software. The goal is to determine: what capability do we need, and what is the most efficient way to obtain it?</p>

      <hr />

      <h2>Cost Optimization vs Cost Cutting</h2>
      <p>These concepts should not be confused.</p>
      <p><strong>Cost cutting:</strong> focuses on reducing spending; can be short-term; may reduce capability; "spend less."</p>
      <p><strong>Cost optimization:</strong> focuses on improving economic efficiency; can be strategic and long-term; attempts to preserve or improve capability; "get more value per peso."</p>
      <p>Example: cost cutting fires customer-support employees to reduce payroll. Optimization improves support workflows and automation so employees can handle more customers without reducing necessary service quality. The second approach examines output relative to cost.</p>

      <hr />

      <h2>Financial Relationship Between the Techniques</h2>
      <p>These techniques are connected.</p>
      <pre>{`REVENUE
                   │
                   ↓
            Gross-Margin Analysis
                   │
                   ↓
          Contribution-Margin Analysis
                   │
                   ↓
             Unit Economics
                   │
          ┌────────┴─────────┐
          ↓                  ↓
        CAC                  LTV
          │                  │
          └────────┬─────────┘
                   ↓
          Customer Economics
                   │
                   ↓
             Business Model
                   │
          ┌────────┴─────────┐
          ↓                  ↓
   Expense Optimization   Budget Allocation
          │                  │
          └────────┬─────────┘
                   ↓
             Cash Flow
                   │
                   ↓
          Financial Forecast
                   │
                   ↓
             Future Planning`}</pre>

      <hr />

      <h2>Revenue vs Profit vs Cash</h2>
      <p>These are three different financial concepts.</p>
      <p>Revenue = money generated from sales. Minus costs = profit. But cash flow depends on when money actually enters/leaves the business.</p>
      <p>Example: a business sells ₱500,000 of products. COGS ₱300,000. Operating expenses ₱100,000. Accounting profit under a simplified example: ₱500,000 − ₱300,000 − ₱100,000 = ₱100,000. But if customers haven't paid yet, the business may not have ₱100,000 of additional cash available. This is why financial analysis must consider profitability and liquidity separately.</p>

      <hr />

      <h2>CAC vs LTV</h2>
      <p>One of the most important customer-economics relationships is:</p>
      <p>Customer acquisition → CAC → customer acquired → purchases/usage → LTV.</p>
      <p>If acquiring a customer costs ₱500 and the customer's expected contribution over the relationship is ₱100, the acquisition model is economically weak under those assumptions.</p>
      <p>If CAC = ₱500 and LTV = ₱2,000, there is potentially more economic room. But the analysis should also consider timing, retention uncertainty, overhead, cash requirements, refunds, discounts, attribution, and customer segment differences.</p>

      <hr />

      <h2>Gross Margin vs Contribution Margin vs Net Profit</h2>
      <p>Consider: revenue ₱1,000,000; less COGS ₱600,000 = gross profit ₱400,000; less other variable costs ₱100,000 = contribution ₱300,000; less fixed operating costs ₱200,000 = operating profit ₱100,000.</p>
      <p>This illustrates why a business should not stop its analysis at revenue. Each layer answers a different question.</p>
      <ul>
        <li><strong>Revenue</strong> — how much did we sell?</li>
        <li><strong>Gross profit</strong> — how much remains after direct product/service costs?</li>
        <li><strong>Gross margin</strong> — how efficiently does revenue convert to gross profit?</li>
        <li><strong>Contribution margin</strong> — how much remains after variable costs?</li>
        <li><strong>Operating profit</strong> — what remains after operating expenses?</li>
        <li><strong>Cash flow</strong> — how much cash actually moved?</li>
      </ul>

      <hr />

      <h2>Financial Decision-Making Framework</h2>
      <p>Before making a major financial decision:</p>
      <ol>
        <li><strong>Identify.</strong> What decision are we making?</li>
        <li><strong>Measure.</strong> What does it cost? What revenue/value could it generate?</li>
        <li><strong>Analyze.</strong> Unit economics, margins, CAC, LTV, cash flow.</li>
        <li><strong>Forecast.</strong> Base, downside, upside.</li>
        <li><strong>Decide.</strong> Allocate resources.</li>
        <li><strong>Monitor.</strong> Actual vs forecast.</li>
        <li><strong>Adjust.</strong> Change assumptions or spending.</li>
      </ol>

      <hr />

      <h2>Example: Evaluating a New Xmarket Category</h2>
      <p>Suppose Xmarket is considering adding a new product category.</p>
      <p>Expected sales: 1,000 orders/month. Average order ₱800. Revenue = 1,000 × ₱800 = ₱800,000.</p>
      <p>Product and transaction costs: variable costs ₱560,000. Contribution = ₱800,000 − ₱560,000 = ₱240,000. Contribution margin = ₱240,000 ÷ ₱800,000 × 100 = 30%.</p>
      <p>Customer acquisition: marketing ₱80,000/month. New customers 400. CAC = ₱80,000 ÷ 400 = ₱200.</p>
      <p>Customer value: suppose estimated customer lifetime contribution is ₱1,000. Then LTV:CAC = ₱1,000 ÷ ₱200 = 5:1.</p>
      <p>This doesn't automatically mean the category should be launched. The business should also examine retention assumptions, fulfillment costs, refunds, working capital, competition, supplier reliability, demand uncertainty, fixed costs, and opportunity cost.</p>

      <hr />

      <h2>Financial Dashboard</h2>
      <p>A small business can monitor a core financial dashboard:</p>
      <ul>
        <li><strong>Revenue</strong> — monthly revenue</li>
        <li><strong>Growth</strong> — revenue growth</li>
        <li><strong>Profitability</strong> — gross margin</li>
        <li><strong>Unit economics</strong> — contribution/unit</li>
        <li><strong>Customers</strong> — new customers</li>
        <li><strong>Acquisition</strong> — CAC</li>
        <li><strong>Retention</strong> — churn/retention</li>
        <li><strong>Customer value</strong> — LTV</li>
        <li><strong>Liquidity</strong> — cash balance</li>
        <li><strong>Cash flow</strong> — net cash flow</li>
        <li><strong>Spending</strong> — budget variance</li>
        <li><strong>Efficiency</strong> — expense/revenue ratio</li>
        <li><strong>Forecasting</strong> — actual vs forecast</li>
      </ul>

      <hr />

      <h2>Expense-to-Revenue Ratio</h2>
      <p>A useful efficiency metric is:</p>
      <p><strong>Expense Ratio = Operating Expenses ÷ Revenue × 100</strong></p>
      <p>Example: operating expenses ₱200,000, revenue ₱1,000,000. Expense ratio = ₱200,000 ÷ ₱1,000,000 × 100 = 20%. Tracking this over time can show whether operating expenses are growing faster or slower than revenue.</p>

      <hr />

      <h2>Budget → Actual → Variance → Action</h2>
      <p>A strong financial-management loop is:</p>
      <pre>{`BUDGET
                ↓
             ACTUAL
                ↓
             VARIANCE
                ↓
          WHY DID IT HAPPEN?
                ↓
              ACTION
                ↓
          UPDATED FORECAST
                ↓
              NEW BUDGET`}</pre>
      <p>Example: marketing budget ₱50,000; actual ₱65,000; variance +₱15,000. The next question is not simply "Why did we overspend?" It should be: "Did the additional ₱15,000 create enough incremental value to justify the spending?"</p>
      <p>This connects budget allocation with cost-benefit analysis and unit economics.</p>

      <hr />

      <h2>Financial Technique Comparison</h2>
      <ul>
        <li><strong>Cash-flow management</strong> — do we have enough cash and when will it move?</li>
        <li><strong>Budget allocation</strong> — where should resources be spent?</li>
        <li><strong>Cost-benefit analysis</strong> — is an action worth its cost?</li>
        <li><strong>Unit economics</strong> — does each unit/customer/order make economic sense?</li>
        <li><strong>CAC analysis</strong> — how much does acquiring a customer cost?</li>
        <li><strong>LTV analysis</strong> — how much economic value does a customer generate?</li>
        <li><strong>Gross-margin analysis</strong> — how much remains after direct costs?</li>
        <li><strong>Contribution-margin analysis</strong> — how much remains after variable costs?</li>
        <li><strong>Revenue forecasting</strong> — how much revenue might we generate?</li>
        <li><strong>Expense optimization</strong> — how can we improve value generated per peso spent?</li>
      </ul>

      <hr />

      <h2>Complete Financial Management System</h2>
      <pre>{`FINANCIAL MANAGEMENT
                                  │
             ┌────────────────────┼────────────────────┐
             ↓                    ↓                    ↓
          REVENUE              COSTS                 CASH
             │                    │                    │
             ↓                    ↓                    ↓
    Revenue Forecasting      Cost Analysis       Cash-Flow
             │                    │               Management
             │          ┌─────────┼─────────┐          │
             │          ↓         ↓         ↓          │
             │        Gross   Contribution  Expense    │
             │        Margin    Margin    Optimization │
             │          │         │         │          │
             │          └─────────┼─────────┘          │
             │                    ↓                    │
             │              Unit Economics             │
             │                    │                    │
             │             ┌──────┴──────┐             │
             │             ↓             ↓             │
             │            CAC           LTV            │
             │             │             │             │
             │             └──────┬──────┘             │
             │                    ↓                    │
             │             Customer Economics         │
             │                    │                    │
             └────────────────────┼────────────────────┘
                                  ↓
                           Budget Allocation
                                  ↓
                         Financial Decisions
                                  ↓
                         Actual vs Forecast
                                  ↓
                              Adjustment
                                  ↺`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li><strong>Revenue is not enough.</strong> A business needs healthy margins and sustainable cash flow.</li>
        <li><strong>Profit is not cash.</strong> A profitable business can still experience a cash shortage.</li>
        <li><strong>Measure unit economics.</strong> Understand whether each product, customer, order, or transaction contributes economically.</li>
        <li><strong>Know your acquisition cost.</strong> CAC shows how much resources are required to acquire customers.</li>
        <li><strong>Know customer value.</strong> LTV helps determine whether customer relationships can generate sufficient economic value.</li>
        <li><strong>Protect margins.</strong> Revenue growth with deteriorating margins can create a misleading picture of business performance.</li>
        <li><strong>Separate fixed and variable costs.</strong> This makes contribution and break-even analysis more useful.</li>
        <li><strong>Allocate money according to priorities.</strong> A budget is a resource-allocation system, not merely a spending limit.</li>
        <li><strong>Optimize instead of blindly cutting.</strong> The objective is to improve the relationship between cost and output/value.</li>
        <li><strong>Forecast with assumptions.</strong> Every forecast should have identifiable assumptions that can later be tested.</li>
        <li><strong>Use scenarios.</strong> Uncertainty is better represented by multiple plausible cases than by false precision.</li>
        <li><strong>Compare actual performance with expectations.</strong> Forecast → actual → variance → cause → action → updated forecast.</li>
        <li><strong>Look at the entire financial system.</strong> Acquire customer → CAC → customer purchases → revenue → gross margin → contribution margin → operating expenses → profit → cash flow → reinvestment → growth.</li>
      </ol>
      <p>Financial techniques turn raw business activity into measurable economic information. Cash-flow management protects liquidity, budgeting controls resource allocation, cost-benefit analysis evaluates decisions, unit economics examines individual transactions, CAC and LTV measure customer economics, margin analysis reveals profitability, revenue forecasting prepares for the future, and expense optimization improves efficiency. Together, they provide the financial foundation for making business decisions based on economics rather than revenue alone.</p>
    </LessonLayout>
  )
}
