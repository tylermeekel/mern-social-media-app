//Controller for getting all posts
const getAllPosts = (req, res) => {
    res.status(200).json({message: "Get all posts"})
}

//Controller for getting specific post
const getPost = (req, res) => {
    res.status(200).json({message: `Get post ${req.params.id}`})
}

//Controller for creating new post
const createPost = (req, res) => {
    res.status(200).json({message: `Create new post`})
}

//Controller for updating a post
const updatePost = (req, res) => {
    res.status(200).json({message: `Update post ${req.params.id}`})
}

//Controller for deleting a post
const deletePost = (req, res) => {
    res.status(200).json({message: `Delete post ${req.params.id}`})
}

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };