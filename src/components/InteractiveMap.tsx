import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, MousePointerClick } from "lucide-react";
import { useLanguage } from "../i18n";

const PREVIEW_WIDTHS = [640, 1280, 1600];

// The map is a standalone page (public/map/) embedded on demand: nothing from it is
// downloaded until the visitor activates it, and activation also stops the embedded
// map from capturing page scroll on touch devices.
export default function InteractiveMap() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const base = import.meta.env.BASE_URL;
  // Explicit file name: the Vite dev server answers directory URLs with the SPA shell.
  const mapUrl = `${base}map/index.html`;

  useEffect(() => {
    if (active) frameRef.current?.focus();
  }, [active]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div className="max-w-2xl">
          <h4 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-2">
            {t.visit.imap_title}
          </h4>
          <p className="text-stone-600 font-light leading-relaxed">
            {t.visit.imap_desc}
          </p>
        </div>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full border border-stone-300 text-stone-700 text-sm font-medium hover:border-emerald-600 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors"
        >
          {t.visit.imap_open}
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      <div className="relative h-[70vh] min-h-[420px] max-h-[760px] rounded-3xl overflow-hidden shadow-xl bg-stone-200">
        {active ? (
          <iframe
            ref={frameRef}
            src={mapUrl}
            title={t.visit.imap_title}
            className="absolute inset-0 w-full h-full border-0"
            allow="fullscreen"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={t.visit.imap_activate}
            className="group absolute inset-0 w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset"
          >
            <img
              src={`${base}images/map-preview-1280.webp`}
              srcSet={PREVIEW_WIDTHS.map(
                (w) => `${base}images/map-preview-${w}.webp ${w}w`,
              ).join(", ")}
              sizes="(min-width: 1280px) 1216px, 100vw"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/20 transition-colors duration-500" />
            <span className="absolute inset-0 flex items-center justify-center p-4">
              <span className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm text-stone-900 font-medium shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MousePointerClick className="w-5 h-5" aria-hidden="true" />
                {t.visit.imap_activate}
              </span>
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
}
