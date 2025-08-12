# Development Guide

This guide covers everything you need to know to contribute to the Notes MD project, including setup, coding standards, testing, and contribution workflows.

## Project Structure

```
notes-md/
├── api/                    # Backend Express.js application
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Data models and types
│   │   ├── routes/         # API route definitions
│   │   └── index.ts        # Application entry point
│   ├── package.json        # Backend dependencies
│   ├── tsconfig.json       # TypeScript configuration
│   └── .eslintrc.js        # ESLint configuration
├── web/                    # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API and data services
│   │   ├── tests/          # Unit tests
│   │   ├── App.tsx         # Main application component
│   │   └── main.tsx        # Application entry point
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.ts      # Vite configuration
│   └── vitest.config.ts    # Test configuration
├── docs/                   # Project documentation
├── .github/                # GitHub workflows and templates
├── .gitignore              # Git ignore rules
├── LICENSE                 # MIT license
└── README.md               # Project overview
```

## Technology Stack

### Frontend (Web)
- **React 19.1.0** - UI library with hooks and functional components
- **TypeScript 5.8.3** - Type safety and enhanced developer experience
- **Material-UI 7.1.0** - React component library for consistent design
- **Vite 6.3.5** - Fast build tool and development server
- **Vitest 3.1.3** - Fast unit testing framework
- **ESLint 9.25.0** - Code linting and quality enforcement

### Backend (API)
- **Node.js** - JavaScript runtime
- **Express.js 4.18.2** - Web framework for REST API
- **TypeScript 5.3.3** - Type safety across the stack
- **Jest 29.7.0** - Testing framework
- **ESLint 8.56.0** - Code linting and quality enforcement

## Development Setup

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** (recommended) with TypeScript and ESLint extensions

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md
   ```

2. **Install dependencies**
   ```bash
   # Frontend dependencies
   cd web
   npm install
   
   # Backend dependencies
   cd ../api
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy API environment template
   cd api
   cp .env.example .env
   
   # Edit .env file as needed
   # PORT=3000
   # NODE_ENV=development
   ```

4. **Start development servers**
   ```bash
   # Terminal 1: Start API server
   cd api
   npm run dev
   
   # Terminal 2: Start frontend server
   cd web
   npm run dev
   ```

5. **Verify setup**
   - Frontend: http://localhost:5173
   - API: http://localhost:3000

## Coding Standards

### TypeScript Guidelines
- Use strict TypeScript configuration
- Define interfaces for all data structures
- Prefer `interface` over `type` for object shapes
- Use proper typing for function parameters and return values
- Avoid `any` type - use `unknown` if necessary

**Example:**
```typescript
// Good
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// Good
const createNote = (data: Partial<Note>): Note => {
  // Implementation
};

// Avoid
const createNote = (data: any): any => {
  // Implementation
};
```

### React Best Practices
- Use functional components with hooks
- Prefer `const` for component definitions
- Use TypeScript for prop types
- Extract custom hooks for reusable logic
- Use proper key props for lists

**Example:**
```typescript
// Good
interface NoteListProps {
  notes: Note[];
  onNoteSelect: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onNoteSelect }) => {
  return (
    <List>
      {notes.map((note) => (
        <ListItem key={note.id} onClick={() => onNoteSelect(note.id)}>
          {note.title}
        </ListItem>
      ))}
    </List>
  );
};
```

### ESLint Configuration
Both frontend and backend use ESLint for code quality:

**Frontend ESLint Rules:**
- React hooks rules enforced
- TypeScript strict rules
- Import/export conventions
- No unused variables

**Backend ESLint Rules:**
- Node.js best practices
- TypeScript strict rules
- Express.js conventions

### Naming Conventions
- **Files**: Use kebab-case for file names (`note-editor.tsx`, `notes-controller.ts`)
- **Components**: Use PascalCase (`NoteEditor`, `NoteList`)
- **Functions/Variables**: Use camelCase (`handleNoteChange`, `selectedNote`)
- **Constants**: Use UPPER_SNAKE_CASE (`STORAGE_KEY`, `DEFAULT_PORT`)
- **Interfaces**: Use PascalCase with descriptive names (`Note`, `NoteEditorProps`)

## Testing

### Frontend Testing (Vitest)

**Running Tests:**
```bash
cd web
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run with coverage report
```

**Test Structure:**
```typescript
// src/tests/components/NoteEditor.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { NoteEditor } from '../components/NoteEditor';

