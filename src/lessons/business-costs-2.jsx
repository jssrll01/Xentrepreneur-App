import LessonLayout from '../components/LessonLayout'

export default function BusinessCosts2() {
  return (
    <LessonLayout
      number="112"
      title="Business Costs — Part 2"
      summary="An expanded look at cost structure — production, labor, materials, energy, transportation, inventory, financing, marketing, opportunity, and transaction costs, plus cost classification, cost per unit, cost optimization, and dashboards."
    >
      <h2>Business Costs — Part 2</h2>
      <p>Business costs are the resources a business spends, consumes, or gives up to create products, deliver services, acquire customers, operate the business, and generate revenue.</p>
      <p>Understanding costs allows a business to determine: how much a product or service actually costs, what price is sustainable, whether a product is profitable, how much cash is required, where waste exists, whether outsourcing or automation makes sense, how much inventory to purchase, whether borrowing is affordable, which products/customers/channels are economically attractive.</p>
      <p>A useful distinction is: accounting cost = measurable monetary expense; economic cost = monetary costs plus relevant opportunity costs.</p>

      <pre>{`BUSINESS COSTS
                              │
        ┌─────────────────────┼─────────────────────┐
        ↓                     ↓                     ↓
   Production              Operating            Financing
        │                     │                     │
   ┌────┼────┐          ┌─────┼─────┐         Interest
   ↓    ↓    ↓          ↓     ↓     ↓         Fees
Labor Material Energy  Transport Inventory Marketing
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ↓
                     Transaction Costs
                              ↓
                    Opportunity Costs
                              ↓
                       TOTAL COST
                              ↓
                          PRICING
                              ↓
                           SALES
                              ↓
                          REVENUE
                              ↓
                     PROFIT / CASH FLOW`}</pre>

      <hr />

      <h2>1. Production Costs</h2>
      <h3>Definition</h3>
      <p>Production costs are the costs directly or indirectly associated with producing goods or delivering a production-based service. They can include raw materials, direct labor, machinery, factory utilities, production supplies, maintenance, quality control, and production-related overhead.</p>
      <p><strong>Production Cost = Direct Materials + Direct Labor + Manufacturing Overhead</strong></p>

      <h3>Example</h3>
      <p>A business produces 1,000 units. Materials ₱100,000 + direct labor ₱60,000 + factory overhead ₱40,000 = total ₱200,000. Production cost per unit ₱200. If the product sells for ₱350, the ₱150 difference is not automatically net profit because other business costs may still need to be paid.</p>

      <hr />

      <h2>2. Labor Costs</h2>
      <h3>Definition</h3>
      <p>Labor costs are the costs associated with people performing work for the business. They can include salaries, wages, overtime, bonuses, commissions, employee benefits, employer contributions, recruitment, training, payroll administration, and contractor payments.</p>

      <h3>Direct vs Indirect Labor</h3>
      <p><strong>Direct labor</strong> — labor directly connected to a product or customer.</p>
      <p><strong>Indirect labor</strong> — labor supporting the overall business (manager, accountant, HR personnel, administrative staff, general support staff).</p>

      <h3>Labor Productivity</h3>
      <p><strong>Labor Productivity = Output ÷ Labor Input</strong></p>
      <p>Productivity can be improved through training, better tools, automation, standardized processes, better scheduling, and workflow improvements. Cost reduction should not be pursued at the expense of sustainable productivity or quality.</p>

      <hr />

      <h2>3. Material Costs</h2>
      <h3>Definition</h3>
      <p>Material costs are the costs of physical inputs used to create or deliver products. Examples include raw materials, components, parts, packaging, labels, consumables, and replacement materials.</p>

      <h3>Important Note</h3>
      <p>The cheapest material is not necessarily the cheapest overall solution. Cheap material → higher defect rate → more returns → more replacements → higher customer-service costs → higher total cost. Therefore, businesses should consider total cost, not purchase price alone.</p>

      <hr />

      <h2>4. Energy Costs</h2>
      <h3>Definition</h3>
      <p>Energy costs are expenses associated with electricity, fuel, gas, and other forms of energy used in operations. Examples: electricity, fuel, gas, generator operation, machinery power, cooling, heating, data-center electricity.</p>

      <h3>Energy Optimization</h3>
      <p>Businesses can investigate energy-efficient equipment, preventive maintenance, equipment scheduling, efficient cooling, power management, alternative energy sources, and solar installations where economically appropriate.</p>
      <p>The key metric is often not just total energy spending but energy cost per unit of output.</p>

      <hr />

      <h2>5. Transportation Costs</h2>
      <h3>Definition</h3>
      <p>Transportation costs are the costs associated with moving goods, materials, equipment, or people. They may include freight, shipping, fuel, driver wages, vehicle maintenance, tolls, delivery fees, handling, insurance, and customs-related transportation costs.</p>

      <h3>Landed Cost</h3>
      <p><strong>Landed Cost = Product Cost + Freight + Insurance + Duties/Taxes Where Applicable + Handling + Other Acquisition Costs</strong></p>
      <p>This is especially important when comparing domestic and international suppliers.</p>

      <hr />

      <h2>6. Inventory Costs</h2>
      <h3>Definition</h3>
      <p>Inventory costs are the costs associated with purchasing, storing, managing, moving, and disposing of inventory. They can include purchase cost, warehousing, storage, insurance, security, handling, damage, spoilage, obsolescence, inventory software, and capital tied up in stock.</p>

      <h3>Inventory Carrying Cost</h3>
      <p><strong>Annual Carrying Cost = Average Inventory Value × Carrying-Cost Rate</strong></p>

      <h3>Opportunity Cost of Inventory</h3>
      <p>Suppose ₱500,000 is sitting in unsold products. That ₱500,000 cannot simultaneously be used for advertising, equipment, debt repayment, product development, emergency reserves, or other investments. Therefore, inventory has both direct costs and opportunity costs.</p>

      <p><strong>Inventory Turnover = COGS ÷ Average Inventory</strong></p>
      <p><strong>Inventory Days ≈ 365 ÷ Inventory Turnover</strong></p>
      <p>Higher turnover can indicate faster movement, but excessively high turnover can create stockout problems. The appropriate level depends on the business.</p>

      <hr />

      <h2>7. Financing Costs</h2>
      <h3>Definition</h3>
      <p>Financing costs are costs associated with obtaining and using borrowed or other forms of external capital. Examples: loan interest, credit-card interest, processing fees, origination fees, financing charges, and certain borrowing-related administrative costs.</p>

      <h3>Total Financing Cost</h3>
      <p>Interest + financing fees + processing charges + other financing costs − applicable discounts = financing cost. The effective cost should account for the timing of payments and fees.</p>

      <h3>Financing Cost and Investment</h3>
      <p>Suppose an investment project is expected to generate a return of 7%. If the relevant financing cost is 10%, the project requires careful evaluation because the expected return does not obviously cover the financing cost. Other strategic benefits or cash-flow effects may still matter, but the comparison should be explicit.</p>

      <hr />

      <h2>8. Marketing Costs</h2>
      <h3>Definition</h3>
      <p>Marketing costs are expenses associated with attracting, educating, converting, retaining, and reactivating customers. Examples: advertising, social-media marketing, SEO, content production, influencer marketing, email marketing, events, promotional materials, marketing software, photography, and video production.</p>

      <h3>Marketing Economics</h3>
      <p>Marketing should be evaluated against revenue, contribution margin, CAC, conversion rate, retention, repeat purchases, customer lifetime value, refunds, and service costs. A campaign producing ₱100,000 in sales is not necessarily profitable if it costs ₱90,000 to acquire those sales and fulfill them.</p>

      <hr />

      <h2>9. Opportunity Costs</h2>
      <h3>Definition</h3>
      <p>Opportunity cost is the value of the next-best alternative that is given up when a decision is made. It is one of the most important economic costs because resources are limited. Resources can include money, time, employees, inventory, equipment, storage, production capacity, and management attention.</p>

      <h3>Important Distinction</h3>
      <p>Opportunity cost is not necessarily an accounting expense. Accounting view — what money was actually spent? Economic view — what resources were used plus what valuable alternative was given up?</p>

      <hr />

      <h2>10. Transaction Costs</h2>
      <h3>Definition</h3>
      <p>Transaction costs are the costs involved in completing an economic transaction beyond the underlying price of the product or service. They can include payment-processing fees, marketplace fees, contract negotiation, supplier verification, search costs, administrative work, documentation, legal review, communication, returns processing, and order processing.</p>

      <h3>Example</h3>
      <p>A product sells for ₱500. Payment fee ₱15 + platform fee ₱50 + processing/handling ₱20 = total transaction costs ₱85. Effective amount remaining ₱415. If product cost is ₱250, ₱415 − ₱250 = ₱165 available to cover other costs and profit under this simplified calculation.</p>

      <hr />

      <h2>Cost Classification</h2>
      <p><strong>Direct vs indirect</strong> — direct costs can be directly assigned to a particular product, project, customer, or activity. Indirect costs support multiple products, projects, or activities (e.g., general office rent).</p>
      <p><strong>Fixed vs variable</strong> — fixed costs do not change directly with output within a relevant range and period (office rent, certain salaries, software subscriptions). Variable costs change with activity or output (materials, packaging, payment fees, per-order shipping).</p>
      <p>Some costs are semi-variable or mixed — for example, electricity may have a fixed base charge plus usage-based charges.</p>

      <hr />

      <h2>Total Cost</h2>
      <p><strong>Total Cost = Fixed Costs + Variable Costs</strong></p>
      <p><strong>Economic Cost = Explicit Costs + Opportunity Costs</strong></p>
      <p>Not every category should be added together for every accounting purpose. Cost measurement should match the decision.</p>

      <hr />

      <h2>Cost Per Unit</h2>
      <p><strong>Cost Per Unit = Relevant Total Cost ÷ Units</strong></p>
      <p>Example: relevant costs ₱500,000, units 2,000, cost per unit ₱250. If the product sells for ₱400, ₱400 − ₱250 = ₱150 of contribution before costs that have not been included in the ₱250 calculation.</p>

      <hr />

      <h2>Cost vs Price vs Revenue vs Profit</h2>
      <p>Cost — what the business gives up/spends. Price — what the customer is charged. Revenue — price × quantity sold. Gross profit/contribution — revenue − relevant variable costs. Operating profit — after operating expenses. Net profit — after all relevant expenses and other applicable items.</p>
      <p>This illustrates why a ₱1,000 selling price should never be interpreted as ₱1,000 of profit.</p>

      <hr />

      <h2>Cost Control vs Cost Cutting</h2>
      <p><strong>Cost cutting</strong> — reducing spending. <strong>Cost control</strong> — ensuring that costs remain appropriate relative to business output and value.</p>
      <p>Consider a company that cuts customer support labor. Labor cost ↓ → support capacity ↓ → response time ↑ → customer satisfaction ↓ → retention ↓ → revenue ↓. The initial cost reduction could produce a larger economic loss. The better objective is: eliminate unnecessary costs while protecting value-producing capabilities.</p>

      <hr />

      <h2>Cost Optimization</h2>
      <p>Identify → measure → classify → understand cause → determine value → compare alternatives → remove waste → negotiate/automate/standardize → measure savings → check quality and customer impact → repeat.</p>

      <h3>Common Cost Optimization Methods</h3>
      <p>Supplier negotiation, automation, standardization, inventory optimization, transportation optimization, marketing optimization, and financing optimization.</p>

      <hr />

      <h2>Complete Xmarket Cost Example</h2>
      <p>Selling price ₱1,000. Product acquisition ₱400 + packaging ₱30 + inbound transportation ₱20 + customer delivery ₱50 + platform/payment fees ₱80 + advertising allocated per order ₱70 + order-processing allocation ₱30 = total relevant variable cost ₱680. Contribution ₱320. Contribution margin 32%. If monthly fixed costs are ₱64,000, break-even quantity = ₱64,000 ÷ ₱320 = 200 units.</p>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Revenue is not profit.</li>
        <li>Every product or service has a cost structure that should be understood.</li>
        <li>Production costs include the resources required to create output.</li>
        <li>Labor costs include more than wages.</li>
        <li>Material costs should be evaluated alongside quality, waste, and reliability.</li>
        <li>Energy costs should be measured relative to useful output where possible.</li>
        <li>Transportation must be included when determining the true acquisition or fulfillment cost.</li>
        <li>Inventory creates both holding costs and opportunity costs.</li>
        <li>Financing costs include interest and potentially additional fees and charges.</li>
        <li>Marketing is an investment in customer acquisition and retention, but its economics must be measured.</li>
        <li>Opportunity cost is the value of the next-best alternative forgone.</li>
        <li>Transaction costs can make an apparently profitable transaction unattractive.</li>
        <li>Direct/indirect and fixed/variable are different classification systems.</li>
        <li>The cheapest input is not always the lowest-cost solution.</li>
        <li>Cost optimization is different from blindly cutting expenses.</li>
        <li>Reducing a cost can create larger costs elsewhere if quality, productivity, or customer retention deteriorates.</li>
        <li>Cost per unit is useful for pricing and profitability analysis.</li>
        <li>Businesses should distinguish product costs from broader operating costs.</li>
        <li>Cash-flow impact matters alongside accounting profitability.</li>
        <li>Inventory purchases should be evaluated against demand and available working capital.</li>
        <li>Financing should be compared against the expected economic return of the activity it finances.</li>
        <li>Marketing costs should be evaluated against customer acquisition, contribution, retention, and lifetime value.</li>
        <li>Transaction costs should be included when comparing sales channels.</li>
        <li>Opportunity costs matter whenever scarce resources have competing uses.</li>
        <li>Cost analysis should be based on the decision being made; there is no single cost number appropriate for every decision.</li>
        <li>Businesses should monitor both total costs and unit costs.</li>
        <li>Cost trends can be as important as current cost levels.</li>
        <li>A sustainable business continuously identifies, measures, analyzes, controls, and optimizes its cost structure.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Identify Costs → Classify Costs → Measure
        Production/Labor/Materials/Energy/Transportation/Inventory/Financing/Marketing/Transaction
        Costs → Identify Opportunity Costs → Calculate Relevant Cost → Calculate Unit Cost →
        Compare Alternatives → Set Sustainable Pricing → Generate Revenue → Measure Contribution
        &amp; Profit → Analyze Cash Flow → Identify Waste → Negotiate / Automate / Standardize →
        Measure Results → Protect Quality &amp; Customer Value → Optimize → Repeat.
      </p>
    </LessonLayout>
  )
}
