import LessonLayout from '../components/LessonLayout'

export default function CustomerRetention() {
  return (
    <LessonLayout
      number="03"
      title="Customer Retention"
      summary="10 strategies to keep customers engaged, renewing, and turning into advocates for long-term growth."
    >
      <p>
        Customer retention is the process of keeping existing customers engaged
        with a business so they continue purchasing, subscribing, renewing, or
        using its products and services over time.
      </p>
      <p>
        Acquiring a new customer is only the beginning of the relationship. A
        sustainable business also needs to give customers reasons to remain
        customers.
      </p>
      <p><strong>Prospect → First Purchase → Customer → Repeat Customer → Loyal Customer → Advocate</strong></p>
      <p>Customer retention focuses primarily on what happens after the first purchase.</p>

      <hr />

      <h2>Why Customer Retention Matters</h2>
      <p>Imagine two businesses.</p>
      <p><strong>Business A:</strong> gets 1,000 customers. After one purchase, most never return.</p>
      <p><strong>Business B:</strong> gets 1,000 customers. Many return, renew, purchase additional products, and recommend the business to others.</p>
      <p>Even if both businesses acquire the same number of customers, their long-term revenue can be very different.</p>
      <p>Retention can contribute to:</p>
      <ul>
        <li>Repeat purchases</li>
        <li>Subscription renewals</li>
        <li>Membership renewals</li>
        <li>Higher customer lifetime value</li>
        <li>Referrals</li>
        <li>Lower dependence on constant acquisition</li>
        <li>Stronger customer relationships</li>
      </ul>
      <p>However, retention should not mean trying to keep every customer regardless of circumstances. A healthy retention strategy focuses on delivering continuing value.</p>

      <hr />

      <h2>1. Loyalty Rewards</h2>
      <h3>Definition</h3>
      <p>Loyalty rewards are benefits given to customers for continued purchasing or engagement with a business.</p>
      <p>Rewards may include: points, discounts, cashback, free products, free shipping, vouchers, upgrades, and special gifts.</p>

      <h3>How it works</h3>
      <p>Purchase → Earn points/reward → Accumulate benefits → Redeem → Return to business → Earn more.</p>

      <h3>Example</h3>
      <p>A marketplace creates: every ₱100 spent = 1 point. A customer accumulates 500 points. The business allows 500 points = ₱50 discount. The customer has another reason to purchase from the same marketplace.</p>

      <h3>How to implement</h3>
      <p><strong>Step 1 — Choose the qualifying action.</strong> For example: purchase, review, referral, or membership renewal.</p>
      <p><strong>Step 2 — Determine the reward.</strong> Example: 1 point per ₱100 spent.</p>
      <p><strong>Step 3 — Set redemption rules.</strong> Define minimum points, expiration (if any), eligible products, maximum redemption, and whether points can be combined.</p>
      <p><strong>Step 4 — Make the system visible.</strong> Customers should be able to see: Current points 340, next reward 500 points. This creates a clear understanding of progress.</p>

      <h3>Risk</h3>
      <p>A loyalty program becomes ineffective if customers cannot understand how to earn or use rewards.</p>

      <hr />

      <h2>2. Membership Benefits</h2>
      <h3>Definition</h3>
      <p>Membership benefits are exclusive advantages provided to members of a business's membership program.</p>
      <p>Examples include: member-only discounts, free shipping, exclusive content, priority support, special events, early access, member pricing, and bonus rewards.</p>

      <h3>How it works</h3>
      <p>Customer → Membership → Exclusive benefits → Higher perceived value → Continued relationship.</p>

      <h3>Example</h3>
      <p>A marketplace could offer:</p>
      <p><strong>Free Member:</strong> basic rewards, standard offers.</p>
      <p><strong>Premium Member:</strong> free shipping, exclusive discounts, early access, higher reward points.</p>

      <h3>Important principle</h3>
      <p>A membership should provide ongoing value. If customers don't use the benefits, they may eventually stop participating.</p>

      <hr />

      <h2>3. Exclusive Customer Offers</h2>
      <h3>Definition</h3>
      <p>Exclusive customer offers are promotions available only to existing customers or specific customer groups.</p>
      <p>Examples: "Existing customers receive 15% off their next purchase," or "Private offer: ₱300 off for returning customers."</p>

      <h3>Why it works</h3>
      <p>Customers feel that their existing relationship with the business provides additional value. It can also create a reason to return.</p>

      <h3>Example</h3>
      <p>Someone purchases a laptop from your store. Thirty days later, they receive: Customer Exclusive: 20% off selected laptop accessories. This is more relevant than sending the same promotion to everyone.</p>

      <h3>How to implement</h3>
      <p>Segment customers based on factors such as previous purchases, purchase frequency, product category, membership status, and customer lifecycle stage. Then provide relevant offers.</p>

      <h3>Important</h3>
      <p>"Exclusive" should mean something. If everyone receives the same offer, customers may not perceive it as a genuine exclusive benefit.</p>

      <hr />

      <h2>4. Early-Access Offers</h2>
      <h3>Definition</h3>
      <p>Early access allows existing customers or members to purchase, use, or experience something before the general public.</p>
      <p>Examples: new product releases, limited collections, new software features, event tickets, sales, and special content.</p>

      <h3>Example</h3>
      <p>A company plans to release a new product on October 30. General public: October 30. Existing customers: October 25. Members: October 23. This gives existing customers an additional privilege.</p>

      <h3>How it works</h3>
      <p>New product → Early access group → Existing customers → General public.</p>

      <h3>Why it can improve retention</h3>
      <p>Customers may perceive their relationship with the company as valuable beyond the individual purchase. It creates: "I get something earlier because I'm already a customer."</p>

      <h3>Best use cases</h3>
      <p>Early access is especially useful for products where new releases matter, availability is limited, customers enjoy exclusivity, and product launches generate anticipation.</p>

      <hr />

      <h2>5. Personalized Recommendations</h2>
      <h3>Definition</h3>
      <p>Personalized recommendations are product or content suggestions tailored to an individual customer's interests, behavior, purchases, or stated preferences.</p>
      <p>Instead of showing everyone the same products, the business attempts to show what is more relevant to this particular customer.</p>

      <h3>Example</h3>
      <p>A customer purchases a camera. The business may recommend: compatible memory card, camera bag, extra battery, tripod, lens. The recommendations are related to the customer's purchase.</p>

      <h3>How it works</h3>
      <p>A recommendation system can use signals such as purchase history, browsing behavior, search activity, products viewed, categories of interest, and previous interactions.</p>
      <p>A simple system might use rules. For example: if customer buys Product A → recommend Product B. A more advanced system can use algorithms to identify patterns among many customers.</p>

      <h3>Example</h3>
      <p>A customer frequently purchases running shoes. The platform could highlight: running socks, hydration products, running apparel.</p>

      <h3>Important</h3>
      <p>Personalization should be useful rather than intrusive. Customers should have appropriate controls over marketing communications and personal-data use.</p>

      <hr />

      <h2>6. Customer Follow-Ups</h2>
      <h3>Definition</h3>
      <p>A customer follow-up is communication sent after a purchase or interaction to maintain the relationship, provide assistance, gather feedback, or encourage an appropriate next action.</p>
      <p>Follow-ups can happen through email, SMS, messaging platforms, phone, app notifications, and customer-support systems.</p>

      <h3>Example</h3>
      <p>A customer purchases a website. After deployment, the company sends: "Your website is now live. Here are your login details, maintenance instructions, and support options." Later: "How is the website performing? Is there anything you'd like us to improve?"</p>

      <h3>Types of follow-ups</h3>
      <ul>
        <li><strong>Immediate follow-up</strong> — confirm the purchase.</li>
        <li><strong>Delivery follow-up</strong> — confirm successful delivery.</li>
        <li><strong>Satisfaction follow-up</strong> — ask about the customer's experience.</li>
        <li><strong>Educational follow-up</strong> — teach the customer how to get more value from the product.</li>
        <li><strong>Maintenance follow-up</strong> — remind customers about maintenance or updates.</li>
        <li><strong>Reorder follow-up</strong> — remind customers when they may need to purchase again.</li>
      </ul>

      <h3>Important principle</h3>
      <p>Good follow-up isn't simply "Buy again." It can also be: "How can we help you get more value from what you already purchased?"</p>

      <hr />

      <h2>7. Win-Back Campaigns</h2>
      <h3>Definition</h3>
      <p>A win-back campaign is a targeted effort to re-engage customers who have become inactive or stopped purchasing.</p>
      <p>These customers are sometimes called dormant customers or at-risk customers depending on the business's terminology.</p>

      <h3>Example</h3>
      <p>A customer used your service regularly for six months. Then they haven't purchased anything for 120 days. You send: "We haven't seen you in a while. Here's what's new since your last visit." You could also provide a relevant incentive.</p>

      <h3>How it works</h3>
      <p>Active customer → Reduced activity → Inactive customer → Win-back communication → Returns → Active customer.</p>

      <h3>How to build a win-back campaign</h3>
      <p><strong>Step 1 — Define inactivity.</strong> For example: no purchase for 90 days. The correct period depends on the normal purchasing cycle. A grocery customer might become inactive after a few weeks. A furniture customer might remain inactive for a year and still be normal.</p>
      <p><strong>Step 2 — Identify possible reasons.</strong> Customers may stop purchasing because they no longer need the product, product experience was poor, price changed, competitor offers something different, they forgot, or their circumstances changed.</p>
      <p><strong>Step 3 — Send relevant communication.</strong> Don't assume every inactive customer has the same reason.</p>
      <p><strong>Step 4 — Measure reactivation.</strong> Track: inactive customers contacted → customers who return.</p>

      <h3>Risk</h3>
      <p>Repeated discounts can train customers to wait until you offer a discount. A win-back campaign doesn't always need to be a discount. It could instead highlight new features, new products, better service, improved experience, or useful information.</p>

      <hr />

      <h2>8. Renewal Incentives</h2>
      <h3>Definition</h3>
      <p>A renewal incentive is a benefit designed to encourage a customer to renew a subscription, membership, contract, or service agreement.</p>
      <p>Examples: "Renew for another year and receive 2 additional months," or "Renew before your membership expires and receive bonus points."</p>

      <h3>Where they are used</h3>
      <p>SaaS subscriptions, insurance, memberships, maintenance contracts, hosting, professional services, training programs.</p>

      <h3>How it works</h3>
      <p>Subscription approaching expiration → Renewal reminder → Renewal incentive → Customer renews → Continued revenue.</p>

      <h3>Example</h3>
      <p>A hosting company offers monthly ₱300, annual renewal ₱3,000. The customer receives a lower effective monthly cost by choosing the annual plan.</p>

      <h3>Good renewal process</h3>
      <p>Don't wait until the exact expiration date. A business might communicate 30 days before expiration, 14 days before, 7 days before, and 1 day before. The exact schedule depends on the product and customer relationship.</p>

      <hr />

      <h2>9. Customer Success Programs</h2>
      <h3>Definition</h3>
      <p>A customer success program is a structured approach to helping customers achieve the outcomes they wanted when they purchased the product or service.</p>
      <p>This is especially important in SaaS, B2B, technology, consulting, professional services, and complex products.</p>

      <h3>Customer support vs customer success</h3>
      <p>They are related but different.</p>
      <p><strong>Customer support</strong> usually responds to: "I have a problem." Example: "My account isn't working."</p>
      <p><strong>Customer success</strong> proactively asks: "Are you achieving the result you bought this product for?"</p>
      <p>Example: A company purchases analytics software. Customer support helps when the software breaks. Customer success helps the company understand how to use the platform to improve its reporting process.</p>

      <h3>How it works</h3>
      <p>Customer purchases → Onboarding → Training → Usage → Progress monitoring → Problem identification → Optimization → Renewal/Expansion.</p>

      <h3>Customer success activities</h3>
      <ul>
        <li><strong>Onboarding</strong> — help the customer get started.</li>
        <li><strong>Training</strong> — teach customers how to use important features.</li>
        <li><strong>Check-ins</strong> — ask whether they are achieving their goals.</li>
        <li><strong>Usage monitoring</strong> — identify customers who aren't using important features.</li>
        <li><strong>Education</strong> — provide guides, webinars, tutorials, or best practices.</li>
        <li><strong>Success reviews</strong> — for larger clients, periodically review outcomes and future needs.</li>
      </ul>

      <h3>Example</h3>
      <p>A company purchases inventory software. The customer's objective is to reduce manual inventory work. A customer-success team might help them: import inventory, configure categories, train employees, set up reports, review usage, identify unused features, and optimize their workflow.</p>
      <p>The goal is not simply to make the customer have the software. The goal is to help them achieve value from it.</p>

      <hr />

      <h2>10. Post-Purchase Support</h2>
      <h3>Definition</h3>
      <p>Post-purchase support is assistance provided after a customer has bought a product or service.</p>
      <p>It may include: technical support, installation, troubleshooting, returns, repairs, documentation, tutorials, maintenance, warranty service, and account assistance.</p>

      <h3>How it works</h3>
      <p>Purchase → Delivery → Setup → Usage → Support → Problem resolution → Customer confidence.</p>

      <h3>Example</h3>
      <p>A customer purchases a computer. Post-purchase support could include setup assistance, driver installation, warranty information, troubleshooting, and maintenance instructions.</p>
      <p>For a website-development company: website deployment, bug fixes, documentation, technical assistance, and security updates.</p>

      <h3>Why it matters</h3>
      <p>A customer doesn't judge the entire relationship only by the moment they purchase. Their experience can continue through: delivery → setup → usage → support → renewal. Poor post-purchase support can make a customer reluctant to buy again.</p>

      <hr />

      <h2>The Customer Retention Lifecycle</h2>
      <p>These strategies work together. A complete retention system might look like:</p>
      <pre>{`FIRST PURCHASE
                       │
                       ▼
              POST-PURCHASE SUPPORT
                       │
                       ▼
                  ONBOARDING
                       │
                       ▼
              CUSTOMER FOLLOW-UP
                       │
                       ▼
             CUSTOMER SUCCESS
                       │
                       ▼
             LOYALTY REWARDS
                       │
              ┌────────┴────────┐
              ▼                 ▼
       EXCLUSIVE OFFERS    EARLY ACCESS
              │                 │
              └────────┬────────┘
                       ▼
            PERSONALIZED OFFERS
                       │
                       ▼
               REPEAT PURCHASE
                       │
                       ▼
                 LOYAL CUSTOMER
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
          RENEWAL              REFERRAL
             │                   ▼
             ▼                   ▼
        RETAINED CUSTOMER    NEW CUSTOMER`}</pre>

      <hr />

      <h2>Retention Segmentation</h2>
      <p>Not every customer should receive the same treatment. A business can divide customers into groups.</p>
      <p><strong>New Customers</strong> — recently purchased. Focus on onboarding, support, education, follow-up.</p>
      <p><strong>Active Customers</strong> — purchase regularly. Focus on loyalty rewards, recommendations, exclusive offers, early access.</p>
      <p><strong>High-Value Customers</strong> — generate significant business value. Focus on personalized service, priority support, exclusive benefits, customer success.</p>
      <p><strong>At-Risk Customers</strong> — their activity is declining. Focus on personal follow-up, customer-success intervention, problem identification, relevant offers.</p>
      <p><strong>Dormant Customers</strong> — have stopped engaging. Focus on win-back campaigns, new-product announcements, feedback, carefully selected incentives.</p>

      <hr />

      <h2>Important Customer Retention Metrics</h2>
      <p>Retention should be measurable.</p>

      <h3>1. Customer Retention Rate</h3>
      <p><strong>Retention Rate = (Customers at End − New Customers) ÷ Customers at Start × 100</strong></p>
      <p>Example: start 1,000, end 900, new customers acquired 200. Then (900 − 200) ÷ 1,000 × 100 = 70%. The exact calculation can vary depending on the business model and measurement period.</p>

      <h3>2. Churn Rate</h3>
      <p><strong>Customers Lost ÷ Customers at Start × 100</strong></p>
      <p>If you start with 1,000 customers and 50 leave: 50 ÷ 1,000 × 100 = 5% churn.</p>
      <p>Retention and churn are closely related but aren't always exact mathematical opposites because definitions and customer acquisition during the period matter.</p>

      <h3>3. Repeat Purchase Rate</h3>
      <p>Measures the proportion of customers who purchase again. Example: 1,000 customers made an initial purchase, 300 purchased again. Repeat purchase rate = 30%.</p>

      <h3>4. Renewal Rate</h3>
      <p><strong>Renewed Customers ÷ Customers Eligible for Renewal × 100</strong></p>
      <p>Example: 500 subscriptions reach renewal, 400 renew. 400 ÷ 500 × 100 = 80% renewal rate.</p>

      <h3>5. Customer Lifetime Value</h3>
      <p>Customer Lifetime Value (LTV/CLV) estimates the economic value associated with a customer over their relationship with the business. Retention can have a major effect on this value because a customer who remains longer may have more opportunities to purchase.</p>

      <h3>6. Engagement Rate</h3>
      <p>Depending on the business, engagement can measure product usage, app activity, email interaction, content consumption, purchases, and feature usage.</p>
      <p>For SaaS businesses, for example, a customer who logs in regularly and uses important features may show stronger engagement than someone who rarely uses the product.</p>

      <h3>7. Customer Satisfaction</h3>
      <p>Businesses can measure satisfaction through surveys, ratings, customer interviews, support feedback, and product reviews.</p>
      <p>One commonly used metric is Customer Satisfaction Score (CSAT). Customers may be asked: "How satisfied were you with your experience?" The business then calculates the percentage of respondents giving a positive rating according to its chosen methodology.</p>

      <hr />

      <h2>Customer Retention Is More Than Discounts</h2>
      <p>One of the most important principles is: retention is not simply giving customers discounts.</p>
      <p>A discount can encourage another purchase, but long-term retention usually depends on the customer continuing to receive value.</p>
      <p>Consider a software company. It could offer 50% off renewal. But if the software doesn't solve the customer's problem, the discount may only delay cancellation.</p>
      <p>A stronger approach is: improve the product → help customers succeed → provide support → demonstrate value → give relevant benefits → make renewal easy.</p>

      <hr />

      <h2>The Retention Flywheel</h2>
      <p>A mature business can create a cycle:</p>
      <pre>{`┌──────────────┐
             │   PURCHASE   │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │    VALUE     │
             │  DELIVERY    │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │   SUPPORT    │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │  ENGAGEMENT  │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │    REPEAT    │
             │   PURCHASE   │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │    LOYALTY   │
             └──────┬───────┘
                    ↓
             ┌──────────────┐
             │   REFERRAL   │
             └──────┬───────┘
                    │
                    └────→ NEW CUSTOMERS`}</pre>
      <p>The customer becomes more than a purchaser. They can become a repeat customer and potentially a source of new customers.</p>

      <hr />

      <h2>Combining Retention With Sales and Acquisition</h2>
      <p>Your previous sections on Customer Acquisition and Sales & Revenue connect directly with retention.</p>
      <p>The overall business system can be viewed as:</p>
      <pre>{`BUSINESS
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      ACQUISITION     SALES      RETENTION
          │            │            │
          ▼            ▼            ▼
     Find Customers  Convert    Keep Customers
          │            │            │
          └────────────┼────────────┘
                       ▼
                 CUSTOMER VALUE
                       │
              ┌────────┴────────┐
              ▼                 ▼
        Repeat Revenue       Referrals
              │                 │
              └────────┬────────┘
                       ▼
                BUSINESS GROWTH`}</pre>

      <hr />

      <h2>Practical Example: Xmarket</h2>
      <p>Imagine a marketplace called Xmarket. A customer makes their first purchase.</p>
      <p><strong>Step 1 — Post-purchase support.</strong> Xmarket provides order confirmation, delivery tracking, customer support, and return information.</p>
      <p><strong>Step 2 — Follow-up.</strong> After delivery: "How was your order?"</p>
      <p><strong>Step 3 — Personalized recommendations.</strong> Based on the customer's previous purchase, the marketplace displays relevant products.</p>
      <p><strong>Step 4 — Loyalty rewards.</strong> The customer earns points for qualifying purchases.</p>
      <p><strong>Step 5 — Exclusive offers.</strong> Returning customers receive special promotions.</p>
      <p><strong>Step 6 — Early access.</strong> Existing customers can see selected new products before the general public.</p>
      <p><strong>Step 7 — Membership.</strong> Customers can optionally join a membership program with additional benefits.</p>
      <p><strong>Step 8 — Renewal.</strong> If the customer has a subscription or membership, they receive appropriate renewal reminders and incentives.</p>
      <p><strong>Step 9 — Win-back.</strong> If the customer becomes inactive, Xmarket sends a relevant re-engagement campaign.</p>
      <p><strong>Step 10 — Referral.</strong> The customer receives a referral code and can earn a reward for bringing in another customer.</p>
      <p>This creates a complete lifecycle: acquire → purchase → support → engage → reward → retain → refer → acquire.</p>

      <hr />

      <h2>Quick Reference Table</h2>
      <ul>
        <li><strong>Loyalty rewards</strong> — Encourage repeat activity — Points/rewards</li>
        <li><strong>Membership benefits</strong> — Increase ongoing value — Exclusive privileges</li>
        <li><strong>Exclusive customer offers</strong> — Encourage return purchases — Targeted offers</li>
        <li><strong>Early-access offers</strong> — Reward customer relationship — Priority access</li>
        <li><strong>Personalized recommendations</strong> — Increase relevance — Customer-specific suggestions</li>
        <li><strong>Customer follow-ups</strong> — Maintain relationship — Communication</li>
        <li><strong>Win-back campaigns</strong> — Reactivate inactive customers — Re-engagement</li>
        <li><strong>Renewal incentives</strong> — Encourage continuation — Renewal benefits</li>
        <li><strong>Customer success programs</strong> — Help customers achieve outcomes — Proactive assistance</li>
        <li><strong>Post-purchase support</strong> — Ensure successful product use — Service/support</li>
      </ul>

      <hr />

      <h2>The Customer Retention Formula</h2>
      <p><strong>Retention = Value + Trust + Convenience + Engagement + Relationship</strong></p>
      <p><strong>Value</strong> — the product continues solving the customer's problem.</p>
      <p><strong>Trust</strong> — the business delivers what it promises and handles problems responsibly.</p>
      <p><strong>Convenience</strong> — purchasing, renewing, receiving support, and using the product are easy.</p>
      <p><strong>Engagement</strong> — the customer continues interacting with the product or business.</p>
      <p><strong>Relationship</strong> — the customer feels that the business understands and supports their needs.</p>
      <p>No single retention technique can replace a poor product or poor customer experience.</p>

      <hr />

      <h2>Final Retention Framework</h2>
      <p>A strong customer-retention strategy can therefore follow this sequence:</p>
      <ol>
        <li>Deliver the product correctly.</li>
        <li>Help the customer get started.</li>
        <li>Provide post-purchase support.</li>
        <li>Follow up.</li>
        <li>Help the customer achieve their desired outcome.</li>
        <li>Personalize relevant experiences.</li>
        <li>Reward continued engagement.</li>
        <li>Give loyal customers additional benefits.</li>
        <li>Encourage renewal or repeat purchases.</li>
        <li>Identify inactive customers.</li>
        <li>Run appropriate win-back campaigns.</li>
        <li>Turn satisfied customers into referral sources.</li>
      </ol>
      <p>The central principle is simple: customer acquisition brings people into the business. Sales convert interest into transactions. Customer retention gives customers a reason to continue the relationship.</p>
      <p>When these three systems work together, a business moves from constantly searching for new customers toward building a long-term customer base that generates repeat revenue and can contribute to future growth.</p>
    </LessonLayout>
  )
}
