import { useState } from 'react'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value)
  }

  // Note: In a real app, we would use a markdown library to render the preview
  // For simplicity, we're just displaying the raw markdown

  return (
    <div className="app-container">
      <div className="notes-header">
        <h1>Notes MD</h1>
        <p>A simple markdown note-taking app</p>
      </div>
      
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea 
          className="markdown-editor" 
          value={markdown} 
          onChange={handleChange}
          placeholder="Write your markdown here..."
        />
      </div>
      
      <div className="preview-container">
        <h2>Preview</h2>
        <div>
          {/* This is a placeholder for actual markdown rendering */}
          <pre>{markdown}</pre>
        </div>
      </div>
    </div>
  )
}

export default App