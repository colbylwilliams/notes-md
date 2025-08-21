# Frontend Documentation

> **TODO:** This section needs comprehensive frontend documentation including component architecture and state management.

The Notes MD frontend is a React application built with TypeScript, Vite, and Material UI.

## Architecture Overview

The frontend follows a component-based architecture with the following key components:

- **App.tsx** - Main application component with theme and state management
- **NoteList** - Component for displaying and managing the list of notes
- **NoteEditor** - Component for editing notes with markdown support
- **NotePreview** - Component for rendering markdown preview

## Key Components

### App Component

> **TODO:** Document the main App component structure and responsibilities

### NoteList Component

> **TODO:** Document the NoteList component:
> - Props interface
> - State management
> - User interactions

### NoteEditor Component

> **TODO:** Document the NoteEditor component:
> - Markdown editing functionality
> - Auto-title extraction
> - Change handling

### NotePreview Component

> **TODO:** Document the NotePreview component:
> - Markdown rendering
> - Styling and themes

## State Management

> **TODO:** Document state management approach:
> - Local state vs global state
> - Data flow between components
> - State persistence (localStorage)

## Styling and Theming

The application uses Material UI for styling with support for light and dark themes.

> **TODO:** Document theming:
> - Theme configuration
> - Custom styling approach
> - Responsive design patterns

## Environment Variables

> **TODO:** Document all frontend environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Base URL for API endpoints | - |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Enable dark mode by default | `false` |
| `VITE_APP_TITLE` | Application title | `Notes MD` |

## Build Configuration

The application uses Vite for building and development.

> **TODO:** Document build configuration:
> - Vite configuration options
> - Build optimization
> - Environment-specific builds

## Testing

> **TODO:** Document testing approach:
> - Unit testing with Jest/Vitest
> - Component testing
> - Integration testing
> - End-to-end testing

## Performance Optimization

> **TODO:** Document performance considerations:
> - Bundle splitting
> - Lazy loading
> - Memoization strategies
> - Image optimization

## Accessibility

> **TODO:** Document accessibility features:
> - ARIA labels
> - Keyboard navigation
> - Screen reader support
> - Color contrast compliance