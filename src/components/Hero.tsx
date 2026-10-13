import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Hero() {
  const { t, isRtl } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 md:py-0"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full bg-stone-900 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={`${import.meta.env.BASE_URL}bg-video.mp4`}
        />

        {/* Thin Horizontal Lines Effect */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)",
          }}
        />

        {/* Sun Flare Effect */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-gradient-to-br from-amber-200/40 via-orange-500/20 to-transparent mix-blend-screen rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none z-10" />
        <div className="absolute top-[-5%] right-[-5%] w-[40vw] h-[40vw] bg-yellow-100/30 mix-blend-screen rounded-full blur-[60px] pointer-events-none z-10" />
      </div>

      {/* Dark gradient overlay for text readability and cinematic mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-950/90 pointer-events-none z-20" />

      {/* Content */}
      <div className="relative z-30 px-6 w-full max-w-7xl mx-auto flex flex-col items-end text-right mt-24">
        <motion.h1
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-2xl leading-[1.1] max-w-4xl break-words"
        >
          {t.hero.title1}{" "}
          <span className="text-emerald-400 italic font-light">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-xl text-stone-200 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md break-words"
        >
          {t.hero.desc}
        </motion.p>

        <motion.a
          href="#biodiversity"
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group flex items-center gap-3 bg-emerald-600/90 backdrop-blur-md hover:bg-emerald-500 text-white px-8 py-4 rounded-full transition-all duration-500 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.7)] ring-1 ring-white/20 hover:ring-white/50"
        >
          <span className="text-lg font-medium tracking-wide">
            {t.hero.btn}
          </span>
          <ArrowDown
            className={`w-5 h-5 group-hover:translate-y-1.5 transition-transform duration-300 ${isRtl ? "mr-2" : ""}`}
          />
        </motion.a>
      </div>
    </section>
  );
}
