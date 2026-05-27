"use client";

import { useState } from "react";

import { HashScopeApp } from "@/components/HashScopeApp";
import { TheorySection } from "@/components/TheorySection";
import { content } from "@/data/content";
import { DEFAULT_LANGUAGE } from "@/data/project";
import type { Language } from "@/types/language";

export const HashScopeExperience = () => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const copy = content[language];

  return (
    <div className="bg-slate-950 text-slate-100">
      <TheorySection
        copy={copy}
        language={language}
        onLanguageChange={setLanguage}
      />
      <HashScopeApp language={language} onLanguageChange={setLanguage} />
    </div>
  );
};