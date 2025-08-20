# Frontend Documentation

The Notes MD frontend is a modern React application built with TypeScript, Vite, and Material-UI that provides an intuitive interface for creating and managing markdown notes.

## 🏗️ Architecture

The frontend follows a component-based architecture with the following key elements:

- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **Material-UI (MUI)** for consistent UI components
- **React Markdown** for rendering markdown content

## 🚀 Quick Start

```bash
cd web
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📁 Project Structure

```
web/
├── src/
│   ├── components/          # React components
│   │   ├── NoteEditor.tsx   # Markdown editor component
│   │   ├── NoteList.tsx     # Notes sidebar component
│   │   └── NotePreview.tsx  # Markdown preview component
│   ├── services/            # API services and utilities
│   │   └── notes/           # Notes service
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── dist/                    # Built application (generated)
└── package.json
```

## 🧩 Key Components

### App.tsx
The main application component that manages:
- Application state (notes, selected note, theme)
- Dark mode toggle
- Layout structure

### NoteEditor.tsx
Markdown editor component featuring:
- Real-time editing
- Automatic title extraction from content
- Monospace font for better markdown editing

### NoteList.tsx
Sidebar component that displays:
- List of all notes
- Add new note functionality
- Note selection
- Delete note functionality

### NotePreview.tsx
Real-time markdown preview component using:
- `@uiw/react-markdown-preview` for rendering
- Synchronized scrolling (planned)

## ⚙️ Environment Configuration

The frontend supports configuration via environment variables (must be prefixed with `VITE_`):

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_APP_TITLE` | Application title | `Notes MD` |
| `VITE_API_URL` | API base URL | `http://localhost:3000/api` |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | Enable dark mode by default | `false` |
| `VITE_ENABLE_AUTOSAVE` | Enable autosave functionality | `true` |
| `VITE_AUTOSAVE_INTERVAL` | Autosave interval in milliseconds | `5000` |

### Environment Setup

Create a `.env` file in the `/web` directory:

```bash
cp .env.example .env
```

Example `.env`:
```env
VITE_APP_TITLE=My Notes App
VITE_ENABLE_DARK_MODE_BY_DEFAULT=true
VITE_API_URL=http://localhost:3000/api
```

## 🎨 Theming

The application uses Material-UI's theming system with support for:
- Light and dark modes
- Consistent color palette
- Typography system
- Responsive breakpoints

### Dark Mode

Dark mode can be:
- Toggled by users via the switch in the header
- Set as default via environment variable
- Persisted in local storage (planned)

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests with Vitest |
| `npm run preview` | Preview production build |

## 🧪 Testing

The frontend uses **Vitest** for testing:

```bash
npm test
```

### Testing Structure

- Unit tests for components
- Environment variable tests
- Service layer tests (planned)

Test files are located in:
- `src/tests/` directory
- Alongside components as `*.test.tsx`

## 📱 Responsive Design

The application is designed to work on various screen sizes:

- **Desktop**: Three-column layout (notes list, editor, preview)
- **Tablet**: Collapsible layout (planned)
- **Mobile**: Single-column with navigation (planned)

## 📋 TODO

### Features
- [ ] Implement note search functionality
- [ ] Add note tags/categories
- [ ] Implement note sharing
- [ ] Add export functionality (PDF, HTML)
- [ ] Implement offline support with service workers
- [ ] Add keyboard shortcuts
- [ ] Implement drag-and-drop for note organization

### Technical Improvements
- [ ] Add state management (Redux/Zustand)
- [ ] Implement proper error boundaries
- [ ] Add loading states and skeletons
- [ ] Implement virtual scrolling for large note lists
- [ ] Add internationalization (i18n)
- [ ] Implement accessibility improvements
- [ ] Add performance monitoring

### UI/UX Enhancements
- [ ] Improve markdown editor with syntax highlighting
- [ ] Add split-screen resize functionality
- [ ] Implement note preview synced scrolling
- [ ] Add animation and transitions
- [ ] Implement better mobile responsive design
- [ ] Add customizable themes

## 🔧 Build Configuration

### Vite Configuration

The project uses Vite for building with:
- TypeScript support
- React plugin
- ESLint integration
- Hot module replacement

### TypeScript Configuration

Multiple TypeScript configurations:
- `tsconfig.json` - Main configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js specific settings

## 🚀 Performance

### Current Optimizations
- Vite's fast HMR
- React 19 concurrent features
- Material-UI tree shaking

### Planned Optimizations
- [ ] Code splitting by routes
- [ ] Lazy loading of components
- [ ] Memoization of expensive computations
- [ ] Virtual scrolling for large lists
- [ ] Service worker for caching

## 🔗 Related Documentation

- [API Documentation](api.md) - Backend API that the frontend consumes
- [Getting Started](getting-started.md) - Setup and installation guide
- [Deployment Guide](deployment.md) - Deploying the frontend to production