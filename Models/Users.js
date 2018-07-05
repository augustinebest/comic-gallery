const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type: String, unique: true},
    preferenceId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
});

module.exports = mongoose.model('User', userSchema);