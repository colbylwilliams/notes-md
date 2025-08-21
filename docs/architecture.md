# Architecture Overview

This document provides an overview of the Notes MD application architecture, including system design, component relationships, and technical decisions.

## System Architecture

Notes MD follows a client-server architecture with clear separation between frontend and backend concerns.

```
┌─────────────────┐    HTTP/REST API    ┌─────────────────┐
│   Frontend      │◄───────────────────►│   Backend       │
│   (React SPA)   │                     │   (Express API) │
└─────────────────┘                     └─────────────────┘
         │                                       │
         ▼                                       ▼
┌─────────────────┐                     ┌─────────────────┐
│ Browser Storage │                     │  File System    │
│ (localStorage)  │                     │  (JSON files)   │
└─────────────────┘                     └─────────────────┘
```

## Frontend Architecture

### Technology Stack
- **React 19** - UI library with hooks
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and development server
- **Material UI** - Component library and design system
- **React Markdown** - Markdown rendering

### Component Structure

```
src/
├── components/
│   ├── NoteList.tsx      # Note listing and management
│   ├── NoteEditor.tsx    # Markdown editor interface  
│   └── NotePreview.tsx   # Real-time markdown preview
├── services/
│   └── notes/           # Note data management
│       ├── index.ts     # Service implementation
│       └── types.ts     # TypeScript interfaces
└── App.tsx              # Main application component
```

### State Management
- React's built-in `useState` and `useEffect` hooks
- Local state for UI interactions
- Service layer for data persistence

### Data Flow
1. User interactions trigger component state changes
2. Components call service methods for data operations
3. Services handle local storage persistence
4. State updates trigger UI re-renders

## Backend Architecture

### Technology Stack
- **Express.js** - Web application framework
- **TypeScript** - Type safety and code organization
- **Node.js** - JavaScript runtime
- **UUID** - Unique identifier generation

### API Structure

```
src/
├── routes/
│   └── notes.ts         # Note CRUD endpoints
├── middleware/
│   └── validation.ts    # Request validation
├── services/
│   └── noteService.ts   # Business logic
├── types/
│   └── note.ts          # TypeScript interfaces
└── index.ts             # Application entry point
```

### Data Storage
- **Current**: File-based storage (JSON)
- **Future**: Database integration (PostgreSQL/MongoDB)

## Communication Protocol

### REST API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/notes` | Retrieve all notes |
| GET | `/api/notes/:id` | Retrieve specific note |
| POST | `/api/notes` | Create new note |
| PUT | `/api/notes/:id` | Update existing note |
| DELETE | `/api/notes/:id` | Delete note |

### Data Format

Notes follow this TypeScript interface:

```typescript
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Design Decisions

### Frontend Choices
- **React over Vue/Angular**: Team familiarity and ecosystem
- **Material UI**: Consistent design system and accessibility
- **Vite over Create React App**: Faster development builds
- **Local Storage**: Simple persistence without backend dependency

### Backend Choices  
- **Express over Fastify/Koa**: Mature ecosystem and team familiarity
- **TypeScript**: Type safety and better developer experience
- **File Storage**: Simplicity for MVP, easily replaceable

## Security Considerations

### Current Implementation
- CORS configuration for cross-origin requests
- Input validation and sanitization
- No authentication (local development focus)

### Future Enhancements
- [ ] User authentication and authorization
- [ ] Rate limiting and request throttling
- [ ] Data encryption at rest
- [ ] Audit logging

## Performance Considerations

### Frontend Optimizations
- Component memoization for large note lists
- Debounced text input for real-time preview
- Lazy loading for improved initial load times

### Backend Optimizations
- Response compression
- Caching strategies for frequently accessed notes
- Database indexing (when implemented)

## TODO: Architecture Documentation

- [ ] Add detailed component interaction diagrams
- [ ] Document error handling strategies
- [ ] Describe testing architecture
- [ ] Add deployment architecture diagrams
- [ ] Document scalability considerations
- [ ] Add monitoring and observability patterns
- [ ] Describe data migration strategies