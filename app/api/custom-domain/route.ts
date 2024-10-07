// /app/api/custom-domain/route.ts

import { NextResponse } from "next/server";

// Define the insecure HTTP URL
const CUSTOM_DOMAIN_API_URL = process.env.NEXT_PUBLIC_SUBMIT_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    // Forward the request to the insecure HTTP API
    const response = await fetch(`${CUSTOM_DOMAIN_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit custom domain" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error submitting custom domain:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
