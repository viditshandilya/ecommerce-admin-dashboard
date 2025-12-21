"use client";

import { useDataStore } from "@/store/dataStore";
import RevenueChart from "@/components/RevenueChart";

export default function DashboardPage() {
  const products = useDataStore((s) => s.products);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Products" value={products.length.toString()} />
        <StatCard title="Today Orders" value="24" />
        <StatCard title="Monthly Revenue" value="$12,540.75" />
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-semibold mb-4">Monthly Revenue</h3>
        <RevenueChart />
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  );
}
