import LessonLayout from '../components/LessonLayout'

export default function SalesTechniques() {
  return (
    <LessonLayout
      number="13"
      title="Sales Techniques"
      summary="10 structured methods to understand customers, communicate value, handle objections, and close with integrity."
    >
      <p>
        Sales techniques are structured methods for understanding customers,
        communicating value, overcoming uncertainty, and helping prospects move
        from awareness to purchase.
      </p>
      <p>Modern selling is not simply "convince someone to buy." A strong sales process is closer to:</p>
      <pre>{`Prospect
   ↓
Build Trust
   ↓
Discover Situation
   ↓
Identify Needs
   ↓
Understand Problems
   ↓
Present Solution
   ↓
Demonstrate Value
   ↓
Handle Concerns
   ↓
Make Proposal
   ↓
Follow Up
   ↓
Purchase
   ↓
Relationship`}</pre>
      <p>Different sales techniques emphasize different parts of this process.</p>

      <hr />

      <h2>1. Consultative Selling</h2>
      <h3>Definition</h3>
      <p>Consultative selling is a customer-centered sales approach where the salesperson acts more like an advisor than a traditional product promoter.</p>
      <p>Instead of immediately presenting a product, the salesperson first tries to understand the customer's situation, goals, problems, constraints, priorities, existing solutions, and desired outcomes. The salesperson then recommends an appropriate solution.</p>
      <p>Customer situation → questions → understanding → diagnosis → recommendation → solution.</p>

      <h3>How it works</h3>
      <p>A consultative salesperson might ask:</p>
      <ul>
        <li>What are you currently using?</li>
        <li>What problems are you experiencing?</li>
        <li>What would you like to improve?</li>
        <li>What is most important when choosing a solution?</li>
      </ul>
      <p>Then the recommendation is based on the answers.</p>

      <h3>Example</h3>
      <p>A web developer selling a website should not immediately say "I can build you a ₱30,000 website." Instead: "What are you trying to accomplish with the website?" The customer might explain: "I receive most of my orders through Facebook, but customers keep asking the same questions."</p>
      <p>The developer can identify the underlying need: product information, automated answers, online ordering, and customer convenience. The proposal can then address those problems.</p>

      <h3>Implementation</h3>
      <ol>
        <li><strong>Research the customer.</strong> Understand the industry and potential problems.</li>
        <li><strong>Ask questions.</strong> Discover the customer's current situation.</li>
        <li><strong>Diagnose.</strong> Separate symptoms from underlying problems.</li>
        <li><strong>Recommend.</strong> Present only relevant solutions.</li>
        <li><strong>Explain reasoning.</strong> Connect each recommendation to a discovered need.</li>
        <li><strong>Confirm.</strong> Ask whether the proposed solution addresses the customer's priorities.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Builds trust</li>
        <li>Reduces unnecessary selling</li>
        <li>Creates more relevant proposals</li>
        <li>Can increase customer satisfaction</li>
        <li>Helps identify higher-value opportunities</li>
        <li>Supports long-term relationships</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Takes more time</li>
        <li>Requires strong questioning skills</li>
        <li>Poor diagnosis can lead to the wrong recommendation</li>
        <li>Can become ineffective if the salesperson asks questions without actually listening</li>
      </ul>

      <hr />

      <h2>2. Solution Selling</h2>
      <h3>Definition</h3>
      <p>Solution selling focuses on identifying a customer's specific problem and presenting a combination of products, services, or capabilities that addresses that problem. The emphasis is on the solution, rather than the individual product.</p>
      <p>Problem → impact → desired outcome → solution → expected result.</p>

      <h3>Product selling vs solution selling</h3>
      <p><strong>Product selling:</strong> "We sell accounting software."</p>
      <p><strong>Solution selling:</strong> "We can help reduce the time your staff spends manually creating invoices and tracking payments."</p>
      <p>The second approach connects the offering to an actual business problem.</p>

      <h3>Example</h3>
      <p>A business needs a website, online catalog, customer inquiry system, and analytics. Instead of selling four separate products, a developer could present: "A digital sales platform designed to help customers discover your products, submit orders, and contact your business." The components support one larger solution.</p>

      <h3>Implementation</h3>
      <ol>
        <li>Identify the customer's problem.</li>
        <li>Determine the consequences of that problem.</li>
        <li>Identify the desired outcome.</li>
        <li>Map products/services to the outcome.</li>
        <li>Explain how the components work together.</li>
        <li>Define measurable results where possible.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Makes complex offerings easier to understand</li>
        <li>Focuses on customer outcomes</li>
        <li>Supports bundled services</li>
        <li>Can increase deal size</li>
        <li>Differentiates the business from commodity sellers</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Solutions can become unnecessarily complicated</li>
        <li>Salespeople may add features the customer doesn't need</li>
        <li>Results can be overstated</li>
        <li>Requires good understanding of the customer's business</li>
      </ul>

      <hr />

      <h2>3. Value-Based Selling</h2>
      <h3>Definition</h3>
      <p>Value-based selling focuses on the economic, operational, strategic, or practical value a customer receives rather than focusing primarily on price or product features.</p>
      <p>The central question is: what is this solution worth to the customer?</p>
      <p>Features → benefits → customer outcome → business value.</p>

      <h3>Feature → benefit → value</h3>
      <p>Consider a website with automated customer inquiries.</p>
      <p><strong>Feature</strong> — automated FAQ system.</p>
      <p><strong>Benefit</strong> — customers receive answers without waiting for an employee.</p>
      <p><strong>Outcome</strong> — employees spend less time answering repetitive questions.</p>
      <p><strong>Value</strong> — potentially lower support workload and faster customer response.</p>
      <p>The salesperson should distinguish between potential value and guaranteed results. Claims should be supported by evidence and realistic assumptions.</p>

      <h3>Value calculation</h3>
      <p><strong>Value = Benefits − Total Cost</strong></p>
      <p><strong>Net Value = Financial Benefits + Other Relevant Benefits − Total Cost</strong></p>
      <p>Suppose automation could reasonably save ₱8,000/month in labor-related operating time and ₱2,000/month in other measurable savings. Total potential monthly benefit: ₱8,000 + ₱2,000 = ₱10,000. If the solution costs ₱5,000/month: <strong>Net Monthly Value = ₱10,000 − ₱5,000 = ₱5,000</strong>.</p>
      <p>The actual result depends on whether those estimated savings are realized.</p>

      <h3>Implementation</h3>
      <ol>
        <li>Identify what the customer values.</li>
        <li>Determine measurable outcomes.</li>
        <li>Estimate the financial impact.</li>
        <li>Calculate the cost of the solution.</li>
        <li>Explain the value clearly.</li>
        <li>Use evidence whenever possible.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Moves conversation away from price alone</li>
        <li>Makes premium solutions easier to justify</li>
        <li>Connects sales to business outcomes</li>
        <li>Helps customers evaluate ROI</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Value may be difficult to quantify</li>
        <li>Poor assumptions produce misleading calculations</li>
        <li>Salespeople may exaggerate financial benefits</li>
      </ul>

      <hr />

      <h2>4. Relationship Selling</h2>
      <h3>Definition</h3>
      <p>Relationship selling focuses on building trust and maintaining a long-term relationship with customers rather than treating every transaction as a one-time sale.</p>
      <p>First contact → trust → purchase → support → follow-up → repeat purchase → long-term relationship → referral.</p>

      <h3>Example</h3>
      <p>A supplier sells packaging materials to a restaurant. Instead of contacting the restaurant only when seeking another order, the supplier checks inventory needs, communicates delivery schedules, resolves problems, provides product information, and maintains reliable service. The relationship becomes an important part of the customer's decision to continue buying.</p>

      <h3>Relationship-selling behaviors</h3>
      <ul>
        <li>Keep commitments</li>
        <li>Respond quickly</li>
        <li>Understand customer preferences</li>
        <li>Maintain communication</li>
        <li>Solve problems</li>
        <li>Provide useful information</li>
        <li>Follow through after the sale</li>
        <li>Avoid unnecessary pressure</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Repeat purchases</li>
        <li>Higher customer retention</li>
        <li>Referrals</li>
        <li>Greater trust</li>
        <li>Better customer knowledge</li>
        <li>Potentially higher lifetime value</li>
      </ul>

      <h3>Risks</h3>
      <p>Relationship selling can fail when the salesperson becomes overly dependent on personal relationships, service quality declines, promises are not fulfilled, communication becomes excessive or intrusive, or the relationship substitutes for actual product value.</p>
      <p>A relationship should support value, not replace it.</p>

      <hr />

      <h2>5. Discovery Questioning</h2>
      <h3>Definition</h3>
      <p>Discovery questioning is the process of asking structured questions early in the sales process to understand the customer's situation, needs, problems, goals, and decision criteria. It is one of the foundations of consultative and solution selling.</p>

      <h3>Question categories</h3>
      <p><strong>Situation questions</strong> — understand the current environment. Example: "How are you currently handling online orders?"</p>
      <p><strong>Problem questions</strong> — identify difficulties. Example: "What problems are you experiencing with the current process?"</p>
      <p><strong>Impact questions</strong> — understand consequences. Example: "How much time does that process take each day?"</p>
      <p><strong>Goal questions</strong> — identify desired outcomes. Example: "What would you like the new system to accomplish?"</p>
      <p><strong>Decision questions</strong> — understand purchasing requirements. Example: "What factors will you use to evaluate potential solutions?"</p>
      <p><strong>Timeline questions</strong> — understand timing. Example: "When would you ideally like the new system operating?"</p>

      <h3>Question funnel</h3>
      <p>Broad → situation → problem → impact → goal → decision criteria → specific requirement.</p>

      <h3>Example</h3>
      <p>Instead of asking "Do you want an online store?," ask: "How do customers currently place orders?" Then: "What happens when multiple orders arrive at the same time?" Then: "How does that affect your staff?" Then: "What would an improved ordering process look like?" The salesperson learns much more.</p>

      <h3>Good discovery questions are</h3>
      <p>Open-ended, relevant, specific, neutral, easy to understand, and connected to the customer's situation.</p>

      <h3>Poor discovery questions</h3>
      <p>Avoid interrogating customers with dozens of unrelated questions. Discovery should feel like a useful conversation, not an interrogation.</p>

      <hr />

      <h2>6. Needs Analysis</h2>
      <h3>Definition</h3>
      <p>Needs analysis is the structured process of determining what the customer actually requires from a product or solution.</p>
      <p>Discovery questioning gathers information. Needs analysis interprets that information.</p>
      <p>Customer statements → information → problems → needs → priorities → requirements → solution.</p>

      <h3>Types of needs</h3>
      <p><strong>Functional need</strong> — what must the product do? Example: customers need to place orders online.</p>
      <p><strong>Performance need</strong> — how well must it perform? Example: pages need to load quickly.</p>
      <p><strong>Financial need</strong> — what economic constraints exist? Example: the business can spend ₱20,000 initially.</p>
      <p><strong>Convenience need</strong> — how easy should it be? Example: employees should not need technical knowledge.</p>
      <p><strong>Strategic need</strong> — what larger objective does it support? Example: the business wants to expand beyond its local customer base.</p>

      <h3>Need prioritization</h3>
      <p><strong>Critical</strong> — must solve.</p>
      <p><strong>Important</strong> — strongly preferred.</p>
      <p><strong>Useful</strong> — nice to have.</p>
      <p><strong>Optional</strong> — future consideration.</p>

      <h3>Example</h3>
      <p>Customer says: "I want an ecommerce website with animations, AI, 3D graphics, and a payment system."</p>
      <p>Needs analysis might reveal that the most important requirements are actually: product catalog, mobile-friendly ordering, payment processing, and order management.</p>
      <p>The salesperson should distinguish requirements from preferences.</p>

      <hr />

      <h2>7. Objection Handling</h2>
      <h3>Definition</h3>
      <p>Objection handling is the process of understanding and responding to customer concerns that may prevent a purchase.</p>
      <p>Common objections include price, timing, trust, uncertainty, complexity, competing alternatives, lack of perceived value, and lack of authority to purchase.</p>
      <p>An objection is not necessarily rejection. It may indicate: "I need more information before I can decide."</p>

      <h3>Objection framework</h3>
      <p>Listen → acknowledge → clarify → respond → confirm.</p>

      <h3>Example: price objection</h3>
      <p><strong>Customer:</strong> "That's too expensive."</p>
      <p><strong>Poor response:</strong> "No, it's actually cheap."</p>
      <p><strong>Better process:</strong></p>
      <p><strong>Listen</strong> — don't interrupt.</p>
      <p><strong>Acknowledge</strong> — "I understand that budget is an important consideration."</p>
      <p><strong>Clarify</strong> — "Is the concern the total budget, or whether the expected benefits justify the cost?"</p>
      <p><strong>Respond</strong> — explain the relevant value, options, scope, or alternatives.</p>
      <p><strong>Confirm</strong> — "Does that address your concern?"</p>

      <h3>Common objection categories</h3>
      <ul>
        <li>"Too expensive" — budget or unclear value</li>
        <li>"I'll think about it" — uncertainty</li>
        <li>"Not now" — timing</li>
        <li>"We already have one" — switching cost</li>
        <li>"Send me information" — low urgency or need for research</li>
        <li>"I need to ask my partner" — decision authority</li>
        <li>"Your competitor is cheaper" — price comparison</li>
        <li>"I'm not sure it will work" — risk</li>
      </ul>
      <p>The key is to clarify the actual concern instead of assuming what the customer means.</p>

      <h3>What not to do</h3>
      <p>Argue, pressure, insult competitors, make unsupported claims, create fake urgency, hide important costs, or manipulate customers.</p>
      <p>Good objection handling reduces uncertainty; it should not override a customer's informed decision.</p>

      <hr />

      <h2>8. Demonstration Selling</h2>
      <h3>Definition</h3>
      <p>Demonstration selling uses a live or recorded demonstration to show how a product works and how it addresses the customer's needs. Instead of only saying "Our software is easy to use," you show the customer.</p>
      <p>Explain → demonstrate → customer experiences → questions → value connection.</p>

      <h3>Example</h3>
      <p>For a web application: show login, show dashboard, create an order, show automated notification, show reporting, and explain how each function addresses the customer's requirements.</p>

      <h3>Effective demonstration structure</h3>
      <ol>
        <li><strong>Set context.</strong> Explain what you're going to demonstrate.</li>
        <li><strong>Use the customer's scenario.</strong> Don't demonstrate random features.</li>
        <li><strong>Show the workflow.</strong> Demonstrate the actual task.</li>
        <li><strong>Explain the benefit.</strong> Connect the function to the customer's need.</li>
        <li><strong>Let the customer interact.</strong> Whenever practical, allow them to try it.</li>
        <li><strong>Answer questions.</strong> Address concerns honestly.</li>
      </ol>

      <h3>Feature dump vs targeted demonstration</h3>
      <p><strong>Feature dump:</strong> feature A, feature B, feature C, feature D, feature E, feature F.</p>
      <p><strong>Targeted demonstration:</strong> customer problem → relevant feature → demonstration → customer outcome.</p>
      <p>The second approach is generally more useful.</p>

      <hr />

      <h2>9. Proposal Selling</h2>
      <h3>Definition</h3>
      <p>Proposal selling is the process of presenting a formal solution proposal that explains what will be delivered, how it addresses the customer's needs, how much it costs, and what happens next.</p>
      <p>A proposal is particularly useful for web development, software projects, consulting, B2B services, construction, marketing services, agency work, and customized products.</p>

      <h3>Proposal structure</h3>
      <ol>
        <li>Customer situation</li>
        <li>Objectives</li>
        <li>Proposed solution</li>
        <li>Scope</li>
        <li>Deliverables</li>
        <li>Timeline</li>
        <li>Pricing</li>
        <li>Assumptions</li>
        <li>Terms</li>
        <li>Next steps</li>
      </ol>

      <h3>Example</h3>
      <p>A website-development proposal might contain:</p>
      <p><strong>Objective:</strong> create a mobile-friendly ecommerce platform.</p>
      <p><strong>Deliverables:</strong> homepage, product catalog, product pages, shopping cart, checkout, admin dashboard.</p>
      <p><strong>Timeline:</strong> Week 1 planning, Week 2 UI/UX, Weeks 3–5 development, Week 6 testing, Week 7 launch.</p>
      <p><strong>Pricing:</strong> development ₱25,000; hosting ₱3,000/year; maintenance ₱2,000/month.</p>
      <p>Costs should clearly identify what is included and excluded.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Professional presentation</li>
        <li>Clarifies scope</li>
        <li>Reduces misunderstandings</li>
        <li>Helps decision-makers evaluate the offer</li>
        <li>Creates a reference for the agreement</li>
      </ul>

      <h3>Risks</h3>
      <p>A poor proposal may be too generic, contain unclear scope, hide costs, promise unrealistic timelines, contain excessive technical detail, or fail to address the customer's actual needs.</p>

      <hr />

      <h2>10. Follow-Up Selling</h2>
      <h3>Definition</h3>
      <p>Follow-up selling is the process of continuing communication with a prospect or customer after an initial sales interaction.</p>
      <p>Follow-up can occur after an inquiry, meeting, demonstration, proposal, trial, purchase, or previous unsuccessful discussion.</p>
      <p>A follow-up should add value rather than simply repeat: "Any update?"</p>
      <p>Initial contact → discovery → proposal/demo → follow-up → questions → decision → purchase.</p>

      <h3>Effective follow-up</h3>
      <p>A useful follow-up might contain: summary of the discussion, answer to a question, requested document, revised proposal, relevant example, next step, or deadline if genuinely applicable.</p>

      <h3>Example</h3>
      <p>Instead of "Hi, just following up," a more useful message is: "Following our discussion, I've updated the proposal to include the product catalog and order-management features we discussed. I've also separated the optional features so you can compare the initial and expanded versions." The message provides a reason to respond.</p>

      <h3>Follow-up timing</h3>
      <p>There is no universal perfect interval. Timing depends on purchase complexity, customer urgency, decision process, industry, proposal size, and customer preference.</p>
      <p>A simple B2B sequence might be: Day 0 meeting; Day 1 summary; Day 3 answer questions; Day 7 check decision status; later useful follow-up based on agreed timeline.</p>

      <h3>Follow-up metrics</h3>
      <p><strong>Follow-Up Response Rate = Responses ÷ Follow-Ups Sent × 100</strong></p>
      <p><strong>Follow-Up Conversion Rate = Sales From Follow-Ups ÷ Follow-Up Opportunities × 100</strong></p>
      <p><strong>Sales Cycle</strong> — measure the time between initial qualified opportunity and purchase.</p>
      <p>Reducing unnecessary delays can improve sales efficiency, but pushing customers too aggressively can damage trust.</p>

      <hr />

      <h2>How the Sales Techniques Connect</h2>
      <p>These techniques work best as a system, not as isolated tricks.</p>
      <pre>{`PROSPECT
                       ↓
              CONSULTATIVE SELLING
                       ↓
              DISCOVERY QUESTIONING
                       ↓
                 NEEDS ANALYSIS
                       ↓
                SOLUTION SELLING
                       ↓
               VALUE-BASED SELLING
                       ↓
              DEMONSTRATION SELLING
                       ↓
               OBJECTION HANDLING
                       ↓
                 PROPOSAL SELLING
                       ↓
                FOLLOW-UP SELLING
                       ↓
               RELATIONSHIP SELLING
                       ↓
                  REPEAT BUSINESS`}</pre>

      <hr />

      <h2>Product Selling vs Consultative Selling</h2>
      <p><strong>Product-focused:</strong> starts with product; feature-focused; "here's what we sell"; same pitch for everyone; shorter interaction may be possible; useful for standardized purchases.</p>
      <p><strong>Consultative:</strong> starts with customer; problem-focused; "what are you trying to accomplish?"; tailored conversation; often requires more discovery; particularly useful for complex purchases.</p>
      <p>Neither approach is universally appropriate. For simple commodity purchases, customers may already know exactly what they need. For complex purchases, deeper discovery can be more valuable.</p>

      <hr />

      <h2>Solution Selling vs Value-Based Selling</h2>
      <p><strong>Solution selling:</strong> what solution addresses the problem? Focuses on problem-to-solution fit; combines relevant products/services. "This solves your ordering problem."</p>
      <p><strong>Value-based selling:</strong> what is the solution worth? Focuses on customer outcomes/value; quantifies or explains benefits. "This could reduce manual order processing."</p>
      <p>They can be combined: problem → solution → expected outcome → business value.</p>

      <hr />

      <h2>Discovery → Needs → Solution → Value</h2>
      <p>One of the most important sales chains is:</p>
      <p><strong>Discovery</strong> — "What is happening?"</p>
      <p><strong>Needs analysis</strong> — "What does the customer actually need?"</p>
      <p><strong>Solution</strong> — "What can solve it?"</p>
      <p><strong>Value</strong> — "Why does solving it matter?"</p>

      <h3>Example</h3>
      <p>Discovery: "We receive hundreds of inquiries."</p>
      <p>Needs: "We need faster customer responses."</p>
      <p>Solution: "Automated FAQ + ordering system."</p>
      <p>Value: "Customers can get answers and place orders without waiting for manual responses."</p>
      <p>This creates a logical sales conversation instead of a random feature presentation.</p>

      <hr />

      <h2>The Sales Conversation Framework</h2>
      <p>A complete sales conversation can follow:</p>
      <ol>
        <li><strong>Opening.</strong> Establish context and credibility.</li>
        <li><strong>Discovery.</strong> Understand the customer's situation.</li>
        <li><strong>Needs analysis.</strong> Identify priorities and requirements.</li>
        <li><strong>Solution.</strong> Present the relevant solution.</li>
        <li><strong>Demonstration.</strong> Show how it works.</li>
        <li><strong>Value.</strong> Explain relevant outcomes and economics.</li>
        <li><strong>Objections.</strong> Clarify and address concerns.</li>
        <li><strong>Proposal.</strong> Document the solution, scope, cost, and terms.</li>
        <li><strong>Follow-up.</strong> Continue the conversation appropriately.</li>
        <li><strong>Relationship.</strong> Deliver the promised value and maintain the customer relationship.</li>
      </ol>
      <p>Open → discover → analyze → solve → demonstrate → show value → handle concerns → propose → follow up → deliver → retain.</p>

      <hr />

      <h2>Sales Funnel Metrics</h2>
      <p><strong>Lead-to-Customer Conversion = Customers ÷ Qualified Leads × 100</strong></p>
      <p><strong>Proposal Win Rate = Accepted Proposals ÷ Total Proposals × 100</strong></p>
      <p><strong>Demo Conversion = Customers After Demo ÷ Qualified Demos × 100</strong></p>
      <p><strong>Average Deal Size = Total Sales Revenue ÷ Number of Deals</strong></p>
      <p><strong>Sales Cycle</strong> — average time from qualified opportunity to purchase.</p>
      <p><strong>CAC = Total Sales and Marketing Costs ÷ New Customers</strong></p>
      <p>These metrics help identify where the sales process is losing potential customers.</p>

      <hr />

      <h2>Sales Pipeline</h2>
      <p>A sales pipeline organizes opportunities according to their current stage.</p>
      <p>Lead → qualified → discovery → needs identified → demo/presentation → proposal → negotiation/decision → won → customer.</p>
      <p>Example: leads 100; qualified 50; discovery 30; demo 20; proposal 12; negotiation 7; won 5.</p>
      <p>This allows a business to identify bottlenecks. For example, if many proposals are being sent but few are accepted, possible issues include poor qualification, weak value communication, pricing, lack of trust, unsuitable prospects, unclear proposals, or unresolved objections.</p>
      <p>The numbers identify where to investigate; they do not automatically identify why.</p>

      <hr />

      <h2>Ethical Sales Principles</h2>
      <p><strong>Be honest.</strong> Do not make false claims.</p>
      <p><strong>Don't hide important costs.</strong> Customers should understand the financial commitment.</p>
      <p><strong>Don't manufacture urgency.</strong> Use deadlines only when they are real.</p>
      <p><strong>Don't manipulate objections.</strong> The purpose is to clarify concerns, not pressure customers into ignoring them.</p>
      <p><strong>Recommend appropriate solutions.</strong> If your product is not suitable, saying so can protect the relationship and reputation.</p>
      <p><strong>Protect customer information.</strong> Customer information gathered during sales should be handled appropriately.</p>
      <p><strong>Sell outcomes you can realistically support.</strong> Avoid guaranteeing results that depend on factors outside your control.</p>

      <hr />

      <h2>Complete Sales Technique Map</h2>
      <pre>{`SALES TECHNIQUES
                                │
       ┌────────────────────────┼────────────────────────┐
       ↓                        ↓                        ↓
    DISCOVER                 SOLVE                    CONVERT
       │                        │                        │
Discovery Questioning      Solution Selling       Objection Handling
       │                        │                        │
Needs Analysis             Value-Based Selling    Demonstration Selling
       │                        │                        │
Consultative Selling       Proposal Selling       Follow-Up Selling
       │
       └────────────────────────┬───────────────────────┘
                                ↓
                       Relationship Selling
                                ↓
                         Customer Retention
                                ↓
                          Repeat Revenue
                                ↓
                             Referrals
                                ↓
                             Growth`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li><strong>Start with the customer.</strong> Understand the situation before presenting the solution.</li>
        <li><strong>Ask before you pitch.</strong> Discovery creates the information needed for relevant selling.</li>
        <li><strong>Diagnose before recommending.</strong> Don't prescribe a solution without understanding the problem.</li>
        <li><strong>Sell outcomes, not just features.</strong> Features describe what the product does. Value explains why that matters.</li>
        <li><strong>Demonstrate relevant functionality.</strong> Show the customer how the product solves their specific problem.</li>
        <li><strong>Treat objections as information.</strong> A concern can reveal missing information, perceived risk, budget constraints, or poor fit.</li>
        <li><strong>Make proposals specific.</strong> Clearly define scope, deliverables, price, timeline, assumptions, responsibilities, and next steps.</li>
        <li><strong>Follow up with purpose.</strong> Every follow-up should ideally provide information, answer a question, or advance an agreed next step.</li>
        <li><strong>Build relationships through delivery.</strong> The strongest relationship selling happens when the business consistently delivers what it promised.</li>
        <li><strong>Measure the entire system.</strong> Leads → qualified leads → discovery → demos → proposals → conversions → revenue → retention → repeat purchases → referrals.</li>
      </ol>
      <p>The ultimate purpose of sales techniques is not simply to increase the number of transactions. A well-designed sales process helps the business identify appropriate customers, understand their needs, communicate relevant value, reduce uncertainty, create informed purchasing decisions, and build relationships that can produce sustainable revenue over time.</p>
    </LessonLayout>
  )
}
