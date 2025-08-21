# Frontend Documentation

## Overview

The Notes MD frontend is built with React, TypeScript, and Material UI, providing a modern and responsive user interface for managing markdown notes.

## Architecture

### Tech Stack

- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Material UI** - React component library
- **React Markdown** - Markdown rendering
- **UUID** - Unique identifier generation

### Project Structure

```
web/
├── src/
│   ├── components/     # Reusable UI components
│   ├── services/       # API and business logic
│   ├── types/          # TypeScript type definitions
│   └── App.tsx         # Main application component
├── public/             # Static assets
└── index.html          # HTML template
```

## Key Components

### NoteList
- Displays list of available notes
- Handles note selection and creation

### NoteEditor
- Markdown text editor with live preview
- Auto-saves changes
- Extracts titles from content

### NotePreview
- Real-time markdown rendering
- Syntax highlighting
- Responsive layout

## 📝 TODO

This section needs to be expanded with:

- [ ] Detailed component API documentation
- [ ] State management patterns
- [ ] Styling guidelines and theming
- [ ] Testing strategies and examples
- [ ] Performance optimization techniques
- [ ] Accessibility features
- [ ] Browser compatibility information
- [ ] Build and deployment configuration

## Environment Variables

The frontend supports configuration via environment variables:

- `VITE_APP_TITLE` - Application title
- `VITE_API_URL` - Backend API URL
- `VITE_ENABLE_DARK_MODE_BY_DEFAULT` - Default dark mode setting
- `VITE_ENABLE_AUTOSAVE` - Auto-save functionality
- `VITE_AUTOSAVE_INTERVAL` - Auto-save interval in milliseconds

For more details, see the main [README](../README.md#environment-variables).