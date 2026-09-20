import LessonLayout from '../components/LessonLayout'

export default function Improvement() {
  return (
    <LessonLayout
      number="19"
      title="Improvement"
      summary="10 techniques to systematically find problems, test changes, and make products, processes, and decisions measurably better."
    >
      <h2>What Is Business Improvement?</h2>
      <p>
        Business improvement is the systematic process of identifying problems,
        discovering opportunities, testing changes, measuring results, and
        continuously making products, services, processes, and business
        decisions better.
      </p>
      <p>Improvement is not simply "changing things." A change becomes an improvement only when it produces a meaningful result.</p>
      <p>A simple improvement cycle is:</p>
      <pre>{`OBSERVE
   ↓
IDENTIFY PROBLEM
   ↓
ANALYZE
   ↓
GENERATE SOLUTIONS
   ↓
TEST
   ↓
MEASURE
   ↓
IMPLEMENT
   ↓
MONITOR
   ↓
IMPROVE AGAIN`}</pre>

      <h3>Main areas of business improvement</h3>
      <ul>
        <li><strong>Product</strong> — features, quality, usability</li>
        <li><strong>Marketing</strong> — ads, messaging, targeting</li>
        <li><strong>Sales</strong> — conversion, sales process</li>
        <li><strong>Customer experience</strong> — support, checkout, communication</li>
        <li><strong>Operations</strong> — speed, efficiency, errors</li>
        <li><strong>Technology</strong> — performance, automation, reliability</li>
        <li><strong>Finance</strong> — costs, margins, cash flow</li>
        <li><strong>Retention</strong> — repeat purchases, renewals</li>
        <li><strong>Management</strong> — productivity, workflows, decisions</li>
      </ul>

      <h3>Improvement vs optimization</h3>
      <p><strong>Improvement</strong> means making something better.</p>
      <p><strong>Optimization</strong> means systematically finding a better-performing configuration, often under constraints such as time, money, capacity, or resources.</p>
      <p>Example: improving checkout from 5 steps to 3 steps = improvement. Testing different checkout designs and continuously adjusting them to maximize completed purchases = optimization.</p>

      <hr />

      <h2>1. A/B Testing</h2>
      <h3>Definition</h3>
      <p>A/B testing is a controlled experiment where two versions of something are compared to determine which produces a better measurable result. A = control/current version. B = variation/new version.</p>

      <h3>Example</h3>
      <p>An Xmarket product page currently has "Buy Now." You create Version B: "Get This Deal." You randomly show visitors either version.</p>
      <p>Suppose version A gets 5,000 visitors and 200 purchases (4.0% conversion). Version B gets 5,000 visitors and 240 purchases (4.8% conversion). Version B produced a higher observed conversion rate.</p>
      <p>However, you should not immediately assume B is permanently better. You should consider sample size, experiment duration, randomization, statistical uncertainty, seasonality, and whether other changes occurred simultaneously.</p>

      <h3>How to implement A/B testing</h3>
      <ol>
        <li><strong>Choose one objective.</strong> Examples: increase purchases, increase registrations, increase email signups, increase product-page engagement, reduce checkout abandonment.</li>
        <li><strong>Choose one variable.</strong> Examples: button text, headline, product image, price presentation, form length, page layout. Avoid changing many unrelated variables at once unless you're deliberately running a multivariate experiment.</li>
        <li><strong>Create the hypothesis.</strong> Example: "Changing the checkout button from 'Continue' to 'Complete Order' will increase completed purchases because the action is clearer."</li>
        <li><strong>Randomly divide users.</strong> Traffic splits 50% to A and 50% to B.</li>
        <li><strong>Collect enough data.</strong> Don't stop an experiment simply because one version looks better after a small number of observations.</li>
        <li><strong>Analyze the result.</strong> Conversion Rate = Conversions ÷ Visitors × 100. Relative Improvement = (B − A) ÷ A × 100.</li>
        <li><strong>Implement the result carefully.</strong> If the experiment provides sufficiently reliable evidence that B performs better against the chosen objective, implement B and continue monitoring it.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Reduces guesswork</li>
        <li>Uses real customer behavior</li>
        <li>Makes changes measurable</li>
        <li>Can improve conversion rates</li>
        <li>Encourages experimentation</li>
        <li>Helps validate ideas before large-scale implementation</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Small sample sizes</li>
        <li>Poor experiment design</li>
        <li>Testing too many variables</li>
        <li>Seasonal effects</li>
        <li>Technical tracking errors</li>
        <li>Stopping experiments too early</li>
        <li>Optimizing one metric while damaging another</li>
      </ul>

      <h3>Important principle</h3>
      <p>Test changes instead of assuming they will work.</p>

      <hr />

      <h2>2. Root-Cause Analysis</h2>
      <h3>Definition</h3>
      <p>Root-cause analysis (RCA) is a structured method for discovering the underlying cause of a problem rather than merely fixing its visible symptom.</p>
      <p>Problem → immediate cause → underlying cause → systemic cause → root cause.</p>

      <h3>Example</h3>
      <p>An online store receives complaints that orders are arriving late. The visible problem: orders are late. But the actual chain might be: late orders → orders shipped late → warehouse processing delayed → picking takes too long → inventory locations are poorly organized → no standardized warehouse layout.</p>
      <p>Fixing individual late orders doesn't solve the underlying problem.</p>

      <h3>Root-cause analysis process</h3>
      <ol>
        <li>Define the problem.</li>
        <li>Collect evidence.</li>
        <li>Identify possible causes.</li>
        <li>Separate symptoms from causes.</li>
        <li>Investigate relationships.</li>
        <li>Identify root causes.</li>
        <li>Develop corrective actions.</li>
        <li>Implement the solution.</li>
        <li>Measure whether the problem decreases.</li>
        <li>Monitor for recurrence.</li>
      </ol>

      <h3>Useful RCA tools</h3>
      <p>Five Whys, Fishbone/Ishikawa diagram, Pareto analysis, process mapping, data analysis, failure-mode analysis, customer feedback, and incident logs.</p>

      <h3>Root cause vs symptom</h3>
      <ul>
        <li>Website is slow → possible root cause: inefficient database queries.</li>
        <li>Customers complain → possible root cause: poor support workflow.</li>
        <li>Stockouts occur → possible root cause: inaccurate demand forecasting.</li>
        <li>Employees make repeated errors → possible root cause: weak process documentation/training.</li>
        <li>Customers abandon checkout → possible root cause: unexpected fees or confusing process.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Prevents recurring problems</li>
        <li>Reduces waste</li>
        <li>Improves processes</li>
        <li>Helps prioritize corrective actions</li>
        <li>Creates long-term solutions</li>
      </ul>

      <h3>Important principle</h3>
      <p>Fix causes, not just symptoms.</p>

      <hr />

      <h2>3. Five Whys</h2>
      <h3>Definition</h3>
      <p>Five Whys is a root-cause technique where you repeatedly ask "Why?" to move from an observed problem toward its underlying cause. The number five is not mandatory. Sometimes three questions are enough; sometimes more than five are necessary.</p>

      <h3>Example: wrong product received</h3>
      <p><strong>Problem:</strong> a customer received the wrong product.</p>
      <p><strong>Why 1:</strong> Why did the customer receive the wrong product? → The warehouse picked the wrong item.</p>
      <p><strong>Why 2:</strong> Why did the warehouse pick the wrong item? → Two products had similar packaging.</p>
      <p><strong>Why 3:</strong> Why were similar products stored together? → The storage system grouped products by supplier rather than product type.</p>
      <p><strong>Why 4:</strong> Why was the storage system designed that way? → The warehouse layout had never been redesigned as the product catalog expanded.</p>
      <p><strong>Why 5:</strong> Why had it never been redesigned? → There was no scheduled inventory-layout review process.</p>
      <p><strong>Potential systemic cause:</strong> no formal warehouse-layout review process.</p>

      <h3>How to use Five Whys properly</h3>
      <ol>
        <li><strong>Start with a specific problem.</strong> Bad: "The business is doing poorly." Better: "Checkout completion fell from 4.5% to 3.2% during the last month."</li>
        <li><strong>Use evidence.</strong> Don't answer every "why" using assumptions.</li>
        <li><strong>Follow the actual causal chain.</strong> Each answer should logically explain the previous answer.</li>
        <li><strong>Avoid blaming people.</strong> Instead of "Employee X made a mistake," investigate: why did the process allow the mistake to happen?</li>
        <li><strong>Verify the final cause.</strong> A plausible explanation isn't automatically the root cause.</li>
      </ol>

      <h3>Five Whys vs Root-Cause Analysis</h3>
      <p>Root-cause analysis is the broader methodology. Five Whys is one technique used within RCA, alongside Fishbone diagram, Pareto analysis, process mapping, data analysis, and failure analysis.</p>

      <hr />

      <h2>4. Pareto Analysis</h2>
      <h3>Definition</h3>
      <p>Pareto analysis is a prioritization technique based on the idea that a relatively small number of causes can sometimes account for a large proportion of problems. It is commonly associated with the 80/20 rule, but 80/20 is not a law. Real-world distributions can be 70/30, 90/10, 60/40, etc.</p>

      <h3>Example</h3>
      <p>Suppose an online business receives 1,000 customer complaints: late delivery 400, damaged products 250, wrong products 150, payment problems 100, website issues 60, other 40. The first few categories account for most complaints.</p>
      <p>Instead of attempting to solve dozens of problems simultaneously, management can investigate the largest contributors first.</p>

      <h3>Pareto process</h3>
      <p>Collect problems → group causes → count frequency/cost → sort largest to smallest → calculate cumulative percentage → prioritize major contributors → investigate causes.</p>

      <h3>Cumulative percentage</h3>
      <p><strong>Cumulative Percentage = Cumulative Problems ÷ Total Problems × 100</strong></p>

      <h3>How to implement</h3>
      <ol>
        <li>Define the problem.</li>
        <li>Collect data.</li>
        <li>Categorize problems.</li>
        <li>Count occurrences or financial impact.</li>
        <li>Sort categories from largest to smallest.</li>
        <li>Calculate cumulative impact.</li>
        <li>Focus improvement efforts on significant contributors.</li>
        <li>Re-measure after corrective action.</li>
      </ol>

      <h3>Pareto can measure more than frequency</h3>
      <p>You can rank problems by number of incidents, financial loss, customer complaints, downtime, hours wasted, defective units, lost revenue, or support tickets.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Helps prioritize</li>
        <li>Prevents scattered effort</li>
        <li>Makes large problem areas visible</li>
        <li>Supports resource allocation</li>
        <li>Useful for quality and operations</li>
      </ul>

      <h3>Risk</h3>
      <p>The most frequent problem isn't always the most expensive problem. For example: 500 minor errors costing ₱5 each = ₱2,500 versus 20 major errors costing ₱1,000 each = ₱20,000. Therefore, analyze impact, not frequency alone.</p>

      <hr />

      <h2>5. Customer Feedback Analysis</h2>
      <h3>Definition</h3>
      <p>Customer feedback analysis is the systematic collection, organization, classification, and interpretation of customer opinions, complaints, suggestions, reviews, and experiences.</p>
      <p>Customer feedback can reveal problems, unmet needs, product opportunities, usability problems, service issues, pricing concerns, feature requests, reasons for churn, and reasons customers remain loyal.</p>

      <h3>Sources of feedback</h3>
      <p>Surveys, reviews, support tickets, interviews, social media, ratings, chat conversations, cancellation reasons, and product comments.</p>

      <h3>Feedback analysis process</h3>
      <ol>
        <li><strong>Collect.</strong> Examples: surveys, reviews, support tickets, interviews, ratings, chat conversations, cancellation reasons, product comments.</li>
        <li><strong>Categorize.</strong> Example: product ("Add more sizes"), price ("Too expensive"), delivery ("Arrived late"), usability ("Checkout is confusing"), support ("Response took too long").</li>
        <li><strong>Determine sentiment.</strong> Feedback can be classified as positive, neutral, or negative.</li>
        <li><strong>Identify frequency.</strong> How often is the same issue mentioned?</li>
        <li><strong>Determine impact.</strong> A rare problem affecting high-value customers may deserve more attention than a frequent minor complaint.</li>
        <li><strong>Identify patterns.</strong> Look for repeated themes.</li>
        <li><strong>Convert findings into actions.</strong> Feedback → theme → problem → priority → action → measurement.</li>
      </ol>

      <h3>Example</h3>
      <p>Suppose Xmarket receives: "The product is good, but checkout takes too long." If 300 customers report similar problems, checkout should become a candidate for improvement.</p>
      <p>Possible investigation: feedback → checkout takes too long → why? → too many form fields → why? → old checkout process → improvement → reduce unnecessary fields → A/B test → measure completed orders.</p>

      <h3>Important distinction</h3>
      <p>Feature request ≠ automatically good feature. A customer saying "Add Feature X" doesn't necessarily mean Feature X should be built. Investigate: what problem are they trying to solve? How many customers have the problem? How frequently does it occur? How valuable is the affected segment? What would implementation cost? Are there simpler solutions?</p>

      <hr />

      <h2>6. Cohort Analysis</h2>
      <h3>Definition</h3>
      <p>Cohort analysis examines groups of customers who share a common starting characteristic and tracks their behavior over time.</p>
      <p>A cohort could be customers who registered in January, made their first purchase in March, came from Facebook advertising, purchased a particular product, or joined through a referral campaign.</p>

      <h3>Why cohorts matter</h3>
      <p>Overall averages can hide important differences. Suppose a business has 40% overall customer retention. That doesn't tell you whether new customers are improving, older customers are declining, one acquisition channel produces better customers, or a recent product change improved retention. Cohort analysis reveals these patterns.</p>

      <h3>Example</h3>
      <p>January cohort: 100% (month 1), 50% (month 2), 35% (month 3), 28% (month 4). February cohort: 100%, 55%, 40%, 34%. March cohort: 100%, 60%, 45%, 39%.</p>
      <p>The newer cohorts show higher observed retention at the same customer age. That can indicate improvement, although you still need to investigate whether other factors explain the difference.</p>

      <h3>Cohort retention calculation</h3>
      <p><strong>Retention = Customers Remaining ÷ Customers in Original Cohort × 100</strong></p>

      <h3>Cohort dimensions</h3>
      <p>Time (January customers), channel (Facebook customers), product (customers buying Product A), geography (customers from Region X), customer segment (business customers), and campaign (customers from Campaign A).</p>

      <h3>Cohort analysis process</h3>
      <p>Identify cohort → define starting point → track behavior → measure over time → compare cohorts → find patterns → investigate causes → improve.</p>

      <h3>Useful metrics</h3>
      <p>Retention, repeat purchase, revenue per customer, LTV, churn, activation, subscription renewal, and engagement.</p>

      <h3>Cohort vs general analytics</h3>
      <p>General analytics: "Our retention is 35%." Cohort analysis: "Customers acquired in March retained at a higher rate than customers acquired in January at the same customer age." The second view is more useful for diagnosing changes over time.</p>

      <hr />

      <h2>7. Funnel Analysis</h2>
      <h3>Definition</h3>
      <p>Funnel analysis examines how people move through sequential stages of a process and identifies where they drop out.</p>
      <p>A sales funnel might look like: visitors 10,000 → product views 6,000 → add to cart 2,000 → checkout 1,200 → purchase 500.</p>
      <p>The funnel helps answer: where are potential customers being lost?</p>

      <h3>Conversion rate</h3>
      <p><strong>Conversion Rate = Users who advance ÷ Users entering stage × 100</strong></p>
      <p>For example: 500 ÷ 1,200 × 100 = 41.7% from checkout to purchase.</p>

      <h3>Funnel analysis process</h3>
      <ol>
        <li>Define the journey.</li>
        <li>Identify stages.</li>
        <li>Collect data for each stage.</li>
        <li>Calculate conversion between stages.</li>
        <li>Identify major drop-offs.</li>
        <li>Investigate causes.</li>
        <li>Test improvements.</li>
        <li>Measure the new funnel.</li>
      </ol>

      <h3>Example</h3>
      <p>Landing page 10,000 users. Product page 7,000 (70% conversion). Add to cart 2,500 (35.7%). Checkout 1,800 (72%). Purchase 600 (33.3%).</p>
      <p>The largest stage-to-stage percentage drop occurs between product page → add to cart and checkout → purchase. These deserve investigation.</p>

      <h3>Funnel types</h3>
      <p><strong>Marketing funnel</strong> — awareness → interest → consideration → purchase.</p>
      <p><strong>Ecommerce funnel</strong> — visit → product view → add to cart → checkout → purchase.</p>
      <p><strong>SaaS funnel</strong> — visitor → signup → activation → trial → paid.</p>

      <h3>Funnel optimization</h3>
      <p>Find biggest drop → investigate cause → create hypothesis → test solution → measure conversion → repeat.</p>

      <h3>Important principle</h3>
      <p>Don't automatically optimize the stage with the lowest conversion rate. Instead ask: which improvement opportunity has the greatest potential business impact?</p>

      <hr />

      <h2>8. Retention Analysis</h2>
      <h3>Definition</h3>
      <p>Retention analysis measures how effectively a business keeps customers, users, subscribers, or clients over time. Acquisition brings customers in. Retention determines how many continue.</p>
      <p>Acquisition → first transaction → activation → repeat usage → repeat purchase → long-term customer.</p>

      <h3>Customer retention rate</h3>
      <p><strong>CRR = (E − N) ÷ S × 100</strong></p>
      <p>Where E = customers at end of period; N = new customers acquired during period; S = customers at start of period.</p>
      <p>Example: start 1,000 customers; new customers 200; end 900. CRR = (900 − 200) ÷ 1,000 × 100 = 70%.</p>

      <h3>Churn rate</h3>
      <p><strong>Churn Rate = Customers Lost ÷ Customers at Start × 100</strong></p>
      <p>Retention and churn should be interpreted according to the business model and measurement period.</p>

      <h3>Retention analysis dimensions</h3>
      <p>Analyze retention by acquisition channel, customer cohort, product, geography, customer type, subscription plan, purchase frequency, and customer value.</p>
      <p>If one acquisition source produces customers who leave much faster, investigate why.</p>

      <h3>Retention improvement methods</h3>
      <p>Better onboarding, customer education, customer support, loyalty programs, personalized recommendations, product improvements, win-back campaigns, subscription incentives, and better service reliability.</p>

      <h3>Retention vs acquisition</h3>
      <p>Acquire customer → convert customer → retain customer → increase customer value → referral → acquire more customers.</p>
      <p>Retention therefore influences economics such as LTV and the amount a business can sustainably spend on acquisition.</p>

      <hr />

      <h2>9. Process Optimization</h2>
      <h3>Definition</h3>
      <p>Process optimization is the systematic improvement of a workflow so that it achieves its desired outcome with less waste, fewer errors, better quality, lower cost, or faster execution.</p>
      <p>A process is: input → activity 1 → activity 2 → activity 3 → output.</p>
      <p>Example (order fulfillment): customer order → payment verification → inventory check → picking → packing → shipping → delivery.</p>

      <h3>Optimization questions</h3>
      <p>Which steps are necessary? Which steps create value? Which steps cause delays? Which steps create errors? Which steps can be automated? Where is the bottleneck? Can two steps be combined? Can approvals be simplified?</p>

      <h3>Process optimization methods</h3>
      <ol>
        <li><strong>Eliminate.</strong> Remove unnecessary activities.</li>
        <li><strong>Simplify.</strong> Reduce complexity.</li>
        <li><strong>Standardize.</strong> Create consistent procedures.</li>
        <li><strong>Automate.</strong> Use software or machines for repetitive work.</li>
        <li><strong>Parallelize.</strong> Perform independent activities simultaneously. Instead of sequential A → B → C → D, run B and C in parallel.</li>
        <li><strong>Reduce handoffs.</strong> Every handoff can introduce delay, miscommunication, errors, and accountability problems.</li>
        <li><strong>Remove bottlenecks.</strong> Improve the slowest constraint limiting the entire system.</li>
      </ol>

      <h3>Process performance metrics</h3>
      <p><strong>Cycle Time = Finish Time − Start Time</strong></p>
      <p><strong>Throughput = Units Completed ÷ Time</strong></p>
      <p><strong>Error Rate = Errors ÷ Total Transactions × 100</strong></p>
      <p><strong>Cost per Transaction = Total Process Cost ÷ Transactions</strong></p>

      <h3>Process optimization example</h3>
      <p>Before: order → employee checks payment → employee checks inventory → employee creates invoice → employee sends confirmation → employee creates shipping order.</p>
      <p>After automation: order → payment automatically verified → inventory automatically checked → invoice generated → confirmation sent → shipping order created.</p>
      <p>The goal is not simply fewer employees or fewer steps. The goal is: better process performance while preserving quality and control.</p>

      <hr />

      <h2>10. Continuous Improvement</h2>
      <h3>Definition</h3>
      <p>Continuous improvement is the ongoing practice of making repeated, measurable improvements rather than relying on one large transformation.</p>
      <p>A common model is the PDCA cycle: Plan → Do → Check → Act → Plan (repeated).</p>

      <h3>Plan</h3>
      <p>Identify: problem, current performance, target, hypothesis, proposed change, measurement method.</p>

      <h3>Do</h3>
      <p>Implement the change on an appropriate scale. For example: test the new checkout design with a controlled portion of traffic.</p>

      <h3>Check</h3>
      <p>Compare results with the baseline. Questions: did performance improve? By how much? Did quality change? Did costs change? Did another metric become worse?</p>

      <h3>Act</h3>
      <p>If the change works: standardize and monitor it. If it doesn't: learn from the result and create the next experiment.</p>

      <h3>Example</h3>
      <p>Current: average customer support response = 12 hours. Target: under 4 hours.</p>
      <p>Plan: introduce automatic ticket routing. Do: test routing on one support category. Check: response time decreases to 3.5 hours without increasing error rates. Act: expand the workflow and monitor it. Then begin another improvement cycle.</p>

      <hr />

      <h2>How the Improvement Tools Connect</h2>
      <p>These techniques are not isolated. They form an integrated improvement system.</p>
      <pre>{`BUSINESS PROBLEM
                           │
                           ▼
                    DATA COLLECTION
                           │
          ┌────────────────┼────────────────┐
          ↓                ↓                ↓
     Feedback          Funnel Data      Retention Data
          │                │                │
          └────────────────┼────────────────┘
                           ↓
                     IDENTIFY ISSUE
                           │
                           ▼
                   ROOT-CAUSE ANALYSIS
                           │
              ┌────────────┼────────────┐
              ↓            ↓            ↓
         Five Whys      Pareto      Process Map
              │            │            │
              └────────────┼────────────┘
                           ↓
                     HYPOTHESIS
                           │
                           ▼
                      A/B TEST
                           │
                           ▼
                     MEASURE RESULT
                           │
                           ▼
                  PROCESS OPTIMIZATION
                           │
                           ▼
                   STANDARDIZE CHANGE
                           │
                           ▼
                CONTINUOUS IMPROVEMENT
                           │
                           └──────────→ Repeat`}</pre>

      <hr />

      <h2>A/B Testing + Funnel Analysis</h2>
      <p>These techniques work especially well together.</p>
      <p>Suppose: 10,000 visitors → 7,000 product views → 2,000 add to cart → 1,500 checkout → 450 purchases. You discover that checkout-to-purchase conversion is low.</p>
      <p>You hypothesize: the checkout page contains unnecessary fields. You create A (existing checkout) and B (simplified checkout), then measure <strong>Purchase Conversion = Purchases ÷ Checkout Users × 100</strong>.</p>
      <p>If B produces a reliably better result without creating unacceptable effects elsewhere, it becomes a candidate for implementation.</p>

      <hr />

      <h2>Customer Feedback + Root-Cause Analysis</h2>
      <p>Customer feedback tells you what customers experience. Root-cause analysis investigates why it happens.</p>
      <p>Example: customers complain that deliveries are late. Feedback: "My order arrived three days late." RCA: late delivery → shipping dispatched late → warehouse processed order late → order queue became overloaded → peak-day capacity was insufficient.</p>
      <p>The solution may therefore involve capacity planning, staffing, automation, inventory positioning, order prioritization, and process redesign — rather than simply apologizing to customers.</p>

      <hr />

      <h2>Pareto + Root-Cause Analysis</h2>
      <p>Pareto helps answer: which problems should we investigate first? RCA helps answer: why are those problems happening?</p>
      <p>Pareto: "What matters most?" → root-cause analysis: "Why is it happening?" → improvement: "What should we change?"</p>
      <p>Example: if 65% of customer complaints come from late delivery and damaged products, management can investigate those categories first instead of spending equal resources on every complaint type.</p>

      <hr />

      <h2>Cohort + Retention Analysis</h2>
      <p>These techniques are particularly useful for subscription businesses, apps, marketplaces, and ecommerce.</p>
      <p>Suppose January cohort retains 100%/50%/35% across months 1-3; February 100%/55%/40%; March 100%/62%/47%. This allows the business to ask: what changed between January and March?</p>
      <p>Potential explanations: better onboarding, better product experience, different acquisition sources, product improvements, pricing changes, or customer mix changes. Cohort analysis identifies the pattern. Further investigation determines the cause.</p>

      <hr />

      <h2>Improvement Prioritization</h2>
      <p>Businesses usually have more possible improvements than available resources. A useful prioritization framework is:</p>
      <p><strong>Priority ≈ (Impact × Confidence) ÷ Effort</strong></p>
      <p>This is a heuristic rather than a universal formula.</p>
      <p>Example: simplify checkout (high impact, high confidence, low effort → very high priority); redesign logo (low impact, medium confidence, medium effort → lower); automate invoices (medium impact, high confidence, low effort → high); build major new feature (high impact, low confidence, very high effort → needs investigation).</p>
      <p>Consider financial impact, customer impact, strategic importance, frequency, risk, implementation effort, and confidence in the diagnosis.</p>

      <hr />

      <h2>Improvement Metrics</h2>
      <p><strong>Conversion = Conversions ÷ Visitors × 100</strong></p>
      <p><strong>Retention = Customers Retained ÷ Starting Customers × 100</strong></p>
      <p><strong>Churn = Customers Lost ÷ Starting Customers × 100</strong></p>
      <p><strong>Error Rate = Errors ÷ Total Transactions × 100</strong></p>
      <p><strong>Defect Rate = Defective Units ÷ Total Units × 100</strong></p>
      <p><strong>Cycle Time = Finish Time − Start Time</strong></p>
      <p><strong>Cost per Unit = Total Cost ÷ Units Produced</strong></p>
      <p><strong>Productivity = Output ÷ Input</strong></p>
      <p>For a metric where higher is better: <strong>Improvement = (New − Old) ÷ Old × 100</strong></p>
      <p>For a metric where lower is better: <strong>Improvement = (Old − New) ÷ Old × 100</strong></p>

      <hr />

      <h2>Improvement Dashboard</h2>
      <p>A business can create a centralized improvement dashboard:</p>
      <ul>
        <li>Sales — conversion — before 3.5%, after 4.1%, target 4.5% — improving</li>
        <li>Operations — cycle time — before 18 min, after 13 min, target 10 min — improving</li>
        <li>Quality — error rate — before 4%, after 2%, target &lt;1% — improving</li>
        <li>Customer — CSAT — before 82%, after 88%, target 90% — improving</li>
        <li>Retention — monthly retention — before 70%, after 75%, target 80% — improving</li>
        <li>Finance — cost/order — before ₱80, after ₱65, target ₱60 — improving</li>
      </ul>
      <p>A useful improvement record should contain: problem → baseline → root cause → hypothesis → proposed solution → experiment → result → decision → new standard → monitoring.</p>

      <hr />

      <h2>Improvement Project Example: Xmarket</h2>
      <p>Suppose Xmarket discovers that many visitors add products to their carts but don't complete purchases.</p>
      <p><strong>Stage 1 — Funnel analysis.</strong> 10,000 visitors → 4,000 product views → 1,500 add to cart → 1,000 checkout → 300 purchases. Checkout-to-purchase: 300 ÷ 1,000 × 100 = 30%.</p>
      <p><strong>Stage 2 — Customer feedback analysis.</strong> Customers report: checkout is confusing; shipping costs appear late; too many fields are required.</p>
      <p><strong>Stage 3 — Pareto analysis.</strong> Complaint data: unexpected shipping cost 45%; too many fields 30%; payment problems 15%; other 10%. The first two categories account for most complaints.</p>
      <p><strong>Stage 4 — Root-cause analysis.</strong> Investigate unexpected shipping costs: unexpected shipping cost → shipping shown late → customer sees cost near final step → shipping calculation occurs too late.</p>
      <p><strong>Stage 5 — Solution.</strong> Display shipping cost earlier.</p>
      <p><strong>Stage 6 — A/B test.</strong> A = shipping cost shown late. B = shipping cost shown earlier. Measure: checkout completion, purchase conversion, average order value, refund/cancellation rate, customer complaints.</p>
      <p><strong>Stage 7 — Evaluate.</strong> If B improves the target metric without creating unacceptable negative effects, implement it.</p>
      <p><strong>Stage 8 — Continuous improvement.</strong> After checkout improves, investigate the next significant bottleneck.</p>
      <p>Funnel → problem → feedback → Pareto → RCA → solution → A/B test → measure → implement → monitor → next problem.</p>

      <hr />

      <h2>Common Improvement Mistakes</h2>
      <p><strong>1. Changing things without measuring.</strong> A change isn't automatically an improvement.</p>
      <p><strong>2. Solving symptoms.</strong> Fixing individual incidents without addressing the system allows problems to return.</p>
      <p><strong>3. Trusting assumptions.</strong> "Customers probably want this." Test the assumption where practical.</p>
      <p><strong>4. Testing too many variables simultaneously.</strong> You may not know what caused the result.</p>
      <p><strong>5. Stopping experiments too early.</strong> Small samples can produce misleading results.</p>
      <p><strong>6. Ignoring qualitative information.</strong> Numbers show what happened. Customer feedback can help explain why.</p>
      <p><strong>7. Optimizing one KPI at the expense of the business.</strong> Example: increasing sales while dramatically increasing refunds.</p>
      <p><strong>8. Ignoring unintended consequences.</strong> Every improvement should be checked for effects on quality, costs, customer satisfaction, employee workload, reliability, retention, compliance, and security.</p>
      <p><strong>9. Making improvements without standardizing them.</strong> If a successful change isn't documented and maintained, performance can eventually return to the old state.</p>
      <p><strong>10. Trying to improve everything simultaneously.</strong> Prioritization is essential.</p>

      <hr />

      <h2>Improvement System</h2>
      <p>A mature business can operate improvement as a permanent system.</p>
      <pre>{`BUSINESS
                       │
                       ▼
                  MEASURE
                       │
                       ▼
                 FIND PROBLEM
                       │
                       ▼
                 PRIORITIZE
                       │
                       ▼
               ROOT-CAUSE ANALYSIS
                       │
             ┌─────────┼─────────┐
             ↓         ↓         ↓
         Five Whys   Pareto   Feedback
             │         │         │
             └─────────┼─────────┘
                       ↓
                   HYPOTHESIS
                       │
                       ▼
                    TEST
                       │
                 ┌─────┴─────┐
                 ↓           ↓
              Works       Doesn't work
                 ↓           ↓
            Implement     Learn
                 │           │
                 └─────┬─────┘
                       ↓
                  OPTIMIZE
                       │
                       ▼
                 STANDARDIZE
                       │
                       ▼
                   MONITOR
                       │
                       ▼
                  MEASURE AGAIN
                       │
                       └──────────↺`}</pre>

      <hr />

      <h2>The Improvement Flywheel</h2>
      <pre>{`DATA
 ↓
INSIGHT
 ↓
PROBLEM
 ↓
ROOT CAUSE
 ↓
HYPOTHESIS
 ↓
EXPERIMENT
 ↓
RESULT
 ↓
IMPLEMENTATION
 ↓
STANDARDIZATION
 ↓
MONITORING
 ↓
NEW DATA
 ↺`}</pre>
      <p>The key idea is that improvement is not a one-time project. It becomes part of how the business operates.</p>

      <hr />

      <h2>Relationship Between the Ten Concepts</h2>
      <ul>
        <li><strong>A/B testing</strong> — which tested version performs better?</li>
        <li><strong>Root-cause analysis</strong> — why is the problem happening?</li>
        <li><strong>Five Whys</strong> — can we trace the problem deeper through repeated "why" questions?</li>
        <li><strong>Pareto analysis</strong> — which problems or causes deserve priority?</li>
        <li><strong>Customer feedback analysis</strong> — what are customers experiencing and saying?</li>
        <li><strong>Cohort analysis</strong> — how does behavior differ between groups over time?</li>
        <li><strong>Funnel analysis</strong> — where are users dropping out?</li>
        <li><strong>Retention analysis</strong> — how well are we keeping customers/users?</li>
        <li><strong>Process optimization</strong> — how can the workflow perform better?</li>
        <li><strong>Continuous improvement</strong> — how do we keep improving repeatedly?</li>
      </ul>

      <hr />

      <h2>Complete Improvement Framework</h2>
      <p>The ten concepts can be organized into five stages:</p>
      <p><strong>Stage 1 — Discover.</strong> Use customer feedback analysis, funnel analysis, retention analysis, and cohort analysis. Purpose: find problems and patterns.</p>
      <p><strong>Stage 2 — Diagnose.</strong> Use root-cause analysis, Five Whys, and Pareto analysis. Purpose: understand what is causing the problems and prioritize them.</p>
      <p><strong>Stage 3 — Experiment.</strong> Use A/B testing, pilot programs, and controlled experiments. Purpose: determine whether a proposed solution actually works.</p>
      <p><strong>Stage 4 — Optimize.</strong> Use process optimization, automation, standardization, and workflow redesign. Purpose: turn successful improvements into better-performing systems.</p>
      <p><strong>Stage 5 — Repeat.</strong> Use continuous improvement, KPI monitoring, feedback, and new experiments. Purpose: prevent stagnation and continue improving.</p>
      <p>Discover → diagnose → experiment → optimize → standardize → monitor → discover again.</p>

      <hr />

      <h2>Core Principles of Business Improvement</h2>
      <ol>
        <li>Measure before changing.</li>
        <li>Define the problem precisely.</li>
        <li>Separate symptoms from root causes.</li>
        <li>Use evidence instead of assumptions.</li>
        <li>Prioritize high-impact problems.</li>
        <li>Listen to customers.</li>
        <li>Analyze behavior over time.</li>
        <li>Test important changes when practical.</li>
        <li>Measure both positive and negative side effects.</li>
        <li>Optimize processes, not just individual tasks.</li>
        <li>Standardize successful improvements.</li>
        <li>Monitor performance after implementation.</li>
        <li>Treat failed experiments as information, not automatically as wasted effort.</li>
        <li>Improve the entire system rather than maximizing one isolated metric.</li>
        <li>Make improvement continuous.</li>
      </ol>

      <h3>The central principle</h3>
      <p><strong>Measure → Understand → Test → Improve → Standardize → Repeat</strong></p>
      <p>A business that follows this cycle can turn data into insight, insight into action, and action into measurable improvement.</p>
    </LessonLayout>
  )
}
