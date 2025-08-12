# Architecture

This document describes the technical architecture and design decisions for Notes MD.

## System Overview

Notes MD follows a typical client-server architecture with a React frontend and Express.js API backend. The application supports both standalone frontend operation (using localStorage) and full-stack operation with the API backend.

## Components

### Frontend (React App)
- **Location:** `/web`
- **Technology:** React 19, TypeScript 5.8, Vite 6.3, Material-UI 7.1
- **Purpose:** User interface for creating and managing markdown notes
- **Key Features:**
  - Real-time markdown preview using `react-markdown`
  - Material-UI components for responsive design
  - Local storage persistence via `NotesService`
  - UUID-based note identification

#### Component Hierarchy
- **App.tsx** - Main application component
- **NoteEditor.tsx** - Markdown editor with live preview
- **NoteList.tsx** - Sidebar with note list and navigation
- **NotePreview.tsx** - Rendered markdown preview panel

#### Data Flow
The frontend uses a singleton `NotesService` that:
1. Manages note state in memory
2. Persists to localStorage automatically
3. Provides CRUD operations for components
4. Handles date serialization/deserialization

### Backend (Express API)
- **Location:** `/api`  
- **Technology:** Express.js 4.18, TypeScript 5.3, Node.js 20+
- **Purpose:** REST API for note management and persistence

#### API Architecture
- **Entry Point:** `src/index.ts` - Server setup and middleware
- **Routes:** `src/routes/notes.ts` - Note endpoint definitions
- **Controllers:** `src/controllers/notes.ts` - Business logic
- **Models:** `src/models/note.ts` - Data type definitions
- **Middleware:** Error handling and CORS support

#### Middleware Stack
1. **CORS** - Cross-origin resource sharing
2. **express.json()** - JSON body parsing
3. **Custom Routes** - Note management endpoints
4. **Error Handler** - Centralized error processing

## Data Flow

### Note Creation Flow
1. User clicks '+' button in NoteList component
2. NotesService.addNote() creates new note with UUID
3. Note saved to localStorage immediately
4. UI updates to show new note in editor

### Note Editing Flow
1. User selects note from NoteList
2. NoteEditor loads note content
3. User types in editor (left panel)
4. NotePreview shows live markdown rendering (right panel)
5. Changes auto-saved to localStorage via NotesService

### Note Deletion Flow
1. User triggers delete action
2. NotesService.deleteNote() removes from memory and localStorage
3. UI returns to note list or creates new note

### API Integration (Optional)
When API is available, the frontend can be extended to:
1. Fetch notes from `/api/notes` on startup
2. POST new notes to `/api/notes`
3. PUT updates to `/api/notes/:id`
4. DELETE notes via `/api/notes/:id`

## Storage

### Current Implementation
- **Frontend:** localStorage via NotesService singleton
- **Backend:** In-memory array (development only)
- **Data Format:** JSON serialization with date handling

### Storage Schema
```typescript
interface Note {
  id: string;        // UUID v4
  title: string;     // Extracted from content or "Untitled Note"
  content: string;   // Full markdown content
  createdAt: Date;   // Creation timestamp
  updatedAt: Date;   // Last modification timestamp
}
```

### Future Database Integration
The current in-memory backend storage can be replaced with:
- SQLite for local file-based storage
- PostgreSQL for production databases
- MongoDB for document-based storage

## Security

### Input Validation
- **Frontend:** TypeScript ensures type safety
- **Backend:** Express-validator can be added for request validation
- **Content:** Markdown content is safely rendered by react-markdown

### API Security
- **CORS:** Configured to allow cross-origin requests
- **Body Parsing:** Limited to JSON with express.json()
- **Error Handling:** Centralized error middleware prevents information leakage

### Data Protection
- **Client-Side:** localStorage data persists locally only
- **Transport:** Production should use HTTPS
- **Storage:** No sensitive data stored in current implementation

## Performance

### Frontend Optimization
- **Vite Build System:** Fast development and optimized production builds
- **Code Splitting:** Vite handles automatic code splitting
- **Bundle Analysis:** Use `npm run build` to analyze bundle size
- **React Optimization:** Components use React 19 performance features

### API Performance
- **In-Memory Storage:** Current implementation is extremely fast
- **Response Time:** Sub-millisecond responses for CRUD operations
- **Caching:** No caching implemented (not needed for current storage)

### Development Performance
- **Hot Reload:** Vite provides instant hot module replacement
- **TypeScript:** Fast compilation with incremental builds
- **ESLint:** Real-time linting feedback

## Deployment Architecture

### Development Setup
1. **Frontend:** `npm run dev` on port 5173 (Vite dev server)
2. **API:** `npm run dev` on port 3000 (ts-node-dev with hot reload)
3. **CORS:** API configured to accept requests from frontend

### Production Deployment
1. **Frontend:** `npm run build` creates optimized static files
2. **API:** `npm run build && npm start` compiles TypeScript and runs production server
3. **Serving:** Frontend can be served by any static file server
4. **API Hosting:** Any Node.js hosting platform (Railway, Render, Vercel Functions)