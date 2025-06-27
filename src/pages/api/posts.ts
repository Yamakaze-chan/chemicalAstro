import type { APIRoute } from 'astro';

export const prerender = false; // Ensure SSR for dynamic API

export const GET: APIRoute = async ({ locals }) => {
  const db = locals.runtime.env.DB; // Access D1 binding
  try {
    const result = await db.prepare('SELECT * FROM posts').all();
    return new Response(JSON.stringify(result.results), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Database query failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  try {
    const body = await request.json();
    const { title, content } = body;
    await db
      .prepare('INSERT INTO posts (title, content) VALUES (?, ?)')
      .bind(title, content)
      .run();
    return new Response(JSON.stringify({ message: 'Post created' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create post' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};