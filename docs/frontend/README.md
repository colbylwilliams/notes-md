# Frontend Documentation

This section contains documentation for the Notes MD frontend application.

## Overview

The frontend is built with React, TypeScript, and Material-UI, providing a modern interface for markdown note-taking.

## Architecture

### Tech Stack
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI** - Component library
- **React Markdown** - Markdown rendering

### Project Structure
```
web/
├── src/
│   ├── components/     # Reusable UI components
│   ├── services/       # API and business logic
│   ├── types/          # TypeScript type definitions
│   └── App.tsx         # Main application component
├── public/             # Static assets
└── index.html          # Entry HTML file
```

## Key Components

### NoteList
- Displays list of all notes
- Handles note selection and deletion
- Provides "Add Note" functionality

### NoteEditor
- Markdown editor with syntax highlighting
- Auto-saves changes
- Extracts title from content

### NotePreview
- Real-time markdown preview
- Renders markdown with syntax highlighting

## Features

- **Real-time Preview**: See rendered markdown as you type
- **Dark Mode**: Toggle between light and dark themes
- **Local Storage**: Notes persist in browser storage
- **Responsive Design**: Works on desktop and mobile

## TODO

- [ ] Document component props and interfaces
- [ ] Add component usage examples
- [ ] Document state management patterns
- [ ] Add styling guidelines
- [ ] Include accessibility documentation
- [ ] Document testing patterns
- [ ] Add performance optimization guide
- [ ] Include build and deployment instructions