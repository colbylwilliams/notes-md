# Deployment Guide

This guide covers how to deploy Notes MD to various environments.

## Production Build

### Frontend

```bash
cd web
npm run build
```

The built files will be in `web/dist/`.

### API

```bash
cd api
npm run build
```

The compiled JavaScript will be in `api/dist/`.

## Deployment Options

### Option 1: Traditional Server Deployment

TODO: Add instructions for deploying to a traditional server

### Option 2: Docker Deployment

TODO: Add Docker deployment instructions

### Option 3: Cloud Platform Deployment

#### Vercel (Frontend)

TODO: Add Vercel deployment instructions

#### Railway/Render (API)

TODO: Add Railway/Render deployment instructions

#### AWS

TODO: Add AWS deployment instructions

#### Azure

TODO: Add Azure deployment instructions

## Environment Configuration

### Production Environment Variables

#### API
- `NODE_ENV=production`
- `PORT` - Server port
- Database configuration (when implemented)

#### Frontend
- `VITE_API_URL` - Production API URL
- Other environment-specific variables

## Security Considerations

TODO: Add security best practices for production deployment

## Monitoring and Logging

TODO: Add monitoring and logging setup instructions

## Database Setup

TODO: Add database setup instructions when persistence is implemented

## SSL/HTTPS Setup

TODO: Add SSL certificate setup instructions

## Backup and Recovery

TODO: Add backup and recovery procedures