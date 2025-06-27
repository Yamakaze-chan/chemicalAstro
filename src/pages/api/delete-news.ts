// // src/pages/api/delete-product.ts
// export const prerender = false;

// import type { APIRoute } from "astro";
// import fs from "fs";
// import path from "path";

// export const POST: APIRoute = async ({ request }) => {
//   try {
//     const body = await request.json();
//     const id = parseInt(body.id);

//     if (isNaN(id)) {
//       return new Response(JSON.stringify({ success: false, message: "ID không hợp lệ." }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     const filePath = path.resolve("src/data/news.json");
//     const fileData = fs.readFileSync(filePath, "utf-8");
//     const news = JSON.parse(fileData);

//     const index = news.findIndex((p: any) => p.id === id);
//     if (index === -1) {
//       return new Response(JSON.stringify({ success: false, message: "Không tìm thấy sản phẩm." }), {
//         status: 404,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     news.splice(index, 1);
//     fs.writeFileSync(filePath, JSON.stringify(news, null, 2));

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("Lỗi xử lý JSON:", err);
//     return new Response(JSON.stringify({ success: false, message: "Lỗi máy chủ." }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// };
