import { useState } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState<string[]>([])
  const [currentNote, setCurrentNote] = useState<string>('')

  return (
    <>
      <div className="app-container">
        <header>
          <h1>Notes-MD</h1>
          <p>A markdown notes taking app</p>
        </header>
        <main>
          <div className="note-editor">
            <h2>Create Note</h2>
            <textarea
              placeholder="Write your markdown note here..."
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
            />
            <button
              onClick={() => {
                if (currentNote.trim()) {
                  setNotes([...notes, currentNote])
                  setCurrentNote('')
                }
              }}
            >
              Save Note
            </button>
          </div>
          <div className="notes-list">
            <h2>Your Notes</h2>
            {notes.length === 0 ? (
              <p>No notes yet. Create your first note!</p>
            ) : (
              <ul>
                {notes.map((note, index) => (
                  <li key={index}>
                    <pre>{note.substring(0, 50)}{note.length > 50 ? '...' : ''}</pre>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
