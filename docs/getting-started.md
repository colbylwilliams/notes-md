# Getting Started

## Overview

This guide will help you set up Notes MD for development on your local machine.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Frontend Setup

```bash
cd web
npm install
cp .env.example .env  # Optional: Configure environment variables
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. API Setup

```bash
cd api
npm install
cp .env.example .env  # Configure environment variables
npm run dev
```

The API will be available at `http://localhost:3000`

## Development Workflow

### Running in Development

1. Start the API server:
   ```bash
   cd api && npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd web && npm run dev
   ```

### Building for Production

```bash
# Build frontend
cd web && npm run build

# Build API
cd api && npm run build
```

## Environment Configuration

### Frontend Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | API base URL | `http://localhost:3000` |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Enable dark mode by default | `false` |
| `VITE_ENABLE_AUTOSAVE` | Enable autosave functionality | `true` |
| `VITE_APP_TITLE` | Application title | `Notes MD` |
| `VITE_AUTOSAVE_INTERVAL` | Autosave interval (ms) | `5000` |

### API Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `development` |

## Troubleshooting

### Common Issues

**Port conflicts**: If you get port errors, make sure ports 3000 and 5173 are available.

**Node version**: Ensure you're using Node.js v14 or higher.

**Dependencies**: Try deleting `node_modules` and running `npm install` again.

## Next Steps

- [API Reference](api-reference.md) - Learn about the API endpoints
- [Frontend Guide](frontend-guide.md) - Understand the frontend architecture
- [Contributing](contributing.md) - Guidelines for contributing

---

📝 **TODO**: Add specific troubleshooting steps and common development scenarios