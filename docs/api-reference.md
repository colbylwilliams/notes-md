# API Reference

## Overview

The Notes MD API is a REST API built with Express and TypeScript that provides endpoints for managing notes.

## Base URL

- Development: `http://localhost:3000`
- Production: TBD

## Authentication

🚧 **TODO**: Authentication is not currently implemented but will be added in future versions.

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
- `id` (string) - The note ID

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
- `id` (string) - The note ID

**Request Body:**
```json
{
  "title": "Updated Note",
  "content": "# Updated Note\n\nThis note has been updated."
}
```

**Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Updated Note",
  "content": "# Updated Note\n\nThis note has been updated.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### DELETE /api/notes/:id

Delete a note.

**Parameters:**
- `id` (string) - The note ID

**Response:**
```json
{
  "message": "Note deleted successfully"
}
```

## Error Responses

The API uses conventional HTTP response codes to indicate success or failure.

### Error Format

```json
{
  "error": "Error message",
  "details": "Additional error details (optional)"
}
```

### Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## Data Models

### Note

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (UUID) |
| `title` | string | Note title |
| `content` | string | Note content (Markdown) |
| `createdAt` | string | Creation timestamp (ISO 8601) |
| `updatedAt` | string | Last update timestamp (ISO 8601) |

## Rate Limiting

🚧 **TODO**: Rate limiting is not currently implemented but will be added in future versions.

## Pagination

🚧 **TODO**: Pagination for notes list will be implemented in future versions.

---

📝 **TODO**: 
- Add authentication documentation when implemented
- Add rate limiting details
- Add pagination documentation
- Add WebSocket endpoints if implemented
- Add bulk operations endpoints