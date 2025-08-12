# Deployment

This guide covers deploying Notes MD to various environments and platforms, from local production builds to cloud deployments.

## Overview

Notes MD consists of two components that can be deployed separately or together:
- **Frontend (React/Vite)** - Can be deployed as static files to any web server or CDN
- **Backend (Express.js)** - Requires Node.js runtime environment

## Local Production Build

### Frontend Build
Build the React application for production:

```bash
cd web
npm run build
```

This creates a `dist/` folder with optimized static files. You can preview the build:

```bash
npm run preview
```

The built files can be served by any web server (nginx, Apache, CDN).

### Backend Build
Compile the TypeScript API to JavaScript:

```bash
cd api
npm run build
npm start
```

This creates a `dist/` folder with compiled JavaScript and starts the production server.

## Static Frontend Deployment

### Netlify
1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Set build command: `cd web && npm run build`
   - Set publish directory: `web/dist`

2. **Environment Variables**
   ```
   VITE_API_URL=https://your-api-domain.com
   VITE_APP_TITLE=Notes MD
   ```

3. **Build Settings**
   ```toml
   # netlify.toml
   [build]
     base = "web"
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Vercel
1. **Deploy Frontend**
   ```bash
   cd web
   npx vercel
   ```

2. **Configuration**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "dist" }
       }
     ],
     "routes": [
       { "handle": "filesystem" },
       { "src": "/(.*)", "dest": "/index.html" }
     ]
   }
   ```

3. **Environment Variables**
   Set in Vercel dashboard or use `.env.local`:
   ```
   VITE_API_URL=https://your-api.vercel.app
   ```

## Backend Deployment

### Heroku
1. **Prepare Application**
   ```bash
   # Add Procfile in api/ directory
   echo "web: npm start" > api/Procfile
   ```

2. **Deploy**
   ```bash
   cd api
   heroku create your-app-name
   heroku config:set NODE_ENV=production
   heroku config:set PORT=80
   git push heroku main
   ```

3. **Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set PORT=80
   ```

### Railway
1. **Connect Repository**
   - Link GitHub repository to Railway
   - Select the `api` folder as root

2. **Configuration**
   ```json
   {
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "npm start",
       "healthcheckPath": "/"
     }
   }
   ```

## Full-Stack Deployment

### Docker Deployment

#### Dockerfile for Frontend
```dockerfile
# web/Dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Dockerfile for Backend
```dockerfile
# api/Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
USER node
CMD ["npm", "start"]
```

#### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'

services:
  frontend:
    build:
      context: ./web
      dockerfile: Dockerfile
    ports:
      - "80:80"
    environment:
      - VITE_API_URL=http://localhost:3000

  backend:
    build:
      context: ./api
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
```

**Deploy with Docker Compose:**
```bash
docker-compose up --build -d
```

### Kubernetes Deployment

#### Frontend Deployment
```yaml
# k8s/frontend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: notes-md-frontend
spec:
  replicas: 2
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
        image: your-registry/notes-md-frontend:latest
        ports:
        - containerPort: 80
        env:
        - name: VITE_API_URL
          value: "http://notes-md-backend:3000"

---
apiVersion: v1
kind: Service
metadata:
  name: notes-md-frontend
spec:
  selector:
    app: notes-md-frontend
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
```

#### Backend Deployment
```yaml
# k8s/backend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: notes-md-backend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: notes-md-backend
  template:
    metadata:
      labels:
        app: notes-md-backend
    spec:
      containers:
      - name: backend
        image: your-registry/notes-md-backend:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: PORT
          value: "3000"

---
apiVersion: v1
kind: Service
metadata:
  name: notes-md-backend
spec:
  selector:
    app: notes-md-backend
  ports:
  - port: 3000
    targetPort: 3000
```

## Environment Configuration

### Production Environment Variables

#### Frontend
```bash
# Required for production
VITE_API_URL=https://your-api-domain.com
VITE_APP_TITLE=Notes MD

# Optional
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
```

#### Backend
```bash
# Required
NODE_ENV=production
PORT=3000

# Optional
CORS_ORIGIN=https://your-frontend-domain.com
```

### Configuration Best Practices
1. **Never commit sensitive data** to version control
2. **Use environment-specific configs** for different deployment stages
3. **Validate environment variables** on application startup
4. **Use secrets management** for sensitive configuration

## Monitoring and Logging

### Application Monitoring
For production deployments, implement monitoring:

```javascript
// api/src/middleware/monitoring.js
import { performance } from 'perf_hooks';

export const requestLogger = (req, res, next) => {
  const start = performance.now();
  
  res.on('finish', () => {
    const duration = performance.now() - start;
    console.log({
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: `${duration.toFixed(2)}ms`,
      timestamp: new Date().toISOString()
    });
  });
  
  next();
};
```

### Health Checks
Add health check endpoints:

```javascript
// api/src/routes/health.js
export const healthCheck = (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
};
```

### Error Tracking
Consider integrating error tracking services:
- **Sentry** - Comprehensive error tracking
- **LogRocket** - Session replay and error tracking
- **Bugsnag** - Error monitoring and reporting

## Security Considerations

### HTTPS Configuration
Always use HTTPS in production:

```bash
# Let's Encrypt with Certbot
sudo certbot --nginx -d your-domain.com
```

### Security Headers
Add security headers to your web server:

```nginx
# nginx.conf
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
```

### API Security
```javascript
// api/src/middleware/security.js
import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});
```

## CI/CD Pipeline

### GitHub Actions Example
```yaml
# .github/workflows/deploy.yml
name: Deploy Notes MD

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Test Frontend
        run: |
          cd web
          npm ci
          npm run lint
          npm run test
      
      - name: Test Backend
        run: |
          cd api
          npm ci
          npm run lint
          npm run test

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './web/dist'
          production-branch: main
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: "your-app-name"
          heroku_email: "your-email@example.com"
          appdir: "api"
```

## Troubleshooting Deployment

### Common Issues
1. **Build failures** - Check Node.js version compatibility
2. **Environment variables** - Verify all required variables are set
3. **CORS errors** - Configure CORS_ORIGIN properly
4. **Port conflicts** - Ensure PORT environment variable is set correctly

### Debugging Production Issues
1. **Check logs** - Use platform-specific logging tools
2. **Monitor performance** - Watch for memory leaks and slow responses
3. **Test endpoints** - Verify API functionality
4. **Browser console** - Check for frontend errors

### Rollback Strategy
1. **Keep previous builds** available for quick rollback
2. **Use blue-green deployments** for zero-downtime updates
3. **Database migrations** should be backward compatible
4. **Feature flags** to disable problematic features quickly