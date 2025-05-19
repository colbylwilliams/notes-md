import { useState, useEffect } from 'react';
import { TextField, Paper, Box } from '@mui/material';
import type { Note } from '../services/notes/types';

interface NoteEditorProps {
  note: Note | null;
  onNoteChange: (updatedNote: Note) => void;
}

const NoteEditor = ({ note, onNoteChange }: NoteEditorProps) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setContent(note.content);
    } else {
      setContent('');
    }
  }, [note]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    
    if (note) {
      const updatedNote = {
        ...note,
        content: newContent,
        title: extractTitle(newContent),
        updatedAt: new Date()
      };
      onNoteChange(updatedNote);
    }
  };

  // Extract the first line as the title, or use "Untitled Note" if empty
  const extractTitle = (text: string): string => {
    const firstLine = text.split('\n')[0].trim();
    if (firstLine.startsWith('# ')) {
      return firstLine.substring(2);
    }
    return firstLine || 'Untitled Note';
  };

  if (!note) {
    return (
      <Paper elevation={0} sx={{ height: '100%', p: 2, bgcolor: 'grey.100' }}>
        <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          Select a note or create a new one
        </Box>
      </Paper>
    );
  }

  return (
    <Paper elevation={0} sx={{ height: '100%', p: 0 }}>
      <TextField
        multiline
        fullWidth
        placeholder="# Note Title
        
Write your markdown here..."
        value={content}
        onChange={handleContentChange}
        variant="outlined"
        sx={{
          height: '100%',
          '& .MuiOutlinedInput-root': {
            height: '100%',
            alignItems: 'flex-start',
            padding: 2,
            fontFamily: 'monospace'
          },
          '& .MuiOutlinedInput-input': {
            height: '100% !important',
            overflow: 'auto'
          }
        }}
      />
    </Paper>
  );
};

export default NoteEditor;