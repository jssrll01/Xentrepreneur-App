import LessonLayout from '../components/LessonLayout'

export default function CreditConceptsPart7() {
  return (
    <LessonLayout
      number="77"
      title="Credit Concepts & Strategies — Part 7"
      summary="13 credit strategy systems — supplier and customer financing, BNPL, installments, deferred payment, credit-backed expansion, cost analysis, negotiation, and strategy."
    >
      <h2>Credit Concepts &amp; Strategies — Part 7</h2>

      <h2>1. Supplier Financing</h2>
      <h3>Definition</h3>
      <p>
        Supplier financing is an arrangement where a supplier allows a business to obtain goods
        or services before paying the supplier immediately.
      </p>
      <p>Instead of: Order → Pay immediately → Receive/use goods</p>
      <p>the arrangement may be: Order → Receive goods → Sell/use goods → Pay supplier later</p>
      <p>Supplier financing is closely related to trade credit and supplier credit.</p>

      <h3>How It Works</h3>
      <pre>{`Business
   │
   │ Orders goods
   ↓
Supplier
   │
   │ Provides goods
   ↓
Business
   │
   │ Sells/uses goods
   ↓
Customer Revenue
   │
   ↓
Business pays Supplier`}</pre>

      <h3>Example</h3>
      <p>
        A marketplace seller purchases ₱50,000 worth of inventory under Net-30 terms. The
        seller receives the inventory today and has 30 days to pay.
      </p>
      <p>
        If the seller sells the inventory before the payment deadline, customer collections can
        help fund the supplier payment.
      </p>

      <h3>Benefits</h3>
      <ul>
        <li>Improves short-term liquidity</li>
        <li>Reduces immediate cash requirement</li>
        <li>Can support inventory growth</li>
        <li>May help match supplier payment with customer collections</li>
        <li>Can strengthen supplier relationships when payments are reliable</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Late-payment penalties</li>
        <li>Supplier credit limits</li>
        <li>Credit holds</li>
        <li>Loss of supplier trust</li>
        <li>Dependence on one supplier</li>
        <li>Over-ordering because payment is delayed</li>
      </ul>

      <h3>Key Principle</h3>
      <p>
        Deferred payment is not free cash. It is an obligation that must eventually be paid.
      </p>

      <hr />

      <h2>2. Customer Financing</h2>
      <h3>Definition</h3>
      <p>
        Customer financing allows customers to obtain a product or service immediately while
        paying over time rather than paying the entire amount upfront.
      </p>
      <p>Depending on the structure, financing may be provided by the seller, a bank, a financing company, a payment provider, or a third-party credit provider.</p>

      <h3>Example</h3>
      <pre>{`Total: ₱60,000
Customer pays:
₱20,000 deposit
₱20,000 after development milestone
₱20,000 upon completion`}</pre>

      <h3>Seller-Financed Example</h3>
      <pre>{`Selling price: ₱100,000
Customer pays ₱20,000 upfront
₱80,000 over four months`}</pre>
      <p>The seller is effectively allowing the customer to defer part of payment.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Can reduce purchase friction</li>
        <li>May increase affordability</li>
        <li>Can increase conversion for expensive products</li>
        <li>Can support larger purchases</li>
      </ul>

      <h3>Risks to Seller</h3>
      <ul>
        <li>Customer default</li>
        <li>Collection costs</li>
        <li>Delayed cash flow</li>
        <li>Credit losses</li>
        <li>Administrative costs</li>
        <li>Financing risk</li>
      </ul>

      <h3>Important Principle</h3>
      <p>
        When a business allows customers to pay later, it is effectively taking on some customer
        credit risk unless a third-party financier assumes that risk.
      </p>

      <hr />

      <h2>3. Buy-Now-Pay-Later</h2>
      <h3>Definition</h3>
      <p>
        Buy-now-pay-later (BNPL) is a payment/financing arrangement where a customer receives a
        product or service immediately and pays through multiple scheduled payments.
      </p>

      <h3>Typical Structure</h3>
      <pre>{`Purchase
   ↓
Customer receives product
   ↓
Initial payment, if required
   ↓
Scheduled installments
   ↓
Final payment`}</pre>
      <p>
        Depending on the provider, the merchant may receive payment upfront while the BNPL
        provider manages customer repayment.
      </p>

      <h3>Example</h3>
      <pre>{`Product price: ₱4,000
Possible arrangement: 4 payments × ₱1,000`}</pre>
      <p>
        The exact fees, interest, eligibility, and payment structure depend on the provider.
      </p>

      <h3>Benefits to Customers</h3>
      <ul>
        <li>Spreads payments over time</li>
        <li>Can make large purchases easier to budget</li>
        <li>May provide promotional zero-interest periods depending on terms</li>
      </ul>

      <h3>Benefits to Businesses</h3>
      <ul>
        <li>Potentially increases conversion</li>
        <li>Can increase accessibility of higher-priced products</li>
        <li>May increase average order value</li>
      </ul>

      <h3>Risks</h3>
      <p>Customers should consider: interest, fees, late charges, multiple simultaneous BNPL obligations, automatic-payment issues, consequences of missed payments.</p>
      <p>Businesses should consider: provider fees, refund handling, settlement timing, customer-credit exposure, regulatory requirements.</p>
      <h3>BNPL vs Installment Payment</h3>
      <ul>
        <li>BNPL — often provided through a specialized financing/payment provider</li>
        <li>Installment payment — broad payment structure</li>
        <li>BNPL — usually associated with consumer purchases</li>
        <li>Installment payment — can apply to products, services, loans</li>
        <li>BNPL — may involve third-party credit</li>
        <li>Installment payment — can be directly arranged by seller</li>
        <li>BNPL — often standardized</li>
        <li>Installment payment — can be customized</li>
      </ul>

      <hr />

      <h2>4. Installment Payment</h2>
      <h3>Definition</h3>
      <p>An installment payment divides the total amount owed into multiple scheduled payments.</p>
      <p>Instead of ₱60,000 today, the customer may pay ₱20,000 × 3 payments.</p>

      <h3>Basic Formula</h3>
      <p>
        <strong>Installment = Amount Financed ÷ Number of Payments</strong>
      </p>
      <p>
        Example: ₱60,000 ÷ 3 = ₱20,000 per installment. If interest and fees apply, the actual
        payment will be higher.
      </p>

      <h3>Common Structures</h3>
      <ul>
        <li>Monthly installments</li>
        <li>Quarterly installments</li>
        <li>Milestone payments</li>
        <li>Deposit + installments</li>
        <li>Principal + interest</li>
        <li>Fixed installment financing</li>
      </ul>

      <h3>Web-Development Example</h3>
      <pre>{`30% — Project start
30% — Prototype approval
30% — Development completion
10% — Final launch`}</pre>
      <p>This is a milestone-payment structure rather than necessarily a credit product.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Easier cash-flow planning</li>
        <li>Reduces upfront payment burden</li>
        <li>Can align payment with project progress</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Missed payments</li>
        <li>Collection work</li>
        <li>Cash-flow uncertainty</li>
        <li>Scope disputes</li>
        <li>Customer cancellation</li>
      </ul>

      <hr />

      <h2>5. Deferred Payment</h2>
      <h3>Definition</h3>
      <p>
        Deferred payment means payment occurs later than the time the product, service, or
        obligation is initially provided.
      </p>
      <p>Examples: Net-30 supplier terms, pay-after-delivery, invoice due after service completion, payment after a milestone, grace periods.</p>

      <h3>Example</h3>
      <pre>{`Service delivered September 1
Invoice says: Payment due October 1`}</pre>
      <p>The business has provided the service before receiving payment.</p>

      <h3>Deferred Payment Cycle</h3>
      <pre>{`Deliver
   ↓
Invoice
   ↓
Accounts Receivable
   ↓
Waiting Period
   ↓
Customer Payment
   ↓
Cash`}</pre>

      <h3>Important Financial Effect</h3>
      <p>Deferred payment increases accounts receivable for the seller.</p>
      <p>
        If sales increase while collections slow down, revenue can rise while available cash
        becomes constrained.
      </p>

      <h3>Key Principle</h3>
      <p>Revenue timing and cash-collection timing are not necessarily the same.</p>

      <hr />

      <h2>6. Credit-Backed Purchasing</h2>
      <h3>Definition</h3>
      <p>
        Credit-backed purchasing is acquiring products, inventory, equipment, or services using
        borrowed funds or an approved credit arrangement instead of paying entirely from
        available cash.
      </p>

      <h3>Example</h3>
      <pre>{`Needs: ₱100,000 inventory
Has: ₱40,000 cash
Approved: ₱100,000 credit facility`}</pre>
      <p>
        It could use part of the facility to finance the inventory, subject to its terms and
        repayment capacity.
      </p>

      <h3>Credit-Backed Purchasing Process</h3>
      <pre>{`Identify Purchase
       ↓
Determine Required Amount
       ↓
Check Cash Available
       ↓
Evaluate Credit Cost
       ↓
Evaluate Expected Return
       ↓
Purchase
       ↓
Generate Revenue / Benefit
       ↓
Repay Credit`}</pre>

      <h3>Appropriate Use</h3>
      <p>Credit-backed purchasing can be useful when:</p>
      <ul>
        <li>Demand is reasonably validated</li>
        <li>Inventory has predictable turnover</li>
        <li>The purchase generates sufficient contribution</li>
        <li>Repayment timing is understood</li>
        <li>Financing cost is manageable</li>
      </ul>

      <h3>Risk</h3>
      <p>Buying inventory simply because credit is available can create:</p>
      <pre>{`Credit
 ↓
Inventory
 ↓
Slow Sales
 ↓
Cash Shortage
 ↓
Debt
 ↓
Additional Borrowing`}</pre>
      <p>This can create a dangerous debt cycle.</p>

      <hr />

      <h2>7. Credit-Based Expansion</h2>
      <h3>Definition</h3>
      <p>
        Credit-based expansion is using borrowed funds or credit facilities to increase business
        capacity, geographic reach, product availability, technology, workforce, infrastructure,
        or other growth capabilities.
      </p>
      <p>Examples: open another location, purchase equipment, increase inventory, build an e-commerce platform, upgrade servers, hire additional employees, purchase delivery vehicles, expand production capacity.</p>

      <h3>Expansion Framework</h3>
      <pre>{`Existing Business
       ↓
Validated Demand
       ↓
Expansion Requirement
       ↓
Investment Amount
       ↓
Expected Incremental Revenue
       ↓
Expected Incremental Costs
       ↓
Expected Cash Flow
       ↓
Financing Cost
       ↓
Risk Assessment
       ↓
Expansion Decision`}</pre>

      <h3>Example</h3>
      <pre>{`Investment: ₱500,000 equipment
Expected additional annual contribution: ₱200,000
Simple payback: ₱500,000 ÷ ₱200,000 = 2.5 years`}</pre>
      <p>
        This does not by itself prove that borrowing is appropriate. The business should also
        consider interest, fees, maintenance, demand uncertainty, equipment life, cash reserves,
        debt-service requirements, and downside scenarios.
      </p>

      <h3>Key Principle</h3>
      <p>
        Credit can accelerate expansion, but it also accelerates the financial consequences if
        the expansion underperforms.
      </p>

      <hr />

      <h2>8. Credit Cost Analysis</h2>
      <h3>Definition</h3>
      <p>
        Credit cost analysis is the process of determining the complete economic cost of using
        credit.
      </p>
      <p>
        Looking only at the advertised interest rate can produce an incomplete comparison.
      </p>

      <h3>Credit Cost Can Include</h3>
      <ul>
        <li>Interest</li>
        <li>Origination fees</li>
        <li>Processing fees</li>
        <li>Annual fees</li>
        <li>Service fees</li>
        <li>Late-payment charges</li>
        <li>Prepayment fees</li>
        <li>Commitment fees</li>
        <li>Other financing charges</li>
      </ul>

      <h3>Simplified Formula</h3>
      <p>
        <strong>
          Total Credit Cost = Interest + Financing Fees + Other Applicable Costs
        </strong>
      </p>

      <h3>Example</h3>
      <ul>
        <li>Interest — ₱30,000</li>
        <li>Origination fee — ₱5,000</li>
        <li>Processing fee — ₱2,000</li>
        <li>Other financing costs — ₱3,000</li>
        <li>Total credit cost — ₱40,000</li>
      </ul>
      <p>
        If the principal is ₱200,000: total repayment = ₱200,000 + ₱40,000 = ₱240,000. Actual
        loan calculations depend on the contract and repayment structure.
      </p>

      <h3>Credit Cost Analysis Should Ask</h3>
      <ol>
        <li>How much is borrowed?</li>
        <li>How much cash is actually received?</li>
        <li>What is the interest rate?</li>
        <li>Is the rate fixed or variable?</li>
        <li>What fees apply?</li>
        <li>When are payments due?</li>
        <li>Is there a balloon payment?</li>
        <li>Are there prepayment penalties?</li>
        <li>What happens after late payment?</li>
        <li>What is the total amount paid?</li>
      </ol>

      <hr />

      <h2>9. Credit Comparison</h2>
      <h3>Definition</h3>
      <p>
        Credit comparison is evaluating different credit options based on their complete
        financial and contractual structures.
      </p>
      <p>
        Do not compare only "Loan A = 10%" and "Loan B = 12%." Instead compare the entire
        arrangement.
      </p>

      <h3>Comparison Example</h3>
      <ul>
        <li>Principal — ₱500k / ₱500k</li>
        <li>Rate — 10% / 12%</li>
        <li>Rate type — Fixed / Variable</li>
        <li>Term — 2 years / 3 years</li>
        <li>Fees — ₱5k / ₱2k</li>
        <li>Collateral — Required / None</li>
        <li>Prepayment — Restricted / Flexible</li>
        <li>Payment — Monthly / Monthly</li>
        <li>Total cost — Calculate / Calculate</li>
      </ul>

      <h3>Credit Comparison Formula</h3>
      <p>
        <strong>
          Total Financing Cost = Total Interest + Total Fees + Other Financing Costs
        </strong>
      </p>
      <p>
        Then consider non-price factors: financial cost + risk + flexibility + security
        requirements + cash-flow impact.
      </p>

      <h3>Important Principle</h3>
      <p>
        The option with the lowest advertised rate is not automatically the option with the
        lowest total cost or lowest risk.
      </p>

      <hr />

      <h2>10. Credit Negotiation</h2>
      <h3>Definition</h3>
      <p>
        Credit negotiation is the process of discussing and attempting to agree on the financial
        and contractual terms of a credit arrangement.
      </p>
      <p>Negotiation can involve: interest rate, credit limit, term, payment schedule, fees, grace period, collateral, guarantees, covenants, prepayment terms, maturity, reporting requirements.</p>

      <h3>Preparation</h3>
      <pre>{`Need
 ↓
Amount
 ↓
Repayment Capacity
 ↓
Cash Flow
 ↓
Credit History
 ↓
Collateral
 ↓
Alternative Financing
 ↓
Acceptable Terms`}</pre>

      <h3>Example</h3>
      <p>
        Instead of negotiating only "Can you reduce the interest rate?", a business could
        examine the entire structure: "Could we use a longer term, lower upfront fee, and
        flexible early repayment while maintaining the proposed credit limit?"
      </p>

      <h3>Important Principle</h3>
      <p>Negotiate the entire credit structure, not just the interest rate.</p>

      <hr />

      <h2>11. Credit Restructuring</h2>
      <h3>Definition</h3>
      <p>
        Credit restructuring is modifying existing credit arrangements to make repayment or
        financing terms more manageable.
      </p>
      <p>Possible modifications include: longer repayment period, changed payment schedule, temporary payment adjustment, interest-rate changes, modified covenants, consolidation, revised maturity, revised security arrangements.</p>

      <h3>Example</h3>
      <p>
        A business currently owes ₱600,000 with a large monthly payment that is becoming
        difficult to manage. A lender may agree, subject to its policies and contract, to extend
        the repayment period. This could reduce the periodic payment but potentially increase
        the total interest paid.
      </p>

      <h3>Restructuring Process</h3>
      <pre>{`Financial Difficulty / Structural Need
              ↓
        Review Debt
              ↓
      Forecast Cash Flow
              ↓
     Identify Problem
              ↓
       Build Options
              ↓
       Negotiate Terms
              ↓
       Document Changes
              ↓
       Implement
              ↓
         Monitor`}</pre>

      <h3>Restructuring vs Refinancing vs Consolidation</h3>
      <ul>
        <li>Restructuring — modify existing debt terms</li>
        <li>Refinancing — replace existing financing with new financing</li>
        <li>Consolidation — combine multiple debts into one arrangement</li>
      </ul>
      <p>
        These can sometimes overlap, but they are not identical.
      </p>

      <hr />

      <h2>12. Credit Management</h2>
      <h3>Definition</h3>
      <p>
        Credit management is the complete system for controlling how credit is granted, used,
        monitored, collected, reconciled, and reviewed.
      </p>

      <h3>For a Business Extending Credit to Customers</h3>
      <p>It includes:</p>
      <ul>
        <li>Credit applications</li>
        <li>Credit assessment</li>
        <li>Credit limits</li>
        <li>Credit terms</li>
        <li>Credit approval</li>
        <li>Invoicing</li>
        <li>Accounts receivable</li>
        <li>Payment monitoring</li>
        <li>Collections</li>
        <li>Dispute handling</li>
        <li>Credit holds</li>
        <li>Risk monitoring</li>
      </ul>

      <h3>For a Business Using Credit</h3>
      <p>It includes:</p>
      <ul>
        <li>Borrowing</li>
        <li>Payment scheduling</li>
        <li>Debt budgeting</li>
        <li>Credit utilization</li>
        <li>Repayment</li>
        <li>Reconciliation</li>
        <li>Credit-cost monitoring</li>
        <li>Capacity management</li>
        <li>Refinancing/restructuring</li>
      </ul>

      <h3>Complete Credit Management System</h3>
      <pre>{`CREDIT MANAGEMENT
                       │
       ┌───────────────┴───────────────┐
       ↓                               ↓
   CREDIT GIVEN                   CREDIT USED
       ↓                               ↓
Assessment                       Financing Need
       ↓                               ↓
Approval                         Capacity
       ↓                               ↓
Limit                            Facility
       ↓                               ↓
Terms                            Usage
       ↓                               ↓
Sale/Purchase                    Repayment
       ↓                               ↓
Invoice/Debt                     Monitoring
       ↓                               ↓
Monitoring                       Reconciliation
       ↓                               ↓
Collection                       Review
       └───────────────┬───────────────┘
                       ↓
                Risk Management
                       ↓
                 Improvement`}</pre>

      <h3>Credit Management Metrics</h3>
      <ul>
        <li>Credit utilization — Outstanding Credit ÷ Credit Limit × 100</li>
        <li>Collection rate — Collections ÷ Amount Due × 100</li>
        <li>On-time payment rate — On-Time Payments ÷ Total Payments × 100</li>
        <li>Delinquency rate — Delinquent AR ÷ Total AR × 100</li>
        <li>Credit loss rate — Credit Losses ÷ Credit Sales × 100</li>
        <li>DSO — Average AR ÷ Credit Sales × Days</li>
        <li>Debt growth — (Ending Debt − Beginning Debt) ÷ Beginning Debt × 100</li>
        <li>Debt reduction — Principal Repaid ÷ Beginning Debt × 100</li>
      </ul>

      <hr />

      <h2>13. Credit Strategy</h2>
      <h3>Definition</h3>
      <p>
        A credit strategy is the deliberate plan for how a business will use, provide, control,
        and manage credit in support of its financial and operational objectives.
      </p>
      <p>
        Credit strategy answers: How should credit be used to support the business without
        creating unnecessary financial risk?
      </p>

      <h3>Credit Strategy Components</h3>
      <p>
        <strong>1. Purpose.</strong> Define why credit is needed — inventory, equipment,
        working capital, expansion, technology, temporary cash-flow gap.
      </p>
      <p>
        <strong>2. Capacity.</strong> Determine how much debt or credit the business can
        reasonably manage.
      </p>
      <p>
        <strong>3. Financing Structure.</strong> Choose an appropriate structure — credit line,
        revolving facility, term loan, supplier financing, invoice financing, working-capital
        facility, other appropriate financing.
      </p>
      <p>
        <strong>4. Cost.</strong> Calculate interest, fees, total repayment, cash-flow impact,
        opportunity cost.
      </p>
      <p>
        <strong>5. Risk.</strong> Evaluate default risk, liquidity risk, interest-rate risk,
        refinancing risk, collateral risk, customer concentration, supplier concentration.
      </p>
      <p>
        <strong>6. Repayment.</strong> Define the expected source of repayment. For example:
        Inventory Purchase → Inventory Sold → Customer Pays → Cash Received → Credit Repaid.
      </p>
      <p>
        <strong>7. Monitoring.</strong> Track outstanding balance, credit utilization, payment
        dates, interest, cash flow, debt-service capacity, credit limits, covenants, maturity
        dates.
      </p>

      <hr />

      <h2>Credit Strategy by Business Situation</h2>
      <ul>
        <li>Short temporary cash gap — revolving facility / credit line</li>
        <li>Inventory purchase — supplier financing / inventory financing</li>
        <li>Confirmed customer order — purchase-order financing</li>
        <li>Unpaid invoices — receivables/invoice financing</li>
        <li>Equipment purchase — equipment or term financing</li>
        <li>Long-term asset — long-term financing</li>
        <li>Business expansion — expansion financing</li>
        <li>Multiple expensive debts — analyze refinancing/consolidation/restructuring</li>
        <li>Regular operating cycle — working-capital facility</li>
        <li>Customer cannot pay upfront — installments/third-party customer financing</li>
      </ul>
      <p>
        The appropriate structure depends on the business's actual cash flow, contractual terms,
        financing costs, and risk.
      </p>

      <hr />

      <h2>Credit Strategy Framework</h2>
      <pre>{`1. IDENTIFY — What is the financing/credit need?
   ↓
2. MEASURE — How much is actually required?
   ↓
3. ASSESS — What is our credit/borrowing capacity?
   ↓
4. COMPARE — What financing options are available?
   ↓
5. CALCULATE — What is the total credit cost?
   ↓
6. NEGOTIATE — Can terms be improved?
   ↓
7. STRUCTURE — What repayment arrangement fits the cash cycle?
   ↓
8. DOCUMENT — Are all obligations and conditions clear?
   ↓
9. USE — Is credit being used for its intended purpose?
   ↓
10. MONITOR — Are balance, cost, payments, and risk under control?
   ↓
11. RECONCILE — Do internal and external records match?
   ↓
12. ADJUST — Should limits, terms, or financing change?
   ↓
13. REPAY — Can debt be reduced according to plan?
   ↓
14. REVIEW — Did the credit create the expected economic value?`}</pre>

      <hr />

      <h2>Supplier Financing vs Customer Financing</h2>
      <pre>{`BUSINESS
             /         \
            /           \
     Supplier           Customer
         ↓                  ↓
  Gives business       Receives product
  time to pay          before full payment
         ↓                  ↓
 Business owes        Customer owes
 supplier             business/provider`}</pre>
      <ul>
        <li>Supplier financing — supplier finances the buyer/business — creates/extends AP</li>
        <li>Customer financing — financing supports the customer — creates/extends customer payment obligation</li>
        <li>Supplier financing — helps business acquire inventory/services</li>
        <li>Customer financing — helps customer acquire products/services</li>
        <li>Supplier financing — business must eventually pay supplier</li>
        <li>Customer financing — customer must eventually pay financing provider/seller</li>
        <li>Supplier financing — supplier takes buyer credit risk</li>
        <li>Customer financing — seller/financier takes customer credit risk</li>
      </ul>

      <hr />

      <h2>Credit Cost + Credit Capacity Relationship</h2>
      <pre>{`CREDIT DECISION
                       │
          ┌────────────┴────────────┐
          ↓                         ↓
     CREDIT COST              CREDIT CAPACITY
          │                         │
    Interest                  Cash Flow
    Fees                      Existing Debt
    Penalties                 Profitability
    Total Repayment           Liquidity
          │                    Repayment Ability
          └───────────┬─────────────┘
                      ↓
                CREDIT RISK
                      ↓
              FINANCING DECISION`}</pre>
      <p>
        A financing arrangement can be inexpensive but still unsuitable if the repayment
        schedule exceeds available cash flow. Conversely, a business may have sufficient
        repayment capacity but still need to compare financing costs carefully.
      </p>

      <hr />

      <h2>Complete Credit Lifecycle</h2>
      <pre>{`CREDIT NEED
                        ↓
                 CREDIT CAPACITY
                        ↓
               BORROWING CAPACITY
                        ↓
             CREDIT APPLICATION
                        ↓
                CREDIT ASSESSMENT
                        ↓
              CREDIT APPROVAL
                        ↓
               CREDIT LIMIT
                        ↓
                CREDIT TERMS
                        ↓
           CREDIT FACILITY / SOURCE
                        ↓
        ┌───────────────┼────────────────┐
        ↓               ↓                ↓
Supplier Financing  Customer Finance  Borrowing
        │               │                │
        └───────────────┼────────────────┘
                        ↓
               CREDIT-BASED USE
                        ↓
                 PURCHASE / SALE
                        ↓
             INVOICE / OBLIGATION
                        ↓
                PAYMENT SCHEDULE
                        ↓
              AUTOMATIC PAYMENT
                        ↓
             CREDIT RECONCILIATION
                        ↓
                  MONITORING
                        ↓
          ┌─────────────┴─────────────┐
          ↓                           ↓
      Performing                 Problem
          ↓                           ↓
     Continue                    Dispute
                                      ↓
                                  Correction
                                      ↓
                               Restructuring
                                      ↓
                                  Rebuilding
          └─────────────┬─────────────┘
                        ↓
                 CREDIT REVIEW
                        ↓
                STRATEGY UPDATE`}</pre>

      <hr />

      <h2>Core Credit Principles</h2>
      <ol>
        <li>Credit is a financial obligation, not additional income.</li>
        <li>Delayed payment does not eliminate the underlying cost.</li>
        <li>Supplier financing can improve liquidity but creates accounts payable.</li>
        <li>
          Customer financing can increase purchasing accessibility but creates credit risk when
          the seller carries the receivable.
        </li>
        <li>
          BNPL and installment arrangements should be evaluated using their complete terms.
        </li>
        <li>
          Credit-backed purchasing should have a reasonable economic purpose and repayment
          source.
        </li>
        <li>
          Credit-based expansion should be evaluated using incremental cash flow, not revenue
          alone.
        </li>
        <li>
          Always calculate total credit cost rather than comparing advertised rates only.
        </li>
        <li>Compare credit structures, not just interest rates.</li>
        <li>
          Negotiate fees, terms, security, repayment flexibility, and maturity—not only the
          rate.
        </li>
        <li>
          Restructuring should address the underlying cash-flow problem rather than simply
          postpone it.
        </li>
        <li>
          Credit management requires continuous monitoring after approval or borrowing.
        </li>
        <li>
          Credit strategy should connect financing decisions to the business's operating cycle.
        </li>
        <li>Maintain sufficient liquidity while making repayments.</li>
        <li>
          Credit should support sustainable economic activity rather than conceal persistent
          financial problems.
        </li>
      </ol>

      <h3>Master Credit Strategy Formula</h3>
      <p>
        Identify Need → Determine Capacity → Choose Purpose → Compare Financing → Analyze Cost →
        Assess Risk → Negotiate Terms → Structure Repayment → Document → Use Credit → Schedule
        Payments → Reconcile → Monitor → Adjust → Restructure When Appropriate → Repay → Review
        → Improve Credit Strategy.
      </p>
    </LessonLayout>
  )
}
