# API Documentation

Notes MD provides a REST API for managing notes programmatically. This documentation covers all available endpoints and usage examples.

## Base URL

- Development: `http://localhost:3000`
- Production: `[TODO: Add production URL]`

## Authentication

<!-- TODO: Document authentication when implemented -->
Currently, the API doesn't require authentication. This will be added in future versions.

## Endpoints

### Notes

#### Get All Notes
```http
GET /api/notes
```

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Note Title",
    "content": "# Note Title\n\nNote content...",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

#### Get Note by ID
```http
GET /api/notes/:id
```

#### Create Note
```http
POST /api/notes
Content-Type: application/json

{
  "title": "New Note",
  "content": "# New Note\n\nContent here..."
}
```

#### Update Note
```http
PUT /api/notes/:id
Content-Type: application/json

{
  "title": "Updated Note",
  "content": "# Updated Note\n\nUpdated content..."
}
```

#### Delete Note
```http
DELETE /api/notes/:id
```

## Error Handling

<!-- TODO: Document error response format -->

## Rate Limiting

<!-- TODO: Document rate limiting when implemented -->

## Examples

For detailed request/response examples, see the [API README](../api/README.md).

## TODO

- [ ] Add authentication documentation
- [ ] Document error response formats
- [ ] Add rate limiting information
- [ ] Create API client examples for popular languages
- [ ] Add OpenAPI/Swagger specification
- [ ] Document pagination when implemented