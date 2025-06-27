// // import type { APIRoute } from "astro";
// // import fs from "fs";
// // import path from "path";

// // export const prerender = false;

// // export const POST: APIRoute = async ({ request }) => {
// //   const formData = await request.formData();
// //   const title = formData.get("title");
// //   const author = formData.get("author");
// //   const content = formData.get("content");
// //   const image = formData.get("image");

// //   if (!title || !author || !content) {
// //     return new Response(JSON.stringify({ success: false, message: "Thiếu thông tin bắt buộc." }), {
// //       status: 400,
// //       headers: { "Content-Type": "application/json" },
// //     });
// //   }

// //   const newNews = {
// //     id: Date.now(),
// //     title,
// //     author,
// //     content,
// //     image,
// //     createdAt: new Date().toISOString(),
// //   };

// //   const filePath = path.resolve("src/data/news.json");

// //   try {
// //     const data = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf-8")) : [];
// //     data.push(newNews);
// //     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
// //     return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
// //   } catch (err) {
// //     return new Response(JSON.stringify({ success: false, message: "Lỗi server." }), {
// //       status: 500,
// //       headers: { "Content-Type": "application/json" },
// //     });
// //   }
// // };

// import type { APIRoute } from "astro";
// import fs from "fs";
// import path from "path";

// export const prerender = false;

// export const POST: APIRoute = async ({ request }) => {
//   const formData = await request.formData();

//   const title = formData.get("title")?.toString() || "";
//   const author = formData.get("author")?.toString() || "";
//   const content = formData.get("content")?.toString() || "";

//   if (!title || !author || !content) {
//     return new Response("Thiếu thông tin bắt buộc", { status: 400 });
//   }

//   const filePath = path.resolve("src/data/news.json");

//   let existing: any[] = [];

//   if (fs.existsSync(filePath)) {
//     existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//   }
//     const id = Date.now() + Math.floor(Math.random() * 10000);

//   const newNews = {
//     id,
//     title,
//     author,
//     content,
//     createdAt: new Date().toISOString(),
//   };

//   existing.unshift(newNews);
//   fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

//   return new Response(null, {
//     status: 303,
//     headers: {
//       Location: "/news?success=1",
//     },
//   });
// };
