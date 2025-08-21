# API Documentation

> **TODO:** This section needs comprehensive API documentation with examples and schemas.

The Notes MD API provides RESTful endpoints for managing notes. The API is built with Express.js and TypeScript.

## Base URL

- Development: `http://localhost:3000`
- Production: **TODO:** Add production URL

## Authentication

> **TODO:** Document authentication if implemented in the future
Currently, the API does not require authentication.

## Endpoints

### Notes

#### GET /api/notes

Get all notes.

**Response:**
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Sample Note",
    "content": "# Sample Note\n\nThis is a sample note.",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

#### GET /api/notes/:id

Get a note by ID.

> **TODO:** Add detailed request/response examples

#### POST /api/notes

Create a new note.

> **TODO:** Add request body schema and validation rules

#### PUT /api/notes/:id

Update an existing note.

> **TODO:** Add request body schema and response examples

#### DELETE /api/notes/:id

Delete a note by ID.

> **TODO:** Add response codes and error handling documentation

## Data Models

### Note

> **TODO:** Document the complete Note model schema

```typescript
interface Note {
  id: string;          // UUID
  title: string;       // Note title
  content: string;     // Markdown content
  createdAt: Date;     // Creation timestamp
  updatedAt: Date;     // Last update timestamp
}
```

## Error Handling

> **TODO:** Document error response format and common error codes

## Rate Limiting

> **TODO:** Document rate limiting policies if applicable

## Examples

> **TODO:** Add comprehensive examples for each endpoint:
> - cURL examples
> - JavaScript/fetch examples
> - Response examples with different scenarios

## SDKs and Client Libraries

> **TODO:** Document any available SDKs or client libraries