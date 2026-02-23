"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import { Icon } from "../atoms/icons";
import { QuickActions } from "../organisms/quick-actions";
import { Sidebar } from "../organisms/sidebar";
import { Topbar } from "../organisms/topbar";
import { TransactionsSection } from "../organisms/transactions-section";
import { WalletsSection } from "../organisms/wallets-section";

export function DashboardTemplate() {
  const isMobileSidebarOpen = useDashboardStore((state) => state.isMobileSidebarOpen);
  const setMobileSidebarOpen = useDashboardStore((state) => state.setMobileSidebarOpen);

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900">
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {isMobileSidebarOpen ? (
          <div className="fixed inset-0 z-40 flex lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/30"
              onClick={() => setMobileSidebarOpen(false)}
              aria-label="Close navigation backdrop"
            />
            <div className="relative z-10 h-dvh min-h-dvh">
              <button
                type="button"
                className="absolute right-3 top-3 z-20 rounded-full bg-white p-1 text-slate-600"
                onClick={() => setMobileSidebarOpen(false)}
                aria-label="Close navigation"
              >
                <Icon name="close" className="h-4 w-4" />
              </button>
              <Sidebar />
            </div>
          </div>
        ) : null}

        <main className="flex min-h-screen flex-1 flex-col">
          <Topbar />
          <div className="mx-auto w-full max-w-[1120px] px-4 py-8 md:px-6 lg:px-10">
            <h1 className="text-[42px] font-semibold leading-none tracking-[-0.02em] text-[#1E293B] md:text-[48px]">
              Welcome back, Joy!
            </h1>
            <p className="mt-2 text-[24px] leading-none tracking-[-0.02em] text-[#6B7A92] md:text-[28px]">
              Here&apos;s your financial overview
            </p>
            <div className="mt-7">
              <WalletsSection />
              <QuickActions />
              <TransactionsSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
