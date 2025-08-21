# Deployment Guide

This guide covers various deployment options for the Notes MD application in production environments.

## Overview

Notes MD consists of two main components:
- **Frontend**: React SPA that can be served statically
- **API**: Node.js/Express server that requires a runtime environment

## Prerequisites

- Node.js 14+ in production environment
- Web server (nginx, Apache, or similar) for static file serving
- Process manager (PM2, systemd, or similar) for API server
- SSL certificate for HTTPS (recommended)

## Build Process

### 1. Build Frontend

```bash
cd web
npm ci --production=false
npm run build
```

This creates a `dist/` directory with static files.

### 2. Build API

```bash
cd api
npm ci --production=false
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

## Deployment Options

### Option 1: Traditional Server Deployment

#### Frontend Deployment

1. **Upload built files:**
   ```bash
   # Copy web/dist/* to your web server document root
   rsync -av web/dist/ user@server:/var/www/notes-md/
   ```

2. **Configure web server (nginx example):**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       root /var/www/notes-md;
       index index.html;
       
       # Handle client-side routing
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # API proxy
       location /api/ {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

#### API Deployment

1. **Upload API files:**
   ```bash
   rsync -av api/ user@server:/opt/notes-md-api/
   ```

2. **Install production dependencies:**
   ```bash
   cd /opt/notes-md-api
   npm ci --production
   ```

3. **Configure environment:**
   ```bash
   # Create production .env file
   echo "NODE_ENV=production" > .env
   echo "PORT=3000" >> .env
   ```

4. **Start with PM2:**
   ```bash
   npm install -g pm2
   pm2 start dist/index.js --name "notes-md-api"
   pm2 save
   pm2 startup
   ```

### Option 2: Docker Deployment

#### Frontend Dockerfile

```dockerfile
# web/Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --production=false

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### API Dockerfile

```dockerfile
# api/Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --production=false

COPY . .
RUN npm run build

# Install production dependencies only
RUN rm -rf node_modules && npm ci --production

EXPOSE 3000
CMD ["npm", "start"]
```

#### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped

  web:
    build: ./web
    ports:
      - "80:80"
    depends_on:
      - api
    restart: unless-stopped
```

### Option 3: Cloud Platform Deployment

#### Vercel (Frontend)

1. Install Vercel CLI: `npm i -g vercel`
2. Configure `vercel.json`:
   ```json
   {
     "builds": [
       {
         "src": "web/package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "dist" }
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "https://your-api-domain.com/api/$1"
       },
       {
         "src": "/(.*)",
         "dest": "/web/$1"
       }
     ]
   }
   ```
3. Deploy: `vercel --prod`

#### Heroku (API)

1. Create `Procfile`:
   ```
   web: npm start
   ```
2. Configure environment variables in Heroku dashboard
3. Deploy via Git or GitHub integration

#### Railway/Render

Similar to Heroku, these platforms support Node.js deployment with minimal configuration.

## Environment Configuration

### Production Environment Variables

#### Frontend (.env.production)
```env
VITE_API_URL=https://api.your-domain.com
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_APP_TITLE=Notes MD
```

#### API (.env.production)
```env
NODE_ENV=production
PORT=3000
# Add database URL when database is implemented
# DATABASE_URL=postgresql://...
```

## Security Considerations

1. **HTTPS**: Always use SSL certificates in production
2. **CORS**: Configure proper CORS settings for your domain
3. **Environment Variables**: Never commit production secrets to version control
4. **Rate Limiting**: Implement rate limiting for API endpoints
5. **Input Validation**: Validate all user inputs server-side

## Monitoring and Logging

### API Monitoring
```javascript
// Add to API for basic logging
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

### Health Check Endpoint
```javascript
// Add to API routes
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});
```

## Scaling Considerations

- **Database**: Add persistent storage (PostgreSQL, MongoDB)
- **Caching**: Implement Redis for session/data caching
- **CDN**: Use CDN for static asset delivery
- **Load Balancer**: Use multiple API instances behind a load balancer

## Backup and Recovery

// TODO: Add backup strategies when database is implemented

## Troubleshooting

### Common Production Issues:

1. **Build failures**: Check Node.js version compatibility
2. **CORS errors**: Verify API URL configuration
3. **404 errors**: Ensure client-side routing is properly configured
4. **API connection issues**: Check firewall and network settings

---

For more deployment examples, see the [GitHub repository](https://github.com/colbylwilliams/notes-md).