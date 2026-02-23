import type { IconName } from "@/domain/dashboard/types";
import { Icon } from "./icons";

type SidebarItemProps = {
  icon: IconName;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export function SidebarItem({ icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button
      className={`flex h-10 w-full items-center gap-3 rounded-[8px] px-4 text-left text-[16px] font-medium leading-none tracking-[-0.01em] transition ${
        active
          ? "bg-brand-blue text-white"
          : "text-slate-muted hover:bg-slate-100 hover:text-slate-700"
      }`}
      type="button"
      onClick={onClick}
    >
      <Icon name={icon} className="h-[20px] w-[20px]" strokeWidth={2} />
      <span>{label}</span>
    </button>
  );
}
