import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const id = parseInt(formData.get("id")?.toString() || "0");

    const filePath = path.resolve("src/data/products.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const products = JSON.parse(rawData);

    const index = products.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return new Response(JSON.stringify({ success: false, message: "Sản phẩm không tồn tại." }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const rawTags = formData.get("tags")?.toString() || "";
    const tags = rawTags.split(",").map(t => t.trim()).filter(Boolean);

    // Cập nhật thông tin cơ bản
    products[index] = {
      ...products[index],
      name: formData.get("name")?.toString() || "",
      formula: formData.get("formula")?.toString() || "",
      molarMass: formData.get("molarMass")?.toString() || "",
      cas: formData.get("cas")?.toString() || "",
      einecs: formData.get("einecs")?.toString() || "",
      hsCode: formData.get("hsCode")?.toString() || "",
      appearance: formData.get("appearance")?.toString() || "",
      application: formData.get("application")?.toString() || "",
      storage: formData.get("storage")?.toString() || "",
      tags,
    };

    // === Xử lý ảnh đại diện ===
    const uploadDir = path.resolve("public/uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const thumbnailFile = formData.get("thumbnail");
    if (thumbnailFile instanceof File && thumbnailFile.size > 0) {
      const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
      const ext = path.extname(thumbnailFile.name);
      const fileName = `${crypto.randomUUID()}${ext}`;
      const savePath = path.join(uploadDir, fileName);
      fs.writeFileSync(savePath, buffer);
      products[index].image = `/uploads/${fileName}`;
    }

    // === Xử lý ảnh sản phẩm ===
    const oldImages: string[] = products[index].images || [];

    // Xoá ảnh nếu có yêu cầu
    const removeImages = formData.getAll("remove_images[]") as string[];
    const updatedImageList = oldImages.filter(img => !removeImages.includes(img));

    for (const imgPath of removeImages) {
      const absolutePath = path.resolve("public", "." + imgPath); // "/uploads/xxx.jpg"
      if (fs.existsSync(absolutePath)) {
        fs.unlinkSync(absolutePath);
      }
    }

    // Thêm ảnh mới
    const newImages = formData.getAll("images") as File[];
    for (const file of newImages) {
      if (file instanceof File && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const ext = path.extname(file.name);
        const filename = crypto.randomUUID() + ext;
        const savePath = path.join(uploadDir, filename);
        fs.writeFileSync(savePath, buffer);
        updatedImageList.push(`/uploads/${filename}`);
      }
    }

    products[index].images = updatedImageList;

    // === Xử lý bảng chỉ tiêu kỹ thuật ===
    const specMap = new Map<number, Record<string, string>>();
    for (const [key, value] of formData.entries()) {
      const match = key.match(/^spec_(.+)_(\d+)$/);
      if (match) {
        const field = match[1];
        const rowIndex = parseInt(match[2]);
        if (!specMap.has(rowIndex)) {
          specMap.set(rowIndex, {});
        }
        specMap.get(rowIndex)![field] = value.toString();
      }
    }

    const specifications = Array.from(specMap.entries())
      .sort(([a], [b]) => a - b)
      .map(([, spec]) => spec);

    products[index].specifications = specifications;

    // Lưu lại file JSON
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf-8");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Lỗi server" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
