"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import { Icon } from "../atoms/icons";

export function Topbar() {
  const setMobileSidebarOpen = useDashboardStore((state) => state.setMobileSidebarOpen);

  return (
    <header className="flex h-[72px] items-center justify-between border-b border-[#E4E8EF] bg-white px-4 md:px-8">
      <button
        type="button"
        className="text-[#6B7280] lg:hidden"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open navigation"
      >
        <Icon name="menu" className="h-5 w-5" strokeWidth={2} />
      </button>

      <div className="ml-auto flex items-center gap-6">
        <button type="button" className="relative text-[#6B7280]" aria-label="Open notifications">
          <Icon name="notification" className="h-5 w-5" strokeWidth={1.9} />
          <span className="absolute -right-0.5 top-0 h-2 w-2 rounded-full bg-[#F24E4E]" />
        </button>
        <button type="button" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_20%,#f8d9b6,#7b4b32)] text-[11px] font-semibold text-white">
            JK
          </span>
          <span className="hidden text-[15px] font-medium text-[#475569] sm:inline">Joy Keleb</span>
        </button>
      </div>
    </header>
  );
}
