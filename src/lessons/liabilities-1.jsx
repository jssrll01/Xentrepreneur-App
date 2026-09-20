import LessonLayout from '../components/LessonLayout'

export default function Liabilities1() {
  return (
    <LessonLayout
      number="166"
      title="Liabilities — Part 1"
      summary="15 core liability categories — accounts payable, short and long-term loans, credit-card balances, bank debt, bonds, notes payable, accrued expenses, salaries, taxes, interest, rent, utilities, supplier debt, and trade credit."
    >
      <h2>Liabilities — Part 1</h2>
      <p>Liabilities are present obligations arising from past events that require settlement through resources or other economic sacrifice, subject to the applicable accounting framework.</p>

      <h2>1. Accounts Payable</h2>
      <p>Money a business owes suppliers for goods or services already received but not yet paid for.</p>
      <p>Example: A business purchases ₱50,000 of inventory on Net-30 terms. Until payment is made, ₱50,000 is recorded as accounts payable.</p>
      <p><strong>Accounts Payable = Unpaid Supplier Invoices</strong></p>
      <p>Management: record invoices accurately, match invoices with purchase orders and receiving records, track due dates, schedule payments, reconcile supplier statements, and avoid unnecessary late fees.</p>

      <h2>2. Short-Term Loans</h2>
      <p>Borrowings expected to be repaid within a relatively short period, commonly within one year.</p>
      <p>They may finance: inventory, payroll, working capital, temporary cash shortages, and seasonal purchases.</p>
      <p>Example: Borrow ₱200,000 for six months to purchase seasonal inventory.</p>

      <h2>3. Long-Term Loans</h2>
      <p>Borrowings with repayment extending beyond the short term.</p>
      <p>Examples: business expansion loans, equipment loans, property loans, long-term working-capital financing.</p>
      <p>The liability is normally separated between the portion due soon and the longer-term portion under applicable accounting rules.</p>

      <h2>4. Credit-Card Balances</h2>
      <p>The amount owed to a card issuer for purchases, cash advances, fees, or other charges.</p>
      <p>Example: ₱80,000 purchases − ₱30,000 payments = approximately ₱50,000 outstanding before applicable interest and adjustments.</p>
      <p>Credit cards can provide flexibility but may become expensive when balances revolve at high interest rates.</p>

      <h2>5. Bank Debt</h2>
      <p>Money owed to a bank or financial institution.</p>
      <p>It can include: term loans, credit lines, overdrafts, equipment financing, and mortgages.</p>
      <p>Important variables include principal, interest rate, maturity, collateral, repayment schedule, and covenants.</p>

      <h2>6. Bonds Payable</h2>
      <p>Debt issued by a company to investors.</p>
      <p>A company receives funds from investors and agrees to pay interest according to the bond terms and repay principal according to the maturity terms.</p>
      <p>Example: A company issues ₱10 million of bonds with a stated annual interest rate of 8%.</p>
      <p><strong>Annual stated interest = ₱10,000,000 × 8% = ₱800,000</strong></p>

      <h2>7. Notes Payable</h2>
      <p>A formal written promise to pay a specified amount according to agreed terms.</p>
      <p>It commonly specifies: principal, interest, maturity date, payment schedule, security, and default terms.</p>

      <h2>8. Accrued Expenses</h2>
      <p>Expenses that have been incurred but have not yet been paid.</p>
      <p>Example: Employees have earned ₱100,000 of wages by month-end, but payroll will be paid next month. The business has incurred the expense and has a corresponding liability.</p>

      <h2>9. Salaries Payable</h2>
      <p>Employee compensation earned but not yet paid.</p>
      <p>It may include: salaries, wages, overtime, bonuses, and commissions.</p>

      <h2>10. Taxes Payable</h2>
      <p>Taxes owed to government authorities but not yet paid.</p>
      <p>Examples: income taxes, VAT, withholding taxes, property taxes, excise taxes, and other applicable business taxes.</p>

      <h2>11. Interest Payable</h2>
      <p>Interest that has been incurred but has not yet been paid.</p>
      <p>Example: A ₱500,000 loan generates ₱5,000 of interest during the month, payable later. The ₱5,000 can become interest payable.</p>

      <h2>12. Rent Payable</h2>
      <p>Rent already owed but not yet paid.</p>
      <p>Example: December rent = ₱40,000; payment date = January 5. At the relevant reporting date, ₱40,000 may be a rent payable.</p>

      <h2>13. Utilities Payable</h2>
      <p>Amounts owed for services such as electricity, water, internet, gas, and telecommunications.</p>
      <p>The expense may be recognized before the invoice is paid.</p>

      <h2>14. Supplier Debt</h2>
      <p>A broad term for amounts owed to suppliers.</p>
      <p>It can arise from: inventory purchases, raw materials, services, equipment, and trade credit.</p>

      <h2>15. Trade Credit</h2>
      <p>Occurs when a supplier allows a customer to receive goods or services now and pay later.</p>
      <p>Example: ₱100,000 purchase — Net 30. The supplier effectively provides short-term financing.</p>

      <h3>Liability Relationship</h3>
      <pre>{`Supplier Delivers
      ↓
Business Receives Product
      ↓
Invoice Created
      ↓
Accounts Payable
      ↓
Payment
      ↓
Liability Settled`}</pre>

      <h3>Core Principle</h3>
      <p>Liabilities represent present obligations arising from past events that require settlement through resources or other economic sacrifice, subject to the applicable accounting framework.</p>
    </LessonLayout>
  )
}
