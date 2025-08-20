# Development Guide

This guide covers setting up the development environment and contributing to the Notes MD project.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- A code editor (VS Code recommended)

## Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Install Dependencies

```bash
# Frontend dependencies
cd web
npm install

# API dependencies
cd ../api
npm install
```

### 3. Environment Configuration

```bash
# Frontend (optional)
cd web
cp .env.example .env

# API
cd ../api
cp .env.example .env
```

### 4. Start Development Servers

```bash
# Start frontend (in web directory)
npm run dev

# Start API (in api directory, separate terminal)
npm run dev
```

## Project Structure

```
notes-md/
├── web/           # React frontend application
│   ├── src/       # Source code
│   ├── public/    # Static assets
│   └── ...
├── api/           # Express.js backend API
│   ├── src/       # Source code
│   └── ...
├── docs/          # Documentation
└── README.md      # Main project README
```

## Development Workflow

### 1. Making Changes

1. Create a new branch for your feature/fix
2. Make your changes in the appropriate directory
3. Test your changes thoroughly
4. Commit with descriptive messages

### 2. Code Quality

```bash
# Lint your code
npm run lint

# Build the project
npm run build

# Run tests
npm run test
```

### 3. Submitting Changes

1. Push your branch to GitHub
2. Create a pull request
3. Ensure all checks pass
4. Request review from maintainers

## Contributing Guidelines

### Code Style

- Follow existing code style and conventions
- Use TypeScript for type safety
- Write meaningful commit messages
- Add comments for complex logic

### Testing

- Write tests for new features
- Ensure existing tests pass
- Test across different browsers and devices

### Documentation

- Update documentation for any new features
- Include examples and code snippets
- Keep documentation current with code changes

## Architecture Overview

### Frontend (React + TypeScript)

- Built with Vite for fast development
- Uses Material-UI for components
- TypeScript for type safety
- React Markdown for preview rendering

### Backend (Express + TypeScript)

- RESTful API design
- In-memory storage (placeholder for database)
- CORS enabled for frontend communication
- TypeScript for consistency

## API Development

### Endpoints

The API follows RESTful conventions:

- `GET /api/notes` - List all notes
- `GET /api/notes/:id` - Get specific note
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

### Adding New Endpoints

1. Define route in appropriate router file
2. Implement controller function
3. Add validation if needed
4. Update API documentation
5. Write tests

## Frontend Development

### Component Structure

- Components are in `web/src/components/`
- Services are in `web/src/services/`
- Use TypeScript interfaces for props

### State Management

- React hooks for component state
- Context API for global state (if needed)
- Local storage for persistence

## Debugging

### Frontend

- Use browser dev tools
- React Developer Tools extension
- Console logging for development

### Backend

- Use debugger or console.log
- Check network requests in browser
- Verify API responses with tools like Postman

## Common Development Tasks

### Adding a New Feature

1. Plan the feature and its impact
2. Update both frontend and backend if needed
3. Write tests
4. Update documentation
5. Submit pull request

### Fixing Bugs

1. Reproduce the bug
2. Write a test that demonstrates the issue
3. Fix the bug
4. Verify the test passes
5. Submit pull request

---

*This development guide will be expanded as the project grows.*