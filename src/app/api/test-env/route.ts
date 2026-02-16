import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasSecret: !!process.env.REVALIDATION_SECRET,
    secretLength: process.env.REVALIDATION_SECRET?.length || 0,
    firstChars: process.env.REVALIDATION_SECRET?.substring(0, 5) || "none",
  });
}
