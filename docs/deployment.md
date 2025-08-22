# Deployment Guide

This guide covers various deployment options for Notes MD.

## Production Build

### Frontend

```bash
cd web
npm run build
```

This creates a `dist/` directory with optimized static files.

### API

```bash
cd api
npm run build
npm start
```

## Deployment Options

### Option 1: Traditional Server

**Requirements:**
- Node.js runtime
- Web server (nginx, Apache)
- Process manager (PM2, systemd)

**Steps:**

1. Build the application
2. Upload files to server
3. Install dependencies
4. Configure environment variables
5. Start with process manager
6. Configure reverse proxy

### Option 2: Container Deployment

**Docker Compose Example:**

```yaml
version: '3.8'
services:
  api:
    build: ./api
    environment:
      - NODE_ENV=production
      - PORT=3000
    ports:
      - "3000:3000"
  
  web:
    build: ./web
    ports:
      - "80:80"
    depends_on:
      - api
```

### Option 3: Cloud Platforms

**Vercel (Frontend):**
1. Connect GitHub repository
2. Set build command: `cd web && npm run build`
3. Set output directory: `web/dist`
4. Deploy automatically on push

**Railway/Heroku (API):**
1. Create new app
2. Connect repository
3. Set environment variables
4. Deploy from main branch

## Environment Variables

### Production Frontend (.env.production)

```
VITE_API_URL=https://your-api-domain.com
VITE_APP_TITLE=Notes MD
```

### Production API (.env)

```
NODE_ENV=production
PORT=3000
```

## Security Considerations

- [ ] Enable HTTPS
- [ ] Set proper CORS origins
- [ ] Configure security headers
- [ ] Implement rate limiting
- [ ] Add input validation
- [ ] Set up monitoring

## Performance Optimization

### Frontend

- Static file caching
- CDN for assets
- Gzip compression
- Service worker for offline support

### API

- Request/response compression
- Database connection pooling
- Response caching
- Load balancing

## Monitoring

### Health Checks

- API endpoint health check
- Frontend availability
- Database connectivity
- Resource usage monitoring

### Logging

- Application logs
- Error tracking (Sentry)
- Access logs
- Performance metrics

## Backup and Recovery

- Database backups (if applicable)
- Static file backups
- Configuration backups
- Disaster recovery plan

---

*TODO: Add specific platform deployment guides, monitoring setup, and backup procedures.*