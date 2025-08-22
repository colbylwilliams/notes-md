# Getting Started with Notes MD

This guide will help you get Notes MD up and running in your development environment.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager
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
cp .env.example .env  # Optional: configure environment variables
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

TODO: Document the development workflow including:
- [ ] How to run both frontend and backend simultaneously
- [ ] Available npm scripts and their purposes
- [ ] How to run tests
- [ ] How to lint code
- [ ] Hot reloading and development tools

## Environment Configuration

TODO: Document environment variables in detail:
- [ ] Frontend environment variables and their effects
- [ ] API environment variables and configuration options
- [ ] Development vs production configurations

## First Steps

TODO: Provide a step-by-step tutorial:
- [ ] Creating your first note
- [ ] Understanding the markdown editor
- [ ] Using the preview feature
- [ ] Working with the API directly

## Troubleshooting

TODO: Common issues and solutions:
- [ ] Port conflicts
- [ ] Installation issues
- [ ] Build errors
- [ ] Runtime errors