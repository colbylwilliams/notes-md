# Getting Started

This guide will help you get Notes MD up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Git

## Installation

### Quick Setup

<!-- TODO: Add a single command setup script -->

### Manual Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd web
   npm install
   ```

3. **Install API Dependencies**
   ```bash
   cd ../api
   npm install
   ```

4. **Configure Environment Variables**
   ```bash
   # Frontend
   cd ../web
   cp .env.example .env
   
   # API
   cd ../api
   cp .env.example .env
   ```

5. **Start Development Servers**
   
   In one terminal (API):
   ```bash
   cd api
   npm run dev
   ```
   
   In another terminal (Frontend):
   ```bash
   cd web
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - API: http://localhost:3000

## Development Workflow

<!-- TODO: Document the development workflow -->
<!-- TODO: Add information about hot reloading -->
<!-- TODO: Add debugging setup instructions -->

## Common Issues

<!-- TODO: Document common setup issues and solutions -->

## Next Steps

- Read the [API Documentation](api.md) to understand the backend
- Check out the [Contributing Guide](contributing.md) to learn how to contribute
- Review the [Deployment Guide](deployment.md) for production setup