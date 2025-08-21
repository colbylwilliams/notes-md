# API Reference

The Notes MD API provides RESTful endpoints for managing notes.

## Base URL

- Development: `http://localhost:3000`
- Production: TODO - Add production URL

## Authentication

TODO: Document authentication if/when implemented

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

**Parameters:**
- `id` (string) - Note UUID

**Response:**
```json
{
  "id": "uuid",
  "title": "Note Title",
  "content": "# Note Title\n\nNote content...",
  "createdAt": "2023-01-01T00:00:00.000Z", 
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### POST /api/notes
Create a new note

**Request Body:**
```json
{
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note."
}
```

**Response:**
```json
{
  "id": "uuid",
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### PUT /api/notes/:id
Update an existing note

**Parameters:**
- `id` (string) - Note UUID

**Request Body:**
```json
{
  "title": "Updated Note",
  "content": "# Updated Note\n\nThis note has been updated."
}
```

#### DELETE /api/notes/:id
Delete a note

**Parameters:**
- `id` (string) - Note UUID

**Response:** 204 No Content

## Error Responses

TODO: Document error response format and common error codes

## Rate Limiting

TODO: Document rate limiting policies if implemented

## Examples

TODO: Add more comprehensive examples and use cases