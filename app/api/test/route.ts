import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  const db = await connectDB();

  return NextResponse.json({
    success: true,
    database: db.databaseName,
  });
}