# Architecture Documentation

This section documents the architecture and design decisions of Notes MD.

## Table of Contents

- [System Overview](overview.md)
- [Frontend Architecture](frontend.md)
- [Backend Architecture](backend.md)
- [Data Flow](data-flow.md)
- [Design Decisions](design-decisions.md)

## High-Level Architecture

Notes MD follows a client-server architecture with:

- **Frontend**: React application with TypeScript and Material-UI
- **Backend**: Express.js REST API with TypeScript
- **Storage**: Local storage for persistence (in current implementation)

## Technology Stack

### Frontend
- React 19
- TypeScript
- Vite (build tool)
- Material-UI (component library)
- React Markdown (for preview)

### Backend
- Node.js
- Express.js
- TypeScript
- UUID for unique identifiers

## TODO

- [ ] Document detailed component architecture
- [ ] Add system diagrams
- [ ] Document data models and schemas
- [ ] Explain design patterns used
- [ ] Document security considerations