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
      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {gallery.map((g, i) =>
          broken[i] ? null : (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onClick={() => setActive(g)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                className="w-full transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
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
              className="max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl"
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
