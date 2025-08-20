# API Documentation

## Overview

The Notes MD API provides RESTful endpoints for managing markdown notes. It's built with Express.js and TypeScript.

## Base URL

- Development: `http://localhost:3000`
- Production: *TBD*

## Authentication

*TODO: Document authentication mechanism if implemented*

## Endpoints

### Notes

#### GET /api/notes
Get all notes.

**Response:**
```json
[
  {
    "id": "string",
    "title": "string", 
    "content": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

#### GET /api/notes/:id
Get a specific note by ID.

#### POST /api/notes
Create a new note.

**Request Body:**
```json
{
  "title": "string",
  "content": "string"
}
```

#### PUT /api/notes/:id
Update an existing note.

#### DELETE /api/notes/:id
Delete a note.

## Error Handling

*TODO: Document error response format and status codes*

## Rate Limiting

*TODO: Document rate limiting policies*

## Examples

*TODO: Add more detailed request/response examples*

---

*This documentation is under development. See [api/README.md](../api/README.md) for current implementation details.*