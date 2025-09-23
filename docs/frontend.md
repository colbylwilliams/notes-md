# Frontend Documentation

The Notes MD frontend is a modern React application built with TypeScript, Vite, and Material-UI, providing a rich markdown editing and preview experience.

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and development server
- **Material-UI (MUI)** - Component library and theming
- **React Markdown** - Markdown rendering
- **Vitest** - Testing framework

## Project Structure

```
web/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── NoteEditor.tsx     # Markdown editor component
│   │   ├── NoteList.tsx       # Notes list sidebar
│   │   └── NotePreview.tsx    # Markdown preview panel
│   ├── services/          # API services and business logic
│   │   └── notes/            # Notes service
│   ├── tests/             # Test files
│   ├── types.ts           # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```

## Core Components

### App.tsx

The main application component that:
- Manages global state (notes, theme, selected note)
- Provides the layout structure
- Handles note operations (create, update, delete)
- Implements dark/light mode switching

Key features:
- Material-UI theming with dark/light mode
- Responsive layout with sidebar and main content area
- Environment variable support for configuration

### NoteEditor.tsx

A markdown editor component that:
- Provides a multi-line text input for markdown content
- Automatically extracts note titles from the first line (if it starts with `#`)
- Updates notes in real-time as the user types
- Uses monospace font for better code editing experience

### NotePreview.tsx

A live preview component that:
- Renders markdown content using `@uiw/react-markdown-preview`
- Shows formatted output in real-time
- Handles empty state when no note is selected

### NoteList.tsx

A sidebar component that:
- Displays all notes in a scrollable list
- Shows note titles and creation dates
- Highlights the currently selected note
- Provides actions for creating and deleting notes

## State Management

The application uses React's built-in state management with hooks:

- `useState` for component-level state
- `useEffect` for side effects and lifecycle management
- Props for passing data between components

### Note Data Flow

1. **Loading**: Notes are loaded from the notes service on app initialization
2. **Selection**: Users can select notes from the sidebar
3. **Editing**: Changes in the editor update the note state immediately
4. **Persistence**: Notes are saved through the notes service (currently local storage)

## Services

### Notes Service

Located in `src/services/notes/`, this service provides:
- CRUD operations for notes
- Local storage persistence
- UUID generation for new notes
- Title extraction from markdown content

Key methods:
- `getAllNotes()` - Retrieve all notes
- `addNote()` - Create a new note
- `updateNote(note)` - Update an existing note
- `deleteNote(id)` - Delete a note by ID

## Theming and Styling

The application uses Material-UI's theming system:

- **Theme Provider**: Wraps the entire app for consistent styling
- **Dark/Light Mode**: Toggle-able theme switching
- **Responsive Design**: Adapts to different screen sizes
- **Custom Styling**: Uses MUI's `sx` prop for component-specific styles

### Theme Configuration

```typescript
const theme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
  },
});
```

## Environment Variables

The frontend supports configuration through environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Base URL for API endpoints | (uses relative URLs) |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Enable dark mode by default | `false` |
| `VITE_APP_TITLE` | Application title in header | `Notes MD` |
| `VITE_ENABLE_AUTOSAVE` | Enable automatic saving | `false` |
| `VITE_AUTOSAVE_INTERVAL` | Autosave interval in milliseconds | `5000` |

## Testing

The project uses Vitest for testing:

- **Unit Tests**: Component behavior and utilities
- **Integration Tests**: Component interactions
- **Environment Tests**: Configuration validation

Run tests with:
```bash
npm test
```

Example test files:
- `src/tests/basic.test.ts` - Basic functionality tests
- `src/env.test.ts` - Environment variable tests

## Development Tips

### Hot Reload

Vite provides fast hot module replacement (HMR) for immediate feedback during development.

### TypeScript

The project is fully typed with TypeScript:
- Interface definitions in `types.ts`
- Strict type checking enabled
- IntelliSense support in editors

### Linting

ESLint is configured with React and TypeScript rules:
```bash
npm run lint
```

### Building

Build the application for production:
```bash
npm run build
```

## Future Enhancements

Potential improvements and TODOs:

- [ ] Implement autosave functionality
- [ ] Add keyboard shortcuts
- [ ] Improve mobile responsiveness
- [ ] Add note search and filtering
- [ ] Implement note tagging system
- [ ] Add export functionality (PDF, HTML)
- [ ] Integrate with backend API (currently uses local storage)
- [ ] Add collaborative editing features
- [ ] Implement note organization (folders, categories)

## Related Documentation

- [Getting Started](./getting-started.md) - Development setup
- [API Documentation](./api.md) - Backend API reference
- [Configuration](./configuration.md) - Environment variables (TODO)