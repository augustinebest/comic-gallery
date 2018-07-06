var express = require('express');
var router = express.Router();

var commentController = require('../controllers/commentController')

router.post('/create', commentController.addComment)
router.get('/post/:post', commentController.viewComments)
router.get('/delete/:id',commentController.deleteComment)
//router.post('/update/:id',commentController.updateComment)
module.exports = router;