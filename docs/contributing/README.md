# Contributing to Notes MD

Thank you for your interest in contributing to Notes MD! This guide will help you get started.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and constructive in all interactions.

## How Can You Contribute?

### 🐛 Bug Reports
- Search existing issues first
- Use the bug report template
- Include steps to reproduce
- Provide environment details

### ✨ Feature Requests  
- Check if the feature already exists
- Use the feature request template
- Explain the use case and benefits
- Consider implementation complexity

### 📝 Documentation
- Fix typos and improve clarity
- Add missing documentation
- Update outdated information
- Add examples and tutorials

### 💻 Code Contributions
- Bug fixes
- New features
- Performance improvements
- Code refactoring

## Getting Started

### 1. Fork and Clone
```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR-USERNAME/notes-md.git
cd notes-md
```

### 2. Set Up Development Environment
Follow the [Development Setup Guide](../developer-guide/setup.md) to get your environment ready.

### 3. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number
```

### 4. Make Your Changes
- Follow the [Code Style Guide](../developer-guide/code-style.md)
- Write tests for new functionality
- Update documentation as needed

### 5. Test Your Changes
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

### 6. Commit Your Changes
```bash
git add .
git commit -m "type: brief description

Longer description if needed
- Detail 1
- Detail 2

Fixes #issue-number"
```

### Commit Message Format
```
type: brief description (50 chars max)

Longer description explaining what and why (72 chars per line)

- List any breaking changes
- Reference issues: Fixes #123, Closes #456
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix  
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### 7. Push and Create Pull Request
```bash
git push origin your-branch-name
```

Then create a pull request on GitHub with:
- Clear title and description
- Reference related issues
- Screenshots for UI changes
- Testing instructions

## Development Guidelines

### Code Quality
- Follow TypeScript best practices
- Write comprehensive tests
- Use meaningful variable names
- Add comments for complex logic

### Testing
- Write unit tests for new functions
- Add integration tests for new features
- Ensure all tests pass before submitting
- Aim for good test coverage

### Documentation
- Update relevant documentation
- Add JSDoc comments for new functions
- Include examples where helpful
- Update README if needed

## Review Process

1. **Automated Checks:** Your PR will run automated tests and linting
2. **Code Review:** Maintainers will review your code
3. **Feedback:** Address any requested changes
4. **Approval:** Once approved, your PR will be merged

## Recognition

Contributors are recognized in:
- GitHub contributors list
- Release notes for significant contributions
- Annual contributor acknowledgments

## Questions?

- Check existing documentation
- Search closed issues and PRs
- Open a discussion on GitHub
- Ask in pull request comments

## TODO

- [ ] Add issue templates
- [ ] Create pull request template
- [ ] Document release process
- [ ] Add contributor guidelines for different types of contributions
- [ ] Create onboarding checklist for new contributors
- [ ] Add community guidelines and communication channels