const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/notes-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('DB is now connected');
});