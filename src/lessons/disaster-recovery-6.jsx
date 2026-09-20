import LessonLayout from '../components/LessonLayout'

export default function DisasterRecovery6() {
  return (
    <LessonLayout
      number="435"
      title="Disaster Recovery — Part 6"
      summary="High availability and redundancy explained — cloud failover, geographic and network and power and storage redundancy, database and data and system replication, high availability, and fault tolerance."
    >
      <h2>Disaster Recovery — Part 6</h2>

      <h2>1. Cloud Failover</h2>
      <p><strong>What it is:</strong> Failover to cloud infrastructure.</p>
      <p><strong>How to do it:</strong> Multi-region; automated; tested.</p>

      <h2>2. Geographic Redundancy</h2>
      <p><strong>What it is:</strong> Redundancy across geographies.</p>
      <p><strong>How to do it:</strong> Multiple regions or zones.</p>

      <h2>3. Network Redundancy</h2>
      <p><strong>What it is:</strong> Redundant network paths.</p>
      <p><strong>How to do it:</strong> Multiple ISPs; alternate routes.</p>

      <h2>4. Power Redundancy</h2>
      <p><strong>What it is:</strong> Redundant power.</p>
      <p><strong>How to do it:</strong> Generators; UPS; dual feeds.</p>

      <h2>5. Storage Redundancy</h2>
      <p><strong>What it is:</strong> Redundant storage.</p>
      <p><strong>How to do it:</strong> RAID; replication; cloud storage.</p>

      <h2>6. Database Replication</h2>
      <p><strong>What it is:</strong> Replicating databases.</p>
      <p><strong>How to do it:</strong> Synchronous or asynchronous.</p>

      <h2>7. Data Replication</h2>
      <p><strong>What it is:</strong> Replicating data.</p>
      <p><strong>How to do it:</strong> Real-time or batch.</p>

      <h2>8. System Replication</h2>
      <p><strong>What it is:</strong> Replicating systems.</p>
      <p><strong>How to do it:</strong> Images; snapshots; replicas.</p>

      <h2>9. High Availability</h2>
      <p><strong>What it is:</strong> Systems designed to remain available.</p>
      <p><strong>How to do it:</strong> Redundancy; failover; monitoring.</p>

      <h2>10. Fault Tolerance</h2>
      <p><strong>What it is:</strong> Systems that continue despite failures.</p>
      <p><strong>How to do it:</strong> Redundant components; graceful degradation.</p>
    </LessonLayout>
  )
}
