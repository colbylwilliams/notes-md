# API Reference

Complete API documentation for the Notes MD REST API.

## Base URL

- Development: `http://localhost:3000`
- Production: [TODO: Add production URL]

## Authentication

TODO: Document authentication if applicable

## Endpoints

### Notes

#### GET /api/notes
Get all notes

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "string",
    "content": "string",
    "createdAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp"
  }
]
```

#### GET /api/notes/:id
Get a specific note by ID

**Parameters:**
- `id` (string): Note UUID

**Response:**
```json
{
  "id": "uuid",
  "title": "string", 
  "content": "string",
  "createdAt": "ISO 8601 timestamp",
  "updatedAt": "ISO 8601 timestamp"
}
```

#### POST /api/notes
Create a new note

**Request Body:**
```json
{
  "title": "string",
  "content": "string"
}
```

**Response:**
```json
{
  "id": "uuid",
  "title": "string",
  "content": "string", 
  "createdAt": "ISO 8601 timestamp",
  "updatedAt": "ISO 8601 timestamp"
}
```

#### PUT /api/notes/:id
Update an existing note

**Parameters:**
- `id` (string): Note UUID

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
- `id` (string): Note UUID

**Response:** `204 No Content`

## Error Handling

TODO: Document error response format and status codes

## Rate Limiting

TODO: Document rate limiting policies if applicable

## SDK and Examples

TODO: Add code examples in different languages

## Testing the API

TODO: Add API testing examples using curl, Postman, etc.