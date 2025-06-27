// import type { APIRoute } from "astro";
// import fs from "fs";
// import path from "path";

// export const prerender = false;

// export const POST: APIRoute = async ({ request }) => {
//   const { id } = await request.json();

//   const filePath = path.resolve("src/data/contact.json");

//   if (!fs.existsSync(filePath)) {
//     return new Response("File not found", { status: 404 });
//   }

//     const data: any[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//     const index = data.findIndex(c => String(c.id) === String(id));

//   if (index === -1) {
//     return new Response("Contact not found", { status: 404 });
//   }

//   if (data[index].status !== "read") {
//     data[index].status = "read";
//     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
//   }

//   return new Response(JSON.stringify({ success: true }), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// };
