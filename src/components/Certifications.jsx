import { useState } from 'react'
import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section'
import { certifications } from '../data'
import { ExternalIcon } from './icons'

export default function Certifications() {
  const [broken, setBroken] = useState({})
  if (certifications.length === 0) return null

  return (
    <Section id="certifications" eyebrow="07 — Verified" title="Certifications">
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="overflow-hidden rounded-2xl glass"
          >
            {!broken[i] && (
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-black/20">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <h3 className="font-semibold text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
              </div>
              {c.verifyUrl && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-sm transition-colors hover:bg-white/10"
                >
                  Verify <ExternalIcon width={14} height={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
