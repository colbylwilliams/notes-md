# API Documentation

This section contains comprehensive documentation for the Notes MD REST API.

## TODO

- [ ] Document all API endpoints with request/response examples
- [ ] Add authentication documentation (if implemented)
- [ ] Include rate limiting information
- [ ] Add error handling documentation
- [ ] Document data models and schemas
- [ ] Add API versioning information
- [ ] Include integration examples

## Quick Reference

The Notes MD API provides RESTful endpoints for managing notes:

- **Base URL**: `http://localhost:3000` (development)
- **Content Type**: `application/json`

## Available Endpoints

| Method | Endpoint | Description | Status |
|--------|----------|-------------|---------|
| GET | `/api/notes` | Get all notes | ✅ Available |
| GET | `/api/notes/:id` | Get note by ID | ✅ Available |
| POST | `/api/notes` | Create new note | ✅ Available |
| PUT | `/api/notes/:id` | Update note | ✅ Available |
| DELETE | `/api/notes/:id` | Delete note | ✅ Available |

For detailed implementation, see the [API source code](../../api/README.md).

## Next Steps

1. [Endpoints Documentation](endpoints.md) - Detailed endpoint documentation (TODO)
2. [Examples](examples.md) - API usage examples (TODO)