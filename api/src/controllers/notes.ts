import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Note } from '../models/note';

// In-memory storage for notes (would be replaced with a database in a real app)
let notes: Note[] = [];

/**
 * Get all notes
 */
export const getAllNotes = (req: Request, res: Response) => {
  res.status(200).json(notes);
};

/**
 * Get a note by ID
 */
export const getNoteById = (req: Request, res: Response) => {
  const { id } = req.params;
  const note = notes.find(note => note.id === id);
  
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }
  
  res.status(200).json(note);
};

/**
 * Create a new note
 */
export const createNote = (req: Request, res: Response) => {
  const { title, content } = req.body;
  const now = new Date();
  
  const newNote: Note = {
    id: uuidv4(),
    title: title || 'Untitled Note',
    content: content || '# Untitled Note\n\nStart writing your note here...',
    createdAt: now,
    updatedAt: now
  };
  
  notes = [newNote, ...notes];
  
  res.status(201).json(newNote);
};

/**
 * Update an existing note
 */
export const updateNote = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  
  const noteIndex = notes.findIndex(note => note.id === id);
  
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }
  
  const updatedNote: Note = {
    ...notes[noteIndex],
    title: title || notes[noteIndex].title,
    content: content || notes[noteIndex].content,
    updatedAt: new Date()
  };
  
  notes = notes.map(note => note.id === id ? updatedNote : note);
  
  res.status(200).json(updatedNote);
};

/**
 * Delete a note by ID
 */
export const deleteNote = (req: Request, res: Response) => {
  const { id } = req.params;
  
  const noteExists = notes.some(note => note.id === id);
  
  if (!noteExists) {
    return res.status(404).json({ message: 'Note not found' });
  }
  
  notes = notes.filter(note => note.id !== id);
  
  res.status(204).send();
};