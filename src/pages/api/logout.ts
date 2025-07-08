import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ cookies }) => {
  await cookies.set('session', '', {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 0,
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/admin/login',
    },
  });
};
