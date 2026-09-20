import LessonLayout from '../components/LessonLayout'

export default function DebtConceptsPart3() {
  return (
    <LessonLayout
      number="68"
      title="Debt Concepts & Strategies — Part 3"
      summary="20 debt structures and risk types — loan terms, grace periods, amortization, collateral, guarantors, DSCR, covenants, and the seven major debt risks."
    >
      <h2>Debt Concepts &amp; Strategies — Part 3</h2>
      <p>
        Debt is not simply "money borrowed." A sustainable debt strategy requires
        understanding how long the debt lasts, how it is repaid, what secures it, who is
        responsible for it, how much debt the business can support, and what risks could make
        repayment difficult.
      </p>
      <p>
        <strong>
          Loan Structure → Repayment → Security → Financial Capacity → Covenants → Risk
          Management
        </strong>
      </p>

      <hr />

      <h2>1. Loan Term</h2>
      <h3>Definition</h3>
      <p>
        The loan term is the length of time from when a loan begins until it is scheduled to
        be fully repaid.
      </p>
      <p>For example: ₱100,000 loan, 3-year term, monthly payments, fully paid after 36 scheduled payments.</p>

      <h3>How It Works</h3>
      <p>
        A longer term generally spreads repayment over more periods, which can reduce the
        required periodic payment. However, because the balance remains outstanding longer,
        the borrower may pay more total interest.
      </p>

      <h3>Example</h3>
      <p>Suppose a business borrows ₱300,000:</p>
      <ul>
        <li>12 months — higher periodic payment, shorter repayment</li>
        <li>36 months — moderate periodic payment</li>
        <li>60 months — lower periodic payment, longer repayment</li>
      </ul>
      <p>The exact payment depends on the interest rate, fees, and repayment structure.</p>

      <h3>How to Use It</h3>
      <p>Match the loan term with the economic life of what the loan finances.</p>
      <p>
        For example: equipment lasting 5 years → potentially appropriate to consider financing
        over a period related to its useful life.
      </p>
      <p>Avoid using a long-term loan simply because the monthly payment looks affordable.</p>

      <h3>Important Principle</h3>
      <blockquote>Match financing duration with the purpose and repayment capacity.</blockquote>

      <hr />

      <h2>2. Grace Period</h2>
      <h3>Definition</h3>
      <p>
        A grace period is a specified period during which certain loan payments or obligations
        are temporarily deferred or treated differently according to the loan contract.
      </p>
      <p>A grace period does not automatically mean free borrowing.</p>

      <h3>How It Works</h3>
      <pre>{`Loan begins
    ↓
3-month grace period
    ↓
Regular payments begin
    ↓
Monthly repayment
    ↓
Loan maturity`}</pre>
      <p>Depending on the contract, interest may:</p>
      <ul>
        <li>Continue accruing</li>
        <li>Be paid during the grace period</li>
        <li>Be added to the balance</li>
        <li>Be handled under another arrangement</li>
      </ul>

      <h3>Example</h3>
      <p>
        A business receives financing in January and has a 3-month payment grace period.
      </p>
      <p>
        It may not have to make regular principal payments until April, but interest could
        still accumulate.
      </p>

      <h3>Benefits</h3>
      <ul>
        <li>Gives a new project time to begin generating cash</li>
        <li>Helps manage temporary startup periods</li>
        <li>Can reduce immediate cash pressure</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Interest may continue accumulating</li>
        <li>Future payments may be higher</li>
        <li>The total cost may increase</li>
        <li>It can create a false impression that the debt is affordable</li>
      </ul>

      <h3>Principle</h3>
      <blockquote>
        Always determine what happens to interest and principal during the grace period.
      </blockquote>

      <hr />

      <h2>3. Amortization</h2>
      <h3>Definition</h3>
      <p>
        Amortization is the process of gradually paying down a loan balance through scheduled
        payments.
      </p>
      <p>A typical installment payment contains Principal + Interest.</p>

      <h3>Example</h3>
      <p>Imagine a monthly payment of ₱10,000:</p>
      <pre>{`₱10,000 payment
├── ₱7,000 principal
└── ₱3,000 interest`}</pre>
      <p>
        As the outstanding principal decreases, the interest portion may decrease as well,
        depending on the loan structure.
      </p>

      <h3>Amortization Schedule</h3>
      <p>A schedule can look like:</p>
      <ul>
        <li>Month 1 — ₱10,000 payment (₱7,000 principal, ₱3,000 interest) → ₱93,000</li>
        <li>Month 2 — ₱10,000 payment (₱7,200 principal, ₱2,800 interest) → ₱85,800</li>
        <li>Month 3 — ₱10,000 payment (₱7,400 principal, ₱2,600 interest) → ₱78,400</li>
      </ul>
      <p>These numbers are illustrative rather than a specific loan calculation.</p>

      <h3>Why It Matters</h3>
      <p>Amortization allows a business to understand:</p>
      <ul>
        <li>Payment requirements</li>
        <li>Interest costs</li>
        <li>Principal reduction</li>
        <li>Remaining balance</li>
        <li>Payoff date</li>
        <li>Future cash requirements</li>
      </ul>

      <hr />

      <h2>4. Collateral</h2>
      <h3>Definition</h3>
      <p>Collateral is an asset pledged to secure a loan.</p>
      <p>Examples can include:</p>
      <ul>
        <li>Property</li>
        <li>Equipment</li>
        <li>Vehicles</li>
        <li>Inventory</li>
        <li>Receivables</li>
        <li>Other assets accepted by the lender</li>
      </ul>
      <p>
        If the borrower defaults, the lender may have rights over the collateral according to
        the contract and applicable law.
      </p>

      <h3>Example</h3>
      <p>
        A business borrows ₱1,000,000 and pledges eligible business property as collateral.
      </p>
      <pre>{`Business
   │
   ├── Loan: ₱1,000,000
   │
   └── Collateral: qualifying asset`}</pre>

      <h3>Benefits</h3>
      <p>Collateral can potentially:</p>
      <ul>
        <li>Support access to financing</li>
        <li>Reduce lender risk</li>
        <li>Support larger borrowing</li>
        <li>Affect loan pricing or terms</li>
      </ul>

      <h3>Risks</h3>
      <p>
        The borrower may lose or have the asset enforced against if the loan defaults,
        depending on the agreement and applicable law.
      </p>

      <h3>Important Principle</h3>
      <blockquote>
        Never treat collateral as if it were free. It represents real economic risk.
      </blockquote>

      <hr />

      <h2>5. Guarantor</h2>
      <h3>Definition</h3>
      <p>
        A guarantor is a person or entity that agrees to fulfill specified obligations if the
        primary borrower fails to do so, subject to the guarantee's terms and applicable law.
      </p>

      <h3>Example</h3>
      <pre>{`Business
   │
   │ Borrower
   ↓
Lender

Guarantor
   │
   └── Provides contractual guarantee`}</pre>
      <p>
        If the borrower defaults, the lender may have rights against the guarantor according to
        the guarantee agreement.
      </p>

      <h3>Why It Matters</h3>
      <p>
        A guarantee can help a borrower obtain financing when the lender requires additional
        assurance.
      </p>

      <h3>Risk to Guarantor</h3>
      <p>
        The guarantor can potentially become financially responsible for the guaranteed
        obligation.
      </p>
      <p>
        Therefore, someone should not guarantee another person's or company's debt casually.
      </p>

      <hr />

      <h2>6. Co-Borrower</h2>
      <h3>Definition</h3>
      <p>
        A co-borrower is another party that jointly borrows money under the loan agreement.
      </p>
      <p>
        Unlike a guarantor, a co-borrower is generally a direct borrower under the agreement.
      </p>

      <h3>Comparison</h3>
      <ul>
        <li>Borrower — primary party borrowing</li>
        <li>Co-borrower — joint borrower</li>
        <li>Guarantor — provides contractual guarantee</li>
        <li>Collateral provider — provides pledged asset/security</li>
      </ul>

      <h3>Example</h3>
      <p>Two business owners jointly obtain financing.</p>
      <pre>{`Owner A ──┐
          ├── Joint loan → Lender
Owner B ──┘`}</pre>
      <p>
        The exact legal responsibility depends on the contract and applicable law.
      </p>

      <hr />

      <h2>7. Debt Service</h2>
      <h3>Definition</h3>
      <p>
        Debt service is the amount required to meet debt obligations during a specified
        period.
      </p>
      <p>It can include:</p>
      <ul>
        <li>Principal payments</li>
        <li>Interest payments</li>
        <li>Certain applicable debt-related charges</li>
      </ul>
      <p>For many financial analyses, debt service is measured annually.</p>

      <h3>Example</h3>
      <p>Annual debt obligations: Principal ₱240,000 + Interest ₱60,000.</p>
      <p>Simplified annual debt service: ₱240,000 + ₱60,000 = ₱300,000.</p>

      <h3>Why It Matters</h3>
      <pre>{`Operating cash generation
        ↓
Debt service
        ↓
Remaining cash
        ↓
Reinvestment / reserves / other needs`}</pre>

      <hr />

      <h2>8. Debt-Service Coverage</h2>
      <h3>Definition</h3>
      <p>
        Debt-service coverage measures how much cash flow or income available for debt service
        is available relative to required debt payments.
      </p>
      <p><strong>DSCR = Cash Available for Debt Service ÷ Debt Service</strong></p>

      <h3>Example</h3>
      <p>Cash available for debt service = ₱600,000, annual debt service = ₱400,000.</p>
      <p>DSCR = ₱600,000 ÷ ₱400,000 = 1.5×</p>
      <p>This means the measured cash flow is 1.5 times the required debt service.</p>

      <h3>Interpretation</h3>
      <ul>
        <li>Below 1.0× — cash flow is below debt-service requirement</li>
        <li>1.0× — exactly covers debt service</li>
        <li>Above 1.0× — cash flow exceeds debt service</li>
        <li>Higher — generally provides more measured coverage</li>
      </ul>
      <p>
        The appropriate minimum depends on the lender, industry, loan structure, and
        methodology used.
      </p>

      <h3>Important</h3>
      <p>
        Different lenders may define "cash available for debt service" differently. Always
        check the methodology.
      </p>

      <hr />

      <h2>9. Debt-to-Equity Ratio</h2>
      <h3>Definition</h3>
      <p>
        The debt-to-equity ratio (D/E) compares a business's debt to its owners' equity.
      </p>
      <p><strong>Debt-to-Equity Ratio = Total Debt ÷ Total Equity</strong></p>

      <h3>Example</h3>
      <p>Total debt = ₱2,000,000, equity = ₱1,000,000.</p>
      <p>D/E = 2,000,000 ÷ 1,000,000 = 2.0×</p>
      <p>
        This means the company has ₱2 of debt for every ₱1 of equity under this simplified
        calculation.
      </p>

      <h3>Why It Matters</h3>
      <p>
        It helps analyze financial leverage. Higher leverage can potentially increase
        financial risk because more fixed debt obligations must be serviced.
      </p>
      <p>But an appropriate ratio varies significantly by industry and business model.</p>

      <hr />

      <h2>10. Debt-to-Assets Ratio</h2>
      <h3>Definition</h3>
      <p>
        The debt-to-assets ratio measures how much of a company's assets are financed by debt.
      </p>
      <p><strong>Debt-to-Assets Ratio = (Total Debt ÷ Total Assets) × 100</strong></p>

      <h3>Example</h3>
      <p>Debt = ₱2 million, assets = ₱5 million.</p>
      <p>Debt-to-assets = ₱2M ÷ ₱5M × 100 = 40%</p>
      <p>This means 40% of assets are financed by debt under the stated definitions.</p>

      <h3>Comparison</h3>
      <ul>
        <li>Debt-to-equity — how much debt relative to owners' equity?</li>
        <li>Debt-to-assets — how much of the asset base is financed by debt?</li>
      </ul>

      <hr />

      <h2>11. Leverage Ratio</h2>
      <h3>Definition</h3>
      <p>
        A leverage ratio is a broad category of financial ratios used to measure the extent to
        which a business uses debt or other fixed financial obligations.
      </p>
      <p>There isn't only one leverage ratio. Examples include:</p>
      <ul>
        <li>Debt-to-equity</li>
        <li>Debt-to-assets</li>
        <li>Debt-to-capital</li>
        <li>Debt-to-EBITDA</li>
        <li>Other lender-specific measures</li>
      </ul>

      <h3>General Concept</h3>
      <pre>{`More debt
    ↓
More fixed obligations
    ↓
Greater sensitivity to cash-flow problems
    ↓
Potentially greater financial risk`}</pre>
      <p>
        Debt can also finance productive assets and growth, so leverage should be evaluated
        alongside profitability, liquidity, cash flow, and risk.
      </p>

      <hr />

      <h2>12. Interest Coverage</h2>
      <h3>Definition</h3>
      <p>
        Interest coverage measures how many times a company's earnings or cash-flow measure can
        cover its interest expense.
      </p>
      <p><strong>Interest Coverage = EBIT ÷ Interest Expense</strong></p>
      <p>Where EBIT = Earnings Before Interest and Taxes.</p>

      <h3>Example</h3>
      <p>EBIT = ₱500,000, interest expense = ₱100,000.</p>
      <p>Interest Coverage = ₱500,000 ÷ ₱100,000 = 5×</p>
      <p>The measured EBIT covers interest expense five times.</p>

      <h3>Why It Matters</h3>
      <p>
        It helps analyze the business's ability to meet interest obligations from operating
        earnings.
      </p>

      <h3>Important Distinction</h3>
      <ul>
        <li>Interest coverage — ability to cover interest</li>
        <li>DSCR — ability to cover broader debt-service requirements</li>
      </ul>

      <hr />

      <h2>13. Loan Covenant</h2>
      <h3>Definition</h3>
      <p>
        A loan covenant is a contractual condition that the borrower must satisfy during the
        loan.
      </p>
      <p>Covenants can establish financial or operational requirements.</p>

      <h3>Examples</h3>
      <p>A loan might require:</p>
      <ul>
        <li>Minimum DSCR</li>
        <li>Maximum debt-to-equity ratio</li>
        <li>Minimum liquidity</li>
        <li>Restrictions on additional borrowing</li>
        <li>Restrictions on asset sales</li>
        <li>Required financial reporting</li>
        <li>Insurance requirements</li>
        <li>Restrictions on dividends/distributions</li>
      </ul>

      <h3>Covenant Structure</h3>
      <pre>{`Loan agreement
      ↓
Covenants
      ↓
Borrower must comply
      ↓
Regular monitoring
      ↓
Compliant / potential breach`}</pre>

      <h3>Why It Matters</h3>
      <p>A business can be making payments and still violate a covenant.</p>
      <blockquote>
        Paying the loan is not necessarily the same as complying with the entire loan
        agreement.
      </blockquote>
      <p>Always understand the consequences of a covenant breach under the contract.</p>

      <hr />

      <h2>14. Default Risk</h2>
      <h3>Definition</h3>
      <p>
        Default risk is the possibility that a borrower will fail to meet contractual debt
        obligations.
      </p>
      <p>Potential causes include:</p>
      <ul>
        <li>Insufficient cash flow</li>
        <li>Falling sales</li>
        <li>Unexpected expenses</li>
        <li>Customer nonpayment</li>
        <li>Poor financial planning</li>
        <li>Excessive borrowing</li>
        <li>Economic disruption</li>
        <li>Operational failure</li>
      </ul>

      <h3>Risk Chain</h3>
      <pre>{`Weak cash flow
      ↓
Missed payment
      ↓
Default
      ↓
Penalties / enforcement / restructuring
      ↓
Potential asset or business consequences`}</pre>

      <h3>Reducing Default Risk</h3>
      <ul>
        <li>Forecast cash flow</li>
        <li>Maintain reserves</li>
        <li>Avoid excessive debt</li>
        <li>Match debt to repayment source</li>
        <li>Monitor DSCR</li>
        <li>Monitor upcoming maturities</li>
        <li>Communicate with lenders early when problems arise</li>
      </ul>

      <hr />

      <h2>15. Credit Risk</h2>
      <h3>Definition</h3>
      <p>
        Credit risk is the possibility of financial loss resulting from a counterparty failing
        to meet its contractual financial obligations.
      </p>
      <p>For a lender, the borrower is the primary credit-risk exposure.</p>
      <p>For a business, credit risk can also arise from:</p>
      <ul>
        <li>Customers buying on credit</li>
        <li>Distributors</li>
        <li>Business partners</li>
        <li>Suppliers providing or receiving credit</li>
        <li>Other counterparties</li>
      </ul>

      <h3>Example</h3>
      <p>
        An Xmarket seller sells ₱100,000 worth of goods to a business customer on 60-day
        credit. The customer fails to pay. The seller faces customer credit risk.
      </p>

      <h3>Managing It</h3>
      <p>Businesses can use:</p>
      <ul>
        <li>Credit limits</li>
        <li>Payment terms</li>
        <li>Deposits</li>
        <li>Milestone payments</li>
        <li>Credit checks where appropriate</li>
        <li>Receivables monitoring</li>
        <li>Diversification of customers</li>
      </ul>

      <hr />

      <h2>16. Liquidity Risk</h2>
      <h3>Definition</h3>
      <p>
        Liquidity risk is the possibility that a business cannot meet its short-term financial
        obligations when they become due, even if it owns valuable assets.
      </p>

      <h3>Example</h3>
      <p>A company owns ₱1,000,000 of equipment and ₱50,000 cash.</p>
      <p>It must pay ₱200,000 supplier bill next week.</p>
      <p>
        The equipment may be valuable, but it may not be quickly convertible into enough cash.
        Therefore, the business can experience liquidity pressure.
      </p>

      <h3>Key Principle</h3>
      <blockquote>Profitability and liquidity are different.</blockquote>
      <p>A profitable business can still have a cash shortage.</p>

      <hr />

      <h2>17. Refinancing Risk</h2>
      <h3>Definition</h3>
      <p>
        Refinancing risk is the possibility that a borrower cannot refinance existing debt on
        acceptable terms when the debt matures or needs to be replaced.
      </p>

      <h3>Example</h3>
      <pre>{`₱5,000,000 loan
      ↓
Matures in 3 years
      ↓
Business expects to refinance
      ↓
Interest rates / lender conditions change
      ↓
Refinancing becomes expensive or unavailable`}</pre>

      <h3>Causes</h3>
      <ul>
        <li>Higher interest rates</li>
        <li>Lower business cash flow</li>
        <li>Lower collateral value</li>
        <li>Weaker credit profile</li>
        <li>Tighter lending conditions</li>
        <li>Economic downturn</li>
        <li>Short-term financing used for long-term needs</li>
      </ul>

      <h3>Reducing Risk</h3>
      <ul>
        <li>Maintain liquidity</li>
        <li>Avoid excessive maturity concentration</li>
        <li>Monitor loan maturity dates</li>
        <li>Build lender relationships</li>
        <li>Maintain financial records</li>
        <li>Reduce leverage when appropriate</li>
        <li>Plan refinancing well before maturity</li>
      </ul>

      <hr />

      <h2>18. Interest-Rate Risk</h2>
      <h3>Definition</h3>
      <p>
        Interest-rate risk is the possibility that changes in interest rates will affect
        borrowing costs, investment values, or financial performance.
      </p>
      <p>For borrowers, the risk is particularly relevant to variable-rate debt.</p>

      <h3>Example</h3>
      <pre>{`A business has a variable-rate loan.

Interest rate rises
        ↓
Interest expense rises
        ↓
Debt service may increase
        ↓
Cash flow becomes tighter`}</pre>

      <h3>Fixed vs Variable</h3>
      <ul>
        <li>Fixed — greater payment predictability</li>
        <li>Variable — payment/cost can change</li>
        <li>Fixed — less exposure to rate increases during fixed period</li>
        <li>Variable — greater exposure to rate increases</li>
        <li>Fixed — may not benefit from rate decreases</li>
        <li>Variable — may benefit if rates decrease</li>
        <li>Fixed — easier budgeting</li>
        <li>Variable — requires rate monitoring</li>
      </ul>

      <hr />

      <h2>19. Collateral Risk</h2>
      <h3>Definition</h3>
      <p>
        Collateral risk is the possibility that pledged assets lose value, become difficult to
        sell, become damaged, or otherwise fail to provide the expected security for a loan.
      </p>

      <h3>Example</h3>
      <p>A company pledges equipment worth ₱2 million.</p>
      <p>Later, the equipment becomes outdated and resale value falls to ₱1 million.</p>
      <p>
        The lender's security position may be weaker than originally expected.
      </p>

      <h3>Sources of Collateral Risk</h3>
      <ul>
        <li>Depreciation</li>
        <li>Market-price changes</li>
        <li>Obsolescence</li>
        <li>Damage</li>
        <li>Theft</li>
        <li>Illiquidity</li>
        <li>Concentration in one asset</li>
        <li>Legal/title problems</li>
      </ul>

      <h3>Principle</h3>
      <blockquote>Collateral value should not be treated as guaranteed wealth.</blockquote>

      <hr />

      <h2>20. Currency Risk</h2>
      <h3>Definition</h3>
      <p>
        Currency risk, or foreign-exchange risk, is the possibility that exchange-rate changes
        affect the cost of debt, repayment amount, revenue, or profitability.
      </p>
      <p>
        This matters when debt is denominated in a currency different from the currency
        generating repayment cash flows.
      </p>

      <h3>Example</h3>
      <p>
        A Philippine business earns mostly pesos but borrows US$100,000. If the peso weakens
        against the US dollar:
      </p>
      <pre>{`Dollar debt
     ↓
USD/PHP exchange rate rises
     ↓
More pesos required to repay USD obligation
     ↓
Higher peso-equivalent debt burden`}</pre>

      <h3>Simplified Example</h3>
      <p>Suppose US$100,000 is owed.</p>
      <ul>
        <li>At ₱55/USD → ₱5,500,000</li>
        <li>At ₱60/USD → ₱6,000,000</li>
      </ul>
      <p>The peso-equivalent obligation increases by ₱500,000.</p>
      <p>This is an illustrative calculation, not a forecast of exchange rates.</p>

      <h3>Managing Currency Risk</h3>
      <p>Possible approaches include:</p>
      <ul>
        <li>Borrowing in the currency of expected revenue</li>
        <li>Matching currency inflows and outflows</li>
        <li>Maintaining currency reserves</li>
        <li>Using appropriate hedging instruments</li>
        <li>Monitoring exchange-rate exposure</li>
      </ul>
      <p>
        Hedging itself has costs and contractual risks and should be understood before use.
      </p>

      <hr />

      <h2>Debt Capacity Framework</h2>
      <pre>{`DEBT
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
     Loan Structure         Security
          │                     │
   ┌──────┼──────┐        ┌─────┼─────┐
   ↓      ↓      ↓        ↓     ↓     ↓
 Term   Grace  Amort.   Collateral Guarantor
 Period  Period         Co-borrower
          │
          ↓
     Debt Service
          │
     ┌────┴─────┐
     ↓          ↓
   DSCR    Interest Coverage
     │          │
     └────┬─────┘
          ↓
   Debt Capacity
          │
   ┌──────┼────────┐
   ↓      ↓        ↓
D/E    Debt/Assets  Leverage
          │
          ↓
       Covenants
          │
          ↓
         Risks
          │
 ┌────────┼───────────────┐
 ↓        ↓       ↓       ↓
Default  Liquidity Refinancing Interest
Risk     Risk      Risk     Rate Risk
          │
          └───────┬───────┐
                  ↓       ↓
              Collateral Currency
                 Risk       Risk`}</pre>

      <hr />

      <h2>Debt Risk Matrix</h2>
      <ul>
        <li>Default risk — Can the borrower meet obligations? (missed payment)</li>
        <li>Credit risk — Will a counterparty pay? (customer doesn't pay invoice)</li>
        <li>Liquidity risk — Is enough cash available at the right time? (large bill due before collections)</li>
        <li>Refinancing risk — Can maturing debt be replaced? (loan maturity arrives)</li>
        <li>Interest-rate risk — Can borrowing costs rise? (variable rate increases)</li>
        <li>Collateral risk — Could pledged assets lose value? (equipment becomes obsolete)</li>
        <li>Currency risk — Could exchange rates increase the debt burden? (USD debt, PHP revenue)</li>
      </ul>

      <hr />

      <h2>Key Financial Formulas</h2>
      <p><strong>D/E = Total Debt ÷ Total Equity</strong></p>
      <p><strong>Debt-to-Assets = (Total Debt ÷ Total Assets) × 100</strong></p>
      <p><strong>DSCR = Cash Available for Debt Service ÷ Debt Service</strong></p>
      <p><strong>Interest Coverage = EBIT ÷ Interest Expense</strong></p>
      <p>
        <strong>
          Debt Service ≈ Principal Payments + Interest Payments + Applicable Debt Charges
        </strong>
      </p>
      <p>
        The exact definition can differ between financial statements, lenders, and loan
        agreements.
      </p>

      <hr />

      <h2>Example: Complete Debt Analysis</h2>
      <p>Suppose a technology business has:</p>
      <pre>{`Total debt: ₱2,000,000
Total assets: ₱5,000,000
Equity: ₱3,000,000
Cash available for debt service: ₱600,000/year
Annual debt service: ₱400,000
EBIT: ₱500,000
Interest expense: ₱100,000`}</pre>
      <ol>
        <li>Debt-to-Equity → ₱2M ÷ ₱3M = 0.67×</li>
        <li>Debt-to-Assets → ₱2M ÷ ₱5M × 100 = 40%</li>
        <li>DSCR → ₱600K ÷ ₱400K = 1.5×</li>
        <li>Interest Coverage → ₱500K ÷ ₱100K = 5×</li>
      </ol>
      <p>These ratios describe different aspects of the same business:</p>
      <ul>
        <li>Debt level → D/E + Debt-to-Assets → financial leverage</li>
        <li>Cash-flow capacity → DSCR → debt-service coverage</li>
        <li>Operating earnings → Interest Coverage → interest-payment capacity</li>
      </ul>
      <p>
        No single ratio should be used by itself to determine whether borrowing is
        appropriate.
      </p>

      <hr />

      <h2>Loan Structure vs Financial Risk</h2>
      <ul>
        <li>How long do I have to repay? → Loan term</li>
        <li>Can payments be temporarily deferred? → Grace period</li>
        <li>How does the balance decline? → Amortization</li>
        <li>What asset secures the loan? → Collateral</li>
        <li>Who guarantees the obligation? → Guarantor</li>
        <li>Who jointly owes the debt? → Co-borrower</li>
        <li>How much must be paid? → Debt service</li>
        <li>Can cash flow cover it? → DSCR</li>
        <li>How leveraged is the business? → D/E, debt-to-assets</li>
        <li>Can earnings cover interest? → Interest coverage</li>
        <li>What conditions must be maintained? → Covenant</li>
        <li>What could prevent repayment? → Default risk</li>
        <li>Could a counterparty fail to pay? → Credit risk</li>
        <li>Could the business run out of cash? → Liquidity risk</li>
        <li>Could refinancing become difficult? → Refinancing risk</li>
        <li>Could rates increase? → Interest-rate risk</li>
        <li>Could security lose value? → Collateral risk</li>
        <li>Could exchange rates increase the burden? → Currency risk</li>
      </ul>

      <hr />

      <h2>Debt Sustainability System</h2>

      <h3>1. Define the Purpose</h3>
      <p>Why borrow? Working capital? Equipment? Expansion? Order fulfillment? Temporary cash gap?</p>
      <p>Debt should have a clear economic purpose.</p>

      <h3>2. Match the Structure</h3>
      <pre>{`Purpose
  ↓
Amount
  ↓
Term
  ↓
Repayment structure
  ↓
Interest structure
  ↓
Security`}</pre>

      <h3>3. Test Repayment Capacity</h3>
      <p>Analyze:</p>
      <ul>
        <li>Cash flow</li>
        <li>DSCR</li>
        <li>Interest coverage</li>
        <li>Liquidity</li>
        <li>Existing debt</li>
        <li>Expected future obligations</li>
      </ul>

      <h3>4. Analyze Leverage</h3>
      <p>Monitor debt-to-equity, debt-to-assets, and other relevant leverage ratios.</p>

      <h3>5. Review Contractual Restrictions</h3>
      <p>Check:</p>
      <ul>
        <li>Covenants</li>
        <li>Collateral requirements</li>
        <li>Guarantees</li>
        <li>Reporting requirements</li>
        <li>Additional borrowing restrictions</li>
        <li>Default provisions</li>
        <li>Prepayment provisions</li>
        <li>Renewal/maturity conditions</li>
      </ul>

      <h3>6. Stress-Test the Debt</h3>
      <p>Ask what happens if:</p>
      <ul>
        <li>Sales decrease</li>
        <li>Costs increase</li>
        <li>Interest rates rise</li>
        <li>Currency moves unfavorably</li>
        <li>Customer payments are delayed</li>
        <li>Collateral value decreases</li>
        <li>Refinancing becomes expensive</li>
      </ul>
      <p>
        A debt plan should remain manageable under reasonably adverse scenarios, not only
        under ideal assumptions.
      </p>

      <h3>7. Monitor Continuously</h3>
      <p>Debt management does not end after receiving the money.</p>
      <p>
        Monitor: Cash → Debt Service → DSCR → Interest → Covenants → Maturity → Risks →
        Reserves
      </p>

      <hr />

      <h2>Common Mistakes</h2>

      <h3>Mistake 1: Choosing a Loan Based Only on Monthly Payment</h3>
      <p>A low monthly payment can result from a longer term.</p>
      <p>Always examine total repayment + interest + fees + term.</p>

      <h3>Mistake 2: Ignoring the Maturity Date</h3>
      <p>
        A business may appear comfortable until a large balloon payment or refinancing
        requirement arrives.
      </p>

      <h3>Mistake 3: Ignoring Covenants</h3>
      <p>
        A company can satisfy scheduled payments while violating another contractual
        requirement.
      </p>

      <h3>Mistake 4: Treating Collateral as a Substitute for Repayment Capacity</h3>
      <p>
        Collateral protects the lender; it does not make an economically weak project
        automatically sustainable.
      </p>

      <h3>Mistake 5: Ignoring Currency Exposure</h3>
      <p>
        Foreign-currency debt can create additional obligations even when the
        foreign-currency loan balance itself has not changed.
      </p>

      <h3>Mistake 6: Confusing Profit With Debt-Service Capacity</h3>
      <p>
        Accounting profit does not necessarily equal cash available for repayment.
      </p>

      <h3>Mistake 7: Looking at One Ratio</h3>
      <p>
        A healthy-looking DSCR does not automatically mean leverage, liquidity, refinancing,
        interest-rate, or collateral risks are acceptable.
      </p>

      <hr />

      <h2>Debt Decision Checklist</h2>
      <p>Before taking on debt, evaluate:</p>
      <ul>
        <li>Clear purpose</li>
        <li>Amount required</li>
        <li>Loan term</li>
        <li>Grace period</li>
        <li>Amortization</li>
        <li>Interest rate</li>
        <li>Fixed or variable rate</li>
        <li>Total financing cost</li>
        <li>Collateral</li>
        <li>Guarantor/co-borrower obligations</li>
        <li>Debt-service requirement</li>
        <li>DSCR</li>
        <li>Interest coverage</li>
        <li>Debt-to-equity</li>
        <li>Debt-to-assets</li>
        <li>Overall leverage</li>
        <li>Loan covenants</li>
        <li>Default provisions</li>
        <li>Liquidity risk</li>
        <li>Refinancing risk</li>
        <li>Interest-rate risk</li>
        <li>Collateral risk</li>
        <li>Currency risk</li>
        <li>Downside scenario</li>
        <li>Cash-flow forecast</li>
        <li>Repayment source</li>
        <li>Maturity plan</li>
      </ul>

      <hr />

      <h2>Core Debt Principle</h2>
      <p>
        <strong>
          Purpose → Structure → Repayment Capacity → Leverage → Contract → Risk → Monitoring
        </strong>
      </p>
      <p>Or, as a complete system:</p>
      <p>
        Borrow only for a defined purpose → match the loan term and amortization to the purpose
        → understand collateral and personal/third-party obligations → measure debt-service
        capacity → monitor leverage and interest coverage → comply with covenants →
        stress-test default, liquidity, refinancing, interest-rate, collateral, and currency
        risks → maintain liquidity → monitor continuously → repay according to plan.
      </p>
    </LessonLayout>
  )
}
