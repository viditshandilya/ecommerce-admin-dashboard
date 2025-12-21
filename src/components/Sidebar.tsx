// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Products", href: "/dashboard/products" },
  { name: "Orders", href: "/dashboard/orders" },
  { name: "Customers", href: "/dashboard/customers" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

      <nav className="space-y-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`block px-3 py-2 rounded-lg text-sm font-medium
              ${
                pathname === l.href
                  ? "bg-black text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
          >
            {l.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
