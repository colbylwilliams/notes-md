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

Comprehensive documentation is available in the [`/docs`](docs/) folder:

- **[Documentation Overview](docs/README.md)** - Complete documentation index
- **[Getting Started Guide](docs/getting-started.md)** - User onboarding guide
- **[API Reference](docs/api-reference.md)** - Complete API documentation  
- **[Development Guide](docs/development.md)** - Developer setup and contribution guide

### Documentation TODOs

The following documentation areas need to be completed:

- [ ] **User Guide** - Comprehensive user documentation with screenshots and tutorials
- [ ] **API Reference** - Complete endpoint documentation with examples and schemas
- [ ] **Architecture Documentation** - System design, component architecture, and technical decisions
- [ ] **Deployment Guide** - Production deployment instructions and best practices
- [ ] **Contributing Guidelines** - Detailed contribution process and coding standards
- [ ] **FAQ and Troubleshooting** - Common issues and solutions
- [ ] **Configuration Guide** - Comprehensive environment variable and configuration documentation
- [ ] **Testing Documentation** - Testing strategies, writing tests, and running test suites
- [ ] **Performance Guide** - Optimization techniques and performance monitoring
- [ ] **Security Documentation** - Security best practices and vulnerability management

*Contributions to documentation are welcome! Please see the [Development Guide](docs/development.md) for more information.*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
