# API Documentation

> 🚧 **Work in Progress** - This documentation is being developed

The Notes MD API provides REST endpoints for managing markdown notes. This section will contain comprehensive API documentation.

## Overview

The API is built with Express.js and TypeScript, providing endpoints for CRUD operations on notes.

## Base URL

When running locally:
```
http://localhost:3000
```

## Authentication

> 📋 TODO: Document authentication if implemented

## Endpoints

### Notes

| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| GET | `/api/notes` | Get all notes | ✅ Implemented |
| GET | `/api/notes/:id` | Get note by ID | ✅ Implemented |
| POST | `/api/notes` | Create new note | ✅ Implemented |
| PUT | `/api/notes/:id` | Update note | ✅ Implemented |
| DELETE | `/api/notes/:id` | Delete note | ✅ Implemented |

## Request/Response Examples

> 📋 TODO: Add detailed request/response examples for each endpoint

## Error Handling

> 📋 TODO: Document error response format and common error codes

## Rate Limiting

> 📋 TODO: Document rate limiting if implemented

## Data Models

### Note Model

> 📋 TODO: Document the Note data model structure

## Testing the API

> 📋 TODO: Add examples of testing the API with curl, Postman, etc.

---

For implementation details, see the [API README](../api/README.md).