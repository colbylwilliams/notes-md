# API Endpoints

## Notes Endpoints

### GET /api/notes

Retrieve all notes.

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

### GET /api/notes/:id

Retrieve a specific note by ID.

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

### POST /api/notes

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

### PUT /api/notes/:id

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

### DELETE /api/notes/:id

Delete a note.

**Parameters:**
- `id` (string): Note UUID

**Response:** HTTP 204 No Content

## TODO

- [ ] Add query parameters for filtering and pagination
- [ ] Document search endpoints
- [ ] Add bulk operations endpoints
- [ ] Document any additional metadata endpoints
- [ ] Add examples for error responses
- [ ] Document request validation rules