# Architecture Documentation

This folder contains architectural documentation for the Notes MD project.

## Overview

Notes MD is a full-stack web application for creating and managing markdown notes. The application follows a modern client-server architecture with a React-based frontend and an Express-based REST API backend.

## Architecture Documents

- [System Overview](./system-overview.md) - High-level architecture and component overview
- [Frontend Architecture](./frontend-architecture.md) - React frontend structure and patterns
- [Backend Architecture](./backend-architecture.md) - Express API structure and design
- [Data Flow](./data-flow.md) - How data flows through the application

## Tech Stack Summary

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Material UI** - Component library
- **React Markdown** - Markdown rendering

### Backend
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Key Design Principles

1. **Separation of Concerns** - Clear separation between frontend and backend
2. **Type Safety** - TypeScript throughout the stack
3. **RESTful API** - Standard HTTP methods and conventions
4. **Component-Based UI** - Modular, reusable React components
5. **Real-time Preview** - Instant markdown rendering feedback

## Project Structure

```
notes-md/
├── web/                 # Frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API client and business logic
│   │   └── ...
│   └── ...
├── api/                 # Backend API
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── models/      # Data models
│   │   ├── routes/      # API routes
│   │   └── middleware/  # Express middleware
│   └── ...
└── architecture/        # Architecture documentation
```

## Getting Started with Architecture

For developers new to the project:

1. Start with the [System Overview](./system-overview.md) to understand the high-level architecture
2. Review [Frontend Architecture](./frontend-architecture.md) if working on the UI
3. Review [Backend Architecture](./backend-architecture.md) if working on the API
4. Understand [Data Flow](./data-flow.md) to see how components interact

## Contributing

When making architectural changes:
- Update relevant documentation in this folder
- Ensure changes align with existing design principles
- Document any new patterns or conventions
