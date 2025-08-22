# Getting Started

This guide will help you set up Notes MD for development or deployment.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Git

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Setup Frontend

```bash
cd web
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. Setup API (Optional)

```bash
cd ../api
npm install
cp .env.example .env
npm run dev
```

The API will be available at `http://localhost:3000`

## Development Workflow

1. Make changes to the code
2. Test your changes locally
3. Run linting: `npm run lint`
4. Build the project: `npm run build`
5. Submit a pull request

## Environment Configuration

### Frontend Environment Variables

Create a `.env` file in the `web` directory:

```env
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_ENABLE_AUTOSAVE=true
VITE_APP_TITLE=Notes MD
VITE_AUTOSAVE_INTERVAL=5000
```

### API Environment Variables

Create a `.env` file in the `api` directory:

```env
PORT=3000
NODE_ENV=development
```

## Troubleshooting

Common issues and solutions will be documented here.

---

*TODO: Add more detailed setup instructions for different operating systems.*
*TODO: Add troubleshooting section with common issues.*
*TODO: Add deployment instructions for production environments.*