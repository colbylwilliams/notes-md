# API Reference

This document provides comprehensive reference for the Notes MD REST API.

## Base URL

**TODO: Document actual base URL structure**

Local development: `http://localhost:3000`  
Production: `[TODO - Add production URL]`

## Authentication

**TODO: Document authentication if implemented**

Currently, the API does not require authentication for local development.

## Endpoints Overview

| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| GET | `/api/notes` | Retrieve all notes | ✅ Implemented |
| GET | `/api/notes/:id` | Retrieve a specific note | ✅ Implemented |
| POST | `/api/notes` | Create a new note | ✅ Implemented |
| PUT | `/api/notes/:id` | Update an existing note | ✅ Implemented |
| DELETE | `/api/notes/:id` | Delete a note | ✅ Implemented |

## Detailed Endpoint Documentation

### GET /api/notes

**TODO: Add comprehensive endpoint documentation**

- **Description**: Retrieve all notes
- **Parameters**: [TODO - Document query parameters]
- **Response**: Array of note objects
- **Example request**: [TODO]
- **Example response**: [TODO] 
- **Error codes**: [TODO]

### GET /api/notes/:id

**TODO: Add endpoint details**

- **Description**: Retrieve a specific note by ID
- **Parameters**: [TODO]
- **Response**: [TODO]
- **Example**: [TODO]

### POST /api/notes

**TODO: Add endpoint details**

- **Description**: Create a new note
- **Request body**: [TODO]
- **Validation**: [TODO]
- **Response**: [TODO]

### PUT /api/notes/:id

**TODO: Add endpoint details**

- **Description**: Update an existing note
- **Parameters**: [TODO]
- **Request body**: [TODO]
- **Response**: [TODO]

### DELETE /api/notes/:id

**TODO: Add endpoint details**

- **Description**: Delete a note
- **Parameters**: [TODO]
- **Response**: [TODO]

## Data Models

### Note Object

**TODO: Document the note data structure**

```typescript
interface Note {
  // TODO: Add actual interface definition
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Error Handling

**TODO: Document error response format**

- Standard HTTP status codes
- Error response structure
- Common error scenarios

## Rate Limiting

**TODO: Document rate limiting policies**

- Request limits per time window
- Headers returned
- Handling rate limit errors

## Examples

**TODO: Add comprehensive examples**

### JavaScript/Node.js

```javascript
// TODO: Add fetch examples
```

### cURL

```bash
# TODO: Add cURL examples
```

### Python

```python
# TODO: Add Python requests examples
```

## SDKs and Libraries

**TODO: Document available SDKs**

- Official JavaScript SDK
- Community libraries
- Integration guides

---

*This API reference is currently being developed. See [api/README.md](../api/README.md) for basic examples.*