# Development Guide

This guide covers setting up a development environment and working with the Notes MD codebase.

## Architecture Overview

Notes MD consists of two main components:

- **Frontend** (`/web`): React application built with TypeScript and Vite
- **Backend** (`/api`): Express.js REST API built with TypeScript

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Development Setup

### Quick Setup

See the main [README.md](../README.md) for detailed installation instructions.

### Development Workflow

<!-- TODO: Document recommended development workflow -->
<!-- TODO: Add information about hot reloading -->
<!-- TODO: Add debugging setup instructions -->

## Project Structure

```
notes-md/
├── web/          # React frontend application
├── api/          # Express.js backend API
├── docs/         # Documentation
└── README.md     # Main project documentation
```

## Frontend Development

### Technology Stack

- React 19
- TypeScript
- Vite (build tool)
- Material UI (components)
- React Markdown (markdown rendering)

### Key Scripts

```bash
cd web
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run test     # Run tests
```

<!-- TODO: Add information about component structure -->
<!-- TODO: Add styling guidelines -->
<!-- TODO: Add testing strategy -->

## Backend Development

### Technology Stack

- Express.js
- TypeScript
- Node.js

### Key Scripts

```bash
cd api
npm run dev      # Start development server with hot reload
npm run build    # Build TypeScript to JavaScript
npm run start    # Start production server
npm run lint     # Run ESLint
npm run test     # Run tests
```

<!-- TODO: Add information about API structure -->
<!-- TODO: Add database setup if applicable -->
<!-- TODO: Add middleware documentation -->

## Testing

<!-- TODO: Document testing strategy -->
<!-- TODO: Add information about running specific tests -->
<!-- TODO: Add coverage requirements -->

## Code Style

<!-- TODO: Document coding standards -->
<!-- TODO: Add linting rules explanation -->
<!-- TODO: Add commit message conventions -->

## Building for Production

<!-- TODO: Add production build instructions -->
<!-- TODO: Add deployment considerations -->
<!-- TODO: Add performance optimization tips -->