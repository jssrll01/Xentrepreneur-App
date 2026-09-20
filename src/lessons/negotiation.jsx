import LessonLayout from '../components/LessonLayout'

export default function Negotiation() {
  return (
    <LessonLayout
      number="14"
      title="Negotiation"
      summary="10 frameworks to reach agreements that create value — BATNA, interests, packages, and terms that actually work."
    >
      <p>
        Negotiation is the structured process through which two or more parties
        communicate to reach an agreement about price, scope, responsibilities,
        timing, resources, risks, terms, or other conditions.
      </p>
      <p>Negotiation occurs whenever different parties have different preferences but enough shared interests to potentially reach an agreement.</p>
      <p>Examples include: customer and seller, business and supplier, employer and employee, two business partners, company and distributor, client and web developer, investor and startup, buyer and vendor.</p>
      <p>A negotiation is not necessarily about getting the other side to give in. A useful negotiation model is:</p>
      <pre>{`Different Positions
        ↓
Understand Interests
        ↓
Identify Alternatives
        ↓
Identify Shared Value
        ↓
Trade What Matters Differently
        ↓
Agree on Terms
        ↓
Document Agreement
        ↓
Execute & Review`}</pre>

      <hr />

      <h2>1. BATNA Analysis</h2>
      <h3>Definition</h3>
      <p>BATNA means Best Alternative To a Negotiated Agreement. It is the best realistic option you have if the current negotiation does not produce an acceptable agreement.</p>
      <p>In simple terms: "What will I do if we don't reach a deal?"</p>
      <p>BATNA is one of the most important concepts in negotiation because it determines how dependent you are on reaching a particular agreement.</p>
      <p>Negotiation → agreement (execute) OR no agreement (BATNA → alternative plan).</p>

      <h3>Example</h3>
      <p>You are hiring a developer. Developer A offers ₱30,000 for the project. You negotiate but cannot reach acceptable terms. Your alternative is Developer B at ₱32,000 with similar capabilities and a later delivery date. Developer B is part of your BATNA. Therefore, you know that paying ₱30,000 is not the only option.</p>

      <h3>Reservation point</h3>
      <p>A reservation point is the least favorable deal you are willing to accept before choosing your alternative.</p>
      <p>For a buyer: maximum acceptable price = ₱32,000.</p>
      <p>For a seller: minimum acceptable price = ₱25,000.</p>
      <p>If an offer falls outside the acceptable range, the BATNA may be preferable.</p>

      <h3>BATNA analysis process</h3>
      <ol>
        <li><strong>Identify alternatives.</strong> List realistic alternatives if the deal fails.</li>
        <li><strong>Evaluate each alternative.</strong> Consider cost, time, quality, risk, convenience, and opportunity cost.</li>
        <li><strong>Identify your best alternative.</strong> Choose the strongest realistic option.</li>
        <li><strong>Determine your reservation point.</strong> Identify the minimum acceptable outcome.</li>
        <li><strong>Improve your BATNA.</strong> The stronger your alternatives, the less dependent you are on one negotiation.</li>
      </ol>

      <h3>Example: supplier options</h3>
      <p>Supplier A — ₱100/unit, 3 days delivery, high quality, low risk. Supplier B — ₱92/unit, 8 days, medium quality, medium risk. Supplier C — ₱88/unit, 15 days, medium quality, high risk.</p>
      <p>If Supplier A is negotiating aggressively, knowing the alternatives prevents the business from assuming it has no choice.</p>

      <h3>Why BATNA matters</h3>
      <p>BATNA helps prevent accepting a bad agreement, negotiating from desperation, unrealistic demands, dependence on one supplier, and unnecessary concessions.</p>
      <p>A strong BATNA does not guarantee a successful negotiation, but it gives you a clearer decision boundary.</p>

      <hr />

      <h2>2. Interest-Based Negotiation</h2>
      <h3>Definition</h3>
      <p>Interest-based negotiation focuses on the underlying interests and needs of each party rather than only their stated positions.</p>
      <p><strong>Position:</strong> "I need ₱100,000."</p>
      <p><strong>Interest:</strong> "I need enough revenue to cover the project's resources and risk."</p>
      <p>The position is what someone says they want. The interest explains why they want it.</p>
      <p>Position ("What do you want?") → interest ("Why do you want it?") → options ("What solutions could satisfy the interest?").</p>

      <h3>Example</h3>
      <p>A client says: "The website must be finished in two weeks." The developer says: "I need six weeks." These positions appear incompatible.</p>
      <p>Discovery may reveal: client's interest is that the website must be ready for an upcoming product launch. Developer's interest is that the project needs enough time for quality assurance.</p>
      <p>Possible solution: Week 1–2 core launch version; Week 3–6 advanced features. The positions changed because the underlying interests were understood.</p>

      <h3>Common interests</h3>
      <p><strong>Buyer:</strong> affordability, quality, reliability, speed, low risk, flexibility.</p>
      <p><strong>Seller:</strong> profitability, predictable workload, payment certainty, manageable scope, reasonable risk.</p>
      <p><strong>Supplier:</strong> order volume, predictable demand, timely payment, long-term relationship.</p>

      <h3>Implementation</h3>
      <ol>
        <li>Listen to stated positions.</li>
        <li>Ask why they matter.</li>
        <li>Identify underlying interests.</li>
        <li>Identify your own interests.</li>
        <li>Find overlapping interests.</li>
        <li>Generate multiple options.</li>
        <li>Trade between differences.</li>
      </ol>

      <hr />

      <h2>3. Value Trading</h2>
      <h3>Definition</h3>
      <p>Value trading means exchanging concessions or benefits that have different values to each party. Instead of simply giving something away, you trade it for something you value.</p>
      <p>I give you X ↔ I receive Y. The key principle is: don't make unilateral concessions when you can create a trade.</p>

      <h3>Example</h3>
      <p>A web developer wants higher payment. The client wants faster delivery. Instead of simply reducing the price, they could negotiate: client gets faster delivery; developer gets additional rush fee. Or: client commits to a longer contract; developer offers a lower monthly rate. Both sides exchange something.</p>

      <h3>Value differences</h3>
      <p>Faster delivery — high value to buyer, medium cost to seller.</p>
      <p>Longer contract — medium value to buyer, high value to seller.</p>
      <p>Lower price — high value to buyer, high cost to seller.</p>
      <p>Case-study permission — low value to buyer, high value to seller.</p>
      <p>Flexible payment timing — high value to buyer, medium value to seller.</p>
      <p>The opportunity is to trade things that are relatively inexpensive for one side but valuable to the other.</p>

      <h3>Examples of negotiable variables</h3>
      <p>Price, quantity, delivery date, contract duration, payment schedule, warranty, support, features, scope, exclusivity, minimum order, renewal terms, training, and marketing support.</p>

      <hr />

      <h2>4. Package Negotiation</h2>
      <h3>Definition</h3>
      <p>Package negotiation involves negotiating several terms together rather than negotiating every issue independently.</p>
      <p>Instead of "Let's negotiate the price," you negotiate price, quantity, timeline, payment, support, scope, and contract length as a package.</p>

      <h3>Why package negotiation works</h3>
      <p>Different issues can have different values to each party.</p>
      <p>Buyer values: 1) price, 2) delivery, 3) warranty.</p>
      <p>Seller values: 1) contract length, 2) payment speed, 3) order volume.</p>
      <p>This creates trading opportunities.</p>

      <h3>Example</h3>
      <p>Instead of "Can you lower the price from ₱50,000 to ₱40,000?," the buyer could propose: ₱45,000 + 12-month contract + faster payment. The seller may value the longer relationship and payment certainty enough to consider the package.</p>

      <h3>Package negotiation table</h3>
      <p>Price — buyer preference lower; seller preference higher.</p>
      <p>Payment — buyer preference longer terms; seller preference faster.</p>
      <p>Quantity — buyer preference flexible; seller preference larger.</p>
      <p>Contract — buyer preference short; seller preference long.</p>
      <p>Delivery — buyer preference fast; seller preference flexible.</p>
      <p>Support — buyer preference more; seller preference limited.</p>
      <p>Negotiation becomes more productive when several variables are considered simultaneously.</p>

      <hr />

      <h2>5. Conditional Concessions</h2>
      <h3>Definition</h3>
      <p>A conditional concession is a concession given in exchange for something else.</p>
      <p>The basic structure is: "If you give X, I can give Y."</p>
      <p>Instead of "I'll reduce the price," use "If you commit to the 12-month contract, I can offer a lower monthly rate."</p>

      <h3>Examples</h3>
      <p><strong>Supplier:</strong> "If you increase the order to 1,000 units, we can reduce the unit price."</p>
      <p><strong>Customer:</strong> "If payment is made upfront, can you reduce the total price?"</p>
      <p><strong>Freelancer:</strong> "If we reduce the project scope, I can meet the lower budget."</p>
      <p><strong>Partnership:</strong> "If you provide distribution access, we can provide the technology."</p>

      <h3>Why it matters</h3>
      <p>Conditional concessions protect value, discourage one-sided bargaining, reveal priorities, create trades, and make concessions measurable.</p>

      <h3>Concession rule</h3>
      <p>Before giving a concession, ask: "What am I receiving in return?"</p>
      <p>Not every concession needs to be financial. You could receive faster payment, larger quantity, longer contract, reduced scope, referral, case-study permission, or scheduling flexibility.</p>

      <hr />

      <h2>6. Contract Negotiation</h2>
      <h3>Definition</h3>
      <p>Contract negotiation is the process of negotiating the legal and commercial terms that will govern the relationship between parties.</p>
      <p>Important areas can include scope, price, payment, deadlines, responsibilities, warranties, intellectual property, confidentiality, termination, liability, dispute resolution, renewal, and service levels.</p>

      <h3>Example: web development contract</h3>
      <p><strong>Scope</strong> — 10 pages, responsive design, contact form, basic CMS.</p>
      <p><strong>Payment</strong> — 30% start, 40% development milestone, 30% final delivery.</p>
      <p><strong>Timeline</strong> — 8 weeks from receipt of required materials.</p>
      <p><strong>Revision policy</strong> — two rounds of revisions included.</p>
      <p><strong>Additional work</strong> — features outside the agreed scope require a separate quotation.</p>
      <p>This reduces ambiguity.</p>

      <h3>Contract negotiation process</h3>
      <ol>
        <li><strong>Identify requirements.</strong> Determine what each party expects.</li>
        <li><strong>Identify risk.</strong> Ask: what could go wrong?</li>
        <li><strong>Define responsibilities.</strong> Who does what?</li>
        <li><strong>Define measurable terms.</strong> Avoid vague language where possible.</li>
        <li><strong>Negotiate disputed terms.</strong> Discuss alternatives.</li>
        <li><strong>Document agreements.</strong> Put important terms in writing.</li>
        <li><strong>Review before signing.</strong> For significant agreements, appropriate legal review may be necessary.</li>
      </ol>

      <hr />

      <h2>7. Vendor Negotiation</h2>
      <h3>Definition</h3>
      <p>Vendor negotiation is negotiation between a business and a supplier or service provider. It can cover price, quantity, quality, delivery, payment terms, minimum order quantity, warranty, support, contract length, returns, and service levels.</p>

      <h3>Example</h3>
      <p>Xmarket wants to purchase 500 product units. Initial offer: ₱300/unit. Instead of asking only "Can you lower the price?," the business could negotiate: 500 units + quarterly orders + faster payment + longer relationship → potentially better commercial terms. The actual terms depend on the supplier's economics and willingness.</p>

      <h3>Vendor negotiation factors: total cost</h3>
      <p>Don't evaluate only purchase price. Consider:</p>
      <p><strong>Total Cost = Purchase Price + Shipping + Storage + Defects + Returns + Administrative Costs</strong></p>
      <p>A cheaper supplier can have a higher total cost if quality or delivery performance is poor.</p>

      <h3>Vendor scorecard</h3>
      <p>Price (unit cost), quality (defect rate), delivery (on-time percentage), reliability (failure frequency), support (response time), flexibility (MOQ/payment terms), and risk (supply continuity).</p>

      <h3>Vendor negotiation strategy</h3>
      <p>Research market → know alternatives → calculate total cost → understand vendor interests → build package → trade variables → document terms → monitor performance.</p>

      <hr />

      <h2>8. Partnership Negotiation</h2>
      <h3>Definition</h3>
      <p>Partnership negotiation establishes how two businesses will cooperate and how value, responsibilities, risks, resources, and rewards will be distributed.</p>
      <p>Partnership negotiations can involve revenue sharing, responsibilities, ownership, investment, intellectual property, exclusivity, marketing, customer ownership, decision rights, termination, and performance requirements.</p>

      <h3>Example</h3>
      <p>A web developer partners with a marketing agency. Developer provides website development and technical support. Marketing agency provides customer acquisition, advertising, and lead generation.</p>
      <p>They then negotiate: who owns the customer relationship, revenue sharing, responsibilities, lead attribution, support obligations, and contract duration.</p>

      <h3>Partnership negotiation questions</h3>
      <p><strong>Value:</strong> what does each party contribute?</p>
      <p><strong>Responsibilities:</strong> who is responsible for what?</p>
      <p><strong>Economics:</strong> how is revenue or profit divided?</p>
      <p><strong>Risk:</strong> who carries which risks?</p>
      <p><strong>Control:</strong> who makes which decisions?</p>
      <p><strong>Customers:</strong> who owns the customer relationship?</p>
      <p><strong>Intellectual property:</strong> who owns technology, content, designs, or data?</p>
      <p><strong>Exit:</strong> what happens if the partnership ends?</p>

      <hr />

      <h2>9. Price Negotiation</h2>
      <h3>Definition</h3>
      <p>Price negotiation is the process of discussing and agreeing on the monetary amount paid for a product or service. Price is only one variable in a commercial agreement.</p>
      <p>Related variables include quantity, quality, scope, payment terms, delivery, warranty, support, and contract length.</p>

      <h3>Before negotiating price</h3>
      <p><strong>Know your cost.</strong> <strong>Cost = Direct Costs + Allocated Relevant Overhead</strong></p>
      <p><strong>Desired margin.</strong> <strong>Gross Margin = (Revenue − Cost) ÷ Revenue × 100</strong></p>
      <p>If a service costs ₱20,000 to deliver and sells for ₱30,000: gross profit = ₱30,000 − ₱20,000 = ₱10,000. Gross margin = ₱10,000 ÷ ₱30,000 × 100 = 33.33%.</p>
      <p><strong>Reservation point.</strong> Determine the lowest acceptable price based on your economics and alternatives.</p>
      <p><strong>Customer value.</strong> Understand what the customer receives and how much that value matters to them.</p>

      <h3>Price negotiation example</h3>
      <p>Initial price: ₱50,000. Customer: "Can you do ₱35,000?" Instead of immediately accepting or rejecting:</p>
      <p><strong>Option A:</strong> ₱35,000 — reduced scope.</p>
      <p><strong>Option B:</strong> ₱45,000 — full scope, longer payment terms.</p>
      <p><strong>Option C:</strong> ₱42,000 — full scope, upfront payment.</p>
      <p>The exact numbers are illustrative. The principle is to negotiate the whole commercial structure, not blindly reduce price.</p>

      <h3>Price negotiation mistakes</h3>
      <p>Discounting immediately, negotiating against yourself, ignoring costs, competing only on price, giving discounts without conditions, failing to explain scope, and forgetting long-term costs.</p>

      <hr />

      <h2>10. Scope Negotiation</h2>
      <h3>Definition</h3>
      <p>Scope negotiation determines exactly what is included and excluded from a product, project, or service agreement.</p>
      <p>Scope is especially important in software development, web development, consulting, construction, design, marketing, and custom manufacturing.</p>

      <h3>Example</h3>
      <p>Client says: "Build me an ecommerce website." That is too vague for accurate project planning.</p>
      <p>A negotiated scope might specify — <strong>Included:</strong> homepage, product catalog, product pages, search, cart, checkout, admin dashboard, responsive design. <strong>Not included:</strong> mobile native app, custom AI system, advanced analytics, custom payment gateway, ongoing advertising.</p>

      <h3>Scope negotiation process</h3>
      <ol>
        <li><strong>Define objective.</strong> What is the project supposed to accomplish?</li>
        <li><strong>Define deliverables.</strong> What exactly will be delivered?</li>
        <li><strong>Define exclusions.</strong> What is explicitly not included?</li>
        <li><strong>Define assumptions.</strong> What must the customer provide?</li>
        <li><strong>Define acceptance criteria.</strong> How will completion be determined?</li>
        <li><strong>Define change process.</strong> What happens when the customer wants additional work?</li>
      </ol>

      <h3>Scope creep</h3>
      <p>Scope creep occurs when project requirements gradually expand without corresponding adjustments to time, price, resources, or deadlines.</p>
      <p>Example: 5-page website → "Can you add a blog?" → "Can you add ecommerce?" → "Can you add member accounts?" → "Can you add an app?" The project has changed dramatically.</p>
      <p><strong>Project Requirements → Time + Resources + Cost</strong></p>
      <p>When scope increases significantly, at least one of the following often needs adjustment: timeline, budget, resources, quality expectations, or other features.</p>

      <hr />

      <h2>BATNA, Reservation Point, and ZOPA</h2>
      <p>These three concepts work together.</p>
      <p><strong>BATNA</strong> — your best alternative if there is no agreement.</p>
      <p><strong>Reservation point</strong> — the worst deal you are willing to accept.</p>
      <p><strong>ZOPA</strong> — Zone of Possible Agreement — the range where acceptable outcomes for both sides overlap.</p>

      <h3>Example</h3>
      <p>Seller minimum acceptable price ₱25,000. Buyer maximum acceptable price ₱35,000. Potential ZOPA: ₱25,000 to ₱35,000. An agreement could potentially occur somewhere within that range.</p>
      <p>If seller minimum = ₱40,000 and buyer maximum = ₱35,000, there is no price-based ZOPA. However, other variables might create an agreement: longer contract, larger quantity, reduced scope, faster payment, or different delivery schedule.</p>

      <hr />

      <h2>Positions vs Interests</h2>
      <p>One of the most important negotiation distinctions is:</p>
      <p><strong>Position</strong> — "What I want."</p>
      <p><strong>Interest</strong> — "Why I want it."</p>
      <p><strong>Options</strong> — "Different ways to satisfy the interest."</p>

      <h3>Example</h3>
      <p>Client position: "I want the project for ₱20,000." Underlying interest: "I have a limited initial budget."</p>
      <p>Developer position: "The project must cost ₱35,000." Underlying interest: "The project requires enough resources to be profitable."</p>
      <p>Possible solution: reduce initial scope. Phase 1: ₱20,000 for core functionality. Phase 2: additional features later investment.</p>
      <p>The negotiation shifts from "₱20,000 vs ₱35,000" to "How can we structure the project so both sides' important interests are addressed?"</p>

      <hr />

      <h2>Negotiation Matrix</h2>
      <ul>
        <li><strong>BATNA analysis</strong> — understand alternatives — any important negotiation</li>
        <li><strong>Interest-based negotiation</strong> — understand underlying needs — conflicting positions</li>
        <li><strong>Value trading</strong> — exchange different-value items — multiple negotiable variables</li>
        <li><strong>Package negotiation</strong> — negotiate several terms together — complex deals</li>
        <li><strong>Conditional concessions</strong> — trade concessions — price/terms discussions</li>
        <li><strong>Contract negotiation</strong> — establish legal/commercial terms — formal agreements</li>
        <li><strong>Vendor negotiation</strong> — improve supplier arrangement — procurement</li>
        <li><strong>Partnership negotiation</strong> — structure cooperation — strategic partnerships</li>
        <li><strong>Price negotiation</strong> — agree on monetary terms — purchases/sales</li>
        <li><strong>Scope negotiation</strong> — define project boundaries — services/projects</li>
      </ul>

      <hr />

      <h2>Complete Negotiation Process</h2>
      <ol>
        <li><strong>Prepare.</strong> Research, BATNA, costs, interests, alternatives, objectives.</li>
        <li><strong>Discover.</strong> Ask questions, understand interests, identify constraints.</li>
        <li><strong>Define.</strong> Issues, priorities, scope, requirements.</li>
        <li><strong>Create options.</strong> Generate packages, find trades, explore alternatives.</li>
        <li><strong>Negotiate.</strong> Exchange proposals, conditional concessions, value trading.</li>
        <li><strong>Evaluate.</strong> Compare against BATNA, check economics, check risks.</li>
        <li><strong>Agree.</strong> Document terms, responsibilities, price, scope, timeline.</li>
        <li><strong>Execute.</strong> Deliver, monitor, communicate.</li>
        <li><strong>Review.</strong> Measure performance, resolve issues, renegotiate when appropriate.</li>
      </ol>

      <hr />

      <h2>Negotiation Preparation Checklist</h2>
      <p>Before entering an important negotiation, identify:</p>
      <p><strong>Your objectives.</strong> What do I ideally want? What outcomes are important?</p>
      <p><strong>Your minimum acceptable outcome.</strong> What would make the agreement unacceptable?</p>
      <p><strong>BATNA.</strong> What happens if no agreement is reached?</p>
      <p><strong>Their likely interests.</strong> What do they care about? What constraints might they have?</p>
      <p><strong>Negotiable variables.</strong> Price, quantity, scope, timing, payment, support, contract length, quality, risk, exclusivity.</p>
      <p><strong>Potential trades.</strong> What can I give that is relatively valuable to them? What can they give that is relatively valuable to me?</p>
      <p><strong>Evidence.</strong> Market prices, costs, performance data, requirements, alternatives.</p>

      <hr />

      <h2>Negotiation Mistakes</h2>
      <p><strong>1. Negotiating without preparation.</strong> Entering a negotiation without knowing your alternatives can lead to poor decisions.</p>
      <p><strong>2. Focusing only on price.</strong> Many agreements have numerous negotiable variables.</p>
      <p><strong>3. Making unconditional concessions.</strong> Giving discounts without receiving anything in return can unnecessarily reduce value.</p>
      <p><strong>4. Ignoring the other party's interests.</strong> Understanding their needs can reveal creative solutions.</p>
      <p><strong>5. Revealing your maximum or minimum too early.</strong> Your reservation point should be treated as an internal decision boundary, not automatically as your opening position.</p>
      <p><strong>6. Negotiating one issue at a time.</strong> Complex negotiations often produce better possibilities when several variables are considered together.</p>
      <p><strong>7. Failing to document agreements.</strong> A verbal understanding can later be interpreted differently.</p>
      <p><strong>8. Agreeing to vague scope.</strong> Ambiguity creates disputes and scope creep.</p>
      <p><strong>9. Ignoring implementation.</strong> A negotiated agreement has little value if neither party can realistically execute it.</p>
      <p><strong>10. Damaging the relationship.</strong> Winning one concession at the expense of trust can create long-term costs.</p>

      <hr />

      <h2>Negotiation Metrics</h2>
      <p>Negotiation can also be evaluated quantitatively.</p>
      <p><strong>Savings = Baseline Cost − Negotiated Cost</strong></p>
      <p>Example: baseline ₱100,000, negotiated ₱90,000. Savings = ₱10,000.</p>
      <p><strong>Savings % = (Baseline − Negotiated) ÷ Baseline × 100</strong></p>
      <p>Example: (₱100,000 − ₱90,000) ÷ ₱100,000 × 100 = 10%.</p>
      <p><strong>Total Contract Value = Initial Contract Value + Expected Additional Contract Value</strong></p>
      <p><strong>Total Cost of Ownership = Purchase + Implementation + Maintenance + Support + Switching + Other Relevant Costs</strong></p>
      <p>A negotiated purchase price should therefore be evaluated alongside the broader economics.</p>

      <hr />

      <h2>Negotiation Strategy Map</h2>
      <pre>{`NEGOTIATION
                              │
              ┌───────────────┴───────────────┐
              ↓                               ↓
          PREPARATION                      RELATIONSHIP
              │                               │
       ┌──────┼──────┐                  Trust & Communication
       ↓      ↓      ↓                         │
     BATNA  Costs  Interests                   │
       │      │      │                         │
       └──────┼──────┘                         │
              ↓                               │
        Negotiation Zone                      │
              ↓                               │
       ┌──────┼──────────────┐                │
       ↓      ↓              ↓                │
   Value    Package     Conditional           │
   Trading  Negotiation  Concessions          │
       │      │              │                │
       └──────┼──────────────┘                │
              ↓                               │
       Contract / Vendor /                    │
       Partnership / Price / Scope            │
              ↓                               │
           AGREEMENT                           │
              ↓                               │
          EXECUTION ──────────────────────────┘
              ↓
          PERFORMANCE
              ↓
        REVIEW / RENEWAL`}</pre>

      <hr />

      <h2>Core Principles</h2>
      <ol>
        <li><strong>Prepare before negotiating.</strong> Know your objectives, alternatives, costs, risks, and priorities.</li>
        <li><strong>Know your BATNA.</strong> Never evaluate an agreement without considering what happens if there is no agreement.</li>
        <li><strong>Separate positions from interests.</strong> The stated demand may not be the underlying need.</li>
        <li><strong>Expand the negotiation beyond price.</strong> Price is only one variable.</li>
        <li><strong>Trade instead of simply conceding.</strong> Look for exchanges where each side receives something valuable.</li>
        <li><strong>Use conditional concessions.</strong> A concession can become part of a trade rather than a one-sided giveaway.</li>
        <li><strong>Negotiate packages.</strong> Price, scope, timing, payment, quantity, and support can often be negotiated together.</li>
        <li><strong>Define scope precisely.</strong> Clear boundaries prevent misunderstandings and scope creep.</li>
        <li><strong>Evaluate total economics.</strong> A lower price does not automatically mean a lower total cost.</li>
        <li><strong>Document the agreement.</strong> Important commitments should be written clearly.</li>
        <li><strong>Protect long-term relationships.</strong> A sustainable agreement should be workable for both sides.</li>
        <li><strong>Know when not to agree.</strong> Negotiation is not always about reaching an agreement. Sometimes the appropriate outcome is to use the BATNA when the available agreement does not satisfy the necessary requirements.</li>
      </ol>

      <h3>Strong negotiation</h3>
      <p>Strong Negotiation = Preparation + BATNA + Interest Understanding + Value Creation + Value Trading + Clear Terms + Risk Awareness + Good Communication + Proper Documentation.</p>
      <p>A strong negotiator therefore does more than bargain over price. They prepare alternatives, understand interests, create multiple options, trade across variables, manage concessions, define clear terms, and evaluate whether the final agreement is better than the available alternatives.</p>
    </LessonLayout>
  )
}
