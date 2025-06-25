import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("session_user", { path: "/" });
  return redirect("/login");
};
