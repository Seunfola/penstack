import { ShieldCheck } from "lucide-react";

type KycBadgeProps = {
  label: string;
  tone: "blue" | "teal";
};

export function KycBadge({ label, tone }: KycBadgeProps) {
  const classes =
    tone === "blue"
      ? "bg-[#E9F2FF] text-[#1C7BFF]"
      : "bg-[#E7FAF7] text-[#0AAE9B]";

  return (
    <span
      className={`inline-flex h-6 items-center gap-1 rounded-full px-3 text-[10px] font-semibold ${classes}`}
    >
      <ShieldCheck className="h-3 w-3" strokeWidth={2} />
      {label}
    </span>
  );
}
