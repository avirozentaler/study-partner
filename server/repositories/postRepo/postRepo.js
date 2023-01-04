const Models = require('../../models/Models');


const addPost = async (details) => {
    try {

        await Models.UserModel.findOne({where:{id:details.userId}});
        await Models.PostModel.create({ user_id: details.userId, auther_name:details.auther_name, category:details.category, sub_category:details.sub_category, post:details.post, date:details.date, time_from:details.time_from, time_to:details.time_to });
        return "post added";
    }
    catch (err) {
        console.log('REPO ERROR -----------------------------');
        console.log(err);
        return err;
    }
    

}

const getPosts = async () => {
    try {

        const answer =await Models.PostModel.findAll();
        return answer;
    }
    catch (err) {
        console.log('REPO ERROR -----------------------------');
        console.log(err);
        return err;
    }
    
    
}
module.exports = PostRepo = {
    addPost,
    getPosts,

}



