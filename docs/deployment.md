# Deployment Guide

## Overview

This guide covers deployment options for Notes MD in production environments.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Web server (nginx, Apache, etc.)
- Process manager (PM2, systemd, etc.)

## Deployment Options

### Option 1: Traditional Server Deployment

#### 1. Prepare the Server

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2
```

#### 2. Deploy Application

```bash
# Clone repository
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md

# Install dependencies
cd api && npm install && cd ..
cd web && npm install && cd ..

# Build applications
cd web && npm run build && cd ..
cd api && npm run build && cd ..
```

#### 3. Configure Environment

```bash
# API environment
cd api
cp .env.example .env
# Edit .env with production values

# Web environment (if needed)
cd ../web
cp .env.example .env
# Edit .env with production values
```

#### 4. Start with PM2

```bash
# Create PM2 ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [
    {
      name: 'notes-md-api',
      script: './api/dist/index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
EOF

# Start application
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 5. Configure Web Server (nginx)

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Serve frontend static files
    location / {
        root /path/to/notes-md/web/dist;
        try_files $uri $uri/ /index.html;
    }

    # Proxy API requests
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

#### 1. Create Dockerfiles

**API Dockerfile** (`api/Dockerfile`):
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Web Dockerfile** (`web/Dockerfile`):
```dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
```

#### 2. Docker Compose

**docker-compose.yml**:
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

#### 3. Deploy with Docker

```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f

# Update deployment
docker-compose pull
docker-compose up -d
```

### Option 3: Cloud Platform Deployment

#### Vercel (Frontend)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy frontend
cd web
vercel --prod
```

#### Railway/Render (API)

🚧 **TODO**: Add specific deployment steps for cloud platforms

## Environment Configuration

### Production Environment Variables

#### API
```bash
NODE_ENV=production
PORT=3000
# Add database URL, auth secrets, etc.
```

#### Frontend
```bash
VITE_API_URL=https://your-api-domain.com
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
```

## Security Considerations

### HTTPS Configuration

```bash
# Install Certbot for Let's Encrypt
sudo apt install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Security Headers

Add to nginx configuration:
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self'" always;
```

## Monitoring and Maintenance

### Application Monitoring

```bash
# PM2 monitoring
pm2 monit

# View logs
pm2 logs notes-md-api

# Restart application
pm2 restart notes-md-api
```

### Health Checks

🚧 **TODO**: Implement health check endpoints

```bash
# API health check
curl http://localhost:3000/health

# Web health check
curl http://localhost/
```

### Backup and Recovery

🚧 **TODO**: Document backup strategies for user data

## Troubleshooting

### Common Issues

**Port conflicts**: Ensure ports 3000 (API) and 80/443 (web) are available
**Permission errors**: Check file permissions and user ownership
**Build failures**: Verify Node.js version and dependencies

### Log Locations

- PM2 logs: `~/.pm2/logs/`
- Nginx logs: `/var/log/nginx/`
- Application logs: Check PM2 or container logs

---

📝 **TODO**:
- Add database deployment and configuration
- Add monitoring and alerting setup
- Add backup and recovery procedures
- Add CI/CD pipeline configuration
- Add load balancing configuration for high-traffic scenarios
- Add container orchestration (Kubernetes) deployment guide