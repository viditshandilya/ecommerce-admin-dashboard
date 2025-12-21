import Link from "next/link";
import { orders } from "@/data/orders";
import { customers } from "@/data/customers";

export default function OrdersPage() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {orders.map(o => {
        const c = customers.find(c => c.id === o.customerId);
        return (
          <div key={o.id} className="flex justify-between border-b py-3">
            <span>{o.id}</span>
            <Link
              href={`/dashboard/customers/${c?.id}`}
              className="text-blue-600 hover:underline"
            >
              {c?.name}
            </Link>
            <span>${o.total}</span>
          </div>
        );
      })}
    </div>
  );
}
