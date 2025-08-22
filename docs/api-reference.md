# API Reference

The Notes MD API provides RESTful endpoints for managing notes programmatically.

## Base URL

```
http://localhost:3000
```

## Authentication

TODO: Add authentication documentation when implemented.

## Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

### Examples

#### Get All Notes

```http
GET /api/notes
```

Response:
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

#### Create a Note

```http
POST /api/notes
Content-Type: application/json

{
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note."
}
```

Response:
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

## Error Handling

TODO: Add comprehensive error handling documentation.

## Rate Limiting

TODO: Add rate limiting information when implemented.

## SDKs and Libraries

TODO: Add information about client libraries and SDKs.