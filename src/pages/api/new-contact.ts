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

    if (!nameCustomer || !email || !phone || !businessType || !businessCategory) {
        return new Response("Thiếu thông tin bắt buộc", { status: 400 });
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
    // headers: {
    //   Location: "/contact?success=1",
    // },
  });
}