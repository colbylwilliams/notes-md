# Backend Architecture

## Overview

The backend is a RESTful API built with Express and TypeScript. It provides endpoints for CRUD operations on notes and handles all business logic and data persistence.

## Technology Stack

- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **TypeScript**: Static typing for Node.js
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Project Structure

```
api/
├── src/
│   ├── controllers/         # Request handlers
│   │   └── notes.ts        # Notes controller
│   ├── models/             # Data models
│   │   └── note.ts         # Note type definition
│   ├── routes/             # API routes
│   │   └── notes.ts        # Notes routes
│   ├── middleware/         # Express middleware
│   │   └── errorHandler.ts # Error handling
│   └── index.ts            # Application entry point
├── .env.example            # Example environment variables
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Architecture Layers

### 1. Routes Layer (`/routes`)

**Purpose**: Define API endpoints and map to controllers.

**Responsibilities**:
- URL routing
- HTTP method mapping
- Route-level validation
- Route grouping

**Example** (`routes/notes.ts`):
```typescript
import express from 'express';
import * as notesController from '../controllers/notes';

const router = express.Router();

router.get('/', notesController.getAllNotes);
router.get('/:id', notesController.getNoteById);
router.post('/', notesController.createNote);
router.put('/:id', notesController.updateNote);
router.delete('/:id', notesController.deleteNote);

export default router;
```

### 2. Controllers Layer (`/controllers`)

**Purpose**: Handle HTTP requests and responses.

**Responsibilities**:
- Request validation
- Business logic execution
- Response formatting
- Error handling

**Pattern**:
```typescript
export const getAllNotes = async (req, res, next) => {
  try {
    // 1. Get data from storage
    const notes = await storage.getAllNotes();
    
    // 2. Format response
    res.json(notes);
  } catch (error) {
    // 3. Pass errors to middleware
    next(error);
  }
};
```

### 3. Models Layer (`/models`)

**Purpose**: Define data structures and types.

**Responsibilities**:
- Type definitions
- Data validation schemas
- Business logic related to data

**Example** (`models/note.ts`):
```typescript
export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### 4. Middleware Layer (`/middleware`)

**Purpose**: Request/response processing pipeline.

**Components**:
- **CORS Middleware**: Enable cross-origin requests
- **JSON Parser**: Parse request bodies
- **Error Handler**: Centralized error handling

**Error Handler** (`middleware/errorHandler.ts`):
```typescript
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
};
```

## API Endpoints

### Notes Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/api/notes` | Get all notes | - | `Note[]` |
| GET | `/api/notes/:id` | Get note by ID | - | `Note` |
| POST | `/api/notes` | Create new note | `{title, content}` | `Note` |
| PUT | `/api/notes/:id` | Update note | `{title, content}` | `Note` |
| DELETE | `/api/notes/:id` | Delete note | - | `204 No Content` |

### Base Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information and available endpoints |

## Request/Response Flow

```
1. HTTP Request arrives
       ↓
2. CORS Middleware (checks origin)
       ↓
3. Body Parser Middleware (parses JSON)
       ↓
4. Router matches endpoint
       ↓
5. Controller function executes
       ↓
6. Business logic runs
       ↓
7. Data storage operation
       ↓
8. Response formatted and sent
       ↓
9. Error Handler (if errors occur)
```

## Data Storage

### Current Implementation: In-Memory Storage

**Storage Mechanism**:
```typescript
// In-memory array
let notes: Note[] = [];

// CRUD operations
const storage = {
  getAll: () => notes,
  getById: (id) => notes.find(n => n.id === id),
  create: (note) => { notes.push(note); return note; },
  update: (id, data) => { /* update logic */ },
  delete: (id) => { notes = notes.filter(n => n.id !== id); }
};
```

**Characteristics**:
- ✅ Simple and fast
- ✅ No setup required
- ❌ Data lost on restart
- ❌ Not scalable
- ❌ No persistence

### Future Storage Options

#### Option 1: File System
```typescript
// Store notes as JSON files
const fs = require('fs');
const notesFile = './data/notes.json';
```

**Pros**: Simple, persistent, no dependencies
**Cons**: Not scalable, file locking issues

#### Option 2: Database (MongoDB, PostgreSQL)
```typescript
// Using an ORM like Prisma or TypeORM
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
```

**Pros**: Scalable, reliable, queryable
**Cons**: More complex setup

