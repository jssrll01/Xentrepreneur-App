import LessonLayout from '../components/LessonLayout'

export default function ScarcityAvailability() {
  return (
    <LessonLayout
      number="47"
      title="Scarcity & Availability"
      summary="10 scarcity and availability strategies that communicate real constraints honestly — inventory, capacity, deadlines, and access."
    >
      <h2>Scarcity & Availability</h2>
      <h3>Definition</h3>
      <p>
        Scarcity and availability are business strategies based on the reality
        that a product, service, opportunity, production capacity, time window,
        or access level may be limited.
      </p>
      <p>Scarcity answers: how much is available? Availability answers: when, where, and under what conditions is it available?</p>
      <p>Used properly, scarcity helps businesses communicate genuine constraints and helps customers make decisions. Used dishonestly, artificial scarcity can damage trust.</p>

      <h3>Basic model</h3>
      <p>Real constraint (quantity, time, capacity, geography, season, access) → clear availability information → customer decision → purchase/booking/pre-order.</p>

      <hr />

      <h2>1. Limited Inventory</h2>
      <h3>Definition</h3>
      <p>Limited inventory means only a finite quantity of a product is currently available for sale. Examples: only 20 units available, 12 units remaining, last 3 units. The limitation exists because the business has a finite amount of stock.</p>

      <h3>How it works</h3>
      <p>Inventory → customer demand → available quantity → plenty available, limited, or out of stock. The business communicates actual stock availability so customers understand whether waiting could affect their ability to purchase.</p>

      <h3>Example — Xmarket</h3>
      <p>Suppose an Xmarket seller has initial stock 50 units, sold 42, remaining 8. The product page can accurately display "8 units available." The inventory system should automatically update as orders are confirmed.</p>

      <h3>Implementation</h3>
      <p><strong>Ending Inventory = Beginning Inventory + Stock Received − Units Sold − Damaged/Lost Units</strong></p>
      <p>Example: 100 + 50 − 120 − 5 = 25. Ending inventory = 25 units.</p>

      <h3>Benefits</h3>
      <p>Communicates real availability, helps customers make purchasing decisions, reduces overselling, helps inventory planning, and can increase urgency when stock genuinely is low.</p>

      <h3>Risks</h3>
      <p>Stock information can become inaccurate, inventory synchronization problems can cause overselling, customers may become frustrated if "available" items aren't actually available, and repeated artificial low-stock messages can reduce credibility.</p>

      <hr />

      <h2>2. Limited Appointment Slots</h2>
      <h3>Definition</h3>
      <p>Limited appointment slots means a service provider has a finite number of appointments available during a particular period. Examples: 5 consultation slots available this week, 3 installation appointments remaining, 2 photography sessions available Saturday. Unlike physical inventory, the scarce resource is time and service capacity.</p>

      <h3>How it works</h3>
      <p>Service provider → available working hours → appointment capacity → bookings → remaining slots.</p>

      <h3>Example</h3>
      <p>A web developer has Monday 2 slots, Tuesday 3 slots, Wednesday 2 slots. Once the slots are booked, the calendar should show them as unavailable.</p>

      <h3>Appointment capacity formula</h3>
      <p><strong>Available Slots = Total Working Time ÷ Average Appointment Duration</strong>. If a business has 6 hours available and each consultation lasts 1 hour: 6 ÷ 1 = 6 slots. Breaks, preparation, administrative work, and unexpected delays should be accounted for in real operations.</p>

      <h3>Best practice</h3>
      <p>Say "3 consultation slots remaining this week" if three slots actually remain. Don't say "Only 3 slots!" if the business can simply create unlimited additional slots.</p>

      <hr />

      <h2>3. Limited Production Capacity</h2>
      <h3>Definition</h3>
      <p>Limited production capacity occurs when a business can only produce a certain quantity within a particular period because of constraints such as labor, equipment, materials, factory capacity, specialist skills, processing time, and quality-control requirements.</p>

      <h3>Example</h3>
      <p>A handmade product business can produce a maximum of 100 units/month. If 85 units are already committed: remaining capacity = 15 units. The business can communicate "15 production slots remain for this month's batch."</p>

      <h3>Capacity model</h3>
      <p>Resources (workers, equipment, materials, time) → production capacity → orders → remaining capacity.</p>

      <h3>Capacity utilization</h3>
      <p><strong>Capacity Utilization = Actual Production ÷ Maximum Practical Capacity × 100</strong>. Example: actual production 800 units, practical capacity 1,000 units. 800 ÷ 1000 × 100 = 80%. Capacity utilization = 80%.</p>

      <h3>Why it matters</h3>
      <p>Production scarcity can be completely legitimate. For example: "We accept only 10 custom website projects per month because each project receives dedicated development and testing." This communicates a genuine operational constraint.</p>

      <hr />

      <h2>4. Limited-Edition Product</h2>
      <h3>Definition</h3>
      <p>A limited-edition product is intentionally produced, offered, or released in a restricted quantity or special version. Examples: numbered products, special colorways, anniversary editions, seasonal designs, collaboration editions, special packaging, collector versions.</p>
      <p>Structure: standard product → regular availability → limited edition → special design, special packaging, limited quantity, and defined release.</p>

      <h3>Example</h3>
      <p>A business releases Xmarket Creator Edition. Production quantity: 500 units. Numbered: 001–500. Once the 500-unit production run is complete, the business can clearly state whether the edition will or will not be reproduced.</p>

      <h3>Important distinction</h3>
      <p>A product isn't genuinely limited merely because the business displays "Limited!" There should be a real limitation: quantity, production run, time, design, or availability period.</p>

      <h3>Benefits</h3>
      <p>Creates differentiation, gives a product a special identity, supports launch campaigns, can attract collectors, and creates a clear release event.</p>

      <hr />

      <h2>5. Early-Access Availability</h2>
      <h3>Definition</h3>
      <p>Early access allows selected customers to access a product, feature, service, event, or release before general availability. Examples: beta access, founder's access, VIP early access, members-only early access, pre-launch access.</p>

      <h3>How it works</h3>
      <p>Development → early-access group → testing/feedback → improvements → general release.</p>

      <h3>Example — software</h3>
      <p>A company develops a new analytics dashboard. September 1 early access → 100 users. September 15 feedback + fixes. October 1 general availability. Early access can therefore serve both a marketing and product-development purpose.</p>

      <h3>Early access vs pre-order</h3>
      <p><strong>Early access:</strong> customer may use/access earlier; often software/digital; can involve beta testing; feedback can be important.</p>
      <p><strong>Pre-order:</strong> customer reserves future product; often physical products; usually purchase commitment; demand forecasting is important.</p>
      <p>They can also be combined.</p>

      <hr />

      <h2>6. Genuine Deadline</h2>
      <h3>Definition</h3>
      <p>A genuine deadline is a real date or time after which an offer, opportunity, price, registration period, or availability condition changes. Examples: registration closes Friday, early-bird pricing ends September 30, applications close October 10, pre-orders close Sunday, seasonal service ends November 30.</p>

      <h3>Deadline structure</h3>
      <p>Offer available → deadline announced → reminder → deadline reached → offer closes/changes.</p>

      <h3>Example</h3>
      <p>A conference offers early-bird registration ₱2,000, deadline September 30. After September 30: regular registration ₱2,500. The deadline is meaningful because the offer actually changes.</p>

      <h3>Countdown timers</h3>
      <p>A website can show early-bird registration ends September 30, 2026 at 11:59 PM with a countdown. The timer should stop or update correctly when the deadline passes.</p>

      <h3>False deadline</h3>
      <p>Poor practice: "Sale ends tonight!" Then tomorrow: "Sale ends tonight!" Repeatedly. This can damage credibility because customers learn that the deadline isn't real.</p>

      <hr />

      <h2>7. Seasonal Availability</h2>
      <h3>Definition</h3>
      <p>Seasonal availability means a product or service is naturally available only during a particular season, period, event, or recurring time window. Examples: Christmas products, Valentine's products, graduation services, summer products, back-to-school products, holiday gift packages, seasonal food, event-specific services.</p>
      <p>Seasonal cycle: planning → pre-season → launch → peak demand → season ends → inventory clearance → post-season analysis → next season.</p>

      <h3>Example</h3>
      <p>A business sells Christmas Gift Bundle available November 1 → December 24. The seasonal availability is naturally connected to the customer's buying occasion.</p>

      <h3>Benefits</h3>
      <p>Matches demand cycles, creates timely offers, helps inventory planning, creates recurring campaigns, and makes product launches predictable.</p>

      <hr />

      <h2>8. Pre-Order Window</h2>
      <h3>Definition</h3>
      <p>A pre-order window is a defined period during which customers can reserve or purchase a product before its normal release or delivery. Example: pre-orders September 1–15, production September 16–30, shipping October 1.</p>

      <h3>How it works</h3>
      <p>Product concept → pre-order announced → pre-order window → customer orders → demand measured → production → fulfillment.</p>

      <h3>Why businesses use pre-orders</h3>
      <p><strong>Demand validation:</strong> the business can estimate interest before committing to a large production run. <strong>Cash flow:</strong> depending on the business model and applicable laws/terms, customer payments may help finance production. <strong>Forecasting:</strong> pre-orders provide information about expected demand. <strong>Marketing:</strong> the pre-order period creates a defined launch event.</p>

      <h3>Pre-order metrics</h3>
      <p><strong>Preorder Rate = Preorders ÷ Interested/Eligible Customers × 100</strong></p>
      <p><strong>Total Preorders = Σ Units Ordered</strong></p>
      <p><strong>Forecast Error = Actual Demand − Forecast Demand</strong>. A more standardized version is often expressed as percentage error.</p>

      <h3>Important customer information</h3>
      <p>A pre-order should clearly state expected delivery date, payment conditions, cancellation terms, refund terms, product specifications, possible delays, shipping arrangements, and what happens if production is cancelled.</p>

      <hr />

      <h2>9. Event Capacity</h2>
      <h3>Definition</h3>
      <p>Event capacity is the maximum number of people an event can safely and practically accommodate. Examples: concert, workshop, seminar, conference, webinar with limited interaction capacity, training session, product launch, restaurant event.</p>
      <p>Capacity structure: venue/system → maximum capacity → registered attendees → remaining spaces. Example: venue capacity 200, registered 173, remaining 27. The organizer can accurately communicate "27 registration spaces remain."</p>

      <h3>Why capacity matters</h3>
      <p>Capacity may be constrained by venue size, fire/safety requirements, staff, equipment, seating, catering, parking, security, and interaction quality.</p>

      <h3>Event capacity utilization</h3>
      <p><strong>Event Capacity Utilization = Registered Attendees ÷ Available Capacity × 100</strong>. Example: 173 ÷ 200 × 100 = 86.5%.</p>

      <hr />

      <h2>10. Geographic Availability</h2>
      <h3>Definition</h3>
      <p>Geographic availability means a product or service is available only in specific geographic areas. Examples: delivery limited to selected cities, local installation service, region-specific products, country-specific subscriptions, local events, location-based services.</p>

      <h3>How it works</h3>
      <p>Customer location → availability check → available (purchase) or unavailable (alternative).</p>

      <h3>Example — Xmarket</h3>
      <p>Suppose a seller offers same-day delivery only within selected service areas. The checkout system can check: customer location → delivery zone → available? → yes (same-day delivery), no (standard shipping/unavailable).</p>

      <h3>Geographic availability types</h3>
      <p><strong>Delivery area</strong> — metro area only. <strong>Service area</strong> — installation within selected cities. <strong>Market availability</strong> — product available only in certain countries. <strong>Store availability</strong> — available only at selected branches. <strong>Event availability</strong> — local event limited to a specific venue.</p>

      <hr />

      <h2>Scarcity vs Availability</h2>
      <p><strong>Scarcity</strong> focuses on limitation. "Only 20 units." "5 appointments left." "Limited edition." "Pre-orders close Friday."</p>
      <p><strong>Availability</strong> focuses on access. "Available online." "Appointments available Monday–Friday." "Available in selected regions." "Available for pre-order."</p>
      <p>Scarcity tells customers what is limited. Availability tells customers where, when, and under what conditions they can access it.</p>

      <hr />

      <h2>Types of Scarcity</h2>
      <p>Scarcity branches into quantity (limited inventory), capacity (appointment slots, production capacity, event capacity), time (genuine deadline, seasonal availability, pre-order window), product (limited edition), access (early access), and geography (geographic availability).</p>

      <hr />

      <h2>Genuine Scarcity vs Artificial Scarcity</h2>
      <p><strong>Genuine scarcity:</strong> a real limitation exists. 50 units produced → 42 sold → 8 remaining. That's genuine inventory scarcity.</p>
      <p><strong>Artificial scarcity:</strong> a business creates the appearance of scarcity without a corresponding real limitation. Example: "Only 2 left!" when the business actually has hundreds of units available. This can mislead customers.</p>

      <hr />

      <h2>Scarcity and Customer Trust</h2>
      <p>Scarcity works best when combined with transparency. <strong>Real limitation + accurate information + clear deadline + honest communication = credible urgency.</strong> Whereas: <strong>false limitation + fake countdown + misleading claim = loss of trust.</strong> This connects directly with the previous Trust & Credibility framework.</p>

      <hr />

      <h2>Scarcity + Transparency</h2>
      <p>A good product page might say: <strong>Limited inventory</strong> "12 units available." <strong>Genuine deadline</strong> "Pre-orders close September 30, 2026 at 11:59 PM." <strong>Seasonal</strong> "Available during the holiday season." <strong>Geographic</strong> "Same-day delivery available within selected service areas." <strong>Appointment</strong> "4 consultation slots remaining this week." These statements communicate concrete information instead of simply saying "HURRY!!!"</p>

      <hr />

      <h2>Scarcity in E-Commerce</h2>
      <p>For Xmarket or another marketplace: product page (price, stock quantity, delivery availability, seller location, estimated delivery, limited-edition status, promotion deadline) → customer decision. A marketplace system can use inventory data to automatically update availability. Example: stock 25 → customer buys 1 → stock 24 → customer buys 10 → stock 14 → display "14 available."</p>

      <hr />

      <h2>Scarcity in Service Businesses</h2>
      <p>A service business often has capacity scarcity rather than inventory scarcity. Example: web developer monthly project capacity 8, confirmed projects 6, available 2. The business can honestly communicate "Two project openings remain for this month." The limitation comes from actual development capacity.</p>

      <hr />

      <h2>Scarcity in Software</h2>
      <p>Software businesses can use: early access (first 500 users), beta window (beta access September 20–October 15), limited feature availability (a feature might initially be available to a defined beta group before wider release), and promotional deadline (launch pricing available until October 1). The important point is that the limitation must be genuine and clearly explained.</p>

      <hr />

      <h2>Scarcity Metrics</h2>
      <p><strong>Sell-through = Units Sold ÷ (Beginning Inventory + Units Received) × 100</strong>. Example: beginning inventory 100, received 50, sold 120. 120 ÷ 150 × 100 = 80%.</p>
      <p><strong>Stockout Rate = Products Experiencing Stockout ÷ Products Tracked × 100</strong>. A high stockout rate can indicate insufficient inventory planning.</p>
      <p><strong>Capacity Utilization = Actual Usage ÷ Available Capacity × 100</strong></p>
      <p><strong>Booking Rate = Booked Slots ÷ Available Slots × 100</strong></p>
      <p><strong>Preorder Conversion = Preorders ÷ Qualified Visitors × 100</strong></p>
      <p><strong>Deadline Conversion = Purchases During Deadline Window ÷ Eligible Visitors × 100</strong>. This should be compared with other periods rather than interpreted in isolation.</p>

      <hr />

      <h2>Scarcity Dashboard</h2>
      <ul>
        <li>Units remaining — inventory availability</li>
        <li>Sell-through rate — speed of inventory movement</li>
        <li>Stockout rate — availability problems</li>
        <li>Appointment utilization — service capacity</li>
        <li>Production utilization — manufacturing capacity</li>
        <li>Event registration — capacity demand</li>
        <li>Pre-order quantity — launch demand</li>
        <li>Deadline conversion — time-limited campaign behavior</li>
        <li>Geographic availability rate — service coverage</li>
        <li>Cancellation rate — demand quality</li>
        <li>Refund rate — customer outcome</li>
        <li>Waitlist size — unfulfilled demand</li>
        <li>Backorder volume — demand exceeding inventory</li>
        <li>Customer complaints — availability communication quality</li>
      </ul>

      <hr />

      <h2>Waitlists</h2>
      <p>When a scarce product or service becomes unavailable, a waitlist can preserve customer demand. Product unavailable → join waitlist → customer notified → inventory returns → customer gets opportunity.</p>
      <p>For services: no appointment → waitlist → cancellation occurs → next customer notified. This converts unavailable demand into a structured future opportunity.</p>

      <hr />

      <h2>Scarcity + Pre-Order + Capacity</h2>
      <p>These strategies can work together. Imagine a limited product launch: product development → production capacity 1,000 → pre-order window opens → customer orders → pre-orders reach 1,000 → pre-order closes → production → fulfillment → limited edition sold out. The scarcity comes from the actual production limit.</p>

      <hr />

      <h2>Scarcity + Early Access</h2>
      <p>Another structure: product ready → early access → 500 users → feedback → improvements → general release. This creates controlled access while allowing the business to test the product.</p>

      <hr />

      <h2>Scarcity + Seasonal Availability</h2>
      <p>Example: October → prepare Christmas products → November → launch → December → peak demand → December 24 → season ends. This is especially useful when demand is naturally tied to a calendar event.</p>

      <hr />

      <h2>Scarcity Decision Framework</h2>
      <p>Before using a scarcity message, ask: is there a real limitation? Yes/No. What causes it? Quantity, time, or capacity. Stock, deadline, slots. Can customers understand it? Is the information accurate? Will the limitation actually apply? Communicate clearly.</p>
      <p>If there is no genuine limitation, it should not be represented as one.</p>

      <hr />

      <h2>Scarcity and Pricing</h2>
      <p>Scarcity can affect pricing strategy, but the two should remain conceptually separate. For example: limited edition + premium features + special packaging = higher price. But "Only 3 left!" ≠ automatic justification for any price. Price still needs to be supported by customer value, costs, market conditions, and business strategy.</p>

      <hr />

      <h2>Common Mistakes</h2>
      <p><strong>1. Fake stock counts.</strong> Displaying "Only 2 left" when inventory isn't actually limited.</p>
      <p><strong>2. Fake deadlines.</strong> Repeatedly extending an "ending today" promotion.</p>
      <p><strong>3. Permanent limited editions.</strong> Calling a product "limited edition" while continuously producing the same supposedly limited version can undermine the meaning of the claim.</p>
      <p><strong>4. Unlimited appointment capacity.</strong> Saying "Only 1 slot left!" while the business can easily add another 20 appointments.</p>
      <p><strong>5. Creating panic.</strong> Scarcity communication should provide useful information rather than unnecessarily pressuring customers.</p>
      <p><strong>6. Hiding important conditions.</strong> For example: "Early access!" without explaining that access is limited to a specific feature or beta version.</p>
      <p><strong>7. Poor inventory synchronization.</strong> A product may show 10 available while another sales channel has already sold the remaining units. A centralized inventory system can reduce this problem.</p>

      <hr />

      <h2>Complete Scarcity & Availability System</h2>
      <pre>{`CUSTOMER DEMAND
                           │
                           ▼
                  IDENTIFY CONSTRAINT
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
     Quantity            Time              Capacity
        │                  │                  │
     Inventory          Deadline          Appointments
     Limited Edition    Seasonal          Production
                        Pre-order          Event
                           │
                           ▼
                      Access Type
                           │
                 ┌─────────┴─────────┐
                 ▼                   ▼
             Early Access       Geographic
                                    │
                                    ▼
                               Availability
                           │
                           ▼
                   COMMUNICATE CLEARLY
                           │
                           ▼
                    CUSTOMER DECISION
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
           Buy          Pre-order     Waitlist
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                       Fulfillment
                           │
                           ▼
                        Measure
                           │
                           ▼
                      Optimize`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Scarcity should be genuine.</li>
        <li>Availability information should be accurate.</li>
        <li>State what is actually limited.</li>
        <li>Distinguish quantity scarcity from time scarcity.</li>
        <li>Distinguish inventory from capacity.</li>
        <li>Use real deadlines rather than artificial countdowns.</li>
        <li>Limited editions should have a meaningful limitation.</li>
        <li>Early access should clearly define who receives access and when.</li>
        <li>Seasonal availability should correspond to a real seasonal cycle.</li>
        <li>Pre-orders should clearly communicate expected fulfillment.</li>
        <li>Event capacity should reflect actual operational limits.</li>
        <li>Geographic restrictions should be clearly displayed before checkout.</li>
        <li>Synchronize availability across sales channels.</li>
        <li>Use waitlists when demand exceeds current availability.</li>
        <li>Track capacity before promising availability.</li>
        <li>Don't use scarcity to hide poor planning.</li>
        <li>Don't manufacture urgency through false information.</li>
        <li>Don't make customers feel tricked by changing deadlines.</li>
        <li>Give customers enough information to make an informed decision.</li>
        <li>Treat scarcity communication as part of trust and credibility.</li>
        <li>Measure both demand and the operational cost of fulfilling it.</li>
        <li>When scarcity ends, update the customer-facing information immediately.</li>
      </ol>

      <h3>The scarcity & availability formula</h3>
      <p><strong>Real Constraint + Accurate Inventory/Capacity Data + Clear Time or Location Information + Transparent Communication + Reliable Fulfillment + Appropriate Customer Experience = Credible Scarcity & Availability</strong></p>
      <p>The central principle is simple: use scarcity to communicate reality, not to manufacture pressure. When a product genuinely has limited stock, a service genuinely has limited capacity, an offer genuinely expires, or availability genuinely varies by time or location, communicating that information clearly can help customers make timely decisions while simultaneously improving planning and operational control.</p>
    </LessonLayout>
  )
}
