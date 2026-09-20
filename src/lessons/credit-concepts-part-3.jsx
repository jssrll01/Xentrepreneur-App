import LessonLayout from '../components/LessonLayout'

export default function CreditConceptsPart3() {
  return (
    <LessonLayout
      number="74"
      title="Credit Concepts & Strategies — Part 3"
      summary="11 commercial credit operations — purchase financing, invoice credit, receivables, credit insurance, monitoring, credit policy, and credit limits."
    >
      <h2>Credit Concepts &amp; Strategies — Part 3</h2>
      <p>
        This part focuses on commercial credit operations: how businesses finance purchases, use
        receivables as a financing source, evaluate customers, monitor credit exposure, and
        establish rules for granting credit.
      </p>
      <p>
        The central system is: Purchase → Credit → Customer Receivable → Collection → Credit
        Monitoring → Risk Assessment → Credit Policy → Controlled Growth.
      </p>

      <hr />

      <h2>1. Purchase Financing</h2>
      <h3>Definition</h3>
      <p>
        Purchase financing is financing used to fund the acquisition of goods, inventory,
        equipment, materials, or other assets needed for a business transaction.
      </p>
      <p>
        The financing allows the business to make a purchase before it has enough available cash
        to pay for it immediately.
      </p>

      <h3>Common Forms</h3>
      <ul>
        <li>Supplier credit</li>
        <li>Trade credit</li>
        <li>Purchase-order financing</li>
        <li>Inventory financing</li>
        <li>Business credit lines</li>
        <li>Equipment financing</li>
        <li>Short-term loans</li>
        <li>Asset-backed financing</li>
      </ul>

      <h3>How It Works</h3>
      <pre>{`Business needs goods/assets
          ↓
Determine purchase amount
          ↓
Choose financing
          ↓
Supplier provides goods
          ↓
Business receives financing
          ↓
Business sells/uses asset
          ↓
Cash is generated
          ↓
Financing is repaid`}</pre>

      <h3>Example</h3>
      <p>
        A retailer needs ₱200,000 inventory and expects to sell it for ₱300,000. It obtains
        financing to purchase the inventory.
      </p>
      <pre>{`Sales: ₱300,000
Purchase cost: ₱200,000
Gross profit before other costs: ₱100,000`}</pre>
      <p>
        The business must also account for financing costs, operating expenses, taxes, returns,
        and other costs.
      </p>

      <h3>Purchase Financing Test</h3>
      <ol>
        <li>Why is the purchase necessary?</li>
        <li>How much is required?</li>
        <li>How quickly will the purchase generate value?</li>
        <li>What is the expected selling price or economic benefit?</li>
        <li>What is the financing cost?</li>
        <li>What happens if sales are delayed?</li>
        <li>What is the repayment source?</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Preserves working capital</li>
        <li>Allows inventory acquisition</li>
        <li>Supports larger orders</li>
        <li>Can bridge timing gaps</li>
        <li>Can support growth when demand is validated</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Financing costs</li>
        <li>Unsold inventory</li>
        <li>Demand changes</li>
        <li>Supplier delays</li>
        <li>Cash-flow pressure</li>
        <li>Over-purchasing</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        Finance purchases based on realistic demand and repayment capacity, not simply because
        financing is available.
      </p>

      <hr />

      <h2>2. Invoice Credit</h2>
      <h3>Definition</h3>
      <p>
        Invoice credit generally refers to financing associated with outstanding invoices or
        credit extended against invoices.
      </p>
      <p>
        A business that has issued an invoice to a customer may be able to obtain financing
        before that customer actually pays.
      </p>
      <p>
        Terminology varies between financial institutions and markets, so the exact structure
        should always be checked.
      </p>

      <h3>Example</h3>
      <p>
        A web-development company completes a ₱100,000 project. It invoices the customer with
        Net-30 payment terms. The customer will pay in 30 days. The company needs cash today for
        payroll and operating expenses.
      </p>
      <p>A financing provider may advance part of the invoice value.</p>
      <pre>{`Business completes project
          ↓
₱100,000 invoice issued
          ↓
Customer owes ₱100,000
          ↓
Financing provider advances funds
          ↓
Customer pays invoice
          ↓
Financing obligation is settled`}</pre>

      <h3>Important Distinction</h3>
      <p>
        The invoice represents money owed by a customer. It does not necessarily mean the
        business already has that cash.
      </p>

      <h3>Risks</h3>
      <ul>
        <li>Customer may pay late</li>
        <li>Customer may dispute invoice</li>
        <li>Financing fees</li>
        <li>Interest</li>
        <li>Recourse obligations</li>
        <li>Customer concentration</li>
      </ul>

      <hr />

      <h2>3. Receivables Financing</h2>
      <h3>Definition</h3>
      <p>
        Receivables financing is financing based on a business's accounts receivable—the money
        customers owe the business.
      </p>
      <p>
        It can allow a business to obtain cash before customers pay their invoices.
      </p>

      <h3>Example</h3>
      <p>
        A business has ₱1,000,000 eligible receivables. A financing provider advances 80%.
        Potential advance: ₱1,000,000 × 80% = ₱800,000.
      </p>
      <p>
        The exact advance rate, fees, repayment structure, eligibility requirements, and
        recourse depend on the financing arrangement.
      </p>

      <h3>Basic Structure</h3>
      <pre>{`Business
   │
   │ Provides product/service
   ↓
Customer
   │
   │ Owes invoice
   ↓
Accounts Receivable
   │
   ↓
Financing Provider
   │
   │ Advance
   ↓
Business receives cash
   │
   ↓
Customer eventually pays
   │
   ↓
Receivable financing settled`}</pre>

      <h3>Receivables Financing vs Traditional Loan</h3>
      <ul>
        <li>Based partly on receivables vs often based on broader credit assessment</li>
        <li>Linked to customer invoices vs may be independent of specific invoices</li>
        <li>Can support working capital vs can fund many purposes</li>
        <li>Advance rate may apply vs fixed loan amount may apply</li>
        <li>Customer quality matters vs borrower financial profile matters heavily</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Faster access to working capital</li>
        <li>Converts receivables into earlier cash</li>
        <li>Useful when customers have long payment terms</li>
        <li>Can support growing businesses</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Financing fees</li>
        <li>Customer default</li>
        <li>Invoice disputes</li>
        <li>Concentration risk</li>
        <li>Recourse obligations</li>
        <li>Administrative requirements</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        Receivables financing accelerates cash conversion; it does not automatically increase
        the underlying profitability of the sale.
      </p>

      <hr />

      <h2>4. Credit Insurance</h2>
      <h3>Definition</h3>
      <p>
        Credit insurance is insurance designed to protect against certain financial losses
        resulting from customers or counterparties failing to pay covered credit obligations.
      </p>
      <p>
        Commercial credit insurance can be particularly relevant when a business sells goods or
        services on credit.
      </p>
      <p>Coverage depends heavily on the specific policy.</p>

      <h3>Example</h3>
      <p>
        A company sells ₱500,000 goods to a customer on credit. The customer later becomes
        insolvent.
      </p>
      <p>
        If the receivable qualifies under the insurance policy, the insurer may cover a
        specified portion of the insured loss, subject to policy limits, deductibles,
        exclusions, waiting periods, reporting requirements, and coverage conditions.
      </p>

      <h3>Structure</h3>
      <pre>{`Business sells on credit
          ↓
Customer owes money
          ↓
Credit risk exists
          ↓
Credit insurance
          ↓
Covered loss occurs
          ↓
Claim evaluated
          ↓
Eligible covered loss compensated`}</pre>

      <h3>What It Can Help With</h3>
      <p>Depending on the policy:</p>
      <ul>
        <li>Customer insolvency</li>
        <li>Protracted non-payment</li>
        <li>Certain commercial risks</li>
        <li>Certain political risks in international trade</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Reduces exposure to certain customer default losses</li>
        <li>Can support credit sales</li>
        <li>May help with risk management</li>
        <li>Can provide additional confidence when entering new markets</li>
      </ul>

      <h3>Risks/Limitations</h3>
      <p>Insurance does not eliminate all credit risk. Policies can contain:</p>
      <ul>
        <li>Exclusions</li>
        <li>Coverage limits</li>
        <li>Deductibles</li>
        <li>Waiting periods</li>
        <li>Eligibility requirements</li>
        <li>Notification requirements</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        Insurance transfers certain risks; it does not replace customer credit assessment and
        collection controls.
      </p>

      <hr />

      <h2>5. Credit Monitoring</h2>
      <h3>Definition</h3>
      <p>
        Credit monitoring is the ongoing process of tracking credit-related information,
        changes, risks, and obligations.
      </p>
      <p>A business may monitor:</p>
      <ul>
        <li>Its own credit profile</li>
        <li>Customers</li>
        <li>Suppliers</li>
        <li>Borrowers</li>
        <li>Credit accounts</li>
        <li>Payment behavior</li>
        <li>Credit utilization</li>
        <li>Outstanding receivables</li>
        <li>Credit limits</li>
        <li>Delinquencies</li>
        <li>New inquiries</li>
        <li>Defaults</li>
      </ul>

      <h3>Business Credit Monitoring</h3>
      <pre>{`Credit accounts
     ↓
Balances
     ↓
Payment history
     ↓
Utilization
     ↓
Credit report
     ↓
Changes detected
     ↓
Risk reviewed
     ↓
Action taken`}</pre>

      <h3>Customer Credit Monitoring</h3>
      <pre>{`Customer approved
      ↓
Credit limit established
      ↓
Purchases made
      ↓
Invoices issued
      ↓
Payments monitored
      ↓
Aging monitored
      ↓
Risk changes identified
      ↓
Limit/terms reviewed`}</pre>

      <h3>Warning Signals</h3>
      <ul>
        <li>Increasing overdue balances</li>
        <li>Repeated late payments</li>
        <li>Rapidly increasing credit usage</li>
        <li>Returned payments</li>
        <li>Declining order quality</li>
        <li>Frequent payment disputes</li>
        <li>Large unpaid invoices</li>
        <li>Sudden requests for significantly higher credit</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Detects risk earlier</li>
        <li>Reduces bad-debt exposure</li>
        <li>Supports better credit decisions</li>
        <li>Improves collections</li>
        <li>Helps maintain financial discipline</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        Credit assessment should not be a one-time event. Credit risk can change after approval.
      </p>

      <hr />

      <h2>6. Credit Reporting</h2>
      <h3>Definition</h3>
      <p>
        Credit reporting is the process of providing information about credit accounts and
        payment behavior to a credit bureau or other authorized reporting organization.
      </p>
      <p>
        Depending on the jurisdiction and reporting arrangement, information may include:
      </p>
      <ul>
        <li>Account status</li>
        <li>Credit limits</li>
        <li>Balances</li>
        <li>Payment history</li>
        <li>Delinquencies</li>
        <li>Defaults</li>
        <li>Account opening/closing</li>
        <li>Credit inquiries</li>
      </ul>

      <h3>Example</h3>
      <p>
        A lender reports that a borrower has a ₱100,000 credit limit, ₱30,000 outstanding, and
        has made payments according to the account terms. That information may become part of
        the borrower's credit record.
      </p>

      <h3>Reporting Flow</h3>
      <pre>{`Credit Provider
      ↓
Account information
      ↓
Credit Bureau / Reporting System
      ↓
Credit Record
      ↓
Credit Report
      ↓
Potential scoring/credit assessment`}</pre>

      <h3>Why Reporting Matters</h3>
      <p>
        Credit reporting helps create a record that lenders can use to evaluate previous credit
        behavior.
      </p>

      <h3>Business Perspective</h3>
      <p>
        Businesses that extend commercial credit may have reporting obligations or options
        depending on their jurisdiction and arrangements.
      </p>

      <h3>Important Principle</h3>
      <p>
        Only accurate, authorized, and appropriately reported information should be submitted.
      </p>

      <hr />

      <h2>7. Credit Assessment</h2>
      <h3>Definition</h3>
      <p>
        Credit assessment is the process of evaluating whether a person or business is likely to
        meet its credit obligations.
      </p>
      <p>A lender or business may assess:</p>
      <ul>
        <li>Income</li>
        <li>Cash flow</li>
        <li>Existing debt</li>
        <li>Payment history</li>
        <li>Credit history</li>
        <li>Credit score</li>
        <li>Assets</li>
        <li>Collateral</li>
        <li>Business stability</li>
        <li>Customer concentration</li>
        <li>Industry conditions</li>
        <li>Purpose of borrowing</li>
      </ul>

      <h3>5 Cs Framework</h3>
      <ul>
        <li>Character — reliability and credit behavior</li>
        <li>Capacity — ability to repay</li>
        <li>Capital — financial resources/equity</li>
        <li>Collateral — assets supporting the obligation</li>
        <li>Conditions — economic, industry, and transaction conditions</li>
      </ul>

      <h3>Example</h3>
      <p>
        A supplier considers giving a customer a ₱500,000 credit limit. It evaluates: 3 years in
        operation, ₱5 million annual revenue, existing debt, payment history, cash flow,
        financial statements, purchase volume, industry risk. The supplier can then establish
        appropriate terms.
      </p>

      <h3>Important Principle</h3>
      <p>
        Credit assessment should evaluate repayment capacity, not simply the customer's desire
        to borrow.
      </p>

      <hr />

      <h2>8. Credit Verification</h2>
      <h3>Definition</h3>
      <p>
        Credit verification is the process of confirming information provided by an applicant or
        customer during a credit assessment.
      </p>
      <p>Information can include:</p>
      <ul>
        <li>Identity</li>
        <li>Business registration</li>
        <li>Address</li>
        <li>Employment</li>
        <li>Income</li>
        <li>Bank information where appropriately authorized</li>
        <li>Business ownership</li>
        <li>Trade references</li>
        <li>Existing obligations</li>
        <li>Documents supporting financial claims</li>
      </ul>

      <h3>Example</h3>
      <p>
        A business applies for ₱1,000,000 supplier credit. It provides business registration,
        financial statements, tax/business documents, bank information where required, and trade
        references. The supplier verifies the information before approving the account.
      </p>

      <h3>Verification Process</h3>
      <pre>{`Applicant information
        ↓
Document collection
        ↓
Identity/business verification
        ↓
Financial verification
        ↓
Trade reference checks
        ↓
Credit report/check where permitted
        ↓
Information validated
        ↓
Credit decision`}</pre>

      <h3>Benefits</h3>
      <ul>
        <li>Reduces fraud</li>
        <li>Improves assessment accuracy</li>
        <li>Detects inconsistent information</li>
        <li>Supports responsible credit decisions</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        Verification should be proportionate to the risk and performed using lawful, appropriate
        methods.
      </p>

      <hr />

      <h2>9. Customer Credit Checks</h2>
      <h3>Definition</h3>
      <p>
        A customer credit check is an evaluation of a customer's creditworthiness before or
        during a credit relationship.
      </p>
      <p>This is especially important when a business allows customers to:</p>
      <ul>
        <li>Buy now and pay later</li>
        <li>Receive goods before payment</li>
        <li>Use an account with a credit limit</li>
        <li>Purchase on invoice terms</li>
      </ul>

      <h3>Example</h3>
      <p>
        A wholesaler receives a ₱300,000 order. The customer requests Net-60. Before approving
        the transaction, the wholesaler checks credit history where available, trade references,
        existing account behavior, financial capacity, payment history, and business
        information.
      </p>

      <h3>Customer Credit Check Flow</h3>
      <pre>{`Customer requests credit
          ↓
Verify identity/business
          ↓
Review credit information
          ↓
Check trade references
          ↓
Assess repayment capacity
          ↓
Evaluate requested amount
          ↓
Approve / modify / decline
          ↓
Set terms and credit limit
          ↓
Monitor after approval`}</pre>

      <h3>Important Principle</h3>
      <p>
        The larger and longer the credit exposure, the more important appropriate credit
        assessment becomes.
      </p>

      <hr />

      <h2>10. Credit Policy</h2>
      <h3>Definition</h3>
      <p>
        A credit policy is a documented set of rules governing how a business grants, manages,
        monitors, and collects credit.
      </p>
      <p>It answers questions such as:</p>
      <ul>
        <li>Who can receive credit?</li>
        <li>What information is required?</li>
        <li>How is creditworthiness assessed?</li>
        <li>What credit limits apply?</li>
        <li>What payment terms are allowed?</li>
        <li>Who approves credit?</li>
        <li>What happens when an account becomes overdue?</li>
        <li>When are accounts suspended?</li>
        <li>How are exceptions handled?</li>
      </ul>

      <h3>Example Policy</h3>
      <pre>{`New customer
   ↓
Credit application required
   ↓
Identity/business verification
   ↓
Trade references
   ↓
Credit assessment
   ↓
Initial limit established
   ↓
Net-30 terms
   ↓
Monthly review
   ↓
Overdue account → collection process`}</pre>

      <h3>Components of a Credit Policy</h3>
      <ol>
        <li>Eligibility</li>
        <li>Application requirements</li>
        <li>Verification</li>
        <li>Credit assessment</li>
        <li>Credit limits</li>
        <li>Payment terms</li>
        <li>Documentation</li>
        <li>Approval authority</li>
        <li>Monitoring</li>
        <li>Collections</li>
        <li>Delinquency procedures</li>
        <li>Exceptions</li>
        <li>Credit reviews</li>
        <li>Record keeping</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Consistent decisions</li>
        <li>Reduced credit risk</li>
        <li>Faster approvals</li>
        <li>Clear employee responsibilities</li>
        <li>Better collections</li>
        <li>Reduced arbitrary decisions</li>
        <li>Better cash-flow management</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        A credit policy converts credit decisions from informal judgment into a repeatable
        business process.
      </p>

      <hr />

      <h2>11. Credit Limit Policy</h2>
      <h3>Definition</h3>
      <p>
        A credit limit policy defines how much credit a business is willing to extend to a
        customer or account and the conditions under which that limit can change.
      </p>

      <h3>Example</h3>
      <ul>
        <li>New customer — ₱25,000 starting limit</li>
        <li>Established customer — ₱100,000</li>
        <li>Strong payment history — ₱250,000</li>
        <li>Large strategic account — individually assessed</li>
      </ul>
      <p>
        These numbers are illustrative. A real limit should be based on the company's risk
        capacity and customer economics.
      </p>

      <h3>Factors for Setting a Credit Limit</h3>
      <ul>
        <li>Customer financial strength</li>
        <li>Payment history</li>
        <li>Purchase volume</li>
        <li>Requested amount</li>
        <li>Payment terms</li>
        <li>Customer concentration</li>
        <li>Industry risk</li>
        <li>Trade references</li>
        <li>Credit information</li>
        <li>Expected profitability</li>
        <li>Business risk tolerance</li>
      </ul>

      <h3>Example</h3>
      <p>Customer A:</p>
      <pre>{`Average monthly purchases: ₱100,000
Payment terms: Net-30
Strong payment history
Stable business
Good trade references`}</pre>
      <p>
        The supplier may establish a limit sufficient for normal purchasing without
        unnecessarily exposing itself to a very large unpaid balance.
      </p>

      <h3>Credit Limit Review</h3>
      <pre>{`Current credit limit
       ↓
Actual purchasing
       ↓
Payment behavior
       ↓
Outstanding receivables
       ↓
Customer financial condition
       ↓
Risk assessment
       ↓
Keep / increase / decrease / suspend`}</pre>

      <h3>Reasons to Increase a Limit</h3>
      <ul>
        <li>Consistent payment history</li>
        <li>Increased legitimate purchasing needs</li>
        <li>Stronger financial position</li>
        <li>Higher verified demand</li>
        <li>Low delinquency</li>
        <li>Strategic relationship supported by acceptable risk</li>
      </ul>

      <h3>Reasons to Decrease a Limit</h3>
      <ul>
        <li>Repeated late payments</li>
        <li>Increasing overdue balance</li>
        <li>Deteriorating financial information</li>
        <li>Excessive exposure</li>
        <li>Major business changes</li>
        <li>Industry deterioration</li>
        <li>Unresolved disputes</li>
      </ul>

      <h3>Credit Limit vs Available Credit</h3>
      <p>
        Suppose credit limit = ₱200,000 and outstanding balance = ₱80,000.
      </p>
      <p>Available credit = ₱200,000 − ₱80,000 = ₱120,000.</p>
      <pre>{`₱200,000 Credit Limit
├──────────────────────────────┤
│ ₱80,000 Used │ ₱120,000 Free │
└──────────────────────────────┘`}</pre>
      <p>The business still owes the ₱80,000.</p>

      <hr />

      <h2>Receivables Aging</h2>
      <p>
        A credit-management system should track how long customers have owed money.
      </p>
      <ul>
        <li>Current — ₱300,000</li>
        <li>1–30 days overdue — ₱100,000</li>
        <li>31–60 days — ₱50,000</li>
        <li>61–90 days — ₱25,000</li>
        <li>90+ days — ₱25,000</li>
        <li>Total — ₱500,000</li>
      </ul>
      <p>This helps management identify deteriorating receivables.</p>
      <p>
        <strong>
          Aging Category % = Category Amount ÷ Total Receivables × 100
        </strong>
      </p>
      <p>For 90+ days: ₱25,000 ÷ ₱500,000 × 100 = 5%.</p>

      <hr />

      <h2>Days Sales Outstanding</h2>
      <p>
        DSO measures approximately how long it takes a business to collect its receivables.
      </p>
      <p>
        <strong>DSO = Average Accounts Receivable ÷ Credit Sales × Number of Days</strong>
      </p>
      <p>
        Example: average receivables ₱500,000, annual credit sales ₱6,000,000, days 365 →
        ₱500,000 ÷ ₱6,000,000 × 365 ≈ 30.4 days.
      </p>
      <p>
        A rising DSO can indicate slower collections, although interpretation depends on payment
        terms and business characteristics.
      </p>

      <hr />

      <h2>Bad Debt Rate</h2>
      <p>
        A business can monitor losses from customers who fail to pay.
      </p>
      <p>
        <strong>Bad Debt Rate = Bad Debt Expense ÷ Credit Sales × 100</strong>
      </p>
      <p>Example: ₱50,000 bad debt ÷ ₱5,000,000 credit sales × 100 = 1%.</p>

      <hr />

      <h2>Credit Approval Matrix</h2>
      <ul>
        <li>New customer + little information — small initial limit</li>
        <li>Verified customer + acceptable history — standard limit</li>
        <li>Strong payment history + increasing demand — review for higher limit</li>
        <li>Repeated late payments — reduce/review limit</li>
        <li>Serious unresolved delinquency — suspend additional credit</li>
        <li>Major financial deterioration — reassess terms/limit</li>
      </ul>
      <p>This should be treated as an internal framework, not a universal formula.</p>

      <hr />

      <h2>Credit Management Dashboard</h2>
      <ul>
        <li>Total receivables — overall credit exposure</li>
        <li>Current receivables — healthy/within terms exposure</li>
        <li>Overdue receivables — collection risk</li>
        <li>DSO — collection speed</li>
        <li>Bad debt rate — credit loss</li>
        <li>Credit utilization — customer usage of assigned limits</li>
        <li>On-time payment rate — payment reliability</li>
        <li>Average credit limit — exposure per account</li>
        <li>Top customer exposure — concentration risk</li>
        <li>Credit insurance coverage — insured exposure</li>
        <li>Collection rate — effectiveness of collections</li>
      </ul>

      <hr />

      <h2>Credit Risk Control System</h2>
      <pre>{`CUSTOMER REQUESTS CREDIT
                       ↓
               APPLICATION
                       ↓
                VERIFICATION
                       ↓
             CREDIT ASSESSMENT
                       ↓
          ┌────────────┴────────────┐
          ↓                         ↓
      ACCEPTABLE                  HIGH RISK
          ↓                         ↓
   CREDIT LIMIT SET          Lower limit / terms
          ↓                  / additional security
      CREDIT TERMS                  ↓
          ↓                    Decision
      PURCHASE                      ↓
          ↓                  Approved / Declined
       INVOICE
          ↓
       PAYMENT
          ↓
   ┌──────┴──────┐
   ↓             ↓
On time        Overdue
   ↓             ↓
Continue      Collection
   ↓             ↓
Monitor       Reassess
   ↓             ↓
Review limit / credit policy`}</pre>

      <hr />

      <h2>Purchase Financing vs Receivables Financing</h2>
      <ul>
        <li>Purchase financing — helps fund purchases</li>
        <li>Receivables financing — helps unlock cash from sales already made</li>
        <li>Purchase financing — starts before/during purchase</li>
        <li>Receivables financing — starts after receivable exists</li>
        <li>Purchase financing — supports inventory/assets</li>
        <li>Receivables financing — supports collection timing</li>
        <li>Purchase financing — liability may be supplier/lender financing</li>
        <li>Receivables financing — financing is linked to receivables</li>
      </ul>
      <p>
        Main questions: "How do we fund the purchase?" vs "How do we access cash before
        customers pay?"
      </p>

      <h3>Complete Cash-Flow Cycle</h3>
      <pre>{`Cash
 ↓
Purchase Financing
 ↓
Inventory / Production
 ↓
Sale
 ↓
Invoice
 ↓
Accounts Receivable
 ↓
Receivables Financing
 ↓
Early Cash
 ↓
Customer Payment
 ↓
Cash
 ↓
Repay Financing
 ↓
Reinvest`}</pre>

      <hr />

      <h2>Credit Policy Architecture</h2>
      <pre>{`CREDIT POLICY
                         │
       ┌─────────────────┼─────────────────┐
       ↓                 ↓                 ↓
   Eligibility       Assessment         Limits
       │                 │                 │
       ↓                 ↓                 ↓
Application         Verification       Exposure
Requirements        Credit Check       Controls
       │                 │                 │
       └─────────────────┼─────────────────┘
                         ↓
                      Terms
                         ↓
                    Documentation
                         ↓
                     Monitoring
                         ↓
                    Collections
                         ↓
                    Reassessment`}</pre>

      <hr />

      <h2>Credit Policy Lifecycle</h2>
      <ol>
        <li>Customer Application — collect the necessary information.</li>
        <li>Verification — confirm important information.</li>
        <li>
          Assessment — evaluate creditworthiness and repayment capacity.
        </li>
        <li>
          Decision — approve, modify, defer, or decline according to policy.
        </li>
        <li>Limit — set an appropriate maximum exposure.</li>
        <li>
          Terms — define payment deadline, discounts, fees, and conditions.
        </li>
        <li>
          Documentation — record the agreement and supporting information.
        </li>
        <li>
          Monitoring — track balances, payment behavior, and risk.
        </li>
        <li>
          Collection — follow the agreed process when invoices become due or overdue.
        </li>
        <li>
          Reassessment — change credit terms or limits when customer circumstances change.
        </li>
      </ol>

      <hr />

      <h2>Important Credit Formulas</h2>
      <p><strong>Available Credit = Credit Limit − Outstanding Balance</strong></p>
      <p>
        <strong>Credit Utilization = Outstanding Balance ÷ Credit Limit × 100</strong>
      </p>
      <p>
        <strong>On-Time Payment Rate = On-Time Payments ÷ Total Payments × 100</strong>
      </p>
      <p>
        <strong>Bad Debt Rate = Bad Debt Expense ÷ Credit Sales × 100</strong>
      </p>
      <p>
        <strong>
          DSO = Average Accounts Receivable ÷ Credit Sales × Days
        </strong>
      </p>
      <p>
        <strong>
          Receivables Concentration = Customer Receivables ÷ Total Receivables × 100
        </strong>
      </p>
      <p>
        Example: one customer owes ₱300,000 and total receivables are ₱1,000,000 → ₱300,000 ÷
        ₱1,000,000 × 100 = 30%.
      </p>
      <p>
        A high concentration means a significant portion of receivables depends on one customer.
      </p>

      <hr />

      <h2>Common Mistakes</h2>
      <ol>
        <li>Granting credit based only on sales volume.</li>
        <li>No written credit policy.</li>
        <li>Setting limits without considering cash flow.</li>
        <li>Never reviewing approved customers.</li>
        <li>Ignoring receivables aging.</li>
        <li>Financing every invoice.</li>
        <li>Assuming insurance eliminates credit risk.</li>
        <li>Increasing credit limits simply because customers ask.</li>
        <li>Ignoring customer concentration.</li>
        <li>Using credit to compensate for weak economics.</li>
      </ol>

      <hr />

      <h2>Complete Credit Risk Management Framework</h2>
      <pre>{`MARKET / CUSTOMER
                    ↓
              Credit Request
                    ↓
              Application
                    ↓
              Verification
                    ↓
             Credit Assessment
                    ↓
       ┌────────────┴────────────┐
       ↓                         ↓
   Creditworthy              Higher Risk
       ↓                         ↓
 Appropriate Limit       Lower Limit / Terms
       ↓                  / Security / Decline
 Payment Terms                  ↓
       ↓                     Decision
 Purchase/Sale
       ↓
     Invoice
       ↓
 Accounts Receivable
       ↓
 ┌─────┴──────┐
 ↓            ↓
Paid        Overdue
 ↓            ↓
Cash       Collection
 ↓            ↓
Review     Reassess
 ↓            ↓
Reinvest   Limit/Terms Change
       \      /
        \    /
       Monitoring
           ↓
      Credit Reporting
           ↓
       Risk Review
           ↓
     Policy Improvement`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Credit creates both opportunity and exposure.</li>
        <li>
          Purchase financing should match the purpose and economic life of the purchase.
        </li>
        <li>Receivables financing primarily solves cash-timing problems.</li>
        <li>
          An invoice is an asset/receivable, not the same thing as collected cash.
        </li>
        <li>Credit insurance transfers only specified risks under the policy.</li>
        <li>Credit monitoring should continue after approval.</li>
        <li>
          Credit reporting requires accurate and appropriately handled information.
        </li>
        <li>
          Credit assessment should consider repayment capacity, not just revenue or assets.
        </li>
        <li>
          Credit verification improves the reliability of assessment information.
        </li>
        <li>
          Customer credit checks should be proportionate to the level of exposure and conducted
          appropriately.
        </li>
        <li>
          A credit policy creates consistent rules for granting and managing credit.
        </li>
        <li>A credit limit controls maximum exposure; it does not guarantee repayment.</li>
        <li>
          Longer payment terms generally increase the time cash is tied up in receivables.
        </li>
        <li>
          Customer concentration is an important component of credit risk.
        </li>
        <li>
          Credit decisions should be reviewed as customer circumstances change.
        </li>
        <li>
          Good credit management connects sales, finance, accounting, collections, and risk
          management.
        </li>
      </ol>

      <h3>Complete Part 3 System</h3>
      <p>
        Purchase Need → Purchase Financing → Inventory/Asset → Sale → Invoice → Receivable →
        Receivables Financing → Collection → Repayment.
      </p>
      <p>
        For customer credit: Customer Application → Verification → Credit Check → Credit
        Assessment → Credit Policy → Credit Limit → Terms → Sale → Invoice → Monitoring →
        Collection → Reassessment.
      </p>
      <p>
        For risk protection: Credit Exposure → Monitoring → Credit Insurance → Loss Event →
        Claim/Recovery → Risk Review.
      </p>
      <p>
        For continuous improvement: Credit Data → Reporting → Monitoring → Assessment → Policy →
        Limit → Customer Behavior → New Data → Reassessment.
      </p>
    </LessonLayout>
  )
}
