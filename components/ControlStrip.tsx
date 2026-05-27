import type { KeyboardEvent } from "react";

import { HASH_FORMULA } from "@/data/project";
import type { AppContent } from "@/data/content";
import type { HashMode } from "@/types/hash";

type ControlStripProps = {
  copy: AppContent;
  inputValue: string;
  mode: HashMode;
  onInputChange: (value: string) => void;
  onInsert: () => void;
  onClear: () => void;
  onModeChange: (mode: HashMode) => void;
};

const modeOptions: HashMode[] = ["separate-chaining", "open-addressing"];

export const ControlStrip = ({
  copy,
  inputValue,
  mode,
  onInputChange,
  onInsert,
  onClear,
  onModeChange,
}: ControlStripProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onInsert();
    }
  };

  return (
    <section className="shrink-0 rounded-xl border border-cyan-400/15 bg-slate-950/80 px-3 py-2 shadow-[0_0_24px_rgba(8,145,178,0.08)]">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <div className="rounded-lg border border-slate-700/80 bg-slate-900 px-3 py-2">
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
              {copy.controls.formulaLabel}
            </p>
            <code className="font-mono text-sm text-cyan-200">{HASH_FORMULA}</code>
          </div>

          <label className="flex min-w-52 flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
              {copy.controls.inputLabel}
            </span>
            <input
              value={inputValue}
              onChange={(event) => onInputChange(event.target.value)}
              onKeyDown={handleKeyDown}
              inputMode="numeric"
              placeholder={copy.controls.inputPlaceholder}
              className="h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 font-mono text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-cyan-400/40 focus:border-cyan-300"
            />
          </label>

          <div className="flex items-center gap-2 pt-4 lg:pt-0">
            <button
              type="button"
              onClick={onInsert}
              className="h-9 rounded-lg border border-cyan-300/60 bg-cyan-300 px-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              {copy.controls.insert}
            </button>
            <button
              type="button"
              onClick={onClear}
              className="h-9 rounded-lg border border-slate-700 px-4 text-sm font-semibold text-slate-200 transition hover:border-rose-300/70 hover:text-rose-100"
            >
              {copy.controls.clear}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
            {copy.controls.strategy}
          </span>
          <div className="flex rounded-lg border border-slate-700 bg-slate-950 p-1">
            {modeOptions.map((option) => {
              const isActive = mode === option;
              const label =
                option === "separate-chaining"
                  ? copy.controls.separateChaining
                  : copy.controls.openAddressing;

              return (
                <button
                  type="button"
                  key={option}
                  onClick={() => onModeChange(option)}
                  className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${
                    isActive
                      ? "bg-cyan-300 text-slate-950"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <span className="font-mono text-[10px] text-slate-500">
            {copy.controls.enterHint}
          </span>
        </div>
      </div>
    </section>
  );
};
