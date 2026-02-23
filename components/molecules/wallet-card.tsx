import { Icon } from "../atoms/icons";
import { KycBadge } from "../atoms/kyc-badge";

type WalletCardProps = {
  walletId: string;
  countryCode: string;
  currency: string;
  amount: string;
  account: string;
  badge: string;
  badgeTone: "blue" | "teal";
  isBalanceVisible: boolean;
  onToggleVisibility: (walletId: string) => void;
};

export function WalletCard({
  walletId,
  countryCode,
  currency,
  amount,
  account,
  badge,
  badgeTone,
  isBalanceVisible,
  onToggleVisibility,
}: WalletCardProps) {
  return (
    <article className="h-[164px] rounded-[12px] border border-card-border bg-white px-4 py-3 shadow-[0_1px_2px_rgba(16,24,40,0.06)]">
      <div className="flex items-start justify-between">
        <span />
        <KycBadge label={badge} tone={badgeTone} />
      </div>
      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-[14px] text-slate-muted">
            <span className="mr-2 inline-flex h-5 min-w-7 items-center justify-center rounded bg-[#ECF2FA] px-1 text-[10px] font-semibold text-[#4C5E7A]">
              {countryCode}
            </span>
            {currency}
          </p>
          <p className="mt-1 text-[30px] font-semibold leading-none tracking-[-0.02em] text-slate-900">
            {isBalanceVisible ? amount.replace(/\*/g, "0") : amount}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onToggleVisibility(walletId)}
          className="text-slate-muted hover:text-slate-700"
          aria-label={isBalanceVisible ? `Hide ${currency} wallet balance` : `Show ${currency} wallet balance`}
        >
          <Icon
            name={isBalanceVisible ? "eye" : "eyeOff"}
            className="h-5 w-5"
            strokeWidth={1.9}
          />
        </button>
      </div>
      <div className="mt-4 text-[12px] font-medium text-[#9BA8BD]">
        {account}
        <Icon name="copy" className="ml-1 inline h-3.5 w-3.5 text-brand-blue" strokeWidth={2.2} />
      </div>
    </article>
  );
}
