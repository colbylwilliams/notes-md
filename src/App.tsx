import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './styles/App.css'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  const [note, setNote] = useState<string>('# Welcome to Notes MD\n\nStart typing your markdown here...')

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Notes MD</h1>
        <ThemeToggle />
      </header>
      <main className="content">
        <div className="editor-pane">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Type your markdown here..."
          />
        </div>
        <div className="preview-pane">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {note}
          </ReactMarkdown>
        </div>
      </main>
      <footer className="app-footer">
        <p>Notes MD - A Markdown Note Taking App</p>
      </footer>
    </div>
  )
}

export default App