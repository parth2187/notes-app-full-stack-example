const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes.controller');

router.get('/',notesController.getNotes);
router.post('/',notesController.addNotes);
router.get('/:id',notesController.getNoteById);
router.delete('/:id',notesController.deleteNote);

module.exports = router;
