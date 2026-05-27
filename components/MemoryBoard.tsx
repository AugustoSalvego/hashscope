import type { AppContent } from "@/data/content";
import { MEMORY_ADDRESSES } from "@/data/project";
import type { HashCell, HashMode, HashStep } from "@/types/hash";

type MemoryBoardProps = {
  copy: AppContent;
  mode: HashMode;
  table: HashCell[];
  step: HashStep;
};

const getStatusLabel = (copy: AppContent, cell: HashCell) => {
  if (cell.status === "collision") return copy.board.collision;
  if (cell.status === "filled") return copy.board.filled;

  return copy.board.empty;
};

export const MemoryBoard = ({
  copy,
  mode,
  table,
  step,
}: MemoryBoardProps) => (
  <section className="flex min-h-0 flex-1 flex-col rounded-xl border border-cyan-400/15 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.96))] p-3 shadow-[0_0_28px_rgba(8,145,178,0.08)]">
    <div className="mb-2 flex shrink-0 items-center justify-between gap-3">
      <div>
        <h2 className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-cyan-100">
          {copy.board.title}
        </h2>
        <p className="text-xs text-slate-500">{copy.board.subtitle}</p>
      </div>
      <div className="hidden items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200 sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
        {copy.header.liveStatus}
      </div>
    </div>

    <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-5 md:grid-rows-2">
      {table.map((cell) => {
        const isHome = step.homeIndex === cell.index;
        const isFinal = step.finalIndex === cell.index;
        const isPreview = step.message.startsWith("preview");
        const showFinal = mode === "open-addressing" && isFinal && step.key !== null;
        const showHome = isHome && step.key !== null;
        const hasOpenAddressingHomeCollision =
          mode === "open-addressing" &&
          step.hasCollision &&
          step.homeIndex === cell.index &&
          step.finalIndex !== cell.index;

        return (
          <MemoryCell
            key={cell.index}
            copy={copy}
            cell={cell}
            address={MEMORY_ADDRESSES[cell.index]}
            statusLabel={getStatusLabel(copy, cell)}
            isHome={showHome}
            isFinal={showFinal}
            isPreview={isPreview}
            hasOpenAddressingHomeCollision={hasOpenAddressingHomeCollision}
          />
        );
      })}
    </div>
  </section>
);

type MemoryCellProps = {
  copy: AppContent;
  cell: HashCell;
  address: string;
  statusLabel: string;
  isHome: boolean;
  isFinal: boolean;
  isPreview: boolean;
  hasOpenAddressingHomeCollision: boolean;
};

const MemoryCell = ({
  copy,
  cell,
  address,
  statusLabel,
  isHome,
  isFinal,
  isPreview,
  hasOpenAddressingHomeCollision,
}: MemoryCellProps) => {
  const collisionState = cell.status === "collision" || hasOpenAddressingHomeCollision;
  const borderState = collisionState
    ? "border-rose-400/70 shadow-[0_0_18px_rgba(251,113,133,0.16)]"
    : isFinal || isHome
      ? "border-cyan-300/70 shadow-[0_0_18px_rgba(34,211,238,0.14)]"
      : "border-slate-700/80";

  return (
    <article
      className={`relative min-h-28 overflow-hidden rounded-xl border bg-slate-950/90 p-3 transition ${borderState} ${
        isPreview && (isHome || isFinal) ? "border-dashed" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(34,211,238,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative flex h-full min-h-0 flex-col justify-between gap-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-mono text-2xl font-black leading-none text-white">
              {cell.index}
            </p>
            <p className="mt-1 font-mono text-[10px] text-slate-500">
              {address}
            </p>
          </div>
          <span
            className={`rounded-full border px-2 py-1 font-mono text-[10px] font-bold ${
              collisionState
                ? "border-rose-300/50 bg-rose-950/40 text-rose-100"
                : cell.status === "filled"
                  ? "border-cyan-300/40 bg-cyan-950/30 text-cyan-100"
                  : "border-slate-700 bg-slate-900 text-slate-500"
            }`}
          >
            {statusLabel}
          </span>
        </div>

        <div className="relative rounded-lg border border-slate-800 bg-slate-900/80 p-2">
          <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
            {copy.board.values}
          </p>
          {cell.values.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {cell.values.map((value, valueIndex) => (
                <span
                  key={`${cell.index}-${value}-${valueIndex}`}
                  className="rounded-md border border-cyan-300/30 bg-cyan-950/40 px-2 py-1 font-mono text-xs font-bold text-cyan-100"
                >
                  {value}
                </span>
              ))}
            </div>
          ) : (
            <p className="font-mono text-xs text-slate-600">
              {copy.board.emptySlot}
            </p>
          )}
        </div>

        <div className="flex min-h-5 flex-wrap gap-1.5">
          {isPreview && (isHome || isFinal) ? (
            <Marker label={copy.board.preview} tone="cyan" />
          ) : null}
          {isHome ? <Marker label={copy.board.home} tone="cyan" /> : null}
          {hasOpenAddressingHomeCollision ? (
            <Marker label={copy.board.collision} tone="rose" />
          ) : null}
          {isFinal ? <Marker label={copy.board.final} tone="cyan" /> : null}
        </div>
      </div>
    </article>
  );
};

type MarkerProps = {
  label: string;
  tone: "cyan" | "rose";
};

const Marker = ({ label, tone }: MarkerProps) => (
  <span
    className={`rounded border px-1.5 py-0.5 font-mono text-[10px] font-bold ${
      tone === "rose"
        ? "border-rose-300/50 bg-rose-950/40 text-rose-100"
        : "border-cyan-300/50 bg-cyan-950/40 text-cyan-100"
    }`}
  >
    {label}
  </span>
);