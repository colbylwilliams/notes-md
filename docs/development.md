# Development Guide

This guide covers the development workflow, coding standards, and best practices for the Notes MD project.

## Development Workflow

### 1. Setting Up Development Environment

1. Fork the repository
2. Clone your fork locally
3. Install dependencies (see [Getting Started](./getting-started.md))
4. Create a feature branch

### 2. Making Changes

1. Follow the coding standards outlined below
2. Write tests for new functionality
3. Run lints and tests before committing
4. Make small, focused commits with clear messages

### 3. Submitting Changes

1. Push your feature branch to your fork
2. Create a pull request with a clear description
3. Address any feedback from code review

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration in the project
- Use meaningful variable and function names
- Add type annotations where helpful

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use TypeScript interfaces for props
- Follow Material-UI patterns for styling

### API Development

- Follow RESTful conventions
- Use appropriate HTTP status codes
- Validate inputs using express-validator
- Add proper error handling

## Testing

### Frontend Testing
- Use Vitest for unit tests
- Test component behavior, not implementation
- Mock external dependencies

### Backend Testing
- Use Jest for unit tests
- Test API endpoints thoroughly
- Mock database operations

## Code Quality

### Linting
```bash
# Frontend
cd web && npm run lint

# Backend  
cd api && npm run lint
```

### Testing
```bash
# Frontend
cd web && npm test

# Backend
cd api && npm test
```

## TODOs

- [ ] Add pre-commit hooks setup
- [ ] Document code review process
- [ ] Add performance testing guidelines
- [ ] Create debugging guide
- [ ] Document branch naming conventions
- [ ] Add commit message conventions
- [ ] Create issue templates
- [ ] Add CI/CD pipeline documentation
- [ ] Document security best practices
- [ ] Add monitoring and logging guidelines

## Tools and Resources

- **VSCode Extensions**: TypeScript, ESLint, Prettier
- **Browser DevTools**: React Developer Tools
- **API Testing**: Postman, curl, or similar tools

---

For contribution guidelines, see [Contributing](./contributing.md).