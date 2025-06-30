import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  if (!db) {
    return new Response(
      JSON.stringify({ success: false, message: "Không tìm thấy DB" }),
      { status: 500 }
    );
  } 

  try {
    const body = await request.json();
    const id = parseInt(body.id);

    if (!id || isNaN(id)) {
      return new Response(
        JSON.stringify({ success: false, message: "ID không hợp lệ" }),
        { status: 400 }
      );
    }

    await db
      .prepare("UPDATE contact SET status = 'read' WHERE id = ?")
      .bind(id)
      .run();

    return new Response(JSON.stringify({ success: true }));
  } catch (err) {
    console.error("Lỗi cập nhật trạng thái liên hệ:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Lỗi máy chủ" }),
      { status: 500 }
    );
  }
};
