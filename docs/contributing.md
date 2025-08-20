# Contributing to Notes MD

Thank you for your interest in contributing to Notes MD! This guide will help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Follow the [Getting Started guide](./getting-started.md) to set up your development environment
4. Create a new branch for your feature/fix

## Development Workflow

### Branch Naming
- `feature/description` - for new features
- `fix/description` - for bug fixes
- `docs/description` - for documentation updates

### Commit Messages
Use conventional commit format:
- `feat: add new feature`
- `fix: resolve bug`
- `docs: update documentation`
- `refactor: improve code structure`
- `test: add tests`

## Code Standards

### Frontend (React/TypeScript)
- Use TypeScript for all new code
- Follow existing component patterns
- Use Material UI components when possible
- Write JSDoc comments for complex functions

### Backend (Express/TypeScript)
- Use TypeScript for all new code
- Follow REST API conventions
- Add proper error handling
- Write unit tests for new features

### General
- Run linting before committing: `npm run lint`
- Ensure all tests pass: `npm test`
- Update documentation for new features

## Testing

### Frontend Testing
```bash
cd web
npm test
```

### Backend Testing
```bash
cd api
npm test
```

## Pull Request Process

1. Ensure your code follows the project standards
2. Update documentation as needed
3. Add tests for new functionality
4. Ensure all tests pass
5. Create a pull request with a clear description

### Pull Request Template
<!-- TODO: Create PR template -->

## Reporting Issues

When reporting issues, please include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/Node.js version
- Screenshots (if applicable)

## Feature Requests

For feature requests, please:
- Check existing issues first
- Provide clear use case description
- Consider implementation impact

## Code Review Guidelines

- Be constructive and respectful
- Focus on code quality and maintainability
- Suggest improvements with explanations
- Approve when ready

## TODO

- [ ] Create issue templates
- [ ] Add code review checklist
- [ ] Create PR template
- [ ] Add contributor recognition system
- [ ] Document release process
- [ ] Create development setup automation
- [ ] Add style guide examples