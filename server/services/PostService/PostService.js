const PostRepo = require('../../repositories/postRepo/postRepo');

const addPost = async (reqBody) => {
    try {
        const PostDetails = { userId, auther_name, category, sub_category, post, date, time_from, time_to } = reqBody;
        
        const answer = await PostRepo.addPost(PostDetails);

        return answer;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

const getPosts = async () => {
    try {
        const answer = await PostRepo.getPosts();
        return answer;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = PostService = {
    addPost,
    getPosts

}