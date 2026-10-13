# Contributing

Thanks for your interest in improving the Dragoman Marsh website. Bug reports, translation fixes and content suggestions are all welcome.

## Getting set up

```bash
git clone https://github.com/Gurmeta/dragoman-marsh.git
cd dragoman-marsh
nvm use          # Node.js 22 (see .nvmrc)
npm ci
npm run dev      # http://localhost:3000
```

Before opening a pull request, run:

```bash
npm run check    # type check + production build
```

## Workflow

1. Open an issue first for anything bigger than a small fix.
2. Create a branch from `main` (`fix/...`, `feat/...`, `docs/...`).
3. Keep each pull request focused and fill in the PR template.
4. Pull requests are squash-merged once the CI check passes.

## Conventions

- **Commits:** short imperative subject, for example `Fix Hebrew menu alignment`.
- **TypeScript:** `strict` mode is on, so avoid `any`.
- **Translations:** every user-facing string lives in [`src/i18n.tsx`](src/i18n.tsx). A new key must be added for all four languages (`bg`, `en`, `ua`, `he`); the compiler enforces this.
- **Accessibility:** interactive elements must be reachable by keyboard, have visible focus and be at least 44x44 px on touch screens.
- **Media:** never add images or video you do not have the right to publish. Compress video before committing (see [docs/MEDIA.md](docs/MEDIA.md)).
- **Secrets:** this project needs none. Do not commit credentials or `.env` files.

## Reporting security issues

See [SECURITY.md](SECURITY.md). Please do not use public issues for vulnerabilities.
