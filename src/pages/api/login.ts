import type { APIRoute } from "astro";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

const uri = import.meta.env.DB_LINK_MONGODB;
const client = new MongoClient(uri);

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const username = form.get("username")?.toString();
  const password = form.get("password")?.toString();

  if (!username || !password) {
    return redirect("/login?error=Thiếu thông tin đăng nhập");
  }

  try {
    await client.connect();
    const db = client.db("chemical");
    const users = db.collection("users");

    const user = await users.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
      const sessionData = {
        id: user.id,
        username: user.username,
        role: user.role,
      };
      const encoded = Buffer.from(JSON.stringify(sessionData), "utf-8").toString("base64");

      cookies.set("session_user", encoded, {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 2, // 2 giờ
      });

      return redirect("/admin");
    }
  } catch (err) {
    console.error("MongoDB error:", err);
  } finally {
    await client.close();
  }

  return redirect(`/login?error=${encodeURIComponent("Sai tài khoản hoặc mật khẩu")}`);
};
