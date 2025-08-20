# Getting Started

This guide will help you get Notes MD up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Quick Setup

For detailed installation instructions, see the [main README](../README.md#getting-started).

### 1. Clone and Install

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md

# Install frontend dependencies
cd web
npm install

# Install API dependencies
cd ../api
npm install
```

### 2. Start Development Servers

```bash
# Terminal 1 - Start API server
cd api
npm run dev

# Terminal 2 - Start frontend server
cd web
npm run dev
```

### 3. Access the Application

- Frontend: http://localhost:5173
- API: http://localhost:3000

## TODOs

- [ ] Add detailed environment setup instructions
- [ ] Document database setup (when implemented)
- [ ] Add Docker setup instructions
- [ ] Create development workflow guide
- [ ] Add IDE setup recommendations
- [ ] Document common issues and solutions
- [ ] Add performance tips for development

## Next Steps

- [Development Guide](./development.md) - Learn about the development workflow
- [API Documentation](./api/README.md) - Explore the API endpoints
- [Frontend Documentation](./frontend/README.md) - Understand the frontend architecture