# Contributing to Notes MD

We welcome contributions to Notes MD! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your feature or bug fix
4. Make your changes
5. Test your changes
6. Submit a pull request

## Development Setup

See the [Getting Started Guide](./getting-started.md) for detailed setup instructions.

## Code Style

### TypeScript

- Use TypeScript for all new code
- Follow existing naming conventions
- Add proper type annotations
- Use interfaces for object types

### React

- Use functional components with hooks
- Follow the existing component structure
- Use Material-UI components when possible
- Keep components focused and reusable

### Git Workflow

1. Create a descriptive branch name: `feature/add-search` or `fix/editor-bug`
2. Make atomic commits with clear messages
3. Rebase your branch on main before submitting PR
4. Ensure all tests pass before submitting

## Testing

### Frontend Tests

```bash
cd web
npm run test
```

### API Tests

```bash
cd api
npm run test
```

### Manual Testing

- Test both light and dark modes
- Verify responsive design on different screen sizes
- Test markdown rendering with various content types
- Ensure API endpoints work correctly

## Pull Request Guidelines

1. **Title**: Use a clear, descriptive title
2. **Description**: Explain what changes you made and why
3. **Testing**: Describe how you tested your changes
4. **Screenshots**: Include screenshots for UI changes
5. **Documentation**: Update documentation if needed

### PR Checklist

- [ ] Code follows existing style conventions
- [ ] Tests pass locally
- [ ] Documentation updated if needed
- [ ] No console errors or warnings
- [ ] Responsive design tested
- [ ] Accessibility considerations addressed

## Issue Reporting

When reporting issues:

1. Use a clear, descriptive title
2. Provide steps to reproduce
3. Include expected vs actual behavior
4. Add screenshots if applicable
5. Specify your environment (OS, browser, Node version)

## Feature Requests

For new features:

1. Check if similar feature exists or was requested
2. Explain the use case and benefit
3. Consider backward compatibility
4. Be open to discussion and feedback

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain a positive environment

---

*TODO: Add specific coding standards, commit message format, and review process details.*