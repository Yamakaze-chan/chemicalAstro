import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ locals, request }) => {
  const db = locals.runtime.env.DB;
  const url = new URL(request.url);
  const idParam = url.searchParams.get("id");

  if (idParam) {
    const id = parseInt(idParam);
    if (isNaN(id)) {
      return new Response(JSON.stringify({ success: false, message: "ID không hợp lệ" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const result = await db.prepare("SELECT * FROM contact WHERE id = ?").bind(id).first();
      if (!result) {
        return new Response(JSON.stringify({ success: false, message: "Không tìm thấy liên hệ" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, message: "Lỗi máy chủ" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  try {
    const result = await db.prepare("SELECT * FROM contact ORDER BY createdAt DESC").all();
    return new Response(JSON.stringify(result.results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: "Lỗi máy chủ" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
