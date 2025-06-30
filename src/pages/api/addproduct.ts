import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  if (!db) return new Response("DB not available", { status: 500 });

  const body = await request.json();

  const {
    name, formula, molarMass, cas, einecs, hsCode,
    appearance, application, storage, tags,
    image, images = [], specifications = []
  } = body;

  try {
    // 1. Insert vào bảng products
    const result = await db.prepare(`
      INSERT INTO products (name, formula, molarMass, cas, einecs, hsCode, appearance, application, storage, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(name, formula, molarMass, cas, einecs, hsCode, appearance, application, storage, image).run();

    const productId = result.meta.last_row_id;

    // 2. Tags
    for (const tag of tags.split(",").map(t => t.trim()).filter(Boolean)) {
      await db.prepare("INSERT INTO chemical_tags (chemical_id, tag) VALUES (?, ?)").bind(productId, tag).run();
    }

    // 3. Images
    for (const img of images) {
      await db.prepare("INSERT INTO chemical_images (chemical_id, image) VALUES (?, ?)").bind(productId, img).run();
    }

    // 4. Specifications
    for (const { row, col, value } of specifications) {
      await db.prepare(`
        INSERT INTO chemical_specifications (chemical_id, row_index, col_key, value)
        VALUES (?, ?, ?, ?)
      `).bind(productId, row, col, value).run();
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
