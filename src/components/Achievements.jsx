import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section'
import { achievements } from '../data'

// Subtle accent rotation per card — keeps the grid from feeling flat
// without resorting to icons/emojis.
const accents = ['text-accent', 'text-accent2', 'text-accent3']

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="05 — Highlights" title="Achievements">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const accent = accents[i % accents.length]
          return (
            <motion.div
              key={a.group}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6 }}
              className="flex h-full flex-col rounded-2xl glass p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className={`font-mono text-sm tracking-widest ${accent}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mb-4 text-lg font-semibold text-white">{a.group}</h3>
              <ul className="space-y-2.5">
                {a.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                  >
                    <span
                      className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-current ${accent}`}
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
