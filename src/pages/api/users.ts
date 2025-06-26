import type { APIRoute } from "astro";
import bcrypt from "bcrypt";
import { getDB } from "../../lib/mongodb";
import { requireRole } from "../../lib/auth";

// GET: Trả danh sách người dùng
export const GET: APIRoute = async ({ cookies }) => {
  const user = requireRole(cookies, ["admin"]);
  if (!user) return new Response("Unauthorized", { status: 401 });

  const db = await getDB(locals.runtime.env);
  const users = await db.collection("users").find().project({ password: 0 }).toArray();

  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
};

// DELETE: Xoá người dùng theo ID
export const DELETE: APIRoute = async ({ request, cookies }) => {
  const user = requireRole(cookies, ["admin"]);
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { id } = await request.json();
  const db = await getDB(locals.runtime.env);
  await db.collection("users").deleteOne({ id });

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

  const hashed = await bcrypt.hash(newPassword, 10);
  const db = await getDB(locals.runtime.env);
  const result = await db.collection("users").updateOne({ id }, { $set: { password: hashed } });

  if (result.modifiedCount === 0) return new Response("Không tìm thấy người dùng", { status: 404 });

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

  const db = await getDB(locals.runtime.env);
  const existing = await db.collection("users").findOne({ username });
  if (existing) return new Response("Tài khoản đã tồn tại", { status: 409 });

  const hashed = await bcrypt.hash(password, 10);
  const id = Date.now() + Math.floor(Math.random() * 10000);
  const newUser = { id, username, password: hashed, role };

  await db.collection("users").insertOne(newUser);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
