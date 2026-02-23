import type { IconName } from "@/domain/dashboard/types";
import { TransactionAvatar } from "../atoms/transaction-avatar";
import { Icon } from "../atoms/icons";

type TransactionRowProps = {
  icon: IconName;
  avatarTone: "mint" | "blue" | "rose";
  title: string;
  subtitle: string;
  amount: string;
  amountTone: "green" | "dark";
  status: string;
  statusTone: "muted" | "amber" | "red";
  countryCode?: string;
};

export function TransactionRow({
  icon,
  avatarTone,
  title,
  subtitle,
  amount,
  amountTone,
  status,
  statusTone,
  countryCode,
}: TransactionRowProps) {
  const amountClass = amountTone === "green" ? "text-[#20BF6B]" : "text-[#1F2937]";
  const statusClass = {
    muted: "text-[#72809A]",
    amber: "text-[#F2AB1D]",
    red: "text-[#EF4444]",
  }[statusTone];

  return (
    <div className="flex items-center justify-between py-[11px]">
      <div className="flex items-center gap-3">
        <TransactionAvatar icon={<Icon name={icon} className="h-4 w-4" strokeWidth={2} />} tone={avatarTone} />
        <div>
          <p className="text-[28px] font-medium leading-none tracking-[-0.02em] text-slate-900">{title}</p>
          <p className="mt-1 text-[24px] leading-none text-slate-muted tracking-[-0.02em]">
            {subtitle}
            {countryCode ? (
              <span className="ml-1 inline-flex h-4 min-w-5 items-center justify-center rounded bg-[#ECF2FA] px-1 text-[9px] font-semibold text-[#4C5E7A]">
                {countryCode}
              </span>
            ) : null}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-[32px] font-semibold leading-none tracking-[-0.02em] ${amountClass}`}>
          {amount}
        </p>
        <p className={`mt-1 text-[24px] leading-none tracking-[-0.02em] ${statusClass}`}>{status}</p>
      </div>
    </div>
  );
}
