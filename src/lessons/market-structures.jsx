import LessonLayout from '../components/LessonLayout'

export default function MarketStructures() {
  return (
    <LessonLayout
      number="108"
      title="Market Structures"
      summary="10 market structure systems — perfect competition, monopoly, oligopoly, monopolistic competition, market concentration, market share, barriers to entry and exit, product differentiation, and competitive advantage."
    >
      <h2>Market Structures</h2>
      <p>Market structure describes how a market is organized and how the number, size, and behavior of firms affect competition, pricing, output, innovation, and customer choice.</p>

      <pre>{`MARKET STRUCTURE
                                │
          ┌─────────────────────┼─────────────────────┐
          ↓                     ↓                     ↓
   Number of Firms       Product Similarity      Entry Barriers
          │                     │                     │
          └─────────────────────┼─────────────────────┘
                                ↓
                     Competitive Environment
                                ↓
             ┌──────────────────┼──────────────────┐
             ↓                  ↓                  ↓
          PRICING            OUTPUT            STRATEGY
             ↓                  ↓                  ↓
                         BUSINESS RESULTS`}</pre>

      <hr />

      <h2>1. Perfect Competition</h2>
      <h3>Definition</h3>
      <p>Perfect competition is an idealized market structure characterized by many buyers, many sellers, highly similar or homogeneous products, relatively free entry and exit, strong access to market information, and individual firms having little ability to influence the market price. It is primarily an economic model used to understand price-taking behavior.</p>

      <h3>How It Works</h3>
      <p>Because each individual firm is small relative to the entire market, one firm generally cannot raise its price substantially above the market price and expect customers to continue buying the same product. The firm is therefore described as a price taker.</p>

      <h3>Firm-Level Decision</h3>
      <p>In the simplified competitive-firm model: Price = Marginal Revenue = Average Revenue. A firm chooses its output where MR = MC, subject to whether production is economically viable in the relevant time period.</p>

      <h3>Limitations</h3>
      <p>Perfect competition is a theoretical benchmark. Real markets frequently have product differentiation, information imperfections, switching costs, branding, entry barriers, transportation costs, regulations, and market power.</p>

      <hr />

      <h2>2. Monopoly</h2>
      <h3>Definition</h3>
      <p>A monopoly exists when one firm is the sole significant seller in a defined relevant market and substantial barriers prevent effective competitors from entering. The precise definition depends on how the relevant product and geographic market are defined.</p>

      <h3>How It Works</h3>
      <p>Unlike a perfectly competitive firm, a monopolist faces the market demand curve rather than taking a market price as given.</p>

      <h3>Sources of Monopoly Power</h3>
      <p>Legal rights, patents, exclusive licenses, control over essential resources, very large economies of scale, network effects, high infrastructure requirements, government-created restrictions, extremely high entry costs.</p>

      <h3>Pricing</h3>
      <p>In the standard monopoly model, the firm considers demand, marginal revenue, marginal cost, total cost, and market constraints. The simplified profit-maximization condition is MR = MC. The corresponding price is then determined from the demand curve.</p>

      <h3>Potential Problems</h3>
      <p>A monopoly can potentially result in higher prices, lower output, reduced competitive pressure, less consumer choice, and lower incentive to improve in some circumstances. However, monopoly outcomes depend on the specific market, regulation, threat of entry, substitutes, and other factors.</p>

      <h3>Regulation</h3>
      <p>Governments may respond to monopoly conditions through price regulation, competition policy, antitrust enforcement, public ownership, licensing requirements, or access requirements.</p>

      <hr />

      <h2>3. Oligopoly</h2>
      <h3>Definition</h3>
      <p>An oligopoly is a market structure in which a relatively small number of significant firms account for a substantial portion of the market. The defining feature is strategic interdependence. Each major company must consider how competitors might respond to its decisions.</p>

      <h3>Examples of Strategic Decisions</h3>
      <p>Oligopolistic firms may compete through price, product features, advertising, technology, distribution, loyalty programs, service, capacity, brand, partnerships.</p>

      <h3>Why Strategic Interdependence Matters</h3>
      <p>In a market with thousands of tiny firms, one firm's decision may have little effect on others. In an oligopoly, one major firm's decision can materially affect the market.</p>

      <h3>Potential Advantages</h3>
      <p>Competition between major firms can encourage innovation, large-scale investment, product development, distribution improvements, and technological development.</p>

      <h3>Risks</h3>
      <p>Depending on the market and conduct involved, oligopolies can also create strong market concentration, higher entry barriers, strategic price pressure, reduced competitive alternatives, and risk of anticompetitive coordination.</p>

      <hr />

      <h2>4. Monopolistic Competition</h2>
      <h3>Definition</h3>
      <p>Monopolistic competition is a market structure characterized by many competing firms, relatively easy entry and exit compared with highly concentrated markets, product differentiation, and some degree of pricing power. It combines competition with differentiation.</p>

      <h3>Sources of Differentiation</h3>
      <p>Product differentiation (features, specifications), brand differentiation (identity, reputation), service differentiation (support, speed, installation, customer experience), geographic differentiation (location, delivery availability), convenience differentiation (ordering, payment, delivery, onboarding).</p>

      <h3>Long-Run Entry</h3>
      <p>If an industry is profitable and entry is relatively accessible, additional competitors may enter. This can increase choices, reduce each firm's customer base, increase competitive pressure, and reduce economic profit over time.</p>

      <hr />

      <h2>Comparing the Four Market Structures</h2>
      <ul>
        <li>Number of major sellers — very many / one / few / many</li>
        <li>Product — highly similar / unique within market definition / similar or differentiated / differentiated</li>
        <li>Individual price power — very low / high / potentially substantial / some</li>
        <li>Entry barriers — low in ideal model / high / usually significant / relatively lower</li>
        <li>Strategic interdependence — low / limited direct competitor interaction / high / generally lower</li>
        <li>Branding importance — low / varies / often significant / often significant</li>
        <li>Competition — strong price-taking / limited direct / strategic / differentiation</li>
      </ul>
      <p>These are simplified models. Real industries can contain characteristics of more than one structure.</p>

      <hr />

      <h2>5. Market Concentration</h2>
      <h3>Definition</h3>
      <p>Market concentration describes how much of a market's sales, output, customers, or other relevant measure is controlled by a relatively small number of firms.</p>

      <h3>Four-Firm Concentration Ratio (CR4)</h3>
      <p><strong>CR4 = Market share of largest 4 firms combined</strong></p>
      <p>Example: Firm A 30%, B 25%, C 15%, D 10% → CR4 = 80%.</p>

      <h3>Important Note</h3>
      <p>A concentration measure is descriptive. It does not by itself establish whether competition is healthy, weak, or unlawful. Market definition and competitive conditions matter.</p>

      <hr />

      <h2>6. Market Share</h2>
      <h3>Definition</h3>
      <p>Market share is the percentage of a defined market's sales or other relevant activity attributable to a particular firm.</p>
      <p><strong>Market Share = Company Sales ÷ Total Market Sales × 100</strong></p>
      <p><strong>Unit Market Share = Company Units Sold ÷ Total Market Units Sold × 100</strong></p>

      <h3>Revenue Share vs Unit Share</h3>
      <p>A premium company might have 8% unit share but 15% revenue share because its average selling price is higher. Therefore, businesses should understand which market-share definition is being used.</p>

      <hr />

      <h2>7. Barriers to Entry</h2>
      <h3>Definition</h3>
      <p>Barriers to entry are factors that make it difficult, costly, slow, or risky for new competitors to enter a market. They can protect established businesses from new competition.</p>

      <h3>Major Types</h3>
      <p><strong>Capital requirements</strong> — a new competitor needs substantial funding. <strong>Economies of scale</strong> — established firms may have lower average costs because of their large scale. <strong>Network effects</strong> — a product becomes more valuable as more people use it. <strong>Brand loyalty</strong> — customers may strongly prefer established brands. <strong>Switching costs</strong> — customers may incur financial, technical, time-related, operational, or training-related costs when changing providers. <strong>Legal barriers</strong> — licenses, patents, regulatory approvals, exclusive rights. <strong>Access to distribution</strong> — established firms may have strong relationships with retailers, distributors, suppliers, platforms. <strong>Proprietary technology</strong> — a company may have technology, processes, or intellectual property that competitors cannot easily replicate.</p>

      <hr />

      <h2>8. Barriers to Exit</h2>
      <h3>Definition</h3>
      <p>Barriers to exit are factors that make it difficult or costly for a company to leave a market. Entry barriers concern how difficult it is to enter. Exit barriers concern how difficult it is to leave.</p>

      <h3>Examples</h3>
      <p>Specialized assets (equipment may have little value outside the industry), long-term contracts (rent, suppliers, customers, employees, infrastructure), employee severance or closure costs, reputation considerations, debt obligations, regulatory obligations.</p>

      <h3>Entry vs Exit Barriers</h3>
      <ul>
        <li>Entry barrier — makes entering difficult; exit barrier — makes leaving difficult</li>
        <li>Entry — capital requirements, licensing, customer acquisition, technology, distribution access, brand disadvantage</li>
        <li>Exit — sunk investments, closure obligations, contract commitments, specialized assets, debt, severance costs</li>
      </ul>
      <p>A market can have both high entry and high exit barriers.</p>

      <hr />

      <h2>9. Product Differentiation</h2>
      <h3>Definition</h3>
      <p>Product differentiation means making a product or service meaningfully distinguishable from competing alternatives. Differentiation can be functional, visual, technical, service-based, emotional, brand-based, geographic, or convenience-based.</p>

      <h3>Types</h3>
      <p>Feature differentiation (functionality), quality differentiation (higher or lower perceived or measured quality), design differentiation (visual appearance or user experience), service differentiation (support, installation, delivery, training, warranty), brand differentiation (identity, reputation, positioning, customer associations), convenience differentiation (making the customer's journey easier).</p>

      <hr />

      <h2>10. Competitive Advantage</h2>
      <h3>Definition</h3>
      <p>Competitive advantage is a business characteristic or capability that allows a company to create and capture value more effectively than relevant competitors over a meaningful period. A competitive advantage should be connected to something customers value or to an economic advantage that improves business performance.</p>

      <h3>Major Sources</h3>
      <p>Cost advantage (comparable value at lower cost), differentiation advantage (customers perceive meaningful additional value), distribution advantage (reach customers more effectively), technology advantage (efficiency, functionality, automation, data capabilities, customer experience), brand advantage (recognition or trust), network advantage (value increases with participation), switching-cost advantage (meaningful costs to change providers), customer-relationship advantage (deep customer knowledge, service, retention), operational advantage (faster delivery, lower defect rates, lower costs, better availability, better reliability).</p>

      <h3>Competitive Advantage vs Product Differentiation</h3>
      <ul>
        <li>Product differentiation — makes an offer different; competitive advantage — creates a meaningful business advantage</li>
        <li>Product differentiation — can involve features/design/service; competitive advantage — can involve cost, technology, distribution, brand, relationships</li>
        <li>Product differentiation — focuses heavily on the offer; competitive advantage — broader business concept</li>
        <li>Product differentiation — may be easy to copy; competitive advantage — strong advantages are harder to replicate</li>
        <li>Product differentiation — can exist without strong economic results; competitive advantage — should ultimately contribute to sustainable business performance</li>
      </ul>

      <h3>Competitive Advantage Test</h3>
      <p>Is it valuable? → Is it relevant to customers? → Can it improve economics? → Is it difficult to copy? → Can the business sustain it? → Can it be scaled? → Competitive advantage potential.</p>
      <p>No single checklist proves that an advantage will last. Competitors can adapt, technologies can change, and customer preferences can shift.</p>

      <hr />

      <h2>Market Structure and Business Strategy</h2>
      <p>Different market structures create different strategic environments.</p>
      <ul>
        <li>Perfect competition → cost efficiency, price taking, operational efficiency</li>
        <li>Monopolistic competition → differentiation, brand, service, customer experience</li>
        <li>Oligopoly → strategic interdependence, scale, technology, brand, capacity</li>
        <li>Monopoly → market power, entry barriers, regulation, efficiency, innovation</li>
      </ul>

      <hr />

      <h2>Herfindahl-Hirschman Index</h2>
      <p>Another concentration measure is the Herfindahl-Hirschman Index (HHI).</p>
      <p><strong>HHI = Sum of (Market Share²)</strong> when market shares are expressed as whole percentages.</p>
      <p>Example: 40² + 25² + 15² + 10² + 5² + 5² = 1,600 + 625 + 225 + 100 + 25 + 25 = 2,600.</p>
      <p>HHI gives greater weight to larger firms because their shares are squared. Different competition authorities use HHI in different ways and may apply different thresholds and analytical frameworks, so an HHI number should not be interpreted in isolation.</p>

      <hr />

      <h2>Key Principles</h2>
      <ol>
        <li>Market structure describes the organization of competition in a market.</li>
        <li>Perfect competition is primarily a theoretical benchmark involving many sellers, highly similar products, and price-taking firms.</li>
        <li>A monopoly has one significant seller within the relevant market and substantial barriers to effective entry.</li>
        <li>An oligopoly has a relatively small number of significant firms and strong strategic interdependence.</li>
        <li>Monopolistic competition combines many sellers with differentiated products.</li>
        <li>Market concentration measures how much market activity is controlled by a relatively small number of firms.</li>
        <li>Market share measures a firm's proportion of a defined market.</li>
        <li>CR4 measures the combined share of the four largest firms.</li>
        <li>HHI gives greater mathematical weight to larger market shares.</li>
        <li>Concentration measurements depend heavily on how the relevant market is defined.</li>
        <li>High concentration does not automatically prove that competition is weak or that conduct is anticompetitive.</li>
        <li>Barriers to entry make it harder for new competitors to enter a market.</li>
        <li>Barriers to exit make it harder or more expensive for existing firms to leave.</li>
        <li>Entry and exit barriers can influence how quickly markets respond to changes in demand and profitability.</li>
        <li>Product differentiation allows firms to compete on dimensions other than price.</li>
        <li>Differentiation can involve features, quality, design, service, convenience, technology, brand, or customer experience.</li>
        <li>Competitive advantage is broader than differentiation and can arise from cost, technology, distribution, relationships, scale, network effects, or other capabilities.</li>
        <li>A feature is not necessarily a competitive advantage merely because it is different.</li>
        <li>A sustainable advantage should create meaningful value and be difficult enough to replicate that competitors cannot immediately eliminate it.</li>
        <li>Perfect competition emphasizes price-taking behavior and cost efficiency.</li>
        <li>Monopolistic competition emphasizes differentiation and customer preference.</li>
        <li>Oligopoly emphasizes strategic interdependence because major firms must consider competitor reactions.</li>
        <li>Monopoly emphasizes market power, entry barriers, and the relationship between demand, marginal revenue, and marginal cost.</li>
        <li>Real-world markets do not always fit perfectly into one textbook market-structure category.</li>
        <li>Technology can change market structure by reducing entry costs, creating network effects, changing distribution, or introducing new substitutes.</li>
        <li>Digital platforms can simultaneously have low-cost entry for sellers while the platform itself develops significant network or scale advantages.</li>
        <li>A company's competitive strategy should account for both the current market structure and how that structure may evolve.</li>
        <li>Competitive advantage must be continuously defended because competitors can copy, innovate, reduce costs, change distribution, or introduce substitutes.</li>
        <li>Market structure analysis should examine customers, competitors, suppliers, substitutes, entry conditions, exit conditions, regulation, and technology — not just the number of firms.</li>
        <li>The ultimate purpose of market-structure analysis is to understand the competitive environment so businesses can make better decisions about pricing, products, investment, differentiation, entry, expansion, and risk.</li>
      </ol>

      <h3>Core Formula</h3>
      <p>
        Define Market → Identify Firms → Measure Market Share → Measure Concentration → Analyze
        Entry Barriers → Analyze Exit Barriers → Study Substitutes → Analyze Product
        Differentiation → Analyze Customer Switching → Determine Competitive Conditions →
        Understand Market Structure → Evaluate Market Power → Develop
        Pricing/Product/Distribution Strategy → Build Competitive Advantage → Measure Performance
        → Monitor Competitor Response → Adapt → Sustain and Improve Advantage.
      </p>
    </LessonLayout>
  )
}
