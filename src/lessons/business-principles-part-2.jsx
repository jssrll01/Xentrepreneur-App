import LessonLayout from '../components/LessonLayout'

export default function BusinessPrinciples2() {
  return (
    <LessonLayout
      number="62"
      title="Business Principles — Part 2"
      summary="17 principles for responsibility, financial discipline, risk, performance, and learning — commitments, records, reserves, KPIs, and validation."
    >
      <p>
        Business principles are the fundamental rules that guide how a business
        behaves, makes decisions, manages resources, serves customers, and
        grows. Part 2 focuses heavily on responsibility, financial discipline,
        risk management, measurement, and learning.
      </p>

      <hr />

      <h2>1. Keep Commitments</h2>
      <h3>Definition</h3>
      <p>Keeping commitments means doing what the business has agreed or promised to do, within the agreed conditions and timeframe.</p>
      <p>Commitments can involve customers, employees, suppliers, partners, investors, contractors, government agencies, and service providers. Examples: delivering an order on the promised date, completing a website by the agreed deadline, paying a supplier on time, providing agreed support, honoring a warranty, meeting an agreed project scope.</p>
      <p>A commitment is more than a casual statement. Once a business creates a reasonable expectation that it will do something, that expectation becomes part of the relationship.</p>

      <h3>How it works</h3>
      <p>Agree → document → plan → execute → monitor → deliver → confirm.</p>
      <p>For example, if a web-development business agrees to build a marketplace website in 30 days, the business should: define the scope, identify requirements, establish milestones, allocate resources, track progress, communicate delays, and deliver according to the agreement.</p>

      <h3>How to implement it</h3>
      <p>Create a commitment register containing: commitment, person/organization, due date, and status. If a commitment cannot be met, communicate the problem before the deadline, explain the reason, and propose a realistic alternative.</p>

      <h3>Benefits</h3>
      <p>Builds trust, improves reputation, reduces disputes, improves customer retention, strengthens partnerships, and creates operational discipline.</p>

      <h3>Risks of poor commitment management</h3>
      <p>Lost trust, refunds, complaints, contract disputes, lost customers, damaged reputation, and supplier problems.</p>

      <h3>Principle</h3>
      <p>Do not promise what the business cannot reliably deliver.</p>

      <hr />

      <h2>2. Protect Customer Information</h2>
      <h3>Definition</h3>
      <p>Protecting customer information means handling customer data responsibly and preventing unauthorized access, misuse, loss, or disclosure.</p>
      <p>Customer information may include name, email, phone number, address, account information, order history, payment-related information, support conversations, uploaded files, and authentication information. A business should collect only information that it actually needs.</p>

      <h3>Data-protection lifecycle</h3>
      <p>Collect → use → store → protect → retain only as needed → securely delete.</p>
      <p>Protection can include strong authentication, access controls, encryption, secure databases, backups, software updates, employee permissions, audit logs, and security monitoring.</p>

      <h3>Example: marketplace</h3>
      <p>Suppose Xmarket needs customer name, email, shipping information, and orders. Not every employee needs access to everything. For example: customer support → orders + support information; warehouse → shipping information; finance → payment/order information; developer → technical data needed for operation. This follows the principle of least privilege.</p>

      <h3>Benefits</h3>
      <p>Protects customers, reduces security risks, supports legal compliance, builds trust, and reduces consequences of data breaches.</p>

      <h3>Risks</h3>
      <p>Data breach, identity theft, fraud, unauthorized access, regulatory penalties, and reputation damage.</p>

      <h3>Principle</h3>
      <p>Customer information is a responsibility, not simply a business asset.</p>

      <hr />

      <h2>3. Follow Applicable Laws</h2>
      <h3>Definition</h3>
      <p>This means operating according to the laws, regulations, permits, standards, and legal obligations applicable to the business.</p>
      <p>Depending on the business, this may involve business registration, tax requirements, employment rules, consumer protection, privacy/data protection, intellectual property, advertising requirements, product safety, industry regulations, contracts, and licensing. The exact requirements depend on the country, location, industry, business structure, and activities.</p>

      <h3>How it works</h3>
      <p>Business activity → applicable requirements → compliance procedures → documentation → monitoring → updates.</p>

      <h3>Example</h3>
      <p>A food business may need to consider business permits, food safety requirements, labeling requirements, tax obligations, employment requirements, and consumer protection. A software business may instead focus heavily on privacy, data security, intellectual property, contracts, consumer protection, and tax obligations.</p>

      <h3>Benefits</h3>
      <p>Reduces legal exposure, protects customers, supports business continuity, makes partnerships easier, and improves credibility.</p>

      <h3>Risk</h3>
      <p>Ignoring applicable laws can result in fines, penalties, lawsuits, license problems, forced closure, contract problems, and reputation damage.</p>

      <h3>Principle</h3>
      <p>Legal compliance should be part of business design, not something added after problems occur.</p>

      <hr />

      <h2>4. Keep Accurate Records</h2>
      <h3>Definition</h3>
      <p>Accurate records are reliable records of important business activities and transactions.</p>
      <p>Records can include sales, expenses, purchases, inventory, payments, invoices, contracts, payroll, customer transactions, tax documents, assets, and liabilities.</p>

      <h3>Why records matter</h3>
      <p>Without records: no reliable information → poor decisions → financial errors → higher risk. With records: accurate data → reliable reports → better decisions → better control.</p>

      <h3>Example</h3>
      <p>Suppose a business earns ₱100,000 revenue but records only ₱80,000. The business's financial reports are now misleading. Accurate records allow the owner to calculate gross profit (Revenue − COGS), net profit (Revenue − Total Expenses), and profit margin (Net Profit ÷ Revenue × 100).</p>

      <h3>Implementation</h3>
      <p>Use accounting software, spreadsheets, invoicing systems, inventory systems, bank statements, digital receipts, transaction logs, and regular reconciliation.</p>

      <h3>Principle</h3>
      <p>If it matters to the business, create a reliable record of it.</p>

      <hr />

      <h2>5. Separate Personal and Business Finances</h2>
      <h3>Definition</h3>
      <p>This means keeping personal money and business money clearly separated. For example: personal (personal salary, food, rent, personal purchases) vs business (sales, supplier payments, software, advertising, business equipment).</p>

      <h3>Why it matters</h3>
      <p>Suppose the business receives ₱100,000 and the owner immediately spends ₱20,000 personally. If this isn't recorded properly, the business's financial position becomes unclear. Separating accounts makes it easier to determine business revenue, business expenses, owner compensation, business profit, available cash, taxes, and investment capacity.</p>

      <h3>Implementation</h3>
      <p>Ideally use a separate bank account, separate payment wallet/account, separate bookkeeping, business credit/debit card, documented owner withdrawals, and documented capital contributions.</p>

      <h3>Benefits</h3>
      <p>Cleaner accounting, better financial visibility, easier tax preparation, easier budgeting, better business valuation, and less confusion.</p>

      <h3>Principle</h3>
      <p>Treat the business as a financial system separate from your personal spending.</p>

      <hr />

      <h2>6. Manage Risk</h2>
      <h3>Definition</h3>
      <p>Risk management is the systematic process of identifying, analyzing, reducing, transferring, accepting, or monitoring risks.</p>
      <p>Major business risks include financial (running out of cash), operational (supplier failure), market (demand decreases), legal (contract dispute), cybersecurity (data breach), reputation (major customer complaint), supply-chain (product shortage), technology (system outage), strategic (wrong market), and personnel (key employee leaves).</p>

      <h3>Risk management cycle</h3>
      <p>Identify → analyze → prioritize → mitigate → monitor → review.</p>
      <p><strong>Risk Score = Probability × Impact</strong>. Higher-priority risks deserve greater attention.</p>

      <h3>Risk responses</h3>
      <p><strong>Avoid</strong> — change the plan to eliminate the risk. <strong>Reduce</strong> — lower the probability or impact. <strong>Transfer</strong> — move some financial responsibility to another party, such as through insurance or contractual arrangements. <strong>Accept</strong> — recognize the risk and prepare for it when reducing it further is not practical.</p>

      <hr />

      <h2>7. Maintain Reserves</h2>
      <h3>Definition</h3>
      <p>Reserves are resources intentionally kept available for unexpected expenses, emergencies, opportunities, or business continuity. Reserves can include cash reserves, emergency funds, inventory reserves, backup suppliers, spare equipment, backup systems, and capacity reserves.</p>

      <h3>Cash reserve</h3>
      <p><strong>Reserve Months = Available Cash ÷ Average Monthly Cash Outflow</strong>. Example: available reserve ₱150,000 ÷ average monthly operating outflow ₱50,000 = 3. The business has approximately 3 months of operating cash coverage, assuming the outflow remains similar.</p>

      <h3>Why reserves matter</h3>
      <p>Without reserves: unexpected expense → cash shortage → delayed payments → operational problems. With reserves: unexpected expense → reserve available → business continues → recovery.</p>

      <h3>Principle</h3>
      <p>Do not operate permanently at the edge of your available resources.</p>

      <hr />

      <h2>8. Avoid Unnecessary Debt</h2>
      <h3>Definition</h3>
      <p>Debt means borrowing money that must generally be repaid according to agreed terms, often with interest and fees. Debt can be useful when it finances something that generates sufficient value or cash flow.</p>
      <p>The principle is not "Never borrow." It is: avoid borrowing when the debt does not have a reasonable business purpose or manageable repayment burden.</p>

      <h3>Example</h3>
      <p>Suppose a business borrows ₱200,000 to purchase equipment that significantly increases productive capacity. That may have a different economic purpose from borrowing ₱200,000 to fund unnecessary personal-style spending.</p>

      <h3>Debt evaluation</h3>
      <p>Before borrowing, examine principal, interest rate, fees, repayment period, monthly payment, total repayment, cash-flow impact, expected return, worst-case scenario, and collateral requirements.</p>
      <p><strong>Debt Service Coverage = Cash Available for Debt Service ÷ Debt Payments</strong>. The exact interpretation depends on the accounting definition being used, but the general idea is to determine whether operating cash can comfortably support debt payments.</p>

      <h3>Principle</h3>
      <p>Debt should serve a clear economic purpose and remain manageable under realistic conditions.</p>

      <hr />

      <h2>9. Understand Contracts</h2>
      <h3>Definition</h3>
      <p>A contract is an agreement that establishes obligations, rights, responsibilities, conditions, and remedies between parties.</p>
      <p>Business contracts may cover sales, employment, freelancing, suppliers, partnerships, software, licensing, distribution, advertising, web development, and consulting.</p>

      <h3>Important contract elements</h3>
      <p>Look for: parties, scope, deliverables, price, payment terms, deadlines, responsibilities, intellectual property, confidentiality, data handling, warranties, liability, cancellation, termination, dispute resolution, and governing law.</p>

      <h3>Example: web development</h3>
      <p>A contract might specify: project (marketplace website); deliverables (homepage, product catalog, shopping cart, admin dashboard); price ₱50,000; payment (40% deposit, 30% milestone, 30% final delivery); timeline 45 days; revisions 2 rounds included; additional work charged separately. This reduces ambiguity.</p>

      <h3>Principle</h3>
      <p>Never rely on assumptions when an important business obligation can be clearly documented. For significant contracts, professional legal advice may be appropriate.</p>

      <hr />

      <h2>10. Document Agreements</h2>
      <h3>Definition</h3>
      <p>Documenting agreements means recording important decisions, responsibilities, expectations, and changes in a reliable form. Documentation can include contracts, purchase orders, statements of work, invoices, emails, meeting records, change requests, approval records, and project specifications.</p>

      <h3>Why it matters</h3>
      <p>Verbal agreement: "I thought you meant X." / "You said Y." Documented agreement: agreed feature X, deadline October 20, price ₱30,000, revision limit 2. Documentation reduces ambiguity.</p>

      <h3>Change management</h3>
      <p>If a customer asks for additional work: original scope → change requested → impact analysis → price/time adjustment → customer approval → updated agreement → implementation. This helps prevent scope creep.</p>

      <h3>Principle</h3>
      <p>Important decisions should be traceable.</p>

      <hr />

      <h2>11. Measure Performance</h2>
      <h3>Definition</h3>
      <p>Performance measurement means comparing actual business results against defined objectives or standards. You can measure sales, revenue, profit, customer acquisition, conversion, retention, delivery speed, quality, productivity, customer satisfaction, and website performance.</p>
      <p>Basic performance cycle: set target → measure → compare → identify gap → improve → measure again.</p>

      <h3>Example</h3>
      <p>Target: 100 orders/month. Actual: 80 orders. Performance gap: 100 − 80 = 20. Achievement rate: 80 ÷ 100 × 100 = 80%. The next question isn't simply "Did we fail?" It is: why were 20 orders missing? Possible causes: low traffic, poor conversion, product availability, pricing, weak promotion, checkout problems.</p>

      <hr />

      <h2>12. Track KPIs</h2>
      <h3>Definition</h3>
      <p>KPI means Key Performance Indicator. A KPI is a measurement chosen because it is particularly useful for monitoring an important business objective. Not every metric should be a KPI.</p>

      <h3>Examples</h3>
      <p><strong>Sales</strong> — revenue, orders, average order value. <strong>Marketing</strong> — conversion rate, CAC, ROAS, leads. <strong>Customer</strong> — retention, churn, repeat purchase, CSAT. <strong>Operations</strong> — defect rate, delivery time, inventory turnover. <strong>Finance</strong> — gross margin, net margin, cash flow, break-even.</p>

      <h3>Good KPI characteristics</h3>
      <p>A useful KPI should be relevant, measurable, understandable, actionable, consistent, and time-bound. Avoid tracking dozens of numbers without knowing what decisions they support.</p>

      <h3>Principle</h3>
      <p>Measure what helps you make decisions, not merely what is easy to count.</p>

      <hr />

      <h2>13. Learn From Mistakes</h2>
      <h3>Definition</h3>
      <p>This principle means treating failures, errors, complaints, and unexpected outcomes as sources of information for improvement. The goal isn't to celebrate mistakes. The goal is to extract useful information from them.</p>
      <p>Mistake → learning system: problem → record → investigate → find root cause → correct → prevent → monitor.</p>

      <h3>Example</h3>
      <p>An online store receives many abandoned carts. Instead of saying "Customers don't want our products," investigate: is shipping too expensive? Is checkout confusing? Are payment methods limited? Are delivery times unclear? Is the site slow? Are unexpected fees appearing? The mistake becomes an investigation opportunity.</p>

      <h3>Useful techniques</h3>
      <p><strong>Five Whys</strong> — repeatedly ask why until reaching a deeper cause. <strong>Root cause analysis</strong> — identify the underlying process failure. <strong>Post-mortem</strong> — review what happened after an incident. <strong>A/B testing</strong> — compare alternatives using controlled experiments. <strong>Customer feedback</strong> — ask affected customers what happened.</p>

      <h3>Principle</h3>
      <p>A mistake becomes more valuable when the business changes the system that produced it.</p>

      <hr />

      <h2>14. Test Assumptions</h2>
      <h3>Definition</h3>
      <p>An assumption is something the business believes to be true but has not yet sufficiently verified. Examples: "Customers will pay ₱500." "People want this feature." "Customers prefer annual subscriptions." "Users understand this interface." "Businesses need this software."</p>
      <p>Assumption testing: assumption → hypothesis → test → data → learning → decision.</p>

      <h3>Example</h3>
      <p>Assumption: customers will pay ₱999/month for an advanced business tool. Instead of spending ₱500,000 building the entire system immediately: interview potential customers, create a prototype, show the proposed product, test pricing, offer a pilot, measure actual interest, analyze willingness to pay, and build further based on evidence.</p>

      <h3>Assumption priority</h3>
      <p>Test assumptions that are high uncertainty + high business impact first.</p>

      <h3>Principle</h3>
      <p>Do not spend heavily proving something that could have been tested cheaply.</p>

      <hr />

      <h2>15. Start Small</h2>
      <h3>Definition</h3>
      <p>Starting small means beginning with a limited version of a business, product, service, market, or experiment before committing significant resources. This is especially useful when uncertainty is high.</p>

      <h3>Example: web application</h3>
      <p>Instead of building the full platform (login, marketplace, payments, messaging, AI, analytics, loyalty, subscription, mobile app, admin system), start with the MVP (product catalog, basic search, product details, simple order request). Then observe real users.</p>

      <h3>Benefits</h3>
      <p>Lower initial cost, faster learning, lower risk, easier changes, faster feedback, and easier troubleshooting.</p>

      <h3>Principle</h3>
      <p>Start with the smallest version capable of producing meaningful learning.</p>

      <hr />

      <h2>16. Validate Demand</h2>
      <h3>Definition</h3>
      <p>Demand validation means gathering evidence that customers actually want a product or service and may be willing to pay for it.</p>
      <p>Interest and demand are not always the same. Someone saying "That's a cool idea" is weaker evidence than "I want to buy it." And actual payment or repeated usage can provide stronger evidence still.</p>

      <h3>Demand validation ladder</h3>
      <p>Idea → interest → engagement → intent → pre-order/commitment → purchase → repeat purchase. Evidence generally becomes stronger as customers take more meaningful actions.</p>

      <h3>Validation methods</h3>
      <p>Customer interviews, surveys, landing page, prototype, pre-orders, pilot, MVP, and actual sales.</p>

      <h3>Example</h3>
      <p>Suppose you want to sell a ₱1,500 business website package. Before building an entire agency platform: create a landing page, explain the service, display the price, collect inquiries, talk to potential customers, offer a small pilot, measure conversion, deliver to early customers, collect feedback, and improve the offer.</p>

      <h3>Principle</h3>
      <p>Evidence of behavior is usually more useful than assumptions about behavior.</p>

      <hr />

      <h2>17. Iterate Quickly</h2>
      <h3>Definition</h3>
      <p>Iteration means repeatedly improving a product, service, process, or business model based on evidence and feedback. "Quickly" does not mean carelessly. It means reducing unnecessary time between: learning → change → testing → learning again.</p>
      <p>Iteration cycle: build → release → measure → learn → improve → release again (cycle). This is closely related to the Build–Measure–Learn approach.</p>

      <h3>Example: Xmarket</h3>
      <p>Suppose customers frequently leave the checkout page. Version 1: product, address, payment, confirmation. Data shows high abandonment. Investigation: customers report shipping fees appear late. Version 2: display product price, shipping cost, total cost, delivery estimate before the customer reaches the final confirmation. Measure again: track checkout completion, cart abandonment, conversion, customer complaints, average order value. If performance improves, retain the change. If not, investigate another hypothesis.</p>

      <hr />

      <h2>How These Principles Connect</h2>
      <p>These principles form a business discipline system rather than isolated rules. Business discipline branches into responsibility (keep commitments, protect information, follow laws, accurate records, separate finances), financial discipline (manage money, maintain reserves, avoid debt), and learning (test assumptions, start small, validate demand, iterate quickly). Together they lead to trust → business stability → performance → measure performance + track KPIs → learn from mistakes → continuous improvement.</p>

      <hr />

      <h2>The Business Principle System</h2>
      <p>The 17 principles can be grouped into five major systems:</p>
      <p><strong>Responsibility</strong> — keep commitments, protect customer information, follow laws. Main purpose: operate responsibly.</p>
      <p><strong>Financial discipline</strong> — accurate records, separate finances, maintain reserves, avoid unnecessary debt. Main purpose: protect financial stability.</p>
      <p><strong>Risk management</strong> — manage risk, understand contracts, document agreements. Main purpose: reduce preventable losses.</p>
      <p><strong>Performance management</strong> — measure performance, track KPIs. Main purpose: know what is happening.</p>
      <p><strong>Learning & validation</strong> — learn from mistakes, test assumptions, start small, validate demand, iterate quickly. Main purpose: reduce uncertainty and improve.</p>

      <hr />

      <h2>Important Comparisons</h2>
      <p><strong>Measure Performance vs Track KPIs.</strong> Measure performance is a broad activity; it can include many measurements; answers "How are we doing?"; is a broader system. Track KPIs selects important measurements; answers "What should we watch closely?"; is part of performance management. KPIs are a subset of performance measurement.</p>
      <p><strong>Test Assumptions vs Validate Demand.</strong> Test assumptions tests beliefs/hypotheses; can cover product, pricing, UX, operations; often uses experiments; broader. Validate demand tests market interest; primarily tests whether customers want the offer; uses interviews, pilots, pre-orders, sales.</p>
      <p><strong>Start Small vs Iterate Quickly.</strong> Start small reduces the initial commitment. Iterate quickly reduces the time between learning cycles. Together: small start → fast learning → small improvement → fast test → better product.</p>
      <p><strong>Keep Records vs Document Agreements.</strong> Records cover business information broadly. Agreements specifically document decisions and obligations between parties.</p>

      <hr />

      <h2>Common Mistakes</h2>
      <p><strong>1. Making promises without checking capacity.</strong> Sales promises something operations cannot deliver. Solution: connect sales commitments to operational capacity.</p>
      <p><strong>2. Collecting unnecessary customer information.</strong> More data creates more responsibility and security exposure. Solution: collect only what is genuinely needed.</p>
      <p><strong>3. Treating compliance as an afterthought.</strong> The business discovers requirements after launching. Solution: identify applicable obligations during planning.</p>
      <p><strong>4. Mixing personal and business money.</strong> Nobody knows the true business financial position. Solution: separate accounts and document owner transactions.</p>
      <p><strong>5. Borrowing to cover recurring losses.</strong> Loss → debt → more repayment → cash pressure → more debt. Solution: diagnose the underlying economics rather than repeatedly financing an unsustainable operation.</p>
      <p><strong>6. Tracking too many KPIs.</strong> A dashboard containing 50 numbers can create noise. Better: 5–15 important KPIs reviewed regularly.</p>
      <p><strong>7. Learning from mistakes but not changing the system.</strong> Saying "We'll be more careful next time" is weaker than changing the process that allowed the problem.</p>
      <p><strong>8. Building before validating.</strong> A business can spend months building before discovering customers don't want it. Better: assumption → test → evidence → build.</p>
      <p><strong>9. Iterating without measurement.</strong> Changing things constantly without measuring results creates confusion. A proper iteration requires change → measurement → comparison → learning.</p>

      <hr />

      <h2>Master Framework</h2>
      <p>Responsible business branches into responsibility, financial discipline, and risk management. Responsibility covers commitments, information, laws. Financial discipline covers records, separation, reserves, debt. Risk management covers risk assessment, contracts, documentation. All lead to performance (measure + KPIs) → learn (mistakes + feedback) → test assumptions → start small → validate demand → iterate quickly → better business → more value → sustainable growth (cycle).</p>

      <h3>Core formula</h3>
      <p><strong>Responsible business + financial discipline + risk management + measurement + experimentation + continuous learning = stronger business decision-making.</strong></p>
      <p>The underlying principle is: protect what you have, measure what matters, test what you don't know, and improve based on evidence.</p>
    </LessonLayout>
  )
}