describe('NoteEditor', () => {
  it('should render empty state when no note is selected', () => {
    render(<NoteEditor note={null} onNoteChange={jest.fn()} />);
    expect(screen.getByText(/select a note/i)).toBeInTheDocument();
  });
});
```

### Backend Testing (Jest)

**Running Tests:**
```bash
cd api
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run with coverage report
```

**Test Structure:**
```typescript
// src/controllers/__tests__/notes.test.ts
import request from 'supertest';
import app from '../app';

describe('Notes API', () => {
  describe('GET /api/notes', () => {
    it('should return empty array initially', async () => {
      const response = await request(app).get('/api/notes');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });
});
```

### Test Coverage Requirements
- Minimum 80% code coverage for new features
- All API endpoints must have integration tests
- Critical UI components must have unit tests

## Build and Development Scripts

### Frontend Scripts
```bash
# Development
npm run dev           # Start Vite dev server
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Run ESLint
npm run test          # Run Vitest tests

# Type checking
npm run type-check    # TypeScript type checking
```

### Backend Scripts
```bash
# Development
npm run dev           # Start with ts-node-dev (auto-reload)
npm run build         # Compile TypeScript to dist/
npm start             # Run compiled JavaScript
npm run lint          # Run ESLint
npm run test          # Run Jest tests

# Production
npm run build         # Build for production
npm start             # Start production server
```

## Contributing

### Workflow
1. **Fork the repository** on GitHub
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following coding standards
4. **Add tests** for new functionality
5. **Run linting and tests**
   ```bash
   # Frontend
   cd web && npm run lint && npm run test
   
   # Backend
   cd api && npm run lint && npm run test
   ```
6. **Commit your changes** with descriptive messages
7. **Push to your fork** and **create a pull request**

### Commit Message Conventions
Use clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add note deletion functionality to API"
git commit -m "Fix markdown preview not updating on content change"
git commit -m "Update user guide with keyboard shortcuts"

# Less helpful
git commit -m "Fix bug"
git commit -m "Update code"
git commit -m "WIP"
```

### Pull Request Process
1. **Description**: Provide clear description of changes
2. **Testing**: Include details about testing performed
3. **Breaking Changes**: Highlight any breaking changes
4. **Screenshots**: Include UI screenshots for frontend changes
5. **Checklist**: Use the PR template checklist

### Code Review Guidelines
- **Be constructive** - suggest improvements, not just problems
- **Check functionality** - test the changes locally
- **Review tests** - ensure adequate test coverage
- **Verify documentation** - check if docs need updates

## Release Process

### Version Management
- Use semantic versioning (semver): `MAJOR.MINOR.PATCH`
- Tag releases in Git: `git tag v1.0.0`
- Update version in `package.json` files

### Deployment Checklist
1. Run full test suite
2. Update documentation
3. Build production artifacts
4. Tag release in Git
5. Deploy to production environment
6. Verify deployment

## Development Tools

### Recommended VS Code Extensions
- **TypeScript and JavaScript Language Features** (built-in)
- **ESLint** - Real-time linting
- **Prettier** - Code formatting
- **Auto Rename Tag** - HTML/JSX tag management
- **GitLens** - Enhanced Git capabilities

### Debugging
**Frontend Debugging:**
- Use browser DevTools
- React Developer Tools extension
- Vite provides source maps

**Backend Debugging:**
- Use VS Code debugger with Node.js
- Add `debugger` statements
- Use `console.log` for simple debugging

### Performance Monitoring
- **Frontend**: Use React DevTools Profiler
- **Backend**: Monitor response times and memory usage
- **Build Times**: Monitor Vite/TypeScript compilation times

## Troubleshooting Development Issues

### Common Issues
1. **Port conflicts**: Change ports in environment variables
2. **Node modules issues**: Delete `node_modules` and reinstall
3. **TypeScript errors**: Check `tsconfig.json` configuration
4. **ESLint errors**: Run `npm run lint:fix` to auto-fix

### Getting Help
- Check existing GitHub issues
- Review documentation in `/docs` folder
- Ask questions in pull request discussions
- Contact maintainers for complex issues