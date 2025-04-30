import { useState } from 'react';
import './styles/App.css';

function App() {
  const [note, setNote] = useState<string>('# Hello Notes MD\n\nStart writing your **markdown** notes here!');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Notes MD</h1>
        <p>A simple markdown note-taking app</p>
      </header>
      <main className="editor-container">
        <div className="editor">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your markdown here..."
          />
        </div>
        <div className="preview">
          <div className="markdown-preview">
            {/* In a real app, we would render markdown here */}
            <div dangerouslySetInnerHTML={{ __html: `<h1>Preview</h1><p>Markdown rendering will be implemented later.</p>` }} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;