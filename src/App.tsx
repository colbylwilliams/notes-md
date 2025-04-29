import { useState } from 'react'
import { marked } from 'marked'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState<string>('# Hello, Markdown!\n\nStart typing your notes here...')

  // Parse markdown to HTML
  const getMarkdownHtml = () => {
    return { __html: marked(markdown) }
  }

  return (
    <div className="app-container">
      <header>
        <h1>notes-md</h1>
        <p>A simple markdown note-taking app</p>
      </header>
      
      <main>
        <div className="editor-container">
          <div className="editor">
            <h2>Edit</h2>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Type your markdown here..."
            />
          </div>
          
          <div className="preview">
            <h2>Preview</h2>
            <div 
              className="markdown-preview"
              dangerouslySetInnerHTML={getMarkdownHtml()}
            />
          </div>
        </div>
      </main>
      
      <footer>
        <p>Made with React, TypeScript, and Vite</p>
      </footer>
    </div>
  )
}

export default App
