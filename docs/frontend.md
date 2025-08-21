# Frontend Documentation

The Notes MD frontend is a React application built with TypeScript, Vite, and Material-UI.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI** - UI component library
- **React Markdown** - Markdown rendering
- **@uiw/react-markdown-preview** - Markdown preview component

## Project Structure

```
web/
├── src/
│   ├── components/     # Reusable UI components
│   ├── services/       # API service layer
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── index.html          # HTML template
```

## Key Components

### App.tsx
Main application component that manages the overall layout and state.

### NotePreview.tsx
Component for rendering markdown preview of notes.

TODO: Document all components

## State Management

TODO: Document state management approach

## Styling

The application uses Material-UI for styling with:
- Custom theme configuration
- Responsive design
- Dark mode support

## Environment Variables

The frontend supports configuration via environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Base URL for API endpoints | `http://localhost:3000` |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Enable dark mode by default | `false` |
| `VITE_ENABLE_AUTOSAVE` | Enable autosave functionality | `true` |
| `VITE_APP_TITLE` | Application title | `Notes MD` |
| `VITE_AUTOSAVE_INTERVAL` | Autosave interval in milliseconds | `5000` |

## Development

See the [Web README](../web/README.md) for development setup and information.

## Building for Production

```bash
cd web
npm run build
```

The build output will be in the `dist/` directory.

## Testing

TODO: Document testing approach and how to run tests

## Deployment

See [Deployment Guide](./deployment.md) for production deployment instructions.