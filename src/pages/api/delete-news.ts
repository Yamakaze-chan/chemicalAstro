import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;

  if (!db) {
    return new Response("Database not found", { status: 500 });
  }

  try {
    const { id } = await request.json();

    if (!id) {
      return new Response("ID is required", { status: 400 });
    }

    const stmt = db.prepare("DELETE FROM news WHERE id = ?");
    const result = await stmt.bind(id).run();

    if (result.success) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("Không tìm thấy tin tức để xoá", { status: 404 });
    }
  } catch (err) {
    console.error("Lỗi khi xoá tin tức:", err);
    return new Response("Lỗi server", { status: 500 });
  }
};
