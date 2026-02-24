"use client";

import { Icon } from "./icons";
import type { IconName, NavSectionKey } from "@/domain/dashboard/types";

interface SidebarItemProps {
  icon: IconName;
  label: string;
  active?: boolean;
  section?: NavSectionKey;
  onClick?: () => void;
}

export function SidebarItem({
  icon,
  label,
  active,
  section,
  onClick,
}: SidebarItemProps) {
  const isCollapsed = label === "";

  const fontClass =
    section === "moneyTools" ? "font-inter" : "font-poppins";

  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-[10px] px-4 py-2.5 transition-all duration-200 outline-none ${
        active
          ? "bg-[#007AFF] text-white shadow-sm"
          : "text-[#4C5E7A] hover:bg-[#F2F6FF] hover:text-[#007AFF]"
      } ${isCollapsed ? "justify-center px-0" : ""}`}
    >
      <Icon
        name={icon}
        className={`h-4 w-4 shrink-0 transition-colors ${
          active
            ? "text-white"
            : "text-[#4C5E7A] group-hover:text-[#007AFF]"
        }`}
        strokeWidth={active ? 2.3 : 2}
      />

      {!isCollapsed && (
        <span
          className={`text-[13px] font-medium leading-tight ${fontClass}`}
        >
          {label}
        </span>
      )}
    </button>
  );
}