const express = require('express');
const router = express.Router();

//Import controller functions
const { getAllPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postController');

//Get all posts
router.get('/', getAllPosts);

//Get one post
router.get('/:id', getPost);

//Create post
router.post('/', createPost);

//Update post
router.put('/:id', updatePost);

//Delete post
router.delete('/:delete', deletePost);

module.exports = router;