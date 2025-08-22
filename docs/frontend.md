# Frontend Documentation

The Notes MD frontend is built with React, TypeScript, and Material-UI, providing a modern and responsive user interface.

## Architecture

### Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI** - Component library
- **React Markdown** - Markdown rendering

### Project Structure

```
web/
├── src/
│   ├── components/          # React components
│   │   ├── NoteEditor.tsx   # Note editing component
│   │   ├── NoteList.tsx     # Notes list sidebar
│   │   └── NotePreview.tsx  # Markdown preview
│   ├── services/            # Business logic
│   │   └── notes/           # Notes service
│   ├── types.ts            # TypeScript type definitions
│   └── App.tsx             # Main application component
├── public/                 # Static assets
└── index.html             # HTML template
```

## Components

### NoteEditor

The main editor component that handles markdown input.

**Props:**
- `note: Note | null` - The current note being edited
- `onNoteChange: (note: Note) => void` - Callback when note content changes

**Features:**
- Automatic title extraction from first line
- Real-time content updates
- Monospace font for better markdown editing

### NoteList

Sidebar component showing all notes.

**Features:**
- Add new note button
- Note selection
- Delete note functionality
- Shows note titles and creation dates

### NotePreview

Real-time markdown preview component.

**Props:**
- `note: Note | null` - The note to preview

**Features:**
- Live markdown rendering
- Synchronized with editor content

## State Management

The application uses React's built-in state management with hooks:

- `useState` for local component state
- `useEffect` for side effects
- Context API could be added for global state if needed

## Services

### NotesService

Handles all note operations and local storage persistence.

**Methods:**
- `getAllNotes()` - Get all notes
- `addNote()` - Create a new note
- `updateNote(note)` - Update existing note
- `deleteNote(id)` - Delete a note

## Environment Variables

The frontend supports these environment variables:

- `VITE_API_URL` - Base URL for API endpoints
- `VITE_APP_TITLE` - Application title
- `VITE_ENABLE_DARK_MODE_BY_DEFAULT` - Default dark mode setting

## Development

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

---

*TODO: Add component prop documentation, testing guidelines, and styling conventions.*