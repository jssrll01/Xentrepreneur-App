import LessonLayout from '../components/LessonLayout'

export default function Revenue1() {
  return (
    <LessonLayout
      number="132"
      title="Revenue — Part 1"
      summary="10 core revenue streams — product sales, service fees, subscription, membership, advertising, affiliate commissions, transaction fees, marketplace commissions, licensing, and royalties."
    >
      <h2>Revenue — Part 1</h2>
      <p>Revenue is the total income a business generates from its commercial activities before deducting costs. Different revenue streams have different economics, delivery requirements, and cash-flow characteristics.</p>

      <h2>1. Product Sales</h2>
      <h3>Definition</h3>
      <p>Revenue earned from selling physical or digital products to customers.</p>
      <h3>Example</h3>
      <p>Selling 500 units at ₱500 = ₱250,000 revenue.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Transaction-based</li>
        <li>Often one-time</li>
        <li>Depends on inventory, production, and fulfillment</li>
        <li>Gross profit = Revenue − COGS</li>
      </ul>
      <h3>Metrics</h3>
      <p>Units sold, AOV, gross margin, sell-through, return rate.</p>

      <hr />

      <h2>2. Service Fees</h2>
      <h3>Definition</h3>
      <p>Revenue earned from providing services, expertise, labor, or activity for customers.</p>
      <h3>Example</h3>
      <p>₱20,000/month for bookkeeping services.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Often capacity-constrained</li>
        <li>Time or project-based</li>
        <li>Depends on people and delivery capability</li>
      </ul>
      <h3>Metrics</h3>
      <p>Revenue per client, effective hourly rate, utilization, project margin.</p>

      <hr />

      <h2>3. Subscription Revenue</h2>
      <h3>Definition</h3>
      <p>Revenue earned through recurring payments for continued access to a product, service, or benefit.</p>
      <h3>Example</h3>
      <p>1,000 customers × ₱500/month = ₱500,000 MRR.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Recurring</li>
        <li>Predictable if retention is strong</li>
        <li>Requires continuous value delivery</li>
      </ul>
      <h3>Metrics</h3>
      <p>MRR, ARR, churn, retention, ARPC, LTV.</p>

      <hr />

      <h2>4. Membership Fees</h2>
      <h3>Definition</h3>
      <p>Revenue earned through fees paid by members for access, privileges, benefits, or belonging.</p>
      <h3>Example</h3>
      <p>₱499/month for a professional community.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Recurring</li>
        <li>Depends on member value and community strength</li>
        <li>May include tiered structures</li>
      </ul>
      <h3>Metrics</h3>
      <p>Active members, member retention, revenue per member, engagement.</p>

      <hr />

      <h2>5. Advertising Revenue</h2>
      <h3>Definition</h3>
      <p>Revenue earned from advertisers paying for access to an audience, placements, or outcomes.</p>
      <h3>Example</h3>
      <p>CPM ₱100 × 500,000 impressions = ₱50,000.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Depends on audience scale and engagement</li>
        <li>Often measured by impressions, clicks, or conversions</li>
        <li>Needs both audience and advertiser demand</li>
      </ul>
      <h3>Metrics</h3>
      <p>Impressions, CPM, CTR, fill rate, ad revenue per user.</p>

      <hr />

      <h2>6. Affiliate Commissions</h2>
      <h3>Definition</h3>
      <p>Revenue earned when an affiliate promotes products or services and receives a commission for qualifying actions.</p>
      <h3>Example</h3>
      <p>10% commission on a ₱1,000 sale = ₱100.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Performance-based</li>
        <li>Requires tracking and attribution</li>
        <li>Compensation tied to defined qualifying actions</li>
      </ul>
      <h3>Metrics</h3>
      <p>Referral rate, conversion rate, CAC, commission expense, revenue per affiliate.</p>

      <hr />

      <h2>7. Transaction Fees</h2>
      <h3>Definition</h3>
      <p>Revenue earned by charging a fee whenever a transaction occurs through a service or platform.</p>
      <h3>Example</h3>
      <p>₱1,500 transaction × 3% fee = ₱45.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Scales with transaction volume</li>
        <li>Independent of product ownership</li>
        <li>Depends on transaction platform usage</li>
      </ul>
      <h3>Metrics</h3>
      <p>Transaction volume, fee revenue, average fee per transaction, take rate.</p>

      <hr />

      <h2>8. Marketplace Commissions</h2>
      <h3>Definition</h3>
      <p>Revenue earned by a marketplace as a percentage of transactions completed between buyers and sellers on the platform.</p>
      <h3>Example</h3>
      <p>₱1,000,000 GMV × 10% commission = ₱100,000.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Scales with GMV</li>
        <li>Depends on buyer and seller activity</li>
        <li>Requires marketplace liquidity</li>
      </ul>
      <h3>Metrics</h3>
      <p>GMV, take rate, active sellers, active buyers, orders, marketplace revenue.</p>

      <hr />

      <h2>9. Licensing Revenue</h2>
      <h3>Definition</h3>
      <p>Revenue earned by granting another party the right to use intellectual property, technology, content, or brand under defined terms.</p>
      <h3>Example</h3>
      <p>₱100,000/year for software license usage.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Scalable if the licensed asset is reusable</li>
        <li>Requires clear licensing terms</li>
        <li>Revenue may be fixed or recurring</li>
      </ul>
      <h3>Metrics</h3>
      <p>License revenue, number of licensees, renewal rate, revenue per license.</p>

      <hr />

      <h2>10. Royalties</h2>
      <h3>Definition</h3>
      <p>Revenue earned as a percentage of qualifying revenue generated from the use or sale of intellectual property, products, or licensed assets.</p>
      <h3>Example</h3>
      <p>5% royalty on ₱1,000,000 qualifying revenue = ₱50,000.</p>
      <h3>Key Characteristics</h3>
      <ul>
        <li>Depends on downstream revenue</li>
        <li>Requires reporting and audit</li>
        <li>Aligned with licensed asset performance</li>
      </ul>
      <h3>Metrics</h3>
      <p>Royalty rate, qualifying revenue, royalty income, licensee performance.</p>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Revenue is not the same as profit.</li>
        <li>Different revenue streams have different economics and risk profiles.</li>
        <li>Recurring revenue requires ongoing value delivery.</li>
        <li>Transaction and commission revenue scales with activity.</li>
        <li>Licensing and royalties depend on intellectual property and agreements.</li>
        <li>Affiliate and performance revenue depends on attribution and measurement.</li>
        <li>Multiple revenue streams can reduce dependence on a single source.</li>
        <li>Revenue mix should match business capability and customer demand.</li>
        <li>Every revenue stream has associated costs and requirements.</li>
        <li>Revenue diversification introduces additional operational complexity.</li>
      </ol>
    </LessonLayout>
  )
}
