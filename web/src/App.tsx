import { useState, useEffect } from 'react'
import { Box, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material'
import './App.css'
import NoteList from './components/NoteList'
import NoteEditor from './components/NoteEditor'
import NotePreview from './components/NotePreview'
import type { Note } from './services/notes/types'
import { notesService } from './services/notes/index'

function App() {
  // Use environment variable for default dark mode if available, otherwise default to false
  const defaultDarkMode = import.meta.env.VITE_ENABLE_DARK_MODE_BY_DEFAULT === 'true';
  const appTitle = import.meta.env.VITE_APP_TITLE || 'Notes MD';
  
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(defaultDarkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  // Load notes on initial render
  useEffect(() => {
    const allNotes = notesService.getAllNotes();
    setNotes(allNotes);
    
    // Set the first note as selected if available
    if (allNotes.length > 0) {
      setSelectedNoteId(allNotes[0].id);
    }
  }, []);

  const handleAddNote = () => {
    const newNote = notesService.addNote();
    setNotes(notesService.getAllNotes());
    setSelectedNoteId(newNote.id);
  };

  const handleDeleteNote = (noteId: string) => {
    notesService.deleteNote(noteId);
    const updatedNotes = notesService.getAllNotes();
    setNotes(updatedNotes);
    
    // If we deleted the selected note, select the first note if available
    if (selectedNoteId === noteId) {
      if (updatedNotes.length > 0) {
        setSelectedNoteId(updatedNotes[0].id);
      } else {
        setSelectedNoteId(null);
      }
    }
  };

  const handleNoteChange = (updatedNote: Note) => {
    notesService.updateNote(updatedNote);
    setNotes(notesService.getAllNotes());
  };

  const selectedNote = notes.find(note => note.id === selectedNoteId) || null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {appTitle}
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  color="default"
                />
              }
              label="Dark Mode"
            />
          </Toolbar>
        </AppBar>
        
        <Box sx={{ flexGrow: 1, overflow: 'hidden', p: 2 }}>
          <Box sx={{ display: 'flex', height: '100%', gap: 2 }}>
            <Box sx={{ width: '25%', height: '100%' }}>
              <NoteList
                notes={notes}
                selectedNoteId={selectedNoteId}
                onNoteSelect={setSelectedNoteId}
                onAddNote={handleAddNote}
                onDeleteNote={handleDeleteNote}
              />
            </Box>
            <Box sx={{ width: '37.5%', height: '100%' }}>
              <NoteEditor
                note={selectedNote}
                onNoteChange={handleNoteChange}
              />
            </Box>
            <Box sx={{ width: '37.5%', height: '100%' }}>
              <NotePreview note={selectedNote} />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
