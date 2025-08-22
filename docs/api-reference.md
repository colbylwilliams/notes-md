# API Reference

## Base URL

Development: `http://localhost:3000`

## Authentication

TODO: Document authentication requirements (if any)

## Endpoints

### Notes

#### GET /api/notes
Get all notes

**Response:**
```json
[
  {
    "id": "string",
    "title": "string",
    "content": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
]
```

#### GET /api/notes/:id
Get a specific note by ID

**Parameters:**
- `id` (string): Note ID

#### POST /api/notes
Create a new note

**Request Body:**
```json
{
  "title": "string",
  "content": "string"
}
```

#### PUT /api/notes/:id
Update an existing note

**Parameters:**
- `id` (string): Note ID

**Request Body:**
```json
{
  "title": "string",
  "content": "string"
}
```

#### DELETE /api/notes/:id
Delete a note

**Parameters:**
- `id` (string): Note ID

## Error Responses

TODO: Document error response formats and status codes

---

*This API reference is a work in progress. Please refer to the [API README](../api/README.md) for current implementation details.*