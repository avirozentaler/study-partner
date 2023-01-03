const PostModel = require('../../models/Post');
const UserModel = require('../../models/user');
const PostService = require('../../services/PostService/PostService');

const addPost = async(req,res)=>{
    try{
        const answer = await PostService.addPost(req.body);
        console.log(answer);
        res.status(200).send(answer);

        // const {userId,auther_name,category,sub_category,post,date,time_from,time_to} = req.body;
        // await PostModel.create({auther_name,category,sub_category,post,time_from,time_to});
        // const user = await UserModel.findOne({where:{id:userId}});
        // const newPost = await PostModel.create({user_id:userId,auther_name,category,sub_category,post,date,time_from,time_to})
        
        
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