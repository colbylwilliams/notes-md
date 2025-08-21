# Frontend Documentation

## Overview

The Notes MD frontend is a React application built with TypeScript, Vite, and Material-UI that provides a modern interface for creating and managing markdown notes.

## Technology Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Material-UI** - Component library
- **React Markdown** - Markdown rendering

## Project Structure

```
web/
├── src/
│   ├── components/     # React components
│   ├── services/       # Business logic and API calls
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── index.html          # HTML template
```

## Key Features

- **Real-time Preview**: Split-pane editor with live markdown preview
- **Dark Mode**: Toggle between light and dark themes
- **Local Storage**: Notes persist in browser storage
- **Responsive Design**: Works on desktop and mobile devices
- **Environment Configuration**: Customizable via environment variables

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | API base URL | `http://localhost:3000/api` |
| `VITE_APP_TITLE` | Application title | `Notes MD` |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Default theme | `false` |
| `VITE_ENABLE_AUTOSAVE` | Auto-save functionality | `true` |
| `VITE_AUTOSAVE_INTERVAL` | Auto-save interval (ms) | `5000` |

## TODO

- [ ] Document component architecture and props
- [ ] Add testing documentation
- [ ] Create style guide and design system docs
- [ ] Document state management patterns
- [ ] Add accessibility guidelines
- [ ] Include performance optimization tips
- [ ] Document build and deployment process

## Reference

For setup instructions, see [web/README.md](../web/README.md).