import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import AdminCode from "@/lib/models/AdminCode";

export async function POST(req) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json(
        { message: "Code is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const isValid = await AdminCode.findOne({ code });
    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid admin code" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Access granted" });
  } catch (err) {
    console.error("Admin code verify error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
