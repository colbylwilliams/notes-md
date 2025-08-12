# Getting Started

This guide will help you get Notes MD up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download from git-scm.com](https://git-scm.com/)

### System Requirements
- Operating System: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- RAM: 4GB minimum, 8GB recommended
- Storage: 1GB free space for dependencies

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Frontend Setup
Navigate to the web directory and install dependencies:
```bash
cd web
npm install
```

Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. API Setup
In a new terminal, navigate to the API directory:
```bash
cd api
npm install
```

Copy the environment configuration file:
```bash
cp .env.example .env
```

Start the API development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## Detailed Installation

### Environment Configuration

#### API Environment Variables
The API uses the following environment variables (configured in `api/.env`):

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Port for the API server | 3000 |
| `NODE_ENV` | Environment mode | development |

#### Frontend Environment Variables
The frontend supports optional environment variables. Create a `.env` file in the `web` directory:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Base URL for API endpoints | http://localhost:3000 |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Enable dark mode by default | false |
| `VITE_APP_TITLE` | Application title | Notes MD |

### Development vs Production Setup

#### Development
- Frontend runs on Vite dev server with hot reload
- API runs with `ts-node-dev` for automatic TypeScript compilation
- In-memory storage for notes (data resets on server restart)

#### Production
```bash
# Build frontend
cd web
npm run build

# Build and start API
cd api
npm run build
npm start
```

## Verification

After setup, verify everything is working:

1. **Frontend**: Open `http://localhost:5173` in your browser
2. **API**: Open `http://localhost:3000` in your browser - you should see a JSON response
3. **Integration**: Create a note in the frontend and verify it appears in the note list

## Troubleshooting

### Common Issues

#### Port Already in Use
If ports 3000 or 5173 are already in use:
```bash
# For API (change PORT in .env file)
PORT=3001 npm run dev

# For frontend
npm run dev -- --port 5174
```

#### Module Not Found Errors
Ensure you've run `npm install` in both directories:
```bash
cd web && npm install
cd ../api && npm install
```

#### TypeScript Compilation Errors
Update TypeScript if you encounter compilation issues:
```bash
npm install -g typescript@latest
```

#### CORS Issues
If you encounter CORS errors, ensure the API is running and the `VITE_API_URL` environment variable is correctly set.

### Performance Tips
- Use `npm ci` instead of `npm install` for faster, reliable installs
- Clear browser cache if you encounter stale data issues
- Restart both servers if you experience connectivity issues

## Next Steps

After installation, check out the [User Guide](./user-guide.md) to learn how to use Notes MD.