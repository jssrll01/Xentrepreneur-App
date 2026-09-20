import LessonLayout from '../components/LessonLayout'

export default function BusinessModel2() {
  return (
    <LessonLayout
      number="117"
      title="Business Model — Part 2"
      summary="15 operating models — marketplace, subscription, freemium, SaaS, on-demand, franchise, licensing, affiliate, advertising, commission, transaction fee, brokerage, reseller, wholesale, and retail."
    >
      <h2>Business Model — Part 2</h2>
      <p>Business models describe how a business creates value, delivers value, reaches customers, and captures revenue. Unlike B2B/B2C classifications, the models in this part focus primarily on how the business operates and makes money.</p>

      <hr />

      <h2>1. Marketplace Model</h2>
      <h3>Definition</h3>
      <p>A marketplace model operates a platform that connects multiple sellers or service providers with buyers. The marketplace typically does not need to own all the products being sold.</p>
      <p>Examples: product marketplaces, service marketplaces, freelance platforms, rental marketplaces, C2C marketplaces, B2B marketplaces.</p>

      <h3>Revenue Sources</h3>
      <p>Commission, transaction fees, listing fees, seller subscriptions, advertising, featured listings, payment fees, premium seller tools.</p>

      <h3>Key Metrics</h3>
      <p>Gross merchandise value (GMV), take rate, active buyers, active sellers, orders, buyer conversion, seller activation, repeat purchase, average order value, dispute rate.</p>

      <h3>Main Challenge</h3>
      <p>A marketplace must develop sufficient liquidity. Buyers need enough sellers and products, while sellers need enough buyers. This creates the classic marketplace two-sided network effect.</p>

      <hr />

      <h2>2. Subscription Model</h2>
      <h3>Definition</h3>
      <p>A subscription model charges customers repeatedly for continued access to a product, service, membership, or benefit.</p>
      <p>Examples: streaming, software, memberships, education, digital content, maintenance services, cloud services.</p>

      <h3>Important Metrics</h3>
      <p>MRR = Monthly Recurring Revenue. ARR = Annual Recurring Revenue. Churn Rate = (Customers Lost ÷ Customers at Beginning of Period) × 100. ARPC = Recurring Revenue ÷ Number of Customers.</p>
      <p><strong>LTV ≈ ARPC × Gross Margin × Average Customer Lifetime</strong></p>

      <h3>Main Advantage and Challenge</h3>
      <p>Revenue can become more predictable when customers consistently renew. But the business must continuously provide enough value to justify renewal.</p>

      <hr />

      <h2>3. Freemium Model</h2>
      <h3>Definition</h3>
      <p>Freemium combines a free version with paid versions or paid features.</p>

      <h3>Key Formula</h3>
      <p><strong>Freemium Conversion Rate = (Paid Users ÷ Free Users) × 100</strong></p>

      <h3>Advantages</h3>
      <p>Low barrier to entry, large potential user base, product-led acquisition, easy product trial, network effects can develop.</p>

      <h3>Risks</h3>
      <p>Free users create infrastructure/support costs, low conversion, users may remain permanently free, paid features may be insufficiently valuable.</p>

      <h3>Core Principle</h3>
      <p>The free version should demonstrate value while the paid version provides a meaningful reason to upgrade.</p>

      <hr />

      <h2>4. SaaS Model</h2>
      <h3>Definition</h3>
      <p>SaaS (Software as a Service) delivers software over the internet, typically through a recurring subscription or usage-based arrangement. Instead of purchasing software once and installing it permanently, customers generally access a hosted service.</p>

      <h3>SaaS Revenue Models</h3>
      <p>Per user, per seat, per organization, feature-based, usage-based, storage-based, subscription tiers, freemium, enterprise contracts.</p>

      <h3>Important Metrics</h3>
      <p>MRR, ARR, churn, retention, ARPC, CAC, LTV, activation, product usage, expansion revenue.</p>

      <h3>SaaS vs Subscription</h3>
      <p>Subscription describes a recurring payment structure. SaaS describes software delivered as a service. A SaaS product often uses subscription pricing, but the concepts are not identical.</p>

      <hr />

      <h2>5. On-Demand Model</h2>
      <h3>Definition</h3>
      <p>An on-demand model provides a product or service when the customer requests it rather than requiring a fixed long-term schedule.</p>
      <p>Examples: food delivery, ride-hailing, home services, freelance tasks, same-day delivery, on-demand technical support.</p>

      <h3>Revenue Models</h3>
      <p>Service fee, commission, booking fee, delivery fee, surge/peak pricing where permitted, subscription, membership.</p>

      <h3>Main Challenge</h3>
      <p>On-demand businesses often need to balance customer demand and provider supply. Too much demand → provider capacity ↓ → wait time ↑. Too much provider capacity → providers ↑ → demand ↓ → provider utilization ↓.</p>

      <hr />

      <h2>6. Franchise Model</h2>
      <h3>Definition</h3>
      <p>A franchise model allows independent operators, called franchisees, to operate businesses using a franchisor's established brand, systems, intellectual property, products, or operating methods under a contractual relationship.</p>

      <h3>Typical Franchise Economics</h3>
      <p>The franchisee may pay initial franchise fee, royalty, advertising contribution, technology fee, and other agreed fees.</p>

      <h3>Advantages</h3>
      <p>For franchisor: faster geographic expansion, franchisee capital, local operators, recurring royalty potential. For franchisee: established brand, operating system, training, support, established business model.</p>

      <h3>Risks</h3>
      <p>Quality inconsistency, franchise conflicts, brand reputation risk, contract complexity, location risk, franchisee performance differences.</p>

      <hr />

      <h2>7. Licensing Model</h2>
      <h3>Definition</h3>
      <p>A licensing model allows another party to use intellectual property or other protected rights under defined contractual terms in exchange for payment or other consideration. Licensed assets can include software, patents, trademarks, designs, copyrighted content, technology, characters, and brand assets.</p>

      <h3>Important Licensing Terms</h3>
      <p>What is licensed, territory, duration, exclusivity, permitted uses, restrictions, payment, royalty calculation, reporting, intellectual-property ownership, termination.</p>

      <h3>Licensing vs Selling</h3>
      <p>Selling — ownership may transfer. Licensing — ownership generally remains with the rights holder while usage rights are granted.</p>

      <hr />

      <h2>8. Affiliate Model</h2>
      <h3>Definition</h3>
      <p>An affiliate model uses independent partners to promote products or services in exchange for compensation for qualifying actions, usually sales or leads.</p>

      <h3>Affiliate Tracking</h3>
      <p>Tracking links, referral codes, cookies where applicable and properly disclosed, server-side attribution, unique campaign identifiers.</p>

      <h3>Affiliate vs Reseller</h3>
      <ul>
        <li>Affiliate — primarily promotes; reseller — usually sells/resells</li>
        <li>Affiliate — usually doesn't own inventory; reseller — may hold inventory</li>
        <li>Affiliate — paid commission; reseller — earns markup/margin</li>
        <li>Affiliate — lower operational responsibility; reseller — more operational responsibility</li>
        <li>Affiliate — traffic-focused; reseller — distribution-focused</li>
      </ul>

      <hr />

      <h2>9. Advertising Model</h2>
      <h3>Definition</h3>
      <p>An advertising model generates revenue by charging advertisers for access to an audience, placements, impressions, clicks, actions, or other advertising outcomes.</p>
      <p>Examples: websites, search engines, social platforms, video platforms, apps, news platforms.</p>

      <h3>Common Advertising Pricing</h3>
      <p><strong>CPM — Cost Per Mille</strong> (cost per 1,000 impressions). <strong>CPC — Cost Per Click.</strong> <strong>CPA — Cost Per Acquisition/Action.</strong></p>

      <h3>Main Challenge</h3>
      <p>Advertising businesses need both audience scale and advertiser demand. A large audience does not automatically produce high advertising revenue.</p>

      <hr />

      <h2>10. Commission Model</h2>
      <h3>Definition</h3>
      <p>A commission model charges or earns a percentage or fixed amount based on a completed transaction or other qualifying activity.</p>
      <p><strong>Commission = Qualifying Transaction Value × Commission Rate</strong></p>

      <h3>Commission Structures</h3>
      <p>Fixed percentage, fixed amount, tiered commission, performance commission, revenue-based commission, gross-profit-based commission, referral commission.</p>

      <h3>Important Contract Terms</h3>
      <p>Define whether commission applies to gross sales, net sales, collected revenue, revenue after refunds, revenue after taxes, revenue after discounts, or revenue after shipping. Without clear definitions, commission disputes can occur.</p>

      <hr />

      <h2>11. Transaction-Fee Model</h2>
      <h3>Definition</h3>
      <p>A transaction-fee model generates revenue by charging a fee whenever a transaction occurs through a platform or service.</p>

      <h3>Transaction Fee vs Commission</h3>
      <p>They are closely related, but terminology often differs. Commission usually refers to compensation based on the transaction value, often for facilitating or generating the sale. Transaction fee emphasizes a charge associated with processing or facilitating the transaction. A business can use both.</p>

      <hr />

      <h2>12. Brokerage Model</h2>
      <h3>Definition</h3>
      <p>A brokerage model connects buyers and sellers and facilitates transactions without necessarily owning the underlying product or asset.</p>
      <p>Examples can include brokerage in real estate, insurance, financial markets, business sales, and specialized commercial transactions.</p>

      <h3>Broker's Role</h3>
      <p>Buyer/seller matching, market information, negotiation support, transaction facilitation, documentation assistance, relationship management.</p>

      <h3>Brokerage vs Marketplace</h3>
      <ul>
        <li>Brokerage — often more facilitation/service; marketplace — often platform-driven</li>
        <li>Brokerage — may involve human intermediary; marketplace — often technology-mediated</li>
        <li>Brokerage — can be high-touch; marketplace — can be highly self-service</li>
        <li>Brokerage — may negotiate/facilitate; marketplace — usually provides infrastructure</li>
        <li>Brokerage — usually transaction-based; marketplace — can use many revenue models</li>
      </ul>

      <hr />

      <h2>13. Reseller Model</h2>
      <h3>Definition</h3>
      <p>A reseller model involves acquiring products or services from a supplier and selling them to customers at a higher price or under an agreed margin structure.</p>

      <h3>Reseller Types</h3>
      <p>Retail reseller, wholesale reseller, software reseller, electronics reseller, used-product reseller, refurbished-product reseller, value-added reseller, marketplace seller.</p>

      <h3>Value-Added Reseller</h3>
      <p>A reseller can add installation, configuration, training, support, customization, maintenance, packaging, and consulting. This can create differentiation beyond simply changing the selling price.</p>

      <hr />

      <h2>14. Wholesale Model</h2>
      <h3>Definition</h3>
      <p>A wholesale model involves selling products, usually in larger quantities, to businesses or other resellers rather than primarily to final consumers.</p>

      <h3>Wholesale Characteristics</h3>
      <p>Larger orders, lower unit prices, higher volume, business customers, negotiated terms, purchase orders, delivery scheduling, credit terms in some relationships.</p>

      <hr />

      <h2>15. Retail Model</h2>
      <h3>Definition</h3>
      <p>A retail model sells products or services directly to final consumers, generally in smaller quantities for personal or household use.</p>
      <p>Retail can operate through physical stores, e-commerce, mobile apps, marketplaces, pop-up stores, or social commerce.</p>

      <h3>Retail Economics Example</h3>
      <p>Product acquisition ₱250, selling price ₱500. Gross profit ₱250, gross margin 50%. If selling-related variable costs are ₱100: contribution = ₱500 − ₱250 − ₱100 = ₱150. This is more useful for decision-making than gross margin alone because it includes additional variable selling costs.</p>

      <hr />

      <h2>Business Model Comparison</h2>
      <ul>
        <li>Marketplace — connects buyers &amp; sellers — commission, transaction fees, ads</li>
        <li>Subscription — recurring access — monthly/annual payments</li>
        <li>Freemium — free + paid versions — upgrades/subscriptions</li>
        <li>SaaS — cloud software service — subscription/usage</li>
        <li>On-demand — service when requested — service/booking/transaction fees</li>
        <li>Franchise — licensed operating system — franchise fees/royalties</li>
        <li>Licensing — grants usage rights — license fees/royalties</li>
        <li>Affiliate — partners generate qualifying actions — commission</li>
        <li>Advertising — monetizes audience/attention — ad payments</li>
        <li>Commission — percentage/fixed amount per transaction — commission</li>
        <li>Transaction fee — charges per transaction — transaction fee</li>
        <li>Brokerage — facilitates buyer-seller transactions — commission/success fee</li>
        <li>Reseller — buys and resells — markup/margin</li>
        <li>Wholesale — sells in volume to businesses — wholesale margin</li>
        <li>Retail — sells to final consumers — retail margin</li>
      </ul>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>A business model explains how value is created, delivered, and captured.</li>
        <li>A marketplace primarily connects multiple sides of a market.</li>
        <li>A subscription model creates recurring payment relationships.</li>
        <li>Freemium uses free access as an acquisition mechanism and paid offerings for monetization.</li>
        <li>SaaS delivers software as an ongoing service, commonly through recurring or usage-based pricing.</li>
        <li>On-demand businesses respond to customer requests in real time or near real time.</li>
        <li>Franchising allows independent operators to use an established business system under contractual terms.</li>
        <li>Licensing grants defined rights to use intellectual property or other assets without necessarily transferring ownership.</li>
        <li>Affiliate models reward partners for qualifying customer actions.</li>
        <li>Advertising monetizes access to an audience rather than primarily charging the audience for the core service.</li>
        <li>Commission models generate revenue based on qualifying transactions or performance.</li>
        <li>Transaction-fee models charge for transactions facilitated or processed through a service.</li>
        <li>Brokerage models facilitate transactions between buyers and sellers.</li>
        <li>Resellers acquire products or services and sell them onward.</li>
        <li>Wholesale focuses primarily on volume sales to businesses or resellers.</li>
        <li>Retail focuses primarily on selling to final consumers.</li>
        <li>A company can combine multiple business models.</li>
        <li>Revenue structure alone does not determine profitability.</li>
        <li>Every model must account for acquisition costs, variable costs, fixed costs, working capital, retention, and operational complexity.</li>
        <li>A scalable business model should be able to increase customer value and revenue without costs and complexity increasing at the same rate.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Customer Problem → Value Proposition → Product/Service → Business Model → Customer
        Acquisition → Transaction → Revenue → Variable Costs → Contribution → Fixed Costs →
        Profit → Retention → Expansion → Reinvestment → Scale → Measurement → Optimization.
      </p>
    </LessonLayout>
  )
}
