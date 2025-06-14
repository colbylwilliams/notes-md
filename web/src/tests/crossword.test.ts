import { describe, it, expect, beforeEach } from 'vitest';
import { NotesService } from '../services/notes/index';

describe('Crossword Solution', () => {
  let notesService: NotesService;

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    notesService = new NotesService();
  });

  it('should create a crossword solution note when no notes exist', () => {
    const notes = notesService.getAllNotes();
    
    expect(notes.length).toBe(1);
    expect(notes[0].title).toBe('Crossword Puzzle Solution');
    expect(notes[0].content).toContain('LAP');
    expect(notes[0].content).toContain('LOCAL');
    expect(notes[0].content).toContain('APRIL');
    expect(notes[0].content).toContain('FALSE');
    expect(notes[0].content).toContain('SAGE');
    expect(notes[0].content).toContain('MAC');
    expect(notes[0].content).toContain('SOPH');
    expect(notes[0].content).toContain('MACRO');
    expect(notes[0].content).toContain('AGAIN');
    expect(notes[0].content).toContain('SPIKE');
  });

  it('should contain all the correct crossword answers', () => {
    const notes = notesService.getAllNotes();
    const crosswordNote = notes[0];

    // Check that all answers are present in the content
    const content = crosswordNote.content;

    // Across answers
    expect(content).toContain('1. LAP (3 letters)');
    expect(content).toContain('4. SOPH (4 letters)');
    expect(content).toContain('5. MACRO (5 letters)');
    expect(content).toContain('6. AGAIN (5 letters)');
    expect(content).toContain('7. SPIKE (5 letters)');

    // Down answers
    expect(content).toContain('1. LOCAL (5 letters)');
    expect(content).toContain('2. APRIL (5 letters)');
    expect(content).toContain('3. FALSE (5 letters)');
    expect(content).toContain('4. SAGE (4 letters)');
    expect(content).toContain('5. MAC (3 letters)');
  });

  it('should include the solution grid', () => {
    const notes = notesService.getAllNotes();
    const crosswordNote = notes[0];

    expect(crosswordNote.content).toContain('Solution Grid');
    expect(crosswordNote.content).toContain('■   L   A   P   ■');
    expect(crosswordNote.content).toContain('Puzzle solved!');
  });

  it('should not create duplicate crossword notes if notes already exist', () => {
    // Add a regular note
    notesService.addNote();
    
    // Create a new service instance (simulating app restart)
    const newNotesService = new NotesService();
    const notes = newNotesService.getAllNotes();
    
    // Should have 2 notes total (1 crossword + 1 regular), not 3
    expect(notes.length).toBe(2);
    
    // Only one should be the crossword solution
    const crosswordNotes = notes.filter(note => note.title === 'Crossword Puzzle Solution');
    expect(crosswordNotes.length).toBe(1);
  });
});