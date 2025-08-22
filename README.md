# Notes MD



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

## Documentation

For detailed documentation, please visit the [`/docs`](docs/) directory:

- 📖 [Documentation Overview](docs/index.md) - Start here for comprehensive guides
- 🚀 [Development Setup](docs/development/setup.md) - Detailed development environment setup
- 🤝 [Contributing Guidelines](docs/development/contributing.md) - How to contribute to the project
- 🔗 [API Reference](docs/api/endpoints.md) - Detailed API documentation and examples
- 🚀 [Deployment Guide](docs/deployment/production.md) - Production deployment strategies
- 🏗️ [Architecture Overview](docs/architecture.md) - System design and technical architecture

### Documentation TODOs

The documentation framework has been established with placeholder content. Key areas that need completion:

- [ ] Complete development environment setup guides with troubleshooting
- [ ] Expand API documentation with comprehensive examples and schemas
- [ ] Add detailed deployment guides for various platforms (Docker, Kubernetes, cloud providers)
- [ ] Create architecture diagrams and detailed system design documentation
- [ ] Add contribution guidelines, coding standards, and community guidelines
- [ ] Document testing strategies and requirements
- [ ] Add user guides and tutorials for the application features
- [ ] Create troubleshooting guides and FAQ sections

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
