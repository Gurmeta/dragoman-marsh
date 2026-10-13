import { ReactElement } from "react";
import { Language } from "../i18n";

// Windows does not render emoji flags, so we use small inline SVGs (3:2 ratio)
const BulgariaFlag = () => (
  <svg viewBox="0 0 60 30" className="w-full h-full" aria-hidden="true">
    <rect width="60" height="10" fill="#ffffff" />
    <rect y="10" width="60" height="10" fill="#00966E" />
    <rect y="20" width="60" height="10" fill="#D62612" />
  </svg>
);

const UKFlag = () => (
  <svg viewBox="0 0 60 30" className="w-full h-full" aria-hidden="true">
    <rect width="60" height="30" fill="#012169" />
    <path d="M0,0 60,30 M60,0 0,30" stroke="#ffffff" strokeWidth="6" />
    <path d="M0,0 60,30 M60,0 0,30" stroke="#C8102E" strokeWidth="3" />
    <path d="M30,0 V30 M0,15 H60" stroke="#ffffff" strokeWidth="10" />
    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const UkraineFlag = () => (
  <svg viewBox="0 0 60 30" className="w-full h-full" aria-hidden="true">
    <rect width="60" height="15" fill="#0057B7" />
    <rect y="15" width="60" height="15" fill="#FFD700" />
  </svg>
);

const IsraelFlag = () => (
  <svg viewBox="0 0 60 30" className="w-full h-full" aria-hidden="true">
    <rect width="60" height="30" fill="#ffffff" />
    <rect y="3" width="60" height="4" fill="#0038B8" />
    <rect y="23" width="60" height="4" fill="#0038B8" />
    <path
      d="M30,9.5 L34.8,17.5 H25.2 Z"
      fill="none"
      stroke="#0038B8"
      strokeWidth="1.3"
    />
    <path
      d="M30,20.5 L25.2,12.5 H34.8 Z"
      fill="none"
      stroke="#0038B8"
      strokeWidth="1.3"
    />
  </svg>
);

const flags: Record<Language, () => ReactElement> = {
  bg: BulgariaFlag,
  en: UKFlag,
  ua: UkraineFlag,
  he: IsraelFlag,
};

export const languageNames: Record<Language, string> = {
  bg: "Български",
  en: "English",
  ua: "Українська",
  he: "עברית",
};

export const FlagIcon = ({ lang }: { lang: Language }) => {
  const Flag = flags[lang];
  return (
    <span className="block w-6 h-4 rounded-[3px] overflow-hidden ring-1 ring-black/20">
      <Flag />
    </span>
  );
};
