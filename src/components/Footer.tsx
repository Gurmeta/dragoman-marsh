import { useLanguage, Language } from "../i18n";
import { Logo } from "./Logo";
import { FlagIcon, languageNames } from "./Flags";

export default function Footer() {
  const { t, lang, setLang, isRtl } = useLanguage();

  return (
    <footer
      className="bg-stone-950 text-stone-400 py-16 px-6 border-t border-white/5"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a
            href="#home"
            className="flex items-center gap-3 min-h-11 text-xl font-serif font-bold text-white tracking-tight hover:opacity-80 transition-opacity"
          >
            <Logo className="w-8 h-8" />
            <span>
              {t.hero.title1} {t.hero.title2}
            </span>
          </a>

          <div className="flex gap-8 text-sm font-medium text-stone-300">
            <a
              href="#biodiversity"
              className="inline-block px-2 py-3 hover:text-emerald-400 transition-colors"
            >
              {t.nav.bio}
            </a>
            <a
              href="#media"
              className="inline-block px-2 py-3 hover:text-emerald-400 transition-colors"
            >
              {t.nav.video}
            </a>
            <a
              href="#visit"
              className="inline-block px-2 py-3 hover:text-emerald-400 transition-colors"
            >
              {t.nav.info}
            </a>
          </div>

          <div className="flex items-center gap-2">
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
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p className="italic">{t.footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
