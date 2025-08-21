# Getting Started

This guide provides detailed instructions for setting up and running the Notes MD application.

## Prerequisites

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager (npm comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

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
```

#### Environment Configuration (Optional)
```bash
cp .env.example .env
# Edit .env with your preferred settings
```

#### Start Development Server
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. API Setup

```bash
cd api
npm install
```

#### Environment Configuration
```bash
cp .env.example .env
# Configure your environment variables
```

#### Start API Server
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## Development Workflow

TODO: Add detailed development workflow documentation including:
- [ ] Code style guidelines
- [ ] Testing procedures
- [ ] Debugging tips
- [ ] Common issues and solutions

## Next Steps

- Read the [User Guide](user-guide.md) to learn how to use the application
- Check the [API Reference](api-reference.md) for integration details
- Review the [Architecture](architecture.md) to understand the system design