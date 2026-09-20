import LessonLayout from '../components/LessonLayout'

export default function SellingStrategiesPart4() {
  return (
    <LessonLayout
      number="81"
      title="Selling Strategies & Techniques — Part 4"
      summary="19 selling systems — lead scoring, sales funnels and pipelines, prospecting, cold and warm outreach, inbound and outbound, appointment setting, scripts, and objections."
    >
      <h2>Selling Strategies &amp; Techniques — Part 4</h2>

      <h2>1. Lead Scoring</h2>
      <h3>Definition</h3>
      <p>
        Lead scoring is a systematic method of assigning points or ratings to leads based on
        characteristics, behavior, engagement, fit, and buying signals.
      </p>
      <p>The purpose is to identify which leads deserve greater sales attention.</p>
      <p>A lead can be scored using factors such as: industry, company size, budget, geographic fit, job role, need, website activity, email engagement, demo attendance, trial usage, form submissions, previous purchases, buying timeline.</p>
      <h3>How It Works</h3>
      <pre>{`Lead
 ↓
Collect Information
 ↓
Evaluate Fit
 ↓
Evaluate Behavior
 ↓
Assign Scores
 ↓
Segment Leads
 ↓
Sales Action`}</pre>
      <h3>Example</h3>
      <p>A web-development agency uses this illustrative model:</p>
      <ul>
        <li>Has an active business — +10</li>
        <li>Needs an e-commerce website — +20</li>
        <li>Budget confirmed — +20</li>
        <li>Decision-maker involved — +15</li>
        <li>Project within 30 days — +20</li>
        <li>Requested consultation — +15</li>
        <li>Total — 100</li>
      </ul>
      <p>
        The agency might establish internal categories such as 0–39 low priority, 40–69
        nurture, 70–100 sales-qualified. These thresholds should be based on the company's
        actual conversion data rather than assumed to be universally correct.
      </p>
      <h3>Lead Scoring Formula</h3>
      <p><strong>Lead Score = Sum of (Factor Score × Weight)</strong></p>
      <h3>Benefits</h3>
      <ul>
        <li>Prioritizes sales resources</li>
        <li>Helps identify high-intent prospects</li>
        <li>Supports automated lead routing</li>
        <li>Improves sales and marketing coordination</li>
        <li>Reduces time spent on poor-fit leads</li>
      </ul>
      <h3>Risks</h3>
      <ul>
        <li>Poor data creates inaccurate scores</li>
        <li>High engagement does not always mean purchase intent</li>
        <li>Scores can become outdated</li>
        <li>Overly complicated models become difficult to maintain</li>
      </ul>
      <h3>Principle</h3>
      <p>Lead scoring should help salespeople prioritize—not replace human judgment.</p>

      <hr />

      <h2>2. Sales Funnel</h2>
      <h3>Definition</h3>
      <p>
        A sales funnel represents the stages a large group of potential customers passes through
        as some progress toward purchasing.
      </p>
      <h3>Typical Funnel</h3>
      <pre>{`MANY PEOPLE
             ↓
         Awareness
             ↓
          Interest
             ↓
         Evaluation
             ↓
         Qualification
             ↓
          Proposal
             ↓
          Purchase
             ↓
       FEWER CUSTOMERS`}</pre>
      <h3>Example</h3>
      <ul>
        <li>10,000 people see a campaign</li>
        <li>1,000 visit the website</li>
        <li>200 submit an inquiry</li>
        <li>80 become qualified leads</li>
        <li>30 receive proposals</li>
        <li>10 purchase</li>
      </ul>
      <p>The funnel helps identify where potential customers are being lost.</p>
      <h3>Conversion Rate</h3>
      <p><strong>Conversion Rate = (Customers Advancing ÷ Customers Entering Stage) × 100</strong></p>
      <p>For example: (10 ÷ 30) × 100 = 33.3%</p>
      <h3>Funnel vs Pipeline</h3>
      <ul>
        <li>Funnel — measures customer progression; pipeline — manages individual opportunities</li>
        <li>Funnel — usually aggregate; pipeline — opportunity-specific</li>
        <li>Funnel — shows conversion; pipeline — shows deal stage and next action</li>
        <li>Funnel — useful for analysis; pipeline — useful for sales management</li>
      </ul>

      <hr />

      <h2>3. Sales Pipeline</h2>
      <h3>Definition</h3>
      <p>
        A sales pipeline is an organized view of active sales opportunities and the stages they
        are currently in.
      </p>
      <p>
        Unlike the funnel, which describes overall customer movement, the pipeline helps the
        sales team manage actual deals.
      </p>
      <h3>Typical Pipeline</h3>
      <pre>{`Prospect
   ↓
Contacted
   ↓
Qualified
   ↓
Discovery
   ↓
Proposal
   ↓
Negotiation
   ↓
Closed Won / Closed Lost`}</pre>
      <h3>Pipeline Example</h3>
      <ul>
        <li>Client A — Discovery — ₱30,000</li>
        <li>Client B — Proposal — ₱80,000</li>
        <li>Client C — Negotiation — ₱120,000</li>
      </ul>
      <h3>Pipeline Value</h3>
      <p><strong>Pipeline Value = Sum of Potential Deal Values</strong></p>
      <p>
        A business may also calculate weighted pipeline value:
        <strong>Weighted Pipeline = Sum of (Deal Value × Probability)</strong>
      </p>
      <p>Probabilities should be based on historical performance and clearly defined stage criteria.</p>
      <h3>Important Pipeline Information</h3>
      <p>
        Each opportunity should ideally contain: customer, contact, need, deal value, current
        stage, probability, expected close date, decision-maker, next action, owner, risks,
        notes.
      </p>
      <h3>Principle</h3>
      <p>Every active opportunity should have a clearly defined next action.</p>

      <hr />

      <h2>4. Prospecting</h2>
      <h3>Definition</h3>
      <p>
        Prospecting is the process of identifying and contacting potential customers who may
        have a need for the company's product or service.
      </p>
      <p>Prospecting creates opportunities before a sale exists.</p>
      <h3>Prospecting Sources</h3>
      <ul>
        <li>Existing networks</li>
        <li>Referrals</li>
        <li>Social media</li>
        <li>Search engines</li>
        <li>Business directories</li>
        <li>Events</li>
        <li>Industry communities</li>
        <li>Website inquiries</li>
        <li>Email lists obtained appropriately</li>
        <li>Partnerships</li>
        <li>Existing customer introductions</li>
        <li>Marketplace activity</li>
      </ul>
      <h3>Prospecting Process</h3>
      <pre>{`Define Ideal Customer
        ↓
Find Potential Customers
        ↓
Research
        ↓
Prioritize
        ↓
Contact
        ↓
Qualify
        ↓
Sales Opportunity`}</pre>
      <h3>Principle</h3>
      <p>Good prospecting is targeted, relevant, and based on a realistic customer fit.</p>

      <hr />

      <h2>5. Cold Outreach</h2>
      <h3>Definition</h3>
      <p>
        Cold outreach is contacting a potential customer with whom the salesperson does not have
        an established relationship or active sales conversation.
      </p>
      <p>Channels include: cold email, cold calling, direct messaging, postal mail, business networking outreach.</p>
      <h3>Example</h3>
      <p>
        A web-development company identifies a business whose website has obvious usability
        problems and sends a relevant introduction.
      </p>
      <p>The goal should not necessarily be to close immediately. The first goal might be to start a relevant conversation.</p>
      <h3>Cold Outreach Structure</h3>
      <pre>{`Research
 ↓
Relevant Opening
 ↓
Reason for Contact
 ↓
Potential Problem / Opportunity
 ↓
Brief Value Proposition
 ↓
Low-Friction CTA`}</pre>
      <h3>Example</h3>
      <p>
        "I noticed your online ordering process requires several steps on mobile. We help
        businesses simplify mobile checkout. Would you be open to a short discussion about the
        current process?"
      </p>
      <h3>Metrics</h3>
      <ul>
        <li>Delivery rate</li>
        <li>Response rate</li>
        <li>Positive response rate</li>
        <li>Meeting rate</li>
        <li>Qualification rate</li>
        <li>Conversion rate</li>
        <li>Revenue per campaign</li>
      </ul>
      <h3>Risks</h3>
      <ul>
        <li>Spam</li>
        <li>Irrelevant messaging</li>
        <li>Excessive frequency</li>
        <li>Poor targeting</li>
        <li>Regulatory/compliance problems</li>
        <li>Damaged reputation</li>
      </ul>
      <h3>Principle</h3>
      <p>Cold outreach should earn attention through relevance rather than interruption alone.</p>

      <hr />

      <h2>6. Warm Outreach</h2>
      <h3>Definition</h3>
      <p>
        Warm outreach contacts a prospect who already has some connection, awareness,
        interaction, referral, or previous engagement with the business.
      </p>
      <p>Examples: someone referred by a customer, someone who requested information, a previous customer, a person who attended a webinar, someone who interacted with relevant content, a business introduced by a partner.</p>
      <h3>Warm Outreach Flow</h3>
      <pre>{`Existing Connection
       ↓
Relevant Context
       ↓
Conversation
       ↓
Discovery
       ↓
Qualification
       ↓
Offer`}</pre>
      <h3>Warm vs Cold Outreach</h3>
      <ul>
        <li>Warm — existing connection or signal; cold — little/no previous relationship</li>
        <li>Warm — lower context-building requirement; cold — more context must be established</li>
        <li>Warm — referral/content interaction may exist; cold — prospect may not know seller</li>
        <li>Both require qualification</li>
      </ul>

      <hr />

      <h2>7. Inbound Sales</h2>
      <h3>Definition</h3>
      <p>
        Inbound sales occurs when potential customers come toward the business through marketing,
        content, search, referrals, advertising, websites, social media, or other channels and
        the sales team helps them progress toward a purchase.
      </p>
      <h3>Inbound Flow</h3>
      <pre>{`Content / Search / Ads / Referral
              ↓
            Visitor
              ↓
            Inquiry
              ↓
        Lead Qualification
              ↓
           Discovery
              ↓
        Recommendation
              ↓
            Proposal
              ↓
            Purchase`}</pre>
      <h3>Benefits</h3>
      <ul>
        <li>Prospects may already have intent</li>
        <li>Educational content can build trust</li>
        <li>Can scale through digital channels</li>
        <li>Customer can research before contacting sales</li>
      </ul>
      <h3>Risks</h3>
      <ul>
        <li>Lead quality varies</li>
        <li>Marketing costs can be substantial</li>
        <li>Content may generate interest without purchasing intent</li>
      </ul>

      <hr />

      <h2>8. Outbound Sales</h2>
      <h3>Definition</h3>
      <p>
        Outbound sales involves the business proactively identifying and contacting potential
        customers.
      </p>
      <p>Examples: cold calling, cold email, account-based outreach, sales representatives, direct messages, field sales.</p>
      <h3>Outbound Flow</h3>
      <pre>{`Target Market
     ↓
Prospecting
     ↓
Research
     ↓
Outreach
     ↓
Qualification
     ↓
Discovery
     ↓
Proposal
     ↓
Purchase`}</pre>
      <h3>Inbound vs Outbound</h3>
      <ul>
        <li>Inbound — customer initiates or responds to attraction; outbound — seller initiates contact</li>
        <li>Inbound — content/search/referral often important; outbound — prospecting/outreach important</li>
        <li>Inbound — intent may already exist; outbound — intent may need to be established</li>
        <li>Inbound — pull-oriented; outbound — push-oriented</li>
      </ul>
      <p>
        Neither model is inherently appropriate for every business. The right mix depends on
        customer behavior, product complexity, acquisition economics, and sales cycle.
      </p>

      <hr />

      <h2>9. Appointment Setting</h2>
      <h3>Definition</h3>
      <p>
        Appointment setting is the process of arranging a specific time for a sales conversation,
        consultation, demonstration, meeting, or presentation.
      </p>
      <p>The appointment setter may be: sales representative, appointment-setting specialist, automated scheduling system, customer service representative, founder.</p>
      <h3>Appointment Process</h3>
      <pre>{`Prospect
   ↓
Interest
   ↓
Qualification
   ↓
Appointment Offer
   ↓
Date + Time
   ↓
Confirmation
   ↓
Meeting
   ↓
Discovery / Demo`}</pre>
      <h3>Good Appointment Setting</h3>
      <p>
        Confirm: date, time, time zone, meeting format, expected duration, participants,
        purpose, preparation requirements.
      </p>
      <h3>Example</h3>
      <p>30-minute website consultation, Tuesday 2:00 PM, video call, participants: business owner + developer.</p>
      <h3>Metrics</h3>
      <p><strong>Show Rate = (Appointments Attended ÷ Appointments Booked) × 100</strong></p>
      <p>Also track: booking rate, cancellation rate, rescheduling rate, qualified appointment rate, appointment-to-opportunity rate.</p>

      <hr />

      <h2>10. Sales Scripts</h2>
      <h3>Definition</h3>
      <p>A sales script is a structured guide for sales conversations.</p>
      <p>A script can provide: opening, introduction, discovery questions, value statement, common responses, objection responses, CTA, closing, follow-up instructions.</p>
      <h3>Example Structure</h3>
      <pre>{`Opening
  ↓
Reason for Contact
  ↓
Discovery Question
  ↓
Listen
  ↓
Needs Analysis
  ↓
Recommendation
  ↓
Questions
  ↓
Objections
  ↓
Next Step`}</pre>
      <h3>Script vs Conversation</h3>
      <p>A good script is a framework, not a robotic speech. The salesperson should listen and adapt.</p>
      <h3>Principle</h3>
      <p>Standardize the process, not the customer's answers.</p>

      <hr />

      <h2>11. Objection Handling</h2>
      <h3>Definition</h3>
      <p>
        Objection handling is the process of understanding and responding to a customer's
        concern about purchasing.
      </p>
      <p>Common objections involve: price, timing, need, trust, features, risk, competitors, implementation, authority, existing solution.</p>
      <h3>Objection Framework</h3>
      <pre>{`Listen
  ↓
Clarify
  ↓
Acknowledge
  ↓
Investigate
  ↓
Respond
  ↓
Confirm
  ↓
Continue / Next Step`}</pre>
      <h3>Example: Price Objection</h3>
      <p>Customer: "₱50,000 is too expensive."</p>
      <p>Instead of immediately offering a discount:</p>
      <ol>
        <li>Ask what part of the investment is difficult.</li>
        <li>Determine whether budget or perceived value is the issue.</li>
        <li>Clarify scope and expected outcome.</li>
        <li>Explore alternatives if appropriate.</li>
      </ol>
      <p>
        The solution might be: reduced scope, different package, payment schedule, different
        implementation phase — rather than an automatic discount.
      </p>
      <h3>Common Objection Categories</h3>
      <ul>
        <li>"Too expensive" — budget or insufficient perceived value</li>
        <li>"Need to think" — unresolved concern</li>
        <li>"Not now" — timing</li>
        <li>"Send information" — need for evaluation</li>
        <li>"Already have a provider" — switching cost</li>
        <li>"Not interested" — poor fit or low priority</li>
        <li>"Need approval" — decision authority</li>
      </ul>
      <h3>Principle</h3>
      <p>An objection is information about the customer's decision process.</p>

      <hr />

      <h2>12. Needs-Based Presentation</h2>
      <h3>Definition</h3>
      <p>
        A needs-based presentation presents only the aspects of a product or service that are
        relevant to the customer's identified needs.
      </p>
      <p>Instead of "Here are all 50 features," the seller presents: "You mentioned that mobile checkout is causing problems. Here's how this system addresses that specific issue."</p>
      <h3>Structure</h3>
      <pre>{`Customer Need
     ↓
Relevant Problem
     ↓
Relevant Capability
     ↓
Demonstration
     ↓
Customer Outcome
     ↓
Evidence
     ↓
Next Step`}</pre>
      <h3>Benefits</h3>
      <ul>
        <li>More relevant</li>
        <li>Easier to understand</li>
        <li>Reduces information overload</li>
        <li>Connects features to outcomes</li>
      </ul>
      <h3>Principle</h3>
      <p>Present according to what matters to the customer, not according to everything the product can do.</p>

      <hr />

      <h2>13. Feature-Benefit Selling</h2>
      <h3>Definition</h3>
      <p>
        Feature-benefit selling connects a product's characteristics to the practical advantages
        they provide to the customer.
      </p>
      <p>A useful structure is: Feature → Function → Benefit → Outcome.</p>
      <h3>Example</h3>
      <ul>
        <li>Feature: Automated inventory alerts</li>
        <li>Function: System detects when stock reaches a defined threshold</li>
        <li>Benefit: Staff can reorder earlier</li>
        <li>Outcome: Lower risk of stockouts</li>
      </ul>
      <h3>Feature vs Benefit</h3>
      <ul>
        <li>Feature — what the product has/does; benefit — why it matters</li>
        <li>Feature — technical characteristic; benefit — customer advantage</li>
        <li>"Cloud backup" → data can be recovered after device failure</li>
        <li>"Analytics dashboard" → easier performance monitoring</li>
        <li>"Mobile-responsive design" → better usability across mobile devices</li>
      </ul>
      <h3>Important Principle</h3>
      <p>A feature becomes commercially meaningful when the customer understands why it matters to them.</p>

      <hr />

      <h2>14. ROI Selling</h2>
      <h3>Definition</h3>
      <p>
        ROI selling explains a purchase in terms of measurable financial return or economic
        impact.
      </p>
      <p>ROI can involve: revenue increase, cost reduction, time savings, productivity, waste reduction, customer retention, reduced errors, increased conversion.</p>
      <h3>Basic ROI Formula</h3>
      <p><strong>ROI = ((Gain − Investment) ÷ Investment) × 100</strong></p>
      <h3>Example</h3>
      <p>
        Automation costs ₱20,000 and is expected to generate ₱50,000 in measurable annual
        benefit. ROI = ((50,000 − 20,000) ÷ 20,000) × 100 = 150%.
      </p>
      <p>
        This is an illustrative calculation; actual ROI should account for relevant
        implementation, operating, maintenance, and opportunity costs.
      </p>
      <h3>Payback Period</h3>
      <p><strong>Payback = Initial Investment ÷ Annual Net Benefit</strong></p>
      <p>If investment = ₱20,000 and annual benefit = ₱50,000, then payback ≈ 0.4 years, or about 4.8 months.</p>
      <h3>Risks</h3>
      <p>Don't invent financial results. If an outcome cannot be reliably measured, label it as an estimate or scenario.</p>

      <hr />

      <h2>15. Case-Study Selling</h2>
      <h3>Definition</h3>
      <p>
        Case-study selling uses documented customer experiences to demonstrate how a product or
        service solved a real problem.
      </p>
      <p>A strong case study usually contains: customer situation, problem, objective, solution, implementation, result, lessons.</p>
      <h3>Case Study Structure</h3>
      <pre>{`Before
 ↓
Problem
 ↓
Intervention
 ↓
Implementation
 ↓
Measured Result
 ↓
After`}</pre>
      <h3>Why Case Studies Work</h3>
      <p>They provide: context, evidence, specificity, demonstrated implementation, real-world relevance.</p>
      <h3>Principle</h3>
      <p>
        Case studies should be truthful and representative; results from one customer should not
        automatically be presented as guaranteed results for everyone.
      </p>

      <hr />

      <h2>16. Testimonial Selling</h2>
      <h3>Definition</h3>
      <p>
        Testimonial selling uses statements from customers describing their experience with a
        product, service, or business.
      </p>
      <h3>Strong Testimonial Characteristics</h3>
      <p>A useful testimonial is: authentic, specific, relevant, attributable where appropriate, based on an actual customer experience.</p>
      <p>Weak: "Amazing service!"</p>
      <p>Stronger: "The new system reduced our manual order-processing work and made daily inventory tracking easier."</p>
      <h3>Testimonial vs Case Study</h3>
      <ul>
        <li>Testimonial — usually short; case study — usually detailed</li>
        <li>Testimonial — customer statement; case study — structured customer story</li>
        <li>Testimonial — focuses on experience/result; case study — explains problem → solution → result</li>
        <li>Testimonial — quick credibility signal; case study — deeper evidence</li>
      </ul>

      <hr />

      <h2>17. Social-Proof Selling</h2>
      <h3>Definition</h3>
      <p>
        Social proof selling uses evidence that other people or organizations have chosen, used,
        reviewed, or trusted a product or service.
      </p>
      <p>Examples include: customer reviews, testimonials, number of customers, ratings, case studies, customer logos, user-generated content, expert endorsements, usage statistics, certifications, community participation.</p>
      <h3>Social-Proof Structure</h3>
      <pre>{`Claim
 ↓
Evidence
 ↓
Customer / Source
 ↓
Context
 ↓
Prospect Confidence`}</pre>
      <h3>Risks</h3>
      <ul>
        <li>Fake reviews</li>
        <li>Purchased engagement</li>
        <li>Misleading statistics</li>
        <li>Out-of-date customer logos</li>
        <li>Cherry-picked results</li>
        <li>Testimonials taken out of context</li>
      </ul>
      <h3>Principle</h3>
      <p>Social proof should reduce uncertainty through truthful evidence, not manufacture trust.</p>

      <hr />

      <h2>18. Comparison Selling</h2>
      <h3>Definition</h3>
      <p>
        Comparison selling helps customers evaluate two or more options by clearly showing
        relevant differences.
      </p>
      <p>Comparisons can involve: features, price, capacity, support, implementation, performance, warranty, contract terms, use cases.</p>
      <h3>Good Comparison Selling</h3>
      <p>The comparison should use: relevant criteria, accurate information, consistent definitions, comparable units, current data.</p>
      <h3>Competitor Comparison</h3>
      <p>
        When comparing against competitors, avoid unsupported claims. Instead of "Our competitor
        is terrible," use factual differences such as "Plan A includes X, while our plan includes
        Y."
      </p>
      <h3>Risk</h3>
      <p>A comparison becomes misleading if important limitations are hidden.</p>

      <hr />

      <h2>19. Demonstration Selling</h2>
      <h3>Definition</h3>
      <p>
        Demonstration selling uses an actual demonstration of a product or service to show how it
        works and how it addresses customer needs.
      </p>
      <h3>Demonstration Framework</h3>
      <pre>{`Customer Need
      ↓
Relevant Scenario
      ↓
Demonstrate
      ↓
Explain Outcome
      ↓
Customer Questions
      ↓
Evidence
      ↓
Next Step`}</pre>
      <h3>Good Demonstration</h3>
      <p>
        Before the demo: understand customer needs, prepare relevant data, test the system, plan
        the workflow, prepare answers.
      </p>
      <p>
        During the demo: establish context, demonstrate relevant functions, explain benefits,
        invite questions, confirm whether the feature solves the need.
      </p>
      <p>
        After the demo: summarize relevant capabilities, address remaining concerns, define next
        step.
      </p>
      <h3>Risks</h3>
      <ul>
        <li>Feature overload</li>
        <li>Technical failures</li>
        <li>Demonstrating irrelevant functionality</li>
        <li>Overpromising</li>
        <li>Focusing on product mechanics rather than customer outcomes</li>
      </ul>

      <hr />

      <h2>Sales Funnel and Pipeline Working Together</h2>
      <pre>{`MARKET
                   ↓
              PROSPECTS
                   ↓
          ┌────────┴────────┐
          │  SALES FUNNEL   │
          │                 │
          │ Awareness       │
          │ Interest        │
          │ Qualification   │
          │ Evaluation      │
          │ Purchase        │
          └────────┬────────┘
                   ↓
             SALES PIPELINE
                   ↓
       ┌───────────┼───────────┐
       ↓           ↓           ↓
    Lead A       Lead B       Lead C
    Discovery    Proposal     Negotiation
       ↓           ↓           ↓
    Next Step    Next Step    Next Step`}</pre>
      <p>
        Funnel = how the population progresses. Pipeline = how individual opportunities are
        managed.
      </p>

      <hr />

      <h2>Evidence-Based Selling System</h2>
      <pre>{`Question: "Is this relevant to me?"
        ↓
Needs-Based Presentation
        ↓
Question: "Does it actually work?"
        ↓
Demonstration
        ↓
Question: "Has it worked for others?"
        ↓
Case Study / Testimonial
        ↓
Question: "How does it compare?"
        ↓
Comparison
        ↓
Question: "Is it financially worthwhile?"
        ↓
ROI Analysis
        ↓
Question: "What happens if I have concerns?"
        ↓
Objection Handling
        ↓
Decision`}</pre>
      <p>
        This creates an evidence ladder: Relevance → Function → Experience → Evidence →
        Comparison → Economics → Decision.
      </p>

      <hr />

      <h2>Lead Qualification and Lead Scoring</h2>
      <ul>
        <li>Lead qualification — determines whether a lead is suitable; often uses human judgment; examines need, fit, authority, timing; answers "Is this a real opportunity?"</li>
        <li>Lead scoring — assigns a numerical/relative priority; can be automated; examines attributes and behaviors; helps answer "Which leads should we prioritize?"</li>
      </ul>
      <p>
        They can work together: New Lead → Basic Qualification → Lead Scoring → Sales Priority →
        Human Review → Qualified Opportunity.
      </p>

      <hr />

      <h2>Core Sales Metrics</h2>
      <p><strong>Lead Conversion = (Qualified Opportunities ÷ Leads) × 100</strong></p>
      <p><strong>Close Rate = (Closed Won ÷ Qualified Opportunities) × 100</strong></p>
      <p><strong>Sales Cycle = Average Time From Qualified Opportunity to Close</strong></p>
      <p><strong>Average Deal Size = Total Closed Revenue ÷ Number of Closed Deals</strong></p>
      <p><strong>Win Rate = (Closed Won ÷ (Closed Won + Closed Lost)) × 100</strong></p>
      <p><strong>Show Rate = (Attended Appointments ÷ Booked Appointments) × 100</strong></p>
      <p><strong>Pipeline Coverage = Qualified Pipeline ÷ Sales Target</strong></p>
      <p>The appropriate coverage ratio depends on historical conversion rates and sales-cycle characteristics.</p>

      <hr />

      <h2>Part 4 Core Principles</h2>
      <ol>
        <li>Lead scoring prioritizes attention; it does not guarantee purchase intent.</li>
        <li>The sales funnel measures progression across a customer population.</li>
        <li>The sales pipeline manages individual sales opportunities.</li>
        <li>Prospecting creates potential opportunities.</li>
        <li>Cold outreach requires relevance because the relationship does not yet exist.</li>
        <li>Warm outreach uses an existing connection or engagement signal.</li>
        <li>Inbound sales responds to customer-generated interest.</li>
        <li>Outbound sales proactively creates contact with potential customers.</li>
        <li>Appointment setting converts interest into a scheduled sales interaction.</li>
        <li>Sales scripts should guide conversations rather than turn salespeople into robots.</li>
        <li>Objection handling begins with understanding, not arguing.</li>
        <li>Needs-based presentations focus on what matters to the customer.</li>
        <li>Feature-benefit selling translates technical characteristics into customer outcomes.</li>
        <li>ROI selling connects investment with measurable economic value when that value can reasonably be estimated.</li>
        <li>Case studies provide contextual evidence from real customer experiences.</li>
        <li>Testimonials provide concise customer-based credibility.</li>
        <li>Social proof reduces uncertainty through truthful evidence.</li>
        <li>Comparison selling makes meaningful differences easier to understand.</li>
        <li>Demonstration selling lets customers see relevant functionality in action.</li>
        <li>Sales techniques should work together rather than operate as isolated tactics.</li>
        <li>Evidence should become stronger as the customer moves closer to a decision.</li>
        <li>A sales process should measure both conversion and economics.</li>
        <li>High lead volume is not necessarily valuable if lead quality is poor.</li>
        <li>A large pipeline is not necessarily healthy if opportunities are poorly qualified or stagnant.</li>
        <li>The strongest sales process connects customer need → appropriate solution → evidence → value → decision → reliable delivery.</li>
      </ol>

      <h3>Master Formula</h3>
      <p>
        Target → Prospect → Attract/Reach → Qualify → Score → Set Appointment → Discover →
        Analyze Needs → Present Relevant Solution → Connect Features to Benefits → Demonstrate →
        Provide Evidence → Explain ROI → Compare Options → Handle Objections → Propose → Follow
        Up → Close → Deliver → Retain → Expand → Generate Referrals → Measure → Improve.
      </p>
    </LessonLayout>
  )
}
