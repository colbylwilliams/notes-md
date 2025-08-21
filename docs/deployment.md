# Deployment Guide

This guide covers deploying the Notes MD application to various environments including development, staging, and production.

## Overview

Notes MD consists of two main components that need to be deployed:
- **Frontend** (React SPA) - Static files served by a web server
- **Backend** (Express API) - Node.js application server

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Access to deployment platform
- Environment-specific configuration

## Build Process

### Frontend Build

```bash
cd web
npm install
npm run build
```

This creates a `dist/` directory with optimized static files.

### Backend Build

```bash
cd api
npm install
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

## Environment Variables

### Production Frontend (.env.production)

```env
VITE_API_URL=https://api.yourapp.com
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_ENABLE_AUTOSAVE=true
VITE_APP_TITLE=Notes MD
VITE_AUTOSAVE_INTERVAL=5000
```

### Production API (.env.production)

```env
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://yourapp.com
```

## Deployment Options

### 1. Traditional VPS/Server

**Frontend Deployment**
```bash
# Build the application
npm run build

# Copy files to web server
scp -r dist/* user@server:/var/www/html/

# Configure Nginx/Apache to serve static files
```

**Backend Deployment**
```bash
# Copy application files
scp -r . user@server:/opt/notes-md-api/

# Install dependencies and build
ssh user@server "cd /opt/notes-md-api && npm install --production && npm run build"

# Start with process manager
pm2 start dist/index.js --name notes-md-api
```

### 2. Docker Deployment

**Frontend Dockerfile**
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Backend Dockerfile**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Docker Compose**
```yaml
version: '3.8'
services:
  frontend:
    build: ./web
    ports:
      - "80:80"
    depends_on:
      - api
  
  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
```

### 3. Cloud Platform Deployment

#### Vercel (Frontend)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from web directory
cd web
vercel --prod
```

#### Railway (Backend)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy from api directory
cd api
railway login
railway init
railway up
```

#### Netlify (Frontend)

```bash
# Build settings in Netlify dashboard:
# Build command: npm run build
# Publish directory: dist
# Base directory: web
```

### 4. Kubernetes Deployment

**Frontend Deployment**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: notes-md-frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: notes-md-frontend
  template:
    metadata:
      labels:
        app: notes-md-frontend
    spec:
      containers:
      - name: frontend
        image: notes-md-frontend:latest
        ports:
        - containerPort: 80
```

**Backend Deployment**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: notes-md-api
spec:
  replicas: 2
  selector:
    matchLabels:
      app: notes-md-api
  template:
    metadata:
      labels:
        app: notes-md-api
    spec:
      containers:
      - name: api
        image: notes-md-api:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
```

## Health Checks

### API Health Check Endpoint

```javascript
// Add to API routes
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});
```

### Frontend Health Check

Serve a health check endpoint via your web server configuration.

## Monitoring and Logging

### Application Logging

```javascript
// Add structured logging
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

### Performance Monitoring

Consider integrating:
- Application Performance Monitoring (APM)
- Error tracking (Sentry)
- Uptime monitoring
- Log aggregation

## Security Considerations

### HTTPS Configuration

Ensure HTTPS is enabled for production deployments:

```nginx
server {
    listen 443 ssl http2;
    server_name yourapp.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }
}
```

### API Security Headers

```javascript
// Add security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"]
    }
  }
}));
```

## Rollback Strategy

1. **Blue-Green Deployment**: Maintain two identical environments
2. **Database Migrations**: Always backward compatible
3. **Feature Flags**: Enable gradual rollouts
4. **Monitoring**: Real-time health checks during deployment

## TODO: Deployment Improvements

- [ ] Add automated CI/CD pipeline configuration
- [ ] Document database deployment procedures
- [ ] Add backup and disaster recovery procedures
- [ ] Include load balancing configuration
- [ ] Document scaling strategies
- [ ] Add infrastructure as code templates
- [ ] Include performance benchmarking guides
- [ ] Add troubleshooting guides for common deployment issues
- [ ] Document migration procedures
- [ ] Add security scanning integration