"use client";

import { useMemo, useState } from "react";

import { ControlStrip } from "@/components/ControlStrip";
import { ExecutionFlow } from "@/components/ExecutionFlow";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MemoryBoard } from "@/components/MemoryBoard";
import { MetricsStrip } from "@/components/MetricsStrip";
import { content } from "@/data/content";
import { DEFAULT_LANGUAGE, DEFAULT_MODE, TABLE_SIZE } from "@/data/project";
import {
  calculateLoadFactor,
  countElements,
  createEmptyTable,
  insertOpenAddressing,
  insertSeparateChaining,
} from "@/lib/hash";
import type { HashMode, HashStep } from "@/types/hash";
import type { Language } from "@/types/language";

const createIdleStep = (): HashStep => ({
  key: null,
  homeIndex: null,
  finalIndex: null,
  hasCollision: false,
  isTableFull: false,
  message: "idle",
});

export const HashScopeApp = () => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [mode, setMode] = useState<HashMode>(DEFAULT_MODE);
  const [inputValue, setInputValue] = useState("");
  const [table, setTable] = useState(() => createEmptyTable(TABLE_SIZE));
  const [step, setStep] = useState<HashStep>(() => createIdleStep());

  const copy = content[language];

  const elements = useMemo(() => countElements(table), [table]);
  const loadFactor = useMemo(
    () => calculateLoadFactor(table, TABLE_SIZE),
    [table],
  );

  const resetTable = () => {
    setTable(createEmptyTable(TABLE_SIZE));
    setStep(createIdleStep());
    setInputValue("");
  };

  const handleInsert = () => {
    const trimmedValue = inputValue.trim();
    const parsedValue = Number(trimmedValue);

    if (trimmedValue.length === 0 || !Number.isInteger(parsedValue)) {
      setStep({
        key: null,
        homeIndex: null,
        finalIndex: null,
        hasCollision: false,
        isTableFull: false,
        message: "invalid",
      });
      return;
    }

    const result =
      mode === "separate-chaining"
        ? insertSeparateChaining(table, parsedValue, TABLE_SIZE)
        : insertOpenAddressing(table, parsedValue, TABLE_SIZE);

    setTable(result.table);
    setStep(result.step);
    setInputValue("");
  };

  const handleModeChange = (nextMode: HashMode) => {
    setMode(nextMode);
    setTable(createEmptyTable(TABLE_SIZE));
    setStep(createIdleStep());
    setInputValue("");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 md:h-screen md:overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-2 px-3 py-2 sm:px-4 md:h-screen md:min-h-0">
        <header className="flex shrink-0 items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              <h1 className="font-mono text-lg font-black tracking-[-0.03em] text-white sm:text-xl">
                {copy.header.title}
              </h1>
            </div>
            <p className="truncate text-xs text-slate-500">{copy.header.subtitle}</p>
          </div>
          <LanguageSelector
            language={language}
            copy={copy}
            onChange={setLanguage}
          />
        </header>

        <ControlStrip
          copy={copy}
          inputValue={inputValue}
          mode={mode}
          onInputChange={setInputValue}
          onInsert={handleInsert}
          onClear={resetTable}
          onModeChange={handleModeChange}
        />

        <ExecutionFlow copy={copy} mode={mode} step={step} />

        <MetricsStrip
          copy={copy}
          mode={mode}
          elements={elements}
          loadFactor={loadFactor}
          step={step}
        />

        <MemoryBoard copy={copy} mode={mode} table={table} step={step} />
      </div>
    </main>
  );
};
