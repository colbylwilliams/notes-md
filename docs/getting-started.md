# Getting Started

This guide will help you set up the Notes MD application for development.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Frontend Setup

```bash
cd web
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. API Setup

```bash
cd api
npm install
cp .env.example .env
npm run dev
```

The API will be available at `http://localhost:3000`

## Development Workflow

1. Make changes to the code
2. Test locally using the development servers
3. Run linting: `npm run lint`
4. Run tests: `npm run test`
5. Build for production: `npm run build`

## Common Issues

TODO: Document common setup issues and solutions

## Next Steps

- Read the [API Reference](./api-reference.md) for backend development
- Check the [Frontend Guide](./frontend-guide.md) for UI development
- Review [Contributing Guidelines](./contributing.md) before making changes