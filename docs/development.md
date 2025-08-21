# Development Guide

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Project Setup

### Clone and Install

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### Frontend Development

```bash
cd web
npm install
npm run dev
```

The frontend will be available at http://localhost:5173

### Backend Development

```bash
cd api
npm install
npm run dev
```

The API will be available at http://localhost:3000

## Development Workflow

### Building

```bash
# Frontend
cd web && npm run build

# Backend
cd api && npm run build
```

### Testing

```bash
# Frontend
cd web && npm test

# Backend
cd api && npm test
```

### Linting

```bash
# Frontend
cd web && npm run lint

# Backend
cd api && npm run lint
```

## TODO

- [ ] Document code style guidelines
- [ ] Add debugging instructions
- [ ] Document testing strategy
- [ ] Add Git workflow guidelines
- [ ] Document environment setup
- [ ] Add IDE configuration recommendations