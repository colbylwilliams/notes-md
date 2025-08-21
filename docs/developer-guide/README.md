# Developer Guide

Welcome to the Notes MD Developer Guide! This section contains everything developers need to contribute to and extend Notes MD.

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Setup](./setup.md) | Development environment setup |
| [Architecture](./architecture.md) | System architecture overview |
| [Frontend Development](./frontend.md) | Frontend development guide |
| [Backend Development](./backend.md) | Backend development guide |
| [Testing](./testing.md) | Testing strategies and guidelines |
| [Code Style](./code-style.md) | Coding standards and conventions |
| [Build & Deploy](./build-deploy.md) | Build and deployment processes |
| [Debugging](./debugging.md) | Debugging tips and tools |

## Technology Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Material UI** - Component library
- **React Markdown** - Markdown rendering

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **UUID** - Unique identifier generation

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Testing framework (frontend)
- **Jest** - Testing framework (backend)

## Project Structure

```
notes-md/
├── web/                 # Frontend React application
│   ├── src/
│   ├── public/
│   └── package.json
├── api/                 # Backend Express API
│   ├── src/
│   └── package.json
├── docs/                # Documentation
└── README.md
```

## Getting Started

1. **Clone the repository**
2. **Install dependencies** for both frontend and backend
3. **Start development servers**
4. **Run tests** to ensure everything works
5. **Start coding!**

See the [Setup Guide](./setup.md) for detailed instructions.

## Contributing

Before contributing, please:

1. Read the [Contributing Guidelines](../contributing/README.md)
2. Review the [Code Style Guide](./code-style.md)
3. Understand the [Testing Strategy](./testing.md)
4. Check the [Architecture Documentation](./architecture.md)

## TODO

- [ ] Document development workflow
- [ ] Add debugging guides for common issues
- [ ] Create component development guidelines
- [ ] Document state management patterns
- [ ] Add performance optimization guidelines
- [ ] Document security considerations
- [ ] Add API design guidelines