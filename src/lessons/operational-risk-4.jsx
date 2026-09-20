import LessonLayout from '../components/LessonLayout'

export default function OperationalRisk4() {
  return (
    <LessonLayout
      number="353"
      title="Operational Risk — Part 4"
      summary="Technology, security, and process risks explained — software, hardware, network, and database failure, cyber incidents, physical-security incidents, theft, fraud, process inefficiency, and poor scheduling."
    >
      <h2>Operational Risk — Part 4</h2>

      <h2>1. Software Outage</h2>
      <p><strong>What it is:</strong> Software becomes unavailable.</p>
      <p><strong>How to do it:</strong> Monitoring; failover; rollback.</p>

      <h2>2. Hardware Failure</h2>
      <p><strong>What it is:</strong> Physical servers or devices fail.</p>
      <p><strong>How to do it:</strong> Spares; warranty; redundancy.</p>

      <h2>3. Network Failure</h2>
      <p><strong>What it is:</strong> Network becomes unavailable or degraded.</p>
      <p><strong>How to do it:</strong> Redundant paths; monitoring; backup links.</p>

      <h2>4. Database Failure</h2>
      <p><strong>What it is:</strong> Data becomes unavailable or corrupted.</p>
      <p><strong>How to do it:</strong> Replication; backups; restore testing.</p>

      <h2>5. Cyber Incident</h2>
      <p><strong>What it is:</strong> A security event affecting systems.</p>
      <p><strong>How to do it:</strong> Detection; incident response; forensics.</p>

      <h2>6. Physical-Security Incident</h2>
      <p><strong>What it is:</strong> Breach of physical security.</p>
      <p><strong>How to do it:</strong> Access control; cameras; response plans.</p>

      <h2>7. Theft</h2>
      <p><strong>What it is:</strong> Unauthorized taking of assets.</p>
      <p><strong>How to do it:</strong> Physical controls; audits; monitoring.</p>

      <h2>8. Fraud</h2>
      <p><strong>What it is:</strong> Intentional deception for gain.</p>
      <p><strong>How to do it:</strong> Segregation of duties; controls; monitoring; audits.</p>

      <h2>9. Process Inefficiency</h2>
      <p><strong>What it is:</strong> Processes consume excess resources.</p>
      <p><strong>How to do it:</strong> Map; measure; improve; automate.</p>

      <h2>10. Poor Scheduling</h2>
      <p><strong>What it is:</strong> Scheduling creates bottlenecks or idle time.</p>
      <p><strong>How to do it:</strong> Demand-based scheduling; capacity planning.</p>
    </LessonLayout>
  )
}
