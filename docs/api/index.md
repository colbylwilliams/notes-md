# API Documentation

The Notes MD API is a RESTful service built with Express.js and TypeScript that provides endpoints for managing markdown notes.

## Overview

The API serves as the backend for the Notes MD application, providing CRUD operations for notes and supporting the frontend application.

## Base URL

- Development: `http://localhost:3000`
- Production: TODO: Add production URL

## Authentication

TODO: Add authentication documentation when implemented

## Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

### Example Responses

TODO: Add detailed request/response examples

## Error Handling

TODO: Add error response documentation

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

## Development

### Running the API

```bash
cd api
npm install
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

### Testing

```bash
npm run test
```

## Configuration

TODO: Add environment variable documentation

## Deployment

See [Deployment Guide](../deployment.md) for production deployment instructions.