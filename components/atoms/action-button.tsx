import type { IconName } from "@/domain/dashboard/types";
import { Icon } from "./icons";

type ActionButtonProps = {
  icon: IconName;
  label: string;
  onClick?: () => void;
};

export function ActionButton({ icon, label, onClick }: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[74px] w-full items-center justify-center rounded-[12px] border border-brand-blue text-brand-blue"
    >
      <span className="flex flex-col items-center gap-1">
        <Icon name={icon} className="h-[16px] w-[16px]" strokeWidth={2} />
        <span className="text-[24px] font-medium leading-none tracking-[-0.02em]">{label}</span>
      </span>
    </button>
  );
}
