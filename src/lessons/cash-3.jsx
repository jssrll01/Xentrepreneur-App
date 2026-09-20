import LessonLayout from '../components/LessonLayout'

export default function Cash3() {
  return (
    <LessonLayout
      number="184"
      title="Operating Cash Flow"
      summary="11 operating cash flow concepts — operating cash flow, cash conversion, cash collection, receivables, payables and inventory management, working-capital management, cash conversion cycle, cash forecasting, budgeting, and reserves."
    >
      <h2>Operating Cash Flow</h2>
      <p>Cash generated or consumed by the business's ordinary operating activities.</p>
      <p><strong>Operating Cash Flow = Operating Cash Inflows − Operating Cash Outflows</strong></p>
      <p>The indirect method starts from accounting profit and adjusts for non-cash items and changes in working capital.</p>

      <h2>Cash Conversion</h2>
      <p>The process of converting: Sale → Receivable → Collection → Cash.</p>
      <p>A sale does not automatically mean cash has been collected.</p>

      <h2>Cash Collection</h2>
      <p>Receiving cash owed by customers.</p>
      <p><strong>Collection System:</strong> Invoice → Reminder → Due Date → Follow-Up → Collection → Reconciliation</p>

      <h2>Receivables Management</h2>
      <p>Managing customer amounts owed to improve: collection speed, credit quality, cash flow, and bad-debt control.</p>
      <p><strong>DSO = Accounts Receivable ÷ Credit Sales × Days</strong></p>

      <h2>Payables Management</h2>
      <p>Managing supplier obligations while maintaining good supplier relationships.</p>

      <h2>Inventory Management</h2>
      <p>Balancing inventory availability against capital tied up in stock.</p>

      <h2>Working-Capital Management</h2>
      <p>Managing: receivables, inventory, payables, and cash.</p>

      <h2>Cash Conversion Cycle</h2>
      <p><strong>CCC = DIO + DSO − DPO</strong></p>
      <p>Where DIO = Days Inventory Outstanding, DSO = Days Sales Outstanding, DPO = Days Payables Outstanding.</p>

      <h2>Cash Forecasting</h2>
      <p>Estimate future: cash inflows, cash outflows, ending cash, and funding requirements.</p>

      <h2>Cash Budgeting</h2>
      <p>A structured plan for expected cash receipts and payments.</p>

      <h2>Cash Reserves</h2>
      <p>Cash or highly liquid resources maintained to absorb unexpected expenses or temporary revenue disruptions.</p>
    </LessonLayout>
  )
}
