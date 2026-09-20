import LessonLayout from '../components/LessonLayout'

export default function OperationalRisk1() {
  return (
    <LessonLayout
      number="350"
      title="Operational Risk — Part 1"
      summary="Operational failure risk explained — process, human, system, equipment, production, quality, delivery, inventory, supplier, and vendor failure."
    >
      <h2>Operational Risk — Part 1</h2>
      <p>Operational risk is the risk that day-to-day operations fail — through people, processes, systems, equipment, or partners. Unlike financial or market risk, operational risk is largely internal and manageable through discipline, redundancy, and improvement.</p>

      <h2>1. Process Failure</h2>
      <p><strong>What it is:</strong> A core process does not perform as intended.</p>
      <p><strong>How it works:</strong> Errors compound; outputs fail to meet requirements; downstream steps break.</p>
      <p><strong>How to do it:</strong> Map processes; define controls; measure; improve.</p>

      <h2>2. Human Error</h2>
      <p><strong>What it is:</strong> Mistakes by people performing work.</p>
      <p><strong>How to do it:</strong> Training; checklists; automation; double-checks on critical steps.</p>

      <h2>3. System Failure</h2>
      <p><strong>What it is:</strong> Software or hardware fails.</p>
      <p><strong>How to do it:</strong> Monitoring; redundancy; failover; backups.</p>

      <h2>4. Equipment Failure</h2>
      <p><strong>What it is:</strong> Physical equipment stops working.</p>
      <p><strong>How to do it:</strong> Preventive maintenance; spare parts; backups.</p>

      <h2>5. Production Failure</h2>
      <p><strong>What it is:</strong> Production cannot meet requirements.</p>
      <p><strong>How to do it:</strong> Capacity planning; quality control; contingency.</p>

      <h2>6. Quality Failure</h2>
      <p><strong>What it is:</strong> Product or service fails to meet standards.</p>
      <p><strong>How to do it:</strong> QA/QC; testing; corrective action.</p>

      <h2>7. Delivery Failure</h2>
      <p><strong>What it is:</strong> Delivery is late, incomplete, or wrong.</p>
      <p><strong>How to do it:</strong> Logistics controls; tracking; service recovery.</p>

      <h2>8. Inventory Failure</h2>
      <p><strong>What it is:</strong> Inventory is unavailable, excess, or inaccurate.</p>
      <p><strong>How to do it:</strong> Forecasting; cycle counts; turnover.</p>

      <h2>9. Supplier Failure</h2>
      <p><strong>What it is:</strong> A supplier cannot fulfill obligations.</p>
      <p><strong>How to do it:</strong> Multiple suppliers; monitoring; contingency.</p>

      <h2>10. Vendor Failure</h2>
      <p><strong>What it is:</strong> A vendor fails to deliver.</p>
      <p><strong>How to do it:</strong> Contracts; SLAs; exit plans.</p>
    </LessonLayout>
  )
}
