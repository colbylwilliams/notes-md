# Configuration Guide

## Environment Variables

Notes MD supports configuration through environment variables using `.env` files.

## Frontend Configuration

The frontend uses Vite's environment variable system. All variables must be prefixed with `VITE_` to be accessible in the client-side code.

### Available Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `VITE_API_URL` | string | `http://localhost:3000` | Base URL for API endpoints |
| `VITE_APP_TITLE` | string | `Notes MD` | Application title shown in the header |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | boolean | `false` | Enable dark mode by default |
| `VITE_ENABLE_AUTOSAVE` | boolean | `true` | Enable automatic saving of notes |
| `VITE_AUTOSAVE_INTERVAL` | number | `5000` | Autosave interval in milliseconds |

### Example `.env` file

```env
# API Configuration
VITE_API_URL=http://localhost:3000

# App Configuration
VITE_APP_TITLE=My Notes App
VITE_ENABLE_DARK_MODE_BY_DEFAULT=true
VITE_ENABLE_AUTOSAVE=true
VITE_AUTOSAVE_INTERVAL=3000
```

## API Configuration

### Available Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `PORT` | number | `3000` | Port for the API server |
| `NODE_ENV` | string | `development` | Node.js environment |
| `CORS_ORIGIN` | string | `*` | CORS allowed origins |

### Example `.env` file

```env
# Server Configuration
PORT=3000
NODE_ENV=production

# CORS Configuration
CORS_ORIGIN=http://localhost:5173,https://your-domain.com
```

## Advanced Configuration

TODO: Add advanced configuration topics:

- [ ] Custom themes and styling
- [ ] Database configuration (when implemented)
- [ ] Authentication settings (when implemented)
- [ ] Logging configuration
- [ ] Performance tuning options

## Configuration Best Practices

1. **Never commit `.env` files** - They should be in `.gitignore`
2. **Use `.env.example` files** - Provide templates for required variables
3. **Document all variables** - Keep this guide updated
4. **Use environment-specific configs** - Different settings for dev/staging/prod
5. **Validate configuration** - Check for required variables on startup

## Deployment Configuration

TODO: Add deployment-specific configuration guidance