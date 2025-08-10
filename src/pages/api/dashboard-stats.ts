// src/pages/api/dashboard-stats.ts
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals }) => {
  const db = locals.runtime.env.DB;
  if (!db) {
    return new Response(JSON.stringify({ success: false, message: "Missing DB" }), { status: 500 });
  }

  try {
    const [[{ count: totalProducts }], [{ count: totalNews }], [{ count: unreadContacts }]] = await Promise.all([
      db.prepare("SELECT COUNT(*) AS count FROM products").all().then(r => r.results),
      db.prepare("SELECT COUNT(*) AS count FROM news").all().then(r => r.results),
      db.prepare("SELECT COUNT(*) AS count FROM contact WHERE status = 'unread'").all().then(r => r.results),
    ]);

    return new Response(
      JSON.stringify({ totalProducts, totalNews, unreadContacts }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(JSON.stringify({ success: false, message: "Query error" }), { status: 500 });
  }
};
