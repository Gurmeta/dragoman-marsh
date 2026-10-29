import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bird, Flower2, X, Info } from "lucide-react";
import { useLanguage } from "../i18n";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

// Self-hosted WebP renditions live in public/images as <slug>-<width>.webp.
const speciesImage = (slug: string, widths: number[]) => {
  const base = `${import.meta.env.BASE_URL}images/${slug}`;
  const fallback = widths.filter((w) => w <= 1280).at(-1);
  return {
    image: `${base}-${fallback}.webp`,
    srcSet: widths.map((w) => `${base}-${w}.webp ${w}w`).join(", "),
  };
};

const ImageCard = ({ item, idx, onSelect }: { item: any; idx: number; onSelect: (item: any) => void; key?: string }) => (
  <motion.button
    type="button"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    onClick={() => onSelect(item)}
    aria-haspopup="dialog"
    className="relative block w-full text-start aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
  >
    <img
      src={item.image}
      srcSet={item.srcSet}
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      alt=""
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <Info className="w-6 h-6" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
      <span className="block text-white font-medium text-sm leading-tight drop-shadow-md line-clamp-2">
        {item.name}
      </span>
    </div>
  </motion.button>
);

export default function Biodiversity() {
  const { t, isRtl } = useLanguage();
  const [selectedSpecies, setSelectedSpecies] = useState<{
    name: string;
    description: string;
    image: string;
    srcSet: string;
    icon: any;
    category: string;
  } | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Modal behaviour: close on Escape, move focus into the dialog, restore it on close.
  useEffect(() => {
    if (!selectedSpecies) return;
    const trigger = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedSpecies(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [selectedSpecies]);

  const fauna = [
    {
      name: t.bio.b1_n,
      category: t.bio.birds,
      icon: <Bird className="w-4 h-4" />,
      ...speciesImage("little-bittern", [640, 1280, 2400]),
      description: t.bio.b1_d,
    },
    {
      name: t.bio.b2_n,
      category: t.bio.birds,
      icon: <Bird className="w-4 h-4" />,
      ...speciesImage("baillons-crake", [640, 1280, 2400]),
      description: t.bio.b2_d,
    },
    {
      name: t.bio.b3_n,
      category: t.bio.birds,
      icon: <Bird className="w-4 h-4" />,
      ...speciesImage("bittern", [640, 1280, 2400]),
      description: t.bio.b3_d,
    },
    {
      name: t.bio.b4_n,
      category: t.bio.birds,
      icon: <Bird className="w-4 h-4" />,
      ...speciesImage("moorhen", [640, 1179]),
      description: t.bio.b4_d,
    },
    {
      name: t.bio.b5_n,
      category: t.bio.birds,
      icon: <Bird className="w-4 h-4" />,
      ...speciesImage("grebe", [640, 1280, 2400]),
      description: t.bio.b5_d,
    },
    {
      name: t.bio.b6_n,
      category: t.bio.birds,
      icon: <Bird className="w-4 h-4" />,
      ...speciesImage("spotted-crake", [640, 1280, 1400]),
      description: t.bio.b6_d,
    },
  ];

  const flora = [
    {
      name: t.bio.p1_n,
      category: t.bio.plants,
      icon: <Flower2 className="w-4 h-4" />,
      ...speciesImage("fritillary", [640, 1280, 1807]),
      description: t.bio.p1_d,
    },
    {
      name: t.bio.p2_n,
      category: t.bio.plants,
      icon: <Flower2 className="w-4 h-4" />,
      ...speciesImage("water-lily", [640, 1280, 2400]),
      description: t.bio.p2_d,
    },
    {
      name: t.bio.p3_n,
      category: t.bio.plants,
      icon: <Flower2 className="w-4 h-4" />,
      ...speciesImage("fringed-water-lily", [640, 1280, 2048]),
      description: t.bio.p3_d,
    },
    {
      name: t.bio.p4_n,
      category: t.bio.plants,
      icon: <Flower2 className="w-4 h-4" />,
      ...speciesImage("viola", [640, 1280, 1878]),
      description: t.bio.p4_d,
    },
  ];

  return (
    <section
      id="biodiversity"
      className="relative bg-stone-950 text-white min-h-screen py-32 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay={!reducedMotion}
          loop
          muted
          playsInline
          preload="metadata"
          poster={`${import.meta.env.BASE_URL}bio-poster.jpg`}
          aria-hidden="true"
          className="absolute w-full h-full object-cover"
          src={`${import.meta.env.BASE_URL}bio-bg.mp4`}
        />
        {/* Dark overlay and blur effect to ensure text readability */}
        <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/40 to-stone-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-4xl md:text-6xl font-serif mb-8 text-orange-400 uppercase tracking-wider break-words"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.about.title_small}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-stone-300 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.about.desc}
          </motion.p>
        </div>

        {/* Fauna Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
          {/* Grid of fauna images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {fauna.map((item, idx) => (
              <ImageCard key={`fauna-${idx}`} item={item} idx={idx} onSelect={setSelectedSpecies} />
            ))}
          </div>

          {/* Fauna Text */}
          <div className="flex flex-col">
            <motion.h3
              initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-3xl md:text-5xl font-serif mb-6 text-emerald-400 uppercase tracking-wider md:tracking-widest break-words"
            >
              {t.bio.fauna_t}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className={`w-24 h-1 bg-emerald-500/50 mb-8 ${isRtl ? "origin-right" : "origin-left"}`}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-300 text-lg leading-relaxed font-light"
            >
              {t.bio.fauna_d}
            </motion.p>
          </div>
        </div>

        {/* Flora Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Flora Text */}
          <div className="flex flex-col lg:order-1 order-2">
            <motion.h3
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-3xl md:text-5xl font-serif mb-6 text-emerald-400 uppercase tracking-wider md:tracking-widest break-words"
            >
              {t.bio.flora_t}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className={`w-24 h-1 bg-emerald-500/50 mb-8 ${isRtl ? "origin-right" : "origin-left"}`}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-300 text-lg leading-relaxed font-light"
            >
              {t.bio.flora_d}
            </motion.p>
          </div>

          {/* Grid of flora images */}
          <div className="grid grid-cols-2 gap-4 lg:order-2 order-1">
            {flora.map((item, idx) => (
              <ImageCard key={`flora-${idx}`} item={item} idx={idx} onSelect={setSelectedSpecies} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSpecies && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={selectedSpecies.name}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedSpecies(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-stone-900 rounded-3xl overflow-y-auto md:overflow-hidden max-h-[90vh] md:max-h-none w-full max-w-2xl shadow-2xl ring-1 ring-white/10 flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedSpecies(null)}
                aria-label={t.ui.close}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-2/5 h-48 sm:h-64 md:h-auto shrink-0">
                <img
                  src={selectedSpecies.image}
                  srcSet={selectedSpecies.srcSet}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  alt={selectedSpecies.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  {selectedSpecies.icon}
                  <span className="uppercase text-xs font-bold tracking-wider">
                    {selectedSpecies.category}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">
                  {selectedSpecies.name}
                </h3>
                <p className="text-stone-300 font-light leading-relaxed">
                  {selectedSpecies.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
