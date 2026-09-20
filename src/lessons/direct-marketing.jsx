import LessonLayout from '../components/LessonLayout'

export default function DirectMarketing() {
  return (
    <LessonLayout
      number="25"
      title="Direct Marketing"
      summary="11 direct-response channels to reach individual customers — email, SMS, messenger, push, mail, and outreach."
    >
      <h2>Direct Marketing</h2>
      <h3>Definition</h3>
      <p>
        Direct marketing is a marketing approach where a business communicates
        directly with individual customers or prospects to encourage a specific
        action.
      </p>
      <p>Unlike broad brand advertising, direct marketing is designed to reach a specific person or audience with a measurable message and response.</p>
      <p>Common goals include making a purchase, booking a service, registering for an event, starting a trial, renewing a subscription, returning to an abandoned purchase, claiming an offer, replying to a sales message, and visiting a website or landing page.</p>
      <p>The basic system is: audience → customer data/contact permission → segmentation → personalized message → offer/value → call to action → customer action → measurement → optimization.</p>

      <h3>Direct marketing vs general marketing</h3>
      <p><strong>Direct:</strong> targets identifiable audiences; direct communication; usually has a specific CTA; highly measurable; often personalized; email, SMS, calls, mail; response can be tracked.</p>
      <p><strong>General/brand:</strong> often targets broader audiences; mass communication is common; may focus on awareness; measurement can be less direct; often generalized; TV, billboards, broad campaigns; response may be harder to attribute.</p>

      <h3>Main direct-marketing channels</h3>
      <p>Direct marketing branches into digital (email, SMS, Messenger, push, newsletter), voice (calling), and physical (direct mail), plus promotional campaigns.</p>

      <h3>Important principle: permission</h3>
      <p>Direct communication can easily become intrusive if customers did not expect it. A responsible system should consider whether the customer gave permission, why the business has the contact information, what type of messages the customer agreed to receive, how frequently messages are sent, whether customers can unsubscribe, whether personal information is protected, and whether the message provides genuine value.</p>
      <p>Direct marketing should not simply mean "contact everyone as often as possible."</p>

      <hr />

      <h2>1. Email Marketing</h2>
      <h3>Definition</h3>
      <p>Email marketing uses email to communicate with customers or prospects for marketing, education, sales, retention, or relationship-building.</p>
      <p>Examples: product announcements, promotions, educational content, welcome sequences, abandoned-cart reminders, renewal reminders, personalized recommendations, and customer updates.</p>

      <h3>How it works</h3>
      <p>Customer opts in → email enters database → customer is segmented → email campaign is created → email is delivered → customer opens → customer clicks → customer converts → result is measured.</p>

      <h3>Types of email marketing</h3>
      <p><strong>Welcome email</strong> — introduce the business.</p>
      <p><strong>Promotional email</strong> — generate sales.</p>
      <p><strong>Educational email</strong> — provide useful information.</p>
      <p><strong>Newsletter</strong> — maintain ongoing communication.</p>
      <p><strong>Product announcement</strong> — introduce something new.</p>
      <p><strong>Abandoned-cart email</strong> — recover potential purchases.</p>
      <p><strong>Re-engagement email</strong> — reactivate inactive customers.</p>
      <p><strong>Renewal email</strong> — encourage renewal.</p>
      <p><strong>Transactional email</strong> — confirm or communicate a transaction.</p>

      <h3>How to implement</h3>
      <ol>
        <li><strong>Build a permission-based list.</strong> Collect appropriate information such as name, email address, customer type, product interest, purchase history, and communication preferences.</li>
        <li><strong>Segment the audience.</strong> For example: new subscribers, existing customers, frequent buyers, inactive customers, and high-value customers.</li>
        <li><strong>Define the objective.</strong> One campaign should have a clear primary goal. Example: increase sales of a new electronics category.</li>
        <li><strong>Write the email.</strong> A simple structure: subject → opening → problem/opportunity → value → offer → CTA.</li>
        <li><strong>Measure results.</strong> Important metrics include delivery rate, open rate, click-through rate, conversion rate, unsubscribe rate, revenue per recipient, and revenue attributed to campaign.</li>
      </ol>

      <h3>Example</h3>
      <p>Xmarket has 5,000 opted-in customers. It sends "New Deals Under ₱1,000 — This Week Only." The email contains several products and sends customers to the relevant marketplace pages. The business measures: 5,000 recipients → 4,850 delivered → 1,700 opened → 420 clicked → 85 purchased.</p>

      <h3>Benefits</h3>
      <p>Low distribution cost, highly measurable, easy segmentation, supports automation, good for retention, and can personalize communication.</p>

      <h3>Risks</h3>
      <p>Spam complaints, low engagement, excessive frequency, poorly targeted offers, deliverability problems, and list quality deterioration.</p>

      <hr />

      <h2>2. SMS Marketing</h2>
      <h3>Definition</h3>
      <p>SMS marketing uses text messages to communicate short promotional or customer-related messages. SMS is particularly useful when the message is time-sensitive, short, action-oriented, and important enough to deserve immediate attention.</p>

      <h3>Examples</h3>
      <p>Sale announcements, appointment reminders, renewal reminders, order-related notifications, limited-time offers, and event reminders.</p>

      <h3>SMS structure</h3>
      <p>Attention → offer/information → time limit → CTA.</p>
      <p>Example: "Xmarket Weekend Sale: Save up to ₱500 on selected products until Sunday. Shop now: [link]."</p>

      <h3>Implementation</h3>
      <ol>
        <li>Obtain appropriate customer permission.</li>
        <li>Store phone numbers securely.</li>
        <li>Segment recipients.</li>
        <li>Keep messages concise.</li>
        <li>Identify the sender/business.</li>
        <li>Include a clear action.</li>
        <li>Provide appropriate opt-out mechanisms.</li>
        <li>Track results.</li>
        <li>Control frequency.</li>
      </ol>

      <h3>Metrics</h3>
      <p><strong>Delivery Rate = Delivered Messages ÷ Sent Messages × 100</strong></p>
      <p><strong>Conversion Rate = Conversions ÷ Delivered Messages × 100</strong></p>
      <p><strong>Revenue per Message = Attributed Revenue ÷ Messages Delivered</strong></p>

      <h3>Benefits</h3>
      <p>Fast communication, high visibility, useful for time-sensitive campaigns, simple messages, and easy to combine with other channels.</p>

      <h3>Risks</h3>
      <p>Can feel intrusive, limited message length, higher perceived interruption, excessive frequency can cause opt-outs, and regulatory and consent requirements must be respected.</p>

      <hr />

      <h2>3. Messenger Marketing</h2>
      <h3>Definition</h3>
      <p>Messenger marketing uses messaging platforms to communicate directly with customers. Examples include business messaging through platforms such as Facebook Messenger or other supported messaging systems.</p>
      <p>It can be used for product inquiries, promotions, customer support, product recommendations, lead qualification, follow-ups, abandoned-cart conversations, and appointment booking.</p>

      <h3>Conversation-based marketing</h3>
      <p>Messenger differs from email because communication can feel more conversational. Customer → message → business response → question → recommendation → offer → customer decision.</p>

      <h3>Example</h3>
      <p>Customer: "Do you have wireless keyboards under ₱1,000?" Business: "Yes. We currently have three options under ₱1,000. Are you looking for a compact keyboard or a full-size one?" The conversation can then recommend a relevant product.</p>

      <h3>Implementation</h3>
      <p>Create predefined conversation paths: start branches into products (electronics, accessories, other), promotions, order help, and talk to support.</p>

      <h3>Automation</h3>
      <p>Messenger automation can handle repetitive questions. For example, the customer asks "Where is my order?" → system identifies intent → requests order number → checks order system → provides status. More complex situations can be transferred to a human.</p>

      <h3>Benefits</h3>
      <p>Conversational, good for questions, can qualify leads, can personalize recommendations, supports automation, and combines marketing and customer service.</p>

      <h3>Risks</h3>
      <p>Automation can feel robotic, poor responses can frustrate customers, platform dependency, privacy considerations, and too many promotional messages can damage customer relationships.</p>

      <hr />

      <h2>4. Push Notifications</h2>
      <h3>Definition</h3>
      <p>Push notifications are messages sent by an application or website directly to a user's device.</p>

      <h3>Examples</h3>
      <p>Flash sale started — your saved items are now discounted. Your cart is waiting — complete your order before the offer ends. New for you — products matching your interests are now available.</p>

      <h3>How push notifications work</h3>
      <p>User installs/subscribes → permission granted → push token/device registration → business creates notification → notification service → user's device → user opens notification → landing page/app screen.</p>

      <h3>Types</h3>
      <p><strong>Promotional</strong> — "20% off selected products today."</p>
      <p><strong>Behavioral</strong> — "You left something in your cart."</p>
      <p><strong>Personalized</strong> — "New accessories matching your interests are available."</p>
      <p><strong>Transactional</strong> — "Your order has been shipped."</p>
      <p><strong>Content</strong> — "New tutorial available."</p>

      <h3>Implementation</h3>
      <p>Segment notifications based on behavior: new users, active users, cart abandoners, frequent buyers, and inactive users. Then send relevant messages to each segment.</p>

      <h3>Key metrics</h3>
      <p>Delivery rate, open/click rate, conversion rate, opt-out rate, revenue per notification, and engagement after notification.</p>

      <h3>Risks</h3>
      <p>The biggest problem is notification fatigue. If a user receives eight notifications between 8 AM and 6 PM, they may eventually disable notifications. The objective is therefore: relevant notification &gt; frequent notification.</p>

      <hr />

      <h2>5. Direct Mail</h2>
      <h3>Definition</h3>
      <p>Direct mail sends physical promotional material directly to a person's address.</p>
      <p>Examples: catalogs, flyers, postcards, coupons, product brochures, promotional letters, and local business offers.</p>

      <h3>How it works</h3>
      <p>Customer database → target audience → mailing list → printed material → distribution → customer response → tracking.</p>

      <h3>Example</h3>
      <p>A local furniture business identifies previous customers and sends them a printed seasonal catalog containing new furniture, discount codes, financing information, store address, and QR/website destination. The catalog uses a campaign-specific code.</p>

      <h3>Tracking</h3>
      <p>Physical campaigns can still be measurable. Use unique coupon codes, dedicated landing pages, campaign-specific phone numbers, QR codes, customer surveys, and unique URLs.</p>

      <h3>Benefits</h3>
      <p>Physical presence, can stand out from digital messages, useful for local businesses, can reach audiences less engaged digitally, and can support premium positioning.</p>

      <h3>Risks</h3>
      <p>Printing cost, distribution cost, slow compared with digital, physical waste, address quality problems, and difficult to update after printing.</p>

      <hr />

      <h2>6. Cold Email</h2>
      <h3>Definition</h3>
      <p>Cold email is an unsolicited business email sent to a person or organization with whom the sender does not already have an established relationship.</p>
      <p>It is frequently used in B2B sales, partnership outreach, lead generation, service sales, recruiting, and business development.</p>

      <h3>Cold email vs email marketing</h3>
      <p><strong>Email marketing:</strong> usually permission/subscription-based; often sent to lists; newsletter/promotions common; relationship already exists; marketing automation common.</p>
      <p><strong>Cold email:</strong> recipient may not know sender; usually targeted individually; sales/outreach common; relationship may not exist; personal research often important.</p>

      <h3>Cold email structure</h3>
      <p>Relevant opening → reason for contact → problem/opportunity → specific value → proof/context → simple CTA.</p>

      <h3>Example</h3>
      <p>A web developer could contact a local business whose website has an obvious usability problem. Instead of "Hello, I make websites. Do you need one?," a targeted message might explain why the business was contacted, an observable website issue, what could be improved, what the developer can provide, and a low-friction next step.</p>

      <h3>Implementation</h3>
      <ol>
        <li><strong>Define the ideal prospect.</strong> Example: local retailers, small businesses, outdated websites, website redesign offer.</li>
        <li><strong>Research each prospect.</strong> Look for relevant information rather than sending identical messages to everyone.</li>
        <li><strong>Create a concise message.</strong> Avoid unnecessary paragraphs.</li>
        <li><strong>Make the CTA easy.</strong> Examples: "Would you be open to a 10-minute call?" "Would you like me to send a sample redesign?" "Is this something your team is considering?"</li>
        <li><strong>Follow up appropriately.</strong> A follow-up should add context or value rather than simply saying "Just following up."</li>
      </ol>

      <h3>Metrics</h3>
      <p><strong>Reply Rate = Replies ÷ Delivered Emails × 100</strong></p>
      <p><strong>Meeting Rate = Meetings ÷ Delivered Emails × 100</strong></p>
      <p><strong>Customer Conversion = Customers ÷ Qualified Prospects × 100</strong></p>

      <h3>Risks</h3>
      <p>Spam complaints, poor targeting, low-quality contact lists, damaged reputation, legal/compliance issues, excessive follow-ups, and generic messaging. Cold outreach should respect applicable privacy, anti-spam, and marketing rules.</p>

      <hr />

      <h2>7. Cold Calling</h2>
      <h3>Definition</h3>
      <p>Cold calling is contacting a potential customer by phone when there has not previously been a sales relationship with that person.</p>
      <p>It is commonly used in B2B sales, real estate, insurance, professional services, local business sales, and business development.</p>

      <h3>Basic process</h3>
      <p>Prospect research → call → introduction → permission to continue → discovery questions → needs identification → relevant offer → next step.</p>

      <h3>Example</h3>
      <p>A software company wants to sell appointment-management software to salons. Instead of immediately explaining every feature, the salesperson could first determine whether the salon experiences problems with appointment scheduling, no-shows, customer reminders, or staff scheduling. The product is then connected to an actual business need.</p>

      <h3>Important cold-calling principle</h3>
      <p>The goal of the first call does not always have to be making the sale. It may be qualifying the prospect, discovering needs, booking a demonstration, scheduling a meeting, sending information, or determining whether there is a fit.</p>

      <h3>Useful questions</h3>
      <p>"How are you currently handling this?" "What is the biggest difficulty with your current process?" "How often does that happen?" "What happens when it occurs?" "Are you currently considering alternatives?"</p>

      <h3>Metrics</h3>
      <p>Calls made, contact rate, conversation rate, qualified leads, appointment rate, conversion rate, revenue per call, and cost per acquired customer.</p>

      <h3>Risks</h3>
      <p>Rejection, interrupting customers, poor targeting, script dependency, compliance issues, and negative brand perception.</p>

      <hr />

      <h2>8. Personalized Outreach</h2>
      <h3>Definition</h3>
      <p>Personalized outreach is direct communication adapted to the specific recipient rather than sending the exact same message to everyone.</p>
      <p>Personalization can involve name, industry, location, previous purchase, product interest, business situation, customer behavior, specific problem, and previous conversation.</p>

      <h3>Levels of personalization</h3>
      <p>Level 1: name only → level 2: name + segment → level 3: behavior + interest → level 4: individual context → level 5: highly relevant 1-to-1 outreach.</p>
      <p>Simply inserting someone's name is not the same as meaningful personalization.</p>

      <h3>Example</h3>
      <p>Generic: "Check out our new products!"</p>
      <p>Segmented: "New accessories for laptop users are now available."</p>
      <p>Behavior-based: "You recently viewed wireless keyboards. We added three new models."</p>
      <p>Highly personalized B2B outreach: "I noticed your business recently expanded its online ordering system. We build lightweight inventory dashboards for businesses managing multiple sales channels."</p>

      <h3>Personalization framework</h3>
      <p><strong>Who?</strong> What type of customer/prospect?</p>
      <p><strong>What?</strong> What do they need?</p>
      <p><strong>Why now?</strong> What makes this relevant now?</p>
      <p><strong>Value.</strong> What can you offer?</p>
      <p><strong>CTA.</strong> What should they do next?</p>

      <h3>Benefits</h3>
      <p>Higher relevance, better customer experience, stronger engagement, more useful sales conversations, and better segmentation.</p>

      <h3>Risks</h3>
      <p>Incorrect personalization, privacy concerns, excessive data collection, messages that feel invasive, and outdated customer information.</p>

      <h3>Key principle</h3>
      <p>Personalization should improve relevance, not demonstrate how much data the business has.</p>

      <hr />

      <h2>9. Newsletter Marketing</h2>
      <h3>Definition</h3>
      <p>Newsletter marketing is the regular distribution of valuable content to an audience through email or another subscription-based channel. A newsletter usually focuses more on ongoing relationship and information than a single promotion.</p>

      <h3>Possible content</h3>
      <p>Industry news, educational content, tips, product updates, new products, customer stories, offers, and company updates.</p>

      <h3>Example</h3>
      <p>An Xmarket newsletter could contain: new products, best-value deals, buying guide, featured seller, popular products, and weekly promotion.</p>

      <h3>Newsletter structure</h3>
      <p>Header → main story/value → supporting content → products/offers → CTA → footer + preferences.</p>

      <h3>Newsletter vs promotional email</h3>
      <p><strong>Newsletter:</strong> recurring relationship; primarily value/content; usually scheduled; builds audience habit; can contain multiple topics.</p>
      <p><strong>Promotional email:</strong> campaign-specific; primarily offer; usually event-driven; drives immediate action; usually one main offer.</p>

      <h3>Implementation</h3>
      <p>Choose publishing frequency, audience, content pillars, editorial format, CTA strategy, and measurement system.</p>

      <h3>Metrics</h3>
      <p>Subscriber growth, delivery rate, open rate, click rate, unsubscribe rate, conversion rate, and revenue per subscriber.</p>

      <h3>Benefits</h3>
      <p>Builds recurring communication, supports retention, establishes expertise, creates repeat traffic, and provides a channel the business can consistently use.</p>

      <h3>Risks</h3>
      <p>Inconsistent publishing, low-quality content, excessive promotion, subscriber fatigue, and low engagement.</p>

      <hr />

      <h2>10. Promotional Campaigns</h2>
      <h3>Definition</h3>
      <p>A promotional campaign is a coordinated marketing effort designed to generate a specific response during a defined period.</p>
      <p>Examples: flash sale, seasonal sale, new-product launch, back-to-school promotion, holiday campaign, limited-time discount, buy-one-get-one offer, free shipping campaign, and referral campaign.</p>

      <h3>Campaign structure</h3>
      <p>Objective → target audience → offer → message → channels → landing page → call to action → conversion → measurement.</p>

      <h3>Example: Xmarket weekend campaign</h3>
      <p><strong>Objective:</strong> generate additional weekend sales.</p>
      <p><strong>Audience:</strong> existing customers and opted-in prospects.</p>
      <p><strong>Offer:</strong> selected products discounted for the weekend.</p>
      <p><strong>Channels:</strong> email + SMS + messenger + push + social media.</p>
      <p><strong>Landing page:</strong> dedicated weekend-deals page.</p>
      <p><strong>CTA:</strong> "Shop Weekend Deals."</p>

      <h3>Multi-channel campaign</h3>
      <p>Direct marketing becomes more powerful when channels are coordinated. Campaign branches into email, SMS, and messenger, all leading to a landing page, then purchase, then follow-up.</p>

      <h3>Campaign components</h3>
      <p><strong>Objective</strong> — examples: generate ₱100,000 revenue, acquire 100 customers, reactivate 500 inactive customers, generate 300 leads.</p>
      <p><strong>Audience</strong> — define exactly who should receive the campaign.</p>
      <p><strong>Offer</strong> — examples: percentage discount, fixed discount, bundle, free shipping, bonus product, limited access.</p>
      <p><strong>Urgency</strong> — examples: ends Sunday, limited quantity, early access, launch week. Urgency should be genuine rather than artificially manufactured.</p>
      <p><strong>Message</strong> — explain what is being offered, why it is valuable, why it is relevant, what the customer should do, and when it ends.</p>
      <p><strong>Landing page</strong> — the destination should match the campaign. Ad/email → offer → landing page → product → checkout. If the email promises a specific deal but the landing page forces customers to search through hundreds of unrelated products, conversion can suffer.</p>

      <hr />

      <h2>Direct Marketing Metrics</h2>
      <p><strong>Reach</strong> — number of people successfully contacted.</p>
      <p><strong>Delivery Rate = Delivered ÷ Sent × 100</strong></p>
      <p><strong>Engagement Rate = Engaged Users ÷ Reached Users × 100</strong></p>
      <p><strong>CTR = Clicks ÷ Delivered Messages × 100</strong></p>
      <p><strong>Conversion Rate = Conversions ÷ Clicks or Delivered Users × 100</strong> — the denominator should be clearly defined because different businesses calculate conversion differently.</p>
      <p><strong>CAC = (Marketing + Sales Costs) ÷ New Customers</strong></p>
      <p><strong>Revenue per Recipient = Attributed Revenue ÷ Recipients</strong></p>
      <p><strong>ROMI = (Incremental Revenue − Marketing Cost) ÷ Marketing Cost × 100</strong> — profit-based calculations can be more useful when margins vary substantially.</p>

      <hr />

      <h2>Direct Marketing Funnel</h2>
      <p>Audience → contact permission → segmentation → message sent → delivered → engagement → click → landing page → offer → conversion → purchase → retention → repeat buy → advocacy.</p>

      <h3>Channels by funnel stage</h3>
      <ul>
        <li><strong>Awareness</strong> — cold outreach, direct mail</li>
        <li><strong>Lead generation</strong> — cold email, cold calling, messenger</li>
        <li><strong>Consideration</strong> — email, messenger, newsletters</li>
        <li><strong>Conversion</strong> — email, SMS, messenger, push</li>
        <li><strong>Retention</strong> — email, newsletter, push</li>
        <li><strong>Reactivation</strong> — SMS, email, personalized outreach</li>
        <li><strong>Promotion</strong> — email, SMS, push, messenger</li>
      </ul>

      <hr />

      <h2>Segmentation in Direct Marketing</h2>
      <p>Sending one message to everyone is often inefficient. A business can segment customers by:</p>
      <p><strong>Demographics</strong> — age, location, business type.</p>
      <p><strong>Behavior</strong> — purchased, viewed, clicked, abandoned cart, downloaded, opened emails.</p>
      <p><strong>Purchase history</strong> — first-time buyer, repeat buyer, high-value buyer, inactive buyer.</p>
      <p><strong>Lifecycle</strong> — prospect → lead → first purchase → active customer → repeat customer → loyal customer → inactive customer → win-back.</p>
      <p>Each stage can receive different communication.</p>

      <hr />

      <h2>Personalization + Automation</h2>
      <p>Personalization does not require every message to be manually written. A business can combine customer data + segmentation + automation + templates.</p>
      <p>Customer behavior → data recorded → segment identified → trigger occurs → personalized template → automated message → customer action.</p>
      <p>Example: customer views product → does not purchase → wait → relevant reminder → customer returns → purchase. Automation should have frequency limits and conditions so customers do not receive irrelevant messages.</p>

      <hr />

      <h2>Direct Marketing Channel Comparison</h2>
      <ul>
        <li><strong>Email</strong> — fast — high personalization — low cost — promotions, education, retention</li>
        <li><strong>SMS</strong> — very fast — high — medium — urgent/time-sensitive</li>
        <li><strong>Messenger</strong> — fast — very high — low-medium — conversations and support</li>
        <li><strong>Push</strong> — very fast — high — low — app/web engagement</li>
        <li><strong>Direct mail</strong> — slow — high — higher — physical/local</li>
        <li><strong>Cold email</strong> — fast — very high — low — B2B outreach</li>
        <li><strong>Cold calling</strong> — immediate — very high — medium-high — sales/discovery</li>
        <li><strong>Personalized outreach</strong> — fast — very high — variable — high-value prospects</li>
        <li><strong>Newsletter</strong> — scheduled — medium-high — low — long-term relationship</li>
        <li><strong>Promotional campaign</strong> — variable — high — variable — specific sales objective</li>
      </ul>

      <hr />

      <h2>Direct Marketing vs Permission Marketing</h2>
      <p>A major distinction is whether the recipient has an established communication relationship with the business.</p>
      <p><strong>Permission-based:</strong> customer opts in → business communicates → customer controls preferences → long-term relationship.</p>
      <p><strong>Cold outreach:</strong> business identifies prospect → business initiates contact → prospect decides whether to engage → potential relationship.</p>
      <p>These require different approaches. Permission-based marketing generally emphasizes relevance, value, consistency, and retention. Cold outreach emphasizes research, relevance, conciseness, qualification, and respectful follow-up.</p>

      <hr />

      <h2>Direct Marketing Automation System</h2>
      <p>A mature business can connect multiple channels.</p>
      <p>Customer data → CRM/database → behavior, segment, lifecycle → trigger → email, SMS, push → customer action → tracking → analytics → optimization.</p>

      <h3>Example automation</h3>
      <p>Customer purchases → thank-you email → product education → after several days → related-product recommendation → later → customer offer → repeat purchase. This creates a customer communication lifecycle rather than isolated campaigns.</p>

      <hr />

      <h2>Direct Marketing and Customer Lifecycle</h2>
      <p>Prospect (cold email/cold call) → lead (personalized outreach) → new customer (welcome email) → active customer (newsletter/push) → repeat customer (personalized offers) → loyal customer (exclusive campaigns) → inactive customer (win-back campaign) → reactivated customer.</p>
      <p>The channel should change according to the customer's relationship with the business.</p>

      <hr />

      <h2>Direct Marketing Strategy</h2>
      <ol>
        <li><strong>Define the objective.</strong> Examples: increase sales, generate leads, reactivate customers, increase repeat purchases, promote a new product.</li>
        <li><strong>Define the audience.</strong> Determine who should receive the message, why they are relevant, and what stage of the customer lifecycle they are in.</li>
        <li><strong>Select the channel.</strong> Urgent? SMS/Push. Need detailed information? Email/Newsletter. Need conversation? Messenger/Calling. Otherwise email/push.</li>
        <li><strong>Create the offer.</strong> The offer must provide a clear reason to act.</li>
        <li><strong>Personalize.</strong> Use relevant information rather than unnecessary personal data.</li>
        <li><strong>Create the CTA.</strong> Examples: shop now, book now, learn more, claim offer, start trial, schedule a call, reply to this message.</li>
        <li><strong>Track.</strong> Measure sent → delivered → engaged → clicked → converted → revenue.</li>
        <li><strong>Optimize.</strong> Test subject lines, message length, offers, CTAs, timing, segments, landing pages, and frequency.</li>
      </ol>

      <hr />

      <h2>A/B Testing Direct Marketing</h2>
      <p>Two versions can be tested. Audience splits into version A and version B, each with its own results.</p>
      <p>Example: A "20% Off This Weekend" versus B "Save ₱500 This Weekend." Measure click rate, conversion rate, revenue, and unsubscribe rate. The winning version should be determined using a predefined metric and an appropriate test design rather than simply choosing whichever version received a few more clicks.</p>

      <hr />

      <h2>Direct Marketing Economics</h2>
      <p>Suppose a campaign costs ₱5,000 (email/SMS/creative cost) and generates ₱40,000 in sales at 30% gross margin.</p>
      <p>Gross profit: ₱40,000 × 30% = ₱12,000.</p>
      <p>Estimated gross-profit contribution after campaign cost: ₱12,000 − ₱5,000 = ₱7,000.</p>
      <p>This demonstrates why revenue alone is not enough. A campaign generating ₱40,000 revenue can have a very different economic result depending on gross margin, discounts, fulfillment cost, advertising cost, messaging cost, refunds, and customer lifetime value.</p>

      <hr />

      <h2>Direct Marketing Dashboard</h2>
      <ul>
        <li>Audience size — measures reachable audience</li>
        <li>Delivery rate — measures successful delivery</li>
        <li>Engagement rate — measures response</li>
        <li>CTR — measures traffic generation</li>
        <li>Conversion rate — measures action</li>
        <li>Revenue — measures sales</li>
        <li>Revenue per recipient — measures campaign productivity</li>
        <li>CAC — measures acquisition efficiency</li>
        <li>Unsubscribe rate — measures audience fatigue</li>
        <li>Opt-out rate — measures channel acceptance</li>
        <li>Repeat purchase rate — measures retention impact</li>
        <li>ROMI — measures financial return</li>
      </ul>

      <hr />

      <h2>Common Direct Marketing Mistakes</h2>
      <p><strong>1. Sending to everyone.</strong> A single message rarely fits every customer.</p>
      <p><strong>2. Excessive frequency.</strong> More messages do not automatically create more sales.</p>
      <p><strong>3. Weak offers.</strong> A beautifully written message cannot compensate for an irrelevant offer.</p>
      <p><strong>4. Poor segmentation.</strong> Customers have different needs, behaviors, and purchase stages.</p>
      <p><strong>5. No clear CTA.</strong> The customer should understand what to do next.</p>
      <p><strong>6. Over-personalization.</strong> Using too much personal information can feel invasive.</p>
      <p><strong>7. Ignoring unsubscribes.</strong> Opt-outs are valuable feedback about communication relevance and frequency.</p>
      <p><strong>8. Measuring only opens or clicks.</strong> Engagement does not necessarily equal revenue or profit.</p>
      <p><strong>9. No attribution.</strong> Campaigns should use appropriate tracking so results can be connected to their source.</p>
      <p><strong>10. Treating every channel the same.</strong> An SMS should not simply be a 500-word email compressed into a text message.</p>

      <hr />

      <h2>Complete Direct Marketing System</h2>
      <pre>{`BUSINESS OBJECTIVE
                           ↓
                    TARGET AUDIENCE
                           ↓
                    CUSTOMER DATA
                           ↓
                      SEGMENTATION
                           ↓
                  CHANNEL SELECTION
                           ↓
                 OFFER + PERSONALIZATION
                           ↓
                      MESSAGE
                           ↓
                         CTA
                           ↓
                 CUSTOMER EXPERIENCE
                           ↓
                       CONVERSION
                           ↓
                    REVENUE / VALUE
                           ↓
                      RETENTION
                           ↓
                      MEASUREMENT
                           ↓
                       ANALYSIS
                           ↓
                      OPTIMIZATION
                           ↓
                    NEXT CAMPAIGN`}</pre>

      <hr />

      <h2>Direct Marketing Flywheel</h2>
      <pre>{`┌───────────────────────┐
        │  Understand Customers │
        └───────────┬───────────┘
                    ↓
        ┌───────────────────────┐
        │     Segment Audience  │
        └───────────┬───────────┘
                    ↓
        ┌───────────────────────┐
        │ Create Relevant Offer │
        └───────────┬───────────┘
                    ↓
        ┌───────────────────────┐
        │ Communicate Directly  │
        └───────────┬───────────┘
                    ↓
        ┌───────────────────────┐
        │     Drive Action      │
        └───────────┬───────────┘
                    ↓
        ┌───────────────────────┐
        │       Measure         │
        └───────────┬───────────┘
                    ↓
        ┌───────────────────────┐
        │       Optimize        │
        └───────────┬───────────┘
                    │
                    └──────────────→ Understand Customers`}</pre>

      <hr />

      <h2>How the Ten Direct-Marketing Techniques Connect</h2>
      <ul>
        <li><strong>Email marketing</strong> — direct communication and conversion</li>
        <li><strong>SMS marketing</strong> — fast, time-sensitive communication</li>
        <li><strong>Messenger marketing</strong> — conversation and relationship</li>
        <li><strong>Push notifications</strong> — immediate digital engagement</li>
        <li><strong>Direct mail</strong> — physical targeted communication</li>
        <li><strong>Cold email</strong> — prospect acquisition</li>
        <li><strong>Cold calling</strong> — prospect qualification and sales</li>
        <li><strong>Personalized outreach</strong> — high-relevance communication</li>
        <li><strong>Newsletter marketing</strong> — long-term audience relationship</li>
        <li><strong>Promotional campaigns</strong> — coordinated short-term action</li>
      </ul>

      <p>Together: <strong>acquire</strong> (cold email, cold calling, direct mail) → <strong>engage</strong> (personalized outreach, messenger) → <strong>convert</strong> (email, SMS, promotional campaigns) → <strong>retain</strong> (newsletter, push, email) → <strong>reactivate</strong> (personalized outreach, SMS, email) → <strong>grow customer value</strong> (repeat purchases, upselling, cross-selling, referrals).</p>

      <hr />

      <h2>Direct Marketing Core Principles</h2>
      <ol>
        <li>Relevance beats volume.</li>
        <li>Permission and compliance matter.</li>
        <li>Segment before communicating.</li>
        <li>Personalize for usefulness, not intrusion.</li>
        <li>Every campaign should have a clear objective.</li>
        <li>Every message should have a clear next action when action is intended.</li>
        <li>Match the channel to the customer's situation.</li>
        <li>Respect frequency and customer preferences.</li>
        <li>Measure business outcomes, not vanity metrics alone.</li>
        <li>Track revenue and profitability, not just engagement.</li>
        <li>Use automation for consistency, but preserve human interaction where judgment is needed.</li>
        <li>Test systematically rather than relying on assumptions.</li>
        <li>Use customer behavior to improve future communication.</li>
        <li>Treat every campaign as part of the customer lifecycle.</li>
        <li>The goal is not simply to send more messages; it is to create more relevant interactions that produce sustainable customer value.</li>
      </ol>
    </LessonLayout>
  )
}
