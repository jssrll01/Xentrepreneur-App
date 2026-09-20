import LessonLayout from '../components/LessonLayout'

export default function Cash2() {
  return (
    <LessonLayout
      number="183"
      title="Cash Inflows — Part 2"
      summary="8 secondary cash inflow categories — tax refunds, supplier refunds, insurance proceeds, grants, donations, franchise fees, licensing income, and royalties."
    >
      <h2>Cash Inflows — Part 2</h2>

      <h2>Tax Refunds</h2>
      <p>Cash returned by a tax authority because the business has an eligible refund.</p>

      <h2>Supplier Refunds</h2>
      <p>Cash returned by suppliers due to: overpayment, returns, pricing adjustments, claims, and credits.</p>

      <h2>Insurance Proceeds</h2>
      <p>Cash received from insurers under qualifying claims.</p>

      <h2>Grants</h2>
      <p>Funds received from governments, institutions, organizations, or other sources that meet grant requirements.</p>

      <h2>Donations</h2>
      <p>Voluntary contributions received by eligible organizations or businesses depending on their structure.</p>

      <h2>Franchise Fees</h2>
      <p>Cash received from franchisees.</p>
      <p>May include: initial franchise fees, renewal fees, training fees, and other contractual fees.</p>

      <h2>Licensing Income</h2>
      <p>Cash received for granting rights to use intellectual property or other assets.</p>

      <h2>Royalties</h2>
      <p>Payments based on use, sales, revenue, production, or other agreed measures.</p>
      <p>Example: 5% royalty on ₱1 million qualifying sales = ₱50,000.</p>

      <h3>Cash Inflow Classification</h3>
      <pre>{`Cash Inflows
├── Operating
│   ├── Customer Payments
│   ├── Subscription Collections
│   └── Memberships
│
├── Investing
│   ├── Asset Sales
│   └── Investment Sales
│
└── Financing
    ├── Loans
    └── Equity Funding`}</pre>
      <p>The exact classification depends on the transaction and applicable accounting standards.</p>
    </LessonLayout>
  )
}
