const mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    // date: Date.now(),
    title: String,
    bookBody: String,
    views: Number,
    time: Date,
    image: String,
    category: [{type: mongoose.Schema.ObjectId, ref: 'Category'}],
    comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Book', bookSchema);