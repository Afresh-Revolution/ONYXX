import { NextResponse } from "next/server";
import { fetchEditorial } from "@/lib/data";

export async function GET() {
  try {
    const editorial = await fetchEditorial();
    return NextResponse.json({ editorial });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to load editorial" },
      { status: 500 }
    );
  }
}
