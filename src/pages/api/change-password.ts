import type { APIRoute } from "astro";
import { requireRole } from "../../lib/auth";
import path from "path";
import fs from "fs/promises";
import bcrypt from "bcrypt";

const filePath = path.resolve("src/data/user.json");

async function getUsers() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function saveUsers(users: any[]) {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");
}

export const POST: APIRoute = async ({ request, cookies }) => {
  const user = requireRole(cookies, ["user", "admin"]);
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { oldPassword, newPassword } = await request.json();
  if (!oldPassword || !newPassword) {
    return new Response("Thiếu thông tin", { status: 400 });
  }

  const users = await getUsers();
  const index = users.findIndex((u: any) => u.id === user.id);
  if (index === -1) return new Response("Người dùng không tồn tại", { status: 404 });

  const valid = await bcrypt.compare(oldPassword, users[index].password);
  if (!valid) return new Response("Mật khẩu cũ không đúng", { status: 403 });

  users[index].password = await bcrypt.hash(newPassword, 10);
  await saveUsers(users);

  return new Response("Đổi mật khẩu thành công", {
    headers: { "Content-Type": "text/plain" },
  });
};
