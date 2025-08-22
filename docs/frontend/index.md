# Frontend Documentation

This directory contains documentation for the Notes MD React frontend application.

## Overview

The frontend is built with React, TypeScript, and Vite, providing a modern and responsive interface for managing markdown notes.

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material UI** - Component library
- **React Markdown** - Markdown rendering
- **Vitest** - Testing framework

## Project Structure

```
web/
├── src/
│   ├── components/     # React components
│   ├── services/       # API services and utilities
│   ├── tests/         # Test files
│   └── types.ts       # TypeScript type definitions
├── public/            # Static assets
└── index.html        # HTML template
```

## Key Components

### NoteList
- Displays list of notes
- Handles note selection and deletion
- Add new note functionality

### NoteEditor  
- Markdown editor interface
- Real-time content updates
- Note saving functionality

### NotePreview
- Renders markdown content
- Real-time preview updates

## State Management

> **TODO**: Document state management patterns and data flow.

## Styling

The application uses Material UI for consistent styling and theming, with support for:
- Light/dark mode toggle
- Responsive design
- Customizable theme variables

## Environment Variables

See [Environment Variables](../README.md#environment-variables) in the main README.

## Testing

> **TODO**: Add testing strategy and component testing guidelines.

## Development Workflow

> **TODO**: Document development setup, debugging, and best practices.

---

> **Note**: This frontend documentation is currently being expanded. More detailed component and architecture information will be added soon.