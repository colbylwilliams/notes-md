# API Documentation

Complete reference for the Notes MD REST API endpoints, including request/response formats, examples, and error handling.

## Base URL

```
http://localhost:3000/api
```

## Authentication

Currently, the API does not require authentication. All endpoints are publicly accessible.

**TODO**: Implement authentication system with JWT tokens.

## Content Type

All requests and responses use `application/json` content type.

## Endpoints Reference

### GET /notes

Retrieve all notes in the system.

**Response**
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

**Status Codes**
- `200` - Success
- `500` - Internal server error

### GET /notes/:id

Retrieve a specific note by its ID.

**Parameters**
- `id` (string) - The unique identifier of the note

**Response**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Sample Note", 
  "content": "# Sample Note\n\nThis is a sample note.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

**Status Codes**
- `200` - Success
- `404` - Note not found
- `500` - Internal server error

### POST /notes

Create a new note.

**Request Body**
```json
{
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note."
}
```

**Response**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

**Status Codes**
- `201` - Created successfully
- `400` - Invalid request body
- `500` - Internal server error

### PUT /notes/:id

Update an existing note.

**Parameters**
- `id` (string) - The unique identifier of the note

**Request Body**
```json
{
  "title": "Updated Note Title",
  "content": "# Updated Note\n\nThis note has been updated."
}
```

**Response**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Updated Note Title",
  "content": "# Updated Note\n\nThis note has been updated.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T12:00:00.000Z"
}
```

**Status Codes**
- `200` - Updated successfully
- `400` - Invalid request body
- `404` - Note not found
- `500` - Internal server error

### DELETE /notes/:id

Delete a note by its ID.

**Parameters**
- `id` (string) - The unique identifier of the note

**Response**
```json
{
  "message": "Note deleted successfully"
}
```

**Status Codes**
- `200` - Deleted successfully
- `404` - Note not found
- `500` - Internal server error

## Data Models

### Note Object

```typescript
interface Note {
  id: string;          // UUID v4 identifier
  title: string;       // Note title (extracted from content)
  content: string;     // Markdown content
  createdAt: Date;     // Creation timestamp
  updatedAt: Date;     // Last modification timestamp
}
```

### Validation Rules

**Title**
- Maximum length: 200 characters
- Automatically extracted from first line of content
- Falls back to "Untitled Note" if content is empty

**Content**
- Maximum length: 100,000 characters
- Supports full Markdown syntax
- Can be empty string

## Error Handling

All errors follow a consistent format:

```json
{
  "error": "Error message description",
  "code": "ERROR_CODE",
  "details": {}
}
```

### Common Error Codes

- `VALIDATION_ERROR` - Request validation failed
- `NOT_FOUND` - Requested resource not found
- `INTERNAL_ERROR` - Server-side error occurred

## Rate Limiting

**TODO**: Implement rate limiting to prevent abuse.

Planned limits:
- 100 requests per minute per IP
- 1000 requests per hour per IP

## Examples

### Create and Update a Note

```bash
# Create a new note
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My Note", "content": "# My Note\n\nSome content here."}'

# Update the note
curl -X PUT http://localhost:3000/api/notes/[note-id] \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Note", "content": "# Updated Note\n\nUpdated content."}'
```

### Retrieve Notes

```bash
# Get all notes
curl http://localhost:3000/api/notes

# Get specific note
curl http://localhost:3000/api/notes/[note-id]
```

### Delete a Note

```bash
curl -X DELETE http://localhost:3000/api/notes/[note-id]
```

## TODO: API Enhancements

- [ ] Add pagination for large note collections
- [ ] Implement search and filtering capabilities
- [ ] Add bulk operations (delete multiple notes)
- [ ] Include note metadata (tags, categories)
- [ ] Add note versioning and history
- [ ] Implement real-time updates via WebSocket
- [ ] Add file upload/attachment support
- [ ] Include API versioning strategy
- [ ] Add comprehensive error codes documentation
- [ ] Implement OpenAPI/Swagger documentation