"use client";

import { useDataStore } from "@/store/dataStore";

export default function ProductTable() {
  const { products, search, deleteProduct } = useDataStore();

  // 🔍 SEARCH FILTER
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  // 📤 EXPORT CSV
  const exportCSV = () => {
    const csv = [
      ["ID", "Name", "Price", "Stock", "Category"],
      ...filtered.map((p) => [
        p.id,
        p.name,
        p.price,
        p.stock,
        p.category,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "products.csv";
    a.click();
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Products</h3>

        <button
          onClick={exportCSV}
          className="px-3 py-1 text-sm border rounded-lg hover:bg-slate-100"
        >
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b text-slate-600">
            <tr>
              <th className="p-2 text-left">Image</th>
              <th className="text-left">Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-6 text-slate-400"
                >
                  No products found
                </td>
              </tr>
            )}

            {filtered.map((p) => (
              <tr
                key={p.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-2">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 rounded object-cover border"
                  />
                </td>
                <td className="font-medium">{p.name}</td>
                <td>{p.category}</td>
                <td>${p.price}</td>
                <td>{p.stock}</td>
                <td className="text-right">
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
