# Getting Started

This guide provides detailed instructions for setting up and running the Notes MD application in your local development environment.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager (npm comes with Node.js)
- **Git** - Version control system

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
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. API Setup

In a new terminal:

```bash
cd api
npm install
npm run dev
```

The API will be available at `http://localhost:3000`

## Environment Configuration

### Frontend Environment Variables

Create a `.env` file in the `/web` directory:

```env
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_ENABLE_AUTOSAVE=true
VITE_APP_TITLE=Notes MD
VITE_AUTOSAVE_INTERVAL=5000
```

### API Environment Variables

Create a `.env` file in the `/api` directory:

```env
PORT=3000
NODE_ENV=development
```

## Verification

After setup, verify everything is working:

1. Open `http://localhost:5173` in your browser
2. You should see the Notes MD interface
3. Try creating a new note
4. Verify the real-time markdown preview works

## Troubleshooting

### Common Issues

**Port already in use:**
- Change the port in the respective `.env` file
- Or kill the process using the port: `lsof -ti:PORT_NUMBER | xargs kill -9`

**Dependencies not installing:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then reinstall

**CORS errors:**
- Ensure the API URL in the frontend `.env` matches the running API server

## Next Steps

- Read the [Architecture Overview](./architecture.md)
- Explore the [API Documentation](./api.md)  
- Review [Development Guidelines](./development.md)

## TODO: Getting Started Improvements

- [ ] Add Docker setup instructions
- [ ] Document database setup (when implemented)
- [ ] Add IDE/editor setup recommendations
- [ ] Include performance optimization tips
- [ ] Add screenshots of setup steps
- [ ] Document common development workflows