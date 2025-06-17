import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Subscriber from "@/lib/models/Subscriber";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { subject, content, imageUrl } = await req.json();

    if (!subject || !content) {
      return NextResponse.json(
        { message: "Subject and content are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const subscribers = await Subscriber.find({});
    if (!subscribers.length) {
      return NextResponse.json(
        { message: "No subscribers found." },
        { status: 404 }
      );
    }

    // Setup mail transporter (use environment variables in real project)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    for (const subscriber of subscribers) {
      await transporter.sendMail({
        from: `"Newsletter" <${process.env.EMAIL_USERNAME}>`,
        to: subscriber.email,
        subject,
        html: `
          <div style="font-family: sans-serif; line-height: 1.5;">
            <h2>${subject}</h2>
            ${
              imageUrl
                ? `<img src="${imageUrl}" style="max-width:100%;" />`
                : ""
            }
            <p>${content}</p>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { message: "Newsletter sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Send error:", err); // ← LOG this for debugging
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
