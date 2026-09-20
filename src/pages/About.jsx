import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <article className="about-page">
        <motion.div
          className="about-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>About Xentrepreneur</h1>
          <p className="about-tagline">
            A free, founder-focused knowledge hub for anyone who wants to build
            a business, generate wealth, and think like an owner.
          </p>
        </motion.div>

        <section className="about-block">
          <h2>Our Mission</h2>
          <p>
            Xentrepreneur exists to cut through business-school fluff and give
            entrepreneurs real, actionable strategy. No 60-hour MBA. No
            $5,000 course. Just the frameworks, systems, and playbooks that
            actually move the needle.
          </p>
        </section>

        <section className="about-block">
          <h2>What's Inside</h2>
          <p>
            50 dense lessons covering the complete business lifecycle — from
            sales and customer acquisition to pricing psychology, partnerships,
            operations, and growth. Every lesson is written for founders who
            want depth, not checkboxes.
          </p>
        </section>

        <section className="about-block">
          <h2>The Core Belief</h2>
          <p>
            Wealth is not luck. It is a system. It is built on customer value,
            smart pricing, consistent execution, and the willingness to
            iterate faster than the next person. Everything on this site is
            designed to help you become that person.
          </p>
        </section>

        <section className="about-block">
          <h2>How to Use It</h2>
          <ol className="about-list">
            <li>Enter your 8-digit access ID on the verify page</li>
            <li>Work through the lessons in order — or jump to what you need</li>
            <li>Apply one lesson per week to your own business</li>
            <li>Come back, review, and build on what you learned</li>
          </ol>
        </section>
      </article>
    </PageTransition>
  )
}
