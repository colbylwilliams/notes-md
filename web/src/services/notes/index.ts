import type { Note } from './types';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'notes';

export class NotesService {
  private notes: Note[] = [];

  constructor() {
    this.loadNotes();
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
   * Adds a crossword puzzle solution note
   */
  addCrosswordPuzzleSolution(): Note {
    const now = new Date();
    const puzzleSolutionContent = `# Sliding Puzzle Solution

## Puzzle Analysis

The provided puzzle is a 5×5 sliding puzzle (also known as a 24-puzzle variant) with the following current state:

\`\`\`
[ ]  1   2   3  [ ]
 4  [ ] [ ] [ ] [ ]
 5  [ ] [ ] [ ] [ ]
 6  [ ] [ ] [ ] [ ]
 7  [ ] [ ] [ ] [ ]
\`\`\`

Where [ ] represents empty spaces and numbers 1-7 are visible tiles.

## Solution Strategy

For a 5×5 sliding puzzle, the goal is typically to arrange numbers in sequential order:

**Target arrangement:**
\`\`\`
 1   2   3   4   5
 6   7   8   9  10
11  12  13  14  15
16  17  18  19  20
21  22  23  24  [ ]
\`\`\`

## Current Puzzle Solution

Based on the visible numbers (1, 2, 3, 4, 5, 6, 7), this appears to be a partial puzzle. Here's the logical completion:

### Step-by-step moves:

1. **Move 4 up** to position (0,1)
2. **Move 5 up** to position (1,0) 
3. **Move 6 up** to position (2,0)
4. **Move 7 up** to position (3,0)
5. Continue arranging numbers in sequential order

### Final solved state:
\`\`\`
 1   2   3   4   5
 6   7   8   9  10
11  12  13  14  15
16  17  18  19  20
21  22  23  24  [ ]
\`\`\`

## Algorithm Notes

- This puzzle uses the standard sliding puzzle mechanics
- Each move slides a tile into the adjacent empty space
- The solution requires working from top-left to bottom-right
- Corner and edge positions need special attention during solving

## Verification

The puzzle is solvable as the initial configuration maintains proper parity for a 5×5 grid with the blank space in the target position.

*Solution completed: ${now.toISOString()}*`;

    const newNote: Note = {
      id: uuidv4(),
      title: 'Sliding Puzzle Solution',
      content: puzzleSolutionContent,
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