# Deployment Guide

## Overview

This guide covers deploying the Notes MD application to production environments.

## Architecture

Notes MD consists of two main components:
- **Frontend**: React SPA that can be served statically
- **API**: Node.js Express server

## Deployment Options

### Option 1: Static Frontend + Serverless API

- Deploy frontend to CDN (Vercel, Netlify, etc.)
- Deploy API to serverless platform (Vercel Functions, AWS Lambda, etc.)

### Option 2: Container Deployment

- Containerize both frontend and API
- Deploy to container platform (Docker, Kubernetes, etc.)

### Option 3: Traditional Server

- Deploy both components to VPS or dedicated server
- Use reverse proxy (nginx) for routing

## Environment Variables

### Production Frontend

```bash
VITE_API_URL=https://your-api-domain.com/api
VITE_APP_TITLE="Notes MD"
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
```

### Production API

```bash
NODE_ENV=production
PORT=3000
# Add database and other service configurations
```

## Build Process

### Frontend

```bash
cd web
npm install
npm run build
# Outputs to web/dist/
```

### API

```bash
cd api
npm install
npm run build
npm start
```

## TODO

- [ ] Add specific deployment instructions for popular platforms
- [ ] Document CI/CD pipeline setup
- [ ] Add database deployment and migration guides
- [ ] Include monitoring and logging setup
- [ ] Add SSL/TLS configuration
- [ ] Document backup and recovery procedures
- [ ] Add performance tuning guidelines
- [ ] Include security hardening checklist

## Health Checks

TODO: Document health check endpoints and monitoring setup.