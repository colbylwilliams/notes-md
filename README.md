# Notes MD

<!-- TODO: Add project badges (build status, version, license) -->
<!-- TODO: Add demo link and screenshots -->

A web application for taking and managing notes in Markdown format.

## 📚 Documentation

For comprehensive documentation, see the [docs/](./docs/) folder:
- [User Guide](./docs/user-guide/) - How to use Notes MD
- [Developer Guide](./docs/developer-guide/) - Development setup and contribution
- [API Documentation](./docs/api/) - REST API reference
- [Deployment Guide](./docs/deployment/) - Deployment instructions

<!-- TODO: Add quick demo GIF or video -->

## Features

- Create, edit, and delete markdown notes
- Real-time markdown preview
- Automatic note title extraction from content
- Dark mode support
- Local storage for persistence
- Responsive design for various screen sizes
- REST API for serving notes

<!-- TODO: Add screenshots of key features -->
<!-- TODO: Implement user authentication and multi-user support -->
<!-- TODO: Add note search and filtering functionality -->
<!-- TODO: Implement note tagging and categorization -->
<!-- TODO: Add export functionality (PDF, HTML, etc.) -->
<!-- TODO: Implement collaborative editing features -->

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
- `/docs` - Comprehensive project documentation

<!-- TODO: Add database schema documentation -->
<!-- TODO: Document shared utilities and types -->
<!-- TODO: Add testing directory structure -->

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

<!-- TODO: Add Docker-based build instructions -->
<!-- TODO: Document environment-specific build configurations -->

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

<!-- TODO: Add keyboard shortcuts documentation -->
<!-- TODO: Create video tutorials for common workflows -->
<!-- TODO: Document advanced markdown features supported -->

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

<!-- TODO: Add database connection environment variables -->
<!-- TODO: Document authentication-related environment variables -->
<!-- TODO: Add logging and monitoring configuration variables -->

## Contributing

We welcome contributions! Please see our [Contributing Guide](./docs/contributing/) for details on:
- Setting up your development environment
- Code style and standards
- Submitting pull requests
- Reporting issues

<!-- TODO: Add contributor recognition section -->
<!-- TODO: Create issue and PR templates -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
