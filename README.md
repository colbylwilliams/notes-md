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

## Tech Stack

- React
- TypeScript
- Vite
- Material UI
- React Markdown

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md
   ```

2. Install dependencies
   ```
   cd src
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```
npm run build
```

## Continuous Integration

This project uses GitHub Actions for continuous integration. The CI pipeline:

- Runs on every push to the `main` branch and all pull requests
- Tests against Node.js 18.x and 20.x
- Installs dependencies
- Runs linting checks
- Builds the application
- Runs tests (placeholder for now)

To add actual tests to the project, you can set up a testing framework like Vitest or Jest and modify the `test` script in `package.json`.

## Usage

- Click the '+' button to create a new note
- Select a note from the list to edit it
- Write your markdown in the editor
- See the rendered preview in real-time on the right panel
- Use '# Title' at the beginning of your note to set its title

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
