const express = require('express');

const postsController = require('../controllers/PostsController');

const router = express.Router();


router.get('/api/posts/', postsController.GetPosts);

module.exports = router;