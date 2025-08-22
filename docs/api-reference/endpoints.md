# API Endpoints

## Notes Endpoints

### GET /api/notes

Retrieve all notes.

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Note Title",
    "content": "Note content in markdown",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### GET /api/notes/:id

Retrieve a specific note by ID.

TODO: Complete endpoint documentation

### POST /api/notes

Create a new note.

TODO: Complete endpoint documentation

### PUT /api/notes/:id

Update an existing note.

TODO: Complete endpoint documentation

### DELETE /api/notes/:id

Delete a note.

TODO: Complete endpoint documentation