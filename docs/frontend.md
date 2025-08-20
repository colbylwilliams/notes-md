# Frontend Documentation

The Notes MD frontend is a React application built with TypeScript, Vite, and Material UI that provides a modern interface for creating and managing markdown notes.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material UI** - Component library
- **React Markdown** - Markdown rendering
- **Vitest** - Testing framework

## Architecture

The frontend follows a component-based architecture with the following key directories:

```
src/
├── components/     # Reusable UI components
├── services/       # API and business logic
├── types.ts        # TypeScript type definitions
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

## Key Components

### App.tsx
The main application component that handles:
- Theme management (light/dark mode)
- Global state management
- Layout structure

### NoteList
Displays a list of all notes with:
- Note creation button
- Note selection
- Note deletion

### NoteEditor
Provides markdown editing with:
- Real-time editing
- Auto-save functionality
- Title extraction from content

### NotePreview
Renders markdown content with:
- Live preview
- GitHub-flavored markdown support
- Responsive design

## State Management

Currently uses React's built-in state management with:
- `useState` for component state
- `useEffect` for side effects
- Local storage for persistence

## Environment Variables

The frontend supports configuration via environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | API base URL | `http://localhost:3000` |
| `VITE_APP_TITLE` | Application title | `Notes MD` |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Default theme | `false` |

## TODO

- [ ] Add component prop interfaces documentation
- [ ] Document custom hooks and utilities
- [ ] Add accessibility guidelines
- [ ] Include responsive design breakpoints
- [ ] Document testing patterns and best practices
- [ ] Add performance optimization guides
- [ ] Include internationalization setup
- [ ] Document build and deployment process
- [ ] Add code splitting and lazy loading strategies
- [ ] Include PWA configuration documentation

## Development

### Running Tests
```bash
cd web
npm run test
```

### Building for Production
```bash
cd web
npm run build
```

### Linting
```bash
cd web
npm run lint
```

For more technical details, see the [Web README](../web/README.md).