# Frequently Asked Questions (FAQ)

## General Questions

### What is Notes MD?

Notes MD is a web-based application for creating, editing, and managing markdown notes with real-time preview functionality. It features a clean interface with a split-panel editor and preview, dark mode support, and a REST API for programmatic access.

### Is Notes MD free to use?

Yes, Notes MD is open source and free to use under the MIT License.

### Can I use Notes MD offline?

Currently, Notes MD requires a running backend API. Offline functionality is being considered for future releases.

## Technical Questions

### What technologies does Notes MD use?

**Frontend:**
- React 18
- TypeScript
- Material UI
- Vite
- React Markdown

**Backend:**
- Express.js
- Node.js
- TypeScript

### How is data stored?

Currently, Notes MD uses in-memory storage, which means notes are lost when the server restarts. Database integration is planned for future releases.

### Can I export my notes?

TODO: Add export functionality information when implemented

### Does Notes MD support real-time collaboration?

Not currently, but this is a planned feature for future releases.

## Usage Questions

### How do I create a new note?

Click the '+' button in the note list panel to create a new note. You can immediately start typing in the editor.

### How do I set a note title?

Start your note with a heading using the `# Title` syntax. The application will automatically extract this as the note title.

### Can I customize the appearance?

Yes! You can toggle between light and dark modes using the switch in the top-right corner. Additional customization options may be added in future releases.

### What markdown features are supported?

Notes MD supports standard markdown syntax including:
- Headers (`# ## ###`)
- Bold and italic text
- Lists (ordered and unordered)
- Links
- Code blocks and inline code
- Tables
- TODO: Add complete list of supported features

## Installation and Setup

### What are the system requirements?

- Node.js v14 or higher
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Can I run Notes MD on Windows?

Yes, Notes MD runs on Windows, macOS, and Linux.

### How do I update to the latest version?

Pull the latest changes from the repository and restart your development server:
```bash
git pull origin main
cd web && npm install
cd ../api && npm install
```

## Deployment Questions

### Can I deploy Notes MD to production?

Yes, but keep in mind that the current version uses in-memory storage. For production use, consider:
- Implementing persistent storage
- Adding authentication
- Setting up proper monitoring
- Following security best practices

### What hosting options are recommended?

TODO: Add recommended hosting platforms and configurations

## Development Questions

### How can I contribute to Notes MD?

See our [Contributing Guide](./contributing.md) for detailed information on how to contribute code, documentation, or bug reports.

### Can I add custom features?

Absolutely! Notes MD is open source. You can fork the repository, add your features, and submit a pull request.

### How do I report bugs?

Please report bugs through [GitHub Issues](https://github.com/colbylwilliams/notes-md/issues) with detailed information about the problem.

## Future Plans

### What features are planned?

High-priority planned features include:
- Persistent data storage (database integration)
- User authentication
- Note sharing and collaboration
- Advanced search functionality
- Export/import capabilities
- Mobile application

### When will database storage be added?

Database integration is a high priority item but no specific timeline has been set. Follow the project for updates.

### Will there be a mobile app?

A mobile application is being considered for future development.

## Support

### Where can I get help?

- Check this FAQ first
- Review the [documentation](./README.md)
- Search [existing issues](https://github.com/colbylwilliams/notes-md/issues)
- Create a new issue if your question isn't answered

### How do I stay updated on new releases?

- Star and watch the GitHub repository
- Follow the release notes
- Check the project's README for announcements

---

**Don't see your question here?** Feel free to [open an issue](https://github.com/colbylwilliams/notes-md/issues) and we'll add it to this FAQ!