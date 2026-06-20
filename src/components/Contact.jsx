import { motion } from 'framer-motion'
import Section from './Section'
import { profile, socials } from '../data'
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GitHubIcon,
  LinkedInIcon,
  CodeIcon,
} from './icons'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="08 — Say hello" title="Let's build something">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl glass p-10 text-center md:p-16"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-accent/10 via-transparent to-accent2/10" />

        <h3 className="mx-auto max-w-2xl text-2xl font-bold leading-snug text-white md:text-3xl">
          I'm currently open to six-month internships and full-time software / ML roles. Got an idea or a
          role in mind?
        </h3>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-8 py-4 text-lg font-semibold text-base transition-transform hover:scale-105"
        >
          <MailIcon /> {profile.email}
        </a>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-slate-400 sm:flex-row sm:gap-8">
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-white">
            <PhoneIcon width={16} height={16} /> {profile.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPinIcon width={16} height={16} /> {profile.location}
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {[
            { href: socials.github, icon: <GitHubIcon />, label: 'GitHub' },
            { href: socials.linkedin, icon: <LinkedInIcon />, label: 'LinkedIn' },
            { href: socials.leetcode, icon: <CodeIcon />, label: 'LeetCode' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-12 w-12 place-items-center rounded-xl glass text-slate-300 transition-all hover:-translate-y-1 hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
