import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, socials, stats } from '../data'
import {
  GitHubIcon,
  LinkedInIcon,
  CodeIcon,
  MailIcon,
  DownloadIcon,
  ArrowDownIcon,
} from './icons'

// Typewriter effect that cycles through profile.roles
function useTypewriter(words, speed = 90, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[i % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((p) => p + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          )
        },
        deleting ? speed / 2 : speed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, i, words, speed, pause])

  return text
}

export default function Hero() {
  const role = useTypewriter(profile.roles)
  const [photoOk, setPhotoOk] = useState(Boolean(profile.photo))

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent3 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent3" />
            </span>
            Open to SDE / ML internships & new grad roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I'm <span className="gradient-text">Dhruv</span>
            <br />
            Samdani
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 h-9 font-mono text-xl text-accent sm:text-2xl"
          >
            {'> '}
            {role}
            <span className="animate-pulse">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-accent2 px-7 py-3 font-semibold text-base transition-transform hover:scale-105"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3 font-semibold transition-colors hover:bg-white/10"
            >
              <DownloadIcon width={18} height={18} /> Résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-5 text-slate-400"
          >
            <a href={socials.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={socials.leetcode} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LeetCode">
              <CodeIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-white" aria-label="Email">
              <MailIcon />
            </a>
          </motion.div>
        </div>

        {/* Right: photo or animated monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden md:block"
        >
          <div className="absolute inset-0 animate-pulse-slow rounded-full bg-gradient-to-tr from-accent to-accent2 opacity-30 blur-2xl" />
          <div className="relative grid h-72 w-72 place-items-center overflow-hidden rounded-3xl glass animate-float">
            {photoOk ? (
              <img
                src={profile.photo}
                alt={profile.name}
                onError={() => setPhotoOk(false)}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="bg-gradient-to-br from-accent to-accent2 bg-clip-text font-black text-transparent" style={{ fontSize: '7rem' }}>
                DS
              </span>
            )}
          </div>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute inset-x-0 bottom-8 mx-auto flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-4 px-6"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-black gradient-text">{s.value}</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <a
        href="#about"
        className="absolute bottom-8 right-8 hidden animate-bounce text-slate-500 lg:block"
        aria-label="Scroll down"
      >
        <ArrowDownIcon />
      </a>
    </section>
  )
}
