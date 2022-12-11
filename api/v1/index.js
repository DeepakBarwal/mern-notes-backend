const express = require('express');
const notesRouter = express.Router();

notesRouter.get('/', (req, res) => {
    const notesData = [
        {
          text: "Do homework",
          link: "https://google.com"
        },
        {
          text: "Order food",
          link: "https://zomato.com"
        }
      ];
      res.json({ notes: notesData });
});

module.exports = {
    notesRouter
};