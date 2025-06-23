import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

const filePath = path.resolve("src/data/outstandingproducts.json");

export const GET: APIRoute = () => {
  const raw = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(raw);
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const selected = await request.json(); // [{ id, name, image }]
  if (
    !Array.isArray(selected) ||
    selected.length > 4 ||
    selected.some(p => !p.id || !p.name || !p.image)
  ) {
    return new Response("Invalid data", { status: 400 });
  }

  fs.writeFileSync(filePath, JSON.stringify(selected, null, 2), "utf-8");

  return new Response(JSON.stringify({ message: "Cập nhật thành công" }), {
    headers: { "Content-Type": "application/json" },
  });
};
