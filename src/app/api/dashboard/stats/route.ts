import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    totalProducts: 156,
    todayOrders: 24,
    monthlyRevenue: 12540.75,
    lowStockProducts: 8,
  });
}
