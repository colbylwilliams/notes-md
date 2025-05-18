import { List, ListItem, ListItemButton, ListItemText, Paper, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import type { Note } from '../types';

interface NoteListProps {
  notes: Note[];
  selectedNoteId: string | null;
  onNoteSelect: (noteId: string) => void;
  onAddNote: () => void;
  onDeleteNote: (noteId: string) => void;
}

const NoteList = ({ notes, selectedNoteId, onNoteSelect, onAddNote, onDeleteNote }: NoteListProps) => {
  return (
    <Paper elevation={2} sx={{ height: '100%', overflow: 'auto' }}>
      <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Notes</Typography>
        <IconButton color="primary" onClick={onAddNote}>
          <AddIcon />
        </IconButton>
      </Box>
      <List>
        {notes.length === 0 ? (
          <ListItem>
            <ListItemText primary="No notes yet" secondary="Click the + button to create one" />
          </ListItem>
        ) : (
          notes.map((note) => (
            <ListItem
              key={note.id}
              disablePadding
              secondaryAction={
                <IconButton edge="end" onClick={() => onDeleteNote(note.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemButton
                selected={selectedNoteId === note.id}
                onClick={() => onNoteSelect(note.id)}
              >
                <ListItemText
                  primary={note.title || 'Untitled Note'}
                  secondary={new Date(note.updatedAt).toLocaleString()}
                />
              </ListItemButton>
            </ListItem>
          ))
        )}
      </List>
    </Paper>
  );
};

export default NoteList;