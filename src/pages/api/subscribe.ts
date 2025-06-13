import type { APIRoute } from "astro";
import { sendEmail } from "../../utils/sendEmail";

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({ message: "Content-Type phải là application/json" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ message: "Email không hợp lệ!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await sendEmail({
      email: "nxtaanhp@gmail.com", // ✏️ Thay bằng email bạn muốn nhận
      subject: "New Subscriber",
      text: `Email mới: ${email}`,
      html: `<p>Người dùng mới đã đăng ký: <strong>${email}</strong></p>`,
    });

    return new Response(JSON.stringify({ message: "Đăng ký thành công!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Lỗi gửi email:", error);
    return new Response(
      JSON.stringify({ message: "Gửi email thất bại hoặc dữ liệu lỗi!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
