import { Elysia } from 'elysia';
import { Html } from '@elysiajs/html';

// Example of a simple in-memory counter
let counter = 0;

export const apiRoutes = new Elysia({ prefix: '/api' })
  .get('/counter', () => {
    return (
      <div id="counter-value" class="font-bold text-xl">
        Current count: {counter}
      </div>
    );
  })
  .post('/counter/increment', () => {
    counter += 1;
    return (
      <div id="counter-value" class="font-bold text-xl">
        Current count: {counter}
      </div>
    );
  })
  .post('/counter/decrement', () => {
    counter -= 1;
    return (
      <div id="counter-value" class="font-bold text-xl">
        Current count: {counter}
      </div>
    );
  })
  .get('/users', () => {
    // Example JSON API response
    return {
      users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
      ]
    };
  })
  .get('/users/:id', ({ params }) => {
    // Example dynamic route with params
    const userId = parseInt(params.id);
    
    // Mock database lookup
    const users = [
      { id: 1, name: 'Alice', role: 'Admin' },
      { id: 2, name: 'Bob', role: 'User' },
      { id: 3, name: 'Charlie', role: 'Editor' }
    ];
    
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      return {
        error: 'User not found'
      };
    }
    
    return {
      user
    };
  });