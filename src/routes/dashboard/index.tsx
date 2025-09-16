import { DashboardLayout } from "@/components/dashboard-layout";
import { StatsCards } from "@/components/stats-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <StatsCards />
      </div>
    </DashboardLayout>
  );
}
