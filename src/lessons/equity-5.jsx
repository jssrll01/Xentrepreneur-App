import LessonLayout from '../components/LessonLayout'

export default function Equity5() {
  return (
    <LessonLayout
      number="178"
      title="Equity — Part 5"
      summary="18 ownership, rights, and capital structure categories — vesting, dilution, ownership percentage, voting, dividend, and capital rights, liquidation preference, shareholder agreements, capital structure, equity financing, debt-equity mix, valuation, pre-money, and post-money."
    >
      <h2>Equity — Part 5</h2>

      <h2>Vesting</h2>
      <p>The process through which a person earns ownership or an equity-related right over time or after specified conditions.</p>
      <p>Example: 4-year vesting with a 1-year cliff.</p>

      <h2>Equity Dilution</h2>
      <p>Occurs when new shares are issued and an existing shareholder's percentage ownership decreases.</p>
      <p>Example: Founder owns 1,000 of 1,000 shares = 100%. Company issues 250 new shares. Founder: 1,000 ÷ 1,250 = 80%. The founder's percentage has been diluted from 100% to 80%.</p>

      <h2>Ownership Percentage</h2>
      <p><strong>Ownership Percentage = Shares Owned ÷ Total Shares Outstanding × 100</strong></p>

      <h2>Voting Rights</h2>
      <p>Rights allowing shareholders to participate in specified corporate decisions.</p>

      <h2>Dividend Rights</h2>
      <p>Rights to receive dividends when dividends are legally declared and payable according to the company's share terms.</p>

      <h2>Capital Rights</h2>
      <p>Rights relating to the economic value of ownership, including rights upon liquidation, subject to the company's capital structure and applicable law.</p>

      <h2>Liquidation Preference</h2>
      <p>A contractual right giving certain investors priority in receiving proceeds during a liquidation or qualifying transaction.</p>

      <h2>Shareholder Agreements</h2>
      <p>Contracts governing relationships among shareholders.</p>
      <p>They may address: voting, transfers, buy-sell rights, board matters, restrictions, founder obligations, and exit provisions.</p>

      <h2>Capital Structure</h2>
      <p>The composition of a company's financing.</p>
      <pre>{`Capital Structure
├── Equity
│   ├── Common
│   ├── Preferred
│   └── Retained Earnings
│
└── Debt
    ├── Loans
    ├── Bonds
    └── Credit Facilities`}</pre>

      <h2>Equity Financing</h2>
      <p>Raising capital by issuing ownership interests rather than borrowing money.</p>

      <h2>Debt-Equity Mix</h2>
      <p>The relative use of debt and equity to finance the business.</p>

      <h2>Equity Valuation</h2>
      <p>The estimated value attributable to shareholders.</p>

      <h2>Pre-Money Valuation</h2>
      <p>The agreed company valuation immediately before a new investment.</p>

      <h2>Post-Money Valuation</h2>
      <p><strong>Post-Money Valuation = Pre-Money Valuation + New Investment</strong></p>
      <p>Example: Pre-money = ₱10 million; Investment = ₱2 million; Post-money = ₱12 million.</p>
      <p>Investor ownership under a simple structure: ₱2m ÷ ₱12m = 16.67%. Actual transactions can differ due to option pools, securities, conversion terms, and other provisions.</p>
    </LessonLayout>
  )
}
