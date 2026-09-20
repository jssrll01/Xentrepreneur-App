import LessonLayout from '../components/LessonLayout'

export default function ServicePackages() {
  return (
    <LessonLayout
      number="38"
      title="Service Packages"
      summary="11 service package structures to turn individual services into repeatable commercial products — from basic to enterprise."
    >
      <h2>Service Package</h2>
      <h3>Definition</h3>
      <p>
        A service package combines multiple services, deliverables, features,
        support options, or service hours into one clearly defined offer.
      </p>
      <p>Instead of selling every service separately (Service A ₱500, Service B ₱800, Service C ₱700, Service D ₱500), the business creates one offer with one price. A package can make the customer's purchasing decision easier while allowing the business to standardize delivery and pricing.</p>

      <h3>Example: web development</h3>
      <p>Instead of selling UI design, front-end development, responsive design, deployment, and maintenance separately, a developer could offer a Standard Website Package ₱20,000 with 5-page website, responsive design, contact form, basic SEO, deployment, and 30 days support.</p>

      <hr />

      <h2>1. Basic Service Package</h2>
      <h3>Definition</h3>
      <p>A basic service package provides the essential services needed to solve a customer's fundamental problem. It is generally the lowest-priced paid package in a service ladder.</p>
      <p>Example: Basic Website Package ₱10,000 with 3 pages, responsive design, contact form, and basic deployment.</p>

      <h3>Purpose</h3>
      <p>The basic package serves customers who have a limited budget, need only essential services, want to start small, and don't need advanced features.</p>

      <h3>Benefits</h3>
      <p>Low barrier to entry, easy to understand, creates an entry point, and helps capture price-sensitive customers.</p>

      <h3>Risks</h3>
      <p>If too much is removed from the package, customers may perceive it as incomplete. A basic package should be limited but useful, not intentionally poor.</p>

      <hr />

      <h2>2. Standard Service Package</h2>
      <h3>Definition</h3>
      <p>A standard service package provides a broader set of services than the basic package and is usually designed around the needs of the typical target customer.</p>
      <p>Example: Standard Website Package ₱20,000 with 5–7 pages, custom UI design, responsive development, contact forms, basic SEO, analytics setup, deployment, and 60 days support.</p>

      <h3>Basic vs standard</h3>
      <p><strong>Basic:</strong> essential, lower price, smaller scope, entry customers, limited support.</p>
      <p><strong>Standard:</strong> more comprehensive, moderate price, larger scope, typical customers, more support.</p>
      <p>The standard package should represent a complete solution for the core customer, rather than simply being a larger version of the basic package.</p>

      <hr />

      <h2>3. Premium Service Package</h2>
      <h3>Definition</h3>
      <p>A premium service package provides additional value through greater scope, advanced features, higher service levels, customization, priority treatment, or specialized expertise.</p>
      <p>Example: Premium Website Package ₱45,000 with custom UI/UX, 10+ pages, advanced animations, CMS integration, SEO setup, analytics, performance optimization, security configuration, third-party integrations, 6 months support, and priority service.</p>

      <h3>Premium value</h3>
      <p>Premium pricing should be supported by additional value: more scope + more expertise + more customization + more support + higher service level = premium package.</p>

      <h3>Risks</h3>
      <p>Premium packages become difficult to manage when the business promises too many unlimited services. Define number of revisions, number of pages, support duration, response times, included integrations, and excluded work.</p>

      <hr />

      <h2>4. All-Inclusive Package</h2>
      <h3>Definition</h3>
      <p>An all-inclusive package combines most or all major services required for a particular outcome into one offer. The customer pays for a comprehensive solution rather than assembling individual services.</p>
      <p>Example: All-Inclusive Business Website Package with strategy, research, UI/UX, design, development, hosting setup, domain setup, SEO, analytics, security, deployment, training, maintenance, and support.</p>

      <h3>Core promise</h3>
      <p>The concept is: "You don't have to assemble the solution yourself."</p>

      <h3>Benefits</h3>
      <p>Very convenient, higher transaction value, simplifies purchasing, strong solution-based positioning, and can create recurring-service opportunities.</p>

      <h3>Risk: scope explosion</h3>
      <p>"All-inclusive" can be dangerous if the business interprets it as "everything the customer can possibly request." Instead, define the package precisely. For example, "Includes up to 10 pages and 3 integrations" is safer than "Includes everything."</p>

      <hr />

      <h2>5. Starter Service</h2>
      <h3>Definition</h3>
      <p>A starter service is a small, accessible service designed to help a new customer begin using the provider's services. It is particularly useful for customers who aren't ready to purchase a large package.</p>
      <p>Example: Website Starter Service ₱3,500 with homepage design, basic UI concept, mobile layout, and initial consultation.</p>
      <p>Customer journey: interested customer → starter service → experience provider → trust established → larger service package.</p>

      <h3>Benefits</h3>
      <p>Low customer commitment, easier customer acquisition, demonstrates capability, and can create future upselling opportunities.</p>

      <h3>Important principle</h3>
      <p>A starter service should provide real value by itself. It shouldn't feel like a deliberately incomplete product whose only purpose is to force an upgrade.</p>

      <hr />

      <h2>6. Growth Package</h2>
      <h3>Definition</h3>
      <p>A growth package is designed for customers who already have a basic operation and want to improve performance, reach more customers, increase capacity, or expand their business.</p>
      <p>Example: Business Growth Package ₱25,000/month with website optimization, SEO, content creation, analytics, conversion optimization, marketing campaigns, monthly reporting, and strategy sessions.</p>
      <p>Growth package logic: existing business → identify bottleneck → select growth services → implement → measure → optimize → growth.</p>

      <h3>Metrics</h3>
      <p>Depending on the service, measure leads, conversion rate, revenue, customer acquisition cost, retention, website traffic, AOV, ROAS, and customer lifetime value.</p>
      <p>A growth package should be connected to measurable business objectives rather than promising a vague result such as "guaranteed growth."</p>

      <hr />

      <h2>7. Professional Package</h2>
      <h3>Definition</h3>
      <p>A professional package is designed for customers with more advanced requirements who need a higher level of expertise, functionality, support, or customization. It typically sits between standard and enterprise offerings.</p>
      <p>Example: Professional Web Development Package ₱35,000 with custom UI/UX, 10 pages, database integration, API integration, authentication, admin dashboard, analytics, deployment, performance optimization, and 90-day support.</p>

      <h3>Typical customer</h3>
      <p>Freelancer, professional, creator, growing company, established small business, or organization with technical requirements.</p>

      <h3>Professional vs premium</h3>
      <p>A professional package usually emphasizes capability and advanced requirements. A premium package usually emphasizes additional value, customization, exclusivity, or service level.</p>

      <hr />

      <h2>8. Enterprise Package</h2>
      <h3>Definition</h3>
      <p>An enterprise package is designed for larger organizations with complex requirements, multiple users, larger workloads, stronger security requirements, integrations, support requirements, and potentially contractual service-level commitments.</p>
      <p>Example: Enterprise Web Platform with custom platform development, multiple user roles, advanced authentication, API integrations, database architecture, security controls, cloud infrastructure, analytics, data migration, employee training, dedicated support, SLA, and maintenance.</p>

      <h3>Enterprise structure</h3>
      <p>Enterprise branches into platform, security, and support. Platform includes integrations, infrastructure, and maintenance. Security includes compliance and SLA. Support includes dedicated support.</p>

      <h3>Pricing</h3>
      <p>Enterprise services are frequently custom-priced because requirements differ significantly between organizations. Pricing can depend on users, locations, workload, scope, integrations, security, support, contract duration, and implementation requirements.</p>

      <h3>Risks</h3>
      <p>Enterprise packages require careful management of scope, security, service levels, documentation, project timelines, change requests, support capacity, and contract obligations.</p>

      <hr />

      <h2>9. Custom Package</h2>
      <h3>Definition</h3>
      <p>A custom package is created specifically for an individual customer's requirements rather than being selected from a fixed package.</p>
      <p>Standard package: customer → choose package → fixed scope → fixed/defined price. Custom package: customer → requirements → discovery → scope → custom proposal → price → agreement.</p>

      <h3>Example</h3>
      <p>A customer needs website, booking system, payment integration, customer dashboard, admin dashboard, custom API, and mobile application. A standard package might not fit. The provider creates a Custom Digital Platform Package with individually defined scope and pricing.</p>

      <h3>Benefits</h3>
      <p>Flexible, can accommodate unusual requirements, suitable for complex projects, allows accurate project pricing, and can create higher-value engagements.</p>

      <h3>Risks</h3>
      <p>Longer sales process, harder to standardize, more estimation uncertainty, scope creep, and higher project-management requirements.</p>

      <hr />

      <h2>10. Build-Your-Own Package</h2>
      <h3>Definition</h3>
      <p>A build-your-own package allows the customer to select individual services from a menu and construct their own package. It combines the flexibility of customization with the structure of predefined services.</p>

      <h3>Example</h3>
      <p>A web-development company could allow the customer to choose: homepage ₱3,000; additional page ₱1,000; contact form ₱1,000; blog ₱2,500; database ₱5,000; payment integration ₱3,000; analytics ₱1,000; SEO setup ₱2,000; maintenance ₱1,500/month.</p>
      <p>Customer selects: homepage ₱3,000 + 5 additional pages ₱5,000 + payment integration ₱3,000 + analytics ₱1,000 + SEO ₱2,000 = ₱14,000.</p>

      <h3>Advantages</h3>
      <p>High flexibility, customer controls scope, easy to add/remove services, useful for modular services, and can improve perceived control.</p>

      <h3>Risks</h3>
      <p>Too many choices can create decision fatigue. A better approach is to provide recommended combinations.</p>

      <hr />

      <h2>Service Package Ladder</h2>
      <p>Service offerings branch into entry level (starter, basic), core level (standard, professional), advanced (premium, enterprise), comprehensive (all-inclusive), and flexible (custom, build-your-own). This allows customers with different budgets and requirements to find an appropriate structure.</p>

      <hr />

      <h2>Basic → Standard → Premium Structure</h2>
      <ul>
        <li>Scope: essential → expanded → comprehensive</li>
        <li>Customization: low → medium → high</li>
        <li>Support: basic → standard → priority</li>
        <li>Delivery: standard → faster/standard → priority</li>
        <li>Features: core → more → advanced</li>
        <li>Price: low → medium → high</li>
      </ul>
      <p>The key is to create meaningful differences, not arbitrary price increases.</p>

      <hr />

      <h2>Service Package vs Service Bundle</h2>
      <p><strong>Service bundle:</strong> usually emphasizes combining multiple services. Example: design + development + SEO.</p>
      <p><strong>Service package:</strong> usually emphasizes a defined commercial offer, including scope, price, delivery, and support. Example: Standard Website Package ₱20,000.</p>
      <p>Service bundle = combination of services. Service package = commercialized offer = services + scope + price + terms. A service package can contain a service bundle.</p>

      <hr />

      <h2>Service Package Pricing</h2>
      <p><strong>Package Price = Direct Labor + Tools + Overhead + Risk Allowance + Desired Profit</strong></p>
      <p>Example: labor ₱8,000; software/tools ₱1,000; outsourced work ₱2,000; overhead allocation ₱1,000; risk allowance ₱1,000; total cost ₱13,000. If target contribution is ₱7,000: package price = ₱13,000 + ₱7,000 = ₱20,000.</p>

      <hr />

      <h2>Package Margin</h2>
      <p>Suppose package price ₱20,000 and variable delivery cost ₱12,000. Contribution: ₱20,000 − ₱12,000 = ₱8,000. Contribution margin: ₱8,000 ÷ ₱20,000 × 100 = 40%. This should be monitored for every major package.</p>

      <hr />

      <h2>Scope Management</h2>
      <p>One of the most important parts of service packaging is defining scope. A package should specify:</p>
      <p><strong>Included:</strong> number of deliverables, number of pages, number of revisions, number of meetings, support duration, delivery timeframe, and included integrations.</p>
      <p><strong>Not included:</strong> additional pages, major redesigns, new features, third-party fees, additional integrations, emergency work, and ongoing maintenance unless specified.</p>
      <p>Example: instead of "Website development included," use "Up to 5 pages, 2 revision rounds, 1 contact form, responsive design, and deployment."</p>

      <hr />

      <h2>Add-On Architecture</h2>
      <p>Service packages can work together with add-on pricing. A standard package includes design, development, and SEO. Optional add-ons include extra page, payment API, and maintenance. This prevents the business from putting every possible feature into every package.</p>

      <hr />

      <h2>Build-Your-Own vs Custom Package</h2>
      <p><strong>Build-your-own:</strong> customer chooses from predefined options; modular; usually easier to price; faster purchase; fixed components; customer controls selection.</p>
      <p><strong>Custom package:</strong> provider designs the solution; highly flexible; requires estimation; longer sales process; potentially unique components; provider helps define scope.</p>

      <hr />

      <h2>Service Package Customer Journey</h2>
      <p>Customer → identify need → simple need (starter/basic) or complex need (consultation) → standard/custom package → professional/proposal → premium/agreement → delivery → support → renewal → upgrade/add-on.</p>

      <hr />

      <h2>Service Package Metrics</h2>
      <p><strong>Conversion = Customers Purchasing Package ÷ Qualified Customers × 100</strong></p>
      <p><strong>ARPC = Service Revenue ÷ Number of Clients</strong></p>
      <p><strong>Package Mix = Sales of Specific Package ÷ Total Package Sales × 100</strong>. This tells you how much of your business comes from each package.</p>
      <p><strong>Upgrade Rate = Customers Who Upgrade ÷ Eligible Customers × 100</strong></p>
      <p><strong>Utilization = Billable Hours ÷ Available Working Hours × 100</strong> (for hourly or labor-based services)</p>
      <p><strong>Service Contribution = Package Revenue − Variable Delivery Cost</strong></p>

      <hr />

      <h2>Common Service Packaging Problems</h2>
      <p><strong>1. Too many features.</strong> More features can make a package harder to understand. Solution: organize services around customer outcomes.</p>
      <p><strong>2. Unlimited revisions.</strong> "Unlimited revisions" can create uncontrolled labor costs. Better: "2 revision rounds included." Additional revisions: "₱X per round."</p>
      <p><strong>3. Unclear support.</strong> Avoid "Support included." Specify "Email support for 60 days, response within 1–2 business days."</p>
      <p><strong>4. Too much customization.</strong> If every customer requires a completely different package, the business loses operational efficiency. A useful structure is: standardized core + optional add-ons + custom work when necessary.</p>
      <p><strong>5. Pricing only by competitor price.</strong> A service package should consider delivery cost, labor, expertise, customer value, complexity, risk, support requirements, and desired contribution. Competitor pricing can provide market context, but it should not be the only pricing input.</p>

      <hr />

      <h2>Complete Service Packaging System</h2>
      <pre>{`CUSTOMER PROBLEM
                           │
                           ↓
                    DEFINE OUTCOME
                           │
                           ↓
                  IDENTIFY REQUIRED
                       SERVICES
                           │
                           ↓
                  STANDARDIZE CORE
                           │
             ┌─────────────┼─────────────┐
             ↓             ↓             ↓
          BASIC        STANDARD       PREMIUM
             │             │             │
             └─────────────┼─────────────┘
                           ↓
                      CUSTOMER FIT
                           │
            ┌──────────────┼──────────────┐
            ↓              ↓              ↓
         STARTER         GROWTH       PROFESSIONAL
                                          │
                                          ↓
                                      ENTERPRISE
                           │
             ┌─────────────┴─────────────┐
             ↓                           ↓
          CUSTOM                    BUILD-YOUR-OWN
             │                           │
             └─────────────┬─────────────┘
                           ↓
                    PRICING & SCOPE
                           ↓
                        PURCHASE
                           ↓
                       DELIVERY
                           ↓
                        SUPPORT
                           ↓
                  MEASURE PROFITABILITY
                           ↓
                     OPTIMIZE PACKAGE`}</pre>

      <hr />

      <h2>Service Package Architecture (5 Layers)</h2>
      <p><strong>Layer 1 — Entry:</strong> starter/basic. Designed to reduce the barrier to purchase.</p>
      <p><strong>Layer 2 — Core:</strong> standard/professional. Designed to serve the primary customer requirements.</p>
      <p><strong>Layer 3 — Expansion:</strong> growth/premium. Designed for customers requiring additional capabilities or seeking expansion.</p>
      <p><strong>Layer 4 — Comprehensive:</strong> all-inclusive/enterprise. Designed for customers wanting a broad, integrated solution.</p>
      <p><strong>Layer 5 — Flexible:</strong> custom/build-your-own. Designed for requirements that don't fit standardized packages.</p>

      <h3>The fundamental principle</h3>
      <p><strong>Clear Scope + Clear Value + Appropriate Pricing + Controlled Delivery = Effective Service Package</strong></p>
      <p>A well-designed service package turns individual labor and capabilities into a repeatable commercial product. It makes purchasing easier for customers and makes delivery, pricing, forecasting, and profitability easier for the service provider to manage.</p>
    </LessonLayout>
  )
}
