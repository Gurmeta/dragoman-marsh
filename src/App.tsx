import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Biodiversity from "./components/Biodiversity";
import VideoSection from "./components/VideoSection";
import VisitInfo from "./components/VisitInfo";
import Footer from "./components/Footer";
import { useLanguage, Language } from "./i18n";
import { Logo } from "./components/Logo";
import { FlagIcon, languageNames } from "./components/Flags";

export default function App() {
  const { t, lang, setLang, isRtl } = useLanguage();
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Visible on page load (while at the top) and whenever the mouse is in the top zone
  const isNavVisible = isAtTop || isNavHovered;

  return (
    <div
      className={`min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900 ${isRtl ? "rtl" : "ltr"}`}
    >
      {/* Navigation Header */}
      <div
        className="fixed top-0 left-0 w-full z-[60]"
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        {/* Trigger area (invisible, always catches mouse enter at the top) */}
        <div className="absolute top-0 left-0 w-full h-24" />

        {/* Navigation Bar */}
        <nav
          className={`relative w-full bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-500 transform ${isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <a
              href="#home"
              className="text-xl font-serif font-bold text-white tracking-tight flex-shrink-0 flex items-center gap-3"
            >
              <Logo className="w-8 h-8" />
              <span className="hidden sm:block">
                {t.hero.title1} {t.hero.title2}
              </span>
            </a>
            <div className="hidden md:flex gap-8 text-sm font-medium text-stone-200 flex-grow justify-center">
              <a
                href="#biodiversity"
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.bio}
              </a>
              <a
                href="#media"
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.video}
              </a>
              <a
                href="#visit"
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.info}
              </a>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {(["bg", "en", "ua", "he"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  aria-label={`Switch language to ${languageNames[l]}`}
                  title={languageNames[l]}
                  className={`px-2 py-1.5 rounded transition-all cursor-pointer ${lang === l ? "bg-emerald-500/20 border border-emerald-500/40 scale-110" : "opacity-60 hover:opacity-100 hover:bg-white/10 border border-transparent"}`}
                >
                  <FlagIcon lang={l} />
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <main dir={isRtl ? "rtl" : "ltr"}>
        <Hero />
        <Biodiversity />
        <VideoSection />
        <VisitInfo />
      </main>

      <Footer />
    </div>
  );
}
