# Contributing Guidelines

Thank you for your interest in contributing to Notes MD! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites
- Node.js v20+ and npm v9+
- Git for version control
- Code editor with TypeScript support (VS Code recommended)

### Setup Instructions
1. **Fork and clone the repository:**
```bash
git clone https://github.com/your-username/notes-md.git
cd notes-md
```

2. **Install dependencies:**
```bash
# Frontend dependencies
cd web
npm install

# API dependencies
cd ../api
npm install
```

3. **Start development servers:**
```bash
# Terminal 1 - API
cd api
npm run dev

# Terminal 2 - Frontend  
cd web
npm run dev
```

4. **Verify setup:**
- Frontend: http://localhost:5173
- API: http://localhost:3000

## Development Workflow

### Branch Naming Conventions
- **Features:** `feature/description` or `feat/short-name`
- **Bug fixes:** `fix/description` or `bugfix/issue-number`
- **Documentation:** `docs/description`
- **Refactoring:** `refactor/description`

### Commit Message Format
Follow conventional commits format:
```
type(scope): description

type: feat, fix, docs, style, refactor, test, chore
scope: api, web, docs (optional)
description: imperative, present tense
```

Examples:
- `feat(web): add dark mode toggle`
- `fix(api): handle missing note ID validation`
- `docs: update API reference examples`

### Pull Request Process
1. Create feature branch from `main`
2. Make changes with clear, focused commits
3. Update documentation if needed
4. Ensure all tests pass and linting is clean
5. Submit pull request with clear description
6. Address code review feedback
7. Squash merge when approved

## Code Standards

### TypeScript/JavaScript
- **ESLint Configuration:** Both projects use ESLint with TypeScript support
- **Style Guide:** Follow existing code patterns in the repository
- **TypeScript Guidelines:** 
  - Use strict type checking
  - Define interfaces for all data structures
  - Avoid `any` type; use proper typing
  - Use meaningful variable and function names

**Linting Commands:**
```bash
# Frontend
cd web && npm run lint

# API  
cd api && npm run lint
```

### React Components
- **Component Structure:** Use functional components with hooks
- **Props Interface:** Define TypeScript interfaces for all props
- **State Management:** Use React hooks for local state
- **File Organization:** One component per file, co-locate related files

**Component Example:**
```typescript
interface NoteEditorProps {
  note: Note;
  onUpdate: (note: Note) => void;
}

export const NoteEditor: React.FC<NoteEditorProps> = ({ note, onUpdate }) => {
  // Component implementation
};
```

### API Development
- **Route Organization:** Group related routes in separate files
- **Error Handling:** Use consistent error response format
- **Validation:** Validate input data at controller level
- **Documentation:** Include JSDoc comments for all endpoints

**Controller Example:**
```typescript
/**
 * @route   GET /api/notes/:id
 * @desc    Get a note by ID
 * @access  Public
 */
export const getNoteById = (req: Request, res: Response) => {
  // Implementation with proper error handling
};
```

## Testing

### Current Testing Setup
- **Frontend:** Vitest for unit testing
- **API:** Jest for unit testing (configured but minimal tests)
- **Testing Commands:**
```bash
# Frontend tests
cd web && npm run test

# API tests
cd api && npm run test
```

### Frontend Testing Guidelines
- **Component Testing:** Test user interactions and rendering
- **Service Testing:** Test NotesService CRUD operations
- **Accessibility:** Ensure components are accessible
- **Coverage:** Aim for >80% code coverage on new features

### Backend Testing Guidelines
- **Controller Testing:** Test all API endpoints
- **Error Scenarios:** Test error handling and edge cases
- **Data Validation:** Test input validation thoroughly
- **Integration Testing:** Test complete request/response cycles

## Documentation

### Documentation Standards
- **Code Comments:** Use JSDoc for functions and complex logic
- **README Updates:** Update relevant README files for new features
- **API Documentation:** Update docs/api-reference.md for new endpoints
- **Architecture Changes:** Update docs/architecture.md for system changes

