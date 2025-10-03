# Data Flow

## Overview

This document describes how data flows through the Notes MD application, from user interactions to API responses and UI updates.

## Complete User Flows

### 1. Application Initialization

```
┌─────────────┐
│ User Opens  │
│ Browser     │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Browser loads HTML, CSS, JS         │
│ React app initializes               │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ App component mounts                │
│ useEffect hook triggers             │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ notesService.getNotes() called      │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ HTTP GET /api/notes                 │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Express routes request              │
│ → notes.ts router                   │
│ → notesController.getAllNotes()     │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Controller retrieves from storage   │
│ Returns notes array                 │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ HTTP Response: JSON array of notes  │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Frontend receives response          │
│ Updates state: setNotes(data)       │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ React re-renders components         │
│ NoteList displays notes             │
└─────────────────────────────────────┘
```

### 2. Creating a New Note

```
┌─────────────┐
│ User clicks │
│ '+' button  │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│ NoteList: onAddNote() callback      │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ App: handleAddNote() function       │
│ Creates new note object:            │
│ {                                   │
│   title: "New Note",                │
│   content: ""                       │
│ }                                   │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ notesService.createNote(newNote)    │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ HTTP POST /api/notes                │
│ Body: { title, content }            │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Express middleware:                 │
│ 1. CORS check                       │
│ 2. JSON body parser                 │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Controller: createNote()            │
│ 1. Validates input                  │
│ 2. Generates ID (UUID)              │
│ 3. Adds timestamps                  │
│ 4. Saves to storage                 │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Storage adds note to array          │
│ Returns complete note object        │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ HTTP Response 201 Created           │
│ Body: Complete note with ID         │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Frontend receives new note          │
│ Updates state:                      │
│ - Adds to notes array               │
│ - Sets as selected note             │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ React re-renders:                   │
│ - NoteList shows new note           │
│ - NoteEditor shows empty editor     │
│ - NotePreview shows empty preview   │
└─────────────────────────────────────┘
```

### 3. Editing a Note

```
┌─────────────┐
│ User types  │
│ in editor   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│ NoteEditor: onChange event          │
│ Gets textarea value                 │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ onNoteChange() callback fires       │
│ Passes new content to App           │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ App: handleNoteChange()             │
│ 1. Updates local state immediately  │
│    (for instant preview)            │
│ 2. Extracts title from content      │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ React re-renders:                   │
│ - NoteEditor: controlled input      │
│ - NotePreview: shows new markdown   │
└──────┬──────────────────────────────┘
       │
       ▼ (Debounced - after typing stops)
┌─────────────────────────────────────┐
│ notesService.updateNote(id, data)   │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ HTTP PUT /api/notes/:id             │
│ Body: { title, content }            │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Controller: updateNote()            │
│ 1. Finds note by ID                 │
│ 2. Validates new data               │
│ 3. Updates fields                   │
│ 4. Updates timestamp                │
│ 5. Saves to storage                 │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ HTTP Response 200 OK                │
│ Body: Updated note object           │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Frontend receives updated note      │
│ Updates state with latest data      │
│ (ensures sync with backend)         │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ NoteList updates timestamp          │
│ (if visible)                        │
└─────────────────────────────────────┘
```

### 4. Selecting a Note

```
┌─────────────┐
│ User clicks │
│ note in     │
│ list        │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│ NoteList: onNoteSelect(id) callback │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ App: handleNoteSelect(id)           │
│ Updates selectedNoteId state        │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ React re-renders:                   │
│ - NoteList: highlights selected     │
│ - NoteEditor: loads note content    │
│ - NotePreview: renders markdown     │
└─────────────────────────────────────┘
```

**Note**: No API call needed - data already in frontend state.

### 5. Deleting a Note

```
┌─────────────┐
│ User clicks │
│ delete icon │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│ NoteList: onDeleteNote(id) callback │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ App: handleDeleteNote(id)           │
│ (Optional: Confirmation dialog)     │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ notesService.deleteNote(id)         │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ HTTP DELETE /api/notes/:id          │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Controller: deleteNote()            │
│ 1. Finds note by ID                 │
│ 2. Removes from storage             │
│ 3. Returns success                  │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ HTTP Response 204 No Content        │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Frontend processes success          │
│ Updates state:                      │
│ - Removes note from array           │
│ - Clears selection if deleted       │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ React re-renders:                   │
│ - NoteList: note removed            │
│ - Editor/Preview: cleared/empty     │
└─────────────────────────────────────┘
```

## Data Transformation Points

### Frontend → Backend

1. **User Input** (raw text)
   ```typescript
   "# My Note\n\nContent here"
   ```

