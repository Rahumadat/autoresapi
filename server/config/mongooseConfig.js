

//para conectarnos a la BD
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/AuthorDb', { useNewUrlParser: true });

module.exports = mongoose;