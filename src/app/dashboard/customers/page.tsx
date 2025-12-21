"use client";

import Link from "next/link";
import { customers } from "@/data/customers";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Customers</h1>

      <div className="bg-white rounded-xl shadow divide-y">
        {customers.map((c) => (
          <Link
            key={c.id}
            href={`/dashboard/customers/${c.id}`}
            className="block p-4 hover:bg-slate-50"
          >
            <div className="font-medium">{c.name}</div>
            <div className="text-sm text-slate-500">{c.email}</div>
            <div className="text-sm">⭐ {c.rating}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
