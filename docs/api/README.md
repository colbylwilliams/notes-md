# API Documentation

This section contains comprehensive documentation for the Notes MD REST API.

## Overview

The Notes MD API provides endpoints for managing markdown notes. It's built with Express.js and TypeScript.

## Base URL

```
http://localhost:3000/api
```

## Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get a specific note |
| POST | `/notes` | Create a new note |
| PUT | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

## Quick Examples

### Get All Notes
```bash
curl -X GET http://localhost:3000/api/notes
```

### Create a Note
```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My Note", "content": "# My Note\n\nThis is my note content."}'
```

## Data Models

### Note Object
```typescript
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## TODO

- [ ] Document complete request/response schemas
- [ ] Add authentication documentation
- [ ] Include error response examples
- [ ] Add rate limiting information
- [ ] Document validation rules
- [ ] Add API testing examples
- [ ] Include OpenAPI/Swagger specification
- [ ] Add webhook documentation if applicable