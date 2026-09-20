import LessonLayout from '../components/LessonLayout'

export default function BuySellPart6() {
  return (
    <LessonLayout
      number="102"
      title="Buy & Sell Strategies — Part 6"
      summary="14 purchasing economics systems — break-even price, maximum purchase price, minimum selling price, negotiation, supplier discounts, bulk and volume purchasing, supplier diversification, PO management, inventory turnover, reorder points, and safety stock."
    >
      <h2>Buy &amp; Sell Strategies — Part 6</h2>

      <h2>1. Break-Even Price</h2>
      <h3>Definition</h3>
      <p>Break-even price is the selling price at which a product generates enough revenue to cover its relevant costs, resulting in zero profit and zero loss.</p>
      <p>It answers: "What is the lowest price I can sell this product for without losing money?"</p>

      <h3>Basic Calculation</h3>
      <p><strong>Break-Even Selling Price = Total Unit Cost</strong></p>
      <p>Example: purchase cost ₱500, shipping/inbound ₱50, packaging ₱20, other variable cost ₱30. Total unit cost ₱600. So ₱600 is the basic break-even selling price before percentage-based selling fees or fixed business expenses.</p>

      <h3>When Selling Fees Are a Percentage</h3>
      <p>Suppose a marketplace takes 10% of the selling price. Fixed unit cost ₱600. Break-even condition: P − 0.10P = ₱600 → 0.90P = ₱600 → P = ₱666.67. So the practical break-even price is approximately ₱666.67.</p>

      <h3>Why It Matters</h3>
      <p>Knowing the break-even price helps a seller avoid accidental losses, evaluate discounts, set price floors, compare marketplaces, negotiate supplier prices, evaluate promotions, and decide whether to liquidate inventory.</p>

      <hr />

      <h2>2. Maximum Purchase Price</h2>
      <h3>Definition</h3>
      <p>Maximum purchase price is the highest amount a business can afford to pay for a product while still achieving its required selling price, target margin, and other financial requirements. It is essentially a buying ceiling.</p>

      <h3>Basic Formula</h3>
      <p><strong>Maximum Purchase Price = Selling Price − Other Costs − Required Profit</strong></p>

      <h3>With a Gross-Margin Target</h3>
      <p>Suppose selling price ₱1,000, target gross margin 40%, other COGS costs ₱100. Maximum total COGS: ₱1,000 × (1 − 40%) = ₱600. Maximum product acquisition cost: ₱600 − ₱100 = ₱500.</p>

      <h3>Important Principle</h3>
      <p>Do not ask only "How cheap can I buy this?" Ask "What is the maximum I can pay while keeping the product economically viable?"</p>

      <hr />

      <h2>3. Minimum Selling Price</h2>
      <h3>Definition</h3>
      <p>Minimum selling price is the lowest price at which a business is willing or able to sell a product while satisfying a defined financial requirement. It can refer to several different floors.</p>

      <h3>Cost Floor</h3>
      <p>Minimum price ≥ relevant variable cost. Selling below this level generally creates a contribution loss on the unit.</p>

      <h3>Profit-Target Floor</h3>
      <p>If a business requires ₱150 contribution: minimum selling price = total variable cost + required contribution.</p>

      <h3>Margin-Based Floor</h3>
      <p>Suppose total unit cost ₱600 and the business wants a 30% margin. Selling price = ₱600 ÷ (1 − 0.30) = ₱857.14.</p>

      <h3>Important Note</h3>
      <p>The minimum selling price is not necessarily the advertised price. It is a decision boundary.</p>

      <hr />

      <h2>4. Negotiated Buying</h2>
      <h3>Definition</h3>
      <p>Negotiated buying is the process of negotiating with suppliers to improve purchasing terms. The negotiation can involve much more than unit price.</p>

      <h3>Variables That Can Be Negotiated</h3>
      <p>Unit price, MOQ, quantity, payment terms, delivery time, shipping, packaging, product customization, warranty, replacement policy, defect allowance, returns, credit terms, volume rebates, lead time, exclusivity where appropriate.</p>

      <h3>Negotiation Principle</h3>
      <p>Trade value for value. Buyer gives higher quantity → receives lower unit price. Buyer gives faster payment → receives payment discount. Buyer gives longer commitment → receives better terms.</p>

      <h3>Avoid</h3>
      <p>Negotiating without knowing market prices. Making unrealistic demands. Focusing only on price. Ignoring quality. Accepting terms that create hidden costs.</p>

      <hr />

      <h2>5. Supplier Discounts</h2>
      <h3>Definition</h3>
      <p>Supplier discounts are reductions or economic concessions offered by suppliers to encourage purchasing, faster payment, larger orders, longer relationships, or other commercially valuable behavior.</p>

      <h3>Common Forms</h3>
      <p>Quantity discount, bulk discount, early-payment discount, promotional discount, contract discount, volume rebate, loyalty discount, seasonal discount, distributor discount, cash discount.</p>

      <h3>Important Principle</h3>
      <p>A discount is beneficial only if the purchase itself makes economic sense. Buying unnecessary inventory simply to receive a discount can increase total business risk.</p>

      <hr />

      <h2>6. Bulk Discounts</h2>
      <h3>Definition</h3>
      <p>Bulk discounts are lower unit prices offered when the buyer purchases a larger quantity.</p>

      <h3>Buyer Consideration</h3>
      <p>The lower unit price must be compared against inventory carrying cost, storage, cash tied up, demand uncertainty, product expiration, obsolescence, and opportunity cost.</p>

      <h3>Example</h3>
      <p>Buying 100 units at ₱440 instead of 50 units at ₱470: 50 units = ₱23,500; 100 units = ₱44,000. The second option saves ₱30 per unit but requires an additional ₱20,500 of capital. The question becomes: will the additional inventory sell quickly enough to justify the capital commitment?</p>

      <hr />

      <h2>7. Early-Payment Discounts</h2>
      <h3>Definition</h3>
      <p>An early-payment discount is a supplier discount offered when an invoice is paid before its normal due date.</p>
      <p>Example: 2/10, Net 30 typically means 2% discount if paid within 10 days, otherwise full payment is due within 30 days.</p>

      <h3>When It Makes Sense</h3>
      <p>An early-payment discount can be attractive when the business has sufficient cash, the discount is meaningful, paying early does not create a cash-flow problem, and no more valuable use of the cash is being sacrificed.</p>

      <h3>Important Principle</h3>
      <p>A discount is not automatically valuable if accepting it creates a liquidity problem. Cash availability can be more important than a small purchasing discount.</p>

      <hr />

      <h2>8. Volume Purchasing</h2>
      <h3>Definition</h3>
      <p>Volume purchasing involves buying larger quantities to obtain better pricing, availability, terms, or operational efficiency. Bulk discounts are one possible benefit, but volume purchasing is broader.</p>

      <h3>Potential Advantages</h3>
      <p>Lower unit cost, lower shipping cost per unit, better supplier priority, improved availability, more predictable inventory, stronger negotiating position.</p>

      <h3>Potential Disadvantages</h3>
      <p>Higher capital requirement, greater inventory risk, storage requirements, overstock, slower stock rotation, obsolescence.</p>

      <h3>Volume Purchasing Decision</h3>
      <p>Lower unit cost → additional quantity → additional capital → expected demand → inventory turnover → storage cost → cash-flow impact → total economic value.</p>

      <hr />

      <h2>9. Supplier Diversification</h2>
      <h3>Definition</h3>
      <p>Supplier diversification means obtaining products, materials, or services from multiple suppliers instead of depending excessively on one supplier.</p>

      <h3>Why Diversify?</h3>
      <p>It can reduce exposure to supplier shutdowns, stock shortages, quality problems, price increases, shipping disruptions, production delays, and geographic disruptions.</p>

      <h3>But Diversification Has Costs</h3>
      <p>Multiple suppliers can create more administration, different quality levels, more complicated purchasing, different MOQs, different delivery schedules, and more complicated inventory management.</p>

      <h3>Important Note</h3>
      <p>The objective is not automatically to have many suppliers. The objective is to create an appropriate level of supply resilience without unnecessarily increasing cost and complexity.</p>

      <hr />

      <h2>10. Purchase-Order Management</h2>
      <h3>Definition</h3>
      <p>Purchase-order management is the process of creating, approving, tracking, receiving, reconciling, and closing purchase orders. A purchase order (PO) is a formal document specifying what a buyer intends to purchase from a supplier under agreed terms.</p>

      <h3>Typical PO Information</h3>
      <p>PO number, supplier, product/SKU, quantity, unit price, total price, delivery address, expected delivery date, payment terms, shipping terms, quality requirements, special instructions.</p>

      <h3>PO Lifecycle</h3>
      <pre>{`Need Identified → Supplier Selected → Quote Received → PO Created → Approval → PO Sent → Supplier Confirms → Production/Preparation → Shipment → Receiving → Quantity & Quality Check → Invoice Matching → Payment → PO Closed`}</pre>

      <h3>Three-Way Matching</h3>
      <p>A useful control is comparing purchase order ↔ receiving record ↔ supplier invoice. Discrepancies should be investigated before payment is finalized.</p>

      <hr />

      <h2>11. Inventory Turnover</h2>
      <h3>Definition</h3>
      <p>Inventory turnover measures how efficiently a business sells and replaces its inventory during a period.</p>
      <p><strong>Inventory Turnover = COGS ÷ Average Inventory</strong></p>

      <h3>Inventory Days</h3>
      <p><strong>Inventory Days = 365 ÷ Inventory Turnover</strong></p>

      <h3>Why It Matters</h3>
      <p>Higher turnover can indicate faster inventory movement, but extremely high turnover can also indicate that inventory levels are too low and stockouts may occur. Low turnover can indicate weak demand, overstock, poor purchasing, high prices, product obsolescence, or slow sales channels.</p>
      <p>Inventory turnover should be interpreted together with margin and service levels.</p>

      <hr />

      <h2>12. Stock Rotation</h2>
      <h3>Definition</h3>
      <p>Stock rotation is the systematic movement and sale of inventory so that older or more appropriate inventory is used or sold before newer inventory where applicable. A common approach is FIFO — First In, First Out.</p>

      <h3>Particularly Important For</h3>
      <p>Food, cosmetics, pharmaceuticals, perishable products, products with expiration dates, products with changing packaging, seasonal inventory.</p>

      <h3>Stock Aging</h3>
      <p>0–30 days recent, 31–60 days normal monitoring, 61–90 days review, 91–180 days aging, 180+ days high-priority action. These ranges are examples rather than universal standards.</p>

      <hr />

      <h2>13. Reorder Points</h2>
      <h3>Definition</h3>
      <p>A reorder point (ROP) is the inventory level at which a business should place a replenishment order so that new inventory arrives before existing inventory reaches an unacceptable level.</p>

      <h3>Basic Formula</h3>
      <p><strong>ROP = Lead-Time Demand + Safety Stock</strong></p>
      <p>If average daily demand = 20 units, supplier lead time = 5 days, safety stock = 30 units, then ROP = (20 × 5) + 30 = 130 units.</p>

      <h3>Important Variables</h3>
      <p>Average demand, demand variability, lead time, lead-time variability, safety stock, supplier reliability, minimum order quantity, review frequency.</p>

      <hr />

      <h2>14. Safety Stock</h2>
      <h3>Definition</h3>
      <p>Safety stock is additional inventory held as a buffer against uncertainty in demand, supplier lead time, or other supply disruptions. It exists because forecasts are not perfectly accurate.</p>

      <h3>Why Hold Safety Stock?</h3>
      <p>It can protect against unexpected demand increases, supplier delays, transportation delays, forecasting errors, quality problems, and temporary supply shortages.</p>

      <h3>Balance</h3>
      <p>Too little safety stock risks stockouts and lost sales. Too much safety stock ties up capital, increases storage cost, and increases aging and discounting risk.</p>
      <p><strong>Safety stock is a balance between service reliability and inventory cost.</strong></p>

      <hr />

      <h2>Reorder Point vs Safety Stock</h2>
      <ul>
        <li>Reorder point — tells you when to reorder; safety stock — tells you how much buffer to maintain</li>
        <li>Reorder point — includes lead-time demand; safety stock — protects against uncertainty</li>
        <li>Reorder point — trigger level; safety stock — inventory reserve</li>
        <li>Reorder point — used to initiate replenishment; safety stock — used to reduce stockout risk</li>
      </ul>
      <p><strong>Reorder Point = Expected Lead-Time Demand + Safety Stock</strong></p>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Know your break-even price before discounting.</li>
        <li>Set a maximum purchase price before negotiating with suppliers.</li>
        <li>Establish a minimum selling price based on actual economics rather than emotion.</li>
        <li>Negotiate more than just the unit price.</li>
        <li>Trade quantity, payment speed, commitment, flexibility, or forecast visibility for better supplier terms when appropriate.</li>
        <li>Never buy unnecessary inventory simply because a supplier offers a discount.</li>
        <li>Bulk purchasing should be evaluated against demand, turnover, storage, and cash flow.</li>
        <li>Early-payment discounts should be evaluated against the value of retaining cash.</li>
        <li>Supplier diversification can reduce concentration risk, but excessive supplier complexity also has costs.</li>
        <li>Use purchase orders to create a clear record of purchasing commitments.</li>
        <li>Match purchase orders, received quantities, and invoices to reduce purchasing errors.</li>
        <li>Inventory turnover should be considered alongside gross margin and stock availability.</li>
        <li>Fast turnover with inadequate margin may still produce weak economics.</li>
        <li>High margins with extremely slow turnover can tie up capital.</li>
        <li>Stock rotation reduces unnecessary aging and helps protect inventory value.</li>
        <li>Reorder points should account for expected demand during supplier lead time.</li>
        <li>Safety stock protects against uncertainty rather than normal expected demand.</li>
        <li>Too little safety stock increases stockout risk.</li>
        <li>Too much safety stock increases carrying and obsolescence risk.</li>
        <li>Actual sales and inventory data should continuously improve future purchasing decisions.</li>
        <li>The objective of purchasing is not simply to obtain the lowest price; it is to obtain the appropriate total economic value at an acceptable level of risk.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Market Demand → Forecast Demand → Determine Maximum Purchase Price → Establish Minimum
        Selling Price → Calculate Break-Even Price → Identify Suppliers → Compare Suppliers →
        Negotiate Buying Terms → Obtain Supplier Discounts → Evaluate Bulk/Volume Purchasing →
        Evaluate Early-Payment Discounts → Diversify Appropriate Supply Sources → Create Purchase
        Order → Receive &amp; Inspect Inventory → Apply Stock Rotation → Monitor Inventory →
        Maintain Safety Stock → Trigger Reorder Point → Sell → Measure Inventory Turnover →
        Analyze Margin &amp; Cash Flow → Optimize Purchasing → Reorder → Improve → Scale.
      </p>
    </LessonLayout>
  )
}
