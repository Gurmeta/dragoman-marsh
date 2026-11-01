# Interactive map

A standalone [Leaflet](https://leafletjs.com/) page in `public/map/`. It is copied unchanged into the build and published at `/dragoman-marsh/map/index.html`. The React app embeds it through [`InteractiveMap.tsx`](../src/components/InteractiveMap.tsx).

## Files

| File | Purpose | Size |
|---|---|---|
| `index.html` | Page, styles and map logic (no build step) | ~26 KB |
| `data.json` | GeoJSON, 18.7k OpenStreetMap features (coordinates rounded to 5 decimals, about 1 m) | ~6.5 MB (about 1 MB gzipped) |
| `relief.webp` | Shaded-relief overlay (NASA SRTM), georeferenced by `BOUNDS` in `index.html` | ~60 KB |
| `poster.webp` | Printable poster with legend, opened by the **Poster** button | ~800 KB |
| `../images/map-preview-*.webp` | Preview shown on the site before the map is activated | 44-271 KB |

## Behaviour

- **Lazy by design:** the site shows a preview image; the iframe (and so the data and tiles) loads only after the visitor clicks. Activation also stops the map from capturing page scroll on touch devices.
- **Basemaps:** Esri World Topo (default), OpenTopoMap, Esri Imagery and Esri Light Gray. No API keys are needed and they work without a `Referer`. The choice is remembered in `localStorage`.
- **Data loads after the basemap** with `fetch`, so the page is usable immediately. Polygons are drawn on a canvas renderer because of the feature count; fills are thinned over satellite imagery.
- **Popup text is escaped.** Names come from OpenStreetMap and must never be inserted as raw HTML.
- Leaflet is loaded from unpkg with a pinned version and a Subresource Integrity hash.

## Running locally

The page fetches `data.json`, so it must be served over HTTP; opening it as a file shows an explanatory message.

```bash
npm run dev            # then open http://localhost:3000/map/index.html
# or, without Vite:
npx serve public/map
```

Use the explicit `index.html` path in development: the Vite dev server answers directory URLs with the SPA shell.

## Basemap terms

- **Esri** tiles are free for light use with attribution (already shown on the map). Heavy traffic would need an ArcGIS or MapTiler plan.
- **OpenTopoMap** is a volunteer-run service; keep usage moderate.
- **CARTO** and **openstreetmap.org** tiles were removed on purpose: CARTO now returns an "API key required" watermark, and the OSM tile servers block requests without a `Referer` (such as a page opened from disk) under their tile usage policy.

## Data credits

OpenStreetMap contributors (ODbL), NASA SRTM 1 arc-second, Natural Earth. Map tiles: Esri and OpenTopoMap (CC BY-SA).
