import LessonLayout from '../components/LessonLayout'

export default function SearchMarketing() {
  return (
    <LessonLayout
      number="24"
      title="Search Marketing"
      summary="11 strategies to attract people actively searching — SEO, local search, technical optimization, and paid ads."
    >
      <h2>Search Marketing</h2>
      <h3>Definition</h3>
      <p>
        Search marketing is the practice of attracting people who are actively
        using search engines to find information, products, services,
        businesses, or solutions.
      </p>
      <p>It has two major branches:</p>
      <pre>{`SEARCH MARKETING
                           │
             ┌─────────────┴─────────────┐
             ↓                           ↓
        ORGANIC SEARCH                PAID SEARCH
             ↓                           ↓
            SEO                    SEARCH ADS
             ↓                           ↓
     Earned visibility             Paid visibility`}</pre>

      <h3>Organic search</h3>
      <p>Organic search traffic comes from unpaid search results. The primary discipline is SEO — Search Engine Optimization.</p>

      <h3>Paid search</h3>
      <p>Paid search advertising places advertisements in search-engine results through advertising platforms.</p>

      <h3>Search marketing funnel</h3>
      <p>Search query → search result → click → landing page → engagement → lead/purchase → customer.</p>

      <h3>Why search marketing is different</h3>
      <p>Search users often have an existing need. For example, "best laptop under ₱30,000" shows a different level of intent from someone simply scrolling through a social-media feed. Search marketing therefore attempts to connect: what people are searching for → what the business provides → the most useful destination.</p>

      <hr />

      <h2>1. SEO</h2>
      <h3>Definition</h3>
      <p>SEO (Search Engine Optimization) is the process of improving a website and its content so that search engines can understand it and users can discover useful pages through organic search results.</p>
      <p>SEO involves much more than inserting keywords. It includes content quality, search intent, site structure, technical performance, internal linking, mobile usability, accessibility, structured information, reputation and links, and local information where relevant.</p>

      <h3>Basic SEO system</h3>
      <p>User need → search query → search engine → relevant content → quality website → organic visibility → click → conversion.</p>

      <h3>SEO goals</h3>
      <p>A business may use SEO to increase organic traffic, qualified visitors, product discovery, leads, sales, brand visibility, local visits, and long-term discoverability.</p>

      <h3>SEO is not just rankings</h3>
      <p>A page ranking highly for an irrelevant keyword may produce little business value. A stronger objective is: reach the right person with the right information at the right stage of their search.</p>

      <h3>Major SEO areas</h3>
      <p>Technical SEO, on-page SEO, off-page SEO, keyword targeting, search intent, content architecture, and local SEO.</p>

      <hr />

      <h2>2. Local SEO</h2>
      <h3>Definition</h3>
      <p>Local SEO is SEO focused on helping a business become discoverable for searches connected to a specific geographic area.</p>
      <p>Examples: "web developer near me," "coffee shop in Makati," "computer repair Dasmariñas," "dentist near me." Local SEO is especially relevant to businesses that serve customers in specific locations.</p>

      <h3>Local search system</h3>
      <p>Local query → search engine → local results → business profile/website → call/directions/website → customer.</p>

      <h3>Local SEO components</h3>
      <p>Important components can include accurate business name, address, phone number, business category, opening hours, website, service descriptions, reviews, local website content, relevant local references, and consistent business information.</p>

      <h3>Example</h3>
      <p>Suppose a web-development business serves customers in a particular city. Instead of only creating "Professional Web Development Services," it could also create useful location-specific information such as "Website Development Services for Small Businesses in [City]" — provided the business genuinely serves that location.</p>

      <h3>Benefits</h3>
      <p>Local SEO can help businesses generate nearby customers, increase calls, increase direction requests, increase website visits, improve local visibility, and capture location-specific searches.</p>

      <h3>Risk</h3>
      <p>Creating hundreds of nearly identical location pages purely to manipulate search visibility can create low-value content. Local pages should provide genuine local relevance.</p>

      <hr />

      <h2>3. Technical SEO</h2>
      <h3>Definition</h3>
      <p>Technical SEO focuses on the technical aspects of a website that affect how search engines can discover, crawl, understand, and index its content, as well as how users experience the site. Technical SEO is largely about making the website's underlying structure sound.</p>

      <h3>Major areas</h3>
      <p>Crawlability, indexability, site architecture, URLs, mobile usability, page performance, HTTPS, redirects, XML sitemap, robots.txt, canonicalization, structured data, and error management.</p>

      <h3>Crawlability</h3>
      <p>Search engines need to be able to discover pages. Potential problems include broken links, incorrect robots directives, poor navigation, orphan pages, and excessive URL complexity.</p>

      <h3>Indexability</h3>
      <p>A page can be crawled without necessarily being included in a search engine's index. Businesses should ensure important pages are accessible, not accidentally blocked, properly canonicalized, and technically understandable.</p>

      <h3>Site architecture</h3>
      <p>A logical structure helps users and search engines understand relationships among pages. Example: home → products (phones, laptops, accessories), guides (buying guides, tutorials, reviews), about.</p>

      <h3>Page performance</h3>
      <p>Important considerations include loading performance, image optimization, JavaScript efficiency, CSS efficiency, server response, and mobile experience.</p>

      <h3>Technical SEO principle</h3>
      <p>A technically excellent website cannot compensate indefinitely for irrelevant or poor content. Technical SEO and content quality work together.</p>

      <hr />

      <h2>4. On-Page SEO</h2>
      <h3>Definition</h3>
      <p>On-page SEO is the optimization of elements directly controlled on a webpage to make the page clearer and more useful for users and search engines.</p>

      <h3>Important elements</h3>
      <p>Page title, main heading, subheadings, body content, internal links, images, image alternative text where appropriate, URLs, metadata, structured content, and content organization.</p>

      <h3>Example</h3>
      <p>Suppose a page targets "how to choose a budget laptop." A useful page might have: title "How to Choose a Budget Laptop: Complete Buying Guide"; H1 "How to Choose a Budget Laptop"; sections for processor, RAM, storage, display, battery, build quality, operating system, price, and common mistakes.</p>

      <h3>On-page optimization process</h3>
      <p>Target topic → search intent → content outline → write useful content → structure headings → add internal links → optimize media → review → publish.</p>

      <h3>Keyword placement</h3>
      <p>Keywords can naturally appear in the title, heading, introduction, relevant sections, URL, and image descriptions where appropriate. But keyword stuffing is poor practice. The goal is not "budget laptop budget laptop cheap budget laptop…" The goal is to clearly explain the topic.</p>

      <hr />

      <h2>5. Off-Page SEO</h2>
      <h3>Definition</h3>
      <p>Off-page SEO involves activities outside the website that can influence its visibility, reputation, authority, or discovery. A major component is earning relevant links from other websites.</p>

      <h3>Off-page SEO system</h3>
      <p>Valuable website → useful content → people discover it → references/links/mentions → greater discovery → stronger reputation.</p>

      <h3>Examples</h3>
      <p>Earning backlinks, digital PR, industry publications, business directories where appropriate, partnerships, research reports, guest contributions, community participation, and brand mentions.</p>

      <h3>Backlinks</h3>
      <p>A backlink is a link from another website to your website. Relevant, editorially earned links can help search engines understand that other sites find a page useful or noteworthy.</p>

      <h3>Good link acquisition</h3>
      <p>Create something worth referencing: original research, useful tools, industry statistics, comprehensive guides, unique resources, and strong case studies.</p>

      <h3>Risky practices</h3>
      <p>Avoid manipulating links through spam, automated link schemes, irrelevant mass directories, purchased links intended to manipulate rankings, and networks created primarily to manufacture authority.</p>

      <h3>Off-page SEO vs on-page SEO</h3>
      <p><strong>On-page</strong> — happens on your website; content; headings; internal links; page structure; metadata.</p>
      <p><strong>Off-page</strong> — happens outside your website; reputation; backlinks; external references; digital PR; brand mentions.</p>

      <hr />

      <h2>6. Keyword Targeting</h2>
      <h3>Definition</h3>
      <p>Keyword targeting is the process of identifying search terms relevant to an audience and creating or optimizing pages to satisfy the intent behind those searches. A keyword can be a word, a phrase, a question, or a longer search query.</p>

      <h3>Example</h3>
      <p>For a web-development business: broad "website" → specific "business website" → more specific "business website development" → long-tail "how much does a business website cost."</p>

      <h3>Search volume vs relevance</h3>
      <p>A keyword with enormous search volume isn't automatically valuable. Consider: Keyword A with 100,000 searches and low relevance; Keyword B with 2,000 searches and high relevance. Keyword B may be more commercially useful because the audience closely matches the business.</p>

      <h3>Keyword evaluation</h3>
      <p>Consider: relevance, search intent, search demand, competition, business value, content quality required, and conversion potential.</p>

      <h3>Keyword categories</h3>
      <p><strong>Informational</strong> — "What is cloud computing?"</p>
      <p><strong>Navigational</strong> — "Xmarket"</p>
      <p><strong>Commercial investigation</strong> — "best ecommerce platform"</p>
      <p><strong>Transactional</strong> — "buy wireless keyboard"</p>

      <h3>Keyword map</h3>
      <p>Business branches into product (Product A, Product B), problem (Problem A, Problem B), and information (Guide A, Guide B). Each important topic can have a logical page rather than forcing many keywords onto one page.</p>

      <hr />

      <h2>7. Content Clusters</h2>
      <h3>Definition</h3>
      <p>A content cluster is a group of closely related content organized around a central pillar topic. It creates a structured topical ecosystem.</p>

      <h3>Structure</h3>
      <p>A pillar page like "E-Commerce Guide" branches into SEO for ecommerce, payment systems, and product pages, which further branch into checkout optimization, shipping options, and product images. The pages should link logically to one another.</p>

      <h3>Example for web development</h3>
      <p>Pillar: complete guide to business websites. Supporting content: website planning, UI/UX design, website hosting, domain names, SEO, website security, analytics, website maintenance, and conversion optimization.</p>

      <h3>Benefits</h3>
      <p>Content clusters can organize information, improve internal linking, help users explore related topics, establish topical depth, and create many search entry points.</p>

      <h3>Implementation</h3>
      <ol>
        <li>Choose a broad pillar topic.</li>
        <li>Identify related subtopics.</li>
        <li>Research the audience's questions.</li>
        <li>Create high-quality supporting pages.</li>
        <li>Link related pages together.</li>
        <li>Keep information accurate and updated.</li>
        <li>Monitor performance.</li>
        <li>Expand the cluster based on new questions.</li>
      </ol>

      <h3>Content cluster vs keyword stuffing</h3>
      <p><strong>Keyword stuffing:</strong> one page with 100 keywords. <strong>Content cluster:</strong> one core topic with related subtopics, useful pages, and internal links. The second approach is designed around user needs rather than simply increasing keyword count.</p>

      <hr />

      <h2>8. Search-Intent Optimization</h2>
      <h3>Definition</h3>
      <p>Search-intent optimization means creating content that matches what the user is actually trying to accomplish when they perform a search. This is one of the most important principles in search marketing.</p>

      <h3>Four common intent categories</h3>
      <p><strong>Informational intent</strong> — the user wants knowledge. Example: "What is SEO?" Best content: educational article, guide, explainer, tutorial.</p>
      <p><strong>Navigational intent</strong> — the user wants a particular website or destination. Example: "YouTube." Best result: official website.</p>
      <p><strong>Commercial investigation</strong> — the user is evaluating options. Example: "best accounting software for small business." Useful content: comparison, review, buying guide, case study.</p>
      <p><strong>Transactional intent</strong> — the user is ready to take an action. Example: "buy mechanical keyboard." Useful destination: product page, category page, purchase page.</p>

      <h3>Intent matching</h3>
      <p>Query → identify intent → select content type → create relevant page → clear next action.</p>

      <h3>Example</h3>
      <p>Query: "how to create an online store." A product page saying "Buy our ecommerce software" may not satisfy the user's immediate intent. A better result could be "Complete Guide to Creating an Online Store." Then the business can naturally introduce relevant tools or services.</p>

      <hr />

      <h2>9. Google Business Profile Optimization</h2>
      <h3>Definition</h3>
      <p>A Google Business Profile is a business listing that can appear in Google's local search and Maps experiences. Optimization means keeping the profile accurate, complete, useful, and actively maintained.</p>

      <h3>Important information</h3>
      <p>Depending on the business and available profile features: business name, category, address/service area, phone, website, opening hours, photos, services, products, business description, reviews, and updates.</p>

      <h3>Basic optimization system</h3>
      <p>Accurate information → complete profile → relevant categories → quality photos → customer reviews → regular updates → local discovery → call/website/directions.</p>

      <h3>Reviews</h3>
      <p>Reviews can influence customer confidence. A legitimate review process can involve delivering a good customer experience, asking customers for honest feedback, providing a convenient review method, responding professionally, and learning from recurring complaints. Do not fabricate reviews or manipulate customers into misleading ratings.</p>

      <h3>Responding to reviews</h3>
      <p><strong>Positive review:</strong> thank the customer and acknowledge the specific experience.</p>
      <p><strong>Negative review:</strong> acknowledge the concern, avoid arguing publicly, clarify relevant facts, offer an appropriate resolution path, and investigate internally.</p>

      <h3>Profile metrics</h3>
      <p>Useful measurements can include search visibility, calls, website visits, direction requests, messages, customer actions, review volume, and review themes.</p>

      <h3>Important principle</h3>
      <p>A business profile should accurately represent the real business. Do not create fake locations merely to capture local searches.</p>

      <hr />

      <h2>10. Search-Engine Advertising</h2>
      <h3>Definition</h3>
      <p>Search-engine advertising is paid advertising that displays advertisements to people based on search queries or related targeting signals. A common model is pay-per-click (PPC), where advertisers can be charged when someone clicks an ad, depending on the campaign and platform.</p>

      <h3>Basic paid search system</h3>
      <p>Search query → ad auction → advertisement → click → landing page → conversion → customer.</p>

      <h3>Example</h3>
      <p>Someone searches "website developer for small business." A web-development company may run a relevant search advertisement. The ad could lead to "Small Business Website Development" rather than simply sending everyone to the homepage.</p>

      <h3>Important components</h3>
      <p><strong>Keyword/targeting strategy</strong> — determine which searches are relevant.</p>
      <p><strong>Ad copy</strong> — the advertisement should clearly communicate what is offered, who it is for, relevant benefit, and appropriate call to action.</p>
      <p><strong>Landing page</strong> — the landing page should match the advertisement. AD "Business Website Development" → LANDING PAGE "Business Website Development" → CTA "Request a Quote." This creates message consistency.</p>

      <h3>Paid search metrics</h3>
      <p><strong>Impressions</strong> — number of times the ad was shown.</p>
      <p><strong>Clicks</strong> — number of clicks.</p>
      <p><strong>CTR = Clicks ÷ Impressions × 100</strong></p>
      <p><strong>CPC = Ad Spend ÷ Clicks</strong></p>
      <p>Example: ₱5,000 spent and 500 clicks: CPC = ₱5,000 ÷ 500 = ₱10.</p>
      <p><strong>Conversion Rate = Conversions ÷ Clicks × 100</strong></p>
      <p><strong>CPA = Ad Spend ÷ Conversions</strong></p>
      <p>Example: ₱5,000 spent and 25 customers: CPA = ₱5,000 ÷ 25 = ₱200.</p>
      <p><strong>ROAS = Revenue Attributed to Ads ÷ Ad Spend</strong></p>
      <p>If ₱20,000 in attributed revenue comes from ₱5,000 advertising spend: ROAS = ₱20,000 ÷ ₱5,000 = 4. This means ₱4 of attributed revenue per ₱1 of ad spend. It does not mean ₱4 of profit.</p>

      <hr />

      <h2>Organic Search vs Paid Search</h2>
      <p><strong>Organic SEO:</strong> unpaid search visibility; can take time to develop; content and website focused; traffic does not incur a direct per-click ad charge; can compound through useful content; requires ongoing optimization.</p>
      <p><strong>Search advertising:</strong> paid placement; can generate traffic quickly after launch; advertising and bidding focused; clicks may incur advertising cost; usually requires ongoing budget; requires campaign and budget management.</p>
      <p>They can work together.</p>

      <hr />

      <h2>SEO Architecture</h2>
      <p>Website branches into technical, content, and authority. Technical covers crawlability, indexability, speed, and architecture. Content covers keywords, intent, clusters, and on-page. Authority covers backlinks, mentions, and PR. All feed into search visibility → clicks → conversion.</p>

      <hr />

      <h2>Search Marketing Funnel</h2>
      <p>Search → query/keyword → organic (SEO) or paid (ads) → search result → click → landing page → engagement → lead/sale → customer.</p>

      <hr />

      <h2>Search Marketing Metrics</h2>
      <ul>
        <li>Impressions — search visibility</li>
        <li>Clicks — traffic generated</li>
        <li>CTR — ability to generate clicks</li>
        <li>Organic traffic — SEO traffic</li>
        <li>Paid traffic — advertising traffic</li>
        <li>Rankings — search-result position</li>
        <li>Conversions — desired actions</li>
        <li>Conversion rate — traffic quality/action rate</li>
        <li>CPC — paid traffic cost</li>
        <li>CPA — cost per acquisition</li>
        <li>ROAS — revenue relative to ad spend</li>
        <li>Revenue — commercial outcome</li>
        <li>Leads — demand generated</li>
      </ul>

      <hr />

      <h2>SEO vs Search Intent</h2>
      <p>SEO should begin with the user's need, not simply with a keyword list.</p>
      <p>Keyword → what does the user want? → search intent → best content format → best page → useful experience.</p>
      <p>Example: query "best laptop for programming." Likely intent: commercial investigation. Potentially useful page: "Best Laptops for Programming: Features, Comparisons, and Buying Guide." Not simply "Buy Laptop X Now!" The content should satisfy the research stage first.</p>

      <hr />

      <h2>Content Clusters + Search Intent</h2>
      <p>These concepts work particularly well together. A pillar page like "Online Business" branches into informational ("What is..."), commercial ("Best..."), and transactional ("Buy..."), each with its own article, comparison, or product page, linked internally to form a complete topic. This gives users different entry points depending on what they are trying to accomplish.</p>

      <hr />

      <h2>Local SEO + Google Business Profile</h2>
      <p>These concepts are closely connected. Local search → local SEO → website + business profile → local discovery → call/website/directions → customer.</p>
      <p>Local SEO is broader than the business profile alone. It can include website optimization, location relevance, reviews, business information, local references, local content, and business-profile management.</p>

      <hr />

      <h2>Search Marketing Strategy</h2>
      <ol>
        <li>Define audience.</li>
        <li>Identify customer problems.</li>
        <li>Research search queries.</li>
        <li>Classify search intent.</li>
        <li>Build keyword map.</li>
        <li>Create content clusters.</li>
        <li>Optimize website.</li>
        <li>Build relevant authority.</li>
        <li>Optimize local presence.</li>
        <li>Run paid search when appropriate.</li>
        <li>Measure.</li>
        <li>Improve.</li>
      </ol>

      <hr />

      <h2>Search Marketing Example: Xmarket</h2>
      <p>Suppose Xmarket wants to attract customers searching for affordable electronics.</p>
      <p><strong>Keyword groups:</strong> informational ("What should I check before buying a phone?"), commercial ("best budget phone"), transactional ("buy budget phone"), brand ("Xmarket phones").</p>
      <p><strong>Content architecture:</strong> pillar "Complete Guide to Buying Electronics Online." Supporting pages: how to choose a smartphone, how much RAM do you need, phone comparison guide, budget smartphone buying guide, electronics safety checklist, product reviews, frequently asked questions.</p>
      <p><strong>Search funnel:</strong> Google search → educational article → buying guide → product comparison → product page → checkout → purchase.</p>
      <p><strong>Paid search:</strong> Xmarket could separately test ads for high-commercial-intent searches. High-intent query → search ad → relevant product category → product page → purchase. The organic and paid systems can support each other without being identical.</p>

      <hr />

      <h2>Common Search Marketing Mistakes</h2>
      <p><strong>1. Targeting keywords without understanding intent.</strong> A keyword may have traffic but attract the wrong audience.</p>
      <p><strong>2. Keyword stuffing.</strong> Repeating keywords unnaturally reduces content quality.</p>
      <p><strong>3. Creating thin content.</strong> Pages should provide meaningful value rather than existing solely to target a keyword.</p>
      <p><strong>4. Ignoring technical problems.</strong> Great content can be undermined by poor site architecture, broken pages, or indexing problems.</p>
      <p><strong>5. Buying manipulative backlinks.</strong> Artificial link schemes can create search and reputation risks.</p>
      <p><strong>6. Ignoring search experience.</strong> Ranking is not the end goal. Users need a useful destination after clicking.</p>
      <p><strong>7. Sending every ad to the homepage.</strong> A dedicated landing page can better match the user's query and campaign.</p>
      <p><strong>8. Measuring only rankings.</strong> Track traffic, qualified visitors, leads, sales, revenue, and conversion rate.</p>
      <p><strong>9. Treating all keywords equally.</strong> Informational, commercial, navigational, and transactional searches serve different purposes.</p>
      <p><strong>10. Ignoring local customers.</strong> Businesses serving physical locations should consider local search behavior.</p>
      <p><strong>11. Creating fake local listings.</strong> Local information should represent genuine business locations and service areas.</p>
      <p><strong>12. Ignoring existing content.</strong> Old pages can sometimes be improved, consolidated, or updated instead of continually producing new pages.</p>

      <hr />

      <h2>Complete Search Marketing System</h2>
      <pre>{`SEARCH MARKETING
                                │
          ┌─────────────────────┼─────────────────────┐
          ↓                     ↓                     ↓
        SEO                 LOCAL SEO             PAID SEARCH
          │                     │                     │
   ┌──────┼──────┐              │              ┌──────┴──────┐
   ↓      ↓      ↓              ↓              ↓             ↓
Technical On-page Off-page   Business       Keywords      Ads
SEO       SEO      SEO       Profile        Bidding       Landing
   │       │        │           │              │           Pages
   └───────┼────────┘           │              └─────┬─────┘
           ↓                    ↓                    ↓
       WEBSITE             LOCAL PRESENCE       AD TRAFFIC
           │                    │                    │
           └────────────────────┼────────────────────┘
                                ↓
                          SEARCH VISIBILITY
                                ↓
                              CLICKS
                                ↓
                         LANDING EXPERIENCE
                                ↓
                         LEADS / PURCHASES
                                ↓
                            CUSTOMERS
                                ↓
                           MEASUREMENT
                                ↓
                           OPTIMIZATION
                                ↓
                         BETTER SEARCH`}</pre>

      <hr />

      <h2>Search Marketing Flywheel</h2>
      <pre>{`CUSTOMER QUESTIONS
       ↓
KEYWORD RESEARCH
       ↓
SEARCH INTENT
       ↓
CONTENT CREATION
       ↓
TECHNICAL OPTIMIZATION
       ↓
SEARCH VISIBILITY
       ↓
TRAFFIC
       ↓
CONVERSIONS
       ↓
CUSTOMER DATA
       ↓
NEW QUESTIONS
       ↓
BETTER CONTENT
       ↓
SEARCH VISIBILITY`}</pre>

      <hr />

      <h2>Core Principles of Search Marketing</h2>
      <ol>
        <li>Optimize for people and their needs, not just search engines.</li>
        <li>Understand search intent before creating a page.</li>
        <li>Relevance is more important than chasing the largest possible search volume.</li>
        <li>Technical SEO makes content accessible; useful content gives people a reason to visit.</li>
        <li>On-page SEO improves the page itself; off-page SEO helps build external authority and discovery.</li>
        <li>Content clusters organize related information into a useful knowledge structure.</li>
        <li>Local SEO is essential when customers search for businesses based on location.</li>
        <li>Keep business-profile information accurate and current.</li>
        <li>Paid search can provide immediate visibility, while SEO can build longer-term organic assets.</li>
        <li>A high ranking or large number of clicks does not automatically mean business success.</li>
        <li>Measure the entire path from search → click → engagement → lead/sale → revenue.</li>
        <li>Create content that genuinely answers questions rather than manufacturing pages solely for keywords.</li>
        <li>Improve existing pages when that is more valuable than continuously creating new ones.</li>
        <li>Build authority through useful resources, legitimate relationships, and earned references rather than manipulation.</li>
        <li>Search marketing is ultimately a connection system: customer need → search → relevant answer → useful experience → business relationship.</li>
      </ol>
    </LessonLayout>
  )
}
