# API Documentation

The Notes MD API provides RESTful endpoints for managing notes.

## Base URL

```
http://localhost:3000
```

## Authentication

<!-- TODO: Document authentication if implemented -->
Currently, the API does not require authentication.

## Endpoints

### Notes

#### GET /api/notes

Retrieve all notes.

**Response:**
```json
[
  {
    "id": "string",
    "title": "string",
    "content": "string",
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
]
```

#### GET /api/notes/:id

Retrieve a specific note by ID.

**Parameters:**
- `id` (string): The note ID

**Response:**
```json
{
  "id": "string",
  "title": "string", 
  "content": "string",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

#### POST /api/notes

Create a new note.

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
  "id": "string",
  "title": "string",
  "content": "string", 
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

#### PUT /api/notes/:id

Update an existing note.

**Parameters:**
- `id` (string): The note ID

**Request Body:**
```json
{
  "title": "string",
  "content": "string"
}
```

#### DELETE /api/notes/:id

Delete a note.

**Parameters:**
- `id` (string): The note ID

## Error Responses

<!-- TODO: Document error response format -->
<!-- TODO: Add common error codes and meanings -->

## Rate Limiting

<!-- TODO: Document rate limiting if implemented -->

## Examples

<!-- TODO: Add more detailed examples with curl commands -->
<!-- TODO: Add SDK/client library examples -->

## SDKs and Client Libraries

<!-- TODO: Document available SDKs -->

## Changelog

<!-- TODO: Document API version history -->