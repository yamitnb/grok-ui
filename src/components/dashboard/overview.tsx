import { BadgeCheck, ChevronDown, ClipboardList, Crown, Plus, UserPlus } from "lucide-react";
import { CLASSES, MONTHLY_REVENUE, MONTHS, TODAY } from "@/lib/dashboard-data";
import { sessionCounts, todayRevenue, useDash } from "@/lib/store";
import { formatShortVnd, formatVnd } from "@/lib/utils";
import { BAR_GLASS, KpiCard, PillButton, StatusPill } from "./widgets";
import { SessionCard } from "./session-card";

const CLASS_TONES = [
  "from-violet/20 to-indigo/10",
  "from-cyan/25 to-indigo/10",
  "from-pink/20 to-accent/10",
  "from-mint/20 to-cyan/10",
];

export function Overview() {
  const { month, setMonth, openDialog, sessions, attendance, students, setPage } = useDash();
  const tagged = sessions.filter((s) => s.date === TODAY && s.tagged);
  const today = sessions.filter((s) => s.date === TODAY && s.id !== "ss1");
  const todayAll = sessions.filter((s) => s.date === TODAY);
  const morning = sessions.find((s) => s.id === "ss1");
  const tomorrow = sessions.filter((s) => s.date !== TODAY);
  const counts = sessionCounts(attendance, "ss1");
  const rev = todayRevenue(attendance, students);
  const collected = 0;
  const incurred = 7_035_000;
  const rate = collected === 0 ? 0 : Math.round((collected / incurred) * 100);

  return (
    <div className="space-y-5">
      <header className="rise">
        <p className="text-xs text-muted">Thứ Bảy, 12 tháng 9, 2026</p>
        <h1 className="mt-1 text-2xl font-semibold">Tổng quan</h1>
      </header>

      <section className="glass rise rounded-card p-5 sm:p-6" style={{ animationDelay: "40ms" }}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-3xl lg:whitespace-nowrap">
                XIN CHÀO, LÂM PHẠM
              </h2>
              <span className="check-glow grid size-6 place-items-center rounded-full bg-pink text-surface">
                <BadgeCheck className="size-3.5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-excuse px-2.5 py-1 text-xs font-medium text-gold shadow-soft">
                <Crown className="size-3" /> Quản trị
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">Bảng điều khiển học tập và lịch dạy cá nhân.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillButton onClick={() => openDialog({ type: "student" })}>
                <UserPlus className="size-4 text-muted" /> Thêm học sinh
              </PillButton>
              <PillButton onClick={() => openDialog({ type: "class" })}>
                <Plus className="size-4 text-muted" /> Tạo lớp học
              </PillButton>
              <PillButton onClick={() => openDialog({ type: "attendance", sessionId: "ss1" })}>
                <ClipboardList className="size-4 text-muted" /> Điểm danh
              </PillButton>
            </div>
          </div>
          <label className="relative">
            <span className="sr-only">Chọn tháng</span>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="pill-glass h-11 appearance-none rounded-full py-2 pr-10 pl-4 text-sm"
            >
              {MONTHS.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted" />
          </label>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          value={String(180 + (students.length - 24))}
          label="Học sinh đang theo học"
          tone="accent"
          wash="kpi-wash-peach"
          ringId="r1"
          from="#ff9a62"
          to="#ff6aa8"
          glow="rgba(255,122,70,0.35)"
          delay="80ms"
        />
        <KpiCard
          value={formatVnd(incurred)}
          label="Tổng học phí phát sinh"
          tone="accent"
          wash="kpi-wash-mint"
          ringId="r2"
          from="#7bf0c0"
          to="#3ddc97"
          glow="rgba(61,220,151,0.35)"
          delay="140ms"
        />
        <KpiCard
          value={formatVnd(collected)}
          label="Tổng học phí đã thu"
          tone="mint"
          wash="kpi-wash-cyan"
          ringId="r3"
          from="#7ae7ff"
          to="#5b9dff"
          glow="rgba(91,218,240,0.35)"
          delay="200ms"
        />
        <KpiCard
          value={`${rate}%`}
          label="Tỷ lệ thu học phí"
          tone="accent"
          wash="kpi-wash-pink"
          ringId="r4"
          from="#ff8ec8"
          to="#c084fc"
          glow="rgba(255,92,168,0.35)"
          delay="260ms"
        />
      </section>

      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="glass rise rounded-card p-5" style={{ animationDelay: "180ms" }}>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="font-semibold">Lịch dạy sắp tới</h3>
            <button
              type="button"
              onClick={() => setPage("schedule")}
              className="rounded-full bg-violet/15 px-3 py-1.5 text-xs font-medium text-nav transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              Xem toàn bộ thời khoá biểu
            </button>
          </div>

          <div className="glass-inset mb-4 rounded-2xl p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-medium">Lớp đã điểm danh hôm nay</div>
                <p className="text-xs text-muted">Tổng hợp theo lượt buổi đã phát sinh điểm danh.</p>
              </div>
              <span className="pill-glass rounded-full px-2 py-1 text-xs text-muted">
                {tagged.length} lớp
              </span>
            </div>
            {morning && (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                <div>
                  <span className="font-medium">{morning.className}</span>
                  <span className="ml-2 text-muted">{morning.start}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <StatusPill status="present" count={counts.present} />
                  <StatusPill status="absent" count={counts.absent} />
                  <StatusPill status="excused" count={counts.excused} />
                </div>
              </div>
            )}
          </div>

          <p className="mb-2 text-xs font-semibold tracking-wide text-muted">HÔM NAY — THỨ 7 — 12/09</p>
          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {today.map((s) => (
              <SessionCard key={s.id} session={s} />
            ))}
          </div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-muted">NGÀY MAI — CHỦ NHẬT — 13/09</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {tomorrow.map((s) => (
              <SessionCard key={s.id} session={s} />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass rise rounded-card p-5" style={{ animationDelay: "220ms" }}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold">Doanh thu dự kiến hôm nay</h3>
              <div className="text-right text-xs text-muted">
                Ngày xem
                <div>12/09/2026</div>
              </div>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-2xl bg-linear-to-br from-accent to-pink p-5 text-surface shadow-lift">
              <p className="text-xs font-medium tracking-wide text-surface/80">TỔNG DỰ KIẾN</p>
              <div className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">{formatVnd(rev)}</div>
              <p className="mt-2 text-sm text-surface/85">
                {counts.present} lượt có mặt · {tagged.length} buổi đã điểm danh
              </p>
            </div>

            <p className="mt-4 mb-2 text-xs font-semibold tracking-wide text-muted">THEO LỚP</p>
            <div className="grid grid-cols-2 gap-2">
              {todayAll.map((s, i) => {
                const cls = CLASSES.find((c) => c.name === s.className);
                const fee = cls?.feePerSession ?? 0;
                const sc = sessionCounts(attendance, s.id);
                const amount = s.tagged ? sc.present * fee : 0;
                return (
                  <article
                    key={s.id}
                    className={`rounded-2xl bg-linear-to-br p-3 ring-1 ring-white/70 ${CLASS_TONES[i % CLASS_TONES.length]}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] text-muted">{s.start}</span>
                      {s.tagged ? (
                        <span className="rounded-full bg-present px-2 py-0.5 text-[10px] font-medium text-present-fg">
                          Đã điểm danh
                        </span>
                      ) : (
                        <span className="rounded-full bg-white/50 px-2 py-0.5 text-[10px] text-muted">Chưa</span>
                      )}
                    </div>
                    <div className="mt-1 font-semibold">{s.className}</div>
                    <div className="mt-1 text-sm font-bold text-accent">{amount ? formatVnd(amount) : "0đ"}</div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="glass rise rounded-card p-5" style={{ animationDelay: "280ms" }}>
            <h3 className="font-semibold">Doanh thu 12 tháng</h3>
            <div className="mt-1 mb-4 text-3xl font-extrabold">{formatVnd(44_730_000)}</div>
            <div className="mb-6 flex flex-wrap gap-2 text-sm">
              <span className="pill-glass rounded-xl px-3 py-1.5">12 tháng</span>
              <span className="pill-glass rounded-xl px-3 py-1.5">Biểu đồ cột</span>
              <span className="pill-glass rounded-xl px-3 py-1.5">Năm 2026</span>
            </div>
            <div className="chart-grid flex h-36 items-end justify-between gap-1.5 sm:gap-2">
              {MONTHLY_REVENUE.map((m, i) => (
                <div key={m.month} className="relative z-10 flex h-full flex-1 flex-col items-center justify-end">
                  {m.label && <span className="mb-1 text-xs text-muted">{m.label}</span>}
                  <div
                    className={`bar-glass w-full max-w-7 ${BAR_GLASS[i]}`}
                    style={{ height: `${m.h}%`, animationDelay: `${80 + i * 40}ms` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-12 text-center text-xs text-muted">
              {MONTHLY_REVENUE.map((m) => (
                <span key={m.month}>{m.label ? formatShortVnd(m.value) : "0đ"}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
