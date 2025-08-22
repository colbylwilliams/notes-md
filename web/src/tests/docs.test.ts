import { describe, it, expect } from 'vitest';
import { existsSync } from 'fs';
import { join } from 'path';

describe('Documentation Structure', () => {
  const docsPath = join(process.cwd(), '../docs');
  
  it('should have docs directory', () => {
    expect(existsSync(docsPath)).toBe(true);
  });

  it('should have main documentation files', () => {
    const expectedFiles = [
      'README.md',
      'getting-started.md', 
      'deployment.md',
      'contributing.md'
    ];

    expectedFiles.forEach(file => {
      const filePath = join(docsPath, file);
      expect(existsSync(filePath)).toBe(true);
    });
  });

  it('should have API documentation directory', () => {
    const apiDocsPath = join(docsPath, 'api');
    expect(existsSync(apiDocsPath)).toBe(true);
    expect(existsSync(join(apiDocsPath, 'README.md'))).toBe(true);
  });

  it('should have web documentation directory', () => {
    const webDocsPath = join(docsPath, 'web');
    expect(existsSync(webDocsPath)).toBe(true);
    expect(existsSync(join(webDocsPath, 'README.md'))).toBe(true);
  });
});