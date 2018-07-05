const mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    date: Date.now(),
    coverImg: String,
    bookBody: String;
})