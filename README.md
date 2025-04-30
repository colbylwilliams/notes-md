# notes-md

A markdown note-taking web application built with React, TypeScript, and Vite.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the application for production:

```bash
npm run build
```

This will generate optimized production files in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/` - Source code for the application
  - `components/` - React components
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point
- `public/` - Static assets
- `dist/` - Production build output (generated)

## Features

- Simple markdown note editor
- Real-time preview (coming soon)
- Responsive design
- Light and dark mode support

## Development Workflow

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code quality issues

### Recommended Development Tools

- [VS Code](https://code.visualstudio.com/) with the following extensions:
  - ESLint
  - Prettier
  - TypeScript support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
