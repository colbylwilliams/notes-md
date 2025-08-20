# Architecture Overview

This document describes the high-level architecture and design decisions for Notes MD.

## System Architecture

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│                 │ <─────────────> │                 │
│   React Web     │                 │   Express API   │
│   Application   │                 │     Server      │
│                 │                 │                 │
└─────────────────┘                 └─────────────────┘
         │                                   │
         │                                   │
         v                                   v
┌─────────────────┐                 ┌─────────────────┐
│  Local Storage  │                 │  File System    │
│   (Browser)     │                 │   (JSON files)  │
└─────────────────┘                 └─────────────────┘
```

## Frontend Architecture

### Component Hierarchy
```
App
├── NoteList (sidebar)
├── NoteEditor (main content)
└── NotePreview (preview panel)
```

### State Management
- React hooks for local component state
- Props drilling for shared state
- Local storage service for persistence

### Data Flow
1. User interacts with NoteEditor
2. Content changes trigger state updates
3. Updates propagate to NotePreview
4. Changes saved to local storage

## Backend Architecture

### Request Flow
```
Client Request → Express Router → Controller → Service → Response
```

### File Structure
```
api/
├── src/
│   ├── controllers/    # Request handlers
│   ├── services/       # Business logic
│   ├── types/          # TypeScript interfaces
│   └── index.ts        # Express app setup
```

## Data Models

### Note Interface
```typescript
interface Note {
  id: string;          // UUID
  title: string;       // Extracted from content
  content: string;     // Markdown content
  createdAt: Date;     // Creation timestamp
  updatedAt: Date;     // Last modified timestamp
}
```

## Storage Strategy

### Current Implementation
- **Frontend:** Browser localStorage
- **Backend:** File system (JSON files)

### Future Considerations
- Database integration (PostgreSQL, MongoDB)
- User authentication and multi-tenancy
- Real-time collaboration

## API Design

### REST Principles
- Standard HTTP methods (GET, POST, PUT, DELETE)
- Resource-based URLs (`/api/notes`, `/api/notes/:id`)
- JSON request/response format
- Proper HTTP status codes

### Error Handling
- Consistent error response format
- Appropriate HTTP status codes
- Detailed error messages for development

## Security Considerations

### Current State
- No authentication required
- CORS enabled for development
- Input validation on API endpoints

### Future Enhancements
- User authentication (JWT)
- Rate limiting
- Input sanitization
- HTTPS enforcement

## Performance Considerations

### Frontend
- Component memoization opportunities
- Virtual scrolling for large note lists
- Code splitting for bundle optimization

### Backend
- Response caching
- Database query optimization
- API rate limiting

## Scalability Considerations

### Horizontal Scaling
- Stateless API design
- Database connection pooling
- Load balancer compatibility

### Vertical Scaling
- Memory usage optimization
- CPU-intensive operation handling
- Background processing

## Technology Decisions

### Frontend Choices
- **React:** Component-based architecture, large ecosystem
- **TypeScript:** Type safety, better development experience
- **Material UI:** Consistent design system, accessibility
- **Vite:** Fast development builds, modern tooling

### Backend Choices
- **Express:** Minimal, flexible, well-documented
- **TypeScript:** Shared language with frontend
- **File System:** Simple persistence for MVP

## TODO

- [ ] Add database schema design
- [ ] Document authentication flow
- [ ] Add caching strategy
- [ ] Create monitoring architecture
- [ ] Design real-time collaboration system
- [ ] Plan microservices migration path
- [ ] Add performance benchmarking strategy