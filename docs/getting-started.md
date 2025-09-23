# Getting Started

This guide will help you set up Notes MD for development on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for version control

## Project Structure

Notes MD is organized as a monorepo with two main components:

```
notes-md/
├── web/          # React frontend (Vite, TypeScript, Material-UI)
├── api/          # Express.js backend (TypeScript, REST API)
├── docs/         # Documentation (you are here!)
└── README.md     # Main project README
```

## Development Setup

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

#### Configure Environment Variables (Optional)

Copy the example environment file:

```bash
cp .env.example .env
```

Edit the `.env` file to customize your development environment. See [Configuration](./configuration.md) for details.

#### Start the Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. API Setup

Open a new terminal and navigate to the api directory:

```bash
cd api
npm install
```

#### Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit the `.env` file with your specific configuration.

#### Start the API Server

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## Available Scripts

### Frontend (web/)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Vitest
- `npm run preview` - Preview production build

### Backend (api/)

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Jest

## Development Workflow

1. **Start both servers**: Run the frontend and API development servers in separate terminals
2. **Make changes**: Edit files and see changes reflected automatically
3. **Test your changes**: Use the test commands to ensure your changes work correctly
4. **Lint your code**: Run linting to maintain code quality

## Next Steps

- Explore the [API Documentation](./api.md) to understand available endpoints
- Review the [Frontend Documentation](./frontend.md) to understand the React architecture
- Check out the main [README.md](../README.md) for more project information

## Troubleshooting

### Common Issues

**Port conflicts**: If you see "port already in use" errors, make sure no other applications are running on ports 3000 (API) or 5173 (frontend).

**Node version**: Ensure you're using Node.js v14 or higher. Check with `node --version`.

**Dependencies**: If you encounter dependency issues, try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

For more help, see the main project [README.md](../README.md) or open an issue on GitHub.