import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  // Visible at the top, while the mouse is in the top zone, or while the mobile menu is open
  const isNavVisible = isAtTop || isNavHovered || isMenuOpen;

  const navLinks = [
    { href: "#biodiversity", label: t.nav.bio },
    { href: "#media", label: t.nav.video },
    { href: "#visit", label: t.nav.info },
  ];

  return (
    <div
      className={`min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900 ${isRtl ? "rtl" : "ltr"}`}
    >
      {/* Navigation Header */}
      <div
        className="fixed top-0 left-0 w-full z-[60]"
        // Hover only applies to a real mouse; on touch screens it would stay "stuck" after a tap.
        onPointerEnter={(e) => e.pointerType === "mouse" && setIsNavHovered(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setIsNavHovered(false)}
      >
        {/* Trigger area (invisible, always catches mouse enter at the top) */}
        <div className="absolute top-0 left-0 w-full h-24" />

        {/* Navigation Bar */}
        <nav
          aria-label="Main"
          className={`relative w-full bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-500 transform ${isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <a
              href="#home"
              className="text-xl font-serif font-bold text-white tracking-tight flex-shrink-0 flex items-center gap-3 min-h-11 min-w-11"
            >
              <Logo className="w-8 h-8" />
              <span className="hidden sm:block">
                {t.hero.title1} {t.hero.title2}
              </span>
            </a>
            <div className="hidden md:flex gap-8 text-sm font-medium text-stone-200 flex-grow justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {(["bg", "en", "ua", "he"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  aria-label={`Switch language to ${languageNames[l]}`}
                  title={languageNames[l]}
                  className={`min-w-11 min-h-11 flex items-center justify-center rounded transition-all cursor-pointer ${lang === l ? "bg-emerald-500/20 border border-emerald-500/40 scale-110" : "opacity-60 hover:opacity-100 hover:bg-white/10 border border-transparent"}`}
                >
                  <FlagIcon lang={l} />
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={t.ui.menu}
                className="md:hidden min-w-11 min-h-11 flex items-center justify-center rounded text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-stone-950/95 backdrop-blur-md border-b border-white/10"
            dir={isRtl ? "rtl" : "ltr"}
          >
            <ul className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 min-h-11 text-lg font-medium text-stone-100 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
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
