// app/api/testdb/route.ts
import { NextResponse } from "next/server";
import ExcuteQuery from "../db";

export async function GET() {
  try {
    // simple, low-impact query to test connectivity
    const rows = await ExcuteQuery("SELECT TOP (1) 1 AS ok");
    return NextResponse.json({ ok: true, rows });
  } catch (err) {
    console.error("DB test error:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}