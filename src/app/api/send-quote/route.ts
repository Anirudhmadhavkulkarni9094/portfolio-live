import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "\"":
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return character;
    }
  });
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
    }

    const { name, email, phone, details } = body as Record<string, unknown>;
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof details !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !details.trim()
    ) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    const normalizedPhone = phone.trim();
    const normalizedDetails = details.trim();
    if (!/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(normalizedEmail)) {
      return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    }

    const safeName = escapeHtml(normalizedName);
    const safeEmail = escapeHtml(normalizedEmail);
    const safePhone = escapeHtml(normalizedPhone);
    const safeDetails = escapeHtml(normalizedDetails);

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // ✅ 1. Email to Admin (You)
    await transporter.sendMail({
      from: `"Portfolio Quote" <${process.env.EMAIL_ID}>`,
      to: "anirudh.kulkarni.dev@gmail.com",
      subject: `New Quote Request from ${normalizedName.replace(/[\r\n]/g, " ")}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Project Details:</strong> ${safeDetails}</p>
      `,
    });

    // ✅ 2. Confirmation Email to the User
    await transporter.sendMail({
      from: `"Anirudh Kulkarni" <${process.env.EMAIL_ID}>`,
      to: normalizedEmail,
      subject: `Quote Request Confirmation`,
      html: `
        <h2>Thank you for contacting us, ${safeName}!</h2>
        <p>We have received your request and will get back to you within <strong>24 hours</strong>.</p>
        <hr />
        <h3>Your Details:</h3>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Project Requirements:</strong></p>
        <p>${safeDetails}</p>
        <br />
        <p style="color:#FF914D;">Anirudh Kulkarni - Full Stack Developer</p>
      `,
    });

    return NextResponse.json({ message: "Your request has been sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}
