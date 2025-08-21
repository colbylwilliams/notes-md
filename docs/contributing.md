# Contributing to Notes MD

Thank you for your interest in contributing to Notes MD! This guide will help you get started with contributing to the project.

## Code of Conduct

Please note that this project adheres to a Code of Conduct. By participating, you are expected to uphold this code.

🚧 **TODO**: Add link to Code of Conduct when created.

## How to Contribute

### Reporting Issues

Before creating an issue, please check if it already exists in the [issue tracker](https://github.com/colbylwilliams/notes-md/issues).

When creating an issue, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, Node.js version)
- Screenshots if applicable

### Suggesting Features

We welcome feature suggestions! Please create an issue with:
- Clear description of the feature
- Use cases and benefits
- Possible implementation approach
- Any relevant examples or mockups

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Setup Steps

1. **Fork the repository**
   - Click the "Fork" button on GitHub
   - Clone your fork locally

2. **Set up the development environment**
   ```bash
   git clone https://github.com/YOUR_USERNAME/notes-md.git
   cd notes-md
   
   # Install API dependencies
   cd api
   npm install
   
   # Install web dependencies
   cd ../web
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development servers**
   ```bash
   # Terminal 1: Start API
   cd api && npm run dev
   
   # Terminal 2: Start frontend
   cd web && npm run dev
   ```

## Development Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new code
- **Formatting**: Use Prettier for code formatting
- **Linting**: Follow ESLint rules
- **Naming**: Use descriptive names for variables and functions

### Commit Guidelines

We follow conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(api): add note search functionality
fix(web): resolve markdown preview rendering issue
docs: update API documentation
```

### Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting
- Aim for good test coverage

```bash
# Run tests
cd web && npm test
cd api && npm test

# Run linting
npm run lint
```

### Documentation

- Update documentation for new features
- Add JSDoc comments for public APIs
- Update README if needed

## Pull Request Process

### Before Submitting

1. **Test your changes**
   - Run all tests locally
   - Test in both development and build modes
   - Test API endpoints with tools like Postman

2. **Update documentation**
   - Update relevant docs in `/docs`
   - Add JSDoc comments
   - Update README if needed

3. **Clean up commits**
   - Use meaningful commit messages
   - Squash related commits if needed

### Submitting a Pull Request

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create the pull request**
   - Go to GitHub and create a pull request
   - Use the pull request template
   - Link related issues

3. **Pull request description should include:**
   - Clear description of changes
   - Screenshots for UI changes
   - Links to related issues
   - Testing instructions

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added new tests for functionality
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots here

## Related Issues
Closes #123
```

### Review Process

- At least one maintainer will review your PR
- Address feedback promptly
- Be open to suggestions and changes
- CI checks must pass

## Areas for Contribution

### High Priority

🚧 **TODO**: Identify specific areas needing help

- [ ] Authentication system
- [ ] Note search functionality
- [ ] Export/import features
- [ ] Mobile responsiveness improvements
- [ ] Performance optimizations

### Good First Issues

Look for issues labeled "good first issue" for beginner-friendly tasks:
- Documentation improvements
- UI/UX enhancements
- Bug fixes
- Test coverage improvements

### Advanced Contributions

- Architecture improvements
- New integrations
- Performance optimizations
- Security enhancements

## Development Resources

### Useful Links

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material UI Documentation](https://mui.com/)
- [Express.js Guide](https://expressjs.com/)
- [Vite Documentation](https://vite.dev/)

### Project Structure

```
notes-md/
├── api/                 # Backend API
│   ├── src/            # Source code
│   ├── tests/          # API tests
│   └── README.md       # API documentation
├── web/                # Frontend application
│   ├── src/            # Source code
│   ├── tests/          # Frontend tests
│   └── README.md       # Frontend documentation
├── docs/               # Project documentation
└── README.md           # Main project README
```

## Getting Help

- **Discord/Slack**: 🚧 **TODO**: Add community chat links
- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Create an issue for bugs or feature requests
- **Email**: 🚧 **TODO**: Add maintainer contact if appropriate

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes for significant contributions
- Project README

Thank you for contributing to Notes MD! 🚀

---

📝 **TODO**:
- Add Code of Conduct
- Set up community chat (Discord/Slack)
- Create issue and PR templates
- Add automated contributor recognition
- Set up CI/CD pipeline documentation
- Add security reporting guidelines