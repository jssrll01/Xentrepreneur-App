import LessonLayout from '../components/LessonLayout'

export default function CreditConceptsPart4() {
  return (
    <LessonLayout
      number="75"
      title="Credit Concepts & Strategies — Part 4"
      summary="16 credit lifecycle systems — approval, rejection, terms, risk, delinquency, collections, accounts receivable and payable, aging, and late-payment policy."
    >
      <h2>Credit Concepts &amp; Strategies — Part 4</h2>
      <p>
        This part focuses on the credit lifecycle after a customer requests credit—from approval
        and terms through invoicing, payment, delinquency, collections, and financial reporting.
      </p>
      <p>
        The central system is: Credit Request → Assessment → Approval/Rejection → Credit Terms
        → Sale → Invoice → Accounts Receivable → Payment Reminder → Collection → Payment →
        Account Review.
      </p>
      <p>
        On the business's own purchasing side, the corresponding obligation is: Purchase →
        Accounts Payable → Payment Terms → Payment → Supplier Relationship.
      </p>

      <hr />

      <h2>1. Credit Approval</h2>
      <h3>Definition</h3>
      <p>
        Credit approval is the formal decision to allow a customer, individual, or business to
        receive credit under specified conditions.
      </p>
      <p>Approval usually determines:</p>
      <ul>
        <li>Whether credit is granted</li>
        <li>Credit limit</li>
        <li>Payment terms</li>
        <li>Interest or financing charges</li>
        <li>Required security/collateral</li>
        <li>Documentation requirements</li>
        <li>Review period</li>
      </ul>

      <h3>How It Works</h3>
      <pre>{`Customer applies for credit
          ↓
Information collected
          ↓
Identity/business verification
          ↓
Credit assessment
          ↓
Risk evaluation
          ↓
Credit limit determined
          ↓
Terms determined
          ↓
Approval
          ↓
Credit account opened`}</pre>

      <h3>Example</h3>
      <p>
        A wholesaler receives an application from a retailer requesting ₱200,000 credit limit.
        The wholesaler reviews business information, trade references, payment history, existing
        obligations, expected purchasing volume, and financial capacity.
      </p>
      <p>
        It may approve ₱100,000 initial limit + Net-30 terms rather than automatically granting
        the requested ₱200,000.
      </p>

      <h3>Approval Levels</h3>
      <ul>
        <li>₱0–₱50,000 — credit officer</li>
        <li>₱50,001–₱250,000 — finance manager</li>
        <li>₱250,001+ — senior management</li>
      </ul>
      <p>
        These are illustrative internal controls, not universal requirements.
      </p>

      <h3>Benefits</h3>
      <ul>
        <li>Controls credit exposure</li>
        <li>Creates consistent decisions</li>
        <li>Reduces unnecessary bad debt</li>
        <li>Establishes clear customer expectations</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        Approval should be based on acceptable risk and repayment capacity, not simply the
        customer's requested amount.
      </p>

      <hr />

      <h2>2. Credit Rejection</h2>
      <h3>Definition</h3>
      <p>Credit rejection is the decision not to extend requested credit.</p>
      <p>
        A rejection does not necessarily mean the customer is financially incapable in every
        context. It means the specific credit request does not meet the applicable approval
        criteria.
      </p>

      <h3>Possible Reasons</h3>
      <ul>
        <li>Insufficient credit information</li>
        <li>Unacceptable payment history</li>
        <li>High existing obligations</li>
        <li>Excessive requested exposure</li>
        <li>Unverified information</li>
        <li>High risk relative to policy</li>
        <li>Inability to establish repayment capacity</li>
        <li>Business relationship is too new</li>
        <li>Requested terms are unsuitable</li>
      </ul>

      <h3>Example</h3>
      <p>
        A customer requests ₱500,000 Net-90. The business may determine that the requested
        amount is too large, the payment period is too long, and available information is
        insufficient.
      </p>
      <p>
        Instead of simply rejecting the customer entirely, the business could potentially offer
        ₱50,000 Net-30 if its policy allows such an alternative.
      </p>

      <h3>Rejection Flow</h3>
      <pre>{`Credit request
      ↓
Assessment
      ↓
Policy requirements
      ↓
Does request meet criteria?
      │
   ┌──┴──┐
   ↓     ↓
 Yes     No
   ↓     ↓
Approve  Reject / Modify`}</pre>

      <h3>Important Principle</h3>
      <p>
        Credit rejection controls exposure; it does not have to end the commercial relationship.
      </p>

      <hr />

      <h2>3. Credit Terms</h2>
      <h3>Definition</h3>
      <p>Credit terms are the conditions under which credit is provided.</p>
      <p>They can include:</p>
      <ul>
        <li>Credit limit</li>
        <li>Payment period</li>
        <li>Interest rate</li>
        <li>Fees</li>
        <li>Early-payment discounts</li>
        <li>Late-payment charges</li>
        <li>Security requirements</li>
        <li>Default conditions</li>
        <li>Collection procedures</li>
      </ul>

      <h3>Example</h3>
      <pre>{`Credit limit: ₱200,000
Payment terms: Net-30
Early discount: 2% if paid within 10 days
Late charge: According to agreement`}</pre>
      <p>
        The complete arrangement—not just the Net-30 label—is the credit terms.
      </p>

      <h3>Credit Terms Structure</h3>
      <pre>{`Credit Terms
     │
     ├── Amount
     ├── Limit
     ├── Payment period
     ├── Interest
     ├── Fees
     ├── Discounts
     ├── Security
     ├── Late-payment rules
     └── Default conditions`}</pre>

      <hr />

      <h2>4. Payment Terms</h2>
      <h3>Definition</h3>
      <p>
        Payment terms specify when and how payment is expected to occur.
      </p>
      <p>Examples:</p>
      <ul>
        <li>Due on receipt</li>
        <li>Net-15</li>
        <li>Net-30</li>
        <li>Net-60</li>
        <li>Net-90</li>
        <li>Installment payments</li>
        <li>Monthly payments</li>
        <li>Milestone payments</li>
        <li>Prepayment</li>
        <li>Partial deposit + final payment</li>
      </ul>

      <h3>Credit Terms vs Payment Terms</h3>
      <ul>
        <li>Credit terms — broader concept</li>
        <li>Payment terms — narrower concept</li>
        <li>Credit terms — covers overall credit arrangement</li>
        <li>Payment terms — focuses on payment timing/method</li>
        <li>Credit terms — can include limit, fees, security, default</li>
        <li>Payment terms — usually specifies when/how payment occurs</li>
        <li>Credit terms — includes risk controls</li>
        <li>Payment terms — defines payment obligation</li>
      </ul>

      <h3>Example</h3>
      <p>
        Credit terms: ₱100,000 limit + Net-30 + late fee + credit review.
      </p>
      <p>
        Payment term: full invoice due 30 days after the agreed invoice date.
      </p>

      <hr />

      <h2>5. Credit Risk</h2>
      <h3>Definition</h3>
      <p>
        Credit risk is the possibility that a person, customer, business, or other counterparty
        will fail to meet a financial obligation as agreed.
      </p>
      <p>
        For a business selling on credit, the primary concern is: "Will this customer pay what
        they owe according to the agreement?"
      </p>

      <h3>Sources of Credit Risk</h3>
      <ul>
        <li>Customer insolvency</li>
        <li>Cash-flow problems</li>
        <li>Business failure</li>
        <li>Economic downturn</li>
        <li>Fraud</li>
        <li>Payment disputes</li>
        <li>Operational problems</li>
        <li>Concentration in one customer</li>
        <li>Political or commercial conditions in certain transactions</li>
      </ul>

      <h3>Example</h3>
      <pre>{`Wholesaler has ₱2,000,000 total receivables
One customer owes ₱1,000,000
That customer represents ₱1,000,000 ÷ ₱2,000,000 × 100 = 50% of total receivables`}</pre>
      <p>
        A problem with that one customer could therefore have a significant financial effect.
      </p>

      <h3>Credit Risk Management</h3>
      <pre>{`Identify
   ↓
Assess
   ↓
Limit
   ↓
Monitor
   ↓
Collect
   ↓
Review
   ↓
Improve`}</pre>

      <hr />

      <h2>6. Default Risk</h2>
      <h3>Definition</h3>
      <p>
        Default risk is the possibility that a borrower or debtor will fail to meet a
        contractual obligation according to the agreement.
      </p>
      <p>Default can involve:</p>
      <ul>
        <li>Failure to pay</li>
        <li>Failure to make required installments</li>
        <li>Breach of specified obligations</li>
        <li>Failure to meet certain contractual conditions</li>
      </ul>
      <p>
        The exact definition of default is determined by the relevant agreement and applicable
        law.
      </p>

      <h3>Credit Risk vs Default Risk</h3>
      <ul>
        <li>Credit risk — broad risk of financial non-performance</li>
        <li>Default risk — specific risk of failure to meet obligations</li>
        <li>Credit risk — can include several forms of counterparty risk</li>
        <li>Default risk — focuses on default event</li>
        <li>Credit risk — used broadly in risk management</li>
        <li>Default risk — often linked to contractual default</li>
      </ul>

      <h3>Example</h3>
      <p>
        A customer owes ₱100,000 under Net-30 terms. The customer does not pay and eventually
        reaches the contractual conditions defining default.
      </p>
      <p>The business now faces potential:</p>
      <ul>
        <li>Collection costs</li>
        <li>Cash-flow loss</li>
        <li>Bad debt</li>
        <li>Legal costs</li>
        <li>Write-off</li>
      </ul>

      <hr />

      <h2>7. Delinquency</h2>
      <h3>Definition</h3>
      <p>
        Delinquency occurs when a payment or financial obligation is past due according to its
        required payment date.
      </p>
      <p>
        A delinquent account is not necessarily the same as a defaulted account.
      </p>

      <h3>Example</h3>
      <pre>{`Payment due: September 1
Payment not made by the due date: September 2
The account may now be considered past due/delinquent depending on the applicable agreement and reporting rules.`}</pre>

      <h3>Aging of Delinquency</h3>
      <pre>{`Current
  ↓
1–30 days overdue
  ↓
31–60 days
  ↓
61–90 days
  ↓
90+ days
  ↓
Potential default / escalation`}</pre>
      <p>
        The exact categories and consequences depend on the business's policy and contract.
      </p>

      <h3>Important Principle</h3>
      <p>
        Delinquency is a warning signal that should trigger appropriate monitoring and
        collection action.
      </p>

      <hr />

      <h2>8. Late Payment</h2>
      <h3>Definition</h3>
      <p>A late payment is a payment made after the agreed payment deadline.</p>

      <h3>Example</h3>
      <pre>{`Invoice: ₱50,000
Due: September 15
Paid: September 25`}</pre>
      <p>The payment was made 10 days after the stated due date.</p>

      <h3>Potential Consequences</h3>
      <p>Depending on the agreement:</p>
      <ul>
        <li>Late fees</li>
        <li>Interest</li>
        <li>Collection activity</li>
        <li>Credit-limit reduction</li>
        <li>Suspension of additional credit</li>
        <li>Changes to future payment terms</li>
        <li>Reporting consequences where applicable</li>
      </ul>

      <h3>Causes</h3>
      <p>Late payment can result from:</p>
      <ul>
        <li>Customer cash-flow problems</li>
        <li>Forgotten due dates</li>
        <li>Invoice errors</li>
        <li>Payment-processing issues</li>
        <li>Disputed invoices</li>
        <li>Internal administrative problems</li>
        <li>Intentional delay</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        Investigate the cause of late payment before assuming every late payment represents the
        same level of risk.
      </p>

      <hr />

      <h2>9. Collection Process</h2>
      <h3>Definition</h3>
      <p>
        The collection process is the systematic process used to obtain payment from customers
        who owe money.
      </p>
      <p>A professional collection system should be:</p>
      <ul>
        <li>Consistent</li>
        <li>Documented</li>
        <li>Proportionate</li>
        <li>Respectful</li>
        <li>Contract-based</li>
        <li>Compliant with applicable laws</li>
      </ul>

      <h3>Basic Collection Process</h3>
      <pre>{`Invoice issued
      ↓
Payment terms begin
      ↓
Pre-due reminder
      ↓
Due-date reminder
      ↓
Payment monitoring
      ↓
Past due?
   ┌──┴──┐
   ↓     ↓
  No     Yes
   ↓     ↓
Close   Follow-up
         ↓
      Escalation
         ↓
      Payment plan /
      dispute resolution
         ↓
      Final collection
         ↓
      Recovery / write-off`}</pre>

      <h3>Collection Stages</h3>
      <p>
        <strong>Stage 1 — Preventive.</strong> Before the due date: send invoice, confirm
        receipt, provide payment instructions, send reminder.
      </p>
      <p>
        <strong>Stage 2 — Early Follow-Up.</strong> After the due date: contact customer, confirm
        whether payment was processed, identify disputes, request expected payment date.
      </p>
      <p>
        <strong>Stage 3 — Escalation.</strong> For persistent overdue accounts: formal
        collection notice, credit suspension, management escalation, payment arrangement where
        appropriate.
      </p>
      <p>
        <strong>Stage 4 — Recovery.</strong> Depending on the situation: negotiated settlement,
        collection agency, legal recovery, write-off according to accounting policy.
      </p>

      <h3>Important Principle</h3>
      <p>Good collections begin before an invoice becomes overdue.</p>

      <hr />

      <h2>10. Accounts Receivable</h2>
      <h3>Definition</h3>
      <p>
        Accounts receivable (AR) is money owed to a business by customers for goods or services
        already provided, generally under credit terms.
      </p>

      <h3>Example</h3>
      <p>
        A web-development company completes a ₱150,000 project. It sends the customer an invoice
        with Net-30 terms. Until the customer pays, the ₱150,000 is generally an account
        receivable.
      </p>
      <pre>{`Service delivered
      ↓
Invoice issued
      ↓
Customer owes ₱150,000
      ↓
Accounts Receivable
      ↓
Customer pays
      ↓
Cash`}</pre>

      <h3>AR Formula</h3>
      <p>
        A simplified relationship is:
        <strong>Ending AR = Beginning AR + Credit Sales − Collections</strong>
      </p>
      <p>
        Adjustments such as credit notes, write-offs, and other transactions can also affect the
        balance.
      </p>

      <h3>Why AR Matters</h3>
      <p>High AR can mean:</p>
      <ul>
        <li>Strong credit sales</li>
        <li>Cash tied up in customer obligations</li>
        <li>Collection risk</li>
        <li>Working-capital requirements</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        Revenue recognized from a credit sale does not necessarily mean cash has been collected.
      </p>

      <hr />

      <h2>11. Accounts Payable</h2>
      <h3>Definition</h3>
      <p>
        Accounts payable (AP) is money a business owes to suppliers or vendors for goods or
        services already received.
      </p>

      <h3>Example</h3>
      <p>
        Xmarket purchases ₱100,000 inventory from a supplier under Net-30 terms. Until the
        supplier is paid, the ₱100,000 is generally an accounts payable obligation.
      </p>
      <pre>{`Goods received
      ↓
Supplier invoice
      ↓
Business owes ₱100,000
      ↓
Accounts Payable
      ↓
Payment made
      ↓
AP decreases`}</pre>

      <h3>AP Formula</h3>
      <p>
        Simplified: <strong>Ending AP = Beginning AP + Credit Purchases − Payments</strong>
      </p>
      <p>Other adjustments may apply.</p>

      <h3>AR vs AP</h3>
      <ul>
        <li>AR — money customers owe the business</li>
        <li>AP — money business owes suppliers</li>
        <li>AR — asset in accounting terms, subject to accounting rules</li>
        <li>AP — liability in accounting terms</li>
        <li>AR — created by credit sales</li>
        <li>AP — created by credit purchases</li>
        <li>AR — collection is the goal</li>
        <li>AP — payment is the obligation</li>
        <li>Both affect working capital</li>
      </ul>

      <h3>Cash-Flow Relationship</h3>
      <pre>{`Customer
   ↓ pays
Business
   ↓ pays
Supplier`}</pre>
      <p>
        A business can sometimes use the timing difference between AR collection and AP payment
        to manage working capital.
      </p>

      <hr />

      <h2>12. Aging Report</h2>
      <h3>Definition</h3>
      <p>
        An aging report organizes receivables or payables according to how long they have been
        outstanding.
      </p>

      <h3>Accounts Receivable Aging Example</h3>
      <ul>
        <li>Current — ₱400,000</li>
        <li>1–30 days overdue — ₱150,000</li>
        <li>31–60 days — ₱75,000</li>
        <li>61–90 days — ₱50,000</li>
        <li>90+ days — ₱25,000</li>
        <li>Total — ₱700,000</li>
      </ul>

      <h3>Why Aging Reports Matter</h3>
      <p>They help identify:</p>
      <ul>
        <li>Overdue accounts</li>
        <li>Collection priorities</li>
        <li>Customer risk</li>
        <li>Cash-flow problems</li>
        <li>Potential bad debts</li>
      </ul>

      <h3>Aging Visualization</h3>
      <pre>{`Receivables
│
├── Current       → Normal collection
├── 1–30 days     → Follow-up
├── 31–60 days    → Stronger collection
├── 61–90 days    → Escalation/review
└── 90+ days      → High-risk recovery`}</pre>
      <p>
        The actual actions should follow the company's policy and contractual/legal requirements.
      </p>

      <hr />

      <h2>13. Invoice Management</h2>
      <h3>Definition</h3>
      <p>
        Invoice management is the process of creating, sending, tracking, reconciling, and
        storing invoices.
      </p>

      <h3>A Good Invoice Should Clearly Identify</h3>
      <ul>
        <li>Seller</li>
        <li>Customer</li>
        <li>Invoice number</li>
        <li>Invoice date</li>
        <li>Products/services</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Taxes where applicable</li>
        <li>Discounts</li>
        <li>Total amount</li>
        <li>Payment terms</li>
        <li>Due date</li>
        <li>Payment instructions</li>
      </ul>

      <h3>Invoice Lifecycle</h3>
      <pre>{`Sale/service
    ↓
Invoice created
    ↓
Invoice checked
    ↓
Invoice sent
    ↓
Customer receives
    ↓
Payment tracked
    ↓
Reminder
    ↓
Payment
    ↓
Reconciliation
    ↓
Invoice closed`}</pre>

      <h3>Invoice Management System</h3>
      <p>A business can use:</p>
      <ul>
        <li>Accounting software</li>
        <li>Spreadsheet</li>
        <li>ERP</li>
        <li>Billing software</li>
        <li>E-commerce platform</li>
        <li>Custom web application</li>
      </ul>

      <h3>Useful Invoice Metrics</h3>
      <p>
        <strong>Invoice Error Rate = Incorrect Invoices ÷ Total Invoices × 100</strong>
      </p>
      <p>
        <strong>Collection Rate = Collected Amount ÷ Amount Due × 100</strong>
      </p>

      <h3>Important Principle</h3>
      <p>
        Accurate invoices reduce payment delays, disputes, and unnecessary collection work.
      </p>

      <hr />

      <h2>14. Payment Reminders</h2>
      <h3>Definition</h3>
      <p>
        Payment reminders are communications sent to customers to remind them about upcoming or
        overdue payments.
      </p>
      <p>They can be sent through:</p>
      <ul>
        <li>Email</li>
        <li>SMS</li>
        <li>Messaging systems</li>
        <li>Customer portals</li>
        <li>Automated billing systems</li>
        <li>Phone calls for appropriate situations</li>
      </ul>

      <h3>Reminder Schedule</h3>
      <pre>{`Invoice issued
     ↓
Invoice confirmation
     ↓
7 days before due date
     ↓
1–3 days before due date
     ↓
Due date
     ↓
1–3 days overdue
     ↓
7–15 days overdue
     ↓
Escalation according to policy`}</pre>
      <p>
        Exact timing should depend on the contract, customer relationship, and business model.
      </p>

      <h3>Example</h3>
      <p>
        Before due date: "Your ₱50,000 invoice is due on September 30."
      </p>
      <p>
        After due date: "Our records show that the ₱50,000 invoice due September 30 remains
        outstanding. Please let us know if payment has already been processed or if there is an
        issue with the invoice."
      </p>

      <h3>Benefits</h3>
      <ul>
        <li>Reduces forgotten payments</li>
        <li>Improves collection timing</li>
        <li>Reduces administrative work</li>
        <li>Creates documentation</li>
        <li>Improves cash-flow predictability</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        A reminder should make payment easier, not merely pressure the customer.
      </p>

      <hr />

      <h2>15. Early-Payment Discount</h2>
      <h3>Definition</h3>
      <p>
        An early-payment discount is a reduction in the invoice amount offered when a customer
        pays earlier than the normal due date.
      </p>
      <p>A common format is: 2/10, Net-30.</p>
      <p>Usually meaning:</p>
      <ul>
        <li>2% discount if paid within 10 days</li>
        <li>Full amount due within 30 days</li>
      </ul>
      <p>The exact terms should be confirmed in the agreement.</p>

      <h3>Example</h3>
      <pre>{`Invoice: ₱100,000
Discount: 2%
Discount amount: ₱100,000 × 0.02 = ₱2,000
Early payment amount: ₱98,000`}</pre>

      <h3>Why Businesses Offer It</h3>
      <p>The seller may benefit from:</p>
      <ul>
        <li>Faster cash collection</li>
        <li>Lower collection risk</li>
        <li>Lower working-capital requirements</li>
        <li>Lower receivables outstanding</li>
      </ul>
      <p>The buyer benefits from a lower purchase cost.</p>

      <h3>Discount Economics</h3>
      <p>
        The seller should ask: "Is receiving cash earlier worth giving up the discount?"
      </p>
      <p>The answer depends on:</p>
      <ul>
        <li>Cash needs</li>
        <li>Alternative financing cost</li>
        <li>Customer default risk</li>
        <li>Margin</li>
        <li>Working-capital requirements</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        An early-payment discount is effectively a cost of accelerating cash collection for the
        seller and a potential saving for the buyer.
      </p>

      <hr />

      <h2>16. Late-Payment Policy</h2>
      <h3>Definition</h3>
      <p>
        A late-payment policy defines what happens when customers do not pay according to agreed
        terms.
      </p>
      <p>It should clearly explain:</p>
      <ul>
        <li>Due dates</li>
        <li>Grace periods, if any</li>
        <li>Late charges</li>
        <li>Interest, if applicable</li>
        <li>Reminder process</li>
        <li>Collection escalation</li>
        <li>Credit suspension</li>
        <li>Payment arrangements</li>
        <li>Dispute procedures</li>
        <li>When accounts may be sent for further recovery</li>
      </ul>
      <p>The policy must comply with applicable laws and contractual requirements.</p>

      <h3>Example Policy Structure</h3>
      <pre>{`Invoice issued
      ↓
Due date
      ↓
Payment received?
   ┌──┴──┐
   ↓     ↓
 Yes     No
   ↓     ↓
Close   Reminder
         ↓
      Grace period
         ↓
      Still unpaid?
         ↓
      Collection contact
         ↓
      Credit restriction
         ↓
      Escalation
         ↓
      Recovery process`}</pre>

      <h3>Good Late-Payment Policy</h3>
      <p>A well-designed policy should be:</p>
      <ul>
        <li>Clear</li>
        <li>Visible</li>
        <li>Consistent</li>
        <li>Reasonable</li>
        <li>Contractually supported</li>
        <li>Legally compliant</li>
        <li>Documented</li>
      </ul>

      <h3>Avoid</h3>
      <ul>
        <li>Unexpected fees</li>
        <li>Hidden conditions</li>
        <li>Arbitrary enforcement</li>
        <li>Misleading threats</li>
        <li>Inconsistent treatment without legitimate reason</li>
        <li>Charges not supported by the agreement or applicable law</li>
      </ul>

      <hr />

      <h2>Accounts Receivable vs Accounts Payable</h2>
      <pre>{`BUSINESS
                    │
        ┌───────────┴───────────┐
        ↓                       ↓
    Credit Sale             Credit Purchase
        ↓                       ↓
Accounts Receivable       Accounts Payable
        ↓                       ↓
 Customer owes            Business owes
        ↓                       ↓
 Collection               Supplier payment
        ↓                       ↓
      CASH ←──────────────→ CASH`}</pre>

      <h3>Working-Capital Relationship</h3>
      <p>
        A simplified formula:
        <strong>Working Capital = Current Assets − Current Liabilities</strong>
      </p>
      <p>
        Accounts receivable is generally a current asset. Accounts payable is generally a
        current liability.
      </p>

      <hr />

      <h2>Credit Lifecycle</h2>
      <pre>{`CUSTOMER
                       │
                       ↓
                Credit Application
                       │
                       ↓
                Credit Assessment
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
          Approved             Rejected
             │
             ↓
        Credit Terms
             │
             ↓
        Credit Limit
             │
             ↓
            Sale
             │
             ↓
          Invoice
             │
             ↓
     Accounts Receivable
             │
             ↓
      Payment Reminder
             │
             ↓
        Payment Due
             │
       ┌─────┴─────┐
       ↓           ↓
     Paid        Unpaid
       ↓           ↓
    Close       Delinquency
                   │
                   ↓
             Collection Process
                   │
             ┌─────┴─────┐
             ↓           ↓
          Payment     Escalation
             │           │
             └─────┬─────┘
                   ↓
             Account Review
                   ↓
         Credit Limit / Terms
              Reassessment`}</pre>

      <hr />

      <h2>Credit Risk Escalation System</h2>
      <pre>{`CURRENT
  │
  ↓
Due Date Approaching
  │
  ↓
Payment Reminder
  │
  ↓
PAST DUE
  │
  ↓
Delinquency Monitoring
  │
  ↓
Collection Contact
  │
  ↓
Credit Restriction
  │
  ↓
Escalated Collection
  │
  ↓
Recovery / Settlement / Write-Off`}</pre>
      <p>
        The exact escalation point should be determined by the business's policy, contract,
        customer circumstances, and applicable law.
      </p>

      <hr />

      <h2>AR and Collection Dashboard</h2>
      <ul>
        <li>Total AR — total customer receivables</li>
        <li>Current AR — amount within terms</li>
        <li>Overdue AR — amount past due</li>
        <li>30+ day AR — aging risk</li>
        <li>60+ day AR — higher collection risk</li>
        <li>90+ day AR — significant aging exposure</li>
        <li>DSO — collection speed</li>
        <li>Collection rate — amount successfully collected</li>
        <li>Bad debt rate — credit loss</li>
        <li>On-time payment rate — customer payment reliability</li>
        <li>Average days overdue — collection performance</li>
        <li>Customer concentration — dependence on major debtors</li>
      </ul>

      <hr />

      <h2>Credit Terms and Cash Flow</h2>
      <p>Credit decisions directly affect working capital.</p>
      <pre>{`Suppose a business sells ₱1,000,000 per month with Net-30 terms
Customers generally pay after approximately one month
The business may need substantial working capital to operate while waiting for those collections

If terms become Net-60:

Net-30
Sale → ~30 days → Cash

Net-60
Sale → ~60 days → Cash`}</pre>
      <p>
        The additional collection period can increase the amount of cash tied up in receivables.
      </p>
      <p>
        This is why: <strong>Sales Growth ≠ Cash-Flow Growth</strong>. A business can increase
        sales while simultaneously experiencing greater working-capital pressure.
      </p>

      <hr />

      <h2>Early Payment vs Late Payment</h2>
      <pre>{`EARLY-PAYMENT DISCOUNT
Customer pays earlier
        ↓
Seller receives cash faster
        ↓
Receivables decrease
        ↓
Seller gives discount


LATE-PAYMENT POLICY
Customer pays late
        ↓
Seller follows collection process
        ↓
Receivable remains outstanding
        ↓
Potential fees/restrictions/escalation`}</pre>

      <hr />

      <h2>Credit Control Framework</h2>
      <p>A strong credit operation can use five layers:</p>
      <p>
        <strong>Layer 1 — Prevention.</strong> Before credit is granted: application,
        verification, credit assessment, customer credit check, credit policy, credit limit.
      </p>
      <p>
        <strong>Layer 2 — Clear Terms.</strong> At the time of sale: credit terms, payment
        terms, invoice, due date, discount, late-payment conditions.
      </p>
      <p>
        <strong>Layer 3 — Monitoring.</strong> After the sale: accounts receivable, aging
        report, payment status, credit utilization, customer behavior.
      </p>
      <p>
        <strong>Layer 4 — Collection.</strong> When payment is approaching or overdue:
        reminders, follow-ups, collection process, escalation.
      </p>
      <p>
        <strong>Layer 5 — Review.</strong> After payment behavior is observed: maintain limit,
        increase limit, decrease limit, change terms, suspend credit, reassess customer.
      </p>

      <hr />

      <h2>Common Mistakes</h2>
      <ol>
        <li>Approving credit without checking repayment capacity.</li>
        <li>Setting credit limits too high.</li>
        <li>Failing to document terms.</li>
        <li>Sending invoices late.</li>
        <li>Not confirming invoice receipt.</li>
        <li>Waiting until an account is severely overdue.</li>
        <li>Treating every overdue account identically.</li>
        <li>Offering discounts without calculating the economics.</li>
        <li>Ignoring accounts payable.</li>
        <li>Confusing profit with cash.</li>
      </ol>

      <hr />

      <h2>Credit Management Metrics</h2>
      <p>
        <strong>
          Credit Approval Rate = Approved Applications ÷ Total Applications × 100
        </strong>
      </p>
      <p>Example: 80 approved from 100 applications → 80%.</p>
      <p>
        <strong>
          Delinquency Rate = Delinquent Receivables ÷ Total Receivables × 100
        </strong>
      </p>
      <p>Example: ₱100,000 delinquent out of ₱1,000,000 → 10%.</p>
      <p>
        <strong>Collection Rate = Amount Collected ÷ Amount Due × 100</strong>
      </p>
      <p>Example: ₱900,000 collected from ₱1,000,000 due → 90%.</p>
      <p>
        <strong>DSO = Average AR ÷ Credit Sales × Number of Days</strong>
      </p>
      <p>
        A rising DSO can indicate slower collection, but it must be compared with the business's
        agreed payment terms and historical pattern.
      </p>
      <p>
        <strong>
          Receivables Turnover = Net Credit Sales ÷ Average Accounts Receivable
        </strong>
      </p>
      <p>
        Higher turnover generally means receivables are being converted to cash more frequently,
        but context matters.
      </p>

      <hr />

      <h2>Complete Credit &amp; Collection System</h2>
      <pre>{`CREDIT POLICY
                       ↓
              Customer Application
                       ↓
              Credit Verification
                       ↓
              Credit Assessment
                       ↓
              Approval / Rejection
                       ↓
                Credit Limit
                       ↓
                Credit Terms
                       ↓
                Payment Terms
                       ↓
                     SALE
                       ↓
                   INVOICE
                       ↓
              Accounts Receivable
                       ↓
              Invoice Management
                       ↓
              Payment Reminders
                       ↓
                 Payment Due
                       ↓
            ┌──────────┴──────────┐
            ↓                     ↓
          PAID                  UNPAID
            ↓                     ↓
     Reconcile/Close          Delinquency
                                  ↓
                            Collection Process
                                  ↓
                         ┌────────┴────────┐
                         ↓                 ↓
                      Payment          Escalation
                         ↓                 ↓
                       Close       Recovery/Settlement
                         │                 │
                         └────────┬────────┘
                                  ↓
                           Credit Review
                                  ↓
                       Adjust Limit / Terms
                                  ↓
                         Update Credit Policy`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>
          Credit approval is a risk-management decision, not simply a sales decision.
        </li>
        <li>
          Credit rejection protects the business from unacceptable exposure.
        </li>
        <li>Credit terms should be clear before credit is used.</li>
        <li>Payment terms determine when money is expected.</li>
        <li>Credit risk continues after approval.</li>
        <li>
          Default risk is the possibility of contractual non-performance.
        </li>
        <li>Delinquency should be detected and addressed early.</li>
        <li>
          Late payments affect both cash flow and customer risk assessment.
        </li>
        <li>
          Accounts receivable represents money customers owe the business.
        </li>
        <li>
          Accounts payable represents money the business owes suppliers/vendors.
        </li>
        <li>
          Aging reports turn outstanding balances into actionable risk information.
        </li>
        <li>Accurate invoice management supports faster collections.</li>
        <li>Payment reminders reduce avoidable payment delays.</li>
        <li>
          Early-payment discounts trade some revenue for potentially faster cash collection.
        </li>
        <li>
          Late-payment policies should be clear, consistent, documented, and legally compliant.
        </li>
        <li>
          Credit limits should reflect acceptable exposure and repayment evidence.
        </li>
        <li>
          Sales growth can increase working-capital requirements when customers buy on credit.
        </li>
        <li>Profit and cash collection are different financial concepts.</li>
        <li>
          Credit management connects sales, accounting, finance, customer service, and risk
          management.
        </li>
        <li>
          The objective is controlled credit growth—not maximum credit sales.
        </li>
      </ol>

      <h3>Complete Part 4 Formula</h3>
      <p>
        Assess → Approve/Reject → Set Credit Limit → Set Terms → Sell → Invoice → Record AR →
        Monitor Aging → Remind → Collect → Escalate When Necessary → Reconcile → Reassess Credit
        Risk → Adjust Terms/Limits → Improve Policy.
      </p>
      <p>
        For the business's purchasing side: Purchase → Invoice → Record AP → Track Due Date →
        Use Payment Terms → Pay → Reconcile → Maintain Supplier Relationship.
      </p>
    </LessonLayout>
  )
}
