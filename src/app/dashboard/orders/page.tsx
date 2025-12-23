import Link from "next/link";
import { orders } from "@/data/orders";
import { customers } from "@/data/customers";

export default function OrdersPage() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {orders.map((o) => {
        const c = customers.find((c) => c.name === o.customer);

        return (
          <div
            key={o.id}
            className="flex justify-between items-center border-b py-3 text-sm"
          >
            <span className="font-medium">{o.id}</span>

            {c ? (
              <Link
                href={`/dashboard/customers/${c.id}`}
                className="text-blue-600 hover:underline"
              >
                {c.name}
              </Link>
            ) : (
              <span className="text-slate-500">{o.customer}</span>
            )}

            <span className="font-semibold">${o.amount}</span>
          </div>
        );
      })}
    </div>
  );
}
