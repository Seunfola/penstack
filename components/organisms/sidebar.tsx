"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import type { NavSectionKey } from "@/domain/dashboard/types";
import { AlecerLogo } from "../atoms/alecer-logo";
import { Icon } from "../atoms/icons";
import { SidebarItem } from "../atoms/sidebar-item";

function SidebarSection({ title, section }: { title: string; section: NavSectionKey }) {
  const navItems = useDashboardStore((state) => state.navItems);
  const setMobileSidebarOpen = useDashboardStore((state) => state.setMobileSidebarOpen);
  const items = navItems.filter((item) => item.section === section);

  return (
    <section className="mt-7">
      <h2 className="px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6E7E98]">
        {title}
      </h2>
      <div className="mt-3 space-y-[6px]">
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={item.active}
            onClick={() => setMobileSidebarOpen(false)}
          />
        ))}
      </div>
    </section>
  );
}

export function Sidebar() {
  return (
    <aside className="flex h-screen w-[236px] flex-col border-r border-[#DDE4EE] bg-panel px-[10px] py-6">
      <div className="px-2">
        <AlecerLogo />
      </div>
      <div className="mt-5 h-px bg-[#DDE4EE]" />

      <SidebarSection title="Money Tools" section="moneyTools" />
      <SidebarSection title="Business" section="business" />
      <SidebarSection title="Support" section="support" />

      <div className="mt-auto px-2">
        <button
          type="button"
          className="mb-6 flex h-9 items-center gap-3 px-2 text-[16px] font-medium text-[#F43F5E]"
        >
          <Icon name="logout" className="h-5 w-5" strokeWidth={2} />
          Logout
        </button>
        <div className="rounded-[10px] bg-brand-blue p-4 text-white">
          <div className="h-7 w-7 rounded-md border border-white/70 text-center text-[15px] leading-7">
            ?
          </div>
          <p className="mt-4 text-[15px] font-medium leading-5">
            Got some questions, inquiries or need help?
          </p>
          <a href="#" className="mt-4 block text-[11px] text-[#CDE2FF] underline">
            Visit AlecerPay Help Desk Here
          </a>
        </div>
      </div>
    </aside>
  );
}
