import { LANGUAGE_OPTIONS, type Language } from "@/types/language";
import type { AppContent } from "@/data/content";

type LanguageSelectorProps = {
  language: Language;
  copy: AppContent;
  onChange: (language: Language) => void;
};

export const LanguageSelector = ({
  language,
  copy,
  onChange,
}: LanguageSelectorProps) => (
  <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
    <span className="hidden sm:inline">{copy.header.languageLabel}</span>
    <select
      value={language}
      onChange={(event) => onChange(event.target.value as Language)}
      className="rounded-md border border-cyan-400/20 bg-slate-950 px-2 py-1 font-mono text-xs text-slate-100 outline-none transition hover:border-cyan-300/50 focus:border-cyan-300"
      aria-label="Language selector"
    >
      {LANGUAGE_OPTIONS.map((option) => (
        <option key={option} value={option}>
          {copy.languageCodes[option]} · {copy.languages[option]}
        </option>
      ))}
    </select>
  </label>
);
