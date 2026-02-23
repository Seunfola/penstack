"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import { ActionButton } from "../atoms/action-button";

export function QuickActions() {
  const quickActions = useDashboardStore((state) => state.quickActions);

  return (
    <section className="mt-5 rounded-[12px] border border-[#DDE4EE] bg-white p-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => (
          <ActionButton key={action.id} icon={action.icon} label={action.label} />
        ))}
      </div>
    </section>
  );
}
