// import type { APIRoute } from "astro";
// import fs from "fs";
// import path from "path";
// import crypto from "crypto";

// export const prerender = false;

// export const POST: APIRoute = async ({ request }) => {
//   const formData = await request.formData();

//   const name = formData.get("name");
//   const formula = formData.get("formula");
//   const molarMass = formData.get("molarMass");
//   const cas = formData.get("cas");
//   const einecs = formData.get("einecs");
//   const hsCode = formData.get("hsCode");
//   const appearance = formData.get("appearance");
//   const application = formData.get("application");
//   const storage = formData.get("storage");

//   const tagsRaw = formData.get("tags")?.toString() ?? "";
//   const tags = tagsRaw.split(",").map(tag => tag.trim()).filter(Boolean);

//   // ===== 1. Tạo thư mục uploads nếu chưa có =====
//   const uploadDir = path.resolve("public/uploads");
//   if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

//   // ===== 2. Xử lý ảnh đại diện (thumbnail) =====
//   const thumbnailFile = formData.get("thumbnail");
//   let thumbnailPath = "";

//   if (thumbnailFile instanceof File && thumbnailFile.size > 0) {
//     const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
//     const hash = crypto.createHash("sha256").update(buffer).digest("hex");
//     const ext = path.extname(thumbnailFile.name);
//     const fileName = `${hash}${ext}`;
//     const filePath = path.resolve(uploadDir, fileName);

//     if (!fs.existsSync(filePath)) {
//       fs.writeFileSync(filePath, buffer);
//       console.log("✅ Ảnh đại diện đã lưu:", fileName);
//     } else {
//       console.log("⚠️ Ảnh đại diện trùng, không lưu:", fileName);
//     }

//     thumbnailPath = `/uploads/${fileName}`;
//   }

//   // ===== 3. Xử lý ảnh sản phẩm (nhiều ảnh) =====
//   const images = formData.getAll("images").filter(f => f instanceof File) as File[];
//   const imageFilenames: string[] = [];

//   console.log("📷 Danh sách ảnh sản phẩm upload:");
//   for (const file of images) {
//     const buffer = Buffer.from(await file.arrayBuffer());
//     const hash = crypto.createHash("sha256").update(buffer).digest("hex");
//     const ext = path.extname(file.name);
//     const fileName = `${hash}${ext}`;
//     const filePath = path.resolve(uploadDir, fileName);

//     if (!fs.existsSync(filePath)) {
//       fs.writeFileSync(filePath, buffer);
//       console.log("✅ Ảnh đã lưu:", fileName);
//     } else {
//       console.log("⚠️ Ảnh trùng, không lưu:", fileName);
//     }

//     imageFilenames.push(`/uploads/${fileName}`);
//   }

//   // ===== 4. Chuyển chỉ tiêu kỹ thuật từ form =====
//   const specData: Record<string, string[]> = {};
//   for (const [key, value] of formData.entries()) {
//     if (key.startsWith("spec-")) {
//       const colName = key.replace("spec-", "");
//       if (!specData[colName]) specData[colName] = [];
//       specData[colName].push(value.toString());
//     }
//   }

//   const rowCount = Math.max(...Object.values(specData).map(arr => arr.length), 0);
//   const specifications = [];

//   for (let i = 0; i < rowCount; i++) {
//     const row: Record<string, string> = {};
//     for (const col in specData) {
//       row[col] = specData[col][i] || "";
//     }
//     specifications.push(row);
//   }

//   // ===== 5. Ghi vào file JSON =====
//   const filePath = path.resolve("src/data/products.json");
//   let existing: any[] = [];

//   if (fs.existsSync(filePath)) {
//     existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//   }

//   const id = Date.now() + Math.floor(Math.random() * 10000);

//   const newProduct = {
//     id,
//     name,
//     formula,
//     molarMass,
//     cas,
//     einecs,
//     hsCode,
//     appearance,
//     application,
//     storage,
//     image: thumbnailPath,       // Ảnh đại diện
//     images: imageFilenames,     // Danh sách ảnh sản phẩm
//     tags,
//     specifications,
//   };

//   existing.unshift(newProduct);
//   fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

//   return new Response(null, {
//     status: 303,
//     headers: {
//       Location: "/admin/addproduct?success=1",
//     },
//   });
// };
