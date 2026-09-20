import LessonLayout from '../components/LessonLayout'

export default function Cash4() {
  return (
    <LessonLayout
      number="185"
      title="Cash Outflows"
      summary="20 common cash outflow categories — supplier payments, payroll, rent, utilities, taxes, loan and interest payments, inventory purchases, marketing, equipment, maintenance, insurance, software, cloud, shipping, transportation, contractors, professional fees, refunds, and dividends."
    >
      <h2>Cash Outflows</h2>
      <p>Cash leaves the business through many channels.</p>

      <h2>Common Outflow Categories</h2>
      <ul>
        <li>Supplier payments — pay for purchases</li>
        <li>Payroll — employee compensation</li>
        <li>Rent — property usage</li>
        <li>Utilities — electricity, water, internet</li>
        <li>Taxes — government obligations</li>
        <li>Loan payments — principal repayment</li>
        <li>Interest payments — financing cost</li>
        <li>Inventory purchases — stock acquisition</li>
        <li>Marketing — customer acquisition</li>
        <li>Equipment purchases — long-term assets</li>
        <li>Maintenance — asset upkeep</li>
        <li>Insurance — risk protection</li>
        <li>Software — digital tools</li>
        <li>Cloud — computing infrastructure</li>
        <li>Shipping — product delivery</li>
        <li>Transportation — movement of goods</li>
        <li>Contractor payments — external labor</li>
        <li>Professional fees — legal/accounting/consulting</li>
        <li>Refunds — return customer funds</li>
        <li>Dividends — distribution to owners</li>
      </ul>

      <h3>Cash-Outflow Principle</h3>
      <p>Cash budgeting should distinguish: Recurring → Variable → One-Time → Discretionary → Mandatory.</p>
    </LessonLayout>
  )
}
