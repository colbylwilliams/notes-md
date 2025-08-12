# API Reference

Comprehensive reference documentation for the Notes MD REST API.

> **Note:** For basic API information, see the [API README](../api/README.md)

## Base URL

- **Development:** `http://localhost:3000`
- **Production:** Depends on deployment platform

## Authentication

Currently, the API does not implement authentication. All endpoints are publicly accessible.

## Endpoints

### Notes

All note endpoints are prefixed with `/api/notes`.

#### GET /api/notes

Get all notes in the system.

**Response Schema:**
```typescript
Note[] // Array of Note objects
```

**Example Request:**
```bash
curl http://localhost:3000/api/notes
```

**Example Response:**
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "My First Note",
    "content": "# My First Note\n\nThis is some content...",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

**Status Codes:**
- `200 OK` - Success

#### GET /api/notes/:id

Get a specific note by its ID.

**Path Parameters:**
- `id` (string, required) - UUID of the note

**Response Schema:**
```typescript
Note // Single Note object
```

**Example Request:**
```bash
curl http://localhost:3000/api/notes/123e4567-e89b-12d3-a456-426614174000
```

**Example Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "My First Note",
  "content": "# My First Note\n\nThis is some content...",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Status Codes:**
- `200 OK` - Note found
- `404 Not Found` - Note does not exist

#### POST /api/notes

Create a new note.

**Request Body Schema:**
```typescript
{
  title?: string;    // Optional, defaults to "Untitled Note"
  content?: string;  // Optional, defaults to template content
}
```

**Response Schema:**
```typescript
Note // Newly created Note object
```

**Example Request:**
```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Meeting Notes",
    "content": "# Meeting Notes\n\n- Agenda item 1\n- Agenda item 2"
  }'
```

**Example Response:**
```json
{
  "id": "456e7890-e89b-12d3-a456-426614174001",
  "title": "Meeting Notes",
  "content": "# Meeting Notes\n\n- Agenda item 1\n- Agenda item 2",
  "createdAt": "2024-01-15T10:35:00.000Z",
  "updatedAt": "2024-01-15T10:35:00.000Z"
}
```

**Validation Rules:**
- No required fields (both title and content are optional)
- Title and content can be empty strings

**Status Codes:**
- `201 Created` - Note created successfully

#### PUT /api/notes/:id

Update an existing note.

**Path Parameters:**
- `id` (string, required) - UUID of the note to update

**Request Body Schema:**
```typescript
{
  title?: string;    // Optional, keeps existing if not provided
  content?: string;  // Optional, keeps existing if not provided
}
```

**Response Schema:**
```typescript
Note // Updated Note object
```

**Example Request:**
```bash
curl -X PUT http://localhost:3000/api/notes/123e4567-e89b-12d3-a456-426614174000 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "content": "# Updated Title\n\nUpdated content here..."
  }'
```

**Example Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Updated Title",
  "content": "# Updated Title\n\nUpdated content here...",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T11:00:00.000Z"
}
```

**Validation Rules:**
- At least one field (title or content) should be provided
- Empty strings are allowed

**Status Codes:**
- `200 OK` - Note updated successfully
- `404 Not Found` - Note does not exist

#### DELETE /api/notes/:id

Delete a note by ID.

**Path Parameters:**
- `id` (string, required) - UUID of the note to delete

**Response:**
No content (empty response body)

**Example Request:**
```bash
curl -X DELETE http://localhost:3000/api/notes/123e4567-e89b-12d3-a456-426614174000
```

**Status Codes:**
- `204 No Content` - Note deleted successfully
- `404 Not Found` - Note does not exist

## Data Models

### Note

Complete schema definition for Note objects:

```typescript
interface Note {
  id: string;        // UUID v4 generated automatically
  title: string;     // Note title, defaults to "Untitled Note"
  content: string;   // Full markdown content
  createdAt: Date;   // ISO 8601 timestamp of creation
  updatedAt: Date;   // ISO 8601 timestamp of last update
}
```

**Field Details:**
- **id:** Generated using `uuid.v4()`, immutable after creation
- **title:** Human-readable title, often extracted from first heading in content
- **content:** Full markdown text, supports all standard markdown features
- **createdAt:** Set automatically on creation, never changes
- **updatedAt:** Updated automatically on every modification

## Error Handling

### Error Response Format

All API errors follow this structure:

```json
{
  "message": "Human-readable error description"
}
```

### HTTP Status Codes

- **200 OK** - Successful GET/PUT requests
- **201 Created** - Successful POST requests
- **204 No Content** - Successful DELETE requests
- **404 Not Found** - Resource does not exist
- **500 Internal Server Error** - Server-side errors

### Common Error Messages

- `"Note not found"` - Returned when requesting/updating/deleting non-existent note
- Server errors return generic error messages to avoid information leakage

## Rate Limiting

Currently, no rate limiting is implemented. All endpoints accept unlimited requests.

## Pagination

The current API does not implement pagination. `GET /api/notes` returns all notes in a single response. For applications with large numbers of notes, pagination should be added:

```typescript
// Future pagination parameters
interface PaginationParams {
  page?: number;     // Page number (1-based)
  limit?: number;    // Items per page
  sort?: string;     // Sort field
  order?: 'asc' | 'desc'; // Sort direction
}
```

## Versioning

The API currently does not implement versioning. All endpoints are available at the base `/api/notes` path. For future versions, consider:

- **URL Versioning:** `/api/v1/notes`, `/api/v2/notes`
- **Header Versioning:** `Accept: application/vnd.notes-md.v1+json`
- **Backwards Compatibility:** Maintain old versions during transitions