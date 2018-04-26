var express = require('express');

var router = express.Router();
var basicController = require('./Controllers/basicController');
var userController = require('./Controllers/userController');
var postController = require('./Controllers/postController');
var commentController = require('./Controllers/commentController');

router.get('/', basicController.get);

router.post('/signup',  userController.post);

router.post('/post', postController.post);

router.get('/posts', postController.getAll);

router.post('/comment', commentController.post);

module.exports = router;