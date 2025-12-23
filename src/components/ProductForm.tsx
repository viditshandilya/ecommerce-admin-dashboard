"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDataStore } from "@/store/dataStore";

type ProductFormData = {
  name: string;
  price: number;
  stock: number;
  category: string;
};

export default function ProductForm() {
  const { register, handleSubmit, reset, formState } =
    useForm<ProductFormData>();
  const { errors } = formState;

  const addProduct = useDataStore((s) => s.addProduct);

  // 🔴 IMPORTANT CHANGE: string ONLY (no null)
  const [imagePreview, setImagePreview] = useState<string>("");

  const onSubmit = (data: ProductFormData) => {
    addProduct({
      id: `prod_${Date.now()}`,
      name: data.name,
      price: Number(data.price),
      stock: Number(data.stock),
      category: data.category,
      image: imagePreview || "/product.png", // ✅ ALWAYS string
    });

    reset();
    setImagePreview("");
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 max-w-2xl">
      <h3 className="text-lg font-semibold mb-6">Add Product</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* IMAGE UPLOAD */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Image
          </label>

          <div className="flex items-center gap-4">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-20 h-20 rounded-lg object-cover border"
              />
            ) : (
              <div className="w-20 h-20 rounded-lg border flex items-center justify-center text-slate-400 text-sm">
                No Image
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              className="text-sm"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = () =>
                  setImagePreview(reader.result as string);
                reader.readAsDataURL(file);
              }}
            />
          </div>
        </div>

        {/* NAME */}
        <div>
          <label className="text-sm font-medium">Product Name</label>
          <input
            {...register("name", { required: "Product name is required" })}
            className="w-full mt-1 px-4 py-2 border rounded-lg"
            placeholder="Wireless Headphones Pro"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* PRICE + STOCK */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Price ($)</label>
            <input
              type="number"
              {...register("price", {
                required: "Price required",
                min: { value: 1, message: "Invalid price" },
              })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.price && (
              <p className="text-xs text-red-500 mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Stock</label>
            <input
              type="number"
              {...register("stock", {
                required: "Stock required",
                min: { value: 0, message: "Invalid stock" },
              })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.stock && (
              <p className="text-xs text-red-500 mt-1">
                {errors.stock.message}
              </p>
            )}
          </div>
        </div>

        {/* CATEGORY */}
        <div>
          <label className="text-sm font-medium">Category</label>
          <select
            {...register("category")}
            className="w-full mt-1 px-4 py-2 border rounded-lg bg-white dark:bg-slate-700"
          >
            <option>Electronics</option>
            <option>Wearables</option>
            <option>Accessories</option>
            <option>Home</option>
            <option>Sports</option>
          </select>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => {
              reset();
              setImagePreview("");
            }}
            className="px-4 py-2 text-sm rounded-lg border"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
