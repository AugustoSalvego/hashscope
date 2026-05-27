import type { AppContent } from "@/data/content";
import { TABLE_SIZE } from "@/data/project";
import type { HashMode, HashStep } from "@/types/hash";

type MetricsStripProps = {
  copy: AppContent;
  mode: HashMode;
  elements: number;
  loadFactor: number;
  step: HashStep;
};

export const MetricsStrip = ({
  copy,
  mode,
  elements,
  loadFactor,
  step,
}: MetricsStripProps) => {
  const strategyLabel =
    mode === "separate-chaining"
      ? copy.controls.separateChaining
      : copy.controls.openAddressing;
  const complexityLabel =
    mode === "separate-chaining"
      ? copy.metrics.separateComplexity
      : copy.metrics.openComplexity;
  const collisionLabel = step.hasCollision
    ? copy.metrics.hasCollision
    : copy.metrics.noCollision;

  return (
    <section className="shrink-0 rounded-xl border border-slate-800 bg-slate-950/65 px-3 py-2">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
        <MetricChip label={copy.metrics.loadFactor} value={loadFactor.toFixed(2)} />
        <MetricChip label={copy.metrics.elements} value={String(elements)} />
        <MetricChip label={copy.metrics.tableSize} value={String(TABLE_SIZE)} />
        <MetricChip label={copy.metrics.strategy} value={strategyLabel} />
        <MetricChip
          label={copy.metrics.collisionStatus}
          value={collisionLabel}
          alert={step.hasCollision || step.isTableFull}
          helper={complexityLabel}
        />
      </div>
    </section>
  );
};

type MetricChipProps = {
  label: string;
  value: string;
  alert?: boolean;
  helper?: string;
};

const MetricChip = ({ label, value, alert = false, helper }: MetricChipProps) => (
  <div
    className={`min-w-0 rounded-lg border px-3 py-2 ${
      alert
        ? "border-rose-400/40 bg-rose-950/25"
        : "border-cyan-400/15 bg-slate-900/80"
    }`}
  >
    <p className="truncate text-[10px] uppercase tracking-[0.18em] text-slate-500">
      {label}
    </p>
    <p
      className={`truncate font-mono text-sm font-bold ${
        alert ? "text-rose-100" : "text-cyan-100"
      }`}
    >
      {value}
    </p>
    {helper ? (
      <p className="truncate font-mono text-[10px] text-slate-500">{helper}</p>
    ) : null}
  </div>
);
