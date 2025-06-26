import type { APIRoute } from "astro";
import { getDB } from "../../lib/mongodb";

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const db = await getDB();
    const news = await db.collection("news").find().sort({ createdAt: -1 }).toArray();
    
    return new Response(JSON.stringify(news), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Lỗi khi truy vấn MongoDB:", err);
    return new Response("Lỗi máy chủ", { status: 500 });
  }
};
