import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="04 — Where I've worked" title="Experience">
      <div className="relative border-l border-white/10 pl-8">
        {experience.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative pb-10"
          >
            <span className="absolute -left-[41px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-base">
              <span className="h-3 w-3 rounded-full bg-gradient-to-r from-accent to-accent2" />
            </span>

            <div className="rounded-2xl glass p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-white">{e.role}</h3>
                <span className="font-mono text-sm text-accent">{e.period}</span>
              </div>
              <div className="mb-4 text-slate-400">{e.company}</div>
              <ul className="space-y-2.5">
                {e.points.map((pt, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
