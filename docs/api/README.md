# API Documentation

This document provides comprehensive documentation for the Notes MD REST API.

## Base URL

```
http://localhost:3000 (development)
```

## Authentication

Currently, the API does not require authentication. This may change in future versions.

## Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## Data Models

### Note Object

```json
{
  "id": "string",
  "title": "string",
  "content": "string",
  "createdAt": "string (ISO 8601)",
  "updatedAt": "string (ISO 8601)"
}
```

## TODOs

- [ ] Add detailed endpoint documentation with request/response examples
- [ ] Document error responses and status codes
- [ ] Add authentication documentation (when implemented)
- [ ] Document rate limiting (when implemented)
- [ ] Add webhook documentation (if needed)
- [ ] Create OpenAPI/Swagger specification
- [ ] Add API versioning documentation
- [ ] Document pagination (when implemented)
- [ ] Add search and filtering documentation
- [ ] Create SDK documentation for different languages

## Error Handling

TODO: Document error response format and common error codes.

## Rate Limiting

TODO: Document rate limiting policies when implemented.

---

For more detailed examples, see the [API README](../../api/README.md) in the API directory.