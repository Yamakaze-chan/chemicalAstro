// src/pages/api/update-product.ts
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
      tags = [],
      image = "",
      images = [],
      removeImages = [],
      specifications = [],
      properties = [],
    } = body;


    if (!id || typeof id !== "number" || isNaN(id)) {
      return new Response("ID không hợp lệ", { status: 400 });
    }

    // --- Kiểm tra sản phẩm ---
    const product = await db.prepare("SELECT * FROM products WHERE id = ?").bind(id).first();
    if (!product) {
      return new Response("Không tìm thấy sản phẩm", { status: 404 });
    }

    // --- Cập nhật bảng products ---
    await db.prepare(`
      UPDATE products SET 
        name = ?, formula = ?, molarMass = ?, cas = ?, einecs = ?, hsCode = ?, image = ?
      WHERE id = ?
    `).bind(name, formula, molarMass, cas, einecs, hsCode, image, id).run();

    await db.prepare(`
      UPDATE outstandingproducts SET name = ?, image = ? WHERE id = ?
    `).bind(name, image, id).run();

    // --- Cập nhật tags ---
    await db.prepare("DELETE FROM chemical_tags WHERE chemical_id = ?").bind(id).run();
    for (const tag of tags) {
      await db.prepare("INSERT INTO chemical_tags (chemical_id, tag) VALUES (?, ?)").bind(id, tag).run();
    }

    // --- Cập nhật images ---
    await db.prepare("DELETE FROM chemical_images WHERE chemical_id = ?").bind(id).run();

    const filteredImages = images.filter((img: string) => !removeImages.includes(img));

    for (const img of filteredImages) {
      await db.prepare("INSERT INTO chemical_images (chemical_id, image) VALUES (?, ?)").bind(id, img).run();
    }


    // --- Cập nhật specifications ---
    await db.prepare("DELETE FROM chemical_specifications WHERE chemical_id = ?").bind(id).run();
    for (let rowIndex = 0; rowIndex < specifications.length; rowIndex++) {
      const row = specifications[rowIndex];
      for (const [colKey, value] of Object.entries(row)) {
        await db.prepare(`
          INSERT INTO chemical_specifications (chemical_id, row_index, col_key, value)
          VALUES (?, ?, ?, ?)
        `).bind(id, rowIndex, colKey, value).run();
      }
    }

    // --- Cập nhật properties (sử dụng prop_key & prop_value) ---
    await db.prepare("DELETE FROM chemical_properties WHERE chemical_id = ?").bind(id).run();
    for (const { key, value } of properties) {
      if (key && value !== undefined) {
        await db.prepare(`
          INSERT INTO chemical_properties (chemical_id, prop_key, prop_value)
          VALUES (?, ?, ?)
        `).bind(id, key, value).run();
      }
    }

    return new Response(JSON.stringify({ success: true, message: "Cập nhật sản phẩm thành công." }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Lỗi cập nhật sản phẩm:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Lỗi máy chủ khi cập nhật sản phẩm.",
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
