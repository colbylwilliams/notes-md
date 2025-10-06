# Notes MD - Architecture Documentation

## Overview

Notes MD is a modern web application for creating, managing, and viewing markdown notes. The application follows a client-server architecture with a React-based frontend and an Express-based REST API backend.

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Side                          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  React Application                     │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐ │  │
│  │  │   UI Layer  │  │ State Mgmt   │  │   Services   │ │  │
│  │  │ (Material   │  │  (useState,  │  │   (Notes     │ │  │
│  │  │    UI)      │  │   useEffect) │  │   Service)   │ │  │
│  │  └─────────────┘  └──────────────┘  └──────────────┘ │  │
│  └───────────────────────────────────────────────────────┘  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               │ HTTP/REST
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                         Server Side                          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  Express REST API                      │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐ │  │
│  │  │   Routes    │  │ Controllers  │  │    Models    │ │  │
│  │  │             │  │              │  │              │ │  │
│  │  └─────────────┘  └──────────────┘  └──────────────┘ │  │
│  │  ┌─────────────┐  ┌──────────────┐                    │  │
│  │  │ Middleware  │  │ Data Storage │                    │  │
│  │  │  (CORS,     │  │  (In-Memory/ │                    │  │
│  │  │   Error)    │  │   File-based)│                    │  │
│  │  └─────────────┘  └──────────────┘                    │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Frontend Architecture

### Technology Stack
- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Library**: Material UI (MUI)
- **Markdown Rendering**: @uiw/react-markdown-preview
- **State Management**: React Hooks (useState, useEffect)

### Component Structure

```
App (Root Component)
├── AppBar (Header with title and dark mode toggle)
├── NoteList (Sidebar)
│   ├── Note items
│   └── Add note button
├── NoteEditor (Middle panel)
│   └── Markdown text editor
└── NotePreview (Right panel)
    └── Rendered markdown preview
```

### Key Components

1. **App.tsx**
   - Root component managing application state
   - Handles theme (light/dark mode)
   - Manages note selection and CRUD operations
   - Coordinates child components

2. **NoteList.tsx**
   - Displays list of all notes
   - Handles note selection
   - Provides add and delete functionality

3. **NoteEditor.tsx**
   - Text editor for markdown content
   - Handles autosave functionality
   - Manages note title extraction

4. **NotePreview.tsx**
   - Real-time markdown preview
   - Renders markdown using @uiw/react-markdown-preview

### Services Layer

**NotesService**
- Abstraction layer for data operations
- Handles localStorage persistence (frontend standalone mode)
- Can be extended to communicate with REST API
- Manages CRUD operations for notes

### Data Flow (Frontend)

```
User Action → Component Handler → Service Layer → State Update → UI Re-render
                                         ↓
                                  Local Storage
```

## Backend Architecture

### Technology Stack
- **Framework**: Express.js
- **Language**: TypeScript
- **Runtime**: Node.js
- **Data Storage**: In-memory or file-based (configurable)
- **Validation**: express-validator
- **ID Generation**: UUID

### API Structure

```
api/src/
├── index.ts              # Application entry point
├── routes/               # Route definitions
│   └── notes.ts          # Notes routes
├── controllers/          # Business logic
│   └── notesController.ts
├── models/               # Data models
│   └── note.ts
└── middleware/           # Middleware functions
    └── errorHandler.ts
```

### API Endpoints

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| GET    | /api/notes        | Get all notes      |
| GET    | /api/notes/:id    | Get note by ID     |
| POST   | /api/notes        | Create a new note  |
| PUT    | /api/notes/:id    | Update a note      |
| DELETE | /api/notes/:id    | Delete a note      |

### Request/Response Flow

```
Client Request → Express Router → Controller → Model → Response
                       ↓
                  Middleware (Validation, Error Handling)
```

## Data Model

### Note Entity

```typescript
interface Note {
  id: string;              // UUID
  title: string;           // Note title (extracted from content)
  content: string;         // Markdown content
  createdAt: Date;         // Creation timestamp
  updatedAt: Date;         // Last update timestamp
}
```

