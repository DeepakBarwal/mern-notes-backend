const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/notes', (req, res) => {
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