# API Documentation

Comprehensive documentation for the Notes MD REST API.

## Base URL

- Development: `http://localhost:3000`
- Production: <!-- TODO: Add production URL when deployed -->

## Authentication

<!-- TODO: Add authentication documentation when implemented -->
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

Get a specific note by ID.

**Parameters:**
- `id` (string): The note ID

**Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Sample Note",
  "content": "# Sample Note\n\nThis is a sample note.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### POST /api/notes

Create a new note.

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
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### PUT /api/notes/:id

Update an existing note.

**Parameters:**
- `id` (string): The note ID

**Request Body:**
```json
{
  "title": "Updated Note",
  "content": "# Updated Note\n\nThis note has been updated."
}
```

#### DELETE /api/notes/:id

Delete a note.

**Parameters:**
- `id` (string): The note ID

**Response:** 204 No Content

## Error Responses

<!-- TODO: Document error response format -->
<!-- TODO: Add common error codes and meanings -->

## Rate Limiting

<!-- TODO: Add rate limiting documentation when implemented -->

## Examples

### Using curl

<!-- TODO: Add curl examples for each endpoint -->

### Using JavaScript

<!-- TODO: Add JavaScript/fetch examples -->

## SDK

<!-- TODO: Add SDK documentation when available -->

## Changelog

<!-- TODO: Add API version changelog -->