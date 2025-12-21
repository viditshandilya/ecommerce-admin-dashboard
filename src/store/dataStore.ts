// import { create } from "zustand";

// export type Product = {
//   id: string;
//   name: string;
//   price: number;
//   stock: number;
//   category: string;
//   image: string;
// };

// type DataState = {
//   products: Product[];
//   addProduct: (p: Product) => void;
//   deleteProduct: (id: string) => void;
// };

// export const useDataStore = create<DataState>((set) => ({
//   products: Array.from({ length: 30 }).map((_, i) => ({
//     id: `prod_${i + 1}`,
//     name: `Product ${i + 1}`,
//     price: 100 + i * 10,
//     stock: 5 + i,
//     category: i % 2 ? "Electronics" : "Fashion",
//     image: "/product.png",
//   })),

//   addProduct: (p) =>
//     set((s) => ({ products: [p, ...s.products] })),

//   deleteProduct: (id) =>
//     set((s) => ({
//       products: s.products.filter((p) => p.id !== id),
//     })),
// }));
import { create } from "zustand";

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
};

type DataState = {
  products: Product[];
  search: string;
  setSearch: (q: string) => void;
  addProduct: (p: Product) => void;
  deleteProduct: (id: string) => void;
};

export const useDataStore = create<DataState>((set) => ({
  products: Array.from({ length: 30 }).map((_, i) => ({
    id: `prod_${i + 1}`,
    name: `Product ${i + 1}`,
    price: 100 + i * 10,
    stock: 5 + i,
    category: i % 2 ? "Electronics" : "Fashion",
    image: "/product.png",
  })),

  search: "",
  setSearch: (q) => set({ search: q }),

  addProduct: (p) =>
    set((s) => ({ products: [p, ...s.products] })),

  deleteProduct: (id) =>
    set((s) => ({
      products: s.products.filter((p) => p.id !== id),
    })),
}));
