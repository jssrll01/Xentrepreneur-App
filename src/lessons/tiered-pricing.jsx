import LessonLayout from '../components/LessonLayout'

export default function TieredPricing() {
  return (
    <LessonLayout
      number="31"
      title="Tiered Pricing"
      summary="11 tier structures to serve different customer segments with clear upgrade paths and sustainable economics."
    >
      <h2>Tiered Pricing</h2>
      <h3>Definition</h3>
      <p>
        Tiered pricing is a pricing strategy where a business offers multiple
        versions of the same core product or service at different price points,
        with each tier providing a different combination of features, capacity,
        usage limits, support, quality, access, convenience, number of users,
        service level, or benefits.
      </p>
      <p>Instead of offering only one price (one product → one price), a business creates a structured set of choices: one product/service branches into basic, standard, and premium. The purpose is to allow customers with different needs and budgets to choose an appropriate level.</p>

      <h3>Tiered pricing architecture</h3>
      <p>Product → common core value → entry, mid, premium → limited features, more features, maximum value → lower, medium, higher price. The tiers should be differentiated in ways customers actually care about.</p>

      <hr />

      <h2>1. Basic / Standard / Premium</h2>
      <h3>Definition</h3>
      <p>Basic / Standard / Premium is one of the most widely used tier structures: basic (core functionality), standard (core + additional value), premium (maximum functionality/value).</p>

      <h3>Example</h3>
      <p>A web-development service: basic 1-page website ₱8,000; standard 5-page website + forms ₱20,000; premium 10-page website + advanced features ₱40,000.</p>

      <h3>Basic</h3>
      <p>Designed for customers who need the essential solution. Possible characteristics: fewer features, lower limits, standard support, lower price.</p>

      <h3>Standard</h3>
      <p>Designed for customers who need more functionality. Possible characteristics: more features, higher limits, better support, more customization.</p>

      <h3>Premium</h3>
      <p>Designed for customers with more advanced requirements. Possible characteristics: full feature set, higher limits, priority support, advanced customization, additional services.</p>

      <h3>Benefits</h3>
      <p>Easy to understand, covers multiple customer segments, creates a clear upgrade path, and makes price differences easier to evaluate.</p>

      <h3>Risk</h3>
      <p>If Basic is intentionally made unusable, customers may perceive the pricing as manipulative.</p>

      <hr />

      <h2>2. Bronze / Silver / Gold</h2>
      <h3>Definition</h3>
      <p>Bronze / Silver / Gold uses a status-oriented naming system to represent increasing levels of benefits. Sometimes additional levels are added: bronze, silver, gold, platinum, diamond.</p>

      <h3>Example</h3>
      <p>A membership program: bronze ₱199/month (5% member discount); silver ₱399/month (10% discount + early access); gold ₱699/month (15% discount + priority support).</p>

      <h3>Best use</h3>
      <p>This structure works particularly well when the product involves membership, loyalty, benefits, status, customer privileges, or service levels.</p>

      <h3>Benefits</h3>
      <p>Easy to communicate, creates progression, can make membership feel structured, and works well for loyalty systems.</p>

      <h3>Risks</h3>
      <p>Names do not explain what customers actually receive, customers may not understand the difference between tiers, and too many levels can create confusion. Therefore, the name should be supported by clear benefit descriptions.</p>

      <hr />

      <h2>3. Starter / Professional / Enterprise</h2>
      <h3>Definition</h3>
      <p>Starter / Professional / Enterprise is commonly used for software, technology, agencies, and business services. The tiers represent increasing organizational complexity: starter (small/early-stage users), professional (growing/advanced users), enterprise (large/complex organizations).</p>

      <h3>Example</h3>
      <p>A SaaS platform: starter (small business) ₱499/month; professional (growing business) ₱1,499/month; enterprise (large organization) custom pricing.</p>

      <h3>Starter</h3>
      <p>May include: core features, limited users, basic support, lower usage limits.</p>

      <h3>Professional</h3>
      <p>May include: advanced features, more users, analytics, integrations, priority support.</p>

      <h3>Enterprise</h3>
      <p>May include: large user capacity, advanced security, dedicated support, custom integrations, service agreements, custom contracts.</p>

      <h3>Enterprise pricing</h3>
      <p>Enterprise pricing is often not publicly fixed because requirements can vary significantly. It may depend on number of users, usage, implementation, security requirements, support requirements, customization, and contract length.</p>

      <h3>Benefits</h3>
      <p>This structure naturally maps pricing to customer growth. Small customer → starter → business growth → professional → organizational scale → enterprise.</p>

      <hr />

      <h2>4. Good / Better / Best</h2>
      <h3>Definition</h3>
      <p>Good / Better / Best presents three progressively stronger offers without necessarily using technical or status-oriented names: good (meets basic need), better (adds meaningful value), best (provides maximum value).</p>

      <h3>Example</h3>
      <p>A photography service: good (2-hour session), better (4-hour session + edited photos), best (full-day coverage + album + premium editing).</p>

      <h3>Why it works</h3>
      <p>It focuses attention on the relative value between choices. The customer can compare: what do I get? What more do I get by upgrading? Is the extra value worth the extra price?</p>

      <h3>Important principle</h3>
      <p>The middle and upper tiers should contain real incremental value, not artificial feature restrictions.</p>

      <hr />

      <h2>5. Essential / Plus / Pro</h2>
      <h3>Definition</h3>
      <p>Essential / Plus / Pro emphasizes increasing functionality while keeping the naming relatively product-neutral: essential (necessary core features), plus (additional capabilities), pro (advanced capabilities).</p>

      <h3>Example</h3>
      <p>A design software product: essential (basic design tools), plus (advanced templates + collaboration), pro (advanced tools + automation + analytics).</p>

      <h3>Suitable for</h3>
      <p>SaaS, apps, digital services, professional tools, memberships.</p>

      <h3>Benefits</h3>
      <p>Modern naming, easy progression, does not imply that the lowest tier is poor, and "Pro" naturally communicates advanced functionality.</p>

      <hr />

      <h2>6. Free / Pro / Business</h2>
      <h3>Definition</h3>
      <p>Free / Pro / Business combines a free entry tier with progressively more advanced paid tiers: free (low barrier to entry), pro (individual/advanced users), business (organizations/teams). This structure is frequently associated with software and digital products.</p>

      <h3>Free tier</h3>
      <p>The free tier can provide: basic functionality, limited usage, limited storage, limited projects, basic support. The purpose is often to let customers experience the product before paying.</p>

      <h3>Pro tier</h3>
      <p>Designed for customers who need more capability. Possible upgrades: higher limits, advanced features, more customization, better analytics.</p>

      <h3>Business tier</h3>
      <p>Designed for organizations. Possible additions: team management, administration, security controls, higher capacity, business support.</p>

      <h3>Example</h3>
      <p>Free ₱0 with 5 projects. Pro ₱499/month with 50 projects + advanced tools. Business ₱1,999/month with unlimited/expanded projects + team features.</p>

      <h3>Free-to-paid conversion</h3>
      <p><strong>Free to Paid Conversion = Paid Users ÷ Eligible Free Users × 100</strong></p>

      <h3>Benefits</h3>
      <p>Very low entry barrier, large potential user base, customers can experience the product, and creates an upgrade path.</p>

      <h3>Risks</h3>
      <p>Free users can create infrastructure costs, low conversion, users may remain permanently free, and free tier may be too generous or too restrictive.</p>

      <hr />

      <h2>7. Individual / Team / Enterprise</h2>
      <h3>Definition</h3>
      <p>This model differentiates pricing according to the size and organizational needs of the customer: individual (one person), team (multiple users), enterprise (large organization).</p>

      <h3>Example</h3>
      <p>A productivity platform: individual (1 user) with personal workspace; team (2–50 users) with collaboration; enterprise (large organizations) with administration + advanced controls.</p>

      <h3>Pricing options</h3>
      <p><strong>Per-user:</strong> <strong>Price = Users × Price/User</strong>. Example: 10 × ₱500 = ₱5,000/month.</p>
      <p><strong>Tier-based:</strong> individual ₱500, team ₱3,000, enterprise custom.</p>
      <p><strong>Hybrid:</strong> base fee + per-user fee.</p>

      <h3>Benefits</h3>
      <p>Matches price to organizational scale, easy expansion as teams grow, and allows different features for organizational needs.</p>

      <h3>Risks</h3>
      <p>Customers may dislike paying for inactive users, user counting can become complicated, and teams may share accounts to avoid charges, creating security and usage problems.</p>

      <hr />

      <h2>8. Entry / Mid / Premium</h2>
      <h3>Definition</h3>
      <p>Entry / Mid / Premium uses price and capability positioning rather than specific product names: entry (lowest commitment), mid (balanced offer), premium (highest value/service).</p>

      <h3>Example</h3>
      <p>A web-hosting business: entry 10 GB storage, standard support, ₱199; mid 50 GB, priority support, ₱499; premium 150 GB, priority + advanced tools, ₱999.</p>

      <h3>Mid-tier strategy</h3>
      <p>The middle tier is often designed as a balanced option. It may be positioned around price + features + capacity + support. However, businesses should not assume the middle tier will always be the most popular. Actual customer behavior needs to be measured.</p>

      <hr />

      <h2>9. Single-User / Multi-User Pricing</h2>
      <h3>Definition</h3>
      <p>Single-user / multi-user pricing changes the price or package according to the number of people who use the product. Single user is designed for one person with one account/license. Multi-user is designed for a team with multiple accounts, a shared workspace, and collaboration.</p>

      <h3>Example</h3>
      <p>A software product: single user ₱499/month; 5 users ₱1,999/month; 20 users ₱5,999/month.</p>

      <h3>Per-seat formula</h3>
      <p><strong>Revenue = Number of Paid Seats × Price per Seat</strong></p>
      <p>Example: 20 × ₱300 = ₱6,000.</p>

      <h3>Seat-based vs user-based pricing</h3>
      <p>These terms can overlap, but businesses may define them differently. A user-based model may charge according to named users. A seat-based model usually treats each available user position as a billable seat.</p>

      <h3>Benefits</h3>
      <p>Revenue can grow as the customer's organization grows, easy relationship between usage and price, and natural expansion path.</p>

      <h3>Risks</h3>
      <p>Customers may remove users to reduce costs, billing complexity, unused seats, and account-sharing incentives if pricing is poorly designed.</p>

      <hr />

      <h2>10. Feature-Based Tiers</h2>
      <h3>Definition</h3>
      <p>Feature-based tiers differentiate plans according to which features customers receive.</p>

      <h3>Example</h3>
      <p>Basic includes core dashboard and basic reports. Pro includes core dashboard, advanced reports, automation, and integrations. Enterprise includes everything in Pro plus advanced security, administration, and custom integrations.</p>

      <h3>How to design feature-based tiers</h3>
      <ol>
        <li>Identify customer needs.</li>
        <li>Group customers by use case.</li>
        <li>Identify features associated with each segment.</li>
        <li>Determine which features are essential.</li>
        <li>Determine which features create meaningful upgrades.</li>
        <li>Assign features to tiers.</li>
        <li>Test conversion and upgrade behavior.</li>
        <li>Adjust based on customer feedback and economics.</li>
      </ol>

      <h3>Important principle</h3>
      <p>Do not simply put random features into increasingly expensive tiers. Instead: customer segment → customer need → required capability → feature → tier.</p>

      <hr />

      <h2>Tiered Pricing vs Single Pricing</h2>
      <p><strong>Single pricing</strong> — one product, one price. Advantages: simple, easy to communicate, low decision complexity. Disadvantages: poor fit for customers with different needs, can leave money on the table, may exclude customers who need a lower or higher level.</p>
      <p><strong>Tiered pricing</strong> — product branches into entry ₱499, standard ₱999, premium ₱1,999. Advantages: more customer choice, better segmentation, creates upgrade paths, can capture different willingness-to-pay levels. Disadvantages: more complexity, more support requirements, customers may struggle to choose, more complicated product packaging.</p>

      <hr />

      <h2>Tiered Pricing Psychology</h2>
      <p>Tiered pricing creates a choice architecture. A customer compares: price difference → additional value → is the upgrade worth it?</p>
      <p>For example: basic ₱499 with 5 projects, basic analytics, no automation, standard support. Pro ₱999 with 50 projects, advanced analytics, automation, priority support. The customer is effectively evaluating: additional price = ₱999 − ₱499 = ₱500 against the additional value provided by Pro.</p>

      <hr />

      <h2>Tier Spacing</h2>
      <p>A tier structure needs reasonable separation. Suppose basic ₱500, standard ₱550, premium ₱600. If the features are dramatically different, the price gaps may be too small.</p>
      <p>Alternatively: basic ₱500, standard ₱2,000, premium ₱10,000 may create very large jumps that leave customers without a suitable option.</p>
      <p>The appropriate spacing depends on customer willingness to pay, cost structure, feature value, customer segments, competitive environment, and business objectives.</p>

      <hr />

      <h2>Tier Migration</h2>
      <p>One of the major benefits of tiered pricing is the ability to move customers between plans. Free → starter → pro → business → enterprise.</p>
      <p>Customers can upgrade when they need: more capacity, more users, more features, more support, better security, or greater customization. Customers may also downgrade when their needs decrease. A healthy pricing system should make both processes understandable.</p>

      <h3>Upgrade rate</h3>
      <p><strong>Upgrade Rate = Customers Who Upgrade ÷ Eligible Customers × 100</strong></p>
      <p>Example: 500 customers are eligible for an upgrade. 75 upgrade: 75 ÷ 500 × 100 = 15%.</p>

      <hr />

      <h2>Tier Distribution</h2>
      <p>A business can measure how customers are distributed across tiers. Suppose basic 500 customers, standard 350, premium 150. Total 1,000. Basic share 50%, standard share 35%, premium share 15%. This tells the business how customers are actually choosing plans. It does not, by itself, tell you which tier is economically or strategically preferable.</p>

      <h3>Average Revenue Per Customer</h3>
      <p><strong>ARPC = Total Revenue ÷ Number of Customers</strong></p>
      <p>For tiered pricing, it can also be useful to calculate ARPC separately for each tier: basic ARPC, standard ARPC, premium ARPC. This helps identify differences in customer value and plan economics.</p>

      <hr />

      <h2>Tiered Pricing Economics</h2>
      <p>Suppose basic 500 customers × ₱500 = ₱250,000; standard 300 × ₱1,000 = ₱300,000; premium 100 × ₱2,000 = ₱200,000.</p>
      <p>Total customers: 500 + 300 + 100 = 900.</p>
      <p>Total monthly revenue: ₱250,000 + ₱300,000 + ₱200,000 = ₱750,000.</p>
      <p>Average revenue per customer: ₱750,000 ÷ 900 ≈ ₱833.33.</p>
      <p>But revenue is not the entire economic picture. The business must also examine cost to serve each tier, support costs, infrastructure costs, customer acquisition costs, churn, gross margin, contribution margin, and lifetime value. A Premium customer paying twice as much as a Standard customer may also require substantially more service.</p>

      <hr />

      <h2>Tiered Pricing and Customer Segmentation</h2>
      <p>Tiered pricing is closely connected to segmentation. Customer base → different needs → different usage → different willingness to pay → different tiers.</p>
      <p>For example: beginner → basic; growing user → standard; advanced user → premium. This is particularly useful when customers naturally grow into more demanding use cases.</p>

      <hr />

      <h2>Tiered Pricing and Product Strategy</h2>
      <p>Features should be prioritized according to customer value. Customer research → customer segmentation → needs analysis → feature prioritization → tier design → pricing → testing → optimization. This prevents pricing from becoming an arbitrary list of feature restrictions.</p>

      <hr />

      <h2>Tiered Pricing and Free Trials</h2>
      <p>A tiered product can combine: free → free trial → pro → business. However, free and free trial are different.</p>
      <p><strong>Free tier</strong> — the customer can continue using a limited version without paying.</p>
      <p><strong>Free trial</strong> — the customer gets temporary access to paid functionality. Example: free plan with limited features indefinitely, or 14-day trial with full Pro features for 14 days.</p>

      <hr />

      <h2>Tiered Pricing and Bundling</h2>
      <p>Tiered pricing can also combine with bundles. Example: basic (website + hosting), pro (website + hosting + analytics + SEO), business (website + hosting + analytics + SEO + automation + priority support). Each tier is effectively a different package of capabilities.</p>

      <hr />

      <h2>Tiered Pricing and Add-Ons</h2>
      <p>A business does not need to place every feature into a tier. It can use: base tier + optional add-ons. Example: additional ₱200 → extra storage; ₱500 → advanced support; ₱300 → additional integration. This creates a tier + add-on pricing architecture.</p>

      <hr />

      <h2>Good Tier Design</h2>
      <p>A strong tier structure generally has:</p>
      <ol>
        <li><strong>Clear differences.</strong> Customers immediately understand what changes between plans.</li>
        <li><strong>Meaningful value.</strong> Each upgrade provides something useful.</li>
        <li><strong>Logical progression.</strong> Basic → more capability → more capability → premium.</li>
        <li><strong>Appropriate price gaps.</strong> The price difference should correspond reasonably to the incremental value and cost.</li>
        <li><strong>Clear target customer.</strong> Each tier should have a recognizable customer/use case where possible.</li>
        <li><strong>Easy comparison.</strong> A customer should be able to compare tiers quickly.</li>
      </ol>

      <hr />

      <h2>Poor Tier Design</h2>
      <p>Example: basic with 100 features, standard with 101 features, premium with 102 features. If the additional features have little value, customers have no compelling reason to upgrade.</p>
      <p>Another poor structure: basic almost unusable, standard necessary features, premium everything. This can make the lower tiers feel artificially restricted.</p>

      <hr />

      <h2>Tiered Pricing Dashboard</h2>
      <ul>
        <li>Customers per tier — plan distribution</li>
        <li>Revenue per tier — revenue contribution</li>
        <li>Conversion per tier — purchasing behavior</li>
        <li>Upgrade rate — movement upward</li>
        <li>Downgrade rate — movement downward</li>
        <li>Churn per tier — retention</li>
        <li>ARPC — average revenue</li>
        <li>AOV — average transaction value</li>
        <li>Gross margin per tier — profitability</li>
        <li>Contribution per tier — economic contribution</li>
        <li>LTV per tier — long-term value</li>
        <li>CAC by tier — acquisition efficiency</li>
        <li>Feature adoption — feature usage</li>
        <li>Trial-to-paid — monetization</li>
        <li>Free-to-paid — freemium conversion</li>
        <li>Add-on attach rate — additional purchases</li>
      </ul>

      <hr />

      <h2>Complete Tiered Pricing Framework</h2>
      <pre>{`MARKET
                   ↓
              CUSTOMER RESEARCH
                   ↓
              SEGMENTATION
                   ↓
              CUSTOMER NEEDS
                   ↓
             VALUE DIFFERENCES
                   ↓
             FEATURE PRIORITY
                   ↓
             TIER STRUCTURE
                   ↓
             PRICE STRUCTURE
                   ↓
             OFFER COMPARISON
                   ↓
          CUSTOMER CHOOSES TIER
                   ↓
          PRODUCT / SERVICE USAGE
                   ↓
       ┌───────────┴───────────┐
       ↓                       ↓
    RETAIN                  UPGRADE
       ↓                       ↓
     LTV ↑                   ARPC ↑
       └───────────┬───────────┘
                   ↓
             CUSTOMER DATA
                   ↓
             PRICING REVIEW
                   ↓
                ITERATE`}</pre>

      <hr />

      <h2>Tiered Pricing Strategy Matrix</h2>
      <ul>
        <li>Basic / Standard / Premium — general products and services</li>
        <li>Bronze / Silver / Gold — memberships and loyalty</li>
        <li>Starter / Professional / Enterprise — SaaS and business services</li>
        <li>Good / Better / Best — consumer and professional packages</li>
        <li>Essential / Plus / Pro — digital products and software</li>
        <li>Free / Pro / Business — freemium software</li>
        <li>Individual / Team / Enterprise — collaboration software</li>
        <li>Entry / Mid / Premium — general market segmentation</li>
        <li>Single-user / Multi-user — software and services</li>
        <li>Feature-based tiers — products with clearly differentiated capabilities</li>
      </ul>

      <hr />

      <h2>Tiered Pricing Flywheel</h2>
      <pre>{`CUSTOMER RESEARCH
       ↓
SEGMENTATION
       ↓
TIER DESIGN
       ↓
PRICE
       ↓
CUSTOMER CHOICE
       ↓
USAGE
       ↓
UPGRADE / DOWNGRADE
       ↓
RETENTION
       ↓
REVENUE + MARGIN
       ↓
CUSTOMER DATA
       ↓
PRICING IMPROVEMENT
       ↓
BETTER TIER DESIGN`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Tiered pricing gives customers multiple levels of the same core value proposition.</li>
        <li>Each tier should have a clear reason to exist.</li>
        <li>Price differences should correspond to meaningful differences in value, capacity, features, service, or access.</li>
        <li>Do not create artificial feature restrictions simply to force upgrades.</li>
        <li>Basic tiers should solve a legitimate customer problem.</li>
        <li>Premium tiers should provide genuinely valuable additional capabilities.</li>
        <li>Use customer segmentation to determine who each tier is designed for.</li>
        <li>Basic / Standard / Premium is useful when customers naturally differ in required service levels.</li>
        <li>Bronze / Silver / Gold works well when progression and benefits are important.</li>
        <li>Starter / Professional / Enterprise works particularly well when customer complexity grows with organizational size.</li>
        <li>Good / Better / Best focuses attention on relative value between offers.</li>
        <li>Essential / Plus / Pro provides a straightforward progression for products and digital services.</li>
        <li>Free / Pro / Business creates an entry path for users who want to experience a product before paying.</li>
        <li>Individual / Team / Enterprise aligns pricing with organizational scale.</li>
        <li>Single-user / multi-user pricing connects price to the number of people receiving access.</li>
        <li>Feature-based tiers should be based on meaningful customer needs rather than arbitrary feature counts.</li>
        <li>Measure tier distribution, upgrades, downgrades, churn, revenue, and margin.</li>
        <li>Evaluate each tier based on economics, not just customer volume.</li>
        <li>Consider combining tiers with add-ons, usage charges, subscriptions, or retainers when appropriate.</li>
        <li>Keep the pricing page simple enough that customers can understand the differences quickly.</li>
        <li>A tier should answer three questions clearly: who is it for, what does it provide, and why would someone choose it over another tier?</li>
        <li>The goal of tiered pricing is not merely to create more prices; it is to create a structured set of offers that matches different customer needs while producing sustainable business economics.</li>
      </ol>
    </LessonLayout>
  )
}
