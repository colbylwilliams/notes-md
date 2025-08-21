# API Documentation

Complete API reference for the Notes MD REST API.

## Base URL

- Development: `http://localhost:3000`
- Production: TODO: Add production URL

## Authentication

TODO: Document authentication if applicable

## Endpoints

### Notes

#### GET /api/notes

Get all notes.

**Response:**
```json
[
  {
    "id": "string",
    "title": "string",
    "content": "string",
    "createdAt": "string (ISO 8601)",
    "updatedAt": "string (ISO 8601)"
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
  "id": "string",
  "title": "string", 
  "content": "string",
  "createdAt": "string (ISO 8601)",
  "updatedAt": "string (ISO 8601)"
}
```

#### POST /api/notes

Create a new note.

**Request Body:**
```json
{
  "title": "string",
  "content": "string"
}
```

**Response:**
```json
{
  "id": "string",
  "title": "string",
  "content": "string", 
  "createdAt": "string (ISO 8601)",
  "updatedAt": "string (ISO 8601)"
}
```

#### PUT /api/notes/:id

Update an existing note.

**Parameters:**
- `id` (string) - The note ID

**Request Body:**
```json
{
  "title": "string",
  "content": "string"
}
```

#### DELETE /api/notes/:id

Delete a note.

**Parameters:**
- `id` (string) - The note ID

## Error Responses

TODO: Document error response format and status codes

## Rate Limiting

TODO: Document rate limiting if applicable

---

**Status**: 🚧 This documentation is under development