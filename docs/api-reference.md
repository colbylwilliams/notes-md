# API Reference

Complete API documentation for the Notes MD REST API.

## Base URL

Development: `http://localhost:3000`
Production: TBD

## Authentication

TODO: Document authentication requirements (if any)

## Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

## Detailed API Documentation

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

### POST /api/notes

Create a new note.

**Request:**
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

## TODO

- [ ] Document all endpoint parameters and query options
- [ ] Add error response examples for each endpoint
- [ ] Document rate limiting (if applicable)
- [ ] Add authentication/authorization details
- [ ] Include request/response headers information
- [ ] Add code examples in multiple languages (curl, JavaScript, Python)
- [ ] Document API versioning strategy
- [ ] Add pagination documentation for list endpoints