import LessonLayout from '../components/LessonLayout'

export default function PsychologicalPricing() {
  return (
    <LessonLayout
      number="32"
      title="Psychological Pricing"
      summary="21 pricing techniques to influence how customers perceive value, affordability, and comparison — without misleading."
    >
      <h2>Psychological Pricing</h2>
      <h3>Definition</h3>
      <p>
        Psychological pricing is the practice of designing and presenting
        prices in ways that influence how customers perceive value,
        affordability, savings, quality, and comparison.
      </p>
      <p>It does not necessarily mean manipulating customers. The legitimate purpose is to make pricing easier to understand and to communicate the intended value of an offer clearly.</p>
      <p>Examples: ₱999 instead of ₱1,000; ₱499/month instead of ₱5,988/year; ₱1,999 with "Save ₱500"; ₱999 for Basic, ₱1,499 for Standard, ₱2,999 for Premium; ₱10/day instead of ₱300/month.</p>
      <p>The important distinction is: psychological pricing changes how a price is perceived; it should not change the underlying truth of the offer.</p>

      <hr />

      <h2>1. Charm Pricing</h2>
      <h3>Definition</h3>
      <p>Charm pricing uses prices slightly below a round number, commonly ending in 9, 5, or 99. Examples: ₱999 instead of ₱1,000; ₱499 instead of ₱500; ₱1,999 instead of ₱2,000; ₱95 instead of ₱100.</p>

      <h3>How it works</h3>
      <p>Customers often process the leftmost digits first. For example, ₱999 is technically only ₱1 cheaper than ₱1,000 but it is visually categorized differently because the first digit is 9 instead of 1.</p>

      <h3>Implementation</h3>
      <p>Instead of "Website package — ₱5,000," you might use "Website package — ₱4,999."</p>

      <h3>Benefits</h3>
      <p>Can make prices appear slightly lower, useful for mass-market products, easy to implement, and works well in marketplaces and ecommerce.</p>

      <h3>Risks</h3>
      <p>Can make premium brands look overly promotional, repeated use can become predictable, and some customers associate .99 pricing with discount retailers.</p>

      <h3>Best use</h3>
      <p>Charm pricing is particularly useful when the primary customer concern is price sensitivity.</p>

      <hr />

      <h2>2. Round-Number Pricing</h2>
      <h3>Definition</h3>
      <p>Round-number pricing uses clean prices such as ₱500, ₱1,000, ₱2,500, ₱5,000, ₱10,000.</p>

      <h3>Example</h3>
      <p>Instead of "Premium consultation — ₱4,999," use "Premium consultation — ₱5,000."</p>

      <h3>Why businesses use it</h3>
      <p>Round numbers can make purchasing feel simpler and can communicate a straightforward price. They can be particularly useful for services, premium products, professional packages, luxury products, donations, and high-value purchases.</p>

      <h3>Comparison</h3>
      <p>₱999 → deal/value-oriented. ₱1,000 → simple/clean. ₱1,499 → value-oriented. ₱1,500 → clean. ₱9,999 → promotional. ₱10,000 → premium/simple.</p>
      <p>There is no universal rule that one approach always performs better.</p>

      <hr />

      <h2>3. Prestige Pricing</h2>
      <h3>Definition</h3>
      <p>Prestige pricing deliberately uses relatively high prices to support a perception of premium quality, exclusivity, status, craftsmanship, scarcity, or luxury.</p>

      <h3>Example</h3>
      <p>Standard package ₱2,000. Signature package ₱8,000. The higher price is not merely a revenue decision. It becomes part of the brand positioning.</p>

      <h3>Important principle</h3>
      <p>For prestige pricing to work sustainably: high price must be supported by high perceived value. That value could come from better materials, better service, exclusivity, expertise, design, customer experience, customization, reputation, or limited availability. Simply increasing a price does not automatically create premium value.</p>

      <hr />

      <h2>4. Price Anchoring</h2>
      <h3>Definition</h3>
      <p>Price anchoring presents a price point that customers use as a reference when evaluating another price.</p>

      <h3>Example</h3>
      <p>Regular price ₱3,000. Current price ₱1,999. The ₱3,000 becomes the anchor. The customer evaluates ₱1,999 relative to ₱3,000 rather than considering ₱1,999 completely independently.</p>

      <h3>Example</h3>
      <p>A software company displays Enterprise — ₱10,000/month, Business — ₱3,000/month. The Enterprise price can make Business appear more affordable.</p>

      <h3>Ethical requirement</h3>
      <p>The anchor should be real and defensible. Don't invent an artificial "regular price" simply to make a discount appear larger.</p>

      <hr />

      <h2>5. Reference Pricing</h2>
      <h3>Definition</h3>
      <p>Reference pricing shows a comparison price that helps customers understand whether an offer is expensive, inexpensive, discounted, or appropriately priced.</p>

      <h3>Examples</h3>
      <p>"Similar products: ₱1,500. Our price: ₱999." Or "Market range: ₱2,000–₱2,500. Our price: ₱1,799."</p>

      <h3>Reference sources</h3>
      <p>A reference price can come from previous selling price, competitor prices, market price, suggested retail price, typical price, historical price, or comparable product.</p>

      <h3>Reference pricing vs price anchoring</h3>
      <p>Reference pricing focuses on the comparison point. Price anchoring focuses on how the comparison point influences perception. They frequently work together.</p>

      <hr />

      <h2>6. Decoy Pricing</h2>
      <h3>Definition</h3>
      <p>Decoy pricing introduces an option designed to make another option appear more attractive.</p>

      <h3>Example</h3>
      <p>Basic ₱500 with 5 features. Standard ₱900 with 10 features. Premium ₱950 with 15 features. If Standard is ₱900 and Premium is only ₱50 more, Premium may appear substantially more attractive. The middle option can function as a comparison reference.</p>

      <h3>Better example</h3>
      <p>Basic ₱299 with 10 GB. Standard ₱599 with 50 GB. Premium ₱649 with 200 GB. The Premium plan provides a much larger amount of storage for a relatively small additional price.</p>

      <h3>Risk</h3>
      <p>A poorly designed decoy can confuse customers or damage trust. The options should still provide legitimate value.</p>

      <hr />

      <h2>7. Price Comparison</h2>
      <h3>Definition</h3>
      <p>Price comparison explicitly shows multiple prices so customers can evaluate an offer. Example: "Competitor-equivalent price ₱2,500. Xmarket price ₱1,999."</p>

      <h3>Implementation</h3>
      <p>Compare prices using a consistent basis: same quantity, same subscription period, same features, same quality level, same shipping conditions. Otherwise, the comparison can become misleading.</p>

      <hr />

      <h2>8. Strikethrough Pricing</h2>
      <h3>Definition</h3>
      <p>Strikethrough pricing displays an original or reference price crossed out beside the current price. Example: ₱2,000 (crossed out), ₱1,499.</p>

      <h3>Purpose</h3>
      <p>It immediately communicates: "The current price is lower than the reference price."</p>

      <h3>Savings formula</h3>
      <p><strong>Savings = Original Price − Sale Price</strong></p>
      <p>Example: ₱2,000 − ₱1,499 = ₱501.</p>
      <p><strong>Savings % = (Original − Sale) ÷ Original × 100</strong></p>
      <p>Example: (2,000 − 1,499) ÷ 2,000 × 100 = 25.05%.</p>

      <h3>Important</h3>
      <p>The crossed-out price should represent a legitimate reference price.</p>

      <hr />

      <h2>9. Suggested-Price Display</h2>
      <h3>Definition</h3>
      <p>A suggested-price display shows a recommended or commonly referenced price alongside the business's actual selling price. Example: "Suggested price: ₱2,500. Our price: ₱1,999."</p>

      <h3>Uses</h3>
      <p>It can communicate market positioning, savings, value, recommended pricing, or manufacturer's suggested price.</p>

      <h3>Risk</h3>
      <p>The suggested price should have a legitimate basis. Avoid presenting an arbitrary number as an authoritative market price.</p>

      <hr />

      <h2>10. Recommended-Plan Highlighting</h2>
      <h3>Definition</h3>
      <p>This strategy visually emphasizes the plan a business wants customers to seriously consider. Example: Basic ₱299, Standard ⭐ Recommended ₱599, Premium ₱999.</p>

      <h3>Common labels</h3>
      <p>Recommended, Most Popular, Best Value, Best for Teams, Customer Favorite, Most Chosen.</p>

      <h3>Why it works</h3>
      <p>Customers often face choice overload. Highlighting one option reduces the effort required to decide.</p>

      <h3>Important principle</h3>
      <p>The highlighted plan should genuinely be appropriate for the target customer.</p>

      <hr />

      <h2>11. Monthly-Equivalent Pricing</h2>
      <h3>Definition</h3>
      <p>Monthly-equivalent pricing converts a longer billing period into an equivalent monthly cost.</p>

      <h3>Example</h3>
      <p>Annual plan ₱12,000/year. Monthly equivalent: ₱12,000 ÷ 12 = ₱1,000/month. Display: "₱1,000/month, billed annually at ₱12,000."</p>

      <h3>Why it works</h3>
      <p>Customers commonly understand monthly costs more easily than large annual totals.</p>

      <h3>Important</h3>
      <p>The billing frequency must remain clear. Don't display "₱1,000/month" without explaining that the customer is actually charged ₱12,000 upfront annually.</p>

      <hr />

      <h2>12. Daily-Cost Framing</h2>
      <h3>Definition</h3>
      <p>Daily-cost framing expresses a price as a smaller daily amount. Example: "₱900/month. That's only ₱30/day." Because ₱900 ÷ 30 = ₱30.</p>

      <h3>Suitable products</h3>
      <p>Software, memberships, fitness programs, learning platforms, services, subscriptions.</p>

      <h3>Risk</h3>
      <p>Daily framing can obscure the actual payment if the business does not also display the real billing amount. Better: "₱900/month — about ₱30/day" rather than "Only ₱30/day."</p>

      <hr />

      <h2>13. Per-Use Cost Framing</h2>
      <h3>Definition</h3>
      <p>Per-use cost framing expresses the price according to how frequently the customer uses the product.</p>
      <p>Example: a ₱1,200 annual subscription used 120 times: ₱1,200 ÷ 120 = ₱10/use. Display: "About ₱10 per use when used 120 times per year."</p>

      <h3>Useful for</h3>
      <p>Software, equipment, memberships, transportation, productivity tools, business services.</p>

      <h3>Important</h3>
      <p>Per-use calculations should be based on a reasonable usage assumption rather than an unrealistic usage level.</p>

      <hr />

      <h2>14. Savings Framing</h2>
      <h3>Definition</h3>
      <p>Savings framing emphasizes how much money the customer keeps by choosing an offer. Example: "Regular ₱3,000. Sale ₱2,000. Save ₱1,000." The focus shifts from "You pay ₱2,000" to "You save ₱1,000."</p>
      <p><strong>Savings = Reference Price − Current Price</strong></p>

      <hr />

      <h2>15. Percentage-Savings Framing</h2>
      <h3>Definition</h3>
      <p>This expresses savings as a percentage. Example: "Regular price ₱2,000. Sale price ₱1,500. Save 25%."</p>
      <p><strong>Savings % = (Reference − Current) ÷ Reference × 100</strong></p>
      <p>Example: (2,000 − 1,500) ÷ 2,000 × 100 = 25%.</p>

      <h3>When useful</h3>
      <p>Percentage savings are particularly useful when comparing discounts across products with different prices.</p>

      <hr />

      <h2>16. Absolute-Savings Framing</h2>
      <h3>Definition</h3>
      <p>Absolute-savings framing communicates the actual monetary amount saved. Example: "Save ₱500" instead of "Save 25%."</p>

      <h3>Comparison</h3>
      <p>Product A: ₱1,000 → ₱800 = 20% saved = ₱200 saved. Product B: ₱5,000 → ₱4,000 = 20% saved = ₱1,000 saved. Both offer 20% savings, but the absolute savings are different.</p>

      <h3>Which should you display?</h3>
      <p>Sometimes the clearest approach is to display both: "Save 20% — ₱1,000."</p>

      <hr />

      <h2>17. Premium Price Signaling</h2>
      <h3>Definition</h3>
      <p>Premium price signaling uses price as one part of communicating that a product belongs to a premium category. Example: Basic ₱999, Premium ₱2,999. The price difference is accompanied by stronger value signals such as premium materials, better support, exclusive features, custom service, better packaging, or limited availability.</p>

      <h3>Important principle</h3>
      <p>Price alone is a weak premium signal. A strong premium proposition combines: price + product + experience + proof + brand.</p>

      <hr />

      <h2>18. Threshold Pricing</h2>
      <h3>Definition</h3>
      <p>Threshold pricing sets prices around psychological thresholds that customers perceive as meaningful. Examples: ₱999 instead of ₱1,000; ₱1,999 instead of ₱2,000; ₱4,999 instead of ₱5,000.</p>
      <p>The threshold can be ₱100, ₱500, ₱1,000, ₱5,000, or ₱10,000 depending on the market.</p>

      <h3>Example</h3>
      <p>Suppose testing shows customers respond differently to ₱999, ₱1,000, and ₱1,099. The business can investigate whether crossing ₱1,000 materially changes demand.</p>

      <hr />

      <h2>19. Price-Point Testing</h2>
      <h3>Definition</h3>
      <p>Price-point testing evaluates different prices to determine how customers respond. Instead of assuming "₱999 must be better," the business tests ₱899, ₱999, ₱1,099, and ₱1,199.</p>

      <h3>Key metrics</h3>
      <p>Measure conversion rate, revenue, gross profit, contribution margin, average order value, refund rate, customer acquisition cost, and customer lifetime value.</p>

      <h3>Example</h3>
      <p>Price ₱899 → conversion 10% → 100 customers → revenue ₱89,900. Price ₱999 → conversion 9% → 90 customers → revenue ₱89,910. Price ₱1,099 → conversion 7% → 70 customers → revenue ₱76,930. A lower conversion rate does not automatically mean the higher price is worse economically. You must examine profit, not only conversion.</p>

      <hr />

      <h2>20. Odd-Number Pricing</h2>
      <h3>Definition</h3>
      <p>Odd-number pricing uses numbers such as ₱97, ₱199, ₱497, ₱999, ₱1,499 instead of round numbers. It overlaps with charm pricing, but the concept is broader.</p>
      <p>Examples: instead of ₱500, use ₱497. Instead of ₱2,000, use ₱1,997.</p>

      <h3>Odd pricing vs charm pricing</h3>
      <p>Odd-number pricing = using non-round numbers. Charm pricing = using a price structure intended to create a lower-price perception, commonly through endings such as 9 or 99. Therefore ₱997 can be both odd pricing and charm pricing. But ₱1,497 is odd-number pricing without necessarily using the classic "just below a round number" structure.</p>

      <hr />

      <h2>Psychological Pricing Architecture</h2>
      <p>Psychological pricing becomes more powerful when several techniques are combined into one pricing presentation.</p>
      <p>Example: premium plan → reference price ₱2,500 → strikethrough ₱2,500 → ₱1,999 → save ₱501 (20%) → ₱167/month equivalent → ⭐ recommended.</p>
      <p>Each element communicates something different: ₱1,999 for charm/odd pricing, ₱2,500 for price anchor, ₱2,500 for reference/strikethrough, save ₱501 for absolute savings, save 20% for percentage savings, ₱167/month for monthly-equivalent framing, recommended for decision guidance, premium for quality/value signal. The calculations and comparison claims must be truthful.</p>

      <hr />

      <h2>Charm Pricing vs Round Pricing vs Prestige Pricing</h2>
      <ul>
        <li><strong>Charm</strong> — ₱999 — lower-price perception</li>
        <li><strong>Round</strong> — ₱1,000 — simplicity/clean presentation</li>
        <li><strong>Prestige</strong> — ₱10,000 — premium/exclusivity</li>
        <li><strong>Odd</strong> — ₱997 — non-round pricing</li>
        <li><strong>Threshold</strong> — ₱999 vs ₱1,000 — crossing psychological price boundary</li>
      </ul>

      <hr />

      <h2>Price Presentation Funnel</h2>
      <p>Customer sees product → reference price → current price → savings/value signal → plan comparison → recommended option → cost framing (monthly/daily/per-use) → purchase.</p>

      <hr />

      <h2>Psychological Pricing and Tiered Pricing</h2>
      <p>Psychological pricing becomes especially useful when combined with tiered pricing. Example: Basic ₱499 (5 features, basic support), Standard ⭐ ₱999 (15 features, priority support), Premium ₱1,999 (30 features, premium support). Possible psychological mechanisms: ₱499 for charm pricing, ₱999 for threshold pricing, ₱1,999 for price anchoring, Standard for recommended-plan highlighting, Premium for premium price signaling. The objective should not simply be to make the customer choose a particular tier. The structure should help customers understand which level of value fits their needs.</p>

      <hr />

      <h2>Psychological Pricing and Discounts</h2>
      <p>A complete discount presentation might look like: regular price ₱3,000 → strikethrough ₱3,000 → sale price ₱1,999 → save ₱1,001 AND save 33% → limited offer. This combines price anchoring, reference pricing, strikethrough pricing, charm pricing, absolute savings, percentage savings, and promotional framing.</p>

      <hr />

      <h2>Psychological Pricing and Unit Economics</h2>
      <p>Psychological pricing should never be evaluated only by customer perception. The business must also examine economics.</p>
      <p>Suppose selling price = ₱999, variable cost = ₱600. Contribution: ₱999 − ₱600 = ₱399. Contribution margin: 399 ÷ 999 × 100 = 39.94%.</p>
      <p>Now compare with selling price = ₱1,000, variable cost = ₱600. Contribution: ₱1,000 − ₱600 = ₱400. Contribution margin: 400 ÷ 1,000 × 100 = 40%.</p>
      <p>The ₱999 price gives up only ₱1 in contribution per unit. But the real question is: does the ₱999 price produce enough additional demand to compensate for the lower contribution per sale? That is why price testing matters.</p>

      <hr />

      <h2>Price Elasticity</h2>
      <p>A simplified price elasticity calculation is:</p>
      <p><strong>Elasticity = % Change in Quantity Demanded ÷ % Change in Price</strong></p>
      <p>Example: price decreases by 10%, quantity demanded increases by 20%. Elasticity = 20% ÷ −10% = −2. The negative sign reflects the normal inverse relationship between price and quantity demanded. Businesses usually focus on the magnitude when analyzing sensitivity.</p>

      <hr />

      <h2>Revenue Optimization</h2>
      <p>Changing the price affects both price per customer and number of customers. Therefore: <strong>Revenue = Price × Quantity</strong></p>
      <p>Example: ₱999 × 100 sales = ₱99,900. ₱1,099 × 85 sales = ₱93,415. The higher price generated less revenue in this hypothetical example. But revenue still isn't the final metric. You should examine <strong>Profit = Revenue − Total Costs</strong> and, where appropriate, <strong>Contribution = Revenue − Variable Costs</strong>.</p>

      <hr />

      <h2>Price-Point Testing Framework</h2>
      <p>Select product → choose price points → ₱899, ₱999, ₱1,099 → measure results (conversion, revenue, profit) → analyze customers → select price based on business goal.</p>

      <hr />

      <h2>Psychological Pricing Metrics</h2>
      <ul>
        <li>Conversion Rate = Purchases ÷ Visitors × 100</li>
        <li>Revenue = Price × Quantity</li>
        <li>AOV = Revenue ÷ Orders</li>
        <li>Gross Margin = Gross Profit ÷ Revenue × 100</li>
        <li>Contribution Margin = Contribution ÷ Revenue × 100</li>
        <li>Discount Rate = Discount ÷ Reference Price × 100</li>
        <li>Savings = Reference Price − Current Price</li>
        <li>Price Elasticity = %Δ Quantity ÷ %Δ Price</li>
        <li>Upgrade Rate = Upgrades ÷ Eligible Customers × 100</li>
        <li>Revenue per Visitor = Revenue ÷ Visitors</li>
        <li>Profit per Customer = Profit ÷ Customers</li>
      </ul>

      <hr />

      <h2>Psychological Pricing Decision Matrix</h2>
      <ul>
        <li>Highly price-sensitive market → charm pricing</li>
        <li>Simple professional service → round pricing</li>
        <li>Luxury positioning → prestige pricing</li>
        <li>Multiple packages → price anchoring</li>
        <li>Strong legitimate comparison price → reference pricing</li>
        <li>Too many similar plans → decoy structure</li>
        <li>Discount campaign → strikethrough + savings</li>
        <li>Subscription → monthly-equivalent framing</li>
        <li>Frequently used product → per-use framing</li>
        <li>Strong discount → percentage + absolute savings</li>
        <li>Premium product → premium price signaling</li>
        <li>Price near major threshold → threshold testing</li>
        <li>Uncertain optimal price → price-point testing</li>
        <li>Need to simplify choices → recommended-plan highlighting</li>
      </ul>

      <hr />

      <h2>Ethical Psychological Pricing</h2>
      <p>Psychological pricing should improve clarity, not create false impressions.</p>
      <p><strong>Good practice:</strong> regular price ₱2,000, sale price ₱1,500, save ₱500 (25%).</p>
      <p><strong>Poor practice:</strong> ₱5,000 → ₱1,500 TODAY! SAVE 70%! if the product was never genuinely sold for ₱5,000.</p>

      <h3>Important principles</h3>
      <ol>
        <li>Use truthful reference prices.</li>
        <li>Make billing periods obvious.</li>
        <li>Don't hide mandatory fees.</li>
        <li>Don't manipulate comparison units.</li>
        <li>Don't create fake scarcity.</li>
        <li>Don't advertise impossible savings.</li>
        <li>Don't hide the actual amount charged.</li>
        <li>Test prices using real business metrics.</li>
        <li>Consider customer trust and long-term retention.</li>
        <li>Make the value proposition understandable.</li>
      </ol>

      <hr />

      <h2>Psychological Pricing System</h2>
      <pre>{`MARKET
                      │
                      ▼
              CUSTOMER SEGMENTS
                      │
                      ▼
                VALUE PROPOSITION
                      │
                      ▼
                 BASE PRICE
                      │
          ┌───────────┼────────────┐
          ▼           ▼            ▼
       Pricing     Tiering      Positioning
       structure   structure     strategy
          │           │            │
          └───────────┼────────────┘
                      ▼
             PSYCHOLOGICAL DESIGN
                      │
       ┌──────────────┼───────────────┐
       ▼              ▼               ▼
    Charm         Anchoring        Prestige
    Pricing       Reference       Signaling
       │              │               │
       └──────────────┼───────────────┘
                      ▼
                PRICE DISPLAY
                      │
       ┌──────────────┼───────────────┐
       ▼              ▼               ▼
    Savings       Comparison       Recommended
    Framing         Display           Plan
       │              │               │
       └──────────────┼───────────────┘
                      ▼
                COST FRAMING
                      │
          Monthly / Daily / Per-use
                      │
                      ▼
                CUSTOMER RESPONSE
                      │
                      ▼
                 PRICE TESTING
                      │
                      ▼
            REVENUE + PROFIT ANALYSIS
                      │
                      ▼
                 OPTIMIZATION`}</pre>

      <hr />

      <h2>Psychological Pricing Flywheel</h2>
      <pre>{`Understand Customer
        ↓
Set Economic Price
        ↓
Choose Pricing Structure
        ↓
Apply Psychological Presentation
        ↓
Measure Customer Response
        ↓
Analyze Revenue & Profit
        ↓
Test Alternative Price Points
        ↓
Optimize
        ↓
Understand Customer Better
        ↺`}</pre>

      <h3>The core principle</h3>
      <p>Price is both an economic variable and a communication signal.</p>
      <p>A strong psychological pricing strategy therefore combines real value, sustainable economics, clear presentation, honest comparisons, and measured experimentation rather than relying on a single trick such as ending every price in 9.</p>
    </LessonLayout>
  )
}
