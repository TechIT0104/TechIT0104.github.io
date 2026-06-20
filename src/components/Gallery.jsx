import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'
import { gallery } from '../data'

export default function Gallery() {
  const [active, setActive] = useState(null)
  const [broken, setBroken] = useState({})

  // Hide images that fail to load; if all fail, hide the whole section.
  const visible = gallery.filter((_, i) => !broken[i])
  if (gallery.length === 0) return null

  return (
    <Section id="gallery" eyebrow="07 — Beyond code" title="Leadership & moments">
      {/* Uniform grid: 2 cols on mobile, 4 on desktop — tiles share one aspect
          ratio so the wall stays even regardless of each photo's dimensions. */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {gallery.map((g, i) =>
          broken[i] ? null : (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => setActive(g)}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-300 hover:ring-accent/40"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                className="h-full w-full object-cover object-center brightness-[0.82] saturate-[0.9] transition-all duration-500 group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100"
              />
              {/* Dark gradient blends the photo edges into the page and seats the caption. */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-left text-xs font-medium leading-snug text-slate-100 drop-shadow sm:text-sm">
                {g.caption}
              </span>
            </motion.button>
          ),
        )}
      </div>

      {visible.length === 0 && (
        <p className="text-sm text-slate-500">
          Add photos to <code className="text-accent">public/images/gallery/</code> to populate this section.
        </p>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-6 backdrop-blur"
          >
            <motion.figure
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <img src={active.src} alt={active.caption} className="max-h-[80vh] w-auto" />
              <figcaption className="bg-panel p-4 text-center text-sm text-slate-300">
                {active.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
