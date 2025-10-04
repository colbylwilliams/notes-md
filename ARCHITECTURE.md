# Notes MD - Architecture Documentation

This document provides an overview of the Notes MD application architecture, including component structure, data flow, and system design.

## System Architecture Diagram

The following diagram provides a high-level overview of the Notes MD application architecture. It shows both the frontend React application and the optional backend Express API, along with their respective components, services, and data storage mechanisms.

```mermaid
graph TB
    subgraph "Client Browser"
        subgraph "React Application (Vite)"
            UI[App Component]
            
            subgraph "UI Components"
                NL[NoteList Component]
                NE[NoteEditor Component]
                NP[NotePreview Component]
            end
            
            subgraph "Services Layer"
                NS[NotesService]
            end
            
            subgraph "State Management"
                ST[React State Hooks]
            end
            
            UI --> NL
            UI --> NE
            UI --> NP
            UI --> ST
            ST --> NS
            NL --> ST
            NE --> ST
        end
        
        LS[Browser LocalStorage]
        NS <--> LS
    end
    
    subgraph "Server (Express API)"
        subgraph "API Layer"
            RT[Express Routes<br/>/api/notes]
        end
        
        subgraph "Business Logic"
            NC[Notes Controller]
        end
        
        subgraph "Data Layer"
            NM[Note Model]
            MEM[In-Memory Storage]
        end
        
        MW[Error Handler Middleware]
        
        RT --> NC
        NC --> NM
        NM --> MEM
        RT -.-> MW
    end
    
    subgraph "External Dependencies"
        MUI[Material UI]
        MD[React Markdown]
        EX[Express.js]
        CORS[CORS Middleware]
    end
    
    UI --> MUI
    NP --> MD
    RT --> CORS
    RT --> EX
    
    UI -.Optional API Integration.-> RT
    
    Note1[Note: The frontend currently uses LocalStorage for persistence.<br/>API integration is optional and not yet implemented.]
    
    style UI fill:#61dafb
    style Note1 fill:#fff9c4
    style NS fill:#4caf50
    style LS fill:#ff9800
    style RT fill:#90caf9
    style NC fill:#81c784
    style MEM fill:#ffb74d
```

## Component Architecture

```mermaid
graph LR
    subgraph "Frontend Components"
        A[App.tsx]
        
        A --> B[NoteList]
        A --> C[NoteEditor]
        A --> D[NotePreview]
        
        B -->|onNoteSelect| A
        B -->|onAddNote| A
        B -->|onDeleteNote| A
        
        C -->|onNoteChange| A
        
        A -->|notes array| B
        A -->|selectedNote| C
        A -->|selectedNote| D
    end
    
    style A fill:#61dafb
    style B fill:#81c784
    style C fill:#ffb74d
    style D fill:#90caf9
```

## Data Flow Diagram

```mermaid
sequenceDiagram
    participant User
    participant App
    participant NoteList
    participant NoteEditor
    participant NotePreview
    participant NotesService
    participant LocalStorage
    
    User->>App: Load Application
    App->>NotesService: getAllNotes()
    NotesService->>LocalStorage: Read notes
    LocalStorage-->>NotesService: Return notes
    NotesService-->>App: Return notes array
    App->>NoteList: Render notes
    App->>NoteEditor: Render editor (empty)
    App->>NotePreview: Render preview (empty)
    
    User->>NoteList: Click '+' button
    NoteList->>App: onAddNote()
    App->>NotesService: addNote()
    NotesService->>LocalStorage: Save new note
    NotesService-->>App: Return new note
    App->>NoteList: Update with new note
    App->>NoteEditor: Load new note
    
    User->>NoteEditor: Type content
    NoteEditor->>App: onNoteChange(updatedNote)
    App->>NotesService: updateNote(note)
    NotesService->>LocalStorage: Save updated note
    App->>NotePreview: Update preview
    
    User->>NoteList: Click delete button
    NoteList->>App: onDeleteNote(id)
    App->>NotesService: deleteNote(id)
    NotesService->>LocalStorage: Remove note
    App->>NoteList: Update list
```

