import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { month: "Jan", revenue: 4200 },
    { month: "Feb", revenue: 3800 },
    { month: "Mar", revenue: 5100 },
    { month: "Apr", revenue: 6200 },
    { month: "May", revenue: 7400 },
  ]);
}
