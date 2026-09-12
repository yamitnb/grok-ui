import type { ReactNode } from "react";
import { cn, formatVnd } from "@/lib/utils";
import type { AttendStatus } from "@/lib/dashboard-data";

export function GradientRing({
  id,
  from,
  to,
  glow,
}: {
  id: string;
  from: string;
  to: string;
  glow?: string;
}) {
  return (
    <span className="kpi-ring" style={{ filter: `drop-shadow(0 8px 12px ${glow ?? "rgba(255,120,90,0.28)"})` }}>
      <svg viewBox="0 0 72 72" aria-hidden>
        <defs>
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="55%" stopColor={to} />
            <stop offset="100%" stopColor={from} />
          </linearGradient>
          <filter id={`f-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="36" cy="36" r="26" fill="none" stroke="rgba(232,236,246,0.95)" strokeWidth="8" />
        <circle
          className="kpi-ring-arc"
          cx="36"
          cy="36"
          r="26"
          fill="none"
          stroke={`url(#g-${id})`}
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeDasharray="148 16"
          filter={`url(#f-${id})`}
        />
      </svg>
    </span>
  );
}

export function KpiCard({
  value,
  label,
  tone,
  wash,
  ringId,
  from,
  to,
  glow,
  delay,
}: {
  value: string;
  label: string;
  tone: "accent" | "mint";
  wash: string;
  ringId: string;
  from: string;
  to: string;
  glow: string;
  delay: string;
}) {
  return (
    <article
      className={cn(
        "glass card-lift rise flex items-center justify-between rounded-card px-5 py-5",
        wash,
      )}
      style={{ animationDelay: delay }}
    >
      <div className="min-w-0">
        <div
          className={cn(
            "truncate font-extrabold tracking-tight",
            value.length > 8 ? "text-2xl" : "text-3xl",
            tone === "accent" ? "text-accent" : "text-mint",
          )}
        >
          {value}
        </div>
        <div className="mt-1 text-sm text-muted">{label}</div>
      </div>
      <GradientRing id={ringId} from={from} to={to} glow={glow} />
    </article>
  );
}

export function StatusPill({ status, count }: { status: AttendStatus; count: number }) {
  const map = {
    present: { label: "Có mặt", cls: "bg-present text-present-fg" },
    absent: { label: "Vắng", cls: "bg-absent text-absent-fg" },
    excused: { label: "Có phép", cls: "bg-excuse text-excuse-fg" },
  } as const;
  const m = map[status];
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium", m.cls)}>
      {m.label}
      <span className="tabular-nums">{count}</span>
    </span>
  );
}

export function PillButton({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "pill-glass inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.96]",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/30 p-3 sm:items-center">
      <button type="button" className="absolute inset-0" aria-label="Đóng" onClick={onClose} />
      <div className="glass glass-strong rise relative w-full max-w-lg rounded-card p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button type="button" className="text-muted" onClick={onClose}>
            Đóng
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="mb-3 block text-sm">
      <span className="mb-1 block text-muted">{label}</span>
      {children}
    </label>
  );
}

export const inputClass =
  "h-11 w-full rounded-xl bg-page px-3 text-sm text-ink outline-none ring-1 ring-line focus:ring-indigo";

export function Money({ n }: { n: number }) {
  return <span className="tabular-nums">{formatVnd(n)}</span>;
}

export const BAR_GLASS = [
  "bar-t1",
  "bar-t2",
  "bar-t3",
  "bar-t4",
  "bar-t5",
  "bar-t6",
  "bar-t7",
  "bar-t8",
  "bar-t9",
  "bar-t10",
  "bar-t11",
  "bar-t12",
] as const;
