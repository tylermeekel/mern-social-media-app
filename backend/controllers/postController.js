const Post = require('../models/postModel')

//Controller for getting all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json({posts})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Controller for getting specific post
const getPost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        if(!post){
            throw Error('Post not found!')
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Controller for creating new post
const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const user_id = req.user;
        if(!title || !content){
            throw Error('Request must contain all required fields!')
        }
        const post = await Post.create({ title, content, user_id });
        res.status(200).json({post});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Controller for updating a post
const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const id = req.params.id;
        const user_id = req.user;

        if(!title || !content){
            throw Error('Request must contain all required fields!')
        }
        const post = await Post.findByIdAndUpdate(id, { title, content, user_id });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Controller for deleting a post
const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        
        if(post.user_id !== req.user){
            throw Error("This is not your post to delete")
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };