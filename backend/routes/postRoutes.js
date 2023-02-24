const express = require('express');
const router = express.Router();

//Import controller functions
const { getAllPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postController');

//Import middleware
const requireAuth = require('../middleware/requireAuth');

//Get all posts
router.get('/', getAllPosts);

//Get one post
router.get('/:id', getPost);

//Create post, guarded by auth
router.post('/', requireAuth, createPost);

//Update post, guarded by auth
router.put('/:id', requireAuth, updatePost);

//Delete post, guarded by auth
router.delete('/:id', requireAuth, deletePost);

module.exports = router;