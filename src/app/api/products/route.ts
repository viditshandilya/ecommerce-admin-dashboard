import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = 5;

  const allProducts = Array.from({ length: 20 }).map((_, i) => ({
    id: `prod_${i + 1}`,
    name: `Product ${i + 1}`,
    price: 100 + i,
    stock: 20,
    category: "General",
  }));

  const start = (page - 1) * limit;
  const paginated = allProducts.slice(start, start + limit);

  return NextResponse.json({
    products: paginated,
    total: allProducts.length,
    page,
    limit,
  });
}