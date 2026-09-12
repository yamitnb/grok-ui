export type PageId =
  | "overview"
  | "schedule"
  | "attendance"
  | "classes"
  | "students"
  | "fees";

export type AttendStatus = "present" | "absent" | "excused";

export type Student = {
  id: string;
  name: string;
  className: string;
  phone: string;
  fee: number;
};

export type SchoolClass = {
  id: string;
  name: string;
  level: string;
  feePerSession: number;
  students: number;
  schedule: string;
};

export type Session = {
  id: string;
  className: string;
  subtitle: string;
  date: string;
  weekday: string;
  start: string;
  end: string;
  tagged?: boolean;
};

export const TODAY = "2026-09-12";
export const TOMORROW = "2026-09-13";

export const STUDENTS: Student[] = [
  { id: "s1", name: "Nguyễn Minh Anh", className: "Eng 4 NC", phone: "0901 234 001", fee: 35000 },
  { id: "s2", name: "Trần Quốc Bảo", className: "Eng 4 NC", phone: "0901 234 002", fee: 35000 },
  { id: "s3", name: "Lê Hải Yến", className: "Eng 4 NC", phone: "0901 234 003", fee: 35000 },
  { id: "s4", name: "Phạm Gia Huy", className: "Eng 4 NC", phone: "0901 234 004", fee: 35000 },
  { id: "s5", name: "Hoàng Ngọc Lan", className: "Eng 4 NC", phone: "0901 234 005", fee: 35000 },
  { id: "s6", name: "Vũ Đức Minh", className: "Eng 4 NC", phone: "0901 234 006", fee: 35000 },
  { id: "s7", name: "Đặng Khánh Linh", className: "Eng 4 NC", phone: "0901 234 007", fee: 35000 },
  { id: "s8", name: "Bùi Thanh Tùng", className: "Eng 4 NC", phone: "0901 234 008", fee: 35000 },
  { id: "s9", name: "Đỗ Phương Thảo", className: "Eng 4 NC", phone: "0901 234 009", fee: 35000 },
  { id: "s10", name: "Phan Nhật Nam", className: "Eng 4 NC", phone: "0901 234 010", fee: 35000 },
  { id: "s11", name: "Ngô Gia Hân", className: "Eng 4 NC", phone: "0901 234 011", fee: 35000 },
  { id: "s12", name: "Lý Hoàng Khang", className: "Eng 4 NC", phone: "0901 234 012", fee: 35000 },
  { id: "s13", name: "Trịnh Mỹ Duyên", className: "Eng 4 NC", phone: "0901 234 013", fee: 35000 },
  { id: "s14", name: "Hồ Quang Duy", className: "Eng 4 NC", phone: "0901 234 014", fee: 35000 },
  { id: "s15", name: "Dương Bảo Châu", className: "Eng 4 NC", phone: "0901 234 015", fee: 35000 },
  { id: "s16", name: "Mai Anh Tú", className: "Eng 4 NC", phone: "0901 234 016", fee: 35000 },
  { id: "s17", name: "Cao Thị Hồng", className: "Eng 4 NC", phone: "0901 234 017", fee: 35000 },
  { id: "s18", name: "Nguyễn Hà My", className: "Eng 3A", phone: "0902 111 018", fee: 30000 },
  { id: "s19", name: "Trần Bình An", className: "Eng 3A", phone: "0902 111 019", fee: 30000 },
  { id: "s20", name: "Lê Khôi Nguyên", className: "Eng 3B", phone: "0902 111 020", fee: 30000 },
  { id: "s21", name: "Phạm Thanh Vy", className: "Eng 3B", phone: "0902 111 021", fee: 30000 },
  { id: "s22", name: "Hoàng Nhật Long", className: "Eng 2", phone: "0903 222 022", fee: 28000 },
  { id: "s23", name: "Vũ Diệu Linh", className: "Eng 9B", phone: "0903 222 023", fee: 40000 },
  { id: "s24", name: "Đặng Tuấn Kiệt", className: "Eng 7A", phone: "0903 222 024", fee: 38000 },
];

