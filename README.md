# Dhruv Samdani — Portfolio

A modern, dynamic, dark-themed portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.
Animated aurora background, typewriter hero, 3D tilt project cards, scroll reveals, photo
gallery with lightbox, and certificate showcase.

## Local development
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Editing content
Everything lives in **`src/data.js`** — profile, links, skills, projects, experience,
achievements, certifications, and gallery. No need to touch components for normal edits.

## Adding your images
See **`ASSETS.md`** for the exact filenames/locations for your headshot, résumé PDF,
Oracle certificates, and gallery photos.

## Deployment (GitHub Pages)
Two options, both already configured:

**A. Automatic (GitHub Actions) — recommended.**
Push to `main`; the workflow in `.github/workflows/deploy.yml` builds and publishes.
One-time: in the repo, go to **Settings → Pages → Build and deployment → Source =
GitHub Actions**.

**B. Manual (gh-pages branch).**
```bash
npm run deploy   # builds and pushes dist/ to the gh-pages branch
```
Then set **Settings → Pages → Source = gh-pages branch**.

> **This project is configured for the user repo `TechIT0104.github.io`** →
> `base: '/'` in `vite.config.js` → live at **https://techit0104.github.io/**.
> If you ever move it to a project repo, set `base: '/<repo-name>/'`.
