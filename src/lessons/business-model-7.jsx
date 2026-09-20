import LessonLayout from '../components/LessonLayout'

export default function BusinessModel7() {
  return (
    <LessonLayout
      number="122"
      title="Business Model — Part 7"
      summary="6 as-a-service models — Marketplace-as-a-Service, SaaS, IaaS, PaaS, Hardware-as-a-Service, and Service-as-a-Product, plus comparisons and how they combine."
    >
      <h2>Business Model — Part 7</h2>
      <p>This lesson focuses on "as-a-service" models — where customers pay for access, capability, usage, or ongoing value rather than simple one-time ownership.</p>

      <hr />

      <h2>1. Marketplace-as-a-Service (MaaS)</h2>
      <h3>Definition</h3>
      <p>Marketplace-as-a-Service (MaaS) is a business model in which a company provides the technology and infrastructure that allows another business, organization, or community to operate its own marketplace. Instead of building a marketplace from scratch, the customer uses an existing marketplace platform as a service.</p>

      <h3>What the MaaS Provider Can Provide</h3>
      <p>Seller registration, buyer accounts, product listings, search, categories, shopping cart, checkout, payments, seller dashboards, order management, inventory management, reviews, messaging, notifications, commission management, analytics, administration, API integrations.</p>

      <h3>Revenue Models</h3>
      <p>Monthly subscription, annual subscription, setup fee, transaction fee, seller fee, listing fee, payment fee, premium features, API usage, enterprise licensing, custom development.</p>

      <h3>Advantages</h3>
      <p>For the customer: faster launch, lower initial development requirements, existing marketplace infrastructure, built-in administration, easier scaling. For the provider: recurring revenue, multiple customers using shared infrastructure, potential economies of scale, additional transaction-based revenue.</p>

      <h3>Risks</h3>
      <p>Platform dependency, vendor lock-in, marketplace liquidity problems, payment complexity, security requirements, scalability problems, seller disputes, customization limitations.</p>

      <h3>Important Metrics</h3>
      <p>GMV, take rate, active sellers, active buyers, orders, buyer conversion rate, seller activation, seller retention, transaction volume, platform uptime, revenue per marketplace, customer acquisition cost, customer lifetime value.</p>

      <hr />

      <h2>2. Software-as-a-Service (SaaS)</h2>
      <h3>Definition</h3>
      <p>Software-as-a-Service (SaaS) provides software to customers through an ongoing service rather than requiring each customer to purchase and independently maintain the software. The provider generally operates the application and underlying infrastructure.</p>

      <h3>Examples</h3>
      <p>CRM, accounting software, project management, email marketing, design tools, video platforms, business analytics, inventory management, HR software, school-management systems.</p>

      <h3>Pricing Models</h3>
      <p>Monthly subscription, annual subscription, per-user, feature-based, usage-based.</p>

      <h3>SaaS Economics</h3>
      <p>MRR = Monthly Recurring Revenue. ARR = Annual Recurring Revenue. Churn Rate = (Customers Lost ÷ Customers at Beginning of Period) × 100. Retention Rate = (Customers Remaining ÷ Customers at Beginning of Period) × 100.</p>
      <p><strong>LTV ≈ ARPC × Gross Margin × Average Customer Lifetime</strong></p>

      <h3>Advantages</h3>
      <p>Recurring revenue, continuous customer relationship, centralized updates, easier deployment, potential scalability, predictable billing.</p>

      <h3>Risks</h3>
      <p>Customer churn, infrastructure expenses, cybersecurity, downtime, customer support costs, development costs, data protection, strong competition.</p>

      <h3>SaaS vs Traditional Software</h3>
      <ul>
        <li>Traditional — often purchased as a license; SaaS — usually recurring service</li>
        <li>Traditional — customer may manage infrastructure; SaaS — provider generally operates service</li>
        <li>Traditional — updates may be separate; SaaS — continuous updates are common</li>
        <li>Traditional — higher upfront payment possible; SaaS — recurring payments</li>
        <li>Traditional — customer may self-host; SaaS — usually cloud-hosted</li>
      </ul>

      <hr />

      <h2>3. Infrastructure-as-a-Service (IaaS)</h2>
      <h3>Definition</h3>
      <p>Infrastructure-as-a-Service (IaaS) provides computing infrastructure as a service instead of requiring customers to purchase and operate physical infrastructure themselves. Infrastructure can include virtual machines, storage, networking, computing capacity, firewalls, load balancing, and data-center resources.</p>

      <h3>IaaS Responsibility Model</h3>
      <p><strong>Provider</strong> — physical data center, hardware, networking infrastructure, core infrastructure. <strong>Customer</strong> — operating system, applications, data, application configuration. The exact division depends on the provider and service.</p>

      <h3>Pricing</h3>
      <p>Pay-as-you-go, hourly billing, monthly billing, reserved capacity, storage-based pricing, data-transfer pricing, compute-based pricing.</p>

      <h3>Advantages</h3>
      <p>No need to purchase physical servers, flexible capacity, rapid deployment, geographic availability, scalable infrastructure, usage-based economics.</p>

      <h3>Risks</h3>
      <p>Variable cloud bills, configuration errors, security misconfiguration, vendor dependency, downtime, data-transfer costs, resource waste.</p>

      <hr />

      <h2>4. Platform-as-a-Service (PaaS)</h2>
      <h3>Definition</h3>
      <p>Platform-as-a-Service (PaaS) provides an environment where developers can build, deploy, and operate applications without managing all of the underlying infrastructure themselves.</p>

      <h3>Typical PaaS Components</h3>
      <p>Application runtime, databases, deployment tools, APIs, authentication, monitoring, scaling, development environments, build systems, hosting.</p>

      <h3>Revenue Models</h3>
      <p>Monthly subscription, usage-based pricing, compute usage, database usage, storage, API requests, deployment volume, enterprise contracts.</p>

      <h3>Advantages</h3>
      <p>Faster development, reduced infrastructure management, easier deployment, built-in development services, scalability, developer productivity.</p>

      <h3>Risks</h3>
      <p>Vendor lock-in, platform limitations, unexpected usage costs, service outages, migration complexity, dependency on provider architecture.</p>

      <hr />

      <h2>5. Hardware-as-a-Service (HaaS)</h2>
      <h3>Definition</h3>
      <p>Hardware-as-a-Service (HaaS) provides physical hardware through a recurring service arrangement rather than requiring the customer to purchase the hardware outright. The provider may retain ownership of the hardware while the customer pays for access, usage, support, maintenance, or a combination.</p>

      <h3>Examples</h3>
      <p>Computers, POS terminals, security systems, networking equipment, industrial machines, agricultural sensors, printers, servers, IoT devices.</p>

      <h3>Revenue Models</h3>
      <p>Monthly subscription, rental, usage-based, per-device, per-location, equipment + software, equipment + maintenance, equipment + support.</p>

      <h3>Advantages</h3>
      <p>Customer: lower upfront capital requirement, maintenance may be included, easier hardware replacement, predictable payments. Provider: recurring revenue, long-term customer relationship, opportunity for software/service upsells, hardware utilization opportunities.</p>

      <h3>Risks</h3>
      <p>Hardware depreciation, repairs, theft, damage, replacement costs, logistics, customer defaults, asset recovery.</p>

      <h3>Important Metrics</h3>
      <p>Devices deployed, utilization, revenue/device, hardware cost/device, maintenance cost, failure rate, replacement rate, customer retention, contract lifetime, asset recovery rate.</p>

      <hr />

      <h2>6. Service-as-a-Product</h2>
      <h3>Definition</h3>
      <p>Service-as-a-Product turns a service into a clearly defined, repeatable, packaged offering that customers can understand and purchase similarly to a product.</p>
      <p>Instead of "Tell me what you need and I'll figure out the price," the business creates something like "Website Launch Package — ₱25,000 — includes these exact deliverables, timeline, revisions, and support."</p>

      <h3>Characteristics</h3>
      <p>A service-as-a-product usually has: defined customer problem, defined scope, defined deliverables, defined process, defined timeline, defined price, defined revisions, defined support, defined exclusions.</p>

      <h3>Benefits</h3>
      <p>Easier purchasing, easier pricing, faster proposals, easier sales, more predictable delivery, easier employee training, better scalability, easier profitability analysis.</p>

      <h3>Risks</h3>
      <p>Over-standardization, poor fit for unusual customers, scope creep, customers expecting unlimited customization, incorrect pricing, delivery bottlenecks.</p>

      <h3>Key Metrics</h3>
      <p>Sales conversion, average order value, delivery time, gross margin, customer satisfaction, revision rate, scope-creep rate, repeat purchase, customer retention, revenue per delivery hour.</p>

      <hr />

      <h2>SaaS vs PaaS vs IaaS</h2>
      <ul>
        <li>SaaS — customer mainly gets finished software — focus on using the application</li>
        <li>PaaS — customer mainly gets development platform — focus on building/deploying applications</li>
        <li>IaaS — customer mainly gets infrastructure — focus on managing systems/applications</li>
      </ul>

      <hr />

      <h2>HaaS vs IaaS</h2>
      <ul>
        <li>HaaS — physical hardware; IaaS — virtual/cloud infrastructure</li>
        <li>HaaS — devices/equipment; IaaS — computing resources</li>
        <li>HaaS — hardware maintenance may be included; IaaS — infrastructure management is abstracted</li>
        <li>HaaS — can involve installation and replacement; IaaS — usually accessed through cloud interfaces</li>
      </ul>

      <hr />

      <h2>SaaS vs Service-as-a-Product</h2>
      <ul>
        <li>SaaS — software is the primary offering; service-as-a-product — human/service delivery is usually the primary offering</li>
        <li>SaaS — usually accessed digitally; service-as-a-product — may involve people, software, or both</li>
        <li>SaaS — often recurring; service-as-a-product — can be one-time or recurring</li>
        <li>SaaS — software is highly standardized; service-as-a-product — service can have controlled customization</li>
      </ul>
      <p>A service-as-a-product can also include SaaS. Example: digital marketing package = human strategy + content production + analytics SaaS + reporting.</p>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Marketplace-as-a-Service provides marketplace infrastructure to businesses or organizations that want to operate their own marketplace.</li>
        <li>Software-as-a-Service provides software as an ongoing service, commonly through recurring or usage-based pricing.</li>
        <li>Infrastructure-as-a-Service provides computing infrastructure such as servers, storage, and networking resources.</li>
        <li>Platform-as-a-Service provides a managed environment for building, deploying, and operating applications.</li>
        <li>Hardware-as-a-Service provides physical equipment through recurring access, usage, rental, or service arrangements.</li>
        <li>Service-as-a-Product standardizes a service into a clearly defined commercial offering.</li>
        <li>The "as-a-service" concept generally emphasizes access, capability, usage, or ongoing value rather than simple one-time ownership.</li>
        <li>Recurring revenue does not automatically mean recurring profit; infrastructure, support, maintenance, hardware, and customer-acquisition costs must be included.</li>
        <li>Standardization is essential for making service businesses more predictable and scalable.</li>
        <li>Usage-based pricing can align customer payment with consumption but can also create unpredictable bills for customers.</li>
        <li>Subscription pricing can make revenue more predictable but introduces churn and retention requirements.</li>
        <li>Infrastructure and hardware businesses generally have greater physical capital requirements than pure software businesses.</li>
        <li>APIs can be added to SaaS, PaaS, marketplace, and other models to create additional integration-based revenue.</li>
        <li>Service-as-a-Product can convert repeated professional work into standardized packages while retaining some controlled customization.</li>
        <li>A company can combine several service models when each component provides a clear customer benefit.</li>
        <li>The business must define exactly what is included, what is excluded, how customers are billed, and who is responsible for maintenance, security, data, hardware, and support.</li>
        <li>The strongest model is not simply the one with recurring revenue; it is the one where customer value, pricing, delivery cost, retention, and operational capacity remain economically sustainable.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Customer Problem → Value Proposition → Capability → Delivery Model → Standardized
        Offering → Pricing → Customer Acquisition → Customer Usage → Value Delivery →
        Support/Maintenance → Revenue → Variable Costs → Contribution → Retention → Expansion →
        Recurring Revenue → Measurement → Optimization → Scale.
      </p>
    </LessonLayout>
  )
}
