# Development Guide

## Getting Started

This guide will help you set up the development environment and contribute to Notes MD.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd web
   npm install
   
   # Backend
   cd ../api
   npm install
   ```

3. **Start development servers**
   ```bash
   # Terminal 1 - Frontend
   cd web
   npm run dev
   
   # Terminal 2 - Backend
   cd api
   npm run dev
   ```

## Project Structure

```
notes-md/
├── web/                # Frontend React application
├── api/                # Backend Express API
├── docs/               # Documentation
└── README.md           # Main project documentation
```

## Code Style and Standards

### TypeScript
- Use strict TypeScript configuration
- Define interfaces for all data structures
- Use meaningful variable and function names

### React
- Use functional components with hooks
- Follow React best practices for state management
- Use TypeScript props interfaces

> **TODO:** Document ESLint configuration and rules
> **TODO:** Add Prettier configuration
> **TODO:** Document commit message conventions

## Testing

### Frontend Testing
```bash
cd web
npm run test
```

### Backend Testing
```bash
cd api
npm run test
```

> **TODO:** Document testing strategy and best practices
> **TODO:** Add examples of unit and integration tests
> **TODO:** Document test coverage requirements

## Contributing

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write or update tests
5. Ensure all tests pass
6. Submit a pull request

> **TODO:** Document code review process
> **TODO:** Add contribution guidelines
> **TODO:** Document issue reporting process

## Development Tools

> **TODO:** Document recommended VS Code extensions
> **TODO:** Add debugging configuration
> **TODO:** Document development workflow