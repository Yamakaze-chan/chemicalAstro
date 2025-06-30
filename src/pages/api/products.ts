import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ locals, request }) => {
  const db = locals.runtime.env.DB;
  const url = new URL(request.url);
  const idParam = url.searchParams.get("id");

  if (!db) {
    return new Response("No DB connection", { status: 500 });
  }

  if (idParam) {
    const id = parseInt(idParam);
    if (isNaN(id)) {
      return new Response("ID không hợp lệ", { status: 400 });
    }

    try {
      const product = await db.prepare("SELECT * FROM products WHERE id = ?").bind(id).first();
      if (!product) return new Response("Không tìm thấy sản phẩm", { status: 404 });

      const [images, tags, rawSpecs] = await Promise.all([
        db.prepare("SELECT image FROM chemical_images WHERE chemical_id = ?").bind(id).all(),
        db.prepare("SELECT tag FROM chemical_tags WHERE chemical_id = ?").bind(id).all(),
        db.prepare("SELECT row_index, col_key, value FROM chemical_specifications WHERE chemical_id = ? ORDER BY row_index ASC").bind(id).all()
      ]);

      const specMap = new Map<number, Record<string, string>>();
      for (const { row_index, col_key, value } of rawSpecs.results) {
        if (!specMap.has(row_index)) specMap.set(row_index, {});
        specMap.get(row_index)![col_key] = value || "";
      }

      const fullData = {
        ...product,
        images: images.results.map(r => r.image),
        tags: tags.results.map(r => r.tag),
        specifications: Array.from(specMap.values()),
      };

      return new Response(JSON.stringify(fullData), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Lỗi truy vấn sản phẩm:", err);
      return new Response("Lỗi máy chủ", { status: 500 });
    }
  }

  // Không có id => trả về danh sách sản phẩm kèm tags
  try {
    const products = (await db.prepare("SELECT * FROM products").all()).results;
    const tags = (await db.prepare("SELECT chemical_id, tag FROM chemical_tags").all()).results;

    const tagMap: Record<number, string[]> = {};
    for (const { chemical_id, tag } of tags) {
      if (!tagMap[chemical_id]) tagMap[chemical_id] = [];
      tagMap[chemical_id].push(tag);
    }

    const enriched = products.map(p => ({
      ...p,
      tags: tagMap[p.id] || [],
    }));

    return new Response(JSON.stringify(enriched), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Lỗi khi tải danh sách sản phẩm:", err);
    return new Response("Lỗi máy chủ", { status: 500 });
  }
};
