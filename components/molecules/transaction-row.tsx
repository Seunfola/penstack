"use client";

import type { IconName } from "@/domain/dashboard/types";
import { TransactionAvatar } from "../atoms/transaction-avatar";
import { Icon } from "../atoms/icons";
import ReactCountryFlag from "react-country-flag";

type TransactionRowProps = {
  icon: IconName;
  avatarTone: "mint" | "blue" | "rose";
  title: string;
  subtitle: string;
  amount: string;
  amountTone: "green" | "dark";
  status: string;
  statusTone: "muted" | "amber" | "red";
  countryCode?: string; // "US", "NG", "GB"
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
  const amountClass =
    amountTone === "green" ? "text-[#16A34A]" : "text-[#111827]";

  const statusClass = {
    muted: "text-[#64748B]",   // slate-500
    amber: "text-[#F59E0B]",   // amber-500
    red: "text-[#EF4444]",     // red-500
  }[statusTone];

  return (
    <div className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
      
      <div className="flex items-center gap-4">
        
        <div className="relative">
          
          <div className="h-10 w-10">
            <TransactionAvatar
              icon={
                <Icon
                  name={icon}
                  className="h-5 w-5"
                  strokeWidth={2.2}
                />
              }
              tone={avatarTone}
            />
          </div>

         {countryCode && (
  <div className="absolute right-0 bottom-0 translate-x-1">
    <ReactCountryFlag
      countryCode={countryCode}
      svg
      style={{
        width: "16px",
        height: "11px", 
        objectFit: "cover",
        borderRadius: "2px",
      }}
    />
  </div>
)}
        </div>

        <div>
          <p className="text-[15px] font-semibold text-slate-900 leading-tight">
            {title}
          </p>
          <p className="mt-1 text-[13px] font-medium text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-right">
        <p
          className={`text-[15px] font-semibold tracking-tight ${amountClass}`}
        >
          {amount}
        </p>
        <p
          className={`mt-1 text-[12px] font-medium capitalize ${statusClass}`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}