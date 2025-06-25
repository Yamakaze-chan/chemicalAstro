import type { APIRoute } from "astro";
import path from "path";
import fs from "fs/promises";
import bcrypt from "bcrypt";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const username = form.get("username")?.toString();
  const password = form.get("password")?.toString();

  if (!username || !password) {
    return redirect("/login?error=Thiếu thông tin đăng nhập");
  }

  const filePath = path.resolve("src/data/user.json");
  const users = JSON.parse(await fs.readFile(filePath, "utf-8"));

  const user = users.find((u: any) => u.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    // ✅ Dùng base64 để lưu cookie an toàn với Unicode
    const sessionData = {
      id: user.id,
      username: user.username,
      role: user.role
    };
    const encoded = Buffer.from(JSON.stringify(sessionData), "utf-8").toString("base64");

    cookies.set("session_user", encoded, {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 2, // 2 giờ
    });

    return redirect("/admin");
  }

  return redirect(`/login?error=${encodeURIComponent("Sai tài khoản hoặc mật khẩu")}`);
};
