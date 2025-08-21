# Getting Started

> **TODO:** This section needs to be expanded with more detailed setup instructions.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager (npm comes with Node.js)
- **Git** - Version control system

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Install Dependencies

Install dependencies for both the frontend and backend:

```bash
# Install frontend dependencies
cd web
npm install

# Install API dependencies
cd ../api
npm install
```

### 3. Environment Configuration

> **TODO:** Create and document environment configuration files

```bash
# Frontend environment (optional)
cd web
cp .env.example .env

# API environment
cd ../api
cp .env.example .env
```

### 4. Development Setup

Start both the frontend and backend development servers:

```bash
# Terminal 1 - Start the API server
cd api
npm run dev

# Terminal 2 - Start the frontend development server
cd web
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- API: http://localhost:3000

## Production Build

> **TODO:** Add detailed production build and deployment instructions

```bash
# Build frontend
cd web
npm run build

# Build API
cd api
npm run build
npm start
```

## Troubleshooting

> **TODO:** Add common setup issues and solutions

### Common Issues

- **Port conflicts**: Ensure ports 3000 and 5173 are available
- **Node version**: Verify you're using Node.js v14 or higher
- **Dependencies**: Try deleting `node_modules` and running `npm install` again

## Next Steps

- [API Documentation](./api.md) - Learn about the REST API
- [Frontend Documentation](./frontend.md) - Understand the frontend architecture
- [Contributing](./contributing.md) - Contribute to the project