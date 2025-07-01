import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals }) => {
  const db = locals.runtime.env.DB;
  if (!db) {
    console.error("❌ Missing DB binding");
    return new Response("Missing DB binding", { status: 500 });
  }

  try {
    const result = await db
      .prepare("SELECT id, name, image FROM outstandingproducts")
      .all();
    return new Response(JSON.stringify(result.results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ GET error:", err);
    return new Response(JSON.stringify({ success: false, message: "Query failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  if (!db) {
    return new Response("Missing DB binding", { status: 500 });
  }

  try {
    const data = await request.json();
    if (!Array.isArray(data) || data.length === 0) {
      return new Response(JSON.stringify({ success: false, message: "Dữ liệu phải là mảng và không được rỗng" }), { status: 400 });
    }

    for (const item of data) {
      if (
        typeof item.id === "undefined" ||
        typeof item.name !== "string" ||
        (item.image && typeof item.image !== "string")
      ) {
        return new Response(JSON.stringify({
          success: false,
          message: `Dữ liệu không hợp lệ: ${JSON.stringify(item)}`
        }), { status: 400 });
      }
    }

    await db.prepare("DELETE FROM outstandingproducts").run();

    for (const { id, name, image } of data.slice(0, 4)) {
      await db
        .prepare("INSERT INTO outstandingproducts (id, name, image) VALUES (?, ?, ?)")
        .bind(id, name, image ?? "")
        .run();
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, message: (err as Error).message || "Insert failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

