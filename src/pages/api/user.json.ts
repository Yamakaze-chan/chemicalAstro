import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

export const prerender = false;

export const GET: APIRoute = () => {
  const filePath = path.resolve("src/data/user.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const user = JSON.parse(raw);

  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
};
