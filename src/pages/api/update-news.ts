import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;

  if (!db) {
    return new Response("Database not found", { status: 500 });
  }

  try {
    const body = await request.json();
    const { id, title, author, content } = body;

    if (!id) {
      return new Response("ID is required", { status: 400 });
    }

    const stmt = db.prepare("UPDATE news SET title = \'"+title+"\', author = \'"+author+"\', content = \'"+content+"\' WHERE id = \'"+id+"\'");
    const result = await stmt.run();

    if (result.success) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("Không tìm thấy tin tức để cập nhật", { status: 404 });
    }
  } catch (err) {
    console.error("Lỗi khi cập nhật tin tức:", err);
    return new Response("Lỗi server" + err, { status: 500 });
  }
};
