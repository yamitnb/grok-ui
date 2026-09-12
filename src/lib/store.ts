import { create } from "zustand";
import {
  CLASSES,
  SESSIONS,
  STUDENTS,
  TODAY,
  type AttendStatus,
  type PageId,
  type SchoolClass,
  type Session,
  type Student,
} from "./dashboard-data";

type AttendanceMap = Record<string, AttendStatus>;

function seedAttendance(): AttendanceMap {
  const map: AttendanceMap = {};
  for (const s of STUDENTS.filter((x) => x.className === "Eng 4 NC")) {
    map[`ss1:${s.id}`] = "present";
  }
  return map;
}

type Dialog =
  | { type: "none" }
  | { type: "student" }
  | { type: "class" }
  | { type: "attendance"; sessionId: string };

type Store = {
  page: PageId;
  collapsed: boolean;
  mobileOpen: boolean;
  month: string;
  students: Student[];
  classes: SchoolClass[];
  sessions: Session[];
  attendance: AttendanceMap;
  dialog: Dialog;
  query: string;
  setPage: (page: PageId) => void;
  toggleCollapsed: () => void;
  setMobileOpen: (open: boolean) => void;
  setMonth: (month: string) => void;
  setQuery: (q: string) => void;
  openDialog: (d: Dialog) => void;
  closeDialog: () => void;
  addStudent: (s: Omit<Student, "id">) => void;
  addClass: (c: Omit<SchoolClass, "id" | "students">) => void;
  setAttend: (sessionId: string, studentId: string, status: AttendStatus) => void;
  markSessionTaken: (sessionId: string) => void;
};

export const useDash = create<Store>((set) => ({
  page: "overview",
  collapsed: false,
  mobileOpen: false,
  month: "Tháng 9/2026",
  students: STUDENTS,
  classes: CLASSES,
  sessions: SESSIONS,
  attendance: seedAttendance(),
  dialog: { type: "none" },
  query: "",
  setPage: (page) => set({ page, mobileOpen: false }),
  toggleCollapsed: () => set((s) => ({ collapsed: !s.collapsed })),
  setMobileOpen: (mobileOpen) => set({ mobileOpen }),
  setMonth: (month) => set({ month }),
  setQuery: (query) => set({ query }),
  openDialog: (dialog) => set({ dialog }),
  closeDialog: () => set({ dialog: { type: "none" } }),
  addStudent: (s) =>
    set((st) => ({
      students: [...st.students, { ...s, id: `s${Date.now()}` }],
      dialog: { type: "none" },
    })),
  addClass: (c) =>
    set((st) => ({
      classes: [...st.classes, { ...c, id: `c${Date.now()}`, students: 0 }],
      dialog: { type: "none" },
    })),
  setAttend: (sessionId, studentId, status) =>
    set((st) => ({
      attendance: { ...st.attendance, [`${sessionId}:${studentId}`]: status },
    })),
  markSessionTaken: (sessionId) =>
    set((st) => ({
      sessions: st.sessions.map((x) =>
        x.id === sessionId ? { ...x, tagged: true } : x,
      ),
      dialog: { type: "none" },
    })),
}));

export function sessionCounts(attendance: AttendanceMap, sessionId: string) {
  const rows = Object.entries(attendance).filter(([k]) => k.startsWith(`${sessionId}:`));
  return {
    present: rows.filter(([, v]) => v === "present").length,
    absent: rows.filter(([, v]) => v === "absent").length,
    excused: rows.filter(([, v]) => v === "excused").length,
  };
}

export function todayRevenue(attendance: AttendanceMap, students: Student[]) {
  const counts = sessionCounts(attendance, "ss1");
  const fee = 35000;
  return counts.present * fee;
}

export function isTodayTagged(sessions: Session[]) {
  return sessions.some((s) => s.date === TODAY && s.tagged);
}
