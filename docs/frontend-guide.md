# Frontend Development Guide

This guide covers frontend development for the Notes MD React application.

## Technology Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material UI** - Component library
- **React Markdown Preview** - Markdown rendering

## Project Structure

```
web/
├── src/
│   ├── components/          # React components
│   │   ├── NoteEditor.tsx   # Markdown editor component
│   │   ├── NoteList.tsx     # Notes list sidebar
│   │   └── NotePreview.tsx  # Markdown preview pane
│   ├── services/            # Business logic and API calls
│   │   └── notes/           # Notes service layer
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
└── index.html               # HTML template
```

## Key Components

### NoteEditor
- Handles markdown input
- Extracts titles from content
- Auto-saves changes

### NotePreview  
- Renders markdown to HTML
- Real-time preview updates

### NoteList
- Displays all notes
- Handles note selection
- Add/delete note actions

## State Management

Currently using React's built-in state management with hooks:
- `useState` for component state
- `useEffect` for side effects
- Local storage for persistence

TODO: Consider state management libraries for complex scenarios

## Styling

Using Material UI with:
- Theme support (light/dark mode)
- Responsive design
- Consistent component styling

## Environment Variables

- `VITE_API_URL` - API base URL
- `VITE_ENABLE_DARK_MODE_BY_DEFAULT` - Default theme
- `VITE_APP_TITLE` - Application title
- TODO: Document other environment variables

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run test     # Run tests
npm run preview  # Preview production build
```

## Testing

TODO: Expand testing documentation
- Unit tests with Vitest
- Component testing strategies
- E2E testing setup

## Performance Optimization

TODO: Document performance best practices
- Code splitting
- Lazy loading
- Bundle optimization

## Accessibility

TODO: Document accessibility guidelines
- ARIA labels
- Keyboard navigation
- Screen reader support