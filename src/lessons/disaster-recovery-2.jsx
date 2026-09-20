import LessonLayout from '../components/LessonLayout'

export default function DisasterRecovery2() {
  return (
    <LessonLayout
      number="431"
      title="Disaster Recovery — Part 2"
      summary="Backup strategy explained — strategy and schedule, full, incremental, differential, off-site, cloud, offline, immutable, and encrypted backups."
    >
      <h2>Disaster Recovery — Part 2</h2>

      <h2>1. Backup Strategy</h2>
      <p><strong>What it is:</strong> The plan for backups.</p>
      <p><strong>How to do it:</strong> Scope; frequency; retention; testing.</p>

      <h2>2. Backup Schedule</h2>
      <p><strong>What it is:</strong> When backups run.</p>
      <p><strong>How to do it:</strong> Aligned with RPO; automated.</p>

      <h2>3. Full Backup</h2>
      <p><strong>What it is:</strong> Complete backup of all data.</p>
      <p><strong>Use when:</strong> Establishing a baseline or for critical data.</p>

      <h2>4. Incremental Backup</h2>
      <p><strong>What it is:</strong> Backup of changes since last backup.</p>
      <p><strong>Use when:</strong> Efficiency matters; restore requires chain.</p>

      <h2>5. Differential Backup</h2>
      <p><strong>What it is:</strong> Backup of changes since last full.</p>
      <p><strong>Use when:</strong> Balancing speed and simplicity of restore.</p>

      <h2>6. Off-Site Backup</h2>
      <p><strong>What it is:</strong> Backups stored elsewhere.</p>
      <p><strong>Use when:</strong> Local disaster could destroy backups.</p>

      <h2>7. Cloud Backup</h2>
      <p><strong>What it is:</strong> Backups in the cloud.</p>
      <p><strong>Use when:</strong> Reliability, redundancy, and accessibility matter.</p>

      <h2>8. Offline Backup</h2>
      <p><strong>What it is:</strong> Backup disconnected from networks.</p>
      <p><strong>Use when:</strong> Ransomware or insider risk is significant.</p>

      <h2>9. Immutable Backup</h2>
      <p><strong>What it is:</strong> Backup that cannot be altered or deleted.</p>
      <p><strong>Use when:</strong> Protection from ransomware is critical.</p>

      <h2>10. Encrypted Backup</h2>
      <p><strong>What it is:</strong> Backup that is encrypted.</p>
      <p><strong>Use when:</strong> Data sensitivity or regulatory requirements demand it.</p>
    </LessonLayout>
  )
}
