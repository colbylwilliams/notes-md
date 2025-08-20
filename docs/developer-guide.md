# Developer Guide

<!-- TODO: Complete developer guide with architecture diagrams and detailed setup -->

## Architecture Overview

Notes MD consists of two main components:

- **Frontend** (`/web`): React application built with TypeScript and Vite
- **Backend** (`/api`): Express.js REST API built with TypeScript

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Frontend Development

```bash
cd web
npm install
npm run dev
```

### Backend Development

```bash
cd api
npm install
cp .env.example .env
npm run dev
```

## Project Structure

```
notes-md/
├── web/                 # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API and utility services
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
├── api/                 # Backend Express API
│   ├── src/
│   │   ├── routes/      # API route handlers
│   │   ├── models/      # Data models
│   │   └── ...
│   ├── package.json
│   └── tsconfig.json
├── docs/                # Documentation
└── README.md
```

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Material-UI
- React Markdown

### Backend
- Node.js
- Express.js
- TypeScript
- UUID for ID generation

## Building and Testing

### Frontend
```bash
cd web
npm run build    # Production build
npm run test     # Run tests
npm run lint     # Lint code
```

### Backend
```bash
cd api
npm run build    # Compile TypeScript
npm run test     # Run tests
npm run lint     # Lint code
```

## Code Standards

<!-- TODO: Document coding standards and conventions -->

## Contributing

<!-- TODO: Add detailed contributing guidelines -->

See the main [Contributing Guide](./contributing.md) for detailed contribution instructions.

## Common Development Tasks

<!-- TODO: Add common development scenarios and solutions -->

### Adding a New Component

<!-- TODO: Document component creation process -->

### Adding a New API Endpoint

<!-- TODO: Document API endpoint creation process -->

### Debugging

<!-- TODO: Add debugging guides and tips -->