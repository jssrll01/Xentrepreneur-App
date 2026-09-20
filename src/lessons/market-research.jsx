import LessonLayout from '../components/LessonLayout'

export default function MarketResearch() {
  return (
    <LessonLayout
      number="10"
      title="Market Research"
      summary="10 research methods to reduce uncertainty and turn assumptions about customers, competitors, and markets into evidence."
    >
      <p>
        Market research is the systematic process of collecting, analyzing, and
        interpreting information about a market, customers, competitors,
        industry conditions, and external factors.
      </p>
      <p>The purpose is to reduce uncertainty before making business decisions.</p>
      <p>A business uses market research to answer questions such as:</p>
      <ul>
        <li>Who are our customers?</li>
        <li>What do they need?</li>
        <li>What problems do they experience?</li>
        <li>What are they willing to pay for?</li>
        <li>Who are our competitors?</li>
        <li>What alternatives already exist?</li>
        <li>How large is the opportunity?</li>
        <li>What factors could affect the market?</li>
        <li>Which customer groups should we target?</li>
        <li>What product or service should we build?</li>
      </ul>
      <p>A complete market-research system can be represented as:</p>
      <pre>{`MARKET RESEARCH
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     CUSTOMER       COMPETITION     ENVIRONMENT
        │              │              │
        ↓              ↓              ↓
 Interviews       Competitor       PESTLE
 Surveys          Analysis
 Focus Groups
        │
        ↓
 Customer Needs
        │
        ↓
 Segmentation
        │
        ↓
 Customer Personas
        │
        ↓
 Jobs-to-be-Done
        │
        ↓
 Pain-Point Mapping
        │
        └──────────────┬──────────────┘
                       ↓
                  INSIGHTS
                       ↓
              BUSINESS DECISIONS`}</pre>

      <hr />

      <h2>1. Customer Interviews</h2>
      <h3>Definition</h3>
      <p>Customer interviews are structured or semi-structured conversations with potential or existing customers designed to understand their experiences, behaviors, needs, motivations, problems, and decision-making processes.</p>
      <p>Unlike a simple survey, an interview allows the business to ask follow-up questions. For example: "Why did you stop using the service?" If the customer says "It was inconvenient," the interviewer can ask "What specifically was inconvenient?" This can uncover information that a checkbox survey might miss.</p>

      <h3>What customer interviews can discover</h3>
      <p>Interviews can reveal customer problems, buying motivations, frustrations, preferences, habits, decision criteria, objections, expectations, unmet needs, reasons for switching, and reasons for not purchasing.</p>

      <h3>How it works</h3>
      <p>Select customers → prepare questions → conduct interviews → record responses → identify patterns → group insights → validate findings → make decisions.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Define the research objective.</strong> Bad: "Learn about customers." Better: "Understand why customers abandon their marketplace purchases before checkout."</li>
        <li><strong>Select relevant participants.</strong> Participants should represent the customer group being studied. Current customers, former customers, potential customers, customers who abandoned carts, and customers who purchased repeatedly can each reveal different information.</li>
        <li><strong>Create open-ended questions.</strong> Good questions include: "Tell me about the last time you bought this type of product," "What was difficult about the process?," "What alternatives did you consider?," "Why did you choose that option?," "What nearly stopped you from buying?," and "What would make the experience better?"</li>
        <li><strong>Avoid leading questions.</strong> Leading: "You found the website difficult to use, right?" Better: "How did you find the website experience?"</li>
        <li><strong>Look for patterns.</strong> Suppose 20 interviews produce 12 delivery concerns, 9 price concerns, 8 payment concerns, and 6 product information concerns. These are signals that can be investigated further.</li>
      </ol>

      <h3>Example</h3>
      <p>An online marketplace interviews customers who abandoned purchases. Several customers explain that they discovered additional delivery charges only near checkout. The business identifies the problem (unexpected shipping cost), the customer reaction (abandon checkout), and a possible improvement (show estimated shipping earlier). The company can then test whether the improvement actually increases completed purchases.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Provides detailed customer insight</li>
        <li>Reveals motivations</li>
        <li>Allows follow-up questions</li>
        <li>Finds unexpected problems</li>
        <li>Helps understand customer language</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Small samples may not represent the entire market</li>
        <li>Interviewer bias</li>
        <li>Customers may misremember events</li>
        <li>Customers may say what they think sounds good rather than what they actually do</li>
      </ul>

      <h3>Important principle</h3>
      <p>Ask about actual past behavior whenever possible, not only hypothetical future behavior.</p>

      <hr />

      <h2>2. Customer Surveys</h2>
      <h3>Definition</h3>
      <p>A customer survey collects standardized responses from a larger number of people. Surveys are useful when a business wants to quantify opinions, behaviors, preferences, or characteristics.</p>
      <p>For example: "Which factor is most important when choosing an online marketplace?" Possible answers: price, delivery speed, product selection, trust, payment options, or customer support.</p>

      <h3>Interview vs survey</h3>
      <p><strong>Interview:</strong> usually smaller sample; detailed responses; allows follow-up; more qualitative; good for discovering problems.</p>
      <p><strong>Survey:</strong> can reach many people; standardized responses; usually limited follow-up; often quantitative; good for measuring patterns.</p>
      <p>A business can use both: interview → discover possible problems → survey → measure how common they are.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Define the objective.</strong> Example: determine which features customers consider most valuable.</li>
        <li><strong>Keep questions clear.</strong> Avoid combining several subjects. Instead of asking about price, product quality, website design, delivery, and customer service in one question, ask them separately.</li>
        <li><strong>Use appropriate question types.</strong> Multiple choice (which payment method do you prefer?), rating scale (rate your satisfaction from 1–5), ranking (rank these features from most important to least important), and open-ended (what would you improve?).</li>
      </ol>

      <h3>Example</h3>
      <p>Suppose 500 customers answer a survey. Preferences: lower prices 210, faster delivery 125, more products 80, better support 55, more payment methods 30. The business now has measurable information about the surveyed group.</p>

      <h3>Important survey metrics</h3>
      <p><strong>Response Rate = Completed Surveys ÷ Survey Invitations × 100</strong></p>
      <p><strong>Percentage = Responses for Option ÷ Total Valid Responses × 100</strong></p>

      <h3>Benefits</h3>
      <ul>
        <li>Can reach many people</li>
        <li>Easy to quantify</li>
        <li>Useful for comparing groups</li>
        <li>Efficient for standardized questions</li>
        <li>Good for measuring customer satisfaction</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Poorly written questions create misleading results</li>
        <li>Low response rates</li>
        <li>Biased sample</li>
        <li>Customers may answer inaccurately</li>
        <li>Too many questions reduce completion</li>
      </ul>

      <h3>Important principle</h3>
      <p>A large survey is not automatically reliable if the respondents do not represent the population being studied.</p>

      <hr />

      <h2>3. Focus Groups</h2>
      <h3>Definition</h3>
      <p>A focus group is a moderated discussion involving a small group of people from a target market. The goal is to observe how people react to product concepts, advertisements, packaging, features, branding, services, problems, and new ideas.</p>

      <h3>How it works</h3>
      <p>Participants → moderator → discussion → reactions → opinions → patterns/insights. The interaction between participants can produce insights that individual interviews may not reveal.</p>

      <h3>Example</h3>
      <p>A company plans to launch a new marketplace interface. A focus group is shown three designs (A, B, C). Participants discuss which looks trustworthy, which is easier to understand, which feels confusing, and what they expect each button to do. The business uses the discussion to identify usability questions for further testing.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Define the research question.</strong> Example: how do target customers perceive the new homepage design?</li>
        <li><strong>Recruit appropriate participants.</strong> Participants should fit the market being studied.</li>
        <li><strong>Prepare a discussion guide.</strong> Include introduction, warm-up questions, main discussion, product/concept evaluation, follow-up questions, and summary.</li>
        <li><strong>Use a neutral moderator.</strong> The moderator should avoid pushing participants toward a preferred answer.</li>
        <li><strong>Analyze themes.</strong> Look for repeated concerns, preferences, confusion, emotional reactions, and suggestions.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Produces rich qualitative information</li>
        <li>Shows reactions to concepts</li>
        <li>Participants can build on each other's ideas</li>
        <li>Useful for early product and marketing research</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Dominant participants can influence the group</li>
        <li>Group pressure can affect answers</li>
        <li>Small groups are not statistically representative</li>
        <li>Moderator bias</li>
        <li>Participants may behave differently in a group</li>
      </ul>

      <h3>Important principle</h3>
      <p>Focus groups are primarily for understanding reactions and discovering insights, not for estimating exactly what an entire market thinks.</p>

      <hr />

      <h2>4. Competitor Analysis</h2>
      <h3>Definition</h3>
      <p>Competitor analysis is the systematic study of businesses offering similar products, services, or alternatives to the same customers.</p>
      <p><strong>Direct competitors</strong> offer a similar product to the same target customer. <strong>Indirect competitors</strong> solve a similar problem using a different product or method.</p>
      <p>For an online marketplace, direct competitors are other marketplaces. Indirect competitors are social-media sellers, physical stores, and specialized e-commerce stores.</p>

      <h3>What to analyze</h3>
      <p>Products, prices, features, target customers, brand, marketing, distribution, customer experience, reviews, technology, promotions, and strengths/weaknesses.</p>

      <h3>Competitor comparison</h3>
      <p>Example factors: price (low, medium, high), product range, delivery speed, loyalty program, customer support, and mobile experience. The purpose is to understand differences and gaps, not simply to copy the competitor.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Identify competitors.</strong> Search for direct competitors, indirect competitors, new entrants, and substitute solutions.</li>
        <li><strong>Select comparison criteria.</strong> Examples: price, quality, features, delivery, convenience, customer service.</li>
        <li><strong>Collect evidence.</strong> Use public websites, product information, public reviews, advertisements, published company information, and customer research.</li>
        <li><strong>Identify gaps.</strong> Ask: what customer need is poorly served?</li>
        <li><strong>Determine implications.</strong> A gap could represent an opportunity or a market gap that is difficult/unprofitable to serve. Not every gap is automatically a good business opportunity.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>Understands competitive positioning</li>
        <li>Reveals market expectations</li>
        <li>Identifies opportunities</li>
        <li>Helps differentiate products</li>
        <li>Supports pricing and product decisions</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Incomplete information</li>
        <li>Outdated information</li>
        <li>Focusing too much on competitors</li>
        <li>Copying strategies without understanding why they work</li>
      </ul>

      <hr />

      <h2>5. SWOT Analysis</h2>
      <h3>Definition</h3>
      <p>SWOT analysis is a framework for examining:</p>
      <ul>
        <li><strong>S — Strengths</strong></li>
        <li><strong>W — Weaknesses</strong></li>
        <li><strong>O — Opportunities</strong></li>
        <li><strong>T — Threats</strong></li>
      </ul>
      <p>It combines internal factors (strengths, weaknesses) with external factors (opportunities, threats).</p>

      <h3>Strengths</h3>
      <p>Internal capabilities that can support the business. Examples: strong brand, technical capability, loyal customers, efficient operations, unique product, strong distribution.</p>

      <h3>Weaknesses</h3>
      <p>Internal limitations. Examples: limited capital, small team, weak brand awareness, limited product range, poor internal processes.</p>

      <h3>Opportunities</h3>
      <p>External conditions that may create potential opportunities. Examples: growing demand, new technology, new market, changing customer behavior, underserved segment.</p>

      <h3>Threats</h3>
      <p>External factors that could negatively affect the business. Examples: new competitors, price competition, supply problems, regulatory changes, changing technology.</p>

      <h3>Example: small online marketplace</h3>
      <p><strong>Strengths:</strong> low operating overhead, fast development, flexible website.</p>
      <p><strong>Weaknesses:</strong> small product range, limited marketing budget, low brand recognition.</p>
      <p><strong>Opportunities:</strong> growing online shopping, niche products, new digital payment options.</p>
      <p><strong>Threats:</strong> large marketplaces, price competition, supplier disruptions.</p>

      <h3>How to use SWOT</h3>
      <p>The most useful part is connecting the four categories.</p>
      <ul>
        <li><strong>Strength + Opportunity:</strong> use technical capability to create a specialized marketplace.</li>
        <li><strong>Weakness + Opportunity:</strong> use partnerships to expand product selection.</li>
        <li><strong>Strength + Threat:</strong> use customer service as differentiation against larger competitors.</li>
        <li><strong>Weakness + Threat:</strong> reduce dependency on a single supplier.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>Simple strategic overview</li>
        <li>Encourages internal and external thinking</li>
        <li>Identifies strategic issues</li>
        <li>Useful for planning discussions</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Can become subjective</li>
        <li>Categories can overlap</li>
        <li>People may list observations without turning them into decisions</li>
        <li>SWOT does not automatically tell you what to do</li>
      </ul>

      <h3>Important principle</h3>
      <p>SWOT is a framework for organizing strategic information, not a substitute for deeper analysis.</p>

      <hr />

      <h2>6. PESTLE Analysis</h2>
      <h3>Definition</h3>
      <p>PESTLE analysis examines external forces that may affect a business. PESTLE stands for Political, Economic, Social, Technological, Legal, and Environmental.</p>

      <h3>Political</h3>
      <p>Government and political conditions. Examples: government policy, trade policy, public spending, political stability, government priorities.</p>

      <h3>Economic</h3>
      <p>Economic conditions affecting customers and businesses. Examples: inflation, interest rates, employment, consumer spending, exchange rates, economic growth.</p>

      <h3>Social</h3>
      <p>Changes in society and consumer behavior. Examples: demographics, lifestyle changes, cultural trends, consumer preferences, population changes.</p>

      <h3>Technological</h3>
      <p>Technology changes affecting products and operations. Examples: artificial intelligence, automation, mobile technology, cloud computing, payment technology, cybersecurity.</p>

      <h3>Legal</h3>
      <p>Laws and regulations. Examples: consumer protection, employment regulations, privacy requirements, tax rules, intellectual property, industry-specific regulations.</p>

      <h3>Environmental</h3>
      <p>Environmental and sustainability factors. Examples: climate conditions, waste requirements, energy costs, resource availability, environmental regulations.</p>

      <h3>Example: e-commerce business</h3>
      <p><strong>Political:</strong> new government trade policies. <strong>Economic:</strong> higher consumer prices. <strong>Social:</strong> increasing online shopping. <strong>Technological:</strong> improved digital payments. <strong>Legal:</strong> new consumer/privacy requirements. <strong>Environmental:</strong> pressure to reduce packaging waste.</p>

      <h3>How to implement</h3>
      <ol>
        <li>List important external factors.</li>
        <li>Determine whether each factor creates an opportunity or risk.</li>
        <li>Estimate business impact.</li>
        <li>Monitor changes.</li>
      </ol>
      <p>PESTLE is especially useful for businesses entering new markets.</p>

      <h3>SWOT vs PESTLE</h3>
      <p><strong>SWOT:</strong> internal + external; strategic snapshot. <strong>PESTLE:</strong> primarily external; environmental analysis.</p>
      <p>They can be combined: PESTLE → understand external environment → SWOT → connect external conditions with internal capabilities → strategy.</p>

      <hr />

      <h2>7. Market Segmentation</h2>
      <h3>Definition</h3>
      <p>Market segmentation is the process of dividing a broad market into smaller groups of customers who share relevant characteristics, needs, behaviors, or circumstances.</p>
      <p>Instead of treating everyone as one customer group: entire market → customer groups → segments → target segments.</p>

      <h3>Major types of segmentation</h3>
      <p><strong>1. Demographic</strong> — based on characteristics such as age, income, occupation, family status, and education.</p>
      <p><strong>2. Geographic</strong> — based on country, region, city, climate, and urban/rural location.</p>
      <p><strong>3. Psychographic</strong> — based on interests, values, lifestyle, attitudes, and motivations.</p>
      <p><strong>4. Behavioral</strong> — based on actual behavior: purchase frequency, spending level, product usage, brand loyalty, and benefits sought.</p>
      <p><strong>5. Needs-based</strong> — based on the problem or need customers are trying to solve. This can be especially useful for product development.</p>

      <h3>Example</h3>
      <p>A marketplace could segment customers into: Segment A — budget-focused shoppers; Segment B — convenience-focused shoppers; Segment C — premium shoppers; Segment D — frequent shoppers. Each segment may respond differently to offers.</p>

      <h3>How to implement</h3>
      <ol>
        <li>Collect customer data.</li>
        <li>Identify meaningful patterns.</li>
        <li>Create potential segments.</li>
        <li>Evaluate segments — consider size, growth, profitability, accessibility, competition, customer need, and strategic fit.</li>
        <li>Select target segments. A business does not necessarily need to target everyone.</li>
      </ol>

      <h3>Benefits</h3>
      <ul>
        <li>More focused marketing</li>
        <li>Better products</li>
        <li>More relevant offers</li>
        <li>Improved customer experience</li>
        <li>Better resource allocation</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Over-segmentation</li>
        <li>Segments too small to be profitable</li>
        <li>Incorrect assumptions</li>
        <li>Treating segments as permanent</li>
      </ul>

      <h3>Important principle</h3>
      <p>A useful segment should have meaningful differences that affect business decisions.</p>

      <hr />

      <h2>8. Customer Persona Creation</h2>
      <h3>Definition</h3>
      <p>A customer persona is a research-based representation of a significant customer type. It turns customer research into a practical profile that teams can use when designing products, marketing, and experiences.</p>
      <p>A persona might include: name ("Budget Shopper"), age range (18–25), situation (student/early-career), primary goal (save money), main problem (limited budget), buying behavior (compares prices), concern (hidden fees), and preferred channel (mobile).</p>
      <p>The name is fictional; the underlying characteristics should be based on research.</p>

      <h3>Persona structure</h3>
      <p>Background, goals, needs, behaviors, problems, motivations, objections, buying triggers, preferred channels, and decision criteria.</p>

      <h3>How to create one</h3>
      <ol>
        <li><strong>Gather research.</strong> Use interviews, surveys, analytics, customer support data, and purchase history.</li>
        <li><strong>Identify patterns.</strong></li>
        <li><strong>Group similar customers.</strong></li>
        <li><strong>Create a profile.</strong></li>
        <li><strong>Validate it.</strong> Ask: does this persona actually represent a meaningful group of customers?</li>
      </ol>

      <h3>Example</h3>
      <p><strong>Persona: Convenience-Focused Shopper.</strong> Goal: purchase products quickly without spending much time searching. Problems: too many choices, slow checkout, complicated navigation. Motivations: speed, convenience, easy payment. Decision criteria: fast search + simple checkout + reliable delivery. This persona can influence website design and product strategy.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Makes customer research easier to communicate</li>
        <li>Helps teams think from the customer's perspective</li>
        <li>Supports product design</li>
        <li>Improves marketing relevance</li>
        <li>Helps prioritize features</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Creating personas from imagination</li>
        <li>Making them too stereotypical</li>
        <li>Creating too many personas</li>
        <li>Treating personas as individual real customers</li>
      </ul>

      <h3>Important principle</h3>
      <p>Personas should summarize evidence, not replace evidence.</p>

      <hr />

      <h2>9. Jobs-to-be-Done Analysis</h2>
      <h3>Definition</h3>
      <p>Jobs-to-be-Done (JTBD) is a framework for understanding the underlying "job" a customer is trying to accomplish when they choose a product or service.</p>
      <p>Customers do not simply buy products. They use products to make progress toward a desired outcome.</p>

      <h3>Example</h3>
      <p>A customer does not necessarily buy a drill because they want a drill. They may want a hole in the wall. The deeper job could be: put up a shelf quickly and securely. Therefore: product → customer's job → desired outcome.</p>

      <h3>Three dimensions</h3>
      <p><strong>Functional job</strong> — what the customer wants to accomplish. Example: purchase groceries quickly.</p>
      <p><strong>Emotional job</strong> — how the customer wants to feel. Example: feel confident that the purchase was handled correctly.</p>
      <p><strong>Social job</strong> — how the customer wants to be perceived. Example: be seen as someone who makes smart purchasing decisions.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Identify the situation.</strong> Ask: what was happening when the customer started looking for a solution?</li>
        <li><strong>Identify the desired progress.</strong> Ask: what were they trying to accomplish?</li>
        <li><strong>Identify obstacles.</strong> Ask: what made the job difficult?</li>
        <li><strong>Identify existing alternatives.</strong> Customers may use competitors, manual processes, spreadsheets, friends, physical stores, or do-it-yourself solutions.</li>
        <li><strong>Design around the job.</strong> Instead of asking "What features should we add?," ask "What would help the customer accomplish the job better?"</li>
      </ol>

      <h3>Example: marketplace</h3>
      <p>Customer job: "Find a reliable product at a reasonable price without spending hours comparing sellers." Possible product implications: reliable seller ratings, price comparison, clear product information, search filters, and fast checkout.</p>

      <h3>Benefits</h3>
      <ul>
        <li>Focuses on customer outcomes</li>
        <li>Helps identify real competitors and substitutes</li>
        <li>Improves product design</li>
        <li>Prevents feature-focused thinking</li>
        <li>Reveals opportunities beyond existing product categories</li>
      </ul>

      <h3>Risks</h3>
      <ul>
        <li>Jobs can be defined too broadly</li>
        <li>Research may miss important context</li>
        <li>Different customers can have different jobs in similar situations</li>
      </ul>

      <h3>Important principle</h3>
      <p>Compete around the customer's desired outcome, not only around the product category.</p>

      <hr />

      <h2>10. Pain-Point Mapping</h2>
      <h3>Definition</h3>
      <p>Pain-point mapping is the process of identifying and organizing the problems, frustrations, obstacles, risks, and inconveniences customers experience throughout their journey. Instead of identifying only one problem, the business examines the entire customer experience.</p>

      <h3>Customer journey</h3>
      <p>Discover → research → compare → purchase → receive → use → get support → repeat/leave. At every stage, customers may experience pain points.</p>

      <h3>Example</h3>
      <p>For an online marketplace:</p>
      <ul>
        <li><strong>Discover</strong> — finds product — difficult to discover relevant products.</li>
        <li><strong>Research</strong> — reads information — product details incomplete.</li>
        <li><strong>Compare</strong> — compares sellers — prices difficult to compare.</li>
        <li><strong>Purchase</strong> — checks out — checkout too long.</li>
        <li><strong>Receive</strong> — waits for order — delivery uncertainty.</li>
        <li><strong>Use</strong> — uses product — product doesn't match expectations.</li>
        <li><strong>Support</strong> — requests help — slow response.</li>
        <li><strong>Repeat</strong> — decides whether to return — no meaningful reason to return.</li>
      </ul>

      <h3>Pain-point categories</h3>
      <p><strong>Functional pain</strong> — something is difficult or inefficient. Example: checkout takes too long.</p>
      <p><strong>Financial pain</strong> — something costs too much. Example: unexpected fees.</p>
      <p><strong>Emotional pain</strong> — something creates frustration, uncertainty, or anxiety. Example: customer doesn't know when the order will arrive.</p>
      <p><strong>Time pain</strong> — something takes too long. Example: waiting several days for support.</p>
      <p><strong>Risk pain</strong> — customer fears a negative outcome. Example: concern that the seller may not be trustworthy.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Map the customer journey.</strong> Awareness → consideration → purchase → delivery → usage → support → retention.</li>
        <li><strong>Identify pain points.</strong> Use interviews, surveys, reviews, support tickets, analytics, and observations.</li>
        <li><strong>Score each pain point.</strong> A simple prioritization framework: priority ≈ frequency × severity × business impact. This is a prioritization heuristic, not a universal formula.</li>
        <li><strong>Find root causes.</strong> Do not stop at "Customers are frustrated." Ask "Why?"</li>
        <li><strong>Develop solutions.</strong></li>
        <li><strong>Test the solution.</strong></li>
      </ol>

      <h3>Customer pain-point map</h3>
      <p>The map helps the business see that the customer experience is a system, not a single transaction.</p>

      <hr />

      <h2>How the Ten Market-Research Methods Connect</h2>
      <p>The strongest market research combines these methods.</p>
      <pre>{`MARKET
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
      CUSTOMERS              COMPETITORS
          │                       │
          ↓                       ↓
 Interviews                  Analysis
 Surveys
 Focus Groups
          │                       │
          └───────────┬───────────┘
                      ↓
                 MARKET INSIGHT
                      │
            ┌─────────┴─────────┐
            ↓                   ↓
       Segmentation          SWOT
            │                   │
            ↓                   ↓
      Customer Personas      PESTLE
            │                   │
            └─────────┬─────────┘
                      ↓
               CUSTOMER JOBS
                      │
                      ↓
              PAIN-POINT MAP
                      │
                      ↓
             PRODUCT OPPORTUNITY
                      │
                      ↓
               BUSINESS STRATEGY`}</pre>

      <hr />

      <h2>Market Research: Qualitative vs Quantitative</h2>
      <p>An effective research system uses both.</p>
      <p><strong>Qualitative:</strong> interviews, focus groups, customer conversations, reviews, open-ended feedback, observations.</p>
      <p><strong>Quantitative:</strong> surveys, sales data, website analytics, purchase frequency, conversion rate, market-size estimates.</p>
      <p>Qualitative asks: why? Quantitative asks: how many? How often? How much?</p>
      <p>For example: interview → "Why don't you purchase?" → customer says "The shipping fee surprises me." → survey → 35% of respondents say unexpected shipping costs discourage purchases. → analytics → checkout abandonment increases when shipping cost is displayed. → insight → shipping transparency may be an important conversion issue. → experiment → show shipping estimate earlier. → measure → checkout completion rate.</p>

      <hr />

      <h2>Market Research Funnel</h2>
      <p>Market research can also be organized as a funnel:</p>
      <ol>
        <li><strong>Explore</strong> — interviews, surveys, focus groups.</li>
        <li><strong>Understand</strong> — segmentation, personas, JTBD, pain points.</li>
        <li><strong>Analyze</strong> — competitor analysis, SWOT, PESTLE.</li>
        <li><strong>Validate</strong> — additional research, experiments, customer behavior.</li>
        <li><strong>Apply</strong> — product, pricing, marketing, operations, strategy.</li>
      </ol>

      <hr />

      <h2>Market Research Questions</h2>
      <p>A business can organize its research around five major questions.</p>

      <h3>1. Who?</h3>
      <p>Who are the customers? Who buys? Who uses? Who influences the purchase? Answered through segmentation, personas, surveys, and customer research.</p>

      <h3>2. What?</h3>
      <p>What do customers need? What problems do they experience? What alternatives do they use? Answered through interviews, focus groups, surveys, JTBD, and pain-point mapping.</p>

      <h3>3. Why?</h3>
      <p>Why do customers buy? Why do they choose competitors? Why do they stop buying? Answered through interviews, JTBD, customer feedback, and behavioral research.</p>

      <h3>4. What else?</h3>
      <p>Who are the competitors? What substitutes exist? What technologies are changing the market? What external factors matter? Answered through competitor analysis, PESTLE, and SWOT.</p>

      <h3>5. What should we do?</h3>
      <p>Research ultimately supports decisions about product, price, distribution, marketing, customer experience, positioning, expansion, and investment. Research itself is not the final goal.</p>

      <hr />

      <h2>Example: Applying Market Research to Xmarket</h2>
      <p>Suppose Xmarket wants to understand why customers are not purchasing frequently.</p>
      <p><strong>Step 1 — Interviews.</strong> Interview existing and former customers. Findings: customers like product variety, but they report difficult product comparison, unclear shipping, and concerns about seller reliability.</p>
      <p><strong>Step 2 — Survey.</strong> Survey a larger customer group. Example results: shipping concerns 40%, price concerns 30%, seller trust 18%, product selection 12%.</p>
      <p><strong>Step 3 — Focus group.</strong> Show customers several potential improvements: better seller ratings, better product comparison, clearer shipping information. Observe reactions and discussion.</p>
      <p><strong>Step 4 — Segmentation.</strong> The business identifies budget shoppers, convenience shoppers, frequent shoppers, and premium shoppers.</p>
      <p><strong>Step 5 — Persona.</strong> Create evidence-based personas representing important groups.</p>
      <p><strong>Step 6 — JTBD.</strong> Identify a major job: find a good product at a reasonable price with confidence and minimal effort.</p>
      <p><strong>Step 7 — Pain-point mapping.</strong> Search → too many choices. Comparison → difficult to compare. Checkout → shipping uncertainty. Delivery → limited visibility.</p>
      <p><strong>Step 8 — Competitor analysis.</strong> Examine how other marketplaces address seller ratings, search, product comparison, shipping, and customer protection.</p>
      <p><strong>Step 9 — SWOT.</strong> Connect Xmarket's internal capabilities with external opportunities and threats.</p>
      <p><strong>Step 10 — PESTLE.</strong> Monitor broader factors affecting the marketplace.</p>
      <p>The result is a research-based product strategy rather than simply adding features based on assumptions.</p>

      <hr />

      <h2>Common Market Research Mistakes</h2>
      <p><strong>1. Asking customers what features they want without understanding the underlying problem.</strong> A customer may request "Add feature X." The more useful question is "What are you trying to accomplish?"</p>
      <p><strong>2. Leading customers toward an answer.</strong> Research should minimize researcher influence.</p>
      <p><strong>3. Treating opinions as behavior.</strong> Someone saying "I would definitely buy this" does not guarantee an actual purchase. Whenever possible, compare stated preferences with observed behavior.</p>
      <p><strong>4. Researching only existing customers.</strong> Potential customers, lost customers, and people using alternatives can provide important information.</p>
      <p><strong>5. Copying competitors.</strong> Competitor analysis should reveal the market structure and customer expectations, not eliminate independent strategic thinking.</p>
      <p><strong>6. Creating imaginary personas.</strong> A persona should come from research.</p>
      <p><strong>7. Ignoring external forces.</strong> A business can understand its customers well while missing technology changes, regulation, economic changes, social trends, and environmental pressures.</p>
      <p><strong>8. Collecting information without making decisions.</strong> Research should eventually influence product, pricing, marketing, operations, customer experience, and strategy.</p>
      <p><strong>9. Assuming every customer has the same needs.</strong> Different segments may have completely different jobs, pain points, budgets, motivations, and buying behavior.</p>
      <p><strong>10. Stopping after the first research project.</strong> Markets change. Therefore: research → decision → implementation → results → new research. Market research is an ongoing business capability.</p>

      <hr />

      <h2>Market Research Strategy Map</h2>
      <pre>{`MARKET RESEARCH
                           │
       ┌───────────────────┼───────────────────┐
       ↓                   ↓                   ↓
   CUSTOMER            COMPETITION          EXTERNAL
       │                   │                   │
       ├─ Interviews       └─ Analysis         └─ PESTLE
       ├─ Surveys
       └─ Focus Groups
       │
       ↓
   CUSTOMER INSIGHTS
       │
       ├───────────────┐
       ↓               ↓
 Segmentation       Pain Points
       │               │
       ↓               ↓
 Personas          Customer Journey
       │               │
       └───────┬───────┘
               ↓
        Jobs-to-be-Done
               │
               ↓
          CUSTOMER NEED
               │
               ↓
        SWOT ANALYSIS
               │
               ↓
       BUSINESS OPPORTUNITY
               │
       ┌───────┼────────┐
       ↓       ↓        ↓
    Product  Marketing  Strategy
       │       │        │
       └───────┼────────┘
               ↓
           TEST RESULTS
               │
               ↓
        CONTINUOUS RESEARCH`}</pre>

      <hr />

      <h2>Essential Market Research Principles</h2>
      <ol>
        <li>Start with a clear research question.</li>
        <li>Talk to actual customers and potential customers.</li>
        <li>Ask about real behavior, not only hypothetical intentions.</li>
        <li>Use qualitative research to discover and quantitative research to measure.</li>
        <li>Segment customers based on meaningful differences.</li>
        <li>Build personas from evidence.</li>
        <li>Understand the customer's job, not just the product they purchase.</li>
        <li>Map the complete customer journey and its pain points.</li>
        <li>Analyze direct competitors and alternative solutions.</li>
        <li>Use SWOT to connect internal capabilities with external conditions.</li>
        <li>Use PESTLE to monitor the broader environment.</li>
        <li>Validate important assumptions with multiple sources of evidence.</li>
        <li>Do not confuse customer opinions with guaranteed behavior.</li>
        <li>Do not treat a research sample as representative without considering how it was selected.</li>
        <li>Turn research findings into specific business decisions.</li>
        <li>Continue researching after launch because customer needs and markets change.</li>
      </ol>

      <hr />

      <h2>The Fundamental Purpose of Market Research</h2>
      <pre>{`UNKNOWN
   ↓
QUESTIONS
   ↓
RESEARCH
   ↓
EVIDENCE
   ↓
INSIGHT
   ↓
DECISION
   ↓
ACTION
   ↓
RESULT
   ↓
LEARNING`}</pre>
      <p>Market research reduces uncertainty by turning assumptions about customers, competitors, and the market into evidence that can be used to make better-informed business decisions.</p>
    </LessonLayout>
  )
}
