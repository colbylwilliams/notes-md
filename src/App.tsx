import { useState } from 'react'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('# Hello, Markdown Notes!');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Notes MD</h1>
        <p>A simple markdown note-taking app</p>
      </header>
      <main className="note-container">
        <div className="editor-pane">
          <textarea 
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Write your markdown notes here..."
          />
        </div>
        <div className="preview-pane">
          <div className="markdown-preview">
            {/* We'll integrate a proper markdown renderer in the future */}
            <pre>{markdown}</pre>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App