# Notes MD

[![CI](https://github.com/colbylwilliams/notes-md/actions/workflows/ci.yml/badge.svg)](https://github.com/colbylwilliams/notes-md/actions/workflows/ci.yml)

A web application for taking and managing notes in Markdown format.

## Features

- Create, edit, and delete markdown notes
- Real-time markdown preview
- Automatic note title extraction from content
- Dark mode support
- Local storage for persistence
- Responsive design for various screen sizes
- REST API for serving notes

## Tech Stack

- React
- TypeScript
- Vite
- Material UI
- React Markdown
- Express (REST API)

## Project Structure

- `/web` - Frontend application (React, TypeScript, Vite)
- `/api` - Backend REST API (Express, TypeScript)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Frontend Installation

1. Clone the repository
   ```
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md
   ```

2. Install dependencies
   ```
   cd web
   npm install
   ```

3. Configure environment variables (optional)
   ```
   cp .env.example .env
   ```
   Modify the `.env` file with your specific configuration.

4. Start the development server
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### API Installation

1. Install dependencies
   ```
   cd api
   npm install
   ```

2. Configure environment variables
   ```
   cp .env.example .env
   ```
   Modify the `.env` file with your specific configuration.

3. Start the development server
   ```
   npm run dev
   ```

4. The API will be available at `http://localhost:3000`

### Building for Production

```
# Frontend
cd web
npm run build

# API
cd api
npm run build
npm start
```

## Usage

- Click the '+' button to create a new note
- Select a note from the list to edit it
- Write your markdown in the editor
- See the rendered preview in real-time on the right panel
- Use '# Title' at the beginning of your note to set its title
- Use the API endpoints to manage notes programmatically

## Environment Variables

### Frontend

Notes MD supports configuration via environment variables using `.env` files. You can create a `.env` file in the project root to customize your development environment.

Example variables can be found in the `.env.example` file:

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Base URL for API endpoints |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Set to 'true' to enable dark mode by default |
| `VITE_ENABLE_AUTOSAVE` | Enable/disable autosave functionality |
| `VITE_APP_TITLE` | Application title |
| `VITE_AUTOSAVE_INTERVAL` | Time interval for autosave in milliseconds |

**Note:** Only variables prefixed with `VITE_` will be exposed to your client-side code.

### API

| Variable | Description |
| --- | --- |
| `PORT` | Port for the API server (default: 3000) |
| `NODE_ENV` | Environment (development, production) |

## Docker Deployment

### Container Images

Both the web application and API are available as Docker images and are automatically published to GitHub Container Registry when changes are merged to the main branch.

**Images:**
- `ghcr.io/colbylwilliams/notes-md-web:latest` - React frontend served by nginx
- `ghcr.io/colbylwilliams/notes-md-api:latest` - Express.js API server

### Running with Docker

**Web Application:**
```bash
docker run -d -p 80:80 ghcr.io/colbylwilliams/notes-md-web:latest
```

**API Server:**
```bash
docker run -d -p 3000:3000 ghcr.io/colbylwilliams/notes-md-api:latest
```

**Both together:**
```bash
# Run API
docker run -d --name notes-api -p 3000:3000 ghcr.io/colbylwilliams/notes-md-api:latest

# Run Web (configure it to use the API)
docker run -d --name notes-web -p 80:80 ghcr.io/colbylwilliams/notes-md-web:latest
```

### Docker Compose

For easier deployment, you can use Docker Compose:

```yaml
version: '3.8'
services:
  api:
    image: ghcr.io/colbylwilliams/notes-md-api:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000

  web:
    image: ghcr.io/colbylwilliams/notes-md-web:latest
    ports:
      - "80:80"
    depends_on:
      - api
```

### Building Images Locally

To build the images locally:

```bash
# Build web image
cd web
docker build -t notes-md-web .

# Build API image
cd api
docker build -t notes-md-api .
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
