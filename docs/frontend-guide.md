# Frontend Development Guide

This guide covers the frontend architecture, development workflow, and best practices for the Notes MD React application.

## Architecture Overview

The frontend is built with:
- **React 18** with TypeScript
- **Vite** for build tooling and dev server
- **Material-UI (MUI)** for component library
- **React Markdown** for markdown rendering

## Project Structure

```
web/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── NoteEditor.tsx   # Markdown editor component
│   │   ├── NoteList.tsx     # Notes list sidebar
│   │   └── NotePreview.tsx  # Markdown preview panel
│   ├── services/            # API and business logic
│   │   └── notes/           # Notes service layer
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global styles
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── index.html             # HTML template
└── package.json           # Dependencies and scripts
```

## Key Components

### App.tsx
The main application component that:
- Manages global state (notes, selected note, dark mode)
- Provides theme context
- Orchestrates component interactions

### NoteEditor.tsx
- Provides a markdown editor with syntax highlighting
- Auto-extracts titles from content
- Handles real-time content updates

### NoteList.tsx
- Displays all notes in a sidebar
- Handles note selection and creation
- Provides delete functionality

### NotePreview.tsx
- Renders markdown content in real-time
- Supports all standard markdown features
- Responsive design for mobile devices

## State Management

The application uses React's built-in state management:
- `useState` for component-level state
- `useEffect` for side effects and data loading
- Props for component communication

### Key State:
- `notes`: Array of all notes
- `selectedNoteId`: Currently selected note ID
- `darkMode`: Theme preference

## Styling

- **Material-UI Theme**: Centralized theming with light/dark mode support
- **CSS-in-JS**: Component-level styling with MUI's `sx` prop
- **Responsive Design**: Mobile-first approach using MUI breakpoints

## Environment Variables

All environment variables must be prefixed with `VITE_`:

```env
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_APP_TITLE=Notes MD
VITE_ENABLE_AUTOSAVE=true
VITE_AUTOSAVE_INTERVAL=5000
```

## Development Workflow

### Starting Development Server
```bash
cd web
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Testing

// TODO: Add testing setup and guidelines

## Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (if configured)

### Best Practices:
- Use functional components with hooks
- Implement proper TypeScript types
- Follow Material-UI design patterns
- Keep components small and focused
- Use meaningful component and prop names

## Performance Considerations

- **Code Splitting**: Vite handles automatic code splitting
- **Lazy Loading**: Consider lazy loading for large components
- **Memoization**: Use `useMemo` and `useCallback` for expensive operations

## Accessibility

- Material-UI components provide built-in accessibility
- Ensure proper ARIA labels for custom components
- Test with keyboard navigation
- Maintain proper color contrast ratios

## Browser Support

The application supports modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Common Issues:

**Hot Module Replacement not working:**
- Restart the dev server
- Clear browser cache

**Type errors:**
- Ensure all imports have proper types
- Check `tsconfig.json` configuration

**Build failures:**
- Check for unused imports
- Verify all environment variables are set

## Contributing

When contributing to the frontend:
1. Follow the existing code style
2. Add proper TypeScript types
3. Test across different screen sizes
4. Ensure accessibility compliance
5. Update documentation as needed

---

For more details, see the [source code](../web/src/) and [React documentation](https://react.dev/).