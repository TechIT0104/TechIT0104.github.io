import { motion } from 'framer-motion'

// Reusable section wrapper with a scroll-reveal heading.
export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section-pad scroll-mt-20">
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          {eyebrow && (
            <div className="mb-3 font-mono text-sm tracking-widest text-accent">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">{title}</h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  )
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}
