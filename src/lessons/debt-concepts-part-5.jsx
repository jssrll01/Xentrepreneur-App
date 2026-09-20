import LessonLayout from '../components/LessonLayout'

export default function DebtConceptsPart5() {
  return (
    <LessonLayout
      number="70"
      title="Debt Concepts & Strategies — Part 5"
      summary="16 practical debt management systems — scheduling, budgeting, forecasting, monitoring, limits, emergency policy, repayment priority, and financing by purpose."
    >
      <h2>Debt Concepts &amp; Strategies — Part 5</h2>
      <p>
        Debt strategy becomes more practical when borrowing is treated as an ongoing financial
        management system rather than a one-time transaction.
      </p>
      <p>
        Part 5 focuses on deciding when debt payments occur, how much debt the business can
        tolerate, how future borrowing needs are forecast, which debts should be repaid first,
        and which types of financing may be appropriate for different business purposes.
      </p>
      <p>
        <strong>
          Schedule → Budget → Forecast → Monitor → Limit → Prioritize → Reduce → Borrow Against
          Cash Flow → Finance Productive Assets → Match Financing to Purpose
        </strong>
      </p>

      <hr />

      <h2>1. Debt Scheduling</h2>
      <h3>Definition</h3>
      <p>
        Debt scheduling is the organized planning and recording of all debt obligations,
        including payment dates, principal, interest, fees, maturity dates, and remaining
        balances.
      </p>
      <p>
        A debt schedule allows a business to see what it owes, when it is due, and how the
        balance changes over time.
      </p>

      <h3>Typical Debt Schedule</h3>
      <ul>
        <li>Loan A — ₱500,000 principal, ₱18,000 monthly, variable interest, 2028 maturity, ₱350,000 balance</li>
        <li>Loan B — ₱200,000 principal, ₱10,000 monthly, fixed interest, 2027 maturity, ₱120,000 balance</li>
        <li>Equipment loan — ₱300,000 principal, ₱12,000 monthly, fixed interest, 2029 maturity, ₱250,000 balance</li>
      </ul>

      <h3>Debt Calendar</h3>
      <pre>{`January
  ↓
Loan A payment
  ↓
February
  ↓
Loan A + Loan B
  ↓
March
  ↓
Loan A + Equipment Loan
  ↓
...
  ↓
Maturity dates`}</pre>

      <h3>What to Track</h3>
      <ul>
        <li>Original principal</li>
        <li>Current balance</li>
        <li>Interest rate</li>
        <li>Fixed/variable rate</li>
        <li>Payment frequency</li>
        <li>Principal payment</li>
        <li>Interest payment</li>
        <li>Fees</li>
        <li>Due date</li>
        <li>Maturity date</li>
        <li>Collateral</li>
        <li>Covenant requirements</li>
        <li>Prepayment terms</li>
      </ul>

      <h3>Benefit</h3>
      <p>
        Debt scheduling prevents a business from discovering an obligation only when the
        payment becomes due.
      </p>

      <hr />

      <h2>2. Debt Budgeting</h2>
      <h3>Definition</h3>
      <p>
        Debt budgeting is the process of planning how much money will be allocated toward debt
        payments and related financing costs within a business budget.
      </p>
      <p>A debt budget should account for:</p>
      <ul>
        <li>Principal repayment</li>
        <li>Interest</li>
        <li>Fees</li>
        <li>Expected new borrowing</li>
        <li>Refinancing needs</li>
        <li>Balloon payments</li>
        <li>Early repayment plans</li>
        <li>Cash reserves</li>
      </ul>

      <h3>Example</h3>
      <p>Monthly business cash budget:</p>
      <pre>{`Expected cash inflows    ₱250,000
Operating expenses       ₱150,000
Debt service             ₱40,000
Planned reserve          ₱20,000
Remaining cash           ₱40,000`}</pre>
      <p>Simplified: ₱250,000 − ₱150,000 − ₱40,000 − ₱20,000 = ₱40,000</p>

      <h3>Principle</h3>
      <p>
        Debt payments should be incorporated into the business's overall cash budget rather
        than treated as an afterthought.
      </p>

      <hr />

      <h2>3. Debt Forecasting</h2>
      <h3>Definition</h3>
      <p>
        Debt forecasting is the process of estimating future debt balances, payments, financing
        needs, interest costs, and maturity obligations.
      </p>
      <p>It answers questions such as:</p>
      <ul>
        <li>How much debt will remain next year?</li>
        <li>How much interest will be paid?</li>
        <li>When will loans mature?</li>
        <li>Will additional borrowing be necessary?</li>
        <li>Can future cash flow support planned borrowing?</li>
      </ul>

      <h3>Basic Forecast</h3>
      <pre>{`Current Debt
    ↓
Scheduled Principal Payments
    ↓
− Principal Repaid
    ↓
+ New Borrowing
    ↓
= Forecast Ending Debt`}</pre>

      <h3>Formula</h3>
      <p>
        <strong>
          Ending Debt = Beginning Debt + New Borrowing − Principal Repayment
        </strong>
      </p>

      <h3>Example</h3>
      <p>
        Beginning debt ₱1,000,000, new borrowing ₱300,000, principal repaid ₱250,000.
      </p>
      <p>Ending debt: ₱1,000,000 + ₱300,000 − ₱250,000 = ₱1,050,000</p>

      <hr />

      <h2>4. Debt Monitoring</h2>
      <h3>Definition</h3>
      <p>
        Debt monitoring is the continuous tracking of debt obligations, financial ratios,
        payments, interest rates, covenants, and repayment capacity.
      </p>

      <h3>Monitor</h3>
      <pre>{`Debt Balance
     ↓
Debt Service
     ↓
Cash Flow
     ↓
DSCR
     ↓
Interest Coverage
     ↓
Leverage
     ↓
Covenants
     ↓
Maturity
     ↓
Risk`}</pre>

      <h3>Important Metrics</h3>
      <ul>
        <li>Outstanding debt</li>
        <li>Monthly debt service</li>
        <li>DSCR</li>
        <li>Interest coverage</li>
        <li>Debt-to-equity</li>
        <li>Debt-to-assets</li>
        <li>Interest rate</li>
        <li>Cash balance</li>
        <li>Payment status</li>
        <li>Covenant compliance</li>
        <li>Debt maturity concentration</li>
      </ul>

      <h3>Warning Signals</h3>
      <ul>
        <li>Debt growing faster than revenue or cash flow</li>
        <li>Falling DSCR</li>
        <li>Increasing interest expense</li>
        <li>Repeated late payments</li>
        <li>Reduced liquidity</li>
        <li>Increasing reliance on new borrowing</li>
        <li>Approaching large maturity payments</li>
        <li>Covenant pressure</li>
      </ul>

      <hr />

      <h2>5. Debt Limits</h2>
      <h3>Definition</h3>
      <p>
        Debt limits are internal or contractual boundaries on how much debt a business is
        willing or permitted to carry.
      </p>

      <h3>Internal Debt Limit</h3>
      <p>A limit established by the business itself.</p>
      <p>
        For example: "Do not allow total debt service to exceed a specified percentage of
        sustainable cash flow."
      </p>

      <h3>Contractual Debt Limit</h3>
      <p>A restriction established by a lender.</p>
      <p>For example, a loan covenant may restrict:</p>
      <ul>
        <li>Additional borrowing</li>
        <li>Debt-to-equity</li>
        <li>Debt-to-assets</li>
        <li>Asset sales</li>
        <li>Distributions</li>
      </ul>

      <h3>Debt Limit Framework</h3>
      <pre>{`Maximum Debt
     │
     ├── Cash-flow capacity
     ├── Liquidity requirement
     ├── Existing obligations
     ├── Leverage
     ├── Risk tolerance
     └── Covenant restrictions`}</pre>

      <h3>Important</h3>
      <p>
        A debt limit should not be based only on how much a lender is willing to offer.
      </p>

      <hr />

      <h2>6. Emergency Debt Policy</h2>
      <h3>Definition</h3>
      <p>
        An emergency debt policy is a predetermined set of rules governing when a business may
        use borrowing during unexpected financial emergencies.
      </p>
      <p>The purpose is to prevent panic borrowing.</p>

      <h3>Possible Emergency Situations</h3>
      <ul>
        <li>Critical equipment failure</li>
        <li>Major operational disruption</li>
        <li>Unexpected supplier interruption</li>
        <li>Emergency repairs</li>
        <li>Temporary severe cash-flow gap</li>
        <li>Disaster-related expenses</li>
      </ul>

      <h3>Emergency Borrowing Process</h3>
      <pre>{`Emergency occurs
      ↓
Assess severity
      ↓
Use available reserves?
      ↓
Reduce / defer nonessential spending?
      ↓
Alternative financing?
      ↓
Determine required amount
      ↓
Assess repayment source
      ↓
Approve emergency borrowing
      ↓
Monitor recovery
      ↓
Rebuild reserves`}</pre>

      <h3>Policy Should Define</h3>
      <ul>
        <li>Who can authorize emergency borrowing</li>
        <li>Maximum emergency debt</li>
        <li>Acceptable purposes</li>
        <li>Required documentation</li>
        <li>Repayment source</li>
        <li>Maximum cost</li>
        <li>Required reserves</li>
        <li>Review period</li>
      </ul>

      <h3>Principle</h3>
      <p>
        Emergency borrowing should address a defined temporary problem whenever possible,
        rather than continuously financing an unsustainable business model.
      </p>

      <hr />

      <h2>7. Debt Repayment Priority</h2>
      <h3>Definition</h3>
      <p>
        Debt repayment priority is the system used to determine which debts should receive
        additional repayment first when a business has extra cash.
      </p>
      <p>There is no universal priority order that fits every business. The decision should consider:</p>
      <ul>
        <li>Interest cost</li>
        <li>Contractual requirements</li>
        <li>Default consequences</li>
        <li>Collateral exposure</li>
        <li>Liquidity</li>
        <li>Tax effects where applicable</li>
        <li>Prepayment penalties</li>
        <li>Strategic importance</li>
      </ul>

      <h3>Example Strategy</h3>
      <p>A business has: Debt A at 18% cost, Debt B at 10% cost, Debt C at 7% cost.</p>
      <p>
        If there are no important contractual differences or penalties, reducing the
        highest-cost debt may produce greater interest savings. This is commonly called a
        high-interest or debt-avalanche approach.
      </p>

      <h3>Another Approach</h3>
      <p>
        A business may prioritize the smallest balance for administrative or behavioral
        reasons. This is sometimes called a debt-snowball approach.
      </p>

      <h3>Business-Specific Priority Matrix</h3>
      <ul>
        <li>Cost — which debt is most expensive?</li>
        <li>Default — which has the most serious consequences?</li>
        <li>Collateral — which assets are exposed?</li>
        <li>Liquidity — how much cash should remain?</li>
        <li>Contract — are there restrictions?</li>
        <li>Maturity — which debt becomes due soonest?</li>
        <li>Strategy — which repayment creates the greatest useful flexibility?</li>
      </ul>

      <hr />

      <h2>8. High-Cost Debt Reduction</h2>
      <h3>Definition</h3>
      <p>
        High-cost debt reduction means systematically reducing debt that carries unusually high
        financing costs relative to other available obligations.
      </p>
      <p>Examples may include certain:</p>
      <ul>
        <li>High-interest credit facilities</li>
        <li>Expensive short-term financing</li>
        <li>Penalty-heavy financing</li>
        <li>Emergency borrowing</li>
      </ul>

      <h3>Basic Strategy</h3>
      <pre>{`Identify debt costs
       ↓
Rank financing costs
       ↓
Check prepayment penalties
       ↓
Maintain necessary liquidity
       ↓
Allocate excess cash
       ↓
Reduce expensive debt
       ↓
Recalculate interest burden`}</pre>

      <h3>Example</h3>
      <p>Suppose Debt A: ₱100,000 at 18%, and Debt B: ₱100,000 at 8%.</p>
      <p>
        If there are no material contractual differences, paying down Debt A generally saves
        more interest per peso of principal reduced.
      </p>

      <h3>But Don't Ignore Liquidity</h3>
      <p>
        Using every peso of cash to eliminate debt can leave the business unable to pay payroll,
        suppliers, taxes, repairs, and essential operating expenses.
      </p>
      <p>Therefore: Debt reduction + liquidity protection should be managed together.</p>

      <hr />

      <h2>9. Cash-Flow-Based Borrowing</h2>
      <h3>Definition</h3>
      <p>
        Cash-flow-based borrowing is financing assessed primarily according to the borrower's
        ability to generate cash flow to repay the debt rather than relying primarily on
        specific collateral.
      </p>

      <h3>Core Question</h3>
      <blockquote>
        Can the business generate enough sustainable cash flow to repay the financing?
      </blockquote>

      <h3>Example</h3>
      <p>
        A software business has recurring customer payments, predictable operating costs, and
        limited physical assets.
      </p>
      <p>A lender may focus heavily on:</p>
      <ul>
        <li>Revenue</li>
        <li>Cash flow</li>
        <li>Profitability</li>
        <li>Customer concentration</li>
        <li>Existing obligations</li>
        <li>Financial records</li>
      </ul>

      <h3>Difference From Asset-Based Financing</h3>
      <ul>
        <li>Cash-flow-based — focuses on repayment from cash generation</li>
        <li>Asset-based — focuses more heavily on pledged assets</li>
        <li>Cash-flow-based — useful for asset-light businesses</li>
        <li>Asset-based — useful where qualifying assets exist</li>
        <li>Cash-flow-based — financial performance is important</li>
        <li>Asset-based — collateral value is important</li>
        <li>Cash-flow-based — repayment capacity is central</li>
        <li>Asset-based — security value is central</li>
      </ul>

      <hr />

      <h2>10. Productive Borrowing</h2>
      <h3>Definition</h3>
      <p>
        Productive borrowing is borrowing used for a purpose that is reasonably expected to
        generate sufficient economic value to justify the financing cost and risk.
      </p>
      <p>Examples can include:</p>
      <ul>
        <li>Revenue-generating equipment</li>
        <li>Inventory supported by validated demand</li>
        <li>Product development with evidence of demand</li>
        <li>Capacity expansion</li>
        <li>Business technology</li>
        <li>Working capital supporting profitable operations</li>
      </ul>

      <h3>Productive Debt Test</h3>
      <pre>{`Borrowing
   ↓
Investment / operating use
   ↓
Additional revenue or cost savings
   ↓
Additional cash flow
   ↓
Debt service
   ↓
Remaining economic benefit`}</pre>

      <h3>Example</h3>
      <p>
        A business borrows ₱300,000 to purchase equipment. The equipment is expected to produce
        additional annual contribution of ₱150,000.
      </p>
      <p>A simplified payback: ₱300,000 ÷ ₱150,000 = 2 years.</p>
      <p>But a proper analysis should also consider:</p>
      <ul>
        <li>Financing cost</li>
        <li>Maintenance</li>
        <li>Depreciation</li>
        <li>Utilization</li>
        <li>Taxes</li>
        <li>Demand uncertainty</li>
        <li>Equipment lifespan</li>
        <li>Alternative uses of cash</li>
      </ul>

      <h3>Important</h3>
      <p>
        Borrowing is not productive simply because it is used for a business purpose. The
        economic results must justify the financing.
      </p>

      <hr />

      <h2>11. Capital Expenditure Financing</h2>
      <h3>Definition</h3>
      <p>
        Capital expenditure financing, or CapEx financing, is financing used to purchase or
        develop long-term assets.
      </p>
      <p>Examples:</p>
      <ul>
        <li>Machinery</li>
        <li>Computers</li>
        <li>Production equipment</li>
        <li>Vehicles</li>
        <li>Buildings</li>
        <li>Business infrastructure</li>
        <li>Technology systems</li>
      </ul>

      <h3>Example</h3>
      <p>
        A company needs ₱1,500,000 for production equipment. Instead of paying the entire
        amount from cash, it may use equipment financing or another suitable long-term financing
        structure.
      </p>

      <h3>Matching Principle</h3>
      <pre>{`Long-lived asset
      ↓
Long-term economic benefit
      ↓
Financing matched to asset life
      ↓
Payments distributed over time`}</pre>
      <p>
        This can reduce the need to consume all available operating cash at once.
      </p>

      <h3>Risks</h3>
      <ul>
        <li>Asset may underperform</li>
        <li>Demand may fall</li>
        <li>Equipment can become obsolete</li>
        <li>Maintenance costs can rise</li>
        <li>Financing remains an obligation even if the asset performs poorly</li>
      </ul>

      <hr />

      <h2>12. Asset-Backed Financing</h2>
      <h3>Definition</h3>
      <p>
        Asset-backed financing is financing supported by specific assets that serve as security
        for the borrowing.
      </p>
      <p>Possible assets include:</p>
      <ul>
        <li>Receivables</li>
        <li>Inventory</li>
        <li>Equipment</li>
        <li>Property</li>
        <li>Other qualifying assets</li>
      </ul>

      <h3>Structure</h3>
      <pre>{`Business
   │
   ├── Qualifying asset
   │
   ↓
Lender
   │
   └── Financing`}</pre>

      <h3>Example</h3>
      <p>
        A business has ₱1,000,000 of eligible receivables. A lender may provide financing
        against qualifying receivables under agreed terms.
      </p>

      <h3>Benefits</h3>
      <ul>
        <li>Can provide financing based on existing assets</li>
        <li>Useful for businesses with substantial working assets</li>
        <li>Can support working-capital needs</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Asset values can decline</li>
        <li>Receivables may not be collected</li>
        <li>Inventory may become obsolete</li>
        <li>Assets may be subject to enforcement if the borrower defaults</li>
        <li>Borrowing capacity may decline as asset values decline</li>
      </ul>

      <hr />

      <h2>13. Revenue-Based Financing</h2>
      <h3>Definition</h3>
      <p>
        Revenue-based financing (RBF) is a financing structure in which repayment is linked to
        the borrower's revenue, typically through an agreed percentage or formula until a
        defined repayment amount or contractual limit is reached.
      </p>
      <p>The exact structure varies substantially by provider.</p>

      <h3>Simplified Example</h3>
      <p>A business receives ₱500,000. The agreement requires repayment based partly on a
        percentage of revenue.</p>
      <p>
        If monthly revenue is ₱200,000 and the agreed payment is 5%: ₱200,000 × 5% = ₱10,000.
      </p>
      <p>If revenue falls to ₱100,000: ₱100,000 × 5% = ₱5,000.</p>
      <p>
        These are illustrative numbers only; actual contracts can use different formulas, caps,
        minimum payments, and repayment periods.
      </p>

      <h3>Potential Benefit</h3>
      <p>
        Payments may move with revenue rather than following exactly the same fixed amount every
        month.
      </p>

      <h3>Risks</h3>
      <ul>
        <li>Total repayment can be substantial</li>
        <li>Revenue-linked payments can still pressure cash flow</li>
        <li>Contract definitions matter</li>
        <li>Effective financing cost can be difficult to compare</li>
        <li>Businesses with unpredictable revenue need careful analysis</li>
      </ul>

      <hr />

      <h2>14. Merchant Financing</h2>
      <h3>Definition</h3>
      <p>
        Merchant financing generally refers to financing designed around a merchant's sales
        activity or transaction history.
      </p>
      <p>
        One common structure involves repayment through a portion of future sales or
        card/payment transactions.
      </p>

      <h3>Example</h3>
      <p>
        A retailer receives financing and agrees that a portion of future eligible sales will be
        used to repay the financing.
      </p>
      <pre>{`Customer sales
      ↓
Merchant revenue
      ↓
Agreed repayment portion
      ↓
Financing repayment`}</pre>

      <h3>Potential Uses</h3>
      <ul>
        <li>Inventory</li>
        <li>Short-term working capital</li>
        <li>Store improvements</li>
        <li>Marketing</li>
        <li>Equipment</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Cost may be high</li>
        <li>Repayment reduces future cash available to the merchant</li>
        <li>Sales volatility can complicate planning</li>
        <li>Contract terms vary significantly</li>
      </ul>

      <h3>Important Distinction</h3>
      <p>
        Merchant financing and revenue-based financing can overlap conceptually, but they are
        not necessarily identical products.
      </p>

      <hr />

      <h2>15. Microfinance</h2>
      <h3>Definition</h3>
      <p>
        Microfinance refers broadly to financial services designed to serve individuals or very
        small businesses that may have limited access to conventional financial institutions.
      </p>
      <p>Services may include:</p>
      <ul>
        <li>Small loans</li>
        <li>Savings</li>
        <li>Payments</li>
        <li>Insurance</li>
        <li>Other financial services</li>
      </ul>

      <h3>Business Example</h3>
      <p>
        A small entrepreneur needs ₱30,000 to purchase initial inventory for a microenterprise.
        A microfinance institution may offer a small financing product subject to its
        eligibility and assessment rules.
      </p>

      <h3>Potential Benefits</h3>
      <ul>
        <li>Smaller financing amounts</li>
        <li>Access for underserved entrepreneurs</li>
        <li>Can support small-business activity</li>
        <li>May help build financial history</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Financing cost can vary</li>
        <li>Repayment schedules may be demanding</li>
        <li>Borrowing too frequently can create debt pressure</li>
        <li>Group or individual structures can create different obligations</li>
      </ul>

      <h3>Principle</h3>
      <p>
        Microfinance should be evaluated using the same basic discipline as other borrowing:
        Purpose → Cost → Repayment Capacity → Terms → Risk.
      </p>

      <hr />

      <h2>16. Cooperative Lending</h2>
      <h3>Definition</h3>
      <p>
        Cooperative lending is financing provided through a cooperative or member-based
        financial organization, generally under its membership and lending rules.
      </p>
      <p>
        Members may contribute to the cooperative's capital or savings structure and may become
        eligible for loans.
      </p>

      <h3>Example</h3>
      <pre>{`Members
 ├── Member contributions
 ├── Savings
 └── Cooperative capital
          ↓
      Cooperative
          ↓
       Member loan
          ↓
       Repayment
          ↓
 Cooperative funds`}</pre>

      <h3>Potential Benefits</h3>
      <ul>
        <li>Member-focused structure</li>
        <li>Access to financing for qualifying members</li>
        <li>Potentially relationship-based assessment</li>
        <li>May provide savings and other financial services alongside loans</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Membership requirements</li>
        <li>Loan eligibility requirements</li>
        <li>Interest and fees</li>
        <li>Required savings/contributions</li>
        <li>Loan limits</li>
        <li>Default consequences</li>
        <li>Cooperative-specific rules</li>
      </ul>
      <p>Terms vary significantly between cooperatives.</p>

      <hr />

      <h2>Debt Financing by Purpose</h2>
      <p>Different financing structures can be suited to different needs:</p>
      <ul>
        <li>Temporary working-capital gap → working-capital financing</li>
        <li>Equipment → capital expenditure / equipment financing</li>
        <li>Inventory → inventory financing</li>
        <li>Confirmed customer order → purchase-order financing</li>
        <li>Unpaid invoices → invoice financing</li>
        <li>Long-lived asset → asset-backed or term financing</li>
        <li>Predictable business revenue → cash-flow-based financing</li>
        <li>Revenue-linked repayment structure → revenue-based financing</li>
        <li>Merchant transaction business → merchant financing</li>
        <li>Very small enterprise financing → microfinance</li>
        <li>Member-owned organization → cooperative lending</li>
      </ul>
      <p>
        Suitability depends on the actual loan terms, business economics, and repayment
        capacity.
      </p>

      <hr />

      <h2>Debt Strategy: Productive vs Unproductive Borrowing</h2>
      <p>
        The distinction should focus on economic outcome, not simply what the money is spent on.
      </p>

      <h3>Productive Example</h3>
      <p>Borrow ₱500,000. Use it for validated inventory.</p>
      <p>Expected incremental contribution: ₱150,000. Financing cost: ₱50,000.</p>
      <p>The transaction may generate positive economic value if assumptions hold.</p>

      <h3>Potentially Unproductive Example</h3>
      <p>Borrow ₱500,000. Use it to cover recurring losses without addressing their cause.</p>
      <pre>{`Debt
 ↓
Operating losses
 ↓
More debt
 ↓
More debt service
 ↓
Greater cash pressure`}</pre>
      <p>This can create a debt spiral.</p>

      <h3>Core Test</h3>
      <p>
        Borrowing should have a credible repayment source and a defined economic purpose.
      </p>

      <hr />

      <h2>Debt Control System</h2>
      <pre>{`DEBT STRATEGY
                      │
        ┌─────────────┴─────────────┐
        ↓                           ↓
   Existing Debt                New Debt
        │                           │
        ↓                           ↓
Debt Scheduling              Borrowing Capacity
        │                           │
Debt Budgeting                Purpose Analysis
        │                           │
Debt Forecasting              Financing Selection
        │                           │
Debt Monitoring               Cost Analysis
        │                           │
Debt Limits                   Repayment Source
        │                           │
        └──────────────┬────────────┘
                       ↓
                Debt Management
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
     Repayment      Reduction    Productive
      Priority      Strategy     Borrowing
          │            │            │
          └────────────┼────────────┘
                       ↓
                  Cash Flow
                       ↓
                   Liquidity
                       ↓
                  Sustainability`}</pre>

      <hr />

      <h2>Debt Repayment Priority Framework</h2>
      <p>When excess cash becomes available:</p>
      <ol>
        <li>
          <strong>Protect Essential Liquidity</strong> — keep enough cash for necessary
          operations and obligations.
        </li>
        <li>
          <strong>Maintain Contractual Payments</strong> — never neglect required payments
          while focusing on optional early repayment.
        </li>
        <li>
          <strong>Check Penalties</strong> — determine whether early repayment creates
          additional costs.
        </li>
        <li>
          <strong>Rank Debt</strong> — consider cost + risk + maturity + collateral +
          contractual consequences.
        </li>
        <li>
          <strong>Reduce Appropriate Debt</strong> — allocate excess cash where it provides
          meaningful financial benefit.
        </li>
        <li>
          <strong>Recalculate</strong> — after repayment, debt balance changes, interest expense
          may change, leverage changes, cash changes, future debt service may change.
        </li>
      </ol>

      <hr />

      <h2>Debt Budget vs Debt Forecast vs Debt Schedule vs Debt Monitoring</h2>
      <p>These four concepts are closely related but serve different purposes.</p>
      <ul>
        <li>Debt scheduling — record when obligations occur</li>
        <li>Debt budgeting — plan how much cash will be allocated</li>
        <li>Debt forecasting — estimate future debt and financing requirements</li>
        <li>Debt monitoring — track actual performance and detect problems</li>
      </ul>
      <pre>{`Schedule
   ↓
Know what is due
   ↓
Budget
   ↓
Plan the cash
   ↓
Forecast
   ↓
Predict future position
   ↓
Monitor
   ↓
Compare actual vs expected
   ↓
Adjust`}</pre>

      <hr />

      <h2>Emergency Debt Decision Tree</h2>
      <pre>{`Emergency occurs
       ↓
Is the expense essential?
       │
    ┌──┴──┐
   No     Yes
   ↓       ↓
Avoid    Can reserves cover it?
debt       │
        ┌──┴──┐
       Yes     No
        ↓       ↓
      Use    Can spending be
     reserve  reduced/deferred?
                │
             ┌──┴──┐
            Yes     No
             ↓       ↓
          Adjust   Consider
          budget   financing
                      ↓
                Can repayment
                be supported?
                      │
                  ┌───┴───┐
                 Yes       No
                  ↓         ↓
              Borrow     Reassess
              carefully   plan`}</pre>

      <hr />

      <h2>Debt Financing Selection Matrix</h2>
      <ul>
        <li>Cash-flow-based borrowing — future/ongoing cash flow — general business financing</li>
        <li>Asset-backed financing — qualifying assets — working capital / asset-backed needs</li>
        <li>Capital expenditure financing — long-term asset — equipment/infrastructure</li>
        <li>Revenue-based financing — revenue — growth/working capital</li>
        <li>Merchant financing — merchant sales — short-term business needs</li>
        <li>Microfinance — small-business/borrower profile — microenterprise financing</li>
        <li>Cooperative lending — cooperative membership/rules — member financing</li>
      </ul>
      <p>
        These categories can overlap, and actual products may combine characteristics.
      </p>

      <hr />

      <h2>Key Metrics for Part 5</h2>
      <p>
        <strong>
          Ending Debt = Beginning Debt + New Borrowing − Principal Repayment
        </strong>
      </p>
      <p>
        <strong>
          Debt Growth % = ((Ending Debt − Beginning Debt) ÷ Beginning Debt) × 100
        </strong>
      </p>
      <p>
        <strong>DSCR = Cash Available for Debt Service ÷ Debt Service</strong>
      </p>
      <p><strong>Interest Burden = (Interest Expense ÷ Revenue) × 100</strong></p>
      <p>
        <strong>
          Debt Reduction % = (Principal Repaid ÷ Beginning Debt) × 100
        </strong>
      </p>

      <hr />

      <h2>Example: Small Technology Business</h2>
      <p>Suppose a web-development company has:</p>
      <pre>{`Existing debt: ₱400,000
Annual principal repayment: ₱100,000
New equipment financing: ₱200,000`}</pre>
      <p>Forecast ending debt: ₱400,000 + ₱200,000 − ₱100,000 = ₱500,000</p>
      <p>The company should then ask:</p>
      <ol>
        <li>Can operating cash flow support the additional debt service?</li>
        <li>Does the equipment generate additional revenue or reduce costs?</li>
        <li>What happens if new project revenue is delayed?</li>
        <li>Does the company retain sufficient cash reserves?</li>
        <li>What are the loan's fees and total cost?</li>
        <li>Is the equipment financing term appropriate for the asset?</li>
        <li>Are there prepayment restrictions?</li>
        <li>Is there a balloon payment?</li>
        <li>What happens if interest rates increase?</li>
        <li>Does the new debt remain within internal debt limits?</li>
      </ol>
      <p>
        This turns borrowing into a financial decision system rather than simply a funding
        decision.
      </p>

      <hr />

      <h2>Common Mistakes</h2>
      <ul>
        <li>
          <strong>Mistake 1 — No Debt Schedule</strong> — without a centralized schedule,
          maturity dates and payment obligations can be missed.
        </li>
        <li>
          <strong>Mistake 2 — Budgeting Without Debt</strong> — a business may create an
          operating budget while forgetting principal and interest payments.
        </li>
        <li>
          <strong>Mistake 3 — Borrowing Before Forecasting</strong> — new debt should be
          incorporated into future cash-flow forecasts before the borrowing decision.
        </li>
        <li>
          <strong>Mistake 4 — No Internal Debt Limit</strong> — "whatever the lender approves"
          is not a business debt policy.
        </li>
        <li>
          <strong>Mistake 5 — Using Emergency Debt as Normal Financing</strong> — repeated
          emergency borrowing can indicate an underlying liquidity or profitability problem.
        </li>
        <li>
          <strong>Mistake 6 — Paying Debt With Every Available Peso</strong> — debt reduction is
          useful, but eliminating liquidity can create another financial problem.
        </li>
        <li>
          <strong>Mistake 7 — Calling Every Business Loan Productive</strong> — debt used for a
          business does not automatically generate economic value.
        </li>
        <li>
          <strong>Mistake 8 — Ignoring Financing Structure</strong> — a loan should be evaluated
          based on purpose + cost + cash flow + term + risk + contract, not merely the amount
          received.
        </li>
      </ul>

      <hr />

      <h2>Complete Debt Management Framework</h2>
      <pre>{`1. PURPOSE
                 ↓
        Why does the business
          need financing?
                 ↓
             2. CAPACITY
                 ↓
       How much can it safely
             support?
                 ↓
             3. TYPE
                 ↓
     Cash-flow / asset-backed /
      CapEx / revenue-based /
       merchant / microfinance /
       cooperative financing
                 ↓
              4. COST
                 ↓
       Interest + fees + other
         financing expenses
                 ↓
             5. STRUCTURE
                 ↓
       Term + amortization +
       repayment + maturity
                 ↓
             6. BUDGET
                 ↓
      Can cash flow support it?
                 ↓
             7. LIMIT
                 ↓
        Is debt within policy?
                 ↓
            8. MONITOR
                 ↓
       Cash + DSCR + leverage +
        covenants + maturities
                 ↓
           9. REPAYMENT
                 ↓
     Prioritize appropriate debt
                 ↓
           10. REVIEW
                 ↓
      Reassess borrowing need,
       risk, cost and capacity`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Schedule every debt obligation.</li>
        <li>Budget principal and interest together with operating expenses.</li>
        <li>Forecast debt before taking on additional borrowing.</li>
        <li>
          Set internal debt limits instead of relying solely on lender approval.
        </li>
        <li>
          Maintain an emergency borrowing policy before an emergency occurs.
        </li>
        <li>
          Prioritize repayment using cost, risk, liquidity, and contractual consequences — not
          interest rate alone.
        </li>
        <li>Reduce expensive debt while preserving adequate operating liquidity.</li>
        <li>
          Borrow against sustainable cash-flow capacity, not optimistic revenue assumptions.
        </li>
        <li>
          Use productive borrowing only when the expected economic value and repayment source
          are credible.
        </li>
        <li>Match financing to the asset, cash-flow cycle, and business purpose.</li>
      </ol>

      <h3>Master Formula</h3>
      <p>
        Schedule → Budget → Forecast → Monitor → Limit → Prioritize → Reduce High-Cost Debt →
        Borrow Based on Cash Flow → Finance Productive Uses → Match Financing to Purpose →
        Protect Liquidity → Review Continuously.
      </p>
    </LessonLayout>
  )
}
