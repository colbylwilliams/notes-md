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
- `/docs` - Project documentation

## Documentation

📚 **[View Complete Documentation](docs/README.md)**

- [Getting Started Guide](docs/getting-started.md) - Detailed setup instructions
- [API Reference](docs/api-reference.md) - Complete API documentation
- [Frontend Development Guide](docs/frontend-guide.md) - Frontend architecture and patterns
- [Deployment Guide](docs/deployment.md) - Production deployment instructions
- [Contributing Guidelines](docs/contributing.md) - How to contribute to the project

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

## Development Status & TODOs

### Current Status
- ✅ Basic note creation, editing, and deletion
- ✅ Real-time markdown preview
- ✅ Dark mode support
- ✅ Local storage persistence
- ✅ REST API with Express

### Planned Features & TODOs

#### High Priority
- [ ] **Authentication & User Management** - Add user accounts and secure note access
- [ ] **Data Persistence** - Replace local storage with proper database (PostgreSQL/MongoDB)
- [ ] **Note Search & Filtering** - Full-text search and tagging system
- [ ] **Export/Import** - Support for various formats (PDF, HTML, JSON)

#### Medium Priority  
- [ ] **Real-time Collaboration** - WebSocket-based collaborative editing
- [ ] **Mobile App** - React Native or PWA implementation
- [ ] **Note Sharing** - Public/private sharing with permissions
- [ ] **Version History** - Track and restore note revisions

#### Documentation TODOs
- [ ] **API Documentation** - Complete OpenAPI/Swagger specification
- [ ] **Architecture Diagrams** - System architecture and data flow diagrams
- [ ] **Deployment Guides** - Docker, Kubernetes, and cloud platform guides
- [ ] **Testing Documentation** - Testing strategies and coverage reports
- [ ] **Security Documentation** - Security best practices and audit results

#### Infrastructure TODOs
- [ ] **CI/CD Pipeline** - Automated testing, building, and deployment
- [ ] **Monitoring & Logging** - Application performance monitoring
- [ ] **Error Tracking** - Centralized error reporting and alerting
- [ ] **Load Testing** - Performance benchmarks and optimization

### Contributing
See our [Contributing Guidelines](docs/contributing.md) for information on how to contribute to these features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
