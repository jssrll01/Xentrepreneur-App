import LessonLayout from '../components/LessonLayout'

export default function GovernmentEconomy() {
  return (
    <LessonLayout
      number="114"
      title="Government & Economy"
      summary="10 policy and regulation systems — fiscal and monetary policy, taxation, government spending, public debt, interest-rate policy, financial, business, labor, and trade regulation."
    >
      <h2>Government &amp; Economy</h2>
      <p>Government policy and economic activity are closely connected. Governments influence the economy through taxation, spending, regulation, borrowing, and financial policy, while central banks influence monetary and financial conditions through interest rates and other monetary tools.</p>

      <pre>{`Government
    │
    ├── Taxation
    ├── Government Spending
    ├── Public Debt
    ├── Business Regulation
    ├── Labor Regulation
    └── Trade Regulation
              │
              ↓
         Economic Conditions
              ↑
              │
        Central Bank
              │
              ├── Monetary Policy
              ├── Interest-Rate Policy
              └── Financial Regulation`}</pre>
      <p>The exact allocation of financial-regulatory responsibilities differs by country.</p>

      <hr />

      <h2>1. Fiscal Policy</h2>
      <h3>Definition</h3>
      <p>Fiscal policy is the use of government spending and taxation to influence economic activity. The government can generally use fiscal policy to affect aggregate demand, employment, economic growth, public investment, household disposable income, business activity, and government borrowing.</p>

      <h3>Expansionary Fiscal Policy</h3>
      <p>Generally involves increasing government spending, reducing certain taxes, or a combination of both. The objective can include supporting aggregate demand during weak economic conditions.</p>

      <h3>Contractionary Fiscal Policy</h3>
      <p>Can involve reducing government spending, increasing certain taxes, or a combination. It may be used when policymakers seek to reduce excessive aggregate demand or address fiscal pressures.</p>

      <h3>Fiscal Multiplier</h3>
      <p><strong>Multiplier = Change in Aggregate Output ÷ Change in Government Spending</strong></p>
      <p>The actual multiplier varies depending on economic conditions and assumptions.</p>

      <h3>Business Impact</h3>
      <p>Fiscal policy can affect customer demand, government contracts, infrastructure, business taxes, consumer purchasing power, employment, financing conditions, and industry-specific incentives.</p>

      <hr />

      <h2>2. Monetary Policy</h2>
      <h3>Definition</h3>
      <p>Monetary policy is the management of monetary and financial conditions by a country's central bank or monetary authority to pursue objectives established by law, commonly including price stability and, depending on the jurisdiction, other macroeconomic objectives. One major monetary-policy tool is the policy interest rate.</p>

      <h3>Important Distinction</h3>
      <p>Fiscal policy is primarily associated with government taxation and spending. Monetary policy is primarily associated with the central bank's management of monetary and financial conditions.</p>

      <hr />

      <h2>3. Taxation</h2>
      <h3>Definition</h3>
      <p>Taxation is the compulsory collection of money by government under applicable law to finance public activities and perform other economic and policy functions. Taxes can apply to individuals, businesses, income, consumption, property, imports, transactions, capital gains, and specific products.</p>

      <h3>Common Tax Categories</h3>
      <ul>
        <li>Income tax — income earned</li>
        <li>Corporate tax — taxable business income</li>
        <li>Consumption tax — purchases/consumption</li>
        <li>VAT — value added through the supply chain</li>
        <li>Excise tax — specific goods/activities</li>
        <li>Property tax — property ownership/value</li>
        <li>Import duties — certain imported goods</li>
        <li>Capital-gains tax — certain gains from asset transactions</li>
      </ul>
      <p>The actual tax structure differs between jurisdictions.</p>

      <h3>Important Principle</h3>
      <p>Revenue is not automatically taxable profit, and accounting profit is not necessarily the same as taxable income.</p>

      <hr />

      <h2>4. Government Spending</h2>
      <h3>Definition</h3>
      <p>Government spending is expenditure by public-sector entities on goods, services, transfers, infrastructure, public employees, programs, and other government activities.</p>
      <p>Examples: roads, schools, hospitals, public transportation, government salaries, infrastructure, public safety, social programs, government technology systems, public procurement.</p>

      <h3>Business Opportunities</h3>
      <p>Government spending can create demand for construction, technology, consulting, transportation, healthcare, food, security, education, and infrastructure services.</p>

      <h3>Risks</h3>
      <p>Businesses dependent heavily on government contracts may face procurement delays, budget changes, contract requirements, payment delays, compliance costs, and contract concentration.</p>

      <hr />

      <h2>5. Public Debt</h2>
      <h3>Definition</h3>
      <p>Public debt is money owed by a government as a result of borrowing. Governments may borrow to finance infrastructure, budget deficits, emergency spending, public investment, refinancing of existing debt, and other authorized government activities.</p>

      <h3>Basic Relationship</h3>
      <p><strong>Ending Debt = Beginning Debt + New Borrowing − Principal Repaid</strong></p>

      <h3>Debt-to-GDP Ratio</h3>
      <p><strong>Debt-to-GDP Ratio = (Public Debt ÷ GDP) × 100</strong></p>
      <p>It compares the size of public debt with the economy's annual output.</p>

      <h3>Debt Service</h3>
      <p>Debt service includes principal repayment and interest payments. Higher debt-service requirements can reduce the amount of government resources available for other purposes, depending on the fiscal situation.</p>

      <h3>Why It Matters to Businesses</h3>
      <p>Public debt can affect government budgets, taxes, public investment, interest rates, investor confidence, government procurement, and future fiscal policy. However, the economic significance of debt depends on factors such as the debt's maturity, interest cost, currency denomination, economic growth, fiscal capacity, and institutional conditions.</p>

      <hr />

      <h2>6. Interest-Rate Policy</h2>
      <h3>Definition</h3>
      <p>Interest-rate policy refers to the use of interest rates as a monetary-policy instrument to influence borrowing, saving, spending, investment, inflation, and broader financial conditions. A central bank may adjust its policy rate according to its legal mandate and assessment of economic conditions.</p>

      <h3>Business Example</h3>
      <p>Suppose a company borrows ₱1,000,000. At a simple 6% annual interest rate, interest = ₱60,000/year. At 10%, interest = ₱100,000/year. Difference ₱40,000/year. Actual loan costs depend on the loan structure, fees, compounding, repayment schedule, and whether the rate is fixed or variable.</p>

      <hr />

      <h2>7. Financial Regulation</h2>
      <h3>Definition</h3>
      <p>Financial regulation consists of laws, rules, supervisory requirements, and regulatory frameworks governing financial institutions and financial markets. Depending on the jurisdiction, regulated entities can include banks, insurance companies, investment firms, payment providers, securities markets, lending companies, and other financial institutions.</p>

      <h3>Main Objectives</h3>
      <p>Financial stability, consumer protection, market integrity, risk management, transparency, anti-money-laundering requirements, capital adequacy, liquidity, and fraud prevention.</p>

      <h3>Key Principle</h3>
      <p>Financial regulation is not simply about restricting financial businesses; it also establishes standards for managing financial-system risks and protecting market participants.</p>

      <hr />

      <h2>8. Business Regulation</h2>
      <h3>Definition</h3>
      <p>Business regulation refers to laws and rules governing how businesses may operate. It can cover business registration, licensing, consumer protection, product safety, advertising, competition, environmental requirements, data protection, intellectual property, tax compliance, and industry-specific standards.</p>

      <h3>Benefits of Compliance</h3>
      <p>Reduces legal risk, builds customer trust, improves operational consistency, reduces penalties, protects reputation, makes partnerships easier, and supports long-term operation.</p>

      <h3>Cost of Regulation</h3>
      <p>Compliance can create licensing costs, legal costs, administrative work, reporting requirements, training costs, product-testing costs, and documentation requirements. The objective for a business is not simply to minimize compliance spending, but to understand and manage the requirements efficiently.</p>

      <hr />

      <h2>9. Labor Regulation</h2>
      <h3>Definition</h3>
      <p>Labor regulation consists of laws and rules governing employment relationships and working conditions. Depending on the jurisdiction, these can cover minimum wages, working hours, overtime, leave, workplace safety, employment contracts, benefits, payroll requirements, termination procedures, anti-discrimination protections, social insurance/contributions, and child-labor restrictions.</p>

      <h3>Labor Cost</h3>
      <p>A worker's economic cost to an employer can exceed their basic salary. A simplified example: basic salary ₱20,000 + benefits/contributions ₱3,000 + other employment costs ₱2,000 = approx. employer cost ₱25,000. Actual employer costs depend on applicable laws and compensation arrangements.</p>

      <h3>Important Principle</h3>
      <p>Labor compliance should be built into the business model from the beginning rather than treated as an afterthought.</p>

      <hr />

      <h2>10. Trade Regulation</h2>
      <h3>Definition</h3>
      <p>Trade regulation consists of laws, rules, procedures, and agreements governing domestic and international trade. It can regulate imports, exports, tariffs, quotas, customs, product standards, licensing, origin requirements, sanitary requirements, export controls, trade agreements, anti-dumping measures, and restricted products.</p>

      <h3>Why It Matters</h3>
      <p>Trade regulation can directly affect product cost, delivery time, market access, supplier selection, selling price, inventory, product design, packaging, and documentation.</p>

      <hr />

      <h2>Fiscal vs Monetary Policy</h2>
      <ul>
        <li>Main institution — government / central bank or monetary authority</li>
        <li>Major tools — spending and taxation / policy rates and other monetary tools</li>
        <li>Direct budget effect — yes / generally no</li>
        <li>Main transmission — government demand/income / financial conditions</li>
        <li>Can affect inflation — yes / yes</li>
        <li>Can affect employment — yes / yes</li>
        <li>Can affect business borrowing — indirectly or directly through conditions / strongly through monetary transmission</li>
        <li>Timing — legislative/budget processes can matter / policy decisions can be adjusted more frequently</li>
      </ul>

      <hr />

      <h2>Regulation vs Policy</h2>
      <p>Policy — a government or central bank chooses an economic course of action. Regulation — government establishes enforceable rules and requirements governing behavior.</p>
      <p>For example: monetary policy → interest-rate decision; financial regulation → requirements imposed on financial institutions; fiscal policy → government spending/tax decisions; business regulation → rules governing business operations.</p>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li>Fiscal policy primarily operates through government taxation and spending.</li>
        <li>Monetary policy primarily operates through monetary and financial conditions.</li>
        <li>Interest rates influence borrowing, saving, investment, and spending, but their effects are not instantaneous or guaranteed.</li>
        <li>Taxes affect business economics but tax liability is not simply a percentage of revenue in every tax system.</li>
        <li>Government spending can create demand and public infrastructure while also affecting government finances.</li>
        <li>Public debt represents accumulated government borrowing and should be considered alongside debt-service costs, economic capacity, maturity, and other fiscal factors.</li>
        <li>Financial regulation affects how financial institutions and markets manage risk and serve customers.</li>
        <li>Business regulation creates operating requirements that should be incorporated into business processes and budgets.</li>
        <li>Labor regulation affects the cost and structure of employment.</li>
        <li>Trade regulation affects sourcing, imports, exports, pricing, and market access.</li>
        <li>Regulatory compliance should be treated as an operating system, not merely paperwork.</li>
        <li>Businesses should monitor both economic indicators and the specific regulations that directly affect their industry.</li>
        <li>Revenue growth alone does not determine whether an economic environment is favorable; businesses must also monitor costs, margins, financing, demand, and cash flow.</li>
        <li>Government policy can create both costs and opportunities for businesses, depending on the industry, business model, and specific policy.</li>
        <li>The most useful business approach is to understand how policy changes transmit into actual customer demand, costs, financing, supply chains, and profitability.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Economic Conditions → Government Assessment → Fiscal Policy → Taxation → Government
        Spending → Public Debt → Central-Bank Assessment → Monetary Policy → Interest-Rate Policy
        → Credit Conditions → Financial Regulation → Business Regulation → Labor Regulation →
        Trade Regulation → Business Costs → Consumer &amp; Business Demand → Investment →
        Employment → Revenue → Profitability → Economic Activity → Government Revenue → Fiscal
        Capacity → Continuous Policy Review.
      </p>
    </LessonLayout>
  )
}
