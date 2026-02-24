export type IconName =
  | "dashboard"
  | "wallet"
  | "convert"
  | "send"
  | "receive"
  | "withdraw"
  | "cards"
  | "invoices"
  | "analytics"
  | "settings"
  | "logout"
  | "notification"
  | "eye"
  | "eyeOff"
  | "plus"
  | "arrowUpRight"
  | "document"
  | "check"
  | "copy"
  | "menu"
  | "user"
  | "close";

export type NavSectionKey = "moneyTools" | "business" | "support";

export interface NavItem {
  id: string;
  label: string;
  icon: IconName;
  section: NavSectionKey;
  active?: boolean;
}

export interface Wallet {
  id: string;
  currency: string;
  countryCode: string;
  amountMasked: string;
  actualAmount: string;
  accountMasked: string;
  verificationLabel: string;
  verificationTone: "blue" | "teal";
}

export interface QuickAction {
  id: string;
  label: string;
  icon: IconName;
}

export interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  amountTone: "green" | "dark";
  status: string;
  statusTone: "muted" | "amber" | "red";
  avatarTone: "mint" | "blue" | "rose";
  icon: IconName;
  countryCode?: string;
}
