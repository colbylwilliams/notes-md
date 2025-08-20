# API Documentation

This document provides comprehensive documentation for the Notes MD REST API.

## Base URL

```
http://localhost:3000/api
```

## Authentication

*Currently, no authentication is required. This will be updated when authentication is implemented.*

## Endpoints

### Notes

#### Get All Notes

Retrieve a list of all notes.

**Endpoint:** `GET /notes`

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

**Status Codes:**
- `200 OK` - Success

#### Get Note by ID

Retrieve a specific note by its ID.

**Endpoint:** `GET /notes/:id`

**Parameters:**
- `id` (string) - The unique identifier of the note

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

**Status Codes:**
- `200 OK` - Success
- `404 Not Found` - Note not found

#### Create Note

Create a new note.

**Endpoint:** `POST /notes`

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

**Status Codes:**
- `201 Created` - Note created successfully
- `400 Bad Request` - Invalid request body

#### Update Note

Update an existing note.

**Endpoint:** `PUT /notes/:id`

**Parameters:**
- `id` (string) - The unique identifier of the note

**Request Body:**
```json
{
  "title": "Updated Note",
  "content": "# Updated Note\n\nThis is an updated note."
}
```

**Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Updated Note",
  "content": "# Updated Note\n\nThis is an updated note.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T12:00:00.000Z"
}
```

**Status Codes:**
- `200 OK` - Note updated successfully
- `404 Not Found` - Note not found
- `400 Bad Request` - Invalid request body

#### Delete Note

Delete a note by its ID.

**Endpoint:** `DELETE /notes/:id`

**Parameters:**
- `id` (string) - The unique identifier of the note

**Response:** No content

**Status Codes:**
- `204 No Content` - Note deleted successfully
- `404 Not Found` - Note not found

## Data Models

### Note

```typescript
interface Note {
  id: string;           // UUID v4
  title: string;        // Note title
  content: string;      // Markdown content
  createdAt: Date;      // Creation timestamp
  updatedAt: Date;      // Last modification timestamp
}
```

## Error Responses

All error responses follow this format:

```json
{
  "message": "Error description"
}
```

### Common Error Codes

- `400 Bad Request` - Invalid request data
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## Rate Limiting

*Rate limiting is not currently implemented but may be added in future versions.*

## CORS

The API supports Cross-Origin Resource Sharing (CORS) to allow requests from the frontend application.

## Examples

### Using curl

#### Get all notes
```bash
curl -X GET http://localhost:3000/api/notes
```

#### Create a note
```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My Note", "content": "# My Note\n\nSome content"}'
```

#### Update a note
```bash
curl -X PUT http://localhost:3000/api/notes/123e4567-e89b-12d3-a456-426614174000 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "content": "# Updated Title\n\nUpdated content"}'
```

#### Delete a note
```bash
curl -X DELETE http://localhost:3000/api/notes/123e4567-e89b-12d3-a456-426614174000
```

### Using JavaScript

```javascript
// Get all notes
const notes = await fetch('/api/notes').then(res => res.json());

// Create a note
const newNote = await fetch('/api/notes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'My Note',
    content: '# My Note\n\nSome content'
  })
}).then(res => res.json());

// Update a note
const updatedNote = await fetch(`/api/notes/${noteId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Updated Title',
    content: '# Updated Title\n\nUpdated content'
  })
}).then(res => res.json());

// Delete a note
await fetch(`/api/notes/${noteId}`, {
  method: 'DELETE'
});
```

## Future Enhancements

The following features are planned for future API versions:

- Authentication and user management
- Note categories and tags
- Search functionality
- File attachments
- Note sharing and collaboration
- API versioning
- Pagination for large note collections
- Bulk operations

---

*This API documentation will be updated as new features are added.*