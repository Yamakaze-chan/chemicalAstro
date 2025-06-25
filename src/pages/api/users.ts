import type { APIRoute } from "astro";
import { requireRole } from "../../lib/auth";
import path from "path";
import fs from "fs/promises";
import bcrypt from "bcrypt";

// Đọc và ghi file user.json
const filePath = path.resolve("src/data/user.json");

async function getUsers() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function saveUsers(users: any[]) {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");
}

// GET: Trả danh sách người dùng (ẩn mật khẩu)
export const GET: APIRoute = async ({ cookies }) => {
  const user = requireRole(cookies, ["admin"]);
  if (!user) return new Response("Unauthorized", { status: 401 });

  const users = await getUsers();
  const safeUsers = users.map(({ id, username, role }) => ({ id, username, role }));

  return new Response(JSON.stringify(safeUsers), {
    headers: { "Content-Type": "application/json" },
  });
};

// DELETE: Xoá người dùng theo ID
export const DELETE: APIRoute = async ({ request, cookies }) => {
  const user = requireRole(cookies, ["admin"]);
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { id } = await request.json();
  let users = await getUsers();
  users = users.filter((u: any) => u.id !== id);
  await saveUsers(users);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};

// PATCH: Cấp lại mật khẩu
export const PATCH: APIRoute = async ({ request, cookies }) => {
  const user = requireRole(cookies, ["admin"]);
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { id, newPassword } = await request.json();
  if (!id || !newPassword) {
    return new Response("Thiếu ID hoặc mật khẩu mới", { status: 400 });
  }

  const users = await getUsers();
  const index = users.findIndex((u: any) => u.id === id);
  if (index === -1) return new Response("Người dùng không tồn tại", { status: 404 });

  const hashed = await bcrypt.hash(newPassword, 10);
  users[index].password = hashed;
  await saveUsers(users);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};

// POST: Tạo người dùng mới
export const POST: APIRoute = async ({ request, cookies }) => {
  const admin = requireRole(cookies, ["admin"]);
  if (!admin) return new Response("Unauthorized", { status: 401 });

  const { username, password, role } = await request.json();
  if (!username || !password || !role) {
    return new Response("Thiếu thông tin", { status: 400 });
  }

  const users = await getUsers();
  if (users.find((u) => u.username === username)) {
    return new Response("Tài khoản đã tồn tại", { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const id = Date.now() + Math.floor(Math.random() * 10000);
  const newUser = {
    id: id,
    username,
    password: hashed,
    role,
  };

  users.push(newUser);
  await saveUsers(users);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};

