import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button onClick={() => go('hero')} className="font-mono text-lg font-bold">
          <span className="gradient-text">DS</span>
          <span className="text-slate-500">.dev</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-2 text-sm font-semibold text-base transition-transform hover:scale-105"
          >
            Let's talk
          </button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg glass md:hidden"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="mt-3 flex flex-col gap-1 px-6 pb-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="rounded-lg px-3 py-3 text-left text-slate-300 hover:bg-white/5"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
