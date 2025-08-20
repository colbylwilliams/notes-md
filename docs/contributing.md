# Contributing Guidelines

Thank you for considering contributing to Notes MD! This document provides guidelines and information for contributors.

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please be respectful and considerate in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature/fix
4. Make your changes
5. Test your changes thoroughly
6. Submit a pull request

## Development Setup

See the [Getting Started Guide](./getting-started.md) for detailed setup instructions.

## Project Structure

```
notes-md/
├── web/          # React frontend
├── api/          # Express API
├── docs/         # Documentation
└── README.md     # Main project README
```

## Development Workflow

### 1. Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `chore/description` - Maintenance tasks

### 2. Commit Messages
Follow conventional commit format:
```
type(scope): description

Examples:
feat(api): add note search endpoint
fix(web): resolve markdown rendering issue
docs: update API documentation
```

### 3. Pull Request Process
1. Ensure all tests pass
2. Update documentation if needed
3. Add detailed description of changes
4. Link related issues
5. Request review from maintainers

## Coding Standards

### Frontend (React/TypeScript)
- Use TypeScript for type safety
- Follow React best practices
- Use Material UI components when possible
- Write tests for new features

### Backend (Node.js/TypeScript)
- Use TypeScript for all new code
- Follow RESTful API conventions
- Add proper error handling
- Write tests for new endpoints

### General
- Use ESLint and Prettier for code formatting
- Write clear, descriptive variable names
- Add comments for complex logic
- Keep functions small and focused

## Testing

### Running Tests
```bash
# Frontend tests
cd web && npm run test

# API tests
cd api && npm run test
```

### Writing Tests
- Write unit tests for utility functions
- Add integration tests for API endpoints
- Include component tests for React components
- Aim for good test coverage

## Documentation

- Update relevant documentation for changes
- Add JSDoc comments for public APIs
- Include examples in documentation
- Keep README files up to date

## TODO

- [ ] Add detailed coding standards and style guide
- [ ] Create issue templates for bugs and features
- [ ] Add pull request template
- [ ] Document release process and versioning
- [ ] Add guidelines for breaking changes
- [ ] Include security vulnerability reporting process
- [ ] Add contributor recognition system
- [ ] Create troubleshooting guide for contributors
- [ ] Add performance testing guidelines
- [ ] Include accessibility contribution guidelines

## Questions or Issues?

- Check existing issues before creating new ones
- Use issue templates when available
- Tag issues appropriately
- Provide clear reproduction steps for bugs

## Recognition

Contributors will be recognized in the project README and release notes.

---

Thank you for contributing to Notes MD!