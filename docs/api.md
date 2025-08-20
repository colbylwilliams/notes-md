# API Documentation

The Notes MD API is a RESTful service built with Express and TypeScript that provides endpoints for managing markdown notes.

## 🚀 Quick Start

The API server runs on `http://localhost:3000` by default.

```bash
cd api
npm install
npm run dev
```

## 📡 Base URL

- **Development**: `http://localhost:3000`
- **Production**: TODO - Add production URL

## 🔗 API Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

## 📋 Data Models

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

## 📝 Request & Response Examples

### Get All Notes

**Request:**
```http
GET /api/notes
```

**Response:**
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Sample Note",
    "content": "# Sample Note\n\nThis is a sample note.",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

### Create a New Note

**Request:**
```http
POST /api/notes
Content-Type: application/json

{
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note."
}
```

**Response:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "New Note",
  "content": "# New Note\n\nThis is a new note.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

## ⚙️ Configuration

The API can be configured using environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `development` |

## 🛠️ Development

### Project Structure

```
api/
├── src/
│   ├── index.ts         # Entry point
│   ├── routes/          # API routes
│   ├── models/          # Data models
│   ├── middleware/      # Express middleware
│   └── utils/           # Utility functions
├── dist/                # Compiled JavaScript (generated)
└── package.json
```

### Building

```bash
npm run build
```

### Running in Production

```bash
npm start
```

## 📋 TODO

- [ ] Add authentication and authorization
- [ ] Implement rate limiting
- [ ] Add request validation middleware
- [ ] Include error handling documentation
- [ ] Add API versioning
- [ ] Implement pagination for large note collections
- [ ] Add search and filtering capabilities
- [ ] Include OpenAPI/Swagger documentation
- [ ] Add database integration documentation
- [ ] Include monitoring and logging setup

## 🧪 Testing

Run the API tests:

```bash
npm test
```

### Testing Strategy

- [ ] Unit tests for individual functions
- [ ] Integration tests for API endpoints
- [ ] Error handling tests
- [ ] Performance tests

## 🔐 Security

### Current Implementation

- [ ] Input validation
- [ ] CORS configuration
- [ ] Error handling

### Planned Security Features

- [ ] Authentication (JWT)
- [ ] Rate limiting
- [ ] Input sanitization
- [ ] Security headers

## 📊 Monitoring

### Health Check

```http
GET /health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2023-01-01T00:00:00.000Z"
}
```

## 🔗 Related Documentation

- [Frontend Documentation](frontend.md) - How the frontend consumes this API
- [Deployment Guide](deployment.md) - Deploying the API to production
- [Contributing](contributing.md) - Contributing to the API development