import LessonLayout from '../components/LessonLayout'

export default function AdvancedPricing() {
  return (
    <LessonLayout
      number="35"
      title="Advanced Pricing"
      summary="21 advanced pricing systems to adapt, segment, personalize, and experiment with prices beyond a single fixed number."
    >
      <h2>Advanced Pricing</h2>
      <h3>Definition</h3>
      <p>
        Advanced pricing refers to pricing systems that go beyond a single
        fixed price and adjust, segment, personalize, negotiate, or experiment
        with prices according to factors such as demand, time, location,
        customer segment, usage, product configuration, customer value,
        competition, purchase quantity, market-entry strategy, negotiation, and
        willingness to pay.
      </p>
      <p>A basic pricing model might say: "Product = ₱1,000." An advanced pricing system might instead say: "Price depends on customer segment, demand, timing, configuration, quantity, and market conditions."</p>

      <h3>Advanced pricing architecture</h3>
      <p>Market → customer value → demand, segment, location → dynamic pricing, segment-based, geographic → price engine → fixed rules, experiments, negotiation → price → customer → revenue + profit → analysis (cycle).</p>

      <hr />

      <h2>1. Dynamic Pricing</h2>
      <h3>Definition</h3>
      <p>Dynamic pricing changes prices according to changing market conditions. Potential variables include demand, supply, time, inventory, capacity, customer traffic, competitor prices, and market conditions.</p>

      <h3>Example</h3>
      <p>A hotel might charge: low-demand weekday ₱2,000/night; high-demand weekend ₱3,000/night. Basic concept: demand ↑ → price may ↑. Demand ↓ → price may ↓.</p>

      <h3>Implementation</h3>
      <ol>
        <li>Identify pricing variables.</li>
        <li>Establish minimum and maximum prices.</li>
        <li>Create pricing rules.</li>
        <li>Connect relevant data.</li>
        <li>Calculate recommended prices.</li>
        <li>Apply safeguards.</li>
        <li>Monitor customer response.</li>
        <li>Review profitability.</li>
      </ol>

      <h3>Benefits</h3>
      <p>Responds to demand, can improve capacity utilization, can capture more value during high demand, and can reduce excess inventory.</p>

      <h3>Risks</h3>
      <p>Customers may perceive prices as unfair, rapid changes can create confusion, poor algorithms can produce bad prices, and regulatory or contractual restrictions may apply in some markets.</p>

      <hr />

      <h2>2. Geographic Pricing</h2>
      <h3>Definition</h3>
      <p>Geographic pricing sets different prices according to the customer's location or the market being served.</p>
      <p>A software service could have different prices for different markets because of differences in purchasing power, taxes, distribution costs, local competition, operating costs, currency, and market conditions.</p>
      <p>Example: market A ₱500/month, market B ₱650/month, market C ₱800/month. The differences should have a legitimate business basis.</p>

      <h3>Geographic pricing considerations</h3>
      <p>Location → market conditions → costs + taxes + competition + value → price.</p>

      <h3>Risk</h3>
      <p>Incorrect geographic segmentation can create customer resentment, arbitrage, cross-border purchasing problems, and compliance issues.</p>

      <hr />

      <h2>3. Segment-Based Pricing</h2>
      <h3>Definition</h3>
      <p>Segment-based pricing charges different customer groups according to their characteristics, needs, purchasing context, or value received. Possible segments: individual, student, small business, enterprise, nonprofit, professional, government, and high-volume customer.</p>
      <p>Example: individual ₱299/month; small business ₱999/month; enterprise custom quote.</p>

      <h3>Important principle</h3>
      <p>The segments should be meaningfully different, identifiable, operationally manageable, and consistent with the product's value structure.</p>

      <h3>Segment-based vs personalized pricing</h3>
      <p><strong>Segment-based:</strong> customers in the same defined segment receive the same pricing structure.</p>
      <p><strong>Personalized:</strong> pricing may differ at the individual-customer level.</p>

      <hr />

      <h2>4. Demand-Based Pricing</h2>
      <h3>Definition</h3>
      <p>Demand-based pricing changes pricing according to the level of customer demand.</p>
      <p>Example: a service has limited daily capacity. Low demand ₱500; high demand ₱800.</p>

      <h3>Demand curve concept</h3>
      <p>Generally, as price increases, quantity demanded tends to decrease, although the actual relationship varies by market.</p>

      <h3>Useful inputs</h3>
      <p>Historical sales, search volume, inventory, reservations, capacity, conversion rates, competitor pricing, and seasonal patterns.</p>

      <hr />

      <h2>5. Peak-Period Pricing</h2>
      <h3>Definition</h3>
      <p>Peak-period pricing charges higher prices during periods when demand or resource usage is high. Examples: weekend hotel rates, busy event dates, peak travel periods, and high-demand service hours.</p>
      <p>Example: normal period ₱1,000; peak period ₱1,400.</p>

      <h3>Purpose</h3>
      <p>The higher price can reflect higher demand, manage limited capacity, increase revenue during high-demand periods, and encourage customers with flexible schedules to shift to other times.</p>

      <hr />

      <h2>6. Off-Peak Pricing</h2>
      <h3>Definition</h3>
      <p>Off-peak pricing offers lower prices during periods of lower demand. Example: peak ₱1,400, off-peak ₱900.</p>

      <h3>Business objective</h3>
      <p>Instead of allowing capacity to remain unused: low demand → lower price → more customers → higher capacity utilization.</p>

      <h3>Example</h3>
      <p>A coworking space: peak hours ₱100/hour, off-peak ₱60/hour. This can encourage customers who have flexible schedules to use otherwise underutilized capacity.</p>

      <hr />

      <h2>7. Personalized Pricing</h2>
      <h3>Definition</h3>
      <p>Personalized pricing presents different prices, offers, or incentives to individual customers based on customer-specific information. Potential inputs can include purchase history, subscription status, previous behavior, customer preferences, usage, and loyalty status.</p>

      <h3>Example</h3>
      <p>Customer A: ₱200 loyalty credit. Customer B: free shipping. Both customers might receive different incentives based on their relationship with the business.</p>

      <h3>Important distinction</h3>
      <p>Personalized pricing is more granular than segment-based pricing: segment pricing = group-level difference. Personalized pricing = individual-level difference.</p>

      <h3>Risks</h3>
      <p>Personalized pricing requires careful attention to privacy, transparency, fairness, applicable laws, data governance, and customer trust. A safer approach is often personalized offers rather than opaque individualized base prices.</p>

      <hr />

      <h2>8. Auction Pricing</h2>
      <h3>Definition</h3>
      <p>Auction pricing allows buyers to compete for an item or service, with the final price determined by the auction mechanism.</p>
      <p>Example: starting price ₱1,000. Bids ₱1,100 → ₱1,300 → ₱1,500 → ₱1,700. Final winning bid ₱1,700.</p>

      <h3>Common auction structures</h3>
      <p><strong>English auction</strong> — price increases through competing bids.</p>
      <p><strong>Sealed-bid auction</strong> — participants submit bids without seeing other bids.</p>
      <p><strong>Reverse auction</strong> — suppliers compete to provide a product/service, often by offering lower prices.</p>

      <h3>Benefits</h3>
      <p>Can discover market prices, useful for scarce goods, creates competitive bidding, and can be transparent when properly designed.</p>

      <h3>Risks</h3>
      <p>Price volatility, auction manipulation, collusion, unpredictable final prices, and poor experience for customers who prefer certainty.</p>

      <hr />

      <h2>9. Pay-What-You-Want</h2>
      <h3>Definition</h3>
      <p>Pay-what-you-want (PWYW) allows the customer to choose how much they pay. Example: "Choose your price: ₱0 / ₱100 / ₱300 / ₱500 / Custom."</p>

      <h3>Why it can work</h3>
      <p>Customers may pay because of perceived value, generosity, social connection, desire to support the creator, or fairness perceptions.</p>

      <h3>Suitable situations</h3>
      <p>Digital products, creative works, donations, community projects, and promotional experiments.</p>

      <h3>Major risk</h3>
      <p>Some customers may pay less than the amount required to sustain the business.</p>

      <hr />

      <h2>10. Name-Your-Price</h2>
      <h3>Definition</h3>
      <p>Name-your-price lets customers propose a price that the seller can accept or reject. Example: listed price ₱2,000. Enter your offer ______. The seller could accept, reject, or counteroffer.</p>

      <h3>PWYW vs name-your-price</h3>
      <p><strong>PWYW:</strong> customer chooses payment; seller may accept payment as offered; often associated with voluntary pricing; common for digital/creative products.</p>
      <p><strong>Name-your-price:</strong> customer proposes a price; seller evaluates offer; more negotiation-oriented; common in negotiated transactions.</p>

      <hr />

      <h2>11. Minimum-Spend Pricing</h2>
      <h3>Definition</h3>
      <p>Minimum-spend pricing requires customers to reach a minimum purchase amount before receiving a benefit or placing an order. Example: "Free shipping on orders ₱1,000+" or "Minimum order ₱500."</p>

      <h3>Purpose</h3>
      <p>It can increase average order value, protect against low-value transactions, cover fulfillment costs, and make free shipping economically viable.</p>

      <h3>Example</h3>
      <p>Customer cart ₱750. Free shipping threshold ₱1,000. The customer may add ₱250 to reach the threshold.</p>
      <p><strong>AOV = Total Revenue ÷ Number of Orders</strong>. Compare AOV before and after introducing the minimum-spend rule.</p>

      <hr />

      <h2>12. Freemium Conversion Pricing</h2>
      <h3>Definition</h3>
      <p>Freemium conversion pricing offers a free version while charging customers for premium functionality.</p>
      <p>Example: Free ₱0/month with basic features, limited storage, and limited usage. Pro ₱499/month with advanced features, higher limits, and additional tools.</p>

      <h3>Conversion funnel</h3>
      <p>Free user → use product → experience value → encounter limitation → see premium benefit → upgrade → paid customer.</p>

      <h3>Freemium conversion rate</h3>
      <p><strong>Conversion Rate = Paid Users ÷ Eligible Free Users × 100</strong></p>

      <h3>Important</h3>
      <p>The free version must be useful enough to attract users but structured so that the premium product provides meaningful additional value.</p>

      <hr />

      <h2>13. Add-On Pricing</h2>
      <h3>Definition</h3>
      <p>Add-on pricing charges separately for optional products, features, services, or capabilities. Example: website plan ₱10,000; SEO package ₱2,000; maintenance ₱1,500/month; extra page ₱500.</p>

      <h3>Benefits</h3>
      <p>Customers pay only for what they need, creates customization, can increase average revenue, and avoids forcing every customer into an expensive package.</p>

      <h3>Risk</h3>
      <p>Too many add-ons can create pricing complexity and decision fatigue.</p>

      <hr />

      <h2>14. Upgrade Pricing</h2>
      <h3>Definition</h3>
      <p>Upgrade pricing charges a higher amount when customers move to a more capable version of a product or service. Example: basic ₱299/month, pro ₱699/month. Upgrade difference: ₱699 − ₱299 = ₱400/month.</p>

      <h3>Upgrade reasons</h3>
      <p>Customers may upgrade because they need more features, more users, more storage, higher limits, better support, greater performance, or advanced functionality.</p>
      <p><strong>Upgrade Rate = Customers Who Upgrade ÷ Eligible Customers × 100</strong></p>

      <hr />

      <h2>15. Custom-Quote Pricing</h2>
      <h3>Definition</h3>
      <p>Custom-quote pricing means the business does not publish one fixed final price because the cost or scope depends on customer requirements. Example: "Custom website development. Request a quote."</p>
      <p>The final price may depend on number of pages, features, integrations, design requirements, development time, support, hosting, and security requirements.</p>
      <p>Quote structure: customer requirements → scope analysis → cost estimation → margin requirement → custom quote → negotiation → contract.</p>

      <h3>Benefits</h3>
      <p>Flexible, suitable for complex projects, can reflect actual customer requirements, and useful for B2B services.</p>

      <h3>Risk</h3>
      <p>Customers may dislike pricing uncertainty. A useful approach is to provide "Projects typically start at ₱X" when appropriate.</p>

      <hr />

      <h2>16. Enterprise Negotiated Pricing</h2>
      <h3>Definition</h3>
      <p>Enterprise negotiated pricing allows large customers to negotiate commercial terms based on their specific requirements. Variables can include number of users, contract duration, usage, support level, implementation, security requirements, service-level agreements, integration requirements, payment terms, and volume.</p>
      <p>Example: standard ₱50,000/month. Enterprise: custom contract based on 500 users, implementation requirements, and service level.</p>
      <p>Enterprise negotiation structure: enterprise requirements → usage + scope → cost analysis → value analysis → initial proposal → negotiation → contract → renewal/expansion.</p>

      <h3>Important</h3>
      <p>Negotiated pricing should still have internal pricing rules. A business should know minimum acceptable price, target price, cost floor, discount authority, contract requirements, and margin target.</p>

      <hr />

      <h2>17. Penetration Pricing</h2>
      <h3>Definition</h3>
      <p>Penetration pricing starts with a relatively low price to encourage rapid market adoption. Example: a new service normally plans to charge ₱1,000/month but launches at ₱500/month for a defined period or customer group.</p>

      <h3>Objective</h3>
      <p>Potential goals include customer acquisition, market entry, product adoption, building awareness, generating usage, and establishing distribution.</p>
      <p>Strategy: new market → lower initial price → customer acquisition → product adoption → scale → potential price normalization.</p>

      <h3>Risk</h3>
      <p>Customers may become anchored to the low introductory price. The business needs a credible transition strategy.</p>

      <hr />

      <h2>18. Premium Pricing</h2>
      <h3>Definition</h3>
      <p>Premium pricing sets a relatively high price supported by a strong value proposition and premium positioning. Example: standard service ₱5,000, premium service ₱15,000.</p>
      <p>The premium offering might include customization, superior materials, specialized expertise, faster service, exclusive access, better support, or higher performance.</p>

      <h3>Premium pricing equation</h3>
      <p>The fundamental principle is: <strong>Perceived Value ≥ Price</strong>. If customers do not perceive sufficient value, the high price becomes difficult to sustain.</p>

      <h3>Premium vs prestige</h3>
      <p>Premium pricing focuses on charging more because the offering provides greater value or differentiation. Prestige pricing specifically uses a high price as part of a luxury/status positioning strategy. They can overlap.</p>

      <hr />

      <h2>19. Loss-Leader Pricing</h2>
      <h3>Definition</h3>
      <p>Loss-leader pricing involves selling a product at a very low margin or potentially below cost to attract customers who may purchase other profitable products or services.</p>
      <p>Example: product A very low price → customer enters store/platform → purchases product B → purchases product C → total basket becomes profitable.</p>
      <p>A marketplace sells a popular accessory at ₱90, cost ₱100, loss ₱10. But the customer also purchases product B ₱500 and product C ₱700. The overall transaction may still be profitable depending on all costs and margins.</p>

      <h3>Important metric</h3>
      <p>Don't evaluate only the loss-leader product. Evaluate: <strong>Customer Contribution = Total Customer Revenue − Total Variable Costs</strong>.</p>

      <h3>Risks</h3>
      <p>Customers may buy only the discounted product, competitors may respond with lower prices, customers may become discount-dependent, and some jurisdictions have restrictions around below-cost pricing in particular circumstances.</p>

      <hr />

      <h2>20. Price Experimentation</h2>
      <h3>Definition</h3>
      <p>Price experimentation systematically tests different pricing structures, price points, discounts, packaging, or presentation to understand customer and business responses.</p>
      <p>Possible experiments: ₱999 vs ₱1,099; monthly vs annual; 10% vs 15% discount; three tiers vs four tiers; free shipping vs ₱100 shipping; add-on vs bundled feature; ₱499/month vs ₱5,000/year.</p>
      <p>Experiment structure: hypothesis → price options → test customer response → conversion/revenue/profit → analyze data → make decision → iterate.</p>

      <h3>Important metrics</h3>
      <p>Conversion rate, revenue, gross profit, contribution margin, average order value, customer acquisition cost, customer lifetime value, churn, upgrade rate, and renewal rate.</p>
      <p>A price that produces the highest conversion rate does not necessarily produce the highest profit.</p>

      <hr />

      <h2>Advanced Pricing Models Compared</h2>
      <ul>
        <li>Dynamic pricing — changing market conditions</li>
        <li>Geographic pricing — location</li>
        <li>Segment-based pricing — customer group</li>
        <li>Demand-based pricing — demand level</li>
        <li>Peak-period pricing — high-demand periods</li>
        <li>Off-peak pricing — low-demand periods</li>
        <li>Personalized pricing — individual customer</li>
        <li>Auction pricing — competitive bidding</li>
        <li>Pay-what-you-want — customer-selected payment</li>
        <li>Name-your-price — customer proposal</li>
        <li>Minimum-spend pricing — minimum transaction value</li>
        <li>Freemium conversion — free-to-paid conversion</li>
        <li>Add-on pricing — optional features/services</li>
        <li>Upgrade pricing — higher product/service level</li>
        <li>Custom-quote pricing — individual requirements</li>
        <li>Enterprise negotiated — large-account commercial terms</li>
        <li>Penetration pricing — market-entry strategy</li>
        <li>Premium pricing — high-value positioning</li>
        <li>Loss-leader pricing — acquisition through low-priced product</li>
        <li>Price experimentation — testing pricing decisions</li>
      </ul>

      <hr />

      <h2>Advanced Pricing: Fixed vs Adaptive</h2>
      <p>One of the most important distinctions is whether the price remains fixed or adapts.</p>
      <p><strong>Fixed:</strong> product → ₱999 → same price.</p>
      <p><strong>Adaptive:</strong> product → pricing rules → market data → customer/context → calculated price.</p>
      <p>Examples of adaptive pricing: dynamic, demand-based, geographic, segment-based, personalized, and usage-based.</p>

      <hr />

      <h2>Advanced Pricing and Customer Segmentation</h2>
      <p>A business can create a pricing architecture where customers branch into individual, business, and enterprise, then into standard, pro plan, and custom quote, then ₱299/mo, ₱999/mo, and negotiated. The key is that the difference between segments should be connected to different needs, different usage, different service requirements, different value, and different cost-to-serve.</p>

      <hr />

      <h2>Advanced Pricing and Value Metrics</h2>
      <p>A value metric is the unit that determines how pricing scales. Examples: collaboration software → seats; cloud storage → GB; API → API calls; AI service → tokens; email platform → emails sent; accounting software → businesses/users; video platform → storage/bandwidth; consulting → project scope/time/value; marketplace → transaction value; delivery service → distance/order.</p>
      <p>The closer the pricing metric is to the value customers receive, the more naturally the price can scale with customer success.</p>

      <hr />

      <h2>Advanced Pricing Decision Framework</h2>
      <p>Start → what drives customer value? Time, usage, or users → subscription, consumption, or seats → does demand fluctuate? Yes → dynamic/demand-based. No → are customer segments substantially different? Yes → segment pricing. No → is the purchase complex? Yes → custom quote. No → published price → enterprise negotiation.</p>

      <hr />

      <h2>Advanced Pricing Economics</h2>
      <p><strong>Revenue = Price × Quantity</strong></p>
      <p><strong>Contribution = Revenue − Variable Costs</strong></p>
      <p><strong>Contribution Margin = Contribution ÷ Revenue × 100</strong></p>
      <p><strong>LTV ≈ ARPC × Gross Margin × Customer Lifetime</strong></p>
      <p><strong>CAC = Acquisition Spending ÷ New Customers</strong></p>
      <p>Pricing decisions should be evaluated against the entire customer economics rather than one transaction alone.</p>

      <hr />

      <h2>Advanced Pricing Control System</h2>
      <p>Dynamic and complex pricing requires safeguards.</p>
      <p>Data → pricing engine → price rules → floor price, target price, ceiling price → final price → customer → performance → monitoring (cycle).</p>
      <p><strong>Price floor</strong> — the lowest acceptable price.</p>
      <p><strong>Target price</strong> — the normal strategic price.</p>
      <p><strong>Price ceiling</strong> — the maximum price permitted by the pricing strategy or system.</p>
      <p>This prevents an automated system from producing economically or commercially unreasonable prices.</p>

      <hr />

      <h2>Price Experimentation Framework</h2>
      <p>A disciplined pricing experiment can test price (₱899 vs ₱999 vs ₱1,099), structure (monthly vs annual), packaging (basic + add-ons vs all-inclusive plan), discount (10% vs 15%), presentation (₱999 vs ₱1,000), and threshold (₱999 vs ₱1,001).</p>
      <p>Measure: conversion, revenue, profit, CAC, AOV, LTV → customer quality → final analysis.</p>

      <hr />

      <h2>Advanced Pricing and Customer Perception</h2>
      <p>Pricing communicates more than an amount. It communicates affordability, quality, exclusivity, risk, value, convenience, and commitment.</p>
      <p>For example: ₱99 may communicate affordability. ₱999 may communicate accessible value. ₱9,999 may communicate a significantly higher-value purchase. ₱100,000 may require a stronger justification and more personalized selling process. The actual perception depends heavily on the market and product category.</p>

      <hr />

      <h2>Advanced Pricing Risks</h2>
      <p><strong>1. Price discrimination concerns.</strong> Different prices for different customers can create fairness and regulatory concerns depending on the market.</p>
      <p><strong>2. Customer confusion.</strong> Too many pricing rules can make customers unable to understand what they will pay.</p>
      <p><strong>3. Arbitrage.</strong> Customers may exploit geographic, segment, or promotional price differences.</p>
      <p><strong>4. Price volatility.</strong> Dynamic pricing can make prices difficult to predict.</p>
      <p><strong>5. Margin erosion.</strong> Aggressive penetration, loss-leader, or discount strategies can reduce profitability.</p>
      <p><strong>6. Brand damage.</strong> Frequent discounting can weaken premium positioning.</p>
      <p><strong>7. Data dependency.</strong> Personalized and dynamic pricing can become unreliable if the underlying data is inaccurate.</p>
      <p><strong>8. Algorithmic errors.</strong> Automated pricing systems can make incorrect decisions if rules or inputs are flawed.</p>

      <hr />

      <h2>Advanced Pricing Dashboard</h2>
      <ul>
        <li>Revenue — revenue, MRR, ARR</li>
        <li>Profitability — gross profit, contribution, margin</li>
        <li>Demand — units sold, demand rate</li>
        <li>Pricing — average selling price, price realization</li>
        <li>Customer — conversion, retention, churn</li>
        <li>Segments — revenue and margin by segment</li>
        <li>Geography — revenue and margin by market</li>
        <li>Usage — consumption per customer</li>
        <li>Enterprise — contract value, discount level, renewal</li>
        <li>Experiments — test conversion, revenue, profit</li>
        <li>Promotions — discount cost, incremental sales</li>
        <li>Expansion — upgrade and add-on revenue</li>
      </ul>

      <hr />

      <h2>Complete Advanced Pricing System</h2>
      <pre>{`BUSINESS STRATEGY
                           │
                           ▼
                    CUSTOMER SEGMENTS
                           │
                           ▼
                     VALUE METRIC
                           │
                           ▼
                    COST STRUCTURE
                           │
                           ▼
                    MARKET CONDITIONS
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
       Demand           Segment          Geography
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                     PRICING MODEL
                           │
       ┌───────────────────┼────────────────────┐
       ▼                   ▼                    ▼
   Subscription         Usage              Custom
       │                   │                  Quote
       ▼                   ▼                    ▼
     Tiers            Consumption         Negotiation
                           │
                           ▼
                    PRICE STRATEGY
                           │
       ┌───────────────────┼────────────────────┐
       ▼                   ▼                    ▼
   Penetration          Premium            Loss Leader
       │                   │                    │
       └───────────────────┼────────────────────┘
                           ▼
                     PRICE DELIVERY
                           │
                           ▼
                    CUSTOMER RESPONSE
                           │
                           ▼
                   REVENUE + PROFIT
                           │
                           ▼
                   PRICE EXPERIMENTS
                           │
                           ▼
                     OPTIMIZATION
                           ↺`}</pre>

      <hr />

      <h2>Advanced Pricing Flywheel</h2>
      <pre>{`Understand Market
       ↓
Understand Customer
       ↓
Identify Value Metric
       ↓
Calculate Costs
       ↓
Choose Pricing Model
       ↓
Set Pricing Rules
       ↓
Launch
       ↓
Measure Customer Response
       ↓
Measure Revenue + Profit
       ↓
Experiment
       ↓
Optimize
       ↓
Update Pricing
       ↺`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Advanced pricing should be based on measurable economic or customer-value factors.</li>
        <li>The pricing metric should ideally scale with the value received.</li>
        <li>Dynamic pricing requires clear rules and safeguards.</li>
        <li>Segment-based pricing should use meaningful customer differences.</li>
        <li>Geographic pricing should account for legitimate market differences.</li>
        <li>Personalized pricing requires careful attention to transparency, privacy, fairness, and applicable regulations.</li>
        <li>Peak pricing and off-peak pricing can help manage limited capacity.</li>
        <li>Auction pricing lets market participants help determine the final price.</li>
        <li>Pay-what-you-want and name-your-price shift some pricing control toward the customer.</li>
        <li>Minimum-spend pricing can increase order economics while protecting transaction costs.</li>
        <li>Freemium pricing must provide enough free value to attract users while providing meaningful reasons to upgrade.</li>
        <li>Add-ons allow customization but should not create unnecessary complexity.</li>
        <li>Custom quotes are useful when customer requirements vary substantially.</li>
        <li>Enterprise pricing should have internal floors, targets, approval rules, and margin controls.</li>
        <li>Penetration pricing is primarily a market-entry strategy, not simply a permanent low-price strategy.</li>
        <li>Premium pricing requires credible differentiation and sufficient perceived value.</li>
        <li>Loss-leader pricing should be evaluated using total customer economics, not the loss-leading product alone.</li>
        <li>Price experimentation should measure profit and customer quality, not only conversion.</li>
        <li>Complex pricing should remain understandable to the customer.</li>
        <li>The objective of advanced pricing is not simply to charge different prices — it is to create a pricing system that aligns customer value, market conditions, costs, behavior, revenue, and sustainable profit.</li>
      </ol>
    </LessonLayout>
  )
}
