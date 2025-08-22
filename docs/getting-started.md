# Getting Started

This guide will help you get Notes MD up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Install Dependencies

Install dependencies for both frontend and backend:

```bash
# Install frontend dependencies
cd web
npm install

# Install backend dependencies  
cd ../api
npm install
```

### 3. Start Development Servers

Start both servers in separate terminals:

```bash
# Terminal 1: Start the API server
cd api
npm run dev
# API will be available at http://localhost:3000

# Terminal 2: Start the frontend
cd web  
npm run dev
# Frontend will be available at http://localhost:5173
```

### 4. Open the Application

Open your browser and navigate to `http://localhost:5173` to start using Notes MD.

## What's Next?

- Check out the [API Documentation](./api.md) to learn about available endpoints
- Read the [Frontend Documentation](./frontend.md) to understand the component structure
- See the [Contributing Guide](./contributing.md) if you want to contribute to the project

## Troubleshooting

### Common Issues

**Port already in use**: If you get port conflicts, you can change the ports in the environment variables.

**Dependencies not installing**: Make sure you're using Node.js v14 or higher.

For more help, please open an issue on the GitHub repository.