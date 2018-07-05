const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

router.post('/', userController.addSubscriber);
// router.get('/mail', userController.sendMail);


module.exports = router;