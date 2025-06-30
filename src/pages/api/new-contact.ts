import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  if (!db) {
    return new Response("Không tìm thấy DB", { status: 500 });
  }

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return new Response("Dữ liệu không hợp lệ", { status: 400 });
  }

  const nameCustomer = body.nameCustomer?.toString() || "";
  const email = body.email?.toString() || "";
  const phone = body.phone?.toString() || "";
  const businessType = body.businessType?.toString() || "";
  const businessCategory = body.businessCategory?.toString() || "";
  const messageCustomer = body.messageCustomer?.toString() || "";

  const missingFields = [];
  if (!nameCustomer) missingFields.push("Họ và tên");
  if (!email) missingFields.push("Email");
  if (!phone) missingFields.push("Số điện thoại");
  if (!businessType) missingFields.push("Bạn là");
  if (!businessCategory) missingFields.push("Kiểu kinh doanh");

  if (missingFields.length > 0) {
    return new Response(
      JSON.stringify({
        error: "Thiếu thông tin bắt buộc",
        missing: missingFields,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    await db
      .prepare(
        `INSERT INTO contact 
        (nameCustomer, email, phone, businessType, businessCategory, messageCustomer, createdAt, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        nameCustomer,
        email,
        phone,
        businessType,
        businessCategory,
        messageCustomer,
        new Date().toISOString(),
        "unread"
      )
      .run();

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Lỗi thêm liên hệ:", err);
    return new Response("Lỗi máy chủ", { status: 500 });
  }
};
