import { Html } from '@elysiajs/html';

type BaseLayoutProps = {
  title?: string;
  children: any;
};

export const BaseLayout = ({ title = 'Elysia App', children }: BaseLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
        <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
      </head>
      <body class="bg-gray-50 min-h-screen">
        <nav class="bg-white shadow">
          <div class="container mx-auto px-4">
            <div class="flex justify-between h-16">
              <div class="flex">
                <div class="flex-shrink-0 flex items-center">
                  <span class="text-xl font-bold">Elysia App</span>
                </div>
                <div class="ml-6 flex items-center space-x-4">
                  <a href="/" class="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Home</a>
                  <a href="/about" class="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">About</a>
                  <a href="/server-side-architecture" class="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Diagrams</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer class="bg-white shadow mt-8 py-4">
          <div class="container mx-auto px-4">
            <p class="text-center text-gray-500">
              Built with Elysia, Bun, Tailwind CSS, and HTMX
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
};