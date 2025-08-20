# Development Guide

This guide helps developers set up their local environment and contribute to Notes MD.

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Initial Setup

1. Fork the repository on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/notes-md.git
   cd notes-md
   ```

3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/colbylwilliams/notes-md.git
   ```

### Development Workflow

#### Frontend Development

1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`.

#### Backend Development

1. Navigate to the API directory:
   ```bash
   cd api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3000`.

## Code Style and Linting

### Frontend

<!-- TODO: Document ESLint configuration -->
<!-- TODO: Add code formatting guidelines -->

### Backend

<!-- TODO: Document API ESLint configuration -->
<!-- TODO: Add TypeScript guidelines -->

## Testing

### Frontend Tests

```bash
cd web
npm run test
```

<!-- TODO: Add testing guidelines -->
<!-- TODO: Add test writing conventions -->

### Backend Tests

```bash
cd api
npm run test
```

<!-- TODO: Add API testing guidelines -->
<!-- TODO: Add integration testing setup -->

## Building

### Frontend Build

```bash
cd web
npm run build
```

### Backend Build

```bash
cd api
npm run build
```

## Project Structure

```
notes-md/
├── api/                 # Backend Express API
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── models/      # Data models
│   │   ├── routes/      # API routes
│   │   └── middleware/  # Express middleware
│   └── package.json
├── web/                 # Frontend React app
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API services
│   │   └── App.tsx      # Main app component
│   └── package.json
├── docs/                # Documentation
└── README.md
```

## Database

<!-- TODO: Add database setup instructions when implemented -->
<!-- TODO: Add migration guidelines -->

## Environment Variables

<!-- TODO: Document development environment variables -->
<!-- TODO: Add .env.example files references -->

## Debugging

<!-- TODO: Add debugging setup for VS Code -->
<!-- TODO: Add browser debugging tips -->

## Common Tasks

<!-- TODO: Add common development tasks -->
<!-- TODO: Add code generation scripts -->

## Performance

<!-- TODO: Add performance monitoring setup -->
<!-- TODO: Add optimization guidelines -->

## Security

<!-- TODO: Add security guidelines -->
<!-- TODO: Add vulnerability scanning setup -->

## Getting Help

- Join our [discussions](https://github.com/colbylwilliams/notes-md/discussions)
- Check existing [issues](https://github.com/colbylwilliams/notes-md/issues)
- Read the [contributing guide](contributing.md)