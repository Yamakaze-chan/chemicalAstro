import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ locals, request }) => {
  const db = locals.runtime.env.DB;
  if (!db) {
    return new Response("No DB connection", { status: 500 });
  }

  try {
    const body = await request.json();

    const {
      id,
      name,
      formula,
      molarMass,
      cas,
      einecs,
      hsCode,
      appearance,
      application,
      storage,
      tags = [],
      image = "",
      images = [],
      specifications = [],
    } = body;

    if (!id || isNaN(Number(id))) {
      return new Response("ID không hợp lệ", { status: 400 });
    }

    // --- Bước 1: Kiểm tra sản phẩm ---
    const product = await db.prepare("SELECT * FROM products WHERE id = ?").bind(id).first();
    if (!product) {
      return new Response("Không tìm thấy sản phẩm", { status: 404 });
    }

    // --- Bước 2: Cập nhật bảng products ---
    await db
      .prepare(
        `UPDATE products SET 
          name = ?, formula = ?, molarMass = ?, cas = ?, einecs = ?, hsCode = ?, 
          appearance = ?, application = ?, storage = ?, image = ?
          WHERE id = ?`
      )
      .bind(
        name,
        formula,
        molarMass,
        cas,
        einecs,
        hsCode,
        appearance,
        application,
        storage,
        image,
        id
      )
      .run();

      await db
      .prepare(`UPDATE outstandingproducts SET name = ?, image = ? WHERE id = ?`)
      .bind(name, image, id)
      .run();

    // --- Bước 3: Cập nhật tags ---
    await db.prepare("DELETE FROM chemical_tags WHERE chemical_id = ?").bind(id).run();
    for (const tag of tags) {
      await db.prepare("INSERT INTO chemical_tags (chemical_id, tag) VALUES (?, ?)" ).bind(id, tag).run();
    }

    // --- Bước 4: Cập nhật ảnh sản phẩm (bỏ qua thực thi) ---
    await db.prepare("DELETE FROM chemical_images WHERE chemical_id = ?").bind(id).run();
    for (const img of images) {
      await db.prepare("INSERT INTO chemical_images (chemical_id, image) VALUES (?, ?)").bind(id, img).run();
    }

    // --- Bước 5: Cập nhật specifications ---
    await db.prepare("DELETE FROM chemical_specifications WHERE chemical_id = ?").bind(id).run();

    for (let rowIndex = 0; rowIndex < specifications.length; rowIndex++) {
      const row = specifications[rowIndex];
      for (const [colKey, value] of Object.entries(row)) {
        await db
          .prepare(
            "INSERT INTO chemical_specifications (chemical_id, row_index, col_key, value) VALUES (?, ?, ?, ?)"
          )
          .bind(id, rowIndex, colKey, value)
          .run();
      }
    }

    return new Response(JSON.stringify({ success: true, message: "Cập nhật sản phẩm thành công." }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Lỗi cập nhật sản phẩm:", error);
    return new Response(JSON.stringify({ success: false, message: "Lỗi máy chủ khi cập nhật sản phẩm." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
