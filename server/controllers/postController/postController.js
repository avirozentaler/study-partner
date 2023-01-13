const PostModel = require('../../models/Post');
const UserModel = require('../../models/user');
const PostService = require('../../services/PostService/PostService');

const addPost = async (req, res) => {
    try {
        const answer = await PostService.addPost(req.body);
        console.log(answer);
        res.status(200).send(answer);
    }
    catch (err) {
        console.log('CONTROLLER ERROR -----------------------------');
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
        res.status(404).send(err);
    }
}


const updatePost = async (req, res) => {
    console.log('ypdate first');
    try {
        const answer = await PostService.updatePost(req.body);
        res.status(200).send(answer);
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err);
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

