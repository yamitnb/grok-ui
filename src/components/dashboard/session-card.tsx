import type { Session } from "@/lib/dashboard-data";
import { useDash } from "@/lib/store";

export function SessionCard({ session }: { session: Session }) {
  const openDialog = useDash((s) => s.openDialog);
  return (
    <article className="glass-inset card-lift rounded-2xl p-3">
      <div className="flex justify-between text-xs text-muted">
        <span>
          {session.start} – {session.end}
        </span>
        <span>Lớp học</span>
      </div>
      <div className="mt-1 font-semibold">{session.className}</div>
      <div className="text-xs text-muted">{session.subtitle}</div>
      <button
        type="button"
        onClick={() => openDialog({ type: "attendance", sessionId: session.id })}
        className="mt-2 rounded-full bg-present px-3 py-1 text-xs font-medium text-present-fg transition-transform duration-150 ease-out hover:brightness-95 active:scale-[0.96]"
      >
        Điểm danh
      </button>
    </article>
  );
}
