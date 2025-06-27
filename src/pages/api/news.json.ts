// import type { APIRoute } from "astro";
// import fs from "fs";
// import path from "path";

// export const prerender = false;

// export const GET: APIRoute = () => {
//   const filePath = path.resolve("src/data/news.json");
//   const raw = fs.readFileSync(filePath, "utf-8");
//   const news = JSON.parse(raw);

//   return new Response(JSON.stringify(news), {
//     headers: { "Content-Type": "application/json" },
//   });
// };
