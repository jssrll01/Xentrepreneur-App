import LessonLayout from '../components/LessonLayout'

export default function Liabilities7() {
  return (
    <LessonLayout
      number="172"
      title="Liabilities — Part 7"
      summary="10 currency, related-party, deposit, and credit obligations — foreign-currency liabilities, employee advances payable, related-party and intercompany payables, security deposits received, and customer, store, and refund credits."
    >
      <h2>Liabilities — Part 7</h2>

      <h2>Foreign-Currency Liabilities</h2>
      <p>Obligations denominated in another currency.</p>
      <p>Example: US$100,000 liability.</p>
      <p>At ₱55/USD: ₱5,500,000</p>
      <p>At ₱58/USD: ₱5,800,000</p>
      <p>The peso value has increased by ₱300,000 before considering settlement, accounting treatment, and other factors.</p>

      <h2>Employee Advances Payable</h2>
      <p>Amounts employees owe back to the company, such as recoverable advances.</p>

      <h2>Related-Party Loans</h2>
      <p>Loans between related parties.</p>
      <p>Examples: owner → company, parent → subsidiary, sister company → company.</p>
      <p>These often require careful documentation and appropriate disclosure.</p>

      <h2>Intercompany Payables</h2>
      <p>Amounts owed between companies within the same corporate group.</p>
      <p>Example: Subsidiary A owes Parent Company ₱500,000.</p>

      <h2>Security Deposits Received</h2>
      <p>Money received from customers, tenants, or counterparties that may need to be returned if contractual conditions are satisfied.</p>

      <h2>Customer Credits</h2>
      <p>Amounts credited to customers for future purchases or services.</p>
      <p>Example: Customer has ₱1,000 credit after a service adjustment.</p>

      <h2>Store Credits</h2>
      <p>Credit customers can use toward future purchases instead of receiving immediate cash refunds, subject to the business's terms and applicable law.</p>

      <h2>Refund Credits</h2>
      <p>Amounts owed to customers through credits rather than immediate cash refunds.</p>

      <h3>Customer-Related Liability Flow</h3>
      <pre>{`Customer Payment / Deposit
          ↓
Future Customer Obligation
          ↓
Product / Service / Credit / Refund
          ↓
Obligation Fulfilled
          ↓
Liability Reduced`}</pre>
    </LessonLayout>
  )
}
