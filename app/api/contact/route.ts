import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email } = body;

  await resend.emails.send({
    from: "Jonte <onboarding@yourdomain.com>",
    to: email,
    subject: "Thank you for reaching out!",
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for connecting. I’ve received your message and will respond soon.</p>
      <p>Best,<br/>Jonte</p>
    `
  });

  return NextResponse.json({ success: true });
}