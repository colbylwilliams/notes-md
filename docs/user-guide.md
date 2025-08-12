# User Guide

Learn how to effectively use Notes MD for creating, editing, and managing your markdown notes.

## Overview

Notes MD is a web-based markdown note-taking application that provides real-time preview and editing capabilities. It features a clean, intuitive interface with a note list, markdown editor, and live preview panel.

## Application Layout

The Notes MD interface consists of three main sections:

1. **Note List** (Left Panel) - Shows all your notes with titles and timestamps
2. **Markdown Editor** (Center Panel) - Where you write and edit your notes
3. **Live Preview** (Right Panel) - Real-time rendered view of your markdown

## Features

### Creating Notes

#### Adding a New Note
1. Click the **+** button in the top-right corner of the note list
2. A new note will be created with default content: "# Untitled Note"
3. The new note will automatically be selected in the editor
4. Start typing to replace the default content

**Default Note Template:**
```markdown
# Untitled Note

Start writing your note here...
```

### Editing Notes

#### Selecting a Note
- Click on any note in the note list to open it in the editor
- The selected note will be highlighted with a blue background
- The editor and preview will update to show the selected note's content

#### Writing in Markdown
The editor supports full GitHub Flavored Markdown syntax:

**Basic Formatting:**
- `# Heading 1` - Large heading
- `## Heading 2` - Medium heading  
- `### Heading 3` - Small heading
- `**bold text**` - **Bold text**
- `*italic text*` - *Italic text*
- `` `code` `` - `Inline code`

**Lists:**
```markdown
- Bullet point 1
- Bullet point 2
  - Nested bullet point

1. Numbered item 1
2. Numbered item 2
```

**Links and Images:**
```markdown
[Link text](https://example.com)
![Image alt text](image-url.jpg)
```

**Code Blocks:**
````markdown
```javascript
function hello() {
  console.log("Hello, World!");
}
```
````

#### Auto-Save Functionality
- Notes are automatically saved to your browser's local storage as you type
- No manual save action is required
- Your notes persist between browser sessions

#### Title Extraction
- The note title is automatically extracted from the first line of content
- If the first line starts with `# `, the text after it becomes the title
- If the first line doesn't start with `# `, the entire first line becomes the title
- Empty notes default to "Untitled Note"

**Examples:**
```markdown
# My Meeting Notes    → Title: "My Meeting Notes"
Shopping List        → Title: "Shopping List"
                     → Title: "Untitled Note" (empty note)
```

### Managing Notes

#### Viewing Note Information
Each note in the list displays:
- **Title** - Extracted from the note content
- **Last Modified** - Timestamp showing when the note was last updated

#### Deleting Notes
1. Click the **trash icon** (🗑️) next to any note in the list
2. The note will be immediately deleted
3. If the deleted note was selected, the editor will clear

**Note:** Deleted notes cannot be recovered, so delete with caution.

#### Organizing Notes
- Notes are automatically sorted by creation date (newest first)
- Use meaningful titles by starting your notes with `# Title`
- Consider using consistent naming conventions for better organization

## User Interface Features

### Dark Mode
- Toggle dark mode using the switch in the top-right corner of the application
- Dark mode setting is remembered between sessions
- Can be set as default through environment variables

### Responsive Design
- The application adapts to different screen sizes
- On smaller screens, panels may stack vertically
- Touch-friendly interface for mobile devices

### Real-Time Preview
- The preview panel updates instantly as you type
- See exactly how your markdown will be rendered
- Supports all GitHub Flavored Markdown features including tables, code blocks, and task lists

## Keyboard Shortcuts

### Text Editing
- `Ctrl+A` (Cmd+A on Mac) - Select all text
- `Ctrl+C` (Cmd+C on Mac) - Copy selected text
- `Ctrl+V` (Cmd+V on Mac) - Paste text
- `Ctrl+Z` (Cmd+Z on Mac) - Undo
- `Ctrl+Y` (Cmd+Y on Mac) - Redo
- `Tab` - Insert indentation
- `Shift+Tab` - Remove indentation

### Application Navigation
- Click on notes in the list to switch between them
- Use mouse wheel or scrollbar to navigate long notes

## Data Management

### Storage
- All notes are stored locally in your browser's localStorage
- Notes persist between browser sessions
- Each browser profile maintains separate note storage

### Backup Considerations
- Notes are only stored locally - no cloud backup by default
- Consider manually copying important notes to external storage
- Clear browser data will delete all notes

### Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript to be enabled
- LocalStorage must be available and enabled

## Tips and Best Practices

### Writing Effective Notes
1. **Use descriptive titles** - Start with `# Title` for clear identification
2. **Structure with headings** - Use `##` and `###` for organization
3. **Use lists** - Break down information into bullet points or numbered lists
4. **Add code blocks** - Use triple backticks for code snippets
5. **Include links** - Reference external resources with markdown links

### Organization Strategies
- Use consistent naming conventions (e.g., "Meeting - YYYY-MM-DD")
- Start notes with a brief summary or agenda
- Use tags in titles (e.g., "#work", "#personal") for categorization
- Keep notes focused on single topics

### Performance Tips
- Very long notes may impact editor performance
- Consider breaking extremely long notes into smaller ones
- The preview panel renders in real-time, so complex markdown may cause slight delays

## Troubleshooting

### Common Issues

#### Notes Not Saving
- Ensure JavaScript is enabled in your browser
- Check that localStorage is available and not disabled
- Verify you're not in private/incognito mode (some browsers limit localStorage)

#### Preview Not Updating
- Refresh the page if preview stops updating
- Check browser console for JavaScript errors
- Ensure you're using a supported browser

#### Performance Issues
- Try refreshing the page
- Check if you have very long notes that might slow rendering
- Close other browser tabs to free up memory

#### Dark Mode Not Working
- Clear browser cache and reload the page
- Check if browser has disabled localStorage
- Try toggling the dark mode switch multiple times

### Getting Help
If you encounter issues not covered here:
1. Check the browser's developer console for error messages
2. Try refreshing the page or clearing browser cache
3. Verify your browser meets the minimum requirements
4. Report persistent issues to the project repository