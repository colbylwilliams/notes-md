# Getting Started with Notes MD

Welcome to Notes MD! This guide will help you get up and running with the application quickly.

## What is Notes MD?

Notes MD is a modern web application designed for creating, editing, and managing notes written in Markdown format. It provides a clean, intuitive interface with real-time preview capabilities.

## Quick Start

### Online Version
*TODO: Add link to hosted version when available*

### Local Installation

**Prerequisites:**
- Node.js (v14 or higher)
- npm or yarn

**Step 1: Clone and Setup**
```bash
git clone https://github.com/colbylwilliams/notes-md.git
cd notes-md
```

**Step 2: Install and Run Frontend**
```bash
cd web
npm install
npm run dev
```

**Step 3: Install and Run API (Optional)**
```bash
cd ../api
npm install
npm run dev
```

## First Steps

1. **Creating Your First Note**
   - Click the '+' button to create a new note
   - Start typing your markdown content
   - The title will automatically be extracted from the first heading

2. **Using Markdown**
   - Use `# Title` for the main title
   - Use `## Heading` for section headings
   - Use `**bold**` and `*italic*` for emphasis
   - View the live preview on the right panel

3. **Managing Notes**
   - Select notes from the left sidebar
   - Delete notes using the delete button
   - Notes are automatically saved as you type

## Next Steps

- Explore the [User Guide](./README.md) for detailed features
- Check out [Markdown syntax](https://www.markdownguide.org/basic-syntax/) if you're new to Markdown
- Configure the application using [environment variables](../configuration/README.md)

*TODO: Add screenshots and more detailed onboarding steps*