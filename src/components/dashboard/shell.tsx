import { Menu } from "lucide-react";
import { useDash } from "@/lib/store";
import { Dialogs } from "./dialogs";
import { Overview } from "./overview";
import { Sidebar } from "./sidebar";
import { AttendanceView, ClassesView, FeesView, ScheduleView, StudentsView } from "./views";

export function Shell() {
  const { page, setMobileOpen } = useDash();
  return (
    <div className="app-shell relative flex min-h-screen overflow-x-hidden text-ink">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="orb top-[-80px] left-[12%] size-72 bg-accent/35" style={{ animation: "orb-drift 14s ease-in-out infinite" }} />
        <span className="orb top-[120px] right-[-60px] size-80 bg-indigo/30" style={{ animation: "orb-drift 18s ease-in-out infinite reverse" }} />
        <span className="orb bottom-[-40px] left-[40%] size-64 bg-pink/25" style={{ animation: "orb-drift 16s ease-in-out infinite" }} />
      </div>
      <Sidebar />
      <div className="relative min-w-0 flex-1">
        <div className="flex items-center gap-3 px-4 pt-4 lg:hidden">
          <button
            type="button"
            className="glass grid size-11 place-items-center rounded-xl"
            onClick={() => setMobileOpen(true)}
            aria-label="Mở menu"
          >
            <Menu className="size-5" />
          </button>
          <div className="font-semibold">Ms Ngân English</div>
        </div>
        <main className="px-4 py-5 sm:px-6 lg:px-8">
          {page === "overview" && <Overview />}
          {page === "schedule" && <ScheduleView />}
          {page === "attendance" && <AttendanceView />}
          {page === "classes" && <ClassesView />}
          {page === "students" && <StudentsView />}
          {page === "fees" && <FeesView />}
        </main>
      </div>
      <Dialogs />
    </div>
  );
}
