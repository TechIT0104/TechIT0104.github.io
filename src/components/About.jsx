import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section'
import { about, education } from '../data'
import { MapPinIcon } from './icons'

export default function About() {
  return (
    <Section id="about" eyebrow="01 — Who I am" title="About me">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5">
          {about.map((p, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="text-lg leading-relaxed text-slate-400"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-mono text-sm tracking-widest text-accent">EDUCATION</h3>
          {education.map((e, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="rounded-2xl glass p-5"
            >
              <div className="font-semibold text-white">{e.school}</div>
              <div className="mt-1 text-sm text-slate-400">{e.degree}</div>
              <div className="mt-1 text-sm font-medium text-accent">{e.detail}</div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>{e.period}</span>
                <span className="inline-flex items-center gap-1">
                  <MapPinIcon width={14} height={14} /> {e.place}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
