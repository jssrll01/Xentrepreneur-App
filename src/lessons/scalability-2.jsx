import LessonLayout from '../components/LessonLayout'

export default function Scalability2() {
  return (
    <LessonLayout
      number="200"
      title="Scalability — Part 2"
      summary="14 technology and architecture scalability categories — automated processes, standardized processes, repeatable workflows, digital distribution, cloud infrastructure, SaaS, API, modular, microservices, database, horizontal and vertical scaling, load balancing, and CDNs."
    >
      <h2>Scalability — Part 2</h2>

      <h2>Automated Processes</h2>
      <p>Software performs repetitive tasks automatically.</p>

      <h2>Standardized Processes</h2>
      <p>Work is performed according to consistent procedures.</p>

      <h2>Repeatable Workflows</h2>
      <p>A process can be repeated with predictable results.</p>

      <h2>Digital Distribution</h2>
      <p>Products are distributed digitally rather than physically.</p>
      <p>Examples: software, courses, e-books, templates, and digital media.</p>

      <h2>Cloud Infrastructure</h2>
      <p>Computing resources are delivered through cloud providers and can often be scaled according to workload.</p>

      <h2>SaaS Architecture</h2>
      <p>Software is delivered as a service to many customers through shared or logically separated infrastructure.</p>

      <h2>API Architecture</h2>
      <p>APIs allow systems and applications to communicate programmatically.</p>

      <h2>Modular Architecture</h2>
      <p>Systems are divided into components that can be developed, replaced, or scaled independently where appropriate.</p>

      <h2>Microservices</h2>
      <p>An architectural approach in which application functionality is divided into relatively independent services. It can improve independent scaling but also increases operational complexity.</p>

      <h2>Database Scalability</h2>
      <p>Ability of a database system to handle increasing: records, queries, transactions, and users.</p>

      <h2>Horizontal Scaling</h2>
      <p>Add more machines/instances.</p>
      <pre>{`1 Server
   ↓
3 Servers
   ↓
10 Servers`}</pre>

      <h2>Vertical Scaling</h2>
      <p>Increase the resources of an existing machine.</p>
      <pre>{`4 CPU / 8GB RAM
       ↓
8 CPU / 32GB RAM`}</pre>

      <h2>Load Balancing</h2>
      <p>Distributes incoming traffic across multiple servers or instances.</p>

      <h2>Content Delivery Networks</h2>
      <p>CDNs distribute cached content closer to users to improve performance and reduce load on the origin infrastructure.</p>

      <h3>Technology Scalability</h3>
      <pre>{`More Users
    ↓
More Requests
    ↓
Load Balancing
    ↓
Application Scaling
    ↓
Database Scaling
    ↓
Caching / CDN
    ↓
Monitoring`}</pre>
    </LessonLayout>
  )
}
