# Deployment Guide

This guide covers deploying Notes MD to production environments.

## Overview

Notes MD consists of two components that need to be deployed:
- **Frontend** (React/Vite application)
- **Backend** (Express.js API)

## Prerequisites

- Node.js runtime environment
- Process manager (PM2, Docker, etc.)
- Reverse proxy (Nginx, Apache, etc.)
- SSL certificate for HTTPS

## Frontend Deployment

### Build the Frontend

```bash
cd web
npm install
npm run build
```

This creates a `dist/` directory with static files.

### Static File Hosting

The built frontend can be hosted on:
- **Vercel** (recommended for Vite apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Traditional web servers**

### Environment Variables

Set production environment variables:
```bash
VITE_API_URL=https://your-api-domain.com
VITE_APP_TITLE="Notes MD"
```

## Backend Deployment

### Build the API

```bash
cd api
npm install
npm run build
```

### Environment Configuration

Create production `.env` file:
```bash
NODE_ENV=production
PORT=3000
# Add other production variables
```

### Process Management

Using PM2:
```bash
npm install -g pm2
pm2 start dist/index.js --name "notes-md-api"
pm2 save
pm2 startup
```

### Reverse Proxy Setup

Example Nginx configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    # Frontend
    location / {
        root /path/to/web/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # API
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Docker Deployment

TODO: Create Dockerfile and docker-compose.yml
- Multi-stage builds
- Production optimizations
- Container orchestration

## Cloud Platform Deployment

### Vercel (Frontend)

TODO: Document Vercel deployment steps

### Railway/Render (Backend)

TODO: Document cloud API deployment

### AWS/GCP/Azure

TODO: Document enterprise cloud deployment

## Monitoring and Logging

TODO: Document production monitoring
- Application logs
- Error tracking
- Performance metrics
- Uptime monitoring

## Security Considerations

TODO: Document security best practices
- HTTPS enforcement
- CORS configuration
- Rate limiting
- Input validation

## Backup and Recovery

TODO: Document backup strategies
- Database backups
- File storage backups
- Disaster recovery procedures