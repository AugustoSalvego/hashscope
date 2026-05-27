import type { AppContent } from "@/data/content";
import type { HashMode, HashStep } from "@/types/hash";

type ExecutionFlowProps = {
  copy: AppContent;
  mode: HashMode;
  step: HashStep;
};

const getResultLabel = (copy: AppContent, mode: HashMode, step: HashStep) => {
  if (step.message === "invalid") return copy.flow.invalid;
  if (step.isTableFull) return copy.flow.tableFull;
  if (step.key === null) return copy.flow.idleResult;
  if (step.hasCollision && mode === "open-addressing") return copy.flow.resolved;
  if (step.hasCollision) return copy.flow.collision;

  return copy.flow.inserted;
};

export const ExecutionFlow = ({ copy, mode, step }: ExecutionFlowProps) => {
  const keyLabel = step.key === null ? copy.flow.idleKey : String(step.key);
  const hashLabel =
    step.key === null ? copy.flow.idleHash : `${Math.abs(step.key)} % 10`;
  const bucketLabel =
    step.homeIndex === null ? copy.flow.idleBucket : String(step.homeIndex);
  const resultLabel = getResultLabel(copy, mode, step);
  const messageLabel = copy.stepMessages[step.message] ?? copy.stepMessages.idle;
  const probeLabel =
    step.finalIndex !== null && step.homeIndex !== null
      ? `${copy.flow.homeBucket}: ${step.homeIndex} · ${copy.flow.finalBucket}: ${step.finalIndex}`
      : "";

  return (
    <section className="shrink-0 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
        <FlowNode label={copy.flow.key} value={keyLabel} tone="neutral" />
        <Arrow />
        <FlowNode label={copy.flow.hashFunction} value={hashLabel} tone="cyan" />
        <Arrow />
        <FlowNode label={copy.flow.bucket} value={bucketLabel} tone="cyan" />
        <Arrow />
        <FlowNode
          label={copy.flow.result}
          value={resultLabel}
          tone={step.hasCollision || step.isTableFull ? "rose" : "cyan"}
        />
      </div>
      <p className="mt-1 truncate font-mono text-[11px] text-slate-400">
        {probeLabel ? `${messageLabel} · ${probeLabel}` : messageLabel}
      </p>
    </section>
  );
};

type FlowNodeProps = {
  label: string;
  value: string;
  tone: "neutral" | "cyan" | "rose";
};

const FlowNode = ({ label, value, tone }: FlowNodeProps) => {
  const toneClass = {
    neutral: "border-slate-700 text-slate-100",
    cyan: "border-cyan-400/40 text-cyan-100",
    rose: "border-rose-400/60 text-rose-100",
  }[tone];

  return (
    <div className={`rounded-lg border bg-slate-900/80 px-3 py-2 ${toneClass}`}>
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <p className="font-mono text-sm font-bold">{value}</p>
    </div>
  );
};

const Arrow = () => (
  <div className="hidden px-1 text-center font-mono text-lg text-cyan-300/60 md:block">
    →
  </div>
);
