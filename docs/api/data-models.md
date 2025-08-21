# API Data Models

This document describes the data structures used in the Notes MD API.

## Note Model

The core data model for notes in the system.

### Properties

```typescript
interface Note {
  id: string;           // Unique identifier (UUID v4)
  title: string;        // Note title (extracted from content)
  content: string;      // Raw markdown content
  createdAt: Date;      // Creation timestamp
  updatedAt: Date;      // Last modification timestamp
}
```

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Meeting Notes",
  "content": "# Meeting Notes\n\n## Agenda\n- Review project status\n- Discuss next steps",
  "createdAt": "2023-01-01T10:00:00.000Z",
  "updatedAt": "2023-01-01T11:30:00.000Z"
}
```

### Validation Rules

- **id**: Must be a valid UUID v4 format
- **title**: Maximum 200 characters, automatically extracted from content
- **content**: Maximum 50,000 characters
- **createdAt**: ISO 8601 timestamp, set automatically on creation
- **updatedAt**: ISO 8601 timestamp, updated automatically on modification

## Request Models

### Create Note Request

```typescript
interface CreateNoteRequest {
  title?: string;       // Optional, will be extracted from content if not provided
  content: string;      // Required markdown content
}
```

### Update Note Request

```typescript
interface UpdateNoteRequest {
  title?: string;       // Optional, will be extracted from content if not provided
  content?: string;     // Optional markdown content
}
```

## Response Models

### API Response Wrapper

All API responses are wrapped in a consistent format:

```typescript
interface ApiResponse<T> {
  data: T;              // The response data
  error: string | null; // Error message if any
  timestamp: string;    // Response timestamp
}
```

### Error Response

```typescript
interface ErrorResponse {
  error: string;        // Error message
  code: string;         // Error code
  details?: any;        // Additional error details
}
```

### Paginated Response

For endpoints that return multiple items:

```typescript
interface PaginatedResponse<T> {
  data: T[];            // Array of items
  pagination: {
    page: number;       // Current page
    limit: number;      // Items per page
    total: number;      // Total number of items
    pages: number;      // Total number of pages
  };
}
```

## Enums and Constants

### Note Status (Future)

```typescript
enum NoteStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived'
}
```

### Sort Options (Future)

```typescript
enum SortBy {
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
  TITLE = 'title'
}

enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}
```

## TODO

- [ ] Add user model when authentication is implemented
- [ ] Document tag/category models
- [ ] Add attachment/media models
- [ ] Document search query models
- [ ] Add audit log models
- [ ] Document workspace/collaboration models