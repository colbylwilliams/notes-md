# Configuration Reference

*TODO: Complete configuration documentation*

## Overview

Notes MD supports configuration through environment variables for both frontend and backend components.

## Frontend Configuration

The frontend uses Vite environment variables (prefixed with `VITE_`).

### Available Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `VITE_API_URL` | string | `http://localhost:3000` | Base URL for API endpoints |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | boolean | `false` | Enable dark mode by default |
| `VITE_ENABLE_AUTOSAVE` | boolean | `true` | Enable/disable autosave functionality |
| `VITE_APP_TITLE` | string | `Notes MD` | Application title |
| `VITE_AUTOSAVE_INTERVAL` | number | `1000` | Autosave interval in milliseconds |

### Configuration File

Create a `.env` file in the `web/` directory:

```env
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_APP_TITLE=My Notes App
```

## Backend Configuration

### Available Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `PORT` | number | `3000` | Server port |
| `NODE_ENV` | string | `development` | Environment mode |

### Configuration File

Create a `.env` file in the `api/` directory:

```env
PORT=3000
NODE_ENV=development
```

## Topics to Cover

- [ ] Detailed configuration options
- [ ] Environment-specific configurations
- [ ] Configuration validation
- [ ] Security considerations
- [ ] Performance tuning options

---

*This configuration reference is currently under development. More options and examples coming soon!*