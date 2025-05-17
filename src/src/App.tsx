import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState<string>('# Welcome to Notes-MD\n\nA simple markdown note-taking app.\n\n## Features\n\n- Write notes in Markdown\n- Preview rendered Markdown\n- Support for code highlighting\n\n```javascript\nconst greeting = "Hello, world!";\nconsole.log(greeting);\n```')

  return (
    <div className="app-container">
      <header>
        <h1>Notes MD</h1>
        <p>Markdown Notes</p>
      </header>
      <div className="editor-container">
        <div className="editor">
          <h2>Edit</h2>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="markdown-input"
          />
        </div>
        <div className="preview">
          <h2>Preview</h2>
          <div className="markdown-output">
            <ReactMarkdown 
              rehypePlugins={[rehypeHighlight]}
              remarkPlugins={[remarkGfm]}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
