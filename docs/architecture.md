# Architecture Overview

## System Architecture

Notes MD is a full-stack web application built with a React frontend and Express.js backend, designed for creating and managing markdown notes.

## High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐
│   Web Browser   │    │   Web Browser   │
│  (User Client)  │    │  (User Client)  │
└─────────────────┘    └─────────────────┘
         │                       │
         └───────────┬───────────┘
                     │
                     ▼
         ┌─────────────────────┐
         │   React Frontend    │
         │   (Port 5173)       │
         │                     │
         │ - Material UI       │
         │ - TypeScript        │
         │ - Vite             │
         └─────────────────────┘
                     │
                     │ HTTP API Calls
                     ▼
         ┌─────────────────────┐
         │   Express API       │
         │   (Port 3000)       │
         │                     │
         │ - REST Endpoints    │
         │ - TypeScript        │
         │ - In-Memory Storage │
         └─────────────────────┘
```

## Frontend Architecture

### Component Structure

TODO: Add component hierarchy and structure

### State Management

TODO: Document state management approach

### Data Flow

TODO: Document data flow patterns

## Backend Architecture

### API Design

The backend follows RESTful principles with the following endpoints:

- `GET /api/notes` - Retrieve all notes
- `GET /api/notes/:id` - Retrieve a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update an existing note
- `DELETE /api/notes/:id` - Delete a note

### Data Storage

Currently uses in-memory storage. Future versions may include:
- File system storage
- Database integration (PostgreSQL, MongoDB)
- Cloud storage options

## Technology Decisions

### Frontend Technology Choices

- **React**: Component-based UI framework
- **TypeScript**: Type safety and better developer experience
- **Material UI**: Consistent design system
- **Vite**: Fast development and build tooling

### Backend Technology Choices

- **Express.js**: Lightweight and flexible web framework
- **TypeScript**: Shared language with frontend
- **In-Memory Storage**: Simple initial implementation

## Security Considerations

TODO: Document security measures and considerations

## Performance Considerations

TODO: Document performance optimizations and considerations

## Future Architecture Plans

TODO: Document planned architectural improvements:

- [ ] Database integration
- [ ] Authentication system
- [ ] Real-time collaboration
- [ ] File attachments
- [ ] Search functionality