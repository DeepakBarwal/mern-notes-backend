const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const {notesRouter} = require('./api/v1/index');
require('./db');

app.use('/notes', cors(corsOptions), notesRouter);

app.listen(PORT, () => {
  console.log(`MERN Notes Backend App running on http://localhost:${PORT}`)
});