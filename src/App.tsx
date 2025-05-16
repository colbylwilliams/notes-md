import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [note, setNote] = useState('')

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Notes MD</h1>
      <div className="card">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your markdown notes here..."
          rows={10}
          cols={50}
        />
        <div>
          <h3>Preview:</h3>
          <div className="preview">
            {note || "Your markdown preview will appear here..."}
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        A simple markdown note-taking application
      </p>
    </>
  )
}

export default App
