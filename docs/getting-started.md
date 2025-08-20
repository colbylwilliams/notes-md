# Getting Started with Notes MD

This guide will help you get Notes MD up and running quickly for development or production use.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Quick Start

### For Users

<!-- TODO: Add direct deployment instructions for users who just want to use the app -->

### For Developers

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
   
   # Backend (in new terminal)
   cd ../api
   npm install
   ```

3. **Start development servers**
   ```bash
   # Frontend (port 5173)
   cd web
   npm run dev
   
   # Backend (port 3000)
   cd api
   npm run dev
   ```

4. **Open the application**
   - Frontend: http://localhost:5173
   - API: http://localhost:3000

## Next Steps

- Read the [Frontend Development Guide](./frontend.md) for React development
- Check the [API Documentation](./api.md) for backend development
- See [Deployment Guide](./deployment.md) for production setup

## TODO

- [ ] Add Docker setup instructions
- [ ] Create one-command setup script
- [ ] Add database setup instructions (when implemented)
- [ ] Document common issues and solutions
- [ ] Add video walkthrough