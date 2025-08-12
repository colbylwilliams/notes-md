# Architecture

This document describes the technical architecture and design decisions for the Notes MD application.

## System Overview

Notes MD is a full-stack web application consisting of a React frontend and Express.js backend API. The application uses a client-server architecture with local storage persistence on the frontend and in-memory storage on the backend.

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│  React Frontend │ ◄─────────────► │  Express.js API │
│     (Web)       │   Port 5173     │      (API)      │
│   TypeScript    │                 │   TypeScript    │
│     Vite        │                 │   Port 3000     │
└─────────────────┘                 └─────────────────┘
        │                                   │
        ▼                                   ▼
┌─────────────────┐                 ┌─────────────────┐
│  Local Storage  │                 │  In-Memory      │
│   (Browser)     │                 │   Storage       │
│   Persistent    │                 │   Volatile      │
└─────────────────┘                 └─────────────────┘
```

## Frontend Architecture

### Technology Stack
- **React 19.1.0** - Component-based UI library
- **TypeScript 5.8.3** - Type safety and developer experience
- **Vite 6.3.5** - Fast development server and build tool
- **Material-UI 7.1.0** - React component library for consistent design
- **React Markdown 10.1.0** - Markdown rendering with GitHub Flavored Markdown support

### Component Hierarchy
```
App.tsx (Root Component)
├── AppBar (Material-UI)
│   ├── Typography (App Title)
│   └── Switch (Dark Mode Toggle)
├── Box (Main Container)
│   ├── NoteList.tsx
│   │   └── Note Items
│   ├── NoteEditor.tsx
│   │   └── Textarea (Markdown Input)
│   └── NotePreview.tsx
│       └── ReactMarkdown (Rendered Output)
```

### State Management
- **Local React State** - Uses `useState` hooks for component state
- **No external state library** - Simple prop drilling for data flow
- **Services Layer** - `NotesService` class for data operations

### Service Layer Design
Located in `/src/services/notes/`:
- **NotesService** - Singleton class handling CRUD operations
- **Local Storage Integration** - Automatic persistence in browser
- **Type Definitions** - Shared TypeScript interfaces

### Build Configuration
- **Vite Configuration** - Hot reload, TypeScript support
- **ESLint Integration** - Code quality and consistency
- **Vitest** - Unit testing framework

## Backend Architecture

### Technology Stack
- **Express.js 4.18.2** - Lightweight web framework
- **TypeScript 5.3.3** - Type safety across the stack
- **CORS 2.8.5** - Cross-origin resource sharing
- **Express Validator 7.0.1** - Request validation middleware
- **UUID 11.1.0** - Unique identifier generation

### API Structure
```
src/
├── index.ts              # Application entry point
├── routes/
│   └── notes.ts          # Notes route definitions
├── controllers/
│   └── notes.ts          # Business logic for notes
├── models/
│   └── note.ts           # Data type definitions
└── middleware/
    └── errorHandler.ts   # Global error handling
```

### Data Models
```typescript
interface Note {
  id: string;           // UUID v4
  title: string;        // Extracted from content or default
  content: string;      // Markdown content
  createdAt: Date;      // Auto-generated timestamp
  updatedAt: Date;      // Auto-updated timestamp
}
```

### Storage Strategy
- **In-Memory Array** - Simple volatile storage for demo purposes
- **No Database** - Suitable for development and testing
- **Future Enhancement** - Can be replaced with database persistence

## Data Flow

### Create Note Flow
1. User clicks "Add Note" button in frontend
2. Frontend calls `notesService.addNote()`
3. Service creates note with UUID and saves to localStorage
4. UI updates with new note in list and editor

### Edit Note Flow
1. User types in markdown editor
2. Frontend updates note content in real-time
3. Service saves changes to localStorage
4. Preview panel updates with rendered markdown

### API Integration Flow (Optional)
1. Frontend service can make HTTP requests to API
2. API processes request through Express routes
3. Controller handles business logic
4. Response sent back to frontend
5. Frontend updates local state and storage

## Technology Choices

### Frontend Technologies

#### React
**Why Chosen:**
- Component-based architecture for maintainable UI
- Large ecosystem and community support
- Excellent TypeScript integration
- Virtual DOM for efficient updates

#### TypeScript
**Why Chosen:**
- Compile-time type checking reduces runtime errors
- Better developer experience with IntelliSense
- Consistent language across frontend and backend
- Easier refactoring and maintenance

#### Material-UI
**Why Chosen:**
- Professional, consistent design system
- Comprehensive component library
- Built-in dark mode support
- Accessibility features out of the box

#### Vite
**Why Chosen:**
- Fast development server with HMR
- Optimized production builds
- Native ES modules support
- Better performance than Webpack for development

### Backend Technologies

#### Express.js
**Why Chosen:**
- Lightweight and flexible
- Large ecosystem of middleware
- Easy to set up REST APIs
- Good TypeScript support

#### In-Memory Storage
**Why Chosen:**
- Simplicity for demo application
- No external dependencies
- Fast read/write operations
- Easy to understand and maintain

## Security Considerations

### Current Implementation
- **CORS Enabled** - Allows cross-origin requests
- **JSON Parsing** - Built-in Express middleware
- **No Authentication** - Open API for development

### Future Enhancements
- Input validation on all endpoints
- Rate limiting for API protection
- Authentication and authorization
- Data sanitization for XSS prevention
- HTTPS enforcement in production

## Performance Considerations

### Frontend Optimizations
- **Vite Build Optimization** - Code splitting and tree shaking
- **React Optimizations** - Proper key props and memo usage
- **Material-UI Tree Shaking** - Import only used components
- **Local Storage Caching** - Reduce API calls

### Backend Optimizations
- **In-Memory Storage** - Fast data access
- **Minimal Middleware** - Reduced request overhead
- **JSON Response Compression** - Smaller payloads

### Scalability Considerations
- **Database Integration** - Replace in-memory storage
- **Caching Layer** - Redis for session and data caching
- **Load Balancing** - Multiple API instances
- **CDN Integration** - Static asset delivery

## Development Workflow

### Build Process
```bash
# Frontend
npm run build     # TypeScript compilation + Vite build
npm run lint      # ESLint code quality check
npm run test      # Vitest unit tests

# Backend  
npm run build     # TypeScript compilation to /dist
npm run dev       # Development with auto-reload
npm run lint      # ESLint code quality check
```

### Environment Configuration
- **Development** - Hot reload, debug logging, CORS enabled
- **Production** - Optimized builds, error logging, security headers

## Deployment Architecture

### Development
- Frontend: Vite dev server (port 5173)
- Backend: ts-node-dev (port 3000)
- Storage: Browser localStorage + in-memory

### Production (Recommended)
- Frontend: Static files served by CDN or web server
- Backend: Node.js server behind reverse proxy (nginx)
- Storage: Database (PostgreSQL/MongoDB) with connection pooling
- Monitoring: Application performance monitoring (APM)
- Logging: Centralized logging system