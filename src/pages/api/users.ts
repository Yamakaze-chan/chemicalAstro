import type { APIRoute } from 'astro';
import { scrypt } from 'scrypt-js';

export const prerender = false;

function toHex(buffer: Uint8Array): string {
  return Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join('');
}

export const GET: APIRoute = async ({ locals }) => {
  const db = locals.runtime.env.DB;
  const result = await db.prepare('SELECT id, username, role FROM users').all();

  return new Response(JSON.stringify(result.results), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  const { username, password, role } = await request.json();

  if (!username || !password) {
    return new Response(JSON.stringify({ error: 'Thiếu username hoặc password' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const encoder = new TextEncoder();
    const passwordBytes = encoder.encode(password);
    const salt = crypto.getRandomValues(new Uint8Array(16));

    // scrypt parameters
    const N = 16384; // CPU/memory cost
    const r = 8;
    const p = 1;
    const dkLen = 32; // derived key length

    const derivedKey = await scrypt(passwordBytes, salt, N, r, p, dkLen);

    const hashedHex = toHex(new Uint8Array(derivedKey));
    const saltHex = toHex(salt);

    // Lưu cả hash và salt, để dùng lại khi so sánh lúc login
    const finalHash = `${saltHex}$${hashedHex}`;

    await db
      .prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)')
      .bind(username, finalHash, role || 'user')
      .run();

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const PATCH: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  const { id, newPassword } = await request.json();

  if (!id || !newPassword) {
    return new Response(JSON.stringify({ error: 'Thiếu ID hoặc mật khẩu mới' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const passwordBytes = new TextEncoder().encode(newPassword);
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const derivedKey = await scrypt(passwordBytes, salt, 16384, 8, 1, 32);
    const hash = `${toHex(salt)}$${toHex(new Uint8Array(derivedKey))}`;

    await db.prepare('UPDATE users SET password = ? WHERE id = ?').bind(hash, id).run();

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};


export const DELETE: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  const { id } = await request.json();

  if (!id) {
    return new Response(JSON.stringify({ error: 'Thiếu ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    await db.prepare('DELETE FROM users WHERE id = ?').bind(id).run();

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

