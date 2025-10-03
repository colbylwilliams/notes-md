# Frontend Architecture

## Overview

The frontend is a single-page application (SPA) built with React, TypeScript, and Vite. It provides a responsive, user-friendly interface for managing markdown notes with real-time preview capabilities.

## Technology Stack

- **React 18**: UI library with hooks and functional components
- **TypeScript**: Static typing for better code quality
- **Vite**: Fast build tool and dev server with HMR
- **Material UI (MUI)**: Component library for consistent UI
- **React Markdown**: Markdown rendering engine

## Project Structure

```
web/
├── src/
│   ├── components/          # React components
│   │   ├── NoteList.tsx    # List of notes sidebar
│   │   ├── NoteEditor.tsx  # Markdown editor
│   │   └── NotePreview.tsx # Markdown preview pane
│   ├── services/            # API and business logic
│   │   └── notes/          # Notes API client
│   ├── types.ts            # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   ├── App.css             # Application styles
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Component Architecture

### Component Hierarchy

```
App (Main Container)
├── NoteList (Sidebar)
│   ├── Add Note Button
│   └── Note Items
│       └── Delete Button
├── NoteEditor (Left Panel)
│   └── Textarea
└── NotePreview (Right Panel)
    └── Rendered Markdown
```

### Component Responsibilities

#### 1. App Component (`App.tsx`)
**Purpose**: Main application container and state management.

**Responsibilities**:
- Manages global application state (notes, selected note)
- Handles API calls through service layer
- Orchestrates component interactions
- Provides layout structure

**State Management**:
```typescript
- notes: Note[]              // All notes
- selectedNoteId: string     // Currently selected note
- loading: boolean           // Loading state
- error: string              // Error messages
```

#### 2. NoteList Component (`NoteList.tsx`)
**Purpose**: Displays list of notes with create/delete actions.

**Props**:
```typescript
{
  notes: Note[];
  selectedNoteId: string | null;
  onNoteSelect: (id: string) => void;
  onAddNote: () => void;
  onDeleteNote: (id: string) => void;
}
```

**Features**:
- Displays note titles and timestamps
- Highlights selected note
- Add note button
- Delete note button for each item

#### 3. NoteEditor Component (`NoteEditor.tsx`)
**Purpose**: Markdown editor for creating/editing notes.

**Props**:
```typescript
{
  note: Note | null;
  onNoteChange: (content: string) => void;
}
```

**Features**:
- Textarea for markdown input
- Auto-extracts title from first heading
- Triggers onChange events for autosave

#### 4. NotePreview Component (`NotePreview.tsx`)
**Purpose**: Real-time markdown preview.

**Props**:
```typescript
{
  content: string;
}
```

**Features**:
- Renders markdown to HTML
- Synchronized with editor
- Styled markdown output

## Data Flow

### Loading Notes
```
1. App mounts
2. App calls notesService.getNotes()
3. API returns notes array
4. App updates state with notes
5. NoteList receives notes and renders
```

### Creating a Note
```
1. User clicks "+" button in NoteList
2. onAddNote callback fires
3. App calls notesService.createNote()
4. API returns new note
5. App adds note to state
6. App selects the new note
7. NoteEditor displays empty note
```

### Editing a Note
```
1. User types in NoteEditor
2. onNoteChange callback fires
3. App updates local state
4. Preview updates immediately
5. Debounced API call updates backend
6. Backend returns updated note
```

### Deleting a Note
```
1. User clicks delete button
2. onDeleteNote callback fires
3. App calls notesService.deleteNote()
4. API confirms deletion
5. App removes note from state
6. NoteList updates
```

## Service Layer

### Notes Service (`services/notes/`)

Abstracts API communication from components.

**Key Functions**:
```typescript
- getNotes(): Promise<Note[]>
- getNote(id: string): Promise<Note>
- createNote(note: NoteInput): Promise<Note>
- updateNote(id: string, note: NoteInput): Promise<Note>
- deleteNote(id: string): Promise<void>
```

**Benefits**:
- Centralized API logic
- Easy to mock for testing
- Can add caching/optimistic updates
- Decouples components from API details

## State Management

### Current Approach: Component State

Uses React's `useState` and `useEffect` hooks for state management.

**Advantages**:
- Simple and straightforward
- No additional dependencies
- Easy to understand
- Sufficient for current scale

**Future Considerations**:
- Context API for deeply nested props
- Redux/Zustand for complex state
- React Query for server state

## Styling Approach

### Material UI Theme

Uses MUI's theming system for consistent design.

**Features**:
- Dark mode support
- Responsive breakpoints
- Consistent spacing
- Pre-built components

### Custom Styles

CSS modules or styled-components for custom styling needs.

## Performance Optimizations

### Current Optimizations
1. **Vite HMR**: Fast development feedback
2. **Code Splitting**: Automatic by Vite
3. **Lazy Loading**: Can be added for components

### Potential Future Optimizations
1. **React.memo**: Prevent unnecessary re-renders
2. **useMemo/useCallback**: Memoize expensive computations
3. **Virtual Scrolling**: For large note lists
4. **Debounced Autosave**: Reduce API calls

## Type Safety

### TypeScript Benefits

1. **Compile-time Errors**: Catch bugs early
2. **IntelliSense**: Better IDE support
3. **Refactoring**: Safer code changes
4. **Documentation**: Types as documentation

### Key Type Definitions

```typescript
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NoteInput {
  title: string;
  content: string;
}
```

## Environment Configuration

### Environment Variables (`.env`)

```
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_ENABLE_AUTOSAVE=true
VITE_APP_TITLE=Notes MD
VITE_AUTOSAVE_INTERVAL=2000
```

**Note**: Only `VITE_` prefixed variables are exposed to client.

## Build & Deployment

### Development
```bash
npm run dev
# Runs on http://localhost:5173
# Hot Module Replacement enabled
```

### Production Build
```bash
npm run build
# Output: dist/ folder
# Optimized and minified
# Ready for static hosting
```

### Preview Production Build
```bash
npm run preview
# Test production build locally
```

## Testing Strategy

### Current Testing Setup
- Vitest for unit testing
- React Testing Library for component testing

### Testing Priorities
1. **Component Tests**: User interactions
2. **Service Tests**: API integration
3. **Utility Tests**: Helper functions

## Accessibility

### Considerations
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation
- Screen reader support
- Color contrast (Material UI handles this)

## Browser Support

Targets modern browsers:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Future Enhancements

Potential frontend improvements:
- [ ] Search functionality
- [ ] Tag system
- [ ] Folders/categories
- [ ] Export notes (PDF, HTML)
- [ ] Keyboard shortcuts
- [ ] Rich text toolbar
- [ ] Collaborative editing
- [ ] Offline support (PWA)
