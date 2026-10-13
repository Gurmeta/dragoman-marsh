# Dragoman Marsh — The Oasis of Wild Nature 🌿🐦

[![Deploy](https://github.com/Gurmeta/dragoman-marsh/actions/workflows/deploy.yml/badge.svg)](https://github.com/Gurmeta/dragoman-marsh/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)

**Live site:** https://gurmeta.github.io/dragoman-marsh/

An interactive, multilingual website dedicated to **Dragoman Marsh** (Драгоманско блато) — the largest natural karst wetland in Bulgaria. Located 40 km northwest of Sofia at the foot of Chepan Mountain, the marsh is a key stopover on the Via Aristotelis bird migration route and home to invaluable biodiversity.

## About the Marsh

The complex hosts **256 bird species** (61% of the country's ornithofauna), 43 mammal species, 11 reptile species, 9 amphibian species, and 180 species of higher plants — many of them endemic to Bulgaria and the Balkan Peninsula. Globally threatened birds such as the Ferruginous Duck and the Corncrake nest here, alongside rare plants like the White Water Lily and the Meadow Violet, listed in the Red Book of Bulgaria.

## What the Website Offers

- **Biodiversity showcase** — an interactive gallery of emblematic bird and plant species, each with a detailed description
- **Multimedia experience** — immersive video backgrounds, a panoramic drone video, and a video presentation
- **Visitor information** — how to get there, the best seasons for birdwatching, the wooden pontoon trails, the autumn bird-ringing camp, and an interactive map of the complex
- **Four languages** — Bulgarian, English, Ukrainian, and Hebrew (with full right-to-left layout support)

## Tech Stack

| | |
|---|---|
| Framework | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Motion (Framer Motion)](https://motion.dev/) |
| Icons | [Lucide](https://lucide.dev/) |

## Getting Started

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
npm run lint     # TypeScript type check
```

## Deployment

The site is deployed automatically to **GitHub Pages** via GitHub Actions on every push to `main` (see `.github/workflows/deploy.yml`). The Vite `base` path in `vite.config.ts` must match the repository name for assets to resolve correctly.

## Credits

Website created based on an idea by **Georgi Stefanov**.

## License

Released under the [MIT License](LICENSE).
