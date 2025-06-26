import type { APIRoute } from "astro";
import { getDB } from "../../lib/mongodb";

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  try {
    const db = await getDB(locals.runtime.env); // 🔥 dòng quan trọng
    const contact = await db.collection("contact").find().sort({ createdAt: -1 }).toArray();

    return new Response(JSON.stringify(contact), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Lỗi khi kết nối MongoDB:", err);
    return new Response("Lỗi máy chủ", { status: 500 });
  }
};
