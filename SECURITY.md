# Security Policy

## Supported versions

Only the latest release published on the [Releases](https://github.com/Gurmeta/dragoman-marsh/releases) page, which is also what runs on the live site, receives security fixes.

## Reporting a vulnerability

Please **do not open a public issue** for security problems.

Use GitHub's private reporting instead:
[Report a vulnerability](https://github.com/Gurmeta/dragoman-marsh/security/advisories/new)

Include what you found, how to reproduce it and the potential impact. You can expect an initial response within 7 days.

## Scope and design notes

This is a static website with no backend, no user accounts and no stored personal data:

- The only data kept in the browser is the chosen interface language (`localStorage`).
- Embedded YouTube videos use the privacy-enhanced `youtube-nocookie.com` domain.
- Fonts are self-hosted, so visitors' IP addresses are not sent to font CDNs.
- Dependencies are monitored by Dependabot, and CI runs a type check and build on every pull request.
