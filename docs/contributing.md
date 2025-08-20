# Contributing to Notes MD

Thank you for your interest in contributing to Notes MD! This guide will help you get started with contributing to the project.

## 🤝 How to Contribute

There are many ways to contribute to Notes MD:

- **Bug Reports** - Help us improve by reporting bugs
- **Feature Requests** - Suggest new features or improvements
- **Code Contributions** - Submit bug fixes or new features
- **Documentation** - Improve documentation and guides
- **Testing** - Help test new features and bug fixes

## 🚀 Getting Started

### 1. Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

```bash
git clone https://github.com/your-username/notes-md.git
cd notes-md
```

### 2. Set Up Development Environment

Follow the [Getting Started Guide](getting-started.md) to set up your development environment.

### 3. Create a Branch

Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 4. Make Your Changes

- Follow the coding standards
- Write tests for new functionality
- Update documentation as needed

### 5. Test Your Changes

Run the test suite to ensure your changes don't break existing functionality:

```bash
# Frontend tests
cd web && npm test

# API tests
cd api && npm test

# Linting
cd web && npm run lint
cd api && npm run lint
```

### 6. Commit Your Changes

Use conventional commit messages:

```bash
git commit -m "feat: add new note sorting feature"
git commit -m "fix: resolve issue with markdown rendering"
git commit -m "docs: update API documentation"
```

### 7. Push and Create Pull Request

```bash
git push origin your-branch-name
```

Then create a pull request on GitHub.

## 📝 Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint rules defined in the project
- Use meaningful variable and function names
- Add JSDoc comments for public functions

### React Components

- Use functional components with hooks
- Follow React best practices
- Use TypeScript interfaces for props
- Keep components focused and single-purpose

```tsx
interface MyComponentProps {
  title: string;
  onAction: () => void;
}

const MyComponent = ({ title, onAction }: MyComponentProps) => {
  // Component implementation
};
```

### API Development

- Use Express.js patterns
- Implement proper error handling
- Add input validation
- Write comprehensive tests

```typescript
// Example route implementation
app.get('/api/notes', async (req, res) => {
  try {
    const notes = await notesService.getAllNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

## 🧪 Testing Guidelines

### Frontend Testing

- Write unit tests for components
- Test user interactions
- Mock external dependencies
- Use Vitest and React Testing Library

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" onAction={() => {}} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### API Testing

- Test all endpoints
- Test error cases
- Mock external services
- Use Jest for testing

```typescript
describe('Notes API', () => {
  it('should return all notes', async () => {
    const response = await request(app)
      .get('/api/notes')
      .expect(200);
    
    expect(response.body).toBeInstanceOf(Array);
  });
});
```

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows project standards
- [ ] Tests pass locally
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] Branch is up to date with main

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass
- [ ] New tests added
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description** - Clear description of the bug
2. **Steps to Reproduce** - Detailed steps to reproduce the issue
3. **Expected Behavior** - What you expected to happen
4. **Actual Behavior** - What actually happened
5. **Environment** - OS, browser, Node.js version, etc.
6. **Screenshots** - If applicable

### Bug Report Template

```markdown
**Bug Description**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Firefox, Safari]
- Node.js version: [e.g. 18.x]
- Notes MD version: [e.g. 1.0.0]
```

## 💡 Feature Requests

When requesting features, please include:

1. **Problem Statement** - What problem does this solve?
2. **Proposed Solution** - How should it work?
3. **Alternatives** - Other solutions considered
4. **Use Cases** - When would this be used?

## 📋 Development TODO

### High Priority
- [ ] Add authentication and user management
- [ ] Implement note sharing and collaboration
- [ ] Add search and filtering capabilities
- [ ] Implement offline support

### Medium Priority
- [ ] Add note categories/tags
- [ ] Implement export functionality
- [ ] Add keyboard shortcuts
- [ ] Improve mobile responsive design

### Low Priority
- [ ] Add themes and customization
- [ ] Implement note templates
- [ ] Add statistics and analytics
- [ ] Create browser extension

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 🎯 Development Focus Areas

### Frontend
- React component development
- UI/UX improvements
- Performance optimization
- Accessibility enhancements

### Backend
- API development
- Database integration
- Authentication and security
- Performance optimization

### Documentation
- API documentation
- User guides
- Developer documentation
- Deployment guides

## 💬 Communication

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and ideas
- **Pull Requests** - Code review and discussion

## 📄 Code of Conduct

Please note that this project follows a Code of Conduct. By participating, you are expected to uphold this code:

- Be respectful and inclusive
- Use welcoming and inclusive language
- Be collaborative
- Focus on what is best for the community
- Show empathy towards other community members

## 🔗 Related Documentation

- [Getting Started](getting-started.md) - Development setup
- [Frontend Documentation](frontend.md) - Frontend development
- [API Documentation](api.md) - Backend development
- [Deployment Guide](deployment.md) - Deployment procedures

## 📞 Getting Help

If you need help:

1. Check existing documentation
2. Search GitHub issues
3. Create a new issue with the `question` label
4. Join GitHub Discussions

Thank you for contributing to Notes MD! 🎉