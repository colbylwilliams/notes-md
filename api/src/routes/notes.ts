import { Router } from 'express';
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from '../controllers/notes';

const router = Router();

/**
 * @route   GET /api/notes
 * @desc    Get all notes
 */
router.get('/', getAllNotes);

/**
 * @route   GET /api/notes/:id
 * @desc    Get a note by ID
 */
router.get('/:id', getNoteById);

/**
 * @route   POST /api/notes
 * @desc    Create a new note
 */
router.post('/', createNote);

/**
 * @route   PUT /api/notes/:id
 * @desc    Update a note
 */
router.put('/:id', updateNote);

/**
 * @route   DELETE /api/notes/:id
 * @desc    Delete a note
 */
router.delete('/:id', deleteNote);

export default router;