## Communication Patterns

### Frontend-Backend Communication

1. **REST API Communication** (when API is used)
   - Frontend makes HTTP requests to backend endpoints
   - JSON payload for data transfer
   - CORS enabled for cross-origin requests

2. **Standalone Mode** (localStorage only)
   - Frontend operates independently
   - Data persisted in browser's localStorage
   - No backend required

### State Management

- **Local State**: Component-level state using `useState`
- **Shared State**: Lifted to App component, passed via props
- **Side Effects**: Managed with `useEffect` for data loading and autosave

## Configuration

### Environment Variables

**Frontend (Vite)**
- `VITE_API_URL`: Backend API base URL
- `VITE_ENABLE_DARK_MODE_BY_DEFAULT`: Dark mode toggle
- `VITE_ENABLE_AUTOSAVE`: Autosave feature toggle
- `VITE_APP_TITLE`: Application title
- `VITE_AUTOSAVE_INTERVAL`: Autosave interval in milliseconds

**Backend (Express)**
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

## Deployment Architecture

### Development
```
Frontend: Vite Dev Server (localhost:5173)
Backend:  Express Dev Server (localhost:3000)
```

### Production
```
Frontend: Static files served via CDN/Web Server
Backend:  Node.js server or serverless function
```

## Design Patterns

### Frontend Patterns
- **Component Composition**: Building UI from reusable components
- **Props Drilling**: Passing data through component hierarchy
- **Controlled Components**: Form inputs controlled by React state
- **Service Layer Pattern**: Abstracting data access logic

### Backend Patterns
- **MVC Pattern**: Model-View-Controller architecture
- **Middleware Pattern**: Request processing pipeline
- **Repository Pattern**: Data access abstraction
- **Error Handling Middleware**: Centralized error processing

## Security Considerations

- **CORS**: Configured for secure cross-origin requests
- **Input Validation**: Using express-validator for API inputs
- **Error Handling**: Safe error responses without exposing internals
- **Environment Variables**: Sensitive configuration in .env files

## Performance Considerations

- **Code Splitting**: Vite handles automatic code splitting
- **Lazy Loading**: Components can be lazy loaded as needed
- **Markdown Rendering**: Optimized with react-markdown-preview
- **Local Storage**: Fast client-side data persistence
- **Development HMR**: Hot Module Replacement for fast development

## Future Enhancements

- **Authentication**: User authentication and authorization
- **Database Integration**: PostgreSQL/MongoDB for persistent storage
- **Real-time Collaboration**: WebSocket support for collaborative editing
- **File Attachments**: Support for images and file uploads
- **Search & Filtering**: Advanced note search capabilities
- **Tags & Categories**: Note organization features
- **Export Options**: PDF, HTML export functionality

## Development Workflow

1. **Frontend Development**
   ```bash
   cd web
   npm install
   npm run dev
   ```

2. **Backend Development**
   ```bash
   cd api
   npm install
   npm run dev
   ```

3. **Building for Production**
   ```bash
   # Frontend
   cd web
   npm run build
   
   # Backend
   cd api
   npm run build
   npm start
   ```

## Testing Strategy

- **Frontend**: Vitest for unit and component testing
- **Backend**: Jest for API endpoint testing
- **Type Safety**: TypeScript for compile-time error detection
- **Linting**: ESLint for code quality

## Technology Decisions

### Why React?
- Component-based architecture
- Large ecosystem and community
- Excellent TypeScript support
- Fast rendering with Virtual DOM

### Why Express?
- Lightweight and flexible
- Extensive middleware ecosystem
- Well-established for REST APIs
- TypeScript support

### Why TypeScript?
- Type safety and better IDE support
- Fewer runtime errors
- Better code documentation
- Enhanced maintainability

### Why Vite?
- Fast development server
- Optimized production builds
- Modern ES modules support
- Excellent TypeScript/React integration

### Why Material UI?
- Comprehensive component library
- Consistent design system
- Built-in accessibility
- Responsive design out of the box
