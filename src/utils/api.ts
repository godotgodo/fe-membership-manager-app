export const handleApiError = (error: Error | unknown, API: string): void => {
  // Show some errors...
  // eslint-disable-next-line no-console
  console.log(`Error while calling ${API} API`, error);
};

export const API_URL = process.env.API_URL;

// TypeScript for config object
export const config = {
  headers: {
    // Authorization: authHeader().Authorization, // Uncomment if needed
    'Content-Type': 'application/json',
  } as Record<string, string>,
};
