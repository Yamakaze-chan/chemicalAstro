// middleware.js
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Check if it's a static file path
  if (url.pathname.startsWith("/styles/")) {
    // Rewrite to static assets in dist/client/
    const filePath = url.pathname.replace(/^\/+/, "");
    const asset = await context.env.ASSETS.fetch(url.toString());

    if (asset.ok) return asset;
  }

  // Otherwise continue to SSR
  return context.next();
}
