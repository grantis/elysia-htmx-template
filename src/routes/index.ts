import { Elysia } from 'elysia';
import { homeRoutes } from './home';
import { apiRoutes } from './api';

export const setupRoutes = (app: Elysia) => {
  return app
    .use(homeRoutes)
    .use(apiRoutes);
};