## API Architecture (Optional Backend)

```mermaid
graph TB
    subgraph "HTTP Request Flow"
        CL[Client Request]
        
        CL --> R1[GET /api/notes]
        CL --> R2[GET /api/notes/:id]
        CL --> R3[POST /api/notes]
        CL --> R4[PUT /api/notes/:id]
        CL --> R5[DELETE /api/notes/:id]
        
        R1 --> C1[getAllNotes]
        R2 --> C2[getNoteById]
        R3 --> C3[createNote]
        R4 --> C4[updateNote]
        R5 --> C5[deleteNote]
        
        C1 --> M[In-Memory Store]
        C2 --> M
        C3 --> M
        C4 --> M
        C5 --> M
        
        M --> RES[JSON Response]
        RES --> CL
    end
    
    style R1 fill:#81c784
    style R2 fill:#81c784
    style R3 fill:#ffb74d
    style R4 fill:#90caf9
    style R5 fill:#ef5350
    style M fill:#ffa726
```

## Technology Stack

```mermaid
graph TB
    subgraph "Frontend Stack"
        FE1[React 18]
        FE2[TypeScript]
        FE3[Vite]
        FE4[Material UI]
        FE5[React Markdown]
    end
    
    subgraph "Backend Stack"
        BE1[Express.js]
        BE2[TypeScript]
        BE3[Node.js]
        BE4[CORS]
    end
    
    subgraph "Development Tools"
        DT1[ESLint]
        DT2[Vitest]
        DT3[npm/yarn]
    end
    
    subgraph "Data Storage"
        DS1[LocalStorage - Frontend]
        DS2[In-Memory - Backend]
    end
    
    style FE1 fill:#61dafb
    style BE1 fill:#90caf9
    style DS1 fill:#ff9800
    style DS2 fill:#ffa726
```

## Key Architectural Features

### Frontend Architecture

1. **Component-Based Design**: The UI is divided into reusable React components
   - `App.tsx`: Main application container, manages global state
   - `NoteList.tsx`: Displays list of notes with add/delete functionality
   - `NoteEditor.tsx`: Markdown editor with real-time title extraction
   - `NotePreview.tsx`: Live markdown preview renderer

2. **Service Layer**: `NotesService` encapsulates all data operations
   - CRUD operations for notes
   - LocalStorage persistence
   - Singleton pattern for consistent state

3. **State Management**: React hooks (useState, useEffect)
   - Notes array state
   - Selected note ID state
   - Dark mode theme state

4. **Data Persistence**: Browser LocalStorage
   - Notes stored as JSON
   - Automatic save on all operations
   - Loaded on application initialization

### Backend Architecture (API)

1. **RESTful API Design**: Standard HTTP methods and endpoints
   - GET /api/notes - List all notes
   - GET /api/notes/:id - Get single note
   - POST /api/notes - Create note
   - PUT /api/notes/:id - Update note
   - DELETE /api/notes/:id - Delete note

2. **Layered Architecture**:
   - Routes: Define endpoints and HTTP methods
   - Controllers: Handle business logic
   - Models: Define data structures
   - Middleware: Error handling and CORS

3. **In-Memory Storage**: Notes stored in application memory
   - Simple array-based storage
   - Suitable for development/demo purposes
   - Note: Data is lost on server restart

### Design Patterns

- **Module Pattern**: NotesService is exported as a single instance to ensure consistent state across the application
- **MVC**: API follows Model-View-Controller pattern
- **Component Composition**: React components are composed hierarchically
- **Unidirectional Data Flow**: Props down, events up pattern

### Future Considerations

- Database integration for backend persistence
- Authentication and authorization
- Real-time collaboration features
- API integration for frontend (currently uses LocalStorage)
- File export/import capabilities
- Search and filtering functionality
