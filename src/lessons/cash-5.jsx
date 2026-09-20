import LessonLayout from '../components/LessonLayout'

export default function Cash5() {
  return (
    <LessonLayout
      number="186"
      title="Investing Cash Flow"
      summary="10 investing cash flow categories — equipment, property, technology and software, business acquisitions, investment purchases and sales, asset disposals, research investment, and expansion investment."
    >
      <h2>Investing Cash Flow</h2>

      <h2>Equipment Purchases</h2>
      <p>Cash spent acquiring machinery, computers, vehicles, or other long-lived assets.</p>

      <h2>Property Purchases</h2>
      <p>Cash used to purchase land/buildings.</p>

      <h2>Technology Investment</h2>
      <p>Cash invested in technology infrastructure and systems.</p>

      <h2>Software Development</h2>
      <p>Cash invested in building or acquiring software assets, subject to applicable accounting treatment.</p>

      <h2>Business Acquisitions</h2>
      <p>Cash used to purchase businesses or business assets.</p>

      <h2>Investment Purchases</h2>
      <p>Cash invested in financial or other investment assets.</p>

      <h2>Investment Sales</h2>
      <p>Cash received from selling investments.</p>

      <h2>Asset Disposals</h2>
      <p>Cash received from selling long-lived assets.</p>

      <h2>Research Investment</h2>
      <p>Capital spent on research and development activities, subject to applicable accounting treatment.</p>

      <h2>Expansion Investment</h2>
      <p>Capital deployed to increase: locations, capacity, equipment, technology, distribution, and product capability.</p>

      <h3>Investing Flow</h3>
      <pre>{`Cash
 ↓
Investment Decision
 ↓
Asset / Project
 ↓
Future Economic Benefits
 ↓
Cash Flows
 ↓
ROI Measurement`}</pre>
    </LessonLayout>
  )
}
