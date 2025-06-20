import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

export const prerender = false;

export const POST: APIRoute = async ({ request }) =>{
    const formData = await request.formData();

    const nameCustomer = formData.get("nameCustomer")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const businessType = formData.get("businessType")?.toString() || "";
    const businessCategory = formData.get("businessCategory")?.toString() || "";
    const messageCustomer = formData.get("messageCustomer")?.toString() || "";

    const missingFields = [];
      if (!nameCustomer) missingFields.push("Họ và tên");
      if (!email) missingFields.push("Email");
      if (!phone) missingFields.push("Số điện thoại");
      if (!businessType) missingFields.push("Bạn là");
      if (!businessCategory) missingFields.push("Kiểu kinh doanh");

      if (missingFields.length > 0) {
        return new Response(JSON.stringify({
          error: "Thiếu thông tin bắt buộc",
          missing: missingFields
        }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }

  const filePath = path.resolve("src/data/contact.json");

  let existing: any[] = [];
    if (fs.existsSync(filePath)) {
      existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    const id = Date.now() + Math.floor(Math.random() * 10000);
    const newContact = {
    id,
    nameCustomer,
    email,
    phone,
    businessType,
    businessCategory,
    messageCustomer,
    createdAt: new Date().toISOString(),
    status: "unread",
  };
  existing.unshift(newContact);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    return new Response(null, {
    status: 303,
  });
}