2. **Component State** (typed object)
   ```typescript
   {
     title: "My Note",
     content: "# My Note\n\nContent here"
   }
   ```

3. **API Request** (JSON)
   ```json
   {
     "title": "My Note",
     "content": "# My Note\n\nContent here"
   }
   ```

### Backend → Frontend

1. **Storage** (in-memory object)
   ```typescript
   {
     id: "uuid-123",
     title: "My Note",
     content: "# My Note\n\nContent here",
     createdAt: new Date("2024-01-01"),
     updatedAt: new Date("2024-01-01")
   }
   ```

2. **HTTP Response** (JSON)
   ```json
   {
     "id": "uuid-123",
     "title": "My Note",
     "content": "# My Note\n\nContent here",
     "createdAt": "2024-01-01T00:00:00.000Z",
     "updatedAt": "2024-01-01T00:00:00.000Z"
   }
   ```

3. **Frontend State** (parsed object)
   ```typescript
   {
     id: "uuid-123",
     title: "My Note",
     content: "# My Note\n\nContent here",
     createdAt: new Date("2024-01-01T00:00:00.000Z"),
     updatedAt: new Date("2024-01-01T00:00:00.000Z")
   }
   ```

4. **UI Display** (rendered components)
   - List: "My Note" + formatted timestamp
   - Editor: Raw markdown text
   - Preview: Rendered HTML

## State Management Flow

### Frontend State Structure

```typescript
// App Component State
{
  notes: Note[],           // All notes from API
  selectedNoteId: string,  // Currently selected note ID
  loading: boolean,        // API call in progress
  error: string | null     // Error messages
}

// Derived State (computed)
selectedNote = notes.find(n => n.id === selectedNoteId)
```

### State Update Triggers

1. **Initial Load**: `useEffect(() => fetchNotes(), [])`
2. **Create Note**: User clicks "+" button
3. **Update Note**: User types in editor (debounced)
4. **Delete Note**: User clicks delete icon
5. **Select Note**: User clicks note in list

## Error Handling Flow

### API Error Scenario

```
┌─────────────────────────────────────┐
│ API call fails (network/server)     │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Service catches error               │
│ Returns rejected promise            │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Component catch block               │
│ Updates error state                 │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ React re-renders                    │
│ Shows error message to user         │
└─────────────────────────────────────┘
```

### Validation Error Scenario

```
┌─────────────────────────────────────┐
│ User submits invalid data           │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Backend validates request           │
│ Returns 400 Bad Request             │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Frontend receives error response    │
│ Displays validation message         │
└─────────────────────────────────────┘
```

## Performance Optimizations

### Optimistic Updates

**Current**: Wait for API response before updating UI

**Potential Enhancement**: Update UI immediately, rollback if API fails
```typescript
// Optimistic update
setNotes(prev => [...prev, newNote]);

try {
  await api.createNote(newNote);
} catch (error) {
  // Rollback on failure
  setNotes(prev => prev.filter(n => n.id !== newNote.id));
}
```

### Debouncing

**Auto-save Implementation**:
```typescript
const debouncedSave = useDebouncedCallback(
  (id, content) => {
    notesService.updateNote(id, content);
  },
  1000 // Wait 1 second after typing stops
);
```

### Caching

**Potential Enhancement**: Cache frequently accessed notes
```typescript
// In-memory cache
const noteCache = new Map();

// Check cache before API call
if (noteCache.has(id)) {
  return noteCache.get(id);
}
```

## Real-time Features (Future)

### WebSocket Integration

```
┌─────────────────────────────────────┐
│ User A edits note                   │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Backend receives update             │
│ Saves to storage                    │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ WebSocket broadcasts change         │
│ to all connected clients            │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ User B receives update              │
│ UI auto-refreshes                   │
└─────────────────────────────────────┘
```

## Data Consistency

### Current Approach

- **Source of Truth**: Backend storage
- **Frontend State**: Temporary cache
- **Sync Strategy**: Fetch on load, update after mutations

### Consistency Guarantees

- ✅ Create operations immediately reflect in UI
- ✅ Updates sync after debounce period
- ✅ Deletes immediately remove from UI
- ⚠️ Concurrent edits not handled (no conflict resolution)

### Future Enhancements

- Optimistic concurrency control
- Version numbers for notes
- Conflict detection and resolution
- Real-time synchronization

## Summary

The data flow in Notes MD follows a standard client-server pattern:

1. **User Interaction** triggers events
2. **React Components** handle events and update local state
3. **Service Layer** makes API calls
4. **Express Backend** processes requests
5. **Storage Layer** persists/retrieves data
6. **Responses** flow back through the stack
7. **UI Updates** reflect the new state

This architecture provides a clear separation of concerns and makes the application easy to understand, test, and extend.
