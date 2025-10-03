# API Reference

This document provides a comprehensive reference for the Notes MD REST API.

## Base URL

```
http://localhost:3000/api
```

## Endpoints

### Notes

#### Get All Notes

```
GET /api/notes
```

Returns a list of all notes.

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

#### Get Note by ID

```
GET /api/notes/:id
```

Returns a specific note by ID.

#### Create Note

```
POST /api/notes
```

Creates a new note.

**Request Body:**
```json
{
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note."
}
```

#### Update Note

```
PUT /api/notes/:id
```

Updates an existing note.

#### Delete Note

```
DELETE /api/notes/:id
```

Deletes a note.

## TODO

- [ ] Add detailed request/response examples for all endpoints
- [ ] Document query parameters and filters
- [ ] Add error response examples
- [ ] Document rate limiting (if applicable)
- [ ] Add authentication documentation (if applicable)
- [ ] Include cURL examples for each endpoint
- [ ] Document validation rules
- [ ] Add pagination documentation (if applicable)
