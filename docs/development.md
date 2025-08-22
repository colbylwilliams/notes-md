# Development Guide

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Frontend Setup

```bash
cd web
npm install
cp .env.example .env  # Optional: configure environment variables
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. API Setup

```bash
cd ../api
npm install
cp .env.example .env  # Configure environment variables
npm run dev
```

The API will be available at `http://localhost:3000`

## Development Workflow

TODO: Add detailed development workflow including:

- [ ] Code style and linting setup
- [ ] Testing procedures
- [ ] Commit message conventions
- [ ] Branch naming conventions
- [ ] Pull request process

## Project Structure

```
notes-md/
├── web/          # React frontend application
├── api/          # Express.js backend API
├── docs/         # Documentation
├── .github/      # GitHub workflows and templates
└── README.md     # Main project README
```

## Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- Material UI
- React Markdown

### Backend
- Express.js
- TypeScript
- Node.js

## Build Process

TODO: Document build and deployment processes

## Testing

TODO: Document testing strategy and commands

## Debugging

TODO: Add debugging tips and tools