# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [1.1.0] - 2026-10-14

### Added
- Accessible mobile navigation menu that also closes when tapping anywhere outside it.
- The navigation bar reappears on a light scroll up (desktop and mobile) and hides when scrolling down.
- Open Graph and Twitter card metadata with a 1200x630 preview image, canonical URL, `robots.txt` and `sitemap.xml`.
- Poster images for background videos and reduced-motion support.
- Continuous integration (type check and build on pull requests), Dependabot, issue and pull request templates.
- Project documentation: architecture notes, media guide, contributing guide and security policy.

### Changed
- Fonts are now self-hosted instead of loaded from Google Fonts.
- Background videos compressed from 35.7 MB to 10.9 MB.
- YouTube embeds use `youtube-nocookie.com` with a referrer policy.
- Species cards and the map are real buttons; dialogs close with Esc and restore focus.
- Touch targets are at least 44x44 px.
- Navigation bar is more legible: glass gradient, larger semi-bold white links with a subtle shadow; the expanded mobile menu is translucent.
- Security-related dev dependencies updated (postcss, source-map-js, browserslist, baseline-browser-mapping); no open Dependabot alerts.
- TypeScript `strict` mode enabled, with React type definitions.
- Deployment workflow split into build and deploy jobs with least-privilege permissions and current action versions.

### Removed
- Unused AI Studio configuration and environment template.
- Unused `About` component.

## [1.0.0] - 2026-10-13

### Added
- Initial release: multilingual (Bulgarian, English, Ukrainian, Hebrew with RTL) website about Dragoman Marsh with a biodiversity gallery, video section and visitor information, deployed to GitHub Pages.

[1.1.0]: https://github.com/Gurmeta/dragoman-marsh/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Gurmeta/dragoman-marsh/releases/tag/v1.0.0
