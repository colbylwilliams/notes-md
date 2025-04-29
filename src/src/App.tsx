import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.css'

function App() {
  const [markdownContent, setMarkdownContent] = useState('# Hello, Notes-MD!\n\nThis is a **markdown** note-taking app.\n\n- Create lists\n- Write _formatted_ text\n- Add `code blocks`')

  return (
    <div className="app-container">
      <header>
        <h1>Notes MD</h1>
        <p>A markdown note-taking application</p>
      </header>

      <div className="editor-container">
        <div className="editor-section">
          <h2>Editor</h2>
          <textarea
            value={markdownContent}
            onChange={(e) => setMarkdownContent(e.target.value)}
            className="markdown-editor"
            placeholder="Write your markdown notes here..."
          />
        </div>
        
        <div className="preview-section">
          <h2>Preview</h2>
          <div className="markdown-preview">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
