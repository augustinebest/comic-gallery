const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

router.post('/add', userController.addSubscriber);
router.get('/', userController.getSubscriber);
router.get('/unsubscribe/:email', userController.deleteSubscriber);
// router.get('/mail', userController.sendMail);


module.exports = router;