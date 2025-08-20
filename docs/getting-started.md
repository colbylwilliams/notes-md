# Getting Started with Notes MD

## Overview

Notes MD is a web application for taking and managing notes in Markdown format, featuring real-time preview and a REST API.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Setup Frontend

```bash
cd web
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 3. Setup API (Optional)

```bash
cd api
npm install
cp .env.example .env
npm run dev
```

The API will be available at `http://localhost:3000`

## Next Steps

- Read the [User Guide](./user-guide.md) to learn how to use Notes MD
- Check out the [Developer Guide](./developer-guide.md) for development information
- Explore the [API Reference](./api-reference.md) for integration details

## Troubleshooting

<!-- TODO: Add common troubleshooting scenarios -->

For issues not covered here, please check our [GitHub Issues](https://github.com/colbylwilliams/notes-md/issues) or create a new one.