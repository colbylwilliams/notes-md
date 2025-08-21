# API Reference

The Notes MD API provides REST endpoints for managing markdown notes. All responses are in JSON format.

## Base URL

```
http://localhost:3000/api
```

## Authentication

Currently, the API does not require authentication. This may change in future versions.

## Endpoints

### Notes

#### Get All Notes

```http
GET /api/notes
```

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

#### Get Note by ID

```http
GET /api/notes/:id
```

**Parameters:**
- `id` (string, required) - The unique identifier of the note

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

#### Create New Note

```http
POST /api/notes
```

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

#### Update Note

```http
PUT /api/notes/:id
```

**Parameters:**
- `id` (string, required) - The unique identifier of the note

**Request Body:**
```json
{
  "title": "Updated Note",
  "content": "# Updated Note\n\nThis note has been updated."
}
```

#### Delete Note

```http
DELETE /api/notes/:id
```

**Parameters:**
- `id` (string, required) - The unique identifier of the note

**Response:** 204 No Content

## Error Responses

### 404 Not Found
```json
{
  "message": "Note not found"
}
```

### 400 Bad Request
```json
{
  "message": "Invalid request data"
}
```

### 500 Internal Server Error
```json
{
  "message": "Internal server error"
}
```

## Data Models

### Note Model

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier (UUID) |
| title | string | Note title |
| content | string | Markdown content |
| createdAt | string | ISO 8601 timestamp |
| updatedAt | string | ISO 8601 timestamp |

## Rate Limiting

Currently, no rate limiting is implemented. This may be added in future versions.

## Changelog

- v1.0.0 - Initial API release

---

For more information, see the [source code](../api/src/controllers/notes.ts).