# Deployment Guide

This guide covers deploying Notes MD to various environments.

## Overview

Notes MD consists of two main components:
- Frontend (React application)
- Backend API (Express.js server)

Both components need to be deployed and properly configured to work together.

## Environment Requirements

### Minimum Requirements

- Node.js 14+ runtime environment
- Static file hosting for frontend
- Node.js hosting for backend API
- HTTPS support (recommended for production)

### Recommended Requirements

- Node.js 18+ (LTS)
- Load balancer for high availability
- Database (when implementing persistent storage)
- CDN for static assets
- Monitoring and logging services

## Building for Production

### Frontend Build

```bash
cd web
npm install
npm run build
```

This creates a `dist` folder with optimized static files.

### Backend Build

```bash
cd api
npm install
npm run build
```

This creates a `dist` folder with compiled JavaScript.

## Deployment Options

### Option 1: Traditional VPS/Server

#### Prerequisites
- Ubuntu 20.04+ or similar Linux distribution
- Node.js and npm installed
- Nginx (recommended)
- PM2 (process manager)

#### Steps

1. **Setup the server**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx
```

2. **Deploy the application**
```bash
# Clone repository
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md

# Build and deploy API
cd api
npm install --production
npm run build
pm2 start dist/index.js --name "notes-md-api"

# Build and deploy frontend
cd ../web
npm install
npm run build
sudo cp -r dist/* /var/www/html/
```

3. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /var/www/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # API proxy
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Option 2: Docker Deployment

#### Dockerfile for API
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Dockerfile for Frontend
```dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
```

#### Docker Compose
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

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Deploy frontend
```bash
cd web
vercel --prod
```

#### Heroku (Backend)

1. Create Heroku app
```bash
heroku create notes-md-api
```

2. Deploy
```bash
cd api
git push heroku main
```

#### Netlify (Frontend)

1. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

2. Environment variables:
   - `VITE_API_URL`: Your API URL

## Environment Configuration

### Frontend Environment Variables

```bash
# .env.production
VITE_API_URL=https://your-api-domain.com/api
VITE_APP_TITLE=Notes MD
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
```

### Backend Environment Variables

```bash
# .env.production
NODE_ENV=production
PORT=3000
```

## Security Considerations

### HTTPS Setup

1. **Using Let's Encrypt with Certbot**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

2. **Update Nginx configuration for HTTPS**
```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;
    
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    
    # Your existing configuration
}
```

### Additional Security Headers

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
```

## Monitoring and Maintenance

### Health Checks

Set up health check endpoints and monitoring:

```javascript
// Add to API
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});
```

### Log Management

```bash
# PM2 logs
pm2 logs notes-md-api

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Backup Strategy

- Regular database backups (when implemented)
- Application code in version control
- Configuration file backups
- SSL certificate backup

## Scaling Considerations

### Horizontal Scaling

- Use load balancer (nginx, HAProxy)
- Multiple API instances
- Shared database/storage
- Session management (if authentication added)

### Performance Optimization

- Enable gzip compression
- Use CDN for static assets
- Implement caching strategies
- Optimize database queries (when database is added)

## Troubleshooting

### Common Issues

1. **API not accessible**
   - Check firewall settings
   - Verify port is open
   - Check PM2 process status

2. **Frontend build fails**
   - Verify environment variables
   - Check Node.js version compatibility
   - Clear node_modules and reinstall

3. **CORS errors**
   - Update API CORS configuration
   - Verify frontend URL in API settings

### Debug Commands

```bash
# Check PM2 status
pm2 status

# View application logs
pm2 logs notes-md-api

# Check Nginx status
sudo systemctl status nginx

# Test API endpoint
curl http://localhost:3000/api/notes
```

---

*This deployment guide will be updated as new deployment options and features are added.*