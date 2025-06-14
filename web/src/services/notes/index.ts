import type { Note } from './types';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'notes';

export class NotesService {
  private notes: Note[] = [];

  constructor() {
    this.loadNotes();
    this.initializeDefaultNotes();
  }

  /**
   * Initializes default notes if no notes exist
   */
  private initializeDefaultNotes(): void {
    if (this.notes.length === 0) {
      this.createCrosswordSolutionNote();
    }
  }

  /**
   * Creates a default crossword puzzle solution note
   */
  private createCrosswordSolutionNote(): void {
    const now = new Date();
    const crosswordContent = `# Crossword Puzzle Solution

## The Puzzle

This crossword puzzle features a 5×5 grid with numbered clues for both across and down entries.

## Clues

### Across:
1. Once around a Formula 1 track → **LAP**
4. Second-year student, for short → **SOPH**  
5. Opposite of "micro" → **MACRO**
6. A second time → **AGAIN**
7. Athlete's postscore flourish → **SPIKE**

### Down:
1. Opposite of "global" → **LOCAL**
2. Birth month for some Tauruses → **APRIL**
3. Fake → **FALSE**
4. Shade of green named after an herb → **SAGE**
5. Brand whose C stands for "cosmetics" → **MAC**

## Solution Grid

Based on the crossword layout and intersections:

\`\`\`
    ■   L   A   P   ■
    S   O   P   H   ■
    M   C   R   L   ■
    A   A   I   S   ■
    L   L   L   E   ■
\`\`\`

Where each word intersects properly:
- **LAP** (1-Across) intersects with **LOCAL** (1-Down) at "L"
- **APRIL** (2-Down) intersects with **LAP** (1-Across) at "A"  
- **FALSE** (3-Down) intersects with **LAP** (1-Across) at "P"
- **SOPH** (4-Across) intersects with **SAGE** (4-Down) at "S"
- **MACRO** (5-Across) contains the "M" from **MAC** (5-Down)

## Complete Answer Key

**Across:**
1. LAP (3 letters)
4. SOPH (4 letters) 
5. MACRO (5 letters)
6. AGAIN (5 letters)
7. SPIKE (5 letters)

**Down:**
1. LOCAL (5 letters)
2. APRIL (5 letters)
3. FALSE (5 letters)  
4. SAGE (4 letters)
5. MAC (3 letters)

*Puzzle solved!* 🎯`;

    const crosswordNote: Note = {
      id: uuidv4(),
      title: 'Crossword Puzzle Solution',
      content: crosswordContent,
      createdAt: now,
      updatedAt: now
    };
    
    this.notes = [crosswordNote];
    this.saveNotes();
  }

  /**
   * Loads notes from localStorage
   */
  private loadNotes(): void {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes);
        // Convert string dates back to Date objects
        this.notes = parsedNotes.map((note: {id: string; title: string; content: string; createdAt: string; updatedAt: string}) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt),
        }));
      } catch (error) {
        console.error('Error parsing saved notes:', error);
        this.notes = [];
      }
    }
  }

  /**
   * Saves notes to localStorage
   */
  private saveNotes(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes));
  }

  /**
   * Gets all notes
   */
  getAllNotes(): Note[] {
    return [...this.notes];
  }

  /**
   * Gets a note by ID
   */
  getNoteById(id: string): Note | null {
    return this.notes.find(note => note.id === id) || null;
  }

  /**
   * Adds a new note
   */
  addNote(): Note {
    const now = new Date();
    const newNote: Note = {
      id: uuidv4(),
      title: 'Untitled Note',
      content: '# Untitled Note\n\nStart writing your note here...',
      createdAt: now,
      updatedAt: now
    };
    
    this.notes = [newNote, ...this.notes];
    this.saveNotes();
    
    return newNote;
  }

  /**
   * Updates an existing note
   */
  updateNote(updatedNote: Note): Note {
    this.notes = this.notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    );
    this.saveNotes();
    
    return updatedNote;
  }

  /**
   * Deletes a note by ID
   */
  deleteNote(noteId: string): void {
    this.notes = this.notes.filter(note => note.id !== noteId);
    this.saveNotes();
  }
}

// Export a singleton instance of the service
export const notesService = new NotesService();

// Re-export the types
export type { Note } from './types';