# Architecture Overview

This document provides a high-level overview of the Notes MD application architecture.

## System Architecture

### High-Level Components

```
┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │
│   (React App)   │◄──►│   (Express API) │
└─────────────────┘    └─────────────────┘
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌─────────────────┐
│ Local Storage   │    │ In-Memory Store │
│ (Browser)       │    │ (No Database)   │
└─────────────────┘    └─────────────────┘
```

### Frontend Architecture
- **React Components**: Modular UI components
- **State Management**: React hooks for local state
- **Material-UI**: Consistent design system
- **Vite**: Fast development and build tool

### Backend Architecture
- **Express.js**: RESTful API server
- **TypeScript**: Type-safe server code
- **In-Memory Storage**: Simple note persistence
- **CORS**: Cross-origin request handling

## Data Flow

1. User interacts with React components
2. Components call API service functions
3. Services make HTTP requests to Express API
4. API processes requests and returns data
5. Frontend updates UI with new data

## Design Decisions

### Why In-Memory Storage?
- Simplicity for demo purposes
- Easy to understand and modify
- No database setup required

### Why Material-UI?
- Consistent design system
- Accessibility built-in
- Rapid development

## TODO

- [ ] Add detailed component diagrams
- [ ] Document data models in detail
- [ ] Include sequence diagrams
- [ ] Add scalability considerations
- [ ] Document security architecture
- [ ] Include performance characteristics
- [ ] Add deployment architecture options