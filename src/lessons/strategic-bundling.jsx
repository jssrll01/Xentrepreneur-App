import LessonLayout from '../components/LessonLayout'

export default function StrategicBundling() {
  return (
    <LessonLayout
      number="44"
      title="Strategic Bundling"
      summary="5 strategic bundle structures to guide the customer's decision path — Good-Better-Best, anchors, decoys, upgrades, and cross-sells."
    >
      <h2>Strategic Bundling</h2>
      <h3>Definition</h3>
      <p>
        Strategic bundling is the deliberate design of product or service
        packages to increase customer value, guide purchasing decisions, raise
        average order value, improve margins, simplify choices, and create a
        clearer path from entry-level to premium offerings.
      </p>
      <p>Unlike simply putting products together, strategic bundling considers what customers actually need, which products naturally work together, how prices are perceived, which package should be the entry point, which package should encourage upgrading, which products can increase the value of another product, how much choice customers should have, and how each package affects revenue and profit.</p>

      <h3>Strategic bundling structure</h3>
      <p>Strategic bundling branches into package design (Good-Better-Best, upgrade bundle, cross-sell), pricing psychology (anchor, decoy, value framing), and customer journey (entry, comparison, upgrade).</p>

      <hr />

      <h2>1. Good-Better-Best Packages</h2>
      <h3>Definition</h3>
      <p>Good-Better-Best (GBB) packaging offers three levels of the same general solution: good (basic solution), better (more features/value), and best (most complete/premium solution). The customer can choose according to their needs and budget.</p>

      <h3>Example — web development</h3>
      <p><strong>Good</strong> 1–3 page website ₱8,000. <strong>Better</strong> 5-page website + forms + analytics ₱15,000. <strong>Best</strong> full website + dashboard + automation + maintenance ₱30,000.</p>
      <p>The purpose isn't merely to have three prices. The packages should represent meaningfully different levels of value.</p>

      <h3>How it works</h3>
      <p>Customer need branches into good (basic), better (advanced), and best (complete), leading to a purchase. A customer who only needs basic functionality can choose good. A customer who wants additional capabilities can choose better. A customer who wants the complete solution can choose best.</p>

      <h3>How to implement it</h3>
      <p><strong>Step 1 — Identify the basic solution.</strong> Determine the minimum useful product or service. Example: Website Starter with responsive design, 3 pages, contact information, basic deployment.</p>
      <p><strong>Step 2 — Create the better package.</strong> Add features that solve additional problems. Example: Website Professional with everything in starter, up to 8 pages, contact form, analytics, SEO setup, basic maintenance.</p>
      <p><strong>Step 3 — Create the best package.</strong> Add high-value capabilities. Example: Website Business with everything in professional, admin dashboard, database, automation, advanced analytics, priority support, monthly maintenance.</p>

      <h3>Important rule</h3>
      <p>Don't simply make good = 5 features, better = 7 features, best = 10 features. Instead: good = solves basic problem, better = solves broader problem, best = solves the complete problem. The difference should be meaningful.</p>

      <h3>Benefits</h3>
      <p>Serves different budgets, increases average order value, creates an upgrade path, simplifies purchasing, and makes value differences visible.</p>

      <h3>Risks</h3>
      <p>Packages may be confusing, differences may be too small, premium package may be unrealistic, too many features can increase costs, customers may perceive the middle package as overpriced, and businesses may accidentally create unprofitable packages.</p>

      <hr />

      <h2>2. Decoy Package</h2>
      <h3>Definition</h3>
      <p>A decoy package is a deliberately designed option that makes another package appear more attractive by comparison. The decoy isn't necessarily intended to become the most popular choice. Its purpose is to provide a reference point for comparison.</p>

      <h3>Example</h3>
      <p>Suppose a software service offers: Basic 5 features ₱499, Pro 15 features ₱899, Premium 16 features ₱999. Premium is only ₱100 more than Pro but provides an additional feature. The Pro package can therefore make Premium appear comparatively attractive. The exact effectiveness depends on the customer's preferences and how the options are presented.</p>

      <h3>How it works</h3>
      <p>The customer evaluates options relative to each other, not only individually. Basic ₱499 compares to Pro ₱899, which compares to Premium ₱999 (only ₱100 more). The relationship between the options influences perceived value.</p>

      <h3>Decoy vs normal package</h3>
      <p><strong>Normal package:</strong> main purpose is to sell package; must be profitable; customer appeal is direct; role is product; pricing purpose is revenue.</p>
      <p><strong>Decoy package:</strong> main purpose can additionally serve as a comparison reference; ideally profitable; customer appeal is often relative; role is reference point; pricing purpose is value perception.</p>

      <h3>How to implement it</h3>
      <p><strong>Step 1 — Identify your target package.</strong> Suppose you want customers to consider premium ₱1,000.</p>
      <p><strong>Step 2 — Create a reasonable comparison option.</strong> For example, Pro ₱900. But Pro offers significantly less value.</p>
      <p><strong>Step 3 — Make the comparison transparent.</strong> Don't hide important differences.</p>
      <p><strong>Step 4 — Test actual customer behavior.</strong> Track basic selection %, pro selection %, premium selection %.</p>

      <h3>Ethical use</h3>
      <p>Decoy pricing should not depend on deception. Avoid fake discounts, fake products, misleading feature descriptions, artificially inflated prices, hidden restrictions, and false claims about savings. The comparison should remain understandable to customers.</p>

      <hr />

      <h2>3. Anchor Package</h2>
      <h3>Definition</h3>
      <p>An anchor package establishes a reference price or value level against which other packages are evaluated.</p>
      <p>Example: enterprise ₱100,000, professional ₱35,000, starter ₱15,000. The ₱100,000 package establishes a high reference point. The ₱35,000 package may then be perceived differently than if customers saw only professional ₱35,000. The anchor provides context.</p>

      <h3>Anchor package vs decoy package</h3>
      <p><strong>Anchor:</strong> main purpose is to establish reference value; usually high-priced (often); main effect is price/value context; can be the product people buy; example: enterprise ₱100k.</p>
      <p><strong>Decoy:</strong> main purpose is to influence comparison; not necessarily high-priced; main effect is relative attractiveness; can be the product people buy (but often secondary); example: pro ₱900 between basic ₱499 and premium ₱999.</p>

      <h3>Example — web agency</h3>
      <p>Imagine: enterprise ₱100,000, business ₱45,000, starter ₱18,000. Enterprise establishes a high-end reference. Business can then be evaluated in the context of a much larger solution.</p>

      <h3>Anchor package structure</h3>
      <p>High value → anchor ₱100,000 → creates reference → target package ₱45,000 → entry package ₱18,000.</p>

      <h3>How to build an anchor</h3>
      <p>An anchor should represent real value. For example, an enterprise software package might genuinely include unlimited users, advanced analytics, API integrations, dedicated support, custom implementation, security controls, training, and priority service. Its high price is therefore associated with actual additional value.</p>

      <h3>Risks</h3>
      <p>An anchor becomes problematic when it is artificial. For example: "Regular price ₱100,000" → "Today ₱30,000." If the product was never genuinely sold or reasonably valued at ₱100,000, the comparison can mislead customers. A better approach is to clearly explain what the package includes, why it costs more, and what additional outcomes/capabilities it provides.</p>

      <hr />

      <h2>4. Upgrade Bundle</h2>
      <h3>Definition</h3>
      <p>An upgrade bundle is a package designed to encourage an existing customer to move from their current product, service, or plan to a higher-value version. Instead of merely saying "Upgrade now," the business creates a bundle containing additional value.</p>

      <h3>Example</h3>
      <p>A customer currently has Basic Website ₱10,000. The business offers Upgrade Bundle ₱6,000 including advanced SEO, analytics, contact automation, 3 additional pages, and one month maintenance. The customer receives several improvements through one upgrade.</p>

      <h3>How it works</h3>
      <p>Current customer → current plan → identify additional need → upgrade bundle → higher customer value → higher revenue.</p>

      <h3>Common upgrade bundle types</h3>
      <p><strong>Feature upgrade</strong> — adds more functionality (advanced analytics, automation, reporting).</p>
      <p><strong>Capacity upgrade</strong> — adds capacity (10 users → 25 users).</p>
      <p><strong>Service upgrade</strong> — adds support (standard support → priority support).</p>
      <p><strong>Product upgrade</strong> — moves customers to a newer or better version (basic device → newer device + accessories).</p>
      <p><strong>Plan upgrade</strong> — moves customers between subscription levels (free → pro → business).</p>

      <h3>Upgrade bundle formula</h3>
      <p><strong>Upgrade Price = Added Value Components − Upgrade Incentive</strong></p>
      <p>Example: SEO ₱3,000 + analytics ₱2,000 + automation ₱4,000 + maintenance ₱2,000 = individual value ₱11,000. Upgrade bundle ₱8,500.</p>

      <h3>Upgrade metrics</h3>
      <p><strong>Upgrade Rate = Customers Who Upgrade ÷ Eligible Customers × 100</strong></p>
      <p><strong>Upgrade Revenue = Number of Upgrades × Average Upgrade Price</strong></p>
      <p><strong>Expansion Revenue = Additional recurring revenue</strong></p>

      <h3>Risks</h3>
      <p>Customers may feel pressured, upgrade benefits may be unclear, discount can reduce margin, customers may upgrade only because of temporary pricing, and poorly designed upgrades can create unnecessary complexity. The best upgrade bundle solves a newly identified customer need.</p>

      <hr />

      <h2>5. Cross-Sell Bundle</h2>
      <h3>Definition</h3>
      <p>A cross-sell bundle combines the customer's primary purchase with complementary products or services. The goal is to increase the usefulness of the main purchase while generating additional revenue.</p>
      <p>Example: laptop + mouse + laptop bag + keyboard. The mouse, bag, and keyboard aren't replacements for the laptop. They complement it.</p>

      <h3>Cross-sell vs upsell</h3>
      <p><strong>Upselling:</strong> moves the customer toward a higher-value version of the same core product (basic laptop → premium laptop).</p>
      <p><strong>Cross-selling:</strong> adds related products (laptop + mouse + bag + keyboard).</p>
      <p>Combined strategy: customer wants laptop → upsell basic → premium laptop → cross-sell mouse + bag + keyboard.</p>

      <h3>Types of cross-sell bundles</h3>
      <p>Main product + accessory (phone + case + screen protector). Main product + service (website + maintenance). Main product + support (software + premium support). Main product + consumable (printer + ink). Main product + training (software + training). Main product + installation (equipment + installation). Main product + warranty (device + extended warranty).</p>

      <h3>How to design a cross-sell bundle</h3>
      <p><strong>Step 1 — Identify the primary product.</strong> Ask: what is the customer originally buying?</p>
      <p><strong>Step 2 — Identify complementary needs.</strong> Ask: what does the customer need before, during, or after using this product? For a website: domain, hosting, analytics, SEO, maintenance, security, backup.</p>
      <p><strong>Step 3 — Identify natural combinations.</strong> Website branches into hosting, domain, analytics, SEO, maintenance, backup.</p>
      <p><strong>Step 4 — Create a bundle.</strong> Website Launch Bundle: website, domain setup, hosting, analytics, basic SEO.</p>
      <p><strong>Step 5 — Measure attach rate.</strong> <strong>Attach Rate = Customers buying add-on ÷ Customers buying main product × 100</strong>. Example: 100 customers buy websites, 35 purchase maintenance. 35 ÷ 100 × 100 = 35%. The maintenance attach rate is 35%.</p>

      <h3>Cross-sell bundle economics</h3>
      <p>Suppose website ₱15,000 + hosting ₱2,000 + analytics ₱1,500 + maintenance ₱3,000 = individual total ₱21,500. Bundle price ₱19,500. Bundle savings ₱2,000.</p>
      <p>Suppose variable costs: website ₱7,000 + hosting ₱1,000 + analytics ₱500 + maintenance ₱1,000 = total variable cost ₱9,500. Contribution: ₱19,500 − ₱9,500 = ₱10,000. Contribution margin: 10,000 ÷ 19,500 × 100 ≈ 51.3%. Therefore, the bundle should be evaluated on profitability, not merely revenue.</p>

      <hr />

      <h2>Strategic Bundling Architecture</h2>
      <p>Product branches into good, better, best, which lead to an anchor package that establishes price reference. From there, upgrade bundle (higher-tier value) and cross-sell bundle (complementary value) both lead to customer value, then revenue/profit.</p>

      <hr />

      <h2>Combining the Five Strategies</h2>
      <p>Consider an e-commerce technology store.</p>
      <p><strong>Good-Better-Best:</strong> Good basic laptop ₱25,000; Better better laptop + accessories ₱35,000; Best premium laptop + accessories + support ₱50,000.</p>
      <p><strong>Anchor:</strong> add a legitimate high-end package Enterprise Creator Setup ₱80,000 with premium computer, monitor, keyboard, mouse, storage, installation, and support. This establishes a high-value reference for customers considering the lower packages.</p>
      <p><strong>Decoy:</strong> suppose standard ₱32,000, plus ₱39,000, premium ₱40,000. If plus offers only slightly less value than premium for almost the same price, customers can easily compare the options.</p>
      <p><strong>Upgrade bundle:</strong> a customer buying the ₱25,000 laptop receives Upgrade Bundle ₱8,000 with additional RAM, larger SSD, better cooling, and setup service.</p>
      <p><strong>Cross-sell bundle:</strong> after selecting the laptop, accessory bundle with mouse, keyboard, laptop stand, and bag. Instead of buying only laptop ₱25,000, the customer may purchase laptop + accessory bundle.</p>

      <hr />

      <h2>Strategic Bundling Decision Tree</h2>
      <p>Customer buys → what do they need? Basic (good), more value (upgrade), or complementary (cross-sell) → compare packages → Good-Better-Best → purchase decision.</p>

      <hr />

      <h2>Comparison Table</h2>
      <ul>
        <li>Good-Better-Best — segment customers by value — three-tier structure — basic/pro/premium</li>
        <li>Decoy package — create comparison context — between/near target options — ₱899 vs ₱999</li>
        <li>Anchor package — establish reference value — often high-end — enterprise ₱100k</li>
        <li>Upgrade bundle — increase value of existing purchase — after/before upgrade — basic → pro + extras</li>
        <li>Cross-sell bundle — add complementary products — alongside main product — laptop + accessories</li>
      </ul>

      <hr />

      <h2>Good-Better-Best vs Anchor vs Decoy</h2>
      <p>These are particularly easy to confuse. Good-Better-Best structures the product ladder. Anchor establishes a reference point. Decoy creates a comparison that can affect which option appears attractive. They can exist simultaneously. For example: Enterprise ₱100,000 (anchor), Premium ₱45,000, Professional ₱35,000 (target), Basic ₱15,000 + decoy option designed around a specific comparison + cross-sell accessories + upgrade bundle.</p>

      <hr />

      <h2>Strategic Bundling Metrics</h2>
      <p><strong>Bundle Take Rate = Bundle Orders ÷ Eligible Orders × 100</strong></p>
      <p><strong>AOV = Total Revenue ÷ Number of Orders</strong></p>
      <p><strong>Attach Rate = Orders with Complementary Product ÷ Main Product Orders × 100</strong></p>
      <p><strong>Upgrade Rate = Customers Who Upgrade ÷ Eligible Customers × 100</strong></p>
      <p><strong>Contribution = Bundle Revenue − Variable Costs</strong></p>
      <p><strong>Contribution Margin = (Revenue − Variable Cost) ÷ Revenue × 100</strong></p>
      <p><strong>Average Components = Total Components Sold Through Bundles ÷ Number of Bundles</strong>. This helps determine whether customers are actually buying larger packages.</p>

      <hr />

      <h2>Strategic Bundling Dashboard</h2>
      <ul>
        <li>Bundle take rate — how frequently bundles are chosen</li>
        <li>AOV — whether bundling increases order value</li>
        <li>Attach rate — how well cross-sells perform</li>
        <li>Upgrade rate — how effectively customers move upward</li>
        <li>Revenue per customer — customer monetization</li>
        <li>Contribution margin — bundle profitability</li>
        <li>Discount rate — how much revenue is sacrificed</li>
        <li>Cancellation rate — whether offers attract poor-fit customers</li>
        <li>Return rate — whether bundling creates purchase mistakes</li>
        <li>Configuration abandonment — whether the package is too complicated</li>
        <li>Repeat purchase — long-term customer value</li>
        <li>Customer satisfaction — whether bundle actually delivers value</li>
      </ul>

      <hr />

      <h2>Common Mistakes</h2>
      <p><strong>1. Too many packages.</strong> Basic, basic+, standard, standard+, pro, pro+, premium, premium+, enterprise, enterprise+. Too many choices can make purchasing harder.</p>
      <p><strong>2. Artificial price anchoring.</strong> An anchor should represent a genuine product or service value.</p>
      <p><strong>3. Weak package differences.</strong> If good ₱10k, better ₱12k, best ₱14k but all three are nearly identical, customers may not understand why they should choose one.</p>
      <p><strong>4. Over-discounting.</strong> A bundle should not automatically mean a large discount. You can increase value through convenience, support, bonuses, faster delivery, setup, training, and additional functionality.</p>
      <p><strong>5. Bundling unrelated products.</strong> Poor: website + headphones + gardening tools. Better: website + hosting + domain + analytics + maintenance. The products should have a logical relationship.</p>
      <p><strong>6. Ignoring costs.</strong> A bundle can increase revenue while reducing profit. Always calculate: bundle revenue → − variable costs → contribution → − allocated fixed costs → profit.</p>

      <hr />

      <h2>Strategic Bundling System</h2>
      <pre>{`CUSTOMER RESEARCH
       │
       ▼
Identify customer needs
       │
       ▼
Identify complementary products
       │
       ▼
Create product architecture
       │
       ├───────────────┐
       ▼               ▼
Good-Better-Best    Cross-Sells
       │               │
       ▼               ▼
Upgrade Paths       Add-ons
       │               │
       └───────┬───────┘
               ▼
        Pricing Architecture
               │
        ┌──────┴──────┐
        ▼             ▼
      Anchor        Decoy
        │             │
        └──────┬──────┘
               ▼
          Package UX
               │
               ▼
             Sales
               │
               ▼
          Measurement
               │
               ▼
         Profit Analysis
               │
               ▼
          Optimization
               │
               └──────────► Repeat`}</pre>

      <hr />

      <h2>Example: Xmarket</h2>
      <p>For a marketplace such as Xmarket, strategic bundling could work like this.</p>
      <p><strong>Good:</strong> Tech Starter with mouse and keyboard ₱999.</p>
      <p><strong>Better:</strong> Tech Plus with mouse, keyboard, headset, mouse pad ₱1,599.</p>
      <p><strong>Best:</strong> Tech Complete with mouse, keyboard, headset, mouse pad, laptop stand, USB hub ₱2,499.</p>
      <p><strong>Anchor:</strong> Creator Setup with premium peripherals, monitor, desk accessories, storage, setup service ₱15,000+. This provides a legitimate high-value reference point.</p>
      <p><strong>Upgrade Bundle:</strong> customer buys a basic keyboard → upgrade bundle → keyboard + mouse + mouse pad.</p>
      <p><strong>Cross-Sell Bundle:</strong> customer buys a laptop → mouse, bag, keyboard, USB hub, laptop stand. The marketplace can display relevant bundles based on the product being viewed.</p>

      <hr />

      <h2>Example: Web Development Business</h2>
      <p>A web developer could structure services as: good landing page ₱8,000; better business website + forms + analytics ₱18,000; best website + dashboard + automation ₱35,000; anchor enterprise platform ₱100,000+.</p>
      <p>Then: upgrade bundle (existing website + SEO + analytics + automation + maintenance). Cross-sell bundle (website + hosting + domain + maintenance). Decoy (a package can be structured as a transparent comparison point between two meaningful offerings).</p>

      <hr />

      <h2>Core Principles of Strategic Bundling</h2>
      <ol>
        <li>Bundle around customer needs, not random products.</li>
        <li>Make package differences meaningful.</li>
        <li>Use Good-Better-Best to create a clear value ladder.</li>
        <li>Use anchors based on genuine value.</li>
        <li>Use decoys transparently rather than deceptively.</li>
        <li>Use upgrade bundles to solve additional customer needs.</li>
        <li>Use cross-sells for naturally complementary products.</li>
        <li>Calculate profit, not just revenue.</li>
        <li>Keep package choices understandable.</li>
        <li>Don't rely entirely on discounts.</li>
        <li>Make savings and inclusions transparent.</li>
        <li>Track customer behavior after introducing a bundle.</li>
        <li>Test different package structures.</li>
        <li>Protect contribution margins.</li>
        <li>Use customer data to identify natural product combinations.</li>
        <li>Turn frequently purchased combinations into standardized bundles.</li>
        <li>Keep bundles operationally simple enough to fulfill consistently.</li>
        <li>Make the customer's outcome the center of the bundle.</li>
      </ol>

      <h3>The strategic bundling formula</h3>
      <p><strong>Customer Need + Complementary Products + Clear Package Structure + Value-Based Pricing + Meaningful Comparison + Upgrade Path + Cross-Sell Opportunities + Healthy Unit Economics + Simple Customer Experience = Strategic Bundling</strong></p>
      <p>The fundamental difference between ordinary bundling and strategic bundling is that ordinary bundling simply combines products, while strategic bundling designs the entire customer decision path — from entry product, comparison and perceived value, through upgrades and complementary purchases, to long-term profitability.</p>
    </LessonLayout>
  )
}
