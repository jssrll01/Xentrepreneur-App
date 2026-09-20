import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'

const pillars = [
  { icon: 'lightbulb', title: 'Idea to Income', text: 'Turn a raw idea into a paying business in 30 days — validation, offer, and first sale.' },
  { icon: 'coin', title: 'Money That Works', text: 'Stop trading time for cash. Build assets, systems, and income that pays you while you sleep.' },
  { icon: 'chart', title: 'Scale Without Burnout', text: 'Systems, automation, and leverage — grow revenue without growing your hours.' },
  { icon: 'brain', title: 'Wealth Psychology', text: 'Rewire how you think about risk, money, and opportunity. Rich is not a number — it is a mindset.' },
  { icon: 'rocket', title: 'Launch Fast, Learn Faster', text: 'Ship in days, not months. Real feedback beats perfect plans every single time.' },
  { icon: 'shield', title: 'Build Trust First', text: 'Turn strangers into believers with social proof, transparency, and real results.' },
  { icon: 'users', title: 'Win Through Partnerships', text: 'Reach further with creators, communities, and brands that already trust you.' },
  { icon: 'target', title: 'Decide With Clarity', text: 'Cut through noise. Make decisions with evidence, not emotion.' },
  { icon: 'book', title: 'Learn The Systems', text: 'Every strategy is broken down into steps you can actually execute.' },
  { icon: 'check', title: 'Track Your Progress', text: 'See exactly how far you have come and what to focus on next.' },
  { icon: 'bell', title: 'Never Miss An Update', text: 'New lessons, fresh playbooks, and strategy drops — delivered directly.' },
  { icon: 'info', title: 'Built For Founders', text: 'No fluff, no filler. Just what actually moves your business forward.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <div className="home-wrap">
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Build The Business.
          <br />
          <span className="hero-accent">Own The Wealth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Xentrepreneur is your shortcut from broke dreamer to funded founder —
          real strategy, zero fluff. Learn the systems that build revenue,
          wealth, and freedom on your own terms.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link to="/verify" className="cta">Start Building</Link>
          <Link to="/about" className="cta-ghost">Learn More</Link>
        </motion.div>
      </section>

      <section className="home-pillars">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          What You'll Master
        </motion.h2>

        <div className="grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="card home-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <span className="home-card-icon">
                <Icon name={p.icon} size={28} />
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
