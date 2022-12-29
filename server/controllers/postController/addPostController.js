const PostModel = require('../../models/Post');
const UserModel = require('../../models/user');


const addPost = async(req,res)=>{
    try{
        const {userId,auther_name,category,sub_category,post,time_from,time_to} = req.body;
        await PostModel.create({auther_name,category,sub_category,post,time_from,time_to});
        const user = await UserModel.findByPk(userId);
        const newPost = await PostModel.create({user_id:userId,auther_name,category,sub_category,post,time_from,time_to})
        user.addPost(newPost);
        res.status(200).send('post added');
    }
    catch(err){
        res.status(401).send(err.message);
    }
}

const getPosts = async(req,res)=>{
try{
   const posts = await PostModel.findAll();
   res.status(200).send(posts);
}
catch(err){
    res.status(404).send(err);
}

}




module.exports = {
    addPost,
    getPosts
}