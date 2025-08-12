# API Reference

The Notes MD API provides RESTful endpoints for managing notes programmatically. All endpoints return JSON responses and follow REST conventions.

## Base URL

```
http://localhost:3000
```

## Authentication

Currently, the API does not require authentication for local development. All endpoints are publicly accessible.

## Data Models

### Note Object
```typescript
interface Note {
  id: string;           // UUID v4 identifier
  title: string;        // Note title (extracted from content or "Untitled Note")
  content: string;      // Markdown content
  createdAt: Date;      // Creation timestamp
  updatedAt: Date;      // Last modification timestamp
}
```

## Endpoints

### Root Endpoint

#### GET /
Get API information and available endpoints.

**Response:**
```json
{
  "message": "Welcome to Notes MD API",
  "version": "1.0.0",
  "endpoints": {
    "notes": "/api/notes"
  }
}
```

### Notes

#### GET /api/notes
Get all notes ordered by creation date (newest first).

**Response:** `200 OK`
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "My First Note",
    "content": "# My First Note\n\nThis is my first markdown note!",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    "title": "Meeting Notes",
    "content": "# Meeting Notes\n\n- Discuss project timeline\n- Review budget",
    "createdAt": "2024-01-14T14:20:00.000Z",
    "updatedAt": "2024-01-14T16:45:00.000Z"
  }
]
```

#### GET /api/notes/:id
Get a specific note by ID.

**Parameters:**
- `id` (string, required): UUID of the note

**Response:** `200 OK`
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "My First Note",
  "content": "# My First Note\n\nThis is my first markdown note!",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Error Response:** `404 Not Found`
```json
{
  "message": "Note not found"
}
```

#### POST /api/notes
Create a new note.

**Request Body:**
```json
{
  "title": "Optional Title",
  "content": "# Note Title\n\nNote content in markdown"
}
```

**Response:** `201 Created`
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Note Title",
  "content": "# Note Title\n\nNote content in markdown",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Note:** If `title` or `content` are not provided, defaults will be used:
- Default title: "Untitled Note"
- Default content: "# Untitled Note\n\nStart writing your note here..."

#### PUT /api/notes/:id
Update an existing note.

**Parameters:**
- `id` (string, required): UUID of the note to update

**Request Body:**
```json
{
  "title": "Updated Title",
  "content": "# Updated Title\n\nUpdated content"
}
```

**Response:** `200 OK`
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Updated Title",
  "content": "# Updated Title\n\nUpdated content",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T11:45:00.000Z"
}
```

**Error Response:** `404 Not Found`
```json
{
  "message": "Note not found"
}
```

#### DELETE /api/notes/:id
Delete a note by ID.

**Parameters:**
- `id` (string, required): UUID of the note to delete

**Response:** `204 No Content`

**Error Response:** `404 Not Found`
```json
{
  "message": "Note not found"
}
```

## Error Handling

The API uses standard HTTP status codes and returns JSON error responses:

### Status Codes
- `200 OK` - Request successful
- `201 Created` - Resource created successfully
- `204 No Content` - Resource deleted successfully
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

### Error Response Format
```json
{
  "message": "Error description"
}
```

## Examples

### JavaScript/Fetch Examples

#### Get All Notes
```javascript
const response = await fetch('http://localhost:3000/api/notes');
const notes = await response.json();
console.log(notes);
```

#### Create a Note
```javascript
const response = await fetch('http://localhost:3000/api/notes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'My New Note',
    content: '# My New Note\n\nThis is the content of my note.'
  })
});
const newNote = await response.json();
```

#### Update a Note
```javascript
const response = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Updated Note Title',
    content: '# Updated Note Title\n\nUpdated content here.'
  })
});
const updatedNote = await response.json();
```

#### Delete a Note
```javascript
const response = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
  method: 'DELETE'
});
// Response has no body for successful deletion
```

### cURL Examples

#### Get All Notes
```bash
curl -X GET http://localhost:3000/api/notes
```

#### Create a Note
```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"# My Note\n\nContent here"}'
```

#### Update a Note
```bash
curl -X PUT http://localhost:3000/api/notes/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Note","content":"# Updated Note\n\nNew content"}'
```

#### Delete a Note
```bash
curl -X DELETE http://localhost:3000/api/notes/550e8400-e29b-41d4-a716-446655440000
```

## CORS Configuration

The API is configured with CORS to allow requests from any origin during development. In production, you should configure specific allowed origins.