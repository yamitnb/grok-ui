import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as Menu, d as Crown, f as ClipboardList, g as BadgeCheck, h as CalendarDays, l as LayoutGrid, m as ChevronDown, n as Users, o as Plus, p as ClipboardCheck, r as UserPlus, s as PanelLeft, t as Wallet, u as GraduationCap } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRHn5dF8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TODAY = "2026-09-12";
var TOMORROW = "2026-09-13";
var STUDENTS = [
	{
		id: "s1",
		name: "Nguyễn Minh Anh",
		className: "Eng 4 NC",
		phone: "0901 234 001",
		fee: 35e3
	},
	{
		id: "s2",
		name: "Trần Quốc Bảo",
		className: "Eng 4 NC",
		phone: "0901 234 002",
		fee: 35e3
	},
	{
		id: "s3",
		name: "Lê Hải Yến",
		className: "Eng 4 NC",
		phone: "0901 234 003",
		fee: 35e3
	},
	{
		id: "s4",
		name: "Phạm Gia Huy",
		className: "Eng 4 NC",
		phone: "0901 234 004",
		fee: 35e3
	},
	{
		id: "s5",
		name: "Hoàng Ngọc Lan",
		className: "Eng 4 NC",
		phone: "0901 234 005",
		fee: 35e3
	},
	{
		id: "s6",
		name: "Vũ Đức Minh",
		className: "Eng 4 NC",
		phone: "0901 234 006",
		fee: 35e3
	},
	{
		id: "s7",
		name: "Đặng Khánh Linh",
		className: "Eng 4 NC",
		phone: "0901 234 007",
		fee: 35e3
	},
	{
		id: "s8",
		name: "Bùi Thanh Tùng",
		className: "Eng 4 NC",
		phone: "0901 234 008",
		fee: 35e3
	},
	{
		id: "s9",
		name: "Đỗ Phương Thảo",
		className: "Eng 4 NC",
		phone: "0901 234 009",
		fee: 35e3
	},
	{
		id: "s10",
		name: "Phan Nhật Nam",
		className: "Eng 4 NC",
		phone: "0901 234 010",
		fee: 35e3
	},
	{
		id: "s11",
		name: "Ngô Gia Hân",
		className: "Eng 4 NC",
		phone: "0901 234 011",
		fee: 35e3
	},
	{
		id: "s12",
		name: "Lý Hoàng Khang",
		className: "Eng 4 NC",
		phone: "0901 234 012",
		fee: 35e3
	},
	{
		id: "s13",
		name: "Trịnh Mỹ Duyên",
		className: "Eng 4 NC",
		phone: "0901 234 013",
		fee: 35e3
	},
	{
		id: "s14",
		name: "Hồ Quang Duy",
		className: "Eng 4 NC",
		phone: "0901 234 014",
		fee: 35e3
	},
	{
		id: "s15",
		name: "Dương Bảo Châu",
		className: "Eng 4 NC",
		phone: "0901 234 015",
		fee: 35e3
	},
	{
		id: "s16",
		name: "Mai Anh Tú",
		className: "Eng 4 NC",
		phone: "0901 234 016",
		fee: 35e3
	},
	{
		id: "s17",
		name: "Cao Thị Hồng",
		className: "Eng 4 NC",
		phone: "0901 234 017",
		fee: 35e3
	},
	{
		id: "s18",
		name: "Nguyễn Hà My",
		className: "Eng 3A",
		phone: "0902 111 018",
		fee: 3e4
	},
	{
		id: "s19",
		name: "Trần Bình An",
		className: "Eng 3A",
		phone: "0902 111 019",
		fee: 3e4
	},
	{
		id: "s20",
		name: "Lê Khôi Nguyên",
		className: "Eng 3B",
		phone: "0902 111 020",
		fee: 3e4
	},
	{
		id: "s21",
		name: "Phạm Thanh Vy",
		className: "Eng 3B",
		phone: "0902 111 021",
		fee: 3e4
	},
	{
		id: "s22",
		name: "Hoàng Nhật Long",
		className: "Eng 2",
		phone: "0903 222 022",
		fee: 28e3
	},
	{
		id: "s23",
		name: "Vũ Diệu Linh",
		className: "Eng 9B",
		phone: "0903 222 023",
		fee: 4e4
	},
	{
		id: "s24",
		name: "Đặng Tuấn Kiệt",
		className: "Eng 7A",
		phone: "0903 222 024",
		fee: 38e3
	}
];
var CLASSES = [
	{
		id: "c1",
		name: "Eng 4 NC",
		level: "Lớp tiếng Anh 4 Nâng Cao",
		feePerSession: 35e3,
		students: 17,
		schedule: "T7 07:30 · 15:30"
	},
	{
		id: "c2",
		name: "Eng 3A",
		level: "Tiếng Anh 3",
		feePerSession: 3e4,
		students: 14,
		schedule: "T7 09:00"
	},
	{
		id: "c3",
		name: "Eng 3B",
		level: "Tiếng Anh 3",
		feePerSession: 3e4,
		students: 12,
		schedule: "T7 14:00"
	},
	{
		id: "c4",
		name: "Eng 2",
		level: "Tiếng Anh 2",
		feePerSession: 28e3,
		students: 16,
		schedule: "CN 07:30"
	},
	{
		id: "c5",
		name: "Eng 9B",
		level: "Tiếng Anh 9",
		feePerSession: 4e4,
		students: 11,
		schedule: "CN 09:00"
	},
	{
		id: "c6",
		name: "Eng 7A",
		level: "Tiếng Anh 7",
		feePerSession: 38e3,
		students: 13,
		schedule: "CN 14:00"
	}
];
var SESSIONS = [
	{
		id: "ss1",
		className: "Eng 4 NC",
		subtitle: "Buổi sáng",
		date: TODAY,
		weekday: "Thứ 7",
		start: "07:30",
		end: "09:00",
		tagged: true
	},
	{
		id: "ss2",
		className: "Eng 3A",
		subtitle: "Chưa có nội dung",
		date: TODAY,
		weekday: "Thứ 7",
		start: "09:00",
		end: "10:30"
	},
	{
		id: "ss3",
		className: "Eng 3B",
		subtitle: "Chưa có nội dung",
		date: TODAY,
		weekday: "Thứ 7",
		start: "14:00",
		end: "15:30"
	},
	{
		id: "ss4",
		className: "Eng 4 NC",
		subtitle: "Lớp tiếng Anh 4 Nâng Cao",
		date: TODAY,
		weekday: "Thứ 7",
		start: "15:30",
		end: "17:00"
	},
	{
		id: "ss5",
		className: "Eng 2",
		subtitle: "Chưa có nội dung",
		date: TOMORROW,
		weekday: "Chủ nhật",
		start: "07:30",
		end: "09:00"
	},
	{
		id: "ss6",
		className: "Eng 9B",
		subtitle: "Chưa có nội dung",
		date: TOMORROW,
		weekday: "Chủ nhật",
		start: "09:00",
		end: "10:30"
	},
	{
		id: "ss7",
		className: "Eng 7A",
		subtitle: "Chưa có nội dung",
		date: TOMORROW,
		weekday: "Chủ nhật",
		start: "14:00",
		end: "15:30"
	}
];
var MONTHLY_REVENUE = [
	{
		month: "T1",
		value: 12e5,
		h: 28
	},
	{
		month: "T2",
		value: 145e4,
		h: 32
	},
	{
		month: "T3",
		value: 21e5,
		h: 48
	},
	{
		month: "T4",
		value: 18e5,
		h: 40
	},
	{
		month: "T5",
		value: 24e5,
		h: 55
	},
	{
		month: "T6",
		value: 16e5,
		h: 36
	},
	{
		month: "T7",
		value: 22e5,
		h: 50
	},
	{
		month: "T8",
		value: 377e5,
		h: 92,
		label: "37,7tr"
	},
	{
		month: "T9",
		value: 7035e3,
		h: 38,
		label: "7,0tr"
	},
	{
		month: "T10",
		value: 13e5,
		h: 30
	},
	{
		month: "T11",
		value: 15e5,
		h: 34
	},
	{
		month: "T12",
		value: 11e5,
		h: 26
	}
];
var MONTHS = [
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
	"Tháng 12/2026"
];
function seedAttendance() {
	const map = {};
	for (const s of STUDENTS.filter((x) => x.className === "Eng 4 NC")) map[`ss1:${s.id}`] = "present";
	return map;
}
var useDash = create((set) => ({
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
	setPage: (page) => set({
		page,
		mobileOpen: false
	}),
	toggleCollapsed: () => set((s) => ({ collapsed: !s.collapsed })),
	setMobileOpen: (mobileOpen) => set({ mobileOpen }),
	setMonth: (month) => set({ month }),
	setQuery: (query) => set({ query }),
	openDialog: (dialog) => set({ dialog }),
	closeDialog: () => set({ dialog: { type: "none" } }),
	addStudent: (s) => set((st) => ({
		students: [...st.students, {
			...s,
			id: `s${Date.now()}`
		}],
		dialog: { type: "none" }
	})),
	addClass: (c) => set((st) => ({
		classes: [...st.classes, {
			...c,
			id: `c${Date.now()}`,
			students: 0
		}],
		dialog: { type: "none" }
	})),
	setAttend: (sessionId, studentId, status) => set((st) => ({ attendance: {
		...st.attendance,
		[`${sessionId}:${studentId}`]: status
	} })),
	markSessionTaken: (sessionId) => set((st) => ({
		sessions: st.sessions.map((x) => x.id === sessionId ? {
			...x,
			tagged: true
		} : x),
		dialog: { type: "none" }
	}))
}));
function sessionCounts(attendance, sessionId) {
	const rows = Object.entries(attendance).filter(([k]) => k.startsWith(`${sessionId}:`));
	return {
		present: rows.filter(([, v]) => v === "present").length,
		absent: rows.filter(([, v]) => v === "absent").length,
		excused: rows.filter(([, v]) => v === "excused").length
	};
}
function todayRevenue(attendance, students) {
	return sessionCounts(attendance, "ss1").present * 35e3;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatVnd(n) {
	return `${Math.round(n).toLocaleString("vi-VN")} đ`;
}
function formatShortVnd(n) {
	if (n >= 1e6) return `${(n / 1e6).toFixed(1).replace(".", ",")}tr`;
	if (n >= 1e3) return `${Math.round(n / 1e3)}k`;
	return `${n}đ`;
}
function GradientRing({ id, from, to, glow }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "kpi-ring",
		style: { filter: `drop-shadow(0 8px 12px ${glow ?? "rgba(255,120,90,0.28)"})` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 72 72",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: `g-${id}`,
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: from
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "55%",
							stopColor: to
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: from
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
					id: `f-${id}`,
					x: "-20%",
					y: "-20%",
					width: "140%",
					height: "140%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
						stdDeviation: "1.2",
						result: "b"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "36",
					cy: "36",
					r: "26",
					fill: "none",
					stroke: "rgba(232,236,246,0.95)",
					strokeWidth: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					className: "kpi-ring-arc",
					cx: "36",
					cy: "36",
					r: "26",
					fill: "none",
					stroke: `url(#g-${id})`,
					strokeWidth: "8.5",
					strokeLinecap: "round",
					strokeDasharray: "148 16",
					filter: `url(#f-${id})`
				})
			]
		})
	});
}
function KpiCard({ value, label, tone, wash, ringId, from, to, glow, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("glass card-lift rise flex items-center justify-between rounded-card px-5 py-5", wash),
		style: { animationDelay: delay },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("truncate font-extrabold tracking-tight", value.length > 8 ? "text-2xl" : "text-3xl", tone === "accent" ? "text-accent" : "text-mint"),
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-sm text-muted",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GradientRing, {
			id: ringId,
			from,
			to,
			glow
		})]
	});
}
function StatusPill({ status, count }) {
	const m = {
		present: {
			label: "Có mặt",
			cls: "bg-present text-present-fg"
		},
		absent: {
			label: "Vắng",
			cls: "bg-absent text-absent-fg"
		},
		excused: {
			label: "Có phép",
			cls: "bg-excuse text-excuse-fg"
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium", m.cls),
		children: [m.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			children: count
		})]
	});
}
function PillButton({ children, onClick, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("pill-glass inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.96]", className),
		children
	});
}
function Modal({ title, children, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/30 p-3 sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0",
			"aria-label": "Đóng",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass glass-strong rise relative w-full max-w-lg rounded-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-muted",
					onClick: onClose,
					children: "Đóng"
				})]
			}), children]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mb-3 block text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-muted",
			children: label
		}), children]
	});
}
var inputClass = "h-11 w-full rounded-xl bg-page px-3 text-sm text-ink outline-none ring-1 ring-line focus:ring-indigo";
var BAR_GLASS = [
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
	"bar-t12"
];
function Dialogs() {
	const dialog = useDash((s) => s.dialog);
	if (dialog.type === "student") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudentForm, {});
	if (dialog.type === "class") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassForm, {});
	if (dialog.type === "attendance") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttendanceForm, { sessionId: dialog.sessionId });
	return null;
}
function StudentForm() {
	const { closeDialog, addStudent, classes } = useDash();
	const [name, setName] = (0, import_react.useState)("");
	const [className, setClassName] = (0, import_react.useState)(classes[0]?.name ?? "Eng 4 NC");
	const [phone, setPhone] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		title: "Thêm học sinh",
		onClose: closeDialog,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				if (!name.trim()) return;
				addStudent({
					name: name.trim(),
					className,
					phone: phone || "—",
					fee: 35e3
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Họ tên",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						value: name,
						onChange: (e) => setName(e.target.value),
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Lớp",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: inputClass,
						value: className,
						onChange: (e) => setClassName(e.target.value),
						children: classes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c.name }, c.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Điện thoại",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						value: phone,
						onChange: (e) => setPhone(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "mt-2 h-11 w-full rounded-full bg-ink text-sm text-surface",
					children: "Lưu học sinh"
				})
			]
		})
	});
}
function ClassForm() {
	const { closeDialog, addClass } = useDash();
	const [name, setName] = (0, import_react.useState)("");
	const [level, setLevel] = (0, import_react.useState)("");
	const [schedule, setSchedule] = (0, import_react.useState)("");
	const [fee, setFee] = (0, import_react.useState)("35000");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		title: "Tạo lớp học",
		onClose: closeDialog,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				if (!name.trim()) return;
				addClass({
					name: name.trim(),
					level: level || name,
					schedule: schedule || "Chưa xếp lịch",
					feePerSession: Number(fee) || 35e3
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Tên lớp",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						value: name,
						onChange: (e) => setName(e.target.value),
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Mô tả",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						value: level,
						onChange: (e) => setLevel(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Lịch học",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						value: schedule,
						onChange: (e) => setSchedule(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Học phí / buổi",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						type: "number",
						value: fee,
						onChange: (e) => setFee(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "mt-2 h-11 w-full rounded-full bg-ink text-sm text-surface",
					children: "Tạo lớp"
				})
			]
		})
	});
}
function AttendanceForm({ sessionId }) {
	const { closeDialog, students, sessions, attendance, setAttend, markSessionTaken } = useDash();
	const session = sessions.find((s) => s.id === sessionId);
	const className = session?.className ?? CLASSES[0].name;
	const rows = (0, import_react.useMemo)(() => students.filter((s) => s.className === className), [students, className]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		title: `Điểm danh · ${className} ${session?.start ?? ""}`,
		onClose: closeDialog,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "max-h-80 space-y-2 overflow-auto pr-1",
			children: [rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "text-sm text-muted",
				children: "Chưa có học sinh trong lớp này."
			}), rows.map((s) => {
				const key = `${sessionId}:${s.id}`;
				const st = attendance[key] ?? "present";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-2 rounded-xl bg-page px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: [
							["present", "Có mặt"],
							["absent", "Vắng"],
							["excused", "Phép"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAttend(sessionId, s.id, id),
							className: cn("rounded-full px-2.5 py-1 text-xs", st === id ? id === "present" ? "bg-present text-present-fg" : id === "absent" ? "bg-absent text-absent-fg" : "bg-excuse text-excuse-fg" : "bg-surface text-muted"),
							children: label
						}, id))
					})]
				}, s.id);
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => markSessionTaken(sessionId),
			className: "mt-4 h-11 w-full rounded-full bg-ink text-sm text-surface",
			children: "Lưu điểm danh"
		})]
	});
}
function SessionCard({ session }) {
	const openDialog = useDash((s) => s.openDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "glass-inset card-lift rounded-2xl p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					session.start,
					" – ",
					session.end
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lớp học" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 font-semibold",
				children: session.className
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted",
				children: session.subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => openDialog({
					type: "attendance",
					sessionId: session.id
				}),
				className: "mt-2 rounded-full bg-present px-3 py-1 text-xs font-medium text-present-fg transition-transform duration-150 ease-out hover:brightness-95 active:scale-[0.96]",
				children: "Điểm danh"
			})
		]
	});
}
var CLASS_TONES = [
	"from-violet/20 to-indigo/10",
	"from-cyan/25 to-indigo/10",
	"from-pink/20 to-accent/10",
	"from-mint/20 to-cyan/10"
];
function Overview() {
	const { month, setMonth, openDialog, sessions, attendance, students, setPage } = useDash();
	const tagged = sessions.filter((s) => s.date === "2026-09-12" && s.tagged);
	const today = sessions.filter((s) => s.date === "2026-09-12" && s.id !== "ss1");
	const todayAll = sessions.filter((s) => s.date === TODAY);
	const morning = sessions.find((s) => s.id === "ss1");
	const tomorrow = sessions.filter((s) => s.date !== TODAY);
	const counts = sessionCounts(attendance, "ss1");
	const rev = todayRevenue(attendance, students);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "rise",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Thứ Bảy, 12 tháng 9, 2026"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl font-semibold",
					children: "Tổng quan"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "glass rise rounded-card p-5 sm:p-6",
				style: { animationDelay: "40ms" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-extrabold tracking-tight sm:text-3xl lg:whitespace-nowrap",
									children: "XIN CHÀO, LÂM PHẠM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "check-glow grid size-6 place-items-center rounded-full bg-pink text-surface",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-excuse px-2.5 py-1 text-xs font-medium text-gold shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-3" }), " Quản trị"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Bảng điều khiển học tập và lịch dạy cá nhân."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillButton, {
									onClick: () => openDialog({ type: "student" }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-4 text-muted" }), " Thêm học sinh"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillButton, {
									onClick: () => openDialog({ type: "class" }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4 text-muted" }), " Tạo lớp học"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillButton, {
									onClick: () => openDialog({
										type: "attendance",
										sessionId: "ss1"
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "size-4 text-muted" }), " Điểm danh"]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Chọn tháng"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: month,
								onChange: (e) => setMonth(e.target.value),
								className: "pill-glass h-11 appearance-none rounded-full py-2 pr-10 pl-4 text-sm",
								children: MONTHS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted" })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						value: String(180 + (students.length - 24)),
						label: "Học sinh đang theo học",
						tone: "accent",
						wash: "kpi-wash-peach",
						ringId: "r1",
						from: "#ff9a62",
						to: "#ff6aa8",
						glow: "rgba(255,122,70,0.35)",
						delay: "80ms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						value: formatVnd(7035e3),
						label: "Tổng học phí phát sinh",
						tone: "accent",
						wash: "kpi-wash-mint",
						ringId: "r2",
						from: "#7bf0c0",
						to: "#3ddc97",
						glow: "rgba(61,220,151,0.35)",
						delay: "140ms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						value: formatVnd(0),
						label: "Tổng học phí đã thu",
						tone: "mint",
						wash: "kpi-wash-cyan",
						ringId: "r3",
						from: "#7ae7ff",
						to: "#5b9dff",
						glow: "rgba(91,218,240,0.35)",
						delay: "200ms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						value: `0%`,
						label: "Tỷ lệ thu học phí",
						tone: "accent",
						wash: "kpi-wash-pink",
						ringId: "r4",
						from: "#ff8ec8",
						to: "#c084fc",
						glow: "rgba(255,92,168,0.35)",
						delay: "260ms"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rise rounded-card p-5",
					style: { animationDelay: "180ms" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: "Lịch dạy sắp tới"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPage("schedule"),
								className: "rounded-full bg-violet/15 px-3 py-1.5 text-xs font-medium text-nav transition-transform duration-150 ease-out active:scale-[0.96]",
								children: "Xem toàn bộ thời khoá biểu"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-inset mb-4 rounded-2xl p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium",
									children: "Lớp đã điểm danh hôm nay"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: "Tổng hợp theo lượt buổi đã phát sinh điểm danh."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "pill-glass rounded-full px-2 py-1 text-xs text-muted",
									children: [tagged.length, " lớp"]
								})]
							}), morning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap items-center justify-between gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: morning.className
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-muted",
									children: morning.start
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
											status: "present",
											count: counts.present
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
											status: "absent",
											count: counts.absent
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
											status: "excused",
											count: counts.excused
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs font-semibold tracking-wide text-muted",
							children: "HÔM NAY — THỨ 7 — 12/09"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3",
							children: today.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionCard, { session: s }, s.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs font-semibold tracking-wide text-muted",
							children: "NGÀY MAI — CHỦ NHẬT — 13/09"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
							children: tomorrow.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionCard, { session: s }, s.id))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rise rounded-card p-5",
						style: { animationDelay: "220ms" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: "Doanh thu dự kiến hôm nay"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right text-xs text-muted",
									children: ["Ngày xem", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "12/09/2026" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-4 overflow-hidden rounded-2xl bg-linear-to-br from-accent to-pink p-5 text-surface shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium tracking-wide text-surface/80",
										children: "TỔNG DỰ KIẾN"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl",
										children: formatVnd(rev)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-surface/85",
										children: [
											counts.present,
											" lượt có mặt · ",
											tagged.length,
											" buổi đã điểm danh"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 mb-2 text-xs font-semibold tracking-wide text-muted",
								children: "THEO LỚP"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2",
								children: todayAll.map((s, i) => {
									const fee = CLASSES.find((c) => c.name === s.className)?.feePerSession ?? 0;
									const sc = sessionCounts(attendance, s.id);
									const amount = s.tagged ? sc.present * fee : 0;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: `rounded-2xl bg-linear-to-br p-3 ring-1 ring-white/70 ${CLASS_TONES[i % CLASS_TONES.length]}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted",
													children: s.start
												}), s.tagged ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-present px-2 py-0.5 text-[10px] font-medium text-present-fg",
													children: "Đã điểm danh"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-white/50 px-2 py-0.5 text-[10px] text-muted",
													children: "Chưa"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 font-semibold",
												children: s.className
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-sm font-bold text-accent",
												children: amount ? formatVnd(amount) : "0đ"
											})
										]
									}, s.id);
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rise rounded-card p-5",
						style: { animationDelay: "280ms" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: "Doanh thu 12 tháng"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 mb-4 text-3xl font-extrabold",
								children: formatVnd(4473e4)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex flex-wrap gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill-glass rounded-xl px-3 py-1.5",
										children: "12 tháng"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill-glass rounded-xl px-3 py-1.5",
										children: "Biểu đồ cột"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill-glass rounded-xl px-3 py-1.5",
										children: "Năm 2026"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "chart-grid flex h-36 items-end justify-between gap-1.5 sm:gap-2",
								children: MONTHLY_REVENUE.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex h-full flex-1 flex-col items-center justify-end",
									children: [m.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 text-xs text-muted",
										children: m.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `bar-glass w-full max-w-7 ${BAR_GLASS[i]}`,
										style: {
											height: `${m.h}%`,
											animationDelay: `${80 + i * 40}ms`
										}
									})]
								}, m.month))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 grid grid-cols-12 text-center text-xs text-muted",
								children: MONTHLY_REVENUE.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.label ? formatShortVnd(m.value) : "0đ" }, m.month))
							})
						]
					})]
				})]
			})
		]
	});
}
var NAV = [
	{
		id: "overview",
		label: "Tổng quan",
		icon: LayoutGrid
	},
	{
		id: "schedule",
		label: "Lịch dạy",
		icon: CalendarDays
	},
	{
		id: "attendance",
		label: "Điểm danh",
		icon: ClipboardCheck
	},
	{
		id: "classes",
		label: "Lớp học",
		icon: GraduationCap
	},
	{
		id: "students",
		label: "Học sinh",
		icon: Users
	},
	{
		id: "fees",
		label: "Học phí",
		icon: Wallet
	}
];
function Sidebar() {
	const { page, setPage, collapsed, toggleCollapsed, mobileOpen, setMobileOpen } = useDash();
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex h-full flex-col", collapsed ? "w-[76px]" : "w-[232px]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-3 px-4 pt-5 pb-6", collapsed && "justify-center px-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-10 shrink-0 place-items-center rounded-xl bg-linear-to-br from-accent to-pink text-sm font-extrabold text-surface",
					children: "M"
				}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-sm font-semibold leading-tight",
						children: "Ms Ngân English"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted",
						children: "Quản lý lớp học"
					})]
				})]
			}),
			!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 pb-2 text-[11px] font-medium tracking-wider text-muted",
				children: "QUẢN LÝ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 space-y-1 px-3",
				children: NAV.map((item) => {
					const Icon = item.icon;
					const active = page === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPage(item.id),
						className: cn("flex h-11 w-full items-center gap-3 rounded-xl px-3 text-sm transition-all duration-150 ease-out", collapsed && "justify-center px-0", active ? "bg-linear-to-r from-violet/25 to-cyan/15 font-medium text-nav shadow-soft" : "text-muted hover:bg-white/40 hover:text-ink"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4 shrink-0",
							strokeWidth: 1.8
						}), !collapsed && item.label]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: toggleCollapsed,
					className: "mb-3 hidden h-10 items-center gap-2 px-3 text-sm text-muted lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, { className: "size-4" }), !collapsed && "Thu gọn"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center gap-3 rounded-2xl from-pink/15 to-violet/20 bg-linear-to-r p-3 glass-inset", collapsed && "justify-center"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-10 place-items-center overflow-hidden rounded-full bg-linear-to-br from-indigo to-pink text-xs font-bold text-surface",
						children: "LP"
					}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: "Lâm Phạm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-1 text-[11px] text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-3" }), " Quản trị"]
					})] })]
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "glass sticky top-0 hidden h-screen shrink-0 lg:block",
		children: body
	}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-40 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/30",
			onClick: () => setMobileOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass relative h-full w-[232px]",
			children: body
		})]
	})] });
}
function ScheduleView() {
	const sessions = useDash((s) => s.sessions);
	const today = sessions.filter((s) => s.date === "2026-09-12");
	const tomorrow = sessions.filter((s) => s.date === "2026-09-13");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "Lịch dạy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Thời khoá biểu 12–13/09/2026"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-card glass p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-semibold",
					children: "Thứ 7 — 12/09"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: today.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionCard, { session: s }, s.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-card glass p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-semibold",
					children: "Chủ nhật — 13/09"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: tomorrow.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionCard, { session: s }, s.id))
				})]
			})
		]
	});
}
function AttendanceView() {
	const { sessions, attendance, openDialog } = useDash();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold",
			children: "Điểm danh"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-card glass",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-page text-xs text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Lớp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Giờ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Ngày"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Sĩ số"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-4 py-3 font-medium" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: sessions.map((s) => {
					const c = sessionCounts(attendance, s.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-medium",
								children: s.className
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3 text-muted",
								children: [
									s.start,
									"–",
									s.end
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3 text-muted",
								children: [
									s.weekday,
									" ",
									s.date.slice(8),
									"/09"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
											status: "present",
											count: c.present
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
											status: "absent",
											count: c.absent
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
											status: "excused",
											count: c.excused
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-full bg-present px-3 py-1 text-xs font-medium text-present-fg",
									onClick: () => openDialog({
										type: "attendance",
										sessionId: s.id
									}),
									children: "Điểm danh"
								})
							})
						]
					}, s.id);
				}) })]
			})
		})]
	});
}
function ClassesView() {
	const { classes, openDialog } = useDash();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "Lớp học"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => openDialog({ type: "class" }),
				className: "h-11 rounded-full bg-ink px-4 text-sm text-surface",
				children: "Tạo lớp"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",
			children: classes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card glass p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-semibold",
						children: c.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: c.level
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-2 gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Học sinh"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-medium",
								children: c.students
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Học phí / buổi"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-medium",
								children: formatVnd(c.feePerSession)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: "Lịch"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: c.schedule })]
							})
						]
					})
				]
			}, c.id))
		})]
	});
}
function StudentsView() {
	const { students, query, setQuery, openDialog } = useDash();
	const rows = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return students.filter((s) => !q || s.name.toLowerCase().includes(q) || s.className.toLowerCase().includes(q));
	}, [students, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					children: "Học sinh"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => openDialog({ type: "student" }),
					className: "h-11 rounded-full bg-ink px-4 text-sm text-surface",
					children: "Thêm học sinh"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Tìm tên hoặc lớp",
					className: "pill-glass h-11 w-full rounded-full pr-4 pl-10 text-sm outline-none"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-card glass",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-page text-xs text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Họ tên"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Lớp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Điện thoại"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Học phí / buổi"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-medium",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: s.className
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								children: s.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: formatVnd(s.fee)
							})
						]
					}, s.id)) })]
				})
			})
		]
	});
}
function FeesView() {
	const students = useDash((s) => s.students);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "Học phí"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card glass p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted",
							children: "Phát sinh tháng 9"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-2xl font-extrabold text-accent",
							children: formatVnd(7035e3)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card glass p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted",
							children: "Đã thu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-2xl font-extrabold text-mint",
							children: formatVnd(0)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card glass p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted",
							children: "Công nợ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-2xl font-extrabold",
							children: formatVnd(7035e3)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-card glass",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-page text-xs text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Học sinh"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Lớp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Còn nợ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Trạng thái"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: students.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-medium",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: s.className
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: formatVnd(s.fee)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-accent",
								children: "Chưa thu"
							})
						]
					}, s.id)) })]
				})
			})
		]
	});
}
function Shell() {
	const { page, setMobileOpen } = useDash();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-shell relative flex min-h-screen overflow-x-hidden text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "orb top-[-80px] left-[12%] size-72 bg-accent/35",
						style: { animation: "orb-drift 14s ease-in-out infinite" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "orb top-[120px] right-[-60px] size-80 bg-indigo/30",
						style: { animation: "orb-drift 18s ease-in-out infinite reverse" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "orb bottom-[-40px] left-[40%] size-64 bg-pink/25",
						style: { animation: "orb-drift 16s ease-in-out infinite" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 px-4 pt-4 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "glass grid size-11 place-items-center rounded-xl",
						onClick: () => setMobileOpen(true),
						"aria-label": "Mở menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: "Ms Ngân English"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "px-4 py-5 sm:px-6 lg:px-8",
					children: [
						page === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {}),
						page === "schedule" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleView, {}),
						page === "attendance" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttendanceView, {}),
						page === "classes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassesView, {}),
						page === "students" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudentsView, {}),
						page === "fees" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeesView, {})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialogs, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {});
}
//#endregion
export { Home as component };
