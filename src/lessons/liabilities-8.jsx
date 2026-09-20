import LessonLayout from '../components/LessonLayout'

export default function Liabilities8() {
  return (
    <LessonLayout
      number="173"
      title="Liabilities — Part 8"
      summary="12 unpaid, restructuring, and aggregate liability categories — outstanding invoices, unpaid commissions, contractor and professional fees, marketing and logistics expenses, debt restructuring, maturing debt, and total liabilities."
    >
      <h2>Liabilities — Part 8</h2>

      <h2>Outstanding Invoices</h2>
      <p>Invoices received but not yet paid. These are usually part of accounts payable.</p>

      <h2>Unpaid Commissions</h2>
      <p>Commissions earned by salespeople, affiliates, agents, or partners but not yet paid.</p>

      <h2>Unpaid Contractor Fees</h2>
      <p>Amounts owed to independent contractors for completed or qualifying work.</p>

      <h2>Unpaid Professional Fees</h2>
      <p>Amounts owed to lawyers, accountants, consultants, auditors, and other professionals.</p>

      <h2>Unpaid Marketing Expenses</h2>
      <p>Outstanding advertising, influencer, agency, event, or marketing-service invoices.</p>

      <h2>Unpaid Logistics Expenses</h2>
      <p>Amounts owed for shipping, freight, warehousing, delivery, and transportation.</p>

      <h2>Debt Restructuring Obligations</h2>
      <p>Obligations arising from an agreed modification of debt terms.</p>
      <p>Possible changes include: maturity, interest, principal schedule, payment timing, collateral, and covenants.</p>

      <h2>Maturing Debt</h2>
      <p>Debt approaching its contractual repayment date. A maturity schedule helps identify future refinancing or repayment requirements.</p>

      <h2>Total Liabilities</h2>
      <p>Total liabilities represent the aggregate liabilities recognized by a business under its applicable accounting framework.</p>
      <p><strong>Accounting Equation: Assets = Liabilities + Equity</strong></p>
      <p>Therefore: <strong>Liabilities = Assets − Equity</strong></p>

      <h3>Liability Structure</h3>
      <pre>{`Total Liabilities
├── Current Liabilities
│   ├── Accounts Payable
│   ├── Accrued Expenses
│   ├── Taxes Payable
│   └── Short-Term Debt
│
└── Non-Current Liabilities
    ├── Long-Term Loans
    ├── Bonds
    ├── Lease Liabilities
    └── Long-Term Provisions`}</pre>
    </LessonLayout>
  )
}
