import { useState } from 'react'
import './App.css'

function App() {
  const [note, setNote] = useState<string>('# Welcome to Notes MD\n\nStart typing your markdown notes here...')

  return (
    <>
      <header>
        <h1>Notes MD</h1>
        <p>A simple markdown note-taking app</p>
      </header>
      <main>
        <div className="editor-container">
          <textarea 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Start typing your markdown notes here..."
            className="markdown-editor"
          />
        </div>
        <div className="preview-container">
          {/* Markdown preview will go here in future updates */}
          <div className="markdown-preview">
            <pre>{note}</pre>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
