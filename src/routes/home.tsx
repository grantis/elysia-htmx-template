import { Elysia } from 'elysia';
import { BaseLayout } from '../components/layouts/BaseLayout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Html } from '@elysiajs/html';
import { Diagram } from '../components/ui/Diagram';

export const homeRoutes = new Elysia()
  .get('/', () => {
    return (
      <BaseLayout title="Home Page">
        <div class="container mx-auto py-8">
          <h1 class="text-3xl font-bold mb-6">Welcome to Elysia + HTMX</h1>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Getting Started">
              <p class="mb-4">This is a starter template for Elysia + Bun + JSX + Tailwind + HTMX.</p>
              <div 
                hx-get="/api/counter" 
                hx-trigger="load" 
                hx-swap="innerHTML"
                class="p-4 bg-gray-100 rounded mb-4"
              >
                Loading counter...
              </div>
              <Button 
                hx-post="/api/counter/increment" 
                hx-target="#counter-value"
              >
                Increment Counter
              </Button>
              <Button 
                hx-post="/api/counter/decrement" 
                hx-target="#counter-value"
              >
                Decrement Counter
              </Button>
            </Card>
            
            <Card title="Features">
              <ul class="list-disc pl-5 space-y-2">
                <li>Server-side rendering with JSX</li>
                <li>Tailwind CSS for styling</li>
                <li>HTMX for dynamic interactions</li>
                <li>Type-safe routes with Elysia</li>
                <li>Fast development with Bun</li>
              </ul>
            </Card>
          </div>
        </div>
      </BaseLayout>
    );
  })
  .get('/server-side-architecture', () => {
    return (
      <BaseLayout title="Server-Side Architecture">
        <div class="container mx-auto py-8">
          <h1 class="text-3xl font-bold mb-6">Server-Side Architecture</h1>
          <Diagram />
        </div>
      </BaseLayout>
    )
  })
  .get('/about', () => {
    return (
      <BaseLayout title="About">
        <div class="container mx-auto py-8">
          <h1 class="text-3xl font-bold mb-6">About Page</h1>
          <p class="mb-4">This is the about page for our Elysia + HTMX application.</p>
          <div 
            hx-get="/partials/team" 
            hx-trigger="load" 
            class="p-4 bg-gray-100 rounded"
          >
            Loading team information...
          </div>
        </div>
      </BaseLayout>
    );
  })
  .get('/partials/team', () => {
    // Example of a partial that can be loaded with HTMX
    return (
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Alice', 'Bob', 'Charlie'].map(name => (
            <div class="p-4 bg-white shadow rounded">
              <h3 class="font-medium">{name}</h3>
              <p class="text-gray-600">Team Member</p>
            </div>
          ))}
        </div>
      </div>
    );
  });