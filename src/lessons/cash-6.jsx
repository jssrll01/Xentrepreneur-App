import LessonLayout from '../components/LessonLayout'

export default function Cash6() {
  return (
    <LessonLayout
      number="187"
      title="Financing Cash Flow"
      summary="10 financing cash flow categories — new borrowing, debt repayment, equity issuance, owner contributions, investor funding, share repurchases, dividend payments, lease payments, refinancing, and debt restructuring."
    >
      <h2>Financing Cash Flow</h2>

      <h2>New Borrowing</h2>
      <p>Cash received from new debt.</p>

      <h2>Debt Repayment</h2>
      <p>Cash used to repay principal.</p>

      <h2>Equity Issuance</h2>
      <p>Cash received from issuing ownership interests.</p>

      <h2>Owner Contributions</h2>
      <p>Cash invested by owners.</p>

      <h2>Investor Funding</h2>
      <p>Cash invested by external investors.</p>

      <h2>Share Repurchases</h2>
      <p>Cash used by a company to repurchase its shares.</p>

      <h2>Dividend Payments</h2>
      <p>Cash distributed to shareholders.</p>

      <h2>Lease Payments</h2>
      <p>Lease cash payments may have financing and/or operating components depending on applicable accounting standards.</p>

      <h2>Refinancing</h2>
      <p>Replacing or restructuring existing financing.</p>

      <h2>Debt Restructuring</h2>
      <p>Changing debt terms to improve repayment feasibility or otherwise modify the financing arrangement.</p>

      <h3>Financing Flow</h3>
      <pre>{`Capital Need
     ↓
Debt / Equity Decision
     ↓
Funding
     ↓
Business Uses Capital
     ↓
Repayment / Distribution
     ↓
Capital Structure Review`}</pre>
    </LessonLayout>
  )
}