#### Option 3: Cloud Storage (AWS S3, Azure Blob)
```typescript
// Store notes in cloud storage
const { BlobServiceClient } = require('@azure/storage-blob');
```

**Pros**: Highly scalable, managed service
**Cons**: Network latency, costs

## Error Handling

### Error Types

1. **Validation Errors** (400)
   - Missing required fields
   - Invalid data format

2. **Not Found Errors** (404)
   - Note doesn't exist

3. **Server Errors** (500)
   - Unexpected errors
   - Database failures

### Error Response Format

```json
{
  "error": {
    "message": "Note not found",
    "status": 404
  }
}
```

## Validation

### Input Validation

Current approach: Manual validation in controllers

**Example**:
```typescript
export const createNote = async (req, res, next) => {
  const { title, content } = req.body;
  
  // Validation
  if (!title || !content) {
    return res.status(400).json({
      error: { message: 'Title and content are required' }
    });
  }
  
  // Continue processing...
};
```

### Future Validation Enhancement

Consider using validation libraries:
- **Joi**: Schema validation
- **Yup**: JavaScript schema builder
- **Zod**: TypeScript-first validation

**Example with Zod**:
```typescript
import { z } from 'zod';

const NoteSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1)
});

// In controller
const validatedData = NoteSchema.parse(req.body);
```

## Security Considerations

### Current Security Measures

1. **CORS**: Configured to allow specific origins
2. **JSON Parsing**: Limited payload size
3. **Error Messages**: Don't expose internal details

### Recommended Security Enhancements

1. **Rate Limiting**
   ```typescript
   import rateLimit from 'express-rate-limit';
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   });
   ```

2. **Input Sanitization**
   ```typescript
   import sanitizeHtml from 'sanitize-html';
   const cleanContent = sanitizeHtml(content);
   ```

3. **Authentication/Authorization**
   ```typescript
   import jwt from 'jsonwebtoken';
   // JWT-based authentication
   ```

4. **HTTPS Only** (in production)
5. **Helmet** (security headers)
   ```typescript
   import helmet from 'helmet';
   app.use(helmet());
   ```

## Environment Configuration

### Environment Variables (`.env`)

```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Configuration Management

```typescript
// config.ts
export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '*'
};
```

## Logging

### Current Logging

Basic console logging:
```typescript
console.log(`Server running on port ${PORT}`);
console.error(err.stack);
```

### Recommended Logging Enhancement

Use a logging library like Winston or Pino:
```typescript
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

## Testing Strategy

### Unit Tests
- Controller functions
- Utility functions
- Data validation

### Integration Tests
- API endpoints
- Request/response flows
- Error handling

### Test Structure
```typescript
describe('Notes API', () => {
  describe('GET /api/notes', () => {
    it('should return all notes', async () => {
      // Test implementation
    });
  });
  
  describe('POST /api/notes', () => {
    it('should create a new note', async () => {
      // Test implementation
    });
  });
});
```

## Performance Considerations

### Current Performance

- ✅ In-memory storage is very fast
- ✅ Minimal middleware overhead
- ✅ TypeScript compiled to efficient JS

### Optimization Opportunities

1. **Caching**: Redis for frequently accessed data
2. **Compression**: Gzip compression middleware
3. **Database Indexing**: When using a database
4. **Connection Pooling**: For database connections
5. **Clustering**: Multiple Node.js processes

## Deployment

### Development
```bash
npm run dev
# Uses ts-node or nodemon for auto-restart
```

### Production Build
```bash
npm run build   # Compile TypeScript to JavaScript
npm start       # Run compiled code
```

### Production Considerations
- Process manager (PM2)
- Reverse proxy (Nginx)
- Load balancing
- Health checks
- Monitoring and logging

## API Versioning

### Current: No versioning

### Future: Version in URL
```
/api/v1/notes
/api/v2/notes
```

**Benefits**:
- Backward compatibility
- Gradual migration
- Multiple versions in parallel

## Future Enhancements

Potential backend improvements:
- [ ] Database integration
- [ ] Authentication and authorization
- [ ] User management
- [ ] Note sharing and collaboration
- [ ] Full-text search
- [ ] File attachments
- [ ] Export/import functionality
- [ ] Webhooks for integrations
- [ ] GraphQL API option
- [ ] Real-time updates (WebSockets)
