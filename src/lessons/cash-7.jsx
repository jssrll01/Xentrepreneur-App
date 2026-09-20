import LessonLayout from '../components/LessonLayout'

export default function Cash7() {
  return (
    <LessonLayout
      number="188"
      title="Cash Management — Part 1"
      summary="10 liquidity and runway concepts — minimum cash balance, emergency reserve, cash buffer, liquidity planning, cash runway, burn rate, cash conversion cycle, operating cycle, free cash flow, and net cash flow."
    >
      <h2>Cash Management — Part 1</h2>

      <h2>Minimum Cash Balance</h2>
      <p>The minimum amount of cash a business aims to maintain for operational safety.</p>

      <h2>Emergency Reserve</h2>
      <p>Funds held specifically for unexpected events.</p>
      <p>Examples: equipment failure, demand decline, emergency repairs, supplier disruption, and unexpected expenses.</p>

      <h2>Cash Buffer</h2>
      <p>Additional liquidity maintained above expected normal requirements.</p>

      <h2>Liquidity Planning</h2>
      <p>Planning how the business will meet future obligations.</p>

      <h2>Cash Runway</h2>
      <p>How long available cash can support the business under specified assumptions.</p>
      <p><strong>Cash Runway = Available Cash ÷ Monthly Net Cash Burn</strong></p>
      <p>Example: Cash = ₱600,000; Monthly net burn = ₱100,000; Runway = 6 months.</p>
      <p>This formula becomes less meaningful when the business is cash-generating or cash flows are highly variable.</p>

      <h2>Burn Rate</h2>
      <p>The rate at which a business consumes cash over a period.</p>

      <h2>Cash Conversion Cycle</h2>
      <p>Time required to convert cash invested in operations back into cash collected from customers.</p>
      <p><strong>CCC = DIO + DSO − DPO</strong></p>

      <h2>Operating Cycle</h2>
      <p>Generally: Inventory Acquisition → Sale → Receivable → Collection.</p>

      <h2>Free Cash Flow</h2>
      <p><strong>FCF = Operating Cash Flow − Capital Expenditures</strong></p>
      <p>It measures cash remaining after maintaining/investing in long-term operating assets, subject to the definition being used.</p>

      <h2>Net Cash Flow</h2>
      <p><strong>Net Cash Flow = Total Cash Inflows − Total Cash Outflows</strong></p>
    </LessonLayout>
  )
}
