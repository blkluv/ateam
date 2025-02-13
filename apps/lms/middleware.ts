import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/api/webhook',
    '/api/uploadthing',
    '/api/clerk',
    '/sign-in',
    '/sign-up',
  ],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
