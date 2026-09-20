import LessonLayout from '../components/LessonLayout'

export default function MoneyFinance() {
  return (
    <LessonLayout
      number="110"
      title="Money & Finance"
      summary="10 core money and finance concepts — inflation, deflation, interest rates, money supply, credit conditions, exchange rates, currency appreciation and depreciation, purchasing power, and real interest rates."
    >
      <h2>Money &amp; Finance</h2>
      <p>Money and finance are closely connected to business because changes in the general price level, interest rates, credit availability, currency values, and purchasing power affect how much businesses and households can buy, borrow, invest, save, and produce.</p>

      <pre>{`Money & Financial Conditions
          ↓
 ┌────────┼─────────┬──────────┐
 ↓        ↓         ↓          ↓
Prices  Interest  Credit    Exchange
        Rates     Conditions  Rates
 ↓        ↓         ↓          ↓
Purchasing Power  Borrowing   Trade
        ↓         ↓
        └────┬────┘
             ↓
      Consumer & Business
        Decisions
             ↓
       Demand / Investment
             ↓
      Revenue / Costs / Profit
             ↓
          Cash Flow`}</pre>

      <hr />

      <h2>1. Inflation</h2>
      <h3>Definition</h3>
      <p>Inflation is a sustained increase in the general price level of goods and services over time. When inflation occurs, the purchasing power of a unit of currency generally decreases.</p>
      <p>For example, if a basket of goods costs ₱1,000 and later costs ₱1,050: ₱50 ÷ ₱1,000 × 100 = 5%. Inflation is about the general price level, not merely one product becoming more expensive.</p>

      <h3>Common Sources of Inflation</h3>
      <p><strong>Demand-pull inflation</strong> — demand grows faster than the economy's ability to supply goods and services.</p>
      <p><strong>Cost-push inflation</strong> — production costs increase (raw materials, energy, transportation, labor, imported inputs).</p>
      <p><strong>Monetary and financial factors</strong> — changes in money and credit conditions can influence overall spending and prices, although the relationship depends on economic conditions and monetary policy.</p>

      <h3>Business Effects</h3>
      <p>Inflation can increase COGS, wages, rent, transportation, packaging, equipment costs, and financing costs. But businesses may not be able to increase selling prices by the same percentage. Therefore, inflation can compress profit margins.</p>

      <hr />

      <h2>2. Deflation</h2>
      <h3>Definition</h3>
      <p>Deflation is a sustained decrease in the general price level of goods and services. It is different from a temporary discount or one product becoming cheaper.</p>

      <h3>Potential Causes</h3>
      <p>Aggregate demand falls substantially, excess productive capacity exists, credit conditions tighten, money/credit growth weakens, productivity or supply increases substantially relative to demand.</p>

      <h3>Potential Effects</h3>
      <p>Consumers may delay purchases if they expect prices to continue falling. Businesses may experience lower revenue, lower margins, reduced investment, debt becoming harder to repay in real terms, and lower wages or employment in some circumstances.</p>

      <h3>Inflation vs Deflation</h3>
      <ul>
        <li>General price level — rises / falls</li>
        <li>Currency purchasing power — generally decreases / generally increases</li>
        <li>Costs — may rise / prices may decline</li>
        <li>Businesses — may raise prices / may need to reduce prices</li>
        <li>Fixed nominal debt — can reduce real value / can increase real burden</li>
      </ul>

      <hr />

      <h2>3. Interest Rates</h2>
      <h3>Definition</h3>
      <p>An interest rate is the price of borrowing money or the return received for lending/saving money, expressed as a rate.</p>
      <p><strong>Interest = Principal × Interest Rate × Time</strong></p>
      <p>Actual loans may use amortization, compounding, fees, and other terms, so the effective borrowing cost can differ from the simple calculation.</p>

      <h3>Higher vs Lower Interest Rates</h3>
      <p>Higher rates generally make borrowing more expensive. This can reduce the attractiveness of new loans, equipment financing, expansion projects, and some consumer purchases. Lower rates generally reduce the cost of borrowing, all else equal, which can encourage investment, borrowing, consumption, and business expansion.</p>
      <p>The actual effects depend on banks' lending standards, borrower risk, expectations, and broader financial conditions.</p>

      <hr />

      <h2>4. Money Supply</h2>
      <h3>Definition</h3>
      <p>Money supply refers to the stock of money available within an economy under a particular monetary definition. Different measures include different forms of money and highly liquid deposits.</p>

      <h3>Why It Matters</h3>
      <p>Money availability can affect spending, saving, lending, investment, interest rates, economic activity, and inflation.</p>

      <h3>Important Distinction</h3>
      <p>Money supply concerns an economy-wide monetary measure. Business cash balance is the amount of cash and cash equivalents available to a particular company.</p>

      <hr />

      <h2>5. Credit Conditions</h2>
      <h3>Definition</h3>
      <p>Credit conditions describe how easy or difficult it is for households and businesses to obtain financing and under what terms. Credit conditions include interest rates, lending standards, credit limits, collateral requirements, approval standards, loan maturity, down-payment requirements, risk assessments, and bank willingness to lend.</p>

      <h3>Easy vs Tight Credit</h3>
      <p>Easy credit — businesses may find it easier to obtain loans, finance inventory, purchase equipment, expand operations, and invest. Consumers may find it easier to finance homes, buy vehicles, and purchase durable goods.</p>
      <p>Tight credit — lenders may require more collateral, increase lending standards, reduce credit limits, charge higher rates, and reject more applications. This can reduce spending and investment.</p>

      <h3>Credit Conditions vs Interest Rates</h3>
      <ul>
        <li>Interest rates — cost of borrowing; credit conditions — overall availability and terms of credit</li>
        <li>Interest rates — usually expressed as a %; credit conditions — includes rates + lending standards + limits + collateral</li>
        <li>Interest rates — one component of financing; credit conditions — broader financing environment</li>
      </ul>
      <p>A loan can have a reasonable interest rate but still be difficult to obtain because lending standards are strict.</p>

      <hr />

      <h2>6. Exchange Rates</h2>
      <h3>Definition</h3>
      <p>An exchange rate is the price of one currency expressed in another currency. For example: ₱58 per US$1 means one US dollar exchanges for approximately 58 Philippine pesos at that quoted rate.</p>
      <p>Exchange rates can be market-determined, managed, fixed, floating, or subject to various combinations of policy arrangements.</p>

      <h3>Why Exchange Rates Matter</h3>
      <p>Exchange rates affect imports, exports, travel, international investment, foreign debt, imported raw materials, software subscriptions, and overseas suppliers.</p>

      <hr />

      <h2>7. Currency Appreciation</h2>
      <h3>Definition</h3>
      <p>Currency appreciation means a currency increases in value relative to another currency under the exchange-rate quotation being discussed. Suppose ₱60 = US$1 and later ₱55 = US$1. The peso has strengthened against the US dollar because fewer pesos are needed to purchase one dollar.</p>

      <h3>Potential Effects</h3>
      <p>Imports become relatively cheaper in domestic-currency terms, assuming foreign prices remain unchanged. Exports become relatively more expensive to foreign buyers, potentially reducing export competitiveness, all else equal. Foreign-currency debt becomes potentially cheaper to service in domestic-currency terms. Foreign travel becomes potentially cheaper for domestic residents.</p>

      <hr />

      <h2>8. Currency Depreciation</h2>
      <h3>Definition</h3>
      <p>Currency depreciation means a currency decreases in value relative to another currency. Example: ₱55/USD → ₱60/USD. The peso has depreciated against the dollar.</p>

      <h3>Potential Effects</h3>
      <p>Imports become more expensive in domestic-currency terms, all else equal. Exports can become more price-competitive for foreign buyers, depending on pricing and cost conditions. Foreign-currency debt becomes more expensive to service in domestic-currency terms. Foreign visitors may find domestic goods and services relatively cheaper in foreign-currency terms.</p>

      <h3>Currency Appreciation vs Depreciation</h3>
      <ul>
        <li>Appreciation — currency strengthens; depreciation — currency weakens</li>
        <li>Appreciation — foreign goods can become cheaper domestically; depreciation — foreign goods can become more expensive domestically</li>
        <li>Appreciation — imports may become cheaper; depreciation — imports may become more expensive</li>
        <li>Appreciation — exports may become less price-competitive; depreciation — exports may become more price-competitive</li>
        <li>Appreciation — foreign-currency debt may become cheaper; depreciation — foreign-currency debt may become more expensive</li>
      </ul>
      <p>These effects are tendencies rather than guarantees because businesses may adjust prices, contracts, sourcing, and hedging.</p>

      <hr />

      <h2>9. Purchasing Power</h2>
      <h3>Definition</h3>
      <p>Purchasing power is the amount of goods and services that a given amount of money can buy.</p>
      <p>If ₱1,000 buys a basket of goods today but only buys a smaller basket later because prices increased, the peso has lost purchasing power relative to that basket.</p>

      <h3>Relationship With Inflation</h3>
      <p>Inflation ↑ → general price level ↑ → purchasing power of money ↓. A useful conceptual relationship is: <strong>Real Value of Money ≈ Nominal Amount ÷ Price Level</strong>.</p>

      <h3>Business Implications</h3>
      <p>For businesses, purchasing power affects customer affordability, demand, wage expectations, input costs, pricing, real revenue, and real profits.</p>

      <hr />

      <h2>10. Real Interest Rate</h2>
      <h3>Definition</h3>
      <p>The real interest rate is the interest rate adjusted for inflation.</p>
      <p><strong>Real Interest Rate ≈ Nominal Interest Rate − Inflation Rate</strong></p>
      <p>More precise: <strong>Real Rate = (1 + Nominal Rate) ÷ (1 + Inflation Rate) − 1</strong></p>

      <h3>Why Real Interest Rates Matter</h3>
      <p>Businesses and investors care about the real cost or return of money. Suppose a business borrows at 10% while inflation is 8% — approximate real interest cost 2%. But if inflation is only 2%, the approximate real interest cost becomes 8%. The nominal rate did not change, but the inflation-adjusted burden did.</p>

      <h3>Nominal vs Real</h3>
      <ul>
        <li>Nominal — measured in stated monetary terms; real — adjusted for inflation</li>
        <li>Nominal — does not remove inflation effect; real — accounts for purchasing-power changes</li>
        <li>Nominal — useful for actual contractual payments; real — useful for economic comparisons</li>
      </ul>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Inflation is a sustained increase in the general price level.</li>
        <li>Deflation is a sustained decrease in the general price level.</li>
        <li>A single product becoming more expensive is not necessarily inflation.</li>
        <li>Inflation generally reduces the purchasing power of money.</li>
        <li>Deflation generally increases the purchasing power of money relative to the falling price level.</li>
        <li>Interest is the price of borrowing or the return to lending/saving.</li>
        <li>Interest rates influence borrowing, saving, investment, and spending decisions.</li>
        <li>Credit conditions are broader than interest rates.</li>
        <li>A low interest rate does not guarantee that credit will be easy to obtain.</li>
        <li>Money supply refers to economy-wide monetary aggregates, not simply a company's cash balance.</li>
        <li>Changes in money and credit conditions can affect spending, interest rates, and economic activity, but the relationships are not mechanical.</li>
        <li>An exchange rate expresses the value of one currency relative to another.</li>
        <li>Currency appreciation means a currency becomes more valuable relative to another currency under the quotation being used.</li>
        <li>Currency depreciation means a currency becomes less valuable relative to another currency.</li>
        <li>Exchange-rate movements can materially affect import costs and export revenues.</li>
        <li>Businesses with foreign suppliers or customers have currency exposure.</li>
        <li>Purchasing power describes how much goods and services money can buy.</li>
        <li>Nominal values and real values should not be confused.</li>
        <li>The real interest rate adjusts the nominal interest rate for inflation.</li>
        <li>The approximate real interest rate is nominal interest minus inflation.</li>
        <li>The exact real-rate calculation accounts for compounding between the nominal rate and inflation rate.</li>
        <li>Inflation can increase business costs even when selling prices remain unchanged.</li>
        <li>A business that cannot pass rising costs to customers may experience margin compression.</li>
        <li>Currency depreciation can increase the domestic-currency cost of imported goods and foreign-currency debt.</li>
        <li>Currency appreciation can reduce domestic-currency import costs, all else equal.</li>
        <li>Credit tightening can affect businesses even when their customers still want their products.</li>
        <li>Real revenue growth is different from nominal revenue growth.</li>
        <li>Financial planning should account for inflation, financing costs, credit availability, and currency exposure where relevant.</li>
        <li>Businesses should monitor both absolute financial values and inflation-adjusted performance.</li>
        <li>Money and financial conditions ultimately influence business decisions through demand, costs, investment, financing, purchasing power, and cash flow.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Monitor Inflation/Deflation → Measure Purchasing Power → Monitor Interest Rates → Analyze
        Real Interest Rates → Monitor Money &amp; Credit Conditions → Assess Borrowing Capacity →
        Monitor Exchange Rates → Calculate Domestic-Currency Costs → Forecast Revenue &amp; Costs
        → Analyze Real Margins → Manage Cash Flow → Adjust Pricing/Purchasing/Investment →
        Stress-Test Financial Conditions → Measure Results → Optimize → Repeat.
      </p>
    </LessonLayout>
  )
}
