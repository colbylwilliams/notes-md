# Getting Started

This guide provides comprehensive instructions for setting up and running Notes MD locally.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Installation

### Quick Setup

1. Clone the repository
   ```bash
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md
   ```

2. Install all dependencies
   ```bash
   # Install API dependencies
   cd api
   npm install
   
   # Install web dependencies
   cd ../web
   npm install
   ```

3. Set up environment variables
   ```bash
   # API environment
   cd ../api
   cp .env.example .env
   
   # Web environment (optional)
   cd ../web
   cp .env.example .env
   ```

4. Start both services
   ```bash
   # Terminal 1 - Start API
   cd api
   npm run dev
   
   # Terminal 2 - Start web app
   cd web
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Development Workflow

TODO: Add detailed development workflow documentation

## Troubleshooting

TODO: Add common issues and solutions

## Next Steps

- [API Documentation](./api.md) - Learn about the REST API
- [Frontend Documentation](./frontend.md) - Understand the frontend architecture
- [Contributing](./contributing.md) - How to contribute to the project