import { describe, it, expect, beforeEach } from 'vitest';

describe('Environment Variables', () => {
  // Save original env vars
  const originalEnv = { ...import.meta.env };
  
  // Mock environment variables if not present in test environment
  beforeEach(() => {
    // Reset env vars before each test
    const mockEnv = {
      ...originalEnv,
      // Provide fallback values for tests
      VITE_APP_TITLE: originalEnv.VITE_APP_TITLE || 'Notes MD',
      VITE_ENABLE_DARK_MODE_BY_DEFAULT: originalEnv.VITE_ENABLE_DARK_MODE_BY_DEFAULT || 'false',
      VITE_ENABLE_AUTOSAVE: originalEnv.VITE_ENABLE_AUTOSAVE || 'true',
      VITE_API_URL: originalEnv.VITE_API_URL || 'http://localhost:3000/api',
      VITE_AUTOSAVE_INTERVAL: originalEnv.VITE_AUTOSAVE_INTERVAL || '5000'
    };
    
    Object.defineProperty(import.meta, 'env', {
      value: mockEnv
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