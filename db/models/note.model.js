const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: String,
    link: String
});

const Note = mongoose.model('note', noteSchema);

module.exports = Note;