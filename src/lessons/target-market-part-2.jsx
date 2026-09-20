import LessonLayout from '../components/LessonLayout'

export default function TargetMarketPart2() {
  return (
    <LessonLayout
      number="85"
      title="Target-Market Strategies — Part 2"
      summary="23 segmentation systems — demographic, geographic, behavioral, psychographic, income, industry, company size, job role, RFM, and value-driven segments."
    >
      <h2>Target-Market Strategies — Part 2</h2>
      <p>
        Target-market segmentation is the process of dividing a broad market into smaller groups
        that share meaningful characteristics, behaviors, needs, or purchasing patterns.
      </p>
      <p>
        Segmentation allows a business to avoid treating every customer identically. Different
        groups can receive different products, messages, prices, channels, offers, and customer
        experiences.
      </p>

      <h3>Segmentation Map</h3>
      <pre>{`TOTAL MARKET
                         │
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
   WHO THEY ARE      WHERE THEY ARE   WHAT THEY DO
        │                │                │
 Demographic        Geographic       Behavioral
 Psychographic      Urban/Rural      Frequency
 Income                              Spending
        │
        └────────────────┬────────────────┘
                         ↓
                    WHAT THEY VALUE
                         │
       ┌─────────────────┼─────────────────┐
       ↓                 ↓                 ↓
    Price            Convenience        Quality
    Service          Innovation         Digital
                         │
                         ↓
                  TARGET SEGMENT
                         │
                         ↓
              Offer → Message → Channel
                         │
                         ↓
                  Conversion → Retention`}</pre>

      <hr />

      <h2>1. Demographic Segmentation</h2>
      <h3>Definition</h3>
      <p>
        Demographic segmentation divides customers according to measurable population
        characteristics.
      </p>
      <p>Common variables include: age, gender, education, occupation, household size, family status, life stage, and other relevant population characteristics.</p>
      <p>The appropriate variables depend on the product and the market.</p>

      <h3>How It Works</h3>
      <p>An educational platform could divide its market into high-school students, college students, working professionals, and career changers. Each group may have different needs and schedules.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Easy to understand</li>
        <li>Easy to organize</li>
        <li>Useful for many consumer businesses</li>
        <li>Can simplify marketing campaigns</li>
      </ul>

      <h3>Risks</h3>
      <p>Demographics alone don't necessarily explain why people buy. Two people of the same age and income can have completely different preferences.</p>

      <h3>Principle</h3>
      <p>Use demographic characteristics when they meaningfully relate to customer needs or behavior.</p>

      <hr />

      <h2>2. Geographic Segmentation</h2>
      <h3>Definition</h3>
      <p>Geographic segmentation divides customers according to location.</p>
      <p>Possible levels: country, region, province/state, city, district, neighborhood, service area, climate zone.</p>

      <h3>Example</h3>
      <p>A delivery business could divide its market into Zone A, Zone B, Zone C, and Zone D. Each zone could have different delivery costs and service times.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Better logistics</li>
        <li>More relevant local marketing</li>
        <li>Easier territory management</li>
        <li>Useful for location-dependent businesses</li>
      </ul>

      <h3>Risks</h3>
      <p>Geographic assumptions can be inaccurate. Customer behavior can vary within the same area. Expansion increases operational complexity.</p>

      <hr />

      <h2>3. Behavioral Segmentation</h2>
      <h3>Definition</h3>
      <p>Behavioral segmentation divides customers according to what they actually do.</p>
      <p>Examples: purchase behavior, website activity, product usage, browsing behavior, feature usage, engagement, response to promotions, loyalty, cart abandonment, renewal behavior.</p>
      <p>This is often particularly useful because it focuses on observable behavior rather than assumptions.</p>

      <h3>Example</h3>
      <p>An e-commerce platform could classify customers as visitors, browsers, cart users, first-time buyers, repeat buyers, loyal customers.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Data-driven</li>
        <li>Highly actionable</li>
        <li>Useful for personalization</li>
        <li>Can support automation</li>
        <li>Directly connected to customer actions</li>
      </ul>

      <h3>Risks</h3>
      <p>Requires good data. Privacy must be respected. Poor tracking creates inaccurate segments.</p>

      <hr />

      <h2>4. Psychographic Segmentation</h2>
      <h3>Definition</h3>
      <p>
        Psychographic segmentation divides customers according to characteristics such as
        interests, values, lifestyle, attitudes, preferences, motivations, aspirations, and
        opinions.
      </p>

      <h3>Example</h3>
      <p>Two customers may have similar demographics but different priorities: lowest price, highest quality, convenience, innovation, or sustainability.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Better messaging</li>
        <li>Stronger positioning</li>
        <li>Better product design</li>
        <li>Deeper understanding of motivations</li>
      </ul>

      <h3>Risks</h3>
      <p>Psychographic characteristics can be harder to measure reliably than simple transaction data.</p>

      <hr />

      <h2>5. Income Segmentation</h2>
      <h3>Definition</h3>
      <p>
        Income segmentation divides customers based on their income or purchasing-power level.
        Typical categories include lower purchasing power, middle purchasing power, higher
        purchasing power, and premium purchasing power.
      </p>

      <h3>Example</h3>
      <ul>
        <li>Budget — Essential</li>
        <li>Mid-market — Professional</li>
        <li>High-budget — Premium</li>
        <li>Large organizations — Enterprise</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Better price architecture</li>
        <li>More relevant packages</li>
        <li>Better understanding of affordability</li>
        <li>Supports tiered pricing</li>
      </ul>

      <h3>Risks</h3>
      <p>Income does not perfectly represent willingness to pay. Someone with high income may still prioritize low prices, while someone with moderate income may pay more for a product they strongly value.</p>

      <hr />

      <h2>6. Industry Segmentation</h2>
      <h3>Definition</h3>
      <p>
        Industry segmentation divides business customers according to the industry in which they
        operate.
      </p>
      <p>Examples: restaurants, healthcare, education, construction, retail, finance, agriculture, manufacturing, technology, entertainment.</p>

      <h3>Why It Matters</h3>
      <p>Different industries have different workflows, regulations, terminology, customer expectations, operational problems, and technology requirements.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Specialized positioning</li>
        <li>Industry expertise</li>
        <li>More relevant features</li>
        <li>More relevant sales presentations</li>
      </ul>

      <h3>Risk</h3>
      <p>Excessive specialization can increase product complexity and limit the addressable market.</p>

      <hr />

      <h2>7. Company-Size Segmentation</h2>
      <h3>Definition</h3>
      <p>
        Company-size segmentation divides business customers according to organizational scale.
        Common categories include freelancers/solopreneurs, microbusinesses, small businesses,
        medium businesses, large businesses, and enterprises.
      </p>

      <h3>Why Size Matters</h3>
      <p>Company size can influence budget, number of users, purchasing process, technology requirements, support requirements, contract requirements, and implementation complexity.</p>

      <h3>Example</h3>
      <p>A SaaS platform could use tiers such as Solo, Team, Business, and Enterprise.</p>

      <hr />

      <h2>8. Job-Role Segmentation</h2>
      <h3>Definition</h3>
      <p>Job-role segmentation divides customers according to their role or responsibility.</p>
      <p>Examples: founder, CEO, manager, accountant, marketer, developer, designer, salesperson, HR professional, procurement officer.</p>

      <h3>Why It Matters</h3>
      <p>Different people within the same company may care about different benefits.</p>
      <ul>
        <li>Developer — integration, API, performance</li>
        <li>Finance manager — cost, budget, ROI</li>
        <li>Executive — business outcome, risk, strategic value</li>
      </ul>

      <h3>Important Principle</h3>
      <p>The organization may be the customer, but different employees can have different buying concerns.</p>

      <hr />

      <h2>9. Purchase-Frequency Segmentation</h2>
      <h3>Definition</h3>
      <p>Purchase-frequency segmentation divides customers according to how often they buy.</p>
      <p>Example categories: one-time buyer, occasional buyer, regular buyer, frequent buyer.</p>

      <h3>Strategy</h3>
      <ul>
        <li>One-time buyer → follow-up, product education, second-purchase incentive</li>
        <li>Regular buyer → loyalty program, personalized recommendations, bundles</li>
        <li>Frequent buyer → membership, quantity pricing, priority service</li>
      </ul>

      <h3>Metrics</h3>
      <p><strong>Purchase Frequency = Total Orders ÷ Unique Customers</strong></p>

      <hr />

      <h2>10. Spending-Level Segmentation</h2>
      <h3>Definition</h3>
      <p>Spending-level segmentation groups customers based on how much they spend.</p>
      <p>Typical bands: low spend, medium spend, high spend, very high spend.</p>

      <h3>Uses</h3>
      <p>High-spending customers might receive dedicated support, premium offers, early access, personalized recommendations, account management.</p>

      <h3>Important Principle</h3>
      <p>High spending should not automatically mean high profitability. A customer generating ₱50,000 in revenue may also generate unusually high service, delivery, discount, or support costs.</p>

      <hr />

      <h2>11. New-Customer Targeting</h2>
      <h3>Definition</h3>
      <p>New-customer targeting focuses marketing and sales efforts on people who have not purchased from the business before.</p>
      <p>The objective is usually awareness → first purchase.</p>

      <h3>Customer Journey</h3>
      <pre>{`Unknown
  ↓
Visitor
  ↓
Lead
  ↓
First-Time Buyer`}</pre>

      <h3>Metrics</h3>
      <p>New customers, CAC, first-purchase conversion, first-order revenue, first-order margin, activation rate.</p>

      <h3>Risk</h3>
      <p>Acquiring customers without converting them into repeat customers can produce poor long-term economics.</p>

      <hr />

      <h2>12. Existing-Customer Targeting</h2>
      <h3>Definition</h3>
      <p>Existing-customer targeting focuses on people who have already purchased or used the product.</p>
      <p>The objective can include repeat purchase, renewal, cross-selling, upselling, add-ons, loyalty, reactivation.</p>

      <h3>Customer Journey</h3>
      <pre>{`First Purchase
      ↓
Customer Experience
      ↓
Repeat Purchase
      ↓
Upsell
      ↓
Cross-Sell
      ↓
Renewal
      ↓
Referral`}</pre>

      <h3>Benefits</h3>
      <p>Existing customers may already understand the brand, reducing some barriers to another purchase.</p>

      <h3>Metrics</h3>
      <p>Repeat purchase rate, retention, churn, renewal rate, expansion revenue, LTV.</p>

      <hr />

      <h2>13. High-Value-Customer Targeting</h2>
      <h3>Definition</h3>
      <p>High-value-customer targeting focuses resources on customers who generate significant economic or strategic value.</p>
      <p>Value can include: revenue, gross profit, contribution margin, retention, expansion potential, referrals, strategic importance.</p>

      <h3>Important Distinction</h3>
      <p>
        Revenue value ≠ always profit value. Customer A with ₱100,000 revenue at 20% margin
        versus Customer B with ₱60,000 revenue at 60% margin — revenue alone does not tell the
        complete story.
      </p>

      <h3>Implementation</h3>
      <p><strong>Customer Value = Revenue − Variable Costs − Relevant Service Costs</strong>. Then consider future potential.</p>

      <h3>Strategies</h3>
      <p>Account management, personalized support, loyalty benefits, early access, expansion opportunities, proactive customer success.</p>

      <hr />

      <h2>14. Price-Sensitive Targeting</h2>
      <h3>Definition</h3>
      <p>Price-sensitive targeting focuses on customers for whom price is a significant purchasing factor.</p>
      <p>They may compare prices, discounts, promotions, shipping costs, subscription fees, alternative products.</p>

      <h3>Appropriate Strategies</h3>
      <p>Basic plans, quantity discounts, bundles, promotions, free trials, freemium, entry-level products.</p>

      <h3>Risk</h3>
      <p>Constant discounting can train customers to wait for promotions and reduce margins.</p>

      <hr />

      <h2>15. Convenience-Focused Targeting</h2>
      <h3>Definition</h3>
      <p>Convenience-focused targeting focuses on customers who place high value on saving time, reducing effort, or simplifying purchasing.</p>
      <p>They may value: fast checkout, delivery, one-click purchasing, automation, easy setup, simple interfaces, convenient payment, customer support.</p>

      <h3>Key Metrics</h3>
      <p>Checkout completion, time to purchase, cart abandonment, delivery time, support contacts per order, customer satisfaction.</p>

      <hr />

      <h2>16. Quality-Focused Targeting</h2>
      <h3>Definition</h3>
      <p>Quality-focused targeting targets customers who place substantial importance on product or service quality rather than simply minimizing price.</p>
      <p>They may prioritize: durability, reliability, performance, materials, accuracy, craftsmanship, support, consistency.</p>

      <h3>Strategy</h3>
      <p>The business must provide evidence of quality: demonstrations, specifications, certifications where applicable, testing information, reviews, case studies, warranty terms, quality-control processes.</p>

      <h3>Risk</h3>
      <p>Simply charging a premium price does not establish quality. The business must deliver and substantiate the value associated with the positioning.</p>

      <hr />

      <h2>17. Innovation-Focused Targeting</h2>
      <h3>Definition</h3>
      <p>Innovation-focused targeting targets customers who actively seek new technology, new features, new approaches, or emerging solutions.</p>
      <p>Examples: early adopters, technology enthusiasts, product teams, developers, innovative businesses.</p>

      <h3>Typical Offer Characteristics</h3>
      <p>Early access, beta programs, new features, experimental products, advanced functionality, integrations, APIs.</p>

      <h3>Risk</h3>
      <p>Innovation should solve a meaningful problem. New technology without customer value can increase complexity without increasing demand.</p>

      <hr />

      <h2>18. Service-Focused Targeting</h2>
      <h3>Definition</h3>
      <p>Service-focused targeting prioritizes customers who place strong importance on assistance, responsiveness, reliability, and human support.</p>
      <p>They may value: fast response, dedicated support, installation, training, consultation, account management, maintenance.</p>

      <h3>Example</h3>
      <ul>
        <li>Self-Service — Documentation + FAQ</li>
        <li>Professional — Email support</li>
        <li>Business — Priority support</li>
        <li>Enterprise — Dedicated account management</li>
      </ul>

      <h3>Risk</h3>
      <p>High-touch service increases operating costs. Service cost should generally remain below incremental customer value.</p>

      <hr />

      <h2>19. Mobile-First Targeting</h2>
      <h3>Definition</h3>
      <p>Mobile-first targeting designs the customer experience primarily around smartphones and mobile devices.</p>
      <p>Mobile-first principles: responsive design, touch-friendly controls, fast loading, simple navigation, mobile payment, readable typography, minimal unnecessary input, optimized images, efficient bandwidth usage.</p>

      <h3>Metrics</h3>
      <p>Mobile conversion rate, mobile bounce/engagement, page load performance, mobile checkout completion, app retention, mobile revenue share.</p>

      <hr />

      <h2>20. Digital-First Targeting</h2>
      <h3>Definition</h3>
      <p>Digital-first targeting focuses on customers who primarily discover, evaluate, purchase, communicate, or receive services through digital channels.</p>
      <p>Channels can include: websites, apps, social media, search engines, email, messaging, online marketplaces, digital advertising.</p>
      <p>Suitable businesses include SaaS, e-commerce, online education, digital services, streaming, online marketplaces, and software products.</p>

      <h3>Important Principle</h3>
      <p>Digital-first does not necessarily mean digital-only. A business can use digital channels for discovery and combine them with physical delivery, retail, events, or human support.</p>

      <hr />

      <h2>21. Offline-First Targeting</h2>
      <h3>Definition</h3>
      <p>Offline-first targeting focuses on customers who primarily discover, purchase, or interact with businesses through physical or traditional channels.</p>
      <p>Examples: physical stores, local markets, events, phone calls, in-person sales, printed materials, face-to-face consultations, traditional distribution.</p>

      <h3>Digital Support</h3>
      <p>Offline-first does not mean ignoring technology. The business could still use website, digital maps, messaging, online reviews, digital payments, and CRM. The key distinction is the primary customer interaction channel.</p>

      <hr />

      <h2>22. Urban Targeting</h2>
      <h3>Definition</h3>
      <p>Urban targeting focuses on customers living or working in cities and densely populated areas.</p>
      <p>Potential characteristics can include: high population density, shorter travel distances, greater concentration of businesses, strong digital connectivity, demand for convenience, greater access to services. These characteristics vary by location and should be validated through research.</p>

      <h3>Potential Business Opportunities</h3>
      <p>Food delivery, ride services, coworking, convenience products, local entertainment, professional services, fast delivery, urban mobility.</p>

      <hr />

      <h2>23. Rural Targeting</h2>
      <h3>Definition</h3>
      <p>Rural targeting focuses on customers in rural or less densely populated areas.</p>
      <p>Relevant factors can include: geographic distance, distribution availability, transportation, connectivity, local industries, population density, access to services. These characteristics differ significantly between regions, so businesses should research the specific market rather than relying on stereotypes.</p>

      <h3>Potential Opportunities</h3>
      <p>Depending on the area: agriculture, local retail, rural logistics, education, connectivity, agricultural technology, essential services.</p>

      <h3>Strategy Considerations</h3>
      <p>A rural-targeted business may need to prioritize distribution efficiency, reliable availability, appropriate pricing, offline channels, local partnerships, and low-bandwidth digital experiences where relevant.</p>

      <hr />

      <h2>Segmentation Dimensions Compared</h2>
      <ul>
        <li>Demographic — who are they?</li>
        <li>Geographic — where are they?</li>
        <li>Behavioral — what do they do?</li>
        <li>Psychographic — what do they value/believe?</li>
        <li>Income — what is their purchasing capacity?</li>
        <li>Industry — what industry do they operate in?</li>
        <li>Company size — how large is their organization?</li>
        <li>Job role — what role do they perform?</li>
        <li>Purchase frequency — how often do they buy?</li>
        <li>Spending level — how much do they spend?</li>
        <li>New customer — have they purchased before?</li>
        <li>Existing customer — what relationship do they already have?</li>
        <li>High-value — how economically valuable are they?</li>
        <li>Price-sensitive — how strongly does price affect them?</li>
        <li>Convenience-focused — how much do they value ease/time savings?</li>
        <li>Quality-focused — how strongly do they prioritize quality?</li>
        <li>Innovation-focused — how strongly do they seek new solutions?</li>
        <li>Service-focused — how much do they value assistance?</li>
        <li>Mobile-first — is mobile their primary digital channel?</li>
        <li>Digital-first — are digital channels their primary interaction method?</li>
        <li>Offline-first — are physical/traditional channels primary?</li>
        <li>Urban — are they in a dense urban market?</li>
        <li>Rural — are they in a less-dense/rural market?</li>
      </ul>

      <hr />

      <h2>Combining Multiple Segmentation Methods</h2>
      <pre>{`Geographic
    ↓
Urban
    ↓
Demographic
    ↓
Young Adults
    ↓
Behavioral
    ↓
Frequent Online Buyers
    ↓
Psychographic
    ↓
Convenience-Focused
    ↓
Target Segment`}</pre>
      <p>This creates a much more precise target than simply saying "Young people."</p>

      <hr />

      <h2>B2B Example</h2>
      <p>A software company could segment using:</p>
      <pre>{`Industry
   ↓
Retail
   ↓
Company Size
   ↓
SME
   ↓
Job Role
   ↓
Business Owner
   ↓
Behavior
   ↓
Uses spreadsheets heavily
   ↓
Psychographic
   ↓
Convenience-focused`}</pre>
      <p>
        Resulting segment: SME retail owners who rely heavily on spreadsheets and want a simpler
        way to manage their business.
      </p>

      <hr />

      <h2>B2C Example</h2>
      <pre>{`Geographic
   ↓
Urban
   ↓
Behavioral
   ↓
Frequent Buyer
   ↓
Spending
   ↓
Medium/High
   ↓
Psychographic
   ↓
Convenience-Focused`}</pre>
      <p>The business could then emphasize fast search, easy checkout, personalized recommendations, delivery convenience, loyalty benefits, and bundles.</p>

      <hr />

      <h2>Segmentation vs Targeting</h2>
      <ul>
        <li>Segmentation — dividing the market into groups</li>
        <li>Targeting — choosing which group or groups the business will actively serve</li>
        <li>Positioning — determining how the business wants its offer to be understood by the selected target market</li>
      </ul>
      <pre>{`Segmentation
      ↓
Targeting
      ↓
Positioning
      ↓
Marketing
      ↓
Sales`}</pre>

      <hr />

      <h2>Segment Evaluation Framework</h2>
      <ul>
        <li>Size — is the segment large enough?</li>
        <li>Growth — is demand growing, stable, or declining?</li>
        <li>Need — does the segment have a meaningful problem?</li>
        <li>Purchasing power — can customers afford the offer?</li>
        <li>Accessibility — can you reach them?</li>
        <li>Competition — how strong are alternatives?</li>
        <li>Differentiation — can you serve them distinctly?</li>
        <li>Profitability — can you earn sustainable margins?</li>
        <li>Retention — will customers remain?</li>
        <li>Strategic fit — does the segment fit your capabilities?</li>
        <li>Service cost — how expensive is it to serve?</li>
        <li>Expansion — can customers or the segment grow?</li>
      </ul>

      <hr />

      <h2>RFM Segmentation</h2>
      <p>
        A particularly useful customer segmentation system is RFM: Recency, Frequency, Monetary
        value.
      </p>
      <pre>{`R = Recency
F = Frequency
M = Monetary Value

R + F + M
      ↓
Customer Segment`}</pre>
      <ul>
        <li>Customer A — recent purchase + frequent + high spending → high-value active customer</li>
        <li>Customer B — old purchase + rare + low spending → reactivation candidate</li>
        <li>Customer C — recent + frequent + low spending → potential loyalty/upsell candidate</li>
      </ul>
      <p>RFM can be particularly useful for e-commerce and other businesses with sufficient transaction data.</p>

      <hr />

      <h2>Segmentation Metrics</h2>
      <p><strong>Segment Revenue = Sum of Revenue from Customers in Segment</strong></p>
      <p><strong>Conversion Rate = (Customers ÷ Qualified Prospects) × 100</strong></p>
      <p><strong>CAC = (Marketing + Sales Cost) ÷ New Customers</strong></p>
      <p><strong>AOV = Revenue ÷ Number of Orders</strong></p>
      <p><strong>Retention = (Customers Remaining at End ÷ Customers at Start) × 100</strong></p>
      <p><strong>LTV = Average Revenue per Customer × Gross Margin × Average Customer Lifetime</strong></p>
      <p>Comparing these metrics across segments helps determine which segments are economically and strategically meaningful, rather than selecting segments based only on size.</p>

      <hr />

      <h2>Common Segmentation Mistakes</h2>
      <ol>
        <li>Creating segments that don't change decisions.</li>
        <li>Making segments too narrow.</li>
        <li>Using stereotypes.</li>
        <li>Ignoring profitability.</li>
        <li>Ignoring customer lifetime value.</li>
        <li>Over-personalizing.</li>
        <li>Using poor-quality data.</li>
      </ol>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>A useful segment changes what the business does.</li>
        <li>Segment by meaningful differences, not just by label.</li>
        <li>Combine segmentation dimensions for precision.</li>
        <li>Evaluate segments using demand, economics, accessibility, and fit.</li>
        <li>Revenue is not profit — evaluate margin and cost to serve.</li>
        <li>Segment-specific offers can share a common core product and platform.</li>
        <li>RFM is a practical starting point for behavioral segmentation.</li>
        <li>Segmentation is the input; targeting and positioning are the decisions.</li>
        <li>Measure segments over time, not just once.</li>
        <li>Refine segmentation as customer behavior and market conditions change.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Segment → Understand → Evaluate → Target → Position → Customize → Reach → Convert →
        Retain → Measure → Refine.
      </p>
      <p>
        The fundamental principle: good segmentation does not simply divide customers into
        groups; it creates groups that reveal meaningful differences in needs, behavior,
        economics, or channel preferences — and those differences lead to better business
        decisions.
      </p>
    </LessonLayout>
  )
}
