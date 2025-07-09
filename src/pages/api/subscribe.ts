import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const email = body.email;

    if (typeof email !== "string" || !email.includes("@")) {
      return new Response(
        JSON.stringify({ success: false, message: "Email không hợp lệ" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = "re_S42d5Wvy_MfzpqYf4VeeF3ZGy5CCR36A9";
    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, message: "Thiếu RESEND_API_KEY trong môi trường" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Hoặc dùng email đã xác thực (nếu có)
        to: ["utemp0308@gmail.com"],
        subject: "Khách hàng mới đăng ký liên hệ",
        html: `<p><strong>Email khách hàng:</strong> ${email}</p>`,
      }),
    });

    const text = await resendRes.text();

    if (!resendRes.ok) {
      return new Response(
        JSON.stringify({ success: false, message: "Resend lỗi", detail: text }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Đã gửi thành công" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, message: "Lỗi hệ thống", detail: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
