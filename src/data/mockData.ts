export const products = Array.from({ length: 30 }).map((_, i) => ({
  id: `prod_${String(i + 1).padStart(3, "0")}`,
  name: `Product ${i + 1}`,
  price: 49 + i * 3,
  stock: 5 + (i * 7) % 40,
  category: i % 2 === 0 ? "Electronics" : "Fashion",
  image: `https://picsum.photos/seed/${i}/80/80`,
}));

export const customers = [
  {
    id: "cust_001",
    name: "Alice Johnson",
    email: "alice@email.com",
    rating: 4.5,
    status: "active",
  },
  {
    id: "cust_002",
    name: "Bob Smith",
    email: "bob@email.com",
    rating: 3.8,
    status: "inactive",
  },
  {
    id: "cust_003",
    name: "Carol White",
    email: "carol@email.com",
    rating: 4.9,
    status: "active",
  },
];

export const orders = [
  {
    id: "ORD-001",
    customer: "Alice Johnson",
    total: 299.98,
    status: "Delivered",
  },
  {
    id: "ORD-002",
    customer: "Bob Smith",
    total: 159.99,
    status: "Processing",
  },
];
