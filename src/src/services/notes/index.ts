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