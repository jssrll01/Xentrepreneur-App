import LessonLayout from '../components/LessonLayout'

export default function DebtConceptsPart2() {
  return (
    <LessonLayout
      number="67"
      title="Debt Concepts & Strategies — Part 2"
      summary="17 debt structures and cost mechanics — secured, unsecured, bridge, refinancing, consolidation, restructuring, principal, interest, and effective rates."
    >
      <h2>Debt Concepts &amp; Strategies — Part 2</h2>
      <p>
        Part 2 focuses on how debt is secured, how repayment is structured, why businesses
        borrow, how existing debt can be modified, and how the actual cost of borrowing is
        measured.
      </p>
      <p>
        <strong>
          Debt Cost + Repayment Structure + Risk + Purpose = Financing Decision
        </strong>
      </p>

      <hr />

      <h2>1. Secured Loan</h2>
      <h3>Definition</h3>
      <p>
        A secured loan is a loan backed by specified collateral that the lender may have
        rights over if the borrower defaults, subject to the loan agreement and applicable
        law.
      </p>
      <p>Possible collateral includes:</p>
      <ul>
        <li>Real estate</li>
        <li>Vehicles</li>
        <li>Equipment</li>
        <li>Inventory</li>
        <li>Receivables</li>
        <li>Other eligible assets</li>
      </ul>

      <h3>How It Works</h3>
      <pre>{`BUSINESS
   ↓
BORROWS MONEY
   ↓
PLEDGES COLLATERAL
   ↓
RECEIVES FUNDS
   ↓
MAKES PAYMENTS
   ↓
LOAN PAID
   ↓
COLLATERAL RELEASED`}</pre>
      <p>
        If the borrower defaults, the lender's rights depend on the contract and applicable
        law.
      </p>

      <h3>Example</h3>
      <p>
        A company wants to borrow ₱1,000,000 and offers eligible equipment as collateral.
      </p>
      <p>The lender evaluates:</p>
      <ul>
        <li>Business finances</li>
        <li>Borrower creditworthiness</li>
        <li>Equipment value</li>
        <li>Loan amount</li>
        <li>Repayment capacity</li>
        <li>Collateral terms</li>
      </ul>

      <h3>Advantages</h3>
      <ul>
        <li>May provide access to larger financing</li>
        <li>
          May offer lower pricing than comparable unsecured borrowing in some circumstances
        </li>
        <li>Can use existing business assets to support financing</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Collateral can be at risk if the borrower defaults</li>
        <li>Asset valuation can change</li>
        <li>Documentation and legal requirements can be more complex</li>
      </ul>

      <h3>Principle</h3>
      <blockquote>
        Never pledge an important business asset without understanding the consequences of
        default.
      </blockquote>

      <hr />

      <h2>2. Unsecured Loan</h2>
      <h3>Definition</h3>
      <p>
        An unsecured loan is a loan that does not rely on specific pledged collateral as
        security.
      </p>
      <p>The lender instead relies more heavily on factors such as:</p>
      <ul>
        <li>Credit history</li>
        <li>Income or cash flow</li>
        <li>Business performance</li>
        <li>Financial statements</li>
        <li>Business age</li>
        <li>Guarantees where applicable</li>
        <li>Overall creditworthiness</li>
      </ul>
      <p>
        "Unsecured" does not necessarily mean "risk-free for the borrower"; the borrower
        remains obligated to repay, and the agreement and law determine remedies for default.
      </p>

      <h3>Secured vs Unsecured</h3>
      <ul>
        <li>Secured — specific collateral supports the loan</li>
        <li>Unsecured — no specific pledged collateral</li>
        <li>Secured — asset may be at risk upon default</li>
        <li>Unsecured — no specific collateral attached</li>
        <li>Secured — lender has additional security</li>
        <li>Unsecured — lender relies more on creditworthiness</li>
        <li>Secured — may support larger borrowing in some cases</li>
        <li>Unsecured — may have stricter qualification</li>
        <li>Secured — terms vary by lender</li>
        <li>Unsecured — terms vary by lender</li>
      </ul>

      <h3>Principle</h3>
      <blockquote>The absence of collateral does not remove the repayment obligation.</blockquote>

      <hr />

      <h2>3. Installment Loan</h2>
      <h3>Definition</h3>
      <p>
        An installment loan is repaid through scheduled payments over a defined period.
      </p>
      <p>A payment can contain:</p>
      <ul>
        <li>Principal</li>
        <li>Interest</li>
        <li>Applicable fees</li>
      </ul>

      <h3>Example</h3>
      <p>A business borrows ₱600,000 and agrees to repay it through monthly installments.</p>
      <pre>{`LOAN
₱600,000
   ↓
MONTH 1
Payment
   ↓
MONTH 2
Payment
   ↓
MONTH 3
Payment
   ↓
...
   ↓
FINAL PAYMENT
   ↓
₱0`}</pre>

      <h3>Amortization</h3>
      <p>
        With an amortizing loan, each payment generally reduces the outstanding balance,
        although the exact allocation between principal and interest depends on the repayment
        structure.
      </p>

      <h3>Principle</h3>
      <blockquote>
        Understand how much of each payment reduces principal versus paying financing costs.
      </blockquote>

      <hr />

      <h2>4. Bridge Financing</h2>
      <h3>Definition</h3>
      <p>
        Bridge financing is temporary financing intended to cover a funding gap until a more
        permanent source of funds becomes available.
      </p>
      <pre>{`CURRENT NEED
     ↓
BRIDGE FINANCING
     ↓
EXPECTED FUNDING EVENT
     ↓
REPAY BRIDGE`}</pre>

      <h3>Example</h3>
      <p>
        A business expects to receive ₱2,000,000 from a customer or investment transaction in
        60 days but needs ₱500,000 now to complete an important project.
      </p>
      <p>
        Bridge financing could potentially cover the temporary gap if the expected repayment
        source is sufficiently reliable.
      </p>

      <h3>Major Risk</h3>
      <p>The bridge depends on the future event occurring.</p>
      <pre>{`Expected Funding
       ↓
Delayed
       ↓
Bridge Still Outstanding
       ↓
Liquidity Pressure`}</pre>

      <h3>Principle</h3>
      <blockquote>
        Bridge financing should have a clearly identified and realistic repayment event.
      </blockquote>

      <hr />

      <h2>5. Startup Financing</h2>
      <h3>Definition</h3>
      <p>Startup financing is capital used to establish and develop a new business.</p>
      <p>It can come from:</p>
      <ul>
        <li>Founder capital</li>
        <li>Loans</li>
        <li>Investors</li>
        <li>Grants</li>
        <li>Crowdfunding</li>
        <li>Accelerators</li>
        <li>Other financing arrangements</li>
      </ul>
      <p>Not all startup financing is debt.</p>

      <h3>Debt-Based Startup Financing</h3>
      <p>A startup may borrow to fund:</p>
      <ul>
        <li>Equipment</li>
        <li>Inventory</li>
        <li>Software</li>
        <li>Marketing</li>
        <li>Initial operations</li>
      </ul>
      <p>
        But startups often have limited operating history, making debt qualification and
        repayment capacity more challenging.
      </p>

      <h3>Startup Financing Model</h3>
      <pre>{`CAPITAL
  ↓
PRODUCT
  ↓
MARKET VALIDATION
  ↓
CUSTOMERS
  ↓
REVENUE
  ↓
CASH FLOW
  ↓
REPAYMENT / REINVESTMENT`}</pre>

      <h3>Principle</h3>
      <blockquote>
        Startup debt should not substitute indefinitely for proof that the business can
        generate sustainable economics.
      </blockquote>

      <hr />

      <h2>6. Expansion Financing</h2>
      <h3>Definition</h3>
      <p>
        Expansion financing provides capital for increasing the scale or capacity of an
        existing business.
      </p>
      <p>Potential uses:</p>
      <ul>
        <li>New location</li>
        <li>More equipment</li>
        <li>Larger inventory</li>
        <li>More employees</li>
        <li>New technology</li>
        <li>Marketing expansion</li>
        <li>Production capacity</li>
        <li>Geographic expansion</li>
      </ul>

      <h3>Example</h3>
      <p>
        A marketplace business has proven demand and wants to expand its warehouse capacity.
      </p>
      <pre>{`Equipment       ₱500K
Inventory       ₱700K
Technology      ₱200K
Setup           ₱100K
---------------------
Total           ₱1.5M`}</pre>
      <p>Financing could potentially support part of this investment.</p>

      <h3>Expansion Test</h3>
      <p>
        <strong>
          Expected Incremental Contribution &gt; Incremental Financing + Operating Costs
        </strong>
      </p>
      <p>The business should also consider downside scenarios.</p>

      <h3>Principle</h3>
      <blockquote>
        Expansion financing should follow demonstrated demand and sufficient operational
        capacity rather than assuming that more capacity automatically creates more sales.
      </blockquote>

      <hr />

      <h2>7. Emergency Financing</h2>
      <h3>Definition</h3>
      <p>
        Emergency financing is financing obtained to address an unexpected and urgent
        financial need.
      </p>
      <p>Examples:</p>
      <ul>
        <li>Critical equipment failure</li>
        <li>Major operational disruption</li>
        <li>Emergency inventory requirement</li>
        <li>Unexpected repair</li>
        <li>Temporary severe cash-flow gap</li>
      </ul>

      <h3>Emergency Financing Cycle</h3>
      <pre>{`EMERGENCY
   ↓
ASSESS DAMAGE
   ↓
CALCULATE REQUIRED CASH
   ↓
IDENTIFY AVAILABLE OPTIONS
   ↓
COMPARE COSTS
   ↓
FINANCE IF NECESSARY
   ↓
STABILIZE
   ↓
REBUILD RESERVES`}</pre>

      <h3>Important Warning</h3>
      <p>Emergency financing may be expensive.</p>
      <p>
        <strong>Emergency Financing Cost</strong> should be evaluated against
        <strong>Cost of Not Acting</strong>. But urgency should not eliminate basic due
        diligence.
      </p>

      <h3>Principle</h3>
      <blockquote>
        Emergency borrowing should stabilize a business, not become a permanent substitute for
        reserves and sound financial planning.
      </blockquote>

      <hr />

      <h2>8. Debt Refinancing</h2>
      <h3>Definition</h3>
      <p>
        Debt refinancing means replacing an existing debt arrangement with new financing,
        usually to change one or more terms.
      </p>
      <p>Possible reasons:</p>
      <ul>
        <li>Lower financing cost</li>
        <li>Longer repayment period</li>
        <li>Different interest structure</li>
        <li>Improved cash-flow timing</li>
        <li>Consolidation</li>
        <li>Changing lenders</li>
        <li>Removing or changing certain terms</li>
      </ul>

      <h3>Example</h3>
      <p>Existing debt: ₱1,000,000. New financing: ₱1,000,000.</p>
      <p>The new loan may have different:</p>
      <ul>
        <li>Interest rate</li>
        <li>Term</li>
        <li>Fees</li>
        <li>Collateral requirements</li>
        <li>Repayment schedule</li>
      </ul>

      <h3>Refinancing Test</h3>
      <p>Don't compare only interest rates.</p>
      <p>
        Compare <strong>New Total Financing Cost</strong> against
        <strong>Remaining Cost of Existing Debt</strong>, including relevant fees, penalties,
        and other costs.
      </p>

      <h3>Principle</h3>
      <blockquote>
        Refinancing is beneficial only if the new structure creates sufficient economic or
        risk-management value to justify its costs and conditions.
      </blockquote>

      <hr />

      <h2>9. Debt Consolidation</h2>
      <h3>Definition</h3>
      <p>Debt consolidation combines multiple debts into a single financing arrangement.</p>
      <pre>{`Loan A ──┐
Loan B ──┼──→ Consolidation Loan
Loan C ──┘`}</pre>
      <p>Instead of managing three separate debts, the business may manage one.</p>

      <h3>Potential Benefits</h3>
      <ul>
        <li>One payment</li>
        <li>Simplified administration</li>
        <li>Potentially different repayment schedule</li>
        <li>Potentially different financing cost</li>
      </ul>

      <h3>Risks</h3>
      <p>Consolidation doesn't automatically reduce total cost.</p>
      <p>A longer repayment period could produce:</p>
      <pre>{`Lower Monthly Payment
        ↓
Longer Repayment
        ↓
Potentially Higher Total Interest`}</pre>

      <h3>Principle</h3>
      <blockquote>
        Evaluate consolidation using total cost and repayment risk, not simply the number of
        monthly payments.
      </blockquote>

      <hr />

      <h2>10. Loan Restructuring</h2>
      <h3>Definition</h3>
      <p>Loan restructuring means changing the terms of an existing loan.</p>
      <p>Depending on the lender and situation, changes may involve:</p>
      <ul>
        <li>Payment schedule</li>
        <li>Maturity</li>
        <li>Interest terms</li>
        <li>Payment frequency</li>
        <li>Temporary payment arrangements</li>
        <li>Covenants</li>
        <li>Other contractual conditions</li>
      </ul>

      <h3>Example</h3>
      <p>
        A business experiences a temporary disruption and cannot maintain the original payment
        schedule. It may negotiate with its lender for modified terms.
      </p>
      <pre>{`ORIGINAL LOAN
      ↓
FINANCIAL PROBLEM
      ↓
DISCUSSION WITH LENDER
      ↓
RESTRUCTURING PROPOSAL
      ↓
NEW AGREED TERMS
      ↓
MONITOR`}</pre>

      <h3>Important Distinction</h3>
      <p>
        Refinancing often involves replacing existing financing with new financing.
        Restructuring generally changes the terms of an existing obligation.
      </p>
      <p>The exact terminology can vary by lender and jurisdiction.</p>

      <h3>Principle</h3>
      <blockquote>
        Address repayment problems early rather than waiting until a missed payment becomes a
        larger problem.
      </blockquote>

      <hr />

      <h2>11. Loan Repayment Schedule</h2>
      <h3>Definition</h3>
      <p>
        A loan repayment schedule shows when payments are due and how those payments affect:
      </p>
      <ul>
        <li>Principal</li>
        <li>Interest</li>
        <li>Remaining balance</li>
        <li>Maturity</li>
      </ul>

      <h3>Simplified Example</h3>
      <p>Suppose principal = ₱100,000. A hypothetical repayment schedule could look like:</p>
      <ul>
        <li>Start — ₱100,000 remaining</li>
        <li>Period 1 — ₱10,500 payment (₱8,500 principal, ₱2,000 interest) → ₱91,500 remaining</li>
        <li>Period 2 — ₱10,330 payment (₱8,500 principal, ₱1,830 interest) → ₱83,000 remaining</li>
        <li>Period 3 — ₱10,160 payment (₱8,500 principal, ₱1,660 interest) → ₱74,500 remaining</li>
      </ul>
      <p>This is illustrative rather than a quotation for any particular loan.</p>

      <h3>Why It Matters</h3>
      <pre>{`WHEN CASH IS NEEDED
        ↓
MONTHLY / PERIODIC PAYMENT
        ↓
INTEREST EXPENSE
        ↓
PRINCIPAL REDUCTION
        ↓
FINAL MATURITY`}</pre>

      <h3>Principle</h3>
      <blockquote>
        A business should know its future debt obligations before committing to the financing.
      </blockquote>

      <hr />

      <h2>12. Principal</h2>
      <h3>Definition</h3>
      <p>
        Principal is the original amount borrowed or the outstanding amount of the debt
        excluding interest and other charges.
      </p>
      <p>Example: Business borrows ₱500,000. Initial principal: ₱500,000.</p>
      <p>
        If it repays ₱100,000 of principal, remaining principal becomes ₱500,000 − ₱100,000 =
        ₱400,000.
      </p>

      <h3>Principal vs Payment</h3>
      <pre>{`TOTAL PAYMENT
      ↓
 ┌────┴────┐
 ↓         ↓
INTEREST  PRINCIPAL
           ↓
     REDUCES BALANCE`}</pre>

      <h3>Principle</h3>
      <blockquote>
        Know how much of each payment actually reduces the outstanding debt.
      </blockquote>

      <hr />

      <h2>13. Interest</h2>
      <h3>Definition</h3>
      <p>
        Interest is the cost of borrowing money, generally expressed as an amount or
        percentage determined by the financing agreement.
      </p>
      <p>
        A simplified interest calculation is:
        <strong>Interest = Principal × Rate × Time</strong>
      </p>
      <p>For example: ₱100,000 × 10% × 1 = ₱10,000</p>
      <p>This simple-interest example does not represent every loan structure.</p>
      <p>Actual loans may use:</p>
      <ul>
        <li>Daily interest</li>
        <li>Monthly interest</li>
        <li>Amortization</li>
        <li>Compounding</li>
        <li>Reducing balance calculations</li>
        <li>Other methods</li>
      </ul>

      <hr />

      <h2>14. Interest Rate</h2>
      <h3>Definition</h3>
      <p>
        The interest rate is the percentage used to calculate interest under the loan
        agreement.
      </p>
      <p>
        Example: 10% annual interest rate does not necessarily mean the borrower will pay
        exactly 10% of the original principal every year.
      </p>
      <p>The actual amount depends on:</p>
      <ul>
        <li>Outstanding principal</li>
        <li>Payment schedule</li>
        <li>Calculation method</li>
        <li>Compounding</li>
        <li>Fees</li>
        <li>Loan structure</li>
      </ul>

      <h3>Rate vs Cost</h3>
      <pre>{`INTEREST RATE
      ↓
INTEREST CALCULATION
      +
FEES
      +
OTHER CHARGES
      ↓
TOTAL FINANCING COST`}</pre>

      <h3>Principle</h3>
      <blockquote>Never evaluate debt solely by looking at the advertised interest rate.</blockquote>

      <hr />

      <h2>15. Fixed Interest</h2>
      <h3>Definition</h3>
      <p>
        Fixed interest means the interest rate remains fixed according to the agreed terms for
        the specified period.
      </p>
      <p>
        Example: 8% fixed for 5 years means the contractual rate remains 8% during that stated
        fixed period, subject to the loan agreement.
      </p>

      <h3>Advantage</h3>
      <pre>{`Fixed Rate
   ↓
More Predictable Interest
   ↓
More Predictable Debt Planning`}</pre>

      <h3>Limitation</h3>
      <p>
        If market rates later fall, the borrower may not automatically benefit from those
        lower rates. Also, some loans can switch from fixed to variable after a specified
        period.
      </p>

      <h3>Principle</h3>
      <blockquote>
        Fixed rates provide greater payment predictability but should be evaluated alongside
        the full contract and total cost.
      </blockquote>

      <hr />

      <h2>16. Variable Interest</h2>
      <h3>Definition</h3>
      <p>
        A variable interest rate can change according to a reference rate or other mechanism
        specified in the financing agreement.
      </p>
      <p><strong>Variable Rate = Reference Rate + Spread</strong></p>
      <p>If reference rate = 5% and spread = 3%, then 8%.</p>
      <p>
        If the reference rate changes to 7%: 7% + 3% = 10%, assuming the same spread and
        contract structure.
      </p>

      <h3>Risk</h3>
      <pre>{`REFERENCE RATE
      ↓
INCREASES
      ↓
BORROWING RATE
      ↓
INTEREST COST
      ↓
PAYMENT / CASH-FLOW PRESSURE`}</pre>
      <p>The exact impact depends on the agreement.</p>

      <h3>Principle</h3>
      <blockquote>
        Variable-rate borrowing requires planning for possible increases in financing costs.
      </blockquote>

      <hr />

      <h2>17. Effective Interest Rate</h2>
      <h3>Definition</h3>
      <p>
        The effective interest rate represents the actual annualized financing cost under a
        specified calculation methodology, taking relevant compounding and, depending on the
        definition used, certain fees and charges into account.
      </p>
      <p>
        It is often more informative than a simple nominal rate when comparing financing
        products.
      </p>

      <h3>Nominal vs Effective</h3>
      <p>
        Suppose a lender advertises 12% nominal annual rate but interest is compounded monthly.
        A simplified effective annual rate for monthly compounding is:
      </p>
      <p><strong>EAR = (1 + 0.12 ÷ 12)^12 − 1 ≈ 12.68%</strong></p>
      <p>This is a mathematical example and does not include additional loan fees.</p>

      <h3>Why Effective Rate Matters</h3>
      <p>
        Two offers might look like: Offer A at 10% advertised with higher fees, versus Offer B
        at 11% advertised with lower fees. The advertised rate alone doesn't tell you which has
        the lower total financing cost.
      </p>
      <p>The comparison should consider:</p>
      <ul>
        <li>Rate</li>
        <li>Compounding</li>
        <li>Fees</li>
        <li>Payment schedule</li>
        <li>Loan term</li>
        <li>Prepayment charges</li>
        <li>Other mandatory costs</li>
      </ul>

      <h3>Principle</h3>
      <blockquote>
        Compare financing using an appropriate effective or total-cost measure, not just the
        headline interest rate.
      </blockquote>

      <hr />

      <h2>Fixed vs Variable Interest</h2>
      <ul>
        <li>Fixed — rate remains fixed for agreed period</li>
        <li>Variable — rate can change</li>
        <li>Fixed — easier forecasting</li>
        <li>Variable — more uncertainty</li>
        <li>Fixed — payment may be more predictable</li>
        <li>Variable — payment can increase or decrease</li>
        <li>Fixed — less exposure to rising reference rates during fixed period</li>
        <li>Variable — exposed to rate changes</li>
        <li>Fixed — may not benefit automatically from falling rates</li>
        <li>Variable — may benefit when rates fall</li>
      </ul>

      <hr />

      <h2>Principal vs Interest</h2>
      <p>This distinction is fundamental.</p>
      <pre>{`LOAN BALANCE
     ↓
 ┌───┴────┐
 ↓        ↓
PRINCIPAL INTEREST
 ↓
REDUCES    COST OF
BALANCE    BORROWING`}</pre>
      <p>For an installment loan, a payment may contain both.</p>
      <p>Example: Payment = ₱12,000 → ₱8,000 principal, ₱4,000 interest.</p>
      <p>
        After that payment, the loan balance decreases by ₱8,000, not ₱12,000.
      </p>

      <hr />

      <h2>Refinancing vs Consolidation vs Restructuring</h2>
      <ul>
        <li>Refinancing — replace existing debt with new financing</li>
        <li>Consolidation — combine multiple debts into one facility</li>
        <li>Restructuring — modify existing debt terms</li>
        <li>Repayment schedule — timeline showing how debt will be paid</li>
        <li>Principal — amount owed excluding interest/charges</li>
        <li>Interest — cost of borrowing</li>
        <li>Interest rate — rate used to calculate interest</li>
        <li>Effective rate — annualized measure reflecting specified financing mechanics/costs</li>
      </ul>

      <hr />

      <h2>Debt Purpose Framework</h2>
      <pre>{`ASSET PURCHASE
      ↓
EQUIPMENT FINANCING / TERM LOAN

OPERATING CASH GAP
      ↓
WORKING-CAPITAL / CREDIT FACILITY

CONFIRMED CUSTOMER ORDER
      ↓
PURCHASE-ORDER FINANCING

UNPAID CUSTOMER INVOICE
      ↓
INVOICE FINANCING

TEMPORARY FUNDING GAP
      ↓
BRIDGE FINANCING

EXISTING EXPENSIVE / UNSUITABLE DEBT
      ↓
REFINANCING / RESTRUCTURING`}</pre>

      <hr />

      <h2>Debt Risk Framework</h2>
      <ol>
        <li>Purpose — What is the money being used for?</li>
        <li>Amount — How much is actually required?</li>
        <li>Duration — How long will the money be needed?</li>
        <li>Cost — What is the total financing cost?</li>
        <li>Repayment — What cash flow will repay it?</li>
        <li>Security — Is collateral required?</li>
        <li>Rate — Is the rate fixed or variable?</li>
        <li>Liquidity — Can the business continue meeting other obligations?</li>
        <li>Downside — What happens if revenue is lower than expected?</li>
        <li>
          Alternatives — Could the same objective be achieved with less financial risk?
        </li>
      </ol>

      <hr />

      <h2>Debt Decision Tree</h2>
      <pre>{`NEED FINANCING
      ↓
WHAT IS THE PURPOSE?
      ↓
┌─────┼──────────┬───────────┐
↓     ↓          ↓           ↓
ASSET WORKING   ORDER      RECEIVABLE
 ↓      ↓          ↓           ↓
TERM  CREDIT     PO FIN.    INVOICE FIN.

Then:

CHOOSE FINANCING
      ↓
SECURED OR UNSECURED?
      ↓
FIXED OR VARIABLE?
      ↓
SHORT OR LONG TERM?
      ↓
WHAT IS THE TOTAL COST?
      ↓
WHAT IS THE REPAYMENT SCHEDULE?
      ↓
CAN CASH FLOW SUPPORT IT?
      ↓
WHAT HAPPENS UNDER DOWNSIDE?
      ↓
FINAL DECISION`}</pre>

      <hr />

      <h2>Debt Sustainability Test</h2>
      <p>
        <strong>
          Debt Sustainability = Repayment Capacity + Liquidity + Profitability + Risk Control
        </strong>
      </p>
      <p>A business should not evaluate debt capacity from revenue alone.</p>
      <pre>{`Revenue
 ↓
Gross Profit
 ↓
Operating Expenses
 ↓
Operating Cash Flow
 ↓
Existing Debt Service
 ↓
New Debt Service
 ↓
Remaining Cash`}</pre>

      <hr />

      <h2>Example: Financing an Xmarket Expansion</h2>
      <p>Suppose Xmarket wants to expand a seller fulfillment operation.</p>
      <pre>{`Equipment         ₱300,000
Inventory         ₱400,000
Software          ₱100,000
Working capital   ₱200,000
Total             ₱1,000,000`}</pre>
      <p>
        Instead of automatically borrowing ₱1 million as one loan, the business could analyze
        each requirement separately.
      </p>
      <pre>{`₱300K Equipment
      ↓
Equipment / Term Financing

₱400K Inventory
      ↓
Inventory / Working-Capital Financing

₱100K Software
      ↓
Cash / Appropriate Financing

₱200K Working Capital
      ↓
Credit Facility`}</pre>
      <p>
        The actual financing choice would depend on lender terms, eligibility, cash flow,
        collateral, and the business's risk tolerance.
      </p>

      <hr />

      <h2>Debt Monitoring Dashboard</h2>
      <ul>
        <li>Total principal — outstanding debt</li>
        <li>Monthly payment — near-term cash requirement</li>
        <li>Interest rate — contractual borrowing rate</li>
        <li>Effective rate — more complete annualized financing cost</li>
        <li>Interest expense — cost incurred from borrowing</li>
        <li>Principal reduction — how quickly debt balance falls</li>
        <li>Remaining maturity — time until repayment</li>
        <li>Credit utilization — percentage of available facility used</li>
        <li>DSCR — ability to cover debt service</li>
        <li>Liquidity — ability to meet near-term obligations</li>
        <li>Debt-to-equity — leverage relative to equity</li>
        <li>Debt-to-assets — debt relative to assets</li>
        <li>Refinancing date — when financing may need review</li>
        <li>Collateral exposure — assets supporting secured debt</li>
      </ul>

      <hr />

      <h2>Common Debt Mistakes</h2>

      <h3>Mistake 1: Choosing the Lowest Advertised Rate</h3>
      <p>A lower headline rate may still have:</p>
      <ul>
        <li>Higher fees</li>
        <li>Shorter term</li>
        <li>Larger payments</li>
        <li>More restrictive conditions</li>
      </ul>

      <h3>Mistake 2: Ignoring Variable-Rate Risk</h3>
      <p>A business may budget based on today's rate while future rates are higher.</p>

      <h3>Mistake 3: Looking Only at Monthly Payments</h3>
      <p>A longer term can reduce the monthly payment while increasing total interest.</p>

      <h3>Mistake 4: Borrowing Based on Revenue Alone</h3>
      <p>Revenue doesn't show margins, cash flow, existing debt, operating expenses, or liquidity.</p>

      <h3>Mistake 5: Using Emergency Financing as Normal Financing</h3>
      <p>
        Emergency financing can be expensive and should not replace adequate financial
        planning.
      </p>

      <h3>Mistake 6: Refinancing Without Calculating Total Cost</h3>
      <p>
        A new loan can appear cheaper while fees, penalties, or a longer term increase the
        total cost.
      </p>

      <h3>Mistake 7: Treating Collateral as "Free"</h3>
      <p>
        Secured financing can put valuable assets at risk if the borrower defaults.
      </p>

      <hr />

      <h2>Part 2 Master Debt System</h2>
      <pre>{`DEBT NEED
                       ↓
                    PURPOSE
                       ↓
              REQUIRED AMOUNT
                       ↓
             REPAYMENT SOURCE
                       ↓
        ┌──────────────┴──────────────┐
        ↓                             ↓
    SECURED                     UNSECURED
        │                             │
        └──────────────┬──────────────┘
                       ↓
              FINANCING STRUCTURE
                       ↓
        ┌──────────────┼───────────────┐
        ↓              ↓               ↓
     SHORT          MEDIUM           LONG
        │              │               │
        └──────────────┼───────────────┘
                       ↓
               FIXED / VARIABLE
                       ↓
                 PRINCIPAL
                       +
                  INTEREST
                       +
                    FEES
                       ↓
             EFFECTIVE TOTAL COST
                       ↓
             REPAYMENT SCHEDULE
                       ↓
              CASH-FLOW FORECAST
                       ↓
             DOWNSIDE ANALYSIS
                       ↓
                BORROWING
                       ↓
                 MONITOR
                       ↓
                  REPAY
                       ↓
                  REVIEW`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>
          <strong>Secured loan</strong> — understand exactly what collateral is pledged and
          what can happen upon default.
        </li>
        <li>
          <strong>Unsecured loan</strong> — remember that lack of collateral does not
          eliminate repayment obligations.
        </li>
        <li>
          <strong>Installment loan</strong> — understand the payment schedule and how each
          payment affects principal and interest.
        </li>
        <li>
          <strong>Bridge financing</strong> — identify a realistic future event that will
          repay the temporary financing.
        </li>
        <li>
          <strong>Startup financing</strong> — don't use debt indefinitely to compensate for
          an unvalidated business model.
        </li>
        <li>
          <strong>Expansion financing</strong> — connect additional borrowing to demonstrated
          demand and realistic incremental cash generation.
        </li>
        <li>
          <strong>Emergency financing</strong> — use it to stabilize genuine disruptions while
          rebuilding financial resilience afterward.
        </li>
        <li>
          <strong>Debt refinancing</strong> — compare the new financing's total cost and terms
          with the existing debt.
        </li>
        <li>
          <strong>Debt consolidation</strong> — simplify multiple obligations only after
          evaluating total cost and repayment consequences.
        </li>
        <li>
          <strong>Loan restructuring</strong> — address financial difficulty early and
          understand the revised obligations.
        </li>
        <li>
          <strong>Loan repayment schedule</strong> — know exactly when principal and interest
          payments are due.
        </li>
        <li>
          <strong>Principal</strong> — understand how much of the outstanding balance remains.
        </li>
        <li>
          <strong>Interest</strong> — recognize it as the cost of using borrowed money.
        </li>
        <li>
          <strong>Interest rate</strong> — examine how the rate is calculated rather than
          relying only on the advertised percentage.
        </li>
        <li>
          <strong>Fixed interest</strong> — provides rate predictability during the applicable
          fixed period.
        </li>
        <li>
          <strong>Variable interest</strong> — requires planning for possible changes in
          borrowing costs.
        </li>
        <li>
          <strong>Effective interest rate</strong> — use an appropriate effective or
          total-cost measure when comparing financing alternatives.
        </li>
      </ol>

      <h3>Master Formula</h3>
      <p>
        Purpose → Amount → Duration → Security → Principal → Interest → Rate → Fees →
        Effective Cost → Repayment Schedule → Cash-Flow Capacity → Downside Risk → Contract →
        Monitor → Repay → Review.
      </p>
    </LessonLayout>
  )
}
