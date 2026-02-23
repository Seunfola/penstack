"use client";

import { create } from "zustand";
import { navItems, quickActions, recentTransactions, wallets } from "@/domain/dashboard/data";

interface DashboardState {
  isBalanceVisible: boolean;
  isMobileSidebarOpen: boolean;
  toggleBalanceVisibility: () => void;
  setMobileSidebarOpen: (isOpen: boolean) => void;
  navItems: typeof navItems;
  wallets: typeof wallets;
  quickActions: typeof quickActions;
  recentTransactions: typeof recentTransactions;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  isBalanceVisible: false,
  isMobileSidebarOpen: false,
  toggleBalanceVisibility: () =>
    set((state) => ({ isBalanceVisible: !state.isBalanceVisible })),
  setMobileSidebarOpen: (isOpen) => set({ isMobileSidebarOpen: isOpen }),
  navItems,
  wallets,
  quickActions,
  recentTransactions,
}));
