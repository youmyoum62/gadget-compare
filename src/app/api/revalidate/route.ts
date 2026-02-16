import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const path = searchParams.get("path") || "/";

    // Check secret
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    // Revalidate specific path or all paths
    if (path === "all") {
      revalidatePath("/", "layout");
      revalidatePath("/products", "page");
      revalidatePath("/rankings", "page");
      revalidatePath("/search", "page");
      revalidatePath("/categories", "page");

      return NextResponse.json({
        revalidated: true,
        paths: ["/", "/products", "/rankings", "/search", "/categories"],
        now: Date.now()
      });
    }

    revalidatePath(path, "page");

    return NextResponse.json({
      revalidated: true,
      path,
      now: Date.now()
    });
  } catch (error) {
    return NextResponse.json({
      error: "Failed to revalidate",
      message: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}

// Allow GET requests for easy testing
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Debug info
  const envSecret = process.env.REVALIDATION_SECRET;

  if (!secret || secret !== envSecret) {
    return NextResponse.json({
      error: "Invalid secret",
      usage: "GET /api/revalidate?secret=YOUR_SECRET&path=/products",
      debug: {
        hasEnvSecret: !!envSecret,
        envSecretLength: envSecret?.length || 0,
        receivedSecretLength: secret?.length || 0,
        secretsMatch: secret === envSecret,
      }
    }, { status: 401 });
  }

  return POST(request);
}
