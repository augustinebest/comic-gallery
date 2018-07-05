const mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    date: Date.now(),
    coverImg: String,
    bookBody: String,
    views: Number,
    comment: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}],
    categoryId: [{type: mongoose.Schema.ObjectId, ref: 'Category'}]
});

module.exports = mongoose.model('Book', bookSchema);