import LessonLayout from '../components/LessonLayout'

export default function PromotionalBundles() {
  return (
    <LessonLayout
      number="42"
      title="Promotional Bundles"
      summary="10 promotional bundle formats to drive purchase behavior with time limits, incentives, and eligibility rules."
    >
      <h2>Promotional Bundle</h2>
      <h3>Definition</h3>
      <p>
        A promotional bundle combines products, services, quantities, or
        benefits with a temporary or conditional promotional incentive.
      </p>
      <p>The purpose is usually to encourage customers to buy now, buy more, try a product, increase order value, return as a customer, refer another customer, purchase during a specific event or period, or help move slow-moving inventory.</p>
      <p>Unlike an ordinary product bundle, the defining feature is the promotional mechanism.</p>
      <p>Promotional bundle branches into product, incentive, and condition, then into customer action, then purchase.</p>

      <hr />

      <h2>1. Buy-One-Get-One Bundle</h2>
      <h3>Definition</h3>
      <p>A buy-one-get-one (BOGO) bundle gives a customer an additional item when they purchase a qualifying item. Common structures include: buy 1 get 1 free, buy 1 get 1 at 50% off, buy 2 get 1 free, buy 3 get 1 free.</p>

      <h3>Example</h3>
      <p>A store sells a product for ₱500. Promotion: buy 1, get 1 free. The customer receives two units for ₱500. Effective price per unit: ₱500 ÷ 2 = ₱250.</p>
      <p>How it works: customer buys 1 unit → business provides 1 additional unit → customer receives 2 units.</p>

      <h3>Best uses</h3>
      <p>BOGO can be useful when product cost is relatively low, inventory is abundant, products are frequently consumed, additional units are likely to be used, and the business wants to increase unit volume.</p>

      <h3>Example for Xmarket</h3>
      <p>"Buy 1 phone case — get another case free." The free item could be same product, different color, selected product, or lower-priced product.</p>

      <h3>Risks</h3>
      <p>The major issue is margin compression. If selling price ₱500 and cost of one item ₱200: normal contribution ₱500 − ₱200 = ₱300. BOGO contribution ₱500 − (₱200 × 2) = ₱100. The business still makes a contribution, but much less per transaction.</p>

      <hr />

      <h2>2. Buy-More-Save-More</h2>
      <h3>Definition</h3>
      <p>Buy-more-save-more gives progressively better pricing or savings when customers purchase larger quantities.</p>
      <p>Example: 1 item ₱500; 2 items ₱900; 3 items ₱1,275; 5 items ₱2,000; 10 items ₱3,500. The customer receives a better effective unit price at higher quantities.</p>

      <h3>Effective unit price</h3>
      <p><strong>Unit Price = Bundle Price ÷ Quantity</strong>. For 5 items: ₱2,000 ÷ 5 = ₱400.</p>

      <h3>Savings</h3>
      <p>If the normal price is ₱500: savings = (₱500 × 5) − ₱2,000 = ₱500.</p>

      <h3>Quantity ladder</h3>
      <p>Buy more → higher quantity → lower unit price → greater perceived savings → higher units per order.</p>

      <h3>Benefits</h3>
      <p>Increases average order value, moves more inventory, encourages stock-up behavior, can reduce fulfillment cost per unit, and works well for consumables and repeat-use products.</p>

      <h3>Risk</h3>
      <p>The discount must not reduce contribution below a sustainable level.</p>

      <hr />

      <h2>3. Free-Item Bundle</h2>
      <h3>Definition</h3>
      <p>A free-item bundle includes an additional item at no separately charged price when the customer purchases a qualifying product or package. Unlike BOGO, the free item does not necessarily need to be the same product.</p>
      <p>Example: "Buy a ₱20,000 laptop and get a laptop bag free." Laptop + free bag = promotional bundle.</p>

      <h3>Other examples</h3>
      <p>Phone + free case. Camera + free memory card. Website + free setup. Software + free onboarding. PC + free installation.</p>

      <h3>Strategic advantage</h3>
      <p>The business can use a low-cost complementary item to increase perceived value. For example: customer sees ₱20,000 laptop + "Free ₱1,000 bag." The actual incremental cost to the business may be substantially below the advertised retail value.</p>

      <h3>Important principle</h3>
      <p>The "free" item still has a real cost to the business. <strong>Incremental Cost = Product Cost + Packaging + Delivery + Labor + Other Variable Costs</strong>.</p>

      <hr />

      <h2>4. Limited-Time Bundle</h2>
      <h3>Definition</h3>
      <p>A limited-time bundle is available only during a specified period. Example: "Weekend Bundle ₱1,499. Available September 20–22 only." The time limit creates a defined purchasing window.</p>
      <p>Structure: normal offer → promotional window → bundle available → deadline → promotion ends.</p>

      <h3>Useful applications</h3>
      <p>New product introduction, seasonal campaign, event promotion, inventory movement, special occasions, and short-term revenue campaigns.</p>

      <h3>Risks</h3>
      <p>If promotions happen too frequently, customers may delay purchases until the next discount. This can create discount dependency.</p>

      <hr />

      <h2>5. Launch Bundle</h2>
      <h3>Definition</h3>
      <p>A launch bundle is a promotional package offered around the introduction of a new product, service, brand, website, platform, or business.</p>
      <p>Example: a new software platform launches with Launch Bundle ₱499/month including software, premium features, 100 GB storage, setup assistance, training, and launch-only price.</p>
      <p>Launch timeline: pre-launch → early access → launch bundle → initial customers → feedback → product improvement → standard offer.</p>

      <h3>Benefits</h3>
      <p>Generates initial customers, creates early adoption, produces feedback, gives the market a clear launch offer, and can generate initial cash flow.</p>

      <h3>Important principle</h3>
      <p>Clearly state whether launch pricing is permanent, temporary, limited to early customers, limited to a number of purchases, or converted to normal pricing later.</p>

      <hr />

      <h2>6. Holiday Bundle</h2>
      <h3>Definition</h3>
      <p>A holiday bundle is a promotional bundle designed around a holiday or seasonal occasion. Examples: Christmas bundle, Valentine's bundle, Mother's Day bundle, Father's Day bundle, back-to-school bundle, New Year bundle.</p>
      <p>Example: Holiday Gift Bundle ₱1,999 = main product + gift packaging + accessory + greeting card.</p>

      <h3>Why it works</h3>
      <p>The bundle can reduce the customer's decision-making effort. Instead of asking "What should I buy?", the customer sees "Complete gift set."</p>

      <h3>Benefits</h3>
      <p>Seasonal relevance, easier gift selection, higher order value, promotional excitement, and opportunity for themed packaging.</p>

      <h3>Risks</h3>
      <p>Seasonal inventory can become obsolete after the holiday.</p>

      <hr />

      <h2>7. Flash Bundle</h2>
      <h3>Definition</h3>
      <p>A flash bundle is a highly time-limited promotional bundle, often available for only a few hours or a short period. Example: "⚡ FLASH BUNDLE ₱999 instead of ₱1,399. Available until 10:00 PM."</p>
      <p>Flash promotion structure: announcement → promotion starts → short time window → customer purchases → promotion ends.</p>

      <h3>Flash bundles vs limited-time bundles</h3>
      <p><strong>Flash:</strong> very short duration; often hours/day; high urgency; often event-driven; requires fast communication.</p>
      <p><strong>Limited-time:</strong> longer duration; days/weeks; moderate urgency; broader campaign; more planning time.</p>

      <h3>Risks</h3>
      <p>Excessive urgency messaging can reduce customer trust if the promotion repeatedly returns.</p>

      <hr />

      <h2>8. Clearance Bundle</h2>
      <h3>Definition</h3>
      <p>A clearance bundle combines products or quantities to help sell inventory that the business wants to move. Typical reasons include overstock, discontinued products, seasonal inventory, older models, packaging changes, and slow-moving products.</p>

      <h3>Example</h3>
      <p>Old inventory: product A ₱500 + product B ₱400 + product C ₱300. Normal total ₱1,200. Clearance bundle ₱799.</p>

      <h3>Main objective</h3>
      <p>The objective is often not maximizing the selling price. It may instead be: convert existing inventory into cash and free storage capacity.</p>
      <p>Inventory effect: excess inventory → bundle promotion → more units sold → lower inventory → cash recovered → storage capacity released.</p>

      <h3>Important financial consideration</h3>
      <p>A clearance sale should consider current carrying cost, remaining useful life, storage cost, expected future selling price, opportunity cost, and cash-flow needs.</p>

      <hr />

      <h2>9. Loyalty Bundle</h2>
      <h3>Definition</h3>
      <p>A loyalty bundle is a special bundle available to existing, returning, or loyalty-program customers.</p>
      <p>Example: "Member Exclusive Bundle ₱1,499." Available only to customers who have purchased previously, have membership status, reached a loyalty tier, earned enough points, or meet a defined eligibility condition.</p>

      <h3>Loyalty structure</h3>
      <p>First purchase → customer → repeat purchase → loyalty status → exclusive bundle → more purchases → higher customer value.</p>

      <h3>Examples</h3>
      <p>Silver member 5% bundle savings. Gold member special bundle + free delivery. VIP member premium bundle + early access.</p>

      <h3>Benefits</h3>
      <p>Encourages repeat purchasing, rewards existing customers, creates exclusivity, can increase customer lifetime value, and reduces reliance on acquiring entirely new customers.</p>

      <h3>Risk</h3>
      <p>The business should avoid making regular customers feel that they must join a program just to receive normal pricing.</p>

      <hr />

      <h2>10. Referral Bundle</h2>
      <h3>Definition</h3>
      <p>A referral bundle provides a promotional benefit when an existing customer successfully refers a new customer.</p>
      <p>Example: "Refer a friend. Your friend gets ₱200 off. You receive a ₱200 bundle credit after their qualifying purchase."</p>
      <p>Referral flow: existing customer → referral code/link → new customer → qualifying purchase → referrer reward + new customer benefit.</p>

      <h3>Example for Xmarket</h3>
      <p>Jess shares referral link → friend joins Xmarket → friend purchases ₱1,000+ → friend receives ₱100 discount → Jess receives ₱100 Xmarket credit. The exact eligibility conditions should be clearly stated.</p>

      <h3>Referral metrics</h3>
      <p><strong>Referral Rate = Customers Who Refer ÷ Eligible Customers × 100</strong></p>
      <p><strong>Referral Conversion = Referred Customers Who Purchase ÷ Referred Prospects × 100</strong></p>
      <p><strong>Referral CAC = Referral Program Cost ÷ New Customers Acquired</strong></p>

      <hr />

      <h2>Promotional Bundle Economics</h2>
      <p>Promotional bundles should be evaluated based on contribution, not just sales volume.</p>
      <p><strong>Contribution = Selling Price − Variable Cost</strong>. Example: bundle price ₱1,000, variable cost ₱650 → contribution ₱350.</p>

      <hr />

      <h2>Discount Percentage</h2>
      <p><strong>Discount % = (Regular Price − Promotional Price) ÷ Regular Price × 100</strong></p>
      <p>If regular bundle value ₱1,500 and promotional price ₱1,200: discount = (1,500 − 1,200) ÷ 1,500 × 100 = 20%.</p>

      <hr />

      <h2>Incremental Contribution</h2>
      <p>A promotion should be compared with what would likely have happened without it.</p>
      <p><strong>Incremental Contribution = Promotional Contribution − Baseline Contribution</strong></p>
      <p>For example: without promotion, 10 orders × ₱300 contribution = ₱3,000. With promotion, 20 orders × ₱200 contribution = ₱4,000. Incremental contribution: ₱4,000 − ₱3,000 = ₱1,000. The promotion generated more contribution in this simplified example even though contribution per order was lower.</p>

      <hr />

      <h2>Promotional Bundle Decision Matrix</h2>
      <ul>
        <li>Want customers to buy two units → BOGO</li>
        <li>Want larger quantities → Buy-more-save-more</li>
        <li>Have inexpensive complementary items → Free-item</li>
        <li>Need short campaign → Limited-time</li>
        <li>Introducing new product → Launch</li>
        <li>Seasonal demand → Holiday</li>
        <li>Need immediate attention → Flash</li>
        <li>Need to move old inventory → Clearance</li>
        <li>Reward existing customers → Loyalty</li>
        <li>Want customer-driven acquisition → Referral</li>
      </ul>

      <hr />

      <h2>Promotional Bundle vs Other Bundle Types</h2>
      <ul>
        <li>Product bundle — combine products</li>
        <li>Complementary bundle — add useful related value</li>
        <li>Quantity bundle — encourage larger quantities</li>
        <li>Service package — combine services</li>
        <li>Subscription bundle — combine recurring services</li>
        <li>Value package — solve a broader customer problem</li>
        <li>Promotional bundle — create a purchase incentive</li>
      </ul>
      <p>The same offer can belong to multiple categories. For example, "Laptop + bag + mouse + free installation, available for 7 days" is simultaneously a product bundle, complementary bundle, free-item promotion, and limited-time promotion.</p>

      <hr />

      <h2>Promotional Bundle Ladder</h2>
      <p>A business can combine different promotional mechanisms throughout the customer lifecycle. Customer → launch bundle → first purchase → free-item bundle → repeat purchase → loyalty bundle → referral bundle → buy-more-save-more → higher order value. This creates a promotional system rather than running disconnected discounts.</p>

      <hr />

      <h2>Promotional Calendar</h2>
      <p>Promotional bundles can be organized across the year: January (New Year Bundle) → February (Valentine Bundle) → March–April (Seasonal Campaign) → May–June (Customer/Loyalty Campaign) → July–August (Flash/Clearance Campaign) → September–October (Launch/Growth Campaign) → November (Major Promotional Campaign) → December (Holiday Bundle). The exact calendar should reflect the customer's buying behavior and the business's inventory cycles.</p>

      <hr />

      <h2>Promotional Bundle Rules</h2>
      <p>Every promotion should clearly define: who qualifies? What is included? What is the price? What is the normal price? When does it start? When does it end? Are there quantity limits? Are there product limitations? Can it combine with other promotions? What happens after the promotion?</p>
      <p>This reduces customer confusion and helps the business calculate the actual economics.</p>

      <hr />

      <h2>Promotional Bundle Dashboard</h2>
      <ul>
        <li>Bundle Sales — number of promotional bundles sold</li>
        <li>Units per Order — quantity purchased</li>
        <li>AOV — average order value</li>
        <li>Discount Rate — average promotional discount</li>
        <li>Conversion Rate — customers who purchase</li>
        <li>Contribution — profit contribution before fixed costs</li>
        <li>Incremental Contribution — contribution above baseline</li>
        <li>Redemption Rate — use of promotional offer</li>
        <li>New Customer Rate — customers acquired</li>
        <li>Repeat Purchase Rate — customers returning</li>
        <li>Referral Rate — customers generating referrals</li>
        <li>Inventory Reduction — units moved</li>
        <li>Promotion ROI — financial return relative to promotional cost</li>
      </ul>

      <h3>Promotion ROI</h3>
      <p><strong>Promotion ROI = (Incremental Profit − Promotion Cost) ÷ Promotion Cost × 100</strong></p>
      <p>The important word is incremental. A promotion that simply gives discounts to customers who would have purchased anyway may have weak economics despite generating high sales.</p>

      <hr />

      <h2>Promotional Bundle Strategy</h2>
      <p>Identify objective → choose promotional mechanism → select products → calculate normal economics → calculate promotional economics → set eligibility → set time limit → define customer message → launch → track sales + contribution → compare against baseline → keep/modify/end.</p>

      <hr />

      <h2>Example: Xmarket Promotional Bundle System</h2>
      <p>Suppose Xmarket wants to promote a group of products.</p>
      <p><strong>Launch:</strong> Xmarket Launch Bundle — selected products at introductory bundle pricing.</p>
      <p><strong>Buy More:</strong> buy 2 → 5% savings, buy 3 → 10% savings, buy 5 → 15% savings.</p>
      <p><strong>Free Item:</strong> spend ₱2,000 → receive a selected accessory free.</p>
      <p><strong>Flash:</strong> 4-Hour Flash Bundle — selected bundle available until 10 PM.</p>
      <p><strong>Clearance:</strong> clearance bundle — selected older inventory grouped at reduced prices.</p>
      <p><strong>Loyalty:</strong> member bundle — exclusive offer for eligible returning customers.</p>
      <p><strong>Referral:</strong> refer & earn bundle — new customer receives an incentive; eligible referrer receives a defined reward after the qualifying transaction.</p>

      <hr />

      <h2>Complete Promotional Bundle System</h2>
      <pre>{`PROMOTIONAL OBJECTIVE
                                  │
          ┌───────────────────────┼───────────────────────┐
          ↓                       ↓                       ↓
       ACQUIRE                 INCREASE                 RETAIN
       CUSTOMERS               ORDER VALUE             CUSTOMERS
          │                       │                       │
     ┌────┴────┐             ┌────┴────┐             ┌────┴────┐
     ↓         ↓             ↓         ↓             ↓         ↓
  Launch    Referral       BOGO    Buy-More         Loyalty  Free Item
     │                         │
     └──────────────┬──────────┘
                    ↓
              PROMOTIONAL OFFER
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     Limited      Flash      Clearance
        │           │           │
        └───────────┼───────────┘
                    ↓
               CUSTOMER ACTION
                    ↓
                 PURCHASE
                    ↓
                 REVENUE
                    ↓
              CONTRIBUTION
                    ↓
               MEASURE ROI
                    ↓
                 OPTIMIZE`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Start with the objective, not the discount.</li>
        <li>Know the normal price and normal sales baseline before launching a promotion.</li>
        <li>Calculate variable costs before setting the promotional price.</li>
        <li>Do not confuse revenue growth with profit improvement.</li>
        <li>Use complementary free items when they create value at manageable cost.</li>
        <li>Use quantity incentives when larger orders are economically useful.</li>
        <li>Use limited-time promotions carefully and honor the stated terms.</li>
        <li>Use launch bundles to encourage initial adoption.</li>
        <li>Use holiday bundles around genuine seasonal demand.</li>
        <li>Use flash bundles when a short promotional window serves a clear purpose.</li>
        <li>Use clearance bundles to manage inventory deliberately.</li>
        <li>Use loyalty bundles to reward eligible existing customers.</li>
        <li>Use referral bundles to create a measurable acquisition mechanism.</li>
        <li>Clearly communicate eligibility, dates, inclusions, exclusions, and limits.</li>
        <li>Measure incremental results rather than simply counting promotional sales.</li>
        <li>Avoid training customers to wait permanently for discounts.</li>
        <li>Make promotions financially sustainable.</li>
        <li>End or modify promotions when the incremental economics no longer justify them.</li>
      </ol>

      <h3>The fundamental equation</h3>
      <p><strong>Relevant Product + Promotional Incentive + Clear Condition + Time/Eligibility Control + Healthy Contribution = Effective Promotional Bundle</strong></p>
    </LessonLayout>
  )
}
