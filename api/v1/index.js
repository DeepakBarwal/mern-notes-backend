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
  res.json({
    reply: 'note created'
  });
});

// Get a note by id
notesRouter.get('/:id', async (req, res) => {
  res.json({
    reply: 'note by id success'
  });
});

// Delete a note by id
notesRouter.delete('/:id', async (req, res) => {
  res.json({
    reply: 'note deleted'
  });
});

module.exports = {
    notesRouter
};