import LessonLayout from '../components/LessonLayout'

export default function EconomicIndicators() {
  return (
    <LessonLayout
      number="115"
      title="Economic Indicators"
      summary="10 economic indicator systems — GDP, GDP growth, unemployment, employment, inflation, consumer spending, business investment, productivity, retail sales, and PMI."
    >
      <h2>Economic Indicators</h2>
      <p>Economic indicators are measurements used to understand the condition, direction, and performance of an economy. Businesses, investors, governments, researchers, and consumers use them to evaluate changes in production, employment, prices, spending, investment, and business activity.</p>
      <p>A single indicator rarely tells the whole story. The most useful approach is to examine several indicators together.</p>

      <hr />

      <h2>1. GDP</h2>
      <h3>Definition</h3>
      <p>Gross Domestic Product (GDP) is the monetary value of final goods and services produced within a country's geographic boundaries during a specified period. GDP is commonly measured quarterly and annually and is one of the major indicators of economic activity.</p>

      <h3>Basic Expenditure Formula</h3>
      <p><strong>GDP = C + I + G + (X − M)</strong></p>
      <p>Where C = household consumption, I = investment, G = government spending on final goods and services, X = exports, M = imports.</p>

      <h3>Nominal vs Real GDP</h3>
      <p>Nominal GDP measures output using current prices. Real GDP adjusts for changes in prices to provide a measure of changes in the volume of production. This distinction is important because GDP can rise simply because prices increased.</p>

      <h3>Limitations</h3>
      <p>GDP does not directly measure individual financial well-being, income distribution, environmental quality, unpaid household production, customer satisfaction, business profitability, or quality of life. GDP should be combined with other indicators.</p>

      <hr />

      <h2>2. GDP Growth</h2>
      <h3>Definition</h3>
      <p>GDP growth measures how much economic output changes from one period to another.</p>
      <p><strong>GDP Growth Rate = ((Current GDP − Previous GDP) ÷ Previous GDP) × 100</strong></p>

      <h3>Important Note</h3>
      <p>A single quarter of negative growth does not automatically establish every definition of recession; recession determinations can use broader measures of economic activity and different methodologies.</p>

      <h3>Important Principle</h3>
      <p>GDP growth describes the change in economic output, not the profitability of an individual business.</p>

      <hr />

      <h2>3. Unemployment</h2>
      <h3>Definition</h3>
      <p>Unemployment refers to people who are without employment, available for work, and actively seeking work, according to the statistical definition used by the relevant country.</p>
      <p><strong>Unemployment Rate = (Unemployed People ÷ Labor Force) × 100</strong></p>
      <p>The labor force generally consists of employed people plus unemployed people who meet the applicable statistical criteria.</p>

      <h3>Business Effects</h3>
      <p>High unemployment may mean more available workers, weaker consumer spending, lower wage pressure in some markets, and reduced demand for some products.</p>
      <p>Low unemployment may mean greater consumer income, stronger spending, more difficult recruitment, higher wage pressure, and greater competition for skilled workers.</p>

      <h3>Important Distinction</h3>
      <p>Unemployment ≠ people who are not working. Some people outside the labor force may not be actively seeking work and therefore are not counted as unemployed under standard labor-force statistics.</p>

      <hr />

      <h2>4. Employment</h2>
      <h3>Definition</h3>
      <p>Employment measures the number or share of people who have jobs under the applicable statistical definition. Employment is closely related to unemployment but provides different information.</p>

      <h3>Employment vs Unemployment</h3>
      <ul>
        <li>Employment — number/share of people working</li>
        <li>Unemployment — number/share of labor force without work and seeking work</li>
        <li>Unemployment rate — unemployed ÷ labor force</li>
        <li>Labor-force participation — labor force ÷ working-age population</li>
      </ul>

      <hr />

      <h2>5. Inflation Rate</h2>
      <h3>Definition</h3>
      <p>Inflation is a sustained increase in the general price level of goods and services over time. The inflation rate measures the percentage change in a selected price index over a specified period.</p>
      <p><strong>Inflation Rate = ((Current Price Index − Previous Price Index) ÷ Previous Price Index) × 100</strong></p>

      <h3>Effects on Businesses</h3>
      <p>Inflation can increase raw-material costs, labor costs, rent, electricity, fuel, transportation, packaging, supplier prices, and financing costs in some circumstances.</p>

      <h3>Important Distinctions</h3>
      <p>Inflation = prices are rising. Deflation = general price level is falling. Disinflation = inflation is still positive but slowing.</p>
      <p>Example: Year 1: 6% inflation. Year 2: 4% inflation. Year 3: 2% inflation. Prices are still rising, but the inflation rate is declining.</p>

      <hr />

      <h2>6. Consumer Spending</h2>
      <h3>Definition</h3>
      <p>Consumer spending measures household expenditure on goods and services. It is an important component of economic activity because household consumption represents a large share of economic demand in many economies.</p>

      <h3>Spending Categories</h3>
      <p>Food, housing, transportation, clothing, electronics, entertainment, healthcare, education, travel, digital services, personal services.</p>

      <h3>Why Businesses Monitor It</h3>
      <p>Consumer spending can help businesses understand demand strength, customer willingness to spend, product-category trends, sales opportunities, and economic momentum.</p>

      <hr />

      <h2>7. Business Investment</h2>
      <h3>Definition</h3>
      <p>Business investment refers to spending by businesses on productive assets and activities intended to support future production or operations. Examples include machinery, factories, buildings, vehicles, software, technology infrastructure, equipment, research and development, and productive facilities.</p>

      <h3>Factors Affecting Investment</h3>
      <p>Expected demand, interest rates, cash flow, financing availability, expected return, technology, capacity utilization, government policy, competition, business confidence.</p>

      <h3>Investment Return</h3>
      <p><strong>ROI = (Gain from Investment ÷ Investment Cost) × 100</strong></p>
      <p>Actual investment analysis should account for timing, taxes, risk, depreciation, financing costs, and cash flows.</p>

      <hr />

      <h2>8. Productivity</h2>
      <h3>Definition</h3>
      <p>Productivity measures how efficiently inputs are converted into outputs.</p>
      <p><strong>Productivity = Output ÷ Input</strong></p>
      <p>Inputs can include labor, capital, materials, energy, time, and technology.</p>

      <h3>Productivity vs Efficiency</h3>
      <p>Productivity measures output relative to input. Efficiency generally focuses on achieving a desired output with minimal waste or resource use. A business can increase productivity without necessarily improving every aspect of efficiency.</p>

      <h3>Business Importance</h3>
      <p>Higher productivity can potentially allow a business to produce more, reduce unit costs, improve margins, increase capacity, serve more customers, and improve competitiveness. But productivity improvements should not come at the expense of quality, safety, or customer outcomes.</p>

      <hr />

      <h2>9. Retail Sales</h2>
      <h3>Definition</h3>
      <p>Retail sales measure sales of goods by businesses to final consumers or households, according to the statistical methodology used. Retail-sales data can provide a relatively timely view of consumer purchasing activity.</p>

      <h3>Retail Sales vs Consumer Spending</h3>
      <p>Consumer spending is a broader economic concept covering household expenditure on goods and services. Retail sales generally focus on retail merchandise sales and therefore represent a narrower measurement.</p>

      <h3>Business Use</h3>
      <p>Retail businesses can monitor sales growth, sales by category, average transaction value, units sold, store traffic, conversion rate, online orders, and inventory turnover.</p>

      <hr />

      <h2>10. Purchasing Managers' Index (PMI)</h2>
      <h3>Definition</h3>
      <p>The Purchasing Managers' Index (PMI) is a survey-based indicator designed to provide a timely reading of business conditions, particularly in sectors such as manufacturing and services. PMI surveys commonly ask businesses about changes in new orders, output/activity, employment, supplier delivery times, and inventories.</p>

      <h3>Simplified Interpretation</h3>
      <ul>
        <li>PMI &gt; 50 — business conditions generally improving relative to the previous survey period</li>
        <li>PMI = 50 — broadly unchanged</li>
        <li>PMI &lt; 50 — business conditions generally deteriorating relative to the previous survey period</li>
      </ul>
      <p>The exact methodology and coverage depend on the PMI survey.</p>

      <h3>PMI Limitation</h3>
      <p>PMI is a survey indicator, not a direct measurement of total economic output. Therefore: PMI ≠ GDP.</p>

      <hr />

      <h2>Economic Indicators Compared</h2>
      <ul>
        <li>GDP — economic output — overall economy</li>
        <li>GDP growth — change in output — economic direction</li>
        <li>Unemployment — people without work and seeking work — labor market</li>
        <li>Employment — people working — labor market</li>
        <li>Inflation rate — change in general price level — prices</li>
        <li>Consumer spending — household expenditure — consumers</li>
        <li>Business investment — productive business spending — businesses</li>
        <li>Productivity — output relative to inputs — efficiency/productive capacity</li>
        <li>Retail sales — retail merchandise sales — consumer/retail activity</li>
        <li>PMI — survey-based business conditions — business momentum</li>
      </ul>

      <hr />

      <h2>Leading, Coincident, and Lagging Indicators</h2>
      <p><strong>Leading indicators</strong> may provide information about future economic conditions. Examples: new orders, business surveys, some financial-market indicators, building permits.</p>
      <p><strong>Coincident indicators</strong> move broadly alongside current economic activity. Examples: employment, industrial production, income, some measures of sales.</p>
      <p><strong>Lagging indicators</strong> often change after economic conditions have already shifted. Examples: certain unemployment measures, some labor-cost measures, some credit-quality measures.</p>
      <p>The classification depends on the specific indicator and methodology.</p>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>GDP measures economic output, not individual business success.</li>
        <li>GDP growth measures changes in output over time.</li>
        <li>Unemployment and employment describe different aspects of the labor market.</li>
        <li>Consumer spending provides information about household demand.</li>
        <li>Retail sales provide a more specific view of retail merchandise activity.</li>
        <li>Inflation measures changes in the general price level, not the price of one individual product.</li>
        <li>Business investment provides information about current and expected productive capacity.</li>
        <li>Productivity measures output relative to inputs.</li>
        <li>PMI is a survey-based indicator of business conditions rather than a direct measure of GDP.</li>
        <li>A PMI above 50 generally indicates improvement relative to the previous period, while below 50 generally indicates deterioration.</li>
        <li>One economic indicator should rarely be interpreted in isolation.</li>
        <li>Nominal increases can be caused by price changes, so real measures are important when assessing actual output.</li>
        <li>Economic indicators describe broad conditions; they do not automatically predict the performance of a particular business.</li>
        <li>Businesses should translate macroeconomic information into specific effects on demand, costs, inventory, financing, employment, and cash flow.</li>
        <li>The most useful economic analysis combines indicators rather than relying on a single number.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        GDP → GDP Growth → Employment → Unemployment → Consumer Spending → Retail Sales →
        Business Investment → Productivity → PMI → Inflation → Business Costs → Customer Demand →
        Revenue → Margin → Cash Flow → Investment → Hiring → Capacity → Performance Measurement →
        Economic Monitoring → Strategy Adjustment.
      </p>
    </LessonLayout>
  )
}
