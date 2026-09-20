import LessonLayout from '../components/LessonLayout'

export default function Loss2() {
  return (
    <LessonLayout
      number="148"
      title="Loss — Part 2"
      summary="25 operational and commercial losses — waste, returns, refunds, chargebacks, discounts, pricing errors, cost and budget overruns, project and contract losses, churn, downtime, supply disruption, quality failure, warranty, legal, regulatory, and penalties."
    >
      <h2>Loss — Part 2</h2>

      <h2>1. Waste</h2>
      <p>Consumption of resources without creating sufficient value.</p>
      <p>Examples: overproduction, excess packaging, repeated data entry, unnecessary meetings, defects, excess inventory, unused subscriptions, unproductive ads, waiting time.</p>

      <h2>2. Returns</h2>
      <p>Customers sending purchased products back under the return policy.</p>
      <p><strong>Return Rate = (Returned Orders ÷ Total Orders) × 100</strong></p>
      <p>Return-related costs: reverse shipping, inspection, restocking, refund processing, damage, resale-value reduction, admin, lost selling opportunity.</p>

      <h2>3. Refunds</h2>
      <p>Money returned to a customer after payment or purchase.</p>
      <p><strong>Refund Rate = (Refunded Revenue ÷ Total Revenue) × 100</strong></p>
      <p>Causes: return, cancellation, failed delivery, defect, service failure, billing error, duplicate payment.</p>

      <h2>4. Chargebacks</h2>
      <p>Transaction reversed through the payment network's dispute process when a cardholder disputes.</p>
      <p><strong>Chargeback Rate = (Chargebacks ÷ Transactions) × 100</strong></p>
      <p>Prevention: clear descriptions, authentication, fraud detection, delivery tracking, accurate billing, clear policies.</p>

      <h2>5. Discounts</h2>
      <p>Price reductions from the reference price. Not automatically losses but can destroy contribution.</p>
      <p>Evaluate by incremental contribution, not by volume. Excessive discounts can train customers to wait.</p>

      <h2>6. Pricing Errors</h2>
      <p>Incorrect prices from miscalculation, wrong configuration, wrong currency, missing shipping/tax, wrong tier.</p>
      <p>Prevention: price validation, approval workflows, automated calculations, price-change logs, test environments, dual review, margin-floor controls.</p>

      <h2>7. Cost Overruns</h2>
      <p>Actual costs exceed the original estimate.</p>
      <p><strong>Overrun % = ((Actual − Estimate) ÷ Estimate) × 100</strong></p>

      <h2>8. Budget Overruns</h2>
      <p>Actual spending exceeds approved budget. Can be due to low budget, failed controls, scope change, or justified extra value.</p>

      <h2>9. Project Losses</h2>
      <p>Project revenue is insufficient to cover project costs.</p>
      <p>Causes: underpricing, scope creep, poor estimation, rework, delays, uncontrolled revisions, labor/material price increases.</p>

      <h2>10. Contract Losses</h2>
      <p>Contract fulfillment produces insufficient or negative economic return.</p>
      <p>Causes: fixed-price underestimation, cost inflation, delays, penalties, scope ambiguity, FX changes.</p>
      <p>Evaluate throughout the contract lifecycle, not only at signing.</p>

      <h2>11. Customer Acquisition Losses</h2>
      <p>CAC exceeds customer contribution within the relevant period or expected lifetime.</p>
      <p><strong>Customer Economics = Customer Contribution − Acquisition Cost</strong></p>

      <h2>12. Customer Churn</h2>
      <p>Customers stop purchasing, cancel, or terminate.</p>
      <p><strong>Churn Rate = (Customers Lost ÷ Beginning Customers) × 100</strong></p>

      <h2>13. Lost Sales</h2>
      <p>Sales opportunities not completed because the customer did not purchase or the business could not fulfill demand.</p>
      <p>Distinguish observed demand, estimated demand, and actual lost transactions.</p>

      <h2>14. Lost Opportunities</h2>
      <p>Potential economic benefit not captured — failed partnership, missed market, delayed launch, unused tech, missed discount, unused capacity.</p>
      <p>Opportunity cost = value of next-best alternative forgone.</p>

      <h2>15. Lost Productivity</h2>
      <p>Available resources produce less than achievable output.</p>
      <p><strong>Productivity = Output ÷ Input</strong></p>

      <h2>16. Downtime</h2>
      <p>Periods when equipment, systems, or operations are unavailable.</p>
      <p><strong>Availability = (Uptime ÷ Scheduled Time) × 100</strong></p>

      <h2>17. Equipment Failure</h2>
      <p>Machinery, tools, vehicles, computers, or equipment stop functioning.</p>
      <p>Effects: repair, replacement, delays, labor downtime, lost sales, emergency shipping, quality problems.</p>

      <h2>18. System Failure</h2>
      <p>Software, databases, networks, or integrated systems fail.</p>
      <p>Prevention: backups, monitoring, redundancy, disaster recovery, access controls, testing, incident response.</p>

      <h2>19. Supply Disruption</h2>
      <p>Business cannot obtain products, materials, components, or services as planned.</p>
      <p>Causes: supplier failure, natural disasters, transport, customs, geopolitical, shortage, labor disruption.</p>

      <h2>20. Delivery Failure</h2>
      <p>Product or service not delivered according to requirements.</p>
      <p>Effects: reshipping, refunds, returns, support costs, lost customers, replacement products.</p>

      <h2>21. Quality Failure</h2>
      <p>Product, service, process, or deliverable fails to meet defined requirements or customer expectations.</p>
      <p>Cost of poor quality: rework → replacement → refund → support → return → lost customer → reputation impact.</p>

      <h2>22. Warranty Costs</h2>
      <p>Costs incurred to fulfill warranty obligations when products or services fail.</p>
      <p><strong>Warranty Claim Rate = (Warranty Claims ÷ Units Sold) × 100</strong></p>

      <h2>23. Legal Costs</h2>
      <p>Expenses from legal services, disputes, contracts, compliance, IP, litigation.</p>
      <p>Not inherently losses. Particularly problematic when unexpected — contract disputes, regulatory violations, customer claims, employment disputes.</p>

      <h2>24. Regulatory Costs</h2>
      <p>Expenses from complying with laws, regulations, licenses, standards, reporting, inspections.</p>
      <p>Not automatically losses. Unexpected regulatory costs arise from new rules, non-compliance remediation, product changes, testing, legal advice, restructuring.</p>

      <h2>25. Penalties</h2>
      <p>Financial or other consequences for violating laws, regulations, contracts, policies, or obligations.</p>
      <p>Examples: late-payment, contract, regulatory, tax, delivery, service-level penalties.</p>
      <p>Prevention: compliance monitoring, contract tracking, deadline alerts, documentation, quality control, regulatory monitoring.</p>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Waste consumes resources without creating sufficient value.</li>
        <li>Returns create reverse logistics, inspection, refund, and resale-value costs.</li>
        <li>Refunds return customer payments and can create additional fulfillment losses.</li>
        <li>Chargebacks reverse disputed transactions and add processing costs.</li>
        <li>Discounts are not inherently losses, but excessive discounts destroy contribution.</li>
        <li>Pricing errors can create immediate and substantial margin losses.</li>
        <li>Cost overruns and budget overruns should be analyzed by cause.</li>
        <li>Project and contract losses should be tracked throughout execution.</li>
        <li>Customer acquisition losses occur when CAC exceeds customer contribution.</li>
        <li>Customer churn destroys future revenue and lifetime value.</li>
        <li>Lost sales should distinguish observed and estimated demand.</li>
        <li>Lost productivity means resources generate less output than achievable.</li>
        <li>Downtime, equipment failure, and system failure can create both direct and indirect losses.</li>
        <li>Supply disruption can cause stockouts, delays, and lost sales.</li>
        <li>Delivery failure creates refunds, replacements, reshipping, and churn.</li>
        <li>Quality failure creates multiple downstream costs.</li>
        <li>Warranty costs should be analyzed with defect and quality data.</li>
        <li>Legal and regulatory costs may be necessary expenses, not automatically losses.</li>
        <li>Penalties are often avoidable through compliance and monitoring.</li>
        <li>Effective loss management follows identify → measure → diagnose → prevent → detect → contain → recover → correct → monitor.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Business Activity → Identify Waste &amp; Loss → Measure Returns/Refunds/Chargebacks →
        Control Discounts &amp; Pricing → Monitor Costs &amp; Budgets → Analyze Projects &amp;
        Contracts → Measure Customer Acquisition &amp; Churn → Track Lost Sales &amp; Opportunities
        → Measure Productivity &amp; Downtime → Protect Equipment &amp; Systems → Diversify
        Supply → Improve Delivery → Control Quality → Manage Warranty → Control Legal &amp;
        Regulatory Exposure → Prevent Penalties → Recover Value → Correct Root Causes → Monitor
        Loss Rates → Improve Profitability → Repeat.
      </p>
    </LessonLayout>
  )
}
