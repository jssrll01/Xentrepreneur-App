import LessonLayout from '../components/LessonLayout'

export default function Cash1() {
  return (
    <LessonLayout
      number="182"
      title="Cash Inflows — Part 1"
      summary="11 primary cash inflow categories — customer payments, cash sales, AR collections, subscription and membership payments, loan proceeds, investor funding, equity contributions, asset sales, investment and interest income."
    >
      <h2>Cash Inflows — Part 1</h2>

      <h2>Customer Payments</h2>
      <p>Cash received from customers for products or services.</p>

      <h2>Cash Sales</h2>
      <p>Sales where payment is received immediately or nearly immediately.</p>

      <h2>Accounts-Receivable Collections</h2>
      <p>Cash collected from customers who previously purchased on credit.</p>

      <h2>Subscription Collections</h2>
      <p>Cash received from subscription customers.</p>
      <p>Example: 1,000 customers × ₱500/month = ₱500,000 monthly collections before failed payments/refunds/other adjustments.</p>

      <h2>Membership Payments</h2>
      <p>Cash from membership fees.</p>

      <h2>Loan Proceeds</h2>
      <p>Cash received from borrowing.</p>
      <p>Important: Loan proceeds are cash inflows but not revenue. They create or increase a liability.</p>

      <h2>Investor Funding</h2>
      <p>Cash received from investors. Depending on structure, it may create equity or another financing obligation.</p>

      <h2>Equity Contributions</h2>
      <p>Cash contributed by owners.</p>

      <h2>Asset Sales</h2>
      <p>Cash received from selling assets.</p>
      <p>Example: Sell old equipment for ₱100,000. This is generally an investing cash flow, not ordinary sales revenue.</p>

      <h2>Investment Income</h2>
      <p>Cash received from investments.</p>

      <h2>Interest Income</h2>
      <p>Cash received as interest on deposits, loans, bonds, or other investments.</p>
    </LessonLayout>
  )
}
