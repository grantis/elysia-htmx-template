/**
 * Formats a date string
 */
export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  /**
   * Truncates text to a specified length
   */
  export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  /**
   * Example utility for form validation
   */
  export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  /**
   * Utility to handle HTMX response
   */
  export const htmxResponse = (content: string, headers: Record<string, string> = {}): Response => {
    return new Response(content, {
      headers: {
        'Content-Type': 'text/html',
        ...headers
      }
    });
  };