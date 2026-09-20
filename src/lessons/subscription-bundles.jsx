import LessonLayout from '../components/LessonLayout'

export default function SubscriptionBundles() {
  return (
    <LessonLayout
      number="40"
      title="Subscription Bundles"
      summary="10 subscription bundle types to build recurring revenue through combined product access, capacity, and support."
    >
      <h2>Subscription Bundle</h2>
      <h3>Definition</h3>
      <p>
        A subscription bundle combines a recurring subscription with multiple
        products, services, features, usage allowances, or support benefits for
        a recurring fee.
      </p>
      <p>Instead of charging separately (software ₱500/month, storage ₱200/month, support ₱300/month, analytics ₱200/month), a business can offer a subscription bundle at ₱999/month. The customer gets a more complete solution, while the business creates recurring revenue.</p>

      <h3>Core subscription model</h3>
      <p><strong>Recurring Revenue = Active Subscribers × Average Revenue Per Subscriber</strong>. Example: 1,000 subscribers × ₱500/month = ₱500,000 MRR.</p>

      <h3>Subscription bundle architecture</h3>
      <p>Subscription branches into customer type (family, team, business), value level (basic, premium), and service component (support, storage, analytics, consultation, training). A subscription bundle can therefore be designed according to who is buying, how much value they need, or what additional services they require.</p>

      <hr />

      <h2>1. Basic Subscription Bundle</h2>
      <h3>Definition</h3>
      <p>A basic subscription bundle provides the essential features and services needed to use a product or platform on a recurring basis. It is usually the entry-level paid subscription.</p>
      <p>Example: web platform Basic ₱299/month with 1 user, basic features, 5 GB storage, basic analytics, email support, and standard updates.</p>

      <h3>Purpose</h3>
      <p>The basic plan should answer: what is the minimum useful recurring service we can provide? It should still provide genuine value rather than being intentionally crippled.</p>

      <h3>Benefits</h3>
      <p>Low entry barrier, easier customer acquisition, creates a path toward upgrades, captures price-sensitive customers, and establishes recurring revenue.</p>

      <h3>Risks</h3>
      <p>If too many essential features are excluded, customers may not see enough reason to subscribe.</p>

      <hr />

      <h2>2. Family Subscription</h2>
      <h3>Definition</h3>
      <p>A family subscription allows multiple members of a household to access a service under one recurring subscription.</p>
      <p>Example: Family Plan ₱499/month with up to 5 members, individual profiles, shared subscription, family controls, and multiple-device access.</p>

      <h3>Pricing logic</h3>
      <p>Instead of 5 × ₱199 = ₱995, the business might offer family at ₱499/month. The exact pricing should reflect usage, costs, and customer value.</p>

      <h3>Benefits</h3>
      <p>Higher number of users per account, increased household penetration, convenient billing, potentially stronger retention, and encourages family-wide adoption.</p>

      <h3>Risks</h3>
      <p>Account sharing beyond permitted members, higher support costs, greater usage, capacity requirements, and abuse of plan limits. Clear account and usage rules are important.</p>

      <hr />

      <h2>3. Team Subscription</h2>
      <h3>Definition</h3>
      <p>A team subscription provides multiple users with shared access to a service, usually with collaboration and administrative features.</p>
      <p>Example: Team Plan ₱1,499/month with up to 10 users, shared workspace, team projects, admin controls, collaboration tools, usage analytics, and standard support.</p>

      <h3>Team structure</h3>
      <p>Team account branches into admin, users, and manager, all leading to a shared workspace.</p>

      <h3>Common team pricing models</h3>
      <p><strong>Per seat:</strong> Price = Users × Price Per Seat. <strong>Seat tier:</strong> up to 10 users = ₱1,499/month. <strong>Usage-based:</strong> price depends on storage, API calls, transactions, etc.</p>

      <h3>Benefits</h3>
      <p>Higher account value, natural expansion as teams grow, strong collaboration use case, and potentially lower churn when multiple people depend on the service.</p>

      <hr />

      <h2>4. Business Subscription</h2>
      <h3>Definition</h3>
      <p>A business subscription is designed for organizations that require business-oriented functionality such as administration, reporting, integrations, security, support, or multiple users.</p>
      <p>Example: Business ₱2,999/month with up to 20 users, advanced analytics, team management, business reports, API access, priority support, data export, and administrative controls.</p>

      <h3>Business subscription value</h3>
      <p>Individual user → team → business → operational system. The subscription becomes part of the company's workflow rather than simply being an individual tool.</p>

      <h3>Important features</h3>
      <p>Business customers may value reliability, security, access control, integrations, reporting, administration, support, and scalability.</p>

      <hr />

      <h2>5. Premium Subscription</h2>
      <h3>Definition</h3>
      <p>A premium subscription provides additional functionality, capacity, service levels, or benefits compared with lower subscription tiers.</p>
      <p>Example: Premium ₱999/month with unlimited eligible projects, 100 GB storage, advanced analytics, priority support, advanced customization, premium features, and early access to selected features.</p>
      <p>Premium architecture: features (advanced tools), capacity (higher limits), and service (priority support).</p>

      <h3>Important principle</h3>
      <p>Premium should provide meaningfully greater value, not merely a higher price.</p>

      <hr />

      <h2>6. Software + Support</h2>
      <h3>Definition</h3>
      <p>A software + support subscription combines recurring software access with ongoing technical or customer support.</p>
      <p>Example: Business Software + Support ₱1,500/month with software access, updates, email support, troubleshooting, and technical documentation. A higher tier might include priority support + faster response times.</p>

      <h3>Why it works</h3>
      <p>Software customers may not simply want access to software. They want: "I want the software to keep working when I need it."</p>

      <h3>Support levels</h3>
      <p>Basic → documentation. Standard → email support. Priority → faster support. Dedicated → assigned support contact.</p>

      <h3>Metrics</h3>
      <p>Track support tickets per subscriber, average response time, resolution time, support cost per subscriber, customer satisfaction, and churn rate.</p>

      <hr />

      <h2>7. Software + Storage</h2>
      <h3>Definition</h3>
      <p>A software + storage subscription combines software access with a recurring storage allocation.</p>
      <p>Example: Creator Plan ₱599/month with editing software, 100 GB cloud storage, automatic backup, and file synchronization.</p>

      <h3>Storage-based pricing</h3>
      <p>The subscription can scale according to storage: 50 GB ₱299/month, 200 GB ₱599/month, 1 TB ₱1,299/month.</p>

      <h3>Benefits</h3>
      <p>Clear value metric, easy tier differentiation, natural upgrade path, and recurring revenue.</p>

      <h3>Risks</h3>
      <p>Storage has real infrastructure costs. Monitor <strong>Storage Cost Per User</strong> and <strong>Gross Margin = (Revenue − Variable Costs) ÷ Revenue × 100</strong>. Heavy users can become significantly more expensive to serve.</p>

      <hr />

      <h2>8. Software + Analytics</h2>
      <h3>Definition</h3>
      <p>A software + analytics subscription combines a software product with reporting, dashboards, insights, or performance analytics.</p>
      <p>Example: Business Platform ₱1,999/month with business software, sales dashboard, customer analytics, product reports, conversion tracking, and exportable reports.</p>

      <h3>Analytics levels</h3>
      <p>Data → descriptive ("What happened?") → diagnostic ("Why did it happen?") → predictive ("What may happen?") → prescriptive ("What should we consider doing?"). The actual capabilities depend on the software.</p>

      <h3>Benefits</h3>
      <p>Analytics can make software more valuable because customers can use the data to understand their operations.</p>

      <h3>Risks</h3>
      <p>Poor data quality, misleading metrics, complex dashboards, privacy/security requirements, and analytics infrastructure costs.</p>

      <hr />

      <h2>9. Software + Consultation</h2>
      <h3>Definition</h3>
      <p>A software + consultation subscription combines recurring software access with recurring expert guidance.</p>
      <p>Example: Business Growth Platform ₱3,500/month with software platform, analytics, monthly consultation, strategy review, performance discussion, and recommendations.</p>

      <h3>Customer journey</h3>
      <p>Software → customer data → analytics → consultation → interpretation → recommended actions → implementation → new data. This creates a continuous improvement loop.</p>

      <h3>Benefits</h3>
      <p>Higher perceived value, stronger customer relationship, better product adoption, recurring service revenue, and opportunity for customer success.</p>

      <h3>Risks</h3>
      <p>Consultation is labor-intensive. If the customer pays ₱3,500/month but requires ₱3,000 worth of labor every month, the subscription may not be economically sustainable. Therefore, define the number and duration of consultations included. For example: 1 × 60-minute consultation/month.</p>

      <hr />

      <h2>10. Software + Training</h2>
      <h3>Definition</h3>
      <p>A software + training subscription combines software access with ongoing educational resources, onboarding, courses, workshops, or training sessions.</p>
      <p>Example: Professional Software Plan ₱1,299/month with software, beginner course, advanced tutorials, monthly training webinar, knowledge base, and setup documentation.</p>
      <p>Training structure: software → onboarding → basic training → advanced training → ongoing education.</p>

      <h3>Benefits</h3>
      <p>Faster customer onboarding, better feature adoption, reduced support burden, greater perceived value, and helps customers achieve better outcomes.</p>

      <h3>Risks</h3>
      <p>Training must be maintained as the software changes. Outdated tutorials can cause confusion.</p>

      <hr />

      <h2>Subscription Bundle Comparison</h2>
      <ul>
        <li>Basic — essential access — individual</li>
        <li>Family — shared household access — family</li>
        <li>Team — collaboration — small team</li>
        <li>Business — business functionality — organization</li>
        <li>Premium — advanced value — advanced users</li>
        <li>Software + support — assistance — users needing help</li>
        <li>Software + storage — capacity — data-heavy users</li>
        <li>Software + analytics — insights — data-driven users</li>
        <li>Software + consultation — expert guidance — businesses/professionals</li>
        <li>Software + training — skill development — new/learning users</li>
      </ul>

      <hr />

      <h2>Subscription Bundles vs Normal Service Bundles</h2>
      <p>A normal service package might be: website development ₱20,000 one time. A subscription bundle could be: website + hosting + maintenance + support ₱1,999/month.</p>
      <p><strong>One-time:</strong> Revenue = One Purchase.</p>
      <p><strong>Subscription:</strong> Revenue = Recurring Payments.</p>
      <p>The subscription model shifts the business from primarily transactional revenue toward recurring revenue.</p>

      <hr />

      <h2>Subscription Bundle Economics</h2>
      <p><strong>MRR = Active Subscribers × ARPC</strong>. If 1,000 subscribers at ₱500 average monthly revenue: MRR = ₱500,000.</p>
      <p><strong>ARR = MRR × 12</strong>. So ₱500,000 × 12 = ₱6,000,000. This assumes the current recurring revenue level remains stable.</p>

      <hr />

      <h2>Churn</h2>
      <p><strong>Customer Churn = Customers Lost During Period ÷ Customers at Start of Period × 100</strong>. Example: start 1,000 subscribers, lost 40. Churn = 4%. Lower churn generally means more customers remain subscribed, but the appropriate benchmark depends heavily on the business model.</p>

      <hr />

      <h2>Subscriber Retention</h2>
      <p><strong>Retention Rate = 100% − Churn Rate</strong>. If churn is 4%: retention = 96%. For subscription analysis, it's useful to examine retention by customer type, package, acquisition channel, cohort, usage level, geography, and contract duration.</p>

      <hr />

      <h2>Customer Lifetime Value</h2>
      <p><strong>LTV ≈ (ARPC × Gross Margin) ÷ Monthly Churn</strong></p>
      <p>Example: ARPC ₱500, gross margin 80%, monthly churn 4%. LTV ≈ (₱500 × 0.80) ÷ 0.04 = ₱10,000. This is a simplified model and becomes less reliable when pricing, margins, churn, or customer behavior change substantially over time.</p>

      <hr />

      <h2>Subscription Bundle Upgrade System</h2>
      <p>Subscription bundles work particularly well when customers can naturally progress between tiers: basic → team (more users) → business (more business features) → premium (more capacity/support) → enterprise (complex requirements). The upgrade should be driven by a genuine increase in customer requirements.</p>

      <hr />

      <h2>Hybrid Subscription Bundle</h2>
      <p>A subscription can combine multiple components. For example: Business Pro ₱2,999/month with software + 100 GB storage + advanced analytics + priority support + 1 consultation/month + training library. The customer receives a complete ecosystem instead of purchasing every component separately.</p>

      <hr />

      <h2>Modular Subscription Architecture</h2>
      <p>Another approach is to let customers add modules. Core software branches into storage, analytics, and support, then into consultation, training, and automation. Example: core ₱499/month. Optional: storage +₱100, analytics +₱200, support +₱300, training +₱150. This is effectively a subscription + add-on architecture.</p>

      <hr />

      <h2>Bundled vs Modular Subscription</h2>
      <p><strong>Bundled:</strong> multiple features included; simple decision; easier marketing; predictable package; may include unused features.</p>
      <p><strong>Modular:</strong> customer selects components; more flexibility; more customization; more complex pricing; customers pay for selected features.</p>
      <p>A hybrid approach is often useful: core package + optional modules.</p>

      <hr />

      <h2>Subscription Bundle Risks</h2>
      <p><strong>1. Low-usage customers.</strong> A customer may pay ₱500/month but consume very little. This can be profitable if service costs are low, but the business should understand usage patterns.</p>
      <p><strong>2. High-usage customers.</strong> The opposite problem occurs when a customer consumes significantly more resources than expected. Examples: large storage, excessive support, heavy API usage, high bandwidth, frequent consultations. Usage limits or appropriate pricing structures can help control this.</p>
      <p><strong>3. Feature creep.</strong> Adding more and more features to retain customers can increase development costs, support costs, infrastructure costs, and product complexity.</p>
      <p><strong>4. Support cost.</strong> A subscription can appear profitable until support labor is included. Track <strong>Support Cost per Subscriber = Total Support Cost ÷ Active Subscribers</strong>.</p>
      <p><strong>5. Churn.</strong> Acquiring subscribers is only part of the business. The recurring model depends heavily on customers continuing to perceive value.</p>

      <hr />

      <h2>Subscription Bundle Metrics Dashboard</h2>
      <ul>
        <li>MRR — monthly recurring revenue</li>
        <li>ARR — annualized recurring revenue</li>
        <li>ARPC — average revenue per customer</li>
        <li>Churn — customers lost</li>
        <li>Retention — customers retained</li>
        <li>LTV — estimated customer value</li>
        <li>CAC — acquisition cost</li>
        <li>LTV:CAC — customer economics</li>
        <li>Upgrade Rate — customers moving upward</li>
        <li>Downgrade Rate — customers moving downward</li>
        <li>Expansion Revenue — additional recurring revenue</li>
        <li>Support Cost — cost of serving subscribers</li>
        <li>Gross Margin — revenue after direct costs</li>
        <li>Active Users — actual product usage</li>
        <li>Feature Adoption — use of included features</li>
      </ul>

      <hr />

      <h2>Subscription Bundle Flywheel</h2>
      <pre>{`ATTRACT CUSTOMER
                        ↓
                  STARTER / BASIC
                        ↓
                  PRODUCT ADOPTION
                        ↓
                FEATURE UTILIZATION
                        ↓
                 CUSTOMER SUCCESS
                        ↓
                    RETENTION
                        ↓
                 MORE USAGE / NEED
                        ↓
                     UPGRADE
                        ↓
                HIGHER RECURRING
                     REVENUE
                        ↓
                 BETTER PRODUCT
                        ↓
                STRONGER VALUE
                        ↓
                  MORE CUSTOMERS
                        ↺`}</pre>

      <hr />

      <h2>Example: Xmarket Subscription Ecosystem</h2>
      <p>A marketplace such as Xmarket could potentially use subscription bundles for sellers rather than only shoppers.</p>
      <p><strong>Basic Seller</strong> ₱299/month with product listings, basic seller dashboard, and standard support.</p>
      <p><strong>Professional Seller</strong> ₱799/month with more listings, advanced analytics, promotional tools, and priority support.</p>
      <p><strong>Business Seller</strong> ₱1,499/month with higher listing limits, advanced analytics, sales reports, team accounts, API access, and business support.</p>
      <p><strong>Seller + Analytics:</strong> marketplace access + advanced sales analytics.</p>
      <p><strong>Seller + Training:</strong> marketplace access + seller education + tutorials.</p>
      <p><strong>Seller + Consultation:</strong> marketplace access + monthly business consultation.</p>
      <p>This creates a subscription ecosystem around the core marketplace service.</p>

      <hr />

      <h2>Complete Subscription Bundle System</h2>
      <pre>{`CORE SOFTWARE
                            │
                            ↓
                    CHOOSE CUSTOMER TYPE
                            │
          ┌─────────────────┼─────────────────┐
          ↓                 ↓                 ↓
       INDIVIDUAL         FAMILY            TEAM
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ↓
                        BUSINESS
                            │
                            ↓
                         PREMIUM
                            │
                            ↓
                       ENTERPRISE
                            │
                            ↓
                  ADD COMPLEMENTARY VALUE
                            │
       ┌────────────────────┼────────────────────┐
       ↓                    ↓                    ↓
    SUPPORT              STORAGE             ANALYTICS
       │                    │                    │
       ↓                    ↓                    ↓
 CONSULTATION           TRAINING            OTHER MODULES
       │                    │                    │
       └────────────────────┼────────────────────┘
                            ↓
                     SUBSCRIPTION PRICE
                            ↓
                       BILLING CYCLE
                            ↓
                         DELIVERY
                            ↓
                      CUSTOMER SUCCESS
                            ↓
                    RETENTION / UPGRADE
                            ↓
                      RECURRING REVENUE`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Bundle around recurring customer needs.</li>
        <li>Make each subscription tier meaningfully different.</li>
        <li>Keep the entry-level plan useful.</li>
        <li>Use higher tiers for genuine increases in value, capacity, or service.</li>
        <li>Match pricing to a measurable value metric where possible.</li>
        <li>Account for infrastructure, labor, support, and service costs.</li>
        <li>Define usage limits clearly.</li>
        <li>Separate included services from paid add-ons.</li>
        <li>Monitor churn as carefully as acquisition.</li>
        <li>Track customer usage and feature adoption.</li>
        <li>Use training and consultation to improve customer outcomes, not simply to inflate the package.</li>
        <li>Make upgrades happen because customer needs increase, not because essential functionality is artificially withheld.</li>
        <li>Continuously compare recurring revenue against the cost of serving subscribers.</li>
        <li>Design the subscription around long-term customer value rather than only the initial sale.</li>
      </ol>

      <h3>The fundamental model</h3>
      <p><strong>Recurring Product + Complementary Services + Clear Customer Value + Sustainable Unit Economics + Retention = Strong Subscription Bundle</strong></p>
      <p>A subscription bundle is ultimately more than "several things for one monthly price." It is a recurring system where the customer continuously receives a combination of product access, capacity, support, expertise, education, and other complementary value, while the business builds predictable recurring revenue.</p>
    </LessonLayout>
  )
}
