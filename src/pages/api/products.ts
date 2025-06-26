import type { APIRoute } from "astro";
import { getDB } from "../../lib/mongodb";

export const GET: APIRoute = async () => {
  const db = await getDB(locals.runtime.env);
  const products = await db.collection("products").find().toArray();

  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
};
