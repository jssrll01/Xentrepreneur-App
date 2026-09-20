import LessonLayout from '../components/LessonLayout'

export default function Customization() {
  return (
    <LessonLayout
      number="43"
      title="Customization"
      summary="10 customization models to let customers build the right package for their needs — with boundaries and healthy economics."
    >
      <h2>Customization in Bundling</h2>
      <h3>Definition</h3>
      <p>
        Customization in bundling allows customers to select some or all of the
        components included in a package instead of being forced to purchase a
        completely predetermined bundle.
      </p>
      <p>A traditional bundle says: "We choose what goes together." A customized bundle says: "You choose what you need, within defined rules." This creates a balance between customer flexibility and business control.</p>

      <h3>Customization architecture</h3>
      <p>Customization branches into select, combine, and configure, which then feed into products, features, services, add-ons, modules, and quantities, all leading to a customer package and custom price.</p>

      <hr />

      <h2>1. Build-Your-Own Bundle</h2>
      <h3>Definition</h3>
      <p>A build-your-own bundle allows customers to construct their own package by selecting products or services from a defined catalog.</p>
      <p>Example: a technology store could offer "Build Your Own PC Bundle." The customer chooses CPU, motherboard, RAM, storage, GPU, case, power supply, and cooling. The customer creates the configuration rather than selecting a completely predetermined PC.</p>

      <h3>Pricing</h3>
      <p><strong>Package Price = Base Price + Selected Components − Bundle Savings</strong></p>
      <p>Example: base package ₱10,000 + selected components ₱8,000 − bundle discount ₱1,000 = final price ₱17,000.</p>

      <h3>Benefits</h3>
      <p>High customer control, personalized purchasing, higher perceived relevance, opportunity for upselling, and useful for customers with different requirements.</p>

      <h3>Risks</h3>
      <p>More complex inventory, more pricing combinations, compatibility problems, more difficult customer support, and more complicated checkout.</p>

      <hr />

      <h2>2. Choose-Three Bundle</h2>
      <h3>Definition</h3>
      <p>A choose-three bundle requires the customer to select exactly three eligible items from a defined selection.</p>
      <p>Example: "Choose Any 3 Accessories ₱999." Options: mouse, keyboard, headset, mousepad, USB hub, laptop stand, webcam. Customer chooses mouse + headset + mousepad.</p>

      <h3>Advantages</h3>
      <p>The business retains some control because it determines which products qualify. The customer still receives meaningful choice.</p>

      <h3>Good applications</h3>
      <p>Accessories, food, digital products, marketing services, training modules, and software features.</p>

      <hr />

      <h2>3. Choose-Five Bundle</h2>
      <h3>Definition</h3>
      <p>A choose-five bundle follows the same principle but allows the customer to select five eligible components.</p>
      <p>Example: "Choose Any 5 Digital Resources ₱1,499." Choose templates, guides, courses, presets, checklists, tutorials, and design assets.</p>

      <h3>Why use a larger quantity?</h3>
      <p>It can encourage customers to select more products while still giving them control.</p>
      <p>Quantity relationship: choose 1 → choose 3 → choose 5 → choose 10. The business can use quantity levels to create different package values.</p>

      <hr />

      <h2>4. Modular Package</h2>
      <h3>Definition</h3>
      <p>A modular package consists of independent components, or modules, that customers can combine according to their needs.</p>
      <p>Example: business software core system + CRM module, inventory module, analytics module, marketing module, accounting module, and automation module.</p>
      <p>A small business might select core + CRM + analytics, while a larger business might select core + CRM + inventory + analytics + automation.</p>

      <h3>Pricing</h3>
      <p><strong>Total Price = Core + Selected Modules</strong> or <strong>Total Price = Core + Modules − Bundle Discount</strong></p>

      <h3>Benefits</h3>
      <p>Flexible, scalable, easier to expand, customers pay for relevant functionality, and good for software and professional services.</p>

      <h3>Risks</h3>
      <p>Too many modules can create decision fatigue, configuration complexity, integration problems, and support complexity.</p>

      <hr />

      <h2>5. Add-On Menu</h2>
      <h3>Definition</h3>
      <p>An add-on menu allows customers to purchase optional products or services in addition to a base package.</p>
      <p>Example: Website Package ₱15,000. Optional add-ons: extra page ₱1,000, SEO setup ₱3,000, analytics dashboard ₱2,000, maintenance ₱1,500/month, additional revision ₱500, and copywriting ₱2,000.</p>

      <h3>Benefits</h3>
      <p>The customer can start with a simple package and increase the scope only when needed.</p>

      <h3>Business advantage</h3>
      <p>Add-ons can increase average order value, revenue per customer, package flexibility, and upgrade opportunities.</p>

      <h3>Metric</h3>
      <p><strong>Add-on Attach Rate = Customers Purchasing Add-ons ÷ Eligible Customers × 100</strong></p>

      <hr />

      <h2>6. Mix-and-Match Package</h2>
      <h3>Definition</h3>
      <p>A mix-and-match package allows customers to select different items from one or more categories while receiving a package price or discount.</p>
      <p>Example: "Choose 1 Main + 2 Accessories + 1 Service." Main options: laptop, tablet, mini PC. Accessories: mouse, keyboard, headset, bag. Services: installation, setup, training.</p>
      <p>This gives customers choice while maintaining a structured package.</p>

      <hr />

      <h2>7. À-la-Carte + Bundle Option</h2>
      <h3>Definition</h3>
      <p>An à-la-carte + bundle option provides both individual purchases and packaged combinations. The customer can choose individual services or bundle several services for a package price.</p>
      <p>Example digital agency: logo ₱5,000, website ₱15,000, SEO ₱5,000, analytics ₱3,000. Total individually: ₱28,000. Bundle: Complete Digital Package ₱24,000.</p>

      <h3>Why this model is useful</h3>
      <p>It gives customers a reference point. They can compare individual prices vs package price. The business should make the comparison accurate and transparent.</p>

      <hr />

      <h2>8. Custom Enterprise Package</h2>
      <h3>Definition</h3>
      <p>A custom enterprise package is a negotiated package designed around the specific requirements of a larger organization. Unlike fixed packages, the scope may be configured according to number of users, locations, departments, integrations, security requirements, support requirements, data volume, implementation requirements, and training requirements.</p>

      <h3>Example</h3>
      <p>An enterprise software customer might require: enterprise core + 500 users + advanced analytics + API integration + custom security controls + dedicated support + staff training + implementation services.</p>

      <h3>Pricing model</h3>
      <p><strong>Price = Base Platform + Users + Usage + Implementation + Support + Custom Development</strong></p>

      <h3>Benefits</h3>
      <p>High customization, better alignment with organizational requirements, large potential contract value, and long-term relationship potential.</p>

      <h3>Risks</h3>
      <p>Long sales cycles, complex negotiations, custom development costs, scope creep, and high implementation requirements.</p>

      <h3>Important principle</h3>
      <p>A custom enterprise package should not mean "Everything is included." It should mean "The package is configured around documented organizational requirements."</p>

      <hr />

      <h2>9. Personalized Bundle</h2>
      <h3>Definition</h3>
      <p>A personalized bundle is configured based on information about an individual customer's preferences, behavior, needs, or selected requirements.</p>
      <p>Example: an online store may recommend "Your Personalized Bundle" based on products the customer has selected or previously purchased.</p>
      <p>A customer purchasing a camera may receive camera + memory card + tripod + camera bag, while another customer may receive camera + extra battery + lighting equipment.</p>

      <h3>Personalization methods</h3>
      <p>Customer-selected preferences, purchase history, browsing behavior, business requirements, product compatibility, usage level, and customer segment.</p>

      <h3>Important principle</h3>
      <p>Personalization should be relevant and transparent. The business should not make inappropriate assumptions about what a customer needs.</p>

      <hr />

      <h2>10. Customer-Selected Package</h2>
      <h3>Definition</h3>
      <p>A customer-selected package allows customers to select the specific services, products, or features they want from a structured set of choices. It is broader than a fixed "choose-three" rule.</p>
      <p>Example: a digital service provider might offer "Create Your Digital Package." Select any: website, logo, SEO, social media, analytics, automation, e-commerce, training, and maintenance.</p>

      <hr />

      <h2>Customization Model Comparison</h2>
      <ul>
        <li>Build-your-own — high customer choice — medium business control — high complexity</li>
        <li>Choose-three — medium — high — low</li>
        <li>Choose-five — medium — high — low</li>
        <li>Modular package — high — medium — medium</li>
        <li>Add-on menu — medium — high — low</li>
        <li>Mix-and-match — high — medium — medium</li>
        <li>À-la-carte + bundle — high — high — medium</li>
        <li>Custom enterprise — very high — negotiated — very high</li>
        <li>Personalized bundle — variable — algorithm/rules — high</li>
        <li>Customer-selected — high — medium — medium</li>
      </ul>

      <hr />

      <h2>Fixed Bundle vs Customized Bundle</h2>
      <p><strong>Fixed:</strong> predictable, easier to sell, easier operations, standardized, faster checkout.</p>
      <p><strong>Customized:</strong> flexible, more configuration, more operational complexity, personalized, more decision-making.</p>

      <hr />

      <h2>Customization Levels</h2>
      <p>Level 1: fixed bundle. Level 2: choose one. Level 3: choose three. Level 4: add-ons. Level 5: mix-and-match. Level 6: build your own. Level 7: custom enterprise. The higher the customization level, the greater the potential operational complexity.</p>

      <hr />

      <h2>Pricing Customized Bundles</h2>
      <p><strong>Final Price = Base Price + Selected Items + Selected Services − Bundle Discount</strong></p>
      <p>Example: base ₱10,000 + selected modules ₱6,000 + add-ons ₱3,000 − bundle discount ₱1,000 = ₱18,000.</p>

      <hr />

      <h2>Customization and Profitability</h2>
      <p>Customization can increase revenue, but it can also increase costs.</p>
      <p><strong>Contribution = Revenue − Variable Cost</strong></p>
      <p>Suppose customized package ₱20,000. Costs: labor ₱6,000, software ₱1,000, materials ₱2,000. Total variable cost: ₱9,000. Contribution: ₱20,000 − ₱9,000 = ₱11,000. Contribution margin: 11,000 ÷ 20,000 × 100 = 55%.</p>
      <p>If customization requires an additional ₱5,000 of labor: contribution = ₱6,000. The package becomes much less attractive economically despite having the same selling price.</p>

      <hr />

      <h2>Configuration Complexity</h2>
      <p>The number of possible combinations can grow rapidly. Suppose a package has 4 choices for category A, 5 for category B, and 3 for category C. Potential combinations: 4 × 5 × 3 = 60. Add another category with 6 choices: 4 × 5 × 3 × 6 = 360. This is why businesses often place limits on customization.</p>

      <hr />

      <h2>Controlled Customization</h2>
      <p>A strong system often uses "choice within boundaries." For example: choose 1 website style + 1 hosting plan + up to 3 add-ons + 1 support plan, instead of "choose absolutely anything." This reduces operational complexity.</p>

      <hr />

      <h2>Compatibility Rules</h2>
      <p>For technology products, customization must account for compatibility. Example: CPU → compatible motherboard → compatible RAM → compatible case → power requirement → cooling requirement. A bundle builder should prevent incompatible selections where possible.</p>
      <p>For example: customer selects GPU → system checks PSU requirement → if insufficient: "Select a higher-capacity PSU." This is especially useful for PCs, software plans, API packages, cloud services, enterprise systems, and professional services.</p>

      <hr />

      <h2>Customization Funnel</h2>
      <p>Customer enters → selects goal → sees available components → selects options → system validates → price calculated → customer reviews → checkout/request quote → delivery → customer feedback.</p>

      <hr />

      <h2>Add-On Strategy</h2>
      <p>Add-ons should solve genuine additional needs. For example: website + SEO, analytics, maintenance, security, and content. The business can measure AOV = Total Revenue ÷ Number of Orders. If customization increases AOV while maintaining healthy margins, it can become an important part of the business model.</p>

      <hr />

      <h2>Customer Choice vs Decision Fatigue</h2>
      <p>More choices are not always better. 5 choices = easy comparison. 100 choices = complex decision → decision fatigue.</p>
      <p>A practical approach is to provide: recommended (most common configuration), popular (frequently selected combination), and flexible (build your own). This helps customers who want guidance while preserving customization for customers who want control.</p>

      <hr />

      <h2>Customization in Web Development</h2>
      <p>A web-development business could create a Build Your Website Package. Base ₱15,000. Customer selects design (corporate, minimal, creative, e-commerce), features (contact form, blog, gallery, booking, product catalog), and services (SEO, analytics, maintenance, security, training).</p>
      <p>Website package branches into design (select 1), features (select 3), and services (select 2), leading to a custom website with a final price. This allows a developer to standardize the underlying production process while allowing customers to personalize the final offer.</p>

      <hr />

      <h2>Customization in Xmarket</h2>
      <p>A marketplace such as Xmarket could allow customers to create shopping bundles. Example: Build Your Own Tech Bundle — choose 1 main device (smartphone, tablet, laptop), 2 accessories (case, mouse, keyboard, headset, bag), and 1 service (delivery, installation, setup).</p>
      <p>The platform can automatically calculate: Bundle Price = Selected Products + Selected Services − Applicable Bundle Savings.</p>

      <hr />

      <h2>Customization Metrics</h2>
      <ul>
        <li>Configuration Rate — how many customers customize</li>
        <li>Average Order Value — revenue per order</li>
        <li>Add-on Attach Rate — add-on adoption</li>
        <li>Average Components — number selected</li>
        <li>Customization Completion Rate — started vs completed configurations</li>
        <li>Abandonment Rate — customers leaving before purchase</li>
        <li>Configuration Error Rate — invalid configurations</li>
        <li>Gross Margin — profitability</li>
        <li>Delivery Time — operational impact</li>
        <li>Customer Satisfaction — customer response</li>
        <li>Upgrade Rate — customers adding more later</li>
      </ul>

      <hr />

      <h2>Configuration Completion Rate</h2>
      <p>If 1,000 customers start building a package and 700 finish configuration: completion rate = 700 ÷ 1,000 × 100 = 70%. A low completion rate may indicate too many choices, confusing interface, unexpected pricing, compatibility issues, too much information, or poor UX.</p>

      <hr />

      <h2>Customization Lifecycle</h2>
      <p>Research → identify common customer needs → create standard components → define customization rules → build package options → create pricing logic → validate compatibility → sell → deliver → measure → identify popular combinations → create new standard packages (cycle).</p>
      <p>An important strategic benefit is that customization data can eventually reveal which combinations customers repeatedly choose. For example: 100 customers customize → 60 choose website + SEO → 45 choose website + analytics → 70 choose website + maintenance → most common combination identified → create standardized package. The business can then turn frequently selected custom configurations into fixed packages, improving operational efficiency.</p>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Give customers meaningful choices, not unlimited complexity.</li>
        <li>Start with a clear base package.</li>
        <li>Define exactly what customers can customize.</li>
        <li>Use modules and standardized components whenever possible.</li>
        <li>Set pricing rules before offering customization.</li>
        <li>Calculate the cost of every optional component.</li>
        <li>Protect margins against excessive customization.</li>
        <li>Use compatibility rules for technical products and services.</li>
        <li>Show the price as selections are made.</li>
        <li>Make the configuration process simple and understandable.</li>
        <li>Provide recommended configurations for customers who don't want to build everything themselves.</li>
        <li>Use add-ons to solve genuine additional needs.</li>
        <li>Limit enterprise customization through documented requirements and contracts.</li>
        <li>Track which combinations customers actually choose.</li>
        <li>Turn frequently selected configurations into standardized packages.</li>
        <li>Measure both customer flexibility and operational complexity.</li>
        <li>Do not confuse personalization with unnecessary complexity.</li>
        <li>Keep the final customer outcome more important than the number of available options.</li>
      </ol>

      <h3>The fundamental equation</h3>
      <p><strong>Standardized Components + Controlled Choice + Flexible Pricing + Compatibility + Clear UX + Healthy Economics = Scalable Customization</strong></p>
    </LessonLayout>
  )
}
