import type { APIRoute } from 'astro';
import { scrypt } from 'scrypt-js';

function toHex(buffer: Uint8Array): string {
  return Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex: string): Uint8Array {
  const len = hex.length / 2;
  const result = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
  }
  return result;
}

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  const db = locals.runtime.env.DB;
  const { username, password } = await request.json();

  if (!username || !password) {
    return new Response(
      JSON.stringify({ success: false, error: 'Thiếu username hoặc password' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    // Lấy user từ DB
    const result = await db
      .prepare('SELECT * FROM users WHERE username = ?')
      .bind(username)
      .first();

    if (!result) {
      return new Response(
        JSON.stringify({ success: false, error: 'Sai tài khoản hoặc mật khẩu' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // So sánh mật khẩu đã hash
    const [saltHex, hashHex] = result.password.split('$');
    const salt = hexToBytes(saltHex);
    const passwordBytes = new TextEncoder().encode(password);
    const derivedKey = await scrypt(passwordBytes, salt, 16384, 8, 1, 32);
    const hashedInputHex = toHex(new Uint8Array(derivedKey));

    if (hashedInputHex !== hashHex) {
      return new Response(
        JSON.stringify({ success: false, error: 'Sai tài khoản hoặc mật khẩu' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // ✅ Đăng nhập thành công → tạo session cookie
    const sessionValue = `${result.id}|${result.username}|${result.role}`;
    await cookies.set('session', sessionValue, {
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'lax',
      maxAge: 86400, // 1 ngày
    });

    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: result.id,
          username: result.username,
          role: result.role,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: String(err) }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
