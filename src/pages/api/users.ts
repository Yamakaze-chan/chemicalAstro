import type { APIRoute } from 'astro';

export const prerender = false; // Ensure SSR

export const GET: APIRoute = async ({ locals }) => {
  console.log("aaaaaaaaaaaaaaaaaaaaaa")
  const db = locals.runtime.env.DB;
  const result = await db.prepare('SELECT * FROM users').all();
  return new Response(JSON.stringify(result.results), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  const { name, email } = await request.json();
  await db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
    .bind(name, email)
    .run();
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};