import { useMemo, useState } from "react";
import { CLASSES } from "@/lib/dashboard-data";
import { useDash } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Field, inputClass, Modal } from "./widgets";

export function Dialogs() {
  const dialog = useDash((s) => s.dialog);
  if (dialog.type === "student") return <StudentForm />;
  if (dialog.type === "class") return <ClassForm />;
  if (dialog.type === "attendance") return <AttendanceForm sessionId={dialog.sessionId} />;
  return null;
}

function StudentForm() {
  const { closeDialog, addStudent, classes } = useDash();
  const [name, setName] = useState("");
  const [className, setClassName] = useState(classes[0]?.name ?? "Eng 4 NC");
  const [phone, setPhone] = useState("");
  return (
    <Modal title="Thêm học sinh" onClose={closeDialog}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim()) return;
          addStudent({ name: name.trim(), className, phone: phone || "—", fee: 35000 });
        }}
      >
        <Field label="Họ tên">
          <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} required />
        </Field>
        <Field label="Lớp">
          <select className={inputClass} value={className} onChange={(e) => setClassName(e.target.value)}>
            {classes.map((c) => (
              <option key={c.id}>{c.name}</option>
            ))}
          </select>
        </Field>
        <Field label="Điện thoại">
          <input className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
        <button type="submit" className="mt-2 h-11 w-full rounded-full bg-ink text-sm text-surface">
          Lưu học sinh
        </button>
      </form>
    </Modal>
  );
}

function ClassForm() {
  const { closeDialog, addClass } = useDash();
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [schedule, setSchedule] = useState("");
  const [fee, setFee] = useState("35000");
  return (
    <Modal title="Tạo lớp học" onClose={closeDialog}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim()) return;
          addClass({
            name: name.trim(),
            level: level || name,
            schedule: schedule || "Chưa xếp lịch",
            feePerSession: Number(fee) || 35000,
          });
        }}
      >
        <Field label="Tên lớp">
          <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} required />
        </Field>
        <Field label="Mô tả">
          <input className={inputClass} value={level} onChange={(e) => setLevel(e.target.value)} />
        </Field>
        <Field label="Lịch học">
          <input className={inputClass} value={schedule} onChange={(e) => setSchedule(e.target.value)} />
        </Field>
        <Field label="Học phí / buổi">
          <input className={inputClass} type="number" value={fee} onChange={(e) => setFee(e.target.value)} />
        </Field>
        <button type="submit" className="mt-2 h-11 w-full rounded-full bg-ink text-sm text-surface">
          Tạo lớp
        </button>
      </form>
    </Modal>
  );
}

function AttendanceForm({ sessionId }: { sessionId: string }) {
  const { closeDialog, students, sessions, attendance, setAttend, markSessionTaken } = useDash();
  const session = sessions.find((s) => s.id === sessionId);
  const className = session?.className ?? CLASSES[0].name;
  const rows = useMemo(
    () => students.filter((s) => s.className === className),
    [students, className],
  );

  return (
    <Modal title={`Điểm danh · ${className} ${session?.start ?? ""}`} onClose={closeDialog}>
      <ul className="max-h-80 space-y-2 overflow-auto pr-1">
        {rows.length === 0 && <li className="text-sm text-muted">Chưa có học sinh trong lớp này.</li>}
        {rows.map((s) => {
          const key = `${sessionId}:${s.id}`;
          const st = attendance[key] ?? "present";
          return (
            <li key={s.id} className="flex items-center justify-between gap-2 rounded-xl bg-page px-3 py-2">
              <span className="text-sm font-medium">{s.name}</span>
              <div className="flex gap-1">
                {(
                  [
                    ["present", "Có mặt"],
                    ["absent", "Vắng"],
                    ["excused", "Phép"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setAttend(sessionId, s.id, id)}
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs",
                      st === id
                        ? id === "present"
                          ? "bg-present text-present-fg"
                          : id === "absent"
                            ? "bg-absent text-absent-fg"
                            : "bg-excuse text-excuse-fg"
                        : "bg-surface text-muted",
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => markSessionTaken(sessionId)}
        className="mt-4 h-11 w-full rounded-full bg-ink text-sm text-surface"
      >
        Lưu điểm danh
      </button>
    </Modal>
  );
}
