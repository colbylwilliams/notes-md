# Getting Started

This guide will help you get Notes MD up and running on your local machine.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

### Frontend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/colbylwilliams/notes-md.git
   cd notes-md
   ```

2. Install frontend dependencies
   ```bash
   cd web
   npm install
   ```

3. Configure environment variables (optional)
   ```bash
   cp .env.example .env
   ```
   Modify the `.env` file with your specific configuration.

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Backend API Setup

1. Install API dependencies
   ```bash
   cd api
   npm install
   ```

2. Configure environment variables
   ```bash
   cp .env.example .env
   ```
   Modify the `.env` file with your specific configuration.

3. Start the API development server
   ```bash
   npm run dev
   ```

4. The API will be available at `http://localhost:3000`

## Next Steps

- Check out the [Architecture](architecture.md) to understand how the application is structured
- Review the [API Reference](api-reference.md) for available endpoints
- Read the [Contributing](contributing.md) guidelines if you want to contribute

## TODO

- [ ] Add detailed troubleshooting section
- [ ] Include common configuration examples
- [ ] Add screenshots of the installation process
- [ ] Document Docker setup option
- [ ] Add quick start for different operating systems
