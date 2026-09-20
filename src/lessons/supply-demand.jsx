import LessonLayout from '../components/LessonLayout'

export default function SupplyDemand() {
  return (
    <LessonLayout
      number="106"
      title="Supply & Demand"
      summary="15 core market concepts — supply, demand, equilibrium price and quantity, supply and demand curves, forecasting, shortages, surpluses, market clearing, consumer and business demand, shifts, and integration."
    >
      <h2>Supply &amp; Demand</h2>
      <p>Supply and demand are the two fundamental forces that explain how markets determine prices, quantities, shortages, surpluses, production decisions, and purchasing behavior.</p>

      <pre>{`MARKET
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
       DEMAND                   SUPPLY
          │                       │
     Buyers want              Sellers offer
          │                       │
          └───────────┬───────────┘
                      ↓
                  MARKET PRICE
                      ↓
                MARKET QUANTITY`}</pre>
      <p>The interaction between buyers and sellers produces a market outcome. When the quantity buyers want to purchase equals the quantity sellers want to provide, the market is at equilibrium.</p>

      <hr />

      <h2>1. Supply</h2>
      <h3>Definition</h3>
      <p>Supply is the quantity of a product or service that sellers are willing and able to offer for sale at different prices during a particular period, holding other relevant factors constant. Supply describes the seller side of the market.</p>
      <p>Generally, a higher selling price gives producers greater incentive to supply more, assuming other conditions remain unchanged. This relationship is commonly called the law of supply.</p>

      <h3>What Determines Supply?</h3>
      <p>Selling price, production costs, raw-material prices, labor costs, technology, number of sellers, taxes, subsidies, regulations, supplier reliability, production capacity, expectations about future prices, weather or natural conditions, availability of inputs.</p>

      <h3>Important Note</h3>
      <p>Supply is not simply about how much inventory exists. It also involves the ability and willingness to provide goods or services.</p>

      <hr />

      <h2>2. Demand</h2>
      <h3>Definition</h3>
      <p>Demand is the quantity of a product or service that buyers are willing and able to purchase at different prices during a particular period, holding other relevant factors constant. Demand describes the buyer side of the market.</p>
      <p>Generally, when price increases, quantity demanded decreases, assuming other factors remain unchanged. This is commonly called the law of demand.</p>

      <h3>Demand Requires More Than Desire</h3>
      <p>Effective demand requires desire + willingness to buy + ability to pay. Someone saying "I want an ₱80,000 computer" does not necessarily create ₱80,000 worth of demand.</p>

      <hr />

      <h2>3. Equilibrium Price</h2>
      <h3>Definition</h3>
      <p>The equilibrium price is the price at which the quantity demanded equals the quantity supplied. At this price, there is neither a shortage nor a surplus in the basic market model.</p>
      <p><strong>Quantity Demanded = Quantity Supplied</strong></p>

      <h3>Example</h3>
      <p>At ₱200, QD = 140 and QS = 140. Therefore equilibrium price = ₱200.</p>

      <hr />

      <h2>4. Equilibrium Quantity</h2>
      <h3>Definition</h3>
      <p>Equilibrium quantity is the quantity bought and sold at the equilibrium price. Equilibrium is described using both price and quantity.</p>
      <p>Equilibrium price answers: at what price do quantity demanded and quantity supplied meet? Equilibrium quantity answers: how many units are exchanged at that price?</p>

      <hr />

      <h2>5. Supply Curve</h2>
      <h3>Definition</h3>
      <p>A supply curve is a graphical representation of the relationship between the price of a product and the quantity sellers are willing and able to supply. The traditional supply curve slopes upward from left to right.</p>
      <p>Generally: higher price → greater quantity supplied. Lower price → lower quantity supplied. Higher prices can make additional production more economically attractive.</p>

      <hr />

      <h2>6. Demand Curve</h2>
      <h3>Definition</h3>
      <p>A demand curve represents the relationship between price and quantity demanded. The traditional demand curve slopes downward.</p>
      <p>Generally: higher price → lower quantity demanded. Lower price → higher quantity demanded.</p>
      <p>Why? At lower prices, more customers can afford the product, existing customers may purchase more, substitutes may become less attractive, and the perceived value-to-price relationship can improve.</p>

      <hr />

      <h2>7. Demand Forecasting</h2>
      <h3>Definition</h3>
      <p>Demand forecasting is the process of estimating how much customers are likely to purchase in a future period. It is essential for purchasing, inventory planning, production, staffing, cash-flow planning, marketing, pricing, and capacity planning.</p>

      <h3>Simple Moving Average</h3>
      <p>Suppose monthly sales were 100, 120, 110. Three-month moving average = (100 + 120 + 110) ÷ 3 = 110 units. A simple forecast for the next period would therefore be 110 units.</p>
      <p>More advanced forecasting may incorporate seasonality, growth trends, promotions, price changes, customer acquisition, market conditions, and competitor activity.</p>

      <h3>Forecast Error</h3>
      <p><strong>Forecast Error = Actual Demand − Forecast Demand</strong></p>

      <hr />

      <h2>8. Supply Forecasting</h2>
      <h3>Definition</h3>
      <p>Supply forecasting estimates how much product or service capacity will be available in the future. Demand forecasting asks: how much will customers want? Supply forecasting asks: how much can suppliers or producers provide?</p>

      <h3>Supply Forecast Inputs</h3>
      <p>Supplier capacity, production capacity, raw materials, labor availability, lead times, supplier reliability, transportation, inventory, production schedules, seasonal constraints, expected disruptions.</p>

      <h3>Example</h3>
      <p>If a business forecasts demand of 10,000 units but suppliers can reliably provide 7,000 units, the potential supply gap is 3,000 units. Possible responses include finding another supplier, increasing orders earlier, increasing safety stock, substituting products, increasing production capacity, or adjusting the sales plan.</p>

      <hr />

      <h2>9. Shortage</h2>
      <h3>Definition</h3>
      <p>A shortage occurs when, at a particular price, the quantity demanded is greater than the quantity supplied. QD &gt; QS.</p>
      <p>Example: at ₱100, quantity demanded 1,000 and quantity supplied 600. Shortage 400 units.</p>

      <h3>What Can Happen During a Shortage?</h3>
      <p>Stockouts, longer waiting times, higher prices, backorders, customer switching, supplier competition, production expansion.</p>

      <hr />

      <h2>10. Surplus</h2>
      <h3>Definition</h3>
      <p>A surplus occurs when quantity supplied exceeds quantity demanded at a particular price. QS &gt; QD.</p>
      <p>Example: at ₱500, quantity supplied 1,000 and quantity demanded 600. Surplus 400 units.</p>

      <h3>Business Consequences</h3>
      <p>Excess inventory, storage costs, discounting, promotions, clearance sales, production cuts, lower future orders, inventory liquidation.</p>

      <hr />

      <h2>11. Excess Demand</h2>
      <h3>Definition</h3>
      <p>Excess demand occurs when buyers want to purchase more than sellers are willing or able to provide at the current price. Excess Demand = QD − QS when QD &gt; QS.</p>
      <p>In a flexible market, this can create pressure for the price to rise.</p>

      <hr />

      <h2>12. Excess Supply</h2>
      <h3>Definition</h3>
      <p>Excess supply occurs when sellers provide more than buyers want to purchase at the current price. Excess Supply = QS − QD when QS &gt; QD.</p>
      <p>In a flexible market, this can create downward pressure on price.</p>

      <hr />

      <h2>13. Market Clearing</h2>
      <h3>Definition</h3>
      <p>Market clearing occurs when the quantity supplied equals the quantity demanded at the prevailing market price. This means there is no remaining excess demand or excess supply.</p>

      <h3>Important Note</h3>
      <p>Real markets do not always instantly clear. Adjustment can be delayed by contracts, price controls, search costs, production lead times, information gaps, inventory, regulation, market power, and capacity constraints.</p>

      <hr />

      <h2>14. Consumer Demand</h2>
      <h3>Definition</h3>
      <p>Consumer demand is demand generated by individuals or households purchasing products and services for personal or household use.</p>

      <h3>Consumer Demand Factors</h3>
      <p>Income, price, preferences, brand perception, population, advertising, expectations, prices of substitutes, prices of complementary goods, seasonality, convenience, product quality.</p>

      <h3>Consumer Demand Funnel</h3>
      <p>Awareness → interest → need/desire → consideration → purchase intent → purchase → repeat purchase. Not everyone who expresses interest becomes actual purchasing demand.</p>

      <hr />

      <h2>15. Business Demand</h2>
      <h3>Definition</h3>
      <p>Business demand is demand generated by organizations purchasing goods or services for business operations, production, resale, investment, or other organizational purposes.</p>

      <h3>Business Demand Characteristics</h3>
      <p>Business purchases can be influenced by expected customer demand, production requirements, inventory levels, budget, ROI, operating costs, procurement policies, supplier terms, lead times, capacity, contracts, and forecasts.</p>

      <h3>Business Demand Is Often Derived</h3>
      <p>Business demand is often derived from consumer demand. Consumer demand → retailer sales → business demand → wholesale purchase → manufacturer demand → raw material demand. This is particularly important in supply chains.</p>

      <hr />

      <h2>Consumer Demand vs Business Demand</h2>
      <ul>
        <li>Consumer demand — individuals/households; business demand — organizations</li>
        <li>Consumer demand — often personal consumption; business demand — operations, production, resale, investment</li>
        <li>Consumer demand — can be emotionally influenced; business demand — often includes financial/procurement analysis</li>
        <li>Consumer demand — usually smaller quantities; business demand — often larger quantities</li>
        <li>Consumer demand — shorter buying process may occur; business demand — often involves approval/procurement</li>
        <li>Consumer demand — brand and convenience can be important; business demand — ROI, reliability, terms, and specifications can be important</li>
      </ul>

      <hr />

      <h2>Supply and Demand Shifts</h2>
      <h3>Movement Along the Curve</h3>
      <p>A change in the product's own price causes movement along the existing curve. For example, price increases → quantity demanded decreases. This is a change in quantity demanded, not necessarily a change in demand itself.</p>

      <h3>Shift in Demand</h3>
      <p>Other factors can shift the entire demand curve: population changes, consumer income changes, preferences change, advertising changes, substitute prices change, complement prices change, expectations change.</p>
      <p>Demand increase → demand curve shifts right → potentially higher equilibrium price + potentially higher equilibrium quantity.</p>

      <h3>Shift in Supply</h3>
      <p>Supply can shift because of input costs, technology, taxes, subsidies, number of suppliers, productivity, production capacity, regulations, expectations.</p>
      <p>Supply increase → supply curve shifts right → potentially lower equilibrium price + potentially higher equilibrium quantity.</p>
      <p>The actual result depends on the size and direction of the changes in both supply and demand.</p>

      <hr />

      <h2>Shortage and Surplus Management</h2>
      <p><strong>When demand exceeds supply:</strong> demand ↑ → inventory ↓ → stockout risk ↑ → business responses include increase purchasing, add suppliers, increase production, adjust price, offer pre-orders, allocate inventory.</p>
      <p><strong>When supply exceeds demand:</strong> supply ↑ → inventory ↑ → holding cost ↑ → business responses include improve marketing, adjust price, bundle, cross-sell, enter new channels, reduce future purchases, liquidate excess stock.</p>

      <hr />

      <h2>Supply-Demand Forecasting System</h2>
      <p>Compare forecast demand vs forecast supply. Example: forecast demand 10,000 units, expected existing inventory 2,000, expected supplier availability 6,000. Potential supply available 8,000. Potential gap 2,000 units. The business can act before the shortage becomes an actual stockout.</p>

      <hr />

      <h2>Important Supply &amp; Demand Relationships</h2>
      <ul>
        <li>Demand ↑ + supply unchanged → potential upward pressure on price and quantity</li>
        <li>Demand ↓ + supply unchanged → potential downward pressure on price and quantity</li>
        <li>Supply ↑ + demand unchanged → potential downward pressure on price and upward pressure on quantity</li>
        <li>Supply ↓ + demand unchanged → potential upward pressure on price and downward pressure on quantity</li>
        <li>Demand ↑ + supply ↑ → quantity generally increases; effect on price depends on relative size of shifts</li>
        <li>Demand ↓ + supply ↓ → quantity generally decreases; effect on price depends on relative size of shifts</li>
      </ul>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Supply represents the seller side of a market.</li>
        <li>Demand represents the buyer side of a market.</li>
        <li>Supply is about willingness and ability to sell, not merely physical inventory.</li>
        <li>Demand is about willingness and ability to purchase, not merely desire.</li>
        <li>The equilibrium price occurs where quantity demanded equals quantity supplied in the basic model.</li>
        <li>Equilibrium quantity is the quantity exchanged at equilibrium.</li>
        <li>The traditional supply curve slopes upward.</li>
        <li>The traditional demand curve slopes downward.</li>
        <li>A shortage occurs when quantity demanded exceeds quantity supplied at a particular price.</li>
        <li>A surplus occurs when quantity supplied exceeds quantity demanded at a particular price.</li>
        <li>Excess demand and shortage describe the same basic quantity imbalance: QD &gt; QS.</li>
        <li>Excess supply and surplus describe the same basic quantity imbalance: QS &gt; QD.</li>
        <li>Market clearing occurs when quantity supplied equals quantity demanded.</li>
        <li>Demand forecasting estimates future customer purchases.</li>
        <li>Supply forecasting estimates future availability or productive capacity.</li>
        <li>Businesses should compare demand forecasts with supply forecasts rather than planning either side independently.</li>
        <li>Consumer demand comes from individuals and households.</li>
        <li>Business demand comes from organizations purchasing for operations, production, resale, or other business purposes.</li>
        <li>Business demand can be derived from consumer demand.</li>
        <li>A change in a product's own price generally creates movement along a curve rather than shifting the entire curve.</li>
        <li>Changes in non-price determinants can shift demand or supply.</li>
        <li>Higher demand does not automatically mean a business should simply increase inventory; available cash, lead time, capacity, and profitability must also be considered.</li>
        <li>A shortage can represent a sales opportunity, but it can also create stockouts and customer dissatisfaction.</li>
        <li>A surplus can produce discounting and inventory pressure.</li>
        <li>Forecasting is never perfectly accurate; businesses should continuously compare forecasts with actual outcomes.</li>
        <li>Supply and demand are not static — they continuously change.</li>
        <li>A good purchasing system responds to demand without unnecessarily tying up cash in inventory.</li>
        <li>A good selling system recognizes demand signals while considering available supply and capacity.</li>
        <li>Price is one market signal, but it is not the only variable businesses should analyze.</li>
        <li>The practical goal of supply-and-demand management is to understand market conditions, anticipate imbalances, allocate resources effectively, and continuously adjust purchasing, production, pricing, and selling decisions.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Market Research → Measure Demand → Measure Supply → Forecast Demand → Forecast Supply →
        Compare QD and QS → Identify Shortage/Surplus Risk → Analyze Price Signals → Estimate
        Equilibrium → Plan Purchasing/Production → Manage Inventory → Sell → Measure Actual
        Demand → Measure Actual Supply → Compare Forecast vs Actual → Adjust → Repeat.
      </p>
    </LessonLayout>
  )
}
