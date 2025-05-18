import { Paper, Box } from '@mui/material';
import MarkdownPreview from '@uiw/react-markdown-preview';
import type { Note } from '../types';

interface NotePreviewProps {
  note: Note | null;
}

const NotePreview = ({ note }: NotePreviewProps) => {
  if (!note) {
    return (
      <Paper elevation={0} sx={{ height: '100%', p: 2, bgcolor: 'grey.100' }}>
        <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          No note selected
        </Box>
      </Paper>
    );
  }

  return (
    <Paper elevation={0} sx={{ height: '100%', p: 2, overflow: 'auto' }}>
      <MarkdownPreview source={note.content} />
    </Paper>
  );
};

export default NotePreview;