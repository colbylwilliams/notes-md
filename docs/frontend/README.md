# Frontend Documentation

This document provides documentation for the Notes MD frontend application built with React, TypeScript, and Material-UI.

## Architecture Overview

The frontend is a React single-page application that provides a rich interface for creating and managing markdown notes.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI** - Component library
- **React Markdown** - Markdown rendering
- **ESLint** - Code linting

## Project Structure

```
web/
├── src/
│   ├── components/     # Reusable UI components
│   ├── services/       # API and data services
│   ├── tests/         # Test files
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Key Components

### Core Components
- **App** - Main application container
- **NoteList** - Display list of notes
- **NoteEditor** - Markdown editor interface
- **NotePreview** - Live markdown preview

## State Management

Currently using React's built-in state management. No external state management library is used.

## TODOs

- [ ] Document component APIs and props
- [ ] Add component usage examples
- [ ] Document state management patterns
- [ ] Create style guide and theming documentation
- [ ] Add accessibility documentation
- [ ] Document testing strategies and examples
- [ ] Add performance optimization guide
- [ ] Document build and deployment process
- [ ] Create component storybook documentation
- [ ] Add internationalization documentation

## Environment Variables

See the [main README](../../README.md#environment-variables) for frontend environment variable documentation.

## Testing

TODO: Document testing setup and patterns.

---

For setup instructions, see the [web README](../../web/README.md) in the web directory.