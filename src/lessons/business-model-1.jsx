import LessonLayout from '../components/LessonLayout'

export default function BusinessModel1() {
  return (
    <LessonLayout
      number="116"
      title="Business Model — Part 1"
      summary="5 core transaction models — B2B, B2C, C2C, C2B, and B2G, plus multi-model businesses, revenue structures, and the economics of each transaction relationship."
    >
      <h2>Business Model — Part 1</h2>
      <p>A business model describes how an organization creates value, delivers that value to customers, and captures value through revenue and profit.</p>
      <pre>{`VALUE CREATION
     ↓
VALUE DELIVERY
     ↓
CUSTOMER
     ↓
TRANSACTION
     ↓
REVENUE
     ↓
COSTS
     ↓
PROFIT
     ↓
REINVESTMENT
     ↓
GROWTH`}</pre>
      <p>The B2B, B2C, C2C, C2B, and B2G models primarily describe who is selling to whom.</p>

      <hr />

      <h2>1. B2B Model</h2>
      <h3>Definition</h3>
      <p>B2B (Business-to-Business) is a business model where one business sells products or services to another business.</p>
      <p>Examples: software company → retail company, manufacturer → distributor, wholesaler → retailer, web-development agency → company, supplier → restaurant, cloud provider → software company, marketing agency → business.</p>

      <h3>How B2B Works</h3>
      <pre>{`Market Research
      ↓
Identify Businesses
      ↓
Prospecting
      ↓
Lead Qualification
      ↓
Discovery
      ↓
Needs Analysis
      ↓
Proposal
      ↓
Negotiation
      ↓
Contract
      ↓
Delivery
      ↓
Payment
      ↓
Customer Success
      ↓
Renewal / Expansion`}</pre>
      <p>B2B transactions can involve more decision-makers and longer purchasing processes than many consumer transactions.</p>

      <h3>Common B2B Pricing Models</h3>
      <p>Per project, per unit, wholesale pricing, subscription, per seat, usage-based, retainer, licensing, commission, volume pricing, enterprise pricing, custom quotation.</p>

      <h3>Types of B2B</h3>
      <p>Manufacturer → business, wholesaler → retailer, service provider → business, SaaS → business.</p>

      <h3>Benefits</h3>
      <p>Larger transaction values, recurring contracts, repeat purchasing, long-term relationships, predictable revenue potential, opportunities for upselling, higher customer lifetime value.</p>

      <h3>Challenges</h3>
      <p>Longer sales cycles, multiple decision-makers, negotiations, procurement requirements, contracts, payment terms, customer concentration risk, higher expectations for support.</p>

      <h3>Important B2B Metrics</h3>
      <p>Lead-to-customer conversion, sales cycle, average contract value, monthly recurring revenue, customer acquisition cost, customer lifetime value, renewal rate, churn rate, gross margin, accounts receivable, revenue per account.</p>

      <h3>B2B Formula</h3>
      <p><strong>B2B Profit = Business Revenue − Cost of Goods/Services − Operating Costs</strong></p>

      <hr />

      <h2>2. B2C Model</h2>
      <h3>Definition</h3>
      <p>B2C (Business-to-Consumer) is a business model where a business sells directly to individual consumers.</p>
      <p>Examples: online store → consumer, restaurant → customer, streaming service → viewer, clothing brand → shopper, mobile app → user, e-commerce marketplace seller → consumer.</p>

      <h3>How B2C Works</h3>
      <pre>{`Market Research
      ↓
Consumer Targeting
      ↓
Marketing
      ↓
Traffic
      ↓
Product Discovery
      ↓
Consideration
      ↓
Purchase
      ↓
Payment
      ↓
Fulfillment
      ↓
Customer Support
      ↓
Retention
      ↓
Repeat Purchase`}</pre>
      <p>B2C purchases are often more standardized and can have shorter decision cycles, although expensive or complex consumer products can involve extensive consideration.</p>

      <h3>Common B2C Models</h3>
      <p>Retail (business sells physical products to consumers), e-commerce (products sold online), subscription (consumers pay repeatedly), freemium (free product with premium paid features), direct-to-consumer (a brand sells directly to consumers without relying primarily on traditional retailers).</p>

      <h3>Benefits</h3>
      <p>Large consumer market, faster transaction potential, direct customer feedback, brand-building opportunities, high transaction volume, digital marketing scalability.</p>

      <h3>Challenges</h3>
      <p>High customer-acquisition costs, price sensitivity, returns, customer support volume, advertising competition, low average order values in some categories, consumer churn.</p>

      <h3>Important B2C Metrics</h3>
      <p>Conversion rate, average order value, customer acquisition cost, repeat purchase rate, customer lifetime value, cart abandonment, return rate, gross margin, revenue per customer.</p>

      <hr />

      <h2>3. C2C Model</h2>
      <h3>Definition</h3>
      <p>C2C (Consumer-to-Consumer) is a business model where one individual sells directly to another individual, usually through a platform that facilitates the transaction.</p>
      <p>Examples: person selling used furniture to another person, individual selling collectibles through a marketplace, person selling used electronics, peer-to-peer marketplaces, community marketplaces. The platform may not own the inventory.</p>

      <h3>How C2C Works</h3>
      <pre>{`Seller Creates Listing
        ↓
Platform Publishes Listing
        ↓
Buyer Discovers Product
        ↓
Buyer Contacts / Orders
        ↓
Payment
        ↓
Seller Ships / Meets Buyer
        ↓
Buyer Receives Product
        ↓
Review / Rating`}</pre>

      <h3>Platform Revenue</h3>
      <p>Transaction fees, listing fees, seller subscriptions, advertising, payment-processing fees, featured listings, delivery fees, premium seller tools.</p>

      <h3>C2C Network Effect</h3>
      <p>More sellers → more products → more buyers → more transactions → more sellers attracted → more products. This can create a marketplace network effect.</p>

      <h3>Benefits</h3>
      <p>For sellers: access to buyers, easy listing, ability to monetize unused items, wider market reach. For buyers: more product choices, used products, potentially lower prices, access to unique items. For platforms: potential transaction revenue, network effects, large product catalog without owning all inventory.</p>

      <h3>Challenges</h3>
      <p>Fraud, counterfeit goods, misrepresented condition, disputes, trust problems, shipping problems, off-platform transactions, safety concerns, quality inconsistency.</p>

      <h3>Important C2C Metrics</h3>
      <p>Active buyers, active sellers, listings, transaction volume, gross merchandise value, take rate, buyer conversion, seller activation, repeat transaction rate, dispute rate.</p>

      <hr />

      <h2>4. C2B Model</h2>
      <h3>Definition</h3>
      <p>C2B (Consumer-to-Business) occurs when an individual provides value to a business and the business pays for that value.</p>
      <pre>{`Individual
     ↓
Skill / Product / Content / Data / Service
     ↓
Business
     ↓
Payment`}</pre>
      <p>This reverses the traditional B2C relationship.</p>

      <h3>Examples</h3>
      <p>Freelancer → company, creator → brand, photographer → business, consumer → stock marketplace, crowdsourced services.</p>

      <h3>C2B Pricing Models</h3>
      <p>Hourly, per project, per deliverable, licensing, royalty, commission, usage-based, subscription, retainer, performance-based.</p>

      <h3>Benefits</h3>
      <p>For individuals: monetize skills, flexible work, multiple clients, global customer access, build a portfolio, create independent income streams. For businesses: access specialized talent, flexible capacity, lower fixed staffing requirements for some tasks, access to specialized expertise.</p>

      <h3>Challenges</h3>
      <p>Inconsistent income, client acquisition, scope creep, payment delays, competition, contract issues, quality-control challenges, capacity limitations.</p>

      <h3>Important C2B Metrics</h3>
      <p>Revenue per client, project profitability, utilization, client acquisition cost, repeat-client rate, average project value, payment time, customer satisfaction.</p>

      <hr />

      <h2>5. B2G Model</h2>
      <h3>Definition</h3>
      <p>B2G (Business-to-Government) is a business model where businesses provide goods or services to government entities. It is sometimes called B2A (Business-to-Administration) in some contexts.</p>
      <p>Examples: construction companies building public infrastructure, software companies providing government systems, security companies providing authorized services, equipment suppliers, consulting firms, office-supply vendors, transportation providers, healthcare suppliers.</p>

      <h3>How B2G Works</h3>
      <pre>{`Government Identifies Need
          ↓
Budget / Authorization
          ↓
Procurement Planning
          ↓
Tender / Solicitation
          ↓
Business Qualification
          ↓
Proposal / Bid
          ↓
Evaluation
          ↓
Award
          ↓
Contract
          ↓
Delivery
          ↓
Inspection / Acceptance
          ↓
Payment
          ↓
Contract Completion`}</pre>
      <p>Actual procurement procedures vary by jurisdiction and contract type.</p>

      <h3>B2G Pricing</h3>
      <p>Fixed-price contracts, unit pricing, time-and-materials arrangements, framework agreements, service contracts, subscription arrangements, maintenance contracts.</p>

      <h3>Benefits</h3>
      <p>Large contracts, potentially long-term relationships, predictable demand under awarded contracts, recurring maintenance/service opportunities, opportunities for specialized businesses.</p>

      <h3>Challenges</h3>
      <p>Complex procurement, qualification requirements, documentation, compliance, competition, long sales cycles, payment timelines, contract performance requirements, public-sector budget constraints.</p>

      <h3>Important B2G Metrics</h3>
      <p>Bid win rate, contract value, contract margin, proposal cost, procurement cycle, contract renewal, delivery performance, compliance rate, payment cycle, government-account concentration.</p>

      <hr />

      <h2>B2B vs B2C vs C2C vs C2B vs B2G</h2>
      <ul>
        <li>B2B — business seller — business buyer — software company → retailer</li>
        <li>B2C — business seller — consumer buyer — store → shopper</li>
        <li>C2C — consumer seller — consumer buyer — person → person marketplace</li>
        <li>C2B — consumer/individual seller — business buyer — freelancer → company</li>
        <li>B2G — business seller — government buyer — software company → government agency</li>
      </ul>

      <hr />

      <h2>Multi-Model Business</h2>
      <p>A single platform can combine several models. For example, a marketplace could operate B2C (businesses → consumers), C2C (consumers → consumers), and B2B (businesses → businesses). The same company could potentially also operate C2B (creators/freelancers → businesses) and B2G (businesses → government). This creates a multi-sided business model.</p>

      <hr />

      <h2>Revenue Models Within These Business Models</h2>
      <p>The transaction direction does not determine how the company makes money. For example, a B2C company could use one-time purchases, subscription, commission, advertising, membership, freemium, or licensing. A C2C marketplace could use transaction fees, listing fees, advertising, featured listings, payment fees, or seller subscriptions. A B2B company could use subscription, licensing, retainers, project fees, usage-based pricing, or enterprise contracts.</p>

      <hr />

      <h2>Business Model Economics</h2>
      <p>Every model should ultimately answer five questions: Who creates the value? Who receives the value? Who pays? What does the business keep? Can the model scale?</p>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>B2B means business-to-business.</li>
        <li>B2C means business-to-consumer.</li>
        <li>C2C means consumer-to-consumer.</li>
        <li>C2B means consumer/individual-to-business.</li>
        <li>B2G means business-to-government.</li>
        <li>These labels describe transaction relationships, not complete revenue models.</li>
        <li>One company can operate multiple business models simultaneously.</li>
        <li>The buyer, user, and payer can sometimes be different parties.</li>
        <li>B2B and B2G commonly involve more formal purchasing processes than simple B2C transactions, but this varies by product and organization.</li>
        <li>C2C platforms depend heavily on trust, liquidity, discovery, payments, and dispute management.</li>
        <li>C2B allows individuals to monetize skills, content, products, intellectual property, or services.</li>
        <li>B2G requires particular attention to procurement, contracts, compliance, documentation, and delivery requirements.</li>
        <li>Revenue does not equal profit.</li>
        <li>A large transaction is not automatically a profitable transaction.</li>
        <li>Customer acquisition cost, delivery cost, margin, retention, and cash flow should be evaluated for every model.</li>
        <li>The strongest business model is one where the value delivered to the customer can be produced sustainably and the revenue captured exceeds the total economic cost of delivering it.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Identify Customer → Determine Transaction Relationship → Understand Problem → Create
        Value → Deliver Value → Acquire Customer → Convert Transaction → Capture Revenue →
        Control Costs → Generate Contribution → Retain Customer → Expand Relationship → Measure
        Economics → Improve Model → Scale.
      </p>
    </LessonLayout>
  )
}
