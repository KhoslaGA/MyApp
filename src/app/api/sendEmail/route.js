import { Resend } from "resend";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid request", { status: 400 });
  }

  const { name, email, phone, business, service, message } = body || {};
  if (!name || !email) {
    return new Response("Name and email are required", { status: 400 });
  }

  // If no API key is configured yet, don't hard-fail the UX — log and accept.
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — contact submission:", body);
    return new Response("Received (email delivery not configured)", {
      status: 200,
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Webhub4U <onboarding@resend.dev>",
      to: process.env.EMAIL_TO || "webhub4u@gmail.com",
      reply_to: email,
      subject: `New enquiry from ${name}${business ? ` (${business})` : ""}`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business || "—"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Interested in:</strong> ${service || "—"}</p>
        <p><strong>Message:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });
    return Response.json({ ok: true, id: response?.data?.id ?? null });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
