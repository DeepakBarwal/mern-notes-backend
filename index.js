const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

app.get('/notes', cors(corsOptions), (req, res) => {
  const notes = [
    {
      text: "Do homework",
      link: "https://google.com"
    },
    {
      text: "Order food",
      link: "https://zomato.com"
    }
  ];
  res.json({ notes });
});

app.listen(PORT, () => {
  console.log(`MERN Notes Backend App running on http://localhost:${PORT}`)
});