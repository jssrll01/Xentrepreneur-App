import LessonLayout from '../components/LessonLayout'

export default function Cash8() {
  return (
    <LessonLayout
      number="189"
      title="Cash Management — Part 2"
      summary="11 cash-flow statement and forecasting categories — cash-flow statement, daily, weekly, and monthly tracking, rolling forecast, scenario planning, stress testing, liquidity monitoring, payment and collection scheduling, and expense timing."
    >
      <h2>Cash Management — Part 2</h2>

      <h2>Cash-Flow Statement</h2>
      <p>A financial statement organizing cash movements into: operating activities, investing activities, and financing activities.</p>

      <h2>Daily Cash Tracking</h2>
      <p>Monitor: opening cash, receipts, payments, transfers, and closing cash. Useful for businesses with frequent transactions.</p>

      <h2>Weekly Cash Forecasting</h2>
      <p>Forecast cash for upcoming weeks. Useful for identifying short-term shortages before they occur.</p>

      <h2>Monthly Cash Forecasting</h2>
      <p>Provides a longer planning horizon.</p>

      <h2>Rolling Forecast</h2>
      <p>A forecast continuously updated by adding a new future period as the current period passes.</p>

      <h2>Scenario Planning</h2>
      <p>Create alternative cases: base case, higher-demand case, lower-demand case, higher-cost case, and delayed-payment case.</p>

      <h2>Cash Stress Testing</h2>
      <p>Tests whether the business can survive adverse conditions.</p>
      <p>Example: Revenue −20% + Supplier Costs +10% + Collections Delayed 30 Days + Unexpected Expense ₱200k → calculate resulting cash position.</p>

      <h2>Liquidity Monitoring</h2>
      <p>Track whether available cash and near-cash resources can meet upcoming obligations.</p>

      <h2>Payment Scheduling</h2>
      <p>Organize payments according to: due date, priority, cash availability, discounts, and supplier importance.</p>

      <h2>Collection Scheduling</h2>
      <p>Schedule customer collection activities based on invoice maturity and customer terms.</p>

      <h2>Expense Timing</h2>
      <p>Manage when expenses are paid without violating contractual or legal requirements.</p>

      <h3>Weekly Cash System</h3>
      <pre>{`Opening Cash
    +
Expected Collections
    +
Other Inflows
    −
Scheduled Payments
    −
Unexpected Outflows
    =
Projected Closing Cash`}</pre>
    </LessonLayout>
  )
}
