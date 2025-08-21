# Getting Started with Notes MD

This guide will help you get Notes MD up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Frontend Setup

```bash
cd web
npm install
cp .env.example .env  # Optional: Configure environment variables
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

## Environment Configuration

### Frontend Environment Variables

Create a `.env` file in the `web` directory:

```env
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_APP_TITLE=Notes MD
```

### API Environment Variables

Create a `.env` file in the `api` directory:

```env
PORT=3000
NODE_ENV=development
```

## Next Steps

- [API Reference](api-reference.md) - Learn about the REST API
- [Frontend Guide](frontend-guide.md) - Understand the frontend architecture
- [Deployment](deployment.md) - Deploy to production

## Troubleshooting

### Common Issues

**Port already in use:**
- Change the port in your environment variables
- Kill the process using the port: `lsof -ti:3000 | xargs kill -9`

**Module not found errors:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

Need help? [Open an issue](https://github.com/colbylwilliams/notes-md/issues) on GitHub.