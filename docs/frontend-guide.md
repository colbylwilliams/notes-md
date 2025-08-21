# Frontend Development Guide

## Overview

The Notes MD frontend is built with React, TypeScript, and Vite, using Material UI for the component library.

## Architecture

### Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material UI** - Component library
- **React Markdown** - Markdown rendering
- **React Router** - Client-side routing (if implemented)

### Project Structure

```
web/
├── src/
│   ├── components/          # Reusable UI components
│   ├── services/           # API services and data fetching
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
└── index.html              # HTML template
```

## Key Components

### NotePreview

The `NotePreview` component renders markdown content using `@uiw/react-markdown-preview`.

**Props:**
- `note: Note | null` - The note to preview

**Features:**
- Real-time markdown rendering
- Handles empty states
- Responsive design

### 🚧 TODO: Document other key components

- NoteEditor
- NoteList
- AppLayout
- ThemeProvider

## State Management

🚧 **TODO**: Document state management approach (Context, Redux, Zustand, etc.)

## Styling

### Material UI Theme

The application uses Material UI's theming system with support for dark mode.

**Key theme features:**
- Light/dark mode toggle
- Consistent color palette
- Responsive typography
- Custom component variants

### CSS Organization

- Global styles in `index.css`
- Component-specific styles using Material UI's `sx` prop
- Theme-based responsive design

## Development Patterns

### Component Structure

```tsx
import React from 'react';
import { Paper, Box } from '@mui/material';

interface ComponentProps {
  // Define props with TypeScript
}

const Component = ({ prop }: ComponentProps) => {
  // Component logic
  return (
    <Paper>
      {/* JSX */}
    </Paper>
  );
};

export default Component;
```

### API Integration

API calls are organized in the `services/` directory with TypeScript interfaces.

```typescript
// services/notes/types.ts
export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// services/notes/api.ts
export const notesApi = {
  getAll: () => fetch('/api/notes'),
  create: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => 
    fetch('/api/notes', { method: 'POST', body: JSON.stringify(note) })
};
```

## Testing

### Testing Stack

- **Vitest** - Test runner
- **React Testing Library** - Component testing
- **MSW** - API mocking (if implemented)

### Running Tests

```bash
npm run test        # Run tests once
npm run test:watch  # Run tests in watch mode
npm run test:ui     # Run tests with UI
```

### Testing Patterns

🚧 **TODO**: Add testing examples and best practices

## Build and Deployment

### Development

```bash
npm run dev         # Start development server
npm run preview     # Preview production build
```

### Production

```bash
npm run build       # Build for production
npm run lint        # Run linting
npm run type-check  # TypeScript type checking
```

## Environment Variables

All environment variables must be prefixed with `VITE_` to be accessible in the frontend.

```bash
# .env
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_ENABLE_AUTOSAVE=true
```

## Performance Considerations

### Bundle Size

- Use dynamic imports for code splitting
- Analyze bundle size with `npm run build -- --analyze`
- Optimize Material UI imports

### Runtime Performance

- Use React.memo for expensive components
- Implement virtualization for large lists
- Optimize re-renders with useMemo and useCallback

## Accessibility

🚧 **TODO**: Document accessibility features and guidelines

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## Browser Support

🚧 **TODO**: Define browser support matrix

---

📝 **TODO**:
- Add routing documentation when implemented
- Document state management patterns
- Add testing examples
- Add accessibility guidelines
- Document performance optimization strategies
- Add internationalization support if implemented