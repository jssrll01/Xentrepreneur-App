import LessonLayout from '../components/LessonLayout'

export default function Engagement() {
  return (
    <LessonLayout
      number="54"
      title="Engagement"
      summary="10 interaction systems to build meaningful participation — quizzes, configurators, calculators, rewards, and gamification."
    >
      <h2>What Is Engagement?</h2>
      <h3>Definition</h3>
      <p>
        Engagement is the degree to which customers actively interact with a
        business, product, service, website, application, or brand.
      </p>
      <p>Instead of customers simply seeing, reading, and leaving, engagement encourages them to see → interact → explore → participate → learn → act → return.</p>
      <p>Engagement can be created through useful tools, personalized experiences, progress systems, rewards, interactive content, and game-like mechanics.</p>
      <p>The key principle is: engagement should create meaningful interaction, not interaction for its own sake.</p>

      <hr />

      <h2>1. Interactive Quizzes</h2>
      <h3>Definition</h3>
      <p>An interactive quiz asks customers questions and responds to their answers. Quizzes can educate customers, help them discover products, collect preferences, or guide them toward an appropriate choice.</p>
      <p>How it works: question → customer answer → next question → results → recommendation/action.</p>

      <h3>Types of business quizzes</h3>
      <p><strong>Product-selection quiz</strong> — helps customers determine which product fits their needs. Example: "What type of laptop is right for you?" Questions might cover budget, use case, portability, and storage.</p>
      <p><strong>Knowledge quiz</strong> — tests understanding of a topic.</p>
      <p><strong>Personality-style quiz</strong> — groups users based on predefined characteristics. It should avoid presenting arbitrary results as scientific facts.</p>
      <p><strong>Assessment quiz</strong> — evaluates needs or readiness.</p>
      <p><strong>Educational quiz</strong> — teaches customers while testing their understanding.</p>

      <h3>Implementation</h3>
      <p>A good quiz should: define its purpose, ask only useful questions, keep questions understandable, provide relevant answer choices, give a meaningful result, explain how the result was determined, and provide an appropriate next step.</p>

      <h3>Benefits</h3>
      <p>Increases interaction, helps customers discover products, collects preference information, makes education more engaging, can improve product discovery, and creates personalization opportunities.</p>

      <h3>Risks</h3>
      <p>Too many questions, irrelevant questions, poor recommendations, manipulative data collection, and customers abandoning the quiz.</p>

      <h3>Metric</h3>
      <p><strong>Completion Rate = Completed Quizzes ÷ Started Quizzes × 100</strong></p>

      <hr />

      <h2>2. Product Configurators</h2>
      <h3>Definition</h3>
      <p>A product configurator allows customers to customize a product or service by selecting different options. For example: size, color, storage, accessories, features, and services all leading to a customized product.</p>

      <h3>Example</h3>
      <p>A website-development service could allow a customer to select website type (business website), pages (5 pages), features (contact form, booking, analytics), design (custom), and support (3 months). The configurator calculates the package price.</p>

      <h3>How to implement</h3>
      <p>A good configurator needs valid options (only offer choices the business can actually provide), compatibility rules (some selections may depend on others), real-time pricing, clear summary, and reset/edit capability.</p>
      <p><strong>Total Price = Base Price + Selected Add-ons − Applicable Discounts</strong></p>

      <h3>Benefits</h3>
      <p>Personalization, greater engagement, better product understanding, potentially higher average order value, and helps customers visualize their purchase.</p>

      <h3>Risks</h3>
      <p>Too many choices, configuration errors, complex pricing, compatibility problems, and decision fatigue. A configurator should simplify customization rather than turn the buying process into a technical puzzle.</p>

      <hr />

      <h2>3. Calculators</h2>
      <h3>Definition</h3>
      <p>A business calculator is an interactive tool that calculates a useful result from customer-provided inputs. Examples: pricing calculator, loan calculator, shipping calculator, savings calculator, ROI calculator, cost calculator, quantity calculator, subscription-cost calculator, and project estimator.</p>

      <h3>Example: website project calculator</h3>
      <p>Customer enters pages (5), e-commerce (yes), booking (yes), custom design (yes), and maintenance (3 months). The calculator produces estimated project cost ₱25,000 and estimated timeline 3–5 weeks. The assumptions should be visible.</p>

      <h3>Why calculators create engagement</h3>
      <p>Instead of telling customers "Our website packages start at ₱15,000," a calculator lets them ask "How much would my website cost?" This makes the experience more personally relevant.</p>

      <h3>Important principle</h3>
      <p>Calculators should use clear assumptions. <strong>Estimated Cost = Base Cost + Feature Costs + Service Costs</strong>. If the result is only an estimate, label it as an estimate.</p>

      <h3>Metrics</h3>
      <p>Calculator starts, completion rate, results generated, leads generated, conversion after calculation, and average estimated value.</p>

      <hr />

      <h2>4. Polls</h2>
      <h3>Definition</h3>
      <p>A poll asks users to select from predefined options. Example: "Which feature should Xmarket add next?" Options: seller analytics, wishlist, product comparison, order tracking.</p>
      <p>How it works: question → options → customer votes → results → discussion/decision.</p>

      <h3>Business uses</h3>
      <p><strong>Product development</strong> — ask which feature customers want. <strong>Content</strong> — ask what topic customers want next. <strong>Community</strong> — ask opinions about events or activities. <strong>Marketing</strong> — learn preferences. <strong>Customer research</strong> — identify common needs.</p>

      <h3>Benefits</h3>
      <p>Easy participation, quick feedback, community interaction, generates discussion, and helps identify preferences.</p>

      <h3>Risks</h3>
      <p>Poorly written questions, biased answer choices, unrepresentative respondents, and treating a casual poll as statistically representative research. A poll is useful feedback, but it doesn't automatically represent the entire customer population.</p>

      <hr />

      <h2>5. Surveys</h2>
      <h3>Definition</h3>
      <p>A survey collects structured information from customers through multiple questions.</p>
      <p>Compared with polls: <strong>Poll</strong> — usually short; often one/few questions; fast participation; quick opinion; high completion potential. <strong>Survey</strong> — usually more detailed; multiple questions; more information; deeper feedback; higher abandonment risk.</p>

      <h3>Types</h3>
      <p>Customer satisfaction survey, product survey, post-purchase survey, exit survey, and market survey.</p>

      <h3>Example</h3>
      <p>After an Xmarket order: "How satisfied were you with your purchase?" (1-5 scale), then "What could we improve?" The combination of quantitative and qualitative feedback is more useful than a score alone.</p>

      <h3>Metrics</h3>
      <p><strong>Response Rate = Completed Surveys ÷ Invited Customers × 100</strong></p>
      <p><strong>Average Rating = Total Ratings ÷ Number of Responses</strong></p>

      <hr />

      <h2>6. Progress Indicators</h2>
      <h3>Definition</h3>
      <p>A progress indicator shows customers how far they have progressed through a process. Examples: step indicator (account → preferences → payment → confirmation) or profile completion (80%).</p>

      <h3>Why it works</h3>
      <p>Uncertainty about how much work remains can cause abandonment. A progress indicator answers: how much longer will this take?</p>

      <h3>Types</h3>
      <p><strong>Step indicator</strong> — 1 → 2 → 3 → 4. <strong>Progress bar</strong> — 83%. <strong>Profile completion</strong> — 75% complete. <strong>Course progress</strong> — lesson 7 of 10.</p>

      <h3>Best practices</h3>
      <p>Show genuine progress. Don't make 80% progress become 30% later. Keep steps understandable. Don't create unnecessary steps merely to show progress. Allow users to go backward where appropriate.</p>

      <h3>Benefits</h3>
      <p>Reduces uncertainty, encourages completion, makes long processes feel manageable, and creates a sense of advancement.</p>
      <p><strong>Completion Rate = Completed Processes ÷ Started Processes × 100</strong></p>

      <hr />

      <h2>7. Rewards Systems</h2>
      <h3>Definition</h3>
      <p>A rewards system gives customers benefits for specified actions. Examples: points, discounts, coupons, free products, free shipping, exclusive access, and membership benefits.</p>
      <p>Basic structure: customer action → earn reward → accumulate/unlock → redeem → receive benefit → return.</p>

      <h3>Example</h3>
      <p>Xmarket could offer purchase ₱100 → earn 1 point. 500 points → ₱50 eligible reward. The actual conversion should be economically sustainable.</p>

      <h3>Important design elements</h3>
      <p>Define earning rules, redemption rules, expiration, eligible purchases, minimum redemption, maximum rewards, fraud prevention, and terms and conditions.</p>

      <h3>Benefits</h3>
      <p>Encourages repeat purchases, gives customers another reason to return, increases participation, and can support loyalty.</p>

      <h3>Risks</h3>
      <p>Reward costs, complexity, fraud, customers becoming dependent on discounts, and unclear expiration rules.</p>

      <hr />

      <h2>8. Achievement Badges</h2>
      <h3>Definition</h3>
      <p>Achievement badges are visual markers awarded when customers complete specific actions or reach milestones. Example: new member → first purchase → 5 purchases → 10 purchases → top contributor.</p>

      <h3>Examples</h3>
      <p><strong>Marketplace:</strong> first purchase, verified buyer, 10 orders, helpful reviewer. <strong>Learning platform:</strong> first lesson, 10 lessons, course completed, 30-day streak. <strong>Community:</strong> first post, helpful contributor, event participant.</p>

      <h3>Important principle</h3>
      <p>Badges should represent meaningful achievements. If every tiny action receives a badge, badges lose their significance.</p>

      <h3>Benefits</h3>
      <p>Provides visible progress, creates milestones, encourages participation, makes achievements recognizable, and supports community identity.</p>

      <h3>Risks</h3>
      <p>Badge overload, meaningless achievements, encouraging low-value activity, and competition becoming unhealthy.</p>

      <hr />

      <h2>9. Loyalty Points</h2>
      <h3>Definition</h3>
      <p>Loyalty points are a reward currency customers accumulate through eligible activities and later redeem for benefits.</p>
      <p>Example: purchase ₱1,000 → 10 points → 50 points → 100 points → redeem reward.</p>

      <h3>Points economics</h3>
      <p>Suppose customer spends ₱1,000, earns 10 points, 100 points = ₱100 reward. Then the customer needs ₱10,000 of eligible spending to generate ₱100 in rewards.</p>
      <p><strong>Reward Cost Rate = Reward Value ÷ Required Spend × 100 = 100 ÷ 10,000 × 100 = 1%</strong>. This gives the business a starting point for evaluating reward economics. Actual cost can differ because not all points may be redeemed and some rewards may have different costs.</p>

      <h3>Loyalty-point design</h3>
      <p>Earn → track → balance → redeem → reward → return.</p>

      <h3>Benefits</h3>
      <p>Encourages repeat purchases, creates a reason to return, can increase purchase frequency, and provides measurable loyalty behavior.</p>

      <h3>Risks</h3>
      <p>Liability from outstanding points, fraud, accounting complexity, expiration disputes, and excessive reward costs.</p>

      <hr />

      <h2>10. Gamification</h2>
      <h3>Definition</h3>
      <p>Gamification applies selected game-design elements to non-game experiences to encourage participation, progression, learning, or achievement. It does not mean turning an entire business into a video game.</p>

      <h3>Common gamification elements</h3>
      <p>Points, badges, levels, progress, challenges, streaks, rewards, missions, milestones, leaderboards, and unlockable content.</p>

      <h3>Example: learning platform</h3>
      <p>Complete lesson → earn XP → reach level 2 → unlock badge → complete challenge → unlock new content.</p>

      <h3>Example: marketplace</h3>
      <p>A marketplace could gamify seller education: complete seller profile (+10 XP) → add 5 products (+20 XP) → complete shipping tutorial (+15 XP) → complete first order (achievement badge). The objective should be to encourage useful seller behavior, not meaningless clicking.</p>

      <h3>Gamification vs rewards</h3>
      <p><strong>Gamification:</strong> uses game mechanics; progress, challenges, levels; can work without monetary rewards; focuses on participation; example: XP and badges.</p>
      <p><strong>Rewards system:</strong> provides benefits; points, discounts, benefits; usually involves a tangible/usable benefit; focuses on incentive; example: 500 points = ₱50 reward.</p>
      <p>They can also be combined: action → XP + points → level + reward → achievement.</p>

      <hr />

      <h2>Engagement Architecture</h2>
      <p>The ten concepts can work together as one system. Customer → interactive entry (quiz, calculator, poll) → personalization → configurator → decision → purchase/use → progress tracking → rewards and badges → gamification → return visit → loyalty.</p>

      <hr />

      <h2>Engagement Funnel</h2>
      <p><strong>Stage 1 — Attract.</strong> Use quizzes, polls, calculators. Goal: get the customer to interact.</p>
      <p><strong>Stage 2 — Explore.</strong> Use product configurators, surveys, interactive product information. Goal: help customers understand their needs and options.</p>
      <p><strong>Stage 3 — Progress.</strong> Use progress indicators, milestones, guided workflows. Goal: encourage completion.</p>
      <p><strong>Stage 4 — Reward.</strong> Use rewards, loyalty points, achievement badges. Goal: give customers meaningful benefits or recognition.</p>
      <p><strong>Stage 5 — Return.</strong> Use challenges, new milestones, personalized activities, loyalty programs. Goal: encourage continued useful participation.</p>

      <hr />

      <h2>Engagement Metrics</h2>
      <ul>
        <li><strong>Engagement Rate</strong> — interactions ÷ eligible users</li>
        <li><strong>Quiz Completion</strong> — completed ÷ started</li>
        <li><strong>Calculator Completion</strong> — completed calculations ÷ starts</li>
        <li><strong>Poll Participation</strong> — votes ÷ exposed users</li>
        <li><strong>Survey Response</strong> — responses ÷ invitations</li>
        <li><strong>Process Completion</strong> — completed processes ÷ started</li>
        <li><strong>Reward Redemption</strong> — redeemed rewards ÷ issued rewards</li>
        <li><strong>Points Earn Rate</strong> — points earned over a period</li>
        <li><strong>Repeat Engagement</strong> — returning active users ÷ active users</li>
        <li><strong>Feature Adoption</strong> — users using feature ÷ eligible users</li>
        <li><strong>Session Frequency</strong> — average sessions per user</li>
        <li><strong>Retention</strong> — users returning after a defined period</li>
      </ul>

      <hr />

      <h2>Engagement Quality</h2>
      <p>High engagement is not automatically good engagement. Consider a user who clicks 50 times but accomplishes nothing — high activity, low value. Versus a user who uses a calculator, understands cost, configures a product, purchases an appropriate package, and successfully uses the product. The second interaction may involve fewer actions but create more business and customer value.</p>
      <p>Therefore: <strong>Engagement Quality ≈ Interaction × Relevance × Value</strong>. This is a conceptual model rather than a universal metric.</p>

      <hr />

      <h2>Engagement vs Conversion</h2>
      <p>Engagement: customer interacts. Conversion: customer completes desired action. A business might measure: 10,000 visitors → 4,000 interact → 1,500 configure products → 700 add to cart → 300 purchase. This allows the business to identify where participation drops.</p>

      <hr />

      <h2>Engagement System for a Web Application</h2>
      <p>For a web application, the concepts can become actual interface features. Home branches into interactive quiz (recommendation), calculator (estimate), product configurator (custom package), and community poll (participation). Account branches into progress, points, badges, rewards, and achievements. This is especially useful for marketplaces, educational platforms, SaaS applications, customer portals, and communities.</p>

      <hr />

      <h2>Common Mistakes</h2>
      <p><strong>1. Gamifying everything.</strong> Not every business process needs points or badges.</p>
      <p><strong>2. Rewarding meaningless actions.</strong> If users receive rewards simply for clicking buttons, engagement metrics can become misleading.</p>
      <p><strong>3. Making quizzes too long.</strong> More questions don't necessarily produce better engagement.</p>
      <p><strong>4. Overcomplicating configurators.</strong> Customization should help customers make decisions — not overwhelm them.</p>
      <p><strong>5. Using calculators without assumptions.</strong> Customers may interpret estimates as guaranteed prices.</p>
      <p><strong>6. Asking too many survey questions.</strong> Long surveys often increase abandonment.</p>
      <p><strong>7. Fake progress.</strong> Progress indicators should accurately represent actual completion.</p>
      <p><strong>8. Rewards that are impossible to redeem.</strong> A reward system loses credibility if customers cannot realistically use their rewards.</p>
      <p><strong>9. Excessive notifications.</strong> Repeated reminders can turn engagement into annoyance.</p>
      <p><strong>10. Measuring clicks instead of outcomes.</strong> A business should ask: what useful behavior did this engagement produce? Not simply: how many times was it clicked?</p>

      <hr />

      <h2>Complete Engagement Framework</h2>
      <p><strong>Interactive Content + Personalization + Useful Tools + Progress + Participation + Meaningful Rewards + Recognition + Gamification + Feedback + Continuous Improvement = Effective Engagement</strong></p>
      <p>The strongest engagement systems create a cycle: interact → learn → personalize → progress → achieve → reward → return → interact again.</p>
      <p>The central principle is meaningful engagement: give customers something useful to discover, calculate, customize, accomplish, or participate in. Gamification and rewards should reinforce that value rather than become the value themselves.</p>
    </LessonLayout>
  )
}
