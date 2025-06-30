import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;

  if (!db) {
    return new Response("Database not found", { status: 500 });
  }

  try {
    const body = await request.json();
    const { title, author, content } = body;

    const stmt = db.prepare(
        "INSERT INTO news (title, author, content) VALUES (?, ?, ?)"
        );
        const result = await stmt.bind(title, author, content).run();

    if (result.success) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("Không thêm được", { status: 404 });
    }
  } catch (err) {
    console.error("Lỗi khi thêm tin tức:", err);
    return new Response("Lỗi server" + err, { status: 500 });
  }
};
