# Architecture

This document outlines the system architecture of the Notes MD application.

## Overview

Notes MD is a full-stack web application for managing markdown notes, consisting of:

- **Frontend**: React TypeScript application built with Vite
- **Backend**: Express.js REST API for note management
- **Storage**: Local storage for client-side persistence

## System Components

### Frontend (Web)
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Material UI for consistent design
- **Markdown**: React Markdown for rendering markdown content
- **State Management**: React hooks for local state
- **Storage**: Browser localStorage for note persistence

### Backend (API)
- **Framework**: Express.js with TypeScript
- **Architecture**: RESTful API design
- **Storage**: File-based or in-memory storage (TODO: document current implementation)

## Data Flow

```
User Interface (React) 
    ↕ 
Local Storage + API Client 
    ↕ 
REST API (Express) 
    ↕ 
Data Storage Layer
```

## TODO

- [ ] Add detailed component diagrams
- [ ] Document data models and schemas
- [ ] Describe authentication/authorization strategy (if any)
- [ ] Document error handling patterns
- [ ] Add sequence diagrams for key user flows
- [ ] Document performance considerations
- [ ] Add security architecture overview