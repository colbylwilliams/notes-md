# Development Guide

This guide provides information for developers contributing to Notes MD.

## Development Environment Setup

Follow the [Getting Started](getting-started.md) guide to set up your local development environment.

## Project Structure

```
notes-md/
├── api/                    # Backend REST API
│   ├── src/               # TypeScript source files
│   ├── package.json       # API dependencies and scripts
│   └── README.md          # API-specific documentation
├── web/                   # Frontend React application
│   ├── src/               # React/TypeScript source files
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies and scripts
│   └── README.md          # Frontend-specific documentation
├── docs/                  # Project documentation
└── README.md              # Main project documentation
```

## Development Workflow

### 1. Code Style and Linting

Both the frontend and API use ESLint for code quality:

```bash
# Lint frontend code
cd web
npm run lint

# Lint API code
cd api
npm run lint
```

### 2. Testing

```bash
# Run frontend tests
cd web
npm test

# Run API tests
cd api
npm test
```

### 3. Building

```bash
# Build frontend
cd web
npm run build

# Build API
cd api
npm run build
```

## Coding Standards

### TypeScript Guidelines

- Use strict TypeScript configuration
- Define interfaces for all data models
- Avoid `any` type usage
- Use meaningful variable and function names

### React Guidelines

- Use functional components with hooks
- Keep components focused and single-purpose
- Use TypeScript interfaces for props
- Follow Material-UI design patterns

### API Guidelines

- Use RESTful conventions
- Implement proper error handling
- Use TypeScript for type safety
- Follow Express.js best practices

## Git Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Run tests and linting
4. Commit with descriptive messages
5. Push and create a pull request

## TODO

- [ ] Add detailed coding standards and examples
- [ ] Document testing strategy and best practices
- [ ] Add CI/CD pipeline documentation
- [ ] Include debugging guides
- [ ] Add performance monitoring setup
- [ ] Document security considerations
- [ ] Add contribution guidelines