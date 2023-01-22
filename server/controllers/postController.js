const PostModel = require('../models/Post');
const UserModel = require('../models/User');
const PostService = require('../services/PostService');

const addPost = async (req, res) => {
    try {
        const answer = await PostService.addPost(req.body);
        console.log(answer);
        res.status(200).send(answer);
    }
    catch (err) {
        res.status(401).send(err);
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await PostService.getPosts();
        res.status(200).send(posts);
    }
    catch (err) {
        console.log(err);
        res.status(404).send(err.message);
    }
}

const updatePost = async (req, res) => {
    try {
        const answer = await PostService.updatePost(req.body);
        if(answer.message){
            console.log(answer.message);
            throw new Error(answer.message);
        }
        res.status(200).send(answer);
    }
    catch (err) {
        res.status(400).send(err.message);
    }

}

const deletePost = async (req, res) => {
    try {
        const answer = await PostService.deletePost(req.body);
        res.status(200).send(answer);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

module.exports = {
    addPost,
    getPosts,
    updatePost,
    deletePost
}

