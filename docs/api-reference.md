# API Reference

> **TODO**: This section needs to be completed with comprehensive API documentation.

The Notes MD API provides RESTful endpoints for managing notes programmatically.

## Base URL

```
http://localhost:3000/api
```

## Authentication

<!-- TODO: Add authentication documentation if implemented -->
Currently, the API does not require authentication for local development.

## Endpoints

### Notes

#### GET /notes
Get all notes.

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Note Title",
    "content": "# Note Title\n\nNote content...",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

#### GET /notes/:id
Get a specific note by ID.

#### POST /notes
Create a new note.

#### PUT /notes/:id
Update an existing note.

#### DELETE /notes/:id
Delete a note.

## Error Handling

<!-- TODO: Add comprehensive error documentation -->
- Standard HTTP status codes
- Error response format
- Common error scenarios

## Rate Limiting

<!-- TODO: Add rate limiting documentation if implemented -->

## Examples

<!-- TODO: Add comprehensive examples for each endpoint -->
- Request/response examples
- Code samples in different languages
- Integration examples

## SDKs and Libraries

<!-- TODO: Add SDK documentation if available -->
- JavaScript SDK
- Python SDK
- Other language bindings