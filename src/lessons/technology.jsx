import LessonLayout from '../components/LessonLayout'

export default function Technology() {
  return (
    <LessonLayout
      number="18"
      title="Technology"
      summary="10 core systems to build a reliable digital infrastructure — cloud, APIs, automation, CRM, analytics, security, and integration."
    >
      <p>
        Technology management is the process of using software, hardware, data,
        networks, automation, and digital systems to improve how a business
        operates, serves customers, manages information, protects assets, and
        makes decisions.
      </p>
      <p>Modern businesses often operate as interconnected technology systems:</p>
      <pre>{`BUSINESS
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
      CUSTOMERS           PEOPLE            DATA
          │                 │                 │
          ▼                 ▼                 ▼
         CRM             ACCESS          DATABASES
          │                 │                 │
          └────────────┬────┴─────────────────┘
                       ▼
                  APPLICATIONS
                       │
              ┌────────┴────────┐
              ▼                 ▼
            APIs           INTEGRATIONS
              │                 │
              └────────┬────────┘
                       ▼
                 CLOUD / SYSTEMS
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
        AUTOMATION            ANALYTICS
             │                   │
             └─────────┬─────────┘
                       ▼
                  BUSINESS
                   DECISIONS`}</pre>

      <h3>The major technology concepts</h3>
      <ol>
        <li>Cloud Computing</li>
        <li>API Integration</li>
        <li>Business Automation</li>
        <li>CRM Implementation</li>
        <li>Analytics Implementation</li>
        <li>Database Management</li>
        <li>Cybersecurity Practices</li>
        <li>Backup Systems</li>
        <li>Access-Control Management</li>
        <li>Software Integration</li>
      </ol>

      <hr />

      <h2>1. Cloud Computing</h2>
      <h3>Definition</h3>
      <p>Cloud computing is the delivery of computing resources—such as servers, storage, databases, networking, and software—over a network, typically the internet, instead of requiring a business to operate all computing infrastructure locally.</p>
      <p>Instead of buying and maintaining every server yourself (traditional: business → own servers → own hardware → own maintenance), cloud computing allows: business → internet → cloud provider → computing resources.</p>

      <h3>Major cloud service models</h3>
      <p><strong>IaaS — Infrastructure as a Service.</strong> Provides infrastructure such as virtual machines, storage, networking, and computing capacity. The business manages much of the software environment.</p>
      <p><strong>PaaS — Platform as a Service.</strong> Provides a platform for developing and deploying applications. The provider manages more of the underlying infrastructure.</p>
      <p><strong>SaaS — Software as a Service.</strong> Provides complete software applications through the internet. Examples include online email, project management software, CRM systems, accounting platforms, and collaboration tools.</p>

      <h3>Cloud deployment models</h3>
      <p><strong>Public cloud</strong> — infrastructure is operated by a cloud provider and shared among customers through isolated environments.</p>
      <p><strong>Private cloud</strong> — cloud infrastructure dedicated to one organization.</p>
      <p><strong>Hybrid cloud</strong> — combination of cloud environments and potentially on-premises infrastructure.</p>

      <h3>Benefits</h3>
      <ul>
        <li><strong>Scalability</strong> — resources can often be increased or decreased according to demand.</li>
        <li><strong>Lower infrastructure burden</strong> — businesses don't necessarily need to purchase and maintain all physical infrastructure themselves.</li>
        <li><strong>Accessibility</strong> — authorized users can access systems from different locations.</li>
        <li><strong>Faster deployment</strong> — cloud services can allow businesses to deploy infrastructure more quickly than purchasing and configuring physical hardware.</li>
        <li><strong>Disaster recovery</strong> — cloud infrastructure can support geographically separated copies and recovery systems.</li>
      </ul>

      <h3>Risks</h3>
      <p>Cloud computing does not eliminate technology risks. Potential risks include service outages, misconfigured resources, data exposure, vendor dependency, unexpected costs, account compromise, compliance issues, and internet dependency.</p>

      <h3>Cloud cost management</h3>
      <p>Cloud resources can generate ongoing usage costs. Businesses should monitor: compute + storage + database + network transfer + software subscriptions + backup + monitoring = technology cost. A common mistake is deploying cloud resources and forgetting that unused resources can continue generating costs.</p>

      <hr />

      <h2>2. API Integration</h2>
      <h3>Definition</h3>
      <p>An API (Application Programming Interface) is a defined mechanism through which software systems communicate and exchange information or request actions. API integration connects different applications so they can work together.</p>
      <p>Application A → API request → API → response → Application B.</p>

      <h3>Example</h3>
      <p>Suppose an Xmarket website needs to communicate with a payment system, inventory system, shipping system, and customer database. Instead of manually copying information: order → payment API → payment confirmation → inventory API → inventory updated → shipping API → shipment created.</p>

      <h3>Common API operations</h3>
      <p>Many web APIs use HTTP methods such as:</p>
      <p><strong>GET</strong> — retrieve information.</p>
      <p><strong>POST</strong> — create or submit information.</p>
      <p><strong>PUT/PATCH</strong> — update information.</p>
      <p><strong>DELETE</strong> — remove information.</p>
      <p>A typical API interaction might conceptually look like: client → HTTPS request → API endpoint → authentication → business logic → database/external service → response → client.</p>

      <h3>API authentication</h3>
      <p>APIs often need mechanisms to determine whether a request is authorized. Common approaches include API keys, OAuth, access tokens, and signed requests. Credentials should be protected and should not be exposed in client-side code when they are intended to remain secret.</p>

      <h3>API errors</h3>
      <p>An integration should expect failures. Examples:</p>
      <ul>
        <li><strong>400</strong> — invalid request</li>
        <li><strong>401</strong> — authentication required/failed</li>
        <li><strong>403</strong> — access forbidden</li>
        <li><strong>404</strong> — resource not found</li>
        <li><strong>429</strong> — too many requests</li>
        <li><strong>500</strong> — server-side error</li>
      </ul>
      <p>The exact meaning can depend on the API implementation.</p>

      <h3>API integration best practices</h3>
      <ul>
        <li>Use HTTPS</li>
        <li>Authenticate requests properly</li>
        <li>Validate incoming data</li>
        <li>Handle errors</li>
        <li>Implement timeouts</li>
        <li>Respect rate limits</li>
        <li>Log appropriate events</li>
        <li>Protect secrets</li>
        <li>Version APIs when necessary</li>
        <li>Test failure scenarios</li>
      </ul>

      <hr />

      <h2>3. Business Automation</h2>
      <h3>Definition</h3>
      <p>Business automation is the use of technology to perform recurring business activities automatically according to defined rules, triggers, workflows, or conditions. It transforms: manual task → rule → automated action.</p>

      <h3>Example</h3>
      <p>A customer purchases a product.</p>
      <p><strong>Without automation:</strong> order → employee checks order → employee confirms payment → employee updates inventory → employee sends email → employee creates fulfillment task.</p>
      <p><strong>With automation:</strong> order received → payment confirmed → inventory updated → confirmation sent → fulfillment task created.</p>

      <h3>Types of business automation</h3>
      <p><strong>Marketing automation</strong> — email campaigns, lead nurturing, customer segmentation.</p>
      <p><strong>Sales automation</strong> — lead assignment, follow-up reminders, proposal generation.</p>
      <p><strong>Operations automation</strong> — inventory alerts, order processing, task creation.</p>
      <p><strong>Finance automation</strong> — invoice generation, payment reminders, expense categorization.</p>
      <p><strong>Customer service automation</strong> — ticket routing, notifications, FAQ responses.</p>

      <h3>Automation workflow</h3>
      <p>Trigger → condition → action → result → log.</p>
      <p>Example: new order → payment = successful? → yes → reduce inventory → send confirmation → create fulfillment task.</p>

      <h3>Automation selection</h3>
      <p>A good automation candidate is usually repetitive, rule-based, high-volume, predictable, digitally accessible, and time-consuming. Be cautious with automating activities requiring complex judgment, unusual exceptions, or high-risk decisions.</p>

      <h3>Automation ROI</h3>
      <p><strong>Automation ROI = (Net Benefit from Automation ÷ Automation Cost) × 100</strong></p>
      <p>Potential benefits include labor hours saved, faster processing, fewer errors, increased capacity, and better customer experience.</p>

      <hr />

      <h2>4. CRM Implementation</h2>
      <h3>Definition</h3>
      <p>CRM means Customer Relationship Management. A CRM system helps a business organize and manage customer information and interactions throughout the customer lifecycle.</p>
      <p>It can track customer profiles, leads, sales opportunities, communications, purchases, follow-ups, support cases, customer status, and sales pipeline.</p>

      <h3>CRM structure</h3>
      <p>CRM branches into customers, leads, and deals, then into interactions, follow-ups, and pipeline, all feeding into reporting.</p>

      <h3>CRM implementation process</h3>
      <ol>
        <li><strong>Define objectives.</strong> Examples: improve lead follow-up, reduce missed opportunities, improve customer retention, centralize customer information.</li>
        <li><strong>Define customer data.</strong> Determine what information is actually required.</li>
        <li><strong>Design customer lifecycle stages.</strong> For example: lead → qualified → opportunity → proposal → customer → repeat customer.</li>
        <li><strong>Configure workflows.</strong> Examples: new lead → assign salesperson → create follow-up task → contact lead → update status.</li>
        <li><strong>Integrate CRM.</strong> Connect the CRM with appropriate website, email, support system, marketing tools, and payment/order systems.</li>
        <li><strong>Train staff.</strong> Employees need to know what to enter, when to update records, how to manage opportunities, and how to protect customer information.</li>
        <li><strong>Measure adoption.</strong> A CRM that employees don't use consistently will contain incomplete or unreliable information.</li>
      </ol>

      <h3>CRM metrics</h3>
      <p><strong>Lead Conversion Rate = Customers Acquired ÷ Qualified Leads × 100</strong></p>
      <p><strong>Sales Pipeline Value = Σ Opportunity Values</strong></p>
      <p><strong>Customer Retention</strong> — measures how many customers remain active over a period.</p>
      <p><strong>CRM Adoption = Users Actively Using CRM ÷ Users Expected to Use CRM × 100</strong></p>

      <hr />

      <h2>5. Analytics Implementation</h2>
      <h3>Definition</h3>
      <p>Analytics implementation is the process of collecting, organizing, analyzing, and presenting business data so that managers can understand performance and make informed decisions.</p>
      <p>Business activity → data collection → data storage → data processing → analysis → dashboard/report → decision → action → new data.</p>

      <h3>Types of analytics</h3>
      <p><strong>Descriptive analytics</strong> — what happened? Example: sales were ₱500,000 last month.</p>
      <p><strong>Diagnostic analytics</strong> — why did it happen? Example: sales decreased because conversion declined in the mobile checkout.</p>
      <p><strong>Predictive analytics</strong> — what might happen? Example: demand may increase during the holiday period.</p>
      <p><strong>Prescriptive analytics</strong> — what actions could we take? Example: increase inventory and staffing before the expected demand increase.</p>

      <h3>Analytics implementation process</h3>
      <ol>
        <li><strong>Define business questions.</strong> Don't collect data simply because it is available. Ask: what decision do we need to improve?</li>
        <li><strong>Identify data sources.</strong> Examples: website, CRM, database, sales system, advertising platforms, customer support, and inventory system.</li>
        <li><strong>Define metrics.</strong> Examples: revenue, conversion, retention, CAC, AOV, inventory turnover, and response time.</li>
        <li><strong>Establish data collection.</strong> Make sure data is captured consistently.</li>
        <li><strong>Validate data.</strong> Check accuracy, completeness, duplicates, missing values, and incorrect classifications.</li>
        <li><strong>Build dashboards.</strong> Present information in a useful form.</li>
        <li><strong>Connect analytics to decisions.</strong> Data is valuable when it changes or improves action.</li>
      </ol>

      <h3>Example analytics funnel</h3>
      <p>For an ecommerce site: 100,000 visitors → 20,000 product views → 5,000 add to cart → 3,000 checkout → 2,000 purchases. The business can calculate conversion at each stage and investigate where customers are being lost.</p>

      <hr />

      <h2>6. Database Management</h2>
      <h3>Definition</h3>
      <p>Database management is the organization, storage, protection, maintenance, retrieval, and administration of structured business data.</p>
      <p>A database may store customers, products, orders, payments, inventory, employees, transactions, and website data.</p>

      <h3>Basic database structure</h3>
      <p>A relational database commonly organizes data into tables. Example tables: customers (customer_id, name, email, phone); products (product_id, name, price, stock); orders (order_id, customer_id, order_date, status); order_items (order_id, product_id, quantity, price). Relationships connect these tables.</p>
      <p>Customer → customer ID → order → order ID → order items → product ID → product.</p>

      <h3>Important database principles</h3>
      <p><strong>Data integrity</strong> — data should remain accurate and consistent.</p>
      <p><strong>Data validation</strong> — prevent invalid information from entering the system.</p>
      <p><strong>Normalization</strong> — organize data to reduce unnecessary duplication and inconsistency.</p>
      <p><strong>Indexing</strong> — indexes can improve query performance.</p>
      <p><strong>Transactions</strong> — database transactions help ensure related changes happen reliably according to defined rules.</p>
      <p><strong>Backups</strong> — critical data should be recoverable.</p>
      <p><strong>Access control</strong> — only authorized users and applications should access sensitive data.</p>

      <h3>CRUD</h3>
      <p>Many applications perform four fundamental database operations: <strong>C</strong>reate, <strong>R</strong>ead, <strong>U</strong>pdate, and <strong>D</strong>elete. Example: create customer, read customer, update customer, delete customer.</p>

      <h3>Database performance</h3>
      <p>As data grows, businesses may need to monitor query speed, storage usage, CPU/memory utilization, index performance, connection count, error rates, and replication health. Poor database design can become an operational bottleneck.</p>

      <hr />

      <h2>7. Cybersecurity Practices</h2>
      <h3>Definition</h3>
      <p>Cybersecurity is the protection of systems, networks, applications, accounts, and data against unauthorized access, disruption, alteration, destruction, and other digital threats.</p>
      <p>A useful security model is: Confidentiality + Integrity + Availability = core security objectives. This is commonly known as the CIA triad.</p>

      <h3>Confidentiality</h3>
      <p>Only authorized parties can access information. Example: customer records should not be accessible to unauthorized users.</p>

      <h3>Integrity</h3>
      <p>Information remains accurate and is not improperly modified. Example: an attacker should not be able to change an order from ₱500 to ₱5.</p>

      <h3>Availability</h3>
      <p>Systems and information remain available when needed. Example: customers should be able to access the marketplace when the service is supposed to be operating.</p>

      <h3>Essential cybersecurity practices</h3>
      <p><strong>Strong authentication</strong> — use strong passwords and, where appropriate, multi-factor authentication.</p>
      <p><strong>Least privilege</strong> — give users only the access they need.</p>
      <p><strong>Software updates</strong> — keep operating systems, applications, dependencies, and security tools appropriately updated.</p>
      <p><strong>Encryption</strong> — protect sensitive information during transmission and, where appropriate, while stored.</p>
      <p><strong>Secure backups</strong> — maintain recoverable copies of important information.</p>
      <p><strong>Monitoring</strong> — watch for suspicious activity.</p>
      <p><strong>Employee training</strong> — teach employees to recognize phishing, social engineering, suspicious attachments, fake login pages, and credential theft.</p>
      <p><strong>Incident response</strong> — have a plan for what happens when an incident occurs.</p>

      <h3>Security layers</h3>
      <p>Users → authentication → access control → application security → network security → database security → encryption → backup/recovery → monitoring. Security should be layered rather than dependent on a single control.</p>

      <hr />

      <h2>8. Backup Systems</h2>
      <h3>Definition</h3>
      <p>A backup system creates and maintains copies of important data so that information can be restored after accidental deletion, hardware failure, corruption, security incidents, or other disruptions. Backup is different from simply storing another copy on the same device.</p>

      <h3>Basic backup structure</h3>
      <p>Primary data → local backup, separate storage, off-site/cloud backup.</p>

      <h3>3-2-1 backup principle</h3>
      <p>A widely used backup strategy is: 3 copies of important data, 2 different types of storage, and 1 copy stored off-site. The exact strategy should depend on business risk and recovery requirements.</p>

      <h3>Backup types</h3>
      <p><strong>Full backup</strong> — copies all selected data.</p>
      <p><strong>Incremental backup</strong> — copies data changed since the previous backup.</p>
      <p><strong>Differential backup</strong> — copies data changed since the last full backup.</p>

      <h3>Backup frequency</h3>
      <p>Possible schedules: continuous, hourly, daily, weekly, monthly. The appropriate frequency depends on how much data the business can afford to lose.</p>

      <h3>RPO</h3>
      <p>Recovery Point Objective (RPO) describes how much recent data loss is acceptable. Example: RPO = 1 hour means the recovery design aims to limit data loss to approximately one hour of changes, subject to the actual system and recovery conditions.</p>

      <h3>RTO</h3>
      <p>Recovery Time Objective (RTO) describes how quickly a system should be restored after disruption. Example: RTO = 4 hours means the recovery objective is to restore service within approximately four hours.</p>

      <h3>Backup is not enough</h3>
      <p>A backup that has never been tested may not be reliable. A complete backup system includes: backup → verification → restore testing → monitoring → documentation → recovery.</p>

      <hr />

      <h2>9. Access-Control Management</h2>
      <h3>Definition</h3>
      <p>Access-control management is the process of determining who can access what resources, what actions they can perform, and under what conditions.</p>
      <p>It answers three fundamental questions: who are you? → what are you allowed to access? → what are you allowed to do?</p>

      <h3>Authentication vs authorization</h3>
      <p><strong>Authentication</strong> — determines who you are. Example: login using username and password.</p>
      <p><strong>Authorization</strong> — determines what you are allowed to do. Example: an administrator can modify inventory, while a customer can only view their own orders.</p>

      <h3>Role-based access control</h3>
      <p>RBAC assigns permissions according to roles.</p>
      <p><strong>Customer:</strong> view own orders; manage own profile.</p>
      <p><strong>Staff:</strong> view assigned orders; update order status; cannot change system security settings.</p>
      <p><strong>Manager:</strong> view reports; manage staff; approve selected operations.</p>
      <p><strong>Administrator:</strong> manage system configuration.</p>

      <h3>Least privilege</h3>
      <p>The principle of least privilege means users receive only the access necessary to perform their responsibilities. Instead of every employee having full access, employee A gets required permissions, employee B gets required permissions, manager gets additional permissions, and administrator gets administrative permissions. This reduces the potential impact of compromised accounts and accidental actions.</p>

      <h3>Access-control lifecycle</h3>
      <p>Employee joins → account created → role assigned → permissions granted → access monitored → role changes → permissions updated → employee leaves → access revoked.</p>

      <h3>Access reviews</h3>
      <p>Organizations should periodically check: who has access? Why do they have it? Is it still necessary? Are former employees disabled? Are privileged accounts justified? Are there unused accounts? Are permissions excessive?</p>

      <hr />

      <h2>10. Software Integration</h2>
      <h3>Definition</h3>
      <p>Software integration is the process of connecting multiple software applications so that information and workflows can move between them.</p>
      <p>API integration is one method of achieving software integration, but integration can also involve webhooks, file transfers, database connections, middleware, event systems, built-in connectors, and message queues.</p>

      <h3>Example business technology stack</h3>
      <p>Website branches into CRM, payment, and analytics, feeding into a database, which then branches into inventory, shipping, and reporting. The goal is to avoid isolated systems where employees must repeatedly copy information between applications.</p>

      <h3>Point-to-point integration</h3>
      <p>Two systems connect directly: System A ↔ System B. Simple for a small number of systems, but complexity can grow quickly.</p>

      <h3>Hub or middleware model</h3>
      <p>A central integration layer connects multiple applications: System A, B, C, D all connect through an integration layer. This can make larger integration environments easier to manage.</p>

      <h3>Integration example</h3>
      <p>Suppose an online store uses a website, CRM, payment system, inventory system, shipping system, and analytics. Customer places an order: website → payment → order confirmed → inventory updated → CRM customer activity updated → shipping request created → tracking information returned → customer notified → analytics recorded. One customer action can trigger multiple coordinated system activities.</p>

      <h3>API integration vs software integration</h3>
      <p><strong>API integration:</strong> uses an API to connect systems; one integration method; usually system-to-system communication; example: payment API.</p>
      <p><strong>Software integration:</strong> broader concept; includes many integration methods; can involve systems, data, workflows, middleware; example: complete ecommerce technology ecosystem.</p>
      <p>Software integration includes API, webhooks, middleware, file transfer, database integration, and other connectors.</p>

      <hr />

      <h2>Technology Architecture</h2>
      <p>A business technology environment can be structured into layers: users (customers, employees, managers) → applications/CRM (website, mobile, business apps) → integration/APIs (APIs, webhooks, middleware) → data (databases, analytics, files) → cloud/infrastructure (servers, storage, networking) → security (identity, access, encryption) → backup & recovery. Security should span all layers rather than exist as a separate afterthought.</p>

      <hr />

      <h2>Data Flow in a Modern Business</h2>
      <p>Consider an Xmarket-style marketplace. Customer → website → analytics and application; application → CRM and API/integration layer; integration layer → payment system, inventory, shipping; all → database → reporting and backups. Access control and cybersecurity should protect every important connection and system.</p>

      <hr />

      <h2>Technology Implementation Framework</h2>
      <p>A business should avoid adopting technology simply because it is new. Use a structured process:</p>
      <ol>
        <li>Identify problem.</li>
        <li>Define requirements.</li>
        <li>Map current process.</li>
        <li>Select technology.</li>
        <li>Design architecture.</li>
        <li>Implement.</li>
        <li>Integrate.</li>
        <li>Test.</li>
        <li>Train users.</li>
        <li>Monitor.</li>
        <li>Improve.</li>
      </ol>

      <hr />

      <h2>Technology Cost Analysis</h2>
      <p>Technology costs are more than the initial purchase price.</p>
      <p><strong>Total Technology Cost = Software + Infrastructure + Development + Integration + Training + Maintenance + Security + Backup + Support + Migration</strong></p>
      <p>A technology decision should therefore consider Total Cost of Ownership (TCO).</p>

      <hr />

      <h2>Technology Risk Management</h2>
      <p>Common technology risks include:</p>
      <ul>
        <li><strong>Cyberattack</strong> — account compromise — MFA, monitoring.</li>
        <li><strong>Data loss</strong> — database failure — backups.</li>
        <li><strong>Downtime</strong> — server outage — redundancy, recovery.</li>
        <li><strong>Integration failure</strong> — API unavailable — error handling, fallback.</li>
        <li><strong>Unauthorized access</strong> — excessive permissions — RBAC, least privilege.</li>
        <li><strong>Vendor dependency</strong> — provider changes — contingency planning.</li>
        <li><strong>Data corruption</strong> — invalid updates — validation, backups.</li>
        <li><strong>Cost escalation</strong> — excessive cloud usage — cost monitoring.</li>
        <li><strong>Human error</strong> — accidental deletion — permissions, recovery.</li>
        <li><strong>Software vulnerability</strong> — outdated dependency — patch management.</li>
      </ul>

      <hr />

      <h2>Technology Governance</h2>
      <p>As the business grows, technology needs rules. Technology governance can define who can create accounts, who can access customer data, which software is approved, how passwords are managed, how backups are performed, how incidents are reported, how software changes are approved, how data is retained, and how vendors are evaluated.</p>
      <p>Without governance: business grows → more software → more accounts → more data → more integrations → more complexity → higher risk. Good governance keeps that complexity manageable.</p>

      <hr />

      <h2>Technology Dashboard</h2>
      <p>A technology manager could monitor:</p>
      <ul>
        <li><strong>Infrastructure</strong> — availability</li>
        <li><strong>Cloud</strong> — monthly cost</li>
        <li><strong>APIs</strong> — error rate</li>
        <li><strong>Applications</strong> — response time</li>
        <li><strong>CRM</strong> — user adoption</li>
        <li><strong>Analytics</strong> — data completeness</li>
        <li><strong>Database</strong> — query performance</li>
        <li><strong>Security</strong> — security incidents</li>
        <li><strong>Backup</strong> — successful backup rate</li>
        <li><strong>Access</strong> — unnecessary accounts</li>
        <li><strong>Integration</strong> — failed transactions</li>
      </ul>

      <hr />

      <h2>Technology + Operations</h2>
      <p>Technology should support operations rather than exist separately.</p>
      <p>Operations problem → process is slow → process mapped → cause identified → suitable technology selected → automation/integration → performance measured → improved process.</p>
      <p>Technology is most useful when it solves a real operational or strategic problem.</p>

      <hr />

      <h2>Automation + API + Database</h2>
      <p>These three technologies often work together. Example: customer places order → website → API → order service → database → automation (update inventory, send confirmation, create fulfillment task, update CRM). This creates a connected digital workflow.</p>

      <hr />

      <h2>Security + Access + Backup</h2>
      <p>These three concepts address different problems.</p>
      <p><strong>Cybersecurity</strong> — how do we protect systems?</p>
      <p><strong>Access control</strong> — who is allowed to do what?</p>
      <p><strong>Backups</strong> — how do we recover if something goes wrong?</p>
      <p>They complement one another. Security controls reduce the probability and impact of incidents. Access control reduces unauthorized actions. Backups provide recovery capability when data is lost or corrupted.</p>

      <hr />

      <h2>Technology Maturity Levels</h2>
      <p><strong>Level 1 — Manual.</strong> Spreadsheets, manual emails, manual records.</p>
      <p><strong>Level 2 — Digital.</strong> Cloud applications, digital databases, online tools.</p>
      <p><strong>Level 3 — Integrated.</strong> CRM + website + payment + inventory + analytics.</p>
      <p><strong>Level 4 — Automated.</strong> Integrated systems → automated workflows → alerts → reports → reduced manual work.</p>
      <p><strong>Level 5 — Data-driven.</strong> Integrated data → analytics → forecasting → decision support → continuous optimization.</p>
      <p>The goal is not automatically to reach the highest level. Technology maturity should match the organization's needs, resources, risk profile, and complexity.</p>

      <hr />

      <h2>Complete Business Technology System</h2>
      <pre>{`BUSINESS STRATEGY
                                │
                                ▼
                        TECHNOLOGY OBJECTIVES
                                │
             ┌──────────────────┼──────────────────┐
             ▼                  ▼                  ▼
          CUSTOMERS          EMPLOYEES            DATA
             │                  │                  │
             ▼                  ▼                  ▼
            CRM            ACCESS CONTROL       DATABASE
             │                  │                  │
             └──────────────────┼──────────────────┘
                                ▼
                         APPLICATIONS
                                │
                                ▼
                       APIs / INTEGRATIONS
                                │
             ┌──────────────────┼──────────────────┐
             ▼                  ▼                  ▼
        PAYMENT SYSTEM       INVENTORY         SHIPPING
             │                  │                  │
             └──────────────────┼──────────────────┘
                                ▼
                         CLOUD INFRASTRUCTURE
                                │
             ┌──────────────────┴──────────────────┐
             ▼                                     ▼
        AUTOMATION                              ANALYTICS
             │                                     │
             └──────────────────┬──────────────────┘
                                ▼
                         BUSINESS DECISIONS
                                │
                                ▼
                         BUSINESS RESULTS
                                │
                                ▼
                      CONTINUOUS IMPROVEMENT`}</pre>

      <hr />

      <h2>Technology Management Principles</h2>
      <ol>
        <li><strong>Technology should solve problems.</strong> Do not adopt technology merely because it is fashionable.</li>
        <li><strong>Start with the business requirement.</strong> Define what the organization needs before selecting the software.</li>
        <li><strong>Keep systems integrated where useful.</strong> Disconnected systems create duplicate work and inconsistent information.</li>
        <li><strong>Protect data from the beginning.</strong> Security should be designed into the architecture rather than added after an incident.</li>
        <li><strong>Use least privilege.</strong> Users and applications should have only the permissions they need.</li>
        <li><strong>Back up important data.</strong> Assume that hardware, software, human, and security failures can happen.</li>
        <li><strong>Test recovery.</strong> A backup is only useful if it can actually be restored.</li>
        <li><strong>Automate stable processes.</strong> Understand and simplify the workflow before automating it.</li>
        <li><strong>Measure technology performance.</strong> Monitor availability, errors, costs, security, performance, and adoption.</li>
        <li><strong>Design for change.</strong> Technology systems should be maintainable and adaptable as the business grows.</li>
      </ol>

      <hr />

      <h2>The Complete Technology Flywheel</h2>
      <pre>{`BUSINESS NEED
             ↓
        REQUIREMENTS
             ↓
       PROCESS DESIGN
             ↓
     TECHNOLOGY SELECTION
             ↓
          DATABASE
             ↓
       APPLICATIONS
             ↓
     APIs / INTEGRATIONS
             ↓
        AUTOMATION
             ↓
          ANALYTICS
             ↓
      BUSINESS DECISION
             ↓
       PERFORMANCE DATA
             ↓
     SECURITY MONITORING
             ↓
       BACKUP / RECOVERY
             ↓
      SYSTEM IMPROVEMENT
             ↓
        NEW BUSINESS NEED`}</pre>

      <h3>The central principle of business technology</h3>
      <p>Technology should create a reliable digital infrastructure in which people, applications, data, and business processes can work together securely, efficiently, and measurably.</p>
      <p>Cloud computing provides infrastructure, APIs enable communication, automation executes repeatable work, CRM systems organize customer relationships, analytics turns data into information, databases store business information, cybersecurity protects the environment, backups provide recovery capability, access control governs permissions, and software integration connects the entire ecosystem into a functioning business technology system.</p>
    </LessonLayout>
  )
}
