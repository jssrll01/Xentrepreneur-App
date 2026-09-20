import LessonLayout from '../components/LessonLayout'

export default function SalesAndRevenue() {
  return (
    <LessonLayout
      number="01"
      title="Sales & Revenue: A Practical Business Guide"
      summary="20 powerful sales and revenue strategies every founder must master — with real examples, pricing structures, and profit principles."
    >
      <p>
        Sales and revenue are at the heart of almost every business. A company
        can have a great product, strong branding, and thousands of potential
        customers, but without a reliable way to generate sales and collect
        revenue, it cannot remain sustainable.
      </p>
      <p>
        This chapter explains 20 important sales and revenue strategies —
        what each one means, how it works, how to implement it, examples,
        advantages, risks, and when to use it.
      </p>

      <hr />

      <h2>1. Upselling</h2>
      <h3>Definition</h3>
      <p>
        Upselling is the practice of encouraging a customer to purchase a more
        expensive or upgraded version of the product or service they are
        already considering.
      </p>
      <p>Instead of selling a Basic Website for ₱5,000, you offer a Professional Website for ₱8,000 with additional features.</p>

      <h3>How it works</h3>
      <p>The customer already intends to buy something. You present an upgrade that provides additional value.</p>
      <p><strong>Basic product → Upgrade → Higher transaction value</strong></p>
      <p>For example, a customer wants a basic laptop. You could offer:</p>
      <ul>
        <li>8 GB RAM → 16 GB RAM</li>
        <li>256 GB storage → 512 GB storage</li>
        <li>Standard warranty → Extended warranty</li>
      </ul>
      <p>The customer spends more, while receiving additional benefits.</p>

      <h3>How to do it</h3>
      <ol>
        <li>Identify the customer's intended purchase.</li>
        <li>Understand what problem they are trying to solve.</li>
        <li>Create a better version of the product.</li>
        <li>Clearly explain the additional benefits.</li>
        <li>Show the price difference.</li>
        <li>Let the customer decide.</li>
      </ol>

      <h3>Example</h3>
      <p>A web-development business could offer:</p>
      <p><strong>Basic Website — ₱8,000</strong></p>
      <ul>
        <li>5 pages</li>
        <li>Responsive design</li>
        <li>Contact form</li>
      </ul>
      <p><strong>Professional Website — ₱15,000</strong></p>
      <ul>
        <li>10 pages</li>
        <li>Responsive design</li>
        <li>SEO setup</li>
        <li>Analytics</li>
        <li>Animation</li>
        <li>Performance optimization</li>
      </ul>

      <h3>Important principle</h3>
      <p>Upselling should be based on additional customer value, not simply trying to charge more.</p>

      <hr />

      <h2>2. Cross-Selling</h2>
      <h3>Definition</h3>
      <p>Cross-selling means recommending related products or services that complement the customer's primary purchase.</p>
      <p>Upselling says: "Would you like a better version?"</p>
      <p>Cross-selling says: "Would you also like something that works with it?"</p>

      <h3>Example</h3>
      <p>A customer buys a smartphone. You could cross-sell:</p>
      <ul>
        <li>Phone case</li>
        <li>Screen protector</li>
        <li>Charger</li>
        <li>Earbuds</li>
        <li>Power bank</li>
      </ul>

      <h3>How it works</h3>
      <p>The customer's original purchase creates another need. For example: Laptop → Laptop bag → Mouse → Keyboard → External storage. Each additional product increases the customer's total spending.</p>

      <h3>How to implement</h3>
      <p>Create relationships between products:</p>
      <ul>
        <li>Website → Hosting</li>
        <li>Phone → Case</li>
        <li>Camera → Memory card</li>
        <li>Shoes → Socks</li>
        <li>Computer → Monitor</li>
        <li>Online course → Certification</li>
        <li>Subscription → Premium add-on</li>
      </ul>

      <h3>Difference from upselling</h3>
      <p><strong>Upselling:</strong> "Buy the better version."</p>
      <p><strong>Cross-selling:</strong> "Buy another useful product."</p>

      <hr />

      <h2>3. Product Bundling</h2>
      <h3>Definition</h3>
      <p>Product bundling is combining several products or services into one package and selling them together.</p>
      <p>Instead of Product A — ₱500, Product B — ₱400, Product C — ₱300, you create a Complete Package — ₱999.</p>

      <h3>How it works</h3>
      <p>Bundling can increase the amount a customer purchases in one transaction and make the purchasing decision easier because customers don't have to select every component individually.</p>

      <h3>Example</h3>
      <p>A web-development company could sell a Website Starter Bundle — ₱12,000 which includes:</p>
      <ul>
        <li>Website development</li>
        <li>Domain setup</li>
        <li>Hosting setup</li>
        <li>Basic SEO</li>
        <li>Contact form</li>
        <li>Analytics</li>
      </ul>

      <h3>Types of bundling</h3>
      <ul>
        <li><strong>Pure bundle</strong> — products can only be purchased together.</li>
        <li><strong>Mixed bundle</strong> — products can be purchased individually or as a package.</li>
        <li><strong>Discount bundle</strong> — individual prices total more than the package price.</li>
      </ul>

      <h3>How to create a bundle</h3>
      <ol>
        <li>Identify products frequently purchased together.</li>
        <li>Determine the combined cost.</li>
        <li>Calculate your profit margin.</li>
        <li>Set an attractive bundle price.</li>
        <li>Clearly communicate what is included.</li>
      </ol>

      <hr />

      <h2>4. Tiered Pricing</h2>
      <h3>Definition</h3>
      <p>Tiered pricing means offering several versions of a product or service at different prices and feature levels.</p>
      <p>A typical structure:</p>
      <ul>
        <li>Basic — ₱299/month</li>
        <li>Professional — ₱599/month</li>
        <li>Business — ₱1,299/month</li>
      </ul>

      <h3>Why it works</h3>
      <p>Different customers have different budgets and needs. A student may choose Basic. A small business may choose Professional. A large company may choose Business.</p>

      <h3>How to create tiers</h3>
      <p>Meaningful differences between tiers:</p>
      <ul>
        <li>Users: 1 → 5 → 20</li>
        <li>Storage: 5 GB → 50 GB → 500 GB</li>
        <li>Analytics: No → Yes → Yes</li>
        <li>Priority support: No → Yes → Yes</li>
        <li>API access: No → No → Yes</li>
      </ul>

      <h3>Common mistake</h3>
      <p>Do not create five tiers that are almost identical. Customers need to understand why upgrading is worthwhile.</p>

      <hr />

      <h2>5. Subscription Pricing</h2>
      <h3>Definition</h3>
      <p>Subscription pricing charges customers repeatedly for continued access to a product or service.</p>
      <p>Common billing periods: weekly, monthly, quarterly, annually.</p>

      <h3>Example</h3>
      <p>A streaming service at ₱199/month. Instead of paying ₱2,388 once, the customer pays ₱199 every month.</p>

      <h3>How it works</h3>
      <p>The business receives recurring revenue. The customer receives continuing access. Customer subscribes → payment → continued service → renewal → payment.</p>

      <h3>Types</h3>
      <ul>
        <li><strong>Monthly subscription</strong> — easy to start and cancel.</li>
        <li><strong>Annual subscription</strong> — customer pays once per year.</li>
        <li><strong>Enterprise subscription</strong> — businesses pay according to requirements.</li>
      </ul>

      <h3>Important metrics</h3>
      <ul>
        <li><strong>MRR</strong> — Monthly Recurring Revenue.</li>
        <li><strong>ARR</strong> — Annual Recurring Revenue.</li>
        <li><strong>Churn</strong> — the percentage of customers who stop subscribing.</li>
      </ul>

      <hr />

      <h2>6. Freemium Model</h2>
      <h3>Definition</h3>
      <p>Freemium combines Free + Premium. Customers receive a free version of the product, while advanced features require payment.</p>

      <h3>Example</h3>
      <p><strong>Free</strong></p>
      <ul>
        <li>5 projects</li>
        <li>Basic features</li>
        <li>Limited storage</li>
      </ul>
      <p><strong>Premium</strong></p>
      <ul>
        <li>Unlimited projects</li>
        <li>Advanced tools</li>
        <li>More storage</li>
        <li>Priority support</li>
      </ul>

      <h3>How it works</h3>
      <p>The free version attracts users. Some users eventually need additional features and upgrade. Free users → product usage → need develops → premium upgrade → revenue.</p>

      <h3>Advantages</h3>
      <ul>
        <li>Easy customer acquisition</li>
        <li>Large potential user base</li>
        <li>Customers can experience the product before paying</li>
      </ul>

      <h3>Risk</h3>
      <p>If the free version provides everything users need, they may never upgrade. The free version needs to be useful but appropriately limited.</p>

      <hr />

      <h2>7. Free-Trial Conversion</h2>
      <h3>Definition</h3>
      <p>A free trial allows potential customers to use a paid product temporarily without paying. For example, "Try Professional free for 14 days."</p>

      <h3>How it works</h3>
      <p>Visitor → trial → product experience → evaluation → subscription.</p>

      <h3>How to improve conversion</h3>
      <ol>
        <li>Make onboarding simple.</li>
        <li>Help users reach their first successful result quickly.</li>
        <li>Explain important features.</li>
        <li>Send useful reminders.</li>
        <li>Show the value they are receiving.</li>
        <li>Clearly explain pricing before the trial ends.</li>
      </ol>

      <h3>Conversion rate</h3>
      <p><strong>Trial Conversion Rate = Paying Trial Users ÷ Total Trial Users × 100</strong></p>
      <p>Example: 1,000 people start a trial. 200 become paying customers. 200 ÷ 1,000 × 100 = 20% conversion.</p>

      <hr />

      <h2>8. Introductory Pricing</h2>
      <h3>Definition</h3>
      <p>Introductory pricing means offering a product at a special price when it is first launched or when a customer first subscribes.</p>
      <p>Example: Regular price ₱999/month. First 3 months ₱599/month.</p>

      <h3>Purpose</h3>
      <p>It reduces the initial barrier to purchase. Customers have less risk when trying something new.</p>

      <h3>How to implement</h3>
      <p>Clearly specify: original price, promotional price, duration, and what happens afterward.</p>
      <p>For example: ₱499/month for the first three months, then ₱799/month.</p>

      <h3>Risk</h3>
      <p>If customers become accustomed to the discounted price, they may resist the normal price later.</p>

      <hr />

      <h2>9. Volume Discounts</h2>
      <h3>Definition</h3>
      <p>A volume discount reduces the unit price when the customer purchases a larger quantity.</p>

      <h3>Example</h3>
      <ul>
        <li>1–9 units — ₱100 each</li>
        <li>10–49 units — ₱90 each</li>
        <li>50–99 units — ₱80 each</li>
        <li>100+ units — ₱70 each</li>
      </ul>

      <h3>Why businesses use it</h3>
      <p>It encourages customers to purchase more. The business may benefit from larger orders, lower selling costs per unit, faster inventory movement, and more predictable demand.</p>

      <h3>Example calculation</h3>
      <p>Instead of 100 × ₱100 = ₱10,000, the customer pays 100 × ₱80 = ₱8,000. The customer saves money while the business receives a large order.</p>

      <h3>Important consideration</h3>
      <p>The discount must not reduce the profit margin below a sustainable level.</p>

      <hr />

      <h2>10. Minimum-Order Incentives</h2>
      <h3>Definition</h3>
      <p>A minimum-order incentive gives customers a benefit when their order reaches a specific spending amount. For example: free delivery for orders above ₱1,000, or 10% off when you spend ₱2,000.</p>

      <h3>How it works</h3>
      <p>A customer's cart is ₱850. The business offers free shipping at ₱1,000. The customer may add another ₱150 product. The business increases the order value.</p>

      <h3>Common incentives</h3>
      <ul>
        <li>Free shipping</li>
        <li>Discount</li>
        <li>Free product</li>
        <li>Bonus points</li>
        <li>Gift</li>
        <li>Upgrade</li>
        <li>Cashback</li>
      </ul>

      <h3>Key metric</h3>
      <p><strong>AOV = Total Revenue ÷ Number of Orders</strong></p>

      <hr />

      <h2>11. Pre-Orders</h2>
      <h3>Definition</h3>
      <p>A pre-order allows customers to purchase a product before it is officially available.</p>

      <h3>How it works</h3>
      <p>Announcement → customer orders → payment/deposit → production → delivery.</p>

      <h3>Why businesses use pre-orders</h3>
      <ul>
        <li>Estimate demand</li>
        <li>Generate early cash flow</li>
        <li>Finance production</li>
        <li>Build anticipation</li>
        <li>Reduce inventory uncertainty</li>
      </ul>

      <h3>Example</h3>
      <p>A business plans to manufacture 500 units. It receives 300 pre-orders. The company now has useful demand information before completing production.</p>

      <h3>Risks</h3>
      <p>Watch for delays, production problems, refunds, and customer expectations. Always communicate the estimated delivery date and relevant terms clearly.</p>

      <hr />

      <h2>12. Deposits</h2>
      <h3>Definition</h3>
      <p>A deposit is money paid by a customer before the complete product or service is delivered.</p>

      <h3>Example</h3>
      <p>Website project: ₱30,000. Deposit: 50% = ₱15,000. The remaining ₱15,000 is paid according to the agreed milestones or before final delivery.</p>

      <h3>Why businesses use deposits</h3>
      <ul>
        <li>Demonstrate customer commitment</li>
        <li>Cover initial costs</li>
        <li>Reduce cancellation risk</li>
        <li>Provide working capital</li>
        <li>Protect against unpaid work</li>
      </ul>

      <h3>Common structures</h3>
      <ul>
        <li><strong>50/50</strong> — 50% upfront, 50% upon completion.</li>
        <li><strong>Milestone payments</strong> — e.g. 30% start, 40% development, 30% completion.</li>
      </ul>

      <h3>Important</h3>
      <p>A deposit agreement should explain amount, payment date, refund conditions, deliverables, cancellation terms, and final payment requirements.</p>

      <hr />

      <h2>13. Pay-As-You-Go</h2>
      <h3>Definition</h3>
      <p>Pay-as-you-go means customers pay when they use or purchase something rather than committing to a long-term contract.</p>

      <h3>Example</h3>
      <p>Pay ₱10 per transaction, instead of ₱500 every month regardless of usage.</p>

      <h3>How it works</h3>
      <p>Use service → generate charge → pay.</p>

      <h3>Examples</h3>
      <ul>
        <li>Cloud computing</li>
        <li>Printing</li>
        <li>Transportation</li>
        <li>Storage</li>
        <li>Consulting</li>
        <li>API services</li>
        <li>Equipment rental</li>
      </ul>

      <h3>Advantage for customers</h3>
      <p>They don't necessarily have to make a large commitment.</p>

      <h3>Advantage for businesses</h3>
      <p>The business can monetize customers according to their actual usage.</p>

      <hr />

      <h2>14. Usage-Based Pricing</h2>
      <h3>Definition</h3>
      <p>Usage-based pricing charges customers according to how much of a product or service they consume. It is closely related to pay-as-you-go, but is commonly structured around measurable usage.</p>

      <h3>Examples</h3>
      <ul>
        <li>₱0.10 per API request</li>
        <li>₱5 per GB stored</li>
        <li>₱20 per 1,000 messages</li>
        <li>₱2 per generated report</li>
      </ul>

      <h3>Example calculation</h3>
      <p>An API company charges ₱0.01 per API call. A customer makes 100,000 calls. 100,000 × ₱0.01 = ₱1,000 revenue.</p>

      <h3>Why it can work</h3>
      <p>Customers pay in proportion to their usage. This can be attractive when usage varies significantly between customers.</p>

      <h3>Challenge</h3>
      <p>Customers may find unpredictable bills difficult to budget. Businesses can address this with usage dashboards, spending limits, alerts, estimated billing, and usage caps.</p>

      <hr />

      <h2>15. Commission-Based Revenue</h2>
      <h3>Definition</h3>
      <p>Commission-based revenue means earning a percentage or fixed amount from a transaction facilitated by the business.</p>

      <h3>Example</h3>
      <p>A marketplace connects buyers and sellers. The marketplace charges sellers 10% commission. If a seller makes a ₱5,000 sale, the marketplace receives ₱500.</p>

      <h3>Where it is used</h3>
      <ul>
        <li>Marketplaces</li>
        <li>Real estate</li>
        <li>Affiliate platforms</li>
        <li>Booking platforms</li>
        <li>Financial services</li>
        <li>Sales agencies</li>
        <li>Recruitment</li>
      </ul>

      <h3>Two common structures</h3>
      <ul>
        <li><strong>Percentage commission</strong> — 10% of transaction value.</li>
        <li><strong>Fixed commission</strong> — ₱100 per transaction.</li>
      </ul>

      <h3>Key challenge</h3>
      <p>The business must generate enough transactions to make the model sustainable.</p>

      <hr />

      <h2>16. Licensing</h2>
      <h3>Definition</h3>
      <p>Licensing means giving another person or organization permission to use intellectual property under specified conditions.</p>

      <h3>Intellectual property can include</h3>
      <p>Software, music, designs, trademarks, technology, content, patents.</p>

      <h3>Example</h3>
      <p>A software developer creates a business application. Instead of selling the source code outright, they license its use to companies. The company might pay ₱50,000 per year for a license.</p>

      <h3>Licensing structures</h3>
      <ul>
        <li>Per-user license — ₱500 per user.</li>
        <li>Per-device license — ₱2,000 per device.</li>
        <li>Annual license — ₱50,000 per year.</li>
        <li>Perpetual license — one-time payment for continued use, subject to the agreement.</li>
      </ul>

      <h3>Important contract terms</h3>
      <p>What can be used, who can use it, where it can be used, duration, payment, restrictions, ownership, termination.</p>

      <hr />

      <h2>17. White-Labeling</h2>
      <h3>Definition</h3>
      <p>White-labeling occurs when one company creates a product or service that another company sells under its own brand.</p>

      <h3>How it works</h3>
      <p>Developer → white-label product → partner → partner's customers.</p>

      <h3>Example</h3>
      <p>Suppose you build an appointment-booking system. Instead of selling it directly to individual salons, you allow a marketing agency to rebrand it and sell it to 50 salons. You earn revenue from the agency.</p>

      <h3>Benefits</h3>
      <p><strong>For the producer:</strong> larger distribution, more customers, lower direct marketing burden.</p>
      <p><strong>For the reseller:</strong> faster product launch, no need to build everything internally.</p>

      <h3>Important</h3>
      <p>The agreement should clearly specify branding rights, customization, support, ownership, pricing, technical responsibilities, and data responsibilities.</p>

      <hr />

      <h2>18. Memberships</h2>
      <h3>Definition</h3>
      <p>A membership model charges customers for belonging to a community, organization, platform, or service.</p>

      <h3>Example</h3>
      <p>Premium Membership — ₱499/month. Members may receive exclusive content, discounts, community access, events, special tools, and priority service.</p>

      <h3>Membership vs subscription</h3>
      <p><strong>Subscription:</strong> pay for continued access to a product/service.</p>
      <p><strong>Membership:</strong> pay for access to a group, benefits, privileges, or community.</p>
      <p>A business can use both concepts simultaneously.</p>

      <h3>Example</h3>
      <p><strong>Free Member:</strong> public content.</p>
      <p><strong>Premium Member:</strong> private community, workshops, templates, discounts.</p>

      <hr />

      <h2>19. Annual-Plan Incentives</h2>
      <h3>Definition</h3>
      <p>An annual-plan incentive encourages customers to pay for a year rather than paying month-to-month.</p>

      <h3>Example</h3>
      <p>Monthly: ₱500 × 12 = ₱6,000/year. Annual: ₱4,800/year. The customer saves ₱1,200.</p>

      <h3>Why businesses use it</h3>
      <ul>
        <li>More predictable revenue</li>
        <li>Lower payment-processing frequency</li>
        <li>Better customer retention</li>
        <li>More upfront cash flow</li>
      </ul>

      <h3>Common incentives</h3>
      <p>Instead of only reducing price, a business can offer: 2 months free, additional storage, premium features, priority support, bonus credits, exclusive tools.</p>

      <h3>Example</h3>
      <p>Monthly: ₱500. Annual: ₱5,000. The customer effectively receives two months at a reduced cost compared with paying ₱500 every month for 12 months.</p>

      <hr />

      <h2>20. Retainer Contracts</h2>
      <h3>Definition</h3>
      <p>A retainer contract is an agreement where a customer pays a business or professional a recurring amount in exchange for an agreed level of ongoing services.</p>

      <h3>Example</h3>
      <p>A company pays a web developer ₱15,000/month for website maintenance, updates, bug fixes, technical support, and minor changes.</p>

      <h3>How it works</h3>
      <p>Agreement → recurring payment → ongoing service → renewal.</p>

      <h3>Common industries</h3>
      <p>Web development, marketing, graphic design, consulting, legal services, IT support, accounting, social media management.</p>

      <h3>Example tiers</h3>
      <p><strong>₱10,000/month</strong></p>
      <ul>
        <li>Website maintenance</li>
        <li>5 minor updates</li>
        <li>Security monitoring</li>
        <li>Monthly report</li>
      </ul>
      <p><strong>₱25,000/month</strong></p>
      <ul>
        <li>Everything above</li>
        <li>15 updates</li>
        <li>Priority support</li>
        <li>Performance optimization</li>
      </ul>

      <h3>Important contract terms</h3>
      <p>Monthly fee, services included, maximum hours or tasks, response time, unused hours policy, additional-work rates, contract duration, cancellation terms, payment schedule.</p>

      <hr />

      <h2>How These Strategies Fit Together</h2>
      <p>These aren't isolated techniques. A successful business can combine several of them.</p>
      <p>Imagine you operate an online software platform. You could create:</p>
      <ul>
        <li><strong>Free</strong> (freemium) — basic features at ₱0.</li>
        <li><strong>Pro</strong> (subscription) — ₱499/month.</li>
        <li><strong>Annual</strong> (annual-plan incentive) — ₱4,999/year.</li>
        <li><strong>Enterprise</strong> (tiered pricing) — custom pricing for large companies.</li>
        <li><strong>Add-ons</strong> (cross-selling) — additional tools and services.</li>
        <li><strong>Higher package</strong> (upselling) — advanced enterprise features.</li>
        <li><strong>Partners</strong> (white-labeling) — other companies sell your software under their branding.</li>
        <li><strong>Usage</strong> (usage-based pricing) — customers pay according to API usage.</li>
        <li><strong>Professional services</strong> (retainer) — ongoing technical support.</li>
      </ul>
      <p>This creates a multi-layered revenue model.</p>

      <hr />

      <h2>A Simple Sales Funnel</h2>
      <p>These strategies can also be organized around the customer's journey.</p>
      <ol>
        <li><strong>Acquisition</strong> — get potential customers. Examples: advertising, social media, SEO, referrals, partnerships.</li>
        <li><strong>Conversion</strong> — turn visitors into customers. Examples: introductory pricing, free trials, freemium, pre-orders.</li>
        <li><strong>Increase Order Value</strong> — make each transaction more valuable. Examples: upselling, cross-selling, bundling, minimum-order incentives, volume discounts.</li>
        <li><strong>Create Recurring Revenue</strong> — turn one-time customers into recurring customers. Examples: subscriptions, memberships, retainers, annual plans.</li>
        <li><strong>Expand Distribution</strong> — reach customers through other businesses. Examples: licensing, white-labeling, commission models, partnerships.</li>
      </ol>

      <hr />

      <h2>Key Revenue Concepts to Understand</h2>

      <h3>Revenue</h3>
      <p>Revenue is the money a business receives from selling products or services before subtracting expenses.</p>
      <p>Example: You sell 100 products for ₱500. Revenue = ₱50,000.</p>

      <h3>Gross Profit</h3>
      <p>Gross profit is generally Revenue − Cost of Goods Sold.</p>
      <p>Example: Revenue = ₱50,000, product costs = ₱30,000, gross profit = ₱20,000.</p>

      <h3>Net Profit</h3>
      <p>Net profit considers the remaining expenses after revenue and applicable costs.</p>
      <p>Revenue − All Expenses = Net Profit.</p>
      <p>If revenue is ₱50,000 and total expenses are ₱42,000: net profit = ₱8,000.</p>

      <h3>Average Order Value</h3>
      <p>AOV measures how much customers spend per order on average.</p>
      <p>AOV = Total Revenue ÷ Number of Orders.</p>
      <p>Example: Revenue = ₱100,000, orders = 500. AOV = ₱200.</p>
      <p>Upselling, cross-selling, bundling, and minimum-order incentives can potentially increase AOV.</p>

      <h3>Customer Lifetime Value</h3>
      <p>Customer Lifetime Value (CLV/LTV) estimates how much revenue or profit a customer generates over their relationship with a business.</p>
      <p>A simplified revenue-based example:</p>
      <ul>
        <li>Average purchase = ₱500</li>
        <li>Purchases per year = 4</li>
        <li>Relationship = 3 years</li>
      </ul>
      <p>Estimated revenue: ₱500 × 4 × 3 = ₱6,000.</p>

      <h3>Customer Acquisition Cost</h3>
      <p>CAC is the average cost of acquiring a customer.</p>
      <p>CAC = Sales and Marketing Costs ÷ New Customers.</p>
      <p>Example: A business spends ₱20,000 and gains 100 customers. CAC = ₱200/customer.</p>

      <h3>Revenue vs Profit</h3>
      <p>A business could generate ₱1,000,000 revenue but spend ₱950,000 on operations. Its simplified profit would be ₱50,000.</p>
      <p>Revenue tells you how much money came in. Profit tells you how much remained after costs.</p>
      <p>A strategy that increases revenue isn't automatically a strategy that increases profit. For example, offering a huge discount could increase sales volume while reducing the amount earned per sale.</p>

      <hr />

      <h2>Building a Revenue Strategy</h2>
      <p>A practical process:</p>
      <ol>
        <li><strong>Identify the customer</strong> — who are you selling to? Students, consumers, small businesses, enterprises, creators, professionals.</li>
        <li><strong>Identify the problem</strong> — what problem are customers paying you to solve?</li>
        <li><strong>Create the core offer</strong> — define your main product or service.</li>
        <li><strong>Set the basic price</strong> — consider costs, customer value, competitors, market demand, desired margin, positioning.</li>
        <li><strong>Add revenue expansion</strong> — upselling, cross-selling, bundling, add-ons.</li>
        <li><strong>Add recurring revenue</strong> — subscription, membership, retainer, annual plan.</li>
        <li><strong>Expand distribution</strong> — licensing, white-labeling, partnerships, commission models.</li>
        <li><strong>Measure results</strong> — revenue, profit, AOV, CAC, conversion rate, retention, churn, LTV, recurring revenue.</li>
      </ol>

      <hr />

      <h2>The Revenue Strategy Map</h2>
      <pre>{`BUSINESS
                       │
              ┌────────┴────────┐
              │                 │
           SALES             REVENUE
              │                 │
      ┌───────┼───────┐    ┌────┼────────────┐
      │       │       │    │    │            │
   Upsell Cross-  Bundles Subscription Licensing
            sell
      │       │       │    │    │            │
      └───────┴───────┘    └────┴────────────┘
              │                 │
        Higher Order       Recurring/
            Value          Expanded Revenue
              │                 │
              └────────┬────────┘
                       │
                  TOTAL REVENUE
                       │
                    − COSTS
                       │
                     PROFIT`}</pre>

      <h3>The central idea</h3>
      <p>A strong sales and revenue system answers five questions:</p>
      <ol>
        <li>How do we get customers? → Acquisition and conversion.</li>
        <li>How do we get customers to buy more? → Upselling, cross-selling, bundling.</li>
        <li>How do we get customers to buy repeatedly? → Subscriptions, memberships, retainers.</li>
        <li>How do we reach more customers? → Licensing, white-labeling, partnerships, commissions.</li>
        <li>How do we make the economics sustainable? → Pricing, costs, margins, retention, CAC, LTV, and profit.</li>
      </ol>
      <p>Together, these concepts form the foundation of a business's sales architecture and revenue model.</p>
    </LessonLayout>
  )
}
