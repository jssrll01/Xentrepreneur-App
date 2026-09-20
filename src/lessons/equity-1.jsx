import LessonLayout from '../components/LessonLayout'

export default function Equity1() {
  return (
    <LessonLayout
      number="174"
      title="Equity — Part 1"
      summary="12 owner and shareholder equity categories — owner's equity, shareholders' equity, common and preferred stock, paid-in and additional paid-in capital, capital contributions, owner contributions, retained earnings, accumulated profits and losses."
    >
      <h2>Equity — Part 1</h2>

      <h2>Owner's Equity</h2>
      <p>The owner's residual interest in a business after liabilities are deducted from assets.</p>
      <p><strong>Owner's Equity = Assets − Liabilities</strong></p>
      <p>Common in sole proprietorships.</p>

      <h2>Shareholders' Equity</h2>
      <p>The residual interest attributable to shareholders after liabilities.</p>

      <h2>Common Stock</h2>
      <p>Shares representing ordinary ownership interests in a corporation.</p>
      <p>Depending on the corporate structure, common shareholders may have: voting rights, dividend rights, and residual economic rights.</p>

      <h2>Preferred Stock</h2>
      <p>Shares with specified preferential rights, often involving dividends or liquidation. Rights depend on the terms of issuance.</p>

      <h2>Paid-In Capital</h2>
      <p>Capital contributed by owners/shareholders in exchange for ownership interests.</p>

      <h2>Additional Paid-In Capital</h2>
      <p>Amounts contributed by shareholders above the stated/par value of shares, where applicable.</p>

      <h2>Capital Contributions</h2>
      <p>Resources contributed to a business by its owners.</p>
      <p>Example: Founder contributes ₱500,000 cash. The company receives cash and records the corresponding equity according to its structure.</p>

      <h2>Owner Contributions</h2>
      <p>Capital invested by an owner into the business.</p>

      <h2>Retained Earnings</h2>
      <p>Cumulative earnings retained in the business rather than distributed to owners, subject to accounting definitions and adjustments.</p>
      <p><strong>Ending Retained Earnings = Beginning Retained Earnings + Net Income − Dividends</strong></p>

      <h2>Accumulated Profits</h2>
      <p>Cumulative profits retained in the business.</p>

      <h2>Accumulated Losses</h2>
      <p>Cumulative losses that reduce equity.</p>

      <h3>Equity Flow</h3>
      <pre>{`Owner / Investor Contributions
            +
Profits
            −
Losses
            −
Distributions
            =
Equity`}</pre>
    </LessonLayout>
  )
}
