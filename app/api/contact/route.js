// pages/api/submit.js
import { connectToDatabase } from "@/lib/db";
import Contact from "@/lib/models/contact";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    await connectToDatabase();
    const { firstname,lastname, email, message } = await req.json();
    const newContact = new Contact({ firstname,lastname, email, message });
    await newContact.save();
    return NextResponse.json({ success: true, message: 'Message submitted successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error submitting message' });
  }
}