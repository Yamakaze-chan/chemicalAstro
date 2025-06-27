import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals }) => {
  const db = locals.runtime.env.DB;

  const { results } = await db
    .prepare("SELECT * FROM products ORDER BY created_at DESC")
    .all();

  return new Response(JSON.stringify(results), {
    headers: { "Content-Type": "application/json" },
  });
};