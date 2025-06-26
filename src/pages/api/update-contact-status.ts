import type { APIRoute } from "astro";
import { getDB } from "../../lib/mongodb";


export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const { id } = await request.json();
  if (!id) return new Response("Thiếu ID", { status: 400 });

  try {
    const db = await getDB(locals.runtime.env);
    const contact = await db.collection("contacts").findOne({ id });

    if (!contact) {
      return new Response("Contact not found", { status: 404 });
    }

    if (contact.status !== "read") {
      await db.collection("contacts").updateOne({ id }, { $set: { status: "read" } });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("MongoDB error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};
