# Deployment Guide

<!-- TODO: Complete deployment documentation with step-by-step instructions -->

## Overview

This guide covers how to deploy Notes MD to various platforms and environments.

## Production Build

### Frontend

```bash
cd web
npm install
npm run build
```

The built files will be in the `web/dist/` directory.

### Backend

```bash
cd api
npm install
npm run build
```

The compiled JavaScript will be in the `api/dist/` directory.

## Deployment Options

### Docker (Recommended)

<!-- TODO: Create Dockerfile and docker-compose.yml -->
<!-- TODO: Document Docker deployment process -->

Docker configuration is not yet available. This is a TODO item.

### Static Hosting (Frontend Only)

The frontend can be deployed to any static hosting service:

#### Vercel

<!-- TODO: Add Vercel deployment instructions -->

#### Netlify

<!-- TODO: Add Netlify deployment instructions -->

#### GitHub Pages

<!-- TODO: Add GitHub Pages deployment instructions -->

### Full Stack Hosting

#### Heroku

<!-- TODO: Add Heroku deployment instructions -->

#### Railway

<!-- TODO: Add Railway deployment instructions -->

#### DigitalOcean App Platform

<!-- TODO: Add DigitalOcean deployment instructions -->

## Environment Variables

### Frontend

Environment variables for the frontend must be prefixed with `VITE_`:

- `VITE_API_URL`: Base URL for API endpoints
- `VITE_ENABLE_DARK_MODE_BY_DEFAULT`: Enable dark mode by default
- `VITE_ENABLE_AUTOSAVE`: Enable autosave functionality
- `VITE_APP_TITLE`: Application title
- `VITE_AUTOSAVE_INTERVAL`: Autosave interval in milliseconds

### Backend

- `PORT`: Port for the API server (default: 3000)
- `NODE_ENV`: Environment (development, production)

## Database Setup

<!-- TODO: Document database setup when persistence is added -->

Currently, Notes MD uses local storage for persistence. Database integration is a future enhancement.

## SSL/TLS Configuration

<!-- TODO: Document SSL setup for production -->

## Monitoring and Logging

<!-- TODO: Document monitoring and logging setup -->

## Backup and Recovery

<!-- TODO: Document backup strategies when database is implemented -->

## Performance Optimization

<!-- TODO: Document performance optimization techniques -->

## Security Considerations

<!-- TODO: Document security best practices -->

## Troubleshooting

<!-- TODO: Add common deployment issues and solutions -->

## Scaling

<!-- TODO: Document scaling strategies -->