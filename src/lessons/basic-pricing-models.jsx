import LessonLayout from '../components/LessonLayout'

export default function BasicPricingModels() {
  return (
    <LessonLayout
      number="30"
      title="Basic Pricing Models"
      summary="21 pricing models to charge customers the right way — from cost-plus to subscriptions, commissions, and retainers."
    >
      <h2>Basic Pricing Models</h2>
      <h3>Definition</h3>
      <p>
        A pricing model is the method a business uses to determine how customers
        are charged for a product, service, access, transaction, or result.
      </p>
      <p>Pricing answers two different questions:</p>
      <p><strong>Pricing model</strong> — how do we charge?</p>
      <p><strong>Price</strong> — how much do we charge?</p>
      <p>Examples: hourly pricing (customer pays for time), per-unit pricing (customer pays for each unit), subscription pricing (customer pays repeatedly for access), commission pricing (business earns a percentage of transactions), value-based pricing (price is primarily influenced by customer-perceived value).</p>
      <p>A business can also combine models. Example: setup fee + monthly subscription + usage fee.</p>

      <hr />

      <h2>1. Cost-Plus Pricing</h2>
      <h3>Definition</h3>
      <p>Cost-plus pricing sets the selling price by adding a predetermined markup to the cost of producing or delivering the product.</p>
      <p><strong>Selling Price = Cost + Markup</strong></p>
      <p>If a product costs ₱500 and the business adds ₱200: ₱500 + ₱200 = ₱700.</p>
      <p><strong>Markup % = (Selling Price − Cost) ÷ Cost × 100</strong></p>
      <p>For ₱500 cost and ₱700 selling price: (700 − 500) ÷ 500 × 100 = 40%.</p>

      <h3>Implementation</h3>
      <ol>
        <li>Calculate direct costs.</li>
        <li>Include relevant overhead allocation where appropriate.</li>
        <li>Determine desired markup.</li>
        <li>Calculate price.</li>
        <li>Compare the result with market conditions.</li>
        <li>Check whether the price supports the desired profit.</li>
      </ol>

      <h3>Example</h3>
      <p>A web developer calculates: hosting/tools allocation ₱500, development labor ₱3,000, other project costs ₱500. Total cost: ₱4,000. With a 50% markup: ₱4,000 × 1.50 = ₱6,000.</p>

      <h3>Benefits</h3>
      <p>Simple, easy to calculate, protects against pricing below known cost, and useful when costs are predictable.</p>

      <h3>Risks</h3>
      <p>Ignores customer willingness to pay, may produce prices that are too high or too low, encourages cost-based thinking rather than value-based thinking, and overhead allocation can be inaccurate.</p>

      <hr />

      <h2>2. Value-Based Pricing</h2>
      <h3>Definition</h3>
      <p>Value-based pricing sets price primarily according to the value customers perceive they receive rather than simply adding a markup to cost. The underlying principle is: price is connected to customer value, not merely production cost.</p>

      <h3>Example</h3>
      <p>Suppose a business automation system costs ₱10,000 to develop for a client. If the system is expected to save the client ₱100,000/year, the price does not necessarily need to be based on the ₱10,000 development cost. The business could potentially charge substantially more if the value is clear, measurable, and the customer is willing to pay.</p>
      <p>Value framework: customer problem → business impact → economic/practical value → customer willingness to pay → price.</p>

      <h3>Implementation</h3>
      <p>Research: customer problem, cost of the problem, financial impact, time saved, revenue generated, risk reduced, convenience created, alternatives, and customer willingness to pay.</p>

      <h3>Benefits</h3>
      <p>Can capture more of the value created, less dependent on internal costs, can support premium positioning, and aligns pricing with customer outcomes.</p>

      <h3>Risks</h3>
      <p>Difficult to quantify value, requires customer research, different customers may perceive different value, and can be difficult to explain.</p>

      <h3>Cost-plus vs value-based</h3>
      <p><strong>Cost-plus:</strong> starts with cost; markup determines price; easier; cost-focused.</p>
      <p><strong>Value-based:</strong> starts with customer value; perceived/economic value influences price; more research-intensive; customer-focused.</p>

      <hr />

      <h2>3. Competitive Pricing</h2>
      <h3>Definition</h3>
      <p>Competitive pricing sets prices with significant consideration of competitors' prices for similar products or services. A business may price below competitors, around competitors, or above competitors without automatically copying them.</p>
      <p>Competitive pricing framework: competitor A ₱1,000, competitor B ₱1,100, competitor C ₱1,200 → market reference → your price.</p>

      <h3>Example</h3>
      <p>Three web-hosting providers charge ₱250/month, ₱300/month, ₱350/month. A new provider might charge ₱300 but differentiate through better support, more storage, faster infrastructure, or better user experience.</p>

      <h3>Benefits</h3>
      <p>Provides a market reference, helps avoid extreme pricing errors, useful in competitive markets, and easy for customers to compare.</p>

      <h3>Risks</h3>
      <p>Price wars, copying competitors without understanding costs, ignoring differentiation, and becoming trapped by competitor pricing.</p>

      <hr />

      <h2>4. Market-Based Pricing</h2>
      <h3>Definition</h3>
      <p>Market-based pricing sets prices according to broader market conditions, including supply, demand, customer behavior, competitor conditions, industry norms, economic conditions, and market willingness to pay. Competitive pricing focuses strongly on competitors, while market-based pricing considers the overall market environment.</p>

      <h3>Example</h3>
      <p>If demand for a particular service rises significantly while available providers remain limited, market conditions may support higher prices.</p>
      <p>Market pricing system: supply + demand + competition + customer willingness to pay + industry conditions → market price range → business pricing decision.</p>

      <h3>Benefits</h3>
      <p>Reflects real market conditions, useful for dynamic industries, and provides broader context than competitor pricing.</p>

      <h3>Risks</h3>
      <p>Markets change, market averages may not match your costs, and commodity-style competition can reduce differentiation.</p>

      <hr />

      <h2>5. Fixed Pricing</h2>
      <h3>Definition</h3>
      <p>Fixed pricing charges a predetermined price for a defined product, service, or package. Example: "Website landing page — ₱8,000." The customer knows the price before purchasing.</p>
      <p>Structure: defined scope → defined deliverable → defined price.</p>

      <h3>Example</h3>
      <p>A designer offers: basic logo ₱3,000, business logo ₱6,000, brand package ₱15,000.</p>

      <h3>Benefits</h3>
      <p>Simple for customers, easy to advertise, predictable revenue, and simplifies purchasing.</p>

      <h3>Risks</h3>
      <p>Scope creep, unexpected work, and underpricing complex projects.</p>

      <h3>Important principle</h3>
      <p>Fixed pricing works best when scope and deliverables are clearly defined.</p>

      <hr />

      <h2>6. Hourly Pricing</h2>
      <h3>Definition</h3>
      <p>Hourly pricing charges customers according to the number of hours worked.</p>
      <p><strong>Price = Hours Worked × Hourly Rate</strong></p>
      <p>Example: 20 hours × ₱500 = ₱10,000. A developer charges ₱600/hour. A project requires 15 billable hours: 15 × 600 = ₱9,000.</p>

      <h3>Benefits</h3>
      <p>Simple, suitable for variable work, protects against unpredictable scope, and useful for consulting and support.</p>

      <h3>Risks</h3>
      <p>Revenue is tied to time, customers may focus on hours rather than results, efficient workers may earn less for delivering the same outcome, and requires accurate time tracking.</p>

      <hr />

      <h2>7. Daily Pricing</h2>
      <h3>Definition</h3>
      <p>Daily pricing charges a fixed amount for a day of work or access.</p>
      <p><strong>Price = Days × Daily Rate</strong></p>
      <p>Example: 5 days × ₱3,000 = ₱15,000.</p>

      <h3>Common uses</h3>
      <p>Consulting, event services, photography, equipment rental, contractors, and workshops.</p>

      <h3>Benefits</h3>
      <p>Easier than tracking every hour, predictable daily cost, and useful for intensive short-term work.</p>

      <h3>Risks</h3>
      <p>Unclear definition of a "day," scope can expand within the day, and may not fit small tasks. A contract should define what constitutes a billable day.</p>

      <hr />

      <h2>8. Per-Project Pricing</h2>
      <h3>Definition</h3>
      <p>Per-project pricing charges one price for completing a defined project or outcome. Example: "E-commerce website development: ₱50,000." The customer pays for the project rather than every hour.</p>
      <p>There is no single universal formula, but a business can estimate: <strong>Project Price = Estimated Cost + Risk Allowance + Desired Profit</strong></p>
      <p>Example: estimated project cost ₱30,000, risk allowance ₱5,000, desired contribution/profit allowance ₱15,000. Project price: ₱50,000.</p>

      <h3>Benefits</h3>
      <p>Customers know the expected price, rewards efficiency, focuses on deliverables, and easy to package.</p>

      <h3>Risks</h3>
      <p>Scope creep, poor estimation, unexpected revisions, and underpricing.</p>

      <hr />

      <h2>9. Per-Unit Pricing</h2>
      <h3>Definition</h3>
      <p>Per-unit pricing charges customers based on the quantity purchased or consumed. Example: "₱50 per item." 10 items: 10 × ₱50 = ₱500.</p>
      <p>Common units: item, kilogram, liter, meter, license, seat, download, transaction, page, and API call.</p>

      <h3>Benefits</h3>
      <p>Easy to understand, scales with volume, and works well for physical products and measurable usage.</p>

      <h3>Risks</h3>
      <p>Revenue may become unpredictable, high-volume customers may become expensive to serve, and unit definition must be clear.</p>

      <hr />

      <h2>10. Usage-Based Pricing</h2>
      <h3>Definition</h3>
      <p>Usage-based pricing charges customers according to how much of a service they consume. Examples: API requests, storage, data transfer, minutes, messages, compute resources, and transactions.</p>

      <h3>Example</h3>
      <p>An API provider charges ₱0.10/request. A customer uses 100,000 requests: 100,000 × ₱0.10 = ₱10,000.</p>
      <p>Usage model: customer usage → usage measurement → rate → bill.</p>

      <h3>Benefits</h3>
      <p>Price scales with customer consumption, customers pay according to usage, and can align revenue with infrastructure costs.</p>

      <h3>Risks</h3>
      <p>Unpredictable bills, customers may fear overuse, requires accurate metering, and usage spikes can create customer dissatisfaction.</p>

      <h3>Important principle</h3>
      <p>Usage-based pricing should provide clear usage visibility and billing transparency.</p>

      <hr />

      <h2>11. Subscription Pricing</h2>
      <h3>Definition</h3>
      <p>Subscription pricing charges customers repeatedly—usually monthly or annually—for ongoing access to a product or service. Example: ₱499/month. Annual subscription: ₱499 × 12 = ₱5,988.</p>
      <p>Subscription system: customer → subscribe → recurring payment → continued access → renewal → recurring revenue.</p>

      <h3>Common models</h3>
      <p>Monthly, annual, tiered, per-seat, usage + subscription, and freemium + premium.</p>

      <h3>Key metrics</h3>
      <p><strong>MRR = Σ Monthly Recurring Revenue</strong></p>
      <p><strong>Churn = Customers Lost ÷ Customers at Start × 100</strong></p>

      <h3>Benefits</h3>
      <p>Predictable recurring revenue, strong customer relationship, easier revenue forecasting, and supports long-term service models.</p>

      <h3>Risks</h3>
      <p>Customer churn, continuous service obligations, subscription fatigue, and customers canceling when value declines.</p>

      <hr />

      <h2>12. Commission Pricing</h2>
      <h3>Definition</h3>
      <p>Commission pricing allows the business to earn a percentage or fixed amount from transactions it facilitates.</p>
      <p>Example: a marketplace charges sellers a 10% commission. A seller makes a ₱2,000 sale: ₱2,000 × 10% = ₱200 marketplace revenue.</p>
      <p>Marketplace model: seller → lists product → customer purchases → transaction → marketplace → commission.</p>

      <h3>Common uses</h3>
      <p>Marketplaces, affiliate platforms, brokers, booking platforms, payment intermediaries, and sales agents.</p>

      <h3>Benefits</h3>
      <p>Revenue scales with transaction volume, lower upfront cost for sellers in some models, and aligns platform revenue with successful transactions.</p>

      <h3>Risks</h3>
      <p>Sellers may resist high commissions, transaction volume can fluctuate, and customers and sellers may bypass the platform.</p>

      <hr />

      <h2>13. Performance-Based Pricing</h2>
      <h3>Definition</h3>
      <p>Performance-based pricing ties payment partly or primarily to an agreed result or performance outcome. Examples: payment per qualified lead, percentage of incremental revenue, fee per successful conversion, success fee, and performance bonus.</p>

      <h3>Example</h3>
      <p>A marketing agency charges ₱500 per qualified customer generated. If 100 qualified customers are generated: 100 × ₱500 = ₱50,000.</p>
      <p>System: service → measured result → verified performance → payment.</p>

      <h3>Benefits</h3>
      <p>Aligns incentives, can reduce customer's perceived upfront risk, and provider benefits from successful outcomes.</p>

      <h3>Risks</h3>
      <p>Difficult attribution, results may depend on factors outside the provider's control, disagreements over what counts as success, and revenue can be unpredictable.</p>

      <h3>Contract requirements</h3>
      <p>Define: performance metric, measurement method, attribution period, qualifying result, data source, payment calculation, exclusions, and dispute process.</p>

      <hr />

      <h2>14. Licensing Pricing</h2>
      <h3>Definition</h3>
      <p>Licensing pricing charges customers for permission to use intellectual property, software, technology, content, trademarks, designs, or other protected assets under defined conditions. The customer typically receives usage rights, not ownership of the underlying intellectual property.</p>

      <h3>Example</h3>
      <p>A software company licenses business software for ₱50,000/year per organization.</p>

      <h3>License dimensions</h3>
      <p>A license can define duration, number of users, geographic area, products, devices, features, commercial/non-commercial use, and exclusivity.</p>

      <h3>Benefits</h3>
      <p>Can create recurring revenue, scales intellectual property, and allows partners/customers to use existing assets.</p>

      <h3>Risks</h3>
      <p>Unauthorized use, license violations, IP disputes, and complex contract management.</p>

      <hr />

      <h2>15. Royalty Pricing</h2>
      <h3>Definition</h3>
      <p>Royalty pricing charges based on revenue, sales, units, or another measurable economic activity generated from licensed intellectual property or rights.</p>

      <h3>Example</h3>
      <p>A licensing agreement provides 5% of eligible sales to the rights holder. If eligible sales are ₱1,000,000: ₱1,000,000 × 5% = ₱50,000.</p>
      <p>Royalty system: licensed IP → commercial use → sales/revenue → royalty rate → royalty payment.</p>

      <h3>Licensing vs royalty</h3>
      <p><strong>Licensing:</strong> focuses on permission/right to use; can be fixed fee; can be recurring; can include royalty components.</p>
      <p><strong>Royalty:</strong> focuses on payment based on usage/sales; usually variable; usually tied to economic activity; often exists within a licensing agreement.</p>
      <p>A license can therefore combine: upfront license fee + annual fee + royalty.</p>

      <hr />

      <h2>16. Membership Pricing</h2>
      <h3>Definition</h3>
      <p>Membership pricing charges customers for membership status that provides defined benefits, privileges, access, or discounts. Example: ₱999/year membership.</p>
      <p>Benefits might include member discounts, early access, exclusive products, special events, free shipping, and priority support.</p>
      <p>Membership system: pay membership fee → member status → exclusive benefits → customer value → renewal.</p>

      <h3>Membership vs subscription</h3>
      <p><strong>Membership:</strong> focuses on access/status/benefits; can be annual or periodic; often emphasizes privileges; may exist alongside purchases.</p>
      <p><strong>Subscription:</strong> focuses on recurring access/service; usually recurring; often emphasizes ongoing product/service delivery; often is the core product.</p>
      <p>They can overlap significantly.</p>

      <hr />

      <h2>17. Pay-as-You-Go Pricing</h2>
      <h3>Definition</h3>
      <p>Pay-as-you-go pricing allows customers to pay only when they use or purchase something, without requiring a long-term commitment.</p>

      <h3>Example</h3>
      <p>A cloud service charges customers according to resources consumed. The customer does not necessarily commit to a fixed monthly package.</p>
      <p>System: use service → measure usage → calculate cost → pay → use again.</p>

      <h3>Benefits</h3>
      <p>Low commitment, flexible, suitable for irregular usage, and customers pay according to actual consumption.</p>

      <h3>Risks</h3>
      <p>Revenue unpredictability, higher customer bills during heavy usage, and customer budget uncertainty.</p>

      <h3>Pay-as-you-go vs subscription</h3>
      <p><strong>Pay-as-you-go:</strong> usage → payment.</p>
      <p><strong>Subscription:</strong> time period → recurring payment → access.</p>

      <hr />

      <h2>18. Prepaid Pricing</h2>
      <h3>Definition</h3>
      <p>Prepaid pricing requires the customer to pay before receiving the product, service, usage, or benefit. Examples: prepaid mobile load, prepaid service credits, gift cards, credit packages, and advance service packages.</p>

      <h3>Example</h3>
      <p>A customer buys 100 service credits for ₱1,000. Then uses the credits over time.</p>
      <p>System: customer pays → credits/balance → usage → balance decreases.</p>

      <h3>Benefits</h3>
      <p>Upfront cash collection, reduced payment risk, encourages commitment, and can improve cash flow.</p>

      <h3>Risks</h3>
      <p>Unused balances, refund issues, expiration disputes, and customer perception of restrictions.</p>

      <hr />

      <h2>19. Postpaid Pricing</h2>
      <h3>Definition</h3>
      <p>Postpaid pricing allows the customer to receive the product/service first and pay later according to an agreed billing cycle.</p>
      <p>System: service usage → billing period → invoice → payment due. A business customer may receive services throughout September and receive an invoice at the end of the month.</p>

      <h3>Benefits</h3>
      <p>Convenient for customers, useful for established business relationships, and supports recurring business usage.</p>

      <h3>Risks</h3>
      <p>Late payments, bad debt, cash-flow pressure, credit risk, and collection costs.</p>

      <h3>Prepaid vs postpaid</h3>
      <p><strong>Prepaid:</strong> payment before usage; lower payment risk; better upfront cash flow; customer commits beforehand.</p>
      <p><strong>Postpaid:</strong> payment after usage; higher credit risk; greater customer convenience; customer receives service first.</p>

      <hr />

      <h2>20. Retainer Pricing</h2>
      <h3>Definition</h3>
      <p>Retainer pricing charges a recurring fee for an agreed level of ongoing professional services, availability, support, or work capacity.</p>

      <h3>Example</h3>
      <p>Web development retainer: ₱15,000/month. Includes: up to 20 development hours, website maintenance, minor updates, and technical support.</p>
      <p>Retainer system: monthly fee → reserved capacity/services → ongoing work → monthly renewal.</p>

      <h3>Types of retainers</h3>
      <p><strong>Time-based retainer</strong> — customer pays for a defined number of hours.</p>
      <p><strong>Service-based retainer</strong> — customer pays for defined recurring services.</p>
      <p><strong>Availability retainer</strong> — customer pays for priority access or reserved availability.</p>
      <p><strong>Hybrid retainer</strong> — base retainer + additional usage. Example: monthly retainer ₱20,000 includes 20 hours; additional hours ₱1,000/hour.</p>

      <h3>Benefits</h3>
      <p>Predictable recurring revenue, stronger client relationship, reserved capacity, and better planning.</p>

      <h3>Risks</h3>
      <p>Unused capacity, scope creep, underpricing, excess workload, and unclear deliverables.</p>

      <hr />

      <h2>Pricing Model Comparison</h2>
      <ul>
        <li><strong>Cost-plus</strong> — cost + markup — usually transactional</li>
        <li><strong>Value-based</strong> — customer value — variable</li>
        <li><strong>Competitive</strong> — market competitors — usually transactional/recurring</li>
        <li><strong>Market-based</strong> — market conditions — variable</li>
        <li><strong>Fixed</strong> — defined price — predictable per transaction</li>
        <li><strong>Hourly</strong> — hours — variable</li>
        <li><strong>Daily</strong> — days — variable</li>
        <li><strong>Per-project</strong> — project — predictable per project</li>
        <li><strong>Per-unit</strong> — quantity — scales with volume</li>
        <li><strong>Usage-based</strong> — consumption — scales with usage</li>
        <li><strong>Subscription</strong> — time/access — recurring</li>
        <li><strong>Commission</strong> — transaction value — transaction-based</li>
        <li><strong>Performance-based</strong> — results — outcome-based</li>
        <li><strong>Licensing</strong> — usage rights — fixed and/or recurring</li>
        <li><strong>Royalty</strong> — sales/usage — variable</li>
        <li><strong>Membership</strong> — membership access/benefits — usually recurring</li>
        <li><strong>Pay-as-you-go</strong> — actual usage/purchase — variable</li>
        <li><strong>Prepaid</strong> — payment before use — upfront</li>
        <li><strong>Postpaid</strong> — payment after use — delayed</li>
        <li><strong>Retainer</strong> — ongoing service/capacity — recurring</li>
      </ul>

      <hr />

      <h2>Fixed vs Variable Pricing</h2>
      <p><strong>Fixed:</strong> customer uses more → price remains the same. Example: ₱999/month subscription.</p>
      <p><strong>Variable:</strong> customer uses more → bill increases. Example: ₱0.10 per API request.</p>
      <p><strong>Hybrid:</strong> base fee + usage fee. Example: ₱999/month + ₱0.05 per transaction.</p>
      <p>Hybrid models are common because they combine revenue predictability with usage scalability.</p>

      <hr />

      <h2>Pricing Model Selection Framework</h2>
      <p><strong>What is being sold?</strong> Product/service/access/result/IP → can usage be measured? Yes → usage pricing. No → fixed/project.</p>
      <p><strong>Predictable scope?</strong> Yes → fixed/project. No → hourly/daily/usage.</p>
      <p><strong>Ongoing need?</strong> Yes → subscription/membership/retainer/postpaid.</p>
      <p><strong>Can outcome be measured?</strong> Yes → performance-based/commission/royalty.</p>

      <hr />

      <h2>Combining Pricing Models</h2>
      <p>Businesses do not need to choose only one model.</p>
      <p><strong>Example 1 — Software:</strong> setup fee + monthly subscription + usage fee. Example: setup ₱5,000, subscription ₱999/month, usage ₱0.05/transaction.</p>
      <p><strong>Example 2 — Web development:</strong> project fee + monthly retainer + additional hourly work. Example: website ₱40,000, maintenance ₱5,000/month, extra development ₱800/hour.</p>
      <p><strong>Example 3 — Marketplace:</strong> seller → transaction → 10% commission. Additional revenue could come from commission + advertising + premium seller membership.</p>

      <hr />

      <h2>Pricing Architecture</h2>
      <p>A business can build multiple pricing layers. Pricing branches into entry price (basic), core price (standard), and premium price (premium). All feed into recurring revenue (subscription/retainer), then usage revenue, then expansion revenue. This allows different customers to select different levels of value and commitment.</p>

      <hr />

      <h2>Pricing and Unit Economics</h2>
      <p>Pricing must ultimately work with the business's cost structure.</p>
      <p>Suppose selling price = ₱1,000, variable cost = ₱600. Contribution: ₱1,000 − ₱600 = ₱400. Contribution margin: 400 ÷ 1,000 × 100 = 40%. If fixed operating costs are ₱40,000: break-even units = ₱40,000 ÷ ₱400 = 100 units. So the business needs approximately 100 units at that contribution level to cover the specified fixed costs.</p>

      <hr />

      <h2>Pricing and Customer Value</h2>
      <p>Pricing should also be connected to customer economics.</p>
      <p>Price → conversion → customer acquisition → retention → purchase frequency → LTV.</p>
      <p>Increasing price can increase revenue per customer, reduce conversion, change customer mix, and increase or decrease profitability.</p>
      <p>Therefore, the objective is not simply "charge the highest possible price." The business needs to understand the relationship between price, demand, margin, conversion, retention, and lifetime value.</p>

      <hr />

      <h2>Price Elasticity</h2>
      <p>Price elasticity of demand measures how demand changes in response to a change in price.</p>
      <p><strong>Price Elasticity = % Change in Quantity Demanded ÷ % Change in Price</strong></p>
      <p>For example, if price increases by 10% and quantity demanded decreases by 20%: elasticity = −20% ÷ 10% = −2. The negative sign reflects the typical inverse relationship between price and quantity demanded. Actual elasticity varies by product, customer segment, time period, competitive environment, and other factors.</p>

      <hr />

      <h2>Pricing Experiments</h2>
      <p>Businesses can test pricing through controlled approaches where appropriate. Examples: different packages, different feature tiers, different subscription levels, bundle vs individual pricing, monthly vs annual plans, and different minimum quantities.</p>
      <p>Track: price → conversion → AOV → gross margin → contribution → retention → LTV. A higher conversion rate does not automatically mean the pricing strategy is financially better.</p>

      <hr />

      <h2>Pricing Metrics Dashboard</h2>
      <ul>
        <li>Selling price — amount charged</li>
        <li>Average selling price — revenue ÷ units sold</li>
        <li>AOV — revenue ÷ orders</li>
        <li>Gross margin — gross profit ÷ revenue</li>
        <li>Contribution margin — contribution ÷ revenue</li>
        <li>Conversion rate — customers ÷ opportunities</li>
        <li>Discount rate — discount ÷ original price</li>
        <li>Revenue per customer — revenue ÷ customers</li>
        <li>MRR — monthly recurring revenue</li>
        <li>ARR — annualized recurring revenue</li>
        <li>Churn — customers lost ÷ starting customers</li>
        <li>LTV — long-term customer value</li>
        <li>CAC — acquisition cost ÷ new customers</li>
        <li>Break-even units — fixed costs ÷ contribution/unit</li>
        <li>Utilization — used capacity ÷ available capacity</li>
        <li>Usage revenue — usage × rate</li>
        <li>Commission revenue — transaction value × commission %</li>
        <li>Royalty revenue — eligible sales × royalty rate</li>
      </ul>

      <hr />

      <h2>Pricing Mistakes</h2>
      <p><strong>1. Pricing only from cost.</strong> Knowing your cost is essential, but cost alone does not tell you what customers value.</p>
      <p><strong>2. Copying competitors.</strong> Competitor prices are useful information, but your business may have different costs, customers, value, positioning, and service levels.</p>
      <p><strong>3. Ignoring variable costs.</strong> A product can generate revenue while losing money on every additional sale.</p>
      <p><strong>4. Underpricing professional services.</strong> Hourly pricing can overlook non-billable time, tools, taxes, equipment, training, administration, and business overhead.</p>
      <p><strong>5. Unclear scope.</strong> Especially dangerous with fixed-price projects, retainers, and daily pricing.</p>
      <p><strong>6. Hidden fees.</strong> Unexpected fees can damage customer trust.</p>
      <p><strong>7. Complicated pricing.</strong> Customers should understand: what am I paying for? How much? When? What is included? What costs extra?</p>
      <p><strong>8. Ignoring payment risk.</strong> Postpaid models can create collection and cash-flow problems.</p>
      <p><strong>9. Ignoring usage spikes.</strong> Usage-based pricing needs safeguards and clear billing visibility.</p>
      <p><strong>10. Discounting without economic analysis.</strong> A discount affects revenue, margin, contribution, customer behavior, and perceived value.</p>
      <p><strong>11. Using the wrong unit.</strong> The pricing unit should make sense to both the customer and the business.</p>
      <p><strong>12. Never reviewing prices.</strong> Costs, customer value, competition, and market conditions change over time.</p>

      <hr />

      <h2>Complete Pricing System</h2>
      <pre>{`MARKET
                    ↓
              CUSTOMER NEED
                    ↓
              CUSTOMER VALUE
                    ↓
              COMPETITION
                    ↓
                  COST
                    ↓
              PRICING MODEL
                    ↓
                PRICE LEVEL
                    ↓
                OFFER DESIGN
                    ↓
               SALES CHANNEL
                    ↓
                 PURCHASE
                    ↓
                 REVENUE
                    ↓
              GROSS PROFIT
                    ↓
            CONTRIBUTION PROFIT
                    ↓
              CUSTOMER LTV
                    ↓
               PROFITABILITY
                    ↓
             PRICING REVIEW
                    ↓
                 ITERATE`}</pre>

      <hr />

      <h2>Pricing Model Decision Matrix</h2>
      <ul>
        <li>Simple physical product → per-unit + fixed</li>
        <li>Customized project → per-project</li>
        <li>Unpredictable professional work → hourly</li>
        <li>Intensive short-term service → daily</li>
        <li>Ongoing professional service → retainer</li>
        <li>Digital software → subscription</li>
        <li>Variable consumption → usage-based</li>
        <li>Marketplace → commission</li>
        <li>Sales intermediary → commission</li>
        <li>Measurable business outcome → performance-based</li>
        <li>Intellectual property → licensing</li>
        <li>IP tied to sales → royalty</li>
        <li>Customer privileges → membership</li>
        <li>Irregular consumption → pay-as-you-go</li>
        <li>Customer pays before use → prepaid</li>
        <li>Established customer credit → postpaid</li>
        <li>Simple predictable package → fixed</li>
        <li>Strong measurable customer value → value-based</li>
        <li>Commodity/competitive market → competitive/market-based</li>
        <li>Predictable internal cost structure → cost-plus</li>
      </ul>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>A pricing model determines how customers are charged; the price determines how much they pay.</li>
        <li>Know your costs before setting prices, but do not assume cost alone determines customer value.</li>
        <li>Understand what customers are actually paying for.</li>
        <li>Choose a pricing unit that is understandable and closely connected to delivered value.</li>
        <li>Use cost-plus pricing when simplicity and cost coverage are important.</li>
        <li>Use value-based pricing when customer value can be understood and communicated clearly.</li>
        <li>Use competitive and market-based information as context rather than blindly copying competitors.</li>
        <li>Use fixed or project pricing when scope and deliverables are predictable.</li>
        <li>Use hourly or daily pricing when effort is difficult to predict.</li>
        <li>Use per-unit or usage-based pricing when consumption can be measured reliably.</li>
        <li>Use subscriptions, memberships, or retainers when customers receive ongoing value.</li>
        <li>Use commissions when the business facilitates measurable transactions.</li>
        <li>Use performance-based pricing only when performance can be defined and measured objectively.</li>
        <li>Use licensing and royalties when customers receive rights to use intellectual property.</li>
        <li>Prepaid pricing improves upfront cash collection but creates obligations around unused balances and refunds.</li>
        <li>Postpaid pricing can improve customer convenience but increases credit and collection risk.</li>
        <li>Hybrid pricing models can combine predictable base revenue with variable usage revenue.</li>
        <li>Always consider revenue, margin, contribution, conversion, retention, and customer lifetime value together.</li>
        <li>A higher price can produce lower volume but potentially higher contribution; a lower price can produce higher volume but potentially lower contribution.</li>
        <li>Pricing should be reviewed as market conditions, costs, customer value, competition, and business strategy change.</li>
        <li>The strongest pricing model is one that is understandable to customers, economically sustainable for the business, and aligned with the value being delivered.</li>
      </ol>
    </LessonLayout>
  )
}
