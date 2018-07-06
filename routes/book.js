const express = require('express');
const router = express.Router();
const book = require('../Controllers/BookController');
const bookModel = require('../Models/Books');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

router.post('/add', upload.single('image'), function(req, res, next) {
    console.log(req.file);
    const data = {
        title: req.body.title,
        bookBody: req.body.bookBody,
        views: 0,
        time: Date.now(),
        image: req.file.path,
        category: req.body.category,
        comments: []
    };
    bookModel.create(data, function(err) {
        if(err) res.json({err: err, message: 'Failed to add Book'});
        res.json({message: 'Book have been added Successfully!'});
    });
});

router.get('/search/:id', book.getBookById);
router.get('/find/:value', book.searchBook);
router.get('/deleteBook/:id', book.deleteBook);
router.get('/', book.getAllBooks);

module.exports = router;