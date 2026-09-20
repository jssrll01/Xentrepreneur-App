import LessonLayout from '../components/LessonLayout'

export default function BuySellPart1() {
  return (
    <LessonLayout
      number="97"
      title="Buy & Sell Strategies — Part 1"
      summary="11 sourcing strategies — retail, wholesale, bulk, direct, supplier, manufacturer, distributor, import, local, online, and marketplace sourcing, plus full buy-side decision system and profitability formulas."
    >
      <h2>Buy &amp; Sell Strategies — Part 1</h2>

      <h2>1. Retail Buying</h2>
      <h3>Definition</h3>
      <p>Retail buying is the process of purchasing products in relatively small quantities from suppliers, distributors, wholesalers, or manufacturers and then selling those products individually or in smaller quantities to end customers.</p>
      <p>The retailer purchases inventory at a wholesale or negotiated price and attempts to sell it at a higher price while covering operating costs and generating profit.</p>
      <pre>{`Supplier / Wholesaler
        ↓
     Retailer
        ↓
    Customer`}</pre>

      <h3>How It Works</h3>
      <ol>
        <li>Identifies products customers want.</li>
        <li>Finds suitable suppliers.</li>
        <li>Compares supplier prices and terms.</li>
        <li>Purchases inventory.</li>
        <li>Stores or manages the products.</li>
        <li>Markets the products.</li>
        <li>Sells them to individual customers.</li>
        <li>Tracks inventory and profitability.</li>
        <li>Reorders products based on demand.</li>
      </ol>

      <h3>Example</h3>
      <p>A seller buys 20 phone cases for ₱100 each. Inventory cost ₱2,000. Sells each for ₱179 → ₱3,580 revenue. Gross profit before other expenses ₱1,580. The actual net profit would also account for shipping, platform fees, packaging, advertising, returns, and other costs.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Lower initial inventory commitment than large-scale wholesale buying</li>
        <li>Easier to test products</li>
        <li>Direct customer feedback</li>
        <li>Greater product variety</li>
        <li>Suitable for small businesses</li>
        <li>Lower storage requirements</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Higher unit cost</li>
        <li>Lower purchasing leverage</li>
        <li>Inventory may sell slowly</li>
        <li>Retail competition can be intense</li>
        <li>Supplier prices may change</li>
        <li>Small margins can disappear after operating expenses</li>
      </ul>

      <h3>Important Principle</h3>
      <p>Do not judge a retail purchase only by its buying price. Calculate the complete cost: purchase cost + shipping + taxes/duties + platform fees + packaging + advertising + storage + expected returns/losses = effective cost.</p>

      <hr />

      <h2>2. Wholesale Buying</h2>
      <h3>Definition</h3>
      <p>Wholesale buying is purchasing products in larger quantities, usually at a lower per-unit price, from manufacturers, distributors, importers, or wholesalers. The buyer may then resell those products individually, in smaller quantities, or to another business.</p>
      <pre>{`Manufacturer
      ↓
Wholesaler
      ↓
Retailer
      ↓
Customer`}</pre>

      <h3>How It Works</h3>
      <ol>
        <li>Determines expected demand.</li>
        <li>Identifies wholesale suppliers.</li>
        <li>Requests price lists.</li>
        <li>Checks minimum order quantities.</li>
        <li>Negotiates price and terms.</li>
        <li>Orders inventory.</li>
        <li>Receives and inspects products.</li>
        <li>Stores inventory.</li>
        <li>Resells the products.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Lower unit costs</li>
        <li>Better purchasing leverage</li>
        <li>Higher potential gross margin</li>
        <li>More consistent inventory availability</li>
        <li>Suitable for established demand</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Larger upfront capital requirement</li>
        <li>Higher inventory risk</li>
        <li>Storage requirements</li>
        <li>Possible obsolete inventory</li>
        <li>Cash becomes tied up in stock</li>
      </ul>

      <h3>Wholesale Buying Rule</h3>
      <p>A lower unit price is not automatically a better purchase. If demand is weak, buying 500 units at ₱95 can be worse than buying 50 units at ₱125.</p>

      <hr />

      <h2>3. Bulk Buying</h2>
      <h3>Definition</h3>
      <p>Bulk buying means purchasing a large quantity of a product at once, usually to obtain a lower unit cost. It is primarily a quantity strategy rather than a specific supplier relationship.</p>

      <h3>Bulk Buying vs Wholesale Buying</h3>
      <ul>
        <li>Bulk buying — focuses on quantity; wholesale buying — focuses on purchasing for resale/distribution</li>
        <li>Bulk buying — can happen with many supplier types; wholesale buying — usually involves wholesale channels</li>
        <li>Bulk buying — main objective is lower unit cost; wholesale buying — main objective is commercial purchasing</li>
        <li>Bulk buying — may be used by businesses or consumers; wholesale buying — primarily business-oriented</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Lower unit cost</li>
        <li>Potentially higher margins</li>
        <li>Fewer purchasing transactions</li>
        <li>Better supplier bargaining power</li>
        <li>More inventory availability</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Overstocking</li>
        <li>Storage costs</li>
        <li>Cash-flow pressure</li>
        <li>Product expiration</li>
        <li>Product obsolescence</li>
        <li>Demand uncertainty</li>
      </ul>

      <h3>Bulk Buying Formula</h3>
      <p><strong>Effective Unit Cost = Total Acquisition Cost ÷ Quantity</strong></p>
      <p>The total acquisition cost should include transportation, import costs, fees, and other relevant purchasing expenses.</p>

      <hr />

      <h2>4. Direct Sourcing</h2>
      <h3>Definition</h3>
      <p>Direct sourcing means purchasing products or materials directly from the original producer or manufacturer rather than going through multiple intermediaries.</p>
      <pre>{`Manufacturer
      ↓
    Buyer
      ↓
   Customer`}</pre>
      <p>Instead of: Manufacturer → Distributor → Wholesaler → Retailer → Customer.</p>

      <h3>How It Works</h3>
      <ol>
        <li>Identify the product.</li>
        <li>Research manufacturers.</li>
        <li>Verify the manufacturer's legitimacy.</li>
        <li>Request catalogs and quotations.</li>
        <li>Confirm MOQ.</li>
        <li>Request samples.</li>
        <li>Negotiate pricing and terms.</li>
        <li>Check production capacity.</li>
        <li>Agree on specifications.</li>
        <li>Place an order.</li>
        <li>Inspect production/shipment.</li>
        <li>Receive inventory.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Potentially lower prices</li>
        <li>Greater customization</li>
        <li>Better product specifications</li>
        <li>Direct communication</li>
        <li>Stronger supplier relationships</li>
        <li>Possibility of private labeling</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Higher MOQs</li>
        <li>Longer lead times</li>
        <li>Quality-control responsibility</li>
        <li>Import complexity</li>
        <li>Communication challenges</li>
        <li>Larger capital requirements</li>
      </ul>

      <hr />

      <h2>5. Supplier Sourcing</h2>
      <h3>Definition</h3>
      <p>Supplier sourcing is the process of finding, evaluating, selecting, and maintaining suppliers capable of providing the products, materials, or services a business needs. Supplier sourcing is broader than simply finding a cheap supplier.</p>

      <h3>Supplier Evaluation</h3>
      <ul>
        <li>Price — is the price commercially viable?</li>
        <li>Quality — does the product meet specifications?</li>
        <li>MOQ — can the business afford the minimum order?</li>
        <li>Lead time — how quickly can orders be fulfilled?</li>
        <li>Reliability — does the supplier deliver consistently?</li>
        <li>Capacity — can production scale with demand?</li>
        <li>Payment terms — can payment terms support cash flow?</li>
        <li>Location — how difficult is transportation?</li>
        <li>Communication — is communication reliable?</li>
        <li>Compliance — does the supplier meet applicable requirements?</li>
      </ul>

      <h3>Supplier Scorecard</h3>
      <p><strong>Supplier Score = Price Score + Quality Score + Reliability Score + Lead-Time Score + Capacity Score + Service Score</strong></p>
      <p>For more advanced purchasing, each factor can be weighted according to importance.</p>

      <h3>Key Principle</h3>
      <p>The cheapest supplier is not necessarily the lowest-cost supplier. A supplier charging ₱100 with frequent defects and delays could cost more than a supplier charging ₱115 with consistent quality and delivery.</p>

      <hr />

      <h2>6. Manufacturer Sourcing</h2>
      <h3>Definition</h3>
      <p>Manufacturer sourcing involves finding and purchasing products or materials directly from companies that manufacture them. It is especially useful when a business needs large quantities, custom products, private-label products, custom packaging, specific specifications, or consistent production.</p>

      <h3>Manufacturer Sourcing Process</h3>
      <pre>{`Product Requirement
        ↓
Manufacturer Research
        ↓
Supplier Verification
        ↓
Quotation
        ↓
Sample
        ↓
Quality Evaluation
        ↓
Negotiation
        ↓
Production
        ↓
Inspection
        ↓
Shipping
        ↓
Inventory`}</pre>

      <h3>Benefits</h3>
      <ul>
        <li>Manufacturing-level pricing potential</li>
        <li>Customization</li>
        <li>Private labeling</li>
        <li>Production control</li>
        <li>Scalability</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>MOQ requirements</li>
        <li>Production defects</li>
        <li>Long lead times</li>
        <li>Quality-control requirements</li>
        <li>Manufacturing delays</li>
        <li>Large capital commitments</li>
      </ul>

      <h3>Important Distinction</h3>
      <p>Manufacturer sourcing ≠ automatically direct sourcing. A manufacturer may sell through an authorized distributor or agent. Direct sourcing specifically means the buyer is obtaining the product directly through the manufacturer rather than through an intermediary.</p>

      <hr />

      <h2>7. Distributor Sourcing</h2>
      <h3>Definition</h3>
      <p>Distributor sourcing means obtaining products from distributors that purchase, store, and distribute products from manufacturers or brands.</p>
      <pre>{`Manufacturer / Brand
        ↓
    Distributor
        ↓
       Buyer
        ↓
     Customer`}</pre>
      <p>Distributors can be particularly useful when direct manufacturer purchasing requires quantities or logistics that a smaller business cannot handle.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Lower MOQ than many manufacturers</li>
        <li>Faster availability</li>
        <li>Easier ordering</li>
        <li>Access to established brands</li>
        <li>Local inventory</li>
        <li>Reduced logistics complexity</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Higher prices than direct manufacturer sourcing</li>
        <li>Distributor stock shortages</li>
        <li>Less customization</li>
        <li>Dependency on distributor policies</li>
        <li>Potential channel competition</li>
      </ul>

      <h3>Distributor vs Manufacturer</h3>
      <ul>
        <li>Unit price potential — often lower / often higher</li>
        <li>MOQ — often higher / often lower</li>
        <li>Customization — usually greater / usually limited</li>
        <li>Availability — production dependent / often stocked</li>
        <li>Lead time — potentially longer / often shorter</li>
        <li>Logistics — buyer may manage more / distributor may simplify it</li>
      </ul>

      <hr />

      <h2>8. Import Sourcing</h2>
      <h3>Definition</h3>
      <p>Import sourcing means obtaining products from suppliers located in another country and bringing those products into the buyer's country for business use or resale.</p>
      <pre>{`Foreign Supplier
       ↓
International Shipping
       ↓
Customs / Import Process
       ↓
Local Warehouse
       ↓
Business
       ↓
Customer`}</pre>

      <h3>Example</h3>
      <p>Product ₱80 + international freight ₱15 + insurance ₱2 + taxes/duties/fees ₱8 + local logistics ₱5 = landed cost ₱110. The seller should evaluate profitability using ₱110, not ₱80.</p>

      <h3>Import Sourcing Process</h3>
      <ol>
        <li>Identify overseas demand opportunity.</li>
        <li>Find suppliers.</li>
        <li>Verify supplier legitimacy.</li>
        <li>Obtain samples.</li>
        <li>Confirm product specifications.</li>
        <li>Determine MOQ.</li>
        <li>Calculate landed cost.</li>
        <li>Check applicable import requirements.</li>
        <li>Determine shipping method.</li>
        <li>Prepare required documentation.</li>
        <li>Order.</li>
        <li>Track shipment.</li>
        <li>Complete customs/import procedures.</li>
        <li>Receive and inspect inventory.</li>
        <li>Calculate actual landed cost.</li>
      </ol>

      <h3>Risks</h3>
      <ul>
        <li>Currency fluctuations</li>
        <li>Shipping delays</li>
        <li>Customs issues</li>
        <li>Import taxes/duties/fees</li>
        <li>Quality problems</li>
        <li>Fraudulent suppliers</li>
        <li>Longer lead times</li>
        <li>International communication problems</li>
      </ul>

      <h3>Core Formula</h3>
      <p><strong>Landed Cost = Product Cost + International Freight + Insurance + Duties/Taxes/Fees + Local Logistics + Other Import Costs</strong></p>
      <p>Always verify the applicable legal, customs, tax, and product requirements for the specific goods and destination.</p>

      <hr />

      <h2>9. Local Sourcing</h2>
      <h3>Definition</h3>
      <p>Local sourcing means purchasing products, materials, or services from suppliers located within the same country or nearby geographic market.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Faster replenishment</li>
        <li>Lower transportation complexity</li>
        <li>Easier communication</li>
        <li>Potentially smaller MOQs</li>
        <li>Easier supplier visits</li>
        <li>Faster problem resolution</li>
        <li>Reduced international logistics exposure</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Higher unit costs in some categories</li>
        <li>Smaller supplier selection</li>
        <li>Limited product variety</li>
        <li>Local supply shortages</li>
        <li>Potentially less manufacturing capacity</li>
      </ul>

      <h3>Local vs Import Sourcing</h3>
      <ul>
        <li>Lead time — usually shorter / usually longer</li>
        <li>Logistics complexity — lower / higher</li>
        <li>Supplier pool — more limited geographically / much larger</li>
        <li>MOQ — often lower / often higher</li>
        <li>Product variety — depends on market / potentially very broad</li>
        <li>Currency exposure — usually lower / higher</li>
        <li>Customs complexity — usually lower / higher</li>
      </ul>

      <hr />

      <h2>10. Online Sourcing</h2>
      <h3>Definition</h3>
      <p>Online sourcing is finding and evaluating suppliers through internet-based channels such as supplier websites, business directories, B2B platforms, manufacturer websites, and online marketplaces. Online sourcing is a method of finding suppliers, not necessarily a type of supplier.</p>

      <h3>Online Sourcing Process</h3>
      <pre>{`Search
  ↓
Shortlist
  ↓
Verify
  ↓
Request Quote
  ↓
Compare
  ↓
Sample
  ↓
Negotiate
  ↓
Order
  ↓
Inspect
  ↓
Evaluate Supplier`}</pre>

      <h3>Supplier Verification</h3>
      <p>Before committing substantial money, examine business identity, physical/business presence, supplier history, product specifications, reviews and references, payment methods, return/dispute procedures, certifications where relevant, sample quality, communication quality, contract/invoice documentation.</p>

      <h3>Risks</h3>
      <ul>
        <li>Fake suppliers</li>
        <li>Misleading product images</li>
        <li>Counterfeit goods</li>
        <li>Fake reviews</li>
        <li>Hidden fees</li>
        <li>Inaccurate specifications</li>
        <li>Poor-quality products</li>
        <li>Payment fraud</li>
      </ul>

      <h3>Key Principle</h3>
      <p>Online discovery should be followed by supplier verification. Finding a supplier online is only the beginning of the sourcing process.</p>

      <hr />

      <h2>11. Marketplace Sourcing</h2>
      <h3>Definition</h3>
      <p>Marketplace sourcing means finding and purchasing products from online marketplaces where multiple sellers offer products on the same platform. Examples can include consumer marketplaces and specialized B2B marketplaces.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Easy product discovery</li>
        <li>Large supplier selection</li>
        <li>Price comparison</li>
        <li>Reviews and ratings</li>
        <li>Convenient ordering</li>
        <li>Useful for product testing</li>
        <li>Lower search costs</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Seller quality varies</li>
        <li>Product authenticity concerns</li>
        <li>Inconsistent quality</li>
        <li>Marketplace fees</li>
        <li>Supplier competition</li>
        <li>Product specifications may be inaccurate</li>
        <li>Prices can change quickly</li>
        <li>Marketplace dependency</li>
      </ul>

      <h3>Marketplace Sourcing vs Online Sourcing</h3>
      <p>Online sourcing is the broader concept. Marketplace sourcing is one specific form of online sourcing.</p>

      <hr />

      <h2>Sourcing Strategy Comparison</h2>
      <ul>
        <li>Retail buying — purchase smaller quantities — flexibility — higher unit cost</li>
        <li>Wholesale buying — commercial-volume purchasing — better pricing — inventory commitment</li>
        <li>Bulk buying — reduce unit cost through quantity — purchasing leverage — overstock</li>
        <li>Direct sourcing — remove intermediaries — potentially lower cost/control — higher complexity</li>
        <li>Supplier sourcing — find reliable suppliers — better supply network — poor supplier selection</li>
        <li>Manufacturer sourcing — buy from producers — customization/scalability — MOQ/production risk</li>
        <li>Distributor sourcing — access distributed inventory — convenience/availability — higher cost</li>
        <li>Import sourcing — access foreign supply — global product access — logistics/customs</li>
        <li>Local sourcing — buy locally — speed/simplicity — limited selection</li>
        <li>Online sourcing — find suppliers digitally — broad discovery — verification risk</li>
        <li>Marketplace sourcing — source through marketplaces — easy comparison — seller/platform risk</li>
      </ul>

      <hr />

      <h2>The Buy-Side Decision System</h2>
      <p>A strong purchasing decision should begin with "What do I need, what quantity do I need, what quality is required, and what total cost allows the business to remain profitable?" — not "Who sells this cheapest?"</p>

      <h3>Step 1 — Define the Requirement</h3>
      <p>Product → specification → quality → quantity → target cost → required delivery date.</p>

      <h3>Step 2 — Determine the Appropriate Sourcing Method</h3>
      <ul>
        <li>Small quantity → retail / distributor</li>
        <li>Moderate quantity → wholesale / distributor</li>
        <li>Large predictable demand → bulk / manufacturer / direct</li>
        <li>Need customization → manufacturer / direct</li>
        <li>Need fast local supply → local / distributor</li>
        <li>Need unique international products → import / international supplier</li>
        <li>Need broad supplier discovery → online / marketplace</li>
      </ul>

      <h3>Step 3 — Compare Total Acquisition Cost</h3>
      <p>Purchase price + shipping + taxes/duties/fees + packaging + inspection + storage + payment costs + expected losses = total acquisition cost.</p>

      <h3>Step 4 — Evaluate Supplier Quality</h3>
      <p>Evaluate supplier on price, quality, reliability, MOQ, defects, lead time, payment terms, capacity, communication.</p>

      <h3>Step 5 — Test Before Scaling</h3>
      <p>For unfamiliar suppliers: research → small order/sample → quality check → sell/test demand → measure results → reorder → scale. This reduces the risk of committing large amounts of capital before supplier quality and customer demand are validated.</p>

      <hr />

      <h2>Core Formulas</h2>
      <p><strong>Gross Profit = Revenue − Cost of Goods Sold</strong></p>
      <p><strong>Gross Margin = (Gross Profit ÷ Revenue) × 100</strong></p>
      <p><strong>Markup = ((Selling Price − Cost) ÷ Cost) × 100</strong></p>
      <p><strong>Inventory Turnover = Cost of Goods Sold ÷ Average Inventory</strong></p>
      <p><strong>Sell-Through Rate = (Units Sold ÷ Units Available) × 100</strong></p>
      <p><strong>Effective Unit Cost = Total Acquisition Cost ÷ Units Purchased</strong></p>
      <p><strong>Supplier Cost Savings = Previous Cost − New Effective Cost</strong></p>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Buy according to validated demand, not simply because a product is cheap.</li>
        <li>Compare total acquisition cost rather than supplier price alone.</li>
        <li>Use smaller test orders when demand or supplier quality is uncertain.</li>
        <li>Evaluate suppliers on price, quality, reliability, capacity, and terms.</li>
        <li>Bulk purchasing should be supported by sufficient demand and cash flow.</li>
        <li>Direct manufacturer sourcing can reduce intermediary costs but may increase complexity and MOQ.</li>
        <li>Distributors can provide convenience, availability, and lower purchasing complexity.</li>
        <li>Local sourcing can reduce logistics and lead-time risk.</li>
        <li>Import sourcing requires landed-cost and regulatory analysis.</li>
        <li>Online and marketplace sourcing require supplier verification.</li>
        <li>A low purchase price does not guarantee high profit.</li>
        <li>Inventory is capital; excessive inventory can create cash-flow problems.</li>
        <li>Supplier diversification can reduce dependence on a single source where appropriate.</li>
        <li>Quality problems must be treated as financial problems as well as operational problems.</li>
        <li>The best sourcing strategy depends on the product, quantity, demand certainty, cash position, required quality, lead time, and risk tolerance.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Customer Demand → Product Requirement → Sourcing Strategy → Supplier Discovery →
        Supplier Verification → Price/MOQ Comparison → Sample/Test → Landed-Cost Analysis →
        Purchase → Quality Control → Inventory Management → Pricing → Marketing → Selling →
        Revenue → Margin → Profit → Reorder → Supplier Optimization → Scale.
      </p>
    </LessonLayout>
  )
}
