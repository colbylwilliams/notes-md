# Deployment Guide

This guide covers deploying Notes MD to various environments and platforms.

## Production Build

### Frontend
```bash
cd web
npm run build
```
This creates a `dist/` folder with optimized static files.

### Backend
```bash
cd api
npm run build
npm start
```

## Deployment Options

### Option 1: Static Hosting + Serverless (Recommended)

**Frontend:** Deploy to Vercel, Netlify, or similar
**Backend:** Deploy to Vercel Functions, Netlify Functions, or AWS Lambda

<!-- TODO: Add specific deployment instructions for each platform -->

### Option 2: VPS/Server Deployment

**Requirements:**
- Node.js 14+
- Process manager (PM2 recommended)
- Reverse proxy (Nginx recommended)

<!-- TODO: Add detailed server setup instructions -->

### Option 3: Container Deployment

<!-- TODO: Add Docker and container deployment instructions -->

## Environment Configuration

### Production Environment Variables

**Frontend (.env.production):**
```env
VITE_API_URL=https://your-api-domain.com
VITE_APP_TITLE=Notes MD
```

**Backend (.env):**
```env
NODE_ENV=production
PORT=3000
```

## Database Setup

<!-- TODO: Add database setup when persistence is implemented -->
Currently uses local storage. Future versions will support database persistence.

## Monitoring and Logging

<!-- TODO: Add monitoring setup instructions -->

## Security Considerations

<!-- TODO: Add security checklist -->
- [ ] HTTPS configuration
- [ ] CORS settings
- [ ] Authentication setup
- [ ] Rate limiting
- [ ] Input validation

## Performance Optimization

### Frontend
- Static asset optimization
- Code splitting
- CDN configuration

### Backend
- Response caching
- Database optimization
- Rate limiting

## Backup and Recovery

<!-- TODO: Add backup procedures -->

## TODO

- [ ] Create Docker configuration
- [ ] Add CI/CD pipeline examples
- [ ] Document database migration procedures
- [ ] Add monitoring and alerting setup
- [ ] Create deployment automation scripts
- [ ] Add SSL certificate setup guide
- [ ] Document scaling strategies