// import type { APIRoute } from "astro";
// import fs from "fs";
// import path from "path";

// export const prerender = false;

// export const GET: APIRoute = () => {
//   const filePath = path.resolve("src/data/contact.json");
//   const raw = fs.readFileSync(filePath, "utf-8");
//   const contact = JSON.parse(raw);

//   return new Response(JSON.stringify(contact), {
//     headers: { "Content-Type": "application/json" },
//   });
// };
