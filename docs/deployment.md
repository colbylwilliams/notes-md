# Deployment Guide

This guide covers deploying Notes MD to various environments for production use.

## Production Build

### Frontend

```bash
cd web
npm run build
```

This creates a `dist/` directory with optimized static files.

### Backend

```bash
cd api
npm run build
npm start
```

This compiles TypeScript to JavaScript and starts the production server.

## Deployment Options

### Option 1: Traditional Server Deployment

1. **Server Requirements**
   - Node.js v14 or higher
   - nginx (recommended for serving static files)
   - PM2 or similar process manager

2. **Deployment Steps**
   - Build both frontend and backend
   - Upload files to server
   - Configure nginx to serve frontend and proxy API
   - Start backend with process manager

### Option 2: Docker Deployment

TODO: Add Docker configuration and deployment instructions.

### Option 3: Cloud Platform Deployment

TODO: Add specific instructions for:
- Vercel/Netlify (frontend)
- Railway/Render (backend)
- AWS/GCP/Azure

## Environment Configuration

### Frontend Environment Variables

Set these in your production environment:

```env
VITE_API_URL=https://your-api-domain.com
VITE_APP_TITLE=Notes MD
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
```

### Backend Environment Variables

```env
NODE_ENV=production
PORT=3000
```

## Security Considerations

- Use HTTPS in production
- Configure CORS properly
- Set appropriate security headers
- Keep dependencies updated

## Monitoring

TODO: Add monitoring and logging setup instructions.

## TODOs

- [ ] Add Docker configuration files
- [ ] Create docker-compose setup
- [ ] Add specific cloud deployment guides
- [ ] Document database setup for production
- [ ] Add SSL/HTTPS configuration
- [ ] Create backup and restore procedures
- [ ] Add performance monitoring setup
- [ ] Document scaling strategies
- [ ] Add CI/CD pipeline configuration
- [ ] Create health check endpoints

## Troubleshooting

TODO: Add common deployment issues and solutions.

---

For development setup, see [Development Guide](./development.md).