import LessonLayout from '../components/LessonLayout'

export default function BusinessPlanning() {
  return (
    <LessonLayout
      number="11"
      title="Business Planning"
      summary="10 planning frameworks to turn an idea into a structured model of value, revenue, cost, risk, and execution."
    >
      <p>
        Business planning is the process of defining how a business will
        operate, create value, acquire customers, generate revenue, manage
        costs, handle risks, and pursue opportunities.
      </p>
      <p>A business plan connects ideas to execution.</p>
      <pre>{`BUSINESS IDEA
     ↓
CUSTOMER PROBLEM
     ↓
VALUE PROPOSITION
     ↓
BUSINESS MODEL
     ↓
REVENUE + COST STRUCTURE
     ↓
FINANCIAL FORECAST
     ↓
RISKS + OPPORTUNITIES
     ↓
ACTION PLAN
     ↓
MEASUREMENT
     ↓
ADJUSTMENT`}</pre>
      <p>A good business plan should answer:</p>
      <ul>
        <li>What problem are we solving?</li>
        <li>Who are we solving it for?</li>
        <li>What value are we providing?</li>
        <li>How will we reach customers?</li>
        <li>How will the business make money?</li>
        <li>What will it cost?</li>
        <li>How much capital is required?</li>
        <li>When can the business break even?</li>
        <li>What could go wrong?</li>
        <li>What opportunities could accelerate growth?</li>
        <li>What assumptions need to be tested?</li>
      </ul>

      <hr />

      <h2>1. Business Model Canvas</h2>
      <h3>Definition</h3>
      <p>The Business Model Canvas (BMC) is a strategic framework for describing how a business creates, delivers, and captures value.</p>
      <p>It consists of nine building blocks:</p>
      <ol>
        <li>Customer Segments</li>
        <li>Value Propositions</li>
        <li>Channels</li>
        <li>Customer Relationships</li>
        <li>Revenue Streams</li>
        <li>Key Resources</li>
        <li>Key Activities</li>
        <li>Key Partnerships</li>
        <li>Cost Structure</li>
      </ol>

      <h3>1. Customer Segments</h3>
      <p>Who does the business serve? Examples: students, small businesses, professionals, families, online shoppers, and content creators. A business may serve multiple segments.</p>

      <h3>2. Value Propositions</h3>
      <p>What value does the business provide? Examples: lower prices, convenience, faster service, better quality, specialized products, easier access, and customization.</p>

      <h3>3. Channels</h3>
      <p>How does the business reach customers? Examples: website, mobile app, social media, physical stores, distributors, affiliates, and email.</p>

      <h3>4. Customer Relationships</h3>
      <p>How does the business interact with customers? Examples: self-service, customer support, personalized recommendations, loyalty programs, account managers, and automated communication.</p>

      <h3>5. Revenue Streams</h3>
      <p>How does the business generate revenue? Examples: product sales, subscriptions, commissions, advertising, licensing, memberships, and service fees.</p>

      <h3>6. Key Resources</h3>
      <p>What resources are required? Examples: employees, technology, capital, equipment, intellectual property, inventory, and data.</p>

      <h3>7. Key Activities</h3>
      <p>What must the business do? For an online marketplace: platform development, product management, marketing, seller management, customer support, and payment processing.</p>

      <h3>8. Key Partnerships</h3>
      <p>Who helps the business operate? Examples: suppliers, payment providers, delivery companies, technology providers, distributors, and marketing partners.</p>

      <h3>9. Cost Structure</h3>
      <p>What does the business spend money on? Examples: salaries, hosting, marketing, inventory, rent, delivery, software, and payment fees.</p>

      <h3>Example: Xmarket Business Model Canvas</h3>
      <ul>
        <li><strong>Customer Segments</strong> — online shoppers</li>
        <li><strong>Value Proposition</strong> — convenient marketplace with attractive deals</li>
        <li><strong>Channels</strong> — website, mobile PWA, social media</li>
        <li><strong>Customer Relationships</strong> — support, recommendations, loyalty</li>
        <li><strong>Revenue Streams</strong> — product margin, seller fees, commissions</li>
        <li><strong>Key Resources</strong> — platform, employees, supplier network</li>
        <li><strong>Key Activities</strong> — platform operation, marketing, fulfillment</li>
        <li><strong>Key Partnerships</strong> — sellers, suppliers, payment and delivery providers</li>
        <li><strong>Cost Structure</strong> — hosting, marketing, staff, payment, operations</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Gives a one-page business overview</li>
        <li>Makes relationships between business components visible</li>
        <li>Helps identify missing elements</li>
        <li>Useful for brainstorming and strategy</li>
        <li>Easy to update</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Can oversimplify complex businesses</li>
        <li>Does not automatically validate assumptions</li>
        <li>Can become a static document</li>
        <li>May hide important financial details</li>
      </ul>

      <h3>Important principle</h3>
      <p>The Business Model Canvas describes the business model; it does not prove that the model will work.</p>

      <hr />

      <h2>2. Lean Canvas</h2>
      <h3>Definition</h3>
      <p>The Lean Canvas is a one-page business planning framework designed particularly for startups and businesses operating under high uncertainty. It focuses heavily on problems, customers, solutions, competitive advantage, key metrics, revenue, and costs.</p>
      <p>The nine areas are commonly:</p>
      <ol>
        <li>Problem</li>
        <li>Customer Segments</li>
        <li>Unique Value Proposition</li>
        <li>Solution</li>
        <li>Channels</li>
        <li>Revenue Streams</li>
        <li>Cost Structure</li>
        <li>Key Metrics</li>
        <li>Unfair Advantage</li>
      </ol>

      <h3>Business Model Canvas vs Lean Canvas</h3>
      <p><strong>Business Model Canvas:</strong> broad business model; focuses on partnerships, key activities, key resources, and customer relationships; useful for established and new models.</p>
      <p><strong>Lean Canvas:</strong> startup/problem focus; focuses on problem, solution, key metrics, and unfair advantage; particularly useful under uncertainty.</p>

      <h3>Example: marketplace startup</h3>
      <p><strong>Problem:</strong> customers have difficulty comparing products, face uncertain seller reliability, and encounter inconsistent shopping experiences.</p>
      <p><strong>Customer segments:</strong> budget-conscious online shoppers and small online sellers.</p>
      <p><strong>Unique value proposition:</strong> make finding and buying good-value products simpler and more trustworthy.</p>
      <p><strong>Solution:</strong> seller ratings + product comparison + clear pricing + easy checkout.</p>
      <p><strong>Channels:</strong> website, social media, and referral programs.</p>
      <p><strong>Revenue:</strong> commission, seller fees, and advertising.</p>
      <p><strong>Costs:</strong> hosting, marketing, staff, and payment processing.</p>
      <p><strong>Key metrics:</strong> visitors, conversion rate, orders, AOV, repeat purchases, and revenue.</p>
      <p><strong>Unfair advantage:</strong> a difficult-to-copy advantage such as exclusive supplier relationships, proprietary technology, strong network effects, unique data, or specialized expertise.</p>

      <h3>How to use Lean Canvas</h3>
      <p>The important feature is that assumptions can be changed quickly. Assumption → test → result → learning → updated canvas. This makes Lean Canvas particularly useful during early-stage business development.</p>

      <hr />

      <h2>3. Value Proposition Canvas</h2>
      <h3>Definition</h3>
      <p>The Value Proposition Canvas (VPC) helps businesses understand the relationship between customer needs and the value offered by a product or service.</p>
      <p>It has two major sides:</p>
      <p><strong>Customer Profile:</strong> customer jobs, pains, and gains.</p>
      <p><strong>Value Map:</strong> products and services, pain relievers, and gain creators.</p>
      <p>The objective is to achieve fit between the two.</p>

      <h3>Customer profile</h3>
      <p><strong>Customer jobs</strong> — what is the customer trying to accomplish? Example: find and purchase products quickly.</p>
      <p><strong>Pains</strong> — what makes the job difficult? Examples: high prices, too many choices, unclear product information, and shipping uncertainty.</p>
      <p><strong>Gains</strong> — what outcomes would the customer like? Examples: save money, save time, feel confident, and receive products quickly.</p>

      <h3>Value map</h3>
      <p><strong>Products & services</strong> — what does the business provide? Marketplace + search + seller ratings + delivery.</p>
      <p><strong>Pain relievers</strong> — how does the offering reduce customer problems? Seller ratings reduce uncertainty; clear shipping costs reduce unexpected fees; search filters reduce search effort.</p>
      <p><strong>Gain creators</strong> — how does the offering create desired outcomes? Discounts save money; fast checkout saves time; recommendations make discovery easier.</p>

      <h3>Example</h3>
      <p>Customer job: find good products efficiently → pain: too many unreliable choices → gain: confident purchase → value proposition: verified sellers + clear information + easy comparison.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Improves customer understanding</li>
        <li>Helps design products around actual needs</li>
        <li>Clarifies marketing messages</li>
        <li>Identifies mismatches between products and customers</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Based on assumptions instead of research</li>
        <li>Customer needs may differ between segments</li>
        <li>Businesses may focus on features rather than outcomes</li>
      </ul>

      <h3>Important principle</h3>
      <p>A feature becomes valuable when it helps solve a customer problem or create a desired outcome.</p>

      <hr />

      <h2>4. Financial Forecasting</h2>
      <h3>Definition</h3>
      <p>Financial forecasting is the process of estimating future financial performance using assumptions about sales, prices, costs, customers, investments, and operating conditions.</p>
      <p>Forecasts commonly include revenue, expenses, profit, cash flow, assets, liabilities, and capital requirements.</p>

      <h3>Basic forecast structure</h3>
      <p>Assumptions → sales forecast → revenue forecast → cost forecast → profit forecast → cash-flow forecast → capital requirements.</p>

      <h3>Revenue forecast</h3>
      <p>Suppose expected orders = 1,000 and average order value = ₱600. Then revenue = 1,000 × ₱600 = ₱600,000.</p>

      <h3>Cost forecast</h3>
      <p>Separate costs into fixed and variable. Fixed: rent, salaries, software, insurance. Variable: product cost, packaging, payment fees, per-order shipping.</p>

      <h3>Profit forecast</h3>
      <p><strong>Profit = Revenue − Total Costs</strong></p>
      <p>Example: revenue ₱600,000, variable cost ₱300,000, fixed costs ₱180,000, profit ₱120,000.</p>

      <h3>Cash-flow forecast</h3>
      <p>Profit and cash are not the same.</p>
      <p><strong>Beginning Cash + Expected Cash Inflows − Expected Cash Outflows = Ending Cash</strong></p>
      <p>A business may record a sale today but receive payment later. Therefore, the cash-flow forecast should account for payment timing.</p>

      <h3>How to build a forecast</h3>
      <ol>
        <li><strong>Establish assumptions.</strong> Examples: customers, average order value, conversion rate, price, cost per unit, employee count, marketing budget.</li>
        <li><strong>Create a sales forecast.</strong> Customers × purchase frequency × average order value.</li>
        <li><strong>Forecast costs.</strong></li>
        <li><strong>Forecast profit.</strong></li>
        <li><strong>Forecast cash.</strong></li>
        <li><strong>Compare actual vs forecast.</strong> Forecast → actual → variance → updated assumptions.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Supports budgeting</li>
        <li>Helps determine funding needs</li>
        <li>Identifies future cash shortages</li>
        <li>Supports hiring and expansion decisions</li>
        <li>Provides financial targets</li>
      </ul>

      <h3>Risks</h3>
      <p>Forecasts depend on assumptions. Common problems include overestimating sales, underestimating costs, ignoring seasonality, ignoring payment delays, and assuming growth will continue indefinitely.</p>

      <h3>Important principle</h3>
      <p>A forecast is a model of possible future performance, not a guarantee.</p>

      <hr />

      <h2>5. Break-Even Analysis</h2>
      <h3>Definition</h3>
      <p>Break-even analysis determines the sales volume or revenue needed for total revenue to equal total costs. At break-even: profit = ₱0.</p>

      <h3>Formula</h3>
      <p><strong>Break-Even Units = Fixed Costs ÷ (Selling Price − Variable Cost per Unit)</strong></p>
      <p>Suppose fixed costs = ₱60,000, selling price = ₱500, variable cost = ₱300. Contribution per unit: ₱500 − ₱300 = ₱200. Break-even: ₱60,000 ÷ ₱200 = 300 units. The business must sell 300 units to cover its costs under these assumptions.</p>

      <h3>Target profit</h3>
      <p>The formula can also be adapted to calculate the sales volume needed for a target profit:</p>
      <p><strong>Required Units = (Fixed Costs + Target Profit) ÷ Contribution Margin per Unit</strong></p>
      <p>Example: fixed costs ₱60,000, target profit ₱40,000, contribution/unit ₱200. Required units = ₱100,000 ÷ ₱200 = 500 units.</p>

      <h3>Uses</h3>
      <p>Break-even analysis helps evaluate pricing, new products, new stores, equipment investments, hiring, marketing campaigns, and production decisions.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Shows minimum required sales</li>
        <li>Clarifies cost structure</li>
        <li>Helps evaluate pricing</li>
        <li>Supports investment decisions</li>
      </ul>

      <h3>Risks</h3>
      <p>The calculation depends on assumptions about price, variable costs, fixed costs, sales mix, and capacity.</p>

      <hr />

      <h2>6. Scenario Planning</h2>
      <h3>Definition</h3>
      <p>Scenario planning prepares the business for multiple plausible future conditions. It is especially important when future conditions are uncertain.</p>
      <p>Instead of building only "our sales will grow 30%," build several scenarios: downside, base, and upside.</p>

      <h3>Example</h3>
      <p>Suppose a business forecasts base 10,000 orders, downside 7,000 orders, upside 14,000 orders. The business can then estimate the financial effect of each.</p>
      <ul>
        <li><strong>Downside</strong> — 7,000 orders — main concern: cash pressure.</li>
        <li><strong>Base</strong> — 10,000 orders — normal operations.</li>
        <li><strong>Upside</strong> — 14,000 orders — main concern: capacity pressure.</li>
      </ul>

      <h3>Scenario variables</h3>
      <p>Possible variables include customer growth, price, conversion rate, costs, supplier availability, employee capacity, marketing effectiveness, and economic conditions.</p>

      <h3>How to implement</h3>
      <ol>
        <li>Identify major uncertainties.</li>
        <li>Create plausible scenarios.</li>
        <li>Model financial effects.</li>
        <li>Identify risks and opportunities.</li>
        <li>Create response plans.</li>
      </ol>
      <p>Example: if demand falls → reduce discretionary spending, protect cash, adjust inventory. If demand rises → increase inventory, expand support capacity, increase fulfillment capacity.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Improves preparedness</li>
        <li>Identifies vulnerabilities</li>
        <li>Supports contingency planning</li>
        <li>Helps management respond quickly</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Scenarios can be poorly constructed</li>
        <li>Too many scenarios create complexity</li>
        <li>Businesses may mistake scenarios for predictions</li>
      </ul>

      <h3>Important principle</h3>
      <p>Scenario planning prepares for uncertainty; it does not predict the future with certainty.</p>

      <hr />

      <h2>7. Revenue Modeling</h2>
      <h3>Definition</h3>
      <p>Revenue modeling is the process of determining how a business generates revenue and estimating how much revenue each source can produce. A business may have one or multiple revenue streams.</p>

      <h3>Common revenue models</h3>
      <p><strong>Product sales:</strong> revenue = units sold × price.</p>
      <p><strong>Subscription:</strong> revenue = number of subscribers × subscription price.</p>
      <p><strong>Commission:</strong> revenue = transaction value × commission rate.</p>
      <p><strong>Advertising:</strong> revenue may depend on impressions, clicks, campaigns, or advertising contracts.</p>
      <p><strong>Licensing:</strong> revenue can come from licensing software, technology, intellectual property, or content.</p>

      <h3>Example: marketplace</h3>
      <p>Suppose GMV = ₱1,000,000 and commission = 10%. Then commission revenue = ₱1,000,000 × 10% = ₱100,000.</p>
      <p>But GMV is not necessarily the same as marketplace revenue. Customer spending → GMV → marketplace takes commission → marketplace revenue.</p>

      <h3>Revenue drivers</h3>
      <p>Instead of simply forecasting revenue, identify the variables driving it.</p>
      <p><strong>For an e-commerce business:</strong> visitors → conversion rate → orders → average order value → gross merchandise value → revenue.</p>
      <p><strong>For a subscription business:</strong> leads → new customers → subscribers → retention → paid subscribers → monthly recurring revenue.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Clarifies how money is generated</li>
        <li>Makes revenue forecasts easier</li>
        <li>Identifies growth drivers</li>
        <li>Helps compare revenue streams</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Overestimating demand</li>
        <li>Ignoring churn</li>
        <li>Ignoring discounts</li>
        <li>Confusing transaction volume with revenue</li>
        <li>Assuming every revenue stream has the same profitability</li>
      </ul>

      <hr />

      <h2>8. Cost Modeling</h2>
      <h3>Definition</h3>
      <p>Cost modeling is the process of identifying, classifying, and estimating the costs required to operate a business. A business should understand not only how much it spends, but what drives those costs.</p>

      <h3>Main cost categories</h3>
      <p><strong>Fixed costs</strong> — generally remain relatively stable within a relevant operating range. Examples: rent, salaries, software subscriptions, insurance.</p>
      <p><strong>Variable costs</strong> — change with business activity. Examples: product materials, packaging, transaction fees, shipping per order.</p>
      <p><strong>Direct costs</strong> — can be directly associated with a product or service. Example: materials used to manufacture one product.</p>
      <p><strong>Indirect costs</strong> — support the business but cannot always be directly assigned to one product. Examples: administrative expenses, office expenses, general software.</p>

      <h3>Example</h3>
      <p>An online store has monthly fixed costs = ₱100,000. Variable cost/order: product ₱300, packaging ₱20, payment ₱15 — total variable/order = ₱335. If the business receives 1,000 orders: variable costs = 1,000 × ₱335 = ₱335,000. Total operating cost before other applicable expenses: ₱100,000 + ₱335,000 = ₱435,000.</p>

      <h3>Cost drivers</h3>
      <p>A cost driver is a factor that causes a cost to increase or decrease. Examples: orders → packaging costs; employees → payroll; website traffic → infrastructure costs; units produced → material costs; delivery distance → delivery costs.</p>
      <p>Understanding cost drivers helps businesses forecast more accurately.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Improves budgeting</li>
        <li>Supports pricing</li>
        <li>Identifies inefficient spending</li>
        <li>Helps calculate profitability</li>
        <li>Improves financial forecasting</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Missing hidden costs</li>
        <li>Underestimating variable costs</li>
        <li>Treating variable costs as fixed</li>
        <li>Ignoring scaling effects</li>
        <li>Focusing only on reducing costs instead of improving value</li>
      </ul>

      <h3>Important principle</h3>
      <p>The objective is not simply to minimize costs; it is to manage costs relative to the value and revenue they produce.</p>

      <hr />

      <h2>9. Risk Assessment</h2>
      <h3>Definition</h3>
      <p>Risk assessment is the process of identifying potential threats, estimating their likelihood and impact, and determining how the business should respond.</p>
      <p>A simple prioritization approach is: <strong>Risk Exposure ≈ Probability × Impact</strong>. This is a planning heuristic rather than a universal financial valuation formula.</p>

      <h3>Common business risks</h3>
      <p><strong>Financial risk</strong> — cash shortage, excessive debt, unexpected expenses.</p>
      <p><strong>Operational risk</strong> — system failure, employee shortage, process failure.</p>
      <p><strong>Market risk</strong> — demand decline, new competitors, changing customer preferences.</p>
      <p><strong>Legal risk</strong> — regulatory violations, contract disputes, intellectual-property problems.</p>
      <p><strong>Cybersecurity risk</strong> — data breach, account compromise, malware, service disruption.</p>
      <p><strong>Supply-chain risk</strong> — supplier failure, shipping delays, material shortages.</p>
      <p><strong>Reputation risk</strong> — negative customer experiences, poor service, public complaints.</p>

      <h3>Risk response strategies</h3>
      <p><strong>Avoid</strong> — do not engage in the activity creating unacceptable exposure.</p>
      <p><strong>Reduce</strong> — lower the probability or impact.</p>
      <p><strong>Transfer</strong> — shift some financial or operational exposure to another party. Examples: insurance, contracts, outsourcing.</p>
      <p><strong>Accept</strong> — recognize the risk and prepare to absorb it when the cost of further mitigation is disproportionate to the expected benefit.</p>

      <h3>Example</h3>
      <p>Risk: website outage. Possible mitigation: backup hosting + monitoring + automated backups + disaster recovery plan.</p>

      <h3>Risk register</h3>
      <p>A business can maintain a table tracking each risk with probability, impact, response, and owner.</p>
      <ul>
        <li>Supplier failure — medium probability, high impact, backup suppliers — Operations.</li>
        <li>Cyberattack — medium probability, high impact, security controls — IT.</li>
        <li>Cash shortage — medium probability, high impact, cash reserve — Finance.</li>
        <li>Demand decline — medium probability, medium impact, scenario planning — Management.</li>
      </ul>

      <hr />

      <h2>10. Opportunity Analysis</h2>
      <h3>Definition</h3>
      <p>Opportunity analysis is the systematic evaluation of potential business opportunities to determine their attractiveness, feasibility, risks, resources required, and strategic fit.</p>
      <p>An opportunity could be a new customer segment, new product, new market, new technology, new distribution channel, partnership, new revenue stream, or an underserved customer need.</p>

      <h3>Opportunity analysis framework</h3>
      <p>Opportunity → customer need → market size → competition → value proposition → revenue potential → cost → risk → capability → strategic fit → decision.</p>

      <h3>Key questions</h3>
      <p><strong>Customer:</strong> does a real customer problem exist?</p>
      <p><strong>Market:</strong> how large and accessible is the market?</p>
      <p><strong>Competition:</strong> what alternatives already exist?</p>
      <p><strong>Revenue:</strong> how can the opportunity generate money?</p>
      <p><strong>Cost:</strong> what resources are required?</p>
      <p><strong>Capability:</strong> can the business actually execute it?</p>
      <p><strong>Risk:</strong> what could prevent success?</p>
      <p><strong>Strategic fit:</strong> does the opportunity support the overall business direction?</p>

      <h3>Example</h3>
      <p>Suppose Xmarket identifies an opportunity to create a specialized marketplace for a particular product category. The business evaluates customer demand → number of potential buyers → existing competitors → supplier availability → expected AOV → expected margin → marketing cost → operational requirements → risk. Only after analyzing these factors should the opportunity be considered for testing.</p>

      <h3>Opportunity vs idea</h3>
      <p>These concepts are different.</p>
      <p><strong>Idea:</strong> "We should create a mobile marketplace."</p>
      <p><strong>Opportunity:</strong> evidence suggests customers have a problem, existing solutions have limitations, customers are willing to pay, the market is accessible, the business has relevant capabilities, and the economics can potentially work.</p>
      <p>Therefore: idea ≠ opportunity. An idea becomes a stronger opportunity hypothesis when it is supported by evidence and a plausible business model.</p>

      <hr />

      <h2>Business Planning System</h2>
      <p>The ten concepts connect together into a complete planning framework.</p>
      <pre>{`BUSINESS PLANNING
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
          CUSTOMER                  BUSINESS
              │                         │
              ↓                         ↓
 Value Proposition Canvas       Business Model Canvas
              │                         │
              ↓                         ↓
        Customer Value            Business Structure
              │                         │
              └────────────┬────────────┘
                           ↓
                     Lean Canvas
                           ↓
                  Business Hypothesis
                           ↓
            ┌──────────────┼──────────────┐
            ↓              ↓              ↓
      Revenue Model    Cost Model    Risk Assessment
            │              │              │
            └──────────────┼──────────────┘
                           ↓
                  Financial Forecast
                           ↓
                   Break-Even Analysis
                           ↓
                  Scenario Planning
                           ↓
                 Opportunity Analysis
                           ↓
                    BUSINESS PLAN
                           ↓
                       EXECUTION
                           ↓
                     MEASUREMENT
                           ↓
                      REVISION`}</pre>

      <hr />

      <h2>How the Three Canvas Frameworks Differ</h2>
      <p><strong>Business Model Canvas:</strong> how does the business create, deliver, and capture value? Best for mapping the overall business model.</p>
      <p><strong>Lean Canvas:</strong> what problem are we solving and how will we validate the business? Best for startups and uncertain ideas.</p>
      <p><strong>Value Proposition Canvas:</strong> why will customers value this offering? Best for customer-product fit.</p>
      <p>They can be used together: Value Proposition Canvas → understand customer value; Lean Canvas → test the business hypothesis; Business Model Canvas → map the complete business system.</p>

      <hr />

      <h2>Financial Planning Structure</h2>
      <p>A strong financial plan connects revenue and costs.</p>
      <p>Customers → sales volume → revenue → − variable costs → contribution → − fixed costs → operating profit → − other applicable costs → net result.</p>
      <p>At the same time: sales timing + collection timing + payment timing + capital spending → cash flow.</p>
      <p>This distinction is critical because a business can show accounting profit while still experiencing a shortage of cash.</p>

      <hr />

      <h2>Business Planning Dashboard</h2>
      <p>A business can monitor:</p>
      <ul>
        <li><strong>Customers</strong> — number of customers</li>
        <li><strong>Acquisition</strong> — CAC</li>
        <li><strong>Sales</strong> — orders</li>
        <li><strong>Revenue</strong> — total revenue</li>
        <li><strong>AOV</strong> — revenue ÷ orders</li>
        <li><strong>Profitability</strong> — gross margin</li>
        <li><strong>Costs</strong> — fixed + variable costs</li>
        <li><strong>Cash</strong> — ending cash</li>
        <li><strong>Break-even</strong> — required sales</li>
        <li><strong>Retention</strong> — repeat purchase rate</li>
        <li><strong>Risk</strong> — high-priority risks</li>
        <li><strong>Opportunities</strong> — potential opportunities</li>
        <li><strong>Forecast</strong> — actual vs forecast</li>
      </ul>

      <hr />

      <h2>Actual vs Forecast</h2>
      <p>Business planning should not end when the plan is written. Compare what was expected with what actually happened.</p>
      <p>Forecast → actual result → variance → why? → update assumptions → new forecast.</p>
      <p>For example: forecast revenue ₱500,000; actual revenue ₱430,000; variance −₱70,000. The next question is: why? Possible causes: fewer customers, lower conversion, lower AOV, higher cancellations, seasonal demand, or pricing changes. This turns financial planning into a learning system.</p>

      <hr />

      <h2>Common Business Planning Mistakes</h2>
      <p><strong>1. Building a plan without validating the customer problem.</strong> A beautifully designed business model can still fail if customers do not care about the problem.</p>
      <p><strong>2. Overestimating revenue.</strong> Businesses often assume more customers + higher prices + high retention = rapid growth, without validating the assumptions.</p>
      <p><strong>3. Underestimating costs.</strong> Hidden costs can include taxes, payment fees, returns, customer support, maintenance, software, compliance, marketing, and delivery.</p>
      <p><strong>4. Confusing revenue with profit.</strong> A business can generate ₱1 million in sales and still lose money.</p>
      <p><strong>5. Confusing profit with cash.</strong> Payment timing matters.</p>
      <p><strong>6. Ignoring break-even.</strong> A business should understand how much it must sell before it covers its costs.</p>
      <p><strong>7. Creating only one forecast.</strong> A single forecast creates false certainty. Use multiple plausible scenarios.</p>
      <p><strong>8. Treating risk assessment as a one-time exercise.</strong> Risks change as the business grows.</p>
      <p><strong>9. Confusing an idea with an opportunity.</strong> A promising idea still needs customer need + market + economics + capability + execution.</p>
      <p><strong>10. Making the plan too rigid.</strong> A business plan should provide direction while allowing evidence-based changes.</p>

      <hr />

      <h2>Business Planning Lifecycle</h2>
      <ol>
        <li>Research.</li>
        <li>Identify customer problem.</li>
        <li>Define value proposition.</li>
        <li>Design business model.</li>
        <li>Identify revenue streams.</li>
        <li>Model costs.</li>
        <li>Build financial forecast.</li>
        <li>Calculate break-even.</li>
        <li>Assess risks.</li>
        <li>Analyze opportunities.</li>
        <li>Build scenarios.</li>
        <li>Test assumptions.</li>
        <li>Execute.</li>
        <li>Measure.</li>
        <li>Update the plan.</li>
        <li>Repeat.</li>
      </ol>

      <hr />

      <h2>Key Business Planning Formulas</h2>
      <p><strong>Revenue = Units Sold × Selling Price</strong></p>
      <p><strong>E-commerce Revenue = Number of Orders × Average Order Value</strong></p>
      <p><strong>Profit = Revenue − Total Costs</strong></p>
      <p><strong>Contribution Margin per Unit = Selling Price − Variable Cost per Unit</strong></p>
      <p><strong>Break-Even Units = Fixed Costs ÷ Contribution Margin per Unit</strong></p>
      <p><strong>Gross Margin = Gross Profit ÷ Revenue × 100</strong></p>
      <p><strong>AOV = Revenue ÷ Number of Orders</strong></p>
      <p><strong>Revenue Growth = (Current Revenue − Previous Revenue) ÷ Previous Revenue × 100</strong></p>
      <p><strong>Ending Cash = Beginning Cash + Cash Inflows − Cash Outflows</strong></p>
      <p><strong>Risk Exposure ≈ Probability × Impact</strong></p>
      <p>Risk exposure is a practical prioritization approach, not necessarily a complete financial valuation of risk.</p>

      <hr />

      <h2>Business Planning Principles</h2>
      <ol>
        <li>Start with the customer problem, not the product.</li>
        <li>Define the value proposition clearly.</li>
        <li>Map how the entire business creates and captures value.</li>
        <li>Separate business-model assumptions from validated facts.</li>
        <li>Model revenue based on actual drivers.</li>
        <li>Identify both fixed and variable costs.</li>
        <li>Understand the difference between revenue, profit, and cash flow.</li>
        <li>Calculate break-even before making major commitments.</li>
        <li>Use multiple scenarios when uncertainty is significant.</li>
        <li>Assess risks before they become emergencies.</li>
        <li>Evaluate opportunities based on evidence, economics, capabilities, and strategic fit.</li>
        <li>Track actual performance against the forecast.</li>
        <li>Update assumptions when new evidence appears.</li>
        <li>Use planning to guide action rather than create paperwork.</li>
        <li>Treat the business plan as a living system that evolves with the business.</li>
      </ol>

      <hr />

      <h2>The Complete Planning Logic</h2>
      <pre>{`CUSTOMER
   ↓
PROBLEM
   ↓
VALUE
   ↓
BUSINESS MODEL
   ↓
REVENUE
   ↓
COSTS
   ↓
PROFIT
   ↓
CASH FLOW
   ↓
BREAK-EVEN
   ↓
RISKS
   ↓
OPPORTUNITIES
   ↓
SCENARIOS
   ↓
EXECUTION
   ↓
MEASUREMENT
   ↓
LEARNING
   ↓
UPDATED PLAN`}</pre>
      <p>Business planning transforms a business idea into a structured model of how the company will create value, operate, generate revenue, manage costs, survive risks, pursue opportunities, and adapt as new information becomes available.</p>
    </LessonLayout>
  )
}
