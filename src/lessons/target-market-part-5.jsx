import LessonLayout from '../components/LessonLayout'

export default function TargetMarketPart5() {
  return (
    <LessonLayout
      number="88"
      title="Target-Market Strategies — Part 5"
      summary="22 lifecycle, personalization, and value-based targeting systems — mass customization, one-to-one, lifecycle, acquisition, retention, reactivation, expansion, referral, ICP, and channel audience targeting."
    >
      <h2>Target-Market Strategies — Part 5</h2>
      <p>
        Part 5 focuses on advanced lifecycle, personalization, channel, relationship, and
        customer-value targeting. Instead of only asking "Who is the customer?", these strategies
        ask:
      </p>
      <ul>
        <li>Where is the customer in the buying journey?</li>
        <li>How valuable is the relationship?</li>
        <li>What has the customer already purchased?</li>
        <li>What action is most relevant next?</li>
        <li>Which channel or community can reach them?</li>
        <li>How much personalization is appropriate?</li>
      </ul>

      <h3>Overall System</h3>
      <pre>{`Market
  ↓
Customer Segment
  ↓
Customer Profile
  ↓
Lifecycle Stage
  ↓
Behavior & Value
  ↓
Relevant Targeting Strategy
  ↓
Relevant Offer
  ↓
Correct Channel
  ↓
Conversion / Retention / Expansion
  ↓
Measurement
  ↓
Optimization`}</pre>

      <hr />

      <h2>1. Mass Customization</h2>
      <h3>Definition</h3>
      <p>Mass customization is the ability to provide personalized products, services, or experiences to many customers while still operating at a relatively large scale.</p>
      <p>It combines mass production with customer choice.</p>

      <h3>How It Works</h3>
      <pre>{`Standardized System
       ↓
Modular Components
       ↓
Customer Choices
       ↓
Configuration
       ↓
Personalized Output
       ↓
Large-Scale Delivery`}</pre>

      <h3>Benefits</h3>
      <ul>
        <li>Personalization at scale</li>
        <li>Greater customer choice</li>
        <li>More perceived relevance</li>
        <li>Higher potential conversion</li>
        <li>Reduced manual work compared with fully custom delivery</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Configuration complexity</li>
        <li>Too many choices</li>
        <li>Higher support requirements</li>
        <li>Production errors</li>
        <li>Difficulty maintaining consistency</li>
      </ul>

      <h3>Principle</h3>
      <p>Customize the customer-facing experience while standardizing as much of the underlying operation as possible.</p>

      <hr />

      <h2>2. One-to-One Marketing</h2>
      <h3>Definition</h3>
      <p>One-to-one marketing treats an individual customer as a distinct marketing relationship rather than simply as part of a broad segment.</p>
      <p>The business uses customer-specific information to make communication or offers more relevant.</p>

      <h3>Information That May Be Used</h3>
      <p>Purchase history, browsing behavior, previous interactions, preferences, customer lifecycle stage, product interests, service history.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Increased relevance</li>
        <li>Better customer experience</li>
        <li>Potentially higher conversion</li>
        <li>Stronger relationships</li>
        <li>Better recommendations</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Privacy concerns</li>
        <li>Incorrect personalization</li>
        <li>Excessive personalization</li>
        <li>Data-quality problems</li>
        <li>Customer discomfort if personalization feels intrusive</li>
      </ul>

      <h3>Principle</h3>
      <p>Personalization should be useful, expected, and appropriately handled.</p>

      <hr />

      <h2>3. Customer Lifecycle Targeting</h2>
      <h3>Definition</h3>
      <p>Customer lifecycle targeting adapts marketing and customer communication according to the customer's relationship with the business.</p>

      <h3>Typical Lifecycle</h3>
      <pre>{`Prospect
   ↓
Lead
   ↓
First-Time Customer
   ↓
Active Customer
   ↓
Repeat Customer
   ↓
Loyal Customer
   ↓
At-Risk Customer
   ↓
Inactive Customer
   ↓
Reactivated Customer`}</pre>

      <h3>Stage Objectives</h3>
      <ul>
        <li>Prospect — generate interest</li>
        <li>Lead — build confidence</li>
        <li>First-time customer — encourage successful first experience</li>
        <li>Active — increase value</li>
        <li>Repeat — encourage retention</li>
        <li>Loyal — encourage advocacy</li>
        <li>At-risk — prevent churn</li>
        <li>Inactive — reactivate</li>
      </ul>

      <h3>Principle</h3>
      <p>Do not give every customer the same message when their relationship with the business is different.</p>

      <hr />

      <h2>4. Acquisition Targeting</h2>
      <h3>Definition</h3>
      <p>Acquisition targeting focuses on people or organizations who are not yet customers but may have a reasonable likelihood of becoming customers.</p>

      <h3>Typical Targets</h3>
      <p>Prospects, qualified leads, website visitors, searchers, lookalike audiences, referral prospects, competitor-market prospects, people with identified needs.</p>

      <h3>Metrics</h3>
      <p><strong>CAC = Acquisition Cost ÷ New Customers</strong></p>
      <p>Other metrics: reach, leads, lead conversion, customer conversion, CAC, revenue, gross margin, LTV.</p>

      <h3>Principle</h3>
      <p>Acquisition should not be measured only by the number of new customers. Customer quality and economics matter.</p>

      <hr />

      <h2>5. Retention Targeting</h2>
      <h3>Definition</h3>
      <p>Retention targeting focuses on existing customers with the objective of maintaining the relationship and encouraging continued use or purchase.</p>

      <h3>Targets</h3>
      <p>Active customers, repeat customers, subscription customers, customers approaching renewal, customers showing declining engagement.</p>

      <h3>Retention Flow</h3>
      <pre>{`Existing Customer
       ↓
Monitor Engagement
       ↓
Identify Risk / Opportunity
       ↓
Relevant Support or Offer
       ↓
Continued Value
       ↓
Renewal / Repeat Purchase`}</pre>

      <h3>Metrics</h3>
      <p><strong>Retention Rate = ((Customers at End − New Customers) ÷ Customers at Start) × 100</strong></p>
      <p>Also: churn, renewal rate, repeat purchase rate, active-user rate, LTV.</p>

      <hr />

      <h2>6. Reactivation Targeting</h2>
      <h3>Definition</h3>
      <p>Reactivation targeting focuses on customers who previously purchased or engaged but have become inactive. These customers are different from completely new prospects because they already have some history with the business.</p>

      <h3>Possible Reasons for Inactivity</h3>
      <p>No current need, competitor purchase, poor experience, price, forgotten product, seasonal behavior, change in circumstances.</p>

      <h3>Metric</h3>
      <p><strong>Reactivation Rate = (Reactivated Customers ÷ Targeted Inactive Customers) × 100</strong></p>

      <hr />

      <h2>7. Expansion Targeting</h2>
      <h3>Definition</h3>
      <p>Expansion targeting focuses on existing customers who may have additional needs that can be served by the business.</p>
      <p>Expansion can involve: more products, more users, more locations, more capacity, additional services, higher subscription tier, additional features.</p>

      <h3>Expansion System</h3>
      <pre>{`Existing Customer
       ↓
Understand New Need
       ↓
Identify Additional Value
       ↓
Cross-Sell / Upsell / Add-On
       ↓
Expansion Revenue`}</pre>

      <h3>Important Principle</h3>
      <p>Expansion should be based on genuine additional customer value, not simply maximizing the number of products sold.</p>

      <hr />

      <h2>8. Referral Targeting</h2>
      <h3>Definition</h3>
      <p>Referral targeting focuses on customers, partners, or communities that can introduce potential new customers.</p>

      <h3>Structure</h3>
      <pre>{`Existing Customer
       ↓
Satisfied Experience
       ↓
Referral Request
       ↓
New Prospect
       ↓
Qualified Lead
       ↓
Customer`}</pre>

      <h3>Metrics</h3>
      <p>Referrals generated, qualified referrals, referral conversion, cost per acquired referral, referral revenue, customer LTV.</p>

      <h3>Principle</h3>
      <p>The best referral system is supported by genuine customer satisfaction and clear program rules.</p>

      <hr />

      <h2>9. Influencer Audience Targeting</h2>
      <h3>Definition</h3>
      <p>Influencer audience targeting focuses on audiences connected to creators or influencers whose content is relevant to the business's target market.</p>
      <p>The important element is not simply the influencer's follower count but audience relevance.</p>

      <h3>Evaluation Factors</h3>
      <p>Audience fit, content relevance, engagement quality, geographic relevance, audience demographics where appropriate, brand compatibility, historical campaign performance.</p>

      <h3>Risk</h3>
      <p>A large audience does not automatically produce qualified customers.</p>

      <hr />

      <h2>10. Community-Led Targeting</h2>
      <h3>Definition</h3>
      <p>Community-led targeting focuses on communities where people with shared interests, problems, professions, identities, or goals interact.</p>
      <p>Examples: developer communities, creator communities, student communities, business communities, local communities, hobby communities, professional communities.</p>

      <h3>Important Principle</h3>
      <p>A community should not be treated simply as an advertising database. Successful community-led targeting generally begins with participation and value creation.</p>

      <h3>Risks</h3>
      <p>Promotional behavior can damage trust. Community rules may restrict commercial activity. Communities are not automatically marketing channels.</p>

      <hr />

      <h2>11. Partnership Audience Targeting</h2>
      <h3>Definition</h3>
      <p>Partnership audience targeting uses the audience of another organization through a legitimate partnership.</p>
      <p>Possible structures: co-marketing, referral partnerships, affiliate partnerships, joint campaigns, events, bundled offers, cross-promotion.</p>

      <hr />

      <h2>12. Search Audience Targeting</h2>
      <h3>Definition</h3>
      <p>Search audience targeting focuses on people based on what they search for and the intent expressed by those searches.</p>

      <h3>Search Intent</h3>
      <ul>
        <li>Informational — "how to build a website"</li>
        <li>Commercial — "best website builder"</li>
        <li>Comparison — "website builder vs custom website"</li>
        <li>Transactional — "hire web developer"</li>
      </ul>

      <h3>Principle</h3>
      <p>Target the intent behind the search, not just the keyword.</p>

      <hr />

      <h2>13. Social Audience Targeting</h2>
      <h3>Definition</h3>
      <p>Social audience targeting focuses on people based on social-platform behavior, interests, interactions, communities, or other permitted audience signals.</p>
      <p>Possible audience types: interest-based audiences, engagement audiences, website visitors, video viewers, followers, customer-based audiences, similar audiences where available.</p>

      <h3>Principle</h3>
      <p>Social targeting should consider both audience relevance and platform context.</p>

      <hr />

      <h2>14. Email Audience Targeting</h2>
      <h3>Definition</h3>
      <p>Email audience targeting divides an email database into groups so messages can be more relevant.</p>
      <p>Common segments: new subscribers, first-time customers, repeat customers, high-value customers, inactive customers, product-category buyers, geographic segments, subscription customers.</p>

      <h3>Metrics</h3>
      <p>Delivery rate, open rate, click rate, conversion rate, unsubscribe rate, revenue per recipient.</p>

      <h3>Principle</h3>
      <p>Email targeting should respect permission, relevance, and customer expectations.</p>

      <hr />

      <h2>15. Marketplace Audience Targeting</h2>
      <h3>Definition</h3>
      <p>Marketplace audience targeting focuses on customers within a marketplace according to their browsing, purchasing, category interests, or shopping behavior.</p>
      <p>This is particularly useful for platforms like Xmarket.</p>

      <h3>Example</h3>
      <pre>{`Marketplace Visitors
        ↓
Category Browsing
        ↓
Product Viewing
        ↓
Cart Activity
        ↓
Purchase`}</pre>
      <p>A marketplace can create relevant experiences around: product category, search behavior, purchase history, price range, frequency, seller interaction, cart activity.</p>

      <h3>Important Principle</h3>
      <p>Marketplace targeting should benefit both customer relevance and marketplace economics.</p>

      <hr />

      <h2>16. Geographic Expansion Targeting</h2>
      <h3>Definition</h3>
      <p>Geographic expansion targeting identifies new geographic markets where an existing product or service may have potential.</p>
      <pre>{`Neighborhood
 ↓
City
 ↓
Region
 ↓
Country
 ↓
International Market`}</pre>

      <h3>Before Expansion</h3>
      <p>Evaluate: demand, competition, purchasing power, logistics, taxes, regulations, language, culture, payment systems, customer acquisition cost, service capacity.</p>

      <h3>Principle</h3>
      <p>Test geographic expansion before committing substantial resources.</p>

      <hr />

      <h2>17. Cross-Selling Segments</h2>
      <h3>Definition</h3>
      <p>Cross-selling segments identify customers who are likely to benefit from products or services related to what they already purchased.</p>

      <h3>Cross-Selling Logic</h3>
      <pre>{`Existing Product
      ↓
Identify Complement
      ↓
Check Customer Need
      ↓
Relevant Recommendation
      ↓
Additional Purchase`}</pre>

      <h3>Metric</h3>
      <p><strong>Attach Rate = (Customers Buying Complement ÷ Customers Buying Main Product) × 100</strong></p>

      <h3>Principle</h3>
      <p>Cross-selling should solve an additional problem or improve the customer's existing purchase.</p>

      <hr />

      <h2>18. Upselling Segments</h2>
      <h3>Definition</h3>
      <p>Upselling segments identify customers who may benefit from a higher-value version of what they already have.</p>
      <p>Potential reasons for an upgrade: more users, more storage, more features, higher performance, better support, greater capacity.</p>

      <h3>Upselling Signals</h3>
      <p>Usage approaching limits, requests for advanced features, increased business size, repeated purchases, higher activity, new requirements.</p>

      <h3>Metric</h3>
      <p><strong>Upgrade Rate = (Customers Who Upgrade ÷ Eligible Customers) × 100</strong></p>

      <h3>Important Principle</h3>
      <p>The upgrade should provide incremental value that the customer actually needs.</p>

      <hr />

      <h2>19. High-Frequency Buyers</h2>
      <h3>Definition</h3>
      <p>High-frequency buyers are customers who purchase substantially more frequently than the business's typical customer.</p>
      <p>They may represent strong opportunities for: loyalty programs, memberships, quantity bundles, personalized recommendations, early access, subscription offers, cross-selling.</p>

      <h3>Metrics</h3>
      <p>Orders per customer, purchase frequency, revenue per customer, gross margin, LTV, retention.</p>

      <h3>Important Principle</h3>
      <p>High-frequency does not automatically mean high profitability. A customer may purchase frequently but generate low margins or high service costs.</p>

      <hr />

      <h2>20. Occasional Buyers</h2>
      <h3>Definition</h3>
      <p>Occasional buyers purchase irregularly or infrequently. They may be seasonal customers, need-based customers, event-driven buyers, low-frequency consumers, or customers with long repurchase cycles.</p>

      <h3>Strategy</h3>
      <p>Avoid treating low frequency automatically as low value. For example, a wedding customer purchases once but may place a high-value order.</p>
      <p>Strategies: relevant reminders, seasonal campaigns, product education, complementary recommendations, event-based campaigns, appropriate reactivation.</p>

      <h3>Principle</h3>
      <p>Purchase frequency must be interpreted alongside order value, margin, and customer need.</p>

      <hr />

      <h2>21. First-Time Buyers</h2>
      <h3>Definition</h3>
      <p>First-time buyers are customers who have completed their first purchase but have not yet established a repeat-purchase relationship.</p>

      <h3>The Critical Transition</h3>
      <pre>{`Prospect
   ↓
First Purchase
   ↓
Successful Experience
   ↓
Second Purchase
   ↓
Repeat Customer
   ↓
Loyal Customer`}</pre>

      <h3>Targeting Strategies</h3>
      <p>Onboarding, product education, usage guidance, customer support, complementary recommendations, follow-up, appropriate second-purchase offers.</p>

      <h3>Key Metric</h3>
      <p><strong>Second Purchase Rate = (First-Time Buyers Who Purchase Again ÷ First-Time Buyers) × 100</strong></p>

      <h3>Principle</h3>
      <p>The goal is not merely to obtain the first transaction but to create a successful customer experience that makes continued relationship possible.</p>

      <hr />

      <h2>22. Ideal-Customer-Profile Targeting</h2>
      <h3>Definition</h3>
      <p>An Ideal Customer Profile (ICP) defines the characteristics of a customer or organization that is especially well suited to a business's product or service.</p>
      <p>ICP is particularly important in B2B.</p>

      <h3>ICP vs Customer Persona</h3>
      <ul>
        <li>ICP — defines ideal customer/account fit; often organization-level in B2B; focuses on business fit; useful for account prioritization</li>
        <li>Persona — represents a customer/user type; often person-level; focuses on human needs and behavior; useful for messaging and product understanding</li>
      </ul>
      <p>They can work together: ICP → Target Company → Decision-Maker Persona → Needs → Message → Sales.</p>

      <h3>ICP Criteria</h3>
      <p>Possible criteria: industry, company size, geography, business model, technology environment, budget, need, problem severity, buying process, potential customer value, ability to be served effectively.</p>

      <h3>Principle</h3>
      <p>The ICP should describe customers the business can serve well and sustainably, not merely customers who can spend the most.</p>

      <hr />

      <h2>Lifecycle Targeting Matrix</h2>
      <ul>
        <li>Unknown prospect — acquisition targeting</li>
        <li>Qualified prospect — ICP targeting</li>
        <li>Searcher — search audience targeting</li>
        <li>Social prospect — social audience targeting</li>
        <li>Community member — community-led targeting</li>
        <li>Partner-referred prospect — partnership/referral targeting</li>
        <li>First-time buyer — first-time-buyer targeting</li>
        <li>Active customer — retention targeting</li>
        <li>High-frequency customer — high-frequency targeting</li>
        <li>Existing customer with related need — cross-selling</li>
        <li>Existing customer needing more capacity — upselling</li>
        <li>Growing account — expansion targeting</li>
        <li>Inactive customer — reactivation targeting</li>
        <li>Advocate — referral targeting</li>
      </ul>

      <hr />

      <h2>Customer Value Targeting</h2>
      <pre>{`CUSTOMER BASE
                         ↓
             ┌───────────┼───────────┐
             ↓           ↓           ↓
          Low Value   Medium Value  High Value
             ↓           ↓           ↓
        Improve Fit    Retain      Protect
             ↓           ↓           ↓
        Relevant       Cross-Sell   Personalize
        Offers         Upsell       Support`}</pre>
      <p>Customer value should not be determined by revenue alone. A more complete view considers revenue, margin, retention, growth potential, and cost to serve.</p>

      <hr />

      <h2>Personalization Levels</h2>
      <pre>{`Mass
 ↓
Segment
 ↓
Persona
 ↓
Behavior
 ↓
Individual`}</pre>
      <ul>
        <li>Level 1 — Mass: one message for a broad market</li>
        <li>Level 2 — Segment: different messages for different groups</li>
        <li>Level 3 — Persona: messages designed around customer types</li>
        <li>Level 4 — Behavioral: messages respond to customer actions</li>
        <li>Level 5 — Individual: messages and experiences are tailored to individual customers</li>
      </ul>

      <hr />

      <h2>Acquisition → Retention → Expansion Flywheel</h2>
      <pre>{`┌──────────────────┐
             │   Acquisition    │
             └────────┬─────────┘
                      ↓
             First-Time Buyer
                      ↓
                 Onboarding
                      ↓
                 Satisfaction
                      ↓
                 Retention
                      ↓
               Repeat Purchase
                      ↓
              Cross-Sell/Upsell
                      ↓
               Account Expansion
                      ↓
                  Loyalty
                      ↓
                  Referral
                      ↓
              New Acquisition
                      └────────────→`}</pre>
      <p>This creates a customer-growth system rather than treating every sale as an isolated transaction.</p>

      <hr />

      <h2>Targeting Strategy Selection Framework</h2>
      <ul>
        <li>Who resembles our best customers? — lookalike</li>
        <li>Who is the individual customer? — one-to-one</li>
        <li>What type of customer are we addressing? — persona</li>
        <li>Which organization should we pursue? — account-based</li>
        <li>Where are customers located? — territory</li>
        <li>Where do they discover products? — channel/platform</li>
        <li>What device do they use? — device</li>
        <li>What language do they prefer? — language</li>
        <li>What cultural context applies? — localization</li>
        <li>What time of year matters? — seasonal</li>
        <li>What event creates demand? — event-based</li>
        <li>What category interests them? — product-category</li>
        <li>What competitor do they use? — competitor-market</li>
        <li>What group is underserved? — underserved-market</li>
        <li>Where is demand emerging? — emerging-market</li>
        <li>Who wants premium value? — premium-market</li>
        <li>Who prioritizes affordability? — budget-market</li>
        <li>Who prioritizes ease? — convenience-market</li>
        <li>Who has specialized needs? — specialty-market</li>
        <li>Are they new customers? — acquisition/first-time</li>
        <li>Are they existing customers? — retention</li>
        <li>Have they become inactive? — reactivation</li>
        <li>Could they buy more? — expansion</li>
        <li>Could they buy related products? — cross-selling</li>
        <li>Could they move to a higher tier? — upselling</li>
        <li>Could they introduce others? — referral</li>
      </ul>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Targeting should lead to an action.</li>
        <li>Lifecycle matters — a prospect, first-time buyer, loyal customer, and inactive customer should not receive identical communication.</li>
        <li>Customer value is multidimensional — consider revenue, margin, frequency, retention, growth potential, and cost to serve.</li>
        <li>Personalization must remain useful.</li>
        <li>Cross-selling is not upselling.</li>
        <li>High frequency does not equal high profitability.</li>
        <li>Occasional customers can be valuable.</li>
        <li>Community targeting requires respect.</li>
        <li>Partnerships should create mutual value.</li>
        <li>ICP targeting requires both fit and economics.</li>
        <li>Mass customization requires standardization underneath.</li>
        <li>Targeting must be measured.</li>
      </ol>

      <h3>Tracking Metrics</h3>
      <p>Acquisition, conversion, CAC, retention, churn, frequency, AOV, cross-sell rate, upsell rate, reactivation rate, referral rate, LTV, gross margin, cost to serve.</p>

      <h3>Core Formula</h3>
      <p>
        Research → Segment → Define ICP → Build Personas → Identify Lifecycle Stage → Analyze
        Behavior &amp; Value → Select Targeting Strategy → Select Audience/Channel → Personalize
        Offer → Acquire → Convert → Onboard → Retain → Reactivate When Needed → Cross-Sell →
        Upsell → Expand → Build Loyalty → Generate Referrals → Measure → Optimize → Repeat.
      </p>
    </LessonLayout>
  )
}
