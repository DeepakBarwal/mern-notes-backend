const express = require('express');
const notesRouter = express.Router();
const mongoose = require('mongoose');
const Note = require('../../db/models/note.model');

// Get all notes
notesRouter.get('/', async (req, res) => {
    try {
      const notes = await Note.find({});
      res.json({notes});
    } catch (error) {
      console.log(error);
    }
});

// Add a note
notesRouter.post('/', async (req, res) => {
  const newNote = new Note(req.body);
  const savedNote = await newNote.save();
  res.json({
    note: savedNote,
    success: true
  });
});

// Get a note by id
notesRouter.get('/:id', async (req, res) => {
  const noteId = req.params.id;
  try {
    const foundNote = await Note.findById(noteId);
    res.json({foundNote});
  } catch (error) {
    return console.log(error);
  }
});

// Delete a note by id
notesRouter.delete('/:id', async (req, res) => {
  const noteId = req.params.id;
  try {
    const removedNote = await Note.findByIdAndRemove(noteId);
    return res.json({removedNote});
  } catch (error) {
    return console.log(error);
  }
  res.json({
    reply: 'note deleted'
  });
});

module.exports = {
    notesRouter
};