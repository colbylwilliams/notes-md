# API Documentation

*TODO: Complete API documentation*

## Overview

The Notes MD API provides RESTful endpoints for managing notes programmatically.

## Base URL

```
http://localhost:3000
```

## Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

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

## Examples

*TODO: Add detailed request/response examples*

### Get All Notes
```bash
curl -X GET http://localhost:3000/api/notes
```

### Create a Note
```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My Note", "content": "# My Note\n\nContent here"}'
```

## Error Handling

*TODO: Document error responses and status codes*

## Authentication

*TODO: Document authentication when implemented*

---

*This API documentation is currently under development. More examples and details coming soon!*