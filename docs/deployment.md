# Deployment Guide

## Overview

Notes MD can be deployed in various environments. This guide covers different deployment strategies.

## Environment Variables

### Frontend (.env)

```env
VITE_APP_TITLE=Notes MD
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
```

### Backend (.env)

```env
PORT=3000
NODE_ENV=production
```

## Production Build

### Frontend

```bash
cd web
npm run build
npm run preview  # Optional: preview production build
```

### Backend

```bash
cd api
npm run build
npm start
```

## Deployment Options

### Local Deployment

1. Build both frontend and backend
2. Serve frontend static files
3. Run backend API server
4. Configure reverse proxy (nginx/Apache)

### Docker (Planned)

```dockerfile
# Dockerfile examples to be added
```

### Cloud Platforms

- **Vercel**: Frontend deployment
- **Heroku**: Full-stack deployment
- **AWS**: Complete cloud infrastructure

## TODO

- [ ] Add Docker configuration
- [ ] Document environment-specific configurations
- [ ] Add CI/CD pipeline examples
- [ ] Document monitoring and logging
- [ ] Add backup and recovery procedures
- [ ] Document scaling strategies