// /app/api/url-exists/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    // Check if the URL exists by making a HEAD request
    const response = await fetch(url, { method: "HEAD" });
    if (response.status >= 200 && response.status < 400) {
      return NextResponse.json({ exists: true });
    } else {
      return NextResponse.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking URL:", error);
    return NextResponse.json(
      { error: "Invalid URL or URL does not exist" },
      { status: 400 },
    );
  }
}
