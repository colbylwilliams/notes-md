# Contributing to Notes MD

Thank you for your interest in contributing to Notes MD! This guide will help you get started.

## Code of Conduct

Please be respectful and professional in all interactions. We aim to create a welcoming environment for all contributors.

## How to Contribute

### Reporting Issues

- Use the GitHub Issues to report bugs or request features
- Provide clear reproduction steps for bugs
- Include relevant system information
- Search existing issues before creating new ones

### Development Setup

1. Fork the repository
2. Clone your fork
3. Follow the [Getting Started Guide](./getting-started.md)
4. Create a new branch for your changes

### Making Changes

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow existing code style and conventions
   - Write clear, descriptive commit messages
   - Add tests for new functionality
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   # Frontend
   cd web
   npm run lint
   npm run test
   npm run build
   
   # Backend
   cd api
   npm run lint
   npm run test
   npm run build
   ```

4. **Submit a Pull Request**
   - Push your branch to your fork
   - Create a pull request with a clear description
   - Reference any related issues

## Code Style Guidelines

### TypeScript/JavaScript
- Use TypeScript for type safety
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### React Components
- Use functional components with hooks
- Keep components focused and single-purpose
- Use Material UI components consistently
- Follow React best practices

### API Development
- Use RESTful conventions
- Validate input data
- Handle errors appropriately
- Document endpoints

## Testing

TODO: Expand testing guidelines
- Write unit tests for new functions
- Test React components
- Add integration tests for API endpoints
- Ensure good test coverage

## Documentation

- Update relevant documentation for your changes
- Add inline comments for complex logic
- Update API documentation for endpoint changes
- Keep README files current

## Review Process

1. All changes require pull request review
2. Automated tests must pass
3. Code style checks must pass
4. At least one maintainer approval required

## Getting Help

- Join discussions in GitHub Issues
- Ask questions in pull requests
- Check existing documentation first

TODO: Add community communication channels (Discord, Slack, etc.)

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes for significant contributions
- TODO: Add contributor recognition system

## License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.