import LessonLayout from '../components/LessonLayout'

export default function DisasterRecovery5() {
  return (
    <LessonLayout
      number="434"
      title="Disaster Recovery — Part 5"
      summary="Recovery planning and dependencies explained — maximum tolerable downtime, recovery sequence and dependencies, recovery resources and budget, alternate infrastructure, backup servers, redundant servers, DR site, and alternate facility."
    >
      <h2>Disaster Recovery — Part 5</h2>

      <h2>1. Maximum Tolerable Downtime</h2>
      <p><strong>What it is:</strong> Absolute downtime limit.</p>
      <p><strong>How to do it:</strong> Determined by impact; drives RTO.</p>

      <h2>2. Recovery Sequence</h2>
      <p><strong>What it is:</strong> Order of recovery.</p>
      <p><strong>How to do it:</strong> Based on dependencies.</p>

      <h2>3. Recovery Dependencies</h2>
      <p><strong>What they are:</strong> What must be recovered first.</p>
      <p><strong>How to do it:</strong> Mapped; sequenced; documented.</p>

      <h2>4. Recovery Resources</h2>
      <p><strong>What they are:</strong> Resources for recovery.</p>
      <p><strong>How to do it:</strong> People; systems; facilities.</p>

      <h2>5. Recovery Budget</h2>
      <p><strong>What it is:</strong> Budget for recovery.</p>
      <p><strong>How to do it:</strong> Reserve; pre-approved.</p>

      <h2>6. Alternate Infrastructure</h2>
      <p><strong>What it is:</strong> Alternate infrastructure.</p>
      <p><strong>How to do it:</strong> Cloud; colocation; DR site.</p>

      <h2>7. Backup Servers</h2>
      <p><strong>What they are:</strong> Backup servers.</p>
      <p><strong>How to do it:</strong> Pre-configured; ready.</p>

      <h2>8. Redundant Servers</h2>
      <p><strong>What they are:</strong> Duplicate servers.</p>
      <p><strong>How to do it:</strong> Active-passive or active-active.</p>

      <h2>9. Disaster-Recovery Site</h2>
      <p><strong>What it is:</strong> A dedicated DR facility.</p>
      <p><strong>How to do it:</strong> Hot; warm; or cold site.</p>

      <h2>10. Alternate Facility</h2>
      <p><strong>What it is:</strong> Alternate location for operations.</p>
      <p><strong>How to do it:</strong> Pre-arranged; equipped.</p>
    </LessonLayout>
  )
}
