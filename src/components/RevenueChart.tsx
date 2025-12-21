"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function RevenueChart() {
  const { data, isLoading } = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => {
      const res = await axios.get("/api/dashboard/revenue");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading chart...</p>;

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h3 className="font-bold mb-4">Monthly Revenue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
