import server from "./dist/_worker.js/index.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (
      url.pathname.startsWith("/_astro") ||
      url.pathname.startsWith("/assets") ||
      url.pathname.endsWith(".ico")
    ) {
      const staticRes = await env.ASSETS?.fetch?.(request);
      if (staticRes && staticRes.status !== 404) return staticRes;
    }

    return server.fetch(request, env, ctx);
  },
};
