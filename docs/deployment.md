# Deployment Guide

This guide covers deploying Notes MD to production environments.

## 🚀 Overview

Notes MD consists of two components that need to be deployed:

1. **Frontend** - Static React application
2. **API** - Node.js Express server

## 📋 Prerequisites

- Node.js (v14 or higher)
- A web server or hosting platform
- Domain name (optional)
- SSL certificate (recommended)

## 🌐 Frontend Deployment

The frontend is a static React application that can be deployed to any static hosting service.

### Build for Production

```bash
cd web
npm install
npm run build
```

This creates a `dist/` directory with the built application.

### Deployment Options

#### Option 1: Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `cd web && npm run build`
3. Set publish directory: `web/dist`
4. Configure environment variables in Netlify dashboard

#### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root
3. Configure build settings:
   - Build Command: `cd web && npm run build`
   - Output Directory: `web/dist`

#### Option 3: GitHub Pages

1. Build the application locally
2. Push the `dist/` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

#### Option 4: Traditional Web Server

Upload the contents of `web/dist/` to your web server's document root.

### Environment Variables for Frontend

Set the following environment variables for production:

```env
VITE_API_URL=https://your-api-domain.com/api
VITE_APP_TITLE=Notes MD
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
```

## 🖥️ API Deployment

The API is a Node.js application that can be deployed to various platforms.

### Build for Production

```bash
cd api
npm install
npm run build
```

### Deployment Options

#### Option 1: Railway

1. Connect your GitHub repository to Railway
2. Set start command: `cd api && npm start`
3. Configure environment variables

#### Option 2: Heroku

1. Install Heroku CLI
2. Create a new app: `heroku create your-app-name`
3. Set buildpacks for a monorepo setup
4. Configure environment variables
5. Deploy: `git push heroku main`

#### Option 3: DigitalOcean App Platform

1. Create a new app from your GitHub repository
2. Configure build and run commands
3. Set environment variables
4. Deploy

#### Option 4: VPS/Dedicated Server

1. Set up Node.js on your server
2. Clone the repository
3. Install dependencies and build
4. Use PM2 for process management:

```bash
npm install -g pm2
cd api
pm2 start dist/index.js --name notes-api
pm2 save
pm2 startup
```

### Environment Variables for API

Set the following environment variables for production:

```env
NODE_ENV=production
PORT=3000
```

## 🐳 Docker Deployment

### Dockerfile for Frontend

```dockerfile
# Frontend Dockerfile (web/Dockerfile)
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Dockerfile for API

```dockerfile
# API Dockerfile (api/Dockerfile)
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Docker Compose

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

  web:
    build: ./web
    ports:
      - "80:80"
    depends_on:
      - api
```

## ⚙️ Nginx Configuration

If deploying to a VPS, use Nginx as a reverse proxy:

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
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🔒 Security Considerations

### HTTPS

Always use HTTPS in production:
- Use Let's Encrypt for free SSL certificates
- Configure HSTS headers
- Redirect HTTP to HTTPS

### Environment Variables

- Never commit sensitive data to version control
- Use environment-specific configuration
- Rotate secrets regularly

### API Security

- Implement rate limiting
- Add CORS configuration
- Use security headers
- Validate all inputs

## 📊 Monitoring

### Application Monitoring

Consider implementing:
- Error tracking (Sentry)
- Performance monitoring
- Uptime monitoring
- Log aggregation

### Health Checks

Implement health check endpoints:

```javascript
// API health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
```

## 📋 TODO

### Infrastructure
- [ ] Add database deployment instructions
- [ ] Include CDN setup guide
- [ ] Add backup and disaster recovery procedures
- [ ] Include scaling strategies

### CI/CD
- [ ] Set up GitHub Actions workflows
- [ ] Add automated testing in deployment pipeline
- [ ] Implement blue-green deployment
- [ ] Add rollback procedures

### Monitoring & Observability
- [ ] Set up application performance monitoring
- [ ] Add error tracking and alerting
- [ ] Implement logging strategy
- [ ] Add metrics collection

### Security
- [ ] Add security scanning to deployment pipeline
- [ ] Implement secrets management
- [ ] Add security headers configuration
- [ ] Include penetration testing procedures

## 🔧 Troubleshooting

### Common Issues

#### Frontend Build Failures
- Check Node.js version compatibility
- Clear node_modules and reinstall
- Check for TypeScript errors

#### API Deployment Issues
- Verify environment variables are set
- Check port configuration
- Ensure dependencies are installed

#### CORS Issues
- Configure CORS in API for production domain
- Check that API URL is correct in frontend

## 🔗 Related Documentation

- [Getting Started](getting-started.md) - Development setup
- [API Documentation](api.md) - API details
- [Frontend Documentation](frontend.md) - Frontend details