"use client";

import { LanguageSelector } from "@/components/LanguageSelector";
import type { AppContent } from "@/data/content";
import type { Language } from "@/types/language";

type TheorySectionProps = {
  copy: AppContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export const TheorySection = ({
  copy,
  language,
  onLanguageChange,
}: TheorySectionProps) => (
  <section className="border-b border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.13),transparent_30%),linear-gradient(180deg,#020617,#0f172a_54%,#020617)] px-3 py-3 text-slate-100 sm:px-4">
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
      <header className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            <p className="font-mono text-lg font-black tracking-[-0.03em] text-white sm:text-xl">
              {copy.header.title}
            </p>
          </div>
          <p className="truncate text-xs text-slate-500">
            {copy.header.subtitle}
          </p>
        </div>

        <LanguageSelector
          language={language}
          copy={copy}
          onChange={onLanguageChange}
        />
      </header>

      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <article className="rounded-2xl border border-cyan-400/15 bg-slate-950/72 p-5 shadow-[0_0_28px_rgba(8,145,178,0.08)] sm:p-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
            {copy.theory.eyebrow}
          </p>

          <h1 className="mt-3 max-w-3xl text-3xl font-black leading-[0.96] tracking-[-0.07em] text-white sm:text-5xl">
            {copy.theory.title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            {copy.theory.subtitle}
          </p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href="#lab"
              className="rounded-xl border border-cyan-300/40 bg-cyan-300 px-4 py-3 text-center font-mono text-xs font-black uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-200"
            >
              {copy.theory.primaryCta}
            </a>

            <a
              href="#collision-case"
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              {copy.theory.secondaryCta}
            </a>
          </div>

          <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/55 p-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              {copy.theory.scrollHint}
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-950/75 p-4">
          <div className="rounded-xl border border-cyan-400/15 bg-slate-900/60 p-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              {copy.theory.pathTitle}
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              {copy.theory.pathSubtitle}
            </p>

            <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
              {copy.theory.pathSteps.map((step, index) => (
                <PathStep key={step.label} index={index} step={step} />
              ))}
            </div>
          </div>

          <div
            id="collision-case"
            className="mt-3 grid gap-3 rounded-xl border border-rose-400/20 bg-rose-950/12 p-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-rose-200">
                {copy.theory.collisionTitle}
              </p>

              <div className="mt-3 grid gap-2">
                {copy.theory.collisionExample.map((line) => (
                  <p
                    key={line}
                    className="rounded-lg border border-rose-300/20 bg-slate-950/80 px-3 py-2 font-mono text-sm font-bold text-rose-100"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-rose-300/25 bg-slate-950/85 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    ADDR 0x05
                  </p>
                  <p className="mt-1 font-mono text-4xl font-black leading-none text-white">
                    5
                  </p>
                </div>

                <span className="rounded-full border border-rose-300/50 bg-rose-950/40 px-2 py-1 font-mono text-[10px] font-bold text-rose-100">
                  COLLISION
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["15", "25", "35"].map((value) => (
                  <span
                    key={value}
                    className="rounded-lg border border-rose-300/35 bg-rose-950/35 px-3 py-2 font-mono text-sm font-black text-rose-50"
                  >
                    {value}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {copy.theory.collisionConclusion}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {copy.theory.sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/68 p-4"
          >
            <h2 className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-cyan-100">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {section.description}
            </p>
          </article>
        ))}
      </div>

      <section className="rounded-2xl border border-cyan-400/15 bg-slate-950/70 p-4">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-cyan-300">
              {copy.theory.strategiesTitle}
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">
              Same collision, two solutions
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-500">
            15, 25 e 35 colidem no mesmo bucket. A diferença está em como cada
            estratégia organiza essa colisão.
          </p>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {copy.theory.strategies.map((strategy, index) => (
            <article
              key={strategy.title}
              className={`rounded-xl border p-4 ${
                index === 0
                  ? "border-cyan-300/20 bg-cyan-950/10"
                  : "border-rose-300/20 bg-rose-950/10"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.04em] text-white">
                    {strategy.title}
                  </h3>
                </div>

                <span
                  className={`rounded-full border px-2 py-1 font-mono text-[10px] font-bold ${
                    index === 0
                      ? "border-cyan-300/35 bg-cyan-950/40 text-cyan-100"
                      : "border-rose-300/35 bg-rose-950/40 text-rose-100"
                  }`}
                >
                  {index === 0 ? "LIST" : "PROBE"}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {strategy.description}
              </p>

              <pre className="mt-4 min-h-24 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-sm font-bold leading-7 text-cyan-100">
                {strategy.example}
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="font-mono text-sm font-bold uppercase tracking-[0.24em] text-cyan-100">
              {copy.theory.complexityTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {copy.theory.complexityIntro}
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {copy.theory.complexityItems.map((item) => (
              <article
                key={item.label}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-3"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 font-mono text-xl font-black text-cyan-100">
                  {item.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-cyan-400/20 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_55%),rgba(8,47,73,0.18)] p-5 text-center">
        <h2 className="text-2xl font-black tracking-[-0.05em] text-white">
          {copy.theory.finalTitle}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          {copy.theory.finalDescription}
        </p>
        <a
          href="#lab"
          className="mt-5 inline-flex rounded-xl border border-cyan-300/40 bg-cyan-300 px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-200"
        >
          {copy.theory.primaryCta}
        </a>
      </section>
    </div>
  </section>
);

type PathStepProps = {
  index: number;
  step: {
    label: string;
    value: string;
    description: string;
  };
};

const PathStep = ({ index, step }: PathStepProps) => (
  <>
    <div className="rounded-xl border border-slate-800 bg-slate-950/85 p-3">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-950/40 font-mono text-xs font-black text-cyan-100">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
          {step.label}
        </p>
      </div>

      <p className="mt-3 font-mono text-sm font-black text-white">
        {step.value}
      </p>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {step.description}
      </p>
    </div>

    {index < 2 ? (
      <div className="hidden items-center justify-center font-mono text-2xl text-cyan-300/60 lg:flex">
        →
      </div>
    ) : null}
  </>
);