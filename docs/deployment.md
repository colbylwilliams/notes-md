# Deployment Guide

This guide covers deploying Notes MD to various environments and platforms.

## Prerequisites

### System Requirements
- **Node.js:** v20 or higher (LTS recommended)
- **npm:** v9+ (comes with Node.js)
- **Operating System:** Windows, macOS, or Linux
- **Memory:** 2GB RAM minimum for development
- **Storage:** 1GB free space for dependencies

### Environment Setup
1. Ensure Node.js and npm are installed
2. Clone the repository
3. Install dependencies for both frontend and API

```bash
# Install frontend dependencies
cd web
npm install

# Install API dependencies  
cd ../api
npm install
```

## Environment Configuration

### API Environment Variables

Create `.env` file in `/api` directory:

```env
# Required
PORT=3000
NODE_ENV=development

# Optional
# No additional variables required for current implementation
```

### Frontend Environment Variables

Currently, the frontend does not require environment variables for basic operation. For future API integration, create `.env` file in `/web` directory:

```env
# Optional - for future API integration
VITE_API_URL=http://localhost:3000
```

**Note:** Vite only exposes variables prefixed with `VITE_` to the client-side code.

## Development Deployment

### Local Development Setup

1. **Start the API server (Terminal 1):**
```bash
cd api
npm run dev
```
This starts the API on `http://localhost:3000` with hot reload enabled.

2. **Start the frontend development server (Terminal 2):**
```bash
cd web  
npm run dev
```
This starts the frontend on `http://localhost:5173` with hot module replacement.

### Development Features
- **Hot Reload:** Both frontend and API automatically reload on file changes
- **TypeScript Compilation:** Real-time TypeScript checking and compilation
- **ESLint:** Automatic linting feedback in development
- **Source Maps:** Full debugging support in browser dev tools

## Production Deployment

### Build Process

#### Frontend Build
```bash
cd web
npm run build
```
- Creates optimized static files in `web/dist/`
- Includes TypeScript compilation, bundling, and minification
- Generates source maps for debugging
- Assets are fingerprinted for cache busting

#### API Build
```bash
cd api
npm run build
npm start
```
- Compiles TypeScript to JavaScript in `api/dist/`
- Runs the production server from compiled code
- Uses Node.js native performance optimizations

### Docker Deployment

#### Frontend Dockerfile
Create `web/Dockerfile`:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### API Dockerfile
Create `api/Dockerfile`:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Docker Compose
Create `docker-compose.yml` in project root:
```yaml
version: '3.8'
services:
  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
      
  web:
    build: ./web
    ports:
      - "80:80"
    depends_on:
      - api
```

### Cloud Platform Deployment

#### Vercel (Frontend)
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Set root directory: `web`
5. Environment variables: None required for basic operation

#### Railway (API)
1. Connect GitHub repository to Railway
2. Set root directory: `api`
3. Environment variables:
   - `NODE_ENV=production`
   - `PORT` (automatically set by Railway)

#### Render (API)
1. Connect GitHub repository to Render
2. Build command: `npm install && npm run build`
3. Start command: `npm start`
4. Environment variables:
   - `NODE_ENV=production`

## Database Setup

### Current Implementation
The application currently uses:
- **Frontend:** localStorage for client-side persistence
- **API:** In-memory array for development/testing

### Future Database Integration

#### Recommended Options
1. **SQLite** - Simple file-based database, good for single-user deployments
2. **PostgreSQL** - Full-featured database for production use
3. **MongoDB** - Document database for flexible schema

#### Migration Strategy
When implementing a database:
1. Create database connection module in `api/src/database/`
2. Replace in-memory storage in `api/src/controllers/notes.ts`
3. Add database connection string to environment variables
4. Implement migration scripts for schema updates

## Monitoring and Logging

### Development Monitoring
- **Console Logging:** Both frontend and API log to console
- **Network Tab:** Use browser dev tools to monitor API requests
- **React DevTools:** Debug component state and props

### Production Monitoring
Recommended tools:
- **Error Tracking:** Sentry, Bugsnag, or Rollbar
- **Performance:** New Relic, DataDog, or Vercel Analytics
- **Uptime:** UptimeRobot, Pingdom, or StatusCake
- **Logs:** LogRocket, Loggly, or CloudWatch Logs

## SSL/TLS Configuration

### Development
- Frontend: HTTP on localhost (SSL not needed)
- API: HTTP on localhost (SSL not needed)

### Production
- **Vercel:** Automatic HTTPS with Let's Encrypt certificates
- **Railway/Render:** Automatic HTTPS provisioning
- **Custom Domains:** Configure SSL certificates through hosting provider
- **Security Headers:** Add helmet.js middleware to API for security headers

## Scaling Considerations

### Current Architecture Limitations
- **API Storage:** In-memory storage doesn't persist across restarts
- **State Management:** No shared state between multiple API instances
- **File Storage:** No file attachments supported

### Horizontal Scaling
For multiple API instances:
1. Replace in-memory storage with external database
2. Add Redis for session management (if authentication added)
3. Use load balancer (nginx, AWS ALB, or Cloudflare)
4. Implement health checks for container orchestration

### Frontend Scaling
- **CDN:** Use Cloudflare, AWS CloudFront, or Vercel Edge Network
- **Caching:** Implement service worker for offline functionality
- **Bundle Optimization:** Code splitting for large applications

## Backup and Recovery

### Current Data Persistence
- **Frontend:** Data stored in browser localStorage
  - **Backup:** Export functionality can be added to download notes as JSON
  - **Recovery:** Import functionality can restore from JSON backup
- **API:** No persistence (in-memory storage)
  - **Backup:** Not applicable with current implementation
  - **Recovery:** Data lost on server restart

### Future Database Backup Strategies
When database is implemented:
- **SQLite:** Regular file system backups
- **PostgreSQL:** pg_dump for logical backups, WAL-E for continuous archiving
- **MongoDB:** mongodump for consistent backups

### Disaster Recovery Planning
1. **Code Repository:** GitHub serves as backup for source code
2. **Dependencies:** package-lock.json ensures reproducible builds
3. **Configuration:** Document all environment variables and settings
4. **User Data:** Implement export/import functionality for user notes

## Security Hardening

### Current Security Measures
- **CORS:** Configured in API to prevent unauthorized cross-origin requests
- **Input Sanitization:** Markdown content is safely rendered by react-markdown
- **TypeScript:** Compile-time type checking prevents many common errors

### Production Security Checklist
1. **HTTPS:** Ensure all traffic is encrypted in production
2. **Environment Variables:** Never commit secrets to version control
3. **Dependency Scanning:** Use `npm audit` to check for vulnerabilities
4. **Content Security Policy:** Add CSP headers to prevent XSS attacks
5. **Rate Limiting:** Implement API rate limiting for production use
6. **Authentication:** Add user authentication when multi-user support is needed

### Security Headers (Future)
Add to API with helmet.js:
```javascript
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"]
    }
  }
}));
```