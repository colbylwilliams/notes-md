# Getting Started

This guide will help you get started with Notes MD development and usage.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Git

## Quick Setup

### 1. Clone the Repository
```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
cd web
npm install

# Install API dependencies
cd ../api
npm install
```

### 3. Start Development Servers
```bash
# Start the API server (Terminal 1)
cd api
npm run dev

# Start the frontend server (Terminal 2)
cd web
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:5173
- API: http://localhost:3000

## Next Steps

- Read the [Development Guide](./development.md) for detailed development workflows
- Check out the [API Documentation](./api/README.md) for API endpoints
- Explore the [Frontend Documentation](./frontend/README.md) for component details

## TODO

- [ ] Add detailed troubleshooting section
- [ ] Include environment setup variations
- [ ] Add database setup instructions if needed
- [ ] Document testing setup
- [ ] Add screenshots of setup process