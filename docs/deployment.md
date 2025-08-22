# Deployment Guide

This guide covers deploying Notes MD to various production environments.

## Overview

Notes MD consists of two main components that can be deployed separately:
- **Frontend**: Static React application
- **API**: Node.js Express server

## Environment Variables

### Frontend

Create a `.env` file in the `web` directory:

```env
VITE_API_URL=https://your-api-domain.com
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
VITE_APP_TITLE=Notes MD
```

### API

Create a `.env` file in the `api` directory:

```env
PORT=3000
NODE_ENV=production
```

## Build Process

### Frontend

```bash
cd web
npm install
npm run build
```

The built files will be in the `web/dist` directory.

### API

```bash
cd api
npm install
npm run build
```

## Deployment Options

### Option 1: Traditional VPS/Server

TODO: Add detailed VPS deployment instructions.

### Option 2: Container Deployment

TODO: Add Docker deployment instructions.

### Option 3: Cloud Platforms

#### Vercel (Frontend)

TODO: Add Vercel deployment instructions.

#### Railway/Render (API)

TODO: Add Railway/Render deployment instructions.

#### AWS

TODO: Add AWS deployment instructions.

#### Azure

TODO: Add Azure deployment instructions.

### Option 4: Static Site Hosting

TODO: Add static site hosting options for frontend.

## Configuration

### Reverse Proxy

TODO: Add nginx/Apache configuration examples.

### SSL/TLS

TODO: Add SSL setup instructions.

### Domain Setup

TODO: Add domain configuration guidance.

## Monitoring and Logging

TODO: Add monitoring and logging setup instructions.

## Backup and Recovery

TODO: Add backup strategies and recovery procedures.

## Performance Optimization

TODO: Add production performance optimization tips.

## Security Hardening

TODO: Add security hardening guidelines for production.