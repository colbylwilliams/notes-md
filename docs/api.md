# API Documentation

## Base URL

Development: `http://localhost:3000`

## Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## Data Models

### Note

```typescript
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Example Usage

### Create a Note

```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Note",
    "content": "# My Note\n\nThis is my note content."
  }'
```

### Get All Notes

```bash
curl http://localhost:3000/api/notes
```

## TODO

- [ ] Add authentication documentation
- [ ] Document error responses
- [ ] Add request validation details
- [ ] Document rate limiting
- [ ] Add WebSocket endpoints (if planned)
- [ ] Document API versioning strategy