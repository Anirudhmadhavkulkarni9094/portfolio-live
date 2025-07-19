import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, details } = await req.json();

    if (!name || !email || !phone || !details) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

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
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Details:</strong> ${details}</p>
      `,
    });

    // ✅ 2. Confirmation Email to the User
    await transporter.sendMail({
      from: `"Anirudh Kulkarni" <${process.env.EMAIL_ID}>`,
      to: email,
      subject: `Quote Request Confirmation`,
      html: `
        <h2>Thank you for contacting us, ${name}!</h2>
        <p>We have received your request and will get back to you within <strong>24 hours</strong>.</p>
        <hr />
        <h3>Your Details:</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Requirements:</strong></p>
        <p>${details}</p>
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
