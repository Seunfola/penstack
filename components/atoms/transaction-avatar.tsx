import { ReactNode } from "react";

type TransactionAvatarProps = {
  icon: ReactNode;
  tone: "mint" | "blue" | "rose";
};

export function TransactionAvatar({ icon, tone }: TransactionAvatarProps) {
  const classes = {
    mint: "bg-[#DBF5EE] text-[#09A987]",
    blue: "bg-[#E8F0FF] text-[#1A73E8]",
    rose: "bg-[#FFEDED] text-[#F34A4A]",
  }[tone];

  return (
    <span className={`flex h-10 w-10 items-center justify-center rounded-full ${classes}`}>
      <span className="h-4 w-4">{icon}</span>
    </span>
  );
}