export const CLASSES: SchoolClass[] = [
  { id: "c1", name: "Eng 4 NC", level: "Lớp tiếng Anh 4 Nâng Cao", feePerSession: 35000, students: 17, schedule: "T7 07:30 · 15:30" },
  { id: "c2", name: "Eng 3A", level: "Tiếng Anh 3", feePerSession: 30000, students: 14, schedule: "T7 09:00" },
  { id: "c3", name: "Eng 3B", level: "Tiếng Anh 3", feePerSession: 30000, students: 12, schedule: "T7 14:00" },
  { id: "c4", name: "Eng 2", level: "Tiếng Anh 2", feePerSession: 28000, students: 16, schedule: "CN 07:30" },
  { id: "c5", name: "Eng 9B", level: "Tiếng Anh 9", feePerSession: 40000, students: 11, schedule: "CN 09:00" },
  { id: "c6", name: "Eng 7A", level: "Tiếng Anh 7", feePerSession: 38000, students: 13, schedule: "CN 14:00" },
];

export const SESSIONS: Session[] = [
  { id: "ss1", className: "Eng 4 NC", subtitle: "Buổi sáng", date: TODAY, weekday: "Thứ 7", start: "07:30", end: "09:00", tagged: true },
  { id: "ss2", className: "Eng 3A", subtitle: "Chưa có nội dung", date: TODAY, weekday: "Thứ 7", start: "09:00", end: "10:30" },
  { id: "ss3", className: "Eng 3B", subtitle: "Chưa có nội dung", date: TODAY, weekday: "Thứ 7", start: "14:00", end: "15:30" },
  { id: "ss4", className: "Eng 4 NC", subtitle: "Lớp tiếng Anh 4 Nâng Cao", date: TODAY, weekday: "Thứ 7", start: "15:30", end: "17:00" },
  { id: "ss5", className: "Eng 2", subtitle: "Chưa có nội dung", date: TOMORROW, weekday: "Chủ nhật", start: "07:30", end: "09:00" },
  { id: "ss6", className: "Eng 9B", subtitle: "Chưa có nội dung", date: TOMORROW, weekday: "Chủ nhật", start: "09:00", end: "10:30" },
  { id: "ss7", className: "Eng 7A", subtitle: "Chưa có nội dung", date: TOMORROW, weekday: "Chủ nhật", start: "14:00", end: "15:30" },
];

export const MONTHLY_REVENUE = [
  { month: "T1", value: 1_200_000, h: 28 },
  { month: "T2", value: 1_450_000, h: 32 },
  { month: "T3", value: 2_100_000, h: 48 },
  { month: "T4", value: 1_800_000, h: 40 },
  { month: "T5", value: 2_400_000, h: 55 },
  { month: "T6", value: 1_600_000, h: 36 },
  { month: "T7", value: 2_200_000, h: 50 },
  { month: "T8", value: 37_700_000, h: 92, label: "37,7tr" },
  { month: "T9", value: 7_035_000, h: 38, label: "7,0tr" },
  { month: "T10", value: 1_300_000, h: 30 },
  { month: "T11", value: 1_500_000, h: 34 },
  { month: "T12", value: 1_100_000, h: 26 },
];

export const SPARK_BARS = [40, 52, 46, 62, 88, 58, 42];

export const BAR_TONES = [
  "bg-violet/70",
  "bg-cyan/80",
  "bg-indigo/80",
  "bg-violet",
  "bg-cyan",
  "bg-pink/70",
  "bg-indigo/70",
  "bg-violet",
  "bg-pink",
  "bg-cyan/70",
  "bg-indigo/60",
  "bg-violet/60",
] as const;

export const MONTHS = [
  "Tháng 1/2026",
  "Tháng 2/2026",
  "Tháng 3/2026",
  "Tháng 4/2026",
  "Tháng 5/2026",
  "Tháng 6/2026",
  "Tháng 7/2026",
  "Tháng 8/2026",
  "Tháng 9/2026",
  "Tháng 10/2026",
  "Tháng 11/2026",
  "Tháng 12/2026",
];