### Documentation Files
- `/README.md` - Main project overview and quick start
- `/web/README.md` - Frontend-specific documentation
- `/api/README.md` - API-specific documentation  
- `/docs/` - Comprehensive technical documentation

## Issue Management

### Bug Reports
When reporting bugs, include:
- Steps to reproduce
- Expected vs actual behavior
- Browser/Node.js version
- Error messages or screenshots
- Minimal reproduction example

### Feature Requests
When requesting features:
- Use case description
- Proposed solution approach
- Alternative solutions considered
- Impact on existing functionality

### Issue Labels
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed

## Pull Request Guidelines

### PR Requirements
- **Clear Description:** Explain what changes and why
- **Issue Reference:** Link to related issue if applicable
- **Testing:** Include tests for new functionality
- **Documentation:** Update relevant documentation
- **Clean History:** Squash commits into logical units

### PR Checklist
- [ ] Code follows project style guidelines
- [ ] All tests pass (`npm run test` in both web and api)
- [ ] All linting passes (`npm run lint` in both web and api)
- [ ] Documentation updated for new features
- [ ] No breaking changes without discussion
- [ ] Performance impact considered and documented

### Code Review Process
1. **Automated Checks:** All CI checks must pass
2. **Manual Review:** At least one maintainer review required
3. **Testing:** Reviewer should test functionality locally
4. **Documentation:** Ensure docs are clear and complete
5. **Merge:** Squash and merge after approval

## Release Process

### Version Numbering
Follow Semantic Versioning (SemVer):
- **Major (x.0.0):** Breaking changes
- **Minor (0.x.0):** New features, backwards compatible
- **Patch (0.0.x):** Bug fixes, backwards compatible

### Current Version Management
- Frontend: Version in `web/package.json`
- API: Version in `api/package.json`
- Versions are managed independently

### Release Workflow
1. **Development:** Feature development on feature branches
2. **Testing:** Thorough testing on staging environment
3. **Documentation:** Update changelogs and documentation
4. **Tagging:** Create git tags for releases
5. **Deployment:** Deploy to production environments

### Changelog Maintenance
- Keep a CHANGELOG.md in the root directory
- Document all notable changes
- Include migration notes for breaking changes
- Reference issue numbers and PR numbers

## Community Guidelines

### Code of Conduct
- **Be Respectful:** Treat all contributors with respect
- **Be Constructive:** Provide helpful feedback in reviews
- **Be Patient:** Help newcomers learn the codebase
- **Be Inclusive:** Welcome contributors of all skill levels

### Communication Channels
- **GitHub Issues:** Bug reports and feature requests
- **GitHub Discussions:** General questions and discussions
- **Pull Requests:** Code review and collaboration
- **README:** Primary documentation and quick start

### Decision Making
- **Maintainers:** Have final say on technical decisions
- **Community Input:** All feedback is welcome and considered
- **Consensus:** Aim for consensus on major changes
- **Documentation:** Document decisions and rationale

## Getting Help

### Support Channels
1. **GitHub Issues:** For bugs and feature requests
2. **GitHub Discussions:** For questions and general help
3. **Documentation:** Check docs/ folder for detailed information
4. **Code Examples:** See existing code for patterns and practices

### Frequently Asked Questions

**Q: How do I add a new API endpoint?**
A: Follow the pattern in `api/src/routes/notes.ts` and `api/src/controllers/notes.ts`

**Q: How do I add a new React component?**
A: Create in `web/src/components/` with TypeScript interface and proper props

**Q: Where should I add documentation?**
A: Code changes go in relevant README files, comprehensive docs go in `/docs` folder

**Q: How do I test my changes?**
A: Run `npm run test` and `npm run lint` in both `web` and `api` directories

### Contact Information
- **Repository:** https://github.com/colbylwilliams/notes-md
- **Issues:** https://github.com/colbylwilliams/notes-md/issues
- **Maintainer:** @colbylwilliams