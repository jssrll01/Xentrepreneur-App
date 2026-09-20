import LessonLayout from '../components/LessonLayout'

export default function SubscriptionPricing() {
  return (
    <LessonLayout
      number="34"
      title="Subscription Pricing"
      summary="11 subscription models to generate recurring revenue — from monthly plans to usage-based and lifetime options."
    >
      <h2>Subscription Pricing</h2>
      <h3>Definition</h3>
      <p>
        Subscription pricing is a pricing model where customers pay repeatedly
        to maintain access to a product, service, platform, content, or ongoing
        benefit.
      </p>
      <p>Instead of "pay once → own/use product," the model becomes: subscribe → receive continuing value → renew → continue receiving value.</p>
      <p>Common billing frequencies include monthly, quarterly, annual, usage-based, per-seat, feature-based, storage-based, and consumption-based.</p>
      <p>Basic subscription model: customer → select plan → pay → receive ongoing value → use product/service → renew → continue using (cycle).</p>
      <p>Core subscription equation for a simple subscription: <strong>MRR = Number of Active Subscribers × Average Monthly Revenue Per Subscriber</strong>. Example: 500 subscribers × ₱500/month = ₱250,000 monthly recurring revenue.</p>

      <hr />

      <h2>1. Monthly Subscription</h2>
      <h3>Definition</h3>
      <p>A monthly subscription charges customers every month for continued access. Example: "Xmarket Pro ₱499/month."</p>
      <p>How it works: customer subscribes → ₱499 charged → access for billing period → month ends → renewal → ₱499 charged again.</p>

      <h3>Benefits</h3>
      <p>Low upfront commitment, easy for customers to start, predictable recurring revenue, and easier customer acquisition than a large annual payment.</p>

      <h3>Risks</h3>
      <p>Higher churn potential, more billing transactions, customers can cancel relatively easily, and revenue forecasting can be less stable than with long-term commitments.</p>

      <h3>Important metrics</h3>
      <p><strong>Churn = Customers Lost During Month ÷ Customers at Beginning of Month × 100</strong></p>
      <p><strong>MRR = Subscribers × Monthly Price</strong></p>

      <hr />

      <h2>2. Quarterly Subscription</h2>
      <h3>Definition</h3>
      <p>A quarterly subscription bills customers every three months. Example: "₱1,350 every 3 months." Equivalent monthly price: ₱1,350 ÷ 3 = ₱450/month.</p>
      <p>Compared with monthly pricing: monthly ₱500/month; quarterly ₱1,350/3 months (₱450/month). Customer saves ₱500 − ₱450 = ₱50/month. Over three months: ₱150.</p>

      <h3>Benefits</h3>
      <p>More commitment than monthly, less billing frequency, can reduce short-term churn, and gives the business cash earlier.</p>

      <h3>Risk</h3>
      <p>Customers have to pay a larger amount upfront.</p>

      <hr />

      <h2>3. Annual Subscription</h2>
      <h3>Definition</h3>
      <p>An annual subscription charges customers once per year for access during the annual subscription period. Example: "₱5,400/year." Monthly equivalent: ₱5,400 ÷ 12 = ₱450/month.</p>
      <p>If monthly pricing is ₱500: ₱500 × 12 = ₱6,000. Annual savings: ₱6,000 − ₱5,400 = ₱600.</p>

      <h3>Benefits for the customer</h3>
      <p>Lower effective monthly price, fewer payment events, and longer uninterrupted access.</p>

      <h3>Benefits for the business</h3>
      <p>More upfront cash, longer customer commitment, potentially lower churn, and more predictable contracted revenue.</p>

      <h3>Risk</h3>
      <p>A large upfront charge can create a higher barrier to initial purchase.</p>

      <hr />

      <h2>4. Lifetime Purchase</h2>
      <h3>Definition</h3>
      <p>A lifetime purchase is a one-time payment that gives the customer access for the defined lifetime of the product, service, or offering. Example: "Lifetime access ₱9,999 one-time payment." There are no recurring subscription payments under the stated offer.</p>

      <h3>Important distinction</h3>
      <p>"Lifetime" needs to be clearly defined. It could mean lifetime of the customer, lifetime of the product, lifetime of the company, lifetime of a particular version, or lifetime of a specific service. The business should clearly state what the customer is purchasing.</p>

      <h3>Benefits</h3>
      <p>Large upfront revenue, no recurring billing for the customer, attractive to customers who dislike subscriptions, and can be useful for digital products.</p>

      <h3>Risks</h3>
      <p>The business must estimate whether the one-time payment can support the customer's long-term cost. For example: lifetime customer pays ₱9,999 one-time, then requires years of support, years of hosting, infrastructure costs, and potentially increasing cost. If the product has continuing costs, lifetime pricing requires careful financial planning.</p>

      <hr />

      <h2>5. Monthly + Annual Options</h2>
      <h3>Definition</h3>
      <p>A monthly + annual pricing structure allows customers to choose between short-term monthly billing and longer-term annual billing.</p>
      <p>Example: Pro monthly ₱500/month, annual ₱5,400/year. Monthly annualized cost: ₱500 × 12 = ₱6,000. Annual plan: ₱5,400. Annual savings: ₱6,000 − ₱5,400 = ₱600.</p>
      <p>Pricing display: "PRO. ₱500/month or ₱5,400/year. Save ₱600/year." The business should make it clear that the annual option is charged as a yearly payment.</p>

      <h3>Why offer both?</h3>
      <p>Monthly pricing provides flexibility. Annual pricing provides commitment + upfront cash. This creates a useful choice architecture: subscription splits into monthly (low commitment, more flexibility) and annual (higher commitment, lower effective price), both leading to the customer.</p>

      <hr />

      <h2>6. Usage-Based Subscription</h2>
      <h3>Definition</h3>
      <p>A usage-based subscription combines a recurring subscription with pricing that depends on how much the customer uses the service.</p>
      <p>Example: base subscription ₱500/month, includes 1,000 API requests, additional usage ₱0.20/request.</p>
      <p><strong>Monthly Bill = Base Fee + (Usage − Included Usage) × Usage Rate</strong></p>
      <p>Example: base ₱500, included 1,000 requests, actual 1,500, extra 500, extra rate ₱0.20. Monthly bill = ₱500 + (500 × ₱0.20) = ₱600.</p>

      <h3>Best for</h3>
      <p>APIs, cloud services, AI platforms, data processing, communication platforms, and infrastructure services.</p>

      <h3>Benefits</h3>
      <p>The customer's bill can scale with actual usage.</p>

      <h3>Risks</h3>
      <p>Customers may experience unpredictable bills. Businesses should provide usage dashboards, alerts, spending limits, usage forecasts, and clear unit pricing.</p>

      <hr />

      <h2>7. Seat-Based Subscription</h2>
      <h3>Definition</h3>
      <p>Seat-based pricing charges according to the number of users, accounts, or seats using a product. Example: "₱400 per user/month." A company has 10 users: 10 × ₱400 = ₱4,000/month.</p>
      <p>Example table: 1 seat ₱400/month; 5 seats ₱2,000; 10 seats ₱4,000; 25 seats ₱10,000.</p>

      <h3>Common uses</h3>
      <p>CRM software, project management, team collaboration, business software, design software, and communication platforms.</p>

      <h3>Variations</h3>
      <p><strong>Per-seat:</strong> Users × Price.</p>
      <p><strong>Tiered seats:</strong> 1–5 users ₱2,000, 6–10 users ₱3,500.</p>
      <p><strong>Active-seat pricing:</strong> customers are charged based on qualifying active users.</p>

      <h3>Risks</h3>
      <p>Seat-based pricing can discourage customers from adding users if each additional user creates a significant cost.</p>

      <hr />

      <h2>8. Feature-Based Subscription</h2>
      <h3>Definition</h3>
      <p>Feature-based subscription pricing charges different prices depending on the features included in each plan. Example: basic ₱299 (core features), pro ₱699 (advanced features), business ₱1,499 (advanced + business features).</p>

      <h3>Example</h3>
      <p>A website analytics platform: basic ₱299 with basic reports, 1 website, and standard support. Pro ₱699 with advanced reports, 10 websites, and export tools. Business ₱1,499 with unlimited websites, team access, advanced analytics, and priority support.</p>

      <h3>Benefits</h3>
      <p>Customers can choose based on their needs, higher-value features can support higher prices, creates upgrade opportunities, and supports customer segmentation.</p>

      <h3>Risk</h3>
      <p>Poor feature allocation can create artificial restrictions that frustrate customers. A good structure should provide meaningful value at every tier.</p>

      <hr />

      <h2>9. Storage-Based Pricing</h2>
      <h3>Definition</h3>
      <p>Storage-based pricing charges according to the amount of digital storage a customer receives or consumes. Example: basic 100 GB ₱99/month, pro 1 TB ₱399/month, business 5 TB ₱1,499/month.</p>

      <h3>How it works</h3>
      <p>The customer pays for a storage capacity or storage amount. Possible models include fixed capacity (₱399/month for 1 TB), usage-based storage (₱0.40 per GB/month), and tiered storage (0–100 GB = ₱99, 101–500 GB = ₱249, 501 GB–1 TB = ₱399).</p>

      <h3>Best for</h3>
      <p>Cloud storage, backup services, file management, media platforms, and business data systems.</p>

      <h3>Important cost considerations</h3>
      <p>The business needs to consider storage cost, data transfer, backup cost, redundancy, infrastructure, support, and security.</p>

      <hr />

      <h2>10. Consumption-Based Pricing</h2>
      <h3>Definition</h3>
      <p>Consumption-based pricing charges customers according to the quantity of a resource they actually consume. Examples: API calls, AI tokens, data processed, emails sent, minutes used, gigabytes transferred, compute hours, and transactions processed.</p>
      <p>Example: ₱0.10 per API call. Customer uses 50,000 calls: 50,000 × ₱0.10 = ₱5,000.</p>

      <h3>Subscription vs consumption</h3>
      <p>A pure consumption model may not require a recurring fixed subscription. For example: "Pay ₱0.10 per API call." A usage-based subscription could instead be: "₱500/month + additional usage charges."</p>
      <p><strong>Usage-based subscription:</strong> usually has recurring base fee; includes recurring access; may include an allowance; example ₱500 + usage.</p>
      <p><strong>Consumption-based:</strong> can be purely usage-based; charges according to consumption; often directly tied to units consumed; example ₱0.10/API call.</p>

      <hr />

      <h2>Subscription Pricing Architecture</h2>
      <p>Subscription pricing can be structured across several dimensions: time-based (monthly, quarterly, annual), user-based (seat, user), value-based (feature, storage, tier), and usage-based (usage, storage, consumption). A business can combine multiple dimensions. For example: "₱999/month includes 5 users, 100 GB, 10,000 transactions. Additional usage billed separately."</p>

      <hr />

      <h2>Subscription Pricing Models Compared</h2>
      <ul>
        <li>Monthly — time — ₱500/month</li>
        <li>Quarterly — time — ₱1,350/quarter</li>
        <li>Annual — time — ₱5,400/year</li>
        <li>Lifetime — one-time access — ₱9,999</li>
        <li>Monthly + Annual — time + commitment — ₱500/mo or ₱5,400/yr</li>
        <li>Usage-based subscription — base + usage — ₱500 + usage</li>
        <li>Seat-based — users — ₱400/user</li>
        <li>Feature-based — features — ₱299 / ₱699 / ₱1,499</li>
        <li>Storage-based — storage — ₱399/TB</li>
        <li>Consumption-based — actual consumption — ₱0.10/API call</li>
      </ul>

      <hr />

      <h2>Subscription Revenue Metrics</h2>
      <p><strong>MRR = Active Monthly Subscribers × Average Monthly Revenue</strong>. Example: 1,000 subscribers × ₱500 = ₱500,000.</p>
      <p><strong>ARR = MRR × 12</strong>. If MRR = ₱500,000, then ARR = ₱6,000,000. ARR represents an annualized recurring-revenue run rate; it is not necessarily the same as cash actually collected during the year.</p>
      <p><strong>Churn Rate = Customers Lost ÷ Customers at Beginning × 100</strong>. Example: beginning subscribers 1,000, customers lost 50. 50 ÷ 1,000 × 100 = 5% monthly churn.</p>
      <p><strong>Retention Rate = Customers Remaining ÷ Customers at Beginning × 100</strong>. If 950 of the original 1,000 remain: 950 ÷ 1,000 × 100 = 95%.</p>
      <p><strong>ARPC = Subscription Revenue ÷ Active Customers</strong>. Example: ₱500,000 revenue ÷ 1,000 customers = ₱500.</p>
      <p><strong>LTV ≈ ARPC × Gross Margin × Average Customer Lifetime</strong>. If ARPC = ₱500/month, gross margin = 80%, average lifetime = 20 months, then ₱500 × 0.80 × 20 = ₱8,000. Estimated contribution-based LTV = ₱8,000. This is a simplified model; more sophisticated businesses may calculate LTV using cohort behavior, retention curves, expansion revenue, discounts, and customer-level contribution.</p>

      <hr />

      <h2>Monthly vs Annual Economics</h2>
      <p>Suppose monthly ₱500/month, annualized ₱500 × 12 = ₱6,000. Annual ₱5,400/year. Customer savings: ₱6,000 − ₱5,400 = ₱600. Discount: 600 ÷ 6,000 × 100 = 10%. The business gives a 10% effective discount in exchange for annual commitment.</p>

      <hr />

      <h2>Subscription Pricing and Churn</h2>
      <p>Subscription businesses must think differently from one-time businesses. Acquire → subscribe → activate → receive value → use → renew → expand/upgrade → advocate (cycle).</p>
      <p>If customers subscribe but never reach meaningful value, churn can increase. Therefore: subscription pricing is not only a pricing problem. It is also a product problem, retention problem, customer-success problem, and value-delivery problem.</p>

      <hr />

      <h2>Subscription Pricing and Customer Lifecycle</h2>
      <ul>
        <li>Trying product → monthly</li>
        <li>Growing usage → usage-based</li>
        <li>Small team → seat-based</li>
        <li>Advanced user → feature-based</li>
        <li>Large data user → storage-based</li>
        <li>High-volume business → consumption-based</li>
        <li>Established customer → annual</li>
        <li>Long-term commitment → annual discount</li>
        <li>Product with low ongoing cost → lifetime</li>
      </ul>

      <hr />

      <h2>Hybrid Subscription Pricing</h2>
      <p>Businesses can combine models.</p>
      <p><strong>Example 1 — Seat + Feature:</strong> ₱500 per seat/month. Premium analytics included only in Pro.</p>
      <p><strong>Example 2 — Base + Consumption:</strong> ₱999/month includes 10,000 API calls. ₱0.10 per additional call.</p>
      <p><strong>Example 3 — Subscription + Storage:</strong> ₱499/month includes 100 GB. Additional storage ₱50/100 GB.</p>
      <p><strong>Example 4 — Monthly + Annual:</strong> ₱699/month or ₱6,990/year.</p>
      <p>This creates a flexible pricing architecture.</p>

      <hr />

      <h2>Subscription Pricing Decision Framework</h2>
      <p>What value is provided? What drives customer value? Time (monthly/quarterly/annual), users (seat-based), or features (feature-based)? Then: usage? If yes → usage/consumption. If no → fixed subscription. Then: customer value → unit economics → final pricing.</p>

      <hr />

      <h2>Choosing the Pricing Driver</h2>
      <p>The most important question is: what increases the customer's value and the business's cost as the customer grows?</p>
      <p>If value grows with time: monthly/quarterly/annual.</p>
      <p>If value grows with number of users: seat-based.</p>
      <p>If value grows with features: feature-based.</p>
      <p>If value grows with storage: storage-based.</p>
      <p>If value grows with actual consumption: consumption-based.</p>
      <p>If customers need predictable access but usage varies: usage-based subscription.</p>

      <hr />

      <h2>Common Subscription Pricing Mistakes</h2>
      <p><strong>1. Pricing without considering churn.</strong> A high monthly price may generate more revenue per customer but potentially create stronger resistance to subscribing.</p>
      <p><strong>2. Making annual pricing confusing.</strong> Always show total annual payment, monthly equivalent, and savings if applicable.</p>
      <p><strong>3. Unlimited plans without cost analysis.</strong> "Unlimited" can become expensive if heavy users create significant infrastructure or service costs.</p>
      <p><strong>4. Charging for meaningless features.</strong> Customers should pay for meaningful value, not arbitrary restrictions.</p>
      <p><strong>5. Ignoring usage patterns.</strong> A business should understand light users, average users, and heavy users before selecting usage-based pricing.</p>
      <p><strong>6. Ignoring expansion revenue.</strong> Customers may add users, upgrade plans, increase storage, or increase consumption. This can become an important source of recurring revenue.</p>

      <hr />

      <h2>Subscription Pricing Dashboard</h2>
      <ul>
        <li>Revenue — MRR, ARR, ARPC</li>
        <li>Customers — active subscribers, new subscribers</li>
        <li>Retention — churn, retention, renewal</li>
        <li>Acquisition — CAC, conversion rate</li>
        <li>Expansion — upgrades, additional seats, additional usage</li>
        <li>Engagement — active users, usage frequency</li>
        <li>Economics — gross margin, contribution margin</li>
        <li>Annual plans — annual-plan adoption</li>
        <li>Usage — consumption per customer</li>
        <li>Product — activation, feature adoption</li>
      </ul>

      <hr />

      <h2>Complete Subscription Pricing System</h2>
      <pre>{`MARKET
                      │
                      ▼
               CUSTOMER SEGMENTS
                      │
                      ▼
                VALUE METRIC
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
       TIME          USERS        USAGE
        │             │             │
     Monthly       Seats        Consumption
     Quarterly
     Annual
        │             │             │
        └─────────────┼─────────────┘
                      ▼
                PLAN STRUCTURE
                      │
                      ▼
                   PRICING
                      │
                      ▼
               CUSTOMER ACQUISITION
                      │
                      ▼
                  ACTIVATION
                      │
                      ▼
                 VALUE DELIVERY
                      │
                      ▼
                    USAGE
                      │
             ┌────────┴─────────┐
             ▼                  ▼
           RENEW              CHURN
             │
             ▼
       EXPANSION / UPGRADE
             │
             ▼
        RECURRING REVENUE
             │
             ▼
          OPTIMIZATION
             ↺`}</pre>

      <hr />

      <h2>Subscription Pricing Flywheel</h2>
      <pre>{`Choose Value Metric
       ↓
Design Subscription
       ↓
Set Sustainable Price
       ↓
Acquire Customers
       ↓
Deliver Continuous Value
       ↓
Increase Retention
       ↓
Increase Expansion
       ↓
Grow Recurring Revenue
       ↓
Analyze Customer Behavior
       ↓
Improve Pricing
       ↺`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Charge according to a value metric customers understand.</li>
        <li>Make the billing frequency completely clear.</li>
        <li>Monthly pricing provides flexibility; annual pricing provides greater commitment.</li>
        <li>Usage-based pricing should be predictable enough for customers to manage.</li>
        <li>Seat-based pricing works when value increases with the number of users.</li>
        <li>Feature-based pricing should separate meaningful levels of value.</li>
        <li>Storage-based pricing should reflect both customer value and infrastructure costs.</li>
        <li>Consumption-based pricing should use clearly defined units.</li>
        <li>Lifetime pricing requires careful analysis of long-term service costs.</li>
        <li>Monitor churn, not just subscriber growth.</li>
        <li>Monitor expansion revenue from upgrades, seats, storage, and usage.</li>
        <li>Annual discounts should be large enough to provide an incentive but sustainable for the business.</li>
        <li>Subscription pricing must be connected to product value and customer retention.</li>
        <li>The best pricing metric is usually one that scales naturally with the value the customer receives.</li>
        <li>A successful subscription model is not simply recurring billing — it is a system for delivering recurring value and generating sustainable recurring revenue.</li>
      </ol>
    </LessonLayout>
  )
}
