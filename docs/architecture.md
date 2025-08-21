# Architecture Overview

## System Architecture

Notes MD is a full-stack web application built with modern technologies for creating and managing markdown notes.

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │
│   (React/TS)    │◄──►│   (Express/TS)  │
│   Port: 5173    │    │   Port: 3000    │
└─────────────────┘    └─────────────────┘
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌─────────────────┐
│ Browser Storage │    │  In-Memory      │
│ (localStorage)  │    │  Storage        │
└─────────────────┘    └─────────────────┘
```

## Components

### Frontend (/web)
- **Technology**: React 19, TypeScript, Vite
- **UI Framework**: Material UI
- **Storage**: Browser localStorage
- **Features**: Real-time markdown preview, dark mode, responsive design

### Backend (/api)
- **Technology**: Express.js, TypeScript
- **Storage**: In-memory (for demo purposes)
- **Features**: RESTful API for CRUD operations on notes

## TODO

- [ ] Document component structure
- [ ] Add data flow diagrams
- [ ] Document state management
- [ ] Add security considerations
- [ ] Document database integration plans
- [ ] Add performance considerations