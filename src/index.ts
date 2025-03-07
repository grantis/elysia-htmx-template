import { Elysia } from 'elysia';
import { html, } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import { setupRoutes } from './routes';

// Copy HTMX library to public directory
// await Bun.write('./public/js/htmx.min.js', await Bun.file('./node_modules/htmx.org/dist/htmx.min.js').text());

// Create app instance
const app = new Elysia()
  .use(html())
  .use(staticPlugin({
    assets: 'public',
    prefix: '/public'
  }))
  .use(setupRoutes)
  .listen(3000);

console.log(`🦊 Elysia server is running at http://${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;