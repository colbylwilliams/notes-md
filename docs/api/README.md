# API Documentation

Complete documentation for the Notes MD REST API.

## Table of Contents

- [Base URL](#base-url)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Data Models](#data-models)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [Examples](#examples)

## Base URL

*TODO: Document the API base URL and versioning*

Development: `http://localhost:3000/api`

## Authentication

*TODO: Document authentication if implemented*

Currently, the API does not require authentication.

## Endpoints

*TODO: Complete API endpoint documentation*

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get a specific note |
| POST | `/notes` | Create a new note |
| PUT | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

## Data Models

*TODO: Document request/response schemas*

### Note Object

```typescript
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
```

## Error Handling

*TODO: Document error response format*

## Rate Limiting

*TODO: Document rate limiting policies*

## Examples

*TODO: Add comprehensive request/response examples*

See the [API README](../../api/README.md) for basic examples.