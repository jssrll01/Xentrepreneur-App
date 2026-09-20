import LessonLayout from '../components/LessonLayout'

export default function GeographicBusinessPart5() {
  return (
    <LessonLayout
      number="93"
      title="Geographic Business Strategies — Part 5"
      summary="12 operations systems — delivery zones, warehouse and store locations, competitor and foot-traffic analysis, demand density, logistics and route optimization, distribution and supplier placement."
    >
      <h2>Geographic Business Strategies — Part 5</h2>

      <h2>1. Delivery-Zone Optimization</h2>
      <h3>Definition</h3>
      <p>Delivery-zone optimization is the process of designing delivery areas so a business can serve customers efficiently while balancing delivery speed, cost, coverage, and customer demand.</p>
      <p>Instead of simply delivering everywhere, a business divides its service area into practical zones based on customer concentration, delivery distance, travel time, order volume, delivery cost, vehicle capacity, traffic conditions, delivery promises, geographic barriers, and warehouse or store location.</p>

      <h3>How to Implement</h3>
      <ol>
        <li>Map existing customers.</li>
        <li>Record delivery addresses.</li>
        <li>Calculate delivery distance and time.</li>
        <li>Identify high-demand areas.</li>
        <li>Divide the market into zones.</li>
        <li>Calculate the cost of serving each zone.</li>
        <li>Set delivery rules or fees.</li>
        <li>Establish delivery-time expectations.</li>
        <li>Monitor failed, delayed, and expensive deliveries.</li>
        <li>Adjust zones as demand changes.</li>
      </ol>

      <h3>Example</h3>
      <p>An Xmarket seller receives 100 orders from Zone A, 40 from Zone B, and 8 from Zone C. If Zone C requires long-distance delivery with very few orders, the business could use higher delivery fees, scheduled delivery days, minimum order requirements, third-party delivery, or pickup options rather than maintaining the same delivery model everywhere.</p>

      <h3>Important Metrics</h3>
      <p><strong>Delivery Cost/Order = Total Delivery Cost ÷ Number of Delivered Orders</strong></p>
      <p>Also track average delivery time, on-time delivery rate, orders per zone, revenue per zone, failed delivery rate, distance per order, delivery contribution margin.</p>

      <hr />

      <h2>2. Warehouse Location Strategy</h2>
      <h3>Definition</h3>
      <p>Warehouse location strategy determines where inventory should be stored to minimize total fulfillment costs while maintaining acceptable delivery speed and inventory availability.</p>
      <p>The decision involves balancing rent, labor, transportation, inventory costs, delivery speed, and infrastructure.</p>

      <h3>Location Evaluation Factors</h3>
      <ul>
        <li>Rent — is the facility affordable?</li>
        <li>Customers — how close is demand?</li>
        <li>Suppliers — how easily can inventory arrive?</li>
        <li>Roads — is transportation convenient?</li>
        <li>Labor — are workers available?</li>
        <li>Capacity — can the warehouse support growth?</li>
        <li>Reliability — are utilities and infrastructure reliable?</li>
        <li>Taxes/fees — what additional costs exist?</li>
        <li>Expansion — can the facility grow with the business?</li>
      </ul>

      <h3>Example</h3>
      <p>An online business with customers concentrated in three regions could compare: Warehouse A (low rent, high delivery cost, long customer distance), Warehouse B (medium rent, medium delivery cost, central location), Warehouse C (high rent, low delivery cost, excellent customer access). The correct decision depends on total operating economics, not rent alone.</p>

      <h3>Important Principle</h3>
      <p>Optimize total logistics cost, not just facility cost.</p>

      <hr />

      <h2>3. Store Location Analysis</h2>
      <h3>Definition</h3>
      <p>Store location analysis evaluates potential physical locations based on their ability to attract customers and generate sustainable profit.</p>

      <h3>Key Factors</h3>
      <p>Population, population density, income, foot traffic, vehicle traffic, parking, accessibility, nearby businesses, competitors, complementary businesses, rent, visibility, safety, public transportation, customer demographics, local demand.</p>

      <h3>Store Location Scorecard</h3>
      <p>A business could assign weights: customer demand 25%, accessibility 15%, foot traffic 15%, rent 15%, competition 10%, population 10%, parking/transport 5%, growth potential 5%.</p>

      <h3>Example</h3>
      <p>A ₱30,000/month location with strong customer traffic may produce more profit than a ₱15,000/month location that receives very few potential customers.</p>
      <p><strong>Location Profitability = Expected Revenue − Location-Related Costs</strong></p>

      <hr />

      <h2>4. Competitor-Location Analysis</h2>
      <h3>Definition</h3>
      <p>Competitor-location analysis studies where competitors operate and what those locations reveal about customer demand, market concentration, accessibility, and competitive intensity.</p>

      <h3>What to Analyze</h3>
      <p>Number of competitors, competitor density, competitor size, store locations, customer reviews, pricing, product assortment, opening hours, parking/accessibility, nearby complementary businesses, market gaps.</p>

      <h3>Two Important Interpretations</h3>
      <p>A large number of competitors may indicate high demand — but it can also indicate market saturation.</p>
      <p>Conversely, few competitors may indicate a possible market gap — or weak demand or a difficult location. Competitor absence requires investigation rather than assuming opportunity.</p>

      <hr />

      <h2>5. Foot-Traffic Analysis</h2>
      <h3>Definition</h3>
      <p>Foot-traffic analysis measures how many people pass through or near a physical location and examines when and why that traffic occurs.</p>
      <p>This is particularly useful for retail stores, restaurants, cafés, service businesses, pop-up stores, and shopping centers.</p>

      <h3>Important Variables</h3>
      <p>Pedestrian volume, time of day, day of week, weekday/weekend differences, seasonal patterns, direction of movement, customer demographics, conversion rate.</p>

      <h3>Basic Formula</h3>
      <p><strong>Foot-Traffic Conversion Rate = (Customers ÷ Relevant Visitors) × 100</strong></p>
      <p>For example, if 1,000 people pass a store, 50 enter, and 10 purchase: entry rate = 5%, purchase conversion = 20%.</p>

      <h3>Important Principle</h3>
      <p>High traffic does not guarantee high sales. The traffic must be relevant to the business.</p>

      <hr />

      <h2>6. Population-Density Analysis</h2>
      <h3>Definition</h3>
      <p>Population-density analysis evaluates how many people live within a particular geographic area.</p>
      <p><strong>Population Density = Population ÷ Land Area</strong></p>

      <h3>Why It Matters</h3>
      <p>High population density can create opportunities for businesses that depend on nearby customers: convenience stores, food delivery, laundry services, pharmacies, restaurants, mobile services, grocery stores, local marketplaces.</p>
      <p>However, population alone isn't sufficient. A business should combine population + income + demand + competition + accessibility.</p>

      <hr />

      <h2>7. Income-Area Analysis</h2>
      <h3>Definition</h3>
      <p>Income-area analysis studies the income characteristics of geographic areas to understand purchasing capacity and potential price sensitivity.</p>
      <p>It can help businesses determine product positioning, pricing, store format, product assortment, payment options, promotional strategy, and service levels.</p>

      <h3>Useful Combination</h3>
      <p><strong>Market Potential ≈ Population × Relevant Customer Rate × Expected Spending</strong></p>

      <h3>Important Note</h3>
      <p>Geographic income data is a market-level indicator, not a prediction about every customer.</p>

      <hr />

      <h2>8. Demand-Density Analysis</h2>
      <h3>Definition</h3>
      <p>Demand-density analysis identifies geographic areas where customer demand is concentrated. Unlike population density, demand density focuses on actual or estimated demand for a specific product or service.</p>

      <h3>Implementation</h3>
      <ol>
        <li>Collect customer orders.</li>
        <li>Map customer locations.</li>
        <li>Calculate orders per area.</li>
        <li>Calculate revenue per area.</li>
        <li>Identify high-demand clusters.</li>
        <li>Compare demand with competition.</li>
        <li>Adjust inventory or service coverage.</li>
        <li>Optimize delivery or sales territories.</li>
      </ol>

      <h3>Demand Density Measurement</h3>
      <p><strong>Demand Density = Orders or Demand Units ÷ Geographic Area</strong></p>

      <hr />

      <h2>9. Logistics Optimization</h2>
      <h3>Definition</h3>
      <p>Logistics optimization is the process of improving the movement and storage of goods from suppliers to businesses and ultimately to customers. It seeks to balance cost, speed, reliability, capacity, inventory, transportation, and service level.</p>

      <h3>Logistics System</h3>
      <pre>{`Supplier
   ↓
Inbound Transportation
   ↓
Warehouse
   ↓
Inventory
   ↓
Distribution
   ↓
Delivery
   ↓
Customer`}</pre>

      <h3>Areas to Optimize</h3>
      <ul>
        <li>Inbound logistics — supplier → warehouse</li>
        <li>Internal logistics — warehouse → storage/picking/packing</li>
        <li>Outbound logistics — warehouse → customer</li>
        <li>Reverse logistics — customer → business (returns, exchanges, repairs, replacements)</li>
      </ul>

      <h3>Key Metrics</h3>
      <p>Cost per shipment, on-time delivery, order accuracy, transportation utilization, warehouse utilization, inventory turnover, fulfillment time, return rate, damage rate.</p>

      <h3>Important Principle</h3>
      <p>The cheapest individual logistics step may not create the cheapest overall logistics system.</p>

      <hr />

      <h2>10. Route Optimization</h2>
      <h3>Definition</h3>
      <p>Route optimization determines efficient travel routes for deliveries, service calls, pickups, or transportation.</p>

      <h3>Basic Objective</h3>
      <p>Minimize total distance + travel time + transportation cost while satisfying constraints.</p>

      <h3>Common Constraints</h3>
      <p>Vehicle capacity, delivery time windows, driver availability, road restrictions, customer priority, delivery deadlines, traffic, pickup requirements.</p>

      <h3>Route Optimization for Small Businesses</h3>
      <ol>
        <li>Group orders geographically.</li>
        <li>Schedule nearby deliveries together.</li>
        <li>Set delivery windows.</li>
        <li>Avoid unnecessary return trips.</li>
        <li>Track actual travel time.</li>
        <li>Compare planned vs actual routes.</li>
      </ol>

      <h3>Metrics</h3>
      <p><strong>Cost per Delivery = Total Route Cost ÷ Deliveries</strong></p>
      <p>Also track km per delivery, deliveries per trip, time per delivery, fuel cost, on-time rate, vehicle utilization.</p>

      <hr />

      <h2>11. Distribution-Center Placement</h2>
      <h3>Definition</h3>
      <p>Distribution-center placement determines where one or more facilities should be positioned to efficiently distribute products across a target market. A distribution center sits between inventory sources and customer markets.</p>

      <h3>Factors</h3>
      <ul>
        <li>Customer density — high importance</li>
        <li>Demand concentration — high</li>
        <li>Transportation access — high</li>
        <li>Supplier access — high</li>
        <li>Facility cost — high</li>
        <li>Labor availability — medium/high</li>
        <li>Expansion capacity — medium</li>
        <li>Infrastructure — high</li>
        <li>Risk exposure — high</li>
      </ul>

      <h3>Single vs Multiple Centers</h3>
      <p><strong>Single distribution center</strong> — advantages: simpler inventory management, lower facility complexity, easier centralized control. Challenges: longer distances to some markets, greater dependence on one facility.</p>
      <p><strong>Multiple distribution centers</strong> — advantages: faster regional fulfillment, reduced distance, geographic redundancy. Challenges: higher facility costs, more complicated inventory allocation, more complex management.</p>

      <h3>Key Principle</h3>
      <p>Add distribution centers when the service and transportation benefits justify the additional operating complexity and cost.</p>

      <hr />

      <h2>12. Supplier-Location Strategy</h2>
      <h3>Definition</h3>
      <p>Supplier-location strategy determines how a business selects and manages supplier locations to balance purchase cost, transportation, lead time, reliability, quality, and risk. The cheapest supplier isn't necessarily the cheapest supplier after logistics are included.</p>

      <h3>Total Landed Cost</h3>
      <p><strong>Landed Cost = Purchase Price + Transportation + Duties/Taxes + Handling + Insurance + Other Import/Logistics Costs</strong></p>

      <h3>Supplier-Location Strategies</h3>
      <p><strong>Local sourcing</strong> — buy primarily from nearby suppliers. Useful when speed matters, products are bulky, inventory needs frequent replenishment, or transportation costs are significant.</p>
      <p><strong>Regional sourcing</strong> — use suppliers within a broader geographic region. Useful when balancing price, capacity, delivery speed, and supplier diversification.</p>
      <p><strong>International sourcing</strong> — source from suppliers in other countries. Potential advantages include lower manufacturing costs, greater supplier availability, and specialized production capabilities. Potential challenges include longer lead times, customs, currency exposure, international shipping, import requirements, and greater disruption risk.</p>
      <p><strong>Multi-location sourcing</strong> — use suppliers from multiple geographic areas to reduce dependence on one geographic source.</p>

      <hr />

      <h2>Geographic Decision Framework</h2>
      <p><strong>Layer 1 — People.</strong> Who is located there? Population, demographics, income, businesses, households.</p>
      <p><strong>Layer 2 — Demand.</strong> Do they actually need the product? Search demand, orders, sales, service requests, purchase frequency.</p>
      <p><strong>Layer 3 — Competition.</strong> Who already serves the market? Competitor locations, competitor density, pricing, market gaps, customer complaints.</p>
      <p><strong>Layer 4 — Accessibility.</strong> Can customers, employees, suppliers, and delivery vehicles reach the location efficiently? Roads, transit, parking, traffic, delivery routes, supplier proximity.</p>
      <p><strong>Layer 5 — Economics.</strong> Can the location make money?</p>
      <p><strong>Geographic Profit = Revenue − Facility Costs − Labor − Inventory − Transportation − Delivery − Other Operating Costs</strong></p>

      <hr />

      <h2>Geographic Operations Dashboard</h2>
      <ul>
        <li>Demand — orders by area, revenue by area</li>
        <li>Population — population density</li>
        <li>Customers — customers per km²</li>
        <li>Foot traffic — visitors per hour, entry rate</li>
        <li>Competition — competitors per km²</li>
        <li>Delivery — cost per order, delivery time</li>
        <li>Routes — km per order, deliveries per trip</li>
        <li>Warehouse — cost per order, utilization</li>
        <li>Distribution — regional delivery time</li>
        <li>Suppliers — lead time, landed cost</li>
        <li>Stores — sales per m², conversion rate</li>
        <li>Profitability — contribution margin by location</li>
      </ul>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Delivery zones should be based on economics, density, and service capability — not distance alone.</li>
        <li>Warehouse location should optimize total logistics cost, not rent alone.</li>
        <li>Store location should be evaluated on revenue potential minus location costs.</li>
        <li>Competitor presence can indicate demand or saturation — investigate rather than assume.</li>
        <li>Foot traffic is valuable only when it consists of relevant potential customers.</li>
        <li>Population alone is not demand — combine with income, need, and competition.</li>
        <li>Demand density matters more than population density for most businesses.</li>
        <li>The cheapest individual logistics step may not create the cheapest overall system.</li>
        <li>Route efficiency is a core competitive advantage for local and regional fulfillment.</li>
        <li>Distribution centers should be added only when the service and cost benefits justify the complexity.</li>
        <li>Supplier location should be evaluated by total landed cost, not purchase price alone.</li>
        <li>A geographic strategy should optimize the entire network — not merely choose the cheapest or busiest location.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Analyze Population → Analyze Income → Measure Demand Density → Study Foot Traffic → Map
        Competitors → Evaluate Locations → Select Store/Warehouse/Distribution Locations → Design
        Supplier Network → Optimize Logistics → Create Delivery Zones → Optimize Routes → Measure
        Geographic Economics → Improve Operations → Expand Where the Economics Support
        Expansion.
      </p>
    </LessonLayout>
  )
}
