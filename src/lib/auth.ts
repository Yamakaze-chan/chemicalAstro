// src/lib/auth.ts
import type { AstroCookies } from "astro";

export interface SessionUser {
  id: number;
  username: string;
  role: string;
}

// 🔒 Đọc và giải mã cookie session_user
function parseSession(cookies: AstroCookies): SessionUser | null {
  const raw = cookies.get("session_user")?.value;
  if (!raw) return null;

  try {
    const decoded = Buffer.from(raw, "base64").toString("utf-8");
    return JSON.parse(decoded);
  } catch (err) {
    cookies.delete("session_user", { path: "/" });
    return null;
  }
}

// ✅ Kiểm tra đã đăng nhập
export function requireLogin(cookies: AstroCookies): SessionUser | null {
  return parseSession(cookies);
}

// ✅ Kiểm tra có đúng quyền (admin, user...)
export function requireRole(cookies: AstroCookies, allowedRoles: string[]): SessionUser | null {
  const user = parseSession(cookies);
  if (!user) return null;

  if (allowedRoles.includes(user.role)) {
    return user;
  }

  return null;
}
