# Getting Started with Notes MD

This guide will help you get Notes MD up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

### 2. Set Up the Frontend

```bash
cd web
npm install
```

### 3. Set Up the API

```bash
cd ../api
npm install
```

### 4. Configure Environment Variables

Both the frontend and API support environment variables for configuration.

#### Frontend Environment Variables

```bash
cd ../web
cp .env.example .env
```

Edit the `.env` file to customize your settings. See the [main README](../README.md#environment-variables) for available variables.

#### API Environment Variables

```bash
cd ../api
cp .env.example .env
```

## Running the Application

### Start the API Server

```bash
cd api
npm run dev
```

The API will be available at `http://localhost:3000`

### Start the Frontend Development Server

```bash
cd web
npm run dev
```

The frontend will be available at `http://localhost:5173`

## First Steps

1. Open your browser and navigate to `http://localhost:5173`
2. Click the '+' button to create your first note
3. Start writing in Markdown format
4. See the real-time preview on the right panel

## What's Next?

- [ ] TODO: Add detailed feature walkthrough
- [ ] TODO: Add common configuration examples
- [ ] TODO: Add troubleshooting section
- [ ] TODO: Link to development guide for contributors