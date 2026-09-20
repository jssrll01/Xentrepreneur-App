import LessonLayout from '../components/LessonLayout'

export default function OperationsManagement() {
  return (
    <LessonLayout
      number="17"
      title="Operations Management"
      summary="10 core systems to run operations reliably — inventory, suppliers, quality, capacity, forecasting, and service levels."
    >
      <p>
        Operations is the system through which a business turns resources into
        products, services, and customer experiences. It includes everything
        required to make the business function reliably.
      </p>
      <pre>{`Suppliers
    ↓
Materials / Information / Resources
    ↓
Operations
    ↓
Processes
    ↓
Products / Services
    ↓
Customers
    ↓
Feedback
    ↓
Improvement`}</pre>
      <p>A strong operations system aims to achieve several things simultaneously:</p>
      <ul>
        <li>Right product or service</li>
        <li>Right quantity</li>
        <li>Right quality</li>
        <li>Right time</li>
        <li>Right cost</li>
        <li>Right customer experience</li>
      </ul>

      <h3>The ten core operations concepts</h3>
      <ol>
        <li>Inventory Management</li>
        <li>Supplier Evaluation</li>
        <li>Quality Assurance</li>
        <li>Quality Control</li>
        <li>Process Mapping</li>
        <li>Bottleneck Analysis</li>
        <li>Capacity Planning</li>
        <li>Demand Forecasting</li>
        <li>Workflow Automation</li>
        <li>Service-Level Management</li>
      </ol>

      <hr />

      <h2>1. Inventory Management</h2>
      <h3>Definition</h3>
      <p>Inventory management is the process of planning, purchasing, storing, tracking, and replenishing products, materials, or supplies so that a business has enough inventory to meet demand without holding excessive stock.</p>
      <p>Inventory can include raw materials, components, finished products, packaging, spare parts, supplies, and work-in-progress.</p>

      <h3>The inventory problem</h3>
      <p><strong>Too little inventory:</strong> low inventory → stockout → orders cannot be fulfilled → lost sales → customer dissatisfaction.</p>
      <p><strong>Too much inventory:</strong> excess inventory → capital tied up → storage costs → obsolescence/damage → discounting → lower profitability.</p>
      <p>The objective is not "keep as much inventory as possible." It is: maintain an appropriate inventory level for expected demand and required service levels.</p>

      <h3>Key inventory concepts</h3>
      <p><strong>Stock level</strong> — the quantity currently available.</p>
      <p><strong>Stockout</strong> — when available inventory reaches zero or insufficient quantity to fulfill demand.</p>
      <p><strong>Reorder point</strong> — the inventory level at which a new order should be placed.</p>
      <p><strong>Reorder Point = Average Demand During Lead Time + Safety Stock</strong></p>
      <p>Example: a product sells 10 units per day. Supplier lead time = 5 days. Safety stock = 20 units. Reorder point = (10 × 5) + 20 = 70 units. When inventory reaches approximately 70 units, replenishment should be considered.</p>

      <h3>Safety stock</h3>
      <p>Safety stock is extra inventory held to protect against uncertainty. Uncertainty can come from unexpected demand, supplier delays, transportation problems, forecast errors, and seasonal fluctuations.</p>

      <h3>Economic Order Quantity</h3>
      <p>EOQ attempts to determine an order quantity that balances ordering costs and holding costs.</p>
      <p><strong>EOQ = √(2DS ÷ H)</strong></p>
      <p>Where D = annual demand, S = ordering cost per order, H = annual holding cost per unit. The model has assumptions and is not appropriate for every business, especially when prices, demand, lead times, or supply conditions change significantly.</p>

      <h3>Inventory turnover</h3>
      <p><strong>Inventory Turnover = Cost of Goods Sold ÷ Average Inventory</strong></p>
      <p>Higher turnover can indicate efficient movement of inventory, but an extremely high turnover can also indicate insufficient stock.</p>

      <h3>Inventory accuracy</h3>
      <p><strong>Inventory Accuracy = Correct Inventory Records ÷ Inventory Records Checked × 100</strong></p>
      <p>Example: 1,000 records checked; 960 accurate; accuracy = 960 ÷ 1,000 × 100 = 96%.</p>

      <h3>Inventory management methods</h3>
      <p><strong>FIFO (First In, First Out)</strong> — older inventory is used or sold first. Useful when products can expire or become obsolete.</p>
      <p><strong>ABC Analysis</strong> — inventory is classified according to importance/value. A = high-value/high-priority; B = medium-value; C = lower-value/high-volume. A-items generally receive tighter monitoring.</p>
      <p><strong>Just-in-Time</strong> — inventory arrives close to when it is needed. This can reduce holding costs but increases dependence on reliable suppliers and logistics.</p>

      <h3>Inventory dashboard</h3>
      <p>Key metrics: stock level, reorder point, stockout rate, inventory turnover, inventory accuracy, holding cost, and dead stock.</p>

      <hr />

      <h2>2. Supplier Evaluation</h2>
      <h3>Definition</h3>
      <p>Supplier evaluation is the systematic process of assessing suppliers based on their ability to provide the required products, materials, or services at acceptable levels of quality, cost, reliability, capacity, and risk.</p>
      <p>A supplier should not be evaluated only by price. A supplier offering the lowest price may create higher total costs if they frequently deliver late, send defective products, change prices unexpectedly, have poor communication, or run out of stock.</p>

      <h3>Supplier evaluation criteria</h3>
      <ul>
        <li><strong>Price</strong> — is the cost competitive?</li>
        <li><strong>Quality</strong> — does the supplier meet specifications?</li>
        <li><strong>Reliability</strong> — do deliveries arrive as promised?</li>
        <li><strong>Lead time</strong> — how quickly can they supply?</li>
        <li><strong>Capacity</strong> — can they support our volume?</li>
        <li><strong>Communication</strong> — how quickly do they respond?</li>
        <li><strong>Flexibility</strong> — can they handle changes?</li>
        <li><strong>Compliance</strong> — do they meet requirements?</li>
        <li><strong>Financial stability</strong> — can they remain operational?</li>
        <li><strong>Risk</strong> — how vulnerable is the relationship?</li>
      </ul>

      <h3>Supplier scorecard</h3>
      <p>A company can assign weights to criteria. Example: quality 30%, reliability 25%, price 20%, lead time 15%, communication 10%.</p>
      <p><strong>Weighted Supplier Score = Σ(Score × Weight)</strong></p>
      <p>This creates a more systematic evaluation than choosing based purely on price.</p>

      <h3>Total cost of ownership</h3>
      <p>The purchase price is only one component of supplier cost.</p>
      <p><strong>TCO = Purchase Cost + Shipping + Inspection + Defect Costs + Storage + Administrative Costs + Delay Costs + Other Supplier-Related Costs</strong></p>
      <p>This is why the cheapest supplier is not necessarily the lowest-cost supplier overall.</p>

      <h3>Supplier performance metrics</h3>
      <p><strong>On-Time Delivery Rate = On-Time Deliveries ÷ Total Deliveries × 100</strong></p>
      <p><strong>Defect Rate = Defective Units ÷ Total Units Received × 100</strong></p>
      <p><strong>Fill Rate = Quantity Delivered ÷ Quantity Ordered × 100</strong></p>

      <h3>Supplier evaluation process</h3>
      <p>Identify requirements → find suppliers → screen suppliers → request quotations/proposals → evaluate quality and capability → check references/evidence → test samples where appropriate → select supplier → monitor performance → periodic reevaluation.</p>

      <hr />

      <h2>3. Quality Assurance</h2>
      <h3>Definition</h3>
      <p>Quality Assurance (QA) is a systematic approach to designing and maintaining processes that prevent quality problems from occurring. QA focuses primarily on the process.</p>
      <p>The question is: how do we design the system so mistakes are less likely to happen?</p>

      <h3>QA vs Quality Control</h3>
      <p>This distinction is fundamental.</p>
      <p><strong>Quality Assurance:</strong> process-focused; preventive; builds quality into the process; asks "How can we prevent defects?"</p>
      <p><strong>Quality Control:</strong> product/output-focused; detecting/corrective; checks resulting output; asks "Does this output meet requirements?"</p>
      <p>Example: QA creates a standardized product-upload procedure to prevent incorrect prices. QC checks the published product listing to confirm that the price is correct.</p>

      <h3>QA activities</h3>
      <p>QA can include standard operating procedures, employee training, process audits, standardization, preventive maintenance, requirements definition, supplier qualification, documentation, and process improvement.</p>

      <h3>Quality standards</h3>
      <p>A quality standard defines what acceptable work looks like. For example, a product listing must contain: correct product name, correct price, correct stock quantity, approved images, accurate description, correct category, and required specifications. This transforms vague expectations into measurable requirements.</p>

      <h3>QA principle</h3>
      <p>Build quality into the process rather than relying entirely on final inspection. If a process repeatedly creates defects, inspecting every finished product may become expensive. Improving the process can prevent the defects in the first place.</p>

      <hr />

      <h2>4. Quality Control</h2>
      <h3>Definition</h3>
      <p>Quality Control (QC) is the process of inspecting, testing, measuring, or verifying outputs to determine whether they meet defined quality requirements. QC focuses on the actual output.</p>
      <p>Output produced → inspection/testing → compare with specification → pass? → release or reject/correct → root-cause analysis → process improvement.</p>

      <h3>Examples</h3>
      <p><strong>Manufacturing</strong> — inspecting a product for defects.</p>
      <p><strong>Marketplace</strong> — checking whether product price is correct, product image matches the item, description is accurate, and inventory quantity is correct.</p>
      <p><strong>Software</strong> — testing login, checkout, payment calculations, mobile responsiveness, and error handling.</p>

      <h3>Defect rate</h3>
      <p><strong>Defect Rate = Defective Units ÷ Total Units × 100</strong></p>
      <p>If 30 of 2,000 products are defective: 30 ÷ 2,000 × 100 = 1.5%.</p>

      <h3>First-pass yield</h3>
      <p>First-pass yield (FPY) measures the percentage of units that pass through a process correctly without requiring rework.</p>
      <p><strong>FPY = Units Completed Correctly First Time ÷ Total Units Entering Process × 100</strong></p>
      <p>Higher FPY generally indicates a more capable process.</p>

      <h3>Quality control methods</h3>
      <p><strong>Inspection</strong> — visual or physical checking.</p>
      <p><strong>Testing</strong> — checking whether something functions correctly.</p>
      <p><strong>Sampling</strong> — inspecting a representative portion rather than every unit.</p>
      <p><strong>Automated testing</strong> — software or machines perform repeatable checks.</p>
      <p><strong>Checklists</strong> — ensure required criteria are consistently verified.</p>

      <hr />

      <h2>5. Process Mapping</h2>
      <h3>Definition</h3>
      <p>Process mapping is the visual representation of the steps, decisions, inputs, outputs, people, and systems involved in completing a business process. It answers: how does work actually move through the organization?</p>

      <h3>Why process mapping matters</h3>
      <p>It can reveal duplicate work, unnecessary approvals, waiting time, bottlenecks, manual data entry, poor handoffs, missing quality checks, and unclear ownership.</p>

      <h3>Process mapping steps</h3>
      <ol>
        <li><strong>Choose a process.</strong> Example: customer order fulfillment.</li>
        <li><strong>Identify the starting point.</strong> Example: customer submits order.</li>
        <li><strong>Identify the endpoint.</strong> Example: customer receives order.</li>
        <li><strong>Document every step.</strong> Do not immediately simplify the process. First document what actually happens.</li>
        <li><strong>Identify decision points.</strong> For example: payment successful? Yes/No.</li>
        <li><strong>Measure each stage.</strong> Record processing time, waiting time, error rate, cost, and responsible employee.</li>
        <li><strong>Improve.</strong> Remove unnecessary steps and automate appropriate activities.</li>
      </ol>

      <hr />

      <h2>6. Bottleneck Analysis</h2>
      <h3>Definition</h3>
      <p>A bottleneck is a stage in a process whose limited capacity restricts the output of the entire system.</p>
      <p>Imagine stages A (100 units/hr) → B (80) → C (40) → D (90). Stage C can process only 40 units per hour. Therefore, stage C is the bottleneck. The system cannot sustainably produce 90 or 100 units per hour if stage C can only process 40.</p>

      <h3>Bottleneck principle</h3>
      <p><strong>System Capacity ≈ Capacity of the Critical Constraint</strong></p>
      <p>This is closely related to the Theory of Constraints.</p>

      <h3>How to identify a bottleneck</h3>
      <p>Look for long queues, excessive waiting, constantly overloaded employees, machines operating at full capacity, work accumulating before one step, tasks consistently taking longer, and frequent delays originating from one stage.</p>

      <h3>Bottleneck example</h3>
      <p>Suppose an online store has: order processing 100/hour; picking 90/hour; packing 30/hour; shipping preparation 80/hour. Packing limits the process to approximately 30 orders/hour.</p>
      <p>Hiring another customer-support employee will not solve the packing constraint. Possible solutions include adding packing staff, improving packing layout, pre-packaging common products, introducing packing equipment, simplifying packaging, and removing unnecessary steps.</p>

      <h3>Bottleneck improvement cycle</h3>
      <p>Identify constraint → measure constraint → improve constraint → use capacity effectively → increase capacity if needed → repeat.</p>
      <p>Once one bottleneck is resolved, another part of the system may become the new constraint.</p>

      <hr />

      <h2>7. Capacity Planning</h2>
      <h3>Definition</h3>
      <p>Capacity planning is the process of determining how much production, service, employee, equipment, storage, or technological capacity is required to meet expected demand. It answers: do we have enough capability to handle the expected workload?</p>

      <h3>Capacity types</h3>
      <p><strong>Human capacity</strong> — how much work employees can perform.</p>
      <p><strong>Production capacity</strong> — how many units can be produced.</p>
      <p><strong>Service capacity</strong> — how many customers can be served.</p>
      <p><strong>Technology capacity</strong> — how much traffic, storage, processing, or transactions systems can handle.</p>
      <p><strong>Warehouse capacity</strong> — how much inventory can be stored.</p>

      <h3>Basic capacity utilization</h3>
      <p><strong>Capacity Utilization = Actual Output ÷ Maximum Capacity × 100</strong></p>
      <p>Example: maximum 1,000 orders/day; actual 800 orders/day; 800 ÷ 1,000 × 100 = 80%.</p>

      <h3>Practical capacity</h3>
      <p>Maximum theoretical capacity is not always realistic. A machine might theoretically process 1,000 units per day, but after maintenance, breaks, setup, cleaning, downtime, and changeovers, realistic capacity may be 800 units.</p>
      <p>Theoretical capacity → subtract unavoidable constraints → practical capacity.</p>

      <h3>Capacity planning example</h3>
      <p>Expected demand: current demand 800 orders/day; forecast demand 1,100 orders/day; current practical capacity 900 orders/day. Capacity gap: 1,100 − 900 = 200 orders/day.</p>
      <p>Possible responses: hire staff, extend operating hours, add equipment, outsource, automate, improve productivity, and reduce unnecessary processing time.</p>

      <h3>Capacity cushion</h3>
      <p>Businesses may intentionally maintain spare capacity.</p>
      <p><strong>Capacity Cushion = Available Capacity − Expected Demand</strong></p>
      <p>A cushion helps absorb demand spikes, emergencies, equipment failures, supplier disruptions, and unexpected orders. However, excessive unused capacity can increase costs.</p>

      <hr />

      <h2>8. Demand Forecasting</h2>
      <h3>Definition</h3>
      <p>Demand forecasting is the process of estimating future customer demand using historical data, market information, trends, seasonality, customer behavior, and business assumptions.</p>
      <p>Forecasting supports decisions about inventory, staffing, purchasing, production, marketing, cash flow, and capacity.</p>

      <h3>Forecasting system</h3>
      <p>Historical data + current market information + seasonality + known future events + business assumptions → demand forecast → operations plan → actual demand → forecast error → improve forecast.</p>

      <h3>Moving average</h3>
      <p>A simple moving average can smooth short-term fluctuations. For a three-period moving average:</p>
      <p><strong>Forecast = (Demand₁ + Demand₂ + Demand₃) ÷ 3</strong></p>
      <p>Example: (800 + 850 + 900) ÷ 3 = 850 units.</p>

      <h3>Seasonality</h3>
      <p>Some businesses experience predictable seasonal demand. Examples: school supplies in back-to-school season; gift products during holidays; travel services during vacation periods; clothing during seasonal changes. Ignoring seasonality can create major inventory and staffing problems.</p>

      <h3>Forecast error</h3>
      <p><strong>Forecast Error = Actual Demand − Forecast Demand</strong></p>
      <p><strong>Absolute Error = |Actual − Forecast|</strong></p>
      <p><strong>MAPE = Average(|Actual − Forecast| ÷ Actual) × 100</strong></p>
      <p>Forecasting is inherently uncertain. The goal is not perfect prediction but better planning under uncertainty.</p>

      <hr />

      <h2>9. Workflow Automation</h2>
      <h3>Definition</h3>
      <p>Workflow automation is the use of software, scripts, integrations, rules, or machines to perform repetitive process steps with reduced manual intervention.</p>
      <p>Instead of person → person → person → person, automation can create: trigger → system → rule → action → result.</p>

      <h3>Example</h3>
      <p>A marketplace receives an order.</p>
      <p><strong>Without automation:</strong> order → employee reads order → employee checks payment → employee updates inventory → employee sends confirmation → employee creates task.</p>
      <p><strong>With appropriate automation:</strong> order received → payment verified automatically → inventory updated → confirmation sent → fulfillment task created.</p>

      <h3>Good candidates for automation</h3>
      <p>Automation works particularly well for tasks that are repetitive, rule-based, high-volume, predictable, digitally accessible, time-consuming, and prone to simple manual errors.</p>
      <p>Examples: email notifications, order status updates, inventory alerts, invoice generation, data synchronization, report generation, task creation, and appointment reminders.</p>

      <h3>What should not be automated blindly?</h3>
      <p>Be cautious with processes involving complex judgment, unusual exceptions, sensitive decisions, high financial risk, legal consequences, and customer situations requiring empathy.</p>
      <p>Automation should improve a process rather than simply make a bad process happen faster.</p>

      <h3>Automation ROI</h3>
      <p><strong>Automation ROI = (Net Benefit from Automation ÷ Automation Cost) × 100</strong></p>
      <p>Potential benefits include labor hours saved, fewer errors, faster processing, higher capacity, and better customer experience.</p>
      <p>Costs include software, development, integration, maintenance, training, and monitoring.</p>

      <h3>Automation principle</h3>
      <p>Document → standardize → simplify → measure → automate → monitor.</p>
      <p>Do not automatically automate a process that nobody understands.</p>

      <hr />

      <h2>10. Service-Level Management</h2>
      <h3>Definition</h3>
      <p>Service-Level Management (SLM) is the process of defining, measuring, monitoring, and improving the level of service delivered to customers or internal users.</p>
      <p>It converts vague expectations such as "Respond quickly" into measurable standards such as "90% of support tickets receive an initial response within 10 minutes during operating hours."</p>

      <h3>Service-level agreement</h3>
      <p>An SLA, or Service-Level Agreement, is a formal agreement defining expected service standards between parties. An SLA can define availability, response time, resolution time, delivery time, support hours, escalation procedures, reporting, responsibilities, and exceptions.</p>

      <h3>Example SLA</h3>
      <p>For a software platform: availability target 99.9%; initial support response ≤ 30 minutes; critical incident escalation ≤ 10 minutes; standard issue resolution target ≤ 24 hours. The exact targets should reflect what the organization can reliably deliver and what customers actually require.</p>

      <h3>SLA vs KPI</h3>
      <p><strong>SLA:</strong> defines expected service level; often contractual or formally agreed; creates an obligation/expectation; example: respond within 30 min.</p>
      <p><strong>KPI:</strong> measures performance; may be internal or external; creates a measurement; example: average response time = 22 min.</p>

      <h3>Service-level metrics</h3>
      <p><strong>Response Time</strong> — time between customer request and initial response.</p>
      <p><strong>Resolution Time</strong> — time required to resolve an issue.</p>
      <p><strong>Availability = Available Time ÷ Total Required Time × 100</strong></p>
      <p><strong>SLA Compliance = Interactions Meeting SLA ÷ Total SLA-Measured Interactions × 100</strong></p>

      <h3>Service-level management cycle</h3>
      <p>Define customer expectations → set service standards → measure actual performance → compare against SLA → identify gaps → investigate causes → improve resources/processes → review SLA.</p>

      <hr />

      <h2>Quality Assurance vs Quality Control</h2>
      <p>This distinction is one of the most important operations concepts.</p>
      <p><strong>Quality Assurance</strong> — "prevent the problem." Process design, training, standards, documentation, audits.</p>
      <p><strong>Quality Control</strong> — "find the problem." Inspection, testing, measurement, sampling.</p>
      <p>Example: a software company wants fewer checkout errors.</p>
      <p><strong>QA:</strong> define checkout requirements, create coding standards, train developers, use automated tests, perform code reviews.</p>
      <p><strong>QC:</strong> test checkout, attempt different payment scenarios, verify calculations, check error messages, confirm successful transactions.</p>

      <hr />

      <h2>Process Map + Bottleneck Analysis</h2>
      <p>These concepts work together.</p>
      <p>Process map → visualize every stage → measure each stage → identify waiting/queues → find bottleneck → improve constraint → measure again.</p>
      <p>Example: order received 500/hr; payment verification 450/hr; picking 300/hr; packing 120/hr; shipping preparation 250/hr. The packing stage is the limiting stage.</p>
      <p>Improving the other stages without addressing packing may produce more work waiting in front of packing rather than increasing total system output.</p>

      <hr />

      <h2>Demand + Capacity + Inventory</h2>
      <p>These three concepts are tightly connected.</p>
      <p>Demand forecast → expected workload → capacity planning → required people/equipment → inventory management → required materials/products → operations → customer.</p>
      <p>If demand increases: demand ↑ → inventory requirements ↑ → capacity requirements ↑ → staff/equipment requirements ↑ → supplier requirements ↑.</p>
      <p>This is why operations should not be managed as isolated departments.</p>

      <hr />

      <h2>Supplier + Inventory + Demand System</h2>
      <p>Consider a product that normally sells 100 units per week. Demand forecast 100 units/week → supplier lead time → determine reorder point → maintain safety stock → monitor actual sales → replenish.</p>
      <p>If demand suddenly increases to 200 units per week, the business must reassess inventory, supplier capacity, lead times, warehouse capacity, employee capacity, and delivery capacity.</p>

      <hr />

      <h2>Operations Dashboard</h2>
      <p>A useful operations dashboard could contain:</p>
      <ul>
        <li><strong>Inventory</strong> — stockout rate — 2%</li>
        <li><strong>Inventory</strong> — inventory accuracy — 97%</li>
        <li><strong>Supplier</strong> — on-time delivery — 94%</li>
        <li><strong>Supplier</strong> — defect rate — 1.5%</li>
        <li><strong>Quality</strong> — first-pass yield — 96%</li>
        <li><strong>Process</strong> — cycle time — 18 min</li>
        <li><strong>Bottleneck</strong> — capacity — 120/hr</li>
        <li><strong>Capacity</strong> — utilization — 78%</li>
        <li><strong>Forecast</strong> — forecast error — 8%</li>
        <li><strong>Automation</strong> — manual hours saved — 80/month</li>
        <li><strong>Service</strong> — SLA compliance — 95%</li>
      </ul>
      <p>The specific targets should be based on the business model and customer expectations.</p>

      <hr />

      <h2>Operations Improvement Framework</h2>
      <p>A practical continuous-improvement system can follow:</p>
      <ol>
        <li><strong>Identify</strong> — what problem exists?</li>
        <li><strong>Measure</strong> — how large is the problem?</li>
        <li><strong>Map</strong> — where does it occur?</li>
        <li><strong>Analyze</strong> — what causes it?</li>
        <li><strong>Improve</strong> — what change should be made?</li>
        <li><strong>Implement</strong> — put the solution into operation.</li>
        <li><strong>Control</strong> — did performance remain improved?</li>
        <li><strong>Standardize</strong> — document the improved process.</li>
        <li><strong>Repeat.</strong></li>
      </ol>

      <hr />

      <h2>Root-Cause Analysis</h2>
      <p>When an operations problem occurs, don't stop at the visible symptom.</p>
      <p>Example: orders are frequently shipped late. Possible surface explanation: "Employees are slow."</p>
      <p>Further investigation: late shipment → orders not packed on time → packing queue → packing capacity too low → demand increased → capacity plan was not updated.</p>
      <p>The root problem may therefore be a capacity-planning failure rather than simply employee performance.</p>

      <hr />

      <h2>Operations Efficiency</h2>
      <p>Efficiency generally concerns how much output is generated relative to resources consumed.</p>
      <p><strong>Efficiency = Useful Output ÷ Resources Used</strong></p>
      <p>Examples: orders processed ÷ labor hours; products produced ÷ machine hours; revenue ÷ operating expense; tickets resolved ÷ support hours.</p>
      <p>But efficiency must not be optimized at the expense of quality, safety, reliability, employee sustainability, customer satisfaction, or compliance.</p>
      <p>A process that handles twice as many orders but creates three times as many defects is not necessarily an operational improvement.</p>

      <hr />

      <h2>Operations Effectiveness vs Efficiency</h2>
      <p><strong>Efficiency</strong> — are we using resources well?</p>
      <p><strong>Effectiveness</strong> — are we achieving the required result?</p>
      <p>Example: a support team resolves 100 tickets per day. They increase productivity to 150 tickets per day, but customers become less satisfied because answers are rushed. Efficiency increased. Customer-service effectiveness may have decreased. A good operations system balances both.</p>

      <hr />

      <h2>Complete Operations Management System</h2>
      <pre>{`CUSTOMER DEMAND
                          │
                          ▼
                  DEMAND FORECASTING
                          │
                          ▼
                   CAPACITY PLANNING
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
       SUPPLIER EVALUATION      RESOURCE PLANNING
              │                       │
              ▼                       ▼
       INVENTORY MANAGEMENT       WORKFORCE
              │                       │
              └───────────┬───────────┘
                          ▼
                   PROCESS MAPPING
                          │
                          ▼
                  PROCESS EXECUTION
                          │
                ┌─────────┴─────────┐
                ▼                   ▼
         QUALITY ASSURANCE    WORKFLOW AUTOMATION
                │                   │
                └─────────┬─────────┘
                          ▼
                   QUALITY CONTROL
                          │
                          ▼
                  CUSTOMER DELIVERY
                          │
                          ▼
               SERVICE-LEVEL MANAGEMENT
                          │
                          ▼
                    PERFORMANCE DATA
                          │
                          ▼
                  BOTTLENECK ANALYSIS
                          │
                          ▼
                  PROCESS IMPROVEMENT
                          │
                          └──────────► FORECAST / PLAN`}</pre>

      <hr />

      <h2>Operations Principles</h2>
      <ol>
        <li><strong>Design for reliability.</strong> A process should produce consistent results, not depend entirely on individual effort.</li>
        <li><strong>Prevent problems where possible.</strong> QA should reduce the need for excessive downstream inspection.</li>
        <li><strong>Measure the entire process.</strong> Optimizing one department can make the overall system worse.</li>
        <li><strong>Manage constraints.</strong> Improving a non-bottleneck does not necessarily increase total system capacity.</li>
        <li><strong>Forecast, but prepare for uncertainty.</strong> Forecasts are estimates, not guarantees.</li>
        <li><strong>Maintain appropriate inventory.</strong> Too little creates stockouts; too much ties up capital.</li>
        <li><strong>Evaluate suppliers by total value.</strong> Price is only one component of supplier performance.</li>
        <li><strong>Automate intelligently.</strong> Automate stable, repeatable processes after understanding and simplifying them.</li>
        <li><strong>Define service expectations.</strong> Customers and employees should know what service level is expected.</li>
        <li><strong>Continuously improve.</strong> Operations should evolve as demand, technology, suppliers, customers, costs, capacity, and business strategy change.</li>
      </ol>

      <hr />

      <h2>The Operations Flywheel</h2>
      <pre>{`FORECAST DEMAND
              ↓
       PLAN CAPACITY
              ↓
      MANAGE SUPPLIERS
              ↓
       MANAGE INVENTORY
              ↓
        EXECUTE PROCESS
              ↓
       ASSURE QUALITY
              ↓
        CONTROL OUTPUT
              ↓
       DELIVER SERVICE
              ↓
       MEASURE RESULTS
              ↓
     FIND BOTTLENECKS
              ↓
        IMPROVE PROCESS
              ↓
      AUTOMATE WHERE USEFUL
              ↓
        STANDARDIZE
              ↓
        FORECAST AGAIN`}</pre>

      <h3>The central idea of operations management</h3>
      <p>A business should build a system that can reliably transform resources into valuable customer outcomes at the required quality, speed, capacity, and cost.</p>
      <p>Inventory management ensures the right resources are available. Supplier evaluation ensures those resources come from dependable sources. Quality assurance prevents process failures, while quality control detects output problems. Process mapping makes work visible, bottleneck analysis identifies constraints, capacity planning prepares the organization for workload, demand forecasting anticipates future requirements, workflow automation reduces repetitive manual work, and service-level management ensures that the final operation meets defined customer expectations.</p>
    </LessonLayout>
  )
}
