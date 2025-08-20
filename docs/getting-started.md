# Getting Started with Notes MD

This guide provides detailed instructions for setting up and running Notes MD in your development environment.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Installation

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md
   ```

2. Install dependencies for both frontend and API:
   ```bash
   # Install frontend dependencies
   cd web
   npm install
   
   # Install API dependencies
   cd ../api
   npm install
   ```

3. Start the development servers:
   ```bash
   # Start the API server (in api directory)
   npm run dev
   
   # In a new terminal, start the web application (in web directory)
   cd ../web
   npm run dev
   ```

4. Open your browser to `http://localhost:5173` to access the application.

## Configuration

### Environment Variables

TODO: Document all available environment variables and their purposes.

### Development Setup

TODO: Add detailed development environment setup instructions.

## Next Steps

- Read the [API Documentation](./api.md) to understand the backend
- Check the [Architecture Overview](./architecture.md) to understand the application structure
- Review [Contributing Guidelines](./contributing.md) if you want to contribute