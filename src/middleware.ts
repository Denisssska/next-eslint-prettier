export { default } from 'next-auth/middleware';

// //для приватных роутов
export const config = {
  matcher: ['/profile', '/protected/:path*'],
};
