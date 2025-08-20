# API Documentation

The Notes MD API is a RESTful service built with Express.js and TypeScript that provides endpoints for managing markdown notes.

## Base URL

- Development: `http://localhost:3000`
- Production: `TBD`

## Authentication

Currently, the API does not require authentication. This is planned for future versions.

## Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API health check and info |
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

## Data Models

### Note

```typescript
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
```

## Example Requests

### Get All Notes
```bash
curl -X GET http://localhost:3000/api/notes
```

### Create a Note
```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Note",
    "content": "# My Note\n\nThis is my note content."
  }'
```

## TODO

- [ ] Add detailed request/response examples for all endpoints
- [ ] Document error responses and status codes
- [ ] Add authentication documentation
- [ ] Include rate limiting information
- [ ] Add API versioning strategy
- [ ] Document pagination for large datasets
- [ ] Add OpenAPI/Swagger specification
- [ ] Include performance considerations
- [ ] Add monitoring and logging documentation

## Error Handling

The API returns standard HTTP status codes and JSON error responses.

```json
{
  "error": "Error message",
  "status": 400
}
```

For more technical details, see the [API README](../api/README.md).