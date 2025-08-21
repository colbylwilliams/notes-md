# API Documentation

This section contains comprehensive documentation for the Notes MD REST API.

## Overview

The Notes MD API is a RESTful service built with Express.js and TypeScript that provides endpoints for managing markdown notes.

## Base URL

- Development: `http://localhost:3000`
- Production: `[TODO: Add production URL]`

## Authentication

Currently, the API does not require authentication. All endpoints are publicly accessible.

> **TODO**: Add authentication documentation when implemented

## API Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Retrieve all notes |
| GET | `/api/notes/:id` | Retrieve a specific note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

## Request/Response Examples

For detailed request and response examples, see the [API README](../api/README.md).

## Error Handling

The API returns standard HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting

> **TODO**: Document rate limiting policies

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

## TODO

- [ ] Add detailed endpoint documentation with full request/response schemas
- [ ] Document error response formats
- [ ] Add authentication and authorization documentation
- [ ] Include API versioning information
- [ ] Add rate limiting documentation
- [ ] Include SDK examples for different languages
- [ ] Add webhook documentation if applicable