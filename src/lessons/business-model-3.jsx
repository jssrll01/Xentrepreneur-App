import LessonLayout from '../components/LessonLayout'

export default function BusinessModel3() {
  return (
    <LessonLayout
      number="118"
      title="Business Model — Part 3"
      summary="13 access, usage, and outcome models — DTC, dropshipping, print-on-demand, rental, leasing, membership, crowdfunding, crowdsourcing, pay-per-use, pay-per-project, usage-based, outcome-based, and performance-based."
    >
      <h2>Business Model — Part 3</h2>
      <p>Business models determine how a business delivers its offering, how customers pay, who carries the operational risk, and how the business captures value. The models in this part focus heavily on distribution, access, usage, projects, performance, outcomes, and customer participation.</p>

      <hr />

      <h2>1. Direct-to-Consumer (DTC) Model</h2>
      <h3>Definition</h3>
      <p>Direct-to-consumer (DTC) is a business model in which a company sells directly to the final customer without relying primarily on traditional intermediaries such as wholesalers or independent retailers.</p>
      <pre>{`Business
   ↓
Website / App / Social / Store
   ↓
Consumer`}</pre>

      <h3>Advantages</h3>
      <p>Greater control over customer experience, direct customer relationship, more customer data (subject to applicable privacy requirements), greater control over branding, potentially higher gross margin, ability to test products quickly.</p>

      <h3>Risks</h3>
      <p>Customer acquisition can be expensive, business handles fulfillment, returns and customer service become its responsibility, marketing dependency, inventory risk if products are stocked.</p>

      <h3>Key Metrics</h3>
      <p>CAC, AOV, conversion rate, gross margin, contribution margin, repeat purchase rate, retention, LTV, return rate.</p>

      <hr />

      <h2>2. Dropshipping Model</h2>
      <h3>Definition</h3>
      <p>Dropshipping is a retail fulfillment model in which the seller markets and sells a product without normally holding the inventory itself. After an order is received, the supplier fulfills and ships the product to the customer.</p>
      <pre>{`Customer
   ↓
Online Store
   ↓
Order
   ↓
Supplier
   ↓
Customer`}</pre>

      <h3>Advantages</h3>
      <p>Low inventory requirement, lower upfront inventory investment, easy to test products, large product catalog possible, useful for validating demand.</p>

      <h3>Risks</h3>
      <p>Supplier controls much of fulfillment, quality may be inconsistent, shipping times may be long, stock availability can change, returns can be complicated, product differentiation may be limited, supplier dependency.</p>

      <h3>Important Principle</h3>
      <p>No inventory does not mean no risk. The seller still carries risks involving marketing, customer acquisition, refunds, reputation, customer support, supplier failures, and product compliance.</p>

      <hr />

      <h2>3. Print-on-Demand Model</h2>
      <h3>Definition</h3>
      <p>Print-on-demand (POD) produces a customized or branded product only after a customer places an order. Common products include shirts, hoodies, mugs, posters, stickers, phone cases, books, and art prints.</p>

      <h3>Advantages</h3>
      <p>Minimal finished-goods inventory, low upfront production, easy design testing, large catalog of designs, useful for creators and niche brands.</p>

      <h3>Risks</h3>
      <p>Higher unit production cost, supplier quality matters, production delays, printing defects, copyright/trademark issues, lower margins at small volumes.</p>

      <h3>Print-on-Demand vs Dropshipping</h3>
      <ul>
        <li>POD — usually involves customized designs; dropshipping — usually uses existing products</li>
        <li>POD — product created after order; dropshipping — existing supplier product shipped</li>
        <li>POD — stronger branding potential; dropshipping — often less differentiation</li>
        <li>POD — common for apparel/media; dropshipping — common across many product categories</li>
        <li>Both — inventory-light</li>
      </ul>

      <hr />

      <h2>4. Rental Model</h2>
      <h3>Definition</h3>
      <p>A rental model allows customers to use an asset temporarily in exchange for payment without transferring ownership to them.</p>

      <h3>Important Metric</h3>
      <p><strong>Utilization Rate = (Paid Rental Time ÷ Available Rental Time) × 100</strong></p>
      <p>High utilization can improve asset economics, provided pricing covers the associated costs.</p>

      <hr />

      <h2>5. Leasing Model</h2>
      <h3>Definition</h3>
      <p>A leasing model provides customers with the right to use an asset for a defined period under a lease agreement, usually involving recurring payments.</p>

      <h3>Rental vs Leasing</h3>
      <ul>
        <li>Rental — often shorter-term; leasing — often longer-term</li>
        <li>Rental — flexible usage; leasing — defined contractual period</li>
        <li>Rental — frequently priced by day/week; leasing — frequently monthly/periodic</li>
        <li>Rental — usually easier to change; leasing — greater contractual commitment</li>
        <li>Rental — suitable for temporary needs; leasing — suitable for longer-term use</li>
      </ul>
      <p>The exact legal and financial distinction varies by jurisdiction and contract structure.</p>

      <hr />

      <h2>6. Membership Model</h2>
      <h3>Definition</h3>
      <p>A membership model charges customers for belonging to a group or receiving continuing benefits, privileges, access, or services.</p>

      <h3>Membership Benefits</h3>
      <p>Discounts, exclusive products, early access, content, community access, support, events, special pricing, loyalty rewards.</p>

      <h3>Subscription vs Membership</h3>
      <p>Subscription emphasizes recurring payment for ongoing access to a product/service. Membership emphasizes belonging, privileges, access, or community. They can overlap.</p>

      <hr />

      <h2>7. Crowdfunding Model</h2>
      <h3>Definition</h3>
      <p>Crowdfunding raises money from many individuals or organizations, generally through an online platform or organized campaign. Different crowdfunding structures have different economics and legal requirements.</p>

      <h3>Major Types</h3>
      <p><strong>Reward-based</strong> — people contribute money and receive a product, reward, or other benefit. <strong>Donation-based</strong> — people contribute without expecting a financial return. <strong>Equity crowdfunding</strong> — participants receive an ownership interest subject to applicable securities laws and platform rules. <strong>Debt crowdfunding</strong> — participants provide financing that is expected to be repaid according to agreed terms.</p>

      <h3>Advantages</h3>
      <p>Access to capital, demand validation, marketing exposure, community building, early customer feedback.</p>

      <h3>Risks</h3>
      <p>Campaign failure, fulfillment problems, public visibility of delays, manufacturing difficulties, platform fees, legal/regulatory obligations, reputation damage.</p>

      <hr />

      <h2>8. Crowdsourcing Model</h2>
      <h3>Definition</h3>
      <p>Crowdsourcing obtains ideas, information, designs, solutions, content, or other contributions from a large group of people, often through an online platform.</p>
      <p><strong>Crowdfunding</strong> → crowd provides money. <strong>Crowdsourcing</strong> → crowd provides ideas/work/information/content/solutions.</p>

      <h3>Advantages</h3>
      <p>Large idea pool, diverse perspectives, lower discovery cost, community engagement, potential innovation.</p>

      <h3>Risks</h3>
      <p>Quality control, intellectual-property disputes, confidentiality concerns, managing large numbers of submissions, contributor expectations.</p>

      <hr />

      <h2>9. Pay-Per-Use Model</h2>
      <h3>Definition</h3>
      <p>A pay-per-use model charges customers each time they use a product, service, facility, or feature.</p>

      <h3>Advantages</h3>
      <p>For customers: pay only when needed, lower commitment. For businesses: revenue linked directly to usage, can serve occasional users, potential for expansion as usage grows.</p>

      <h3>Risk</h3>
      <p>Revenue may be unpredictable if usage fluctuates significantly.</p>

      <hr />

      <h2>10. Pay-Per-Project Model</h2>
      <h3>Definition</h3>
      <p>A pay-per-project model charges a customer a defined price for completing a specific project or deliverable. Common for web development, graphic design, video production, construction, consulting, software development, branding, and digital transformation.</p>

      <h3>Project Economics</h3>
      <p><strong>Project Contribution = Project Revenue − Direct Project Costs</strong></p>
      <p><strong>Effective Hourly Rate = Project Revenue ÷ Total Hours Worked</strong></p>

      <h3>Critical Principle</h3>
      <p>Scope must be controlled. Fixed price + uncontrolled scope → cost overrun risk → lower profitability.</p>

      <hr />

      <h2>11. Usage-Based Model</h2>
      <h3>Definition</h3>
      <p>A usage-based model charges customers according to how much of a service they consume. It is broader than simply "pay per use."</p>
      <p>Possible usage units include API calls, GB of storage, minutes, compute time, messages, transactions, seats used, data processed, and documents generated.</p>

      <h3>Usage-Based vs Pay-Per-Use</h3>
      <p>Pay-per-use usually emphasizes individual usage events. Usage-based can measure continuous or accumulated consumption. For example: pay-per-use → ₱10 per API request; usage-based → ₱10 per 1,000 API requests.</p>

      <hr />

      <h2>12. Outcome-Based Model</h2>
      <h3>Definition</h3>
      <p>An outcome-based model links payment to an agreed customer outcome rather than simply charging for time, units, or activities. The critical requirement is that the outcome must be defined and measurable enough to determine whether the payment condition has been satisfied.</p>

      <h3>Advantages</h3>
      <p>Aligns incentives, focuses on customer results, can differentiate from hourly pricing, can reduce perceived customer risk.</p>

      <h3>Risks</h3>
      <p>Outcomes may depend on factors outside the provider's control, measurement can become disputed, longer payment cycles, difficult attribution, more complicated contracts.</p>

      <hr />

      <h2>13. Performance-Based Model</h2>
      <h3>Definition</h3>
      <p>A performance-based model ties some or all compensation to predefined performance metrics.</p>
      <p>Possible metrics: sales generated, qualified leads, revenue, cost reduction, conversion rate, delivery performance, customer acquisition, completed transactions.</p>

      <h3>Performance-Based vs Outcome-Based</h3>
      <ul>
        <li>Performance-based — tied to defined performance metrics; outcome-based — tied to customer/business outcomes</li>
        <li>Performance-based — may use activity or output metrics; outcome-based — usually focuses on final result</li>
        <li>Performance-based — can be easier to measure; outcome-based — can require deeper measurement</li>
        <li>Performance-based — example: qualified leads generated; outcome-based — example: verified revenue increase</li>
      </ul>
      <p>The terms can overlap depending on the contract.</p>

      <hr />

      <h2>Business Model Comparison</h2>
      <ul>
        <li>DTC — product/service purchase — direct customer relationship</li>
        <li>Dropshipping — product purchase — supplier fulfills order</li>
        <li>Print-on-demand — customized product — production after order</li>
        <li>Rental — temporary access — use without ownership</li>
        <li>Leasing — contracted long-term use — extended asset access</li>
        <li>Membership — membership/access — benefits and belonging</li>
        <li>Crowdfunding — contribution/investment — collective financing</li>
        <li>Crowdsourcing — usually not a customer payment mechanism — collective contribution</li>
        <li>Pay-per-use — individual use — access when used</li>
        <li>Pay-per-project — defined project — deliverable</li>
        <li>Usage-based — measured consumption — consumption</li>
        <li>Outcome-based — achieved outcome — customer result</li>
        <li>Performance-based — measured performance — performance</li>
      </ul>

      <hr />

      <h2>Ownership vs Access</h2>
      <p>DTC — customer generally buys and owns the product. Dropshipping — customer buys the product; the seller does not necessarily hold inventory before the sale. Rental — business generally retains ownership while customer temporarily uses the asset. Leasing — ownership generally remains with the lessor during the lease, subject to the specific agreement. Outcome-based — the customer is primarily paying for a defined result rather than simply ownership or hours.</p>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Choose the business model around the customer's actual need, not simply what is easiest to monetize.</li>
        <li>DTC maximizes direct control over the customer relationship but also increases responsibility for acquisition, fulfillment, and support.</li>
        <li>Dropshipping reduces inventory ownership but increases dependence on suppliers.</li>
        <li>Print-on-demand allows customization without maintaining large finished-goods inventory.</li>
        <li>Rental monetizes an asset repeatedly through temporary access.</li>
        <li>Leasing monetizes longer-term asset usage through contractual arrangements.</li>
        <li>Membership monetizes continuing access, benefits, privileges, or community.</li>
        <li>Crowdfunding is primarily a capital-raising mechanism, while crowdsourcing is primarily a collective-contribution mechanism.</li>
        <li>Pay-per-use and usage-based models align charges with consumption.</li>
        <li>Pay-per-project works best when deliverables and scope can be clearly defined.</li>
        <li>Outcome-based models require measurable outcomes and reliable attribution.</li>
        <li>Performance-based models require clearly defined performance metrics and compensation rules.</li>
        <li>Variable pricing can align revenue with customer usage but can make revenue less predictable.</li>
        <li>Fixed pricing can simplify purchasing but transfers more scope or cost risk to the provider.</li>
        <li>Hybrid models can combine predictable base revenue with usage or performance revenue.</li>
        <li>A business model should be evaluated using revenue, contribution margin, CAC, LTV, retention, utilization, cash flow, and operational risk — not revenue alone.</li>
        <li>The best model for a product is not necessarily the best model for every customer segment.</li>
        <li>Business models can evolve as demand, technology, competition, and customer behavior change.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Customer Need → Value Proposition → Product/Service → Ownership or Access → Distribution
        → Pricing → Payment Structure → Revenue → Variable Costs → Contribution → Fixed Costs →
        Profitability → Retention → Expansion → Measurement → Optimization → Scale.
      </p>
    </LessonLayout>
  )
}
