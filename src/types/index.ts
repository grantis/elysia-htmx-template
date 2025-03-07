/**
 * Common types for the application
 */

// Example user type
export interface User {
    id: number;
    name: string;
    email?: string;
    role: 'admin' | 'user' | 'editor';
  }
  
  // Example pagination type
  export interface PaginationParams {
    page: number;
    limit: number;
    total?: number;
  }
  
  // Example API response type
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    pagination?: PaginationParams;
  }