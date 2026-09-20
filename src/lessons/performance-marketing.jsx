import LessonLayout from '../components/LessonLayout'

export default function PerformanceMarketing() {
  return (
    <LessonLayout
      number="26"
      title="Performance Marketing"
      summary="11 result-driven strategies to pay for outcomes, measure everything, and scale what actually works."
    >
      <h2>Performance Marketing</h2>
      <h3>Definition</h3>
      <p>
        Performance marketing is a results-oriented marketing approach where
        campaigns are planned, measured, and optimized based on specific
        business outcomes.
      </p>
      <p>Instead of focusing only on exposure, performance marketing emphasizes measurable actions such as clicks, leads, sign-ups, app installs, purchases, bookings, subscriptions, revenue, and profit.</p>
      <p>The basic principle is: <strong>Spend → Measure → Optimize → Improve Results.</strong></p>

      <h3>Performance marketing system</h3>
      <pre>{`Business Objective
       ↓
Target Audience
       ↓
Marketing Channel
       ↓
Campaign
       ↓
Ad / Content
       ↓
Landing Page
       ↓
Conversion
       ↓
Revenue / Customer Value
       ↓
Measurement
       ↓
Optimization
       ↓
Improved Campaign`}</pre>

      <h3>Performance marketing vs brand marketing</h3>
      <p><strong>Performance:</strong> focuses strongly on measurable actions; conversion-oriented; highly data-driven; short- and medium-term optimization common; CPC, CPA, ROAS, conversion rate; easier to attribute directly.</p>
      <p><strong>Brand:</strong> focuses strongly on awareness and perception; relationship/awareness-oriented; can rely more on qualitative measures; often long-term; reach, awareness, brand recall; attribution can be more difficult.</p>
      <p>The two approaches can work together: brand marketing → awareness → consideration → performance marketing → conversion → revenue → retention.</p>

      <hr />

      <h2>1. Pay-Per-Click Advertising</h2>
      <h3>Definition</h3>
      <p>Pay-per-click advertising (PPC) is an advertising model where an advertiser pays based on clicks or, depending on the platform and campaign type, other defined actions. Search advertising is a common example.</p>
      <p>A simplified process: user searches → ad auction → advertiser enters auction → ad displayed → user clicks → landing page → conversion.</p>

      <h3>Example</h3>
      <p>A web-development business wants customers searching for website developer, business website, ecommerce website, and website design. It creates search advertisements leading to a service landing page.</p>

      <h3>Important PPC metrics</h3>
      <p><strong>CPC = Ad Spend ÷ Clicks</strong> — example: ₱5,000 spend ÷ 500 clicks = ₱10.</p>
      <p><strong>CTR = Clicks ÷ Impressions × 100</strong></p>
      <p><strong>CVR = Conversions ÷ Clicks × 100</strong></p>
      <p><strong>CPA = Ad Spend ÷ Conversions</strong></p>
      <p>Example: ₱10,000 advertising spend → 1,000 clicks → 100 leads → 20 customers. CPC = ₱10. Lead conversion = 10%. CPA = ₱500.</p>

      <h3>Implementation</h3>
      <ol>
        <li>Define the conversion.</li>
        <li>Define the target audience.</li>
        <li>Select relevant keywords or targeting.</li>
        <li>Create ad variations.</li>
        <li>Build an appropriate landing page.</li>
        <li>Install conversion tracking.</li>
        <li>Set a budget.</li>
        <li>Launch.</li>
        <li>Monitor performance.</li>
        <li>Optimize based on meaningful results.</li>
      </ol>

      <h3>Benefits</h3>
      <p>Measurable, can generate traffic quickly, budget can be controlled, easy to test, strong targeting capabilities, can scale successful campaigns.</p>

      <h3>Risks</h3>
      <p>Advertising costs can rise, poor targeting wastes budget, clicks do not guarantee customers, tracking errors create misleading data, competition can increase CPC.</p>

      <hr />

      <h2>2. Social-Media Advertising</h2>
      <h3>Definition</h3>
      <p>Social-media advertising uses paid advertisements on social platforms to reach selected audiences. Common campaign objectives include awareness, traffic, engagement, lead generation, app installs, sales, and conversions.</p>
      <p>Campaign structure: campaign → ad set/audience → ad → landing page → conversion.</p>

      <h3>Targeting</h3>
      <p>Depending on the platform and applicable privacy rules, targeting can use signals such as location, broad demographics, interests, behaviors, website interactions, customer lists where permitted, and platform engagement.</p>

      <h3>Example</h3>
      <p>Xmarket launches a new category of computer accessories. Objective: generate purchases. Audience: people interested in computers and accessories. Creative: short product video. Offer: selected products discounted. CTA: shop now. Destination: Xmarket category page.</p>

      <h3>Important metrics</h3>
      <p>Impressions, reach, frequency, CTR, CPC, CPM, conversion rate, CPA, ROAS, and revenue.</p>
      <p><strong>CPM = Ad Spend ÷ Impressions × 1000</strong></p>
      <p><strong>ROAS = Attributed Revenue ÷ Ad Spend</strong></p>
      <p>If ₱20,000 generates ₱80,000 attributed revenue, ROAS = 4. That means ₱4 of attributed revenue per ₱1 of advertising spend. It does not automatically mean ₱4 of profit.</p>

      <h3>Benefits</h3>
      <p>Strong creative opportunities, large audiences, detailed campaign measurement, multiple advertising formats, useful for products and services.</p>

      <h3>Risks</h3>
      <p>Creative fatigue, audience saturation, rising costs, weak targeting, platform algorithm changes, high engagement but low conversion.</p>

      <hr />

      <h2>3. Display Advertising</h2>
      <h3>Definition</h3>
      <p>Display advertising uses visual advertisements placed across websites, apps, or digital networks. Common formats include banner ads, image ads, responsive ads, rich-media ads, video display placements, and native-style placements.</p>

      <h3>Example</h3>
      <p>A computer store advertises a new laptop category using banner advertisements across relevant websites. Website visitor → sees display ad → clicks → product landing page → purchase.</p>

      <h3>Display advertising objectives</h3>
      <p>Display ads can be used for awareness, website traffic, product discovery, retargeting, lead generation, and sales.</p>

      <h3>Metrics</h3>
      <p>Impressions, reach, frequency, CTR, CPC, CPM, conversions, CPA, viewability, and ROAS.</p>

      <h3>Display vs search advertising</h3>
      <p><strong>Display:</strong> user may not be actively searching; visual formats are important; strong for awareness and discovery; can create interest; retargeting is common.</p>
      <p><strong>Search:</strong> user often has active search intent; text/ad relevance is important; strong for demand capture; often responds to existing interest; keyword intent is important.</p>

      <h3>Risks</h3>
      <p>Banner blindness, low CTR, poor placements, ad fraud, weak targeting, high impressions without meaningful action.</p>

      <hr />

      <h2>4. Retargeting</h2>
      <h3>Definition</h3>
      <p>Retargeting is advertising to people who have previously interacted with a business, website, app, or advertising environment.</p>
      <p>For example: customer visits product page → doesn't purchase → leaves website → later sees relevant advertisement → returns → purchases.</p>

      <h3>Example</h3>
      <p>Someone visits an Xmarket laptop page but leaves without buying. Later, they may see an appropriate advertisement reminding them about the product or showing relevant alternatives.</p>

      <h3>Retargeting audiences</h3>
      <p>Website visitors can be segmented into viewed product, viewed category, added to cart, started checkout, and existing customers. These groups should not necessarily receive the same message.</p>

      <h3>Example segmentation</h3>
      <p><strong>Product viewer:</strong> "Explore the laptop you viewed."</p>
      <p><strong>Cart abandoner:</strong> "Your selected items are still available."</p>
      <p><strong>Recent purchaser:</strong> "Explore compatible accessories."</p>

      <h3>Frequency control</h3>
      <p>Retargeting can become annoying if the same person sees the same ad repeatedly. Therefore use frequency limits, audience exclusions, time windows, creative rotation, and purchase exclusions.</p>

      <h3>Benefits</h3>
      <p>Re-engages existing visitors, can recover lost opportunities, uses previous interaction signals, often supports conversion campaigns.</p>

      <h3>Risks</h3>
      <p>Privacy concerns, overexposure, poor segmentation, showing products after purchase, customers feeling followed around the internet.</p>

      <hr />

      <h2>5. Remarketing</h2>
      <h3>Definition</h3>
      <p>Remarketing is the practice of re-engaging people who have previously interacted with a business.</p>
      <p>In everyday digital-marketing usage, remarketing and retargeting are often used interchangeably, although some platforms and marketers use the terms differently.</p>
      <p>Remarketing can include email, SMS, push notifications, advertising, messenger, customer lists, and personalized offers.</p>

      <h3>Example</h3>
      <p>A customer purchased a keyboard three months ago. The business sends "Looking for an upgrade? Explore our latest mechanical keyboards." That is remarketing because the communication is based on an existing customer relationship.</p>

      <h3>Retargeting vs remarketing</h3>
      <p><strong>Retargeting:</strong> often refers to advertising; commonly associated with digital ads; usually behavior-based; often reaches previous visitors.</p>
      <p><strong>Remarketing:</strong> broader re-engagement concept; can include email, SMS, ads, etc.; can be behavior- or relationship-based; can reach previous customers.</p>
      <p>The exact terminology varies by platform.</p>

      <hr />

      <h2>6. Conversion-Rate Optimization</h2>
      <h3>Definition</h3>
      <p>Conversion-rate optimization (CRO) is the systematic process of improving a website, landing page, checkout, form, or customer journey to increase the percentage of users who complete a desired action.</p>
      <p>Examples of conversions: purchase, registration, lead submission, booking, download, subscription, and trial activation.</p>

      <h3>Conversion rate</h3>
      <p><strong>Conversion Rate = Conversions ÷ Eligible Visitors × 100</strong></p>
      <p>Example: 10,000 visitors produce 300 purchases. CVR = 300 ÷ 10,000 × 100 = 3%.</p>

      <h3>CRO process</h3>
      <p>Measure → identify problem → research → create hypothesis → test → analyze → implement → measure again.</p>

      <h3>What can be optimized?</h3>
      <p><strong>Headlines</strong> — make the value proposition immediately understandable.</p>
      <p><strong>CTA</strong> — examples: buy now, get started, request a quote, book a demo.</p>
      <p><strong>Product information</strong> — improve images, descriptions, specifications, pricing clarity, reviews, and FAQs.</p>
      <p><strong>Forms</strong> — reduce unnecessary fields.</p>
      <p><strong>Trust</strong> — use appropriate reviews, testimonials, guarantees, security information, and business information.</p>
      <p><strong>Checkout</strong> — reduce unnecessary steps and friction.</p>

      <h3>Example</h3>
      <p>Before: 1,000 visitors → 20 purchases = CVR 2%. After testing and improving the experience: 1,000 visitors → 30 purchases = CVR 3%. Relative improvement: (3% − 2%) ÷ 2% × 100 = 50%. This is a 50% relative improvement, not a 50-percentage-point increase.</p>

      <h3>CRO risks</h3>
      <p>Making decisions from tiny samples, testing too many changes simultaneously, optimizing clicks instead of business outcomes, ignoring customer experience, assuming correlation proves causation.</p>

      <hr />

      <h2>7. Landing-Page Optimization</h2>
      <h3>Definition</h3>
      <p>Landing-page optimization focuses specifically on improving a page where visitors arrive after clicking an advertisement, email, search result, or other marketing link. The landing page should support the campaign objective.</p>

      <h3>Basic landing-page structure</h3>
      <p>Headline → value proposition → supporting explanation → product/service → proof → benefits → offer → CTA → FAQ/objections → final CTA.</p>

      <h3>Example</h3>
      <p>An advertisement says "Build Your Business Website From ₱15,000." The landing page should immediately reinforce that same offer.</p>
      <p><strong>Bad experience:</strong> ad "Business Website Package" → landing page "Generic homepage → About Us → Blog → Many unrelated services."</p>
      <p><strong>Better:</strong> ad "Business Website Package" → landing page "Business Website Package → Features → Examples → Price → CTA."</p>

      <h3>Important landing-page elements</h3>
      <p>Headline captures attention. Subheadline explains value. Hero section communicates offer. Benefits explain customer value. Features explain what is included. Proof builds credibility. CTA encourages action. Form captures lead information. FAQ addresses objections.</p>

      <h3>Landing-page metrics</h3>
      <p>Bounce/engagement measures, CTA clicks, form completion, conversion rate, cost per lead, revenue per visitor, and lead quality.</p>

      <hr />

      <h2>8. Funnel Optimization</h2>
      <h3>Definition</h3>
      <p>Funnel optimization improves each stage of the customer journey so that more qualified people progress toward the desired outcome.</p>
      <p>Example: 10,000 ad impressions → 1,000 clicks → 600 engaged visitors → 200 leads → 60 qualified leads → 20 customers. Every stage has potential leakage.</p>

      <h3>Funnel conversion</h3>
      <p><strong>Stage Conversion = Users Reaching Next Stage ÷ Users Entering Current Stage × 100</strong></p>

      <h3>Example</h3>
      <p>10,000 impressions → 500 clicks → 100 leads → 20 customers.</p>
      <p>Advertisement CTR: 500 ÷ 10,000 × 100 = 5%.</p>
      <p>Landing-page lead conversion: 100 ÷ 500 × 100 = 20%.</p>
      <p>Lead-to-customer conversion: 20 ÷ 100 × 100 = 20%.</p>
      <p>Overall impression-to-customer conversion: 20 ÷ 10,000 × 100 = 0.2%.</p>

      <h3>Funnel optimization principle</h3>
      <p>Do not automatically optimize the largest percentage. A small improvement at a high-volume stage can sometimes create more additional customers than a large improvement at a low-volume stage.</p>

      <h3>Funnel analysis</h3>
      <p>Traffic → landing page → lead/product view → checkout/form → purchase. Find where the biggest valuable leakage occurs, investigate why, and test improvements.</p>

      <hr />

      <h2>9. Lead-Generation Campaigns</h2>
      <h3>Definition</h3>
      <p>A lead-generation campaign is a marketing campaign designed to identify people who may become customers and collect appropriate contact or qualification information.</p>
      <p>A lead might provide name, email, phone number, company, business requirements, product interest, budget range, and project information.</p>

      <h3>Lead-generation funnel</h3>
      <p>Audience → advertisement/content → landing page → lead magnet/offer → form → lead → qualification → sales conversation → customer.</p>

      <h3>Lead magnets</h3>
      <p>Examples: free guide, checklist, calculator, template, free consultation, product demo, quote request, and free audit.</p>

      <h3>Example</h3>
      <p>A web-development business offers a "Free Website Performance Audit." The visitor submits a form. The business then evaluates the website and contacts qualified leads.</p>

      <h3>Lead quality</h3>
      <p>Not every lead has equal value. A useful lead-quality framework: fit + need + intent + budget + timing = lead quality.</p>

      <h3>Metrics</h3>
      <p><strong>CPL = Campaign Spend ÷ Leads</strong></p>
      <p><strong>Lead Conversion = Customers ÷ Leads × 100</strong></p>
      <p><strong>CAC = Total Sales and Marketing Cost ÷ New Customers</strong></p>
      <p>Example: ₱15,000 campaign → 300 leads → 60 qualified leads → 15 customers. CPL = ₱50. Lead to customer = 5%. The ₱50 CPL alone does not tell you whether the campaign is good economically. The value of those customers matters.</p>

      <hr />

      <h2>10. Performance-Based Advertising</h2>
      <h3>Definition</h3>
      <p>Performance-based advertising refers to advertising arrangements where payment, optimization, or compensation is tied to measurable performance rather than exposure alone. Possible performance measures include clicks, leads, sales, qualified leads, app installs, and conversions.</p>
      <p>Examples include pay-per-click, cost-per-lead, cost-per-acquisition, affiliate arrangements, and commission-based advertising.</p>

      <h3>Basic model</h3>
      <p>Advertiser → campaign → traffic → action → tracked result → payment/optimization.</p>

      <h3>Example</h3>
      <p>An advertiser agrees to pay a partner ₱300 for every qualified customer lead. If the partner generates 100 qualified leads: 100 × ₱300 = ₱30,000.</p>
      <p><strong>CPA = Advertising Cost ÷ Acquisitions</strong>. If ₱30,000 produces 100 acquisitions, CPA = ₱300.</p>

      <h3>Performance-based vs traditional media buying</h3>
      <p><strong>Performance-based:</strong> payment tied to defined results in some arrangements; strong measurement emphasis; easier to optimize toward outcomes; risk can be shared differently; tracking is critical.</p>
      <p><strong>Traditional exposure-based:</strong> payment often tied to exposure/placement; measurement can be less direct; often optimized toward reach; advertiser often pays for placement; reach/frequency often central.</p>

      <h3>Risks</h3>
      <p>Low-quality leads, fraudulent activity, attribution disputes, incentives that encourage poor-quality conversions, tracking failures, and unclear definition of "qualified" or "successful" action. Therefore, contracts should clearly define what counts as a conversion, attribution window, validation process, payment terms, fraud rules, refund/cancellation treatment, and reporting requirements.</p>

      <hr />

      <h2>Performance Marketing Economics</h2>
      <p>Performance marketing should connect advertising metrics to actual business economics.</p>
      <p>Impressions → clicks → visitors → leads → customers → revenue → gross profit → contribution.</p>

      <h3>Example</h3>
      <p>Suppose ad spend = ₱20,000; revenue = ₱100,000; gross margin = 30%.</p>
      <p>Gross profit: ₱100,000 × 30% = ₱30,000.</p>
      <p>Remaining gross profit after advertising: ₱30,000 − ₱20,000 = ₱10,000.</p>
      <p>The campaign generated ROAS = ₱100,000 ÷ ₱20,000 = 5. But ROAS of 5 does not mean a 5× profit. The actual result depends on cost of goods, fulfillment, returns, discounts, payment fees, staff costs, advertising costs, and customer lifetime value.</p>

      <hr />

      <h2>CAC, LTV and Performance Marketing</h2>
      <p>Performance marketing becomes more useful when acquisition cost is compared with customer value.</p>
      <p><strong>CAC = Sales + Marketing Cost ÷ New Customers</strong></p>
      <p><strong>LTV ≈ Average Purchase Value × Purchase Frequency × Customer Lifetime × Contribution Margin</strong></p>
      <p><strong>LTV:CAC = LTV ÷ CAC</strong></p>
      <p>Example: LTV = ₱3,000; CAC = ₱750. LTV:CAC = 4:1. This ratio is useful only when the LTV calculation, attribution, time period, and costs are defined consistently.</p>

      <hr />

      <h2>Performance Marketing Optimization Loop</h2>
      <pre>{`CAMPAIGN
                    ↓
                 TRAFFIC
                    ↓
                CONVERSION
                    ↓
                  DATA
                    ↓
              FIND BOTTLENECK
                    ↓
                HYPOTHESIS
                    ↓
                   TEST
                    ↓
                 RESULT
                    ↓
              IMPLEMENT / REJECT
                    ↓
                NEW CAMPAIGN`}</pre>

      <hr />

      <h2>Where to Optimize</h2>
      <p><strong>Ad level</strong> — wrong audience? Weak creative? Poor message?</p>
      <p><strong>Click level</strong> — low CTR? Wrong targeting? Weak CTA?</p>
      <p><strong>Landing page</strong> — poor value proposition? Slow page? Confusing layout?</p>
      <p><strong>Conversion</strong> — too much friction? Weak trust? Poor offer?</p>
      <p><strong>Sales</strong> — poor lead qualification? Slow follow-up?</p>
      <p><strong>Customer value</strong> — low retention? Low repeat purchases? Low margin?</p>
      <p>The correct solution depends on where the problem actually occurs.</p>

      <hr />

      <h2>Performance Marketing Dashboard</h2>
      <ul>
        <li>Impressions — ad exposure</li>
        <li>Reach — unique audience exposed</li>
        <li>Frequency — average exposure per person</li>
        <li>CTR — ability to generate clicks</li>
        <li>CPC — cost of traffic</li>
        <li>CPM — cost of exposure</li>
        <li>Landing-page CVR — ability to generate conversions</li>
        <li>CPL — cost per lead</li>
        <li>CPA — cost per acquisition</li>
        <li>CAC — cost to acquire customers</li>
        <li>ROAS — revenue relative to ad spend</li>
        <li>Revenue — sales generated</li>
        <li>Gross profit — revenue after COGS</li>
        <li>Contribution — value remaining after variable costs</li>
        <li>LTV — long-term customer value</li>
        <li>LTV:CAC — relationship between value and acquisition cost</li>
      </ul>

      <hr />

      <h2>Performance Marketing and the Customer Journey</h2>
      <p>Awareness (display/social ads) → consideration (search/content/ads) → intent (landing page/product page) → conversion (purchase/lead/signup) → retention (remarketing/email/push) → repeat value.</p>
      <p>Performance marketing is therefore not limited to acquiring new customers. It can also improve conversion, retention, reactivation, upselling, cross-selling, and customer lifetime value.</p>

      <hr />

      <h2>Retargeting + Funnel Optimization</h2>
      <p>These two concepts work especially well together. All visitors branch into browsed, added cart, and checkout, then into relevant ad, reminder, and recovery, then return, then conversion.</p>
      <p>The message should reflect the user's stage. Someone who merely viewed a product should not necessarily receive the same communication as someone who reached checkout.</p>

      <hr />

      <h2>CRO + Landing Pages + Funnel Optimization</h2>
      <p>These three concepts form a connected optimization system. Funnel optimization finds leakage; landing-page optimization improves page experience; CRO tests changes; higher conversion; more customers from existing traffic.</p>
      <p>This is important because increasing traffic is not the only way to increase sales. For example: scenario A = 10,000 visitors × 2% conversion = 200 customers. Scenario B = 10,000 visitors × 3% conversion = 300 customers. The business acquired 100 additional customers without increasing visitor volume.</p>

      <hr />

      <h2>Performance Marketing vs Performance Advertising</h2>
      <p>Performance advertising focuses specifically on paid advertising tied to measurable outcomes. Performance marketing is broader and can include paid advertising, conversion optimization, landing pages, lead generation, retargeting, analytics, funnel optimization, email/SMS re-engagement, and attribution.</p>

      <hr />

      <h2>Complete Performance Marketing System</h2>
      <ol>
        <li>Define business objective.</li>
        <li>Target audience.</li>
        <li>Attract (PPC/social/display).</li>
        <li>Capture (landing page/lead form).</li>
        <li>Convert (sales/signup/booking).</li>
        <li>Retarget (unconverted visitors).</li>
        <li>Remarket (existing customers/leads).</li>
        <li>Measure (CTR/CVR/CPA/CAC/ROAS).</li>
        <li>Optimize (ads + pages + funnel).</li>
        <li>Scale (profitable customer acquisition).</li>
      </ol>

      <hr />

      <h2>Performance Marketing Flywheel</h2>
      <pre>{`┌────────────────────────┐
       │  Target Right Audience │
       └────────────┬───────────┘
                    ↓
       ┌────────────────────────┐
       │   Generate Traffic     │
       └────────────┬───────────┘
                    ↓
       ┌────────────────────────┐
       │   Convert Visitors     │
       └────────────┬───────────┘
                    ↓
       ┌────────────────────────┐
       │     Generate Data      │
       └────────────┬───────────┘
                    ↓
       ┌────────────────────────┐
       │ Identify Bottlenecks   │
       └────────────┬───────────┘
                    ↓
       ┌────────────────────────┐
       │     Test Changes       │
       └────────────┬───────────┘
                    ↓
       ┌────────────────────────┐
       │   Improve Economics    │
       └────────────┬───────────┘
                    ↓
       ┌────────────────────────┐
       │ Scale What Works       │
       └────────────┬───────────┘
                    │
                    └──────────────→ Target Right Audience`}</pre>

      <hr />

      <h2>Common Performance Marketing Mistakes</h2>
      <p><strong>1. Optimizing for clicks instead of customers.</strong> Thousands of cheap clicks are not useful if they produce no customers.</p>
      <p><strong>2. Ignoring landing pages.</strong> A strong advertisement cannot fix a poor destination experience.</p>
      <p><strong>3. Looking only at ROAS.</strong> Revenue-based ROAS does not show the entire profitability picture.</p>
      <p><strong>4. Ignoring customer lifetime value.</strong> A customer may be worth substantially more than their first purchase.</p>
      <p><strong>5. Poor conversion tracking.</strong> Incorrect tracking creates incorrect optimization decisions.</p>
      <p><strong>6. Scaling too quickly.</strong> A campaign that performs well at one spending level may behave differently at a much larger scale.</p>
      <p><strong>7. Excessive retargeting.</strong> Repeated advertisements can create fatigue and negative experiences.</p>
      <p><strong>8. Testing without a hypothesis.</strong> Randomly changing everything makes it difficult to understand what caused a result.</p>
      <p><strong>9. Ignoring lead quality.</strong> A low CPL is not necessarily useful if most leads never become customers.</p>
      <p><strong>10. Confusing correlation with causation.</strong> A metric changing after a campaign does not automatically prove the campaign caused the change.</p>

      <hr />

      <h2>Core Principles of Performance Marketing</h2>
      <ol>
        <li>Define the business outcome before launching the campaign.</li>
        <li>Measure the complete funnel, not just the advertisement.</li>
        <li>Target relevant audiences rather than maximizing exposure indiscriminately.</li>
        <li>Match the advertisement to the landing page.</li>
        <li>Optimize for valuable conversions, not vanity metrics.</li>
        <li>Use data to identify bottlenecks.</li>
        <li>Test changes systematically.</li>
        <li>Control retargeting frequency.</li>
        <li>Respect customer privacy and applicable advertising rules.</li>
        <li>Evaluate CAC together with customer value.</li>
        <li>Evaluate revenue together with margins and costs.</li>
        <li>Do not assume a high ROAS automatically means high profit.</li>
        <li>Separate acquisition, conversion, retention, and profitability metrics.</li>
        <li>Scale campaigns only when the underlying economics remain acceptable.</li>
        <li>Treat performance marketing as a continuous optimization system rather than a one-time advertising campaign.</li>
      </ol>
    </LessonLayout>
  )
}
