"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import { TransactionRow } from "../molecules/transaction-row";

export function TransactionsSection() {
  const transactions = useDashboardStore((state) => state.recentTransactions);

  return (
    <section className="mt-5 rounded-[12px] border border-[#DDE4EE] bg-white px-5 py-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[36px] font-semibold leading-none tracking-[-0.02em] text-slate-900">
          Recent Transactions
        </h2>
        <button className="text-[14px] font-medium text-brand-blue" type="button">
          View All
        </button>
      </div>
      <div>
        {transactions.map((item) => (
          <TransactionRow
            key={item.id}
            icon={item.icon}
            avatarTone={item.avatarTone}
            title={item.title}
            subtitle={item.subtitle}
            amount={item.amount}
            amountTone={item.amountTone}
            status={item.status}
            statusTone={item.statusTone}
            countryCode={item.countryCode}
          />
        ))}
      </div>
    </section>
  );
}
