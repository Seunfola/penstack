import { Icon } from "../atoms/icons";
import { KycBadge } from "../atoms/kyc-badge";
import ReactCountryFlag from "react-country-flag";

type WalletCardProps = {
  walletId: string;
  countryCode: string; 
  currency: string;
  amount: string;        
  actualAmount: string; 
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
  actualAmount,
  account,
  badge,
  badgeTone,
  isBalanceVisible,
  onToggleVisibility,
}: WalletCardProps) {
  return (
    <article className="h-[194px] rounded-[12px] border border-card-border bg-white px-4 py-3 relative">
      <div className="flex items-start justify-between">
        <span />
        <KycBadge label={badge} tone={badgeTone} />
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-[14px] text-slate-muted flex items-center gap-1">
            <span className="inline-flex h-5 w-7 items-center justify-center rounded bg-[#65758B] p-[2px]">
              <ReactCountryFlag
                countryCode={countryCode}
                svg
                style={{
                  width: "28px",
                  height: "20px",
                  objectFit: "cover",
                  borderRadius: "1px",  
                }}
                title={countryCode}
              />
            </span>
            <span>{currency}</span>
          </p>
          <p className="mt-4 text-[30px] font-semibold leading-none tracking-[-0.02em]">
            {isBalanceVisible ? actualAmount : amount}
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
            className="h-4 w-4"
            strokeWidth={1.9}
          />
        </button>
      </div>

      <div className="mt-4 text-[12px] font-medium text-[#8B96A1]">
        {account}
        <Icon name="copy" className="ml-1 inline h-3.5 w-3.5 text-brand-blue" strokeWidth={2.2} />
      </div>
    </article>
  );
}