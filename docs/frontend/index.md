# Frontend Documentation

The Notes MD frontend is a React application built with TypeScript, Vite, and Material-UI that provides an intuitive interface for creating and managing markdown notes.

## Overview

The frontend application provides:
- Rich markdown editor with real-time preview
- Note management (create, edit, delete)
- Dark mode support
- Responsive design
- Local storage persistence

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI** - Component library
- **React Markdown** - Markdown rendering
- **Vitest** - Testing framework

## Project Structure

```
web/
├── src/
│   ├── components/       # React components
│   ├── services/         # API and data services
│   ├── tests/           # Test files
│   └── main.tsx         # Application entry point
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## Key Components

TODO: Document main components:
- NoteList
- NoteEditor  
- NotePreview
- App

## State Management

TODO: Document state management approach

## Styling

The application uses Material-UI for consistent styling and theming. Dark mode is supported through MUI's theme system.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | - |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Enable dark mode by default | `false` |
| `VITE_APP_TITLE` | Application title | `Notes MD` |
| `VITE_ENABLE_AUTOSAVE` | Enable autosave functionality | - |
| `VITE_AUTOSAVE_INTERVAL` | Autosave interval in milliseconds | - |

## Development

### Running the Frontend

```bash
cd web
npm install
npm run dev
```

### Building for Production

```bash
npm run build
```

### Testing

```bash
npm run test
```

### Linting

```bash
npm run lint
```

## Features

TODO: Document key features in detail:
- Note creation and editing
- Markdown preview
- Title extraction
- Local storage
- Responsive design

## Deployment

See [Deployment Guide](../deployment.md) for production deployment instructions.