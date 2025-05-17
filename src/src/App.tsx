import { useState, useEffect } from 'react'
import MarkdownIt from 'markdown-it'
import './App.css'

function App() {
  const [note, setNote] = useState<string>('# Hello, Markdown!\n\nThis is a sample note. You can edit it here.\n\n- List item 1\n- List item 2\n\n```js\n// Code example\nconst hello = "world";\nconsole.log(hello);\n```')
  const [html, setHtml] = useState<string>('')
  const md = new MarkdownIt()

  useEffect(() => {
    setHtml(md.render(note))
  }, [note])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Notes MD</h1>
        <p>A simple markdown note-taking app</p>
      </header>
      <main className="note-container">
        <div className="editor-pane">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Start typing your markdown here..."
            className="markdown-editor"
          />
        </div>
        <div className="preview-pane">
          <div 
            className="markdown-preview"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </div>
  )
}

export default App
