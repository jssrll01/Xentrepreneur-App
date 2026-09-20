import LessonLayout from '../components/LessonLayout'

export default function GeographicBusinessPart3() {
  return (
    <LessonLayout
      number="91"
      title="Geographic Business Strategies — Part 3"
      summary="12 territory and targeting systems — franchise, distribution, sales, and exclusive territories; geographic segmentation, location-based advertising, radius, proximity, geofencing, regional, city, and neighborhood campaigns."
    >
      <h2>Geographic Business Strategies — Part 3</h2>
      <p>
        Geographic business strategy is not only about deciding where a business operates. It
        also involves deciding who controls a market, who sells within it, how customers are
        segmented, and how marketing changes according to geographic context.
      </p>
      <p>This part focuses on territory management, geographic targeting, and increasingly localized campaigns.</p>

      <hr />

      <h2>1. Franchise Territories</h2>
      <h3>Definition</h3>
      <p>A franchise territory is a defined geographic area assigned to a franchisee for operating a franchised business under the franchisor's brand and system.</p>
      <p>Depending on the franchise agreement, the territory may be exclusive, protected, non-exclusive, defined by radius, defined by city, defined by population, defined by customer accounts, or defined by a combination of geographic and operational boundaries.</p>

      <h3>How It Works</h3>
      <pre>{`Franchisor
 ↓
Franchise Agreement
 ↓
Territory Definition
 ↓
Franchisee
 ↓
Local Operations
 ↓
Customers`}</pre>

      <h3>How to Implement</h3>
      <ol>
        <li>Research population and demand.</li>
        <li>Identify existing franchise locations.</li>
        <li>Analyze competition.</li>
        <li>Estimate potential revenue.</li>
        <li>Determine practical geographic boundaries.</li>
        <li>Define franchisee rights.</li>
        <li>Establish performance requirements.</li>
        <li>Specify whether online sales are included.</li>
        <li>Define territory modification rules.</li>
        <li>Document the arrangement in the franchise agreement.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Clear geographic responsibility</li>
        <li>Organized expansion</li>
        <li>Local accountability</li>
        <li>Reduced internal competition when appropriately structured</li>
        <li>Easier franchise planning</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>A territory may be too small to support the franchisee.</li>
        <li>A territory may be too large to serve effectively.</li>
        <li>Customer demand can change.</li>
        <li>Franchisees can conflict over boundaries.</li>
        <li>Online sales can complicate geographic rights.</li>
      </ul>

      <h3>Important Principle</h3>
      <p>A territory should be designed around demand + population + competition + customer density + operating capacity + economics.</p>

      <hr />

      <h2>2. Distribution Territories</h2>
      <h3>Definition</h3>
      <p>A distribution territory is a geographic market assigned to a distributor for supplying or selling products.</p>
      <p>The distributor might supply retailers, wholesalers, businesses, resellers, institutions, or other distributors.</p>

      <h3>Implementation</h3>
      <p>A company should evaluate customer concentration, sales potential, transportation costs, warehouse capacity, existing customers, distributor capabilities, delivery requirements, competition.</p>

      <h3>Key Metrics</h3>
      <p>Territory revenue, sell-in, sell-through, distribution coverage, inventory turnover, fill rate, on-time delivery, returns, stock availability.</p>

      <h3>Important Principle</h3>
      <p>Distribution territories should minimize unnecessary overlap while maintaining enough market coverage to serve customers effectively.</p>

      <hr />

      <h2>3. Sales Territories</h2>
      <h3>Definition</h3>
      <p>A sales territory is a defined group of customers, accounts, industries, or geographic areas assigned to a salesperson or sales team. A territory doesn't always have to be purely geographic — it can be based on geography, industry, customer size, account value, product category, or customer type.</p>

      <h3>How to Implement</h3>
      <ol>
        <li>Map customers and prospects.</li>
        <li>Identify geographic concentrations.</li>
        <li>Estimate opportunity.</li>
        <li>Estimate account workload.</li>
        <li>Create territories.</li>
        <li>Assign sales representatives.</li>
        <li>Establish targets.</li>
        <li>Track performance.</li>
        <li>Rebalance territories when necessary.</li>
      </ol>

      <h3>Important Concept: Opportunity vs Workload</h3>
      <p>A territory should not be evaluated simply by physical size. A small geographic area with many active customers may require significantly more sales resources than a large area with few customers.</p>

      <h3>Metrics</h3>
      <p>Revenue per territory, target achievement, leads, conversion rate, sales cycle, average deal size, sales cost, revenue per salesperson.</p>

      <hr />

      <h2>4. Exclusive Territories</h2>
      <h3>Definition</h3>
      <p>An exclusive territory is a geographic area in which a business or partner receives specifically defined exclusive rights under an agreement.</p>
      <p>The exact meaning of exclusivity depends on the contract. It may restrict other distributors, other franchisees, resellers, direct sales by the supplier, or certain forms of competition within the business network.</p>

      <h3>Benefits</h3>
      <p>For the partner: greater territory certainty, reduced internal competition, stronger incentive to invest. For the company: clear responsibility, easier partner management, potentially stronger market development.</p>

      <h3>Risks</h3>
      <ul>
        <li>An underperforming partner can limit market development.</li>
        <li>Market conditions can change.</li>
        <li>Exclusivity can create contractual disputes.</li>
        <li>Future expansion may become more difficult.</li>
      </ul>

      <h3>Important Contract Elements</h3>
      <p>Clearly define geographic boundaries, products covered, customer types, duration, performance requirements, online-sales treatment, exceptions, termination conditions, renewal, conflict resolution.</p>

      <h3>Principle</h3>
      <p>Exclusivity should be precise rather than assumed.</p>

      <hr />

      <h2>5. Geographic Segmentation</h2>
      <h3>Definition</h3>
      <p>Geographic segmentation divides a market according to where customers are located or where business activity occurs.</p>
      <p>Common dimensions: country, region, province/state, city, municipality, district, neighborhood, postal area, urban/rural, climate, service area.</p>

      <h3>Why It Matters</h3>
      <p>Different locations can have different demand, purchasing behavior, income levels, competition, delivery costs, regulations, languages, seasonal patterns, and product preferences.</p>

      <h3>Important Principle</h3>
      <p>A geographic segment should be actionable. If knowing a customer's location does not change a business decision, creating another geographic segment may add unnecessary complexity.</p>

      <hr />

      <h2>6. Location-Based Advertising</h2>
      <h3>Definition</h3>
      <p>Location-based advertising targets advertisements according to geographic criteria.</p>
      <p>It can be implemented through search advertising, social-media advertising, display advertising, mobile advertising, or local advertising platforms.</p>

      <h3>Metrics</h3>
      <p><strong>CTR = (Clicks ÷ Impressions) × 100</strong></p>
      <p><strong>Conversion Rate = (Conversions ÷ Clicks) × 100</strong></p>
      <p><strong>CAC = Advertising Cost ÷ New Customers</strong></p>
      <p>Also track CPC, revenue, ROAS, gross margin, contribution, repeat purchases.</p>

      <hr />

      <h2>7. Radius Marketing</h2>
      <h3>Definition</h3>
      <p>Radius marketing targets customers within a specified distance from a particular location.</p>
      <p>The radius can be based on distance, travel time, delivery capability, customer density, or business economics.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Simple targeting</li>
        <li>Useful for local businesses</li>
        <li>Can reduce wasted advertising</li>
        <li>Aligns marketing with service capability</li>
      </ul>

      <h3>Risk</h3>
      <p>A radius based purely on distance may not reflect actual travel time. Two locations 5 km away can have very different travel conditions.</p>

      <h3>Principle</h3>
      <p>Use operational reality, not just a map radius.</p>

      <hr />

      <h2>8. Proximity Marketing</h2>
      <h3>Definition</h3>
      <p>Proximity marketing targets customers based on their physical proximity to a particular location, venue, business, or event.</p>
      <p>Potential technologies include Bluetooth-based systems, Wi-Fi systems, QR codes, mobile applications, location-aware technologies, and venue systems.</p>

      <h3>Use Cases</h3>
      <p>Retail, restaurants, events, shopping centers, tourism, exhibitions, local promotions.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Contextual messaging</li>
        <li>Potentially high relevance</li>
        <li>Useful for physical locations</li>
        <li>Connects digital marketing with physical environments</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Privacy concerns</li>
        <li>Poor timing</li>
        <li>Excessive notifications</li>
        <li>Technical limitations</li>
        <li>Customer discomfort</li>
      </ul>

      <h3>Principle</h3>
      <p>Physical proximity does not automatically equal purchase intent. Being near a store is only one signal.</p>

      <hr />

      <h2>9. Geofencing</h2>
      <h3>Definition</h3>
      <p>Geofencing creates a virtual geographic boundary around a defined physical area. Depending on the technology and permissions involved, an application or advertising system can use events such as entering or leaving the defined area.</p>

      <h3>Possible Uses</h3>
      <p>Local advertising, event communication, store awareness, audience analysis, location-based campaigns, retargeting where supported.</p>

      <h3>Geofencing vs Radius Marketing</h3>
      <ul>
        <li>Radius — usually distance-based; geofencing — virtual boundary</li>
        <li>Radius — often circular; geofencing — can use defined geographic shapes</li>
        <li>Radius — simple geographic targeting; geofencing — more contextual</li>
      </ul>

      <h3>Privacy Considerations</h3>
      <p>Location information can be sensitive. Businesses should follow applicable privacy laws, platform requirements, consent requirements, appropriate data-minimization practices, and clear privacy disclosures.</p>

      <h3>Principle</h3>
      <p>Use only the location information necessary for the legitimate business purpose.</p>

      <hr />

      <h2>10. Regional Campaigns</h2>
      <h3>Definition</h3>
      <p>A regional campaign is a marketing campaign designed for a broad geographic region containing multiple cities, provinces, states, or comparable markets.</p>
      <p>Campaigns may vary according to demand, competition, season, product availability, customer preferences, local events, distribution, pricing, or language.</p>

      <h3>Metrics</h3>
      <p>Regional revenue, regional CAC, conversion rate, AOV, ROAS, contribution, repeat purchase rate, customer LTV.</p>

      <hr />

      <h2>11. City-Specific Campaigns</h2>
      <h3>Definition</h3>
      <p>A city-specific campaign targets customers within a particular city using messaging, offers, imagery, partnerships, or services relevant to that city.</p>

      <h3>Benefits</h3>
      <ul>
        <li>High contextual relevance</li>
        <li>More focused advertising</li>
        <li>Easier local measurement</li>
        <li>Stronger connection with local businesses and events</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Small audience size</li>
        <li>More campaign-management work</li>
        <li>Higher content-maintenance requirements</li>
        <li>Potential duplication</li>
      </ul>

      <h3>Principle</h3>
      <p>Create separate city campaigns when the differences between cities justify the additional complexity.</p>

      <hr />

      <h2>12. Neighborhood Campaigns</h2>
      <h3>Definition</h3>
      <p>A neighborhood campaign targets customers within a small community or local area. It is one of the most granular forms of geographic marketing.</p>

      <h3>Possible Channels</h3>
      <p>Community social groups, local advertising, flyers, posters, community events, local partnerships, referral programs, local marketplaces.</p>

      <h3>Metrics</h3>
      <p>Local reach, new customers, orders, repeat orders, CAC, delivery cost, AOV, referral rate.</p>

      <hr />

      <h2>Geographic Targeting Levels</h2>
      <pre>{`BROAD
 ↓
National
 ↓
Regional
 ↓
City
 ↓
Neighborhood
 ↓
Radius Area
 ↓
Proximity
 ↓
Geofence
 ↓
NARROW`}</pre>
      <p>The smaller the geographic area, the more important audience size and campaign economics become.</p>

      <hr />

      <h2>Territory Management vs Geographic Marketing</h2>
      <ul>
        <li>Territory management — determines who operates/sells in an area; often organizational; focuses on responsibility; can involve contractual rights</li>
        <li>Geographic marketing — determines who receives marketing; usually customer-facing; focuses on demand; usually involves targeting</li>
      </ul>

      <hr />

      <h2>Territory Conflict Management</h2>
      <p>Geographic strategies become more complicated when multiple sales channels overlap: franchise, distributor, online, and direct sales.</p>
      <p>Potential conflicts: franchisee vs franchisee, distributor vs distributor, salesperson vs salesperson, distributor vs direct sales, online vs offline sales, reseller vs company-owned store.</p>

      <h3>Prevention System</h3>
      <p>Clearly define geographic boundaries, customer ownership, lead ownership, online-sales rules, referral rules, commission rules, territory performance requirements, exclusivity conditions, conflict-resolution process, territory review schedule.</p>

      <hr />

      <h2>Geographic Campaign Measurement</h2>
      <p><strong>Conversion Rate = (Geographic Customers ÷ Geographic Qualified Leads) × 100</strong></p>
      <p><strong>CAC = Geographic Acquisition Cost ÷ New Geographic Customers</strong></p>
      <p><strong>Geographic Revenue = Sum of Revenue Generated From Target Area</strong></p>
      <p><strong>Contribution = Revenue − Variable Costs</strong></p>
      <p>Variable costs can include product costs, delivery, advertising, transaction fees, sales commissions, packaging.</p>
      <p><strong>Territory Productivity = Territory Revenue ÷ Sales Resources</strong></p>

      <hr />

      <h2>Geographic Targeting Decision Tree</h2>
      <p>For organizational territory:</p>
      <pre>{`Need franchise operations? → Franchise Territory
Need product distribution? → Distribution Territory
Need salesperson responsibility? → Sales Territory
Need protected geographic rights? → Exclusive Territory`}</pre>
      <p>For marketing:</p>
      <pre>{`Need broad geographic reach? → Regional Campaign
Need one-city targeting? → City-Specific Campaign
Need small-community targeting? → Neighborhood Campaign
Need targeting around a location? → Radius Marketing
Need physical-context targeting? → Proximity Marketing
Need a defined virtual area? → Geofencing`}</pre>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>A territory is a responsibility structure; a geographic segment is a customer structure.</li>
        <li>Exclusive territories require clearly defined contractual rights.</li>
        <li>Sales territories should balance opportunity and workload.</li>
        <li>Distribution territories should account for logistics and customer coverage.</li>
        <li>Geographic segmentation should produce actionable business decisions.</li>
        <li>Location-based advertising should correspond to the actual service area.</li>
        <li>Radius marketing should consider travel time and delivery economics, not distance alone.</li>
        <li>Proximity does not necessarily mean purchase intent.</li>
        <li>Geofencing should be implemented with appropriate privacy, consent, and platform practices.</li>
        <li>Regional campaigns provide broader adaptation; city and neighborhood campaigns provide greater localization.</li>
        <li>Greater geographic precision creates greater campaign-management complexity.</li>
        <li>Territory boundaries should be reviewed as demand, competition, infrastructure, and business capacity change.</li>
        <li>Online sales must be considered when defining geographic rights because digital transactions can cross physical territories.</li>
        <li>Geographic marketing should be measured by business outcomes, not merely impressions or clicks.</li>
        <li>A geographic market should ultimately be evaluated through demand, acquisition cost, revenue, margin, fulfillment cost, retention, and customer lifetime value.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Geographic Research → Geographic Segmentation → Market Analysis → Territory Design →
        Territory Assignment → Customer Mapping → Location-Based Targeting →
        Regional/City/Neighborhood Campaigns → Radius/Proximity Targeting → Geofencing Where
        Appropriate → Conversion → Fulfillment → Retention → Geographic Performance Measurement
        → Territory Optimization → Controlled Geographic Expansion.
      </p>
    </LessonLayout>
  )
}
