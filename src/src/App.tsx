import { useState, useEffect } from 'react'
import { Box, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material'
import './App.css'
import NoteList from './components/NoteList'
import NoteEditor from './components/NoteEditor'
import NotePreview from './components/NotePreview'
import type { Note } from './types'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes);
        // Convert string dates back to Date objects
        const formattedNotes = parsedNotes.map((note: any) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt),
        }));
        setNotes(formattedNotes);
        
        // Set the first note as selected if available
        if (formattedNotes.length > 0) {
          setSelectedNoteId(formattedNotes[0].id);
        }
      } catch (error) {
        console.error('Error parsing saved notes:', error);
      }
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    const now = new Date();
    const newNote: Note = {
      id: uuidv4(),
      title: 'Untitled Note',
      content: '# Untitled Note\n\nStart writing your note here...',
      createdAt: now,
      updatedAt: now
    };
    
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
  };

  const handleDeleteNote = (noteId: string) => {
    const newNotes = notes.filter(note => note.id !== noteId);
    setNotes(newNotes);
    
    // If we deleted the selected note, select the first note if available
    if (selectedNoteId === noteId) {
      if (newNotes.length > 0) {
        setSelectedNoteId(newNotes[0].id);
      } else {
        setSelectedNoteId(null);
      }
    }
  };

  const handleNoteChange = (updatedNote: Note) => {
    const newNotes = notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(newNotes);
  };

  const selectedNote = notes.find(note => note.id === selectedNoteId) || null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Notes MD
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
