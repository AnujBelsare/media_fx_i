import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, service, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"MediaFXI Website" <${process.env.SENDER_EMAIL}>`,
            to: process.env.RECEIVER_EMAIL,
            replyTo: email,
            subject: `New Project Inquiry — ${name}${company ? ` (${company})` : ""}`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .wrapper { max-width: 580px; margin: 40px auto; background: #fff; border-top: 3px solid #E8C832; }
    .header { background: #0a0a0a; padding: 32px 36px; }
    .header h1 { color: #E8C832; font-size: 13px; letter-spacing: 0.3em; text-transform: uppercase; margin: 0; font-weight: 700; }
    .body { padding: 36px; }
    .field { margin-bottom: 22px; }
    .label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #999; font-weight: 600; margin-bottom: 4px; }
    .value { font-size: 15px; color: #111; font-weight: 400; }
    .message-box { background: #f9f9f9; border-left: 3px solid #E8C832; padding: 16px 20px; margin-top: 24px; }
    .message-box .value { font-size: 14px; line-height: 1.7; color: #333; }
    .footer { padding: 20px 36px; border-top: 1px solid #eee; }
    .footer p { font-size: 11px; color: #aaa; margin: 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Project Inquiry — MediaFXI</h1>
    </div>
    <div class="body">
      <div class="field"><div class="label">Name</div><div class="value">${name}</div></div>
      <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}" style="color:#E8C832;">${email}</a></div></div>
      ${company ? `<div class="field"><div class="label">Company / Brand</div><div class="value">${company}</div></div>` : ""}
      ${service ? `<div class="field"><div class="label">Service Interested In</div><div class="value">${service}</div></div>` : ""}
      <div class="message-box">
        <div class="label">Message</div>
        <div class="value">${message.replace(/\n/g, "<br/>")}</div>
      </div>
    </div>
    <div class="footer">
      <p>Sent via mediafxi.com contact form · ${new Date().toLocaleDateString("en-IN", { dateStyle: "long" })}</p>
    </div>
  </div>
</body>
</html>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Mail error:", err);
        return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }
}
