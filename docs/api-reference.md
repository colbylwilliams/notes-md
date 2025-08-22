# API Reference

## Overview

The Notes MD API provides RESTful endpoints for managing markdown notes programmatically.

## Base URL

```
http://localhost:3000
```

## Authentication

TODO: Document authentication if implemented

## Endpoints

### Notes

#### GET /api/notes
Get all notes

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

#### GET /api/notes/:id
Get a specific note by ID

#### POST /api/notes
Create a new note

**Request Body:**
```json
{
  "title": "Note Title",
  "content": "# Note Title\n\nNote content..."
}
```

#### PUT /api/notes/:id
Update an existing note

#### DELETE /api/notes/:id
Delete a note

## Error Handling

TODO: Document error response format and status codes

## Examples

TODO: Add practical API usage examples

## Rate Limiting

TODO: Document any rate limiting policies

## SDKs and Libraries

TODO: Document available SDKs or client libraries