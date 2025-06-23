import type { APIRoute } from "astro";
import nodemailer from "nodemailer";


export const POST = async ({ request }: { request: Request }) => {
  try {
    const contentType = await request.headers.get('content-type');
    let data: { email: String };
    if (contentType?.includes('application/json')) {
      data = await request.json();
    } else {
      const text = await request.text();
      data = { email: text };
    }
    console.log('Received subscription:', data);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Website" <${process.env.GMAIL_EMAIL}>`,
      to: process.env.GMAIL_EMAIL,
      subject: "📥 Liên hệ mới",
      html: `<p>Khách hàng Liên Hệ với email: <strong>${data.email}</strong>, Hãy nhanh chóng phản hồi!</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, message: data }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('Subscription error:', err);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to subscribe.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
