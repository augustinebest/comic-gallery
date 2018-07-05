const express = require('express');
const router = express.Router();
const category = require('../Controllers/CategoryController');

router.post('/add', category.addCategory);
router.get('/', category.getCategory);

module.exports = router;