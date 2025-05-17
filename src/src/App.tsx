import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState<string>('# Hello, Markdown!\n\nStart typing your notes here...')

  return (
    <div className="app-container">
      <header>
        <h1>Notes MD</h1>
        <p>A simple markdown note-taking app</p>
      </header>
      <main>
        <div className="editor-container">
          <div className="editor">
            <h2>Editor</h2>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Write your markdown here..."
            />
          </div>
          <div className="preview">
            <h2>Preview</h2>
            <div className="markdown-content">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
