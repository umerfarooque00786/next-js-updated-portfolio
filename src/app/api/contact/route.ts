import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "umerfarooqkk4@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!email || !message || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: "Email and message cannot be empty." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email not configured. Add RESEND_API_KEY in .env (see VERCEL_DEPLOY.md)." },
        { status: 503 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Portfolio contact from ${name ? name.trim() : trimmedEmail}`,
      replyTo: trimmedEmail,
      text: `Name: ${name ?? "(not provided)"}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <p><strong>Name:</strong> ${name ? name.trim() : "(not provided)"}</p>
        <p><strong>Email:</strong> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a></p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${trimmedMessage.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
