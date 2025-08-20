# Frontend Development Guide

This guide covers development practices, architecture, and conventions for the Notes MD React frontend.

## Tech Stack

- **React** 19.1.0 with TypeScript
- **Vite** for build tooling and development server
- **Material UI** for components and theming
- **React Markdown** for rendering markdown preview
- **ESLint** for code linting

## Project Structure

```
web/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── NoteEditor.tsx   # Markdown editor component
│   │   ├── NoteList.tsx     # Note list sidebar
│   │   └── NotePreview.tsx  # Markdown preview panel
│   ├── services/            # API and business logic
│   │   └── notes/           # Notes service
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── App.css              # Global styles
│   └── index.css            # Base styles
├── public/                  # Static assets
└── index.html              # HTML template
```

## Development Workflow

### Running the Development Server
```bash
cd web
npm run dev
```

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

### Testing
```bash
npm test
```

## Component Architecture

### NoteEditor
- Handles markdown input and editing
- Automatically extracts note titles from content
- Real-time content updates

### NoteList
- Displays all notes in a sidebar
- Handles note selection and creation
- Provides note deletion functionality

### NotePreview
- Renders markdown content as HTML
- Uses `@uiw/react-markdown-preview` for rendering

## State Management

Currently uses React's built-in state management with hooks. Consider migrating to a state management library as the application grows.

## Styling

- Uses Material UI's theming system
- Supports dark/light mode switching
- Custom CSS for specific components

## Environment Variables

See the main [README](../README.md) for available environment variables.

## TODO

- [ ] Add component testing examples
- [ ] Document state management patterns
- [ ] Add accessibility guidelines
- [ ] Create component library documentation
- [ ] Add performance optimization guide
- [ ] Document build optimization strategies