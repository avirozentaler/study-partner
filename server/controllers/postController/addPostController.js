const PostModel = require('../../models/Post');
const UserModel = require('../../models/user');
const PostService = require('../../services/PostService/PostService');

const addPost = async(req,res)=>{
    try{
        const answer = await PostService.addPost(req.body);
        console.log(answer);
        res.status(200).send(answer);
    }
    catch(err){
        console.log('CONTROLLER ERROR -----------------------------');
        res.status(401).send(err);
    }
}

const getPosts = async(req,res)=>{
try{
   const posts = await PostModel.findAll();
   res.status(200).send(posts);
}
catch(err){
    console.log(err);
    res.status(404).send(err);
}
}

module.exports = {
    addPost,
    getPosts
}