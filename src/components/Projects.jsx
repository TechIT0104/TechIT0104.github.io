import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Section from './Section'
import { projects } from '../data'
import { GitHubIcon, ExternalIcon } from './icons'

const accentMap = {
  cyan: { glow: 'rgba(34,211,238,0.30)', text: 'text-accent', border: 'hover:border-accent/50' },
  violet: { glow: 'rgba(168,85,247,0.30)', text: 'text-accent2', border: 'hover:border-accent2/50' },
  green: { glow: 'rgba(52,211,153,0.30)', text: 'text-accent3', border: 'hover:border-accent3/50' },
}

function ProjectCard({ p, i }) {
  const ref = useRef(null)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 })
  const a = accentMap[p.accent] || accentMap.cyan

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
    setHover(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`relative h-full overflow-hidden rounded-3xl glass p-7 transition-colors ${a.border}`}
      >
        {/* hover glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500"
          style={{ opacity: hover ? 1 : 0, background: `radial-gradient(400px circle at 50% 0%, ${a.glow}, transparent 70%)` }}
        />

        <div style={{ transform: 'translateZ(40px)' }} className="relative">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{p.title}</h3>
              <p className={`mt-1 text-sm font-medium ${a.text}`}>{p.subtitle}</p>
            </div>
            <div className="flex gap-2">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 transition-colors hover:text-white"
                  aria-label="GitHub repo"
                >
                  <GitHubIcon width={18} height={18} />
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 transition-colors hover:text-white"
                  aria-label="Live demo"
                >
                  <ExternalIcon width={18} height={18} />
                </a>
              )}
            </div>
          </div>

          <ul className="space-y-2.5">
            {p.points.map((pt, j) => (
              <li key={j} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current ${a.text}`} />
                {pt}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" eyebrow="03 — Things I've built" title="Featured projects">
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      {more.length > 0 && (
        <>
          <h3 className="mb-6 mt-16 font-mono text-sm tracking-widest text-accent">
            MORE PROJECTS
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {more.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </>
      )}
    </Section>
  )
}
