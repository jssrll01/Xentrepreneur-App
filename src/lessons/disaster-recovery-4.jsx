import LessonLayout from '../components/LessonLayout'

export default function DisasterRecovery4() {
  return (
    <LessonLayout
      number="433"
      title="Disaster Recovery — Part 4"
      summary="Recovery team and priorities explained — recovery team, roles, responsibilities, priorities, critical systems, applications, data, and infrastructure, RTO, and RPO."
    >
      <h2>Disaster Recovery — Part 4</h2>

      <h2>1. Recovery Team</h2>
      <p><strong>What it is:</strong> The team managing recovery.</p>
      <p><strong>How to do it:</strong> Named; trained; on call.</p>

      <h2>2. Recovery Roles</h2>
      <p><strong>What they are:</strong> Roles during recovery.</p>
      <p><strong>How to do it:</strong> Assigned; documented.</p>

      <h2>3. Recovery Responsibilities</h2>
      <p><strong>What they are:</strong> Responsibilities during recovery.</p>
      <p><strong>How to do it:</strong> Clear; documented; practiced.</p>

      <h2>4. Recovery Priorities</h2>
      <p><strong>What they are:</strong> What to recover first.</p>
      <p><strong>How to do it:</strong> Impact-based; documented.</p>

      <h2>5. Critical Systems</h2>
      <p><strong>What they are:</strong> Systems essential to operations.</p>
      <p><strong>How to do it:</strong> Identify; prioritize; protect.</p>

      <h2>6. Critical Applications</h2>
      <p><strong>What they are:</strong> Applications essential to operations.</p>
      <p><strong>How to do it:</strong> Identify; prioritize; recover.</p>

      <h2>7. Critical Data</h2>
      <p><strong>What it is:</strong> Data essential to operations.</p>
      <p><strong>How to do it:</strong> Classify; back up; protect.</p>

      <h2>8. Critical Infrastructure</h2>
      <p><strong>What it is:</strong> Infrastructure essential to operations.</p>
      <p><strong>How to do it:</strong> Redundancy; monitoring; recovery.</p>

      <h2>9. Recovery Time Objective</h2>
      <p><strong>What it is:</strong> Target time to recover.</p>
      <p><strong>How to do it:</strong> By system; by function.</p>

      <h2>10. Recovery Point Objective</h2>
      <p><strong>What it is:</strong> Target data loss.</p>
      <p><strong>How to do it:</strong> Determines backup frequency.</p>
    </LessonLayout>
  )
}
