# Deployment Guide

This guide covers different deployment options for Notes MD.

## Production Build

### Frontend

```bash
cd web
npm run build
```

The build artifacts will be stored in the `web/dist/` directory.

### API

```bash
cd api
npm run build
npm start
```

## Deployment Options

### Docker

<!-- TODO: Create Dockerfiles for frontend and API -->
<!-- TODO: Add docker-compose.yml for easy deployment -->
<!-- TODO: Document Docker deployment steps -->

### Cloud Providers

#### Vercel (Frontend)

<!-- TODO: Document Vercel deployment steps -->
<!-- TODO: Add vercel.json configuration -->

#### Railway/Render (API)

<!-- TODO: Document API deployment on Railway/Render -->

#### AWS

<!-- TODO: Document AWS deployment options -->
<!-- TODO: Add CloudFormation/CDK templates -->

#### Azure

<!-- TODO: Document Azure deployment options -->

#### Google Cloud Platform

<!-- TODO: Document GCP deployment options -->

### Traditional Hosting

#### VPS/Dedicated Server

<!-- TODO: Document manual server setup -->
<!-- TODO: Add nginx configuration examples -->
<!-- TODO: Document SSL certificate setup -->

## Environment Variables

### Production Environment Variables

#### Frontend
- `VITE_API_URL`: Production API URL
- `VITE_APP_TITLE`: Application title

#### API
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Set to `production`

<!-- TODO: Document all environment variables -->
<!-- TODO: Add security considerations -->

## Database Setup

<!-- TODO: Document database requirements if/when implemented -->

## Monitoring and Logging

<!-- TODO: Document logging setup -->
<!-- TODO: Add monitoring recommendations -->

## Backup and Recovery

<!-- TODO: Document backup strategies -->

## Performance Optimization

<!-- TODO: Document performance best practices -->
<!-- TODO: Add caching strategies -->

## Security Considerations

<!-- TODO: Document security best practices -->
<!-- TODO: Add HTTPS setup instructions -->

## Troubleshooting

<!-- TODO: Document common deployment issues -->