import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const id = parseInt(formData.get("id")?.toString() || "0");

    const filePath = path.resolve("src/data/products.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const products = JSON.parse(rawData);

    // Tìm index sản phẩm theo product.id
    const index = products.findIndex((p: any) => p.id === id);

    if (index === -1) {
      return new Response(JSON.stringify({ success: false, message: "Sản phẩm không tồn tại." }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const rawTags = formData.getAll("tags") as string[];
    const tags = rawTags.map(t => t.trim()).filter(Boolean);

    // Cập nhật thông tin sản phẩm
    products[index] = {
      ...products[index],
      name: formData.get("name")?.toString() || "",
      formula: formData.get("formula")?.toString() || "",
      molarMass: formData.get("molarMass")?.toString() || "",
      cas: formData.get("cas")?.toString() || "",
      einecs: formData.get("einecs")?.toString() || "",
      hsCode: formData.get("hsCode")?.toString() || "",
      appearance: formData.get("appearance")?.toString() || "",
      storage: formData.get("storage")?.toString() || "",
      image: formData.get("image")?.toString() || "",
      tags: tags,
    };

    // Cập nhật chỉ tiêu kỹ thuật
    const specCount = parseInt(formData.get("spec_count")?.toString() || "0");
    const specifications = [];

    for (let i = 0; i < specCount; i++) {
      specifications.push({
        name: formData.get(`spec_name_${i}`)?.toString() || "",
        food: formData.get(`spec_food_${i}`)?.toString() || "",
        tech: formData.get(`spec_tech_${i}`)?.toString() || "",
      });
    }

    products[index].specifications = specifications;

    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf-8");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Lỗi server" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
