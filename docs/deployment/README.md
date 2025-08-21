# Deployment Guide

This guide covers deploying Notes MD to various environments.

## Deployment Options

| Platform | Complexity | Cost | Scalability |
|----------|------------|------|-------------|
| [Vercel](#vercel) | Low | Free/Paid | High |
| [Netlify](#netlify) | Low | Free/Paid | High |
| [Docker](#docker) | Medium | Variable | High |
| [Traditional VPS](#vps) | High | Variable | Medium |

## Vercel Deployment

### Frontend (Automatic)

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import your GitHub repository
   - Select the `web` directory as root

2. **Configure Build Settings**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Environment Variables**
   Add any required environment variables in the Vercel dashboard.

### Backend (Serverless Functions)

TODO: Document serverless function deployment for API

## Docker Deployment

### Docker Compose (Recommended)

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
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
```

### Build and Deploy

```bash
docker-compose up -d
```

## Traditional VPS Deployment

### Prerequisites

- Ubuntu 20.04+ server
- Node.js 14+
- Nginx (for reverse proxy)
- PM2 (for process management)

### Setup Steps

1. **Server Setup**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2
```

2. **Deploy Application**
```bash
# Clone repository
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md

# Build frontend
cd web
npm install
npm run build

# Setup backend
cd ../api
npm install
npm run build
```

3. **Configure PM2**
```bash
# Start API with PM2
pm2 start dist/index.js --name "notes-md-api"
pm2 save
pm2 startup
```

4. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    # Frontend
    location / {
        root /path/to/notes-md/web/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # API
    location /api {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Environment Variables

### Production Environment Variables

```env
# Backend
NODE_ENV=production
PORT=3000

# Frontend  
VITE_API_URL=https://your-domain.com
```

## Monitoring and Maintenance

### Health Checks

- **Frontend:** Check if the site loads at your domain
- **Backend:** Check `/api/health` endpoint (TODO: implement)

### Logging

- **PM2 Logs:** `pm2 logs`
- **Nginx Logs:** `/var/log/nginx/`

## TODO

- [ ] Add health check endpoints
- [ ] Document SSL certificate setup
- [ ] Add monitoring setup (e.g., Sentry)
- [ ] Document backup strategies
- [ ] Add auto-deployment workflows
- [ ] Document scaling considerations
- [ ] Add performance optimization guide