"use client";

import Image from "next/image";
import { useDashboardStore } from "@/stores/dashboard-store";
import type { NavSectionKey } from "@/domain/dashboard/types";
import { Icon } from "../atoms/icons";
import { SidebarItem } from "../atoms/sidebar-item";

function SidebarSection({ 
  title, 
  section, 
  isCollapsed 
}: { 
  title: string; 
  section: NavSectionKey; 
  isCollapsed: boolean 
}) {
  const navItems = useDashboardStore((state) => state.navItems);
  const setMobileSidebarOpen = useDashboardStore((state) => state.setMobileSidebarOpen);
  const items = navItems.filter((item) => item.section === section);

  return (
    <section className="mt-7">
      {!isCollapsed && (
        <h2 className="px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6E7E98]">
          {title}
        </h2>
      )}
      <div className={`mt-3 space-y-[6px] ${isCollapsed ? "flex flex-col items-center" : ""}`}>
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={isCollapsed ? "" : item.label}
            active={item.active}
            section={section} 
            onClick={() => setMobileSidebarOpen(false)}
          />
        ))}
      </div>
    </section>
  );
}

export function Sidebar() {
  const isCollapsed = useDashboardStore((state) => state.isSidebarCollapsed);
  const setCollapsed = useDashboardStore((state) => state.setSidebarCollapsed);
  const setMobileSidebarOpen = useDashboardStore((state) => state.setMobileSidebarOpen);

  return (
    <aside 
      className={`flex h-dvh flex-col border-r border-[#DDE4EE] bg-panel py-6 transition-all duration-300 ${
        isCollapsed ? "w-[80px] px-2" : "w-[236px] px-[10px]"
      }`}
    >
      <div className="flex items-center justify-between px-2">
        {!isCollapsed && (
          <div className="relative h-10 w-28">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              fill 
              className="object-contain" 
              priority 
            />
          </div>
        )}
        
        <button
          type="button"
          onClick={() => setCollapsed(!isCollapsed)}
          className={`hidden lg:flex h-8 w-8 items-center justify-center rounded-md hover:bg-slate-100 transition-colors ${
            isCollapsed ? "mx-auto" : ""
          }`}
        >
          <Image 
            src="/menu.png" 
            alt="Toggle Menu" 
            width={20} 
            height={20} 
          />
        </button>

        <button
          type="button"
          onClick={() => setMobileSidebarOpen(false)}
          className="flex lg:hidden h-8 w-8 items-center justify-center text-[#6B7280]"
        >
          <Icon name="close" className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>

      <div className="mt-5 h-px bg-[#DDE4EE]" />

      <SidebarSection title="Money Tools" section="moneyTools" isCollapsed={isCollapsed} />
      <SidebarSection title="Business" section="business" isCollapsed={isCollapsed} />
      <SidebarSection title="Support" section="support" isCollapsed={isCollapsed} />

      <div className="mt-auto px-2">
        <button
          type="button"
          className={`mb-6 flex h-9 items-center gap-3 px-2 text-[16px] font-medium text-[#F43F5E] ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <Icon name="logout" className="h-5 w-5" strokeWidth={2} />
          {!isCollapsed && "Logout"}
        </button>

        {!isCollapsed && (
          <div className="rounded-[10px] bg-brand-blue p-4 text-white">
<Icon
  name="user"
  className="h-5 w-5 rounded-md border border-white/70 p-1 text-white"
/>            <p className="mt-4 text-[15px] font-medium leading-5 font-poppins">
              Got some questions, inquiries or need help?
            </p>
            <a href="#" className="mt-4 block text-[11px] text-[#CDE2FF] underline font-poppins">
              Visit AlecerPay Help Desk Here
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}