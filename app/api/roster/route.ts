import { NextResponse } from "next/server";
import { fetchRoster } from "@/lib/data";

export async function GET() {
  try {
    const roster = await fetchRoster();
    return NextResponse.json({ roster });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to load roster" },
      { status: 500 }
    );
  }
}
