# Notes-MD

A markdown note-taking web application built with React, TypeScript, and Vite.

## Features

- Create and edit notes in Markdown format
- Real-time preview of your markdown content
- Support for GitHub Flavored Markdown (GFM)
- Responsive design for desktop and mobile use
- Clean, minimalist interface

## Development

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 7 or higher)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md/src
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

To build the app for production:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Frontend build tool
- [react-markdown](https://github.com/remarkjs/react-markdown) - Markdown parser and renderer
- [remark-gfm](https://github.com/remarkjs/remark-gfm) - GitHub Flavored Markdown support

## License

This project is licensed under the MIT License - see the LICENSE file for details.
