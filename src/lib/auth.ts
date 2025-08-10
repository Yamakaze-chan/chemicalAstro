import type { AstroCookies } from 'astro';

export async function requireLogin(cookies: AstroCookies) {
  const session = await cookies.get('session');
  if (!session) return null;

  try {
    const [id, username, role] = decodeURIComponent(session.value).split('|');
    if (!id || !username) return null;

    return {
      id,
      username,
      role,
    };
  } catch (err) {
    console.error('Lỗi phân tích session cookie:', err);
    return null;
  }
}
