import {
  CalendarDays,
  ClipboardCheck,
  Crown,
  GraduationCap,
  LayoutGrid,
  PanelLeft,
  Users,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDash } from "@/lib/store";
import type { PageId } from "@/lib/dashboard-data";

const NAV: { id: PageId; label: string; icon: typeof LayoutGrid }[] = [
  { id: "overview", label: "Tổng quan", icon: LayoutGrid },
  { id: "schedule", label: "Lịch dạy", icon: CalendarDays },
  { id: "attendance", label: "Điểm danh", icon: ClipboardCheck },
  { id: "classes", label: "Lớp học", icon: GraduationCap },
  { id: "students", label: "Học sinh", icon: Users },
  { id: "fees", label: "Học phí", icon: Wallet },
];

export function Sidebar() {
  const { page, setPage, collapsed, toggleCollapsed, mobileOpen, setMobileOpen } = useDash();

  const body = (
    <div className={cn("flex h-full flex-col", collapsed ? "w-[76px]" : "w-[232px]")}>
      <div className={cn("flex items-center gap-3 px-4 pt-5 pb-6", collapsed && "justify-center px-2")}>
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-linear-to-br from-accent to-pink text-sm font-extrabold text-surface">
          M
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold leading-tight">Ms Ngân English</div>
            <div className="text-xs text-muted">Quản lý lớp học</div>
          </div>
        )}
      </div>

      {!collapsed && (
        <div className="px-6 pb-2 text-[11px] font-medium tracking-wider text-muted">QUẢN LÝ</div>
      )}

      <nav className="flex-1 space-y-1 px-3">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active = page === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setPage(item.id)}
              className={cn(
                "flex h-11 w-full items-center gap-3 rounded-xl px-3 text-sm transition-all duration-150 ease-out",
                collapsed && "justify-center px-0",
                active
                  ? "bg-linear-to-r from-violet/25 to-cyan/15 font-medium text-nav shadow-soft"
                  : "text-muted hover:bg-white/40 hover:text-ink",
              )}
            >
              <Icon className="size-4 shrink-0" strokeWidth={1.8} />
              {!collapsed && item.label}
            </button>
          );
        })}
      </nav>

      <div className="px-3 pb-4">
        <button
          type="button"
          onClick={toggleCollapsed}
          className="mb-3 hidden h-10 items-center gap-2 px-3 text-sm text-muted lg:flex"
        >
          <PanelLeft className="size-4" />
          {!collapsed && "Thu gọn"}
        </button>
        <div
          className={cn(
            "flex items-center gap-3 rounded-2xl from-pink/15 to-violet/20 bg-linear-to-r p-3 glass-inset",
            collapsed && "justify-center",
          )}
        >
          <div className="grid size-10 place-items-center overflow-hidden rounded-full bg-linear-to-br from-indigo to-pink text-xs font-bold text-surface">
            LP
          </div>
          {!collapsed && (
            <div>
              <div className="text-sm font-medium">Lâm Phạm</div>
              <div className="inline-flex items-center gap-1 text-[11px] text-gold">
                <Crown className="size-3" /> Quản trị
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside className="glass sticky top-0 hidden h-screen shrink-0 lg:block">
        {body}
      </aside>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button type="button" className="absolute inset-0 bg-ink/30" onClick={() => setMobileOpen(false)} />
          <div className="glass relative h-full w-[232px]">{body}</div>
        </div>
      )}
    </>
  );
}
