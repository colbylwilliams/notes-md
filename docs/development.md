# Development Guide

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
cd web
npm install

# Install API dependencies  
cd ../api
npm install
```

### 3. Environment Setup

*TODO: Document environment variable setup for development*

### 4. Running the Development Servers

#### Frontend Development Server

```bash
cd web
npm run dev
```

The frontend will be available at `http://localhost:5173`

#### API Development Server

```bash
cd api
npm run dev
```

The API will be available at `http://localhost:3000`

## Development Workflow

### Code Style

*TODO: Document coding standards and style guidelines*

### Linting

```bash
# Lint frontend code
cd web
npm run lint

# Lint API code
cd api
npm run lint
```

### Testing

```bash
# Run frontend tests
cd web
npm test

# Run API tests
cd api
npm test
```

### Building

```bash
# Build frontend
cd web
npm run build

# Build API
cd api
npm run build
```

## Project Structure

*TODO: Document detailed project structure and file organization*

## Debugging

*TODO: Document debugging setup for VS Code and browser dev tools*

## Common Issues

*TODO: Document common development issues and solutions*

---

*This documentation is under development. Contributions welcome!*