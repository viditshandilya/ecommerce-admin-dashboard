"use client";

import ProductForm from "@/components/ProductForm";

import ProductTable from "@/components/ProductTable";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-slate-500">Manage your store products</p>
      </div>

      <ProductForm />
      <ProductTable />
    </div>
  );
}
