import LessonLayout from '../components/LessonLayout'

export default function Loss1() {
  return (
    <LessonLayout
      number="147"
      title="Loss — Part 1"
      summary="20 loss categories — operating, net, gross, trading, inventory, product, customer, bad debt, credit, investment, FX, asset impairment, theft, fraud, spoilage, damage, obsolescence, dead stock, overproduction, and underutilization."
    >
      <h2>Loss — Part 1</h2>

      <h2>1. Operating Loss</h2>
      <p>Occurs when operating expenses exceed gross profit.</p>
      <p><strong>Operating Loss = Gross Profit − Operating Expenses</strong></p>
      <p>Example: gross profit ₱350,000 − operating expenses ₱500,000 = −₱150,000 operating loss.</p>
      <p>Causes: high payroll, rent, marketing, low sales, weak pricing, poor productivity, underutilized facilities, excessive subscriptions, rapid expansion.</p>

      <h2>2. Net Loss</h2>
      <p><strong>Net Loss = Total Revenue − Total Expenses and Losses</strong></p>
      <p>If negative, the business has a net loss.</p>
      <p>Operating loss focuses on operating activities. Net loss reflects the final accounting result after interest, non-operating items, taxes, and other losses. A company can have operating profit yet report net loss from interest, FX losses, or impairment.</p>

      <h2>3. Gross Loss</h2>
      <p><strong>Gross Profit = Revenue − COGS</strong> — if negative, gross loss.</p>
      <p>Example: ₱500,000 revenue − ₱600,000 COGS = −₱100,000 gross loss.</p>
      <p>Warning sign because operating expenses have not yet been deducted.</p>

      <h2>4. Trading Loss</h2>
      <p>Loss from buying and selling financial instruments, commodities, currencies, securities, or tradable assets at unfavorable prices.</p>
      <p>Example: buy ₱100,000, sell ₱85,000 = ₱15,000 trading loss.</p>
      <p>Realized loss = after a sale. Unrealized loss = market value decline while still held. Accounting treatment varies by asset.</p>

      <h2>5. Inventory Loss</h2>
      <p>When inventory loses economic value or physical quantity.</p>
      <p>Causes: theft, damage, spoilage, obsolescence, shrinkage, record errors, expiration, market-price decline.</p>
      <p><strong>Inventory Loss Rate = Inventory Loss ÷ Inventory Value × 100</strong></p>

      <h2>6. Product Loss</h2>
      <p>When a product's revenue or recoverable value is insufficient to cover relevant costs.</p>
      <p>Example: ₱600 product + ₱100 selling cost = ₱700 cost, sold at ₱550 = ₱150 loss.</p>
      <p>Evaluate unit cost, selling price, contribution, return rate, sell-through, inventory age, demand, marketing.</p>

      <h2>7. Customer Loss</h2>
      <p>Loss of a customer relationship, or economically unprofitable customer relationship.</p>
      <p><strong>Churn Rate = (Customers Lost ÷ Beginning Customers) × 100</strong></p>
      <p>Losing customers means losing future purchases, subscriptions, upsell, cross-sell, referrals, and LTV.</p>

      <h2>8. Bad Debt</h2>
      <p>Amounts owed that are determined or expected to be uncollectible.</p>
      <p>Causes: customer insolvency, weak credit assessment, late payment, fraud, poor collection, excessive limits, economic downturn.</p>
      <p>Prevention: credit checks, limits, deposits, milestone payments, advance payments, reminders, aging reports, collection procedures.</p>

      <h2>9. Credit Loss</h2>
      <p>Economic loss from a borrower or customer failing to meet credit obligations.</p>
      <p>Bad debt = receivables that have become uncollectible. Credit loss can be broader — including expected losses recognized before write-off.</p>

      <h2>10. Investment Loss</h2>
      <p>Negative result through decline in value, sale below cost, impairment, or other unfavorable outcome.</p>
      <p>Causes: market decline, business failure, credit deterioration, rate changes, currency moves, poor selection, impairment.</p>
      <p>Evaluate: original investment, current value, expected recovery, time horizon, risk, opportunity cost.</p>

      <h2>11. Foreign-Exchange Loss</h2>
      <p>When exchange-rate changes reduce value of foreign-currency transactions, assets, liabilities, or cash flows in reporting currency.</p>
      <p>Example: US$10,000 owed, recorded at ₱55/USD = ₱550,000. At ₱58/USD = ₱580,000. Increase of ₱30,000 = FX loss.</p>

      <h2>12. Asset Impairment</h2>
      <p>When an asset's carrying amount exceeds its recoverable amount under the applicable accounting framework.</p>
      <p>Example: equipment carrying ₱1,000,000, recoverable ₱700,000 = ₱300,000 impairment.</p>

      <h2>13. Theft Loss</h2>
      <p>Unauthorized taking of business cash, inventory, equipment, data, or other assets.</p>
      <p>Prevention: inventory controls, cameras, access controls, segregation of duties, cash reconciliation, permissions, audit trails, physical security, stock counts.</p>

      <h2>14. Fraud Loss</h2>
      <p>Economic loss from intentional deception for financial or other unauthorized benefit.</p>
      <p>Examples: fake invoices, payment fraud, identity theft, refund fraud, account takeover, procurement fraud, expense fraud.</p>
      <p>Prevention: multi-control approach — access control, verification, monitoring, reconciliation, audit trail, anomaly detection.</p>

      <h2>15. Spoilage</h2>
      <p>Inventory or materials become unusable or lose value from deterioration, expiration, contamination, or time.</p>
      <p>Common industries: food, agriculture, pharma, cosmetics, chemicals, perishables.</p>
      <p>Prevention: FIFO, FEFO (First Expired First Out), demand forecasting, storage control, temperature control, expiration tracking, smaller batches, monitoring.</p>

      <h2>16. Damage</h2>
      <p>Physical loss reducing economic value of products, materials, equipment, or assets.</p>
      <p>Prevention: better packaging, warehouse procedures, handling training, insurance, storage controls, inspection, supplier/courier standards.</p>

      <h2>17. Obsolescence</h2>
      <p>Assets, products, technology, or inventory become less useful or valuable from newer alternatives, changing preferences, or technology changes.</p>
      <p>Prevention: product lifecycle management, forecasting, smaller batches, pre-orders, build-to-order, portfolio rotation, clearance, supplier return agreements.</p>

      <h2>18. Dead Stock</h2>
      <p>Inventory with little or no realistic normal-sale prospect within a reasonable period.</p>
      <p>Recovery: reposition, bundle, discount, cross-sell, alternate channel, wholesale, liquidate, return, recycle.</p>
      <p>Historical purchase cost does not guarantee current recoverable value.</p>

      <h2>19. Overproduction</h2>
      <p>Producing more than can reasonably be sold or used within the required period.</p>
      <p>Causes: poor forecasting, large batches, volume-only incentives, failure to monitor demand, long lead times, optimism.</p>
      <p>Prevention: demand forecasting, smaller batches, build-to-order, pre-orders, flexible manufacturing, inventory monitoring, sales-production coordination.</p>

      <h2>20. Underutilization</h2>
      <p>Available capacity or assets used significantly below economically appropriate levels.</p>
      <p><strong>Utilization = (Actual Output ÷ Potential Capacity) × 100</strong></p>
      <p>Example: factory capacity 10,000, actual 6,000 = 60%. Fixed costs spread over fewer units raise the per-unit burden.</p>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Operating loss indicates operating expenses exceed gross profit.</li>
        <li>Net loss reflects an overall negative accounting result.</li>
        <li>Gross loss occurs when COGS exceeds revenue.</li>
        <li>Trading loss results from unfavorable trading outcomes.</li>
        <li>Inventory loss occurs when inventory quantity or economic value decreases.</li>
        <li>Product loss identifies products with negative economics.</li>
        <li>Customer loss includes economic consequences of churn.</li>
        <li>Bad debt represents amounts determined or expected to be uncollectible.</li>
        <li>Credit loss can include expected or realized credit exposure losses.</li>
        <li>Investment loss results from unfavorable investment outcomes.</li>
        <li>Foreign-exchange loss arises from currency movements.</li>
        <li>Asset impairment reflects a decline in recoverable economic value.</li>
        <li>Theft loss results from unauthorized removal of assets.</li>
        <li>Fraud loss results from intentional deception.</li>
        <li>Spoilage results from deterioration, expiration, or contamination.</li>
        <li>Damage reduces physical or economic value.</li>
        <li>Obsolescence occurs when products or assets become outdated.</li>
        <li>Dead stock ties up capital with little normal-sale prospect.</li>
        <li>Overproduction creates excess inventory and additional costs.</li>
        <li>Underutilization means capacity or assets are used below appropriate levels.</li>
        <li>Loss management should connect detection, measurement, prevention, recovery, and process improvement.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Identify Revenue &amp; Costs → Measure Gross/Operating/Net Profit or Loss → Identify
        Financial &amp; Operational Losses → Analyze Inventory/Product/Customer/Credit/Asset/Trading
        Losses → Measure Theft/Fraud/Spoilage/Damage/Obsolescence → Identify Dead Stock &amp;
        Overproduction → Measure Capacity Utilization → Determine Root Causes → Prevent →
        Recover Value → Correct Processes → Monitor Loss Rates → Improve → Repeat.
      </p>
    </LessonLayout>
  )
}
