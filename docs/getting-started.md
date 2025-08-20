# Getting Started

This guide will help you set up and run the Notes MD application locally.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Quick Setup

### 1. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md

# Install dependencies for both frontend and API
cd web && npm install
cd ../api && npm install
```

### 2. Environment Configuration

```bash
# Setup frontend environment (optional)
cd web
cp .env.example .env
# Edit .env with your specific configuration

# Setup API environment
cd ../api
cp .env.example .env
# Edit .env with your specific configuration
```

### 3. Start Development Servers

```bash
# Terminal 1: Start the API server
cd api
npm run dev
# API will be available at http://localhost:3000

# Terminal 2: Start the frontend server
cd web
npm run dev
# Frontend will be available at http://localhost:5173
```

## TODO

- [ ] Add detailed environment variable explanations
- [ ] Include Docker setup instructions
- [ ] Add troubleshooting section for common setup issues
- [ ] Document development workflow
- [ ] Add testing setup and guidelines
- [ ] Include code editor setup recommendations
- [ ] Add database setup instructions (when applicable)

## Next Steps

- Check out the [API Documentation](./api.md) to understand the backend
- Review the [Frontend Documentation](./frontend.md) to understand the UI
- See [Deployment Guide](./deployment.md) for production setup