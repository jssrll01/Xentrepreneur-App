import LessonLayout from '../components/LessonLayout'

export default function Costs1() {
  return (
    <LessonLayout
      number="152"
      title="Costs — Part 1"
      summary="16 core cost categories — fixed, variable, semi-variable, direct, indirect, operating, production, labor, material, inventory, procurement, shipping, delivery, packaging, storage, and warehouse costs."
    >
      <h2>Costs — Part 1</h2>
      <p>Costs are the resources a business consumes to create, deliver, sell, and operate its products or services. Different cost categories behave differently with output and affect profit analysis in distinct ways.</p>

      <h2>1. Fixed Costs</h2>
      <p>Costs that generally do not change with output or sales within a relevant range and period.</p>
      <p>Examples: rent, salaried staff, insurance, certain software subscriptions, equipment depreciation, licenses.</p>
      <p>Fixed costs per unit fall as output rises, increasing operating leverage risk when revenue drops.</p>

      <h2>2. Variable Costs</h2>
      <p>Costs that change with output or sales volume.</p>
      <p>Examples: raw materials, packaging, per-unit shipping, payment fees, sales commissions, per-unit production labor.</p>
      <p><strong>Total Variable Cost = Variable Cost per Unit × Quantity</strong></p>

      <h2>3. Semi-Variable Costs</h2>
      <p>Costs with both fixed and variable components.</p>
      <p>Example: electricity — a fixed base charge plus usage-based charges. Also: certain salaries plus overtime, phone plans with base plus usage.</p>

      <h2>4. Direct Costs</h2>
      <p>Costs that can be directly attributed to a product, service, customer, or project.</p>
      <p>Examples: materials for one product, direct labor on a project, packaging for one order.</p>

      <h2>5. Indirect Costs</h2>
      <p>Costs supporting multiple products, services, or activities.</p>
      <p>Examples: general office rent, management salaries, shared software, utilities, accounting.</p>
      <p>Allocation requires a consistent method when computing product/customer profitability.</p>

      <h2>6. Operating Costs</h2>
      <p>Costs incurred in normal business operations after direct product/service costs.</p>
      <p>Examples: salaries, rent, marketing, utilities, admin, insurance, software.</p>
      <p><strong>Operating Profit = Gross Profit − Operating Expenses</strong></p>

      <h2>7. Production Costs</h2>
      <p>Costs of creating products or production-based services.</p>
      <p><strong>Production Cost = Direct Materials + Direct Labor + Manufacturing Overhead</strong></p>

      <h2>8. Labor Costs</h2>
      <p>Costs of employing or contracting people.</p>
      <p>Includes wages, salaries, overtime, benefits, employer contributions, recruitment, training, and payroll administration.</p>

      <h2>9. Material Costs</h2>
      <p>Costs of physical inputs used to create or deliver products.</p>
      <p>Examples: raw materials, components, parts, packaging, labels, consumables.</p>
      <p>Evaluate total cost, not just purchase price — quality, defects, and reliability matter.</p>

      <h2>10. Inventory Costs</h2>
      <p>Costs of purchasing, holding, managing, moving, and disposing of inventory.</p>
      <p>Includes purchase, storage, insurance, security, handling, damage, spoilage, obsolescence, and capital tied up.</p>
      <p><strong>Annual Carrying Cost = Average Inventory Value × Carrying-Cost Rate</strong></p>

      <h2>11. Procurement Costs</h2>
      <p>Costs of acquiring materials, products, or services.</p>
      <p>Includes search, supplier verification, negotiation, purchase order processing, inspection, payment administration, and inbound logistics.</p>

      <h2>12. Shipping Costs</h2>
      <p>Costs of moving goods from suppliers or between facilities.</p>
      <p>Includes freight, insurance, fuel surcharges, customs clearance, and handling.</p>

      <h2>13. Delivery Costs</h2>
      <p>Costs of moving finished products to customers.</p>
      <p>Includes last-mile delivery, couriers, fuel, vehicle costs, driver costs, packaging for delivery, and failed-delivery costs.</p>

      <h2>14. Packaging Costs</h2>
      <p>Costs of packaging products for storage, shipping, or sale.</p>
      <p>Examples: boxes, bags, labels, protective materials, branded packaging, packing labor.</p>

      <h2>15. Storage Costs</h2>
      <p>Costs of holding inventory or equipment over time.</p>
      <p>Includes rent for storage space, shelving, security, insurance, utilities, and inventory monitoring.</p>

      <h2>16. Warehouse Costs</h2>
      <p>Costs of operating a warehouse or distribution facility.</p>
      <p>Includes rent, labor, equipment (forklifts, scanners), utilities, security, maintenance, and inventory management software.</p>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Fixed costs do not change directly with output within a relevant operating range.</li>
        <li>Variable costs change with production or sales volume.</li>
        <li>Semi-variable costs have both fixed and variable components.</li>
        <li>Direct costs can be attributed to a specific unit, project, or customer.</li>
        <li>Indirect costs support multiple activities and require consistent allocation.</li>
        <li>Operating costs are the ongoing expenses of running the business.</li>
        <li>Production costs include direct materials, direct labor, and overhead.</li>
        <li>Labor costs include more than wages.</li>
        <li>Material costs should be evaluated with quality and reliability, not price alone.</li>
        <li>Inventory costs include holding and opportunity costs, not only purchase price.</li>
        <li>Procurement costs extend beyond the quoted supplier price.</li>
        <li>Shipping and delivery costs are separate stages with distinct economics.</li>
        <li>Packaging costs affect both product protection and customer experience.</li>
        <li>Storage and warehouse costs are driven by capacity, turnover, and location.</li>
        <li>Cost structure determines how profit responds to changes in volume.</li>
        <li>Cost classification depends on the decision being analyzed.</li>
      </ol>
    </LessonLayout>
  )
}
