const PostModel = require('../../models/Post');
const UserModel = require('../../models/user');

const addPost = async(req,res)=>{
    try{
        const {userId,auther_name,category,sub_category,post,time_from,time_to} = req.body;
        await PostModel.create({auther_name,category,sub_category,post,time_from,time_to});
        const user = await UserModel.findByPk(userId);tus
        res.status(200).send('post added');
    }
    catch(err){
        res.status(401).send(err.message);
    }
}




module.exports = {
    addPost 
}