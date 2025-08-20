# Getting Started

This guide will help you set up Notes MD for development and understand the project structure.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager (npm comes with Node.js)
- **Git** - Version control system

## 🚀 Quick Setup

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Install Dependencies

For the frontend:
```bash
cd web
npm install
```

For the API:
```bash
cd api
npm install
```

### 3. Environment Configuration

Both the frontend and API support environment configuration:

**Frontend** (`/web/.env`):
```bash
cp web/.env.example web/.env
```

**API** (`/api/.env`):
```bash
cp api/.env.example api/.env
```

### 4. Start Development Servers

Start the API server:
```bash
cd api
npm run dev
```

In a new terminal, start the frontend:
```bash
cd web
npm run dev
```

### 5. Access the Application

- **Frontend**: http://localhost:5173
- **API**: http://localhost:3000

## 🏗️ Project Structure

```
notes-md/
├── web/                 # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API services and utilities
│   │   └── ...
│   ├── public/          # Static assets
│   └── package.json
├── api/                 # Backend Express API
│   ├── src/             # TypeScript source code
│   └── package.json
├── docs/                # Documentation
└── README.md            # Project overview
```

## 🧪 Running Tests

Frontend tests:
```bash
cd web
npm test
```

API tests:
```bash
cd api
npm test
```

## 🔧 Development Commands

### Frontend (`/web`)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run preview` - Preview production build

### API (`/api`)

- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 📋 TODO

- [ ] Add detailed environment variable documentation
- [ ] Include database setup instructions (when implemented)
- [ ] Add Docker development setup
- [ ] Include VS Code configuration recommendations
- [ ] Add debugging setup instructions
- [ ] Include common troubleshooting steps

## 🐛 Common Issues

### Issue: Port already in use
If you get a port conflict, you can change the ports in the respective `.env` files or kill the process using the port.

### Issue: Dependencies not installing
Try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

## 🔗 Next Steps

- [Frontend Documentation](frontend.md) - Learn about the React application
- [API Documentation](api.md) - Understand the REST API
- [Contributing](contributing.md) - How to contribute to the project