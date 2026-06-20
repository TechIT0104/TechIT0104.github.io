import { profile, socials } from '../data'
import { GitHubIcon, LinkedInIcon, CodeIcon, MailIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
            <GitHubIcon width={18} height={18} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <LinkedInIcon width={18} height={18} />
          </a>
          <a href={socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="hover:text-white">
            <CodeIcon width={18} height={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white">
            <MailIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
