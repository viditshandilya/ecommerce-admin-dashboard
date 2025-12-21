export const orders = Array.from({ length: 25 }).map((_, i) => ({
  id: `ord_${i + 1}`,
  customer: `Customer ${i + 1}`,
  amount: 500 + i * 50,
  status: i % 2 ? "Completed" : "Pending",
  date: "2025-01-21",
}));
