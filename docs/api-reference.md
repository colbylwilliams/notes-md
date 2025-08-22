# API Reference

Complete documentation for the Notes MD REST API.

## Base URL

```
http://localhost:3000
```

## Authentication

Currently, the API does not require authentication. All endpoints are publicly accessible.

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
- `id` (string): The unique identifier of the note

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
- `id` (string): The unique identifier of the note

**Request Body:**
```json
{
  "title": "Updated Note",
  "content": "# Updated Note\n\nThis is an updated note."
}
```

#### Delete Note

```http
DELETE /api/notes/:id
```

**Parameters:**
- `id` (string): The unique identifier of the note

## Error Responses

All endpoints return appropriate HTTP status codes and error messages:

```json
{
  "error": "Note not found",
  "status": 404
}
```

## Rate Limiting

Currently, there are no rate limits implemented.

---

*TODO: Add authentication documentation when implemented.*
*TODO: Add rate limiting information.*
*TODO: Add more detailed error response examples.*
*TODO: Add API versioning information.*