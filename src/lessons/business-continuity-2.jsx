import LessonLayout from '../components/LessonLayout'

export default function BusinessContinuity2() {
  return (
    <LessonLayout
      number="421"
      title="Business Continuity — Part 2"
      summary="Continuity strategy and objectives explained — strategy, policy, objectives, recovery objectives, RTO, RPO, MTD, MBCO, continuity team, and continuity coordinator."
    >
      <h2>Business Continuity — Part 2</h2>

      <h2>1. Continuity Strategy</h2>
      <p><strong>What it is:</strong> The approach for continuity.</p>
      <p><strong>How to do it:</strong> Prioritize; invest; align with business.</p>

      <h2>2. Continuity Policy</h2>
      <p><strong>What it is:</strong> Policy guiding continuity.</p>
      <p><strong>How to do it:</strong> Written; approved; communicated.</p>

      <h2>3. Continuity Objectives</h2>
      <p><strong>What they are:</strong> What continuity should achieve.</p>
      <p><strong>How to do it:</strong> Measurable; aligned to risk.</p>

      <h2>4. Recovery Objectives</h2>
      <p><strong>What they are:</strong> Targets for recovery.</p>
      <p><strong>How to do it:</strong> RTO; RPO; per system.</p>

      <h2>5. Recovery Time Objective</h2>
      <p><strong>What it is:</strong> Maximum acceptable downtime.</p>
      <p><strong>How to do it:</strong> By system; by function.</p>

      <h2>6. Recovery Point Objective</h2>
      <p><strong>What it is:</strong> Maximum acceptable data loss.</p>
      <p><strong>How to do it:</strong> Determines backup frequency.</p>

      <h2>7. Maximum Tolerable Downtime</h2>
      <p><strong>What it is:</strong> Absolute downtime limit.</p>
      <p><strong>How to do it:</strong> Determined by impact; drives RTO.</p>

      <h2>8. Minimum Business Continuity Objective</h2>
      <p><strong>What it is:</strong> Minimum acceptable capability during disruption.</p>
      <p><strong>How to do it:</strong> Defined per function.</p>

      <h2>9. Continuity Team</h2>
      <p><strong>What it is:</strong> The team responsible for continuity.</p>
      <p><strong>How to do it:</strong> Named; trained; on call.</p>

      <h2>10. Continuity Coordinator</h2>
      <p><strong>What it is:</strong> The person who coordinates BC.</p>
      <p><strong>How to do it:</strong> Senior; accountable; empowered.</p>
    </LessonLayout>
  )
}
