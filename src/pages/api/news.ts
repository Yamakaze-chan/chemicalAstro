import type { APIRoute } from 'astro';

export const prerender = false; // Ensure SSR

export const GET: APIRoute = async ({ locals, request }) => {
  const db = locals.runtime.env.DB;

  // Lấy URL để xử lý query
  const url = new URL(request.url);
  const idParam = url.searchParams.get("id");

  if (idParam) {
    // 📌 Trả về 1 tin tức cụ thể
    const id = parseInt(idParam);
    if (!id || isNaN(id)) {
      return new Response("ID không hợp lệ", { status: 400 });
    }

    try {
      const result = await db.prepare("SELECT * FROM news WHERE id = ?").bind(id).first();
      if (!result) return new Response("Không tìm thấy tin tức", { status: 404 });

      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response("Lỗi máy chủ", { status: 500 });
    }
  }

  // 📌 Trả về toàn bộ danh sách tin tức
  try {
    const result = await db.prepare("SELECT * FROM news").all();
    return new Response(JSON.stringify(result.results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response("Lỗi máy chủ", { status: 500 });
  }
};

