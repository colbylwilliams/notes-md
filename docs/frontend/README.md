# Frontend Documentation

This section contains documentation for the Notes MD frontend application.

## Overview

The frontend is a React application built with TypeScript and Vite, using Material-UI for the component library.

## Technology Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **React Markdown** - Markdown rendering
- **@uiw/react-markdown-preview** - Enhanced markdown preview

## Architecture

### Component Structure

```
src/
├── components/
│   ├── NoteEditor.tsx      # Markdown editor component
│   ├── NoteList.tsx        # Note list sidebar
│   └── NotePreview.tsx     # Markdown preview component
├── services/
│   └── notes/              # Note management services
├── App.tsx                 # Main application component
└── main.tsx               # Application entry point
```

### Key Components

#### NoteEditor
- Handles markdown editing
- Auto-extracts note titles from content
- Real-time content updates

#### NoteList
- Displays list of all notes
- Provides note selection and creation
- Handles note deletion

#### NotePreview
- Renders markdown content
- Real-time preview updates
- Supports GitHub Flavored Markdown

## State Management

The application uses React's built-in state management with hooks:

- `useState` for component state
- `useEffect` for side effects
- Local storage for data persistence

## Styling

- Material-UI theme system
- Dark/light mode support
- Responsive design principles

## Environment Variables

See the [main README](../README.md#environment-variables) for available frontend environment variables.

## TODO

- [ ] Document component props and interfaces
- [ ] Add state management flow diagrams
- [ ] Document styling conventions and theme customization
- [ ] Add testing strategy and examples
- [ ] Include performance optimization guidelines
- [ ] Document accessibility features
- [ ] Add internationalization documentation