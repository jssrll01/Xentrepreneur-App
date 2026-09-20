import LessonLayout from '../components/LessonLayout'

export default function DecisionMaking() {
  return (
    <LessonLayout
      number="09"
      title="Decision-Making"
      summary="10 methods to turn information into action, action into results, and results into better future decisions."
    >
      <p>
        Decision-making is the process of choosing what a business should do
        based on its goals, available information, constraints, risks, and
        expected outcomes.
      </p>
      <p>
        Good business decisions are not simply about choosing the option that
        "feels right." They involve identifying the problem, gathering
        relevant information, comparing alternatives, estimating consequences,
        taking action, measuring results, and learning from the outcome.
      </p>
      <p>A practical decision-making cycle is:</p>
      <p><strong>Problem → Information → Options → Evaluation → Decision → Implementation → Measurement → Learning → Improved Decision.</strong></p>
      <p>The ten decision-making methods below help businesses make decisions more systematically.</p>

      <hr />

      <h2>1. Data-Driven Decisions</h2>
      <h3>Definition</h3>
      <p>A data-driven decision is a business decision based primarily on measurable evidence rather than intuition, assumptions, or personal preference.</p>
      <p>Data can include sales, revenue, costs, profit, website traffic, conversion rates, customer behavior, customer retention, inventory levels, product performance, advertising performance, employee productivity, and market trends.</p>

      <h3>How it works</h3>
      <p>Collect data → clean data → analyze data → identify pattern → generate options → make decision → measure result.</p>
      <p>The important principle is that data informs the decision; it does not automatically make the decision. For example, a product may have high sales but extremely low profit. Therefore, high sales ≠ high profit. A business should examine multiple variables before deciding.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Define the decision</strong> — example: should we continue selling Product A?</li>
        <li><strong>Identify relevant metrics</strong> — look at sales volume, revenue, gross margin, return rate, customer complaints, repeat purchases, inventory cost.</li>
        <li><strong>Collect reliable data</strong> — sources can include POS systems, website analytics, accounting software, customer databases, surveys, and inventory systems.</li>
        <li><strong>Compare alternatives</strong> — for example: Product A has sales 850, revenue ₱170,000, gross margin 20%, returns 8%, repeat purchase 28%. Product B has sales 420, revenue ₱126,000, gross margin 40%, returns 2%, repeat purchase 35%.</li>
        <li><strong>Make and test the decision</strong> — do not stop after making the decision. Monitor what happens afterward.</li>
      </ol>

      <h3>Example</h3>
      <p>An online marketplace notices that customers frequently abandon their carts. The business analyzes its data and discovers: product page → 10,000 visitors; add to cart → 2,500; checkout → 1,300; purchase → 700. The largest drop occurs during checkout.</p>
      <p>Instead of spending more money on advertising, the company investigates checkout problems. It discovers that shipping costs are being revealed late. The business changes the checkout experience and then measures conversion again.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Reduces guesswork</li>
        <li>Makes decisions more measurable</li>
        <li>Identifies trends</li>
        <li>Helps detect problems</li>
        <li>Improves resource allocation</li>
        <li>Makes performance easier to evaluate</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Poor-quality data</li>
        <li>Incomplete data</li>
        <li>Misinterpretation</li>
        <li>Measuring the wrong metric</li>
        <li>Overreliance on historical data</li>
        <li>Ignoring qualitative information</li>
      </ul>

      <h3>Important principle</h3>
      <p>Bad data can produce confident but bad decisions.</p>

      <hr />

      <h2>2. Customer-Feedback Decisions</h2>
      <h3>Definition</h3>
      <p>Customer-feedback decisions are decisions based on information received directly from customers.</p>
      <p>Feedback can come from reviews, surveys, interviews, support tickets, comments, complaints, ratings, social media, product requests, refund reasons, and feature requests.</p>
      <p>Customers can reveal problems that internal business data cannot fully explain.</p>

      <h3>How it works</h3>
      <p>Customer experience → feedback → categorization → pattern identification → priority assessment → business decision → implementation → customer response.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Collect feedback</strong> — create multiple channels: website (review, survey, support), social media (comments, messages), purchase system (refund reason, rating).</li>
        <li><strong>Categorize feedback</strong> — for example: delivery 80, pricing 35, website 25, product quality 15, payment 10.</li>
        <li><strong>Identify repeated problems</strong> — one customer complaint might be an isolated incident. Hundreds of similar complaints indicate a potentially systematic problem.</li>
        <li><strong>Prioritize</strong> — consider frequency + customer impact + business impact + cost to fix.</li>
      </ol>

      <h3>Example</h3>
      <p>Customers repeatedly report: "The checkout process takes too long." The business discovers that checkout requires six screens. It redesigns the process into three screens and measures: checkout completion, abandonment, support requests, and customer satisfaction.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Direct customer insight</li>
        <li>Reveals hidden problems</li>
        <li>Helps improve products</li>
        <li>Builds customer-centered decision-making</li>
        <li>Identifies new opportunities</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Vocal customers may not represent all customers</li>
        <li>Feedback can be contradictory</li>
        <li>Customers may describe symptoms rather than causes</li>
        <li>Feature requests may not be financially viable</li>
      </ul>

      <h3>Important principle</h3>
      <p>Listen to customers, but validate what they say with broader evidence.</p>

      <hr />

      <h2>3. Rapid Experimentation</h2>
      <h3>Definition</h3>
      <p>Rapid experimentation means testing ideas quickly and cheaply before committing significant resources.</p>
      <p>Instead of asking "Will this work?" the business asks "How can we test whether this works?"</p>

      <h3>How it works</h3>
      <p>Idea → hypothesis → small test → measure → learn → improve/stop/scale.</p>

      <h3>Example</h3>
      <p>A marketplace wants to know whether free shipping increases sales. Instead of immediately offering free shipping to everyone: Group A receives normal shipping; Group B receives free shipping. The business compares conversion rate, average order value, gross profit, and repeat purchase.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Create a hypothesis</strong> — example: "Offering free shipping for orders above ₱500 will increase average order value."</li>
        <li><strong>Define the metric</strong> — possible metric: Average Order Value = Revenue ÷ Number of Orders.</li>
        <li><strong>Define the test</strong> — example: current threshold ₱300, experiment ₱500, duration 2 weeks.</li>
        <li><strong>Establish a decision rule</strong> — for example: if AOV increases while profit/order remains acceptable, consider expanding the offer.</li>
        <li><strong>Analyze results</strong> — avoid changing several major variables simultaneously unless the experiment is specifically designed to test them together.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Fast learning</li>
        <li>Lower risk</li>
        <li>Lower cost</li>
        <li>Encourages innovation</li>
        <li>Prevents large investments in untested ideas</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Small sample sizes</li>
        <li>Misleading short-term results</li>
        <li>Poor experiment design</li>
        <li>External factors affecting results</li>
        <li>Testing too many things simultaneously</li>
      </ul>

      <h3>Important principle</h3>
      <p>Experimentation turns uncertainty into information.</p>

      <hr />

      <h2>4. Pilot Programs</h2>
      <h3>Definition</h3>
      <p>A pilot program is a limited implementation of a new product, process, service, system, or strategy before launching it broadly. A pilot is larger and more operationally realistic than a simple experiment.</p>

      <h3>Experiment vs pilot</h3>
      <p><strong>Experiment:</strong> usually tests a specific hypothesis; often smaller; focuses on learning; shorter; may test one variable.</p>
      <p><strong>Pilot:</strong> tests a broader implementation; usually larger; focuses on operational readiness; can last longer; can test an entire process.</p>

      <h3>Example</h3>
      <p>A business wants to introduce same-day delivery. Instead of launching nationwide, it starts with one city and 50 orders/day, measures delivery performance, fixes problems, and then expands.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Define the pilot objective</strong> — example: determine whether same-day delivery can be operated profitably.</li>
        <li><strong>Select a limited market</strong> — one city, one branch, one customer segment, one product category.</li>
        <li><strong>Define success criteria</strong> — possible metrics: delivery time, cost/order, failed deliveries, customer satisfaction, repeat purchases, profit/order.</li>
        <li><strong>Run the pilot.</strong></li>
        <li><strong>Document problems.</strong></li>
        <li><strong>Decide whether to stop, modify, continue pilot, or scale.</strong></li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Reduces launch risk</li>
        <li>Tests operational capability</li>
        <li>Reveals unexpected problems</li>
        <li>Allows controlled scaling</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Pilot conditions may differ from full-scale operations</li>
        <li>Results may not generalize</li>
        <li>Employees may behave differently during a pilot</li>
        <li>Customers may be unusually selected</li>
      </ul>

      <hr />

      <h2>5. Scenario Planning</h2>
      <h3>Definition</h3>
      <p>Scenario planning involves preparing for multiple possible future situations instead of assuming that only one future will occur. It is particularly useful when uncertainty is high.</p>

      <h3>Basic structure</h3>
      <p>Future branches into positive scenario, expected scenario, and negative scenario.</p>
      <p>For example, a business may consider:</p>
      <ul>
        <li><strong>Scenario A — Strong growth.</strong> Demand increases by 40%.</li>
        <li><strong>Scenario B — Stable demand.</strong> Demand remains approximately unchanged.</li>
        <li><strong>Scenario C — Demand decline.</strong> Demand decreases by 30%.</li>
      </ul>
      <p>The business then prepares responses for each situation.</p>

      <h3>Example</h3>
      <p>An online store depends heavily on one supplier. Possible scenarios: A — supplier reliable → continue; B — delays increase → increase backup inventory; C — supplier unavailable → activate alternative supplier.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Identify uncertainties</strong> — examples: demand, prices, competition, regulation, supply, technology, currency, economic conditions.</li>
        <li><strong>Build scenarios</strong> — usually create several plausible scenarios rather than hundreds of possibilities.</li>
        <li><strong>Estimate business impact</strong> — consider revenue, costs, cash flow, capacity, customers, and employees.</li>
        <li><strong>Create response plans</strong> — if Scenario A → Action A; if Scenario B → Action B; if Scenario C → Action C.</li>
        <li><strong>Identify trigger points</strong> — for example: if monthly cash reserves fall below ₱100,000, activate cost-control plan.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Improves preparedness</li>
        <li>Reduces surprise</li>
        <li>Identifies vulnerabilities</li>
        <li>Helps management respond faster</li>
        <li>Supports contingency planning</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Scenarios may be unrealistic</li>
        <li>Too many scenarios create complexity</li>
        <li>Estimates can be wrong</li>
        <li>Teams may confuse scenarios with predictions</li>
      </ul>

      <h3>Important principle</h3>
      <p>Scenario planning is preparation, not prediction.</p>

      <hr />

      <h2>6. Competitor Monitoring</h2>
      <h3>Definition</h3>
      <p>Competitor monitoring is the systematic observation of competitors' products, prices, marketing, customer experience, technology, distribution, and strategic changes.</p>
      <p>The purpose is not to copy competitors blindly. The purpose is to understand the competitive environment.</p>

      <h3>What to monitor</h3>
      <p>Pricing, products, features, promotions, reviews, marketing, distribution, website, customer experience, partnerships, and new launches.</p>

      <h3>Example</h3>
      <p>A marketplace monitors five competitors every month. Factors might include free shipping, loyalty program, mobile app, same-day delivery, and product range. This can reveal areas requiring investigation.</p>

      <h3>How to implement</h3>
      <p>Create a competitor-monitoring system.</p>
      <p><strong>Weekly:</strong> monitor promotions, major product changes, advertising campaigns.</p>
      <p><strong>Monthly:</strong> compare prices, product range, customer reviews, features.</p>
      <p><strong>Quarterly:</strong> review business strategy, new markets, partnerships, technology, positioning.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Detects market changes</li>
        <li>Identifies opportunities</li>
        <li>Helps anticipate competitive moves</li>
        <li>Supports pricing decisions</li>
        <li>Reveals industry trends</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Becoming obsessed with competitors</li>
        <li>Copying instead of innovating</li>
        <li>Using unreliable information</li>
        <li>Losing focus on customers</li>
      </ul>

      <h3>Important principle</h3>
      <p>Monitor competitors to understand the market, not to let competitors determine your entire strategy.</p>

      <hr />

      <h2>7. KPI Tracking</h2>
      <h3>Definition</h3>
      <p>A KPI (Key Performance Indicator) is a measurable value used to evaluate progress toward an important business objective. Not every metric is a KPI.</p>
      <p>For example: website visits = metric. Conversion rate = potential KPI. Whether something is a KPI depends on the business objective.</p>

      <h3>KPI categories</h3>
      <p><strong>Financial</strong> — revenue, gross profit, net profit, cash flow, gross margin.</p>
      <p><strong>Sales</strong> — conversion rate, average order value, sales volume, customer acquisition cost.</p>
      <p><strong>Customer</strong> — retention rate, churn rate, customer satisfaction, repeat purchase rate.</p>
      <p><strong>Operations</strong> — delivery time, defect rate, inventory turnover, productivity.</p>

      <h3>KPI structure</h3>
      <p>A useful KPI should have: metric + target + time period + owner + action threshold.</p>
      <p>Example: KPI: Conversion Rate. Current 2.8%. Target 3.5%. Period monthly. Owner Marketing Team. Action threshold: below 2.5%.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Define business goals</strong> — example: increase profitability.</li>
        <li><strong>Identify drivers</strong> — profit = revenue and costs.</li>
        <li><strong>Choose relevant KPIs</strong> — possible KPIs: revenue, gross margin, AOV, CAC, operating expenses.</li>
        <li><strong>Create a dashboard</strong> — example: revenue ₱500,000; gross profit ₱180,000; net profit ₱80,000; AOV ₱750; conversion 3.2%; retention 62%; cash balance ₱250,000.</li>
        <li><strong>Review regularly</strong> — the value of a KPI comes from using it to make decisions.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Creates measurable objectives</li>
        <li>Detects problems early</li>
        <li>Improves accountability</li>
        <li>Helps prioritize actions</li>
        <li>Makes progress visible</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Too many KPIs</li>
        <li>Vanity metrics</li>
        <li>Wrong targets</li>
        <li>Optimizing one KPI while damaging another</li>
      </ul>

      <h3>Important principle</h3>
      <p>A KPI should connect measurement to a meaningful business objective.</p>

      <hr />

      <h2>8. Cash-Flow Monitoring</h2>
      <h3>Definition</h3>
      <p>Cash-flow monitoring is the process of tracking money entering and leaving the business. Cash flow is different from accounting profit. A business can be profitable on paper and still experience a cash shortage.</p>

      <h3>Basic cash-flow equation</h3>
      <p><strong>Ending Cash = Beginning Cash + Cash Inflows − Cash Outflows</strong></p>
      <p>Cash inflows may include customer payments, investment, loans, deposits, and other cash receipts.</p>
      <p>Cash outflows may include supplier payments, salaries, rent, utilities, advertising, taxes, loan payments, and equipment purchases.</p>

      <h3>Example</h3>
      <p>Beginning cash ₱200,000; customer payments +₱300,000; supplier payments −₱180,000; payroll −₱100,000; rent/utilities −₱40,000; other expenses −₱30,000. Ending cash ₱150,000. The business generated revenue, but cash still decreased.</p>

      <h3>Why timing matters</h3>
      <p>Suppose a business sells ₱500,000 worth of products this month, but customers pay after 60 days. The business may need to pay suppliers today. This creates a cash-flow gap. The business needs enough liquidity to survive the gap.</p>

      <h3>How to implement</h3>
      <p>Track beginning cash, expected inflows, expected outflows, and expected ending cash. Create forecasts for 7 days, 30 days, 60 days, and 90 days.</p>

      <h3>Important metrics</h3>
      <p><strong>Operating cash flow</strong> — cash generated or consumed by normal business operations.</p>
      <p><strong>Cash runway</strong> — a rough estimate of how long available cash can support ongoing cash requirements. <strong>Cash Runway ≈ Available Cash ÷ Average Monthly Net Cash Burn</strong></p>
      <p>This formula is most useful when the business is consistently consuming cash.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Prevents cash surprises</li>
        <li>Improves payment planning</li>
        <li>Helps manage inventory</li>
        <li>Supports hiring decisions</li>
        <li>Helps prepare for slow periods</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Overestimating future sales</li>
        <li>Ignoring delayed payments</li>
        <li>Ignoring irregular expenses</li>
        <li>Treating revenue as immediately available cash</li>
      </ul>

      <h3>Important principle</h3>
      <p>Profit measures economic performance; cash flow measures liquidity. Both matter.</p>

      <hr />

      <h2>9. Break-Even Analysis</h2>
      <h3>Definition</h3>
      <p>Break-even analysis determines how many units a business needs to sell, or how much revenue it needs to generate, to cover its costs without making a profit or loss. At break-even: total revenue = total costs.</p>

      <h3>Key terms</h3>
      <p><strong>Fixed costs</strong> — costs that generally do not change directly with the number of units produced or sold within a relevant range. Examples: rent, salaried administrative costs, software subscriptions, insurance.</p>
      <p><strong>Variable costs</strong> — costs that change with production or sales volume. Examples: product materials, packaging, payment fees, per-order shipping costs.</p>
      <p><strong>Selling price</strong> — the amount charged per unit.</p>

      <h3>Break-even quantity</h3>
      <p><strong>Break-Even Units = Fixed Costs ÷ (Selling Price − Variable Cost per Unit)</strong></p>
      <p>Example: fixed costs ₱50,000; selling price ₱500; variable cost ₱300. Contribution per unit: ₱500 − ₱300 = ₱200. Break-even quantity: ₱50,000 ÷ ₱200 = 250 units. The business needs to sell 250 units to reach break-even under these assumptions.</p>

      <h3>Break-even revenue</h3>
      <p><strong>Break-Even Revenue = Break-Even Units × Selling Price</strong></p>
      <p>Using the example: 250 × ₱500 = ₱125,000.</p>

      <h3>Contribution margin</h3>
      <p><strong>Contribution Margin per Unit = Selling Price − Variable Cost</strong></p>
      <p><strong>Contribution Margin Ratio = (Selling Price − Variable Cost) ÷ Selling Price</strong></p>
      <p>This helps determine how much of each peso of sales contributes toward fixed costs and then profit.</p>

      <h3>How to implement</h3>
      <p>Use break-even analysis when considering new products, pricing changes, new equipment, store locations, hiring, advertising budgets, and production expansion.</p>
      <p>Ask: how much must we sell to cover the investment? Then ask: how much must we sell to achieve the desired profit?</p>

      <h3>Benefits</h3>
      <ul>
        <li>Helps evaluate pricing</li>
        <li>Shows minimum required sales</li>
        <li>Supports budgeting</li>
        <li>Helps assess business viability</li>
        <li>Clarifies cost structure</li>
      </ul>

      <h3>Risks</h3>
      <p>Break-even analysis is based on assumptions. It may become inaccurate if prices change, costs change, sales mix changes, fixed costs increase, discounts increase, or demand is lower than expected.</p>

      <h3>Important principle</h3>
      <p>Break-even is a planning tool, not a guarantee of sales.</p>

      <hr />

      <h2>10. Continuous Improvement</h2>
      <h3>Definition</h3>
      <p>Continuous improvement is the systematic practice of making ongoing improvements to products, services, processes, customer experiences, and business operations. Instead of waiting for a major crisis, the business continuously looks for ways to improve.</p>

      <h3>Core cycle</h3>
      <p>A common improvement cycle is: Plan → Do → Check → Act → Plan. This is commonly associated with the PDCA cycle.</p>

      <h3>Plan</h3>
      <p>Identify problem, root cause, desired result, proposed improvement, and measurement method.</p>
      <p>Example: customers are waiting too long for orders.</p>

      <h3>Do</h3>
      <p>Test the improvement on a limited scale.</p>
      <p>Example: change the warehouse picking process for one product category.</p>

      <h3>Check</h3>
      <p>Measure the results. Before: average processing time = 18 minutes. After: average processing time = 12 minutes. Also check whether another problem appeared.</p>

      <h3>Act</h3>
      <p>If the improvement works: standardize it → train employees → document process → monitor KPI. If it does not work: analyze → modify → test again.</p>

      <h3>Root-cause analysis</h3>
      <p>Continuous improvement should not only treat symptoms.</p>
      <p>Problem: orders are delayed → why? workers cannot finish picking → why? products are difficult to locate → why? inventory locations are poorly organized → root cause: poor warehouse organization.</p>
      <p>Fixing the root cause can be more effective than simply telling employees to "work faster."</p>

      <h3>Benefits</h3>
      <ul>
        <li>Improves efficiency</li>
        <li>Reduces waste</li>
        <li>Improves quality</li>
        <li>Reduces costs</li>
        <li>Improves customer experience</li>
        <li>Encourages innovation</li>
        <li>Prevents recurring problems</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Constant changes can confuse employees</li>
        <li>Improvements may be too small to matter</li>
        <li>Teams may optimize the wrong process</li>
        <li>Employees can experience change fatigue</li>
        <li>Poor measurement can hide whether an improvement actually worked</li>
      </ul>

      <h3>Important principle</h3>
      <p>Continuous improvement means making useful changes based on evidence, not changing things simply for the sake of change.</p>

      <hr />

      <h2>How the Ten Decision-Making Methods Connect</h2>
      <p>These concepts work best as one integrated decision system rather than as isolated techniques.</p>
      <pre>{`BUSINESS PROBLEM
                       │
                       ↓
              ┌─────────────────┐
              │ Data Collection │
              └────────┬────────┘
                       │
          ┌────────────┼─────────────┐
          ↓            ↓             ↓
       KPIs       Customer       Competitor
                   Feedback       Monitoring
          │            │             │
          └────────────┼─────────────┘
                       ↓
                  ANALYSIS
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
      Break-Even   Cash Flow    Scenarios
          │            │            │
          └────────────┼────────────┘
                       ↓
                   OPTIONS
                       │
                       ↓
             Rapid Experimentation
                       │
                       ↓
                Pilot Program
                       │
                       ↓
                  DECISION
                       │
                       ↓
                 IMPLEMENTATION
                       │
                       ↓
                  KPI Tracking
                       │
                       ↓
             Continuous Improvement
                       │
                       └──────────────→
                              LEARNING`}</pre>

      <hr />

      <h2>Decision-Making Framework</h2>
      <p>A practical business decision can follow this sequence:</p>
      <p><strong>1. Define the problem.</strong> Be specific. Bad: "Sales are bad." Better: "Monthly conversion has fallen from 4% to 2.8% over the past three months."</p>
      <p><strong>2. Gather evidence.</strong> Use business data, customer feedback, competitor information, financial information, and operational information.</p>
      <p><strong>3. Understand the financial impact.</strong> Ask: how much will this cost? How much could it generate? How will it affect cash flow? What is the break-even point?</p>
      <p><strong>4. Create possible scenarios.</strong> Consider best plausible case, expected case, downside case. Avoid treating these as predictions; they are planning assumptions.</p>
      <p><strong>5. Develop alternatives.</strong> For example: Option A reduce price; Option B improve product; Option C add a feature; Option D improve marketing; Option E stop the product.</p>
      <p><strong>6. Test when possible.</strong> Instead of immediately committing resources: small test → measure → learn → improve.</p>
      <p><strong>7. Run a pilot if broader implementation is needed.</strong> Test the complete process in a controlled environment.</p>
      <p><strong>8. Make the decision.</strong> Consider evidence + customer impact + financial impact + operational feasibility + risk + strategic alignment.</p>
      <p><strong>9. Monitor the outcome.</strong> Track relevant KPIs.</p>
      <p><strong>10. Improve continuously.</strong> The decision itself becomes new information. Decision → result → data → learning → better decision.</p>

      <hr />

      <h2>Quantitative vs Qualitative Decision-Making</h2>
      <p>Businesses should generally use both quantitative and qualitative information.</p>
      <p><strong>Quantitative:</strong> sales, revenue, profit, conversion, costs, retention, inventory.</p>
      <p><strong>Qualitative:</strong> customer comments, interviews, employee observations, reviews, complaints, customer motivations, user experience.</p>
      <p>Neither automatically replaces the other.</p>
      <p>For example: data says product sales are falling. Customer feedback says customers think the product is difficult to use. Combined insight: the sales problem may be related to usability.</p>

      <hr />

      <h2>Strategic vs Operational Decisions</h2>
      <p><strong>Strategic decisions</strong> — long-term decisions affecting the direction of the business. Examples: entering a new market, launching a new business model, acquiring another company, building a new platform, expanding internationally. These often require scenario planning, competitor monitoring, financial analysis, and customer research.</p>
      <p><strong>Operational decisions</strong> — short-term decisions affecting daily operations. Examples: changing warehouse procedures, adjusting staff schedules, reordering inventory, changing customer-support workflows. These often require KPI tracking, process analysis, customer feedback, and continuous improvement.</p>

      <hr />

      <h2>Decision Quality vs Decision Outcome</h2>
      <p>An important business principle is that a good decision can sometimes produce a bad outcome, while a bad decision can sometimes produce a good outcome by chance.</p>
      <p>Example: a company carefully analyzes demand before launching a product. It makes a reasonable decision based on the available information, but an unexpected event causes demand to collapse. The outcome is poor, but that does not necessarily mean the decision process was poor.</p>
      <p>Therefore, evaluate both decision quality and decision outcome. This prevents businesses from judging decisions purely by hindsight.</p>

      <hr />

      <h2>Common Decision-Making Mistakes</h2>
      <p><strong>1. Making decisions from emotion alone.</strong> "I like this idea" is not sufficient evidence.</p>
      <p><strong>2. Ignoring customer feedback.</strong> Internal assumptions can differ significantly from actual customer experience.</p>
      <p><strong>3. Ignoring cash flow.</strong> A profitable plan can still create a short-term cash crisis.</p>
      <p><strong>4. Tracking too many KPIs.</strong> More metrics do not automatically create better decisions.</p>
      <p><strong>5. Copying competitors.</strong> A competitor's strategy may work because of resources, customers, brand, or infrastructure that your business does not have.</p>
      <p><strong>6. Testing without a hypothesis.</strong> If you do not know what you are testing, it becomes difficult to interpret the result.</p>
      <p><strong>7. Expanding before validating.</strong> A business may spend heavily scaling an idea that has not yet demonstrated demand or operational feasibility.</p>
      <p><strong>8. Confusing correlation with causation.</strong> Two things happening together does not necessarily mean one caused the other.</p>
      <p><strong>9. Ignoring opportunity cost.</strong> Choosing one option means giving up the opportunity to use those resources elsewhere. For example: ₱100,000 invested in Project A cannot simultaneously be used for Project B.</p>
      <p><strong>10. Failing to revisit decisions.</strong> A decision that was correct six months ago may no longer be correct after circumstances change.</p>

      <hr />

      <h2>Decision-Making Dashboard</h2>
      <p>A business can combine the concepts into a single management dashboard.</p>
      <ul>
        <li><strong>Sales</strong> — revenue — measure sales performance</li>
        <li><strong>Profitability</strong> — gross margin — measure economic contribution</li>
        <li><strong>Cash</strong> — cash balance — measure liquidity</li>
        <li><strong>Customers</strong> — retention — measure customer stability</li>
        <li><strong>Acquisition</strong> — CAC — measure acquisition efficiency</li>
        <li><strong>Product</strong> — feature adoption — measure product usage</li>
        <li><strong>Operations</strong> — processing time — measure efficiency</li>
        <li><strong>Quality</strong> — defect rate — measure quality</li>
        <li><strong>Market</strong> — competitor changes — understand environment</li>
        <li><strong>Feedback</strong> — complaint categories — identify customer problems</li>
        <li><strong>Experiments</strong> — test results — validate ideas</li>
        <li><strong>Pilots</strong> — operational performance — assess scalability</li>
      </ul>

      <hr />

      <h2>Decision-Making System</h2>
      <p>The ten concepts can be organized into five major stages:</p>
      <p><strong>1. Observe.</strong> Data-driven decisions, customer feedback, competitor monitoring, KPI tracking.</p>
      <p><strong>2. Analyze.</strong> Cash-flow monitoring, break-even analysis, scenario planning.</p>
      <p><strong>3. Test.</strong> Rapid experimentation, pilot programs.</p>
      <p><strong>4. Implement.</strong> Business decision.</p>
      <p><strong>5. Improve.</strong> Continuous improvement.</p>
      <p>This creates a repeatable management system: observe → understand → analyze → test → decide → implement → measure → improve → observe again.</p>

      <hr />

      <h2>Key Formulas</h2>
      <p><strong>Revenue = Price × Quantity Sold</strong></p>
      <p><strong>Profit = Revenue − Total Costs</strong></p>
      <p><strong>Contribution Margin = Selling Price − Variable Cost</strong></p>
      <p><strong>Break-Even Units = Fixed Costs ÷ Contribution Margin per Unit</strong></p>
      <p><strong>Break-Even Revenue = Break-Even Units × Selling Price</strong></p>
      <p><strong>Conversion Rate = Conversions ÷ Visitors × 100</strong></p>
      <p><strong>Customer Retention Rate = (Customers at End − New Customers) ÷ Customers at Start × 100</strong></p>
      <p><strong>CAC = Acquisition Costs ÷ New Customers</strong></p>
      <p><strong>AOV = Revenue ÷ Number of Orders</strong></p>
      <p><strong>Ending Cash = Beginning Cash + Cash Inflows − Cash Outflows</strong></p>

      <hr />

      <h2>Decision-Making Principles</h2>
      <ol>
        <li>Define the problem before solving it.</li>
        <li>Use evidence instead of assumptions whenever evidence is available.</li>
        <li>Combine quantitative data with customer and operational insight.</li>
        <li>Distinguish revenue, profit, and cash flow.</li>
        <li>Use KPIs that connect directly to business objectives.</li>
        <li>Test uncertain ideas before making large commitments when practical.</li>
        <li>Use pilots when a complete system needs to be validated.</li>
        <li>Prepare for multiple plausible scenarios rather than relying on one forecast.</li>
        <li>Monitor competitors without blindly copying them.</li>
        <li>Measure the results of important decisions.</li>
        <li>Investigate root causes instead of repeatedly treating symptoms.</li>
        <li>Treat decisions as learning opportunities.</li>
        <li>Revisit decisions when new evidence appears.</li>
        <li>Consider opportunity cost and resource constraints.</li>
        <li>Build a culture where evidence, experimentation, and learning improve future decisions.</li>
      </ol>

      <hr />

      <h2>The Ultimate Decision-Making Loop</h2>
      <pre>{`┌───────────────┐
             │   OBSERVE     │
             │ Data / Market │
             │ Customers     │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │    ANALYZE    │
             │ KPIs / Cash   │
             │ Break-even    │
             │ Scenarios     │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │     TEST      │
             │ Experiments   │
             │ Pilots        │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │    DECIDE     │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │  IMPLEMENT    │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │    MEASURE    │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │   IMPROVE     │
             └───────┬───────┘
                     │
                     └────────→ OBSERVE AGAIN`}</pre>
      <p>Decision-making is therefore not a single event. It is a continuous business system that converts information into action, action into results, and results into better future decisions.</p>
    </LessonLayout>
  )
}
