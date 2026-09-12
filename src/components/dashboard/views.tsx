import { Search } from "lucide-react";
import { useMemo } from "react";
import { sessionCounts, useDash } from "@/lib/store";
import { formatVnd } from "@/lib/utils";
import { SessionCard } from "./session-card";
import { StatusPill } from "./widgets";

export function ScheduleView() {
  const sessions = useDash((s) => s.sessions);
  const today = sessions.filter((s) => s.date === "2026-09-12");
  const tomorrow = sessions.filter((s) => s.date === "2026-09-13");
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">Lịch dạy</h1>
      <p className="text-sm text-muted">Thời khoá biểu 12–13/09/2026</p>
      <section className="rounded-card glass p-5">
        <h2 className="mb-3 font-semibold">Thứ 7 — 12/09</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {today.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </div>
      </section>
      <section className="rounded-card glass p-5">
        <h2 className="mb-3 font-semibold">Chủ nhật — 13/09</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tomorrow.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function AttendanceView() {
  const { sessions, attendance, openDialog } = useDash();
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">Điểm danh</h1>
      <div className="overflow-x-auto rounded-card glass">
        <table className="w-full text-left text-sm">
          <thead className="bg-page text-xs text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Lớp</th>
              <th className="px-4 py-3 font-medium">Giờ</th>
              <th className="px-4 py-3 font-medium">Ngày</th>
              <th className="px-4 py-3 font-medium">Sĩ số</th>
              <th className="px-4 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => {
              const c = sessionCounts(attendance, s.id);
              return (
                <tr key={s.id} className="border-t border-line">
                  <td className="px-4 py-3 font-medium">{s.className}</td>
                  <td className="px-4 py-3 text-muted">
                    {s.start}–{s.end}
                  </td>
                  <td className="px-4 py-3 text-muted">
                    {s.weekday} {s.date.slice(8)}/09
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      <StatusPill status="present" count={c.present} />
                      <StatusPill status="absent" count={c.absent} />
                      <StatusPill status="excused" count={c.excused} />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      className="rounded-full bg-present px-3 py-1 text-xs font-medium text-present-fg"
                      onClick={() => openDialog({ type: "attendance", sessionId: s.id })}
                    >
                      Điểm danh
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ClassesView() {
  const { classes, openDialog } = useDash();
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Lớp học</h1>
        <button
          type="button"
          onClick={() => openDialog({ type: "class" })}
          className="h-11 rounded-full bg-ink px-4 text-sm text-surface"
        >
          Tạo lớp
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {classes.map((c) => (
          <article key={c.id} className="rounded-card glass p-5">
            <div className="text-lg font-semibold">{c.name}</div>
            <p className="text-sm text-muted">{c.level}</p>
            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div>
                <dt className="text-xs text-muted">Học sinh</dt>
                <dd className="font-medium">{c.students}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Học phí / buổi</dt>
                <dd className="font-medium">{formatVnd(c.feePerSession)}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs text-muted">Lịch</dt>
                <dd>{c.schedule}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

export function StudentsView() {
  const { students, query, setQuery, openDialog } = useDash();
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return students.filter(
      (s) => !q || s.name.toLowerCase().includes(q) || s.className.toLowerCase().includes(q),
    );
  }, [students, query]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Học sinh</h1>
        <button
          type="button"
          onClick={() => openDialog({ type: "student" })}
          className="h-11 rounded-full bg-ink px-4 text-sm text-surface"
        >
          Thêm học sinh
        </button>
      </div>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm tên hoặc lớp"
          className="pill-glass h-11 w-full rounded-full pr-4 pl-10 text-sm outline-none"
        />
      </div>
      <div className="overflow-x-auto rounded-card glass">
        <table className="w-full text-left text-sm">
          <thead className="bg-page text-xs text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Họ tên</th>
              <th className="px-4 py-3 font-medium">Lớp</th>
              <th className="px-4 py-3 font-medium">Điện thoại</th>
              <th className="px-4 py-3 font-medium">Học phí / buổi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.id} className="border-t border-line">
                <td className="px-4 py-3 font-medium">{s.name}</td>
                <td className="px-4 py-3">{s.className}</td>
                <td className="px-4 py-3 text-muted">{s.phone}</td>
                <td className="px-4 py-3">{formatVnd(s.fee)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function FeesView() {
  const students = useDash((s) => s.students);
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">Học phí</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <article className="rounded-card glass p-5">
          <div className="text-sm text-muted">Phát sinh tháng 9</div>
          <div className="mt-1 text-2xl font-extrabold text-accent">{formatVnd(7_035_000)}</div>
        </article>
        <article className="rounded-card glass p-5">
          <div className="text-sm text-muted">Đã thu</div>
          <div className="mt-1 text-2xl font-extrabold text-mint">{formatVnd(0)}</div>
        </article>
        <article className="rounded-card glass p-5">
          <div className="text-sm text-muted">Công nợ</div>
          <div className="mt-1 text-2xl font-extrabold">{formatVnd(7_035_000)}</div>
        </article>
      </div>
      <div className="overflow-x-auto rounded-card glass">
        <table className="w-full text-left text-sm">
          <thead className="bg-page text-xs text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Học sinh</th>
              <th className="px-4 py-3 font-medium">Lớp</th>
              <th className="px-4 py-3 font-medium">Còn nợ</th>
              <th className="px-4 py-3 font-medium">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t border-line">
                <td className="px-4 py-3 font-medium">{s.name}</td>
                <td className="px-4 py-3">{s.className}</td>
                <td className="px-4 py-3">{formatVnd(s.fee)}</td>
                <td className="px-4 py-3 text-accent">Chưa thu</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
