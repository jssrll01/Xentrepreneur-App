import LessonLayout from '../components/LessonLayout'

export default function DebtConceptsPart1() {
  return (
    <LessonLayout
      number="66"
      title="Debt Concepts & Strategies — Part 1"
      summary="13 debt types every founder should understand — from business loans and working capital to invoice financing, trade credit, and revolving credit."
    >
      <h2>Debt Concepts &amp; Strategies — Part 1</h2>
      <p>
        Debt is a financial tool that allows a business to obtain money, goods, or purchasing
        capacity now while agreeing to repay an amount later, usually with interest, fees, or
        other costs.
      </p>

      <h3>Debt can help a business:</h3>
      <ul>
        <li>Purchase equipment</li>
        <li>Finance inventory</li>
        <li>Fund working capital</li>
        <li>Manage timing gaps between sales and collections</li>
        <li>Execute large customer orders</li>
        <li>Expand productive capacity</li>
        <li>Smooth temporary cash-flow needs</li>
      </ul>

      <p>
        But debt also creates future obligations. A business should therefore evaluate not only
        how much it can borrow, but also why it is borrowing, how it will be repaid, what it
        will cost, and what happens if expected revenue does not occur.
      </p>

      <hr />

      <h2>1. Business Loan</h2>
      <h3>Definition</h3>
      <p>
        A business loan is money borrowed by a business from a lender under agreed repayment
        terms.
      </p>
      <p>The lender may provide a lump sum, while the business agrees to repay:</p>
      <ul>
        <li>Principal</li>
        <li>Interest</li>
        <li>Applicable fees</li>
        <li>Other contractual charges</li>
      </ul>
      <p>The exact structure depends on the lender and loan agreement.</p>

      <h3>How It Works</h3>
      <pre>{`BUSINESS NEED
     ↓
LOAN APPLICATION
     ↓
LENDER ASSESSMENT
     ↓
APPROVAL
     ↓
FUNDS RECEIVED
     ↓
BUSINESS USES FUNDS
     ↓
REPAYMENT
     ↓
LOAN COMPLETED`}</pre>

      <h3>Example</h3>
      <p>A web-development company needs ₱300,000 for:</p>
      <ul>
        <li>New computers</li>
        <li>Development equipment</li>
        <li>Software</li>
        <li>Marketing</li>
        <li>Working capital</li>
      </ul>
      <p>
        It could potentially obtain a business loan and repay it according to the agreed
        schedule.
      </p>
      <p>The important question isn't simply:</p>
      <blockquote>"Can the company get ₱300,000?"</blockquote>
      <p>It should also ask:</p>
      <blockquote>
        "What economic benefit will the ₱300,000 create, and can the business comfortably meet
        the repayment obligations?"
      </blockquote>

      <h3>Common Loan Evaluation</h3>
      <p><strong>Total Financing Cost = Interest + Fees + Other Applicable Costs</strong></p>
      <p>Businesses should also examine:</p>
      <ul>
        <li>Interest rate</li>
        <li>Fixed vs variable rate</li>
        <li>Loan term</li>
        <li>Repayment schedule</li>
        <li>Collateral</li>
        <li>Guarantees</li>
        <li>Penalties</li>
        <li>Processing fees</li>
        <li>Early repayment terms</li>
        <li>Default consequences</li>
      </ul>

      <h3>Principle</h3>
      <blockquote>
        Borrow for a clear business purpose and understand the full cost and repayment
        obligation before accepting the loan.
      </blockquote>

      <hr />

      <h2>2. Working-Capital Loan</h2>
      <h3>Definition</h3>
      <p>A working-capital loan finances short-term operating requirements.</p>
      <p>Working capital is commonly represented as:</p>
      <p><strong>Working Capital = Current Assets − Current Liabilities</strong></p>
      <p>A business may need financing because money is temporarily tied up in:</p>
      <ul>
        <li>Inventory</li>
        <li>Accounts receivable</li>
        <li>Production</li>
        <li>Payroll</li>
        <li>Supplier payments</li>
        <li>Operating expenses</li>
      </ul>

      <h3>Cash Conversion Example</h3>
      <pre>{`BUY INVENTORY
      ↓
STORE INVENTORY
      ↓
SELL
      ↓
CUSTOMER OWES MONEY
      ↓
COLLECT PAYMENT
      ↓
CASH AVAILABLE`}</pre>
      <p>A working-capital facility can potentially bridge the timing gap.</p>

      <h3>Example</h3>
      <p>A seller purchases ₱500,000 inventory today.</p>
      <p>The products are expected to sell over the next 30–60 days.</p>
      <p>
        A working-capital facility could help finance the inventory period, provided the
        expected cash generation and repayment terms are appropriate.
      </p>

      <h3>Key Risk</h3>
      <p>
        Working-capital borrowing becomes dangerous when the underlying cash conversion cycle
        doesn't work.
      </p>
      <p>For example:</p>
      <pre>{`Borrow
 ↓
Buy inventory
 ↓
Inventory doesn't sell
 ↓
Cash doesn't arrive
 ↓
Loan payment becomes due`}</pre>

      <h3>Principle</h3>
      <blockquote>
        Working-capital debt should support a realistic operating cycle rather than permanently
        cover an unprofitable business model.
      </blockquote>

      <hr />

      <h2>3. Term Loan</h2>
      <h3>Definition</h3>
      <p>
        A term loan provides a specified amount of money that is repaid over a defined period
        according to a predetermined schedule.
      </p>
      <p>Typical characteristics:</p>
      <ul>
        <li>Fixed principal amount</li>
        <li>Defined maturity</li>
        <li>Scheduled payments</li>
        <li>Interest</li>
        <li>Specific purpose in some cases</li>
      </ul>

      <h3>Structure</h3>
      <pre>{`₱500,000 BORROWED
       ↓
MONTHLY / PERIODIC PAYMENTS
       ↓
PRINCIPAL + INTEREST
       ↓
BALANCE DECREASES
       ↓
MATURITY
       ↓
₱0 BALANCE`}</pre>

      <h3>Example</h3>
      <p>A company borrows ₱500,000 to purchase business equipment.</p>
      <p>It repays the loan over several years according to the contract.</p>

      <h3>Term Loan vs Revolving Credit</h3>
      <ul>
        <li>Term loan — usually funded as a defined amount</li>
        <li>Revolving credit — borrowing capacity can be reused</li>
        <li>Term loan — defined repayment structure</li>
        <li>Revolving credit — draw and repay repeatedly</li>
        <li>Term loan — usually has a maturity</li>
        <li>Revolving credit — usually has a facility/renewal period</li>
        <li>Term loan — suitable for defined projects</li>
        <li>Revolving credit — useful for variable financing needs</li>
        <li>Term loan — balance generally declines through repayment</li>
        <li>Revolving credit — balance can rise and fall</li>
      </ul>

      <h3>Principle</h3>
      <blockquote>
        Term loans are generally suited to identifiable financing needs with a defined
        repayment horizon.
      </blockquote>

      <hr />

      <h2>4. Short-Term Loan</h2>
      <h3>Definition</h3>
      <p>
        A short-term loan is financing intended to be repaid over a relatively short period.
      </p>
      <p>
        The exact definition of "short-term" varies by lender and accounting context.
      </p>
      <p>It may be used for:</p>
      <ul>
        <li>Temporary cash-flow gaps</li>
        <li>Inventory purchases</li>
        <li>Seasonal demand</li>
        <li>Short operating cycles</li>
        <li>Urgent working-capital needs</li>
      </ul>

      <h3>Example</h3>
      <p>
        A business expects a major customer payment in 60 days but needs cash now to purchase
        inventory.
      </p>
      <p>A short-term facility may potentially bridge the timing difference.</p>
      <pre>{`TODAY
 ↓
BORROW
 ↓
PURCHASE / OPERATE
 ↓
CUSTOMER PAYMENT
 ↓
REPAY`}</pre>

      <h3>Risk</h3>
      <p>Short-term debt creates relatively near-term repayment requirements.</p>
      <p>If the expected cash inflow is delayed:</p>
      <pre>{`Expected Payment
      ↓
Delayed
      ↓
Loan Still Due
      ↓
Liquidity Pressure`}</pre>

      <h3>Principle</h3>
      <blockquote>Match short-term borrowing with a realistic short-term source of repayment.</blockquote>

      <hr />

      <h2>5. Long-Term Loan</h2>
      <h3>Definition</h3>
      <p>
        A long-term loan is financing repaid over a longer period, often used for assets or
        investments expected to generate value over several years.
      </p>
      <p>Potential uses:</p>
      <ul>
        <li>Buildings</li>
        <li>Major equipment</li>
        <li>Infrastructure</li>
        <li>Business expansion</li>
        <li>Long-lived technology systems</li>
      </ul>

      <h3>Example</h3>
      <p>
        A company invests ₱2,000,000 in production equipment expected to operate for many
        years.
      </p>
      <p>
        Longer-term financing can align repayment with the period over which the asset is
        expected to contribute to the business.
      </p>

      <h3>Matching Principle</h3>
      <pre>{`SHORT-LIVED NEED
      ↓
SHORTER FINANCING

LONG-LIVED ASSET
      ↓
LONGER FINANCING`}</pre>
      <p>This is a general financing principle, not an absolute rule.</p>

      <h3>Principle</h3>
      <blockquote>
        Consider matching the financing duration with the economic life of what the financing
        supports.
      </blockquote>

      <hr />

      <h2>6. Equipment Financing</h2>
      <h3>Definition</h3>
      <p>Equipment financing is financing specifically used to acquire business equipment.</p>
      <p>Examples:</p>
      <ul>
        <li>Computers</li>
        <li>Machinery</li>
        <li>POS systems</li>
        <li>Servers</li>
        <li>Production equipment</li>
        <li>Vehicles used for business</li>
        <li>Specialized tools</li>
      </ul>
      <p>
        Depending on the arrangement, the equipment itself may serve as collateral.
      </p>

      <h3>Example</h3>
      <p>A video-production company needs:</p>
      <ul>
        <li>Cameras</li>
        <li>Lighting</li>
        <li>Computers</li>
        <li>Audio equipment</li>
      </ul>
      <p>Total cost: ₱400,000</p>
      <p>
        Equipment financing could potentially allow the company to obtain the equipment while
        paying over time.
      </p>

      <h3>Economic Test</h3>
      <p>Don't only ask: "Can we afford the monthly payment?"</p>
      <p>Also calculate: Expected Incremental Contribution − Financing Costs</p>
      <p>Consider:</p>
      <ul>
        <li>Productivity gains</li>
        <li>Additional sales</li>
        <li>Maintenance</li>
        <li>Depreciation</li>
        <li>Financing cost</li>
        <li>Utilization</li>
        <li>Expected useful life</li>
      </ul>

      <h3>Risk</h3>
      <p>Equipment can lose value.</p>
      <pre>{`Equipment
 ↓
Technology Changes
 ↓
Resale Value Falls
 ↓
Debt Remains`}</pre>
      <p>
        This creates a potential mismatch between the asset's value and the outstanding debt.
      </p>

      <h3>Principle</h3>
      <blockquote>
        Finance equipment when the expected productive value justifies the total financing and
        ownership cost.
      </blockquote>

      <hr />

      <h2>7. Inventory Financing</h2>
      <h3>Definition</h3>
      <p>
        Inventory financing is financing used to purchase or hold inventory before it is sold.
      </p>
      <p>
        It is particularly relevant when a business needs to purchase inventory before
        receiving customer revenue.
      </p>

      <h3>Inventory Cycle</h3>
      <pre>{`FINANCING
    ↓
PURCHASE INVENTORY
    ↓
STORE
    ↓
SELL
    ↓
COLLECT CASH
    ↓
REPAY FINANCING`}</pre>

      <h3>Example</h3>
      <p>A marketplace seller expects holiday demand.</p>
      <p>Normal inventory: ₱200,000</p>
      <p>Expected seasonal requirement: ₱500,000</p>
      <p>
        The seller may need additional financing to purchase inventory before the seasonal
        sales occur.
      </p>

      <h3>Important Metrics</h3>
      <p><strong>Inventory Turnover = COGS ÷ Average Inventory</strong></p>
      <p>Days Inventory Outstanding (simplified):</p>
      <p><strong>DIO = (Average Inventory ÷ COGS) × Days</strong></p>
      <p>
        Higher inventory turnover generally means inventory is moving faster, although the
        appropriate level depends on the business.
      </p>

      <h3>Major Risk</h3>
      <p>Slow-moving inventory can trap borrowed money.</p>
      <pre>{`Debt
 ↓
Inventory
 ↓
Inventory Doesn't Sell
 ↓
Cash Doesn't Return
 ↓
Debt Still Exists`}</pre>

      <h3>Principle</h3>
      <blockquote>
        Inventory financing works best when inventory turnover and demand are reasonably
        understood.
      </blockquote>

      <hr />

      <h2>8. Purchase-Order Financing</h2>
      <h3>Definition</h3>
      <p>
        Purchase-order financing (PO financing) provides financing to help a business fulfill
        a confirmed customer purchase order when the business does not have enough working
        capital to produce or purchase the goods.
      </p>
      <p>It is often used when:</p>
      <pre>{`CUSTOMER ORDER
      ↓
BUSINESS NEEDS MONEY
      ↓
SUPPLIER / PRODUCTION
      ↓
DELIVERY
      ↓
CUSTOMER PAYMENT`}</pre>
      <p>
        The exact structure and eligibility requirements vary by financing provider.
      </p>

      <h3>Example</h3>
      <p>A business receives a confirmed ₱1,000,000 purchase order but needs ₱600,000 to purchase the required products.</p>
      <p>If eligible, PO financing may help fund fulfillment.</p>

      <h3>Why It Can Be Useful</h3>
      <p>Without financing:</p>
      <pre>{`Customer Order
     ↓
No Working Capital
     ↓
Cannot Fulfill
     ↓
Lost Opportunity`}</pre>
      <p>With appropriate financing:</p>
      <pre>{`Customer Order
     ↓
Financing
     ↓
Purchase / Production
     ↓
Fulfillment
     ↓
Customer Payment
     ↓
Repayment`}</pre>

      <h3>Risk</h3>
      <p>A purchase order is not necessarily the same as guaranteed cash.</p>
      <p>Consider:</p>
      <ul>
        <li>Customer reliability</li>
        <li>Order cancellation terms</li>
        <li>Supplier reliability</li>
        <li>Product margins</li>
        <li>Delivery requirements</li>
        <li>Financing cost</li>
        <li>Customer payment timing</li>
      </ul>

      <h3>Principle</h3>
      <blockquote>
        A confirmed order can support financing, but the economics and contractual risks of
        fulfilling that order still need to be evaluated.
      </blockquote>

      <hr />

      <h2>9. Invoice Financing</h2>
      <h3>Definition</h3>
      <p>
        Invoice financing allows a business to obtain funding against eligible unpaid customer
        invoices.
      </p>
      <p>Instead of waiting for the customer to pay:</p>
      <pre>{`SALE
 ↓
INVOICE
 ↓
CUSTOMER PAYS LATER`}</pre>
      <p>the business may obtain financing against the invoice.</p>

      <h3>Example</h3>
      <p>A business invoices a corporate customer ₱500,000. Payment terms: 30 days.</p>
      <p>The business needs cash immediately.</p>
      <p>
        An invoice-financing provider may advance part of the invoice value, subject to its
        terms.
      </p>
      <p>Later:</p>
      <pre>{`CUSTOMER PAYS
      ↓
FINANCING SETTLED
      ↓
REMAINING AMOUNT
      ↓
LESS FEES / COSTS
      ↓
BUSINESS`}</pre>
      <p>
        The exact structure varies. Some arrangements are structured as loans; others may
        involve receivables purchases or factoring.
      </p>

      <h3>Important Metrics</h3>
      <p>Businesses should examine:</p>
      <ul>
        <li>Advance rate</li>
        <li>Financing fee</li>
        <li>Interest</li>
        <li>Customer payment period</li>
        <li>Recourse provisions</li>
        <li>Eligibility requirements</li>
        <li>Total effective cost</li>
      </ul>

      <h3>Risk</h3>
      <p>
        Invoice financing doesn't fix a problem if the underlying customers don't pay
        reliably.
      </p>
      <pre>{`Weak Customer Receivables
        ↓
Financing
        ↓
Payment Delayed / Defaulted
        ↓
Financing Problem`}</pre>

      <h3>Principle</h3>
      <blockquote>
        Invoice financing primarily addresses timing of receivables; it does not automatically
        make an uncollectible invoice economically healthy.
      </blockquote>

      <hr />

      <h2>10. Trade Credit</h2>
      <h3>Definition</h3>
      <p>
        Trade credit occurs when a supplier allows a business to receive goods or services now
        and pay later.
      </p>
      <p>Example: "Net 30" can mean payment is due within 30 days under the agreed terms.</p>

      <h3>Example</h3>
      <p>A business purchases ₱100,000 inventory from a supplier.</p>
      <p>Instead of paying immediately:</p>
      <pre>{`Day 0
Receive Inventory
 ↓
Day 30
Pay Supplier`}</pre>
      <p>
        The business effectively receives short-term financing through the supplier
        relationship.
      </p>

      <h3>Advantages</h3>
      <ul>
        <li>Preserves cash</li>
        <li>Supports working capital</li>
        <li>Can align payment with sales</li>
        <li>May reduce immediate financing needs</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Late-payment penalties</li>
        <li>Damaged supplier relationship</li>
        <li>Loss of credit terms</li>
        <li>Reduced future supply flexibility</li>
        <li>Potential legal/contractual consequences</li>
      </ul>

      <h3>Principle</h3>
      <blockquote>Treat supplier payment terms as financial obligations, not free money.</blockquote>

      <hr />

      <h2>11. Supplier Credit</h2>
      <h3>Definition</h3>
      <p>
        Supplier credit is financing or deferred payment provided directly by a supplier.
      </p>
      <p>It overlaps heavily with trade credit.</p>
      <p>A supplier may offer:</p>
      <ul>
        <li>Net-30 terms</li>
        <li>Net-60 terms</li>
        <li>Installment arrangements</li>
        <li>Deferred payment</li>
        <li>Credit limits</li>
        <li>Consignment arrangements in some cases</li>
      </ul>

      <h3>Example</h3>
      <p>A supplier normally requires ₱50,000 upfront but approves a credit arrangement allowing ₱50,000 inventory today with payment later.</p>

      <h3>Supplier Credit vs Bank Loan</h3>
      <ul>
        <li>Supplier credit — provided by supplier</li>
        <li>Bank loan — provided by financial institution</li>
        <li>Supplier credit — often connected to purchases</li>
        <li>Bank loan — usually broader use depending on terms</li>
        <li>Supplier credit — can be tied to invoices/orders</li>
        <li>Bank loan — often separate loan agreement</li>
        <li>Supplier credit — may have negotiated payment terms</li>
        <li>Bank loan — usually structured repayment</li>
        <li>Supplier credit — can strengthen supplier relationship</li>
        <li>Bank loan — doesn't necessarily affect supplier relationship</li>
      </ul>

      <h3>Important Consideration</h3>
      <p>Supplier credit can effectively increase working-capital capacity.</p>
      <p>But relying excessively on one supplier can create concentration risk.</p>

      <h3>Principle</h3>
      <blockquote>
        Use supplier credit responsibly while maintaining reliable supplier relationships and
        avoiding excessive dependence on one source.
      </blockquote>

      <hr />

      <h2>12. Revolving Credit</h2>
      <h3>Definition</h3>
      <p>
        Revolving credit is a financing facility that allows a business to borrow, repay, and
        borrow again up to an approved limit, subject to the agreement.
      </p>

      <h3>Example</h3>
      <p>Approved credit limit: ₱500,000</p>
      <p>Business uses: ₱100,000</p>
      <p>Remaining available: ₱400,000</p>
      <p>
        After repaying the ₱100,000, borrowing capacity may become available again, subject to
        the facility's terms.
      </p>
      <pre>{`₱500K LIMIT
     ↓
BORROW ₱100K
     ↓
₱400K AVAILABLE
     ↓
REPAY ₱50K
     ↓
₱450K AVAILABLE`}</pre>

      <h3>Why It Is Useful</h3>
      <p>Revolving credit can help with variable financing requirements.</p>
      <pre>{`Low Demand
 ↓
Low Borrowing

High Demand
 ↓
Higher Borrowing

Demand Falls
 ↓
Repay

Demand Rises
 ↓
Borrow Again`}</pre>

      <h3>Risks</h3>
      <p>
        Because borrowing can be repeated, businesses may become dependent on the facility.
      </p>
      <blockquote>
        Available credit is not the same thing as available profit.
      </blockquote>

      <h3>Principle</h3>
      <blockquote>
        Use revolving credit to manage genuine financing needs rather than treating the entire
        credit limit as spending capacity.
      </blockquote>

      <hr />

      <h2>13. Credit Line</h2>
      <h3>Definition</h3>
      <p>
        A credit line is an approved amount of borrowing capacity that a business can draw
        from, generally subject to the lender's terms.
      </p>
      <p>A business might receive ₱1,000,000 credit limit but only borrow ₱200,000 when needed.</p>

      <h3>Credit Line Example</h3>
      <pre>{`APPROVED LIMIT
₱1,000,000
      ↓
     USE
₱200,000
      ↓
REMAINING CAPACITY
₱800,000`}</pre>
      <p>
        Depending on the agreement, interest may generally apply to the amount actually drawn
        rather than the full limit, although fees or other charges may apply to the facility.
      </p>

      <h3>Credit Line vs Revolving Credit</h3>
      <p>
        These terms are sometimes used interchangeably in practice, but they can describe
        different structures depending on the lender.
      </p>
      <ul>
        <li>Credit line — approved borrowing capacity</li>
        <li>Revolving credit — borrowing capacity that can generally be reused</li>
        <li>Credit line — can be structured in different ways</li>
        <li>Revolving credit — specifically designed around repeated borrowing/repayment</li>
        <li>Credit line — may have draw restrictions</li>
        <li>Revolving credit — usually allows repeated draws under conditions</li>
        <li>Credit line — terms depend heavily on facility</li>
        <li>Revolving credit — terms depend heavily on facility</li>
      </ul>
      <p>The contract determines the actual mechanics.</p>

      <hr />

      <h2>Debt Concepts Comparison</h2>
      <ul>
        <li>Business loan — general business financing (varies)</li>
        <li>Working-capital loan — operating cash needs (short/medium)</li>
        <li>Term loan — defined investment (usually medium/long)</li>
        <li>Short-term loan — temporary financing gap (short)</li>
        <li>Long-term loan — long-lived investments (long)</li>
        <li>Equipment financing — equipment acquisition (often medium/long)</li>
        <li>Inventory financing — inventory purchase (usually tied to inventory cycle)</li>
        <li>Purchase-order financing — fulfill confirmed orders (order cycle)</li>
        <li>Invoice financing — access cash before invoice collection (receivables cycle)</li>
        <li>Trade credit — buy now, pay supplier later (supplier terms)</li>
        <li>Supplier credit — supplier-provided financing (supplier terms)</li>
        <li>Revolving credit — reusable financing capacity (ongoing)</li>
        <li>Credit line — flexible borrowing capacity (ongoing/defined facility)</li>
      </ul>

      <hr />

      <h2>Debt Duration Framework</h2>
      <p>
        One of the most important concepts in debt management is matching financing with the
        purpose of the money.
      </p>
      <pre>{`TEMPORARY CASH GAP
       ↓
SHORT-TERM FINANCING

INVENTORY CYCLE
       ↓
INVENTORY / WORKING-CAPITAL FINANCING

CUSTOMER ORDER
       ↓
PURCHASE-ORDER FINANCING

UNPAID INVOICE
       ↓
INVOICE FINANCING

LONG-LIVED EQUIPMENT
       ↓
EQUIPMENT / TERM FINANCING`}</pre>
      <p>
        This reduces the chance of financing a long-lived asset with debt that must be repaid
        before the asset has generated enough economic value.
      </p>

      <hr />

      <h2>Debt Cost</h2>
      <p>The principal amount borrowed isn't the only cost.</p>
      <p>
        <strong>Total Debt Cost = Interest + Fees + Financing Charges + Other Applicable Costs</strong>
      </p>
      <pre>{`₱500,000 Borrowed
      +
Interest
      +
Processing Fee
      +
Documentation Fee
      +
Other Charges
      ↓
TOTAL FINANCING COST`}</pre>
      <p>
        The effective cost should be evaluated using the actual contract and payment schedule.
      </p>

      <hr />

      <h2>Debt-Service Capacity</h2>
      <p>
        A business should examine whether operating cash generation can support debt payments.
      </p>
      <p>
        <strong>DSCR = Cash Available for Debt Service ÷ Debt Service</strong>
      </p>
      <p>Example:</p>
      <p>₱600,000 ÷ ₱400,000 = 1.5</p>
      <p>
        A ratio above 1 means the defined cash measure exceeds the defined debt-service
        requirement; it does not guarantee that the business is financially safe.
      </p>

      <hr />

      <h2>Debt-to-Revenue vs Debt-to-Profit</h2>
      <p>A common mistake is asking: "Our revenue is ₱10 million, so can we borrow ₱5 million?"</p>
      <p>Revenue alone doesn't answer the question.</p>
      <pre>{`Revenue
 ↓
Gross Margin
 ↓
Operating Expenses
 ↓
Operating Cash Flow
 ↓
Existing Debt
 ↓
New Debt
 ↓
Debt Service Capacity`}</pre>
      <p>
        A business with ₱10 million revenue and very low margins can have less debt capacity
        than a smaller business with stronger cash generation.
      </p>

      <hr />

      <h2>Debt Risk Framework</h2>
      <pre>{`PURPOSE
  ↓
COST
  ↓
REPAYMENT
  ↓
RISK
  ↓
ALTERNATIVES`}</pre>
      <ol>
        <li>Purpose — What exactly will the money fund?</li>
        <li>Cost — How much will financing actually cost?</li>
        <li>Repayment — What cash flow will repay it?</li>
        <li>Risk — What happens if sales are lower or costs are higher than expected?</li>
        <li>
          Alternatives — Could the need be funded through existing cash, customer deposits,
          preorders, supplier terms, equity, internal cash generation, or a smaller staged
          investment?
        </li>
      </ol>

      <hr />

      <h2>Productive vs Unproductive Debt</h2>
      <p>
        Debt itself isn't automatically productive or unproductive. Its economic effect
        depends on what it finances and whether the resulting benefits justify the costs and
        risks.
      </p>
      <p>Potentially productive use:</p>
      <pre>{`Debt
 ↓
Equipment
 ↓
Higher productive capacity
 ↓
Additional contribution
 ↓
Debt repayment`}</pre>
      <p>Potentially problematic use:</p>
      <pre>{`Debt
 ↓
Unvalidated inventory
 ↓
Poor sales
 ↓
Inventory remains
 ↓
Cash doesn't return
 ↓
Debt remains`}</pre>
      <p>
        The distinction should be based on evidence and economics rather than simply labeling
        a particular debt type as "good" or "bad."
      </p>

      <hr />

      <h2>Debt Management Dashboard</h2>
      <ul>
        <li>Total debt — overall borrowing</li>
        <li>Current debt — near-term obligations</li>
        <li>Long-term debt — longer-term obligations</li>
        <li>Interest rate — cost of borrowing</li>
        <li>Total financing cost — full financing burden</li>
        <li>Monthly debt service — required periodic payment</li>
        <li>DSCR — debt-service capacity</li>
        <li>Debt-to-equity — capital structure</li>
        <li>Debt-to-assets — leverage</li>
        <li>Credit utilization — used credit capacity</li>
        <li>Available credit — remaining facility capacity</li>
        <li>Accounts payable — supplier obligations</li>
        <li>Accounts receivable — customer amounts owed</li>
        <li>Inventory — capital tied in stock</li>
        <li>Cash balance — immediate liquidity</li>
        <li>Cash-flow forecast — future liquidity</li>
        <li>Loan maturity — when obligations become due</li>
      </ul>

      <hr />

      <h2>Debt Lifecycle</h2>
      <pre>{`NEED IDENTIFIED
      ↓
PURPOSE DEFINED
      ↓
AMOUNT CALCULATED
      ↓
REPAYMENT SOURCE IDENTIFIED
      ↓
FINANCING OPTIONS COMPARED
      ↓
TOTAL COST ANALYZED
      ↓
CONTRACT REVIEWED
      ↓
BORROW
      ↓
USE FUNDS FOR INTENDED PURPOSE
      ↓
MONITOR RESULTS
      ↓
MAKE PAYMENTS
      ↓
REASSESS
      ↓
REPAY / RENEW / REFINANCE IF APPROPRIATE`}</pre>

      <hr />

      <h2>Common Debt Mistakes</h2>

      <h3>1. Borrowing Without a Purpose</h3>
      <pre>{`"There's a credit line available."
        ↓
"Let's use it."`}</pre>
      <p>Availability isn't a reason to borrow.</p>

      <h3>2. Focusing Only on Monthly Payment</h3>
      <p>A low monthly payment can result from a longer repayment period.</p>
      <p>Always examine total financing cost + repayment period + obligations.</p>

      <h3>3. Financing Losses Indefinitely</h3>
      <p>Debt can temporarily support a business, but it cannot automatically repair:</p>
      <ul>
        <li>Weak demand</li>
        <li>Negative unit economics</li>
        <li>Poor pricing</li>
        <li>Excessive expenses</li>
        <li>Unsustainable operations</li>
      </ul>

      <h3>4. Ignoring Cash Timing</h3>
      <p>Profitability doesn't guarantee that cash arrives before debt payments are due.</p>

      <h3>5. Using Long-Term Debt for Permanent Operating Losses</h3>
      <p>
        If a business continuously needs new borrowing just to pay ordinary expenses without a
        credible path to positive cash generation, the underlying business model needs
        examination.
      </p>

      <h3>6. Treating Credit Limit as Cash</h3>
      <pre>{`Credit Limit = ₱1M

doesn't mean:

Business Cash = ₱1M`}</pre>
      <p>
        It means the business potentially has access to financing under specified conditions.
      </p>

      <hr />

      <h2>Master Debt Decision Framework</h2>
      <pre>{`1. WHY DO WE NEED THE MONEY?
             ↓
2. HOW MUCH DO WE ACTUALLY NEED?
             ↓
3. WHAT WILL THE MONEY PRODUCE?
             ↓
4. HOW FAST WILL CASH RETURN?
             ↓
5. WHAT IS THE TOTAL FINANCING COST?
             ↓
6. WHAT ARE THE REPAYMENT TERMS?
             ↓
7. WHAT HAPPENS IF SALES ARE LOWER?
             ↓
8. WHAT OTHER OPTIONS EXIST?
             ↓
9. CAN WE STILL MAINTAIN LIQUIDITY?
             ↓
10. DOES THE CONTRACT MAKE SENSE?
             ↓
        BORROW / DON'T BORROW`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>
          <strong>Business loan</strong> — borrow for a defined business purpose and
          understand the full repayment obligation.
        </li>
        <li>
          <strong>Working-capital loan</strong> — use financing to manage legitimate
          operating-cycle timing rather than permanently cover losses.
        </li>
        <li>
          <strong>Term loan</strong> — use structured financing for identifiable investments
          with a defined repayment horizon.
        </li>
        <li>
          <strong>Short-term loan</strong> — match short-term borrowing with a realistic
          short-term repayment source.
        </li>
        <li>
          <strong>Long-term loan</strong> — consider longer financing for investments that
          generate value over longer periods.
        </li>
        <li>
          <strong>Equipment financing</strong> — evaluate equipment based on productive
          value, utilization, useful life, and total financing cost.
        </li>
        <li>
          <strong>Inventory financing</strong> — ensure inventory can reasonably convert back
          into cash before financing obligations become problematic.
        </li>
        <li>
          <strong>Purchase-order financing</strong> — evaluate the entire customer-order
          economics and fulfillment risk, not just the existence of an order.
        </li>
        <li>
          <strong>Invoice financing</strong> — use receivables financing to manage timing
          while considering customer payment reliability and financing costs.
        </li>
        <li>
          <strong>Trade credit</strong> — treat supplier payment terms as real financial
          obligations.
        </li>
        <li>
          <strong>Supplier credit</strong> — use supplier-provided financing responsibly
          while maintaining healthy supplier relationships.
        </li>
        <li>
          <strong>Revolving credit</strong> — use reusable credit capacity for variable
          financing needs rather than treating the limit as spending money.
        </li>
        <li>
          <strong>Credit line</strong> — maintain flexible borrowing capacity while
          monitoring utilization, cost, repayment ability, and facility conditions.
        </li>
      </ol>

      <h3>Master Formula</h3>
      <p>
        Purpose → Amount → Cash-flow source → Financing type → Total cost → Repayment capacity
        → Risk → Alternatives → Contract → Borrow → Monitor → Repay.
      </p>
    </LessonLayout>
  )
}
