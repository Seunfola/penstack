"use client";

import { create } from "zustand";
import { navItems, quickActions, recentTransactions, wallets } from "@/domain/dashboard/data";

interface DashboardState {
  visibleWalletIds: string[];
  isMobileSidebarOpen: boolean;
  isSidebarCollapsed: boolean; // Add this
  toggleWalletVisibility: (walletId: string) => void;
  toggleAllWalletsVisibility: () => void;
  setMobileSidebarOpen: (isOpen: boolean) => void;
  setSidebarCollapsed: (isCollapsed: boolean) => void; // Add this
  navItems: typeof navItems;
  wallets: typeof wallets;
  quickActions: typeof quickActions;
  recentTransactions: typeof recentTransactions;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  visibleWalletIds: [],
  isMobileSidebarOpen: false,
  isSidebarCollapsed: false, 
  toggleWalletVisibility: (walletId) =>
    set((state) => {
      const isVisible = state.visibleWalletIds.includes(walletId);
      return {
        visibleWalletIds: isVisible
          ? state.visibleWalletIds.filter((id) => id !== walletId)
          : [...state.visibleWalletIds, walletId],
      };
    }),
  toggleAllWalletsVisibility: () =>
    set((state) => {
      const shouldShowAll = state.visibleWalletIds.length !== state.wallets.length;
      return {
        visibleWalletIds: shouldShowAll ? state.wallets.map((wallet) => wallet.id) : [],
      };
    }),
  setMobileSidebarOpen: (isOpen) => set({ isMobileSidebarOpen: isOpen }),
  setSidebarCollapsed: (isCollapsed) => set({ isSidebarCollapsed: isCollapsed }),
  navItems,
  wallets,
  quickActions,
  recentTransactions,
}));