# Deployment Guide

This guide covers deploying Notes MD to various environments and platforms.

## Overview

Notes MD consists of two main components that need to be deployed:
1. **Frontend** - React application (static files)
2. **Backend API** - Express.js server

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Web server or hosting platform

## Production Build

### Frontend

```bash
cd web
npm install
npm run build
```

This creates a `dist/` directory with optimized static files.

### Backend API

```bash
cd api
npm install
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

## Deployment Options

### Option 1: Traditional Web Server

TODO: Add instructions for:
- Nginx configuration
- Apache configuration
- SSL/TLS setup

### Option 2: Cloud Platforms

#### Vercel (Frontend)

TODO: Add Vercel deployment instructions

#### Heroku (API)

TODO: Add Heroku deployment instructions

#### DigitalOcean App Platform

TODO: Add DigitalOcean deployment instructions

#### AWS

TODO: Add AWS deployment instructions

### Option 3: Docker

TODO: Add Docker deployment instructions

#### Frontend Dockerfile

```dockerfile
# TODO: Add frontend Dockerfile
```

#### API Dockerfile

```dockerfile
# TODO: Add API Dockerfile
```

#### Docker Compose

```yaml
# TODO: Add docker-compose.yml
```

## Environment Variables

### Production Frontend Variables

```env
VITE_API_URL=https://your-api-domain.com
VITE_APP_TITLE=Notes MD
```

### Production API Variables

```env
NODE_ENV=production
PORT=3000
```

## Database Setup

TODO: Add database configuration when persistence is added

## Monitoring and Logging

TODO: Add monitoring and logging setup

## Security Considerations

TODO: Add security best practices:
- HTTPS configuration
- CORS setup
- Rate limiting
- Input validation

## Performance Optimization

TODO: Add performance optimization tips:
- CDN setup
- Caching strategies
- Bundle optimization

## Backup and Recovery

TODO: Add backup and recovery procedures