# Contributing to Notes MD

Thank you for your interest in contributing to Notes MD! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment following the [Getting Started guide](./getting-started.md)
4. Create a new branch for your feature or bug fix

## Development Workflow

### Setting Up Your Development Environment

```bash
# Clone your fork
git clone https://github.com/your-username/notes-md.git
cd notes-md

# Add the original repository as upstream
git remote add upstream https://github.com/colbylwilliams/notes-md.git

# Install dependencies for both frontend and backend
cd web && npm install
cd ../api && npm install
```

### Branch Naming Convention

Use descriptive branch names that indicate the type of change:

- `feature/add-user-authentication`
- `bugfix/fix-note-saving-issue`
- `docs/update-api-documentation`
- `refactor/improve-note-service`

### Making Changes

1. **Create a new branch** from the main branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the coding standards below

3. **Test your changes** thoroughly:
   ```bash
   # Frontend tests
   cd web && npm test
   
   # Backend tests  
   cd api && npm test
   
   # Linting
   cd web && npm run lint
   cd api && npm run lint
   ```

4. **Commit your changes** with a clear commit message:
   ```bash
   git add .
   git commit -m "feat: add user authentication system"
   ```

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow the existing ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public functions
- Prefer functional programming patterns where appropriate

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use TypeScript interfaces for props
- Follow the existing Material UI patterns
- Handle loading and error states

### API Development

- Follow RESTful API conventions
- Use proper HTTP status codes
- Validate all input data
- Include error handling
- Add comprehensive tests

### File Organization

```
web/src/
├── components/          # Reusable UI components
├── pages/              # Page-level components
├── services/           # API calls and business logic
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── types/              # TypeScript type definitions

api/src/
├── routes/             # Express route handlers
├── middleware/         # Express middleware
├── services/           # Business logic
├── models/             # Data models
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples

```bash
feat: add dark mode toggle
fix: resolve note saving issue in editor
docs: update API documentation
refactor: improve note service error handling
```

## Pull Request Process

1. **Update documentation** if your changes affect the API or user interface

2. **Add tests** for new functionality

3. **Ensure all tests pass** and code follows the style guidelines

4. **Update the README.md** if necessary

5. **Create a pull request** with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Screenshots for UI changes
   - Reference to any related issues

6. **Be responsive** to feedback and make requested changes promptly

### Pull Request Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots for UI changes

## Related Issues
Fixes #(issue number)
```

## Testing Guidelines

### Frontend Testing

- Write unit tests for utility functions
- Test React components with React Testing Library
- Include integration tests for critical user flows
- Test accessibility features

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Backend Testing

- Write unit tests for services and utilities
- Test API endpoints with supertest
- Include database integration tests
- Test error handling scenarios

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Code Review Guidelines

### For Reviewers

- Be constructive and respectful in feedback
- Focus on code quality, performance, and maintainability
- Check for security vulnerabilities
- Verify tests cover the changes
- Ensure documentation is updated

### For Contributors

- Respond to feedback promptly
- Ask questions if feedback is unclear
- Make requested changes or explain why you disagree
- Keep discussions focused on the code

## Issue Reporting

When reporting issues, please include:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Environment details** (OS, browser, Node.js version)
- **Screenshots** if applicable

### Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed

## Questions and Support

- Check existing issues and documentation first
- Join our discussions in GitHub Discussions
- Reach out to maintainers for guidance

## Recognition

Contributors will be recognized in:
- The project README
- Release notes for significant contributions
- GitHub contributor graphs

## TODO: Contributing Improvements

- [ ] Add coding style guide with examples
- [ ] Create issue templates for bug reports and feature requests
- [ ] Add automated code quality checks
- [ ] Document the release process
- [ ] Add guidelines for security vulnerability reporting
- [ ] Create a contributor covenant code of conduct
- [ ] Add onboarding checklist for new contributors
- [ ] Document the project's roadmap and priorities