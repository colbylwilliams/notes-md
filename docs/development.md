# Development Guide

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Development Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Install Dependencies

```bash
# Frontend
cd web
npm install

# API
cd ../api
npm install
```

### 3. Environment Configuration

Copy the example environment files and configure as needed:

```bash
# Frontend
cd web
cp .env.example .env

# API
cd ../api
cp .env.example .env
```

### 4. Start Development Servers

```bash
# Terminal 1 - API
cd api
npm run dev

# Terminal 2 - Frontend
cd web
npm run dev
```

## Development Workflow

### Code Style

- Follow TypeScript best practices
- Use ESLint for code linting
- Follow existing code patterns and conventions

### Testing

- Write tests for new features
- Run tests before submitting PRs
- Maintain test coverage

### Git Workflow

1. Create feature branch from `main`
2. Make small, focused commits
3. Write descriptive commit messages
4. Submit pull request for review

## TODO

- [ ] Add code style guide and ESLint configuration
- [ ] Document testing strategy and tools
- [ ] Add pre-commit hooks setup
- [ ] Create development best practices guide
- [ ] Add debugging tips and tools
- [ ] Document local database setup
- [ ] Add performance profiling guidelines
- [ ] Include security development practices

## Useful Commands

```bash
# Lint code
npm run lint

# Run tests
npm run test

# Build for production
npm run build
```

For detailed setup instructions, see the main [README.md](../README.md).