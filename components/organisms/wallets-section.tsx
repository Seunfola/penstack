"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import { Icon } from "../atoms/icons";
import { WalletCard } from "../molecules/wallet-card";

export function WalletsSection() {
  const wallets = useDashboardStore((state) => state.wallets);
  const visibleWalletIds = useDashboardStore((state) => state.visibleWalletIds);
  const toggleWalletVisibility = useDashboardStore((state) => state.toggleWalletVisibility);
  const toggleAllWalletsVisibility = useDashboardStore((state) => state.toggleAllWalletsVisibility);
  const allVisible = visibleWalletIds.length === wallets.length;

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[40px] font-semibold leading-none tracking-[-0.02em] text-slate-900">
          Your Wallets
        </h2>
        <button
          type="button"
          onClick={toggleAllWalletsVisibility}
          className="flex items-center gap-2 text-[15px] text-[#101828]"
          aria-label={allVisible ? "Hide all wallet balances" : "Show all wallet balances"}
        >
          <Icon name={allVisible ? "eye" : "eyeOff"} className="h-4 w-4" strokeWidth={2} />
          {allVisible ? "Hide" : "Show"}
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {wallets.map((wallet) => (
          <WalletCard
            key={wallet.id}
            walletId={wallet.id}
            countryCode={wallet.countryCode}
            currency={wallet.currency}
            amount={wallet.amountMasked} 
            actualAmount={wallet.actualAmount} 
            account={wallet.accountMasked}
            badge={wallet.verificationLabel}
            badgeTone={wallet.verificationTone}
            isBalanceVisible={visibleWalletIds.includes(wallet.id)}
            onToggleVisibility={toggleWalletVisibility}
          />
        ))}
      </div>
    </section>
  );
}
