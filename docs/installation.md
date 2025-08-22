# Installation Guide

## System Requirements

- Node.js v14 or higher
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Quick Start

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md
   ```

2. **Install and run the frontend**
   ```bash
   cd web
   npm install
   npm run dev
   ```

3. **Install and run the API** (in a new terminal)
   ```bash
   cd api
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - API: http://localhost:3000

### Option 2: Production Build

TODO: Add production installation instructions

## Environment Configuration

### Frontend Environment Variables

Create a `.env` file in the `web/` directory:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=Notes MD
VITE_ENABLE_DARK_MODE_BY_DEFAULT=false
```

### API Environment Variables

Create a `.env` file in the `api/` directory:

```env
PORT=3000
NODE_ENV=development
```

## Troubleshooting

### Common Issues

TODO: Add common installation issues and solutions

### Port Conflicts

If the default ports are in use, you can change them:
- Frontend: Modify `vite.config.ts`
- API: Set `PORT` environment variable

## Docker Setup

TODO: Add Docker installation instructions if needed

## Verification

After installation, verify everything is working:

1. Open http://localhost:5173 in your browser
2. Create a new note
3. Verify the note appears in the list
4. Test the markdown preview functionality