# Getting Started

This guide will help you set up Notes MD for development on your local machine.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Quick Setup

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
   
   # Backend API
   cd ../api
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Frontend (optional)
   cd web
   cp .env.example .env
   
   # API
   cd ../api
   cp .env.example .env
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Frontend
   cd web
   npm run dev
   
   # Terminal 2 - API  
   cd api
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - API: http://localhost:3000

## Development Workflow

TODO: Add information about:
- Code style and linting
- Testing procedures
- Git workflow and branching strategy
- Pull request process

## Troubleshooting

TODO: Add common issues and solutions

## Next Steps

- [Frontend Development](./frontend/index.md)
- [API Development](./api/index.md)
- [Deployment Guide](./deployment.md)