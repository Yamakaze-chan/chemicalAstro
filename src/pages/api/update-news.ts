// import type { APIRoute } from "astro";
// import fs from "fs";
// import path from "path";

// export const prerender = false;

// export const POST: APIRoute = async ({ request }) => {
//   try {
//     const formData = await request.formData();

//     const id = parseInt(formData.get("id") as string);
//     const title = formData.get("title")?.toString().trim();
//     const author = formData.get("author")?.toString().trim();
//     const content = formData.get("content")?.toString().trim();

//     if (!id || !title || !content) {
//       return new Response(JSON.stringify({ success: false, message: "Thiếu dữ liệu bắt buộc." }), {
//         status: 400,
//       });
//     }

//     // Đường dẫn file news.json
//     const filePath = path.resolve("src/data/news.json");

//     // Đọc file JSON hiện tại
//     const jsonData = fs.readFileSync(filePath, "utf-8");
//     const newsList = JSON.parse(jsonData);

//     // Tìm tin tức theo ID
//     const index = newsList.findIndex((item: any) => item.id === id);
//     if (index === -1) {
//       return new Response(JSON.stringify({ success: false, message: "Không tìm thấy tin tức." }), {
//         status: 404,
//       });
//     }

//     // Cập nhật thông tin
//     newsList[index] = {
//       ...newsList[index],
//       title,
//       author,
//       content,
//     };

//     // Ghi lại file JSON
//     fs.writeFileSync(filePath, JSON.stringify(newsList, null, 2), "utf-8");

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//     });
//   } catch (err) {
//     return new Response(JSON.stringify({ success: false, message: "Lỗi máy chủ." }), {
//       status: 500,
//     });
//   }
// };
