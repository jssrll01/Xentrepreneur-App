import LessonLayout from '../components/LessonLayout'

export default function ProductTactics() {
  return (
    <LessonLayout
      number="05"
      title="Product Tactics"
      summary="10 methods to design, launch, improve, package, and expand products that generate sustainable value."
    >
      <p>
        Product tactics are practical methods businesses use to design, launch,
        improve, package, differentiate, and expand products. They help a
        business avoid wasting resources, respond to customer needs, test
        ideas, and create products that generate sustainable value.
      </p>
      <p>
        A strong product strategy does not require launching a perfect product
        immediately. Instead, businesses often start with a focused version,
        learn from customers, improve it, and gradually expand the product.
      </p>

      <hr />

      <h2>1. Minimum Viable Product (MVP)</h2>
      <h3>Definition</h3>
      <p>A Minimum Viable Product (MVP) is the simplest usable version of a product that contains enough functionality to solve a specific customer problem and generate meaningful feedback.</p>
      <p>The goal is not to create a low-quality product. The goal is to avoid spending excessive time and money building features before knowing whether customers actually want the product.</p>

      <h3>How an MVP works</h3>
      <p>Customer problem → core solution → smallest useful product → launch → customer feedback → improvements → better product.</p>
      <p>For example, suppose you want to build an online marketplace. A huge first version might include user accounts, seller dashboards, product reviews, payment processing, delivery tracking, live chat, coupons, loyalty points, AI recommendations, multiple seller tools, and analytics.</p>
      <p>Instead, an MVP might contain only: product listings, product search, product details, shopping cart, checkout, and basic order management. Once real customers use it, you can determine which additional features are actually valuable.</p>

      <h3>How to create an MVP</h3>
      <ol>
        <li><strong>Identify the problem</strong> — ask: what specific problem is the product solving?</li>
        <li><strong>Identify the target customer</strong> — determine who experiences the problem.</li>
        <li><strong>Define the core value</strong> — determine the single most important result the customer should receive.</li>
        <li><strong>Remove unnecessary features</strong> — separate must-have, useful, nice-to-have, and unnecessary.</li>
        <li><strong>Build the smallest useful version</strong> — the MVP should still provide a complete enough experience to solve the core problem.</li>
        <li><strong>Launch to a limited audience</strong> — start with 10, 50, or 100 customers, a specific community, or a specific geographic area.</li>
        <li><strong>Collect feedback</strong> — measure usage, complaints, conversion, retention, customer requests, and abandonment.</li>
        <li><strong>Iterate</strong> — improve the product based on evidence rather than assumptions.</li>
      </ol>

      <h3>Example</h3>
      <p>A developer wants to create a booking platform. MVP: search service → select date → select time → book → confirmation. Later additions: reviews, payments, notifications, customer accounts, provider dashboard, and advanced scheduling.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Lower development cost</li>
        <li>Faster launch</li>
        <li>Faster learning</li>
        <li>Reduced risk</li>
        <li>Earlier customer feedback</li>
        <li>Easier experimentation</li>
        <li>Prevents unnecessary development</li>
      </ul>

      <h3>Risks</h3>
      <p>An MVP can fail if the business interprets "minimum" as "poor quality." Avoid launching something that is broken, unsafe, extremely confusing, unusable, or missing the actual core solution.</p>

      <h3>Key principle</h3>
      <p>Build the smallest product that creates real value, not the smallest product possible.</p>

      <hr />

      <h2>2. Product Iteration</h2>
      <h3>Definition</h3>
      <p>Product iteration is the process of repeatedly improving a product through cycles of development, testing, feedback, analysis, and refinement.</p>
      <p>Instead of "build → launch → finished," businesses use: build → launch → measure → learn → improve → test → repeat.</p>

      <h3>How product iteration works</h3>
      <p>Each iteration should attempt to improve something. For example: Version 1 basic marketplace. Version 2 improved search. Version 3 better product filtering. Version 4 personalized recommendations. Version 5 improved checkout. The product becomes progressively more useful.</p>

      <h3>How to implement product iteration</h3>
      <ol>
        <li><strong>Establish a baseline</strong> — measure the current product performance.</li>
        <li><strong>Find problems</strong> — use customer feedback, analytics, reviews, support requests, usability testing, and conversion data.</li>
        <li><strong>Identify improvements</strong> — determine what should change.</li>
        <li><strong>Build the change</strong> — implement the improvement.</li>
        <li><strong>Test it</strong> — determine whether the change actually helped.</li>
        <li><strong>Compare results</strong> — for example, old checkout conversion 62%, new checkout conversion 71%. The change may be worth keeping if other factors are controlled.</li>
      </ol>

      <h3>Types of iteration</h3>
      <ul>
        <li><strong>Functional iteration</strong> — improves what the product can do.</li>
        <li><strong>Design iteration</strong> — improves appearance and usability.</li>
        <li><strong>Performance iteration</strong> — makes the product faster or more reliable.</li>
        <li><strong>Customer-experience iteration</strong> — makes the overall experience easier.</li>
        <li><strong>Business iteration</strong> — changes pricing, packaging, distribution, or monetization.</li>
      </ul>

      <h3>Important principle</h3>
      <p>Do not change everything simultaneously. If you change design, pricing, features, checkout, and marketing at the same time, it becomes difficult to determine what caused the result.</p>

      <hr />

      <h2>3. Feature Prioritization</h2>
      <h3>Definition</h3>
      <p>Feature prioritization is the process of deciding which product features should be developed first, later, or not at all.</p>
      <p>Businesses have limited money, developers, time, design resources, and customer attention. Therefore, every feature has an opportunity cost.</p>

      <h3>Why it matters</h3>
      <p>Suppose customers request: dark mode, faster checkout, AI recommendations, better search, animated profile pictures. A business should not automatically build everything. A feature should be evaluated based on factors such as customer value, business value, development effort, strategic importance, risk, and urgency.</p>

      <h3>Simple prioritization matrix</h3>
      <ul>
        <li>Faster checkout — high customer value, low effort — very high priority.</li>
        <li>Better search — high customer value, medium effort — high priority.</li>
        <li>AI recommendations — medium customer value, high effort — medium priority.</li>
        <li>Animated profiles — low customer value, medium effort — low priority.</li>
      </ul>

      <h3>RICE framework</h3>
      <p><strong>R — Reach</strong> — how many users will benefit?</p>
      <p><strong>I — Impact</strong> — how significantly will it help?</p>
      <p><strong>C — Confidence</strong> — how confident are you in the estimates?</p>
      <p><strong>E — Effort</strong> — how much work is required?</p>
      <p><strong>RICE Score = (Reach × Impact × Confidence) ÷ Effort</strong></p>

      <h3>MoSCoW method</h3>
      <ul>
        <li><strong>Must have</strong> — essential.</li>
        <li><strong>Should have</strong> — important but not essential.</li>
        <li><strong>Could have</strong> — useful but optional.</li>
        <li><strong>Won't have</strong> — not included in the current version.</li>
      </ul>

      <h3>Feature prioritization example</h3>
      <p>For an e-commerce website:</p>
      <p><strong>Must have:</strong> product search, product details, cart, checkout.</p>
      <p><strong>Should have:</strong> reviews, wishlist, order tracking.</p>
      <p><strong>Could have:</strong> AI recommendations, loyalty points, social sharing.</p>
      <p><strong>Later:</strong> virtual shopping assistant, advanced personalization.</p>

      <h3>Key principle</h3>
      <p>Prioritize features based on value and evidence, not simply because they sound impressive.</p>

      <hr />

      <h2>4. Product Bundling</h2>
      <h3>Definition</h3>
      <p>Product bundling means combining multiple products or services into one package.</p>
      <p>For example: Website Hosting + Domain + Business Email = Business Website Package.</p>

      <h3>Why businesses use bundling</h3>
      <ul>
        <li>Increase average order value</li>
        <li>Make purchasing easier</li>
        <li>Encourage customers to buy multiple products</li>
        <li>Create perceived value</li>
        <li>Move slower-selling products</li>
        <li>Differentiate an offer</li>
      </ul>

      <h3>Types of bundles</h3>
      <ul>
        <li><strong>Pure bundle</strong> — products are available only as a bundle.</li>
        <li><strong>Mixed bundle</strong> — products are available individually and as a bundle.</li>
        <li><strong>Complementary bundle</strong> — products naturally work together. Example: laptop + mouse + laptop bag.</li>
        <li><strong>Service bundle</strong> — multiple services are combined. Example: website design + hosting + maintenance.</li>
      </ul>

      <h3>Example</h3>
      <p>Individual prices: website ₱5,000, hosting ₱1,500, domain ₱800. Total ₱7,300. Bundle: Complete Website Package ₱6,500. The customer receives convenience and a discount, while the business increases the likelihood that the customer purchases all three products.</p>

      <h3>Important consideration</h3>
      <p>The bundle should make logical sense. A poor bundle would be website hosting + headphones + agricultural seeds — there is no obvious relationship. A better bundle is website + domain + hosting + business email.</p>

      <hr />

      <h2>5. Limited Product Launches</h2>
      <h3>Definition</h3>
      <p>A limited product launch is a product release where availability is intentionally restricted by quantity, time, location, customer group, invitation, or production capacity.</p>
      <p>The purpose can be to test demand, control risk, create exclusivity, or manage limited inventory.</p>

      <h3>Example</h3>
      <p>A clothing business creates a Limited Edition Collection with only 100 pieces available. Instead of producing 10,000 pieces immediately, the company can observe actual demand.</p>

      <h3>Types</h3>
      <ul>
        <li><strong>Quantity-limited</strong> — only 100 units.</li>
        <li><strong>Time-limited</strong> — available for 7 days.</li>
        <li><strong>Audience-limited</strong> — available to members first.</li>
        <li><strong>Geographically limited</strong> — available in selected locations.</li>
        <li><strong>Invitation-only</strong> — only selected customers can purchase or participate.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Reduces initial inventory risk</li>
        <li>Tests demand</li>
        <li>Creates exclusivity</li>
        <li>Generates customer feedback</li>
        <li>Helps estimate future production</li>
        <li>Can create marketing attention</li>
      </ul>

      <h3>Risks</h3>
      <p>Artificial scarcity can damage trust if customers discover that the limitation was misleading. Only claim genuine limitations.</p>

      <h3>Example</h3>
      <p>A software company launches a new feature to 5% of users. 100% users → 5% test group → measure results → fix problems → expand release. This is also known as a controlled rollout.</p>

      <hr />

      <h2>6. Seasonal Products</h2>
      <h3>Definition</h3>
      <p>Seasonal products are products designed to meet demand that occurs during a particular season, holiday, event, or period.</p>
      <p>Examples include Christmas products, Valentine's products, back-to-school products, summer products, rainy-season products, graduation products, Halloween products, and holiday gift packages.</p>

      <h3>Seasonal demand cycle</h3>
      <p>Low demand → preparation → demand increase → peak season → demand decline → clearance/storage → next season.</p>

      <h3>How to develop seasonal products</h3>
      <ol>
        <li><strong>Identify seasonal demand</strong> — look at historical sales, search trends, customer requests, and competitor activity.</li>
        <li><strong>Determine production timing</strong> — products need to be ready before peak demand.</li>
        <li><strong>Estimate inventory</strong> — too much inventory creates storage costs, unsold products, discounts, and waste. Too little creates stockouts, lost sales, and customer dissatisfaction.</li>
        <li><strong>Prepare marketing early</strong> — do not wait until peak demand has already arrived.</li>
        <li><strong>Plan post-season inventory</strong> — possible strategies: clearance, bundling, storage, repurposing, and returning inventory to suppliers when possible.</li>
      </ol>

      <h3>Example</h3>
      <p>A business sells Christmas gift boxes. September: product planning. October: production. November: marketing. December: peak sales. January: clearance.</p>

      <hr />

      <h2>7. Custom Products</h2>
      <h3>Definition</h3>
      <p>Custom products are products that customers can modify or personalize according to their preferences.</p>
      <p>Examples: customized shirts, personalized mugs, engraved accessories, custom websites, custom furniture, personalized gift boxes, custom software.</p>

      <h3>Customization levels</h3>
      <p>Standard product → selectable options → personalized product → fully custom product.</p>

      <h3>Example</h3>
      <p>A clothing business might offer:</p>
      <p><strong>Standard:</strong> black T-shirt.</p>
      <p><strong>Customizable:</strong> color, size, print.</p>
      <p><strong>Personalized:</strong> customer name, custom image, custom message.</p>
      <p><strong>Fully custom:</strong> customer submits an original design.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Differentiation</li>
        <li>Higher perceived value</li>
        <li>Potentially higher prices</li>
        <li>Customer involvement</li>
        <li>Greater personalization</li>
        <li>Reduced direct comparison with standardized products</li>
      </ul>

      <h3>Risks</h3>
      <p>Customization can increase production time, complexity, error rates, customer support, returns difficulty, and cost.</p>

      <h3>How to manage customization</h3>
      <p>Use clearly defined options. For example, color options, size options, a text field with a character limit, a live preview, and a fixed price. This is easier to manage than allowing unlimited customization.</p>

      <hr />

      <h2>8. Add-On Features</h2>
      <h3>Definition</h3>
      <p>Add-on features are optional additional features or services that customers can purchase or activate on top of the core product. The core product works without the add-on.</p>

      <h3>Example</h3>
      <p>A website-building service: core package is a website. Add-ons: SEO, extra pages, analytics, maintenance, custom animations.</p>

      <h3>Add-on vs core feature</h3>
      <p>A core feature is necessary for the main product experience. An add-on provides additional value without being essential.</p>
      <p>Example: video platform. Core: video playback. Add-ons: offline downloads, premium quality, advanced subtitles, additional storage.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Increases revenue per customer</li>
        <li>Allows personalization</li>
        <li>Gives customers pricing flexibility</li>
        <li>Avoids forcing everyone to pay for advanced functionality</li>
      </ul>

      <h3>Example</h3>
      <p>A hosting company could offer basic hosting ₱199/month, plus add-ons: extra storage ₱50, backup ₱50, security monitoring ₱100, business email ₱75.</p>

      <h3>Important principle</h3>
      <p>Add-ons should provide real additional value. If a basic product intentionally feels incomplete solely to force customers into add-ons, customers may perceive the pricing structure negatively.</p>

      <hr />

      <h2>9. Premium Features</h2>
      <h3>Definition</h3>
      <p>Premium features are advanced capabilities offered only to customers who pay for a higher-priced product tier, subscription, or plan. They are commonly used in SaaS, mobile apps, streaming platforms, productivity software, membership businesses, and online services.</p>

      <h3>Example</h3>
      <p><strong>Free:</strong> basic tools, limited storage, standard support.</p>
      <p><strong>Pro:</strong> everything in free, advanced tools, more storage, priority support.</p>
      <p><strong>Business:</strong> everything in pro, team management, advanced analytics, enterprise controls.</p>

      <h3>Premium feature strategy</h3>
      <p>The free or basic product should provide meaningful value. The premium product should provide additional value that is sufficiently important to justify the price.</p>

      <h3>Premium features can include</h3>
      <ul>
        <li>Higher limits</li>
        <li>Advanced analytics</li>
        <li>Automation</li>
        <li>Additional storage</li>
        <li>Advanced customization</li>
        <li>Priority support</li>
        <li>Collaboration tools</li>
        <li>Advanced security</li>
        <li>Professional exports</li>
        <li>Integrations</li>
      </ul>

      <h3>Example</h3>
      <p>A design application. Free: basic templates, standard exports. Premium: premium templates, advanced editing, high-resolution exports, brand kits, background removal.</p>

      <h3>Important metrics</h3>
      <p><strong>Free-to-paid conversion = Paid Users ÷ Free Users × 100</strong></p>
      <p><strong>Premium revenue</strong> — revenue generated from premium customers.</p>
      <p><strong>Feature usage</strong> — how frequently customers actually use premium functionality.</p>
      <p><strong>Upgrade rate</strong> — percentage of users moving to higher tiers.</p>
      <p><strong>Churn</strong> — whether premium customers remain subscribed.</p>

      <h3>Risk</h3>
      <p>A premium feature should not simply be a basic function artificially locked behind a paywall if customers reasonably expect it as part of the core product.</p>

      <hr />

      <h2>10. Modular Products</h2>
      <h3>Definition</h3>
      <p>A modular product is designed as a collection of separate components or modules that can be combined, removed, replaced, or upgraded. Instead of selling one rigid product, the business creates a flexible system.</p>

      <h3>Basic structure</h3>
      <p>Core product with optional modules A, B, and C.</p>

      <h3>Example: business software</h3>
      <p>A company could create a business platform with: Sales Module, Inventory Module, Accounting Module, CRM Module, Marketing Module, Analytics Module.</p>
      <p>A small business might purchase: core + sales + inventory.</p>
      <p>A larger company could purchase: core + sales + inventory + CRM + accounting + analytics.</p>

      <h3>Modular product vs add-on</h3>
      <p>These concepts are related but not identical.</p>
      <p><strong>Modular product:</strong> product is structured into modules; modules can form major parts of the system; often designed for different customer configurations; can be independently upgraded.</p>
      <p><strong>Add-on feature:</strong> additional functionality is attached; usually smaller optional functionality; often designed to enhance a standard product; usually extends the core product.</p>

      <h3>Advantages</h3>
      <ul>
        <li>Flexible configurations</li>
        <li>Easier upgrades</li>
        <li>Different customer packages</li>
        <li>Potential recurring revenue</li>
        <li>Easier expansion</li>
        <li>Customers pay for what they need</li>
        <li>Products can grow with customers</li>
      </ul>

      <h3>Risks</h3>
      <p>Too many modules can create complexity, confusing pricing, integration problems, difficult support, and a fragmented user experience.</p>

      <h3>Example</h3>
      <p>A business website platform could have a core (website builder, hosting) and optional modules (e-commerce, booking, membership, blog, analytics, marketing automation). A customer can start small and add modules as the business grows.</p>

      <hr />

      <h2>Product Tactics Comparison</h2>
      <ul>
        <li><strong>Minimum Viable Product</strong> — Test a product idea — New products</li>
        <li><strong>Product Iteration</strong> — Improve the product — Existing products</li>
        <li><strong>Feature Prioritization</strong> — Decide what to build — Product development</li>
        <li><strong>Product Bundling</strong> — Combine products — Increase value/order size</li>
        <li><strong>Limited Product Launch</strong> — Control/test release — New or exclusive products</li>
        <li><strong>Seasonal Products</strong> — Capture seasonal demand — Holidays/events</li>
        <li><strong>Custom Products</strong> — Personalize products — Differentiation</li>
        <li><strong>Add-On Features</strong> — Extend the core product — Additional revenue</li>
        <li><strong>Premium Features</strong> — Encourage upgrades — Freemium/subscription</li>
        <li><strong>Modular Products</strong> — Provide flexible configurations — Complex products/services</li>
      </ul>

      <hr />

      <h2>How These Product Tactics Work Together</h2>
      <p>These tactics are most powerful when combined rather than used independently. A business could use the following product-development system:</p>
      <pre>{`CUSTOMER PROBLEM
                       │
                       ↓
                PRODUCT IDEA
                       │
                       ↓
                    MVP
                       │
                       ↓
              LIMITED LAUNCH
                       │
                       ↓
                CUSTOMER DATA
                       │
                       ↓
             FEATURE PRIORITIZATION
                       │
                       ↓
              PRODUCT ITERATION
                       │
                       ↓
             ┌─────────┴─────────┐
             ↓                   ↓
        CORE PRODUCT        OPTIONAL VALUE
             │                   │
             │            ┌──────┴──────┐
             │            ↓             ↓
             │        ADD-ONS       PREMIUM
             │
             ↓
       MODULAR PRODUCT
             │
             ↓
       PRODUCT BUNDLES
             │
             ↓
      CUSTOM / SEASONAL
         VARIATIONS
             │
             ↓
       EXPANDED PRODUCT`}</pre>

      <hr />

      <h2>Product Tactics and Revenue</h2>
      <p>Product tactics directly affect several financial metrics.</p>

      <h3>Average Order Value</h3>
      <p><strong>AOV = Total Revenue ÷ Number of Orders</strong></p>
      <p>Bundling and add-ons can increase AOV.</p>

      <h3>Conversion Rate</h3>
      <p><strong>Conversion Rate = Customers ÷ Visitors × 100</strong></p>
      <p>A simpler product or better feature set can improve conversion.</p>

      <h3>Customer Lifetime Value</h3>
      <p><strong>LTV ≈ Average Purchase Value × Purchase Frequency × Customer Lifespan</strong></p>
      <p>Premium features, modules, and additional products can increase the value generated by existing customers.</p>

      <h3>Product Adoption</h3>
      <p>Measures how many customers actually use a new product or feature.</p>
      <p><strong>Feature Adoption = Users Using Feature ÷ Eligible Users × 100</strong></p>

      <h3>Upgrade Rate</h3>
      <p><strong>Upgrade Rate = Customers Upgrading ÷ Eligible Customers × 100</strong></p>
      <p>Useful for premium features and modular products.</p>

      <h3>Bundle Attach Rate</h3>
      <p>Measures how frequently customers purchase a bundle or additional product.</p>
      <p><strong>Attach Rate = Customers Purchasing Add-on ÷ Core Product Customers × 100</strong></p>

      <hr />

      <h2>Product Development Decision Framework</h2>
      <p>When considering a new product or feature, ask:</p>
      <ol>
        <li><strong>Does it solve a real problem?</strong> If not, reconsider building it.</li>
        <li><strong>Who needs it?</strong> Identify the target customer.</li>
        <li><strong>What is the minimum useful version?</strong> This determines the MVP.</li>
        <li><strong>What should be built first?</strong> Use feature prioritization.</li>
        <li><strong>Can demand be tested with a limited launch?</strong> If uncertainty is high, test before scaling.</li>
        <li><strong>Should it be standard or optional?</strong> Determine whether it belongs in the core product, add-ons, or premium tier.</li>
        <li><strong>Should the product be modular?</strong> If customers have substantially different needs, modularity may be appropriate.</li>
        <li><strong>Can products logically be bundled?</strong> Look for complementary products.</li>
        <li><strong>Is demand seasonal?</strong> Plan production, inventory, and marketing around demand cycles.</li>
        <li><strong>Does customization create enough value?</strong> Customization should justify its additional complexity and cost.</li>
      </ol>

      <hr />

      <h2>Product Tactics Strategy Map</h2>
      <pre>{`PRODUCT STRATEGY
                         │
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
   BUILD SMART       IMPROVE SMART    PACKAGE SMART
        │                │                │
       MVP           Iteration         Bundling
        │                │                │
 Limited Launch   Feature Priority   Add-ons
        │                │                │
        └───────────────┬┴───────────────┘
                        ↓
                 CUSTOMER VALUE
                        │
              ┌─────────┼─────────┐
              ↓         ↓         ↓
          Custom     Premium    Modular
          Products   Features   Products
              │         │         │
              └─────────┼─────────┘
                        ↓
               PRODUCT EXPANSION
                        │
                        ↓
               Seasonal Products
                        │
                        ↓
                 MARKET GROWTH`}</pre>

      <hr />

      <h2>The Core Principle of Product Tactics</h2>
      <p>A strong product system follows a continuous cycle:</p>
      <p><strong>Solve → Launch → Measure → Learn → Prioritize → Improve → Package → Expand</strong></p>
      <p>The objective is not simply to create more features or more products. The objective is to create a product system where each addition has a clear purpose:</p>
      <ul>
        <li><strong>MVP</strong> reduces uncertainty.</li>
        <li><strong>Limited launches</strong> reduce release risk.</li>
        <li><strong>Feature prioritization</strong> focuses resources.</li>
        <li><strong>Iteration</strong> improves the product.</li>
        <li><strong>Bundling</strong> increases the value of a purchase.</li>
        <li><strong>Add-ons</strong> expand customer choices.</li>
        <li><strong>Premium features</strong> create upgrade opportunities.</li>
        <li><strong>Modular products</strong> provide flexibility.</li>
        <li><strong>Custom products</strong> provide personalization.</li>
        <li><strong>Seasonal products</strong> capture time-specific demand.</li>
      </ul>
      <p>Together, these tactics allow a business to start small, learn from actual customers, improve continuously, and expand its product offering without unnecessarily increasing complexity or cost.</p>
    </LessonLayout>
  )
}
