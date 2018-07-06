const Book = require('../Models/Books');
const bodyparser = require('body-parser');

exports.getBookById = function(req, res) {
    const id = req.params.id;
    // res.send(id);
    Book.findById(id, function(err, book) {
        if(err) res.status(404).json({err: err, message: 'sorry, could not get book by Id'});
        res.status(200).json(book);
    });
}

exports.getAllBooks = function(req, res) {
    // res.send('Yaya1122!');
    Book.find({}, function(err, data) {
        if(err) res.status(404).json({err: err, message: 'Cannot get all books'});
        res.status(200).json(data);
    })
}

exports.searchBook = function(req, res) {
    const value = req.params.value;
    // res.send(value);
    Book.find({"title":{$regex: value, $options: "i"}}, function(err, books) {
        if(err) res.json({err: err, message: 'this book cannot be found'});
        res.json(books);
    });
}

exports.deleteBook = function(req, res) {
    const id = {_id: req.params.id};
    Book.remove(id, function(err) {
        if(err) res.json({err: err, message: 'this operation Failed!'});
        res.json({message: 'book have been deleted successfully!'});
    });
}

exports.getBookByParam = function(req, res) {
    const param = req.query;
    Book.find();
}