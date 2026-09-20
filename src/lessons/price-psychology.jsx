import LessonLayout from '../components/LessonLayout'

export default function PricePsychology() {
  return (
    <LessonLayout
      number="50"
      title="Price Psychology"
      summary="11 price presentation techniques to improve understanding and comparison — anchoring, reference, charm, prestige, and value framing."
    >
      <h2>What Is Price Psychology?</h2>
      <h3>Definition</h3>
      <p>
        Price psychology is the study and application of how customers perceive,
        interpret, compare, and respond to prices.
      </p>
      <p>A price is not always evaluated as a simple number. For example, ₱1,999 may be perceived differently from ₱2,000, even though the numerical difference is only ₱1. Likewise, a ₱30,000 website can feel expensive when presented alone, but ₱2,500/month may feel easier to evaluate when the payment structure actually supports monthly billing.</p>
      <p>Price psychology therefore concerns both the price itself and how the price is communicated.</p>
      <p>A useful framework is: actual price → price presentation → reference point → customer comparison → perceived cost → perceived value → purchase decision. Price psychology should be used to improve understanding and comparison, not to hide costs or create false impressions.</p>

      <hr />

      <h2>1. Price Anchoring</h2>
      <h3>Definition</h3>
      <p>Price anchoring presents a reference price that customers can use to evaluate another price. For example: ₱20,000 → ₱15,000. The ₱20,000 price becomes the reference point against which ₱15,000 is evaluated.</p>

      <h3>How it works</h3>
      <p>Customers often need some context to determine whether a price seems high or low. Without an anchor: ₱15,000. With an anchor: regular ₱20,000, now ₱15,000. The customer can immediately calculate the difference.</p>

      <h3>Example</h3>
      <p>A web developer offers a business website with regular project price ₱30,000 and launch package ₱24,000. Savings: 30,000 − 24,000 = ₱6,000. The ₱30,000 price provides the reference point.</p>

      <h3>Types of anchors</h3>
      <p><strong>Original price:</strong> ₱20,000 → ₱15,000.</p>
      <p><strong>Higher package:</strong> starter ₱8,000, professional ₱15,000, enterprise ₱30,000. The higher-priced package provides context for the other options.</p>
      <p><strong>Market reference:</strong> similar services commonly range from ₱15,000–₱25,000.</p>
      <p><strong>Previous price:</strong> previously ₱1,999, now ₱1,599.</p>
      <p>The reference should be truthful and relevant.</p>

      <h3>Risks</h3>
      <p>Anchoring becomes misleading when a business invents an original price, inflates a reference price, uses an irrelevant comparison, or claims a discount that never meaningfully existed.</p>

      <hr />

      <h2>2. Reference Pricing</h2>
      <h3>Definition</h3>
      <p>Reference pricing shows a comparison point that helps customers evaluate whether a price is reasonable. Reference pricing is broader than anchoring. An anchor is a specific reference point used in a pricing presentation, while reference pricing can include previous price, competitor/market price, standard price, typical price, alternative product cost, or cost of another solution.</p>

      <h3>Examples</h3>
      <p><strong>Previous price:</strong> ₱2,000 → ₱1,600.</p>
      <p><strong>Market reference:</strong> comparable services ₱15,000–₱25,000.</p>
      <p><strong>Alternative reference:</strong> hiring separate services ₱20,000, package ₱15,000.</p>

      <h3>Implementation</h3>
      <p>Ask: what legitimate reference would help the customer understand this price? Then make the reference explicit. Your price ₱15,000. Reference: typical range ₱18,000–₱25,000. The reference should be based on a defensible comparison.</p>

      <h3>Reference pricing vs price anchoring</h3>
      <p><strong>Price anchoring:</strong> establishes a comparison point; often uses a displayed price; common in promotions; example ₱20,000 → ₱15,000.</p>
      <p><strong>Reference pricing:</strong> provides context for evaluating price; can use prices, market ranges, alternatives, or previous prices; common in general pricing communication; example similar services ₱18,000–₱25,000.</p>

      <hr />

      <h2>3. Charm Pricing</h2>
      <h3>Definition</h3>
      <p>Charm pricing uses prices such as ₱99, ₱499, ₱999, ₱1,999, ₱4,999 rather than round numbers. The most common form is pricing slightly below a round threshold: ₱1,999 instead of ₱2,000.</p>

      <h3>Why businesses use it</h3>
      <p>The displayed number crosses a psychological threshold: ₱1,999 → "Under ₱2,000." The effect is not guaranteed for every customer or product category. Context, brand positioning, customer expectations, and presentation all matter.</p>

      <h3>Examples</h3>
      <p>E-commerce ₱499. Software ₱999/month. Service ₱9,999.</p>

      <h3>When it can fit</h3>
      <p>Charm pricing is commonly compatible with value-oriented retail, promotional products, mass-market products, and competitive pricing.</p>

      <h3>Risks</h3>
      <p>Excessive use can make a brand appear overly discount-oriented. For a premium service, ₱50,000 may communicate a different positioning from ₱49,999. The appropriate format depends on the brand and customer expectations.</p>

      <hr />

      <h2>4. Prestige Pricing</h2>
      <h3>Definition</h3>
      <p>Prestige pricing uses relatively high, often rounded prices to support a premium positioning. Examples: ₱10,000, ₱25,000, ₱100,000. Rather than emphasizing cheapness, the presentation can emphasize quality, exclusivity, craftsmanship, service, expertise, experience, performance, and customization.</p>

      <h3>Example</h3>
      <p>A premium web-design agency might price a custom brand experience at ₱75,000 rather than ₱74,999. The rounded number can fit a premium presentation better.</p>

      <h3>Prestige vs charm pricing</h3>
      <p><strong>Charm:</strong> ₱999; often emphasizes affordability; common in value retail; often uses odd endings.</p>
      <p><strong>Prestige:</strong> ₱1,000; often supports premium positioning; common in premium offerings; often uses rounded numbers.</p>
      <p>Neither approach is universally better. The choice depends on positioning and customer expectations.</p>

      <hr />

      <h2>5. Decoy Pricing</h2>
      <h3>Definition</h3>
      <p>Decoy pricing introduces an additional option that makes comparison between other options easier. A classic structure is: basic ₱500, standard ₱900, premium ₱950. Here, the standard option may appear less attractive relative to premium because premium provides substantially more value for only ₱50 more. The middle option acts as a comparison point.</p>

      <h3>Example</h3>
      <p>A software service: starter ₱500 (basic), professional ₱900 (advanced), business ₱950 (advanced + additional tools). The business plan becomes easier to evaluate against professional because the price difference is small relative to the feature difference.</p>

      <h3>Important principle</h3>
      <p>The options should still represent legitimate products or packages. A business should not create a deliberately useless plan solely to deceive customers.</p>

      <h3>Decoy vs anchor</h3>
      <p><strong>Anchor:</strong> provides a reference price. <strong>Decoy:</strong> provides a comparison option that changes how nearby alternatives are evaluated.</p>

      <hr />

      <h2>6. Savings Display</h2>
      <h3>Definition</h3>
      <p>Savings display explicitly communicates the difference between a reference price and the customer's actual price. Examples: "Save ₱500," "Save 20%," "₱2,000 → ₱1,500."</p>

      <h3>Two common formats</h3>
      <p><strong>Absolute savings:</strong> Savings = Original Price − Sale Price. Example: ₱2,000 − ₱1,500 = ₱500.</p>
      <p><strong>Percentage savings:</strong> Savings % = (Original − Sale) ÷ Original × 100. Therefore: (2,000 − 1,500) ÷ 2,000 × 100 = 25%.</p>
      <p>Display: "Save ₱500 (25%)."</p>

      <h3>Which is more useful?</h3>
      <p>It depends on the price. For an inexpensive product, "Save ₱100" may be easy to understand. For a larger purchase, "Save 25%" may communicate the relative discount more effectively. Providing both can sometimes be clearest: "₱2,000 → ₱1,500 — Save ₱500 (25%)."</p>

      <h3>Important requirement</h3>
      <p>The reference price must be genuine and appropriately defined.</p>

      <hr />

      <h2>7. Monthly-Equivalent Pricing</h2>
      <h3>Definition</h3>
      <p>Monthly-equivalent pricing expresses a larger payment as an equivalent monthly amount to make the time-based cost easier to understand.</p>
      <p>Example: annual subscription ₱12,000/year. Monthly equivalent: ₱12,000 ÷ 12 = ₱1,000/month. Display: "₱1,000/month equivalent. Billed annually at ₱12,000."</p>
      <p>The word "equivalent" is important because the customer is actually paying ₱12,000 annually.</p>

      <h3>Example</h3>
      <p>A website maintenance plan at ₱24,000/year could be presented as "₱2,000/month equivalent. Billed annually."</p>

      <h3>Why it helps</h3>
      <p>Customers can compare plan A at ₱2,500/month with plan B at ₱30,000/year (≈ ₱2,500/month equivalent). This makes different billing frequencies easier to compare.</p>

      <h3>Important principle</h3>
      <p>Do not make the monthly equivalent look like the actual billing amount if the customer must pay the full annual amount upfront.</p>

      <hr />

      <h2>8. Per-Use Pricing</h2>
      <h3>Definition</h3>
      <p>Per-use pricing expresses cost according to how frequently the product or service is used. Examples: ₱10 per transaction, ₱50 per delivery, ₱5 per generated document, ₱0.10 per API request, ₱100 per consultation.</p>

      <h3>Example</h3>
      <p>A software service costs ₱1,000/month and a customer expects 200 uses per month. Equivalent cost: ₱1,000 ÷ 200 = ₱5/use. The business can communicate: "Approximately ₱5 per use at 200 uses/month." This can make the price easier to compare with the economic value of the activity.</p>

      <h3>Important warning</h3>
      <p>Per-use pricing should be based on a realistic usage level. If typical customers use the service 50 times rather than 200 times, showing ₱5/use may create an unrealistic impression.</p>

      <h3>Good use cases</h3>
      <p>Software, cloud services, printing, delivery, API services, storage, payment processing, equipment rental, and professional services.</p>

      <hr />

      <h2>9. Cost Comparison</h2>
      <h3>Definition</h3>
      <p>Cost comparison compares the price of a product or service with another legitimate cost. The comparison can answer: what does this cost compared with the alternative?</p>
      <p>Examples: hiring separate services ₱30,000 vs complete package ₱22,000. Or manual processing 10 hours/month vs automated system ₱1,000/month. The customer can evaluate the price in context.</p>

      <h3>Cost comparison framework</h3>
      <p>Current solution → current cost → alternative solution → alternative cost → difference → additional benefits/trade-offs.</p>

      <h3>Example</h3>
      <p>A business manually processes 500 orders. Labor cost ₱8,000/month. Software ₱2,000/month. Difference: ₱8,000 − ₱2,000 = ₱6,000. But the comparison should also consider setup costs, training, software limitations, maintenance, errors, and implementation time. Therefore, a lower nominal price doesn't automatically mean a lower total cost.</p>

      <hr />

      <h2>10. Value Comparison</h2>
      <h3>Definition</h3>
      <p>Value comparison compares what the customer receives against the price rather than looking only at the numerical cost.</p>
      <p>For example: package A at ₱10,000 with 5 features, package B at ₱15,000 with 12 features + support. The customer should ask: does the additional ₱5,000 produce enough additional value for my needs?</p>

      <h3>Value is not simply feature count</h3>
      <p>A better model is: <strong>Perceived Value = Benefits + Outcomes + Convenience + Quality + Support − Perceived Costs</strong>. The exact calculation is not a universal accounting formula; it is a useful decision model.</p>

      <h3>Example: web development</h3>
      <p>Package A ₱10,000: 5 pages, responsive design, contact form. Package B ₱20,000: 10 pages, responsive design, SEO setup, analytics, CMS, performance optimization, 3 months support. The value comparison isn't simply "B costs twice as much." It is: what additional business outcome does B provide, and does the customer need it?</p>

      <h3>Cost comparison vs value comparison</h3>
      <p><strong>Cost comparison:</strong> focuses on price/cost; "What does this cost?"; often compares alternatives; useful for budget decisions; example ₱15k vs ₱20k.</p>
      <p><strong>Value comparison:</strong> focuses on benefits relative to price; "What do I get for this cost?"; compares outcomes and benefits; useful for value decisions; example additional features/support for ₱5k.</p>
      <p>A strong pricing page can provide both.</p>

      <hr />

      <h2>Price Presentation Architecture</h2>
      <p>Price branches into reference (price anchor, reference price) and value (value comparison, feature comparison). Both lead to price presentation, which branches into charm (₱1,999), prestige (₱2,000), and savings (Save ₱500). All lead to payment view, which branches into monthly equivalent and per-use, then cost comparison, then purchase decision.</p>

      <hr />

      <h2>Price Psychology in Three-Option Pricing</h2>
      <p>Price psychology works particularly well with structured pricing. Example: starter ₱8,000 (3 pages, no SEO, basic support, entry); professional ₱15,000 (7 pages, SEO, analytics, priority support, recommended); business ₱30,000 (15 pages, SEO, analytics, dedicated support, advanced).</p>
      <p>Possible psychological elements: three-option pricing (limits the primary comparison set), recommended option (gives context), package hierarchy (establishes different levels), reference pricing (gives pricing context), and value comparison (explains why the tiers differ). The customer should still be able to evaluate all three choices.</p>

      <hr />

      <h2>Price Psychology in E-Commerce</h2>
      <p>An Xmarket product page might show: regular price ₱2,499, today ₱1,999, save ₱500 (20%), rating, estimated cost per day, and add to cart. Each piece serves a different purpose: ₱2,499 as reference price, ₱1,999 as actual selling price, ₱500 as absolute savings, 20% as percentage savings, and ₱67/day as usage-oriented framing.</p>
      <p>However, the "per day" figure should only be used when it provides a reasonable and meaningful comparison — not merely to make a large purchase appear artificially small.</p>

      <hr />

      <h2>Price Psychology in SaaS</h2>
      <p>Suppose a software product has starter ₱499 monthly / ₱5,388 annual; professional ₱999 monthly / ₱10,788 annual; business ₱1,999 monthly / ₱21,588 annual. For the annual professional plan: ₱10,788 ÷ 12 = ₱899/month. The interface can state: "₱899/month equivalent. Billed annually at ₱10,788." This allows the customer to compare monthly and annual plans more easily while accurately disclosing the billing structure.</p>

      <hr />

      <h2>Price Psychology in Service Packages</h2>
      <p>Consider starter ₱8,000, professional ₱15,000, enterprise ₱30,000. A detailed comparison might show website pages, SEO, analytics, automation, and support. Then the business can explain the value difference rather than simply saying "Enterprise is more expensive."</p>

      <hr />

      <h2>Price Psychology and Perceived Value</h2>
      <p>Price presentation should ultimately connect to customer outcomes: feature → capability → customer benefit → business outcome → perceived value → price.</p>
      <p>Example: automated reports → less manual reporting → saves staff time → more efficient operations → higher perceived value → subscription price. This is stronger than simply listing "Includes automated reports."</p>

      <hr />

      <h2>Important Pricing Formulas</h2>
      <p><strong>Discount = Original Price − Sale Price</strong></p>
      <p><strong>Discount % = (Original − Sale) ÷ Original × 100</strong></p>
      <p><strong>Monthly Equivalent = Annual Price ÷ 12</strong></p>
      <p><strong>PerUse Cost = Total Cost ÷ Expected Uses</strong></p>
      <p><strong>Gross Margin % = (Revenue − COGS) ÷ Revenue × 100</strong></p>
      <p><strong>Contribution = Revenue − Variable Costs</strong></p>
      <p>Price psychology should never be separated from these economics. A price may look attractive while still being unprofitable.</p>

      <hr />

      <h2>Price Psychology Metrics</h2>
      <ul>
        <li>Conversion rate — measures purchase behavior</li>
        <li>Average order value — measures average transaction size</li>
        <li>Price-page conversion — measures pricing-page effectiveness</li>
        <li>Plan selection rate — measures distribution across plans</li>
        <li>Upgrade rate — measures movement to higher tiers</li>
        <li>Discount redemption — measures promotional response</li>
        <li>Gross margin — measures profitability</li>
        <li>Contribution margin — measures unit economics</li>
        <li>Cart abandonment — detects purchase friction</li>
        <li>Checkout abandonment — measures completion problems</li>
        <li>Refund rate — detects potential expectation mismatch</li>
        <li>Renewal rate — measures recurring customer behavior</li>
        <li>Customer lifetime value — measures long-term economics</li>
      </ul>

      <hr />

      <h2>Testing Price Presentation</h2>
      <p>Price psychology should be tested rather than assumed to work identically for everyone. For example: test A ₱2,000 vs test B ₱1,999. Measure conversion, revenue, gross profit, average order value, refunds, and customer feedback.</p>
      <p>Another test: version A "₱12,000/year" vs version B "₱1,000/month equivalent, billed annually at ₱12,000." Compare customer understanding and purchasing behavior. The goal is not simply to maximize conversions; a useful pricing presentation should also maintain accurate expectations and healthy economics.</p>

      <hr />

      <h2>Common Price Psychology Mistakes</h2>
      <p><strong>1. Fake reference prices.</strong> Showing a "₱30,000 regular price" that customers rarely or never actually paid can mislead.</p>
      <p><strong>2. Hidden annual billing.</strong> Showing "₱999/month" while actually charging ₱11,988 immediately without making the billing structure clear can create a misleading impression.</p>
      <p><strong>3. Fake savings.</strong> A claimed "50% OFF" should correspond to a legitimate reference price.</p>
      <p><strong>4. Overusing ₱X.99.</strong> Charm pricing everywhere can conflict with premium positioning.</p>
      <p><strong>5. Too many comparisons.</strong> Customers can become confused if every product has multiple reference prices, discounts, equivalents, and calculations.</p>
      <p><strong>6. Feature overload.</strong> A value comparison should focus on meaningful differences rather than listing dozens of minor features.</p>
      <p><strong>7. Ignoring profitability.</strong> Increasing conversion does not necessarily increase profit.</p>
      <p><strong>8. Misleading per-use calculations.</strong> Per-use costs should use realistic usage assumptions.</p>
      <p><strong>9. Comparing incompatible products.</strong> A comparison is useful only when the alternatives are sufficiently comparable.</p>
      <p><strong>10. Making the price difficult to find.</strong> Price psychology should clarify pricing — not hide it.</p>

      <hr />

      <h2>Complete Price Psychology Framework</h2>
      <pre>{`CUSTOMER NEED
                       ↓
                 Product Value
                       ↓
              Package / Offer
                       ↓
              Actual Price
                       ↓
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     Anchor        Reference       Comparison
        │              │              │
        └──────────────┼──────────────┘
                       ↓
               Price Presentation
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      Charm         Prestige       Savings
        │              │              │
        └──────────────┼──────────────┘
                       ↓
                Payment Framing
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
       Monthly Equivalent     Per-Use
             │                   │
             └─────────┬─────────┘
                       ↓
                Cost Comparison
                       ↓
                Value Comparison
                       ↓
                 Customer Choice
                       ↓
               Business Economics
                       ↓
          Revenue + Margin + LTV`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Show the actual price clearly.</li>
        <li>Use legitimate reference prices.</li>
        <li>Make savings calculations accurate.</li>
        <li>Use charm pricing when it fits the market and positioning.</li>
        <li>Use rounded pricing when premium positioning makes it appropriate.</li>
        <li>Use decoys only with legitimate, understandable options.</li>
        <li>Disclose annual billing when showing monthly equivalents.</li>
        <li>Use per-use calculations only with realistic assumptions.</li>
        <li>Compare costs using genuinely comparable alternatives.</li>
        <li>Explain value through meaningful benefits and outcomes.</li>
        <li>Do not use price presentation to hide important costs.</li>
        <li>Connect psychological pricing to actual unit economics.</li>
        <li>Test pricing presentation using conversion and profitability metrics.</li>
        <li>Monitor refunds and customer complaints for expectation mismatches.</li>
        <li>Optimize for informed customer decisions, not merely immediate conversion.</li>
      </ol>

      <h3>The complete formula</h3>
      <p><strong>Clear Actual Price + Legitimate Reference + Meaningful Comparison + Transparent Savings + Appropriate Price Format + Useful Cost/Value Framing + Accurate Billing Disclosure + Healthy Unit Economics = Effective Price Psychology</strong></p>
    </LessonLayout>
  )
}
