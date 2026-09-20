import LessonLayout from '../components/LessonLayout'

export default function Liabilities6() {
  return (
    <LessonLayout
      number="171"
      title="Liabilities — Part 6"
      summary="15 covenant, accrual, tax, and provision categories — debt covenants, principal payable, accrued interest, deferred tax liabilities, asset-retirement, restoration, environmental, long and short-term provisions, financial liabilities, and derivative liabilities."
    >
      <h2>Liabilities — Part 6</h2>

      <h2>Debt Covenants</h2>
      <p>Conditions imposed by lenders that borrowers must satisfy.</p>
      <p>Examples: minimum liquidity, maximum debt ratio, minimum interest coverage, restrictions on additional debt, and reporting requirements.</p>
      <p>A covenant breach can trigger consequences specified in the agreement.</p>

      <h2>Principal Payable</h2>
      <p>The outstanding amount of borrowed money that must eventually be repaid.</p>
      <p><strong>Outstanding Principal = Original Principal − Principal Repaid</strong></p>

      <h2>Accrued Interest</h2>
      <p>Interest incurred but not yet paid.</p>
      <p>Example: ₱1 million debt × 1% monthly interest = ₱10,000 accrued interest for a month, assuming the stated rate and calculation method.</p>

      <h2>Deferred Tax Liabilities</h2>
      <p>Generally represents future tax consequences arising from temporary differences between accounting carrying amounts and tax bases, under the applicable tax/accounting framework.</p>
      <p>It is not simply "unpaid tax from last month."</p>

      <h2>Asset-Retirement Obligations</h2>
      <p>Obligations associated with retiring certain long-lived assets.</p>
      <p>Examples: removing equipment, restoring a site, and decommissioning facilities.</p>

      <h2>Restoration Obligations</h2>
      <p>Obligations to restore property or an environment after an activity ends.</p>

      <h2>Environmental Obligations</h2>
      <p>Responsibilities arising from environmental laws, contracts, permits, or commitments.</p>

      <h2>Long-Term Provisions</h2>
      <p>Provisions expected to be settled beyond the short term.</p>
      <p>Examples can include qualifying restoration obligations, legal provisions, and environmental obligations.</p>

      <h2>Short-Term Provisions</h2>
      <p>Qualifying provisions expected to be settled within a relatively short period.</p>

      <h2>Financial Liabilities</h2>
      <p>Generally include contractual obligations to deliver cash or another financial asset.</p>
      <p>Examples: loans, bonds, accounts payable, and certain derivatives.</p>

      <h2>Derivative Liabilities</h2>
      <p>A derivative can have a negative fair value, creating a derivative liability.</p>
      <p>Examples: certain futures, options, swaps, and forward contracts.</p>
      <p>The amount can change as market conditions change.</p>
    </LessonLayout>
  )
}
