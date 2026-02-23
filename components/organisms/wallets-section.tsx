"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import { Icon } from "../atoms/icons";
import { WalletCard } from "../molecules/wallet-card";

export function WalletsSection() {
  const wallets = useDashboardStore((state) => state.wallets);
  const isBalanceVisible = useDashboardStore((state) => state.isBalanceVisible);
  const toggleBalanceVisibility = useDashboardStore((state) => state.toggleBalanceVisibility);

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[40px] font-semibold leading-none tracking-[-0.02em] text-slate-900">
          Your Wallets
        </h2>
        <button
          type="button"
          onClick={toggleBalanceVisibility}
          className="flex items-center gap-2 text-[15px] text-[#101828]"
          aria-label={isBalanceVisible ? "Hide wallet balances" : "Show wallet balances"}
        >
          <Icon name="eyeOff" className="h-4 w-4" strokeWidth={2} />
          {isBalanceVisible ? "Hide" : "Show"}
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {wallets.map((wallet) => (
          <WalletCard
            key={wallet.id}
            countryCode={wallet.countryCode}
            currency={wallet.currency}
            amount={wallet.amountMasked}
            account={wallet.accountMasked}
            badge={wallet.verificationLabel}
            badgeTone={wallet.verificationTone}
            isBalanceVisible={isBalanceVisible}
          />
        ))}
      </div>
    </section>
  );
}
