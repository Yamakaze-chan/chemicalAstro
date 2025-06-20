import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData(); // chỉ hỗ trợ với multipart/form-data hoặc x-www-form-urlencoded
    const email = formData.get("email")?.toString();

    if (!email) {
      return new Response("Thiếu địa chỉ email", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: '"Website" <yourgmail@gmail.com>',
      to: "yourgmail@gmail.com",
      subject: "📥 Liên hệ mới",
      html: `<p>Khách hàng đăng ký với email: <strong>${email}</strong></p>`,
    });

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Lỗi gửi email:", err);
    return new Response("Lỗi máy chủ khi gửi email", { status: 500 });
  }
};
