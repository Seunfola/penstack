import type { LucideProps } from "lucide-react";
import {
  ArrowDownToLine,
  ArrowLeftRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  Copy,
  CreditCard,
  FileText,
  Landmark,
  LayoutGrid,
  LogOut,
  Menu,
  Plus,
  Send,
  Settings,
  Wallet,
  X,
  EyeOff,
} from "lucide-react";
import type { IconName } from "@/domain/dashboard/types";

const iconMap = {
  dashboard: LayoutGrid,
  wallet: Wallet,
  convert: ArrowLeftRight,
  send: Send,
  receive: ArrowDownToLine,
  withdraw: Landmark,
  cards: CreditCard,
  invoices: FileText,
  analytics: BarChart3,
  settings: Settings,
  logout: LogOut,
  notification: Bell,
  eyeOff: EyeOff,
  plus: Plus,
  arrowUpRight: ArrowUpRight,
  document: FileText,
  check: Check,
  copy: Copy,
  menu: Menu,
  close: X,
} as const;

type IconProps = LucideProps & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const Comp = iconMap[name];
  return <Comp {...props} />;
}
