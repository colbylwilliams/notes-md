# System Overview

## Introduction

Notes MD is a web-based markdown note-taking application built with modern web technologies. The system enables users to create, edit, delete, and preview markdown notes through an intuitive user interface.

## High-Level Architecture

The application follows a **client-server architecture** with two main components:

```
┌─────────────────────────────────────────────────────────┐
│                     Client (Browser)                     │
│  ┌───────────────────────────────────────────────────┐  │
│  │         React Frontend (Port 5173)                │  │
│  │  - UI Components (Material UI)                    │  │
│  │  - Markdown Editor & Preview                      │  │
│  │  - State Management                               │  │
│  │  - API Client                                     │  │
│  └───────────────────────────────────────────────────┘  │
└──────────────────────┬──────────────────────────────────┘
                       │ HTTP/REST API
                       │ (JSON)
                       │
┌──────────────────────▼──────────────────────────────────┐
│              Express API Server (Port 3000)              │
│  ┌───────────────────────────────────────────────────┐  │
│  │  - REST API Endpoints                             │  │
│  │  - Business Logic (Controllers)                   │  │
│  │  - Data Models                                    │  │
│  │  - In-Memory Storage                              │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Core Components

### 1. Web Frontend (`/web`)

**Purpose**: Provides the user interface for interacting with notes.

**Key Features**:
- Markdown editor with real-time preview
- Note list management
- Create, read, update, delete operations
- Dark mode support
- Responsive design

**Technology**: React + TypeScript + Vite + Material UI

### 2. REST API Backend (`/api`)

**Purpose**: Handles data persistence and business logic.

**Key Features**:
- RESTful API endpoints
- CRUD operations for notes
- Data validation
- Error handling

**Technology**: Express + TypeScript + Node.js

## Communication Flow

1. **User Interaction**: User interacts with the React UI
2. **API Request**: Frontend makes HTTP requests to the backend API
3. **Processing**: Backend processes requests through controllers
4. **Storage**: Data is stored/retrieved from in-memory storage
5. **Response**: Backend returns JSON responses
6. **UI Update**: Frontend updates the UI with the response data

## Data Storage

Currently, the application uses **in-memory storage** for notes. This means:
- Notes are stored in memory while the server is running
- Data is lost when the server restarts
- Suitable for development and demonstration purposes

**Future Enhancement**: Could be extended to use persistent storage (database, file system, etc.)

## API Endpoints

The backend exposes the following REST endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Retrieve all notes |
| GET | `/api/notes/:id` | Retrieve a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

## Development Workflow

```
Developer
    │
    ├─── Frontend Development
    │    ├─── Run: npm run dev (port 5173)
    │    ├─── Hot Module Replacement (HMR)
    │    └─── Proxy API calls to backend
    │
    └─── Backend Development
         ├─── Run: npm run dev (port 3000)
         ├─── Auto-reload on changes
         └─── Serve API endpoints
```

## Production Deployment

```
Build Process
    │
    ├─── Frontend: npm run build
    │    └─── Output: Static files (HTML, CSS, JS)
    │
    └─── Backend: npm run build
         ├─── Output: Compiled JavaScript
         └─── Run: npm start
```

## Security Considerations

- **CORS**: Enabled for cross-origin requests
- **Input Validation**: Required for user input
- **Error Handling**: Centralized error handling middleware
- **Environment Variables**: Sensitive configuration via .env files

## Scalability Considerations

Current architecture supports:
- ✅ Adding new API endpoints
- ✅ Adding new UI components
- ✅ Switching storage backends
- ✅ Adding authentication/authorization
- ✅ Adding more features (tags, search, etc.)

## Technology Choices

### Why React?
- Component-based architecture
- Large ecosystem and community
- Excellent developer experience
- Strong TypeScript support

### Why Express?
- Minimal and flexible
- Large middleware ecosystem
- Easy to understand and extend
- Industry standard for Node.js APIs

### Why TypeScript?
- Type safety reduces bugs
- Better IDE support and autocomplete
- Self-documenting code
- Easier refactoring

### Why Vite?
- Fast development server
- Optimized production builds
- Modern build tool
- Great developer experience

## Next Steps

To dive deeper into specific areas:
- [Frontend Architecture](./frontend-architecture.md) - UI patterns and component structure
- [Backend Architecture](./backend-architecture.md) - API design and implementation details
- [Data Flow](./data-flow.md) - Detailed interaction flows
