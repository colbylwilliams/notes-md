# API Reference

<!-- TODO: Complete API documentation with detailed endpoint descriptions -->

## Base URL

- Development: `http://localhost:3000`
- Production: <!-- TODO: Add production URL -->

## Authentication

<!-- TODO: Document authentication if implemented -->

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
- `id` (string): Note UUID

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
- `id` (string): Note UUID

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
- `id` (string): Note UUID

**Response:**
```json
{
  "message": "Note deleted successfully"
}
```

## Error Responses

<!-- TODO: Document error response format and status codes -->

All errors return a JSON object with an error message:

```json
{
  "error": "Error description"
}
```

## Rate Limiting

<!-- TODO: Document rate limiting if implemented -->

## Examples

<!-- TODO: Add more detailed examples with different tools (curl, JavaScript, etc.) -->

### Using curl

```bash
# Get all notes
curl http://localhost:3000/api/notes

# Create a new note
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My Note", "content": "# My Note\n\nContent here"}'
```

### Using JavaScript (fetch)

```javascript
// Get all notes
const notes = await fetch('/api/notes').then(r => r.json());

// Create a new note
const newNote = await fetch('/api/notes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'My Note',
    content: '# My Note\n\nContent here'
  })
}).then(r => r.json());
```