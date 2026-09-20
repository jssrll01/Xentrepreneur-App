import LessonLayout from '../components/LessonLayout'

export default function PromotionalPricing() {
  return (
    <LessonLayout
      number="33"
      title="Promotional Pricing"
      summary="21 discount strategies to drive specific customer behavior — from launch offers to loyalty and renewal discounts."
    >
      <h2>Promotional Pricing</h2>
      <h3>Definition</h3>
      <p>
        Promotional pricing is the temporary use of reduced prices, special
        offers, discounts, incentives, or pricing conditions to encourage a
        specific customer behavior.
      </p>
      <p>The goal can be to acquire new customers, increase sales volume, launch a product, clear inventory, increase repeat purchases, reward loyal customers, encourage referrals, increase order size, reduce seasonal demand fluctuations, encourage customers to pay earlier, or convert prospects into buyers.</p>
      <p>Basic structure: normal price → promotional offer → customer incentive → desired behavior → purchase/renewal/referral/upgrade.</p>
      <p>Promotional pricing is different from simply having a permanently low price. Regular pricing establishes the normal economic structure. Promotional pricing temporarily changes the customer's purchasing incentive.</p>

      <hr />

      <h2>1. Introductory Discount</h2>
      <h3>Definition</h3>
      <p>An introductory discount is a reduced price offered when a product, service, or business is first introduced to the market.</p>
      <p>Example: "Regular price ₱1,500. Introductory price ₱999. Available during the first 30 days."</p>
      <p>How it works: new product → limited introduction period → lower initial price → customer adoption → feedback + reviews → normal pricing.</p>

      <h3>Implementation</h3>
      <ol>
        <li>Establish the normal price.</li>
        <li>Decide the introductory price.</li>
        <li>Define the introductory period.</li>
        <li>Explain the offer clearly.</li>
        <li>Track customer response.</li>
        <li>Collect feedback.</li>
        <li>Transition toward normal pricing.</li>
      </ol>

      <h3>Benefits</h3>
      <p>Reduces the barrier to trying a new product, generates initial customers, helps collect feedback, creates early sales data, and can generate testimonials and reviews.</p>

      <h3>Risks</h3>
      <p>Customers may resist the normal price afterward, customers may wait for future discounts, and the initial discount may attract customers who are highly price-sensitive rather than long-term customers.</p>

      <hr />

      <h2>2. Launch Discount</h2>
      <h3>Definition</h3>
      <p>A launch discount is a promotional price associated specifically with the launch of a product, service, store, website, application, or business.</p>
      <p>Example: "Xmarket New Store Launch. 20% OFF for the first 7 days."</p>

      <h3>Introductory vs launch discount</h3>
      <p><strong>Introductory:</strong> focuses on early adoption; can last weeks/months; may apply to a new product; designed to encourage trial.</p>
      <p><strong>Launch:</strong> focuses on launch event; often shorter; can apply to an entire business/store/campaign; designed to create launch activity.</p>

      <h3>Example</h3>
      <p>A new web-development service launches: "Website Development — ₱15,000. Launch price — ₱12,000. Valid until September 30."</p>

      <hr />

      <h2>3. First-Order Discount</h2>
      <h3>Definition</h3>
      <p>A first-order discount is given to a customer making their first purchase. Example: "10% OFF your first order."</p>
      <p>A customer purchases ₱2,000: ₱2,000 × 10% = ₱200. Final price: ₱2,000 − ₱200 = ₱1,800.</p>

      <h3>Purpose</h3>
      <p>The strategy reduces the psychological and financial barrier to becoming a first-time customer.</p>
      <p>Implementation: visitor → first purchase offer → first order → customer → post-purchase experience → second purchase. The discount is most valuable when the business can convert the first purchase into repeat purchasing.</p>

      <hr />

      <h2>4. Early-Bird Pricing</h2>
      <h3>Definition</h3>
      <p>Early-bird pricing rewards customers who purchase or register before a specified deadline.</p>
      <p>Example: conference ticket early bird ₱1,500, regular ₱2,000, early-bird deadline October 1.</p>

      <h3>Why businesses use it</h3>
      <p>Early purchases provide earlier cash flow, better demand forecasting, more predictable attendance, early customer commitment, and reduced uncertainty.</p>
      <p><strong>Discount % = (Regular − EarlyBird) ÷ Regular × 100</strong></p>
      <p>Example: (2,000 − 1,500) ÷ 2,000 × 100 = 25%.</p>

      <hr />

      <h2>5. Seasonal Pricing</h2>
      <h3>Definition</h3>
      <p>Seasonal pricing adjusts promotional prices based on seasonal demand. Examples: back-to-school, summer, rainy season, Christmas, graduation season, wedding season, end-of-year sales.</p>
      <p>Example: "Summer package ₱2,499. Regular ₱2,999."</p>

      <h3>Purpose</h3>
      <p>Seasonal pricing can help businesses respond to predictable changes in demand, inventory, customer behavior, competition, and purchasing occasions.</p>
      <p>Seasonal pricing system: seasonal demand → forecast demand → set promotional price → run campaign → measure sales → adjust inventory + pricing.</p>

      <hr />

      <h2>6. Holiday Pricing</h2>
      <h3>Definition</h3>
      <p>Holiday pricing uses special pricing during holidays or holiday-related shopping periods. Examples: Christmas promotion, New Year sale, Valentine's promotion, Mother's Day, Father's Day, back-to-school campaign, local holiday campaigns.</p>
      <p>Example: "Christmas Special ₱2,500 → ₱1,999."</p>

      <h3>Benefits</h3>
      <p>Aligns with existing customer purchasing behavior, creates a strong promotional theme, can increase seasonal sales, and works well with gift-oriented products.</p>

      <h3>Risks</h3>
      <p>Heavy competition, customers may become accustomed to discounts, and demand may simply shift from another period rather than increase overall.</p>

      <hr />

      <h2>7. Flash-Sale Pricing</h2>
      <h3>Definition</h3>
      <p>A flash sale is a short-duration promotion designed to create urgency. Example: "⚡ FLASH SALE ₱1,999 → ₱1,499. Ends at 8:00 PM."</p>

      <h3>Key characteristics</h3>
      <p>Short duration, clearly defined offer, strong visibility, limited promotional window.</p>
      <p>Flash-sale structure: normal price → flash sale → limited time → customer urgency → purchase.</p>

      <h3>Benefits</h3>
      <p>Can create rapid sales, useful for excess inventory, can increase traffic, and creates a clear campaign event.</p>

      <h3>Risks</h3>
      <p>Frequent flash sales can train customers to wait for discounts.</p>

      <hr />

      <h2>8. Volume Discount</h2>
      <h3>Definition</h3>
      <p>A volume discount reduces the unit price when the customer purchases more units.</p>
      <p>Example: 1 unit ₱100, 10 units ₱90, 50 units ₱80, 100 units ₱70.</p>
      <p>Example: 10 units: 10 × ₱90 = ₱900. Instead of 10 × ₱100 = ₱1,000. Customer saves: ₱1,000 − ₱900 = ₱100.</p>

      <h3>Purpose</h3>
      <p>The business exchanges a lower unit margin for higher order quantity, higher order value, lower transaction costs per unit, and faster inventory movement.</p>

      <hr />

      <h2>9. Loyalty Discount</h2>
      <h3>Definition</h3>
      <p>A loyalty discount rewards customers based on their relationship with the business. Examples: 5% off after 5 purchases; ₱100 off after reaching ₱5,000 in purchases; VIP customers receive exclusive pricing.</p>
      <p>Example: customer purchases → earns loyalty status → receives discount → makes another purchase → earns more rewards.</p>

      <h3>Benefits</h3>
      <p>Encourages repeat purchases, can increase customer lifetime value, gives customers a reason to remain active, and can differentiate the business.</p>

      <h3>Risk</h3>
      <p>If rewards are too expensive, the discount can reduce the profitability of otherwise profitable customers.</p>

      <hr />

      <h2>10. Referral Discount</h2>
      <h3>Definition</h3>
      <p>A referral discount gives an incentive when an existing customer successfully brings in another customer.</p>
      <p>Example: "Refer a friend. Your friend gets ₱200 OFF. You receive ₱200 credit after their qualifying purchase."</p>
      <p>Referral system: existing customer → referral code/link → new customer → qualifying purchase → new customer discount + referrer reward.</p>

      <h3>Important metric</h3>
      <p><strong>Referral Rate = Customers Making Referrals ÷ Eligible Customers × 100</strong></p>
      <p>Also track referred-customer CAC to determine whether the program is economically sustainable.</p>

      <hr />

      <h2>11. Student Discount</h2>
      <h3>Definition</h3>
      <p>A student discount provides reduced pricing to eligible students. Example: regular membership ₱500/month, student price ₱350/month.</p>

      <h3>Implementation</h3>
      <p>The business should establish eligibility requirements, verification method, discount amount, expiration rules, renewal process, and eligible products/services.</p>

      <h3>Benefits</h3>
      <p>Makes products more accessible to students, can build early customer relationships, can introduce younger customers to a brand, and may create long-term customer relationships.</p>

      <h3>Risk</h3>
      <p>Eligibility verification adds administrative work.</p>

      <hr />

      <h2>12. Senior Discount</h2>
      <h3>Definition</h3>
      <p>A senior discount provides reduced pricing to eligible older customers. Example: regular price ₱1,000, senior price ₱900. The eligibility rules should follow the applicable laws and regulations of the business's jurisdiction.</p>

      <h3>Business considerations</h3>
      <p>Track number of eligible customers, discount cost, purchase frequency, average order value, customer retention, and overall program cost.</p>

      <hr />

      <h2>13. Member Pricing</h2>
      <h3>Definition</h3>
      <p>Member pricing gives customers a special price because they belong to a membership program. Example: non-member ₱1,000, member ₱900. Membership can be free, paid, subscription-based, or tiered.</p>
      <p>Example: a marketplace might offer "Xmarket Member Price: ₱899. Regular Price: ₱999." The membership can also provide free shipping, exclusive products, early access, rewards, and special promotions.</p>

      <h3>Member pricing vs loyalty discount</h3>
      <p>Member pricing is based primarily on membership status. Loyalty discounts are usually based on customer activity, spending, purchase history, or loyalty level. They can also be combined.</p>

      <hr />

      <h2>14. Returning-Customer Discount</h2>
      <h3>Definition</h3>
      <p>A returning-customer discount rewards customers who have purchased previously. Example: "Welcome back! ₱150 OFF your next order."</p>
      <p>The business is trying to move the customer from first purchase → second purchase. The second purchase is particularly important because it can begin establishing repeat-purchase behavior.</p>
      <p>Example system: first purchase → thank-you message → returning-customer offer → second purchase → retention campaign → repeat customer.</p>

      <hr />

      <h2>15. Upgrade Discount</h2>
      <h3>Definition</h3>
      <p>An upgrade discount encourages customers to move from a lower-priced product or plan to a higher-priced one.</p>
      <p>Example: standard plan ₱999/month. Upgrade to Premium ₱1,499/month, first month ₱999.</p>

      <h3>Purpose</h3>
      <p>The business can increase revenue per customer, product adoption, customer value, and usage of premium features.</p>
      <p><strong>Upgrade Rate = Customers Who Upgrade ÷ Eligible Customers × 100</strong></p>

      <h3>Important</h3>
      <p>The premium plan must provide enough additional value to justify the upgrade after the discount expires.</p>

      <hr />

      <h2>16. Renewal Discount</h2>
      <h3>Definition</h3>
      <p>A renewal discount encourages an existing subscriber or contract customer to renew.</p>
      <p>Example: current subscription ₱1,000/month; renew for another year ₱10,800; normal annual equivalent ₱12,000.</p>
      <p>Savings: ₱12,000 − ₱10,800 = ₱1,200. Savings percentage: 1,200 ÷ 12,000 × 100 = 10%.</p>

      <h3>Purpose</h3>
      <p>The business wants to reduce renewal friction + churn while maintaining a valuable customer relationship.</p>
      <p>Key metrics: renewal rate, churn rate, renewal revenue, discount cost, and customer lifetime value.</p>

      <hr />

      <h2>17. Annual-Payment Discount</h2>
      <h3>Definition</h3>
      <p>An annual-payment discount provides a lower effective price when a customer pays for a year rather than paying month-to-month.</p>
      <p>Example: monthly ₱1,000 × 12 = ₱12,000. Annual ₱10,000. Savings: ₱12,000 − ₱10,000 = ₱2,000. Savings percentage: 2,000 ÷ 12,000 × 100 = 16.67%.</p>

      <h3>Business benefits</h3>
      <p>Annual payments can provide earlier cash collection, greater commitment, lower billing frequency, potentially lower churn, and more predictable revenue.</p>

      <h3>Customer trade-off</h3>
      <p>The customer receives a lower effective price but commits more money upfront.</p>

      <hr />

      <h2>18. Pre-Order Discount</h2>
      <h3>Definition</h3>
      <p>A pre-order discount gives customers a special price for purchasing before a product officially becomes available.</p>
      <p>Example: "New product launches October 30. Pre-order price ₱1,799. Regular price ₱2,099."</p>

      <h3>Business uses</h3>
      <p>Pre-orders can help estimate initial demand, production quantity, inventory requirements, and revenue expectations.</p>
      <p>Pre-order flow: product development → pre-order campaign → customer deposits/orders → demand information → production/procurement → product launch → fulfillment.</p>

      <h3>Risks</h3>
      <p>Production delays, supply problems, customer dissatisfaction, refund requirements, and forecast errors. The business must communicate expected delivery dates clearly.</p>

      <hr />

      <h2>19. Bulk-Purchase Discount</h2>
      <h3>Definition</h3>
      <p>A bulk-purchase discount gives a customer a lower total or unit price when purchasing a large quantity. Example: 1–9 units ₱500 each; 10–49 units ₱450 each; 50+ units ₱400 each.</p>

      <h3>Volume vs bulk</h3>
      <p>These terms are often used interchangeably, but they can emphasize different situations. Volume discount generally focuses on quantity-based pricing. Bulk-purchase discount often emphasizes a larger single purchase. Both encourage customers to increase purchase quantity.</p>

      <h3>Example</h3>
      <p>50 units at ₱400: 50 × ₱400 = ₱20,000. Without the bulk discount at ₱500: 50 × ₱500 = ₱25,000. Customer savings: ₱5,000.</p>

      <hr />

      <h2>20. Promotional Coupon</h2>
      <h3>Definition</h3>
      <p>A promotional coupon is a code, voucher, or digital/physical token that provides a defined purchasing benefit. Examples: WELCOME10, SAVE200, HOLIDAY20, FREESHIP.</p>

      <h3>Coupon types</h3>
      <p>Percentage (10% OFF), fixed amount (₱200 OFF), free shipping (₱0 shipping), buy-one-get-one (BOGO), category-specific (15% OFF electronics), first-order (₱200 OFF first purchase), minimum spend (₱300 OFF ₱2,000+), and time-limited (valid for 48 hours).</p>

      <h3>Coupon structure</h3>
      <p>A good coupon should specify discount, eligibility, expiration, minimum purchase, applicable products, maximum discount (if applicable), redemption limitations, and whether it can be combined with other offers.</p>

      <hr />

      <h2>Promotional Pricing Economics</h2>
      <p>A discount should not be evaluated solely by asking "Did sales increase?" The business should determine whether the additional sales produced sufficient economic value.</p>
      <p><strong>Revenue = Price × Quantity</strong></p>
      <p><strong>Gross Profit = Revenue − COGS</strong></p>
      <p><strong>Contribution = Revenue − Variable Costs</strong></p>
      <p><strong>Promotional Profit = Promotional Revenue − Promotional Costs</strong></p>

      <hr />

      <h2>Discount Calculation</h2>
      <p>Suppose a product normally sells for ₱2,000. Promotional price ₱1,600. Discount: ₱2,000 − ₱1,600 = ₱400. Discount percentage: 400 ÷ 2,000 × 100 = 20%. So: "₱1,600 — Save ₱400 (20%)."</p>

      <hr />

      <h2>Promotional Pricing and Margin</h2>
      <p>Suppose normal price = ₱2,000, variable cost = ₱1,200. Normal contribution: ₱2,000 − ₱1,200 = ₱800. Contribution margin: 800 ÷ 2,000 × 100 = 40%.</p>
      <p>Now discount the product to ₱1,600. Contribution: ₱1,600 − ₱1,200 = ₱400. Contribution margin: 400 ÷ 1,600 × 100 = 25%.</p>
      <p>The 20% discount reduced the contribution per unit by ₱800 − ₱400 = ₱400. That's a 50% reduction in contribution per unit. Therefore, a 20% price discount does not necessarily mean only a 20% reduction in profitability.</p>

      <hr />

      <h2>Break-Even Volume After a Discount</h2>
      <p>Suppose normal contribution is ₱800/unit, promotional contribution ₱400/unit. If the business previously sold 100 units: normal contribution 100 × ₱800 = ₱80,000. To generate the same ₱80,000 contribution during the promotion: 80,000 ÷ 400 = 200. The business would need 200 units instead of 100. This illustrates why businesses should calculate the required sales increase before launching a large discount.</p>

      <hr />

      <h2>Promotional Pricing Ladder</h2>
      <p>Businesses can organize promotions according to customer relationship: prospect → first-order discount → new customer → returning-customer offer → repeat customer → loyalty discount → member → upgrade offer → premium customer → renewal discount. This creates a customer-lifecycle pricing system rather than randomly distributing discounts.</p>

      <hr />

      <h2>Promotional Pricing by Objective</h2>
      <ul>
        <li>Launch a product → launch discount</li>
        <li>Get first customers → introductory discount</li>
        <li>Generate first purchase → first-order discount</li>
        <li>Generate early demand → early-bird pricing</li>
        <li>Increase seasonal sales → seasonal pricing</li>
        <li>Holiday sales → holiday pricing</li>
        <li>Generate immediate sales → flash sale</li>
        <li>Increase quantity → volume discount</li>
        <li>Reward loyal customers → loyalty discount</li>
        <li>Acquire customers through existing customers → referral discount</li>
        <li>Serve students → student discount</li>
        <li>Serve eligible seniors → senior discount</li>
        <li>Reward membership → member pricing</li>
        <li>Encourage another purchase → returning-customer discount</li>
        <li>Move customers to higher plans → upgrade discount</li>
        <li>Reduce subscription churn → renewal discount</li>
        <li>Increase annual commitments → annual-payment discount</li>
        <li>Forecast demand before launch → pre-order discount</li>
        <li>Increase large orders → bulk-purchase discount</li>
        <li>Track promotional campaigns → promotional coupon</li>
      </ul>

      <hr />

      <h2>Promotional Pricing Decision Tree</h2>
      <p>What do you want? Acquire customers (first order, introductory, referral), retain customers (loyalty, returning, renewal, member), or increase order (volume, bulk). Then increase commitment (annual payment, pre-order, early-bird).</p>

      <hr />

      <h2>Promotional Pricing vs Psychological Pricing</h2>
      <p><strong>Promotional:</strong> changes or structures an offer to stimulate action; usually campaign-oriented; discounts are common; often temporary; example: 20% OFF; example: first-order discount; example: flash sale.</p>
      <p><strong>Psychological:</strong> changes how price/value is presented or perceived; can be permanent; discounts are not required; can be temporary or permanent; example: ₱999; example: price anchoring; example: recommended-plan highlighting.</p>
      <p>They can be combined. Example: "₱2,000 → ₱1,499 → Save ₱501 (25%) → Launch offer — ends Friday." This uses both promotional and psychological pricing.</p>

      <hr />

      <h2>Promotional Pricing Calendar</h2>
      <p>Jan New Year Campaign, Feb Seasonal Campaign, Mar Customer Acquisition, Apr Member Promotion, May Holiday Campaign, Jun Mid-Year Sale, Jul Loyalty Campaign, Aug Product Launch, Sep Pre-Order Campaign, Oct Flash Sale, Nov Major Promotional Campaign, Dec Holiday Campaign. The exact calendar depends on the business, customers, inventory, and market.</p>

      <hr />

      <h2>Promotional Pricing Metrics</h2>
      <p><strong>Discount Rate = (Regular Price − Promotional Price) ÷ Regular Price × 100</strong></p>
      <p><strong>Incremental Sales = Promotional Sales − Baseline Sales</strong></p>
      <p><strong>Promotion Conversion = Purchases Using Promotion ÷ Eligible Visitors × 100</strong></p>
      <p><strong>Coupon Redemption = Coupons Redeemed ÷ Coupons Distributed × 100</strong></p>
      <p><strong>AOV = Revenue ÷ Orders</strong></p>
      <p><strong>ROI = (Incremental Profit − Promotion Cost) ÷ Promotion Cost × 100</strong></p>
      <p>For accurate analysis, include relevant advertising, discount, fulfillment, and other incremental costs.</p>

      <hr />

      <h2>Promotion Cannibalization</h2>
      <p>Cannibalization occurs when promotional purchases replace purchases that would have happened anyway.</p>
      <p>Example: a business normally sells 1,000 units. During a discount: 1,200 units. The business gained only 1,200 − 1,000 = 200 incremental units. If many of the other 1,000 customers would have purchased at the normal price, the discount may have unnecessarily reduced margin.</p>

      <h3>Important question</h3>
      <p>Don't ask only "How many people used the promotion?" Also ask "How many purchases were actually caused by the promotion?"</p>

      <hr />

      <h2>Discount Dependency</h2>
      <p>Repeated discounts can change customer behavior: frequent discounting → customers expect discounts → customers delay purchases → normal-price sales decline → business runs more promotions → even greater discount expectation (cycle).</p>
      <p>Businesses can reduce this risk by using targeted promotions, loyalty benefits, value-added offers, bundles, exclusive products, limited promotional windows, non-price incentives, and better product differentiation.</p>

      <hr />

      <h2>Discount vs Value-Added Promotion</h2>
      <p>Not every promotion needs to reduce the price.</p>
      <p><strong>Price discount:</strong> ₱2,000 → ₱1,600.</p>
      <p><strong>Value-added offer:</strong> ₱2,000 + free installation.</p>
      <p><strong>Bundle:</strong> Product A + Product B for ₱2,000.</p>
      <p><strong>Free shipping:</strong> ₱2,000 + free delivery.</p>
      <p><strong>Loyalty reward:</strong> ₱2,000 + ₱200 loyalty credit.</p>
      <p>The second group can preserve more of the original selling price while still increasing perceived value.</p>

      <hr />

      <h2>Promotional Pricing System</h2>
      <pre>{`BUSINESS OBJECTIVE
                           │
                           ▼
                   CUSTOMER SEGMENT
                           │
                           ▼
                  PROMOTIONAL OFFER
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
       Discount          Reward          Incentive
          │                │                │
          ▼                ▼                ▼
      First-order       Loyalty          Referral
      Launch            Member           Upgrade
      Seasonal          Renewal          Annual
      Flash             Returning        Pre-order
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                     PROMOTION RULES
                           │
                           ▼
                  CAMPAIGN EXECUTION
                           │
                           ▼
                     CUSTOMER ACTION
                           │
                           ▼
                    DATA COLLECTION
                           │
                           ▼
                REVENUE + MARGIN ANALYSIS
                           │
                           ▼
                  INCREMENTAL IMPACT
                           │
                           ▼
                    KEEP / MODIFY / STOP`}</pre>

      <hr />

      <h2>Complete Promotional Pricing Strategy</h2>
      <p>A strong promotional pricing strategy answers seven questions:</p>
      <ol>
        <li><strong>Who?</strong> Which customer segment is receiving the promotion?</li>
        <li><strong>Why?</strong> What behavior does the business want? First purchase? Repeat purchase? Upgrade? Renewal? Larger order? Referral?</li>
        <li><strong>What?</strong> What incentive will be offered?</li>
        <li><strong>How much?</strong> What discount can the business afford while maintaining acceptable economics?</li>
        <li><strong>How long?</strong> When does the promotion begin and end?</li>
        <li><strong>How will it be measured?</strong> Which metrics determine success?</li>
        <li><strong>What happens afterward?</strong> Does the customer return to normal pricing, become a member, renew, upgrade, or enter another lifecycle campaign?</li>
      </ol>

      <hr />

      <h2>Promotional Pricing Flywheel</h2>
      <pre>{`Identify Objective
       ↓
Select Customer Segment
       ↓
Design Promotion
       ↓
Calculate Economics
       ↓
Launch Campaign
       ↓
Measure Response
       ↓
Analyze Incremental Profit
       ↓
Learn Customer Behavior
       ↓
Improve Future Promotions
       ↺`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Every discount should have a business objective.</li>
        <li>A higher sales volume does not automatically mean higher profit.</li>
        <li>Calculate margins before setting discounts.</li>
        <li>Measure incremental sales, not just total sales.</li>
        <li>Use customer segmentation rather than discounting everyone.</li>
        <li>Set clear eligibility and expiration rules.</li>
        <li>Avoid unnecessary discount frequency.</li>
        <li>Don't create misleading original prices or savings claims.</li>
        <li>Consider using value-added promotions instead of price reductions.</li>
        <li>Connect promotions to the customer lifecycle.</li>
        <li>Track promotion-level revenue and profitability.</li>
        <li>Test different discount levels rather than assuming the largest discount is best.</li>
        <li>Protect the perceived value of the product or service.</li>
        <li>Use promotions to change specific customer behavior, not simply to make products permanently cheaper.</li>
        <li>The best promotional system is one where the incentive creates enough incremental customer value and business profit to justify its cost.</li>
      </ol>
    </LessonLayout>
  )
}
