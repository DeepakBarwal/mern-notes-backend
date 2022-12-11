const express = require('express');
const notesRouter = express.Router();
const mongoose = require('mongoose');
const Note = require('../../db/models/note.model');

notesRouter.get('/', async (req, res) => {
    // const notesData = [
    //     {
    //       text: "Do homework",
    //       link: "https://google.com"
    //     },
    //     {
    //       text: "Order food",
    //       link: "https://zomato.com"
    //     }
    //   ];
    //   res.json({ notes: notesData });
    const notes = await Note.find({});
    console.log(notes);
    res.json({notes});
});

module.exports = {
    notesRouter
};