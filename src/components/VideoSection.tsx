import { motion } from "motion/react";
import { useLanguage } from "../i18n";

export default function VideoSection() {
  const { t } = useLanguage();

  return (
    <section
      id="media"
      className="py-32 px-4 bg-stone-950 text-white relative overflow-hidden"
    >
      {/* Immersive background glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-800/20 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-[1px] bg-emerald-500 block" />
              {t.video.title_small}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-stone-100"
            >
              {t.video.title1}{" "}
              <span className="italic text-emerald-400">{t.video.title2}</span>
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-400 max-w-md font-light pb-2"
          >
            {t.video.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-2xl font-serif text-emerald-100 px-2 border-l-2 border-emerald-500">
              {t.video.v1_title}
            </h4>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group bg-stone-900">
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-10" />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/5u-2kvc47Yo?modestbranding=1&rel=0"
                title={t.video.v1_title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-700"
              ></iframe>
            </div>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-2xl font-serif text-emerald-100 px-2 border-l-2 border-emerald-500">
              {t.video.v2_title}
            </h4>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group bg-stone-900">
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-10" />
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/GQMAzf5hczY?modestbranding=1&rel=0"
                title={t.video.v2_title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-700"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
