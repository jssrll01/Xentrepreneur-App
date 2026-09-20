import LessonLayout from '../components/LessonLayout'

export default function Scalability3() {
  return (
    <LessonLayout
      number="201"
      title="Scalability — Part 3"
      summary="12 automation and self-service scalability categories — caching, automation, self-service, customer portals, knowledge bases, chatbots, AI automation, workflow, payment, billing, marketing, and sales automation."
    >
      <h2>Scalability — Part 3</h2>

      <h2>Caching</h2>
      <p>Stores frequently requested data temporarily so it can be retrieved faster and with less repeated processing.</p>

      <h2>Automation</h2>
      <p>Software performs repetitive tasks with limited human intervention.</p>

      <h2>Self-Service</h2>
      <p>Customers complete tasks independently.</p>
      <p>Examples: account creation, checkout, booking, password reset, and subscription management.</p>

      <h2>Customer Portals</h2>
      <p>Customers access information and services directly.</p>

      <h2>Knowledge Bases</h2>
      <p>Structured collections of support information.</p>

      <h2>Chatbots</h2>
      <p>Software that communicates with customers through conversational interfaces.</p>

      <h2>AI Automation</h2>
      <p>AI performs or assists with tasks such as: classification, drafting, search, summarization, customer support, data analysis, and workflow decisions.</p>
      <p>Human review remains important where errors have significant consequences.</p>

      <h2>Workflow Automation</h2>
      <p>Connects multiple business steps automatically.</p>
      <pre>{`New Order
 ↓
Payment Confirmation
 ↓
Inventory Update
 ↓
Invoice
 ↓
Customer Notification
 ↓
Fulfillment`}</pre>

      <h2>Payment Automation</h2>
      <p>Automates payment collection and reconciliation.</p>

      <h2>Billing Automation</h2>
      <p>Automates: invoicing, recurring billing, payment reminders, receipts, and subscription changes.</p>

      <h2>Marketing Automation</h2>
      <p>Automates appropriate: email sequences, segmentation, campaign triggers, lead nurturing, and customer lifecycle messaging.</p>

      <h2>Sales Automation</h2>
      <p>Automates: lead assignment, follow-ups, appointment reminders, CRM updates, and proposal workflows.</p>
    </LessonLayout>
  )
}
