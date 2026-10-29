# Media guide

Large media is the main cost of this site, so it is optimised before it is committed.

## Current assets (`public/`)

| File | Purpose | Size |
|---|---|---|
| `bg-video.mp4` | Hero background, 1024x576, 24 fps, no audio | ~7.4 MB |
| `bio-bg.mp4` | Biodiversity background (blurred behind content), 854 px wide | ~3.5 MB |
| `hero-poster.jpg`, `bio-poster.jpg` | Poster frames shown before playback and when motion is reduced | ~120 KB, ~40 KB |
| `og-image.jpg` | 1200x630 social sharing image | ~130 KB |

## Compressing a video

Requires [FFmpeg](https://ffmpeg.org/). The commands used for the current files:

```bash
# Hero background (keep resolution, drop audio, 24 fps, web-friendly)
ffmpeg -i source.mp4 -an -c:v libx264 -preset slow -crf 30 -r 24 \
  -pix_fmt yuv420p -movflags +faststart public/bg-video.mp4

# Background that sits behind a blur: smaller and stronger compression
ffmpeg -i source.mp4 -an -vf "scale=854:-2" -c:v libx264 -preset slow -crf 32 \
  -r 24 -pix_fmt yuv420p -movflags +faststart public/bio-bg.mp4

# Poster frame (taken at 3 seconds)
ffmpeg -ss 3 -i source.mp4 -frames:v 1 -vf "scale=1024:-2" -q:v 4 public/hero-poster.jpg

# Social sharing image (1200x630, cropped)
ffmpeg -ss 3 -i source.mp4 -frames:v 1 \
  -vf "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630" \
  -q:v 4 public/og-image.jpg
```

`-movflags +faststart` lets playback begin before the file is fully downloaded, and `-an` removes the audio track, which background videos do not need and which allows muted autoplay.

## Guidelines

- Keep each background video below roughly 8 MB.
- Background videos must be muted, looping and `playsInline`, and must have a poster.
- Decorative videos use `aria-hidden="true"`; informative images need meaningful `alt` text.
- Only add media you have the right to publish, and keep a record of the author and licence (see the credits section in the README).

## Species and map images (`public/images/`)

The photos are self-hosted (previously hotlinked from visitdragoman.com, which now returns 403). Each is stored as WebP in several widths (`<slug>-<width>.webp`) and referenced through `srcset` in `src/components/Biodiversity.tsx`. Originals are from [Wikimedia Commons](https://commons.wikimedia.org/); attribution is required by the CC licences.

| Slug | Subject | Author | Licence |
|---|---|---|---|
| `little-bittern` | Ixobrychus minutus | Alexis Lours | CC BY 4.0 |
| `baillons-crake` | Porzana pusilla | Tisha Mukherjee | CC BY-SA 4.0 |
| `bittern` | Botaurus stellaris | Jakob Jilg | CC BY-SA 4.0 |
| `moorhen` | Gallinula galeata | U.S. Fish and Wildlife Service | Public domain |
| `grebe` | Podiceps cristatus | JJ Harrison | CC BY-SA 3.0 |
| `spotted-crake` | Porzana porzana (cropped) | Pierre-Marie Epiney | CC BY-SA 2.0 |
| `fritillary` | Fritillaria meleagroides | Андрей Ралев | CC BY-SA 3.0 |
| `water-lily` | Nymphaea alba | DerHexer | CC BY-SA 3.0 |
| `fringed-water-lily` | Nymphoides peltata | TeunSpaans | CC BY-SA 3.0 |
| `viola` | Viola pumila | Public domain (Wikimedia Commons) | Public domain |

`ramsar-map.jpg` is the Ramsar site map with legend (701x437, supplied by the project owner, source: visitdragoman.com).

Regenerate a rendition with FFmpeg (WebP, no upscaling):

```bash
ffmpeg -i original.jpg -vf "scale=1280:-2:flags=lanczos" -c:v libwebp -quality 82 -compression_level 6 public/images/<slug>-1280.webp
```
