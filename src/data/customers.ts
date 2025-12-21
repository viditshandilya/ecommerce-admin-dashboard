export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  rating: number;
};

export const customers: Customer[] = [
  {
    id: "cust_001",
    name: "Alice Johnson",
    email: "alice@email.com",
    phone: "+1 234 567 890",
    rating: 4.6,
  },
  {
    id: "cust_002",
    name: "Bob Smith",
    email: "bob@email.com",
    phone: "+1 987 654 321",
    rating: 3.9,
  },
  {
    id: "cust_003",
    name: "Carol White",
    email: "carol@email.com",
    phone: "+1 456 789 123",
    rating: 4.8,
  },
];
