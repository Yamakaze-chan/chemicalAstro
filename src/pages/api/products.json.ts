// import type { APIRoute } from "astro";
// import fs from "fs";
// import path from "path";

// export const prerender = false;

// export const GET: APIRoute = () => {
//   const filePath = path.resolve("src/data/products.json");
//   const raw = fs.readFileSync(filePath, "utf-8");
//   const products = JSON.parse(raw);

//   return new Response(JSON.stringify(products), {
//     headers: { "Content-Type": "application/json" },
//   });
// };
