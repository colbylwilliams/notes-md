# API Documentation

The Notes MD API is a RESTful service built with Express.js and TypeScript that provides endpoints for managing markdown notes.

## Base URL

- **Development**: `http://localhost:3000`
- **Production**: *TBD*

## API Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/notes` | Get all notes |
| GET    | `/api/notes/:id` | Get a specific note by ID |
| POST   | `/api/notes` | Create a new note |
| PUT    | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

## Data Models

### Note

```typescript
interface Note {
  id: string;           // UUID
  title: string;        // Note title (extracted from content)
  content: string;      // Markdown content
  createdAt: Date;      // Creation timestamp
  updatedAt: Date;      // Last update timestamp
}
```

## Request & Response Examples

### GET /api/notes

Retrieve all notes.

**Response:**
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Sample Note",
    "content": "# Sample Note\n\nThis is a sample note with **markdown** content.",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

### GET /api/notes/:id

Retrieve a specific note by ID.

**Parameters:**
- `id` (string): The UUID of the note

**Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Sample Note",
  "content": "# Sample Note\n\nThis is a sample note with **markdown** content.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

**Error Response (404):**
```json
{
  "error": "Note not found"
}
```

### POST /api/notes

Create a new note.

**Request Body:**
```json
{
  "title": "New Note",
  "content": "# New Note\n\nThis is the content of my new note."
}
```

**Response (201):**
```json
{
  "id": "456e789a-e89b-12d3-a456-426614174001",
  "title": "New Note",
  "content": "# New Note\n\nThis is the content of my new note.",
  "createdAt": "2023-01-01T12:00:00.000Z",
  "updatedAt": "2023-01-01T12:00:00.000Z"
}
```

### PUT /api/notes/:id

Update an existing note.

**Parameters:**
- `id` (string): The UUID of the note to update

**Request Body:**
```json
{
  "title": "Updated Note Title",
  "content": "# Updated Note Title\n\nThis note has been updated."
}
```

**Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Updated Note Title",
  "content": "# Updated Note Title\n\nThis note has been updated.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T12:30:00.000Z"
}
```

### DELETE /api/notes/:id

Delete a note.

**Parameters:**
- `id` (string): The UUID of the note to delete

**Response (204):**
No content

**Error Response (404):**
```json
{
  "error": "Note not found"
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- **200 OK**: Successful GET/PUT request
- **201 Created**: Successful POST request
- **204 No Content**: Successful DELETE request
- **400 Bad Request**: Invalid request data
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

Error responses include a JSON object with an error message:

```json
{
  "error": "Description of the error"
}
```

## Authentication

*Currently, the API does not implement authentication. This is a TODO item for future versions.*

## Rate Limiting

*Rate limiting is not currently implemented but may be added in future versions.*

## Development Notes

- The API uses in-memory storage for development
- UUIDs are generated using the `uuid` package
- Request validation is handled with `express-validator`
- CORS is enabled for development

## Related Documentation

- [Getting Started](./getting-started.md) - Set up the API for development
- [Frontend Documentation](./frontend.md) - How the frontend consumes this API