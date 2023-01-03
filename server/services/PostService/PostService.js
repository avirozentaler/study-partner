{ }
const PostRepo = require('../../repositories/postRepo/postRepo');

const addPost = async (reqBody) => {
    try {
            //   await PostModel.create({auther_name, category, sub_category, post, date, time_from, time_to});
        const PostDetails = { userId, auther_name, category, sub_category, post, date, time_from, time_to } = reqBody;
        const answer= PostRepo.addPost(PostDetails);
        console.log('SERVICE CALLED');
        return answer;
    }
    catch (err) {
        console.log('SERVICE ERROR -----------------------------');
        console.log(err);
        return err;
    }

    



}



module.exports = PostService = {
    addPost,

}