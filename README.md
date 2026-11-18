# Ayoub Ould Mohamed · Portfolio

Personal portfolio built with [Astro](https://astro.build). It compiles to a static site with no framework runtime.

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321/Portfolio/
npm run build     # outputs to dist/
npm run preview   # serves dist/
```

## Structure

```
public/
  images/desks/       Desk photos for each role
  images/logos/       Company and university logos
  images/portrait.webp
src/
  assets/fonts/       TAN Pearl web font
  components/         One component per section, plus shared pieces
  data/               All text content
    site.js           Name, navigation, hero, contact
    journey.js        Roles, dates, stories, skills, logos
    academia.js       Degrees and thesis
    profile.js        About, strengths, selected work, toolbox
  layouts/            Page shell and meta tags
  lib/asset.js        Prefixes public file paths with the site's base path
  pages/index.astro   Assembles the sections
  scripts/            Skill carousel behaviour
  styles/global.css   Colours, fonts and shared styles
```

To change text, edit the files in `src/data/`. To add a role, add an entry to `journey.js` with its desk image in `public/images/desks/`.

## Deploy

Live at https://ayoubould.github.io/Portfolio/


The site deploys to GitHub Pages automatically on every push to `main`, through `.github/workflows/deploy.yml`.

One-time setup: in the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
