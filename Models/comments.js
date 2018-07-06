const mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    time: Date,
    commentBody: String,
    user: [{type: mongoose.Schema.ObjectId, ref: 'user'}],
    post: [{type: mongoose.Schema.ObjectId, ref: 'post'}]
});

module.exports = mongoose.model('comment', commentSchema);