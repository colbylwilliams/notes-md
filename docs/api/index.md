# API Documentation

This directory contains documentation for the Notes MD REST API.

## Overview

The Notes MD API is built with Express.js and TypeScript, providing endpoints for managing markdown notes.

## Base URL

- Development: `http://localhost:3000`
- Production: TBD

## Authentication

> **TODO**: Add authentication documentation when authentication is implemented.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

## Data Models

### Note

```typescript
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Error Handling

> **TODO**: Document error response format and common error codes.

## Rate Limiting

> **TODO**: Add rate limiting documentation when implemented.

## Examples

For detailed request/response examples, see the [API README](../api/README.md).

---

> **Note**: This API documentation is currently being expanded. More detailed information will be added soon.