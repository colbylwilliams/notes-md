# Deployment Guide

This guide covers deployment strategies and configurations for production environments.

## Production Build

### Frontend Build
```bash
cd web
npm run build
```
This creates a `dist/` folder with optimized static files.

### API Build
```bash
cd api
npm run build
npm start
```

## Deployment Options

### Option 1: Traditional Server Deployment

#### Prerequisites
- Node.js runtime on server
- Process manager (PM2 recommended)
- Reverse proxy (Nginx recommended)

#### Steps
1. Build both frontend and API
2. Copy files to server
3. Configure environment variables
4. Start with process manager

### Option 2: Container Deployment

#### Docker Setup
```dockerfile
# TODO: Add Dockerfile examples
```

### Option 3: Cloud Platform Deployment

#### Vercel (Frontend)
1. Connect GitHub repository
2. Configure build settings
3. Deploy automatically on push

#### Railway/Heroku (API)
1. Connect repository
2. Configure environment variables
3. Deploy with automatic builds

## Environment Configuration

### Frontend Environment Variables
```env
VITE_API_URL=https://your-api-domain.com
VITE_APP_TITLE=Notes MD
```

### API Environment Variables
```env
PORT=3000
NODE_ENV=production
```

## TODO

- [ ] Add complete Docker configuration
- [ ] Document reverse proxy setup
- [ ] Include SSL/TLS configuration
- [ ] Add monitoring and logging setup
- [ ] Document backup strategies
- [ ] Include performance optimization tips
- [ ] Add CI/CD pipeline examples
- [ ] Document rollback procedures