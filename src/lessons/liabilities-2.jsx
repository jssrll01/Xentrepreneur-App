import LessonLayout from '../components/LessonLayout'

export default function Liabilities2() {
  return (
    <LessonLayout
      number="167"
      title="Liabilities — Part 2"
      summary="13 customer, employee, and contractual obligations — customer deposits, deferred and unearned revenue, refunds, warranties, lease liabilities, finance and operating leases, payroll, benefits, pension, insurance, and legal provisions."
    >
      <h2>Liabilities — Part 2</h2>

      <h2>1. Customer Deposits</h2>
      <p>Money received from customers before the business has completely delivered the promised product or service.</p>
      <p>Example: Customer pays ₱20,000 upfront for a website scheduled for delivery next month. The business has cash, but it may also have an obligation to deliver.</p>

      <h2>2. Deferred Revenue</h2>
      <p>Revenue received or recognized in advance of satisfying the relevant performance obligation.</p>
      <p>Example: A customer pays ₱12,000 for one year of software access. The amount may initially be recognized as a liability and recognized as revenue as the service is provided, subject to the applicable accounting rules.</p>

      <h2>3. Unearned Revenue</h2>
      <p>A commonly used term for amounts received before the related goods or services have been earned. It is closely related to deferred revenue.</p>

      <h2>4. Refund Liabilities</h2>
      <p>An obligation to return money to a customer under applicable return, cancellation, or refund terms.</p>
      <p>Example: Customer paid ₱5,000 and is entitled to a refund of ₱5,000.</p>

      <h2>5. Warranty Liabilities</h2>
      <p>An obligation associated with expected warranty claims or warranty services, where recognition is required under the applicable accounting framework.</p>

      <h2>6. Lease Liabilities</h2>
      <p>The obligation to make lease payments arising from a lease, subject to applicable accounting standards.</p>
      <p>Example: A business leases equipment for several years with contractual payments.</p>

      <h2>7. Finance Leases</h2>
      <p>A lease arrangement that, under applicable accounting rules, substantially transfers the risks and rewards associated with ownership. The exact accounting treatment depends on the applicable standards.</p>

      <h2>8. Operating Leases</h2>
      <p>Generally represents a lease that does not have the characteristics of a finance lease under the applicable classification framework.</p>
      <p>Modern accounting standards may still require recognition of a lease liability and corresponding right-of-use asset for many leases.</p>

      <h2>9. Payroll Liabilities</h2>
      <p>Amounts owed in connection with employee compensation and payroll-related obligations.</p>
      <p>Examples: unpaid wages, withholding taxes, employer contributions, and payroll deductions.</p>

      <h2>10. Benefit Liabilities</h2>
      <p>Amounts associated with employee benefits that have been earned or otherwise become obligations.</p>
      <p>Examples: bonuses, leave benefits, health benefits, and other employee benefits.</p>

      <h2>11. Pension Liabilities</h2>
      <p>Can arise when an employer has an obligation associated with a defined-benefit pension arrangement or other applicable retirement benefit.</p>

      <h2>12. Insurance Liabilities</h2>
      <p>Insurance-related liabilities can arise from obligations under insurance contracts, depending on the nature of the business and applicable accounting rules.</p>

      <h2>13. Legal Provisions</h2>
      <p>A provision may be recognized when an entity has a present obligation, a probable outflow or equivalent criterion is met, and the amount can be reliably estimated according to the relevant accounting standard.</p>
      <p>Examples may include certain legal claims, regulatory obligations, and restoration obligations.</p>

      <h3>Liability Lifecycle</h3>
      <pre>{`Obligation Created
       ↓
Measure Obligation
       ↓
Recognize Liability When Required
       ↓
Monitor
       ↓
Settle / Fulfill
       ↓
Remove Liability`}</pre>
    </LessonLayout>
  )
}
