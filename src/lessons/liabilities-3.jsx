import LessonLayout from '../components/LessonLayout'

export default function Liabilities3() {
  return (
    <LessonLayout
      number="168"
      title="Liabilities — Part 3"
      summary="16 environmental, contract, tax, and trade obligations — environmental and contract liabilities, gift cards, loyalty points, subscription and delivery obligations, purchase commitments, tax debt, VAT, income tax, withholding tax, customs, import duties, and dividends payable."
    >
      <h2>Liabilities — Part 3</h2>

      <h2>Environmental Liabilities</h2>
      <p>Obligations arising from environmental responsibilities, such as cleanup or restoration.</p>
      <p>Example: A company may have an obligation to restore a site after operations.</p>

      <h2>Contract Liabilities</h2>
      <p>Obligations arising because a customer has paid or consideration is due before the business satisfies its contractual performance obligations.</p>

      <h2>Gift-Card Liabilities</h2>
      <p>When customers purchase gift cards, the business may owe future goods or services to the cardholder.</p>
      <p>Example: 1,000 gift cards × ₱500 = ₱500,000. Until the applicable obligation is satisfied or the amount is otherwise treated under the relevant rules, the business may have a corresponding liability.</p>

      <h2>Loyalty-Point Liabilities</h2>
      <p>Loyalty points can create an obligation when customers earn rights to future benefits.</p>
      <p>Example: 10,000 points outstanding × expected economic value per point. The accounting measurement requires appropriate assumptions and applicable accounting treatment.</p>

      <h2>Subscription Obligations</h2>
      <p>A business receiving payment for future subscription service may have an obligation to provide future access.</p>

      <h2>Delivery Obligations</h2>
      <p>A business may have an obligation to deliver products that customers have already paid for.</p>

      <h2>Purchase Obligations</h2>
      <p>Contractual commitments to purchase goods or services in the future.</p>
      <p>Not every purchase commitment is necessarily recognized as a balance-sheet liability immediately; recognition depends on the terms and applicable accounting standards.</p>

      <h2>Tax Debt</h2>
      <p>Unpaid taxes owed to government authorities.</p>
      <p>Potential consequences can include: interest, penalties, collection action, restrictions, and legal consequences.</p>

      <h2>VAT Payable</h2>
      <p>VAT collected or otherwise payable to the tax authority after considering applicable input credits and adjustments.</p>

      <h2>Income-Tax Payable</h2>
      <p>Income tax currently owed to the government.</p>

      <h2>Withholding-Tax Payable</h2>
      <p>Amounts withheld from payments and required to be remitted to the relevant authority.</p>

      <h2>Customs Obligations</h2>
      <p>Obligations arising from importing or exporting goods, such as customs declarations, duties, taxes, and compliance requirements.</p>

      <h2>Import Duties Payable</h2>
      <p>Customs duties owed on imported goods.</p>

      <h2>Dividends Payable</h2>
      <p>Once a dividend has been validly declared and becomes an obligation, the amount payable to shareholders can become a liability until paid, depending on applicable law and accounting treatment.</p>

      <h3>Tax and Trade Liability Flow</h3>
      <pre>{`Transaction
    ↓
Tax / Duty Determination
    ↓
Amount Becomes Payable
    ↓
Record Liability
    ↓
File / Report
    ↓
Payment
    ↓
Liability Settled`}</pre>
    </LessonLayout>
  )
}
