const mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    date: Date.now(),
    coverImg: String,
    bookBody: String,
    views: Number,
    Comment: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}],
    
})