import LessonLayout from '../components/LessonLayout'

export default function Management() {
  return (
    <LessonLayout
      number="16"
      title="Management"
      summary="10 systems to turn business objectives into coordinated action — goals, KPIs, delegation, training, reviews, and resource allocation."
    >
      <p>
        Management is the process of planning, organizing, directing,
        coordinating, and controlling people, resources, processes, and
        activities so an organization can achieve its objectives efficiently
        and consistently.
      </p>
      <p>A business can have a strong product and enough customers but still fail because its management system is weak. Management creates the structure that connects:</p>
      <p><strong>People → Goals → Workflows → Resources → Performance → Results</strong></p>
      <p>A practical management system can be viewed as:</p>
      <pre>{`BUSINESS OBJECTIVES
                           │
                           ▼
                      GOAL SETTING
                           │
                           ▼
                    OKR / KPI SYSTEM
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
        RESOURCE PLAN              PEOPLE PLAN
             │                           │
             ▼                           ▼
     RESOURCE ALLOCATION            DELEGATION
                                         │
                                         ▼
                                  STAFF TRAINING
                                         │
                                         ▼
                                  WORKFLOW SYSTEM
                                         │
                                         ▼
                              PERFORMANCE TRACKING
                                         │
                                         ▼
                                PERFORMANCE REVIEW
                                         │
                                         ▼
                              IMPROVEMENT / ACTION
                                         │
                                         └──────► GOALS`}</pre>

      <hr />

      <h2>1. Delegation</h2>
      <h3>Definition</h3>
      <p>Delegation is the process of assigning responsibility and authority for a task or outcome to another person while the manager remains accountable for ensuring the work is completed properly.</p>
      <p>Delegation is not simply "You do this." Effective delegation means giving someone:</p>
      <ul>
        <li>A clear responsibility</li>
        <li>A desired result</li>
        <li>Appropriate authority</li>
        <li>Necessary resources</li>
        <li>A deadline</li>
        <li>Performance expectations</li>
        <li>Support when needed</li>
      </ul>

      <h3>Why delegation matters</h3>
      <p>A manager cannot personally perform every task as an organization grows.</p>
      <p><strong>Without delegation:</strong> more work → manager handles everything → manager becomes bottleneck → decisions slow down → employees become dependent → growth becomes difficult.</p>
      <p><strong>With effective delegation:</strong> more work → tasks distributed → employees develop ownership → manager focuses on higher-value work → organization becomes scalable.</p>

      <h3>What should be delegated?</h3>
      <p>Good candidates include repetitive tasks, clearly defined operational tasks, research, customer support, data entry, content preparation, inventory checking, administrative work, routine reporting, testing, and documentation.</p>
      <p>Managers should be more careful when delegating highly confidential decisions, critical legal decisions, strategic decisions requiring executive authority, tasks involving sensitive credentials, and responsibilities the employee is not yet prepared to handle.</p>

      <h3>Delegation levels</h3>
      <p><strong>Level 1</strong> — gather information.</p>
      <p><strong>Level 2</strong> — recommend an action.</p>
      <p><strong>Level 3</strong> — make the decision, manager approves.</p>
      <p><strong>Level 4</strong> — make and execute the decision.</p>
      <p><strong>Level 5</strong> — own the entire outcome.</p>
      <p>This allows management to gradually increase employee autonomy.</p>

      <h3>How to delegate</h3>
      <ol>
        <li><strong>Define the outcome.</strong> Don't simply assign an activity. Weak: "Work on the website." Better: "Prepare the product page for the new marketplace category by Friday."</li>
        <li><strong>Choose the right person.</strong> Consider skill, experience, workload, availability, reliability, and development potential.</li>
        <li><strong>Explain the purpose.</strong> Employees perform better when they understand why the task matters.</li>
        <li><strong>Define authority.</strong> Clarify what they can decide independently.</li>
        <li><strong>Provide resources.</strong> Give them files, tools, budget, information, access, and training.</li>
        <li><strong>Establish checkpoints.</strong> Don't wait until the deadline to discover a major problem.</li>
        <li><strong>Review the result.</strong> Evaluate the outcome, not just whether the person was busy.</li>
      </ol>

      <h3>Example</h3>
      <p>Suppose Xmarket needs 100 new products uploaded. Instead of the owner doing everything: product sourcing goes to sourcing staff, product images to design staff, product descriptions to content staff, product uploading to operations staff, and quality checking to QA staff. The owner coordinates the system rather than manually completing every task.</p>

      <h3>Common delegation mistakes</h3>
      <p><strong>Micromanagement</strong> — giving responsibility but controlling every tiny decision.</p>
      <p><strong>Under-delegation</strong> — keeping too much work with management.</p>
      <p><strong>Over-delegation</strong> — giving important work to someone without sufficient skills or support.</p>
      <p><strong>Unclear expectations</strong> — the employee doesn't know what success means.</p>
      <p><strong>Responsibility without authority</strong> — the employee is held accountable but cannot access the resources or decisions necessary to succeed.</p>

      <hr />

      <h2>2. Performance Tracking</h2>
      <h3>Definition</h3>
      <p>Performance tracking is the continuous measurement and monitoring of work, activities, outputs, and results to determine whether individuals, teams, and departments are meeting expectations. It answers: what is actually happening?</p>

      <h3>Performance tracking system</h3>
      <p>Work performed → data collected → performance measured → compared with target → gap identified → cause investigated → corrective action → performance remeasured.</p>

      <h3>What can be tracked?</h3>
      <p><strong>Individual performance</strong> — tasks completed, quality, productivity, attendance, response time, sales, customer satisfaction.</p>
      <p><strong>Team performance</strong> — team output, project completion, error rates, service levels, revenue, project deadlines.</p>
      <p><strong>Operational performance</strong> — processing time, inventory turnover, defect rate, delivery time, cost per unit.</p>

      <h3>Output vs outcome</h3>
      <p>This distinction is extremely important. Output = what was produced. Outcome = what happened because of it.</p>
      <p>Example: a marketing employee creates 20 advertisements. That is output. If those advertisements generate 50,000 visitors, 2,000 leads, and ₱500,000 sales, those are outcomes. Tracking only output can create misleading performance evaluations.</p>

      <h3>Example performance table</h3>
      <ul>
        <li>Orders processed — target 500 — actual 540 — above target</li>
        <li>Error rate — target &lt;2% — actual 1.4% — within target</li>
        <li>Response time — target &lt;10 min — actual 7 min — within target</li>
        <li>Customer satisfaction — target 90% — actual 86% — needs improvement</li>
      </ul>

      <h3>Important principle</h3>
      <p>Measure what matters, not everything that can be measured. Too many metrics create administrative burden, confusion, metric manipulation, and loss of focus.</p>

      <hr />

      <h2>3. KPI Management</h2>
      <h3>Definition</h3>
      <p>KPI means Key Performance Indicator. A KPI is a measurable indicator used to evaluate progress toward an important business, team, or operational objective. A KPI should help answer: are we achieving what matters?</p>

      <h3>KPI vs metric</h3>
      <p>Not every metric is a KPI. For example, an ecommerce business may track website visitors, page views, product views, cart additions, orders, revenue, and refunds. These are all metrics. But if the company's major objective is increasing profitable sales, it might designate conversion rate, contribution margin, and repeat-purchase rate as KPIs.</p>

      <h3>KPI structure</h3>
      <p>A useful KPI definition includes name, purpose, formula, data source, target, measurement frequency, owner, and action threshold.</p>

      <h3>Common business KPIs</h3>
      <p><strong>Revenue = Total Sales</strong></p>
      <p><strong>Profit = Revenue − Total Costs</strong></p>
      <p><strong>Conversion Rate = Conversions ÷ Total Opportunities × 100</strong></p>
      <p><strong>CAC = Acquisition Costs ÷ New Customers</strong></p>
      <p><strong>Retention Rate = (Customers at End − New Customers) ÷ Customers at Start × 100</strong></p>
      <p><strong>Productivity = Output ÷ Resources Used</strong></p>

      <h3>KPI categories</h3>
      <p><strong>Financial</strong> — revenue, profit, margin.</p>
      <p><strong>Sales</strong> — conversion, AOV, sales volume.</p>
      <p><strong>Marketing</strong> — leads, CAC, ROAS.</p>
      <p><strong>Customer</strong> — retention, CSAT, complaints.</p>
      <p><strong>Operations</strong> — error rate, cycle time.</p>
      <p><strong>HR</strong> — turnover, training completion.</p>
      <p><strong>Product</strong> — adoption, defects, engagement.</p>

      <h3>KPI ownership</h3>
      <p>Every important KPI should ideally have an owner. Without ownership, KPIs can become numbers that nobody acts upon.</p>

      <hr />

      <h2>4. Goal Setting</h2>
      <h3>Definition</h3>
      <p>Goal setting is the process of defining specific results that an individual, team, or organization intends to achieve within a particular period. Goals provide direction.</p>
      <p>Without goals: activity ≠ progress. A team can be extremely busy without moving toward an important result.</p>

      <h3>Good goal characteristics</h3>
      <p>A useful goal should generally be specific, measurable, achievable, relevant, and time-bound. This is commonly called SMART goal setting.</p>
      <p>Weak: "Improve customer service." Better: "Reduce average customer-support response time from 15 minutes to 8 minutes by December 31."</p>

      <h3>Goal hierarchy</h3>
      <p>Business goals should connect across levels: company goal → department goal → team goal → individual goal → daily activities.</p>
      <p>Example: company increases annual revenue → sales increases qualified customers → sales team increases monthly conversions → salesperson completes qualified follow-ups → daily contacts assigned prospects.</p>

      <h3>Leading vs lagging goals</h3>
      <p><strong>Lagging indicators</strong> — measure results that already happened. Examples: revenue, profit, number of completed orders.</p>
      <p><strong>Leading indicators</strong> — measure activities or conditions that influence future results. Examples: qualified leads, product demonstrations, customer follow-ups, training completion.</p>
      <p>A strong management system uses both.</p>

      <hr />

      <h2>5. OKR Planning</h2>
      <h3>Definition</h3>
      <p>OKR means Objectives and Key Results. It is a goal-management framework that connects an ambitious objective with measurable results.</p>
      <p>Objective ("What do we want to accomplish?") → key results ("What measurable result proves progress?").</p>

      <h3>Objective</h3>
      <p>An Objective describes the desired direction or outcome. Example: create a faster and more reliable marketplace shopping experience. It should be understandable and outcome-oriented.</p>

      <h3>Key results</h3>
      <p>Key Results should be measurable. Example objective: create a faster and more reliable marketplace shopping experience. Key results:</p>
      <ul>
        <li>Reduce average page-load time from 4 seconds to 2 seconds.</li>
        <li>Increase checkout completion from 65% to 75%.</li>
        <li>Reduce checkout-related support complaints by 30%.</li>
      </ul>

      <h3>OKR vs KPI</h3>
      <p><strong>OKR:</strong> goal framework; usually time-bound; focuses on objectives and results; often used for strategic change; can introduce new targets.</p>
      <p><strong>KPI:</strong> performance indicator; can be continuously monitored; focuses on important measurements; often used for ongoing performance; often tracks established performance.</p>
      <p>They can work together: objective → key results → KPIs provide supporting measurements.</p>

      <h3>OKR cycle</h3>
      <p>Set → communicate → execute → track → review → learn → reset. OKRs should not become a paperwork exercise. Their purpose is alignment and measurable progress.</p>

      <hr />

      <h2>6. Staff Training</h2>
      <h3>Definition</h3>
      <p>Staff training is the structured process of developing employees' knowledge, skills, behaviors, and capabilities so they can perform their responsibilities effectively.</p>
      <p>Training can address technical skills, product knowledge, customer service, safety, communication, leadership, software, company procedures, compliance, and problem solving.</p>

      <h3>Training cycle</h3>
      <p>Identify skill gap → define training objective → choose training method → deliver training → practice → assess → apply at work → measure improvement.</p>

      <h3>Training needs analysis</h3>
      <p>Before training, determine: what should employees be able to do? What can they currently do? What is the gap? Why does the gap exist? Can training actually solve it?</p>
      <p>Not every performance problem is a training problem. An employee making mistakes could be due to lack of knowledge (training), poor instructions (process improvement), missing tools (resource problem), excessive workload (capacity problem), or unclear expectations (management problem).</p>

      <h3>Training methods</h3>
      <p><strong>Onboarding</strong> — for new employees.</p>
      <p><strong>Job shadowing</strong> — employee learns by observing an experienced worker.</p>
      <p><strong>Workshops</strong> — structured group learning.</p>
      <p><strong>E-learning</strong> — digital courses and lessons.</p>
      <p><strong>Coaching</strong> — individual guidance focused on improving performance.</p>
      <p><strong>Simulation</strong> — practice in a controlled environment.</p>
      <p><strong>Cross-training</strong> — employees learn responsibilities outside their primary role.</p>

      <h3>Measuring training effectiveness</h3>
      <p>Track completion, knowledge assessment, skill demonstration, error reduction, productivity, quality, and customer outcomes.</p>
      <p>The important question is not merely "Did the employee attend training?" It is "Did performance improve?"</p>

      <hr />

      <h2>7. Performance Reviews</h2>
      <h3>Definition</h3>
      <p>A performance review is a structured evaluation of an employee's performance, achievements, development, challenges, and future objectives. A good performance review should be more than a score.</p>
      <p>Past performance → current strengths → performance gaps → employee perspective → development needs → future goals → action plan.</p>

      <h3>What should be reviewed?</h3>
      <p><strong>Results</strong> — did the employee achieve their goals?</p>
      <p><strong>Quality</strong> — was the work accurate and reliable?</p>
      <p><strong>Behavior</strong> — did they demonstrate expected workplace behaviors?</p>
      <p><strong>Collaboration</strong> — how effectively did they work with others?</p>
      <p><strong>Development</strong> — what new capabilities did they develop?</p>
      <p><strong>Challenges</strong> — what prevented better performance?</p>

      <h3>Evidence-based reviews</h3>
      <p>Reviews should use documented evidence rather than memory or personal impressions. Useful evidence: KPI results, project outcomes, quality records, customer feedback, completed objectives, documented achievements, and documented development activities.</p>

      <h3>Performance review example</h3>
      <ul>
        <li>Tasks completed — target 100 — actual 108 — strong productivity.</li>
        <li>Error rate — target &lt;3% — actual 2% — meets standard.</li>
        <li>Customer rating — target 90% — actual 92% — strong result.</li>
        <li>Training — target 3 courses — actual 2 — complete remaining course.</li>
      </ul>

      <h3>Performance improvement plan</h3>
      <p>When performance is below expectations, a structured plan may include: performance problem → expected standard → actions required → support provided → deadline → checkpoints → review. The purpose is to create a clear path toward improvement.</p>

      <hr />

      <h2>8. Workflow Documentation</h2>
      <h3>Definition</h3>
      <p>Workflow documentation is the process of recording how work moves from beginning to completion. It transforms informal knowledge into a repeatable system.</p>

      <h3>Why documentation matters</h3>
      <p><strong>Without documentation:</strong> employee knows process → employee leaves → knowledge disappears → replacement struggles → errors increase.</p>
      <p><strong>With documentation:</strong> process → documented → trainable → repeatable → measurable → improved.</p>

      <h3>What to document</h3>
      <p>A workflow should typically identify: trigger, starting information, steps, responsible person, tools, decision points, quality checks, output, and escalation process.</p>

      <h3>Example: product listing workflow</h3>
      <p>New product received → verify supplier information → collect product images → write description → enter price → check inventory → quality review → publish → monitor listing.</p>

      <h3>SOP</h3>
      <p>A Standard Operating Procedure (SOP) is a formal document explaining how to perform a recurring task. A good SOP can contain:</p>
      <ul>
        <li><strong>Purpose</strong> — why the procedure exists</li>
        <li><strong>Scope</strong> — where it applies</li>
        <li><strong>Owner</strong> — responsible person</li>
        <li><strong>Requirements</strong> — needed tools/resources</li>
        <li><strong>Procedure</strong> — step-by-step instructions</li>
        <li><strong>Quality standard</strong> — what acceptable work looks like</li>
        <li><strong>Exceptions</strong> — what to do when something goes wrong</li>
        <li><strong>Escalation</strong> — when to ask for help</li>
        <li><strong>Revision</strong> — version/date</li>
      </ul>

      <h3>Documentation principle</h3>
      <p>Documentation should be clear enough for a qualified new employee to follow without repeatedly asking basic questions.</p>

      <hr />

      <h2>9. Meeting Optimization</h2>
      <h3>Definition</h3>
      <p>Meeting optimization is the process of improving meetings so they produce necessary decisions, alignment, information exchange, or problem-solving while minimizing wasted time.</p>
      <p>Meetings consume organizational resources. If 10 employees × 1-hour meeting = 10 employee-hours, then a one-hour meeting has consumed ten hours of organizational labor.</p>

      <h3>Before a meeting</h3>
      <p>Ask: does this actually require a meeting? A meeting may be unnecessary if the information can be communicated through email, chat, dashboard, document, recorded presentation, or project-management system.</p>

      <h3>Meeting types</h3>
      <p><strong>Information meeting</strong> — purpose: communicate information.</p>
      <p><strong>Decision meeting</strong> — purpose: make a decision.</p>
      <p><strong>Problem-solving meeting</strong> — purpose: resolve an issue.</p>
      <p><strong>Planning meeting</strong> — purpose: establish future activities.</p>
      <p><strong>Review meeting</strong> — purpose: evaluate progress.</p>

      <h3>Meeting structure</h3>
      <p>Agenda → context → discussion → decision → action items → owners → deadlines.</p>

      <h3>Effective meeting agenda</h3>
      <p>A useful agenda specifies purpose, topics, required participants, preparation, decisions needed, and time allocation.</p>

      <h3>Meeting action register</h3>
      <p>Track action, owner, deadline, and status. Example: fix checkout bug — developer — Friday — in progress. Update product images — designer — Thursday — pending. Review supplier quote — manager — Wednesday — complete.</p>
      <p>The meeting is not truly complete until decisions and responsibilities are documented.</p>

      <h3>Meeting optimization metrics</h3>
      <p>Possible measurements include meeting hours per employee, meeting cost, percentage of meetings with agendas, action-item completion rate, decision turnaround time, and meeting attendance relevance.</p>

      <hr />

      <h2>10. Resource Allocation</h2>
      <h3>Definition</h3>
      <p>Resource allocation is the process of deciding how limited resources should be distributed among people, projects, departments, activities, and priorities.</p>
      <p>Resources can include money, employees, time, equipment, inventory, technology, facilities, data, and management attention.</p>

      <h3>The resource allocation problem</h3>
      <p>Resources are limited. Available resources must be split across project A, project B, operations, marketing, product development, and emergency reserve. Management must decide where resources create the most useful results while maintaining necessary operational capacity and risk protection.</p>

      <h3>Resource allocation process</h3>
      <ol>
        <li><strong>Identify available resources.</strong> Example: budget ₱500,000; employees 10; development capacity 400 hours; marketing capacity 150 hours.</li>
        <li><strong>Identify priorities.</strong> Classify work such as critical, high priority, medium priority, low priority.</li>
        <li><strong>Estimate resource requirements.</strong> For each project: budget, people, time, equipment, technology.</li>
        <li><strong>Compare expected results.</strong> Consider revenue potential, customer impact, strategic importance, risk, urgency, and operational necessity.</li>
        <li><strong>Allocate.</strong> Distribute resources according to priorities and constraints.</li>
        <li><strong>Monitor.</strong> Resource allocation is not permanent. Adjust when priorities change, projects fall behind, costs increase, demand changes, new opportunities appear, or risks emerge.</li>
      </ol>

      <h3>Example</h3>
      <p>Suppose Xmarket has ₱500,000 available. A possible allocation: product development ₱150,000; marketing ₱100,000; operations ₱100,000; technology infrastructure ₱75,000; customer support ₱50,000; contingency reserve ₱25,000. Total ₱500,000.</p>
      <p>The exact allocation should depend on the organization's objectives, constraints, expected returns, and risks — not simply on dividing money equally.</p>

      <hr />

      <h2>Management System Integration</h2>
      <p>The ten management concepts are not isolated techniques. They form one interconnected management system.</p>
      <pre>{`BUSINESS STRATEGY
                       │
                       ▼
                  GOAL SETTING
                       │
                       ▼
                   OKR PLANNING
                       │
                       ▼
                 KPI MANAGEMENT
                       │
                       ▼
             ┌─────────┴─────────┐
             ▼                   ▼
        DELEGATION          RESOURCE
             │              ALLOCATION
             ▼                   │
       STAFF TRAINING             │
             │                   │
             └────────┬──────────┘
                      ▼
              WORKFLOW DOCUMENTATION
                      │
                      ▼
                 EXECUTION
                      │
                      ▼
              PERFORMANCE TRACKING
                      │
                      ▼
              PERFORMANCE REVIEWS
                      │
                      ▼
                IMPROVEMENT
                      │
                      └──────────► GOALS`}</pre>

      <hr />

      <h2>Management Levels</h2>
      <p><strong>Strategic management</strong> — focuses on long-term direction, competitive position, major investments, business model, and expansion.</p>
      <p><strong>Tactical management</strong> — focuses on department objectives, resource planning, projects, processes, and team performance.</p>
      <p><strong>Operational management</strong> — focuses on daily work, employees, customers, inventory, quality, schedules, and immediate problems.</p>
      <p>Strategic ("What direction are we going?") → tactical ("How will each department contribute?") → operational ("What needs to happen today?").</p>

      <hr />

      <h2>Management vs Leadership</h2>
      <p>These concepts overlap but are not identical.</p>
      <p><strong>Management:</strong> organizes work; allocates resources; tracks performance; establishes processes; controls execution; maintains systems.</p>
      <p><strong>Leadership:</strong> creates direction; builds commitment; inspires people; drives change; influences behavior; develops vision.</p>
      <p>A strong organization generally needs both.</p>

      <hr />

      <h2>Authority, Responsibility, and Accountability</h2>
      <p>These three concepts should be distinguished.</p>
      <p><strong>Responsibility</strong> — the duty to perform an assigned task.</p>
      <p><strong>Authority</strong> — the power to make decisions or use resources.</p>
      <p><strong>Accountability</strong> — being answerable for the result.</p>
      <p>A healthy management structure aligns them: responsibility + authority → ability to perform → accountability → result.</p>
      <p>A common management failure is high accountability + low authority = employee cannot effectively control the result.</p>

      <hr />

      <h2>Span of Control</h2>
      <p>Span of control refers to the number of people directly managed by one manager.</p>
      <p>If one manager directly manages 20–30 people, coordination may become difficult depending on the work. If a manager directly manages only 2 people, the organization may become unnecessarily management-heavy.</p>
      <p>The appropriate span depends on complexity of work, employee experience, geographic distribution, process standardization, technology, manager capability, and degree of employee independence.</p>

      <hr />

      <h2>Management Dashboard</h2>
      <p>A management dashboard can combine the major concepts. Example:</p>
      <ul>
        <li>Sales — conversion — target 5% — actual 4.3% — sales — investigate</li>
        <li>Operations — error rate — target &lt;2% — actual 1.5% — operations — maintain</li>
        <li>Customer — CSAT — target 90% — actual 92% — support — maintain</li>
        <li>Staff — training completion — target 100% — actual 85% — HR — schedule training</li>
        <li>Projects — on-time completion — target 95% — actual 91% — PM — review blockers</li>
        <li>Finance — expense ratio — target &lt;30% — actual 28% — finance — monitor</li>
      </ul>

      <hr />

      <h2>Performance Management Cycle</h2>
      <p>A complete performance management system can operate continuously:</p>
      <ol>
        <li><strong>Set</strong> — define goals.</li>
        <li><strong>Align</strong> — connect individual → team → company.</li>
        <li><strong>Equip</strong> — provide resources and training.</li>
        <li><strong>Execute</strong> — perform work.</li>
        <li><strong>Track</strong> — measure KPIs.</li>
        <li><strong>Review</strong> — discuss performance.</li>
        <li><strong>Improve</strong> — training / process / resource changes.</li>
        <li><strong>Reset</strong> — set next objectives.</li>
      </ol>

      <hr />

      <h2>Management Metrics</h2>
      <p><strong>Goal Achievement Rate = Goals Achieved ÷ Goals Assigned × 100</strong></p>
      <p><strong>KPI Achievement = KPIs Meeting Target ÷ Total KPIs × 100</strong></p>
      <p><strong>Training Completion = Employees Completing Training ÷ Employees Required to Train × 100</strong></p>
      <p><strong>Task Completion = Completed Tasks ÷ Assigned Tasks × 100</strong></p>
      <p><strong>On-Time Rate = Tasks Completed on Time ÷ Tasks Completed × 100</strong></p>
      <p><strong>Productivity = Output ÷ Input</strong></p>
      <p><strong>Action Completion = Completed Action Items ÷ Total Action Items × 100</strong></p>
      <p><strong>Resource Utilization = Resources Used ÷ Resources Available × 100</strong></p>
      <p>The correct target depends heavily on the business and type of resource. Maximizing utilization is not always desirable; some capacity may need to remain available for unexpected demand or emergencies.</p>

      <hr />

      <h2>Management Problems and Their Root Causes</h2>
      <p>A manager should avoid immediately blaming employees. A performance problem can originate from multiple sources.</p>
      <p>Performance problem branches into people (skills, training, motivation), process (workflow, instructions, bottlenecks), and resources (tools, budget, capacity), plus management (goals, leadership, communication).</p>
      <p>For example, an employee missing a target may be caused by insufficient training, unrealistic target, poor workflow, missing software, excessive workload, unclear instructions, supplier delays, poor communication, or genuine individual performance issues.</p>
      <p>Good management investigates the system before choosing the intervention.</p>

      <hr />

      <h2>Management Principles</h2>
      <ol>
        <li><strong>Manage outcomes, not just activity.</strong> Busy employees are not necessarily productive employees.</li>
        <li><strong>Make expectations explicit.</strong> People should know what success looks like.</li>
        <li><strong>Give responsibility with sufficient authority.</strong> Do not hold someone responsible for decisions they are not allowed to make.</li>
        <li><strong>Measure important things.</strong> Avoid creating a dashboard full of irrelevant metrics.</li>
        <li><strong>Use data with context.</strong> Numbers require interpretation.</li>
        <li><strong>Document repeatable processes.</strong> If a process happens repeatedly, consider turning it into a documented system.</li>
        <li><strong>Train before expecting mastery.</strong> Employees cannot reliably perform tasks they have never been properly prepared for.</li>
        <li><strong>Review performance continuously.</strong> Do not allow problems to remain hidden until an annual review.</li>
        <li><strong>Allocate resources according to priorities.</strong> Important goals require sufficient resources.</li>
        <li><strong>Improve the system, not just the person.</strong> Sometimes the solution to poor performance is a better process.</li>
      </ol>

      <hr />

      <h2>How the Ten Management Techniques Connect</h2>
      <pre>{`GOAL SETTING
"What must we achieve?"
       │
       ▼
OKR PLANNING
"What measurable results prove progress?"
       │
       ▼
KPI MANAGEMENT
"What should we monitor?"
       │
       ├───────────────────┐
       ▼                   ▼
DELEGATION          RESOURCE ALLOCATION
"Who owns it?"      "What do they need?"
       │                   │
       └─────────┬─────────┘
                 ▼
          STAFF TRAINING
          "Can they do it?"
                 │
                 ▼
      WORKFLOW DOCUMENTATION
          "How is it done?"
                 │
                 ▼
             EXECUTION
                 │
                 ▼
       PERFORMANCE TRACKING
          "What happened?"
                 │
                 ▼
       PERFORMANCE REVIEWS
          "Why and what next?"
                 │
                 ▼
            IMPROVEMENT
                 │
                 └──────────► NEW GOALS`}</pre>

      <hr />

      <h2>Complete Management Framework</h2>
      <p>A business management system can ultimately be organized into six layers:</p>
      <ul>
        <li><strong>Direction</strong> — where are we going? — goal setting, OKRs</li>
        <li><strong>Measurement</strong> — how do we know we're progressing? — KPIs, performance tracking</li>
        <li><strong>People</strong> — who does the work? — delegation, training</li>
        <li><strong>Process</strong> — how should work be performed? — workflow documentation</li>
        <li><strong>Resources</strong> — what do we need? — resource allocation</li>
        <li><strong>Improvement</strong> — how do we get better? — performance reviews</li>
      </ul>

      <h3>The central principle</h3>
      <p>Management turns business objectives into coordinated action by assigning ownership, providing resources, defining processes, measuring results, reviewing performance, and continuously improving the system.</p>
    </LessonLayout>
  )
}
