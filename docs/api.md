# API Documentation

## Overview

The Notes MD API is a RESTful service built with Express.js and TypeScript that provides endpoints for managing markdown notes.

## Base URL

- Development: `http://localhost:3000`
- Production: TBD

## Authentication

Currently, the API does not require authentication. This is planned for future versions.

## Endpoints

### Notes

| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| GET | `/api/notes` | Retrieve all notes | ✅ Implemented |
| GET | `/api/notes/:id` | Retrieve a specific note | ✅ Implemented |
| POST | `/api/notes` | Create a new note | ✅ Implemented |
| PUT | `/api/notes/:id` | Update an existing note | ✅ Implemented |
| DELETE | `/api/notes/:id` | Delete a note | ✅ Implemented |

## Data Models

### Note

```typescript
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
```

## TODO

- [ ] Add detailed request/response examples for each endpoint
- [ ] Document error codes and responses
- [ ] Add authentication documentation when implemented
- [ ] Include rate limiting information
- [ ] Add API versioning strategy
- [ ] Document database schema
- [ ] Add OpenAPI/Swagger specification

## Reference

For implementation details, see [api/README.md](../api/README.md).