import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Navigation,
  Calendar,
  Map as MapIcon,
  Bird,
  Maximize2,
  X,
} from "lucide-react";
import { useLanguage } from "../i18n";

export default function VisitInfo() {
  const { t, isRtl } = useLanguage();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Modal behaviour: close on Escape, move focus into the dialog, restore it on close.
  useEffect(() => {
    if (!isMapOpen) return;
    const trigger = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMapOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [isMapOpen]);

  const tips = [
    {
      icon: <Navigation className="w-6 h-6" />,
      title: t.visit.f1_t,
      desc: t.visit.f1_d,
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t.visit.f2_t,
      desc: t.visit.f2_d,
    },
    {
      icon: <MapIcon className="w-6 h-6" />,
      title: t.visit.f3_t,
      desc: t.visit.f3_d,
    },
    {
      icon: <Bird className="w-6 h-6" />,
      title: t.visit.f4_t,
      desc: t.visit.f4_d,
    },
  ];

  return (
    <section
      id="visit"
      className="py-32 px-4 bg-stone-100 relative"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-12 h-[1px] bg-emerald-600 block" />
            {t.visit.title_small}
            <span className="w-12 h-[1px] bg-emerald-600 block" />
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif text-stone-900 mb-6"
          >
            {t.visit.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {t.visit.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Image Section */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 relative block text-start rounded-3xl overflow-hidden shadow-xl group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            onClick={() => setIsMapOpen(true)}
            aria-haspopup="dialog"
            aria-label={t.visit.map_title}
          >
            <img
              src="https://visitdragoman.com/wp-content/uploads/2019/06/legenda-1024x639.jpg"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[400px]"
            />
            <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-500" />

            {/* Overlay Banner */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-transparent p-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-white text-2xl font-serif mb-2">
                    {t.visit.map_title}
                  </span>
                  <span className="block text-emerald-100 font-light text-sm opacity-90">
                    {t.visit.photo_d}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.button>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col gap-4 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 text-emerald-900 transition-opacity duration-500 pointer-events-none scale-[2.5] transform -translate-y-2 translate-x-4">
                  {tip.icon}
                </div>
                <div className="w-14 h-14 shrink-0 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {tip.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2 font-serif group-hover:text-emerald-700 transition-colors duration-300">
                    {tip.title}
                  </h4>
                  <p className="text-stone-600 text-sm font-light leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Map Lightbox Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={t.visit.map_title}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-sm"
            onClick={() => setIsMapOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsMapOpen(false)}
                aria-label={t.ui.close}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src="https://visitdragoman.com/wp-content/uploads/2019/06/legenda.jpg"
                alt={t.visit.map_title}
                className="w-full h-auto max-h-[90vh] object-contain bg-stone-100"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
