import type { APIRoute } from "astro";
export const prerender = false;
interface Env {
  DB: IDBDatabase;
}

export const GET: APIRoute = async ({ locals }) => {
  try {
    const db = (locals as { runtime: { env: Env } }).runtime.env.DB;

    const { results } = await db
      .prepare("SELECT * FROM products ORDER BY created_at DESC")
      .all();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("🔥 API Error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};
