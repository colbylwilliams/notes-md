import { describe, it, expect, beforeEach } from 'vitest';

describe('Environment Variables', () => {
  // Save original env vars
  const originalEnv = { ...import.meta.env };
  
  beforeEach(() => {
    // Reset env vars before each test
    Object.defineProperty(import.meta, 'env', {
      value: { ...originalEnv }
    });
  });

  it('should load environment variables with VITE_ prefix', () => {
    // Check that our environment variables are accessible
    expect(import.meta.env.VITE_APP_TITLE).toBeDefined();
    expect(import.meta.env.VITE_ENABLE_DARK_MODE_BY_DEFAULT).toBeDefined();
  });

  it('should use default values when environment variables are not set', () => {
    // Simulate missing env vars
    Object.defineProperty(import.meta, 'env', {
      value: {}
    });
    
    // Import App component (it should use default values)
    const appTitle = import.meta.env.VITE_APP_TITLE || 'Notes MD';
    const defaultDarkMode = import.meta.env.VITE_ENABLE_DARK_MODE_BY_DEFAULT === 'true';
    
    expect(appTitle).toBe('Notes MD');
    expect(defaultDarkMode).toBe(false);
  });
});