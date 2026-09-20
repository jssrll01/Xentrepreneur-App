import LessonLayout from '../components/LessonLayout'

export default function DisasterRecovery1() {
  return (
    <LessonLayout
      number="430"
      title="Disaster Recovery — Part 1"
      summary="Disaster recovery fundamentals explained — DR, IT DR, data, system, application, network, cloud, server, database, and website recovery."
    >
      <h2>Disaster Recovery — Part 1</h2>
      <p>Disaster recovery (DR) is the discipline of restoring critical technology and data after a disruption. It sits inside business continuity but focuses specifically on the technical side — systems, data, and infrastructure. DR is measured in time (how long until recovery) and data (how much may be lost).</p>

      <h2>1. Disaster Recovery</h2>
      <p><strong>What it is:</strong> Restoring technology after disruption.</p>
      <p><strong>How to do it:</strong> Plan; test; resource; iterate.</p>

      <h2>2. IT Disaster Recovery</h2>
      <p><strong>What it is:</strong> DR focused on IT systems.</p>
      <p><strong>How to do it:</strong> Backups; failover; testing.</p>

      <h2>3. Data Recovery</h2>
      <p><strong>What it is:</strong> Restoring data.</p>
      <p><strong>How to do it:</strong> Backups; verified restores.</p>

      <h2>4. System Recovery</h2>
      <p><strong>What it is:</strong> Restoring systems.</p>
      <p><strong>How to do it:</strong> Images; configuration; testing.</p>

      <h2>5. Application Recovery</h2>
      <p><strong>What it is:</strong> Restoring applications.</p>
      <p><strong>How to do it:</strong> Dependency mapping; restore order.</p>

      <h2>6. Network Recovery</h2>
      <p><strong>What it is:</strong> Restoring network connectivity.</p>
      <p><strong>How to do it:</strong> Redundant paths; alternate providers.</p>

      <h2>7. Cloud Recovery</h2>
      <p><strong>What it is:</strong> Recovery using cloud services.</p>
      <p><strong>How to do it:</strong> Multi-region; backups; failover.</p>

      <h2>8. Server Recovery</h2>
      <p><strong>What it is:</strong> Restoring servers.</p>
      <p><strong>How to do it:</strong> Images; snapshots; alternates.</p>

      <h2>9. Database Recovery</h2>
      <p><strong>What it is:</strong> Restoring databases.</p>
      <p><strong>How to do it:</strong> Replication; backups; point-in-time.</p>

      <h2>10. Website Recovery</h2>
      <p><strong>What it is:</strong> Restoring websites.</p>
      <p><strong>How to do it:</strong> Static backups; CDN; alternate hosting.</p>
    </LessonLayout>
  )
}
