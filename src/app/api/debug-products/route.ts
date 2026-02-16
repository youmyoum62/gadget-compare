import { getSupabase } from "@/lib/supabase/client";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = getSupabase();

  if (!supabase) {
    return NextResponse.json({ error: "Supabase client not available" }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("products")
    .select("id, title, asin, affiliate_url, image_url_large, image_url_medium, image_url_small, is_active")
    .eq("is_active", true)
    .limit(10);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    count: data?.length ?? 0,
    products: data
  }, { status: 200 });
}
