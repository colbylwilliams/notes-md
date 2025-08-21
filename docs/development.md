# Development Workflow

This guide outlines the development workflow, best practices, and tools used in the Notes MD project.

## Development Environment Setup

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Git
- VS Code (recommended) with extensions:
  - TypeScript and JavaScript Language Features
  - ESLint
  - Prettier
  - React Developer Tools

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md

# Install dependencies
cd web && npm install
cd ../api && npm install
```

## Development Servers

### Frontend Development

```bash
cd web
npm run dev
```

- Development server runs on `http://localhost:5173`
- Hot module replacement (HMR) enabled
- TypeScript checking in development
- ESLint integration

### Backend Development

```bash
cd api
npm run dev
```

- API server runs on `http://localhost:3000`
- Auto-restart on file changes with `ts-node-dev`
- TypeScript compilation on-the-fly
- Error reporting and debugging

### Running Both Simultaneously

Use two terminal windows or consider using tools like:

```bash
# Using npm-run-all (install globally first)
npm install -g npm-run-all

# Create a root package.json with:
"scripts": {
  "dev": "npm-run-all --parallel dev:web dev:api",
  "dev:web": "cd web && npm run dev",
  "dev:api": "cd api && npm run dev"
}
```

## Code Quality Tools

### Linting

Both frontend and backend use ESLint for code quality:

```bash
# Frontend linting
cd web && npm run lint

# Backend linting  
cd api && npm run lint

# Auto-fix issues
npm run lint -- --fix
```

### Type Checking

TypeScript configuration is optimized for development:

```bash
# Check types without building
cd web && npx tsc --noEmit
cd api && npx tsc --noEmit
```

### Code Formatting

Prettier is configured for consistent code formatting:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## Testing Strategy

### Frontend Testing

```bash
cd web

# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

**Testing Stack:**
- Vitest - Test runner
- React Testing Library - Component testing
- Jest DOM - DOM testing utilities

**Test Structure:**
```
src/
├── components/
│   ├── NoteEditor.tsx
│   └── __tests__/
│       └── NoteEditor.test.tsx
└── services/
    ├── notes/
    │   ├── index.ts
    │   └── __tests__/
    │       └── index.test.ts
```

### Backend Testing

```bash
cd api

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

**Testing Stack:**
- Jest - Test framework
- Supertest - HTTP endpoint testing
- TypeScript support

## Build Process

### Frontend Build

```bash
cd web
npm run build
```

**Build Steps:**
1. TypeScript compilation
2. Vite bundling and optimization
3. Asset optimization
4. Output to `dist/` directory

### Backend Build

```bash
cd api
npm run build
```

**Build Steps:**
1. TypeScript compilation to JavaScript
2. Output to `dist/` directory
3. Source maps generation

## Debugging

### Frontend Debugging

1. **Browser DevTools**
   - React Developer Tools extension
   - Console debugging
   - Network tab for API calls

2. **VS Code Debugging**
   ```json
   {
     "type": "chrome",
     "request": "launch",
     "name": "Debug React App",
     "url": "http://localhost:5173",
     "webRoot": "${workspaceFolder}/web/src"
   }
   ```

### Backend Debugging

1. **Console Debugging**
   ```typescript
   console.log('Debug info:', data);
   ```

2. **VS Code Debugging**
   ```json
   {
     "type": "node",
     "request": "launch",
     "name": "Debug API",
     "program": "${workspaceFolder}/api/src/index.ts",
     "runtimeArgs": ["-r", "ts-node/register"],
     "env": {
       "NODE_ENV": "development"
     }
   }
   ```

## Environment Configuration

### Frontend Environment Variables

Create `.env.local` in the `web/` directory:

```env
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true
VITE_LOG_LEVEL=debug
```

### Backend Environment Variables

Create `.env` in the `api/` directory:

```env
NODE_ENV=development
PORT=3000
LOG_LEVEL=debug
CORS_ORIGIN=http://localhost:5173
```

## Git Workflow

### Branch Strategy

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to origin
git push origin feature/new-feature

# Create pull request
```

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

body

footer
```

### Pre-commit Hooks

Consider setting up pre-commit hooks:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

## Performance Optimization

### Frontend Performance

1. **Bundle Analysis**
   ```bash
   npm run build
   npx vite-bundle-analyzer dist
   ```

2. **Development Performance**
   - Use React DevTools Profiler
   - Monitor network requests
   - Check for memory leaks

### Backend Performance

1. **Profiling**
   ```bash
   # Add to development dependencies
   npm install --save-dev clinic
   
   # Profile the application
   clinic doctor -- node dist/index.js
   ```

2. **Monitoring**
   - Add request logging
   - Monitor response times
   - Track error rates

## Common Development Tasks

### Adding a New Component

1. Create component file in `web/src/components/`
2. Add TypeScript interfaces
3. Write unit tests
4. Update exports if needed

### Adding a New API Endpoint

1. Define route in `api/src/routes/`
2. Add business logic to services
3. Update TypeScript types
4. Write endpoint tests
5. Update API documentation

### Database Schema Changes

*TODO: Document when database is implemented*

### Environment-Specific Configuration

```typescript
// Config utility
const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    timeout: 5000
  },
  features: {
    darkMode: import.meta.env.VITE_ENABLE_DARK_MODE === 'true',
    autosave: import.meta.env.VITE_ENABLE_AUTOSAVE === 'true'
  }
};
```

## Troubleshooting

### Common Issues

**Port Already in Use:**
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
```

**Node Modules Issues:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**TypeScript Errors:**
```bash
# Restart TypeScript service in VS Code
Ctrl+Shift+P > "TypeScript: Restart TS Server"
```

**Build Errors:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## TODO: Development Workflow Improvements

- [ ] Add Docker development environment
- [ ] Set up automated testing in CI/CD
- [ ] Add performance monitoring tools
- [ ] Create development database seeding scripts
- [ ] Add API mocking for frontend development
- [ ] Set up hot reloading for backend
- [ ] Add automated accessibility testing
- [ ] Create development troubleshooting guide
- [ ] Add code coverage reporting
- [ ] Set up automated dependency updates