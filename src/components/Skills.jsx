import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 — My toolkit" title="Skills & technologies">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.group}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl glass p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="mb-4 font-semibold text-white">
              <span className="text-accent">#</span> {s.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span key={it} className="chip transition-colors group-hover:border-white/20">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
