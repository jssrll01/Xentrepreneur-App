import LessonLayout from '../components/LessonLayout'

export default function BuySellPart2() {
  return (
    <LessonLayout
      number="98"
      title="Buy & Sell Strategies — Part 2"
      summary="6 inventory buying strategies — liquidation, clearance, overstock, seasonal, pre-order, and consignment buying, plus inventory risk frameworks, sell-through metrics, and full buy-and-sell lifecycle."
    >
      <h2>Buy &amp; Sell Strategies — Part 2</h2>

      <h2>1. Liquidation Buying</h2>
      <h3>Definition</h3>
      <p>Liquidation buying is the practice of purchasing products from businesses, distributors, retailers, manufacturers, or other sellers that need to quickly convert inventory into cash.</p>
      <p>Liquidation inventory can arise from business closures, store closures, bankruptcy or insolvency, excess inventory, discontinued product lines, returned merchandise, failed product launches, warehouse clearance, business restructuring, or seasonal inventory that was not sold.</p>
      <p>The buyer typically seeks products at a substantial discount and then resells them individually, in bundles, through marketplaces, or through other sales channels.</p>

      <h3>How It Works</h3>
      <ol>
        <li>Finds a liquidation opportunity.</li>
        <li>Identifies what products are included.</li>
        <li>Determines the condition of the inventory.</li>
        <li>Checks quantities.</li>
        <li>Estimates resale prices.</li>
        <li>Calculates the total acquisition cost.</li>
        <li>Estimates defective/unsellable inventory.</li>
        <li>Purchases the inventory.</li>
        <li>Sorts and inspects the products.</li>
        <li>Separates sellable and unsellable items.</li>
        <li>Prices the inventory.</li>
        <li>Resells through appropriate channels.</li>
        <li>Measures actual profitability.</li>
      </ol>

      <h3>Example</h3>
      <p>Original inventory 100 units × ₱500 = ₱50,000. Retailer offers the entire lot for ₱20,000. But suppose 10 units are defective, 5 units missing accessories, ₱3,000 transportation, ₱2,000 repairs/repackaging. Actual investment ₱25,000. Sellable inventory 85 units. Effective cost per sellable unit ₱294.12. Evaluate using ₱294.12, not the original ₱200 purchase price.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Potentially very low acquisition costs</li>
        <li>Opportunity for high gross margins</li>
        <li>Access to discontinued products</li>
        <li>Ability to acquire inventory quickly</li>
        <li>Potential for bundle and marketplace opportunities</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Unknown product condition</li>
        <li>Missing components</li>
        <li>Defective products</li>
        <li>Incomplete documentation</li>
        <li>Counterfeit products</li>
        <li>Slow-moving inventory</li>
        <li>Mixed-quality lots</li>
        <li>Limited returns</li>
        <li>Large quantities of unwanted products</li>
      </ul>

      <h3>Liquidation Buying Principle</h3>
      <p>Never value a liquidation lot based only on the seller's claimed retail value. Evaluate: expected resale value − total acquisition cost − selling costs − losses.</p>

      <hr />

      <h2>2. Clearance Buying</h2>
      <h3>Definition</h3>
      <p>Clearance buying means purchasing products that a retailer, distributor, or manufacturer is deliberately selling at reduced prices to move inventory out of the normal sales cycle.</p>
      <p>Clearance products can result from end-of-season inventory, discontinued products, store remodeling, product replacement, packaging changes, overstock, model updates, or slow sales.</p>
      <p>Unlike liquidation, clearance does not necessarily mean the seller is closing or experiencing financial distress.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Discounted acquisition cost</li>
        <li>Opportunity for attractive margins</li>
        <li>Useful for testing new product categories</li>
        <li>Often easier to purchase than liquidation lots</li>
        <li>Can create attractive customer promotions</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Product may be discontinued</li>
        <li>Replacement model may reduce demand</li>
        <li>Customers may prefer newer versions</li>
        <li>Warranty/support may be limited</li>
        <li>Clearance inventory can become obsolete</li>
      </ul>

      <h3>Important Question</h3>
      <p>Before buying clearance inventory, ask: "Why is this product being cleared?" A discount is more valuable when the underlying demand remains healthy.</p>

      <hr />

      <h2>3. Overstock Buying</h2>
      <h3>Definition</h3>
      <p>Overstock buying is purchasing inventory that another business has in quantities exceeding its current expected demand.</p>
      <p>Overstock can happen because a seller forecasted demand incorrectly, ordered too much, experienced weaker-than-expected sales, changed product strategy, lost a major customer, received a larger shipment than needed, or had a seasonal demand decline.</p>

      <h3>Overstock vs Liquidation</h3>
      <ul>
        <li>Overstock — usually excess inventory; liquidation — often associated with asset/inventory liquidation</li>
        <li>Overstock — seller may continue normal operations; liquidation — seller may be closing, restructuring, or disposing of assets</li>
        <li>Overstock — products can be new and complete; liquidation — condition can vary substantially</li>
        <li>Overstock — often more predictable; liquidation — potentially higher uncertainty</li>
        <li>Overstock — discount may be moderate; liquidation — discount can be substantial</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Discounted products</li>
        <li>Often-new inventory</li>
        <li>Potentially predictable product quality</li>
        <li>Large-volume purchasing opportunities</li>
        <li>Good opportunity for alternative sales channels</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Weak underlying demand</li>
        <li>Large inventory commitment</li>
        <li>Storage costs</li>
        <li>Price competition</li>
        <li>Product aging</li>
        <li>Capital tied up in inventory</li>
      </ul>

      <h3>Overstock Evaluation Formula</h3>
      <p><strong>Expected Profit = Expected Revenue − Purchase Cost − Selling Costs − Expected Inventory Losses</strong></p>

      <hr />

      <h2>4. Seasonal Buying</h2>
      <h3>Definition</h3>
      <p>Seasonal buying means purchasing inventory in anticipation of predictable changes in customer demand during specific seasons, holidays, events, weather periods, or recurring occasions.</p>
      <p>Examples include Christmas, Valentine's Day, back-to-school season, summer, rainy season, holiday travel, graduation season, sports seasons, local festivals, and annual events.</p>

      <h3>Seasonal Buying Cycle</h3>
      <pre>{`Historical Demand
       ↓
Season Forecast
       ↓
Inventory Planning
       ↓
Early Purchasing
       ↓
Inventory Arrival
       ↓
Seasonal Marketing
       ↓
Peak Sales
       ↓
End-of-Season Clearance
       ↓
Performance Analysis
       ↓
Next Season Forecast`}</pre>

      <h3>Seasonal Buying Strategy</h3>
      <p><strong>Before season</strong> — research demand, forecast sales, negotiate supplier pricing, place orders, build inventory.</p>
      <p><strong>During season</strong> — monitor sales velocity, replenish high-performing products, adjust advertising, monitor stockouts.</p>
      <p><strong>After season</strong> — measure remaining inventory, discount slow-moving stock where appropriate, bundle remaining products, record lessons for the next season.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Better availability during peak demand</li>
        <li>Opportunity to capture seasonal revenue</li>
        <li>Better supplier planning</li>
        <li>Potential purchasing discounts</li>
        <li>More effective seasonal marketing</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Demand forecast errors</li>
        <li>Overstock</li>
        <li>Stockouts</li>
        <li>Seasonal price changes</li>
        <li>Storage costs</li>
        <li>Unsold inventory after the season</li>
      </ul>

      <h3>Seasonal Inventory Formula</h3>
      <p><strong>Required Inventory = Forecast Demand + Safety Stock − Existing Inventory − Confirmed Incoming Inventory</strong></p>
      <p>The forecast should account for historical sales, market changes, promotions, and unusual circumstances.</p>

      <hr />

      <h2>5. Pre-Order Buying</h2>
      <h3>Definition</h3>
      <p>Pre-order buying is purchasing or committing to purchase products before they are officially available or before the seller has received the complete inventory. For a reseller, pre-orders can allow demand to be measured before committing to a larger inventory purchase.</p>

      <h3>Pre-Order Buying Process</h3>
      <ol>
        <li>Identify a product opportunity.</li>
        <li>Verify supplier capability.</li>
        <li>Determine estimated production/shipping time.</li>
        <li>Establish realistic delivery expectations.</li>
        <li>Set pre-order terms.</li>
        <li>Collect orders according to the applicable payment/refund rules.</li>
        <li>Determine demand.</li>
        <li>Place supplier order.</li>
        <li>Monitor production.</li>
        <li>Receive inventory.</li>
        <li>Inspect products.</li>
        <li>Fulfill pre-orders.</li>
        <li>Handle remaining inventory through normal sales.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Demand validation</li>
        <li>Lower inventory uncertainty</li>
        <li>Reduced upfront inventory risk</li>
        <li>Better production planning</li>
        <li>Potentially improved cash-flow planning</li>
        <li>Useful for new or customized products</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Supplier delays</li>
        <li>Production problems</li>
        <li>Shipping delays</li>
        <li>Customer cancellations</li>
        <li>Refund obligations</li>
        <li>Quality problems</li>
        <li>Customer dissatisfaction if delivery expectations are unclear</li>
      </ul>

      <h3>Pre-Order Principle</h3>
      <p>Never use pre-orders to hide uncertainty. Customers should clearly understand what they are ordering, expected delivery period, price, payment terms, cancellation/refund terms, product specifications, and what happens if fulfillment is delayed.</p>

      <hr />

      <h2>6. Consignment Buying</h2>
      <h3>Definition</h3>
      <p>Consignment is an arrangement where one party provides products to another party for resale, while ownership generally remains with the consignor until the products are sold or otherwise handled according to the agreement.</p>
      <p>The reseller is commonly called the consignee, while the inventory owner is the consignor. The exact ownership, payment, return, damage, and accounting terms depend on the agreement and applicable law.</p>

      <h3>Example</h3>
      <p>Consignor's agreed share ₱350 per unit, consignee's share ₱150, selling price ₱500. If 30 units sell: 30 × ₱500 = ₱15,000 sales. Consignor receives ₱10,500. Consignee receives ₱4,500. The agreement should specify how unsold inventory is returned or handled.</p>

      <h3>Benefits for the Consignee</h3>
      <ul>
        <li>Lower upfront inventory cost</li>
        <li>Reduced inventory ownership risk</li>
        <li>Greater product variety</li>
        <li>Opportunity to test new products</li>
        <li>Useful for products with uncertain demand</li>
      </ul>

      <h3>Benefits for the Consignor</h3>
      <ul>
        <li>Access to additional sales channels</li>
        <li>Greater market exposure</li>
        <li>Ability to reach customers without building a complete retail operation</li>
        <li>Opportunity to test markets</li>
      </ul>

      <h3>Risks for the Consignee</h3>
      <ul>
        <li>Lower control over inventory ownership</li>
        <li>Administrative complexity</li>
        <li>Unsold inventory management</li>
        <li>Reconciliation requirements</li>
        <li>Potential disputes over damage/loss</li>
      </ul>

      <h3>Risks for the Consignor</h3>
      <ul>
        <li>Products may sell slowly</li>
        <li>Inventory may be damaged</li>
        <li>Payment reconciliation can become difficult</li>
        <li>Poor product presentation may reduce sales</li>
        <li>Dependence on the consignee's sales channel</li>
      </ul>

      <h3>Important Consignment Terms</h3>
      <p>A written agreement should clearly address product ownership, selling price, revenue split, commission, payment schedule, inventory records, damage/loss responsibility, returns, discounts, promotions, unsold inventory, product retrieval, reporting, termination, dispute handling.</p>

      <hr />

      <h2>Buying Strategy Comparison</h2>
      <ul>
        <li>Liquidation buying — acquire deeply discounted inventory — medium to high capital — unknown condition/demand</li>
        <li>Clearance buying — buy discounted products — low to medium — obsolescence</li>
        <li>Overstock buying — acquire excess stock cheaply — medium to high — slow-moving inventory</li>
        <li>Seasonal buying — prepare for predictable demand — medium to high — forecast error</li>
        <li>Pre-order buying — validate demand before full inventory commitment — low to medium — fulfillment delays</li>
        <li>Consignment buying — sell without purchasing all inventory upfront — low — operational/reconciliation complexity</li>
      </ul>

      <hr />

      <h2>Liquidation vs Clearance vs Overstock</h2>
      <p>These strategies are closely related but should not be treated as identical. A single inventory lot can fit more than one category.</p>
      <p>For example: a retailer has 10,000 excess units and decides to clear them at a discount. That inventory is simultaneously overstock and clearance inventory. If the retailer is also closing its business, it may additionally become part of a liquidation sale.</p>

      <hr />

      <h2>Inventory Risk Framework</h2>
      <p>Every buying strategy should answer four questions:</p>
      <p><strong>1. Demand risk</strong> — will customers actually buy it? High demand confidence → lower inventory risk. Low demand confidence → higher inventory risk.</p>
      <p><strong>2. Product risk</strong> — will the product remain desirable and sellable? Important for electronics, fashion, technology, seasonal products, trend-based products.</p>
      <p><strong>3. Capital risk</strong> — how much cash will be locked into inventory? A ₱100,000 inventory purchase is not automatically good because it has a high potential margin. The business must be able to survive while waiting for the inventory to sell.</p>
      <p><strong>4. Time risk</strong> — how long will the inventory remain unsold? Inventory that takes 12 months to sell may be less attractive than inventory with a smaller margin that sells within 30 days.</p>

      <hr />

      <h2>Buy Price vs Effective Cost</h2>
      <p>A common mistake in buy-and-sell businesses is focusing exclusively on the purchase price. Consider a liquidation purchase:</p>
      <pre>{`Purchase Price             ₱20,000
Transportation              ₱3,000
Sorting/Inspection          ₱1,000
Repairs                     ₱2,000
Packaging                   ₱1,000
Storage                     ₱1,000
----------------------------------
Effective Investment       ₱28,000`}</pre>
      <p>If only 80 units are ultimately sellable: ₱28,000 ÷ 80 = ₱350 effective cost per sellable unit. The apparent bargain should therefore be evaluated against the actual sellable inventory, not the original quantity.</p>

      <hr />

      <h2>Key Metrics</h2>
      <p><strong>Sell-Through Rate = (Units Sold ÷ Units Available) × 100</strong></p>
      <p><strong>Inventory Turnover = Cost of Goods Sold ÷ Average Inventory</strong></p>
      <p><strong>Gross Margin = (Gross Profit ÷ Revenue) × 100</strong></p>
      <p><strong>Inventory ROI = Gross Profit Generated ÷ Inventory Investment</strong></p>

      <h3>Inventory Aging</h3>
      <p>Track how long products remain unsold: 0–30 days, 31–60 days, 61–90 days, 91–180 days, 180+ days. Older inventory may require price adjustment, bundle promotion, alternative sales channel, supplier return where available, clearance, or liquidation.</p>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>A discount does not create demand. A cheap product can still become dead stock.</li>
        <li>Calculate effective cost, not just purchase price.</li>
        <li>Liquidation inventory requires especially careful inspection and valuation.</li>
        <li>Clearance buying should investigate why the product is being cleared.</li>
        <li>Overstock buying works best when the underlying product still has healthy demand.</li>
        <li>Seasonal buying should be based on demand forecasting rather than intuition alone.</li>
        <li>Pre-orders can reduce inventory uncertainty but create fulfillment obligations.</li>
        <li>Consignment can reduce upfront inventory investment but requires strong inventory controls.</li>
        <li>Track sell-through and inventory aging continuously.</li>
        <li>Consider storage, shipping, defects, returns, fees, and markdowns when calculating profitability.</li>
        <li>Do not commit large amounts of capital merely because the apparent discount is large.</li>
        <li>Use small tests when demand or product quality is uncertain.</li>
        <li>Have an exit strategy for slow-moving inventory before buying it.</li>
        <li>Match the buying strategy to demand certainty, capital availability, product life cycle, and operational capability.</li>
        <li>The objective is not to buy cheaply; it is to acquire inventory at a cost that allows profitable, sustainable resale.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Demand → Forecast → Select Buying Strategy → Find Opportunity → Verify Product →
        Calculate Effective Cost → Assess Risk → Test When Appropriate → Purchase/Consign →
        Inspect → List → Market → Sell → Track Sell-Through → Measure Margin → Manage Inventory
        Aging → Reorder / Discount / Bundle / Return → Optimize → Scale.
      </p>
    </LessonLayout>
  )
}
