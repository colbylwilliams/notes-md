# Contributing to Notes MD

Thank you for your interest in contributing to Notes MD! This guide will help you get started with contributing to the project.

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Getting Started

1. **Fork the Repository**
   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/notes-md.git
   cd notes-md
   ```

2. **Install Dependencies**
   ```bash
   # Install frontend dependencies
   cd web
   npm install
   
   # Install API dependencies
   cd ../api
   npm install
   ```

3. **Start Development Servers**
   ```bash
   # Terminal 1: Start the API server
   cd api
   npm run dev
   
   # Terminal 2: Start the frontend server
   cd web
   npm run dev
   ```

## Development Workflow

### Making Changes

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   # Run frontend tests
   cd web
   npm run test
   npm run lint
   
   # Run API tests
   cd api
   npm run test
   npm run lint
   ```

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Open a PR on GitHub
   - Describe your changes
   - Link any related issues

## Code Style

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Follow existing naming conventions

### React Components

- Use functional components with hooks
- Follow Material UI patterns
- Keep components focused and reusable

### API Development

- Follow RESTful conventions
- Add proper error handling
- Validate input data

## Testing

> **TODO**: Add testing guidelines and examples for:
> - Unit tests
> - Integration tests
> - E2E tests

## Documentation

- Update relevant documentation for any changes
- Add JSDoc comments for complex functions
- Update the README if needed

## Issue Guidelines

### Reporting Bugs

> **TODO**: Add bug report template and guidelines.

### Feature Requests

> **TODO**: Add feature request template and guidelines.

## Code Review Process

> **TODO**: Document the code review process and expectations.

## Release Process

> **TODO**: Document how releases are created and versioned.

---

> **Note**: This contributing guide is currently being expanded. More detailed guidelines and processes will be added soon.