# Development Setup

This guide walks you through setting up a development environment for Notes MD.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager (comes with Node.js)
- **Git** - Version control system

## Quick Setup

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Install Dependencies

Install dependencies for both frontend and backend:

```bash
# Frontend dependencies
cd web
npm install

# Backend dependencies  
cd ../api
npm install
```

### 3. Environment Configuration

#### Frontend Environment (Optional)
```bash
cd web
cp .env.example .env
```

Edit the `.env` file with your configuration:
```env
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_ENABLE_AUTOSAVE=true
```

#### Backend Environment
```bash
cd api  
cp .env.example .env
```

Edit the `.env` file:
```env
PORT=3000
NODE_ENV=development
```

### 4. Start Development Servers

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd api
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd web  
npm run dev
```

### 5. Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000

## Development Workflow

### Code Quality

Before committing, run linting and tests:

```bash
# Frontend
cd web
npm run lint
npm run test

# Backend
cd api
npm run lint  
npm run test
```

### Building for Production

```bash
# Frontend
cd web
npm run build

# Backend
cd api
npm run build
npm start
```

## Common Issues

### Port Conflicts
If ports 3000 or 5173 are in use, you can change them:
- Backend: Update `PORT` in `api/.env`
- Frontend: Update the port in `web/vite.config.ts`

### Module Not Found
If you encounter module errors:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## TODO

- [ ] Add Docker development setup
- [ ] Document database setup when implemented
- [ ] Add VS Code workspace configuration
- [ ] Document recommended extensions
- [ ] Add hot reload troubleshooting
- [ ] Document environment variable validation