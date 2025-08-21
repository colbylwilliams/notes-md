# Deployment Guide

This guide covers deploying Notes MD to various environments.

## Production Deployment

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Web server (nginx, Apache, etc.)
- Process manager (PM2, systemd, etc.)

### Building for Production

1. **Build the Frontend**
   ```bash
   cd web
   npm install
   npm run build
   ```
   This creates a `dist/` folder with optimized static files.

2. **Build the API**
   ```bash
   cd api
   npm install
   npm run build
   ```
   This creates a `dist/` folder with compiled JavaScript.

### Environment Configuration

#### Frontend Environment Variables

Create a `.env.production` file in the `web/` directory:

```env
VITE_API_URL=https://your-api-domain.com
VITE_APP_TITLE=Notes MD
```

#### API Environment Variables

Create a `.env.production` file in the `api/` directory:

```env
NODE_ENV=production
PORT=3000
```

### Deployment Options

#### Option 1: Traditional Server Deployment

1. **Deploy the API**
   ```bash
   # Copy API files to server
   scp -r api/ user@server:/path/to/app/
   
   # Install dependencies and start
   ssh user@server
   cd /path/to/app/api
   npm install --production
   npm start
   ```

2. **Deploy the Frontend**
   ```bash
   # Copy built files to web server
   scp -r web/dist/ user@server:/var/www/html/
   ```

#### Option 2: Docker Deployment

> **TODO**: Add Docker deployment instructions

#### Option 3: Cloud Platform Deployment

> **TODO**: Add cloud platform specific instructions (Vercel, Netlify, Heroku, etc.)

### Monitoring and Logging

> **TODO**: Add monitoring setup instructions

### SSL/HTTPS Configuration

> **TODO**: Add SSL certificate setup

### Backup and Recovery

> **TODO**: Add backup strategy documentation

## TODO

- [ ] Add Docker containerization instructions
- [ ] Document cloud platform deployments (Vercel, Netlify, AWS, etc.)
- [ ] Include monitoring and logging setup
- [ ] Add SSL/HTTPS configuration guide
- [ ] Document backup and recovery procedures
- [ ] Add performance optimization tips
- [ ] Include troubleshooting section for common deployment issues