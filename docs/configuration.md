# Configuration Reference

This document provides a comprehensive reference for all configuration options available in Notes MD.

## Environment Variables

### Frontend Configuration

The frontend uses Vite for building and development. Environment variables must be prefixed with `VITE_` to be accessible in the client-side code.

#### Required Variables

*Currently, no variables are required for basic functionality.*

#### Optional Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `VITE_API_URL` | string | `http://localhost:3000/api` | Base URL for API endpoints |
| `VITE_APP_TITLE` | string | `Notes MD - Markdown Note Taking` | Application title shown in browser tab |
| `VITE_ENABLE_DARK_MODE_BY_DEFAULT` | boolean | `false` | Enable dark mode by default |
| `VITE_ENABLE_AUTOSAVE` | boolean | `true` | Enable automatic saving of notes |
| `VITE_AUTOSAVE_INTERVAL` | number | `5000` | Auto-save interval in milliseconds |
| `VITE_MAX_NOTE_LENGTH` | number | `100000` | Maximum note content length in characters |
| `VITE_SHOW_WORD_COUNT` | boolean | `false` | Show word count in editor |
| `VITE_ENABLE_SPELLCHECK` | boolean | `true` | Enable browser spellcheck in editor |

#### Example Frontend `.env` File

```bash
# API Configuration
VITE_API_URL=https://api.example.com/api

# Application Settings
VITE_APP_TITLE=My Notes App
VITE_ENABLE_DARK_MODE_BY_DEFAULT=true
VITE_ENABLE_AUTOSAVE=true
VITE_AUTOSAVE_INTERVAL=3000

# Editor Settings
VITE_MAX_NOTE_LENGTH=50000
VITE_SHOW_WORD_COUNT=true
VITE_ENABLE_SPELLCHECK=false
```

### Backend Configuration

The backend API uses standard Node.js environment variables.

#### Required Variables

*Currently, no variables are required for basic functionality.*

#### Optional Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `PORT` | number | `3000` | Port number for the API server |
| `NODE_ENV` | string | `development` | Node.js environment (development, production, test) |
| `CORS_ORIGIN` | string | `*` | CORS allowed origins (comma-separated) |
| `LOG_LEVEL` | string | `info` | Logging level (error, warn, info, debug) |
| `MAX_REQUEST_SIZE` | string | `10mb` | Maximum request body size |
| `RATE_LIMIT_WINDOW` | number | `900000` | Rate limiting window in milliseconds (15 min) |
| `RATE_LIMIT_MAX` | number | `100` | Maximum requests per window |

#### Database Configuration (Future)

When database support is added, these variables will be used:

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `DATABASE_URL` | string | - | Database connection string |
| `DB_HOST` | string | `localhost` | Database host |
| `DB_PORT` | number | `5432` | Database port |
| `DB_NAME` | string | `notes_md` | Database name |
| `DB_USER` | string | - | Database username |
| `DB_PASSWORD` | string | - | Database password |
| `DB_SSL` | boolean | `false` | Enable SSL for database connection |

#### Example Backend `.env` File

```bash
# Server Configuration
PORT=3000
NODE_ENV=production

# CORS Configuration
CORS_ORIGIN=https://mynotes.example.com,https://admin.example.com

# Logging
LOG_LEVEL=warn

# Rate Limiting
RATE_LIMIT_WINDOW=600000
RATE_LIMIT_MAX=50

# Security
MAX_REQUEST_SIZE=5mb

# Future Database Configuration
# DATABASE_URL=postgresql://user:password@localhost:5432/notes_md
# DB_SSL=true
```

## Build Configuration

### Frontend Build Configuration

#### Vite Configuration (`web/vite.config.ts`)

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

#### TypeScript Configuration (`web/tsconfig.json`)

Key configuration options:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Backend Build Configuration

#### TypeScript Configuration (`api/tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  }
}
```

## Development Configuration

### ESLint Configuration

#### Frontend ESLint (`web/eslint.config.js`)

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

### VS Code Configuration

#### Recommended Settings (`.vscode/settings.json`)

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.md": "markdown"
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

#### Recommended Extensions (`.vscode/extensions.json`)

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag"
  ]
}
```

## Runtime Configuration

### Frontend Runtime Settings

These settings can be modified at runtime through the UI (future feature):

- Theme preference (light/dark mode)
- Auto-save settings
- Editor preferences
- Preview panel visibility

### API Runtime Settings

Currently, all API settings require a restart to take effect. Future versions may support hot-reloading of configuration.

## Security Configuration

### Content Security Policy

Recommended CSP headers for the frontend:

```
Content-Security-Policy: default-src 'self'; 
  script-src 'self' 'unsafe-inline'; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data: https:; 
  font-src 'self' data:; 
  connect-src 'self' https:
```

### CORS Configuration

For production, configure specific origins:

```javascript
// In API server
app.use(cors({
  origin: [
    'https://mynotes.example.com',
    'https://admin.example.com'
  ],
  credentials: true
}));
```

## Logging Configuration

### Log Levels

- `error`: Error conditions
- `warn`: Warning conditions
- `info`: Informational messages
- `debug`: Debug-level messages

### Log Format

Logs are formatted as JSON in production:

```json
{
  "timestamp": "2023-01-01T12:00:00.000Z",
  "level": "info",
  "message": "Server started",
  "meta": {
    "port": 3000,
    "env": "production"
  }
}
```

## Performance Configuration

### Frontend Performance

- Bundle splitting enabled by default
- Tree shaking for unused code
- Asset optimization (images, fonts)
- Lazy loading for components (future)

### Backend Performance

- Request compression enabled
- Response caching headers
- Connection pooling (when database added)
- Rate limiting to prevent abuse

## Monitoring Configuration

### Health Check Endpoints

- `GET /health` - Basic health check
- `GET /metrics` - Application metrics (future)

### Error Tracking

Configuration for error tracking services (future):

```bash
SENTRY_DSN=https://your-sentry-dsn.ingest.sentry.io
ERROR_REPORTING_ENABLED=true
```

## Configuration Validation

Environment variables are validated at startup. Invalid configurations will prevent the application from starting with descriptive error messages.

---

*This configuration reference will be updated as new configuration options are added.*