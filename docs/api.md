# API Documentation

## Overview

The Notes MD API provides RESTful endpoints for managing markdown notes. This document describes the available endpoints, request/response formats, and usage examples.

## Base URL

- Development: `http://localhost:3000`
- Production: TBD

## Authentication

Currently, the API does not require authentication. This may change in future versions.

## Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Retrieve all notes |
| GET | `/api/notes/:id` | Retrieve a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

## 📝 TODO

This section needs to be expanded with:

- [ ] Detailed request/response examples for each endpoint
- [ ] Error handling and status codes
- [ ] Rate limiting information
- [ ] Authentication documentation (when implemented)
- [ ] Validation rules and constraints
- [ ] Pagination details
- [ ] Search and filtering capabilities
- [ ] API versioning strategy

## Examples

### Create a Note

```http
POST /api/notes
Content-Type: application/json

{
  "title": "My First Note",
  "content": "# My First Note\n\nThis is the content of my note."
}
```

### Response

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "My First Note",
  "content": "# My First Note\n\nThis is the content of my note.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

For more detailed API documentation, see the [API README](../api/README.md).