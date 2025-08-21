# Architecture Documentation

This section provides technical architecture documentation for Notes MD.

## System Overview

Notes MD is a full-stack web application consisting of a React frontend and Express.js backend API, designed for creating and managing markdown notes.

## High-Level Architecture

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│   Frontend      │◄──────────────►│   Backend API   │
│   (React)       │                 │   (Express)     │
└─────────────────┘                 └─────────────────┘
│                                   │
│ Browser Storage                   │ [TODO: Storage]
│ (localStorage)                    │
└─────────────────┘                 └─────────────────┘
```

## Frontend Architecture

### Technology Stack
- **React 19**: Component-based UI framework
- **TypeScript**: Type safety and developer experience
- **Vite**: Fast build tool and dev server
- **Material-UI**: Component library for consistent design
- **React Markdown**: Markdown rendering component

### Component Structure
```
src/
├── components/          # Reusable UI components
│   ├── NoteEditor.tsx   # Markdown editor component
│   ├── NotePreview.tsx  # Markdown preview component
│   └── NoteList.tsx     # Note list component
├── services/            # API communication
│   └── notes/           # Notes service layer
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── types/               # TypeScript type definitions
```

### State Management
- **React State**: Component-level state management
- **Local Storage**: Persistence layer for notes
- **TODO**: Consider state management library for complex state

### Data Flow
1. User interactions trigger component state updates
2. Components communicate via props and callbacks
3. Services handle API communication
4. Local storage provides data persistence

## Backend Architecture

### Technology Stack
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **TypeScript**: Type safety and developer experience
- **UUID**: Unique identifier generation

### API Structure
```
src/
├── routes/              # API route definitions
├── middleware/          # Express middleware
├── models/              # Data models and types
├── services/            # Business logic layer
├── utils/               # Utility functions
└── index.ts             # Application entry point
```

### Request Flow
1. Client sends HTTP request
2. Express routes handle request routing
3. Middleware processes requests (validation, auth)
4. Services contain business logic
5. Response sent back to client

## Data Models

### Note Model
```typescript
interface Note {
  id: string;           // UUID
  title: string;        // Extracted from content
  content: string;      // Markdown content
  createdAt: Date;      // Creation timestamp
  updatedAt: Date;      // Last modification timestamp
}
```

## Communication

### API Communication
- **Protocol**: REST over HTTP
- **Format**: JSON
- **Base URL**: `http://localhost:3000` (development)
- **Endpoints**: CRUD operations for notes

### Error Handling
- Consistent error response format
- HTTP status codes for different error types
- Client-side error boundary components

## Security Considerations

### Current State
- No authentication implemented
- Client-side data storage only
- TODO: Add security measures

### Planned Security Features
- [ ] User authentication
- [ ] Data encryption
- [ ] Input sanitization
- [ ] CORS configuration
- [ ] Rate limiting

## Performance Considerations

### Frontend
- Component lazy loading
- Markdown rendering optimization
- Local storage for offline capability

### Backend  
- TODO: Add caching strategies
- TODO: Database indexing
- TODO: Response compression

## Scalability

### Current Limitations
- Single-user application
- Browser storage limitations
- No server-side persistence

### Future Scalability Plans
- [ ] Multi-user support
- [ ] Database integration
- [ ] Horizontal scaling
- [ ] CDN for static assets

## TODO

- [ ] Add database architecture documentation
- [ ] Document authentication flow
- [ ] Add deployment architecture diagrams
- [ ] Document monitoring and logging architecture
- [ ] Add performance benchmarking results
- [ ] Document backup and disaster recovery plans