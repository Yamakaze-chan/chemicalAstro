import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

// export const POST: APIRoute = async ({ request }) => {
//   if (request.headers.get("Content-Type") === "application/json") {
//     const body = await request.json();
//     const name = body.name;
//     console.log(body)

//     return new Response(
//       JSON.stringify({
//         message: "Your name was: " + name,
//       }),
//       {
//         status: 200,
//       },
//     );
//   }
//   // try {
//   //   const formData = await request;
//   //   console.log(formData.body)
//   //   console.log(params)
//   //   const email = formData.get("email")?.toString();

//   //   if (!email) {
//   //     return new Response("Thiếu địa chỉ email", { status: 400 });
//   //   }

//   //   const transporter = nodemailer.createTransport({
//   //     service: "gmail",
//   //     auth: {
//   //       user: process.env.GMAIL_EMAIL,
//   //       pass: process.env.GMAIL_PASSWORD,
//   //     },
//   //   });

//   //   await transporter.sendMail({
//   //     from: '"Website" <yourgmail@gmail.com>',
//   //     to: "yourgmail@gmail.com",
//   //     subject: "📥 Liên hệ mới",
//   //     html: `<p>Khách hàng đăng ký với email: <strong>${email}</strong></p>`,
//   //   });

//   //   return new Response("OK", { status: 200 });
//   // } catch (err) {
//   //   console.error("Lỗi gửi email:", err);
//   //   return new Response("Lỗi máy chủ khi gửi email", { status: 500 });
//   // }
// };

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
      from: '"Website" <yourgmail@gmail.com>',
      to: "yourgmail@gmail.com",
      subject: "📥 Liên hệ mới",
      html: `<p>Khách hàng đăng ký với email: <strong>${data.email}</strong></p>`,
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
